let list = document.querySelector('#list');
let links = document.querySelectorAll('ul li a');
let sections = document.querySelectorAll('section');

document.querySelector('#icon').addEventListener('click', _ => list.classList.toggle('toggle')); // show and hide links

// switch active class
onscroll = _ => {
    const currentScroll = document.documentElement.scrollTop + 250;

    sections.forEach(section => {
        let currentId = section.attributes.id.value; // get the section id
        let selector = document.querySelector(`ul li a[href='#${currentId}']`); // target the same link for the section

        if(currentScroll >= section.offsetTop && currentScroll < section.offsetTop + section.offsetHeight) {
            links.forEach(link => link.classList.remove('active', 'r-3')); // remove active classes from all links
            selector.classList.add('active', 'r-3'); // add active classes for the target link
        }
    });
}

// Email JS

(function(){emailjs.init("07Nn38ayRbgjjo0R2");})();

document.getElementById('send').addEventListener('click', (e) => {
	e.preventDefault();
	let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
		phone:document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    let serviceID = "service_sbzm0y9";
    let templateID = "template_yj9dach";

        emailjs.send(serviceID, templateID, params)
        .then(res => {
			params.name = "";
			params.email = "";
			params.phone = "";
			params.message = "";
            console.log(res);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 2000
            });
    })
    .catch((err) => {
        console.log(err);
        Swal.fire({
            icon: 'error',
            title: 'Faild to send',
            text: 'Something went wrong!',
        });
    });
});
