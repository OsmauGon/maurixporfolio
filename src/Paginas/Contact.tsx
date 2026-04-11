import '../Estilos/contact.css'
import { useState, useEffect, useRef } from "react";
import { enviarFormulario, FormData } from "../Servicios/sendMessage";
import emailjs from '@emailjs/browser';

export const Contact1 = () => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=>{
    if(enviado){
      const casillas = document.querySelectorAll(".contact-input")
      casillas.forEach(element => element.setAttribute("style","display: none"))
    }

  },[enviado])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const ok = await enviarFormulario(form);
    setEnviado(ok);
    if(ok){

      const name = document.getElementById("contact-name") as HTMLInputElement
      const mail = document.getElementById("contact-mail") as HTMLInputElement
      const tarea = document.getElementById("contact-tarea") as HTMLTextAreaElement

      name.value = ""
      mail.value = ""
      tarea.value = ""

    }
    if (!ok) setError(true);
  };

  return (
    <section id='contacto' className="container py-5">
      <h3 className="text-center mb-4">Contacto</h3>

      {enviado && (
        <div className="alert alert-success text-center">✅¡Mensaje enviado con éxito!✅</div>
      )}
      {error && (
        <div className="alert alert-danger text-center">⛔Ocurrió un error. Probá de nuevo.⛔</div>
      )}

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }} className="mx-auto">
        <div className="mb-3 contact-input">
          <label className="form-label">Nombre</label>
          <input id='contact-name' type="text" name="nombre" value={form.nombre} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3 contact-input">
          <label className="form-label">Correo</label>
          <input id='contact-mail' type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3 contact-input">
          <label className="form-label">Mensaje</label>
          <textarea id='contact-tarea' name="mensaje" value={form.mensaje} onChange={handleChange} className="form-control" rows={2} required />
        </div>
        <button type="submit" className="btn btn-primary contact-input">Enviar</button>
      </form>
    </section>
  );
};

/*
Estoy construyendo mi porfolio web como desarrollador full-stack y la pagina actual es la de Contacto. Estamos usando React, typescript BOOTRAP. necesito qe me des el cdigo de un componente formulaario que solicite email y mensaje de un visitante
*/


interface ContactFormData {
  email: string;
  message: string;
}

interface FormErrors {
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  // ✅ Esta es la línea que te faltaba - crea la referencia para el formulario
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validar formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.message) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (formData.message.length > 500) {
      newErrors.message = 'El mensaje no puede exceder los 500 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    /*Este es una solicitud para que el formulario se envie al backend y el backend responda
    try {
      // Aquí va tu llamada a la API
      // Ejemplo con fetch:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Error al enviar el mensaje');
      
      // Simulamos una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Datos enviados:', formData);
      setSubmitStatus('success');
      
      // Limpiar formulario después de envío exitoso
      setFormData({ email: '', message: '' });
      
      // Opcional: resetear el estado de éxito después de 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
      */
    

    try {
      // Estos IDs los obtienes de tu panel de EmailJS
      const SERVICE_ID = 'service_z0fy6u7';
      const TEMPLATE_ID = 'template_5qaq82o';
      const PUBLIC_KEY = 'EVg5ws6RIUNOo7bm9';

      // Envía el formulario directamente usando EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );
      
      console.log('Email enviado:', result.text);
      setSubmitStatus('success');
      setFormData({ email: '', message: '' }); // Limpiar el formulario
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">Contacto</h2>
            </div>
            <div className="card-body">
              {/* ✅ Ahora el form tiene la referencia ref={formRef} */}
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* Campo Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                  <div className="form-text">
                    Te responderemos a esta dirección.
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mensaje *
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message}
                    </div>
                  )}
                  <div className="form-text">
                    Mínimo 10 caracteres, máximo 500.
                    <span className="float-end">
                      {formData.message.length}/500
                    </span>
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>
                </div>

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3" role="alert">
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Error al enviar el mensaje. Por favor, intenta de nuevo.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 
 * Punto de seguridad importante: Aunque es cómodo, exponer tu Public Key en el frontend tiene sus riesgos . Para tu portfolio personal no debería haber problema, pero un paso más profesional sería mover la lógica de envío a una función serverless (por ejemplo, en Vercel o Netlify), donde puedes ocultar tu Private Key de forma segura . */
 


/*Este es una solicitud para que el formulario se envie al backend y el backend responda
    try {
      // Aquí va tu llamada a la API
      // Ejemplo con fetch:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Error al enviar el mensaje');
      
      // Simulamos una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Datos enviados:', formData);
      setSubmitStatus('success');
      
      // Limpiar formulario después de envío exitoso
      setFormData({ email: '', message: '' });
      
      // Opcional: resetear el estado de éxito después de 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
      */
    