import React from "react";
import emailjs from "@emailjs/browser";

const About = () => {
  const form = React.useRef();
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState();
  const errorData = [];
  const [isLoading, setIsLoading] = React.useState(false);
  const [resultText, setResultText] = React.useState(false);

  const clearField = () => {
    document
      .querySelectorAll(["input", "textarea"])
      .forEach((input) => (input.value = ""));
    setFormData({});
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleFormOnValidate = (name, value) => {
    if (!value) {
      return "Mohon di isi";
    }

    if (name === "username" && value.length < 5) {
      return "Username minimal 5 karakter";
    }

    if (name === "email" && !value.includes("@")) {
      return "Format email tidak sesuai";
    }

    if (name === "message" && value.length < 10) {
      return "Username minimal 10 karakter";
    }

    return false;
  };

  const handleFormOnSubmitValidation = () => {
    const fields = formData;
    const names = Object.keys(fields);
    const errors = {};
    names.forEach((name) => {
      const value = fields[name];
      const error = handleFormOnValidate(name, value);
      errors[name] = error;
    });
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const validation = handleFormOnSubmitValidation();
    setErrors({ errors: validation });
    if (
      errors &&
      errors.errors.username == false &&
      errors.errors.email == false &&
      errors.errors.message == false
    ) {
      emailjs
        .sendForm(
          "service_8j9mxe5",
          "template_710j2cc",
          form.current,
          "hQWghMUZo6ytdRLKy"
        )
        .then(
          (result) => {
            setResultText(true);
            setTimeout(() => {
              setResultText(false);
            }, 2000);
            clearField();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsLoading(false);

          console.log(form);
        });
    } else {
      setIsLoading(false);
    }
  };
  const ErrorMessage = (data_key) => {
    //   Username
    if (data_key.data_key === "username") {
      if (errors && errors.errors.username) {
        return (
          <div className="text-base font-medium text-red-500 px-1">
            {errors.errors.username}
          </div>
        );
      }
    }
    // Email
    if (data_key.data_key === "email") {
      if (errors && errors.errors.email) {
        return (
          <div className="text-base font-medium text-red-500 px-1">
            {errors.errors.email}
          </div>
        );
      }
    }
    // Message
    if (data_key.data_key === "message") {
      if (errors && errors.errors.message) {
        return (
          <div className="text-base font-medium text-red-500 px-1">
            {errors.errors.message}
          </div>
        );
      }
    }
  };

  const MessageResult = () => {
    if (resultText == true) {
      return (
        <div className="w-full flex justify-center lg:justify-end  px-5">
          <div className="fixed bottom-10 bg-green-500 rounded-md text-white font-medium text-lg px-10 py-3 transition-all ease-out duration-300">
            Berhasil
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <section className="min-h-[150px] bg-primaryBlue flex py-8 overflow-hidden flex-col">
      <div className="flex lg:flex-row w-full px-5 md:px-10">
        <div className="flex w-full   flex-col ">
          <div className="font-bold text-2xl text-white sm:text-3xl md:text-5xl  ">
            Let's Talk
          </div>
          <div className="font-normal text-base text-white pt-3 sm:text-lg md:text-xl  md:pt-5">
            Apabila ada pertanyaan atau ingin melakukan kerja sama, isi form di
            bawah!
          </div>
          <div className="font-bold text-lg text-primary pt-5 sm:text-xl md:text-4xl  md:pt-16">
            xacpro@gmail.com
          </div>
          <div className="font-normal text-lg text-white pt-2 sm:text-xl md:text-3xl  md:pt-5">
            Instagram: @althafano
          </div>
          <div className="font-normal text-lg text-white pt-2 sm:text-xl md:text-3xl  md:pt-5">
            Whatsapp: +62 8955 4218 78589
          </div>
        </div>
        <div className=" w-full flex-col hidden lg:flex">
          <div className="font-bold text-2xl text-white sm:text-3xl md:text-5xl  ">
            Let Me Know Here
          </div>
          <div className="pt-5 md:pt-8">
            <form onSubmit={handleSubmit} ref={form}>
              <div>
                <input
                  disabled={isLoading}
                  onChange={handleChange}
                  name="username"
                  value={formData.username}
                  className="min-w-[500px] min-h-[50px] rounded-md px-3 py-3 text-lg font-semibold bg-background text-white"
                  type="text"
                  placeholder="Enter your full name"
                />
                <ErrorMessage data_key={"username"} />
              </div>
              <div className="pt-5">
                <input
                  disabled={isLoading}
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  className="min-w-[500px] min-h-[50px] rounded-md px-3 py-3 text-lg font-semibold bg-background  text-white"
                  type="text"
                  placeholder="Enter your full email address"
                />
                <ErrorMessage data_key={"email"} />
              </div>
              <div className="pt-5">
                <textarea
                  disabled={isLoading}
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  className="min-w-[500px] min-h-[200px] rounded-md px-3 py-3 text-lg font-semibold bg-background text-white "
                  type="text"
                  placeholder="Write message"
                />
                <ErrorMessage data_key={"message"} />
              </div>
              <div className="pt-8 w-[500px] justify-end flex">
                <button
                  disabled={isLoading}
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-md border-white hover:border-primary border-solid border-2 text-white hover:scale-105 hover:text-primary"
                >
                  <div className=" font-semibold text-lg   duration-300 px-5 ">
                    Send
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=" w-full flex-col flex lg:hidden px-5 md:px-10 mt-10">
        <div className="font-bold text-2xl text-white sm:text-3xl md:text-5xl  ">
          Let Me Know Here
        </div>
        <div className="pt-5 md:pt-8">
          <form onSubmit={handleSubmit} ref={form}>
            <div>
              <input
                disabled={isLoading}
                onChange={handleChange}
                name="username"
                defaultValue={formData.username}
                className=" w-full min-h-[50px] rounded-md px-3 py-3 text-lg font-semibold bg-background text-white"
                type="text"
                placeholder="Enter your full name"
              />
              <ErrorMessage data_key={"username"} />
            </div>
            <div className="pt-5">
              <input
                disabled={isLoading}
                onChange={handleChange}
                name="email"
                defaultValue={formData.email}
                className="w-full min-h-[50px] rounded-md px-3 py-3 text-lg font-semibold bg-background  text-white"
                type="text"
                placeholder="Enter your full email address"
              />
              <ErrorMessage data_key={"email"} />
            </div>
            <div className="pt-5">
              <textarea
                disabled={isLoading}
                onChange={handleChange}
                name="message"
                defaultValue={formData.message}
                className="w-full min-h-[200px] rounded-md px-3 py-3 text-lg font-semibold bg-background text-white "
                type="text"
                placeholder="Write message"
              />
              <ErrorMessage data_key={"message"} />
            </div>
            <div className="pt-5 w-full justify-end flex  ">
              <input
                disabled={isLoading}
                type="submit"
                value={"Send"}
                className="rounded-md border-white hover:border-primary border-solid border-2 text-white hover:scale-105 hover:text-primary font-semibold text-lg   duration-300 px-5"
              >
                {/* <div className=" font-semibold text-lg   duration-300 px-5 ">
                  Send
                </div> */}
              </input>
            </div>
          </form>
        </div>
      </div>
      <MessageResult />
    </section>
  );
};

export default About;
