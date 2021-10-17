export default class HomeController {
    static async HomeRouteGetController(req, res, next) {
        try {
            res.status(200).json({
                ok: true,
                message: "ok",
                data: {
                    students: [
                        {
                            name: "shaxboz abdiraximov",
                        },
                        {
                            name: "nuriddin jalilov"
                        }
                    ],
                    teachers: [
                        {
                            name: "o'tkir",
                        }
                    ]
                }
            })
        } catch (error) {
            next(error);
        }
    }
}