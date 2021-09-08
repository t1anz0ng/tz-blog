import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPosts = getSortedPostsData()
  return {
    props: {
      allPosts
    }
  }
}

export default function AllPosts({ allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
{/* 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headlingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({id,date,title}) =>(
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li> 
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

