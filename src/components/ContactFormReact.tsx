import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  interestedIn: string;
  licenseType: string;
  projectDetails: string;
}

export default function ContactFormReact() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interestedIn: '',
      licenseType: '',
      projectDetails: ''
    }
  });

  const interestOptions = ['AX', 'BX', 'CX', 'DX'];
  const licenseOptions = ['Free Trial', 'CX1', 'CX2'];
  
  const currentInterest = watch('interestedIn');
  const currentLicense = watch('licenseType');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!data.interestedIn || !data.licenseType) {
      alert('Please select both an interest and a license type');
      return;
    }

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        interested_in: data.interestedIn,
        license_type: data.licenseType,
        project_details: data.projectDetails
      };

      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      if (result.status === 200) {
        reset(); // Reset form after successful submission
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-[#E7E7D6]" id="contact">
      <div className="max-w-3xl mx-auto px-6 border-2 border-black/10 p-8 rounded-[3rem]">
        <h2 className="akira">Ready to stand out and grow?</h2>
        <p className="text-gray-500 akira font-semibold">
          Share your goals and ideas with us, and we'll get back to you within 24-48 hours.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8 ">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium text-gray-900">Your name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium text-gray-900">Email Address</label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium text-gray-900">Phone Number</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-gray-900">What are you interested in?</label>
            <div className="flex flex-wrap gap-3">
              {interestOptions.map((option) => (
                <label
                  key={option}
                  className={`px-5 py-2.5 rounded-full border-2 transition-all flex items-center gap-2 cursor-pointer
                    ${currentInterest === option 
                      ? 'bg-orange-500 border-orange-500 text-white' 
                      : 'border-gray-200 hover:border-black hover:bg-black/5'}`}
                >
                  <input
                    type="radio"
                    {...register("interestedIn", { required: "Please select an interest" })}
                    value={option}
                    className="sr-only"
                  />
                  {currentInterest === option && (
                    <span className="text-sm">✓</span>
                  )}
                  {option}
                </label>
              ))}
            </div>
            {errors.interestedIn && (
              <p className="text-red-500 text-sm mt-1">{errors.interestedIn.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-gray-900">Select your License type</label>
            <div className="flex flex-wrap gap-3">
              {licenseOptions.map((option) => (
                <label
                  key={option}
                  className={`px-5 py-2.5 rounded-full border-2 transition-all flex items-center gap-2 cursor-pointer
                    ${currentLicense === option 
                      ? 'bg-orange-500 border-orange-500 text-white' 
                      : 'border-gray-200 hover:border-black hover:bg-black/5'}`}
                >
                  <input
                    type="radio"
                    {...register("licenseType", { required: "Please select a license type" })}
                    value={option}
                    className="sr-only"
                  />
                  {currentLicense === option && (
                    <span className="text-sm">✓</span>
                  )}
                  {option}
                </label>
              ))}
            </div>
            {errors.licenseType && (
              <p className="text-red-500 text-sm mt-1">{errors.licenseType.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="projectDetails" className="block font-medium text-gray-900">Project Details</label>
            <textarea
              {...register("projectDetails", { required: "Project details are required" })}
              placeholder="Briefly describe your project or needs"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all"
            />
            {errors.projectDetails && (
              <p className="text-red-500 text-sm mt-1">{errors.projectDetails.message}</p>
            )}
          </div>

          <div className="flex justify-center sm:justify-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg uppercase tracking-wider
                transition-all transform hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}