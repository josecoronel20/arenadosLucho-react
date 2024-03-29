import React from "react";
import Panel from "./Panel";
import img1 from "../../img/image 1.png"
import img2 from "../../img/image 2.png"
import img3 from "../../img/image 3.png"
import img4 from "../../img/image 4.png"
import img5 from "../../img/image 5.png"

const Accordion = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl m-auto rounded-xl overflow-hidden
    ">
      <Panel title="Pileta para re-pintar" img={img1} reverse={false}>
        <strong>Arenado para re-pintar:</strong> se busca eliminar las capas de residuos sueltos
        y flojos, generando porosidad en la superficie para una correcta
        adherencia de la futura aplicacion de pintura.(no es necesario eliminar
        completamente la pintura vieja ya que se podría dañar el material de la
        pileta.)(nosotros hacemos también la aplicación de pintura.)
      </Panel>
      <Panel title="Pileta para revestimiento" img={img2} reverse={true}>
        <strong>Arenado para revestimiento:</strong> se busca retirar la mayor cantidad de
        pintura para la correcta adherencia del futuro colocamiento de
        revestimiento.(no hay problema si se daña un poco la superficie del
        material de la pileta cuando es para revestir.)
      </Panel>
      <Panel title="Superficies metálicas" img={img3} reverse={false}>
        <strong>Arenado para superficies metálicas:</strong> se busca remover la pintura, óxido y
        corrosión en estructuras metálicas como vehículos, maquinaria
        industrial, vígas, entre otros.
      </Panel>
      <Panel title="Superficies de madera" img={img4} reverse={true}>
        <strong>Arenado para superficies de madera:</strong> Limpieza y restauración de madera en
        muebles, pisos, vigas, escaleras, entre otros, para eliminar barnices,
        pinturas viejas y manchas.
      </Panel>
      <Panel title="Fachadas" img={img5} reverse={false}>
        <strong>Arenado de fachadas:</strong> Remoción de recubrimientos, pinturas y
        contaminantes en superficies de concreto, como pisos industriales,
        fachadas, puentes y estructuras de hormigón.
      </Panel>
    </div>
  );
};

export default Accordion;
