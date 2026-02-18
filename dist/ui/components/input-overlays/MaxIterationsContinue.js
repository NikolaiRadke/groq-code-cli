import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';
export default function MaxIterationsContinue({ maxIterations, onContinue, onStop }) {
    const [selectedOption, setSelectedOption] = useState(0);
    // Reset selection when component mounts
    useEffect(() => {
        setSelectedOption(0);
    }, [maxIterations]);
    // Handle input
    useInput((input, key) => {
        if (key.upArrow) {
            setSelectedOption(prev => Math.max(0, prev - 1));
        }
        else if (key.downArrow) {
            setSelectedOption(prev => Math.min(1, prev + 1));
        }
        else if (key.return) {
            if (selectedOption === 0) {
                onContinue();
            }
            else {
                onStop();
            }
        }
        else if (key.escape) {
            onStop();
        }
    });
    return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Box, { marginBottom: 1, children: _jsx(Text, { color: "yellow", bold: true, children: "Max Iterations Reached" }) }), _jsx(Box, { marginBottom: 1, children: _jsxs(Text, { color: "gray", children: ["The model has been iterating for a while now (", maxIterations, " iterations). It may be stuck in a loop or working on a complex task."] }) }), _jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { color: "yellow", children: "Continue processing?" }), _jsxs(Box, { flexDirection: "column", children: [_jsx(Box, { children: _jsxs(Text, { color: selectedOption === 0 ? "black" : "green", backgroundColor: selectedOption === 0 ? "rgb(124, 214, 114)" : undefined, children: [selectedOption === 0 ? _jsx(Text, { bold: true, children: ">" }) : "  ", " Yes, continue"] }) }), _jsx(Box, { children: _jsxs(Text, { color: selectedOption === 1 ? "black" : "red", backgroundColor: selectedOption === 1 ? "rgb(214, 114, 114)" : undefined, children: [selectedOption === 1 ? _jsx(Text, { bold: true, children: ">" }) : "  ", " No, stop here (esc)"] }) })] })] })] }));
}
//# sourceMappingURL=MaxIterationsContinue.js.map