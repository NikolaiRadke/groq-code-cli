# Groq Code CLI (Enhanced Fork)

Fork of [groq-code-cli](https://github.com/build-with-groq/groq-code-cli) with **non-interactive mode** for IDE integration.

## Additional Features ✨

- **`--non-interactive <prompt>`** - Run without TUI for seamless IDE integration
- **Auto-approve mode** - Automatic tool approval in agentic workflows
- **System prompt support** - Read-only mode for safe code analysis

## Installation
```bash
npm install -g github:NikolaiRadke/groq-code-cli
```

Or build from source:
```bash
git clone https://github.com/DEIN-USERNAME/groq-code-cli.git
cd groq-code-cli
npm install
npm run build
npm link
```

## Usage

### Interactive Mode (Original)
```bash
groq
```

### Non-Interactive Mode (New)
```bash
groq --non-interactive "Explain this code"
groq --system "Read-only assistant" --non-interactive "Analyze the project"
```

## Use Cases

- **IDE Integration**: Works with VS Code extensions like [AI.duino](https://github.com/NikolaiRadke/AI.duino)
- **CI/CD Pipelines**: Automated code analysis and generation
- **Batch Processing**: Process multiple files without manual interaction

## Changes from Original

See [CHANGELOG.md](CHANGELOG.md) for detailed changes.

## Credits

Based on the excellent [Groq Code CLI](https://github.com/build-with-groq/groq-code-cli) by Groq.

## License

Same as original (check their license)
Re-run `npm run build` and `npm link`.


## Contributing and Support

Improvements through PRs are welcome!

For issues and feature requests, please open an issue on GitHub.

#### Share what you create with Groq on our [socials](https://x.com/GroqInc)!

### Featured Community Creations
- [OpenRouter Support](https://github.com/rahulvrane/groq-code-cli-openrouter) - rahulvrane
