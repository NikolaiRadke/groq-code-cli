export const clearCommand = {
    command: 'clear',
    description: 'Clear chat history and context',
    handler: ({ addMessage, clearHistory }) => {
        clearHistory();
        addMessage({
            role: 'system',
            content: 'Chat history and context cleared.',
        });
    }
};
//# sourceMappingURL=clear.js.map