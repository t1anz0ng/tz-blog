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
      {/* <section className={utilStyles.headingMd}>
        <p>[About]</p>
        <p>
        </p>
      </section> */}
      <div class={styles.main}>
              <div class={styles.mainPageLeft}>
                <div class={styles.title}>
                  <h1>TianZong</h1>
                  <p>about</p>
                </div>
              </div>

              <div class={styles.mainPageRight}>
              <Image
                priority
                src="/chinawhite.jpg"
                // className={utilStyles.borderCircle}
                layout="fill"
                objectFit="cover"
                alt={styles.name}
              />
              </div>
            </div>

  
    </Layout>
  )
}

