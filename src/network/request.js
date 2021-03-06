import axios from 'axios'

export function request(config) {
	// 1.创建axios的实例
	const instance = axios.create({
		// 这个借口暴露了
		// baseURL: 'http://106.54.54.237:8000/api/v1',
		baseURL: 'http://106.54.54.237:8000/api/w1',
		timeout: 5000
	})

	// 2. axios的拦截器
	// 2.1 请求拦截的作用
	instance.interceptors.request.use(config => {
		return config
	}, err => {
		console.log(err);
	})

	// 2.2 响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	}, err => {
		console.log(err);
	})

	// 3. 发送真正的网路请求
	return instance(config)
}

// 106.54.54.237:8000/api/v1/home/data?type=sell&page=1
