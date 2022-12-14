import { NextFunction, Request, Response } from 'express'

export const methodNotAllowed = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	res.status(405).json({
		status: 'failed',
		message: 'REST method not allowed for this path',
	})
}
