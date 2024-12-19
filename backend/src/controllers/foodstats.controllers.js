export class FoodstatsController {
    static async  test(req, res) {
        try {
            res.status(200).json({
                status:"success",
                data: {message:"This is a test"}
            });
        } catch (error) {
            res.status(500).json({
                status:"error",
                message: `Server error: ${error.errors}`,
                code: 500
            })
        }
    }
}