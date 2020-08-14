export default function ToPDonors(){
    return (<>
        <div className="topdonors">
            <h3>Agradecimientos especiales:</h3>
            <p>Estos son los jugadores que más contribuyeron económicamente al servidor:</p>
            <b><ul>
                <li>Carlosmax2273: $20USD</li>
                <li>ImCris: $7.5USD</li>
                <li>Maxiquevedo: $5USD</li>
            </ul></b>
        </div>
        <style jsx>{`
            .objetivos{
                max-width: 270px;
                min-width: 250px;
            }
            h3{
                font-weight: 600
            }
            img{
                max-width: 100%;
                max-height: 200px;
                margin: 20px 0;
                text-align: center;
            }
        `}</style>
    </>)
}