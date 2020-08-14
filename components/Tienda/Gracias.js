export default function Gracias() {
  return (
    <section id="gracias">
        <div className="title-section">
            <h2>¡Gracias por tu compra!</h2>
            <p>Relamente apreciamos tu contribución con el servidor :)</p>
        </div>
        <h3>¿Cómo seguir?</h3>
        <span>Para recibir tu compra más rapido:</span>
        <ol>
            <li>Escribirle a Gabi por Discord o dentro del juego</li>
            <li>Enviar número o id de pago</li>
            <li>Listo :)</li>
        </ol>


      <style jsx>{`
        section {
          padding: 40px 30px 20px 0;
          width: 100%;
        }
        .title-section{
          margin-bottom: 30px;
        }
        @media screen and (min-width: 480px) {
        }
        @media screen and (min-width: 990px) {
        }
        @media only screen and (max-width: 991px) {
          section {
            padding: 40px 0 20px 0;
          }
        }
      `}</style>
    </section>
  );
}
