  /*// --- Contact form validation, feedback, and EmailJS integration ---
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const msgStatus = document.getElementById('msgStatus');

  if (form && msgStatus) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Prepare parameters for EmailJS
      const params = {
         name: form.name.value , 
        email: form.email.value,
        message: form.message.value
      };
   


      // Show sending status
      msgStatus.innerHTML = '<div class="alert alert-info">Sending message...</div>';

      // Replace with your actual EmailJS service/template IDs
      emailjs.send("service_tdhprin", "template_winvyah", params)
        .then(function(response) {
          msgStatus.innerHTML = '<div class="alert alert-success">Thank you for contacting us, ' + form.name.value + '! Your message has been sent.</div>';
          form.reset();
        }, function(error) {
          msgStatus.innerHTML = '<div class="alert alert-danger">Failed to send message. Please try again later.</div>';
        });
    });
  }

  // --- Instant Navbar Collapse on Overflow ---
  const navbarCollapse = document.getElementById('navbarNav');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const nav = navbarCollapse ? navbarCollapse.querySelector('.navbar-nav') : null;

  function instantCollapse() {
    if (!navbarCollapse || !navbarToggler || !nav) return;

    // Only do this on large screens (above lg breakpoint)
    if (window.innerWidth >= 992) {
      // Expand by default
      navbarCollapse.classList.add('show');
      navbarToggler.setAttribute('aria-expanded', 'true');
      navbarToggler.setAttribute('aria-label', 'Toggle navigation');
      navbarToggler.style.display = 'none';

      // If nav is overflowing, force collapse
      if (nav.scrollWidth > nav.offsetWidth) {
        navbarCollapse.classList.remove('show');
        navbarToggler.style.display = '';
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    } else {
      // Small screens: Let Bootstrap control collapse
      navbarToggler.style.display = '';
    }
  }

  window.addEventListener('resize', instantCollapse);
  window.addEventListener('DOMContentLoaded', instantCollapse);
  setTimeout(instantCollapse, 500); // In case fonts load late

  // --- Smooth scroll to top for "Back to Top" button ---
  var btn = document.getElementById("backToTop");
  if (btn) {
    btn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});


  // Popup logic for Pricing Popup
function ppopupShow() {
  document.getElementById('ppopup-modal').style.display = 'block';
  document.getElementById('ppopup-backdrop').style.display = 'block';
  sessionStorage.setItem('ppopupShown', 'true');
}
function ppopupClose() {
  document.getElementById('ppopup-modal').style.display = 'none';
  document.getElementById('ppopup-backdrop').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  // Close when "X" or backdrop is clicked
  var closeBtn = document.getElementById('ppopup-close');
  if (closeBtn) closeBtn.onclick = ppopupClose;
  var backdrop = document.getElementById('ppopup-backdrop');
  if (backdrop) backdrop.onclick = ppopupClose;

  // Close and scroll to #contactForm on "Let's Discuss"
  var discussBtn = document.querySelector('.ppopup-pricing-cta');
  if (discussBtn) {
    discussBtn.addEventListener('click', function(e) {
      ppopupClose();
      var contactSection = document.getElementById('contactForm');
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Show popup after 1 minute (60000 ms), only once per tab session
  if (!sessionStorage.getItem('ppopupShown')) {
    setTimeout(ppopupShow, 5000);
  }
});*/



// --- Contact form validation, feedback, and EmailJS integration ---
document.addEventListener('DOMContentLoaded', function () {
  /*emailjs.init('z2sfGsNVVuNhUXopn');
  const form = document.getElementById('contactForm');
  const msgStatus = document.getElementById('msgStatus');

  if (form && msgStatus) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const params = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      msgStatus.innerHTML = '<div class="alert alert-info">Sending message...</div>';

      emailjs.send("service_tdhprin", "template_winvyah", params)
        .then(function(response) {
          // Log to debug
          console.log("Auto-reply send params:", {
            to_name: params.name,
            to_email: params.email
          });
          // Make sure the variable names match your template!
          return emailjs.send("service_tdhprin", "template_t6n1upe", {
            to_name: params.name,
            to_email: params.email
          });
        })
        .then(function(response) {
          msgStatus.innerHTML = `<div class="alert alert-success">Thank you for contacting us, ${form.name.value}! Your message has been sent and you will receive a confirmation email shortly.</div>`;
          form.reset();
        })
        .catch(function(error) {
          msgStatus.innerHTML = `<div class="alert alert-danger">Failed to send message or auto-reply. Please try again later.</div>`;
          console.error("EmailJS send error:", error);
        });
    });
  }
*/

  // --- Instant Navbar Collapse on Overflow ---
  const navbarCollapse = document.getElementById('navbarNav');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const nav = navbarCollapse ? navbarCollapse.querySelector('.navbar-nav') : null;

  function instantCollapse() {
    if (!navbarCollapse || !navbarToggler || !nav) return;

    // Only do this on large screens (above lg breakpoint)
    if (window.innerWidth >= 992) {
      // Expand by default
      navbarCollapse.classList.add('show');
      navbarToggler.setAttribute('aria-expanded', 'true');
      navbarToggler.setAttribute('aria-label', 'Toggle navigation');
      navbarToggler.style.display = 'none';

      // If nav is overflowing, force collapse
      if (nav.scrollWidth > nav.offsetWidth) {
        navbarCollapse.classList.remove('show');
        navbarToggler.style.display = '';
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    } else {
      // Small screens: Let Bootstrap control collapse
      navbarToggler.style.display = '';
    }
  }

  window.addEventListener('resize', instantCollapse);
  window.addEventListener('DOMContentLoaded', instantCollapse);
  setTimeout(instantCollapse, 500); // In case fonts load late

  // --- Smooth scroll to top for "Back to Top" button ---
  var btn = document.getElementById("backToTop");
  if (btn) {
    btn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});


  // Popup logic for Pricing Popup
function ppopupShow() {
  document.getElementById('ppopup-modal').style.display = 'block';
  document.getElementById('ppopup-backdrop').style.display = 'block';
  sessionStorage.setItem('ppopupShown', 'true');
}
function ppopupClose() {
  document.getElementById('ppopup-modal').style.display = 'none';
  document.getElementById('ppopup-backdrop').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  // Close when "X" or backdrop is clicked
  var closeBtn = document.getElementById('ppopup-close');
  if (closeBtn) closeBtn.onclick = ppopupClose;
  var backdrop = document.getElementById('ppopup-backdrop');
  if (backdrop) backdrop.onclick = ppopupClose;

  // Close and scroll to #contactForm on "Let's Discuss"
  var discussBtn = document.querySelector('.ppopup-pricing-cta');
  if (discussBtn) {
    discussBtn.addEventListener('click', function(e) {
      ppopupClose();
      var contactSection = document.getElementById('contactForm');
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Show popup after 1 minute (60000 ms), only once per tab session
  if (!sessionStorage.getItem('ppopupShown')) {
    setTimeout(ppopupShow, 120000);
  }
});