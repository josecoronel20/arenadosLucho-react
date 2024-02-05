import React from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation().pathname;

  return (
    location !== "/" ? <footer
    className="bg-secondaryDark text-secondaryLight flex flex-col  justify-center items-center p-5 gap-14 py-10
"
  >
    <div className="flex flex-col gap-14 md:flex-row">
      <address className="flex flex-col gap-3">
        <h4>Contacto</h4>
        <div className="">
          <div className="flex items-center">
            <Icon icon="ic:baseline-email" color="#2D77A9" width="24" />
            <p className="hover:text-primary">
              <Link
                to="mailto:arenadoslucho@hotmail.com"
                title="Envíanos un mail"
              >
                Email: arenadoslucho@hotmail.com
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <Icon icon="ic:baseline-whatsapp" color="#2D77A9" width="24" />
            <p className="hover:text-primary">
              <Link
                to="https://wa.me/1123787750"
                target="_blank"
                title="Envíanos un whatsapp"
              >
                Whatsapp: 11 2378-7750
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <Icon icon="ic:round-phone" color="#2D77A9" width="24" />
            <p className="hover:text-primary">
              <Link to="tel:1123787750" target="_blank" title="llámanos">
                Teléfono fijo: 02320 477540
              </Link>
            </p>
          </div>
        </div>
      </address>
      <nav className="flex flex-col gap-3">
        <h4>Enlaces rápidos</h4>
        <ul>
          <li
            className=" hover:text-primary
          
          "
          >
            <Link to="/">Inicio</Link>
          </li>
          <li
            className=" hover:text-primary
        
        "
          >
            <Link to="/sandblast">Arenado</Link>
          </li>
          <li
            className=" hover:text-primary
        
        "
          >
            <Link to="/gallery">Galería de trabajos</Link>
          </li>
          <li
            className="hover:text-primary
        "
          >
            <Link to="/budget">Presupuesto</Link>
          </li>
        </ul>
      </nav>
    </div>
    <iframe
      className="rounded-xl w-full max-w-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8480096469516!2d-58.80703930817907!3d-34.43865708592819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9ec0037e0915%3A0xda7074c4746e4e42!2sAbella%20Caprile%201246%2C%20B1669AWE%20Del%20Viso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700689469246!5m2!1ses-419!2sar"
      title="Our location on Google Maps"
    ></iframe>
  </footer> : null
    
  );
};
export default Footer;
