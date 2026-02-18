/**
 * Write content to a file with safety checks
 */
export declare function writeFile(filepath: string, content: string, force?: boolean, backup?: boolean): Promise<boolean>;
/**
 * Create a directory with parent directories
 */
export declare function createDirectory(directoryPath: string): Promise<boolean>;
/**
 * Delete a file with safety checks
 */
export declare function deleteFile(filepath: string, force?: boolean): Promise<boolean>;
/**
 * Simple tree display for list_files tool
 */
export declare function displayTree(directory?: string, pattern?: string, recursive?: boolean, showHidden?: boolean): Promise<string>;
/**
 * Check if a file or directory should be ignored
 */
export declare function shouldIgnore(filePath: string): boolean;
//# sourceMappingURL=file-ops.d.ts.map