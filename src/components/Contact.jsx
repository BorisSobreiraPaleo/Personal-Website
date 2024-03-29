import useLanguage from "../languageContext/useLanguage";
import useTheme from "../themeContext/useTheme";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect } from 'react';

const translations = {
  en: {
    contact: 'Contact',
    name: 'Name',
    phone: 'Phone',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
  },
  es: {
    contact: 'Contacto',
    name: 'Nombre',
    phone: 'Teléfono',
    subject: 'Asunto',
    message: 'Mensaje',
    send: 'Enviar',
  },
};

const Contact = () => {
  
  const { isDarkMode } = useTheme()
  
  const { language } = useLanguage()
  const labels = language === 'en' ? translations['en'] : translations['es']
  
  const {
    contact,
    name,
    phone,
    subject,
    message,
    send,
  } = labels;

  const initialState = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  }

  
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      captcha: '' // Limpiamos el mensaje de error cuando el captcha cambia
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si es otro campo, actualiza el estado de formData
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    // Limpiar errores
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
    
  };

  useEffect(() => {
    setErrors(prevErrors => ({
      ...prevErrors,
      name: prevErrors.name ? (language === 'en' ? 'Name is required' : 'El nombre es obligatorio') : '',
      phone: prevErrors.phone ? (language === 'en' ? 'Phone is required' : 'El teléfono es obligatorio') : '',
      email: prevErrors.email ? (language === 'en' ? 'Email is required' : 'El email es obligatorio') : '',
      subject: prevErrors.subject ? (language === 'en' ? 'Subject is required' : 'El asunto es obligatorio') : '',
      message: prevErrors.message ? (language === 'en' ? 'Message is required' : 'El mensaje es obligatorio') : '',
      captcha: prevErrors.captcha ? (language === 'en' ? 'Please complete the CAPTCHA' : 'Por favor completa el CAPTCHA') : '',
    }));
  }, [language]);
  
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = language === 'en' ? 'Name is required' : 'El nombre es obligatorio'
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = language === 'en' ? 'Phone is required' : 'El teléfono es obligatorio'
      isValid = false;
    }else if (!/^\+?\d{6,14}$/.test(formData.phone.trim())) {
      errors.phone = language === 'en' ? 'Invalid phone number' : 'Número de teléfono inválido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = language === 'en' ? 'Email is required' : 'El email es obligatorio'
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = language === 'en' ? 'Email is invalid' : 'El email es inválido'
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = language === 'en' ? 'Subject is required' : 'El asunto es obligatorio'
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = language === 'en' ? 'Message is required' : 'El mensaje es obligatorio'
      isValid = false;
    }

    if (!captchaValue) {
      errors.captcha = language === 'en' ? 'Please complete the CAPTCHA' : 'Por favor completa el CAPTCHA'
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    if (!validateForm()) {
      toast.error(language === 'en' ? 'Please fill out all fields!' : 'Por favor, rellena todos los campos!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
      return;
    }

    const action = e.target.getAttribute("action");

    fetch(action, {
      method: "POST",
      body: new FormData(e.target),
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      toast.success(language === 'en' ? 'Form submitted successfully!' : 'Formulario enviado correctamente!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
      setFormData(initialState);
    })
    .catch((error) => {
      console.error('There was an error with the fetch operation:', error);
      toast.error(language === 'en' ? 'Error submitting the form! Please use another contact method' : 'Error al enviar el formulario! Por favor utiliza otro medio de contacto', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
    });
  };

  return (
    <section id="contact" className="dark:bg-[#000B11]">
      <div>
        <ToastContainer
          toastClassName="dark:bg-[#000B11] dark:text-[#F4F4F9] bg-[#FFFFFF] text-[#03396C]"
          progressClassName="dark:bg-[#F4F4F9] bg-[#03396c]"
        />
        <div className="max-w-[1040px] m-auto md:pr-20 p-4 pt-16 dark:bg-[#000B11]">
          <div className="text-center">
            <a href='https://t.me/SevenSie7e' target="_blank" rel="noopener noreferrer" className="inline-block">
              <h1 className="text-4xl font-bold text-center text-[#000B11] dark:text-[#F4F4F9] hover:underline">{contact}</h1>
            </a>
          </div>
          <p className="text-center py-8 dark:text-[#F4F4F9] text-[#000B11]">
            {
              language === 'en' ?
                'For more direct communications, reach out via '
              :
                'Para una comunicación más directa, contáctame via '
            }
            <a href="https://t.me/SevenSie7e" target="_blank" rel="noopener noreferrer" className="underline">Telegram</a>
          </p>
          <form
          action="https://getform.io/f/YerPKkbO"
          onSubmit={ handleSubmit }
          method="POST"
          encType="multipart/form-data"
          className="font-bold [&>div>div>label]:dark:text-[#F4F4F9] [&>div>label]:dark:text-[#F4F4F9]">
            <div className="grid md:grid-cols-2 md:gap-4 w-full">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">{name}</label>
                <input
                  className="w-full bg-[#b2cddf] dark:bg-[#4d5559] border-2 rounded-lg p-3 flex border-[#03396c]"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="text-red-500">{errors.name}</span>}
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">{phone}</label>
                <input
                className="w-full bg-[#b2cddf] dark:bg-[#4d5559] border-2 rounded-lg p-3 flex border-[#03396c]"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />
                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Email</label>
              <input
              className="bg-[#b2cddf] dark:bg-[#4d5559] border-2 rounded-lg p-3 flex border-[#03396c]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">{subject}</label>
              <input
              className="bg-[#b2cddf] dark:bg-[#4d5559] border-2 rounded-lg p-3 flex border-[#03396c]"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              />
              {errors.subject && <span className="text-red-500">{errors.subject}</span>}
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">{message}</label>
              <textarea
              className="bg-[#b2cddf] dark:bg-[#4d5559] border-2 rounded-lg p-3 flex border-[#03396c]"
              rows="10"
              name="message"
              value={formData.message}
              onChange={handleChange}
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </div>
            <div className="grid md:flex mt-4 md:grid-cols-2 md:gap-4 w-full">
              <div className="flex items-center justify-center">
                <input type="hidden" name="_gotcha"/>
                <ReCAPTCHA
                  hl={language === 'en' ? "en" : "es"}
                  theme={isDarkMode ? "dark" : "light"}
                  name="captcha"
                  sitekey="6Ld02HkpAAAAAFJqVOzj66oJ3K-TCorsgPMoVNP2"
                  onChange={handleCaptchaChange}
                />
                {errors.captcha && <span className="text-red-500">{errors.captcha}</span>}
              </div>
              <div className="flex w-full mt-4 md:mt-0" >
                <button
                  className="w-full bg-[#03396c] text-2xl text-[#f4f4f9] md:p-4 p-5 rounded-lg"
                  type="submit"
                >
                  {send}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
