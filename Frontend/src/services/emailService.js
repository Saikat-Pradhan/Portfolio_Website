import emailjs from '@emailjs/browser';

const serviceID = 'service_3uzzh7x';
const publicKey = 'nxeF6e7SLq4IhJr8l';

export const sendContactEmail = (formData) => {
  const templateID = 'template_91fthx9';

  const templateParams = {
    full_name: formData.fullName,
    message: formData.message,
    email: formData.email,
    phone: formData.phone,
    time: new Date().toLocaleString(),
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export const sendHiringForm = (formData) => {
  const templateID = 'template_fjniejw';

  const templateParams = {
    full_name: formData.fullName,
    company_name: formData.companyName,
    job_role: formData.jobRole,
    work_type: formData.workType,
    job_type: formData.jobType,
    email: formData.email,
    phone: formData.phone,
    time: new Date().toLocaleString(),
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};
