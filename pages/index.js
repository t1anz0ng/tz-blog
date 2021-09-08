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
                <div>
                <h3> CHINA WHITE(5.12b), 白山, 阳朔 2021.2</h3>
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

