import { useState } from 'react';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    zipCode: '',
    suggestions: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'signups'), formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        companyName: '',
        email: '',
        zipCode: '',
        suggestions: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleChange}
        required
      />
      <textarea
        name="suggestions"
        placeholder="Suggestions"
        value={formData.suggestions}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
