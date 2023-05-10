declare global {
  interface Window {
    myAPI: MyAPI;
  }
}
export interface MyAPI {
  save: (text: string) => void;
  load: () => Promise<number>;
}
