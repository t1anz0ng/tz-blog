import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Image from 'next/image'


export default function Home({ allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section classNameName={utilStyles.headingMd}>
        <p>[About]</p>
        <p>
        </p>
      </section> */}
      <div className={styles.main}>
              <div className={styles.mainPageLeft}>
                <div className={styles.title}>
                  <h1>TianZong</h1>
                  <p>about</p>
                </div>
              </div>

              <div className={styles.mainPageRight}>
              <Image
                priority
                src="/chinawhite.jpg"
                // classNameName={utilStyles.borderCircle}
                layout="fill"
                objectFit="cover"
                alt={styles.name}
              />
              </div>
            </div>

  
    </Layout>
  )
}

