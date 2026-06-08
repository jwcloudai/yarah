# JotForm Integration

## Overview

The Yarah Life website uses JotForm for form submissions and contact management.

## Configuration

### Environment Variables

Create a `.env.local` file in the project root (already done):

```env
VITE_JOTFORM_API_KEY=your_api_key_here
VITE_JOTFORM_FORM_ID=your_form_id_here
```

**Current Configuration:**
- Form ID: `261582875886073`
- API Key: Stored in `.env.local` (never commit this!)

### Files Created

1. **`.env.local`** - Stores sensitive API credentials (gitignored)
2. **`.env.example`** - Template for environment variables
3. **`src/components/JotFormEmbed.tsx`** - Embeddable JotForm iframe component
4. **`src/components/ContactForm.tsx`** - Styled contact form section
5. **`src/lib/jotform.ts`** - JotForm API utility functions

## Usage

### Embedding a Form

The component uses JotForm's JavaScript embed code which renders the form directly on the page (not in an iframe).

#### Option 1: Use the ContactForm Component (Recommended)

```tsx
import { ContactForm } from "@/components/ContactForm";

export function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
```

#### Option 2: Use JotFormEmbed Directly

```tsx
import { JotFormEmbed } from "@/components/JotFormEmbed";

export function MyForm() {
  return (
    <JotFormEmbed 
      formId="261582875886073"  // Optional, uses env var by default
      className="my-custom-class"
    />
  );
}
```

### Embed Method

The component uses the **JavaScript embed** method:
```html
<script type="text/javascript" src="https://form.jotform.com/jsform/{formId}"></script>
```

**Benefits:**
- Native look and feel (not an iframe)
- Fully responsive
- Better integration with your site's styles
- Automatic height adjustment
- No scrolling issues

### Using the API

#### Submit Form Programmatically

```tsx
import { submitForm } from "@/lib/jotform";

const handleSubmit = async () => {
  try {
    const result = await submitForm({
      q3_name: "John Doe",
      q4_email: "john@example.com",
      q5_message: "Hello from the website!",
    });
    
    console.log("Submitted:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

**Note:** Field IDs (like `q3_name`, `q4_email`) are specific to your form. Find them in JotForm form builder.

#### Use the Custom Contact Form Component

For a fully custom form that submits via API:

```tsx
import { CustomContactForm } from "@/components/CustomContactForm";

<CustomContactForm />
```

This gives you full control over styling and validation while using the JotForm API backend.

#### Fetch Submissions

Fetch form submissions:

```tsx
import { getFormSubmissions } from "@/lib/jotform";

async function loadSubmissions() {
  try {
    const response = await getFormSubmissions("261582875886073", {
      limit: 10,
      orderBy: "created_at"
    });
    
    console.log(response.content); // Array of submissions
  } catch (error) {
    console.error("Failed to load submissions:", error);
  }
}
```

Get a specific submission:

```tsx
import { getSubmission } from "@/lib/jotform";

async function loadSubmission(id: string) {
  const response = await getSubmission(id);
  console.log(response.content.answers);
}
```

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit `.env.local`** - It's already gitignored
2. **API Key Protection** - The API key should only be used server-side for sensitive operations
3. **Public Forms** - The embedded form is safe for public use
4. **Backend Processing** - For sensitive data operations, consider using a backend API route

## JotForm Dashboard

Access your forms at: https://www.jotform.com/myforms/

- View submissions
- Edit form fields
- Configure notifications
- Export data

## API Documentation

Full JotForm API docs: https://api.jotform.com/docs/

### Available API Functions

- `submitForm(formData, formId?)` - Submit form data to JotForm API
- `getForm(formId)` - Get form details
- `getFormSubmissions(formId, options)` - Get form submissions with filtering
- `getSubmission(submissionId)` - Get a specific submission
- `getFormProperties(formId)` - Get form properties
- `getFormQuestions(formId)` - Get form questions

## Common Use Cases

### 1. Display Embedded JotForm (Easiest)

Use JotForm's native embed - best for quick setup:

```tsx
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return <ContactForm />;
}
```

### 2. Custom Form with API Submission

Full control over design, use JotForm as backend:

```tsx
import { CustomContactForm } from "@/components/CustomContactForm";

export default function Contact() {
  return <CustomContactForm />;
}
```

**Important:** Update field IDs in `CustomContactForm.tsx` to match your form:
- Go to JotForm form builder
- Click on each field to see its ID (e.g., `q3`, `q4`, `q5`)
- Update the `submitForm()` call with correct field names

### 3. Display Form on Contact Page

Add to your routes:

```tsx
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return <ContactForm />;
}
```

### 4. Embed in a Modal/Dialog

```tsx
import { JotFormEmbed } from "@/components/JotFormEmbed";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function ContactModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
        <JotFormEmbed />
      </DialogContent>
    </Dialog>
  );
}
```

### 5. Multiple Forms

You can use multiple forms by passing different form IDs:

```tsx
<JotFormEmbed formId="261582875886073" />
<JotFormEmbed formId="another_form_id" />
```

## Styling

The `ContactForm` component uses the site's design system:
- Navy and crimson accent colors
- Gold decorative elements
- Responsive layout
- Rounded corners with shadows

Customize by modifying `src/components/ContactForm.tsx`.

## Troubleshooting

**Form not loading?**
- Check that `VITE_JOTFORM_FORM_ID` is set in `.env.local`
- Verify the form ID is correct in JotForm dashboard
- Check browser console for errors

**API calls failing?**
- Verify `VITE_JOTFORM_API_KEY` is correct
- Check API key permissions in JotForm settings
- Ensure you're not hitting rate limits (1000 requests/day for free tier)

## Next Steps

1. Add the ContactForm to your main page or create a dedicated contact route
2. Configure form notifications in JotForm dashboard
3. Customize the form fields as needed
4. Set up email integrations in JotForm
