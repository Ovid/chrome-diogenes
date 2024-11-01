// Create a logger instance for the background script
const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  NONE: 4
};

// Copying logger contents because this runs in a different context :(
class Logger {
  constructor() {
    this.level = LogLevel.INFO;
    this.isProduction = !chrome.runtime.getManifest().version.includes('-dev');
    
    if (this.isProduction) {
      this.level = LogLevel.ERROR;
    }
  }

  setLevel(level) {
    if (level in LogLevel) {
      this.level = LogLevel[level];
    }
  }

  formatMessage(level, message, ...args) {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level}]`;
    
    if (typeof message === 'string') {
      return `${prefix} ${message}`;
    }
    
    // Handle objects and arrays
    if (typeof message === 'object') {
      try {
        return `${prefix} ${JSON.stringify(message, null, 2)}`;
      } catch (e) {
        return `${prefix} [Unstringifiable Object]`;
      }
    }
    
    return `${prefix} ${message}`;
  }

  debug(message, ...args) {
    if (this.level <= LogLevel.DEBUG) {
      console.debug(this.formatMessage('DEBUG', message), ...args);
    }
  }

  info(message, ...args) {
    if (this.level <= LogLevel.INFO) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  warn(message, ...args) {
    if (this.level <= LogLevel.WARN) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  error(message, error = null, ...args) {
    if (this.level <= LogLevel.ERROR) {
      const formattedMessage = this.formatMessage('ERROR', message);
      if (error && error instanceof Error) {
        console.error(formattedMessage, error.stack, ...args);
      } else {
        console.error(formattedMessage, ...args);
      }
    }
  }

  group(label) {
    if (this.level < LogLevel.NONE) {
      console.group(this.formatMessage('GROUP', label));
    }
  }

  groupEnd() {
    if (this.level < LogLevel.NONE) {
      console.groupEnd();
    }
  }

  time(label) {
    if (this.level <= LogLevel.DEBUG) {
      console.time(label);
    }
  }

  timeEnd(label) {
    if (this.level <= LogLevel.DEBUG) {
      console.timeEnd(label);
    }
  }
}

const logger = new Logger();

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle any background tasks here if needed
  if (request.type === 'validateApiKey') {
    validateApiKey(request.apiKey)
      .then(isValid => sendResponse({ isValid }));
    return true; // Will respond asynchronously
  }
});

async function validateApiKey(apiKey) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Test message' }] }]
        })
      }
    );
    const data = await response.json();
    return !data.error;
  } catch (error) {
    logger.error('Error validating API key:', error);
    return false;
  }
}
