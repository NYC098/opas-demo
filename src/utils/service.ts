import { notification } from 'antd';
import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { stringify } from 'query-string';
import history from './history';

interface ResData<T = any> {
  success: boolean;
  msg?: string;
  msgCode?: string;
  data?: T;
  resp?: T;
}

let lastMessage: string;
let lastTime: number;
/**
 * 需要跳转登录的错误码
 */
const NO_AUTH_CODES: number[] = [401, 403];

/**
 * 状态码的错误信息
 */
const STATUS_MESSAGES: Record<string, string> = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  408: '请求超时',
  500: '系统繁忙，请稍后再试。',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持',
};

/**
 * 错误码的错误信息
 */
const CODE_MESSAGES: Record<string, string> = {
  ERR_NETWORK: '网络错误',
  ECONNABORTED: '请求超时',
};

const openNotification = (message: string) => {
  notification.destroy();
  notification.error({
    message: '错误提示：',
    description: message || '系统繁忙，请稍后再试',
  });
};

const redirectLogin = () => {
  // 重定向到登录页
  if (history.location.pathname !== '/login') {
    Cookies.remove('scrm_token');
    history.push('/login');
  }
};

// 记录和显示错误
function logError(msg: string) {
  // 相同的消息在一秒钟之内不重复提示
  if (!(lastMessage === msg && lastTime + 1000 > Date.now())) {
    lastMessage = msg;
    lastTime = Date.now();
    openNotification(msg);
  }
}

function setAxiosRequestHeader(config: AxiosRequestConfig, key: string, value: string) {
  // console.log('config.headers', config.headers)
  // return
  if (!config.headers) {
    config.headers = {};
  }
  if (typeof config.headers.set === 'function') {
    config.headers.set(key, value);
  } else if (!(config.headers instanceof AxiosHeaders)) {
    config.headers[key] = value;
  }
}

export default class Service {
  public service: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.service = axios.create({
      timeout: 50000,
      paramsSerializer: function (params) {
        return stringify(params, { arrayFormat: 'comma' });
      },
      // withCredentials: true,
      ...config,
    });

    this.service.interceptors.request.use(
      (config) => {
        const scrmToken = Cookies.get('scrm_token');
        if (scrmToken) {
          setAxiosRequestHeader(config, 'Authorization', scrmToken);
        }
        config.headers.appId = 1;
        return config;
      },
      (error) => {
        // 发送失败
        console.log(error, '请求失败');
        Promise.reject(error);
      }
    );

    // 响应拦截器
    this.service.interceptors.response.use(
      (response) => {
        const dataAxios = response.data as ResData;
        if (dataAxios.resp) {
          dataAxios.data = dataAxios.resp;
        }
        if ((response.headers['content-type'] as string)?.includes('json')) {
          // 这个状态码是和后端约定的
          const { success, msgCode: code } = dataAxios;
          // 兼容非标准响应体
          if (typeof success === 'undefined' && !code && !dataAxios.msg) {
            return response;
          }
          if (code && NO_AUTH_CODES.includes(+code)) {
            dataAxios.msg = '您的账号登录超时或已在其他地方登录，若不是本人操作，请注意账号安全！';
            redirectLogin();
          }
          if (success) {
            return dataAxios as any;
          } else {
            if (dataAxios.msg) {
              logError(dataAxios.msg);
            }
            return Promise.reject(dataAxios);
          }
        } else {
          return response;
        }
      },
      (error) => {
        if (!axios.isCancel(error)) {
          if (error?.response) {
            error.msg = error.response.data?.msg || STATUS_MESSAGES[error.response.status];
            if (NO_AUTH_CODES.includes(error.response.status)) {
              error.msg = '您的账号登录超时或已在其他地方登录，若不是本人操作，请注意账号安全！';
              redirectLogin();
            }
          } else if (error?.code) {
            error.msg = CODE_MESSAGES[error.code];
          }
          logError(error.msg || error.message);
          return Promise.reject(error);
        } else {
          return Promise.reject(error);
        }
      }
    );
  }

  public request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const res = await this.service.request<T>(config);
    return res.data;
  };

  public get = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.get<T>(url, config);
    return res.data;
  };

  public delete = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.delete<T>(url, config);
    return res.data;
  };

  public options = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.options<T>(url, config);
    return res.data;
  };

  public head = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.head<T>(url, config);
    return res.data;
  };

  public post = async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await this.service.post<T>(url, data, config);
    return res.data;
  };

  public put = async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await this.service.put<T>(url, data, config);
    return res.data;
  };

  public patch = async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await this.service.patch<T>(url, data, config);
    return res.data;
  };
}
