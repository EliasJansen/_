

let checkbox = document.querySelector('input[name=theme]');

			 checkbox.addEventListener('change', function() {
					 if(this.checked) {
							 trans()
							 document.documentElement.setAttribute('data-theme', 'dark');





					 } else {
							 trans()
							 document.documentElement.setAttribute('data-theme', 'light')
					 }
			 })

			 let trans = () => {
					 document.documentElement.classList.add('transition');
					 window.setTimeout(() => {
							 document.documentElement.classList.remove('transition')
					 }, 1000)
			 }

// Hamburger-menu //
			 let menuKnop = document.querySelector(".menu");
			 let navMenu = document.querySelector("nav");
			 let mijnBody = document.querySelector("body")
			 let mainGedeelte = document.querySelector("main");
			 function verbergMenu() {
			 	navMenu.classList.add("onzichtbaar");
			 }
			 mainGedeelte.addEventListener("click",verbergMenu);
			 function toonMenu() {
			 	navMenu.classList.remove("onzichtbaar");
			 }
			 menuKnop.addEventListener("click",toonMenu);
