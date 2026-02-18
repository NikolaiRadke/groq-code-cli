import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
const AVAILABLE_MODELS = [
    { id: 'moonshotai/kimi-k2-instruct-0905', name: 'Kimi K2 Instruct 09-05', description: 'Enhanced coding capabilities' },
    { id: 'openai/gpt-oss-120b', name: 'GPT OSS 120B', description: 'Fast, capable, and cheap model' },
    { id: 'openai/gpt-oss-20b', name: 'GPT OSS 20B', description: 'Fastest and cheapest model' },
    { id: 'qwen/qwen3-32b', name: 'Qwen 3 32B', description: '' },
    { id: 'meta-llama/llama-4-maverick-17b-128e-instruct', name: 'Llama 4 Maverick', description: '' },
    { id: 'meta-llama/llama-4-scout-17b-16e-instruct', name: 'Llama 4 Scout', description: '' },
];
export default function ModelSelector({ onSubmit, onCancel, currentModel }) {
    const [selectedIndex, setSelectedIndex] = useState(() => {
        const currentIndex = AVAILABLE_MODELS.findIndex(model => model.id === currentModel);
        return currentIndex >= 0 ? currentIndex : 0;
    });
    useInput((input, key) => {
        if (key.return) {
            onSubmit(AVAILABLE_MODELS[selectedIndex].id);
            return;
        }
        if (key.escape) {
            onCancel();
            return;
        }
        if (key.upArrow) {
            setSelectedIndex(prev => Math.max(0, prev - 1));
            return;
        }
        if (key.downArrow) {
            setSelectedIndex(prev => Math.min(AVAILABLE_MODELS.length - 1, prev + 1));
            return;
        }
        if (key.ctrl && input === 'c') {
            onCancel();
            return;
        }
    });
    return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Box, { marginBottom: 1, children: _jsx(Text, { color: "cyan", bold: true, children: "Select Model" }) }), _jsx(Box, { marginBottom: 1, children: _jsx(Text, { color: "gray", dimColor: true, children: "Choose a model for your conversation. The chat will be cleared when you switch models." }) }), _jsx(Box, { marginBottom: 1, children: _jsxs(Text, { color: "gray", dimColor: true, children: ["Visit ", _jsx(Text, { underline: true, children: "https://groq.com/pricing" }), " for more information."] }) }), _jsx(Box, { flexDirection: "column", marginBottom: 1, children: AVAILABLE_MODELS.map((model, index) => (_jsxs(Box, { marginBottom: index === AVAILABLE_MODELS.length - 1 ? 0 : 1, children: [_jsxs(Text, { color: index === selectedIndex ? 'black' : 'white', backgroundColor: index === selectedIndex ? 'cyan' : undefined, bold: index === selectedIndex, children: [index === selectedIndex ? _jsx(Text, { bold: true, children: ">" }) : "  ", " ", "", model.name, model.id === currentModel ? ' (current)' : ''] }), index === selectedIndex && (_jsx(Box, { marginLeft: 4, marginTop: 0, children: _jsx(Text, { color: "gray", dimColor: true, children: model.description }) }))] }, model.id))) })] }));
}
//# sourceMappingURL=ModelSelector.js.map