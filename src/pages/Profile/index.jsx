import { useState, useEffect } from 'react';
import styles from './Profile.module.scss';

function Profile() {
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const defaultAvatar = 'https://via.placeholder.com/100'; // Avatar mặc định

    // Xử lý chọn file
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    // Cleanup blob URL
    useEffect(() => {
        return () => {
            if (avatarPreview) {
                URL.revokeObjectURL(avatarPreview);
            }
        };
    }, [avatarPreview]);

    return (
        <div className={styles.container}>
            <h1>Trang cá nhân</h1>
            <div className={styles.avatarSection}>
                <h2>Avatar</h2>
                <img
                    src={avatarPreview || defaultAvatar}
                    alt="User Avatar"
                    className={styles.avatar}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                />
            </div>
        </div>
    );
}

export default Profile;