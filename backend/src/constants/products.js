/**
 * Centralized constants for the products domain.
 * Same source of truth for routes, controllers...
 */

const ALLOWED_CATEGORIES  = ["shoes", "clothing", "accessories", "bags"];
const ALLOWED_SORT_FIELDS = ["price", "name", "createdAt"];
const ALLOWED_ORDERS      = ["asc", "desc"];

const DEFAULT_PAGE  = 1;
const DEFAULT_LIMIT = 20;
const MAX_LIMIT     = 100;

module.exports = {
    ALLOWED_CATEGORIES,
    ALLOWED_SORT_FIELDS,
    ALLOWED_ORDERS,
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    MAX_LIMIT,
};
