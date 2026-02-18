import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Box, Text } from 'ink';
import ToolHistoryItem from '../display/ToolHistoryItem.js';
import Stats from '../display/Stats.js';
import { parseMarkdown, parseInlineElements } from '../../../utils/markdown.js';
export default function MessageHistory({ messages, showReasoning = true, usageData }) {
    const scrollRef = useRef(null);
    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollToBottom?.();
        }
    }, [messages.length]);
    const formatTimestamp = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const renderMessage = (message) => {
        const timestamp = formatTimestamp(message.timestamp);
        switch (message.role) {
            case 'user':
                return (_jsxs(Box, { marginBottom: 1, children: [_jsxs(Text, { color: "cyan", bold: true, children: ['>', " "] }), _jsx(Text, { color: "gray", children: message.content })] }, message.id));
            case 'assistant':
                const markdownElements = parseMarkdown(message.content);
                return (_jsxs(Box, { marginBottom: 1, flexDirection: "column", children: [message.reasoning && showReasoning && (_jsx(Box, { marginBottom: 1, children: _jsx(Text, { italic: true, dimColor: true, children: message.reasoning }) })), message.content && markdownElements.map((element, index) => {
                            switch (element.type) {
                                case 'code-block':
                                    return (_jsx(Box, { marginY: 1, paddingLeft: 2, children: _jsx(Text, { color: "cyan", children: element.content }) }, index));
                                case 'heading':
                                    return (_jsx(Text, { bold: true, color: element.level && element.level <= 2 ? "yellow" : "white", children: element.content }, index));
                                case 'mixed-line':
                                    const inlineElements = parseInlineElements(element.content);
                                    return (_jsx(Text, { children: inlineElements.map((inlineElement, inlineIndex) => {
                                            switch (inlineElement.type) {
                                                case 'code':
                                                    return _jsx(Text, { color: "cyan", children: inlineElement.content }, inlineIndex);
                                                case 'bold':
                                                    return _jsx(Text, { bold: true, children: inlineElement.content }, inlineIndex);
                                                case 'italic':
                                                    return _jsx(Text, { italic: true, children: inlineElement.content }, inlineIndex);
                                                default:
                                                    return _jsx(Text, { children: inlineElement.content }, inlineIndex);
                                            }
                                        }) }, index));
                                default:
                                    return _jsx(Text, { children: element.content }, index);
                            }
                        })] }, message.id));
            case 'system':
                // Handle special system message types
                if (message.type === 'stats') {
                    return (_jsx(Box, { marginBottom: 1, children: _jsx(Stats, { usage: message.usageSnapshot || usageData }) }, message.id));
                }
                return (_jsx(Box, { marginBottom: 1, children: _jsx(Text, { color: "yellow", italic: true, children: message.content }) }, message.id));
            case 'tool_execution':
                if (message.toolExecution) {
                    return (_jsx(Box, { marginBottom: 1, children: _jsx(ToolHistoryItem, { execution: message.toolExecution }) }, message.id));
                }
                return (_jsx(Box, { marginBottom: 1, children: _jsxs(Text, { color: "blue", children: ["Tool: ", message.content] }) }, message.id));
            default:
                return (_jsx(Box, { marginBottom: 1, children: _jsxs(Text, { color: "gray", dimColor: true, children: ["Unknown: ", message.content] }) }, message.id));
        }
    };
    return (_jsx(Box, { ref: scrollRef, flexDirection: "column", flexGrow: 1, children: messages.length === 0 ? (_jsxs(Box, { justifyContent: "center", paddingY: 2, flexDirection: "column", alignItems: "center", children: [_jsx(Text, { color: "gray", dimColor: true, italic: true, children: "Ask for help with coding tasks, debugging issues, or explaining code." }), _jsx(Text, { color: "gray", dimColor: true, italic: true, children: "Type /help for available commands and features." })] })) : (messages.map(renderMessage)) }));
}
//# sourceMappingURL=MessageHistory.js.map