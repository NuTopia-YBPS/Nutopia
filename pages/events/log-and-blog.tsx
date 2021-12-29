import { NextPage } from "next";

//components
import Footer from '../../public/componets/Footer'
import NavBar from '../../public/componets/NavBar'
//stylesheet
import styles from '../../styles/Home.module.scss'
import eventStyles from '../../styles/Events.module.scss'
import Head from "next/head";

const LogAndBlog: NextPage= () => {
    return(
        <div className={styles.container}>
            <Head>
                <title>Log and Blog</title>
                <meta name="description" content="NuTopia Events: Log and Blog" />
            </Head>

            <NavBar/>

            <main className={`${eventStyles.main} ${eventStyles.main_LaB}`}></main>

            <Footer/>
        </div>
    )
}

export default LogAndBlog