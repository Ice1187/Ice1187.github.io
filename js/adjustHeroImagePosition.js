
function repositionImg() {
	let hero_img = document.querySelector("#ArticleImage__Hero img");
	let img_container = document.querySelector("#ArticleImage__Hero");
	let container_h = img_container.clientHeight;
	let img_h = hero_img.height;
	// console.log(img_h);
	// console.log(container_h);
	if (img_h > container_h) {
		hero_img.style.marginTop = (container_h - img_h)/2;
	}
}

window.onload = repositionImg;

window.onresize = repositionImg;
	
