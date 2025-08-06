const loveCalculator = document.querySelector(".love-calculator");
const calculateButton = document.getElementById("calculate-button");
const resultContainer = document.querySelector(".result-container");
const resultName = document.querySelector(".result-name");
const resultMassage = document.querySelector(".result-massage");
const resultPercentageBox = document.querySelector(".result-percentage-box");
const resultPercentageBoxWrapper = document.querySelector(".result-percentage-box-wrapper");
const calculateAgainButton = document.getElementById("calculate-again-btn");
const loveQuotesByPercentage = [
  {
    percentage: [0, 10],
    quote: "ভাই, এডাতে প্রেম খুঁজতেছো কেন? ওটা তো Sahara desert-level শুকনা অবস্থা! 😂💔",
  },
  {
    percentage: [11, 20],
    quote: "মনটা একটু কাঁপতেছে ঠিকই, কিন্তু crush-o তো তোরে চিনে না ভাই! 😶📵",
  },
  {
    percentage: [21, 30],
    quote: "Feeling ase, signal nai. একতরফা ভালোবাসার ট্রেন ছুটছে, গন্তব্য অজানা! 🚂😅",
  },
  {
    percentage: [31, 40],
    quote: "চোখাচোখি হয়, story তে react দেয়… প্রেমের ট্রেলার চলতেছে ভাই! 🎬👀",
  },
  {
    percentage: [41, 50],
    quote: "বুকের বাঁ পাশে কিসসু একটা হিল্লোল! তুমি officially ভালোবাসার বর্ডার ক্রস করছো! 😵‍💫🧨",
  },
  {
    percentage: [51, 60],
    quote: "তোর হাসি দেখে ওর হাইট বাড়তেছে! এখন যদি প্রপোজ না করিস, তোর loss! 😎💘",
  },
  {
    percentage: [61, 70],
    quote: "তুই ওর status check করিস, ও তোর DP zoom করে দেখে — প্রেম progressing! 📱💖",
  },
  {
    percentage: [71, 80],
    quote: "দিন শুরু হয় good morning দিয়ে, শেষ হয় মেসেঞ্জার call দিয়ে — এইটা সিরিয়াস ভাই! ☀️📞",
  },
  {
    percentage: [81, 90],
    quote: "তুই আর ও এখন একটা team — একসাথে Netflix, Kacchi, r prem! 🍿🍗❤️",
  },
  {
    percentage: [91, 99],
    quote: "বিয়ের প্ল্যান ready, শুধু একবার ‘Baba raji holei’ বললেই বাজবে সানাই! 😅💍🛎️",
  },
  {
    percentage: [100, 100],
    quote: "Tui vai LEGEND! 100% প্রেমের মধ্যে আছোস — এখন শুধু গলায় মালা পরানো বাকি! 😂💐💑",
  },
];





calculateButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const inputOne = document.getElementById("name1");
    const inputTwo = document.getElementById("name2");


    if( inputOne.value && inputTwo.value ){
        const loveScore = Math.floor(Math.random() * 100) + 1;

        loveCalculator.style.display = "none";
        resultContainer.style.display = "block";
        resultPercentageBoxWrapper.style.background = `conic-gradient(#fb93bb 0% ${loveScore}%, #435874 ${loveScore}% 100%)`;
       
        resultName.innerText = `${inputOne.value} ${inputTwo.value}`
       
        resultPercentageBox.innerText = `${loveScore}%`;
        const expectedQuote = loveQuotesByPercentage.find(
            (quote) => loveScore >= quote.percentage[0] && loveScore <= quote.percentage[1]
        );
        resultMassage.innerText = expectedQuote.quote;
       



      }else{
        alert("দয়া করে তোমার নাম এবং ক্রাশের নাম লিখো");




      }
      
      

    
    





});
calculateAgainButton.addEventListener("click", () => {
   window.location.reload(); // পেজ রিলোড করবে
});

