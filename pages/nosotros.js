import Head from "next/head";

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Sobre nosotros | 1tiendaonline - Automatiza tu negocio</title>
        <meta
          name="description"
          content="Soluciones tecnológicas de automatización de ventas, leads y bases de datos para empresas, negocios y emprendimientos."
        />
        <meta
          name="keywords"
          content="tiendaonline, automatización, automático, tienda digital, e-commerce, ecommerce, redes sociales, emprendimiento, emprendedor, ventas, compras, ropa, instagram, facebook, prestashop, woocommerce, tiendanube, shopify"
        />
      </Head>
      <section id="nosotros">
        <div className="container nosotros">
          <h1>Sobre nosotros</h1>
          <p>
            <b>
              1tiendaonline es una marca creada con el propósito de ayudar a
              comerciantes o empresas a mejorar su negocio mediante herramientas
              de automatización. Nos centramos en brindar asesoramiento personalizado sin cargo con la finalidad de elegir adecuadamente los servicios y plataformas que se van a utilizar en el proyecto.
            </b>
          </p>
          <p>
            Además nos encargamos de todas las partes técnicas y ofrecemos un servicio y soporte técnico pensando en el usuario final.
          </p>
          <h3>Nuestro equipo y forma de trabajo:</h3>
          <p>
            Nuestro equipo está conformado por diseñadores y desarrolladores web
            profesionales. Trabajamos junto a Diseñadores Gráficos, Diseñadores
            UX/UI, Maquetadores Web (Frontend) y Programadores Web (Backend).
            Nuestra forma de trabajo es por proyectos y de manera freelance,
            además utilizamos las tecnologías más modernas de desarrollo en
            javascript.
          </p>
        </div>

        <style jsx>{`
          :global(.links a) {
            color: var(--color-secondary);
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
          }
          .nosotros {
            padding: 120px 30px 60px;
          }
          h1 {
            font-size: 42px;
          }
          h3 {
            margin-top: 40px;
          }
        `}</style>
      </section>
    </>
  );
}
