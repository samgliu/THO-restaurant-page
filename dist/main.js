(()=>{"use strict";function e(e,t){let n=document.createElement("div"),d=document.createElement(e);return d.textContent=t,n.appendChild(d),n}function t(e){let t=document.createElement("div"),n=document.createElement("p");return n.textContent=e,t.appendChild(n),t}function n(e,t){let n=document.createElement("div"),d=document.createElement("h3");d.textContent=e,n.style.textAlign="left",n.appendChild(d);let a=document.createElement("img");return a.src=t,n.appendChild(a),n}function d(e,t){let n=document.createElement("div"),d=document.createElement(e);return d.textContent=t,n.appendChild(d),n}!function a(){let l=document.getElementById("content");l.innerHTML="",l.appendChild(function(){let e=document.createElement("div"),t=document.createElement("a"),n=document.createElement("a"),d=document.createElement("a"),a=document.createTextNode("Home"),l=document.createTextNode("Menu"),i=document.createTextNode("Contact");return t.href="#home",n.href="#menu",d.href="#contact",t.id="home",n.id="menu",d.id="contact",console.log(),t.classList.add("active"),t.appendChild(a),n.appendChild(l),d.appendChild(i),e.classList.add("topnav"),e.appendChild(t),e.appendChild(n),e.appendChild(d),e}()),document.getElementById("home").addEventListener("click",(function(){a()}),!1),document.getElementById("menu").addEventListener("click",(function(){!function(){let e=document.getElementById("elements");e.innerHTML="",e.appendChild(function(){let e=document.createElement("div");return e.appendChild(function(e,t){let n=document.createElement("div"),d=document.createElement("h1");return d.textContent="Fruit Menu",n.appendChild(d),n}()),e.appendChild(n("Apple","./images/apple.jpg")),e.appendChild(n("Banana","./images/banana.jpg")),e.appendChild(n("Grapes","./images/grapes.jpg")),e}())}()}),!1),document.getElementById("contact").addEventListener("click",(function(){!function(){let e=document.getElementById("elements");e.innerHTML="",e.appendChild(function(){let e=document.createElement("div");return e.style.textAlign="left",e.appendChild(d("h1","Contact Us")),e.appendChild(d("h2","John Doe")),e.appendChild(d("h4","Title: CEO")),e.appendChild(d("h4","Cell: 123-456-7890")),e.appendChild(d("h4","Email:JohnDoe@earth.galaxy")),e}())}()}),!1),l.appendChild(function(){let n=document.createElement("div");return n.id="elements",n.appendChild(e("h1","Earth's Fruit Garden")),n.appendChild(t("Earth's Fruit Garden has the best fruits in the Universe. Our guests are come from other planets far away from Earth.")),n.appendChild(e("h2","Hours")),n.appendChild(t("Everyday: 9am - 6pm PST")),n.appendChild(e("h2","Location")),n.appendChild(t("Sydney Observatory, 1003 Upper Fort St, Millers Point, Sydney, NSW, Australia, Earth, The Solar System, Orion Arm, The Milky Way, Local Group, Virgo Cluster, Virgo Super-Cluster, Universe")),n}())}()})();