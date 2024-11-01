import { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    availability: '',
    location: '',
    experience: '',
    email: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data saved to local storage!');
    setFormData({
      name: '',
      role: '',
      availability: '',
      location: '',
      experience: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md border border-gray-300 text-gray-900 font-semibold max-w-md mx-auto">
      <div className="mb-2">
        <label className="block text-sm mb-1 text-left" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border-gray-300 border-[1px]"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1 text-left" htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border-gray-300 border-[1px]"
        >
          <option value="">Select a role</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1 text-left" htmlFor="availability">Availability</label>
        <select
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border-gray-300 border-[1px]"
        >
          <option value="">Select availability</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Intern">Intern</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1 text-left" htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border-gray-300 border-[1px]"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1 text-left" htmlFor="experience">Years of Experience</label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border-gray-300 border-[1px]"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1 text-left" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border-gray-300 border-[1px]"
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-black text-white rounded-md font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
