let translateFrom = document.querySelector('#translatefrom');
let translateTo = document.querySelector('#translateTo');


const URL = 'https://text-translator2.p.rapidapi.com/getLanguages';

const OPTIONS = {
	method: 'get',
	headers: {
		'X-RapidAPI-Key': '08a346a2c5msh5a22dcd1fc70061p168ce1jsn1101a6ddfb8c',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};


fetch(URL, OPTIONS)
.then(res => res.json())
.then(objeto =>{
    let leng= objeto.data.languages;
    leng.forEach(element => {
        translateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`
    });
})
.catch(err => console.log(err));

var source_language = 'es';
var tagert_language = 'en';


fetch(URL, OPTIONS)
.then(res => res.json())
.then(objeto =>{
    let leng= objeto.data.languages;
    leng.forEach(element => {
        translateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`;
        translateTo.innerHTML += `<option value="${element.code}">${element.name}</option>`;
    });
	translateFrom.addEventListener('click', ()=>{
		console.log(translateFrom.value);
		source_language = translateFrom.value;
	})
	translateTo.addEventListener('click', ()=>{
		console.log(translateTo.value);
		tagert_language = translateTo.value;
	})



})
.catch(err => console.log(err));


//recoger los datos del input
let translateBtn = document.querySelector('#translate');
let translateOut = document.querySelector('#outputTranslate');

translateBtn.addEventListener('click', () => {
	let inputTranslate= document.querySelector('#inputTranslateF');
	let textToTranslate = inputTranslate.value;

	const encodedParams = new URLSearchParams();
	encodedParams.append('source_language', source_language);
	encodedParams.append('tagert_language', tagert_language);
	encodedParams.append('text', textToTranslate);
	console.log(textToTranslate)
	console.log(source_language)
	console.log(tagert_language)

	const url = 'https://text-translator2.p.rapidapi.com/translate';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': '08a346a2c5msh5a22dcd1fc70061p168ce1jsn1101a6ddfb8c',
			'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
		},
		body: new URLSearchParams({
			source_language: source_language,
			target_language: tagert_language,
			text: textToTranslate
		})
	};
	
	fetch(url, options)
		.then(res => res.json())
		.then(res => translateOut.innerText = res.data.translatedText)
		.catch(err => console.log(err));

});







