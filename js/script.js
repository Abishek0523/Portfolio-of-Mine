const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll("nav a")];
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-180) current=section.id;
  });
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});

document.getElementById("year").textContent=new Date().getFullYear();
