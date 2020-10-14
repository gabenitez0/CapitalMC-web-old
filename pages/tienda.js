import Head from "next/head";

//COMPONENTS
import Header from "../components/Header";
import Productos from "../components/Tienda/Productos";
import Sidebar from "../components/Sidebar";
import Encontranos from "../components/Landing/Encontranos";
import Features from "../components/Landing/Features";

export default function IndexPage() {

  const page = {
    title: "Tienda CapitalMC",
    desc: "Todo el dinero recaudado será principalmente destinado al mantenimiento, mejoras y actualizaciones del servidor. ¡Con tu compra estás contribuyendo a que sigamos mejorando y generando una gran comunidad!"
  }
  
  return (
    <>
      <Head>
        <title>Tienda CapitalMC</title>
        <meta
          name="description"
          content="Tienda Oficial de Rangos Vip y Tokens de Capital Minecraft"
        />
        <meta
          name="keywords"
          content="minecraft, server, servidor, capitalmc, server minecraft, spigot, bukkit, paper, towny, survival, vanilla, tienda, tokens, vip, vip+"
        />
      </Head>

      <Header page={page}/>
      <div className="sidebar container">
      <Productos />
      <Sidebar />
      </div>
      <Encontranos />
      <Features />

      <style jsx>{`
        :global(.nav){
          position: initial;
          padding: 20px 0;
          width: 100%
        }
        :global(.links a){
          color: var(--color-secondary);
        }
        :global(a h2){
          color: var(--color-secondary);
        }
        :global(section#header){
          height: 50vh;
          min-height: 350px;
        }
        :global(.buttons){
          display: none
        }
        .sidebar{
          display: flex;
        }
        @media (max-width: 991px) {
          .sidebar{
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
