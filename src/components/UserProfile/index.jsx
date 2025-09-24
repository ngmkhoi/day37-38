import withLoading from '../../hoc/withLoading';
import styles from './UserProfile.module.scss';

function UserProfile() {
    return (
        <div className={styles.container}>
            <h3>User Profile</h3>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
        </div>
    );
}

const UserProfileWithLoading = withLoading(UserProfile);

export default UserProfileWithLoading;