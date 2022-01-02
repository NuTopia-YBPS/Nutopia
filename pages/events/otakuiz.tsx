import type { NextPage } from "next"
import Head from 'next/head'
import Image from "next/image"

//components
import Footer from '../../public/componets/Footer'
import NavBar from '../../public/componets/NavBar'
import EventsRegisterButton from "../../public/componets/EventRegisterButton"
//stylesheet
import styles from '../../styles/Home.module.scss'
import eventStyles from '../../styles/Events.module.scss'
//assets
import logo from '../../public/images/events/otk_retro_logo.png'

const Otakuiz: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NuTopia | Otakuiz</title>
                <meta name="description" content="NuTopia Events: Otakuiz" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <NavBar skipTo="#tagline"/>

            <main className={`${eventStyles.main} ${eventStyles.main_otk}`}>
                <div className={eventStyles.banner}>
                    <div className={eventStyles.background}>
                        <div className={eventStyles.banner_background} />
                        <div className={eventStyles.grid_ground}>
                            <div></div>
                        </div>
                    </div>
                    
                    <div className={eventStyles.logo} aria-labelledby="title">
                        <Image src={logo} alt="Otakuiz" width={1710} height={288} quality={100} placeholder={"blur"}/>
                    </div>
                </div>
                <div className={eventStyles.content}>
                    <h2 id="tagline" className={eventStyles.tagline}>Prepare for trouble, Make it double!</h2>
                    <h2 id="about" className={eventStyles.subheading}>About</h2>
                        <p>All of your anime binge watching sessions ends here and it’s time to get isekaied into Otakuiz, a fun quiz suited for the weeb within you!</p> 
                    <h2 id="rules" className={eventStyles.subheading}>Rules</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla quasi esse illo dolores ipsa ipsum? Odio unde repellat assumenda nulla laborum nesciunt quos illum ad sed explicabo, quam asperiores?</p> 
                    <h2 id="event-coordinators" className={eventStyles.subheading}>Event Coordinators</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla quasi esse illo dolores ipsa ipsum? Odio unde repellat assumenda nulla laborum nesciunt quos illum ad sed explicabo, quam asperiores?</p> 
                    <h2 id="registration" className={eventStyles.subheading}>Registration</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla quasi esse illo dolores ipsa ipsum? Odio unde repellat assumenda nulla laborum nesciunt quos illum ad sed explicabo, quam asperiores?</p>
                        <EventsRegisterButton/>
                </div>
            </main>

            <Footer/>

        </div>
    )
}

export default Otakuiz