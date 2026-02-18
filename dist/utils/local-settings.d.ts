export declare class ConfigManager {
    private configPath;
    constructor();
    private ensureConfigDir;
    private readConfig;
    private writeConfig;
    getApiKey(): string | null;
    setApiKey(apiKey: string): void;
    clearApiKey(): void;
    getDefaultModel(): string | null;
    setDefaultModel(model: string): void;
    getProxy(): string | null;
    setProxy(proxy: string): void;
    clearProxy(): void;
}
//# sourceMappingURL=local-settings.d.ts.map