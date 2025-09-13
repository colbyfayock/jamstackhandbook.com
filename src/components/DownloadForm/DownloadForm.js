import { useState } from 'react';
import styles from './DownloadForm.module.scss';

import Button from '../Button';

const DownloadForm = ({ 
  disabled = false, 
  className = '',
  onSubmit,
  onSuccess,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    onSubmit?.()
    
    try {
      const formData = new FormData(e.target);

      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      const result = await response.json();
      
      if (result.success) {
        onSuccess?.(result);
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        }
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      onError?.(error);
    } finally {
      
      setIsLoading(false);
    }
  };

  return (
    <form 
      className={`${styles.form} downloadform ${className}`} 
      onSubmit={handleSubmit}
      action="https://mailtik.spacejelly.dev/api/forms/jamstack-handbook"
      method="POST"
    >
      <input 
        type="text" 
        autoComplete="off" 
        tabIndex={-1} 
        style={{
          position: "absolute",
          left: "-9999px",
          width: "0",
          height: "0",
          border: "0",
          padding: "0",
          margin: "0",
          overflow: "hidden"
        }} 
        name="phone" 
        defaultValue="" 
        readOnly 
      />
      <input type="hidden" name="redirect" value="https://jamstackhandbook.com/" />
      <input type="hidden" name="tags" value="location:jamstackhandbook.com" />
      <input 
        type="email" 
        name="email" 
        placeholder="Enter your email" 
        required 
        className={styles.emailInput}
        disabled={disabled || isLoading}
      />
      <Button type="submit" className={styles.submitButton} disabled={disabled || isLoading} isLoading={isLoading}>
        Download Free
      </Button>
    </form>
  );
};

export default DownloadForm;