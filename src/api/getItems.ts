export const getItems = async () => {
	return await fetch('http://localhost:8080/v1/items').then((res) => {
		return res.json();
	});
};
