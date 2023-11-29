export interface ISendResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  token?: string | null;
  meta?: {
    page: number;
    limit: number;
    skip: number;
    total: number;
  } | null;
  data?: T | null;
}
