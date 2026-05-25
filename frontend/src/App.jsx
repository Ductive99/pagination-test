import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { ProductGrid } from "./components/ProductGrid";
import { Pagination } from "./components/Pagination";
import { Filters } from "./components/Filters";

export default function App() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("createdAt");
    const [order, setOrder] = useState("desc");

    const { products, pagination, loading, error } = useProducts({
        page, limit, category, sort, order,
    });

    const handleCategoryChange = (val) => { setCategory(val); setPage(1); };
    const handleSortChange = (val) => { setSort(val); setPage(1); };
    const handleOrderChange = (val) => { setOrder(val); setPage(1); };
    const handleLimitChange = (val) => { setLimit(Number(val)); setPage(1); };

    return (
        <div className="app">
            <header className="header">
                <h1>Catalogue produits</h1>
                <Filters
                    category={category}
                    sort={sort}
                    order={order}
                    limit={limit}
                    onCategoryChange={handleCategoryChange}
                    onSortChange={handleSortChange}
                    onOrderChange={handleOrderChange}
                    onLimitChange={handleLimitChange}
                />
            </header>

            {loading && <p className="loading">Chargement…</p>}
            {error && <p className="error">Erreur : {error}</p>}

            {!loading && !error && (
                <>
                    <ProductGrid products={products} />
                    <Pagination pagination={pagination} onPageChange={setPage} />
                </>
            )}
        </div>
    );
}
