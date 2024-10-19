import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      const live_URL =
        "https://mern-blogwebapp-backend.vercel.app/api/auth/signup";
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch(live_URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === "false") {
        return setErrorMessage(data.message);
      }
      setLoading(false);

      if (res.ok) {
        setErrorMessage(null);
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] sm:min-h-[78vh] mt-20 ">
      <div className="flex flex-col p-3 max-w-3xl mx-auto md:flex-row md:items-center gap-5">
        {/* left side*/}
        <div className="flex-1">
          <Link to="/" className="font-bold  dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Piyush's
            </span>
            <span>Blog</span>
          </Link>
          <p className="text-sm mt-5">
            You can sign up with your email and password or google
          </p>
        </div>
        {/* right side*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <Label value="Your username" className="h-64" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label value="Your email" className="h-64" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label value="Your password" className="h-64 " />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading ...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
