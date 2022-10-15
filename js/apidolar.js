export async function api_dolar() {
	const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
	const result = await response.json();
	return result;
}
