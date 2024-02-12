import useLanguage from "../languageContext/useLanguage";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTheme from "../themeContext/useTheme";


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
    message: ''
  }

  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://getform.io/f/b90df46b-da69-4e3f-9d66-11628e8f5b7a', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          console.log('Form submitted successfully');
          toast.success(language === 'en' ? 'Form submitted successfully!' : 'Formulario enviado correctamente!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDarkMode ? "dark" : "light",
            transition: Bounce,
          });
          setFormData(initialState);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <section id="contact" className="dark:bg-[#000B11]">
      <div>
        <ToastContainer />
        <div className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16 dark:bg-[#000B11]">
          <h1 className="py-4 text-4xl font-bold text-center text-[#000B11] dark:text-[#F4F4F9]">{contact}</h1>
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
          action="https://getform.io/f/b90df46b-da69-4e3f-9d66-11628e8f5b7a"
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
            <div className="flex flex-col">
              <button
              className="bg-[#03396c] text-2xl text-[#f4f4f9] mt-4 w-full p-4 rounded-lg"
              type="submit"
              >
                {send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
