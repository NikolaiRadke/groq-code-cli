import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
import DiffPreview from './DiffPreview.js';
import { formatToolParams } from '../../../tools/tools.js';
export default function ToolHistoryItem({ execution }) {
    const { name, args, status, result } = execution;
    const getStatusIcon = () => {
        switch (status) {
            case 'completed':
                return '🟢';
            case 'failed':
                return '🔴';
            case 'canceled':
                return '🚫';
            default:
                return '?';
        }
    };
    const getStatusColor = () => {
        switch (status) {
            case 'completed':
                return 'green';
            case 'failed':
                return 'red';
            case 'canceled':
                return 'gray';
            default:
                return 'white';
        }
    };
    const shouldShowDiff = (toolName) => {
        return ['create_file', 'edit_file'].includes(toolName);
    };
    const renderResult = (toolName, result) => {
        const content = result.content;
        // Handle execute_command output format
        if (typeof content === 'string' && content.includes('stdout:') && content.includes('stderr:')) {
            const lines = content.split('\n');
            let stdoutLines = [];
            let stderrLines = [];
            let currentSection = '';
            for (const line of lines) {
                if (line.startsWith('stdout:')) {
                    currentSection = 'stdout';
                    const stdoutContent = line.substring(7).trim();
                    if (stdoutContent)
                        stdoutLines.push(stdoutContent);
                }
                else if (line.startsWith('stderr:')) {
                    currentSection = 'stderr';
                    const stderrContent = line.substring(7).trim();
                    if (stderrContent)
                        stderrLines.push(stderrContent);
                }
                else if (currentSection === 'stdout') {
                    stdoutLines.push(line);
                }
                else if (currentSection === 'stderr') {
                    stderrLines.push(line);
                }
            }
            return (_jsxs(_Fragment, { children: [stdoutLines.length > 0 && stdoutLines.some(line => line.trim()) && (_jsx(Text, { color: "white", children: stdoutLines.join('\n').trimEnd() })), stderrLines.length > 0 && stderrLines.some(line => line.trim()) && (_jsx(Text, { color: "yellow", children: stderrLines.join('\n').trimEnd() }))] }));
        }
        // Handle directory tree output for list_files
        if (toolName === 'list_files') {
            return (_jsx(Text, { color: "cyan", children: typeof content === 'string' ? content : JSON.stringify(content, null, 2) }));
        }
        // Handle file content for read_file; don't show content
        if (toolName === 'read_file') {
            return null;
        }
        // Handle file content for search_files; don't show content
        if (toolName === 'search_files') {
            return null;
        }
        // Default handling
        return (_jsx(Text, { color: "white", children: typeof content === 'string' ? content : JSON.stringify(content, null, 2) }));
    };
    return (_jsxs(Box, { flexDirection: "column", borderStyle: "round", borderColor: getStatusColor(), paddingX: 1, children: [_jsx(Box, { children: _jsxs(Text, { color: getStatusColor(), children: [getStatusIcon(), " ", _jsx(Text, { bold: true, children: name })] }) }), (name === 'create_tasks' || name === 'update_tasks') && result?.content?.tasks ? (_jsx(Box, { flexDirection: "column", children: result.content.tasks.map((task, index) => {
                    const statusSymbol = task.status === 'pending' ? '☐' : (task.status === 'in_progress' ? '🔄' : '✓');
                    const isCompleted = task.status === 'completed';
                    return (_jsxs(Text, { color: isCompleted ? 'green' : 'white', children: [statusSymbol, " ", task.description] }, task.id || index));
                }) })) : formatToolParams(name, args, { includePrefix: false, separator: ': ' }) ? (_jsx(Box, { children: _jsx(Text, { color: "gray", children: formatToolParams(name, args, { includePrefix: false, separator: ': ' }) }) })) : null, shouldShowDiff(name) && status === 'completed' && (_jsx(Box, { children: _jsx(DiffPreview, { toolName: name, toolArgs: args, isHistorical: true }) })), status === 'completed' && result && (_jsx(Box, { children: result.success ? (_jsxs(Box, { flexDirection: "column", children: [result.content && !(name === 'create_tasks' || name === 'update_tasks') && (_jsx(Box, { flexDirection: "column", children: renderResult(name, result) })), result.message && !result.content && !(name === 'create_tasks' || name === 'update_tasks') && (_jsx(Text, { color: "gray", children: result.message }))] })) : (_jsxs(Text, { color: "red", children: ["Tool failed: ", result.error || 'Unknown error'] })) })), status === 'failed' && (_jsx(Box, { children: _jsxs(Text, { color: "red", children: ["Tool execution failed", result?.error && (_jsxs(Text, { color: "gray", children: [' ', "(", result.error, ")"] }))] }) })), status === 'canceled' && (_jsx(Box, { children: _jsx(Text, { color: "gray", children: "Tool execution canceled by user" }) }))] }));
}
//# sourceMappingURL=ToolHistoryItem.js.map