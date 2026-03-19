import { type ChildProcess } from "node:child_process";
export declare function cftPlatform(): string;
export interface ChromeInstance {
    process: ChildProcess;
    port: number;
    kill: () => void;
}
export interface LaunchChromeOptions {
    headless?: boolean;
    /** Persistent Chrome profile dir. Overrides WEBREEL_USER_DATA_DIR env var.
     *  When set, the dir is NOT deleted on kill() — cookies/localStorage persist. */
    userDataDir?: string;
}
export declare function launchChrome(options?: LaunchChromeOptions): Promise<ChromeInstance>;
//# sourceMappingURL=chrome.d.ts.map
