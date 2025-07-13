import Image from "next/image";
import Navbar from "./(components)/SharedJsx/Navbar";
import Banner from "./(components)/Home_PageJsx/Banner";
import Colleges_Card from "./(components)/Home_PageJsx/Colleges_Card";
import Resarch_Paper from "./(components)/Home_PageJsx/Resarch_Paper";
import Reviews from "./(components)/Home_PageJsx/Reviews";

export default function Home() {
  return (
   <div>
   
    <Banner></Banner>
    <Colleges_Card></Colleges_Card>
    <Resarch_Paper></Resarch_Paper>
    <Reviews></Reviews>
   </div>
  );
}
