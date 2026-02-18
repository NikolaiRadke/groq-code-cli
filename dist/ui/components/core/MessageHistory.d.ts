import { ChatMessage } from '../../hooks/useAgent.js';
interface Usage {
    queue_time: number;
    prompt_tokens: number;
    prompt_time: number;
    completion_tokens: number;
    completion_time: number;
    total_tokens: number;
    total_requests?: number;
    total_time: number;
}
interface MessageHistoryProps {
    messages: ChatMessage[];
    showReasoning?: boolean;
    usageData?: Usage;
}
export default function MessageHistory({ messages, showReasoning, usageData }: MessageHistoryProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MessageHistory.d.ts.map