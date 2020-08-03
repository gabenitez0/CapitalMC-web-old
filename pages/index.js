import Head from "next/head";
import dynamic from 'next/dynamic'

//COMPONENTS
import Header from "../components/Header";
import Services from "../components/Services";
const Features = dynamic(() => import('../components/Features'))
const Soporte = dynamic(() => import('../components/Soporte'))
const Contacto = dynamic(() => import('../components/Contacto'), {ssr: false})

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Capital Minecraft | ¡Construye tu propia ciudad!</title>
        <meta
          name="description"
          content="Capital Minecraft es un servidor de Survival Vanilla y Ciudades Towny"
        />
        <meta
          name="keywords"
          content="minecraft, server, servidor, capitalmc, server minecraft, spigot, bukkit, paper, towny, survival, vanilla"
        />
      </Head>

      <Header />
      <Services />
      <Features />
      <Soporte />

      <style jsx>{`
        :global(.links a) {
          color: white;
          margin-left: 20px;
          text-decoration: none;
          font-weight: 300
        }
      `}</style>
    </>
  );
}
