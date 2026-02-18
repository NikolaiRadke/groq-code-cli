/**
 * Tool schemas for Groq function calling API.
 * These define the available tools that the LLM can call.
 */
export interface ToolSchema {
    type: 'function';
    function: {
        name: string;
        description: string;
        parameters: {
            type: 'object';
            properties: Record<string, any>;
            required: string[];
        };
    };
}
export declare const READ_FILE_SCHEMA: ToolSchema;
export declare const CREATE_FILE_SCHEMA: ToolSchema;
export declare const EDIT_FILE_SCHEMA: ToolSchema;
export declare const DELETE_FILE_SCHEMA: ToolSchema;
export declare const EXECUTE_COMMAND_SCHEMA: ToolSchema;
export declare const SEARCH_FILES_SCHEMA: ToolSchema;
export declare const LIST_FILES_SCHEMA: ToolSchema;
export declare const CREATE_TASKS_SCHEMA: ToolSchema;
export declare const UPDATE_TASKS_SCHEMA: ToolSchema;
export declare const ALL_TOOL_SCHEMAS: ToolSchema[];
export declare const SAFE_TOOLS: string[];
export declare const APPROVAL_REQUIRED_TOOLS: string[];
export declare const DANGEROUS_TOOLS: string[];
//# sourceMappingURL=tool-schemas.d.ts.map