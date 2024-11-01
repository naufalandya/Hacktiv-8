import { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';


const photoUrl = 'https://ik.imagekit.io/eoeykxtr4/sadiamaramThu_Oct_31_2024_04_21_43_GMT_0700__Western_Indonesia_Time__DxGTq3ZVl?updatedAt=1730323305826';
const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    role: '',
    availability: '',
    location: '',
    experience: '',
    email: '',
  });

  useEffect(() => {    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-[#ffffff] rounded-md border border-[#11111128] text-gray-900 font-semibold max-w-4xl w-full">
        <div className="w-1/3 bg-gray-200 flex justify-center items-center p-4">
          <img
            src={photoUrl} 
            alt="Profile"
            className="rounded-full w-40 h-40 object-cover"
          />
        </div>

        <div className="w-2/3 p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{profileData.name || 'Name not set'}</h2>

          <div className="p-4 bg-[#ffffff] rounded-md border border-[#11111128] text-gray-900">
            <strong>Role:</strong> <span>{profileData.role || 'Role not set'}</span>
          </div>

          <div className="p-4 bg-[#ffffff] rounded-md border border-[#11111128] text-gray-900">
            <strong>Availability:</strong> <span>{profileData.availability || 'Availability not set'}</span>
          </div>

          <div className="p-4 bg-[#ffffff] rounded-md border border-[#11111128] text-gray-900">
            <strong>Location:</strong> <span>{profileData.location || 'Location not set'}</span>
          </div>

          <div className="p-4 bg-[#ffffff] rounded-md border border-[#11111128] text-gray-900">
            <strong>Years of Experience:</strong> <span>{profileData.experience || 'Experience not set'}</span>
          </div>

          <div className="p-4 bg-[#ffffff] rounded-md border border-[#11111128] text-gray-900">
            <strong>Email:</strong> <span>{profileData.email || 'Email not set'}</span>
          </div>

          <Link 
              to="/form" 
              className="text-gray-900 font-semibold hover:text-blue-500 transition"
            >
              Edit
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Profile;
