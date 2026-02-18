interface Usage {
    queue_time: number;
    prompt_tokens: number;
    prompt_time: number;
    completion_tokens: number;
    completion_time: number;
    total_tokens: number;
    total_requests?: number;
    total_time: number;
    prompt_tokens_details?: {
        cached_tokens: number;
    };
}
interface StatsProps {
    usage?: Usage;
}
export default function Stats({ usage }: StatsProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stats.d.ts.map