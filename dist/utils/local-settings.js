import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
const CONFIG_DIR = '.groq'; // In home directory
const CONFIG_FILE = 'local-settings.json';
export class ConfigManager {
    configPath;
    constructor() {
        const homeDir = os.homedir();
        this.configPath = path.join(homeDir, CONFIG_DIR, CONFIG_FILE);
    }
    ensureConfigDir() {
        const configDir = path.dirname(this.configPath);
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }
    }
    readConfig() {
        try {
            if (!fs.existsSync(this.configPath)) {
                return {};
            }
            const configData = fs.readFileSync(this.configPath, 'utf8');
            return JSON.parse(configData);
        }
        catch (error) {
            console.warn('Failed to read config file:', error);
            return {};
        }
    }
    writeConfig(config) {
        this.ensureConfigDir();
        fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2), {
            mode: 0o600 // Read/write for owner only
        });
        // Ensure restrictive perms even if file already existed
        try {
            fs.chmodSync(this.configPath, 0o600);
        }
        catch {
            // noop (esp. on Windows where chmod may not be supported)
        }
    }
    getApiKey() {
        const config = this.readConfig();
        return config.groqApiKey || null;
    }
    setApiKey(apiKey) {
        try {
            const config = this.readConfig();
            config.groqApiKey = apiKey;
            this.writeConfig(config);
        }
        catch (error) {
            throw new Error(`Failed to save API key: ${error}`);
        }
    }
    clearApiKey() {
        try {
            const config = this.readConfig();
            delete config.groqApiKey;
            if (Object.keys(config).length === 0) {
                if (fs.existsSync(this.configPath)) {
                    fs.unlinkSync(this.configPath);
                }
            }
            else {
                this.writeConfig(config);
            }
        }
        catch (error) {
            console.warn('Failed to clear API key:', error);
        }
    }
    getDefaultModel() {
        const config = this.readConfig();
        return config.defaultModel || null;
    }
    setDefaultModel(model) {
        try {
            const config = this.readConfig();
            config.defaultModel = model;
            this.writeConfig(config);
        }
        catch (error) {
            throw new Error(`Failed to save default model: ${error}`);
        }
    }
    getProxy() {
        const config = this.readConfig();
        return config.groqProxy || null;
    }
    setProxy(proxy) {
        try {
            // Validate proxy input
            const trimmed = proxy?.trim?.() ?? '';
            if (!trimmed) {
                throw new Error('Proxy must be a non-empty string');
            }
            // Validate URL format and protocol
            let parsedUrl;
            try {
                parsedUrl = new URL(trimmed);
            }
            catch {
                throw new Error(`Invalid proxy URL: ${trimmed}`);
            }
            const allowedProtocols = new Set(['http:', 'https:', 'socks:', 'socks4:', 'socks5:']);
            if (!allowedProtocols.has(parsedUrl.protocol)) {
                throw new Error(`Unsupported proxy protocol: ${parsedUrl.protocol}`);
            }
            const config = this.readConfig();
            config.groqProxy = trimmed;
            this.writeConfig(config);
        }
        catch (error) {
            // Preserve original error via cause for better debugging
            throw new Error(`Failed to save proxy: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    clearProxy() {
        try {
            const config = this.readConfig();
            delete config.groqProxy;
            if (Object.keys(config).length === 0) {
                if (fs.existsSync(this.configPath)) {
                    fs.unlinkSync(this.configPath);
                }
            }
            else {
                this.writeConfig(config);
            }
        }
        catch (error) {
            console.warn('Failed to clear proxy:', error);
        }
    }
}
//# sourceMappingURL=local-settings.js.map