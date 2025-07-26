var typed = new Typed('.typing', {
    strings: ["Web Developer", "Software Engineer", "Data Analyst", "Machine Learning Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillItems = document.querySelectorAll('.skill-item');

        skillItems.forEach(item => {
          const progressIn = item.querySelector('.progress-in');
          const skillPercent = item.querySelector('.skill-percent');
          const target = parseInt(progressIn.getAttribute('data-percent'));

          // Animate bar
          progressIn.style.width = target + '%';

          // Animate counter
          let count = 0;
          const duration = 1000;
          const step = Math.floor(duration / target);

          const counter = setInterval(() => {
            if (count >= target) {
              clearInterval(counter);
            } else {
              count++;
              skillPercent.textContent = count + '%';
            }
          }, step);
        });

        // Stop observing after it triggers once
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.4 // Trigger when 40% of skills section is visible
  });

  const skillsSection = document.getElementById('skills-section');
  observer.observe(skillsSection);


function downloadCV() {
  const link = document.createElement('a'); // use 'a' (anchor tag)
  link.style.display = 'none';
  link.href = 'assets/22951A6643_DAKKATA JAGANATH.pdf'; // fixed typo from 'assests' to 'assets'
  link.download = 'Jaganath_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  


