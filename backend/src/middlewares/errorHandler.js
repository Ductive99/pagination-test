/**
 * Express error handler.

 */
function errorHandler(err, req, res, next) {
    console.error(`[ERROR] ${req.method} ${req.originalUrl}:`, err.message);

    const status = err.status || 500;

    res.status(status).json({
        error: {
            message: status === 500 ? "Internal server error" : err.message,
        },
    });
}

module.exports = { errorHandler };
