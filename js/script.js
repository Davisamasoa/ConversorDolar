import { api_dolar } from "./apidolar.js";
const btn = document.querySelector("button");
const real = document.querySelector(".br");
const dolar = document.querySelector(".eua");
const select = document.querySelector("select");
const outraMoeda = document.querySelector(".outraMoeda");
let result;

select.addEventListener("change", () => {
	if (select.options[select.selectedIndex].textContent == "BRL") {
		outraMoeda.textContent = "USD";
	} else {
		outraMoeda.textContent = "BRL";
	}
	dolar.textContent = "";
});

async function realTimeDolar() {
	let dolarValueAPI;
	dolarValueAPI = await api_dolar();
	return (+dolarValueAPI["USDBRL"].ask).toFixed(2);
}

async function conversaoRealDolar() {
	realTimeDolar().then((resultDolar) => {
		let dolarConverted = resultDolar;
		if (select.options[select.selectedIndex].textContent == "BRL") {
			result = +real.value / dolarConverted;
			result = result.toLocaleString("en-US", {
				style: "currency",
				currency: "USD",
			});
		} else {
			result = +real.value * dolarConverted;
			result = result.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			});
		}

		dolar.textContent = result;
	});
}

btn.addEventListener("click", () => {
	conversaoRealDolar();
});
