/**
 * Displays the information of a single product.
 */
export function ProductCard({ product }) {
    return (
        <div className="product-card">
            <span className="category-badge">{product.category}</span>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
                <span className="price">{product.price.toFixed(2)} €</span>
                <span className={`stock ${product.stock === 0 ? "out-of-stock" : ""}`}>
                    {product.stock > 0 ? `${product.stock} en stock` : "Rupture"}
                </span>
            </div>
        </div>
    );
}
