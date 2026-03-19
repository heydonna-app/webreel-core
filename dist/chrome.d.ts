import { type ChildProcess } from "node:child_process";
export declare function cftPlatform(): string;
export interface ChromeInstance {
    process: ChildProcess;
    port: number;
    kill: () => void;
}
export interface LaunchChromeOptions {
    headless?: boolean;
}
export declare function launchChrome(options?: LaunchChromeOptions): Promise<ChromeInstance>;
//# sourceMappingURL=chrome.d.ts.map