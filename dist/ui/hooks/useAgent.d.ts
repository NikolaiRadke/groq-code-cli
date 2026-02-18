import { Agent } from '../../core/agent.js';
export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system' | 'tool' | 'tool_execution';
    content: string;
    reasoning?: string;
    timestamp: Date;
    toolExecution?: ToolExecution;
    type?: string;
    usageSnapshot?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
        total_requests: number;
        total_time: number;
        queue_time: number;
        prompt_time: number;
        completion_time: number;
    };
}
export interface ToolExecution {
    id: string;
    name: string;
    args: Record<string, any>;
    status: 'pending' | 'approved' | 'executing' | 'completed' | 'failed' | 'canceled';
    result?: any;
    needsApproval?: boolean;
}
export declare function useAgent(agent: Agent, onStartRequest?: () => void, onAddApiTokens?: (usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    total_time?: number;
}) => void, onPauseRequest?: () => void, onResumeRequest?: () => void, onCompleteRequest?: () => void): {
    messages: ChatMessage[];
    userMessageHistory: string[];
    isProcessing: boolean;
    currentToolExecution: ToolExecution | null;
    pendingApproval: {
        toolName: string;
        toolArgs: Record<string, any>;
        resolve: (approvalResult: {
            approved: boolean;
            autoApproveSession?: boolean;
        }) => void;
    } | null;
    pendingMaxIterations: {
        maxIterations: number;
        resolve: (shouldContinue: boolean) => void;
    } | null;
    pendingError: {
        error: string;
        resolve: (shouldRetry: boolean) => void;
    } | null;
    sessionAutoApprove: boolean;
    showReasoning: boolean;
    sendMessage: (userInput: string) => Promise<void>;
    approveToolExecution: (approved: boolean, autoApproveSession?: boolean) => void;
    respondToMaxIterations: (shouldContinue: boolean) => void;
    respondToError: (shouldRetry: boolean) => void;
    addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => string;
    setApiKey: (apiKey: string) => void;
    clearHistory: () => void;
    toggleAutoApprove: () => void;
    toggleReasoning: () => void;
    interruptRequest: () => void;
};
//# sourceMappingURL=useAgent.d.ts.map