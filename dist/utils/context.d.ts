export interface ProjectContextJson {
    generated_at: string;
    root: string;
    summary: {
        total_files: number;
        total_directories: number;
        languages: Array<{
            extension: string;
            files: number;
        }>;
    };
    package?: {
        name?: string;
        version?: string;
        description?: string;
        scripts?: string[];
        dependencies_count?: number;
        dev_dependencies_count?: number;
    };
    config_files: string[];
    notable_files: string[];
    tree: string[];
}
export interface GenerateContextOptions {
    maxDepth?: number;
    maxEntries?: number;
}
export declare function generateProjectContext(rootDir?: string, options?: GenerateContextOptions): {
    json: ProjectContextJson;
    markdown: string;
};
export declare function writeProjectContext(rootDir?: string, options?: GenerateContextOptions): {
    mdPath: string;
    jsonPath: string;
};
//# sourceMappingURL=context.d.ts.map