interface PendingToolApprovalProps {
    toolName: string;
    toolArgs: Record<string, any>;
    onApprove: () => void;
    onReject: () => void;
    onApproveWithAutoSession?: () => void;
}
export default function PendingToolApproval({ toolName, toolArgs, onApprove, onReject, onApproveWithAutoSession }: PendingToolApprovalProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PendingToolApproval.d.ts.map