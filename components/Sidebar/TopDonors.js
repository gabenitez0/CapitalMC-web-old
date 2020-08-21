export default function ToPDonors(){
    return (<>
        <div className="topdonors">
            <h3>Agradecimientos especiales:</h3>
            <p>Estos son los jugadores que más contribuyeron económicamente al servidor:</p>
            <b><ul>
                <li><b>Carlosmax2273: $43,5USD</b></li>
                <li>Maxiquevedo: $10USD</li>
                <li>IamCris: $7.5USD</li>
            </ul></b>
        </div>
        <style jsx>{`
            .topdonors{
                max-width: 270px;
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