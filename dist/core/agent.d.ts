export declare class Agent {
    private client;
    private messages;
    private apiKey;
    private model;
    private temperature;
    private sessionAutoApprove;
    private systemMessage;
    private configManager;
    private proxyOverride?;
    private onToolStart?;
    private onToolEnd?;
    private onToolApproval?;
    private onThinkingText?;
    private onFinalMessage?;
    private onMaxIterations?;
    private onApiUsage?;
    private onError?;
    private requestCount;
    private currentAbortController;
    private isInterrupted;
    private constructor();
    static create(model: string, temperature: number, systemMessage: string | null, debug?: boolean, proxyOverride?: string): Promise<Agent>;
    private buildDefaultSystemMessage;
    setToolCallbacks(callbacks: {
        onToolStart?: (name: string, args: Record<string, any>) => void;
        onToolEnd?: (name: string, result: any) => void;
        onToolApproval?: (toolName: string, toolArgs: Record<string, any>) => Promise<{
            approved: boolean;
            autoApproveSession?: boolean;
        }>;
        onThinkingText?: (content: string) => void;
        onFinalMessage?: (content: string) => void;
        onMaxIterations?: (maxIterations: number) => Promise<boolean>;
        onApiUsage?: (usage: {
            prompt_tokens: number;
            completion_tokens: number;
            total_tokens: number;
            total_time?: number;
        }) => void;
        onError?: (error: string) => Promise<boolean>;
    }): void;
    setApiKey(apiKey: string): void;
    saveApiKey(apiKey: string): void;
    clearApiKey(): void;
    clearHistory(): void;
    setModel(model: string): void;
    getCurrentModel(): string;
    setSessionAutoApprove(enabled: boolean): void;
    interrupt(): void;
    chat(userInput: string): Promise<void>;
    private executeToolCall;
}
//# sourceMappingURL=agent.d.ts.map