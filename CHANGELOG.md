# Changelog

## [1.0.3-enhanced] - 2025-01-29

### Added
- Non-interactive mode with `--non-interactive <prompt>` flag
- Auto-approve for tool operations in non-interactive mode
- System prompt support for read-only mode restrictions

### Changed
- CLI now supports both interactive and non-interactive workflows
- Agent auto-approves file operations when in agentic mode

### Technical Details
- Modified `src/core/cli.ts` to handle non-interactive flag
- Added auto-approve logic for seamless IDE integration
- Preserved all original functionality
