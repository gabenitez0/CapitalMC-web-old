import Head from "next/head";

export default function Solicitud() {
  return (
    <>
      <Head>
        <title>Solicitud enviada | 1tiendaonline - Automatiza tu negocio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section id="solicitud">
        <div className="container solicitud">
          <h1>¡Solicitud enviada con éxito!</h1>
          <p>
            <b>
              Hemos recibido tu solicitud. La vamos a evaluar y te vamos a responder por WhatsApp dentro de las próximas 24 horas. Muchas gracias.
            </b>
          </p>
        </div>

        <style jsx>{`
          :global(.links a) {
            color: var(--color-secondary);
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
          }
          .solicitud {
            padding: 120px 30px 60px;
            min-height: calc(100vh - 375px - 180px - 40px);
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
