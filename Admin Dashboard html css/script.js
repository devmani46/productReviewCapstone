const  sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');



menuBtn.addEventListener('click',()=>{
       sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme-variables')
     themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
     themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})




document.addEventListener('DOMContentLoaded', () => {
    const reviewSummary = document.querySelector('.review-summary p');
    
    // (replace with actual AI integration )
    const aiGeneratedSummary = "Customers are highly satisfied with the Wireless Headphones, praising its excellent sound quality, comfortable fit, and long-lasting battery. A few users mentioned issues with Bluetooth connectivity in rare cases, but overall, the product is well-received for its value for money.";
  
    // Set the AI-generated summary in the paragraph
    reviewSummary.textContent = aiGeneratedSummary;
  });