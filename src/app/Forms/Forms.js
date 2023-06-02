import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DangerText from "../../components/DangerText";

const Forms = (data) => {
  

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required("Age is required"),
    password: yup.string().min(4).max(25).required(),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Don't Match"),
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
    <form action="" className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mt-3 mb-2">
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        {errors.fullName && <DangerText>{errors.fullName?.message}</DangerText>}
      </div>
      <div className="form-group mb-2">
        <input type="text" placeholder="Email..." {...register("email")} />
        {errors.email && <DangerText>{errors.email?.message}</DangerText>}
      </div>
      <div className="form-group mb-2">
        <input type="number" placeholder="Age..." {...register("age")} />
        {errors.age && <DangerText>{errors.age?.message}</DangerText>}
      </div>
      <div className="form-group mb-2">
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password && <DangerText>{errors.password?.message}</DangerText>}
      </div>
      <div className="form-group mb-2">
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("password2")}
        />
        {errors.password2 && <DangerText>{errors.password2?.message}</DangerText>}
      </div>
      <input type="submit" value="Submit" className="btn btn-primary "/>
    </form>
  );
};

export default Forms;
