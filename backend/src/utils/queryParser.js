const {
    ALLOWED_CATEGORIES,
    ALLOWED_SORT_FIELDS,
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    MAX_LIMIT,
} = require("../constants/products");

/**
 * Parse and sanitize query parameters for the products endpoint.
 * Invalid values fall back to safe defaults rather than crashing.
 */
function parseProductQuery(query) {
    let page  = parseInt(query.page, 10);
    let limit = parseInt(query.limit, 10);

    page  = (!page || page < 1)   ? DEFAULT_PAGE  : page;
    limit = (!limit || limit < 1) ? DEFAULT_LIMIT : Math.min(limit, MAX_LIMIT);

    const category = ALLOWED_CATEGORIES.includes(query.category)
        ? query.category
        : null;

    const sortField = ALLOWED_SORT_FIELDS.includes(query.sort)
        ? query.sort
        : "createdAt";

    const sortOrder = query.order === "asc" ? 1 : -1;

    return { page, limit, category, sortField, sortOrder };
}

module.exports = { parseProductQuery };
