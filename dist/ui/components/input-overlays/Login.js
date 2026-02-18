import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
export default function Login({ onSubmit, onCancel }) {
    const [apiKey, setApiKey] = useState('');
    useInput((input, key) => {
        if (key.return) {
            if (apiKey.trim()) {
                onSubmit(apiKey.trim());
            }
            return;
        }
        if (key.escape) {
            onCancel();
            return;
        }
        if (key.backspace || key.delete) {
            setApiKey(prev => prev.slice(0, -1));
            return;
        }
        if (key.ctrl && input === 'c') {
            onCancel();
            return;
        }
        // Regular character input
        if (input && !key.meta && !key.ctrl) {
            setApiKey(prev => prev + input);
        }
    });
    return (_jsxs(Box, { flexDirection: "column", marginBottom: 1, children: [_jsx(Box, { marginBottom: 1, children: _jsx(Text, { color: "cyan", bold: true, children: "Login with Groq API Key" }) }), _jsx(Box, { marginBottom: 1, children: _jsxs(Text, { color: "gray", children: ["Enter your Groq API key to continue. You can get one from ", _jsx(Text, { underline: true, children: "https://console.groq.com/keys" })] }) }), _jsxs(Box, { children: [_jsx(Text, { color: "cyan", children: "API Key: " }), _jsxs(Text, { children: ['*'.repeat(Math.min(apiKey.length, 20)), apiKey.length > 20 && '...'] }), _jsx(Text, { backgroundColor: "cyan", color: "cyan", children: "\u258C" })] })] }));
}
//# sourceMappingURL=Login.js.map