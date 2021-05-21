import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import footerFormStyles from "../../styles/Home.module.scss";

function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async () => {
    // await login(data.email, data.password);
    alert("Updates will be sent in your email");
    reset();
  };

  return (
    <div className={footerFormStyles["footer-form-wrapper"]}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={footerFormStyles["footer-form-content"]}
      >
        <section className={footerFormStyles["footer-form-validation"]}>
          {errors.email ? (
            <TextField
              error
              variant="filled"
              label="Enter Gmail"
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please insert a valid email",
                },
              })}
              className={footerFormStyles["footer-textfield-error"]}
              type="email"
              placeholder="example@gmail.com"
              InputLabelProps={{
                style: {
                  color: " hsl(12, 88%, 59%)",
                  fontWeight: "400",
                },
              }}
              InputProps={{
                style: {
                  color: "#fff",
                  fontWeight: "400",
                },
              }}
            />
          ) : (
            <TextField
              label="Enter Gmail"
              id="email"
              variant="filled"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please insert a valid email",
                },
              })}
              className={footerFormStyles["footer-textfield"]}
              type="email"
              placeholder="Updates in your inbox..."
              InputLabelProps={{
                style: {
                  color: "#fff",
                  fontWeight: "400",
                },
              }}
              InputProps={{
                style: {
                  color: "#fff",
                  fontWeight: "400",
                },
              }}
            />
          )}

          {errors.email && (
            <span role="alert" className={footerFormStyles["form-error"]}>
              {errors.email.message}
            </span>
          )}
        </section>
        <Button
          type="submit"
          variant="contained"
          className={footerFormStyles["footer-form-button"]}
        >
          Go
        </Button>
      </form>
    </div>
  );
}

export default FooterForm;
