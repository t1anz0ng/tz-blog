import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import Image from 'next/image'

export default function About(){
    return (
        <Layout>
          <Head>
            <title>About</title>
          </Head>
          <div className={styles.main}>
              <div className={styles.aboutPageLeft}>
                <div className={styles.title}>
                  <h1 data-sizing='intrinsic'>About</h1>
                  <p>Climber</p>
                </div>
                  
              </div>

              <div className={styles.mainPageRight}>
              <Image
                priority
                src="/tz-back.jpg"
                layout="fill"
                objectFit="cover"
                alt={styles.name}
              />
              <h3>Qingdao/青岛 May 2021</h3>
              </div>
            </div>
        </Layout>
      )
}