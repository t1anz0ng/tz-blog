import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost(){
    return (
        <Layout>
        <Head>
            <title>First</title>
        </Head>
            <h1>First POst</h1>
            <h2>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}