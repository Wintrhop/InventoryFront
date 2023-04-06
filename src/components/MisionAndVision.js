import React from "react";
import InfoCard from "./InfoCard";

const MisionAndVision = () => {
  const title = "Misión y Visión";
  const text1 = `Nuestra misión es brindar a las empresas herramientas de gestión 
    ágiles por medio de la implementación de procesos, normas nacionales e 
    internacionales de información financiera “NIIF” – “IFRS”, que permiten la custodia, 
    conservación y administración eficiente del sistema de inventario de activos fijos y 
    mercancía.`;
  const text2 = `Tenemos por visión seguir siendo reconocidos como una empresa líder 
    en la prestación de servicios de administración y control de los inventarios de los
    activos fijos, mercancías, avalúos con cubrimiento nacional e internacional.`;
  return (
    <>
      <InfoCard title={title} text1={text1} text2={text2} textFlexDirection={"column"}/>
    </>
  );
};

export default MisionAndVision;
