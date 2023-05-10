import path from "path";
import { BrowserWindow, app, ipcMain } from "electron";
import * as fs from "fs";
import { IPCKeys } from "./ipckey";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("dist/index.html");
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  // Receive number and write into file
  ipcMain.on(IPCKeys.SAVE, (_, txt) => {
    fs.writeFileSync("./test/cnt", txt);
  });
  // Read file and send to webview process
  ipcMain.handle(IPCKeys.LOAD, () => {
    const txt = fs.readFileSync("./test/cnt").toString();
    return Number(txt);
  });
  createWindow();
});

app.once("window-all-closed", () => app.quit());
