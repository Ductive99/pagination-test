const { parseProductQuery } = require("../utils/queryParser");
const { findProducts } = require("../services/products.service");

/**
 * GET /api/products
 *
 * Returns a paginated list of products with filtering and sorting.
 * Query params: page, limit, category, sort, order
 */
async function getProducts(req, res, next) {
    try {
        const { page, limit, category, sortField, sortOrder } =
            parseProductQuery(req.query);

        const { products, totalCount } = await findProducts({
            page,
            limit,
            category,
            sortField,
            sortOrder,
        });

        const totalPages = Math.ceil(totalCount / limit);

        res.json({
            data: products,
            pagination: {
                page,
                limit,
                totalItems: totalCount,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { getProducts };
