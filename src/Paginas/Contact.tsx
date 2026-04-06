import '../Estilos/contact.css'
import { useState, useEffect } from "react";
import { enviarFormulario, FormData } from "../Servicios/sendMessage";

const Contact = () => {
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

export default Contact;