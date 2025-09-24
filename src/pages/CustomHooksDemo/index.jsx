import useApi from '../../hooks/useApi';
import useToggle from '../../hooks/useToggle';
import styles from './CustomHooksDemo.module.scss';

function CustomHooksDemo() {
    const { data: posts, loading: postsLoading, error: postsError, refetch: refetchPosts } = useApi(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const { data: users, loading: usersLoading, error: usersError, refetch: refetchUsers } = useApi(
        'https://jsonplaceholder.typicode.com/users?_limit=5'
    );

    const [showPosts, togglePosts] = useToggle(true);
    const [showUsers, toggleUsers] = useToggle(true);
    const [isDarkTheme, toggleTheme] = useToggle(false);

    return (
        <div className={`${styles.container} ${isDarkTheme ? styles.dark : ''}`}>
            <h1>Custom Hooks Demo</h1>

            <button onClick={toggleTheme}>
                {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            </button>

            <div className={styles.section}>
                <h2>Posts List</h2>
                <button onClick={togglePosts}>
                    {showPosts ? 'Hide Posts' : 'Show Posts'}
                </button>
                <button onClick={refetchPosts}>Refetch Posts</button>
                {showPosts && (
                    <div>
                        {postsLoading && <p>Loading posts...</p>}
                        {postsError && <p>Error: {postsError}</p>}
                        {!postsLoading && !postsError && (
                            <ul>
                                {posts?.map((post) => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>

            <div className={styles.section}>
                <h2>Users List</h2>
                <button onClick={toggleUsers}>
                    {showUsers ? 'Hide Users' : 'Show Users'}
                </button>
                <button onClick={refetchUsers}>Refetch Users</button>
                {showUsers && (
                    <div>
                        {usersLoading && <p>Loading users...</p>}
                        {usersError && <p>Error: {usersError}</p>}
                        {!usersLoading && !usersError && (
                            <ul>
                                {users?.map((user) => (
                                    <li key={user.id}>
                                        {user.name} - {user.email}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomHooksDemo;