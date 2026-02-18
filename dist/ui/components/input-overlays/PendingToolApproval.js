import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';
import DiffPreview from '../display/DiffPreview.js';
import { formatToolParams } from '../../../tools/tools.js';
import { DANGEROUS_TOOLS } from '../../../tools/tool-schemas.js';
export default function PendingToolApproval({ toolName, toolArgs, onApprove, onReject, onApproveWithAutoSession }) {
    const [selectedApprovalOption, setSelectedApprovalOption] = useState(0);
    // Reset selection when component mounts
    useEffect(() => {
        setSelectedApprovalOption(0);
    }, [toolName, toolArgs]);
    // Handle approval input
    useInput((input, key) => {
        const isDangerous = DANGEROUS_TOOLS.includes(toolName);
        const maxOptions = isDangerous ? 1 : 2; // Dangerous tools only have Yes/No, others have Yes/Auto/No
        if (key.upArrow) {
            setSelectedApprovalOption(prev => Math.max(0, prev - 1));
        }
        else if (key.downArrow) {
            setSelectedApprovalOption(prev => Math.min(maxOptions, prev + 1));
        }
        else if (key.return) {
            if (selectedApprovalOption === 0) {
                onApprove();
            }
            else if (selectedApprovalOption === 1 && !isDangerous) {
                // Middle option: "Yes, and don't ask again this session"
                onApproveWithAutoSession?.();
            }
            else {
                // Last option: "No"
                onReject();
            }
        }
    });
    const getFilename = () => {
        const filePath = toolArgs?.file_path || toolArgs?.source_path;
        if (!filePath)
            return null;
        return filePath.split('/').pop() || filePath;
    };
    const filename = getFilename();
    return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Box, { children: _jsxs(Text, { color: "yellow", children: ["\uD83D\uDFE1 ", _jsx(Text, { bold: true, children: toolName })] }) }), (() => {
                const keyParams = formatToolParams(toolName, toolArgs, { includePrefix: false, separator: ': ' });
                return keyParams ? (_jsx(Box, { children: _jsx(Text, { color: "gray", dimColor: true, children: keyParams }) })) : null;
            })(), (toolName === 'create_file' || toolName === 'edit_file') && (_jsx(Box, { borderStyle: "round", borderColor: "yellow", paddingX: 1, children: _jsx(DiffPreview, { toolName: toolName, toolArgs: toolArgs }) })), _jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { color: "yellow", children: filename
                            ? _jsxs(_Fragment, { children: ["Approve this edit to ", _jsx(Text, { bold: true, children: filename }), "?"] })
                            : 'Approve this tool call?' }), _jsxs(Box, { flexDirection: "column", children: [_jsx(Box, { children: _jsxs(Text, { color: selectedApprovalOption === 0 ? "black" : "green", backgroundColor: selectedApprovalOption === 0 ? "rgb(124, 214, 114)" : undefined, children: [selectedApprovalOption === 0 ? _jsx(Text, { bold: true, children: ">" }) : "  ", " Yes"] }) }), !DANGEROUS_TOOLS.includes(toolName) && (_jsx(Box, { children: _jsxs(Text, { color: selectedApprovalOption === 1 ? "black" : "blue", backgroundColor: selectedApprovalOption === 1 ? "rgb(114, 159, 214)" : undefined, children: [selectedApprovalOption === 1 ? _jsx(Text, { bold: true, children: ">" }) : "  ", " Yes, and don't ask again this session"] }) })), _jsx(Box, { children: _jsxs(Text, { color: selectedApprovalOption === (DANGEROUS_TOOLS.includes(toolName) ? 1 : 2) ? "black" : "red", backgroundColor: selectedApprovalOption === (DANGEROUS_TOOLS.includes(toolName) ? 1 : 2) ? "rgb(214, 114, 114)" : undefined, children: [selectedApprovalOption === (DANGEROUS_TOOLS.includes(toolName) ? 1 : 2) ? _jsx(Text, { bold: true, children: ">" }) : "  ", " No, tell Groq what to do differently (esc)"] }) })] })] })] }));
}
//# sourceMappingURL=PendingToolApproval.js.map