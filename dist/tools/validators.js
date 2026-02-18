import * as path from 'path';
// Track which files have been read in the current session
let readFiles = null;
export function setReadFilesTracker(tracker) {
    readFiles = tracker;
}
// Check if a file has been read before allowing edits
export function validateReadBeforeEdit(filePath) {
    if (!readFiles) {
        return true; // No tracking enabled, allow edit
    }
    const resolvedPath = path.resolve(filePath);
    return readFiles.has(resolvedPath);
}
export function getReadBeforeEditError(filePath) {
    return `File must be read before editing. Use read_file tool first: ${filePath}`;
}
//# sourceMappingURL=validators.js.map