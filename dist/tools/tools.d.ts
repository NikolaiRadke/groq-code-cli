export interface ToolResult {
    success: boolean;
    content?: any;
    data?: any;
    message?: string;
    error?: string;
}
interface TaskUpdate {
    id: string;
    status: 'pending' | 'in_progress' | 'completed';
    notes?: string;
}
interface Task {
    id: string;
    description: string;
    status: 'pending' | 'in_progress' | 'completed';
    notes?: string;
    updated_at?: string;
}
export declare function getReadFilesTracker(): Set<string>;
/**
 * Format key parameters for tool call display
 */
export declare function formatToolParams(toolName: string, toolArgs: Record<string, any>, options?: {
    includePrefix?: boolean;
    separator?: string;
}): string;
/**
 * Create a standardized tool response format
 */
export declare function createToolResponse(success: boolean, data?: any, message?: string, error?: string): ToolResult;
/**
 * Read the contents of a file, optionally specifying line range
 */
export declare function readFile(filePath: string, startLine?: number, endLine?: number): Promise<ToolResult>;
/**
 * Create a new file or directory with specified content
 */
export declare function createFile(filePath: string, content: string, fileType?: string, overwrite?: boolean): Promise<ToolResult>;
/**
 * Edit a file by replacing exact text strings
 * Note: Arguments are pre-validated by the validation system before this function is called
 */
export declare function editFile(filePath: string, oldText: string, newText: string, replaceAll?: boolean): Promise<ToolResult>;
/**
 * Delete a file or directory with safety checks
 */
export declare function deleteFile(filePath: string, recursive?: boolean): Promise<ToolResult>;
/**
 * List files and directories in a path with tree-style display
 */
export declare function listFiles(directory?: string, pattern?: string, recursive?: boolean, showHidden?: boolean): Promise<ToolResult>;
/**
 * Search for text patterns in files with advanced filtering and matching options
 */
export declare function searchFiles(pattern: string, filePattern?: string, directory?: string, caseSensitive?: boolean, patternType?: 'substring' | 'regex' | 'exact' | 'fuzzy', fileTypes?: string[], excludeDirs?: string[], excludeFiles?: string[], maxResults?: number, contextLines?: number, groupByFile?: boolean): Promise<ToolResult>;
/**
 * Execute a shell command or run code
 */
export declare function executeCommand(command: string, commandType: string, workingDirectory?: string, timeout?: number): Promise<ToolResult>;
/**
 * Create a task list of subtasks to complete the user's request
 */
export declare function createTasks(userQuery: string, tasks: Task[]): Promise<ToolResult>;
/**
 * Update the status of one or more tasks in the task list
 */
export declare function updateTasks(taskUpdates: TaskUpdate[]): Promise<ToolResult>;
export declare const TOOL_REGISTRY: {
    read_file: typeof readFile;
    create_file: typeof createFile;
    edit_file: typeof editFile;
    delete_file: typeof deleteFile;
    list_files: typeof listFiles;
    search_files: typeof searchFiles;
    execute_command: typeof executeCommand;
    create_tasks: typeof createTasks;
    update_tasks: typeof updateTasks;
};
/**
 * Execute a tool by name with given arguments
 */
export declare function executeTool(toolName: string, toolArgs: Record<string, any>): Promise<ToolResult>;
export {};
//# sourceMappingURL=tools.d.ts.map