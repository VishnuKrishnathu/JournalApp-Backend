type handleError = (
    err: any,
    status?: number,
) => {
    status: number;
    body: any;
};

const errorHandler: handleError = (err, status = 422) => {
    console.log(err);
    if (err instanceof Error) {
        return {
            status,
            body: {
                error: err.message,
            },
        };
    }

    return {
        status: 500,
        body: {
            error: "Internal Server Error",
        },
    };
};

export default errorHandler;
