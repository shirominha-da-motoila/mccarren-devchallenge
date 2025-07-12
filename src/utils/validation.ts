export interface ValidationRule {
  validate: (value: unknown) => boolean;
  message: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Predefined validation rules
export const validationRules = {
  url: [
    {
      validate: (value: unknown) => typeof value === 'string' && value.trim().length > 0,
      message: 'Please enter a website URL'
    },
    {
      validate: (value: unknown) => {
        if (typeof value !== 'string') return false;
        try {
          const validUrl = value.startsWith('http') ? value : `https://${value}`;
          new URL(validUrl);
          return true;
        } catch {
          return false;
        }
      },
      message: 'Please enter a valid URL'
    }
  ],
  email: [
    {
      validate: (value: unknown) => typeof value === 'string' && (value.trim().length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)),
      message: 'Please enter a valid email address'
    }
  ],
  serviceLine: [
    {
      validate: (value: unknown) => {
        if (typeof value !== 'object' || value === null) return false;
        const obj = value as { name?: string };
        return typeof obj.name === 'string' && obj.name.trim().length > 0;
      },
      message: 'Service line name is required'
    }
  ]
};

// Generic validation function
export function validateField(value: unknown, rules: ValidationRule[]): ValidationResult {
  const errors: string[] = [];
  
  for (const rule of rules) {
    if (!rule.validate(value)) {
      errors.push(rule.message);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Validate form data
export function validateFormData(data: Record<string, unknown>, rules: ValidationRules): ValidationResult {
  const errors: string[] = [];
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    const fieldValue = data[field];
    const fieldValidation = validateField(fieldValue, fieldRules);
    errors.push(...fieldValidation.errors);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
} 