import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

function AuthComponent() {
  const [formSelected, setFormSelected] = useState("login");
  const isLogin = formSelected === "login";
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { push } = useRouter();

  const getValues = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handlerCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/register`, {
        userName: data.username,
        email: data.email,
        password: data.password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log(res);
      if (res.ok) {
        toast.success("login successful");
        push(`/`);
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <form
        onSubmit={
          formSelected === "login" ? handlerLogin : handlerCreateAccount
        }
        action=""
        className="shadow-xl h-auto bg-gray-50 md:w-[50%] xl:w-[38%] px-6 py-12 rounded-lg"
      >
        {/* First Col */}
        <div>
          <h2 className="text-gray-500 text-2xl font-semibold">
            {isLogin ? "Login" : "Create Account"}
          </h2>
          <span className="my-4 block text-gray-600 text-sm">
            Please {isLogin ? "log in" : "sign up"} to book appointment
          </span>
        </div>
        {/* Second Col */}
        <div className="flex flex-col justify-center gap-y-4 ">
          {!isLogin && (
            <div>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                type="text"
                name="username"
                required
                onChange={getValues}
                value={data.username}
              />
            </div>
          )}
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              required
              onChange={getValues}
              value={data.email}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              name="password"
              required
              onChange={getValues}
              value={data.password}
            />
          </div>
        </div>
        {/* 3 Col */}
        <div className="flex flex-col justify-center gap-y-6">
          <Button
            type="submit"
            fullWidth
            className="bg-main-color hover:bg-[#5362e2] transition-colors duration-100 text-white mt-6"
          >
            {isLogin ? "login" : "Create account"}
          </Button>
          <p className="text-sm font-semibold text-gray-600">
            {isLogin ? " Create an new account?" : " Already have an account?"}

            <span
              onClick={() =>
                setFormSelected((prev) =>
                  prev === "login" ? "register" : "login"
                )
              }
              className="text-main-color tracking-wider hover:text-[#5362e2] transition-colors duration-100  font-bold underline cursor-pointer ml-1"
            >
              {isLogin ? "Click Here" : "Login Here"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthComponent;
