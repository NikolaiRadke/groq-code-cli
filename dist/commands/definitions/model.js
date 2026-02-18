export const modelCommand = {
    command: 'model',
    description: 'Select your Groq model',
    handler: ({ setShowModelSelector }) => {
        if (setShowModelSelector) {
            setShowModelSelector(true);
        }
    }
};
//# sourceMappingURL=model.js.map