// Do not edit. Autogenerated by generate-scripts-declarations.ts
import type { Run } from "../../.kit/types/kit"

type AvailableScript = 
  | "base64"
  | "get-autocompletion-for-the-run-command"
  | "windows-kill-any-running-process-by-name"
  | "new-post";

declare module "@johnlindquist/kit/types/kit" {
  export interface Run {
    // biome-ignore lint/style/useShorthandFunctionType: <explanation>
    (command?: AvailableScript, ...args: string[]): Promise<any>
  }
}

declare global {
  var run: Run
}