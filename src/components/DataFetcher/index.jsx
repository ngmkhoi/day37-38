import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DataFetcher({ url, children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [url]);

    return children({ data, loading, error });
}

DataFetcher.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
};

export default DataFetcher;