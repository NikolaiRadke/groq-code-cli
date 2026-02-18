interface ApiUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}
export declare function useTokenMetrics(): {
    startRequest: () => void;
    addApiTokens: (usage: ApiUsage) => void;
    pauseMetrics: () => void;
    resumeMetrics: () => void;
    completeRequest: () => void;
    resetMetrics: () => void;
    completionTokens: number;
    startTime: Date | null;
    endTime: Date | null;
    pausedTime: number;
    isPaused: boolean;
    isActive: boolean;
};
export {};
//# sourceMappingURL=useTokenMetrics.d.ts.map