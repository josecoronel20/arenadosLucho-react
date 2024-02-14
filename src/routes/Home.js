import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import Button from "../components/Button";
import hero from "../img/hero.jpg"
import logoHero from "../img/logo.png"

const Home = () => {
  return (
    <main>
      <div className="bg-secondaryDark absolute h-screen w-full top-0 left-0 z-10 opacity-40"></div>
      <img
        className="absolute h-screen w-screen z-0 top-0 object-cover"
        src={hero}
        alt="Hero image description"
      />

      <div className="absolute z-10 flex flex-col items-center top-0 right-0 left-0 bottom-0 justify-center md:right-1/3  lg:right-1/2">
        <img className="w-72 md:w-96" src={logoHero} alt="Company logo" />
        <h1 className="text-primary font-medium text-center pb-5 px-5 max-w-xl">
          Nos especializamos en la recuperación de superficies mediante el arenado por chorro de arena a presión.
        </h1>

        <Button>
          <Link to="/budget" title="Request a quote">Píde tu presupuesto</Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;
