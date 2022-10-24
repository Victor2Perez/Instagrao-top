import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'

export function Layout() {
    return (
        <>

            <div className='MainGrid'>
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="Box">
                        <Story />
                    </div>

                    <div className="Box" style={{ margin: "30px 0" }}>
                        <Post />
                    </div>
                </div>

                <div style={{ gridArea: "secondColumn" }}>
                    <div className='"suggestionBox'>
                        <Suggestion />
                    </div>
                </div>

            </div>
        </>
    )



}