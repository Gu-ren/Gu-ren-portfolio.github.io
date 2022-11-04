// $(document).ready(function(){
//   $(window).scroll(function(){
//     if(this.scrollY > 20){
//       $('.navbar').addClass("sticky");
//     } else{
//       $('.navbar').removeClass("sticky");
//     }
//   });
 
 //  toggle menu btn navbar
 $('.menu-btn').click(function(){
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});


// });

// quotes

const quotes = [{
  quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
  author: `- Kent Beck`
}, {
  quote: `Talk is cheap. Show me the code.`,
  author: `- Linus Torvalds`
}, {
  quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
  author: `- Harold Abelson`
}, {
  quote: `Truth can only be found in one place: the code.`,
  author: `- Robert C`
}, {
  quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
  author: `- Muhammad Waseem`
}, {
  quote: `How you look at it is pretty much how you'll see it`,
  author: `- Steve Jobs`
}, {
  quote: `The most disastrous thing that you can ever learn is your first programming language.`,
  author: `- Alan Kay`
}, {
  quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
  author: `- C.A.R. Hoare`
}, {
  quote: `i am committed to push my branch to the master.`,
  author: `- Halgurd Hussein`
}, {
  quote: `Coding is not just code, that is a live thing to serve everyone!`,
  author: `- Ming Song`
}, {
  quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
  author: `- Martin Fowler`
}, 
{
  quote: `First, solve the problem. Then, write the code.`,
  author: `- John Johnson `
}, 
{
  quote: `Experience is the name everyone gives to their mistakes.`,
  author: `- Oscar Wilde`
}, 
{
  quote: `In order to be irreplaceable, one must always be different`,
  author: `- Coco Chanel`
}, 
{
  quote: `Knowledge is power.`,
  author: `- Francis Bacon`
}, 
{
  quote: `Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.`,
  author: `- Dan Salomon`
}, 
{
  quote: `Fix the cause, not the symptom.`,
  author: `- Steve Maguire`
}, 
{
  quote: `Simplicity is the soul of efficiency.`,
  author: `- Austin Freeman`
}

]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
})

const observer = new  IntersectionObserver((entries) =>{

    entries.forEach((entry) =>{
  
      if (entry.isIntersecting  ){
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });

});
const observer2 = new  IntersectionObserver((entries) =>{

  entries.forEach((entry) =>{

    if (entry.isIntersecting  ){
      entry.target.classList.add('showright');
    } else{
      entry.target.classList.remove('showright');
    }
  });

});
const observer3 = new  IntersectionObserver((entries) =>{

  entries.forEach((entry) =>{

    if (entry.isIntersecting  ){
      entry.target.classList.add('showup');
    } else{
      entry.target.classList.remove('showup');
    }
  });
  

});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hiddenElements2 = document.querySelectorAll('.hidden-right');
hiddenElements2.forEach((el) => observer2.observe(el));


const hiddenElements3 = document.querySelectorAll('.hidden-up');
hiddenElements3.forEach((el) => observer3.observe(el));




