import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import  uploadImage from "../../utils/uploadImage"; 
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  // Handle Sign Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if(!password){
      setError("please enter the password")
      return
    }
    setError("")

   // SignUp API Call
try {
  // Upload image if present
if (profilePic) {
  const imgUploadRes = await uploadImage(profilePic);
  profileImageUrl = imgUploadRes.imageUrl || '';
}

  const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
    fullName,
    email,
    password,
    profileImageUrl
  });

  const { token, user } = response.data;

  if (token) {
    localStorage.setItem("token", token);
    updateUser(user);
    navigate("/dashboard");
  }
} catch (error) {
  if (error.response && error.response.data.message) {
    setError(error.response.data.message);
  } else {
    setError("Something went wrong. Please try again.");
  }
}
  }


  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        {/* Profile Photo Selector */}
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        {/* Heading */}
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />
          </div>

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-slate-700 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
