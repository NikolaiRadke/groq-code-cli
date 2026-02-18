export interface MarkdownElement {
    type: 'text' | 'code-block' | 'heading' | 'mixed-line';
    content: string;
    level?: number;
}
export interface InlineElement {
    type: 'text' | 'code' | 'bold' | 'italic';
    content: string;
}
export declare function parseMarkdown(content: string): MarkdownElement[];
export declare function parseInlineElements(content: string): InlineElement[];
//# sourceMappingURL=markdown.d.ts.map