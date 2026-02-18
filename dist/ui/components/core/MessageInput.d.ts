interface MessageInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    placeholder?: string;
    userMessageHistory?: string[];
}
export default function MessageInput({ value, onChange, onSubmit, placeholder, userMessageHistory }: MessageInputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MessageInput.d.ts.map