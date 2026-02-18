interface ApiUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    total_time?: number;
}
interface SessionStats {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    totalRequests: number;
    totalTime: number;
}
export declare function useSessionStats(): {
    sessionStats: SessionStats;
    addSessionTokens: (usage: ApiUsage) => void;
    clearSessionStats: () => void;
};
export {};
//# sourceMappingURL=useSessionStats.d.ts.map