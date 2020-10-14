import Link from "next/link";

export default function HeaderComp({page}) {
  return (
    <section id="header">
      <header className="container">
        <div className="title">
          <h1>{page.title}</h1>
          <p>
          {page.desc}
          </p>
          <div className="buttons">
            <a className="button-primary" style={{marginRight: 20}}>
              {page.button}
            </a>
            <Link href="/tienda">
              <a className="link">{page.button2}
              <i className="flaticon-right-arrow" /></a>
            </Link>
          </div>
        </div>
      </header>

      <style jsx>
        {`
          section {
            background-image: url("/static/header2.webp");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 100%;
            display: flex;
            align-items: center;
            height: 100vh;
            min-height: 550px;
          }
          header{
            width: 100%;
          }
          .title {
            width: 100%;
            box-sizing: border-box;
            text-shadow: 1px 1px 2px black;
          }
          h1, p{
            color: white;
          }
          .buttons {
            margin-top: 40px;
          }
          span {
            padding: 0 5px;
          }
          i:before {
            font-size: 14px;
            margin-left: 5px;
          }
          @media screen and (min-width: 480px) {
            .title {
              width: 70%;
            }
          }
          @media screen and (min-width: 768px) {
            .title {
              width: 60%;
            }
          }
          @media screen and (min-width: 990px) {
            .title {
              width: 50%;
            }
          }
        `}
      </style>
    </section>
  );
}
