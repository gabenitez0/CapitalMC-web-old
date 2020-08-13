import Head from "next/head";
import dynamic from 'next/dynamic'

//COMPONENTS
import Header from "../components/Landing/Header";
import Encontranos from "../components/Landing/Encontranos";
const Features = dynamic(() => import('../components/Landing/Features'))
const Tokens = dynamic(() => import('../components/Landing/Tokens'))

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Capital Minecraft | Construye tu propio imperio</title>
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
      <Encontranos />
      <Features />
      <Tokens />

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
