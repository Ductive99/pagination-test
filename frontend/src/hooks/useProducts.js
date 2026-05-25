import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/products";

/**
 * Hook for fetching paginated products with AbortController.
 */
export function useProducts({ page, limit, category, sort, order }) {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetchProducts({ page, limit, category, sort, order, signal: controller.signal })
            .then((res) => {
                setProducts(res.data);
                setPagination(res.pagination);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [page, limit, category, sort, order]);

    return { products, pagination, loading, error };
}
