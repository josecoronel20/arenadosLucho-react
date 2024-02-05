import React, { useState } from 'react';
import Button from '../components/Button';
import sendEmail from '../emailService'; 

const Budget = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    quantity: '',
    size: '',
    location: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendEmail(formData);

    // Puedes añadir lógica adicional después de enviar el correo, como mostrar un mensaje de éxito o redirigir a otra página
  };

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
          <input className="w-full rounded-sm bg-primary" type="text" name="name" id="name" required />
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
          <input className="w-full rounded-sm bg-primary" type="tel" name="phone" id="phone" required />
        </div>
        <div>
          <div>
            <label className="text-primary font-semibold" htmlFor="work">
              ¿Qué quieres arenar?:
            </label>
            <input className="w-full rounded-sm bg-primary" type="text" name="work" id="work" required />
          </div>
          <div>
            <label className="text-primary font-semibold" htmlFor="quantity">
              Cantidad:
            </label>
            <input className="w-full rounded-sm bg-primary" type="text" name="quantity" id="quantity"  />
          </div>
          <div>
            <label className="text-primary font-semibold" htmlFor="size">
              Medidas:
            </label>
            <input className="w-full rounded-sm bg-primary"
              type="text"
              name="size"
              id="size"
              placeholder=" si no se sabe, colocar las medidas aproximadas"
              
            />
          </div>
        </div>
        <div>
          <label className="text-primary font-semibold" htmlFor="location">
            Ubicación:
          </label>
          <input className="w-full rounded-sm bg-primary" type="text" name="location" id="location" required />
        </div>
        <div>
          <label className="text-primary font-semibold" htmlFor="message">
            Mensaje:
          </label>
          <textarea className="w-full rounded-sm bg-primary" name="message" id="message" ></textarea>
        </div>
        <button type="submit"><Button>Enviar</Button></button>
      </form>
    </main>
  );
};

export default Budget;
