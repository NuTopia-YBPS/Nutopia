import Head from "next/head"
import Link from "next/link"
import { toSlug } from "../functions"

//components
import Layout from "../components/Layout"
import RegistrationForm from "../components/RegistrationForm"
//stylesheets
import styles from "../styles/pages/Registration.module.scss"
//data
import { RegistrationData } from "../data/pages"

const Registration = () => {

    return (<>
        <Head>
            <title>NuTopia | Registration</title>
            <meta name="description" content="Register for the events featured in NuTopia" />
        </Head>

        <Layout skipTo="#note" overrideClasses={styles.main}>
            <h1 id="title">{RegistrationData.title}</h1>
            
            <p id="note" style={{fontSize: "1.5em"}}>Please read the given guideslines before proceeding to fill the <Link href={`#${toSlug("Registration Form")}`}><a>Registration Form</a></Link>.</p>

            <h2>Common Guidelines</h2>
            <ul>
                {RegistrationData.commonRules.map((rule: string, index: number) => <li key={index}>{rule}</li>)}
            </ul>
            <h2>Event Guidelines</h2>
            {RegistrationData.eventRules.map((event:{title: string, rules: string[]}, index: number) => {
                return (<div key={index}>
                    <h3>{event.title}</h3>
                    <ul>
                        {event.rules.map((rule: string, index: number) => <li key={index}><p>{rule}</p></li>)}
                    </ul>
                </div>)
            })}

            <RegistrationForm />

        </Layout>
    </>)
}

export default Registration