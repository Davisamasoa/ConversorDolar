export async function api_dolar() {
	const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL", {
		cache: "no-cache",
	});
	const result = await response.json();
	console.log(result);
	return result;
}
