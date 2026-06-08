/**
 * JotForm API Utility
 * Documentation: https://api.jotform.com/docs/
 */

const API_KEY = import.meta.env.VITE_JOTFORM_API_KEY;
const FORM_ID = import.meta.env.VITE_JOTFORM_FORM_ID;
const BASE_URL = "https://api.jotform.com";

interface JotFormSubmission {
  id: string;
  form_id: string;
  ip: string;
  created_at: string;
  status: string;
  new: string;
  flag: string;
  notes: string;
  updated_at: string;
  answers: Record<string, any>;
}

interface JotFormResponse<T> {
  responseCode: number;
  message: string;
  content: T;
  duration: string;
  info: string;
}

interface SubmitFormData {
  [key: string]: string | number | boolean;
}

/**
 * Submit form data to JotForm API
 * @param formData Object with field IDs as keys (e.g., { q3_name: "John", q4_email: "john@example.com" })
 * @param formId Optional form ID (defaults to env variable)
 */
export async function submitForm(
  formData: SubmitFormData,
  formId: string = FORM_ID
) {
  if (!API_KEY) {
    throw new Error("VITE_JOTFORM_API_KEY is not set");
  }

  if (!formId) {
    throw new Error("Form ID is required");
  }

  const data = new URLSearchParams();
  
  // Append all form fields
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, String(value));
  });

  const response = await fetch(
    `${BASE_URL}/form/${formId}/submissions?apiKey=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to submit form: ${response.statusText}`);
  }

  return response.json() as Promise<JotFormResponse<JotFormSubmission>>;
}

/**
 * Fetch form details
 */
export async function getForm(formId: string) {
  const response = await fetch(`${BASE_URL}/form/${formId}?apiKey=${API_KEY}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch form: ${response.statusText}`);
  }
  
  return response.json() as Promise<JotFormResponse<any>>;
}

/**
 * Fetch form submissions
 */
export async function getFormSubmissions(
  formId: string,
  options?: {
    limit?: number;
    offset?: number;
    filter?: Record<string, any>;
    orderBy?: string;
  }
) {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    limit: String(options?.limit || 20),
    offset: String(options?.offset || 0),
    ...(options?.orderBy && { orderby: options.orderBy }),
  });

  if (options?.filter) {
    params.append("filter", JSON.stringify(options.filter));
  }

  const response = await fetch(
    `${BASE_URL}/form/${formId}/submissions?${params.toString()}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch submissions: ${response.statusText}`);
  }
  
  return response.json() as Promise<JotFormResponse<JotFormSubmission[]>>;
}

/**
 * Get a specific submission
 */
export async function getSubmission(submissionId: string) {
  const response = await fetch(
    `${BASE_URL}/submission/${submissionId}?apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch submission: ${response.statusText}`);
  }
  
  return response.json() as Promise<JotFormResponse<JotFormSubmission>>;
}

/**
 * Get form properties
 */
export async function getFormProperties(formId: string) {
  const response = await fetch(
    `${BASE_URL}/form/${formId}/properties?apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch form properties: ${response.statusText}`);
  }
  
  return response.json() as Promise<JotFormResponse<any>>;
}

/**
 * Get form questions
 */
export async function getFormQuestions(formId: string) {
  const response = await fetch(
    `${BASE_URL}/form/${formId}/questions?apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch form questions: ${response.statusText}`);
  }
  
  return response.json() as Promise<JotFormResponse<any>>;
}
