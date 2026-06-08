/**
 * Debug Utilities
 * Only active in development mode
 */

const isDev = import.meta.env.DEV;

/**
 * Enhanced console.log that only works in development
 */
export const debug = {
  log: (...args: any[]) => {
    if (isDev) console.log(...args);
  },
  
  warn: (...args: any[]) => {
    if (isDev) console.warn(...args);
  },
  
  error: (...args: any[]) => {
    if (isDev) console.error(...args);
  },
  
  table: (data: any) => {
    if (isDev) console.table(data);
  },
  
  group: (label: string) => {
    if (isDev) console.group(label);
  },
  
  groupEnd: () => {
    if (isDev) console.groupEnd();
  },
  
  time: (label: string) => {
    if (isDev) console.time(label);
  },
  
  timeEnd: (label: string) => {
    if (isDev) console.timeEnd(label);
  },
  
  /**
   * Log component lifecycle
   */
  lifecycle: (componentName: string, event: 'mount' | 'unmount' | 'render' | 'update', data?: any) => {
    if (isDev) {
      const emoji = {
        mount: '🟢',
        unmount: '🔴',
        render: '🔄',
        update: '🔵',
      };
      console.log(`${emoji[event]} ${componentName} ${event}`, data || '');
    }
  },
  
  /**
   * Log API calls
   */
  api: (method: string, url: string, data?: any) => {
    if (isDev) {
      console.group(`🌐 API ${method} ${url}`);
      if (data) console.log('Data:', data);
      console.groupEnd();
    }
  },
  
  /**
   * Log form data
   */
  form: (formName: string, data: any) => {
    if (isDev) {
      console.group(`📝 Form: ${formName}`);
      console.table(data);
      console.groupEnd();
    }
  },
  
  /**
   * Check environment variables
   */
  checkEnv: () => {
    if (isDev) {
      console.group('🔧 Environment Variables');
      console.log('VITE_JOTFORM_API_KEY:', import.meta.env.VITE_JOTFORM_API_KEY ? '✅ Set' : '❌ Missing');
      console.log('VITE_JOTFORM_FORM_ID:', import.meta.env.VITE_JOTFORM_FORM_ID || '❌ Missing');
      console.log('DEV mode:', import.meta.env.DEV);
      console.log('PROD mode:', import.meta.env.PROD);
      console.groupEnd();
    }
  },
};

/**
 * Performance measurement
 */
export const measurePerformance = (label: string, fn: () => void) => {
  if (isDev) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`⏱️  ${label}: ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
};

/**
 * Log component props
 */
export const logProps = (componentName: string, props: any) => {
  if (isDev) {
    console.group(`📦 ${componentName} Props`);
    console.table(props);
    console.groupEnd();
  }
};

/**
 * Assert condition in development
 */
export const assert = (condition: boolean, message: string) => {
  if (isDev && !condition) {
    console.error(`❌ Assertion failed: ${message}`);
  }
};
