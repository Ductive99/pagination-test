/**
 * Controlled filter selector
 * All values and change handlers are received via props (lifted state).
 */
export function Filters({
    category,
    sort,
    order,
    limit,
    onCategoryChange,
    onSortChange,
    onOrderChange,
    onLimitChange,
}) {
    return (
        <div className="filters">
            <div className="filter-group">
                <label htmlFor="filter-category">Catégorie</label>
                <select
                    id="filter-category"
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="">Toutes</option>
                    <option value="shoes">Chaussures</option>
                    <option value="clothing">Vêtements</option>
                    <option value="accessories">Accessoires</option>
                    <option value="bags">Sacs</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="filter-sort">Trier par</label>
                <select
                    id="filter-sort"
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="createdAt">Date</option>
                    <option value="price">Prix</option>
                    <option value="name">Nom</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="filter-order">Ordre</label>
                <select
                    id="filter-order"
                    value={order}
                    onChange={(e) => onOrderChange(e.target.value)}
                >
                    <option value="desc">Décroissant</option>
                    <option value="asc">Croissant</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="filter-limit">Afficher</label>
                <select
                    id="filter-limit"
                    value={limit}
                    onChange={(e) => onLimitChange(Number(e.target.value))}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
        </div>
    );
}
