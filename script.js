// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Active navigation highlighting
window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id")
        }
    })

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active")
        }
    })
})

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

document.querySelectorAll(".fade-in, .slide-in").forEach((el) => {
    observer.observe(el)
})

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
        alert("Thank you for your message! I will get back to you soon.")
        this.reset()
    })
}

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.98)"
        navbar.style.boxShadow = "0 2px 20px rgba(99, 102, 241, 0.1)"
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.95)"
        navbar.style.boxShadow = "none"
    }
})

// Add scroll animations to elements
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[class*="fade-in"], [class*="slide-in"]')

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1"
        }
    })
}

window.addEventListener("scroll", animateOnScroll)
animateOnScroll() // Initial check



// ...existing code...
// Changed: wrap theme logic in DOMContentLoaded + guard against missing button
// document.addEventListener("DOMContentLoaded", () => {
//     const toggleBtn = document.getElementById("themeToggle")
//     const html = document.documentElement

// Load saved theme or default to "dark"
// const savedTheme = localStorage.getItem("theme") || "dark"
// html.setAttribute("data-theme", savedTheme)

//     if (toggleBtn) {
//         updateBtn(toggleBtn, savedTheme)

//         toggleBtn.addEventListener("click", () => {
//             const current = html.getAttribute("data-theme") || "dark"
//             const newTheme = current === "dark" ? "light" : "dark"
//             html.setAttribute("data-theme", newTheme)
//             localStorage.setItem("theme", newTheme)
//             updateBtn(toggleBtn, newTheme)
//         })
//     }
// })

// function updateBtn(btn, theme) {
//     if (!btn) return
//     btn.textContent = theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"
//     btn.classList.toggle("btn-outline-light", theme === "dark")
//     btn.classList.toggle("btn-outline-dark", theme === "light")
// }
// ...existing code...
