const faqs = document.querySelectorAll(".faq__contenet__accordion li");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faqs.forEach((faq2) => {
            if(faq2 != faq) {
                faq2.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});