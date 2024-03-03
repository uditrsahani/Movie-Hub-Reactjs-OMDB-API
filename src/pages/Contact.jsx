import React, { useState } from 'react';
import Hello from './Hello.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessageHandler = () =>{
    const helloMessage = document.querySelector("#sentMessage");
    helloMessage.classList.remove('hide');
    helloMessage.classList.add('show')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any actions with the form data (e.g., send it to a server or API)
    console.log('Form data submitted:', formData);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-white-400 text-black p-4 h-80vh">
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-purple rounded-md text-black focus:outline-none focus:border-purple-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-purple rounded-md focus:outline-none focus:border-purple-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-purple rounded-md focus:outline-none focus:border-purple-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-purple rounded-md focus:outline-none focus:border-purple-300"
            rows="4"
            required
          ></textarea>
        </div>
        <button
        onClick={sendMessageHandler}
        style={{color:'white'}}
          type="submit"
          className="bg-purple-500 text-white-500 p-2 rounded-md w-full focus:outline-none hover:bg-purple-300"
        >
          Send Message
        </button>
        <div className="hello-container">
      <p id='sentMessage' className="hide">Message Sent</p>
    </div>
      </form>
    </div>
  );
};

export default Contact;
