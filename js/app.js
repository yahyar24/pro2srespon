const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener("click", () => {
        // Toggle Nav
       
        nav.classList.toggle("nav-active");
        // Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation){
            link.style.animation = "";
          } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.}s`;
          }
        });
        // Burger Animation
        burger.classList.toggle("toggle");
      });

      
}


navSlide();


const slidSow = () => {
  const rigister = document.getElementById('register');


  rigister.addEventListener("click" , () =>{

   
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 10500
    })
    
   
    

  });


}