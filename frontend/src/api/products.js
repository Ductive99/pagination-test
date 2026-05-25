const API_BASE = "/api/products";

/**
 * Fetch a paginated, filtered, sorted list of products from the backend.
 *
 * @param {object}      params
 * @param {number}      params.page
 * @param {number}      params.limit
 * @param {string}      [params.category]
 * @param {string}      [params.sort]
 * @param {string}      [params.order]
 * @param {AbortSignal} [params.signal]
 * @returns {Promise<{ data: Array, pagination: object }>}
 */
export async function fetchProducts({ page, limit, category, sort, order, signal }) {
    const params = new URLSearchParams();
    params.set("page", page);
    params.set("limit", limit);
    if (category) params.set("category", category);
    if (sort) params.set("sort", sort);
    if (order) params.set("order", order);

    const res = await fetch(`${API_BASE}?${params}`, { signal });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error?.message || `Erreur serveur (${res.status})`);
    }

    return res.json();
}
