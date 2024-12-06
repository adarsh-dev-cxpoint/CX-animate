import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY);


export const emailConfig = {
  serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
}; 