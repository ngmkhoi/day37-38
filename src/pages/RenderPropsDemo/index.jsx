import DataFetcher from '../../components/DataFetcher';
import styles from './RenderPropsDemo.module.scss';

function RenderPropsDemo() {
    return (
        <div className={styles.container}>
            <h1>Render Props Demo</h1>

            <div className={styles.section}>
                <h2>Posts List</h2>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading) return <div className={styles.loading}>Loading posts...</div>;
                        if (error) return <div className={styles.error}>Error: {error}</div>;
                        return (
                            <div>
                                {data?.map((post) => (
                                    <div key={post.id} className={styles.item}>
                                        {post.title}
                                    </div>
                                ))}
                            </div>
                        );
                    }}
                </DataFetcher>
            </div>

            <div className={styles.section}>
                <h2>Users List</h2>
                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading) return <div className={styles.loading}>Loading users...</div>;
                        if (error) return <div className={styles.error}>Error: {error}</div>;
                        return (
                            <div>
                                {data?.map((user) => (
                                    <div key={user.id} className={styles.item}>
                                        {user.name} - {user.email}
                                    </div>
                                ))}
                            </div>
                        );
                    }}
                </DataFetcher>
            </div>
        </div>
    );
}

export default RenderPropsDemo;