import React from 'react'
import vg from '../assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Allgeeklife</h1>
                    <p>Solution to all your problems </p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>



            <div className="home3" id='about'>

                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo dicta aliquid tempora laudantium veritatis voluptas explicabo earum numquam. Obcaecati tempora consectetur necessitatibus a aspernatur natus ipsa atque in mollitia.
                        Soluta provident sapiente, maxime iure nesciunt magnam atque sunt saepe tempore itaque quasi odit amet omnis eum perferendis minus consectetur ducimus neque! Quas dolorem, iusto perspiciatis consequatur ad rem architecto!
                        Optio, consequuntur alias sed cupiditate perferendis recusandae, hic dicta iure assumenda error rem laboriosam facere ad, et magni! Similique ut ex sunt eveniet odio hic cumque voluptatum quaerat perspiciatis libero.
                        Totam ipsam nobis corrupti eaque sequi ipsum eum reiciendis, rerum ea, molestias ex nulla. Fuga sit beatae accusamus nostrum, tempora a facere eligendi distinctio culpa optio unde, quisquam ratione quaerat.
                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;