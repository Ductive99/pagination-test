const { getDB } = require("../config/db");

/**
 * Fetch a paginated, filtered, sorted list of products from MongoDB.
 *
 * @param {{ page, limit, category, sortField, sortOrder }} params
 * @returns {{ products: Array, totalCount: number }}
 */
async function findProducts({ page, limit, category, sortField, sortOrder }) {
    const collection = getDB().collection("products");

    const filter = {};
    if (category) {
        filter.category = category;
    }

    const skip = (page - 1) * limit;

    const [products, totalCount] = await Promise.all([
        collection
            .find(filter)
            .sort({ [sortField]: sortOrder })
            .skip(skip)
            .limit(limit)
            .toArray(),
        collection.countDocuments(filter),
    ]);

    return { products, totalCount };
}

module.exports = { findProducts };
