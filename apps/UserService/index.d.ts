export interface HttpRequest<Body, Params = {}, Query = {}> {
    body: Body;
    query: Query;
    params: Params;
    ip: string;
    method: string;
    path: string;
    headers: {
        Authorization: string | undefined;
    };
}

export type controller = (req: HttpRequest) => Promise<any>;
