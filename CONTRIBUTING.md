# Contributing to Diogenes

Thank you for your interest in contributing to Diogenes! This Chrome extension helps users analyze the logical structure and accuracy of web content using Google's Gemini API. We welcome contributions from the community and are excited to have you aboard!

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Development Environment](#development-environment)
  - [Project Structure](#project-structure)
- [Development Process](#development-process)
  - [Setting Up for Development](#setting-up-for-development)
  - [Making Changes](#making-changes)
  - [Testing](#testing)
- [Submitting Changes](#submitting-changes)
  - [Pull Request Process](#pull-request-process)
  - [Commit Message Guidelines](#commit-message-guidelines)
- [Development Guidelines](#development-guidelines)
  - [Code Style](#code-style)
  - [Logging](#logging)
  - [Error Handling](#error-handling)

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Development Environment

1. Fork and clone the repository
2. Install Chrome or Chromium browser
3. Enable Developer Mode in Chrome's extension settings
4. Load the unpacked extension from your development directory

### Project Structure

```
diogenes/
├── background.js      # Background service worker
├── content.js         # Content script for webpage interaction
├── logger.js         # Logging utility
├── popup.js          # Extension popup functionality
├── manifest.json     # Extension manifest
└── icons/            # Extension icons
```

## Development Process

### Setting Up for Development

1. Create a file named `devel` in the root directory to enable debug logging
2. Get a Google Gemini API key for testing
3. Load the extension in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select your development directory

### Making Changes

1. Create a new branch for your feature/bugfix
2. Enable development mode by creating a `devel` file
3. Use the Logger class for debugging:
```javascript
logger.debug('Debug message');
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message', error);
```

### Testing

- Test the extension in both development and production modes
- Verify logging works correctly with different log levels
- Test error handling and API interactions
- Check styling across different websites
- Ensure proper cleanup of DOM elements

## Submitting Changes

### Pull Request Process

1. Update documentation if you're changing functionality
2. Add yourself to the contributors list if you aren't already there
3. Make sure your code follows our style guidelines
4. Ensure all tests pass
5. Create a pull request with a clear description of changes

### Commit Message Guidelines

Follow conventional commits format:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, missing semicolons, etc)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add language selection for analysis results`

## Development Guidelines

### Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript standard style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and modular

### Logging

Use the provided Logger class with appropriate levels:

```javascript
// Debug information for development
logger.debug('Detailed information for debugging');

// General information
logger.info('Operation completed successfully');

// Warning messages
logger.warn('Non-critical issues');

// Error messages
logger.error('Critical errors', error);
```

### Error Handling

1. Always use try-catch blocks for async operations
2. Provide meaningful error messages
3. Use the Logger class for error reporting
4. Handle API errors appropriately:

```javascript
try {
  // API operation
} catch (error) {
  logger.error('Operation failed:', error);
  // Show user-friendly error message
  showStatus('Error occurred', true);
}
```

### CSS Guidelines

1. Use the `.diogenes-` prefix for all classes
2. Follow BEM naming convention where appropriate
3. Always include `!important` for styles to override page CSS
4. Use proper namespacing to avoid conflicts

### Security Considerations

1. Never commit API keys or sensitive data
2. Validate all user input
3. Use Content Security Policy directives
4. Handle CORS appropriately
5. Sanitize HTML content before rendering

Remember that your contributions are valuable to us! If you have any questions or need clarification, please open an issue or contact the maintainers.
