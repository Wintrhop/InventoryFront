import React from 'react'
import InfoCard from './InfoCard'

const AboutInfo = () => {
    const title = "¿Quiénes Somos?";
  const text1 = `Una compañía especializada en realizar, clasificar y actualizar el sistema de inventarios de activos fijos, muebles, enseres, maquinaria, equipo, herramientas y vehículos, inventario de materiales, también realizamos avalúos de los bienes muebles e inmuebles maquinaria aplicando normas NIIF – IFRS. .`;
  const text2 = `Contamos con la capacidad de realizar levantamientos de Inventarios y avalúos a nivel nacional e internacional, con la experiencia y respaldo de empresas que nos han permitido ser partícipes de estos proyectos a lo largo de estos 18 años en el mercado, destacándonos por la responsabilidad en el cumplimiento de los deberes adquiridos y obteniendo la fidelización, confidencialidad y lealtad de nuestros clientes.`;
  return (
    <>
    <InfoCard title={title} text1={text1} text2={text2} textFlexDirection={"column"} />
    </>
  )
}

export default AboutInfo