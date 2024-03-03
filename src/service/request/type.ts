import type { AxiosResponse, AxiosRequestConfig } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface MyInterceptors<T = AxiosResponse> {
	requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestFailureFn?: (err: any) => any
	responseSuccessFn?: (res: T) => T
	responseFailureFn?: (err: any) => any
}

export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: MyInterceptors<T>
}
