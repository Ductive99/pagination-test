/**
 * Pagination controls with prev/next buttons and current page index.
 * Disabled at boundaries to prevent invalid page requests.
 * Hidden when there's only one page of results.
 */
export function Pagination({ pagination, onPageChange }) {
    if (!pagination || pagination.totalPages <= 1) return null;

    const { page, totalPages, hasNextPage, hasPrevPage, totalItems } = pagination;

    return (
        <div className="pagination">
            <button
                disabled={!hasPrevPage}
                onClick={() => onPageChange(page - 1)}
                aria-label="Page précédente"
            >
                ← Précédent
            </button>

            <span className="page-info">
                Page {page} sur {totalPages} — {totalItems} produits
            </span>

            <button
                disabled={!hasNextPage}
                onClick={() => onPageChange(page + 1)}
                aria-label="Page suivante"
            >
                Suivant →
            </button>
        </div>
    );
}
