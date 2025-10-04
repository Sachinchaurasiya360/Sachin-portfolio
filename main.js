// Initialize on document load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS for contact form
  initializeEmailJS();

  // Setup contact form
  initContactForm();

  // Mobile menu toggle
  setupMobileMenu();

  // Scroll effects
  setupScrollEffects();

  // Initialize project filters
  setupProjectFilters();

  // Setup Spline viewer for mobile
  setupSplineViewer();

  // Setup 3D background
  setup3DBackground();

  // Custom cursor

  // Typing animation
  typeText();

  // Setup About tabs
  setupAboutTabs();

  // Initialize stats counter
  initStatsCounter();

  // Setup Skills tabs
  setupSkillsTabs();

  // Animate skill progress bars
  animateSkillBars();
}); // Typing Animation
function typeText() {
  const element = document.querySelector(".typewriter");
  if (!element) return;

  const text = "I'm Sachin Chaurasiya";
  let index = 0;
  element.textContent = "";

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
}

// Mobile menu functionality
function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target) &&
        navLinks.classList.contains("active")
      ) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });

    // Close menu on window resize (if desktop size)
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  }
}

// Scroll effects
function setupScrollEffects() {
  const header = document.querySelector(".header");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Highlight active section in nav
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });

    // Animate elements when they enter the viewport
    animateOnScroll();
  });

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
}

// Animate elements when they enter the viewport
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("animated");
    }
  });
}

// Setup About tabs functionality
function setupAboutTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (!tabBtns.length || !tabContents.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.remove("active");
        // Start fade out animation
        content.style.opacity = "0";
        content.style.transform = "translateY(10px)";
      });

      // Show selected tab content
      const tabId = btn.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);

      if (activeContent) {
        setTimeout(() => {
          activeContent.classList.add("active");
          // Trigger reflow for animation
          void activeContent.offsetWidth;
          // Start fade in animation
          activeContent.style.opacity = "1";
          activeContent.style.transform = "translateY(0)";
        }, 200);
      }
    });
  });
}

// Initialize stats counter
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");

  if (!statNumbers.length) return;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statElement = entry.target;
        const targetValue =
          parseInt(statElement.getAttribute("data-count")) || 0;
        const duration = 2000; // ms

        let startValue = 0;
        const increment = Math.ceil(targetValue / (duration / 50));

        const counter = setInterval(() => {
          startValue += increment;

          if (startValue >= targetValue) {
            statElement.textContent = targetValue;
            clearInterval(counter);
          } else {
            statElement.textContent = startValue;
          }
        }, 50);

        // Unobserve after animation
        observer.unobserve(statElement);
      }
    });
  }, options);

  statNumbers.forEach((stat) => {
    observer.observe(stat);
  });
}

// Project Filtering
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) rotateX(5deg) rotateY(5deg)";
          }, 100);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Achievement Stats Counter Animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-count"));
  if (isNaN(target)) {
    console.error(
      "Invalid data-count value:",
      element.getAttribute("data-count")
    );
    return;
  }

  let start = 0;
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = Math.floor(progress * target);
    element.textContent = current + (progress === 1 ? "+" : "");

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Initialize counters when they come into view
function observeCounters() {
  const counters = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counter.textContent = "0";
    observer.observe(counter);
  });
}

// Initialize AOS for achievement items
function initAchievements() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }
}

// Initialize EmailJS
function initializeEmailJS() {
  try {
    emailjs.init("fybrVUXzlaLXc_fRJ");
    console.log("EmailJS initialized successfully");
  } catch (error) {
    console.error("Failed to initialize EmailJS:", error);
  }
}

// Handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault();
  console.log("Form submission started");

  // Get form elements
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  // Show loading state
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Get form data
  const formData = {
    name: form.querySelector("#name").value,
    email: form.querySelector("#email").value,
    phone: form.querySelector("#phone").value,
    projectType: form.querySelector("#project-type").value,
    message: form.querySelector("#message").value,
  };

  console.log("Form data:", formData);

  // Prepare template parameters
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    project_type: formData.projectType,
    message: formData.message,
    to_name: "Sachin",
  };

  console.log("Template params:", templateParams);

  // Send email using EmailJS
  emailjs
    .send("service_rdbk4lb", "template_101frog", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      showFormMessage(
        "Message sent successfully! I will get back to you soon.",
        "success"
      );
      form.reset();
    })
    .catch(function (error) {
      console.error("FAILED...", error);
      // More detailed error message
      let errorMessage = "Failed to send message. ";
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += "Please check your network connection and try again.";
      }
      showFormMessage(errorMessage, "error");

      // Log more details for debugging
      console.error("Error details:", {
        status: error.status,
        text: error.text,
        message: error.message,
        stack: error.stack,
      });
    })
    .finally(function () {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    });
}

// Function to show form messages
function showFormMessage(message, type) {
  console.log(`Showing ${type} message:`, message);
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;

  const form = document.querySelector(".contact-form");
  const existingMessage = form.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  form.appendChild(messageDiv);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Initialize everything when DOM is loaded
// We'll use the main DOMContentLoaded event listener at the top of the file instead
// This function will be called from there
function initContactForm() {
  // Add contact form submission handler
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    console.log("Contact form found, adding submit handler");
    contactForm.addEventListener("submit", handleContactFormSubmit);
  } else {
    console.error("Contact form not found!");
  }
}

// Setup Spline viewer with mobile detection
function setupSplineViewer() {
  const splineViewer = document.querySelector("spline-viewer");
  const splineContainer = document.querySelector(".hero-3d-container");

  if (!splineViewer || !splineContainer) {
    console.log("Spline viewer or container not found");
    return;
  }

  // Function to check if device is mobile
  function isMobileDevice() {
    return (
      window.innerWidth <= 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }

  // Function to handle Spline viewer visibility
  function handleSplineVisibility() {
    if (isMobileDevice()) {
      // Hide Spline viewer on mobile devices
      splineContainer.style.display = "none";
      console.log("Mobile device detected, hiding Spline viewer");
    } else {
      // Show Spline viewer on desktop
      splineContainer.style.display = "block";
      console.log("Desktop device detected, showing Spline viewer");
    }
  }

  // Initial check
  handleSplineVisibility();

  // Listen for window resize events
  window.addEventListener("resize", handleSplineVisibility);
}

// 3D background setup using Three.js
function setup3DBackground() {
  // Check if we have a Spline viewer in the hero section
  const splineViewer = document.querySelector("spline-viewer");

  // If we have a Spline viewer, don't initialize Three.js background
  if (splineViewer) {
    console.log("Spline viewer detected, skipping Three.js background");
    return;
  }

  // Check if this is a mobile device (screen width 576px or less)
  if (window.innerWidth <= 576) {
    console.log("Mobile device detected, skipping 3D background");
    return;
  }

  if (!window.THREE) {
    console.warn("Three.js not loaded, skipping 3D background");
    return;
  }

  // Create a canvas for the 3D background
  const canvas = document.createElement("canvas");
  canvas.id = "hero-3d-canvas";
  const heroSection = document.querySelector(".hero-section");

  if (heroSection) {
    heroSection.appendChild(canvas);

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;

    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    // Color palette for particles (matching CSS variables)
    const colors = [
      [58 / 255, 134 / 255, 255 / 255], // blue
      [131 / 255, 56 / 255, 236 / 255], // purple
      [255 / 255, 0 / 255, 110 / 255], // pink
      [251 / 255, 86 / 255, 7 / 255], // orange
    ];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Positions - scattered in 3D space
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;

      // Colors - randomly select from palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      colorArray[i] = color[0];
      colorArray[i + 1] = color[1];
      colorArray[i + 2] = color[2];
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Position camera
    camera.position.z = 5;

    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles slowly
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;

      // React to mouse movement
      particlesMesh.rotation.x += mouse.y * 0.0005;
      particlesMesh.rotation.y += mouse.x * 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      // If resized to mobile width, remove the canvas
      if (window.innerWidth <= 576) {
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      } else {
        // If canvas was removed but we're back to desktop size, refresh the page to reinitialize
        if (!document.getElementById("hero-3d-canvas") && heroSection) {
          // Only reload if we're on a page with hero section and the 3D canvas is missing
          window.location.reload();
        }
      }
    });
  }
}

// Add a dark/light mode toggle
function addThemeToggle() {
  const themeToggle = document.createElement("div");
  themeToggle.className = "theme-toggle";
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
}

// Add scroll animations to elements
function addScrollAnimations() {
  // Add a class to all section elements for animation
  document
    .querySelectorAll("section > div > *:not(.section-title)")
    .forEach((element) => {
      element.classList.add("animate-on-scroll");
    });

  // Initialize animation on scroll
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);
}

// Function to animate elements when they scroll into view
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".animate-on-scroll:not(.animated)"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("animated");
      element.classList.add("fadeIn");
    }
  });
}

// Setup Skills tabs functionality
function setupSkillsTabs() {
  const tabBtns = document.querySelectorAll(".skill-tab-btn");
  const tabContents = document.querySelectorAll(".skills-tab-content");

  if (!tabBtns.length || !tabContents.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.remove("active");
        // Start fade out animation
        content.style.opacity = "0";
        content.style.transform = "translateY(10px)";
      });

      // Show selected tab content
      const tabId = btn.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);

      if (activeContent) {
        setTimeout(() => {
          activeContent.classList.add("active");
          // Trigger reflow for animation
          void activeContent.offsetWidth;
          // Start fade in animation
          activeContent.style.opacity = "1";
          activeContent.style.transform = "translateY(0)";

          // Animate skill bars when tab becomes active
          if (tabId === "technical") {
            animateSkillBars();
          }

          // Animate meter fills when tab becomes active
          if (tabId === "soft") {
            animateMeterFills();
          }
        }, 200);
      }
    });
  });
}

// Animate skill progress bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress-fill");

  skillBars.forEach((bar) => {
    // Reset width to 0 first
    bar.style.width = "0";

    // Get the target width from the parent element
    const targetWidth = bar.style.width;

    // Use IntersectionObserver to trigger animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set a small timeout to ensure CSS transition is applied
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 100);
            // Unobserve after animation started
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(bar);
  });
}

// Animate meter fills for soft skills
function animateMeterFills() {
  const meterFills = document.querySelectorAll(".meter-fill");

  meterFills.forEach((meter) => {
    // Reset width to 0 first
    meter.style.width = "0";

    // Get the target width from inline style
    const targetWidth =
      meter.getAttribute("style").split("width: ")[1].split(";")[0] ||
      meter.getAttribute("style").split("width:")[1].split(";")[0];

    // Use IntersectionObserver to trigger animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set a small timeout to ensure CSS transition is applied
            setTimeout(() => {
              meter.style.width = targetWidth;
            }, 100);
            // Unobserve after animation started
            observer.unobserve(meter);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(meter);
  });
}
