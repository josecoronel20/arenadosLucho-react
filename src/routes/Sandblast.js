import React from "react";
import Accordion from "../components/home/Accordion";
import { Icon } from "@iconify/react";
import videoSB from "../img/arenando.mp4"

const Sandblast = () => {
  return (
    <main
      className="bg-secondary py-24
       px-5
    "
    >
      <section className="w-full flex justify-center items-center mb-24  md:min-h-screen">
        <div className="w-full flex flex-col justify-center items-center text-center gap-5 max-w-screen-md md:flex-row">
          <div className="flex flex-col items-center justify-center gap-5 md:w-1/2">
            <h1 className="text-primary font-semibold text-xl">
              ¿Qué es el arenado?
            </h1>
            <p className="text-primary">
              El arenado es un proceso de limpieza o preparación de superficies
              en el que se proyecta arena u otros abrasivos a alta presión sobre
              una superficie para eliminar pintura, óxido, suciedad u otros
              contaminantes, dejando una superficie limpia y rugosa para
              posteriores tratamientos.
            </p>
          </div>
          <div className="w-1/2">
            <video
              className="rounded-xl "
              src={videoSB}
              loop
              muted
              autoPlay
            />
            <p
              className=" text-slate-500
        "
            >
              (arenado para revestir)
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-5 ">
        <h2 className="text-primary font-semibold text-xl text-center">
          Ejemplos de algunos tipos de arenado
        </h2>
        <Accordion />
      </section>
      <section className="w-full flex flex-col justify-center items-center pt-20 gap-5">
        <div className="flex flex-row gap-5">
          <div>
            <Icon icon="fluent:dust-28-filled" color="#FEE6D8" width="65" />
          </div>
          <div>
            <Icon icon="ph-ear" color="#FEE6D8" width="65" />
          </div>
        </div>
        <p className="w-full max-w-xs text-center text-primary font-bold text-xl">
          !Durante el proceso de arenado se genera ruido y polvo que podría
          molestar a los vecinos¡
        </p>
      </section>
    </main>
  );
};

export default Sandblast;
