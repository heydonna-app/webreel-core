import CDP from "chrome-remote-interface";
export async function connectCDP(port) {
    return (await CDP({ port }));
}
//# sourceMappingURL=cdp.js.map