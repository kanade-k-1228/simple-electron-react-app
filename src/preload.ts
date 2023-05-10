import { contextBridge, ipcRenderer } from "electron";
import { IPCKeys } from "./ipckey";

contextBridge.exposeInMainWorld("myAPI", {
  save: (text: string) => ipcRenderer.send(IPCKeys.SAVE, text),
  load: () => ipcRenderer.invoke(IPCKeys.LOAD),
});
console.log("preloaded!");
