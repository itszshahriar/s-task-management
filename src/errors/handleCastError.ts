import httpStatus from "http-status";
import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interface/errorInterface";

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: "Invalid Id",
    },
  ];

  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: "Cast Error",
    errorMessages: errors,
  };
};

export default handleCastError;
