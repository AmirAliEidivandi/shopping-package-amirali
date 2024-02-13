import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

declare global {
  interface Req extends Request {
    currentUser: any;
  }
}

export const requireAuth = async (
  req: Req,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) throw new NotAuthorizedError();

  // const user = await User.findById(req.currentUser?.userId);

  // if (!user) throw new NotAuthorizedError();

  next();
};
