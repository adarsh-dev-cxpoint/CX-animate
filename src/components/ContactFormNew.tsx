import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

interface FormInputs {
  user_name: string;
  user_email: string;
  user_phone: string;
  interested_in: string;
  license_type: string;
  message: string;
}

export default function ContactFormNew() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [selectedInterest, setSelectedInterest] = useState('');
  const [selectedLicense, setSelectedLicense] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      interested_in: "",
      license_type: "",
      message: ""
    }
  });

  const interestOptions = ['AX', 'BX', 'CX', 'DX'];
  const licenseOptions = ['Free Trial', 'CX1', 'CX2', 'CX3'];
  
  const handleInterestSelect = (option: string) => {
    setSelectedInterest(option);
    setValue('interested_in', option, { 
      shouldValidate: true, 
      shouldDirty: true 
    });
  };

  const handleLicenseSelect = (option: string) => {
    setSelectedLicense(option);
    setValue('license_type', option, { 
      shouldValidate: true, 
      shouldDirty: true 
    });
  };

  const resetForm = () => {
    setSelectedInterest('');
    setSelectedLicense('');
    reset();
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data , e) => {
    // Prevent default form submission
    e.preventDefault();

    // Additional validation for interest and license
    if (!selectedInterest || !selectedLicense) {
      setSubmitStatus({
        type: "error",
        message: "Please select both an interest and a license type"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (!form.current) {
        throw new Error('Form ref is null');
      }

      // Ensure all form data is correctly set
      setValue('interested_in', selectedInterest);
      setValue('license_type', selectedLicense);

      // Send form using emailjs
      const response = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      // Handle successful submission
      resetForm();
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully."
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error 
          ? error.message 
          : "Failed to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="form">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Start a Conversation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">
          <form 
            ref={form} 
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              handleSubmit(onSubmit)(e);
            }} 
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("user_name", { 
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
              {errors.user_name && (
                <p className="mt-1 text-sm text-red-600">{errors.user_name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="john@example.com"
              />
              {errors.user_email && (
                <p className="mt-1 text-sm text-red-600">{errors.user_email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("user_phone", { 
                  required: "Phone number is required",
                  pattern: {
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Invalid phone number"
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="+1 (555) 000-0000"
              />
              {errors.user_phone && (
                <p className="mt-1 text-sm text-red-600">{errors.user_phone.message}</p>
              )}
            </div>

            {/* Interested In Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I'm Interested In
              </label>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {interestOptions.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`interest-${option}`}
                      {...register("interested_in", { 
                        required: "Please select an interest" 
                      })}
                      value={option}
                      checked={selectedInterest === option}
                      onChange={() => handleInterestSelect(option)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor={`interest-${option}`}
                      className="ml-2 block text-sm font-medium text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {errors.interested_in && (
                <p className="mt-1 text-sm text-red-600">{errors.interested_in.message}</p>
              )}
            </div>

            {/* License Type Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Type
              </label>
              <div className="grid grid-cols-4 gap-4">
                {licenseOptions.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`license-${option}`}
                      {...register("license_type", { 
                        required: "Please select a license type" 
                      })}
                      value={option}
                      checked={selectedLicense === option}
                      onChange={() => handleLicenseSelect(option)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor={`license-${option}`}
                      className="ml-2 block text-sm font-medium text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {errors.license_type && (
                <p className="mt-1 text-sm text-red-600">{errors.license_type.message}</p>
              )}
            </div>

            {/* Project Details Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Details
              </label>
              <textarea
                {...register("message", { 
                  required: "Project details are required",
                  minLength: {
                    value: 10,
                    message: "Please provide more details about your project"
                  }
                })}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-md ${
                submitStatus.type === "success" 
                  ? "bg-green-50 text-green-800" 
                  : "bg-red-50 text-red-800"
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}