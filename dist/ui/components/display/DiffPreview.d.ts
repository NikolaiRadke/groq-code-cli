interface ToolArgs {
    old_text?: string;
    new_text?: string;
    replace_all?: boolean;
    content?: string;
    file_path?: string;
}
interface DiffPreviewProps {
    toolName: string;
    toolArgs: ToolArgs;
    isHistorical?: boolean;
}
export default function DiffPreview({ toolName, toolArgs, isHistorical }: DiffPreviewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DiffPreview.d.ts.map