import Head from "next/head";

export default function Terminos() {
  return (
    <>
      <Head>
        <title>
          Términos y condiciones | 1tiendaonline - Automatiza tu negocio
        </title>
        <meta
          name="description"
          content="Soluciones tecnológicas de automatización de ventas, leads y bases de datos para empresas, negocios y emprendimientos."
        />
        <meta
          name="keywords"
          content="tiendaonline, automatización, automático, tienda digital, e-commerce, ecommerce, redes sociales, emprendimiento, emprendedor, ventas, compras, ropa, instagram, facebook, prestashop, woocommerce, tiendanube, shopify"
        />
      </Head>
      <section id="terminos">
        <div className="container terminos">
          <h1>Términos y condiciones</h1>
          <h3>Condiciones del servicio</h3>
          <ul>
            <li>
              Trabajamos con plataformas profesionales externas a nosotros a la
              hora de realizar cualquier proyecto.
            </li>
            <li>
              Es probable que el pago de algunos servicios y/o plataformas no
              los deba realizar hacia nosotros directamente, sino hacia el
              servicio y/o plataforma en cuestión.
            </li>
            <li>
              Brindamos soporte técnico por chat, aún así no se garantiza una
              respuesta inmediata considerando que también tenemos nuestros
              horarios de trabajo.
            </li>
            <li>
              Nuestro principal medio de contacto y soporte técnico es por
              WhatsApp.
            </li>
            <li>
              Tanto los términos y condiciones como las políticas de privacidad
              están sujetas a cambios y/o actualizaciones.
            </li>
          </ul>
        </div>

        <style jsx>{`
          :global(.links a) {
            color: var(--color-secondary);
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
          }
          .terminos {
            padding: 120px 30px 60px;
          }
          h1 {
            font-size: 42px;
          }
          h3 {
            margin-top: 40px;
          }
          ul {
            list-style: decimal;
            padding-left: 20px;
            line-height: 2.1;
            color: var(--color-tertiary);
          }
          li {
            margin-bottom: 10px;
          }
        `}</style>
      </section>
    </>
  );
}
