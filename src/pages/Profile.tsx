
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { User, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

export default function Profile() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [isEditing, setIsEditing] = useState(false);
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  
  // Get credentials from localStorage
  const [formData, setFormData] = useState(() => {
    const savedCredentials = localStorage.getItem("userCredentials");
    return savedCredentials ? JSON.parse(savedCredentials) : {
      username: "Ranita",
      password: "123"
    };
  });

  // Local state for editing
  const [editedData, setEditedData] = useState({ ...formData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    // Update localStorage with new credentials
    localStorage.setItem("userCredentials", JSON.stringify(editedData));
    setFormData({ ...editedData });
    setIsEditing(false);
    setShowPassword(false); // Reset password visibility after save
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({ ...formData });
    setShowPassword(false); // Reset password visibility on cancel
  };

  return (
    <div className="w-full min-w-0">
      <div className="w-full p-2 sm:p-4">
        <div className="w-full rounded-2xl shadow-2xl p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Profile</h1>
          
          <div className="max-w-md mx-auto">
            {/* Username Row */}
            <div className="flex flex-col gap-1 mb-4">
              <label className={`${darkMode ? "text-gray-200" : "text-gray-700"} text-sm font-medium`}>
                UserName
              </label>
              <input
                type="text"
                name="username"
                value={isEditing ? editedData.username : formData.username}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 rounded-lg border
                  ${darkMode
                    ? "bg-gray-700 text-white border-white"
                    : "bg-white text-gray-900 border-gray-900"
                  }
                  ${!isEditing ? "bg-transparent" : ""}
                `}
              />
            </div>

            {/* Password Row with Eye Icon */}
            <div className="flex flex-col gap-1 mb-6">
              <label className={`${darkMode ? "text-gray-200" : "text-gray-700"} text-sm font-medium`}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={isEditing ? editedData.password : formData.password}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className={`w-full px-3 py-2 rounded-lg border pr-10
                    ${darkMode
                      ? "bg-gray-700 text-white border-white"
                      : "bg-white text-gray-900 border-gray-900"
                    }
                    ${!isEditing ? "bg-transparent" : ""}
                  `}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  <User size={18} />
                  Update
                </button>
              ) : (
                <>
                  <button
                    onClick={handleUpdate}
                    className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full sm:w-auto bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}