import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [showMessage, setShowMessage] = useState(false);


  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setShowMessage(false); // reset message visibility

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setShowMessage(true);

    // Auto-hide message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
      setStatus('idle');
    }, 5000);
  };


  return (
    <>
      <div id='contact' className='text-[30px] font-pop h-auto text-white'>
        <h1 className='text-center font-sans font-semibold text-[1em] cursor-pointer sm:text-[2.5em]'>
          -Let's Talk!-
        </h1>

        <div className='flex flex-col sm:flex-row py-2'>
          <div id='Img_Div' className='sm:flex w-[100%] sm:w-[50%] justify-center'>
            <h1 className='sm:text-[1em] text-[0.5em] font-sans p-4 w-[100%] mt-4'>
              Whether you have an idea, a project, or just want to say hello — I'm always open to meaningful conversations.
              Feel free to reach out using the form or through my social channels. I aim to respond promptly and look forward
              to exploring how we can team up or create something impressive together.
            </h1>
          </div>

          <div id='Form_Div' className='h-auto text-black flex rounded-lg items-center justify-center'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col cursor-pointer h-auto rounded bg-myGradient4 gap-2 sm:px-20 px-2 py-8 sm:py-20 sm:w-[35vw] w-[80vw] text-[30px]'
            >
              <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border text-[0.4em] sm:text-[0.6em] py-3 px-8 rounded w-[100%]'
                placeholder='Your Name'
                type='text'
                required
              />

              <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border text-[0.4em] sm:text-[0.6em] py-3 px-8 rounded w-[100%]'
                placeholder='Your Email'
                type='email'
                required
              />

              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='border text-[0.4em] sm:text-[0.6em] w-[100%] rounded h-[200px] py-2 px-8'
                placeholder='Your Message'
                required
              />

              <button
                type='submit'
                className='text-base sm:text-xl rounded animated-btn p-2'
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* ✅ Success / Error Message */}
              {showMessage && status === 'success' && (
                <p className='text-green-600 text-[0.5em] sm:text-[0.7em] pt-2 transition-opacity duration-300'>
                  ✅ Thanks! Your message has been sent successfully.
                </p>
              )}

              {showMessage && status === 'error' && (
                <p className='text-red-600 text-[0.5em] sm:text-[0.7em] pt-2 transition-opacity duration-300'>
                  ⚠️ Oops! Something went wrong. Please try again later.
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
