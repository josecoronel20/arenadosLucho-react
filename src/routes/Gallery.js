// Importa la función useState para gestionar el estado en el componente
import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../firebase"; // Importa storage sin desestructuración
import File from "../components/gallery/File";
import Loading from "../components/Loading";

const Gallery = () => {
  // Define un estado para almacenar la lista de metadatos de archivos
  const [fileMetadata, setFileMetadata] = useState([]);
  const numbers = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
  ];

  // Función para obtener la lista de metadatos de archivos al cargar el componente
  useEffect(() => {
    const storageRef = ref(storage, "galeria");

    // Obtiene la lista de metadatos de archivos en la carpeta
    listAll(storageRef)
      .then(async (res) => {
        // Obtiene los metadatos para cada archivo
        const metadata = await Promise.all(
          res.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { name: item.name, url };
          })
        );

        // Actualiza el estado con la lista de metadatos de archivos

        setFileMetadata(metadata);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de archivos", error);
      });
  }, []); // El segundo parámetro del useEffect ([]) asegura que esta operación se realice solo una vez al cargar el componente

  return (
    <div>
      <main
        className="min-h-screen bg-secondary py-24
         px-5
      "
      >
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">
          {fileMetadata.length > 0
            ? numbers.map((number) => (
                <div>
                  <File>
                    {fileMetadata
                      .filter((file) => file.name.includes(number))
                      .map((file) => (
                        <img src={file.url} alt={file.name} key={file.name} />
                      ))}
                  </File>
                </div>
              ))
            : (<div className="absolute top-1/2 "><Loading /></div>)}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
