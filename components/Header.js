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
            <a className="button-primary">
              IP: CapitalMC.wtf
            </a>
          </div>
        </div>
      </header>

      <style jsx>
        {`
          section {
            background-image: url("/static/header2.jpg");
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
            margin-left: 3px;
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
          @media (max-width: 990px) {
            section {
              padding-top: 170px;
              padding-bottom: 180px;
            }
          }
          @media only screen and (max-width: 480px) {
            section {
              padding-top: 110px;
              padding-bottom: 100px;
            }
          }
        `}
      </style>
    </section>
  );
}
