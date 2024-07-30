import React, { useState } from 'react';
import './form.css'; 

// initialized two pieces of state: formData for the form inputs and errors for any validation errors
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',   // I set the values to empty strings to ensure that the form fields start as blank when the component is first rendered.
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const validateForm = () => {
    const { name, email, message } = formData;
    let isValid = true; //The boolean i created tracks whether the form is valid. It starts as true and is set to false if any validation errors are found
    const newErrors = { name: '', email: '', message: '' };

    if (!name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //stops the default form submission
    if (validateForm()) {  //Ensures that the form data meets validation criteria before proceeding
      console.log('Form submitted', formData);
      
    }
  };

  return (
    <div className="contact-page">
      <div className="contactUs">
        <h1>Contact Us</h1>
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span id="nameError" className="error">{errors.name}</span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span id="emailError" className="error">{errors.email}</span>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span id="messageError" className="error">{errors.message}</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// export default function ContactUs () {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const validateForm = () => {
//     const { name, email, message } = formData;
//     let isValid = true;
//     const newErrors = { name: '', email: '', message: '' };

//     if (!name) {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }
//     if (!email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//       isValid = false;
//     }
//     if (!message) {
//       newErrors.message = 'Message is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted', formData);
//       // Handle form submission logic here
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form id="myForm" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <span id="nameError" className="error">{errors.name}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <span id="emailError" className="error">{errors.email}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Enter your message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <span id="messageError" className="error">{errors.message}</span>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };


