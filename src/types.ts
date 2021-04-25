export interface Request<Params = any> {
  jsonrpc: "2.0";
  method: string;
  params: Params;
  id?: string | number;
}

export type Response<Value = any> = Success<Value> | Failure;

export interface Success<Value = any> {
  jsonrpc: "2.0";
  result: Value;
  id: string | number;
}

export interface Failure {
  jsonrpc: "2.0";
  error: Error;
  id: string | number;
}

export interface Error {
  code: number;
  message: string;
  data: any;
}

export module Error {
  export const parseError         = -32700;
  export const invalidRequest     = -32600;
  export const methodNotFound     = -32601;
  export const invalidParams      = -32602;
  export const internalError      = -32603;

  export const message: { [code: number]: string } = {
    [parseError]: "Parse error.",
    [invalidRequest]: "Invalid request.",
    [methodNotFound]: "Method not found.",
    [invalidParams]: "Invalid params.",
    [internalError]: "Internal error.",
  }
}
