import type { NextPage } from "next"
import Head from 'next/head'
import Image from "next/image"
import { toSlug } from "../../functions"

//components
import Layout from "../../components/Layout"
import ProfileCard from "../../components/ProfileCard"
import EventsRegisterButton from "../../components/EventRegisterButton"
//stylesheet
import styles from '../../styles/pages/Events.module.scss'
//assets
import logo from '../../public/images/events/otk_logo.png'
//data
import OtakuizData from "../../data/pages/events/otakuiz"

const Otakuiz: NextPage = () => {
    return (<>
        <Head>
            <title>NuTopia | Otakuiz</title>
            <meta name="description" content="NuTopia Events: Otakuiz" />
        </Head>

        <Layout skipTo="#tagline" overrideClasses={`${styles.main} ${styles.main_otk}`}>

            <div className={styles.banner}>
                <div className={styles.background}>
                    <div className={styles.banner_background} />
                    <div className={styles.grid_ground}>
                        <div></div>
                    </div>
                </div>
                
                <div className={styles.logo} aria-labelledby="title">
                    <Image src={logo} alt="Otakuiz" quality={100} placeholder={"blur"}/>
                </div>
            </div>
            
            <div className={styles.content}>
                <h2 id="tagline" className={styles.tagline}>{OtakuizData.tagline}</h2>
                
                <h2 id="about">About</h2>
                    <p className={`${styles.h2_p} ${styles.description_p}`}>{OtakuizData.headings.about}</p>
                
                <h2 id="guidelines">Guidelines</h2>
                    <ul>{OtakuizData.headings.rules.map((rule, index) => {
                        return <li key={index}><p>{rule}</p></li>
                    })}</ul> 
                
                <h2 id={toSlug("event coordinators")}>Event Coordinators</h2>
                    <div className={styles.card_container}>
                        {OtakuizData.headings.eventCoordinators?.map((coordinator, index) => {
                            return <ProfileCard key={index} profileObject={coordinator}/>
                        })}
                    </div>
                
                <h2 id="registration">Registration</h2>
                    <ul>{OtakuizData.headings.registration.map((rule, index) => {
                        return <li key={index}><p>{rule}</p></li>
                    })}</ul>
                
                <EventsRegisterButton event={toSlug(OtakuizData.title)}/>
            </div>
        </Layout>
    </>)
}

export default Otakuiz