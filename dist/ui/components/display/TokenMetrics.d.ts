interface TokenMetricsProps {
    isActive: boolean;
    isPaused: boolean;
    startTime: Date | null;
    endTime: Date | null;
    pausedTime: number;
    completionTokens: number;
}
export default function TokenMetrics({ isActive, isPaused, startTime, endTime, pausedTime, completionTokens }: TokenMetricsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=TokenMetrics.d.ts.map