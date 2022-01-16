import Layout from "../components/Layout"
import ProfileCard from "../components/ProfileCard"
import styles from "../styles/About.module.scss"

import {EventCoordinators, EventHeads} from "../data/EventCoordinators"
import AboutData from "../data/pages/about"

const About = () => {
    return (
        <Layout skipTo="#content" overrideClasses={styles.main}>
            <h1>Who We Are</h1>
                {AboutData.whoWeAre.map((about, index) => {
                    return (<p key={index} className={styles.about_us}>
                        {about}
                    </p>)
                })}
            <hr />
            <h1>Event Heads</h1>
                <div className={`${styles.card_container} ${styles.event_heads}`}>
                    {EventHeads.map((profile, index) => {
                        return <ProfileCard key={index} profileObject={profile}/>
                    })}
                </div>
            
            <hr />
            <h1>Event Coordinators</h1>
                <div className={styles.card_container}>
                    {EventCoordinators.map((profile, index) => {
                        return <ProfileCard key={index} profileObject={profile}/>
                    })}
                </div>

        </Layout>
    )
}

export default About