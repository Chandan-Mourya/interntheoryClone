      
 var mensData = [
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
      name: "REEBOK RUNNING ROADMAP SHOES",
      price: 1170,
      strikedoffprice: "$2599",
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      strikedoffprice: 999,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
      brand:"tesla",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
      brand:"tesla",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      strikedoffprice: 1099,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: 1299,
      strikedoffprice: 1440,
      brand:"tesla",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ",
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: 699,
      strikedoffprice: 999,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9519/MEN_SWIM_SLIPPERS_FV9519_1.jpg.plp ",
      name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
      price: 599,
      strikedoffprice: 999,
      brand:"zara",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: 1575,
      strikedoffprice: 3499,
      brand:"parada",
    },
];


mensData.map(function(elem){
var box = document.createElement("div")

var img = document.createElement("img");
img.src = elem.image_url

box.append(img)

document.querySelector("#container").append(box);

})

