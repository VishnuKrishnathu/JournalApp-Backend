import { HttpRequest } from "index.d";
import { Request, Response } from "express";

export default function makeExpressCallback(
    controller: (
        _req: HttpRequest<any>,
    ) => Promise<{ status: number; body: any }>,
) {
    return (req: Request, res: Response) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                Authorization: req.headers.authorization,
            },
        };
        controller(httpRequest)
            .then(httpResponse => {
                res.status(httpResponse.status).json(httpResponse.body);
            })
            .catch(e =>
                res.status(500).send({ error: "An unkown error occurred." }),
            );
    };
};
