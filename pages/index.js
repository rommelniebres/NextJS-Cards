import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Card from '../components/card';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi, I am Rommel Niebres, a Full Stack Developer looking for a new opportunity to build amazing websites!</p>
          <p>
            (This is a simple SPA websites that pulls data into a list of cards. Exam {' '}
            <a href="https://docs.google.com/spreadsheets/d/1ZzwRsN5tijLI6tdz0bQi4NSVV56OSoR4/edit#gid=1939568605">requirements.</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Posts</h2>
        </section>
        <section className={`${utilStyles.rowCard}`}>
          {allPostsData.map(post =>(
            <Card key={post.id} post={post}/>
          ))}
        </section>
      </Layout>
      
    </>
  );
}