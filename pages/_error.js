import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>Capital Minecraft | Página no encontrada</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section id="error">
        <div className="container error">
          <h1>Error 404 | Página no encontrada</h1>
          <p>La página que estás buscando no existe o fue eliminada.
          </p>
        </div>

        <style jsx>{`
          :global(.links a) {
            color: var(--color-secondary);
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
          }
          .error {
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
