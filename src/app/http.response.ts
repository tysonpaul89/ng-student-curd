import { Student } from './models/student';

export interface IHttpResponse<T> {
  data: T;
  message: string;
  status: boolean;
}
