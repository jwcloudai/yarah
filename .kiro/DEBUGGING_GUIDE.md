# Debugging Guide for Yarah Life

## Quick Start

### 1. Browser DevTools (Easiest)

**Chrome/Edge DevTools:**
1. Run the dev server: `npm run dev`
2. Open http://localhost:8080
3. Press `F12` or `Ctrl+Shift+I` (Windows) to open DevTools
4. Click the **Sources** tab
5. Navigate to your files (src folder)
6. Click line numbers to set breakpoints
7. Reload the page - execution will pause at breakpoints

**Console Debugging:**
```tsx
console.log("Variable value:", myVariable);
console.error("Error occurred:", error);
console.table(arrayData); // For arrays/objects
console.trace(); // Show call stack
```

### 2. VS Code Debugger (Recommended)

**Setup (Already Done):**
- `.vscode/launch.json` is configured
- Supports Chrome and Edge debugging

**How to Use:**
1. Start dev server: `npm run dev`
2. In VS Code, press `F5` or go to **Run and Debug** (Ctrl+Shift+D)
3. Select "Debug in Chrome" or "Debug in Edge"
4. Set breakpoints by clicking left of line numbers (red dot appears)
5. Interact with your app - VS Code will pause at breakpoints
6. Use debug controls:
   - **Continue** (F5): Resume execution
   - **Step Over** (F10): Execute current line
   - **Step Into** (F11): Enter function calls
   - **Step Out** (Shift+F11): Exit current function
   - **Restart** (Ctrl+Shift+F5): Restart debugging
   - **Stop** (Shift+F5): Stop debugging

**View Variables:**
- Hover over variables to see values
- Check the **Variables** panel
- Add expressions to **Watch** panel
- View **Call Stack** to see execution path

### 3. React DevTools

**Installation:**
- [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Edge Extension](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

**Usage:**
1. Install the extension
2. Open DevTools (F12)
3. Click **Components** tab to inspect React component tree
4. Click **Profiler** tab to measure performance

**Features:**
- View component props and state
- Edit props/state in real-time
- Track component renders
- Find which component rendered an element
- Performance profiling

## Debugging Specific Issues

### JotForm Integration

**Check if form loads:**
```tsx
// In JotFormEmbed.tsx
useEffect(() => {
  console.log("Loading form:", formId);
  console.log("API Key exists:", !!import.meta.env.VITE_JOTFORM_API_KEY);
  
  // ... rest of code
}, [formId]);
```

**Debug API submissions:**
```tsx
// In CustomContactForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  console.log("Form data:", formData);
  console.log("Submitting to form:", import.meta.env.VITE_JOTFORM_FORM_ID);
  
  try {
    const result = await submitForm({
      q3_name: formData.name,
      q4_email: formData.email,
      q5_message: formData.message,
    });
    
    console.log("Submission result:", result);
  } catch (error) {
    console.error("Submission error:", error);
    console.error("Error details:", error.response); // If available
  }
};
```

**Network debugging:**
1. Open DevTools → **Network** tab
2. Filter by "Fetch/XHR"
3. Submit form
4. Click on the request to see:
   - Request headers
   - Request payload
   - Response status
   - Response data

### Environment Variables

**Check if loaded:**
```tsx
console.log("Env vars:", {
  formId: import.meta.env.VITE_JOTFORM_FORM_ID,
  hasApiKey: !!import.meta.env.VITE_JOTFORM_API_KEY,
});
```

**Common issues:**
- Environment variables must start with `VITE_`
- Restart dev server after changing `.env.local`
- Variables are replaced at build time, not runtime

### Component Issues

**Debug component rendering:**
```tsx
export function MyComponent() {
  console.log("Component rendered");
  
  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);
  
  // ... rest
}
```

**Debug props:**
```tsx
export function MyComponent(props: MyProps) {
  console.log("Props received:", props);
  
  useEffect(() => {
    console.log("Prop changed:", props.someProp);
  }, [props.someProp]);
  
  // ... rest
}
```

**Debug state changes:**
```tsx
const [value, setValue] = useState(initial);

const handleChange = (newValue) => {
  console.log("State changing:", { old: value, new: newValue });
  setValue(newValue);
};

useEffect(() => {
  console.log("State changed to:", value);
}, [value]);
```

## Common Debugging Scenarios

### 1. Form Not Showing

**Check:**
```tsx
// Add to ContactForm.tsx
console.log("Form ID:", import.meta.env.VITE_JOTFORM_FORM_ID);
console.log("Container mounted:", containerRef.current);
```

**Solutions:**
- Verify `.env.local` exists with `VITE_JOTFORM_FORM_ID`
- Restart dev server
- Check browser console for errors
- Inspect Network tab for blocked requests

### 2. Form Submission Failing

**Debug:**
```tsx
// In jotform.ts submitForm function
console.log("Submitting:", { formData, formId });
console.log("API URL:", `${BASE_URL}/form/${formId}/submissions`);

const response = await fetch(/* ... */);
console.log("Response status:", response.status);
console.log("Response OK:", response.ok);

const data = await response.json();
console.log("Response data:", data);
```

**Common issues:**
- API key incorrect or missing
- Wrong form ID
- Field IDs don't match (q3_name, q4_email, etc.)
- CORS issues (check console)
- Rate limiting (free tier: 1000 requests/day)

### 3. Styling Issues

**Debug:**
```tsx
// Check if CSS variables are applied
const element = document.documentElement;
const styles = getComputedStyle(element);
console.log("--navy color:", styles.getPropertyValue('--navy'));
console.log("--gold color:", styles.getPropertyValue('--gold'));
```

**Tools:**
- DevTools → **Elements** tab
- Inspect element (right-click → Inspect)
- See computed styles
- Toggle CSS rules on/off

### 4. API Errors

**Check response:**
```tsx
try {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error:", {
      status: response.status,
      statusText: response.statusText,
      body: errorText,
    });
    throw new Error(`API Error: ${response.status}`);
  }
  
  const data = await response.json();
  console.log("Success:", data);
} catch (error) {
  console.error("Request failed:", error);
}
```

## Performance Debugging

### React Profiler

**In code:**
```tsx
import { Profiler } from "react";

function onRenderCallback(
  id, 
  phase, 
  actualDuration, 
  baseDuration, 
  startTime, 
  commitTime
) {
  console.log("Render:", { id, phase, actualDuration });
}

<Profiler id="MyComponent" onRender={onRenderCallback}>
  <MyComponent />
</Profiler>
```

### Check Re-renders

**Use React DevTools:**
1. Open React DevTools
2. Click settings (gear icon)
3. Enable "Highlight updates when components render"
4. Interact with app - updates flash on screen

### Memory Leaks

**Check for:**
- Unmounted components with active listeners
- setInterval/setTimeout without cleanup
- Event listeners not removed

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);
  
  // Cleanup!
  return () => clearInterval(timer);
}, []);
```

## Tips and Best Practices

### 1. Use Descriptive Logs

❌ Bad:
```tsx
console.log(data);
```

✅ Good:
```tsx
console.log("User data loaded:", data);
```

### 2. Use Console Methods

```tsx
console.log("Info");      // General info
console.warn("Warning");  // Warnings
console.error("Error");   // Errors
console.table(array);     // Display arrays/objects as table
console.group("Title");   // Group related logs
console.groupEnd();
console.time("label");    // Start timer
console.timeEnd("label"); // End timer and log duration
```

### 3. Conditional Debugging

```tsx
const DEBUG = import.meta.env.DEV; // Only in development

if (DEBUG) {
  console.log("Debug info:", data);
}
```

### 4. Source Maps

Already enabled in Vite. Allows you to:
- See original source code in DevTools
- Set breakpoints in TypeScript/JSX
- Get accurate error stack traces

### 5. Error Boundaries

```tsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }
  
  render() {
    // ... render fallback UI
  }
}
```

## Keyboard Shortcuts

**Chrome/Edge DevTools:**
- `F12` / `Ctrl+Shift+I` - Open DevTools
- `Ctrl+Shift+C` - Inspect element
- `Ctrl+Shift+J` - Open console
- `Ctrl+P` - Quick open file
- `Ctrl+F` - Find in current file
- `Ctrl+Shift+F` - Find in all files

**VS Code:**
- `F5` - Start debugging
- `F9` - Toggle breakpoint
- `F10` - Step over
- `F11` - Step into
- `Shift+F11` - Step out
- `Ctrl+Shift+D` - Debug view

## Useful Extensions

**VS Code:**
- ES7+ React/Redux/React-Native snippets
- Error Lens (inline error messages)
- Console Ninja (enhanced console.log)

**Browser:**
- React Developer Tools
- Redux DevTools (if using Redux)
- Lighthouse (performance auditing)

## Need More Help?

1. Check browser console first
2. Use React DevTools to inspect components
3. Add strategic console.logs
4. Use VS Code debugger for complex issues
5. Check Network tab for API issues
6. Review this guide for specific scenarios
