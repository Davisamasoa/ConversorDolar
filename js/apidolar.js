export async function api_dolar() {
	const response = await fetch(
		"https://economia.awesomeapi.com.br/last/USD-BRL"
	);
	const result = response.json();
	console.log(result);
	return result;
}
