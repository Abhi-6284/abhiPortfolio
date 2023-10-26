// const Navbar = () => {
//     const burger = document.querySelector('#menu');
//     const nav = document.querySelector('.navbar');
//     const navLinks = document.querySelectorAll('.navlink li');

//     burger.addEventListener('click', function () {
//         nav.classList.toggle('navbar-active');
//         burger.classList.toggle('fa-times');
//         navLinks.forEach((index) => {
//             index.style.opacity = '1';
//         })
//     });
// }

const skills = () => {
    
}

const Navbar = () => {
    const burger = document.querySelector('#menu');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navlink li');

    burger.addEventListener('click', function () {
        nav.classList.toggle('navbar-active');
        burger.classList.toggle('fa-times');
        navLinks.forEach((link) => {
            link.style.opacity = '1';
        })
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            // Remove active class from all links
            // Add active class to clicked link
            navLinks.forEach((link) => {
                console.log(link);
                link.classList.remove('active');
            })
            link.classList.add('active');
            console.log(navLinks);
            
        })
    });
}


Navbar();

// Typing script start
var typed = new Typed(".typing-text", {
    strings: ["backend development", "frontend development", "web designing", "web development", "Android development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Typing script end

// Tilt image script start
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// Tilt image script end

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Prashant Abhishek Lugun";
            $("#favicon").attr("href", "https://icons8.com/icon/110569/monitor");
        }
        else {
            document.title = "Come Back To My Portfolio";
            $("#favicon").attr("href", "https://icons8.com/icon/srEIYKXGWyot/come");
        }
    }
);


// email js start

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect the form data
    const form = event.target;
    const name = form.elements.name.value;
    const to = form.elements.email.value;
    const phone = form.elements.phone.value;
    const subject = "Contact ME";
    const message = form.elements.message.value;

    // Use EmailJS to send the email
    emailjs.init("MgTJCGBqkaucDoJZ-");
    emailjs.send('service_or5xurx', 'template_6x4gwux', { from_name: name, to_name: to, subject: subject, user_mobile_number: phone, message_html: message, })
        .then(function (res) {
            console.log('SUCCESS!', res.status, res.text);
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });

    // Clear the form fields
    form.reset();
});


// Emailjs end



// scroll animation start
window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('#scroll-top');
    scroll.classList.toggle("active", this.window.scrollY > 500);
})
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// scroll animation end



// content revel animation start

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .instagram', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 250 });


/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 500 });
srtop.reveal('.contact .container .form-group', { delay: 600 });

/* SCROLL MAP */
srtop.reveal('.map .container', { delay: 500 });
srtop.reveal('.map .container .iframe-map', { delay: 600 });

// content revel end