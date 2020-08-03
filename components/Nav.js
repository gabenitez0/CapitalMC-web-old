import Link from "next/link";

export default function Nav() {
  return (
    <nav className="container">
      <div className="nav">
        <Link href="/">
          <a>
            <img className="logo" src="/static/logo.svg" />
          </a>
        </Link>
        <div className="links">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/#services">
            <a>Servicios</a>
          </Link>
          <Link href="/#features">
            <a>Automatización</a>
          </Link>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .nav {
          top: 20px;
          position: absolute;
          display: flex;
          justify-content: space-between;
          max-width: 750px; 
          align-items: center;
          width: calc(100% - 60px);
        }
        .logo {
          height: 45px;
        }
        .logo:hover {
          cursor: pointer;
        }
        .links :global(a) {
          text-decoration: none
          margin-left: 20px;
          font-weight: 300;
        }
        .links :global(a:hover) {
          border-bottom: 1px solid;
        }

        @media screen and (max-width: 700px){
          .links{
            display: none;
          }
        }
        @media screen and (min-width: 992px){
          .nav{
            max-width: 970px; 
          }
        }
      `}</style>
    </nav>
  );
}
