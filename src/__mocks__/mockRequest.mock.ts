import { Params } from "express-serve-static-core";
import { Request } from "express";

interface MockRequest {
  params?: Params;
  query?: Params;
}

export const makeMockRequest = ({ params, query }: MockRequest): Request => {
  const request = {
    params: params || {},
    query: query || {},
  } as unknown;

  return request as Request;
};
