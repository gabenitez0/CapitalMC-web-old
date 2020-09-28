
import Producto from './Producto'

export default function Services() {

  const promos = [
    {
      id: 0,
      img: "/static/tienda/oferta1.jpg",
      title: "PROMO DICTADOR: Vip+ Permanente + Tokens Gratis",
      price: "10.00",
      features: [
        "VIP+ PERMANENTE!",
        "+500 Tokens GRATIS!",
        "1 Kit Completo de Armaduras y Herramientas de Netherite",
        "Todos los beneficios de Vip y Vip+",
        "Todas las modificaciones de mejora del rango a futuro están incluidas"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XK79V7GBZ7R2J",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-657c6438-9c6f-44fe-b69d-87eabf6f88a1"
    },
    {
      id: 1,
      img: "/static/tienda/oferta1.jpg",
      title: "PROMO PRESIDENTE: Vip Permanente + Tokens Gratis",
      price: "5.00",
      features: [
        "VIP PERMANENTE!",
        "+500 Tokens GRATIS!",
        "1 Kit Completo de Armaduras y Herramientas de Netherite",
        "Todos los beneficios de Vip y Vip+",
        "Todas las modificaciones de mejora del rango a futuro están incluidas"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C5TFAUFW86W7L",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-d50f2d80-1ed5-47eb-a1d8-93f3fcfe232c"
    },
  ];

  const rangos = [
    {
      id: 0,
      img: "/static/tienda/vip.jpg",
      title: "Rango Vip Mensual",
      price: "5.00",
      features: [
        "Money Boost: x1.5 de ganancia de dinero",
        "Mochila: 36 Slots + Keep Inventory",
        "Color: Escribir en color Chat y Nick",
        "/tFly: Vuela dentro de tu Town",
        "/Rewards: 1 Llave de Presidente cada 2 hs",
        "/Skin: Cambiar Skin a la que quieras",
        "/Nick: Cambiar Nick al que quieras",
        "/Enderchest: Abre tu Enderchest donde quieras con un comando",
        "/Ah: 10 Items para vender en Auctions",
        "/Sethome: 3 Sethomes + Bed home"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7BDC45Z2KGWK2",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-1f962917-e564-474a-ae27-0f5fb0053e9c"
    },
    {
      id: 1,
      img: "/static/tienda/vip+.jpg",
      title: "Rango Vip+ Mensual",
      price: "10.00",
      features: [
        "Money Boost: x2.0 de ganancia de dinero",
        "Mochila: 54 Slots + Keep Inventory",
        "Color: Escribir en color Chat y Nick",
        "/Fly: Vuela libremente en todos los mundos",
        "/Repair: Repara tus objetos libremente gratis",
        "/Graves: TP a donde moriste (tu tumba)",
        "/Rewards: 1 Llave de Dictador cada 12 hs",
        "/Rewards: 1 Llave de Presidente cada 2 hs",
        "/Skin: Cambiar Skin a la que quieras",
        "/Nick: Cambiar Nick al que quieras",
        "/Enderchest: Abre tu Enderchest donde quieras con un comando",
        "/Ah: 10 Items para vender en Auctions",
        "/Sethome: 6 Sethomes + Bed home"
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
      price: "5.00",
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ENN4XUGJ5BFYU",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-76fc8c47-50d6-4d8a-b493-8d5016b028fe"
    },
    {
      id: 1,
      img: "/static/tienda/1000tokens.jpg",
      title: "1000 Tokens",
      price: "10.00",
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FW52J8AEK8R9W",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-641c1f03-9aef-490f-af14-43296ec1cf48"
    },
    {
      id: 2,
      img: "/static/tienda/3000tokens.jpg",
      title: "3000 Tokens",
      price: "20.00",
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ADLK5TC6FS5QE",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-fb3e3855-0b64-4262-b14e-618e92c86f3c"
    },
    {
      id: 3,
      img: "/static/tienda/5000tokens.jpg",
      title: "5000 Tokens",
      price: "30.00",
      features: [],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SAGPN5WQBHTEG",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-819be03f-a6ec-4e34-b8e0-fc4328d50583"
    }
  ]

  return (
    <section id="services">
      <div className="title-section">
        <h2>¡Promociones únicas!</h2>
      </div>
      <div className="services promo">
        {promos.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>

      <div className="title-section">
        <h2>Rangos</h2>
      </div>
      <div className="services">
        {rangos.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>

      <div className="title-section">
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
          width: 100%;
        }
        .services {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
        }
        .title-section:first-child{
          margin-top: 0;
        }
        .title-section{
          margin-bottom: 30px;
          margin-top: 60px;
        }
        h2{
          text-align: left;
          text-decoration: underline;
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
