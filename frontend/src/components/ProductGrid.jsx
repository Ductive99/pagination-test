import { ProductCard } from "./ProductCard";

/**
 * Renders the product card grid.
 */
export function ProductGrid({ products }) {
    if (products.length === 0) {
        return <p className="empty">Aucun produit trouvé.</p>;
    }

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}
