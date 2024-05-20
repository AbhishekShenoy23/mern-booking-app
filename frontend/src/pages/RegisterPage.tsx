import { useForm } from "react-hook-form";
import { ApiError, UserForm } from "../constants/constant";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerHttp } from "../api-client/http";
import { useStatusContext } from "../context/StatusContext";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserForm>();

  const { information, setInformation } = useStatusContext();

  const mutation = useMutation({
    mutationFn: registerHttp,
    onSuccess: (data) => {
      console.log(data);
      setInformation({
        type: "success",
        message: "Registered Successfully tin",
      });
      console.log(information);
    },
    onError: (error) => {
      console.log(error.message, "Error loadingPukkk");
      setInformation({
        type: "Failure",
        message: error.message,
      });
    },
  });

  const onSubmit = (data: UserForm) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <form
      className="flex flex-col gap-5 mx-auto container  py-2 border-2 border-blue-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-3xl font-bold">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded-md w-full py-1 px-2 font-normal"
            {...register("fname", {
              required: { value: true, message: "First Name is Required" },
            })}
          ></input>
          {errors.fname && <span>{errors.fname.message}</span>}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            type="text"
            className="border rounded-md w-full py-1 px-2 font-normal"
            {...register("lname", {
              required: { value: true, message: "Last Name is Required" },
            })}
          ></input>
          {errors.lname && <span>{errors.lname.message}</span>}
        </label>
      </div>
      <div>
        <label className="text-sm font-bold text-gray-700">
          Email
          <input
            type="text"
            className="font-normal border rounded-md w-full py-1 px-2"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
      </div>
      <div>
        <label className="text-sm font-bold text-gray-700">
          Password
          <input
            type="password"
            className="border rounded-md px-2 py-1 font-normal w-full"
            {...register("password", {
              required: { value: true, message: "Email is required" },
              minLength: {
                value: 6,
                message: "Min length of 6 Characters required",
              },
            })}
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
        </label>
      </div>
      <div>
        <label className="text-sm font-bold text-gray-700">
          Confirm Password
          <input
            type="password"
            className="border rounded-md px-2 py-1 font-normal w-full"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "Please enter your password";
                } else if (watch("password") !== val) {
                  return "Password did not match";
                }
              },
            })}
          ></input>
          {errors.confirmPassword && errors.confirmPassword.message}
        </label>
      </div>
      <div className="flex items-center  justify-between">
        <Link to="/login" className="text-blue-600">
          Already have an Account. <span className=" underline">Sign In</span>
        </Link>
        <button
          type="submit"
          className="border rounded-md bg-blue-600 text-white px-2 py-1  w-[30%]"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
