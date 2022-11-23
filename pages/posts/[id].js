import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
        <Layout>
          <img src={postData.image} alt="Cover" style={{width: '100%'}} />
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
          <br />
          <br />
          {postData.description}
        </Layout>
      );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }