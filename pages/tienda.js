import {useEffect} from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic'

//COMPONENTS
import Header from "../components/Tienda/Header";
import Productos from "../components/Tienda/Productos";
import Encontranos from "../components/Landing/Encontranos";
const Features = dynamic(() => import('../components/Landing/Features'))

export default function IndexPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AUz4sZaei_S9MSlqUwkn7t4pDFbE8RMFjpaHxfhyWm6nZyVnWqiu1yQkEtz5tn2GyuIvb2uwUAjg3G2n&locale=en_US";
    document.body.appendChild(script);
  }, [])

  return (
    <>
      <Head>
        <title>Capital Minecraft | Tienda Oficial</title>
        <meta
          name="description"
          content="Tienda Oficial de Rangos Vip y Tokens de Capital Minecraft"
        />
        <meta
          name="keywords"
          content="minecraft, server, servidor, capitalmc, server minecraft, spigot, bukkit, paper, towny, survival, vanilla, tienda, tokens, vip, vip+"
        />
      </Head>

      <Header />
      <Productos />
      <Encontranos />
      <Features />

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
