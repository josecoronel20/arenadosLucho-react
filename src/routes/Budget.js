import React from 'react';
import Button from '../components/Button';
import { useForm, ValidationError } from '@formspree/react';
import swal from 'sweetalert';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnqbod");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  if (state.succeeded) {
    window.location.reload();

    swal({
      icon: "success",
      title: "Tu presupuesto se envió con éxito!"
    });
  }


  return (
    <main
      className="bg-secondary py-24
    px-5 flex flex-col gap-5 items-center"
    >
      <div>
        <h1 className="text-primary text-2xl font-semibold">Presupuesto</h1>
        <p className="text-gray-500">
          Para solicitar un presupuesto, por favor complete el siguiente
          formulario:
        </p>
      </div>
      <form className="flex flex-col gap-3 w-full max-w-lg" onSubmit={handleSubmit}>
        <div>
          <label className="text-primary font-semibold" htmlFor="name">
            Nombre:
          </label>
          <input className="w-full rounded-sm bg-primary" type="text" name="nombre" id="name" required />
        </div>
        <div>
          <label className="text-primary font-semibold" htmlFor="email">
            Email:
          </label>
          <input className="w-full rounded-sm bg-primary" type="email" name="email" id="email" />
        </div>
        <div>
          <label className="text-primary font-semibold" htmlFor="phone">
            Teléfono:
          </label>
          <input className="w-full rounded-sm bg-primary" type="tel" name="telefono" id="phone" required />
        </div>
        <div>
          <div>
            <label className="text-primary font-semibold" htmlFor="work">
              ¿Qué quieres arenar?:
            </label>
            <input className="w-full rounded-sm bg-primary" type="text" name="trabajo" id="work" required />
          </div>
          <div>
            <label className="text-primary font-semibold" htmlFor="quantity">
              Cantidad:
            </label>
            <input className="w-full rounded-sm bg-primary" type="text" name="cantidad" id="quantity"  />
          </div>
          <div>
            <label className="text-primary font-semibold" htmlFor="size">
              Medidas:
            </label>
            <input className="w-full rounded-sm bg-primary"
              type="text"
              name="tamaño"
              id="size"
              placeholder=" si no se sabe, colocar las medidas aproximadas"
              
            />
          </div>
        </div>
        <div>
          <label className="text-primary font-semibold" htmlFor="location">
            Ubicación:
          </label>
          <input className="w-full rounded-sm bg-primary" type="text" name="ubicación" id="location" required />
        </div>
        <div>
          <label className="text-primary font-semibold" htmlFor="message">
            Comentario:
          </label>
          <textarea className="w-full rounded-sm bg-primary" name="comentario" id="message" ></textarea>
        </div>
        <button type="submit" disabled={state.submitting}><Button>Enviar</Button></button>
      </form>
    </main>
  );
};
function App() {
  return (
    <ContactForm />
  );
}

export default App;