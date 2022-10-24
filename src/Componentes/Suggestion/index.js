import './style.css'

export function Suggestion() {
    return (
        <div className='container-suggestion'>
            <div className="header-suggestion">
                <img src="https://c4.wallpaperflare.com/wallpaper/958/579/731/hollow-knight-castle-hd-wallpaper-preview.jpg" />

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>Indicação do dia</span>
                        <p>Victor Augusto</p>
                    </div>

                    <button className='switch'>Mudar</button>

                </div>

            </div>

            <div className='header-main-suggestion'>

                <p>Sugestões para você</p>

                <span> Ver tudo...</span>

            </div>
            
            <div className='user-suggestion'>

                <div className='infos-suggestion'>
                    <img src='https://i.pinimg.com/736x/cf/65/5a/cf655a5754c7cc650d34470f5ee9f183.jpg' />

                    <div className='info-suggestion'>

                        <span>Thanatos</span>
                        <p>Seguido por Zagreus e por Megaira</p>
                    </div>

                    <button className='follow'>Seguir</button>

                </div>

            </div>
            {/*Acaba aqui */}

            <div className='user-suggestion'>

                <div className='infos-suggestion'>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.Kd31MvBYwUBXNGcm5s-0XQHaEZ&pid=Api&P=0' />

                    <div className='info-suggestion'>

                        <span>Seirin high school</span>
                        <p>Seguido por Kuroko, Kagami, e mais 15 pessoas...</p>
                    </div>

                    <button className='follow'>Seguir</button>

                </div>

            </div>
            {/*Acaba aqui */}
            
            <div className='user-suggestion'>

                <div className='infos-suggestion'>
                    <img src="https://i.pinimg.com/736x/bb/bf/02/bbbf024aa6e062dc7fd22e741148d913.jpg" />

                    <div className='info-suggestion'>

                        <span>Hornet</span>
                        <p>Seguido por O verdadeiro hollow knight</p>
                    </div>

                    <button className='follow'>Seguir</button>

                </div>

            </div>
            {/*Acaba aqui */}
            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>

        </div>

    )
}