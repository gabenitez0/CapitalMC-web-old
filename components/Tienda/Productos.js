
import Producto from './Producto'

export default function Services() {

  const rangos = [
    {
      id: 0,
      img: "/static/tienda/vip.jpg",
      title: "Rango Vip",
      price: 5,
      features: [
        "Fly dentro de la Town (/tfly)",
        "Cambiar Skin (/skin)",
        "Cambiar Nick (/nick)",
        "Comando para abrir Enderchest (/enderchest)",
        "Recompensas Vip (1 Llave de Presidente cada 2 hs) (/rewards)",
        "Escribir en color Chat y Nick",
        "3 Sethomes + bed home (/sethome <home>)",
        "10 Items para vender en Auctions (/ah)",
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7BDC45Z2KGWK2",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-1f962917-e564-474a-ae27-0f5fb0053e9c"
    },
    {
      id: 1,
      img: "/static/tienda/vip+.jpg",
      title: "Rango Vip+",
      price: 10,
      features: [
        "Fly completo en el world Survival y Towny (/fly)",
        "Comando para reparar objetos (/repair)",
        "Volver a la ubicación de muerte (/back)",
        "Fly dentro de la Town (/tfly)",
        "Cambiar Skin (/skin)",
        "Cambiar Nick (/nick)",
        "Comando para abrir Enderchest (/enderchest)",
        "Recompensas Vip (1 Llave de Presidente cada 2 hs) (/rewards)",
        "Escribir en color Chat y Nick",
        "3 Sethomes + bed home (/sethome <home>)",
        "10 Items para vender en Auctions (/ah)",
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EJDL6FCSGWJWE",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-0ae43d31-d471-45b6-b2d4-334b61fe1c19"
    },
  ];

  const tokens = [
    {
      id: 0,
      img: "/static/tienda/500tokens.jpg",
      title: "500 Tokens",
      price: 5,
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ENN4XUGJ5BFYU",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-76fc8c47-50d6-4d8a-b493-8d5016b028fe"
    },
    {
      id: 1,
      img: "/static/tienda/1000tokens.jpg",
      title: "1000 Tokens",
      price: 10,
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FW52J8AEK8R9W",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-641c1f03-9aef-490f-af14-43296ec1cf48"
    },
    {
      id: 2,
      img: "/static/tienda/3000tokens.jpg",
      title: "3000 Tokens",
      price: 20,
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ADLK5TC6FS5QE",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-fb3e3855-0b64-4262-b14e-618e92c86f3c"
    },
    {
      id: 3,
      img: "/static/tienda/5000tokens.jpg",
      title: "5000 Tokens",
      price: 30,
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SAGPN5WQBHTEG",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-819be03f-a6ec-4e34-b8e0-fc4328d50583"
    }
  ]

  return (
    <section id="services">
      <div className="title-section">
        <h2>Rangos</h2>
      </div>
      <div className="services">
        {rangos.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>

      <div className="title-section" style={{marginTop: 60}}>
        <h2>Tokens</h2>
      </div>
      <div className="services">
        {tokens.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>


      <style jsx>{`
        section {
          padding: 40px 30px 20px 0;
        }
        .services {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
        }
        .title-section{
          margin-bottom: 30px;
        }
        h2{
          text-align: left;
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
