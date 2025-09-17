import {useEffect, useRef, useState} from "react";
import styles from "./SearchForm.module.scss";


function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);

    // Fake data cho dropdown
    const searchResults = {
        courses: [
            { id: 1, icon: '📘', title: 'JavaScript Cơ Bản', description: 'Học JS từ zero' },
            { id: 2, icon: '📘', title: 'JavaScript Nâng Cao', description: 'Arrow functions và hơn thế' },
            { id: 3, icon: '📘', title: 'React với JS', description: 'Xây dựng app đầu tiên' },
        ],
        articles: [
            { id: 1, icon: '📝', title: 'Hoisting trong JS', description: 'Giải thích chi tiết' },
            { id: 2, icon: '📝', title: 'Closure là gì?', description: 'Ví dụ thực tế' },
            { id: 3, icon: '📝', title: 'Async/Await', description: 'Xử lý bất đồng bộ' },
        ],
        videos: [
            { id: 1, icon: '🎥', title: 'JS Tutorial', description: 'Video hướng dẫn cơ bản' },
            { id: 2, icon: '🎥', title: 'Debug JS', description: 'Mẹo debug hiệu quả' },
        ],
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <input
                type='text'
                className={styles.searchInput}
                placeholder='Tìm kiếm'
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            />

            {isOpen && (
                <div className={styles.dropdown}>
                {/*Nhóm khoá học*/}
                    <div className={styles.section}>
                        <h4>Khoá Học</h4>
                        {searchResults.courses.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <span className={styles.icon}>{item.icon}</span>
                                <div>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <button className={styles.moreButton}>Xem Thêm</button>
                    </div>
                {/*Nhóm bài viết*/}
                    <div className={styles.section}>
                        <h4>Bài Viết</h4>
                        {searchResults.articles.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <span className={styles.icon}>{item.icon}</span>
                                <div>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <button className={styles.moreButton}>Xem Thêm</button>
                    </div>
                {/*Nhóm videos*/}
                    <div className={styles.section}>
                        <h4>Videos</h4>
                        {searchResults.videos.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <span className={styles.icon}>{item.icon}</span>
                                <div>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <button className={styles.moreButton}>Xem Thêm</button>
                    </div>
                    <div className={styles.seeAll}>
                        <a href="#">Xem tất cả kết quả</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchForm;