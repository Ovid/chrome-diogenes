const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  NONE: 4
};

class Logger {
  constructor() {
    this.level = LogLevel.INFO; // Default level
    
    // Check if we're in development mode
    this.checkDevelopmentMode();
  }

  async checkDevelopmentMode() {
    try {
      // Try to fetch the devel file from extension root
      const response = await fetch(chrome.runtime.getURL('devel'));
      if (response.ok) {
        this.level = LogLevel.DEBUG;
        console.info('[Logger] Development mode detected');
      }
    } catch (e) {
      // File doesn't exist - we're in production mode
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

// Create a global instance
window.logger = new Logger();
