import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
  setIsLoading(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_SECRET_KEY
    ).then((result) => {
      alert('Message Sent Successfully');
      setIsLoading(false);
      setFormData({
        from_name: '',
        from_email: '',
        message: '',
      });
    }, (error) => {
      console.error('Error:', error);
      alert('An error occurred, please try again');
      setIsLoading(false);
    });
  };

  return (
    <section id="Contact" className="min-h-screen bg-gray-800 flex flex-col items-center justify-center  border-sky-600 border-y-2">
      <h1 className="text-4xl text-white font-bold mb-8 underline shadow-xl">Contact Me</h1>
      <form onSubmit={sendEmail} className="w-full max-w-lg  p-8 rounded-lg shadow-2xl  animated-border">
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="from_name">
           Full Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder='Enter Full Name'
            id="from_name"
            required
            value={formData.from_name}
            onChange={handleChange}
            className="shadow appearance-none border font-bold rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg  font-bold mb-2 text-white" htmlFor="from_email">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            placeholder='Enter email-address'
            required
            value={formData.from_email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder='Kindly type your Email-address once again here...'
            required
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none  border rounded w-full py-2 px-3 text-xl leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          {isLoading ? (
            <button type="button" className="bg-black font-bold py-2 px-4 rounded">
              <span className="animate-spin">🔃</span>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
