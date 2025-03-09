import { BODY_SCHEMA } from "~/src/constants/body-schema";


const useContactForm = (defaultTemplate = "") => {
  let mailto = "mailto:";

  let body = {
    phone: "",
    name: "",
    email: "",
    lastname: "",
    message: "",
  };

  const params = {
    cc: "",
    subject: "",
    body: "",
    to: "info@wfm.com.ar",
  };

  const update = (key, value) => {
    switch (key) {
      case "email":
        params.cc = value;
        break;
      case "name":
        body.name = value;
        break;
      case "lastname":
        body.lastname = value;
        break;
      case "phone":
        body.phone = value;
        break;
      case "message":
        body.message = value;
        break;
    }

    const { message, ...localBody } = body;
    localStorage.setItem(
      "wfm:body_form",
      JSON.stringify({
        ...localBody,
        email: params.cc,
      })
    );
  };

  const getLink = () => {
    params.subject = "WFM Investments | Contacto";
    params.body = encodeURIComponent(
      `${defaultTemplate}Nombre: ${body.name}\nApellido: ${body.lastname}\nCelular: ${body.phone}\n---\n${body.message}`
    );

    return `${mailto}${params.to}?${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&")}`;
  };

  const submit = (e) => {
    e.preventDefault();

    window.open(getLink(), "_blank");
  };

  const getData = () => {
    const storedData = JSON.parse(
      localStorage.getItem("wfm:body_form") ?? "{}"
    );

    return {
      ...body,
      ...params,
      ...storedData,
    };
  };

  const isReady = () => {
    const storedData = JSON.parse(
      localStorage.getItem("wfm:body_form") || JSON.stringify(BODY_SCHEMA)
    );
    return storedData.email.length > 0
  };

  return {
    update,
    submit,
    getData,
    isReady,
  };
};

export default useContactForm;
