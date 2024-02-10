import './Prices.css'
export default function Prices() {
  return (
    <div>
        <div className='title-price'>
            <h1>Lista de pret</h1>
        </div>
        <div className='offer'>
            <h2>Alege oferta care crezi ca se potriveste cel mai bine pentru tine</h2>
        </div>
        <div className='card-content'>
            <div className='card-price'>
                <h3>Plan Gratuit</h3>
                <p>Publica un anunt gratuit</p>
                <span>Gratuit</span>
                <ul>
                    <li>
                        Ai acces gratuit pentru orice anunt postat
                    </li>
                    <li>
                        Fara bifa de masina verificata
                    </li>
                    <li>
                        Nu primesti nici un raport
                    </li>
                </ul>
                <div className='btn-order'>
                    <button>Comanda acum</button>   
                </div>
            </div>
            <div className='card-price' id="middle">
                <h3>Plan Normal</h3>
                <p>Publica un anunt ca persoana fizica</p>
                <span>69 RON</span>
                <ul>
                    <li>
                        Ai acces pentru o singura masina
                    </li>
                    <li>
                        Ai acces la bifa pentru masina verificata
                    </li>
                    <li>
                        Primesti raportul de la masina verificata
                    </li>
                </ul>
                <div>
                <div className='btn-order'>
                    <button>Comanda acum</button>   
                </div>  
                </div>            </div>
            <div className='card-price'>
                <h3>Plan Extra</h3>
                <p>Publica un anunt ca dealer auto</p>
                <span>499 RON</span>
                <ul>
                    <li>
                        Ai acces la 5 masini verificate
                    </li>
                    <li>
                        Ai acces la bifa pentru masina verificata
                    </li>
                    <li>
                        Primesti toate rapoartele la masinile verificate
                    </li>
                </ul>
                <div className='btn-order'>
                    <button>Comanda acum</button>   
                </div>
            </div>
        </div>
    </div>
  )
}
