import axios, { AxiosRequestConfig } from "axios";
import AxiosRetry from "axios-retry";
import { Notification } from "@arco-design/web-react";

const BASE_CONFIG: Partial<AxiosRequestConfig> = {
  baseURL: "webpackReact/api"
};

const client = axios.create(BASE_CONFIG);
AxiosRetry(client, { retries: 3 }); // 错误自动请求重试，最多3次

const http = async <T>(
  method: AxiosRequestConfig["method"],
  url: string,
  config?: AxiosRequestConfig
) => {
  try {
    const res = await client(url, { method, ...config });
    if (res.data.status) {
      Notification.error({
        title: "出错啦",
        content: res?.data.content ?? "default error content"
      });
    }
    return res?.data as T;
  } catch (error) {
    return { error };
  }
};

const httpGET = <T>(url: string, config?: AxiosRequestConfig) => http<T>("GET", url, config);

const httpPOST = <T>(url: string, data?: AxiosRequestConfig["data"], config?: AxiosRequestConfig) =>
  http<T>("POST", url, { data, ...config });

const httpDELETE = <T>(url: string, data?: AxiosRequestConfig["data"], config?: AxiosRequestConfig) =>
  http<T>("DELETE", url, { params: data, ...config });

const httpPUT = <T>(url: string, data?: AxiosRequestConfig["data"], config?: AxiosRequestConfig) =>
  http<T>("PUT", url, { data, ...config });

export { httpGET, httpPOST, httpDELETE, httpPUT, http };

