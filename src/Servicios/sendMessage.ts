export interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export const enviarFormulario = async (datos: FormData): Promise<boolean> => {
  try {
    const respuesta = await fetch("https://formspree.io/f/xdkzlnqd", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const resultado = await respuesta.json();
    return resultado.ok || respuesta.status === 200;
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    return false;
  }
};