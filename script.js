// const tubahwarna = document.getElementById('tubahwarna');
// tubahwarna.onclick = function(){
// 	// document.body.style.backgroundColor = 'lightblue';


// // document.body.setAttribute('class','biru-muda');

// document.body.classList.toggle('biru-muda');

// }


// const tombol = document.createElement('button');
// const texttombol = document.createTextNode('acak Warna');
// tombol.appendChild(texttombol);
// tombol.setAttribute('type','button');

// tubahwarna.after(tombol);

// tombol.addEventListener('click',function(){
// 	const r = Math.random();
// 	console (r);
// 	document.body.style.backgroundColor = 'rgb(100,100,100)';
// });

//Bermain dengan warna Dengan Metode addEnvent Dan Tombol Button
const ubah = document.getElementById('ubah');
ubah.onclick = function(){
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class','biru-muda');
	// document.body.classList.toggle('biru-muda');
}

const button = document.createElement('button');
const text = document.createTextNode('acakwarna');
button.appendChild(text);

button.setAttribute('type','button');
ubah.after(button);

button.addEventListener('click',function(){
	const r =Math.round (Math.random() * 255 +1);//Math = untuk mengacak warna secara random
	const g =Math.round (Math.random() * 255 +1);//dengan syarat kadar warba harus berbentuk 'rgb'
	const b =Math.round (Math.random() * 255 +1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


//slider rgb//
const slidermerah = document.querySelector('input[name=slidermerah]');

slidermerah.addEventListener('change',function(){
	const r = slidermerah.value;
	document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
	// console.log(slidermerah.value);
});


const sliderhijau = document.querySelector('input[name=sliderhijau]');

sliderhijau.addEventListener('change',function(){
	const g = sliderhijau.value;
	document.body.style.backgroundColor = 'rgb(100,'+ g+',100)';
	// console.log(slidermerah.value);
});


const sliderbiru = document.querySelector('input[name=sliderbiru]');

sliderbiru.addEventListener('change',function(){
	const g = sliderbiru.value;
	document.body.style.backgroundColor = 'rgb(100,100,'+ g+')';
	// console.log(slidermerah.value);
});

