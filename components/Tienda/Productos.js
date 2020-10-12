
import Producto from './Producto'

export default function Services() {

  const promos = [
    {
      id: 1,
      img: "/static/tienda/oferta1.jpg",
      title: "PROMO DICTADOR: Vip+ Permanente + Tokens Gratis",
      price: "10.00",
      featuresTitle: "La promo contiene:",
      features: [
        "VIP+ PERMANENTE!",
        "+1000 Tokens GRATIS!",
        "1 Kit Completo de Armaduras y Herramientas de Netherite",
        "Todos los beneficios de Vip y Vip+",
        "Todas las modificaciones de mejora del rango a futuro están incluidas"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XK79V7GBZ7R2J",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-657c6438-9c6f-44fe-b69d-87eabf6f88a1"
    },
    {
      id: 0,
      img: "/static/tienda/oferta1.jpg",
      title: "PROMO PRESIDENTE: Vip Permanente + Tokens Gratis",
      price: "5.00",
      featuresTitle: "La promo contiene:",
      features: [
        "VIP PERMANENTE!",
        "+500 Tokens GRATIS!",
        "1 Kit Completo de Armaduras y Herramientas de Netherite",
        "Todos los beneficios de Vip",
        "Todas las modificaciones de mejora del rango a futuro están incluidas"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C5TFAUFW86W7L",
      mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=67919268-d50f2d80-1ed5-47eb-a1d8-93f3fcfe232c"
    },
  ];

  const rangos = [
    {
      id: 1,
      img: "/static/tienda/vip+.jpg",
      title: "Rango Vip+ Permanente",
      price: "10.00",
      featuresTitle: "Beneficios del Rango Vip+:",
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
      mercadopago: "https://mpago.la/27gYqEi"
    },
    {
      id: 0,
      img: "/static/tienda/vip.jpg",
      title: "Rango Vip Permanente",
      price: "5.00",
      featuresTitle: "Beneficios del Rango Vip:",
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
      mercadopago: "https://mpago.la/2gZuVJk"
    },
  ];

  const tokens = [
    {
      id: 3,
      img: "/static/tienda/2000tokens.jpg",
      title: "2000 Tokens (+1000)",
      price: "20.00",
      featuresTitle: "Con los Tokens puedes comprar:",
      features: [
        "Kits de items OP",
        "Rangos / Vip+",
        "Llave de Dictador y Presidente",
        "Pets / Mascotas",
        "Partículas de Efectos",
        "Coins para Skywars",
        "Cristales para Skyblock",
        "Se agregarán más tiendas y objetos",
        "Recibes en total 3000 Tokens",
        "Puedes ver la tienda de tokens dentro del juego con: /tokens"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SAGPN5WQBHTEG",
      mercadopago: "https://mpago.la/2JPFmwk"
    },
    {
      id: 2,
      img: "/static/tienda/1500tokens.jpg",
      title: "1500 Tokens (+500)",
      price: "15.00",
      featuresTitle: "Con los Tokens puedes comprar:",
      features: [
        "Kits de items OP",
        "Rangos / Vip+",
        "Llave de Dictador y Presidente",
        "Pets / Mascotas",
        "Partículas de Efectos",
        "Coins para Skywars",
        "Cristales para Skyblock",
        "Se agregarán más tiendas y objetos",
        "Recibes en total 2000 Tokens",
        "Puedes ver la tienda de tokens dentro del juego con: /tokens"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ADLK5TC6FS5QE",
      mercadopago: "https://mpago.la/1E6pdZm"
    },
    {
      id: 1,
      img: "/static/tienda/1000tokens.jpg",
      title: "1000 Tokens",
      price: "10.00",
      featuresTitle: "Con los Tokens puedes comprar:",
      features: [
        "Kits de items OP",
        "Rangos / Vip+",
        "Llave de Dictador y Presidente",
        "Pets / Mascotas",
        "Partículas de Efectos",
        "Coins para Skywars",
        "Cristales para Skyblock",
        "Se agregarán más tiendas y objetos",
        "Puedes ver la tienda de tokens dentro del juego con: /tokens"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FW52J8AEK8R9W",
      mercadopago: "https://mpago.la/24sTxUL"
    },
    {
      id: 0,
      img: "/static/tienda/500tokens.jpg",
      title: "500 Tokens",
      price: "5.00",
      featuresTitle: "Con los Tokens puedes comprar:",
      features: [
        "Kits de items OP",
        "Rangos / Vip+",
        "Llave de Dictador y Presidente",
        "Pets / Mascotas",
        "Partículas de Efectos",
        "Coins para Skywars",
        "Cristales para Skyblock",
        "Se agregarán más tiendas y objetos",
        "Puedes ver la tienda de tokens dentro del juego con: /tokens"
      ],
      paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ENN4XUGJ5BFYU",
      mercadopago: "https://mpago.la/2TR5oas"
    }
  ]

  return (
    <section id="services">
      <div className="title-section">
        <h2>Tokens</h2>
      </div>
      <div className="services">
        {tokens.map(r => 
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

      <style jsx>{`
        section {
          padding: 60px 30px 20px 0;
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
