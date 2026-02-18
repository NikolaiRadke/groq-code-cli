import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box, Text } from 'ink';
import { getAvailableCommands } from '../../../commands/index.js';
export default function SlashCommandSuggestions({ input, selectedIndex }) {
    const searchTerm = input.slice(1).toLowerCase();
    const allCommands = getAvailableCommands();
    const filteredCommands = allCommands.filter(cmd => cmd.command.toLowerCase().includes(searchTerm));
    if (filteredCommands.length === 0) {
        return null;
    }
    return (_jsx(Box, { flexDirection: "column", marginLeft: 2, children: filteredCommands.map((cmd, index) => (_jsx(Box, { children: _jsxs(Text, { color: index === selectedIndex ? "black" : "white", backgroundColor: index === selectedIndex ? "cyan" : undefined, children: ["/", cmd.command, " - ", cmd.description] }) }, cmd.command))) }));
}
//# sourceMappingURL=SlashCommandSuggestions.js.map