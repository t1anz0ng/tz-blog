import Head from 'next/head'
import Image from 'next/image'
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
        <h1 className={utilStyles.headlingLg}>Curated</h1>
        {allPosts.map(({id,date,title,cover,list}) =>(
          <div className={utilStyles.listItem} key={id}>
            <h3>{title}</h3>
            <p>{date}</p>
            <div className={utilStyles.listItemPic}>
                <Image 
                    priority
                    src={cover}
                    alt="cover pic"
                    height={400}
                    width={400}
                    layout="responsive"
                    />
            </div>
            <p>{list}</p>
          </div>
          
        ))}
        
    </Layout>
  )
}
