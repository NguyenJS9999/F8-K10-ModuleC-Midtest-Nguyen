import instance from "./crud"

export const registerAccount = async (dataBody) => {
	try {
		const { data } = await instance.post("/register", dataBody);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const loginAccount = async (dataBody) => {
	try {
		const { data } = await instance.post("/login", dataBody);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const auth = async (path, dataBody) => {
	try {
		const { data } = await instance.post(path, dataBody);
		return data;
	} catch (error) {
		console.log(error);
	}
};
