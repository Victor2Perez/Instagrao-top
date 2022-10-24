import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="infos-post">
                    <img className='img-header-post' src="https://c4.wallpaperflare.com/wallpaper/958/579/731/hollow-knight-castle-hd-wallpaper-preview.jpg" />
                    <p>Indicação do dia</p>
                </div>
                <div className="tres-pontos">
                <FiMoreHorizontal />
</div>
            </header>

            <div className='img-post'>
                <img src='https://i.pinimg.com/originals/7e/54/e5/7e54e5db8519cac1ab33007ab84eddc9.jpg' />

                <div className='footer-post'>
                    <IconContext.Provider value={{ size: "30px", }}>
                        <section className='engagement-post'>
                            <div className="icons-1" >
                           
                                <div className="icon"><IoMdHeartEmpty /></div>

                                <div className="icon"><BsChat /></div>
                                <div className="icon"><FiSend /></div>
                            </div>


                            <div className="icon"><BsBookmark /></div>


                        </section>
                    </IconContext.Provider>

                    <section className='like'>
                        <span>70 likes</span>
                    </section>

                    <div className='legend'>
                        <p>
                            <strong>Indicação do dia:</strong> Recomendação do dia: Kuroko no basket! É um anime de basquete onde o protagonista (Kuroko) jogava em uma equipe muito forte. Após sair desse time por causa da arrogancia dos seus companheiros, ele entrou pro time da "Seirin" para, juntamente da nova equipe, derrotar cada um dos antigos companheiros
                        </p>
                    </div>

                    <div className='time-post'>
                        <time>Há 1 hora</time>
                    </div>
                    <div className='comment'>
                        <div className='fake-comment'>
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className='icon'>
                                    < BsEmojiSmile />
                                </div>

                            </IconContext.Provider>
                            <input placeholder='Adicione um comentário...' />

                        </div>

                        <button>Publicar</button>


                    </div>


                </div>

            </div>

            {/*Inicia o próximo post */}

            <header className='header-post'>

                <div className="infos-post">
                    <img className='img-header-post' src="https://i.pinimg.com/736x/22/b3/0d/22b30d9acbac7b93d129b818b22765d4.jpg" />
                    <p>Zagreus</p>
                </div>
<div className="tres-pontos">
                <FiMoreHorizontal />
</div>
            </header>

            <div className='img-post'>
                <img src='https://64.media.tumblr.com/b22286a96c863dbda74d384c68b12f7f/56fff47e84ead30c-3f/s2560x500/a5c6671cf33cedca58ae1af866a6a0e12aaa101b.png' />

                <div className='footer-post'>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <section className='engagement-post'>
                            <div className="icons-1" >
                           
                                <div className="icon"><IoMdHeartEmpty /></div>
                                <div className="icon"><BsChat /></div>
                                <div className="icon"><FiSend /></div>
                            </div>


                            <div className="icon"><BsBookmark /></div>


                        </section>
                    </IconContext.Provider>

                    <section className='like'>
                        <span>164 likes</span>
                    </section>

                    <div className='legend'>
                        <p>
                            <strong>Zagreus:</strong> Homenagem a melhor sombra de Elisium
                        </p>
                    </div>

                    <div className='time-post'>
                        <time>Há 2 hora</time>
                    </div>
                    <div className='comment'>
                        <div className='fake-comment'>
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className='icon'>
                                    < BsEmojiSmile />
                                </div>

                            </IconContext.Provider>
                            <input placeholder='Adicione um comentário...' />

                        </div>

                        <button>Publicar</button>


                    </div>


                </div>

            </div>
            {/*Inicia o próximo post */}

            <header className='header-post'>

                <div className="infos-post">
                    <img className='img-header-post' src="https://64.media.tumblr.com/6328388ef182ac1295aad5869032e3e7/tumblr_p0grdf9zz41ww880vo1_1280.png" />
                    <p>O verdadeiro cavaleiro vazio</p>
                </div>
                <div className="tres-pontos">
                <FiMoreHorizontal />
</div>
            </header>

            <div className='img-post'>
                <img src='https://wallpapercave.com/wp/wp4377327.jpg' />

                <div className='footer-post'>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <section className='engagement-post'>
                            <div className="icons-1" >
                               
                                    <div className="icon"><IoMdHeartEmpty /></div>
                               
                                <div className="icon"><BsChat /></div>
                                <div className="icon"><FiSend /></div>
                            </div>


                            <div className="icon"><BsBookmark /></div>


                        </section>
                    </IconContext.Provider>

                    <section className='like'>
                        <span>50 likes</span>
                    </section>

                    <div className='legend'>
                        <p>
                            <strong>O verdadeiro cavaleiro vazio:</strong> "Sem mente para pensar. Sem vontade para quebrar. Sem voz para gritar em sofrimento. Nascido de Deus e Vazio."
                        </p>
                    </div>

                    <div className='time-post'>
                        <time>Há 24 hora</time>
                    </div>
                    <div className='comment'>
                        <div className='fake-comment'>
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className='icon'>
                                    < BsEmojiSmile />
                                </div>

                            </IconContext.Provider>
                            <input placeholder='Adicione um comentário...' />

                        </div>

                        <button>Publicar</button>


                    </div>


                </div>

            </div>
        </>
    )
}