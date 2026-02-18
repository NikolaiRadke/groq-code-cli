import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import Chat from './components/core/Chat.js';
export default function App({ agent }) {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        setIsReady(true);
    }, []);
    return (_jsx(Box, { flexDirection: "column", height: "100%", children: isReady ? (_jsx(Chat, { agent: agent })) : (_jsx(Box, { justifyContent: "center", alignItems: "center", height: "100%", children: _jsx(Text, { children: "Initializing agent..." }) })) }));
}
//# sourceMappingURL=App.js.map