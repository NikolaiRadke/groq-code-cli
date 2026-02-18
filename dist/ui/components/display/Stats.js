import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
export default function Stats({ usage }) {
    const formatTime = (seconds) => {
        if (seconds < 1) {
            return `${(seconds * 1000).toFixed(0)}ms`;
        }
        else if (seconds < 60) {
            return `${seconds.toFixed(1)}s`;
        }
        else {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}m ${remainingSeconds.toFixed(1)}s`;
        }
    };
    // Extract values from API response
    const cachedTokens = usage?.prompt_tokens_details?.cached_tokens || 0;
    const promptTokens = usage?.prompt_tokens || 0;
    const cachedPercent = promptTokens > 0 ? ((cachedTokens / promptTokens) * 100).toFixed(1) : 0;
    const stats = {
        totalRequests: usage?.total_requests || 0,
        processingTime: formatTime(usage?.total_time || 0),
        promptTokens: promptTokens,
        completionTokens: usage?.completion_tokens || 0,
        cachedTokens,
        cachedPercent,
    };
    return (_jsxs(Box, { flexDirection: "column", borderStyle: "round", borderColor: "cyan", paddingX: 1, children: [_jsx(Box, { marginBottom: 1, children: _jsx(Text, { color: "cyan", bold: true, children: "\uD83D\uDCCA Session Stats" }) }), _jsxs(Box, { flexDirection: "column", marginBottom: 2, children: [_jsx(Box, { justifyContent: "flex-start", marginBottom: 1, borderStyle: "single", borderColor: "gray", borderTop: false, borderLeft: false, borderRight: false, paddingBottom: 0, children: _jsx(Text, { color: "gray", children: "Performance" }) }), _jsxs(Box, { flexDirection: "row", justifyContent: "center", gap: 4, children: [_jsxs(Box, { flexDirection: "column", alignItems: "center", paddingX: 3, children: [_jsx(Text, { color: "blue", bold: true, children: stats.totalRequests }), _jsx(Text, { color: "gray", dimColor: true, children: "Requests" })] }), _jsxs(Box, { flexDirection: "column", alignItems: "center", paddingX: 3, children: [_jsx(Text, { color: "yellow", bold: true, children: stats.processingTime }), _jsx(Text, { color: "gray", dimColor: true, children: "Response Time" })] })] })] }), _jsxs(Box, { flexDirection: "column", children: [_jsx(Box, { justifyContent: "flex-start", marginBottom: 1, borderStyle: "single", borderColor: "gray", borderTop: false, borderLeft: false, borderRight: false, paddingBottom: 0, children: _jsx(Text, { color: "gray", children: "Token Usage" }) }), _jsxs(Box, { flexDirection: "row", justifyContent: "center", gap: 4, children: [_jsxs(Box, { flexDirection: "column", alignItems: "center", paddingX: 3, children: [_jsx(Text, { color: "cyan", bold: true, children: stats.promptTokens.toLocaleString() }), _jsx(Text, { color: "gray", dimColor: true, children: "Input Tokens" })] }), _jsxs(Box, { flexDirection: "column", alignItems: "center", paddingX: 3, children: [_jsx(Text, { color: "green", bold: true, children: stats.completionTokens.toLocaleString() }), _jsx(Text, { color: "gray", dimColor: true, children: "Output Tokens" })] }), usage?.prompt_tokens_details && (_jsxs(Box, { flexDirection: "column", alignItems: "center", paddingX: 3, children: [_jsxs(Text, { color: "magenta", bold: true, children: [stats.cachedTokens.toLocaleString(), " (", stats.cachedPercent, "%)"] }), _jsx(Text, { color: "gray", dimColor: true, children: "Cached" })] }))] })] })] }));
}
//# sourceMappingURL=Stats.js.map