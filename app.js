const data = [
{
id:1,
image:"./image/buttermilk.jpg",  
title:"Buttermilk Pancakes",
price:"$10.53",
category:"Breakfast",
discount: "12% off",
description:"Buttermilk Pancakes are fluffy, classic pancakes perfect for any breakfast or brunch. Don’t have buttermilk on hand? We include a couple of workarounds in case you don’t have regular milk too!",
},

{
id:2,
image:"./image/tunasalad.jpg ",
title:"Healthy Tuna Salad ",
price:"$8.13",
category:"Lunch",
discount: "6% off",
description:"Canned tuna (and other fish) can be used in sandwiches, salads, casseroles, pasta, and so much more. A classic tuna melt is a no-brainer or make our Tuna Salad Sandwich Healthy Tuna Salad ",
},

{
id:3,
image:"./image/wild.jpg",
title:"Wild Alaskan Salmon Fish Meal ",
price:"$11.63",
category:"Dinner",
discount: "2% off",
description:"The USA is considered as the Home of Salmon Fish. Americans are fond of this. Various types of recipes with Salmon fish are very common in an American dinner table.",
},


{
id:4,
image:"./image/shakshuka.jpg",
title:"Shakshuka",
price:"$7.22",
category:"Breakfast",
discount: "8% off",
description:"Shakshouka is a Maghrebi dish of eggs poached in a sauce of tomatoes, olive oil, peppers, onion and garlic, commonly spiced with cumin, paprika and cayenne pepper. According to Joan Nathan, shakshouka originated in Ottoman North Africa in the mid-16th century after tomatoes were introduced to the region by Hernan Cortés as part of the Columbian exchange. ",
},

{
id:5,
image:"./image/ricotta.jpg",
title:"Ricotta cheesepie ",
price:"$16.23",
category:"Lunch",
discount: "12% off",
description:"This ricotta cheesepie is the perfect base recipe that can be easily adapted to whatever ingredients you have on hand. Ricotta cheese teams marvelously with many cold cuts, such as Culatello di Zibello PDO, cooked ham, salami, bacon or mortadella, but it is also possible to add vegetables such as spinach, radicchio or mushrooms. There is a savory ricotta pie for every taste or occasion. ",
},

{
id:6,
image:"./image/beanvegan.jpg",
title:"Texas 3-Bean Vegan Chili ",
price:"$5.57",
category:"Dinner",
discount: "32% off",
description:"Hearty, filling and chock-full of beans, peppers and spices, this Texas 3-Bean Vegan Chili is a crowd pleaser. It's easy to make and not greasy, in fact, it's oil-free! Freezer-friendly, this plant-based, vegetarian chili is great for batch cooking and meal prep. ",
},

{
id:7,
image:"./image/scramegg.jpg",
title:"Scrambled Eggs ",
price:"$13.23",
category:"Breakfast",
discount: "19% off",
description:"Scrambled eggs are a dish made from eggs stirred, whipped or beaten together while being gently heated, typically with salt, butter, oil and sometimes other ingredients.",
},

{
id:8,
image:"./image/sobanoddles.jpg",
title:"Healthy Peanut Soba Noodles ",
price:"$15.73",
category:"Lunch",
discount: "14% off",
description:"These cold noodles are the perfect thing to make if you need a packed lunch. They're vegetarian, but still full of protein, thanks to the soba noodles and peanut butter. Go ahead and double the recipe to cover lunch for another day.",
},

{
id:9,
image:"./image/chickenfajitas.jpg",
title:"Chiken Fajitas ",
price:"$2.53",
category:"Dinner",
discount: "2% off",
description:"Flavorful, juicy, seasoned chicken fajitas with sauteed onions and peppers.  The perfect chicken fajitas recipe! ",
},

{
id:10,
image:"./image/proteinshakeB.jpg",
title:"Coffee and Protein Drink Mix",
price:"$17.62",
category:"Breakfast",
discount: "5% off",
description:"Caffeinated Protein Powder to Jolt You Awake",
},

{
id:11,
image:"./image/boostB.jpeg",
title:"High Protein Balanced Nutritional Drink with Fiber",
price:"$29.88",
category:"Breakfast",
discount: "2% off",
description:"Our Best Pick! Advanced Nutrition Protein-Dense Drink",
},

{
id:12,
image:"./image/essentialsB.jpeg",
title:"Breakfast Essentials Nutritional Drink",
price:"$19.98",
category:"Breakfast",
discount: "2% off",
description:"A Highly-Processed but Ready-to-Drink Option",
},

{
id:13,
image:"./image/tomatoL.jpeg",
title:"Tomato Juice",
price:"$7.62",
category:"Lunch",
discount: "3% off",
description:"It is a relatively uncommon antioxidant. You won’t find high levels of lycopene from many other sources.",
},

{
id:14,
image:"./image/smottieL.jpeg",
title:"Smoothie",
price:"$9.28",
category:"Lunch",
discount: "15% off",
description:"Smoothies are an easy way to boost your nutrient intake. You’re getting nutrients from many different ingredients in a single drink. ",
},

{
id:15,
image:"./image/coconutL.jpg",
title:"Coconut Water",  
price:"$19.98",
category:"Lunch",
discount: "9% off",
description:"Coconut water is a hydrating choice. It’s sometimes thought to be even more hydrating than water, as you’re getting electrolytes too",
},

{
id:16,
image:"./image/woodD.png",
title:"Woodford Spire",  
price:"$32.98",
category:"Dinner",
discount: "19% off",
description:"Looking for a quick and easy drink to enjoy while you’re grilling up some steaks, chicken and more? The Woodford Spire can be made in just two minutes — all you need is bourbon, lemonade and cranberry juice.",
},

{
id:17,
image:"./image/mintD.jpeg",
title:"Minty Cocktail",  
price:"$49.98",
category:"Dinner",
discount: "12% off",
description:" Pair this cocktail with grilled shrimp or other grilled dishes to balance the flavors of mint and lime juice.",
},

{
id:18,
image:"./image/strawD.jpeg",
title:"Strawberry Daiquiri",  
price:"$59.70",
category:"Dinner",
discount: "9% off",
description:"Drinking a fruity daiquiri can help cool down your taste buds while eating dishes that use some of the world’s hottest hot sauces.",
},

];

const wrapper2 = document.querySelector(".wrapper-2");

const button = document.querySelector(".btnnn");

window.addEventListener("DOMContentLoaded",() => {
  displayInfo(data);
 generalbtn();
});

const generalbtn = () => {
const reduceBtn = data.reduce((total, reduceItem) => {
  
if (!total.includes(reduceItem.category)) {
  total.push(reduceItem.category);
}
return total ;
},["All"]);

const buttonShow = reduceBtn.map((buttonItem) => {
 
  return (`<button class="btn" type="button" data-id="${buttonItem}">${buttonItem}</button>`);
});
const buttonDisplay = buttonShow.join('');
button.innerHTML = buttonDisplay;

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click",(e) => {
const btnItem = e.currentTarget.dataset.id;
const btnCategory = data.filter((itemCategory) => {
if (itemCategory.category === btnItem) {
   return itemCategory;
}
});

if (btnItem === 'All') {
  displayInfo(data);
} else {
  displayInfo(btnCategory);
}
  });
});
};


const displayInfo = (info) => {
  const items = info.map((item ) => {
  return `<main class="container">
  <div class="menu-img">
 <img src="${item.image}" alt="${item.title}" />
  </div>

  <div class="content">
   <div class="content-info">
   <h4>${item.title}</h4>
   <div class='price'>${item.price}</div>
   </div>
<div class="content-text">
  <p>
  ${item.description}
    </p>
</div>
  </div>
  
<div class="discount">
  <p>${item.discount}</p>
  </div>
 </main>`;
});
const displayItems = items.join('');
wrapper2.innerHTML = displayItems;
};
