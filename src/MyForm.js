import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const MyForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password2: yup
      .string()
      .oneOf([yup.ref('password'), null], "Password don't match!!!"),
  });

  const {
    register,
    handleSubmit, formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("password2")}
        />
        {errors.password2 && <p>{errors.password2.message}</p>}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default MyForm;
