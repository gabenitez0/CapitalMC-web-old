import Head from "next/head";

//COMPONENTS
import Header from "../components/Header";
import Encontranos from "../components/Landing/Encontranos";
import Features from "../components/Landing/Features";

export default function IndexPage() {
  const page = {
    title: "¡Construye tu Propio Imperio!",
    desc: "Capital Minecraft es un servidor de Survival y Ciudades Towny, ¡puedes ser integrante o dueño de una ciudad entera!",
    button: "IP: capitalmc.wtf",
    button2: "Ver tienda"
  }
  
  return (
    <>
      <Head>
        <title>Capital Minecraft | Construye tu propio imperio</title>
        <meta
          name="description"
          content="Capital Minecraft es un servidor de Survival y Ciudades Towny"
        />
        <meta
          name="keywords"
          content="minecraft, server, servidor, capitalmc, server minecraft, spigot, bukkit, paper, towny, survival, vanilla"
        />
      </Head>

      <Header page={page}/>
      <Encontranos />
      <Features />

      <style jsx>{`
      `}</style>
    </>
  );
}
