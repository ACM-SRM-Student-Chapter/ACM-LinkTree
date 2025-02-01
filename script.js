import linksData from './data.js';
function linksComponentGeneration (){

    const links = document.getElementById("links");
    const social = document.getElementById("social");

    linksData.forEach(item => {

        const link = document.createElement("a");
        link.href = item.link;
        link.innerHTML = `<span>${item.icon} ${item.text}</span>`;
        link.classList.add('link');
        if (item.category == "social"){
            social.appendChild(link); // social is the div for social links
        }
        else if (item.category == "important"){
            
            link.classList.add("attention");
            links.appendChild(link); 
        }
        else{
            links.appendChild(link); // links is the mina div that has all the links
        }
    });
}

window.onload = linksComponentGeneration;


// Code from index.html initially. just organised it

// Particle.js Configuration
particlesJS("particles-js", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
      size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1 } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" } },
      modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });

 // Detect Device Type
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

//   // Enable Tilt Effect and Custom Cursor for Non-Mobile Devices
  if (!isMobile) {
    // Custom Cursor Logic
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
//     document.querySelectorAll('.link').forEach(link => {
//       link.addEventListener('mouseenter', () => {
//         cursor.classList.add('hover');
//       });
//       link.addEventListener('mouseleave', () => {
//         cursor.classList.remove('hover');
//       });
//     });

//     // Tilt Effect Logic
//     const container = document.getElementById('logo');
//     container.addEventListener('mousemove', (e) => {
//       const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
//       const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
//       container.style.transform = `perspective(1000px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
//     });

//     container.addEventListener('mouseleave', () => {
//       container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
//     });
  } else {
    // Disable Custom Cursor and Tilt Effect for Mobile Devices
    const cursor = document.getElementById('custom-cursor');
    cursor.style.display = 'none'; // Hide cursor on mobile
  }
