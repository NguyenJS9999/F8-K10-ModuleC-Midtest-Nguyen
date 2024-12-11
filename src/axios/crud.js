import axios from "axios";

export const instance = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAll = async (path) => {
	console.log("getAll path", path);
	try {
		const { data } = await instance.get(path);
		return data;
	} catch (error) {
		return(error);
	}
};

export const getById = async (path, id) => {
	try {
		const { data } = await instance.get(`${path}/${id}`);
		return data;
	} catch (error) {
		return(error);
	}
};

export const removeById = async (path, id) => {
	try {
		const res = await instance.delete(`${path}/${id}`);
		return res;
	} catch (error) {
		return(error);
	}
};

export const createNew = async (path, dataBody) => {
	try {
		const { data } = await instance.post(`${path}`, dataBody);
		return data;
	} catch (error) {
		return(error);
	}
};

export const updateById = async (path, id, dataBody) => {
	try {
		const { data } = await instance.patch(`${path}/${id}`, dataBody);
		return data;
	} catch (error) {
		return(error);
	}
};



