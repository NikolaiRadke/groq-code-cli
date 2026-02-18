import type { Agent } from 'http';
/**
 * Creates an HTTP/SOCKS proxy agent based on an explicit override or environment variables.
 *
 * Resolves a proxy URL (override -> HTTPS_PROXY/https_proxy -> HTTP_PROXY/http_proxy). If no proxy is configured, returns `undefined`. If the resolved URL is not a valid URL, the function logs an error and returns `undefined`. Otherwise it returns a `SocksProxyAgent` for SOCKS schemes (`socks://`, `socks5://`, `socks4://`) or an `HttpsProxyAgent` for other schemes. If agent construction fails the error is logged and `undefined` is returned.
 *
 * @param proxyOverride - Optional explicit proxy URL to use instead of environment variables.
 * @returns A Node `Agent` configured for the proxy, or `undefined` when no valid proxy is available or agent creation fails.
 */
export declare function getProxyAgent(proxyOverride?: string): Agent | undefined;
/**
 * Returns information about the configured proxy (from an explicit override or environment).
 *
 * If a proxy URL is found returns an object with `enabled: true`, a sanitized `url` (credentials removed or obfuscated) and the proxy `type` (`'socks'` or `'http'`). If no proxy is configured returns `{ enabled: false }`.
 *
 * The `enabled` field indicates whether the proxy URL is valid and usable.
 *
 * @param proxyOverride - Optional explicit proxy URL to use instead of environment variables.
 */
export declare function getProxyInfo(proxyOverride?: string): {
    enabled: boolean;
    url?: string;
    type?: string;
};
//# sourceMappingURL=proxy-config.d.ts.map