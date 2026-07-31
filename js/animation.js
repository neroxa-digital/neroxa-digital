// Scroll Reveal Animation

const sections = document.querySelectorAll(
".service-card, .portfolio-card, .process-card, .contact-box"
);


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});


sections.forEach(section=>{

observer.observe(section);

});