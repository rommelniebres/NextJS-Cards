import Link from 'next/link';
import styles from './card.module.css';

export default function Card({post}) {
    return (
        <div className={styles.columnCard} >
            <div className={styles.card}>
                <img src={post.image} alt="Cover" style={{width: '100%'}} />
                <div className={styles.container}>
                    <h4><b>{post.title}</b></h4>
                    <p>
                        {post.description.length > 100 ?
                            `${post.description.substring(0, 100)}...` : post.description
                        }
                    </p>
                    <Link href={`/posts/${post.id}`}>Learn More</Link>
                </div>
            </div>
        </div>
    );
}