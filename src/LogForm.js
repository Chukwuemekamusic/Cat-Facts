import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LogForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required!!!"),
    password: yup
      .string()
      .min(6, "Password incorrect!")
      .required("Password is needed"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-3 mb-2">
          <input
            type="text"
            placeholder="Your Email Address"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            placeholder="Your Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <input type="submit" value="Login" className="btn btn-primary"/>
      </form>
    </div>
  );
};

export default LogForm;
