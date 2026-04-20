const RAW_DATA = [
    {
        "name": "Maxima New Samurai Smartwatch 1.85\", 1st Time Call Accept Feature, Hindi Language Support, 600Nits Brightness, Longer Batt...",
        "ratings": 3.8,
        "no_of_ratings": 105,
        "discount_price": 1499.0,
        "actual_price": 5999.0
    },
    {
        "name": "Antin Women's Faux Leather Sling Bag/Bucket Bag (Dull Gold) Gold Metallic Shimmery",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 700.0,
        "actual_price": 1400.0
    },
    {
        "name": "Vikefon® Ear Headphone for Samsung Galaxy J7 NXT / J7 Prime / J7 2016 in The Earphone/Headphone/Handfree/Headset with Mic/...",
        "ratings": 4.6,
        "no_of_ratings": 2,
        "discount_price": 249.0,
        "actual_price": 599.0
    },
    {
        "name": "Veloz Women's Multisport Wear - Fitness Top (Half Sleeves) | V Flex | Front Top Print & Pipings {with YKK Zip} Dotted Print",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 479.0,
        "actual_price": 1659.0
    },
    {
        "name": "Techpugg 5pcs Silicone Eyewear Glasses Neck Retainers Eyeglass Glasses Sunglasses Spectacle Head Safety Strap Cord Holder ...",
        "ratings": 3.4,
        "no_of_ratings": 6,
        "discount_price": 275.0,
        "actual_price": 750.0
    },
    {
        "name": "LEOTUDE Women's Cottonblend Half Sleeve Oversized T-Shirts (Color: Orange)",
        "ratings": 3.6,
        "no_of_ratings": 162,
        "discount_price": 309.0,
        "actual_price": 1099.0
    },
    {
        "name": "Yantralay Helmet Chin Strap Mount Compatible with Gopro Hero 8/7/6, SJCAM, Yi, Osmo Action & Other Action Cameras",
        "ratings": 4.0,
        "no_of_ratings": 492,
        "discount_price": 449.0,
        "actual_price": 1399.0
    },
    {
        "name": "OCULY Perfect Round and Colourful Stylish Transparent Prescription Computer Glasses Men & Women | Clear Fake Reading Specs...",
        "ratings": 3.8,
        "no_of_ratings": 14,
        "discount_price": 474.0,
        "actual_price": 1599.0
    },
    {
        "name": "River Fox (4 Set) Screw Fastening Type Male and Female DC Power Plug-Connector (4 Male + 4 Female)",
        "ratings": 4.2,
        "no_of_ratings": 412,
        "discount_price": 180.99,
        "actual_price": 499.0
    },
    {
        "name": "Studio Shringaar Women's Benaras Brocade Elbow Length Sleeves Saree Blouse",
        "ratings": 4.0,
        "no_of_ratings": 303,
        "discount_price": 949.0,
        "actual_price": 1750.0
    },
    {
        "name": "ASIAN Mens Wind-01 Loafer",
        "ratings": 4.1,
        "no_of_ratings": 106,
        "discount_price": 527.0,
        "actual_price": 1299.0
    },
    {
        "name": "Women Lace Babydoll Lingerie Set for Honeymoon for Woman Thongs | Night Dress Above Knee Baby Doll Night Dress | Semi Tran...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "Stratize Sleep Headphones Wireless Bluetooth Eye Mask - Music Travel Sleep Mask Bluetooth 5.0 Wireless Handsfree Sleeping ...",
        "ratings": 3.3,
        "no_of_ratings": 4,
        "discount_price": 995.0,
        "actual_price": 2299.0
    },
    {
        "name": "Ajanta Quartz Analog Watches for Women Stainless Steel Ladies Wristwatch for Her - AWC117",
        "ratings": 3.7,
        "no_of_ratings": 19,
        "discount_price": 1295.0,
        "actual_price": 2495.0
    },
    {
        "name": "Craft Expertise Alloy Steel Spice Rack Seasonings Organizer for Cabinet, Kitchen, Pantry, Countertop (Black) - 2 Pack",
        "ratings": 4.1,
        "no_of_ratings": 177,
        "discount_price": 499.0,
        "actual_price": 699.0
    },
    {
        "name": "HAVAI Honeycomb Pad - Set of 3 - for Usha Azzuro 50 Litre Window Cooler",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1395.0,
        "actual_price": 1999.0
    },
    {
        "name": "ALLWIN TAFTA High Quality Metal Special Coated Floor Mounted Split Outdoor AC Stand for 1 Ton, 1.1 Ton, 1.2 Ton, 1.5 Ton, ...",
        "ratings": 4.6,
        "no_of_ratings": 7,
        "discount_price": 647.0,
        "actual_price": 1500.0
    },
    {
        "name": "RZERO9 Combo Pack of-5 Men's Cotton Regular Fit Half Sleeve Plain Solid Casual Wear Round Neck Tshirt",
        "ratings": 4.1,
        "no_of_ratings": 7,
        "discount_price": 979.0,
        "actual_price": 3999.0
    },
    {
        "name": "Janasya Women's Grey Georgette Foil Print Kurta with Dupatta",
        "ratings": 4.2,
        "no_of_ratings": 12,
        "discount_price": 1649.0,
        "actual_price": 4159.0
    },
    {
        "name": "YAAXA C-Shaped Double Layer Inverted Umbrella with C-Shaped Handle, Anti-UV Waterproof Windproof Straight Umbrella for Car...",
        "ratings": 3.3,
        "no_of_ratings": 19,
        "discount_price": 597.0,
        "actual_price": 1899.0
    },
    {
        "name": "Dollar Missy Women's Navy Blue Color Track Pant",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 524.0,
        "actual_price": 699.0
    },
    {
        "name": "Butterfly EKN 1.8L 1500 Watt Electric Water Kettle (Stainless Steel)",
        "ratings": 4.1,
        "no_of_ratings": 9338,
        "discount_price": 850.0,
        "actual_price": 1499.0
    },
    {
        "name": "Microware HDMI Audio Splitter Converter Supports 3D/4Kx2K to Analog Audio Left and Right Channels 5.1",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 3999.0,
        "actual_price": 9999.0
    },
    {
        "name": "Softcare Medium Size Premium Cotton Hosiery Cloth Padded Reusable Nappy 9 pcs Set (for 4 to 7 Months Baby)",
        "ratings": 4.1,
        "no_of_ratings": 239,
        "discount_price": 778.05,
        "actual_price": 1672.9
    },
    {
        "name": "Fommil sling bags for women bags handbags women",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 679.0,
        "actual_price": 1649.0
    },
    {
        "name": "ZEYO Women's Cotton Star Printed Feeding Night Suit Set of Top & Pyjama Nursing Night Dress 5328",
        "ratings": 3.7,
        "no_of_ratings": 91,
        "discount_price": 849.0,
        "actual_price": 2499.0
    },
    {
        "name": "DHRUVI TRENDZ Women's Slub Rayon Polyester Blended Regular Fit Printed Top Under 399 Office were Tops for Girls & Women",
        "ratings": 3.5,
        "no_of_ratings": 25,
        "discount_price": 239.0,
        "actual_price": 1999.0
    },
    {
        "name": "NITE FLITE Women Regular Shorts (Pack of 3)",
        "ratings": 4.2,
        "no_of_ratings": 497,
        "discount_price": 999.0,
        "actual_price": 1649.0
    },
    {
        "name": "Jimmy Jammy Unisex Baby Boy & Girl Dress Soft Hosiery Cotton Blend T-shirt and Shorts Pack 6 T-shirt + 6 Shorts Multi colo...",
        "ratings": 3.7,
        "no_of_ratings": 172,
        "discount_price": 459.0,
        "actual_price": 1299.0
    },
    {
        "name": "anubhutee Women's Blue Ethnic Printed Pure Cotton Night Suit (ANU2001327S)",
        "ratings": 4.0,
        "no_of_ratings": 4,
        "discount_price": 599.0,
        "actual_price": 2599.0
    },
    {
        "name": "Electronic Spices 50k, Vertical PCB Preset Variable Resistor Trimmer Potentiometer, pack of 5",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 89.0,
        "actual_price": 149.0
    },
    {
        "name": "BATA Men Miller Brown Formal Shoes-7 UK (40 EU) (8214006)",
        "ratings": 2.7,
        "no_of_ratings": 9,
        "discount_price": 1199.0,
        "actual_price": 1999.0
    },
    {
        "name": "Army High Ankle Combat,Trekking, Hiking and Biker Leather Boots with High Performance Rubber Sole. Sizes 5 to 12 Available...",
        "ratings": 3.1,
        "no_of_ratings": 10,
        "discount_price": 3000.0,
        "actual_price": 6000.0
    },
    {
        "name": "Khadim's Black Formal Shoe for Men",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 989.0,
        "actual_price": 1799.0
    },
    {
        "name": "MJ Ragav Metallic Silver Revolver Gun Pistol Key Chain Key Ring",
        "ratings": 3.3,
        "no_of_ratings": 22,
        "discount_price": 196.0,
        "actual_price": 499.0
    },
    {
        "name": "Rupa Frontline Men's Cotton Vest (Pack of 2)",
        "ratings": 3.9,
        "no_of_ratings": 1305,
        "discount_price": 247.0,
        "actual_price": 322.0
    },
    {
        "name": "aallookart Men's Liv Home 2022-23 Jersey (Shorts)",
        "ratings": 3.7,
        "no_of_ratings": 4,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "CHESHTA Waterproof Travel Shoe Bag - Storage Case Organizer - Pouch Bag - Sports-Gym-Outdoor - Footwear Organiser Pouch - ...",
        "ratings": 3.4,
        "no_of_ratings": 79,
        "discount_price": 315.0,
        "actual_price": 699.0
    },
    {
        "name": "SYSKA PACE HE100H 100 hrs Playtime Bluetooth Neckband, autoENC, Wireless in Ear Earphones with Mic, Earphones with Rapid P...",
        "ratings": 4.1,
        "no_of_ratings": 47,
        "discount_price": 1299.0,
        "actual_price": 3499.0
    },
    {
        "name": "Sonia 2pc Modelling Lamp 100 Watt Continuous Light for Video Light Video Cameras and YouTube Video Shooting",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 370.0,
        "actual_price": 1299.0
    },
    {
        "name": "Rupa Jon Men's Scented 3P Wht Vest Plain (Pack of 3)",
        "ratings": 4.1,
        "no_of_ratings": 297,
        "discount_price": 250.0,
        "actual_price": 280.0
    },
    {
        "name": "Skechers Womens Flex Appeal 4.0-Vivid Spirit Casual Shoe",
        "ratings": 4.6,
        "no_of_ratings": 529,
        "discount_price": 4289.0,
        "actual_price": 6499.0
    },
    {
        "name": "Arctic Hunter Sling Bag for Men,Chest Bag for Men Crossbody Bag for Men Stylish Shoulder Bag for Men Water&Scratch Resista...",
        "ratings": 4.5,
        "no_of_ratings": 527,
        "discount_price": 1804.0,
        "actual_price": 3999.0
    },
    {
        "name": "Pepe Jeans Men Jeans",
        "ratings": 3.7,
        "no_of_ratings": 6,
        "discount_price": 1498.0,
        "actual_price": 2999.0
    },
    {
        "name": "RARE Women Blouse",
        "ratings": 4.0,
        "no_of_ratings": 2343,
        "discount_price": 416.0,
        "actual_price": 1199.0
    },
    {
        "name": "HEALTH FIT Men's PU Diabetic & Orthopedic Slipper Flip Flop",
        "ratings": 3.8,
        "no_of_ratings": 988,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "Red Chief Casual Shoes for Men RC3626",
        "ratings": 3.3,
        "no_of_ratings": 21,
        "discount_price": 1979.0,
        "actual_price": 4399.0
    },
    {
        "name": "Vector X Royale+ Men's Turf Football Shoes",
        "ratings": 4.0,
        "no_of_ratings": 201,
        "discount_price": 1076.0,
        "actual_price": 1155.0
    },
    {
        "name": "SELLINA Women’s Pure Cotton Robe, House Coat, Housecoat, Nighty, Night Gown, Sleepwear",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 1299.0
    },
    {
        "name": "TREXEE Full Sleeves Washable Waterproof Bib for Babies & Kids",
        "ratings": 3.7,
        "no_of_ratings": 26,
        "discount_price": 189.0,
        "actual_price": 850.0
    },
    {
        "name": "Ethics Men's Sports Running Shoes",
        "ratings": 3.7,
        "no_of_ratings": 7,
        "discount_price": 549.0,
        "actual_price": 999.0
    },
    {
        "name": "Patricia's Designer Pure Cotton Maternity Wear Anarkali Style Kurta with 2 Zips for Easier and Comfortable Breastfeeding",
        "ratings": 3.8,
        "no_of_ratings": 8,
        "discount_price": 649.0,
        "actual_price": 1599.0
    },
    {
        "name": "LG 8.0 Kg Inverter Fully-Automatic Top Loading Washing Machine (T80SJSF1Z, Middle Free Silver)",
        "ratings": 4.4,
        "no_of_ratings": 807,
        "discount_price": 24490.0,
        "actual_price": 37990.0
    },
    {
        "name": "Green Scapper Green Leather Strap Analog Watch for Girl's & Women's-4933",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 381.0,
        "actual_price": 1299.0
    },
    {
        "name": "5 O' CLOCK SPORTS Duffel PU-Leather Gym Bag,Shoulder Bag /Gym Bags/Adjustable Shoulder Bag for Men/Duffle Gym Bags for Me...",
        "ratings": 3.7,
        "no_of_ratings": 2,
        "discount_price": 468.0,
        "actual_price": 800.0
    },
    {
        "name": "U.S. CROWN Women Underbust Corset Waist Trainer Cincher Steel Boned Body Shaper Vest with 6 Rows of Hooks Adjustable Straps",
        "ratings": 3.7,
        "no_of_ratings": 383,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "BIRGOS Men Patent Formal Shoes | Latest Stylish | Synthetic Leather | Lace up | Office Wear",
        "ratings": 3.0,
        "no_of_ratings": 12,
        "discount_price": 798.0,
        "actual_price": 1899.0
    },
    {
        "name": "MGW Precision AP180 Digital Angle Protractor 0-180?, Red",
        "ratings": 4.4,
        "no_of_ratings": 2,
        "discount_price": 2000.0,
        "actual_price": 2700.0
    },
    {
        "name": "Biotique Advanced Organics Clear Improvement Vitamin C Illuminating Body Wash, 200ml",
        "ratings": 3.9,
        "no_of_ratings": 53,
        "discount_price": 155.0,
        "actual_price": 199.0
    },
    {
        "name": "JIGVA Ratchet Tie Down Cargo Strap,25Mm X 4.6M Polyester Double J-Hooks Ratchet,Cargo Straps for Bind Luggage in car Truck...",
        "ratings": 3.0,
        "no_of_ratings": 9,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "Tip 'n' Top® MATA ki Chunni/Chunri/Patka/Latka with Golden Lace Border for All Goddess Pooja/Shringar, (Size- 10 X 25 Inc...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "Fancy Steps Men's Thongs (Pack of 1) (8130657830_Multicolor_Free Size)",
        "ratings": 3.0,
        "no_of_ratings": 11,
        "discount_price": 999.0,
        "actual_price": 1399.0
    },
    {
        "name": "Amazon Basics High-Speed HDMI Cable, 6 Feet - Supports Ethernet, 3D, 4K video,Black",
        "ratings": 4.4,
        "no_of_ratings": 437651,
        "discount_price": 269.0,
        "actual_price": 475.0
    },
    {
        "name": "Marks & Spencer Women Pants",
        "ratings": 4.4,
        "no_of_ratings": 9,
        "discount_price": 669.0,
        "actual_price": 2499.0
    },
    {
        "name": "Caseria Men's Round Neck Cotton Half Sleeved T-Shirt with Printed Graphics - Warli Painting",
        "ratings": 4.6,
        "no_of_ratings": 10,
        "discount_price": 439.0,
        "actual_price": 999.0
    },
    {
        "name": "Mallory Winston Women's Babydoll Nighty for Honeymoon/Night Wear for Women/Nightwear Super Soft Net Babydoll Dress Sleepwe...",
        "ratings": 3.3,
        "no_of_ratings": 6,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Puma Men's Whisk Black White Walking Shoe-7 Kids UK (37310701)",
        "ratings": 4.1,
        "no_of_ratings": 19,
        "discount_price": 2199.0,
        "actual_price": 3999.0
    },
    {
        "name": "Shootvilla 3Ft Pearl Linear Slider for Canon,DSLR,DV/HDV,Tripod Mount,CNC Constructed",
        "ratings": 3.5,
        "no_of_ratings": 6,
        "discount_price": 5150.0,
        "actual_price": 8500.0
    },
    {
        "name": "Akshita gems 7.25 Ratti/6.32 Carat Colombian Emerald Gemstone Certified Loose Precious Panna Stone Unheated Lab Tested A++...",
        "ratings": 2.0,
        "no_of_ratings": 2,
        "discount_price": 701.0,
        "actual_price": 3774.0
    },
    {
        "name": "Doctor Dreams by Nilkamal Hybrid Wood and Metal Structure Grande King Size Bed, Lightweight and Portable (78 X 72, White)",
        "ratings": 4.3,
        "no_of_ratings": 50,
        "discount_price": 11999.0,
        "actual_price": 26999.0
    },
    {
        "name": "Gatorade Sports Drink - Orange Flavor, 500ml Bottle",
        "ratings": 4.3,
        "no_of_ratings": 507,
        "discount_price": 47.0,
        "actual_price": 50.0
    },
    {
        "name": "ZENEME Jewellery Set for Women American Diamond Necklace Set with Earrings, Bracelet and Ring Jewellery for Girls and Women",
        "ratings": 3.5,
        "no_of_ratings": 17,
        "discount_price": 369.0,
        "actual_price": 1999.0
    },
    {
        "name": "JUNEBERRY® Regular Fit Round Neck Half Sleeve Lilac Tie-Dye Printed T-Shirt for Women",
        "ratings": 3.8,
        "no_of_ratings": 150,
        "discount_price": 289.0,
        "actual_price": 1199.0
    },
    {
        "name": "CAMEY Women Full Sleeve Nightsuit",
        "ratings": 3.0,
        "no_of_ratings": 14,
        "discount_price": 678.0,
        "actual_price": 999.0
    },
    {
        "name": "Mivi Collar 2B Bluetooth Wireless in Ear Earphones, 24 Hours Playtime, IPX7 Water Proof, Booming Bass, Magnetic Buds, Blue...",
        "ratings": 3.6,
        "no_of_ratings": 11682,
        "discount_price": 899.0,
        "actual_price": 1999.0
    },
    {
        "name": "Bambiha Bulls T-Shirt | Cotton Casual T-Shirt | Round Neck Half Sleeve Crew Neck Unisex T-Shirt",
        "ratings": 2.4,
        "no_of_ratings": 6,
        "discount_price": 649.0,
        "actual_price": 999.0
    },
    {
        "name": "LILYCOOL Honeycomb Cooling Pad for Symphony Diet, Brown, 540x249x38 mm",
        "ratings": 3.4,
        "no_of_ratings": 166,
        "discount_price": 499.0,
        "actual_price": 600.0
    },
    {
        "name": "BIBA Women's Cotton Salwar Kurta with Dupatta",
        "ratings": 3.7,
        "no_of_ratings": 28,
        "discount_price": 2423.99,
        "actual_price": 4995.0
    },
    {
        "name": "Nivia Ashtang Football Stud (5, Green) for Men",
        "ratings": 3.6,
        "no_of_ratings": 18,
        "discount_price": 1597.0,
        "actual_price": 1599.0
    },
    {
        "name": "Sampton LED Headlamp Flashlight Torch with Adjustable Rechargeable Battery for Camping Trekking Caving Hiking Reading Running",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 675.0,
        "actual_price": 2410.0
    },
    {
        "name": "Groz Extendable Measuring Wheel | Measures up to 9,999 Feet | Wheel diameter: 30 cm | Extendable upto 108 cm | Suitable fo...",
        "ratings": 3.3,
        "no_of_ratings": 4,
        "discount_price": 3244.0,
        "actual_price": 3832.0
    },
    {
        "name": "UltraProlink UM0008 Universal Screen Cleaning & Sanitizer Kit | for Smartphones, Tablets, Eyeglasses, E-Readers, LED, LCD...",
        "ratings": 4.2,
        "no_of_ratings": 144,
        "discount_price": 225.0,
        "actual_price": 299.0
    },
    {
        "name": "ASIAN Men's Sports Running,Walking & Gym Shoes with Eva Sole Memory Form Casual Sneaker Shoes for Men's & Boy's",
        "ratings": 3.8,
        "no_of_ratings": 2269,
        "discount_price": 593.0,
        "actual_price": 999.0
    },
    {
        "name": "JUNEBERRY® Women's Cotton Regular Fit T-Shirt-Pack of 2",
        "ratings": 4.1,
        "no_of_ratings": 76,
        "discount_price": 589.0,
        "actual_price": 2399.0
    },
    {
        "name": "Van Heusen Athleisure Stretch Lounge Pants With Pockets",
        "ratings": 4.2,
        "no_of_ratings": 4640,
        "discount_price": 759.0,
        "actual_price": 1069.0
    },
    {
        "name": "Van Heusen Womens Sling - Oval Single Color",
        "ratings": 4.3,
        "no_of_ratings": 163,
        "discount_price": 1179.0,
        "actual_price": 2299.0
    },
    {
        "name": "Honeywell Suono P3000 Truly Wireless Earbuds, Upto 22 Hours Playtime, Type-C Fast Charging, IPX4, Voice Assistant & Blueto...",
        "ratings": 3.0,
        "no_of_ratings": 112,
        "discount_price": 1099.0,
        "actual_price": 4999.0
    },
    {
        "name": "Campus Mens 9g-779 Running Shoe",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 1454.0,
        "actual_price": 1999.0
    },
    {
        "name": "Base Edition Wired In Ear Earphone with Mic (Black)",
        "ratings": 3.1,
        "no_of_ratings": 20,
        "discount_price": 198.0,
        "actual_price": 240.0
    },
    {
        "name": "AFJ Gold 1 Gram Micro Gold Plated Traditional Designer Trendy Stone Bangles Sets for Women & Girls",
        "ratings": 3.7,
        "no_of_ratings": 17,
        "discount_price": 399.0,
        "actual_price": 1490.0
    },
    {
        "name": "Liberty",
        "ratings": 3.6,
        "no_of_ratings": 13,
        "discount_price": 565.42,
        "actual_price": 599.0
    },
    {
        "name": "Shining Diva Fashion Latest Stylish Italian Designer Gold and Silver Plated Tassel Earrings for Women",
        "ratings": 4.0,
        "no_of_ratings": 576,
        "discount_price": 241.0,
        "actual_price": 1999.0
    },
    {
        "name": "Allen Solly Women Blouse",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 945.57,
        "actual_price": 1699.0
    },
    {
        "name": "Cleanfly Eyebrow Hair Remover,upper lip hair remover for women hair removal trimmer for women with LED Light for Women - R...",
        "ratings": 4.4,
        "no_of_ratings": 9,
        "discount_price": 479.0,
        "actual_price": 1499.0
    },
    {
        "name": "BLUECON Women Regular Fit (Polyster::Black) Running & Gym Trackpants-Side Patti with Pockets",
        "ratings": 3.9,
        "no_of_ratings": 204,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "KD COLLECTIONS Rifle Gun Bullet 3D Design Shaped Metal Keychain Combo Pack of 2",
        "ratings": 3.8,
        "no_of_ratings": 17,
        "discount_price": 345.0,
        "actual_price": 748.0
    },
    {
        "name": "Harpa Women's Polyester A-Line Maxi Casual Dress",
        "ratings": 4.3,
        "no_of_ratings": 40,
        "discount_price": 807.0,
        "actual_price": 2199.0
    },
    {
        "name": "Colors Queen Lip Crayon Lipstick| Color It All |Ultra Matte, Lightweight, Non Transferable,Waterproof & Long Lasting | Hot...",
        "ratings": 3.0,
        "no_of_ratings": 11,
        "discount_price": 239.0,
        "actual_price": 349.0
    },
    {
        "name": "ABHINAV Gems, 6.25 Ratti / 5.70 Ct. Natural Blue Sapphire Stone with Lab Certified Card Natural Blue Sapphire Stone Origin...",
        "ratings": 4.2,
        "no_of_ratings": 3,
        "discount_price": 633.0,
        "actual_price": 2690.0
    },
    {
        "name": "JALTHER Women's Ikat Hand Block Print Jaipuri Cotton Mulmul Saree with Blouse Piece -Blue_Jal130",
        "ratings": 3.8,
        "no_of_ratings": 23,
        "discount_price": 799.0,
        "actual_price": 6999.0
    },
    {
        "name": "KSP HOME Heavy Metal Shoe Rack (4 Shelves) Foldable Open Book Shelf, Book Shelve, Shoe Rack, Shoes Storage Rack for Home S...",
        "ratings": 3.3,
        "no_of_ratings": 1265,
        "discount_price": 711.55,
        "actual_price": 1499.0
    },
    {
        "name": "Red Tape Men Navy Walking Shoes-6 UK (40 EU) (RSO0274D)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2310.0,
        "actual_price": 6599.0
    },
    {
        "name": "Bumpadum Duet Pro Night Diaper for Overnight/Heavy Wetter Usage (Lumina)",
        "ratings": 3.6,
        "no_of_ratings": 520,
        "discount_price": 689.0,
        "actual_price": 1150.0
    },
    {
        "name": "Allen Solly Women's Regular Top",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 1089.0,
        "actual_price": 1899.0
    },
    {
        "name": "omtex Zings Light up Flashing LED Cricket Bails",
        "ratings": 4.5,
        "no_of_ratings": 28,
        "discount_price": 3490.0,
        "actual_price": 3500.0
    },
    {
        "name": "GIVA AVNI 925 Oxidised Silver Tribal Mangalsutra Necklace with Certificate of Authenticity and 925 Stamp - Black Bead For ...",
        "ratings": 3.4,
        "no_of_ratings": 30,
        "discount_price": 1899.0,
        "actual_price": 3398.0
    },
    {
        "name": "BATA Mens Class Brown Sneaker - 10 UK (8514142)",
        "ratings": 3.4,
        "no_of_ratings": 32,
        "discount_price": 1435.0,
        "actual_price": 1599.0
    },
    {
        "name": "Kraasa Tesla-44 Running Shoes for Men",
        "ratings": 3.6,
        "no_of_ratings": 103,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Fisher-Price Ultra Care Baby Bib with Pocket - Waterproof Feeding Bibs for Babies, 4months+ Ideal for weaning Babies (Blue)",
        "ratings": 4.1,
        "no_of_ratings": 120,
        "discount_price": 503.0,
        "actual_price": 530.0
    },
    {
        "name": "AKACY Women's Slim FIT 3 Button Stretchable Ankle Length Jeans with Frayed Hems…",
        "ratings": 3.8,
        "no_of_ratings": 27,
        "discount_price": 745.0,
        "actual_price": 1499.0
    },
    {
        "name": "Jewels Galaxy Jewellery For Women Stackable Rings Set",
        "ratings": 3.8,
        "no_of_ratings": 22,
        "discount_price": 261.0,
        "actual_price": 1999.0
    },
    {
        "name": "Puma Mens Speed 300 Racer Running Shoes",
        "ratings": 4.3,
        "no_of_ratings": 33,
        "discount_price": 4042.0,
        "actual_price": 8999.0
    },
    {
        "name": "Thea & Sid Ring Sizer Jewelry Measuring Tool for Men",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 159.0,
        "actual_price": 499.0
    },
    {
        "name": "Gebly 100% Ayurvedic Pineapple Flavours Herbal Natural Mosquito Repellent Agarbatti Safe Citronella Garden Incense Sticks ...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 149.0,
        "actual_price": 299.0
    },
    {
        "name": "Fastrack Analog Grey Dial Unisex-Adult Watch-38024PP41",
        "ratings": 3.5,
        "no_of_ratings": 8,
        "discount_price": 759.0,
        "actual_price": 950.0
    },
    {
        "name": "SWIPA Exclusive Beauty Combo Set(Foundation(60ml),5Pcs Makeup Brush,2in1 Compact Powder,kajal,Eyelashes,12color Eyeshadow,...",
        "ratings": 3.4,
        "no_of_ratings": 101,
        "discount_price": 549.0,
        "actual_price": 899.0
    },
    {
        "name": "LUNAGARIYA®, Protective Cover for O General AC Remote Control,PU Leather Cover Holder (Before Placing Order,Please Check T...",
        "ratings": 4.3,
        "no_of_ratings": 9,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "MT Madhav Textiles Women's Kanchipuram Silk Saree With blouse piece",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 970.0,
        "actual_price": 3099.0
    },
    {
        "name": "Amul Comfy Men's Cotton Seleveless Vest Combo of 4",
        "ratings": 4.0,
        "no_of_ratings": 129,
        "discount_price": 365.0,
        "actual_price": 400.0
    },
    {
        "name": "Teal by Chumbak Aztec Owl Women's Leather Wrist Watch - Brown",
        "ratings": 4.3,
        "no_of_ratings": 83,
        "discount_price": 1247.0,
        "actual_price": 2495.0
    },
    {
        "name": "Kashvi sarees Women's Bhagalpuri Georgette Saree With Blouse Piece (AS_1194_2_Blue)",
        "ratings": 3.3,
        "no_of_ratings": 262,
        "discount_price": 289.0,
        "actual_price": 1299.0
    },
    {
        "name": "Poplins Multicolor New Plush Unicorn Eye Mask Sleep Masks for Girls Blindfold for Women Eye Masks for Insomnia, Meditatio...",
        "ratings": 4.2,
        "no_of_ratings": 131,
        "discount_price": 275.0,
        "actual_price": 799.0
    },
    {
        "name": "serveuttam Waist Trainer Women - Waist Cincher Shapeware Trimmer for Slim Belly | Slimming Body Shaper Belt",
        "ratings": 3.7,
        "no_of_ratings": 44,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "CUTE GOLD 1 Gram Micro Gold Plated Traditional Designer Ruby Emerald AD Stone Mugappu Chain for Women & Girls",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 499.0,
        "actual_price": 2550.0
    },
    {
        "name": "KHALIFA Women's & Girl's Handbag (Maroon)",
        "ratings": 4.0,
        "no_of_ratings": 57,
        "discount_price": 388.0,
        "actual_price": 599.0
    },
    {
        "name": "GESPO Men's Solid Multicolor Mandarin Collar Half Sleeve Casual Shirt",
        "ratings": 3.7,
        "no_of_ratings": 235,
        "discount_price": 324.0,
        "actual_price": 999.0
    },
    {
        "name": "Toro Blu Leather Formal Shoes",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 1999.0
    },
    {
        "name": "Delsey Polycarbonate 77 cms Light Blue Hardsided Check-in Luggage (Comete) (3039821_Light Blue)",
        "ratings": 4.3,
        "no_of_ratings": 44,
        "discount_price": 8900.0,
        "actual_price": 17800.0
    },
    {
        "name": "Nityanta Fab Women's Plain Cotton Printed Saree (NF-179- Multicolour)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 2499.0
    },
    {
        "name": "Sparx Mens Sm-798 Running",
        "ratings": 3.3,
        "no_of_ratings": 12,
        "discount_price": 1899.0,
        "actual_price": 2299.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim Fit T-Shirt",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 798.0,
        "actual_price": 1899.0
    },
    {
        "name": "Fastrack Analog Silver Dial Women's Watch-NL6109SM03/NP6109SM03",
        "ratings": 4.3,
        "no_of_ratings": 774,
        "discount_price": 2179.0,
        "actual_price": 2895.0
    },
    {
        "name": "Mens Polyurethane Army Military Jungle Boot Shoes",
        "ratings": 3.1,
        "no_of_ratings": 13,
        "discount_price": 890.0,
        "actual_price": 999.0
    },
    {
        "name": "Quote Marshals Men's Regular Fit T-Shirt",
        "ratings": 4.4,
        "no_of_ratings": 27,
        "discount_price": 599.0,
        "actual_price": 1098.0
    },
    {
        "name": "Sei Bella N NAYAB Sei Mini Gota Patti Samosa Champa Lace Border Material for Dupatta, Bridal es, Saree, Lehengas, Palazzo,...",
        "ratings": 4.0,
        "no_of_ratings": 40,
        "discount_price": 149.0,
        "actual_price": 399.0
    },
    {
        "name": "HOME & KITCHEN Electric Water Heater Faucet Tap Hot Tap Home-Kitchen Water Heating Instantaneous Water Heater Tank less fo...",
        "ratings": 3.2,
        "no_of_ratings": 24,
        "discount_price": 1185.0,
        "actual_price": 2499.0
    },
    {
        "name": "Pride Apparel Women's Cotton Brief Underwear - Pack of 6",
        "ratings": 3.6,
        "no_of_ratings": 28,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "OTTOMATE Sense Connect 5 Star Rated Smart BLDC with Remote 3 Blade 1200 MM High Speed Ceiling fan (Mystic Grey, Pack of 1)",
        "ratings": 3.6,
        "no_of_ratings": 794,
        "discount_price": 4170.0,
        "actual_price": 6300.0
    },
    {
        "name": "I Jewels 18K Gold Plated Alloy Kundan Stones & Pearl Earrings with Hair Chain For Women (E2928W)",
        "ratings": 3.9,
        "no_of_ratings": 7,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "HP 220 Silent Wireless Mouse, 2.4 GHz Dongle, 15 Month Life Battery, Compatible with Windows, Mac, Chromebook/PC/Laptop (3...",
        "ratings": 3.8,
        "no_of_ratings": 21,
        "discount_price": 749.0,
        "actual_price": 1399.0
    },
    {
        "name": "Red Tape Men Blue Walking Shoes-7",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 1849.0,
        "actual_price": 7395.0
    },
    {
        "name": "Van Heusen Women Skirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1359.0,
        "actual_price": 2199.0
    },
    {
        "name": "Senslife Women's Satin Soft and Smooth Solid Nightwear Cap Sleeve Night Suit Top and Pajama Set (SL008, Wine, Medium)",
        "ratings": 3.7,
        "no_of_ratings": 59,
        "discount_price": 239.0,
        "actual_price": 1199.0
    },
    {
        "name": "tweedle Chanderi Phulkari/Fulkari Dupatta for Women in Madhubani Kantha Embroidery",
        "ratings": 3.9,
        "no_of_ratings": 12,
        "discount_price": 1699.0,
        "actual_price": 2999.0
    },
    {
        "name": "Spykar Grey Cotton Slim Fit Narrow Regular Length Jeans for Men",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 1349.0,
        "actual_price": 2999.0
    },
    {
        "name": "Music World 7C Trumpet Mouthpiece for Yamaha Bach Conn King Trumpet Silver Plated",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Sidharth Gems Natural AA++ Quality Burma Ruby Manik 9.00 Ratti Birthstone Stone Original Unheated Untreatet Earth Mind Cer...",
        "ratings": 4.7,
        "no_of_ratings": 3,
        "discount_price": 700.0,
        "actual_price": 1999.0
    },
    {
        "name": "Earton Men Running Sports & Outdoor Shoes (9 UK, Grey)",
        "ratings": 1.4,
        "no_of_ratings": 3,
        "discount_price": 329.0,
        "actual_price": 499.0
    },
    {
        "name": "MJN Multifunction Electric Small Food Grinder - Portable Coffee Bean Seasonings Spices Mill Powder Machine for Whole Coffe...",
        "ratings": 2.4,
        "no_of_ratings": 16,
        "discount_price": 699.0,
        "actual_price": 1399.0
    },
    {
        "name": "Kutumbh Elastic Strechable Adjustable Belts for kids Boys and Girls (Suitable for 2 to 8 Years Old)",
        "ratings": 3.8,
        "no_of_ratings": 41,
        "discount_price": 329.0,
        "actual_price": 599.0
    },
    {
        "name": "Red Tape Men's Oxfords Shoes",
        "ratings": 3.8,
        "no_of_ratings": 151,
        "discount_price": 1590.0,
        "actual_price": 5299.0
    },
    {
        "name": "Birde Men Mesh Sports Shoes for Men Running and Walking Shoes",
        "ratings": 3.5,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Kiaaron Women's Ikat Hand Block Print Jaipuri Cotton Mulmul Saree with Blouse Piece -Brown_Kia20",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 6999.0
    },
    {
        "name": "(Renewed) Sony WH-XB700 Wireless Headphone with Mic (Black)",
        "ratings": 3.7,
        "no_of_ratings": 69,
        "discount_price": 5902.17,
        "actual_price": 9947.0
    },
    {
        "name": "Mackie Headphones (MC-100)",
        "ratings": 4.5,
        "no_of_ratings": 253,
        "discount_price": 3599.0,
        "actual_price": 6726.0
    },
    {
        "name": "SHOPEE Branded New Standard 3/8\"-16 Female to 1/4\"-20 Male Tripod Thread Reducer Screw Adapter (Silver) 1 PCS ONLY",
        "ratings": 3.9,
        "no_of_ratings": 88,
        "discount_price": 125.0,
        "actual_price": 999.0
    },
    {
        "name": "NDLESS SPORTS Designer Ankle Length 4 Way Stretch Polyester Sports Bra & Legging Tracksuit for Yoga, Running & Fitness Exe...",
        "ratings": 4.1,
        "no_of_ratings": 7,
        "discount_price": 610.0,
        "actual_price": 1499.0
    },
    {
        "name": "CLICKFLY® Morning Fresh Fabric Conditioner and Softener Refill Pack, After Wash Liquid Fabric Softener - For Softness, Shi...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 699.0
    },
    {
        "name": "Jack & Jones Men Shirt",
        "ratings": 2.2,
        "no_of_ratings": 4,
        "discount_price": 625.0,
        "actual_price": 2499.0
    },
    {
        "name": "FAUSTO Men's High Ankle Lace Up Leather Zipper Boots for Winters|Casual|Stylish|Stitched|Classic|Trending|Long Distance|Co...",
        "ratings": 2.7,
        "no_of_ratings": 27,
        "discount_price": 2299.0,
        "actual_price": 2499.0
    },
    {
        "name": "Nike Women WMNS RUNALLDAY Running Shoes",
        "ratings": 3.6,
        "no_of_ratings": 81,
        "discount_price": 2995.0,
        "actual_price": 4495.0
    },
    {
        "name": "Knighthood Double Headed Eagle with Winged Stone Detailing Lapel Pin Badge Coat Suit Jacket Wedding Gift Party Shirt Colla...",
        "ratings": 3.8,
        "no_of_ratings": 48,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Nike Men's Black Air Max Advantage 3 Shoes (UK-10)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 6170.0,
        "actual_price": 6495.0
    },
    {
        "name": "SanDisk Ultra Dual Drive Go usb3.0 Type C Pendrive for Mobile (Black, 64 GB, 5Y - SDDDC3-064G-I35)",
        "ratings": 4.3,
        "no_of_ratings": 55257,
        "discount_price": 689.0,
        "actual_price": 1600.0
    },
    {
        "name": "Adiver Women Girls Fashion Slides Daily Slippers Printed PU Flip Flops Sandal",
        "ratings": 4.2,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 1299.0
    },
    {
        "name": "Psychovest Women's Sexy Lace Cut Out Underwire Bra and Panty Lingerie Set Free Size",
        "ratings": 3.7,
        "no_of_ratings": 12,
        "discount_price": 479.0,
        "actual_price": 899.0
    },
    {
        "name": "Genie Plaids 19 Maroon Backpack Collection",
        "ratings": 4.3,
        "no_of_ratings": 181,
        "discount_price": 1099.0,
        "actual_price": 2599.0
    },
    {
        "name": "Gate 7 Dashboard Screen Protector Speedometer Cover/Cap Compatible with Royal Enfield Hunter 350",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 280.0,
        "actual_price": 390.0
    },
    {
        "name": "Fommil sling bags for women bags handbags women",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 749.0,
        "actual_price": 1899.0
    },
    {
        "name": "Pepe Jeans Men's Slim Jeans",
        "ratings": 2.9,
        "no_of_ratings": 10,
        "discount_price": 1599.37,
        "actual_price": 3999.0
    },
    {
        "name": "KESAR ZEMS Tridhatu Opening Ring Adjustable Thumb Ring Spiral Ring Good Luck Challa Ring For Unisex (Size-21)",
        "ratings": 3.4,
        "no_of_ratings": 7,
        "discount_price": 300.0,
        "actual_price": 499.0
    },
    {
        "name": "ROUXOUSDiwali Above Knee Baby Doll Dress & Nightwear/Nighty/Sleep Dress |Hot & Sexy for Newly Married Couples/Honeymoon/Fi...",
        "ratings": 3.3,
        "no_of_ratings": 2,
        "discount_price": 189.0,
        "actual_price": 299.0
    },
    {
        "name": "Agaro Blaze USBA to micro +Type C 2in1 Braided 1.2M Cable, Grey",
        "ratings": 4.3,
        "no_of_ratings": 16085,
        "discount_price": 159.0,
        "actual_price": 595.0
    },
    {
        "name": "Himalayan Organics Moroccan Argan Oil Conditioner With Extracts Of Moringa & Bhringraj | No Parabens & No Sulphate | Hydra...",
        "ratings": 4.2,
        "no_of_ratings": 638,
        "discount_price": 499.0,
        "actual_price": 795.0
    },
    {
        "name": "Clovia Women's Cotton Non-Padded Wirefree Tube Bra with Detachable Transparent Straps",
        "ratings": 3.2,
        "no_of_ratings": 67,
        "discount_price": 249.0,
        "actual_price": 699.0
    },
    {
        "name": "Lavie Women's Archer Textured Dome Sling Bag| Ladies Purse Handbag",
        "ratings": 4.3,
        "no_of_ratings": 65,
        "discount_price": 699.0,
        "actual_price": 2299.0
    },
    {
        "name": "Nike Unisex-Child Jr Mercurial Vctry 6 Df NJR Fg Football Shoes",
        "ratings": 3.7,
        "no_of_ratings": 31,
        "discount_price": 3974.0,
        "actual_price": 6495.0
    },
    {
        "name": "DENIZBLUE Jewelry Set for Women, Pendant Necklaces and Earrings Set With AAA Cubic Zircon, Birthday, Anniversary, Party Pr...",
        "ratings": 4.7,
        "no_of_ratings": 2,
        "discount_price": 489.0,
        "actual_price": 1099.0
    },
    {
        "name": "Lavie Sport Perk 36 litres Laptop Backpack | School College Bag for Boys & Girls",
        "ratings": 3.6,
        "no_of_ratings": 215,
        "discount_price": 999.0,
        "actual_price": 1599.0
    },
    {
        "name": "OM SAI LATEST CREATION Night Suit Set for Women Rayon, Night Dress, Lounge Wear,Printed Rayon,Top and Capri Set for Women,...",
        "ratings": 4.4,
        "no_of_ratings": 113,
        "discount_price": 589.0,
        "actual_price": 1999.0
    },
    {
        "name": "Selvia Women's Striped Regular fit Top (117TKR2633-L_White and Grey L)",
        "ratings": 3.8,
        "no_of_ratings": 3,
        "discount_price": 269.0,
        "actual_price": 1342.0
    },
    {
        "name": "SERA Women Dress",
        "ratings": 4.0,
        "no_of_ratings": 1307,
        "discount_price": 637.0,
        "actual_price": 1594.0
    },
    {
        "name": "etwor Kitchen Organiser Rack Plastic Kitchen Rack (Black) Utensil Kitchen Rack (Plastic, Black) (Black)",
        "ratings": 4.0,
        "no_of_ratings": 22,
        "discount_price": 599.0,
        "actual_price": 4999.0
    },
    {
        "name": "Qiddo Sports Boys' T-Shirt",
        "ratings": 3.7,
        "no_of_ratings": 15,
        "discount_price": 630.0,
        "actual_price": 900.0
    },
    {
        "name": "Rajnandini Women's Pure Cambric Cotton Embroidered Kurta Set With Dupatta (JOPLVL238-P_Pink & White)",
        "ratings": 4.1,
        "no_of_ratings": 28,
        "discount_price": 1139.0,
        "actual_price": 4330.0
    },
    {
        "name": "Parachute Advansed Soft Touch Body Lotion for Women & Men, All Skin types, 250ml (Pack of 2) | Pure Coconut Milk & Honey, ...",
        "ratings": 4.2,
        "no_of_ratings": 1085,
        "discount_price": 195.72,
        "actual_price": 450.0
    },
    {
        "name": "Schwarzkopf Professional Bonacure Bc Keratin Smooth Perfect Micellar Shampoo | For Frizzy Hair | 1000 Ml",
        "ratings": 4.2,
        "no_of_ratings": 552,
        "discount_price": 1750.0,
        "actual_price": 1975.0
    },
    {
        "name": "Zivom® Brass Silver Plated & Cubic Zirconia Bracelet for Women & Girls",
        "ratings": 3.7,
        "no_of_ratings": 26,
        "discount_price": 418.0,
        "actual_price": 1393.0
    },
    {
        "name": "BATA Mens Denim Casual Shoes",
        "ratings": 4.0,
        "no_of_ratings": 1984,
        "discount_price": 482.0,
        "actual_price": 746.0
    },
    {
        "name": "Vaamsi Women's Chiffon Saree",
        "ratings": 3.6,
        "no_of_ratings": 1502,
        "discount_price": 279.0,
        "actual_price": 1650.0
    },
    {
        "name": "HANUMEX 55 mm Camera Lens Cap For Nikon Lens Replaces LC-55 Lens Cap Front Lens Cap (55mm) - AF-P 18-55mm f/ 3.5-5.6g VR K...",
        "ratings": 3.7,
        "no_of_ratings": 542,
        "discount_price": 201.0,
        "actual_price": 499.0
    },
    {
        "name": "LG 1.5 Ton 3 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter with Anti-Virus Protectio...",
        "ratings": 4.0,
        "no_of_ratings": 69,
        "discount_price": 37990.0,
        "actual_price": 68990.0
    },
    {
        "name": "Rinkon VR46 Keychain PACK OF 2 For Men Boys Moto Gp Racing Vr46 Bikers Rossi Fans Club Lanyard Stylish Sports Doctor Valen...",
        "ratings": 3.7,
        "no_of_ratings": 11,
        "discount_price": 169.0,
        "actual_price": 399.0
    },
    {
        "name": "SIDHARTH GEMS 14.00 Ratti 13.00 Carat Lab - Unheated Untreatet AAA+ Quality Natural Blue Sapphire Neelam Gold Adjustable G...",
        "ratings": 3.2,
        "no_of_ratings": 4,
        "discount_price": 800.0,
        "actual_price": 9999.0
    },
    {
        "name": "PA Handle Bar (Silver) Universal for Bajaj Pulsar Ug3 150/180",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 495.0,
        "actual_price": 999.0
    },
    {
        "name": "Scizor Retractable Clothesline Indoor Clothes Lines retracting | Heavy Duty for Drying Laundry line Outdoor|Wall Mounted S...",
        "ratings": 3.2,
        "no_of_ratings": 10,
        "discount_price": 1199.0,
        "actual_price": 2499.0
    },
    {
        "name": "Fast Charger Compatible for Mi Xiaomi Redmi Mi 9/9A/9i/4/4A/5/5A/6A/6 Pro/7 | Smartphone Mobile | Wall | Travel | Adapter/...",
        "ratings": 3.1,
        "no_of_ratings": 202,
        "discount_price": 325.0,
        "actual_price": 999.0
    },
    {
        "name": "Italish Women Handbag with Satchel (Set of 2)",
        "ratings": 3.0,
        "no_of_ratings": 3,
        "discount_price": 849.0,
        "actual_price": 1499.0
    },
    {
        "name": "Planet Wear Girl Kids Antique Golden SuperStar With Bow Ballerina Euro Size Bellies for Years to Kid",
        "ratings": 2.0,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "SHAUN Women Trackpant (642W1_P$_Pack of 1)",
        "ratings": 3.5,
        "no_of_ratings": 20,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Nine West Kylee Mini Tote Crossbody, Black 1, One Size",
        "ratings": 4.0,
        "no_of_ratings": 66,
        "discount_price": 8184.0,
        "actual_price": 10499.0
    },
    {
        "name": "Jockey Men Midi Brief (Pack of 2)",
        "ratings": 4.2,
        "no_of_ratings": 781,
        "discount_price": 235.0,
        "actual_price": 358.0
    },
    {
        "name": "Armani Exchange Hampton Analog Black Dial Men's Watch-AX2103",
        "ratings": 4.6,
        "no_of_ratings": 1104,
        "discount_price": 12995.0,
        "actual_price": 13995.0
    },
    {
        "name": "TP-Link Powered USB Hub with 7 Data Smart Charging USB 3.0 Ports, Compatible with Windows, Mac OS X and Linux Systems, 5V/...",
        "ratings": 4.5,
        "no_of_ratings": 12933,
        "discount_price": 1997.0,
        "actual_price": 4999.0
    },
    {
        "name": "Klepe Black Red Running Shoes",
        "ratings": 3.2,
        "no_of_ratings": 78,
        "discount_price": 339.0,
        "actual_price": 1699.0
    },
    {
        "name": "Action Pro 360 Degree Rotating Backpack Bag Hat Clip Clamp Accessories for GoPro Hero 11/10/9/7/6/5/4/3 Plus/3 SJCAM Xiaom...",
        "ratings": 4.0,
        "no_of_ratings": 514,
        "discount_price": 399.0,
        "actual_price": 699.0
    },
    {
        "name": "TIMBRESONIC Bounce Pro Made in India Wireless in-Ear Earphones with Mic, 24Hrs* Playback, 10mm Drivers, Punchy Bass, Fast ...",
        "ratings": 3.2,
        "no_of_ratings": 21,
        "discount_price": 664.0,
        "actual_price": 2299.0
    },
    {
        "name": "Janasya Women's Yellow Cotton Floral Print Flared Western Dress",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 907.0,
        "actual_price": 2749.0
    },
    {
        "name": "FEDUS HDMI Female to Female Coupler Extender Adapter Connector (Pack of One)",
        "ratings": 4.1,
        "no_of_ratings": 43,
        "discount_price": 249.0,
        "actual_price": 349.0
    },
    {
        "name": "Lovable Women Girls Non Wired Padded Sports Bra in Green Color- Energy Bra - OL",
        "ratings": 4.4,
        "no_of_ratings": 8,
        "discount_price": 949.0,
        "actual_price": 1900.0
    },
    {
        "name": "MANQ Men Brown Slim Fit Printed Casual Shirt",
        "ratings": 3.9,
        "no_of_ratings": 16,
        "discount_price": 499.0,
        "actual_price": 1299.0
    },
    {
        "name": "QOZWEID 2 in 1 Window Cleaning Tool Squeegee Window Cleaner with Bendable Head for Indoor Outdoor High Windows Cleaning",
        "ratings": 4.4,
        "no_of_ratings": 29,
        "discount_price": 469.0,
        "actual_price": 999.0
    },
    {
        "name": "Jockey Women Shorts",
        "ratings": 3.9,
        "no_of_ratings": 53,
        "discount_price": 689.0,
        "actual_price": 699.0
    },
    {
        "name": "The Purple Tree Fatty Tote Bag For Women, Women Fatty Tote Bag , Handbag , Women Handbag , Women Bag , Handbag for Women, ...",
        "ratings": 4.0,
        "no_of_ratings": 146,
        "discount_price": 599.0,
        "actual_price": 1299.0
    },
    {
        "name": "SUKHAD Audio Interface AMP iRig from for iPod Touch, iPhone, and iPad, 7 X 2 X 2 cm, Black and White",
        "ratings": 4.2,
        "no_of_ratings": 2690,
        "discount_price": 599.0,
        "actual_price": 1199.0
    },
    {
        "name": "Panjatan Red Charismatic Silver Coloured Cufflinks for Men.",
        "ratings": 4.2,
        "no_of_ratings": 17,
        "discount_price": 488.0,
        "actual_price": 899.0
    },
    {
        "name": "Cage/Playhouse for Dwarf Hamster/Gerbil/Mice with a Food Cup, Water Bottle and Exercise Wheel with Spacious Two ladders ca...",
        "ratings": 4.0,
        "no_of_ratings": 46,
        "discount_price": 1350.0,
        "actual_price": 2800.0
    },
    {
        "name": "LEADERACHI Vintage Swede Leather Designer Tote Shoulder Shopper Bag for Women….",
        "ratings": 3.2,
        "no_of_ratings": 5,
        "discount_price": 3492.0,
        "actual_price": 9999.0
    },
    {
        "name": "Marklif Gorilla Tripod/Mini Tripod 13 inch with Remote for Mobile Phone with Holder for Mobile, Flexible Gorilla Stand for...",
        "ratings": 3.9,
        "no_of_ratings": 1080,
        "discount_price": 349.0,
        "actual_price": 1999.0
    },
    {
        "name": "Braun Multiquick MQ100 450-Watt Hand Blender",
        "ratings": 4.4,
        "no_of_ratings": 9037,
        "discount_price": 3197.0,
        "actual_price": 5999.0
    },
    {
        "name": "FABITTO Drip Irrigation Pipe 16mm Main Supply Line Pipe 25mtrs.",
        "ratings": 4.0,
        "no_of_ratings": 26,
        "discount_price": 795.0,
        "actual_price": 999.0
    },
    {
        "name": "Daz Cam Horn Speaker WN-10 ( with line Matching) with High Sound Quality Outdoor PA System (2)",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 1199.0,
        "actual_price": 3999.0
    },
    {
        "name": "RADHA LAKSHMI Handicrafts Women's Ikat Hand Block Print Jaipuri Cotton Mulmul Saree with Blouse Piece (mragini02)",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 699.0,
        "actual_price": 2899.0
    },
    {
        "name": "SNEH Women's Leheriya Cotton Dupatta (SN911_Multicolour_Free Size)",
        "ratings": 4.2,
        "no_of_ratings": 26,
        "discount_price": 799.0,
        "actual_price": 1999.0
    },
    {
        "name": "Anand Sarees Women Silk Salwar Suit Material (Jdm_Green_1_1_Red_One Size_Red_One Size)",
        "ratings": 3.7,
        "no_of_ratings": 179,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "PrettyKrafts Folding Laundry Basket for Clothes with Lid & Handle, Toys Organizer, 35 Liters, Blue",
        "ratings": 3.5,
        "no_of_ratings": 857,
        "discount_price": 269.0,
        "actual_price": 499.0
    },
    {
        "name": "CASON (DEVICE OF C) 10g/50 kg Electronic Travel Luggage Weighing Weight Scale with Belt(Multicolour)",
        "ratings": 3.7,
        "no_of_ratings": 69,
        "discount_price": 475.0,
        "actual_price": 995.0
    },
    {
        "name": "Safari Spartan 21 Ltrs Water Resistant Backpack - Teal, S (SPARTAN19CBTEA)",
        "ratings": 3.8,
        "no_of_ratings": 641,
        "discount_price": 599.0,
        "actual_price": 2010.0
    },
    {
        "name": "RPS FASHION WITH DEVICE OF R Analogue Girl's and Women's Watch",
        "ratings": 2.8,
        "no_of_ratings": 2,
        "discount_price": 389.0,
        "actual_price": 1499.0
    },
    {
        "name": "Fastrack Women's Bern Sling Bag (Brown)",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 1804.0,
        "actual_price": 3165.0
    },
    {
        "name": "Blue Lola Headphone",
        "ratings": 3.6,
        "no_of_ratings": 32,
        "discount_price": 20579.0,
        "actual_price": 29799.0
    },
    {
        "name": "ALISLEEMA Women Sling Bag with Handle & Adjustable Strap | PU Leather | 3 Compartment | Magnet & Zip Closure (Blue)",
        "ratings": 3.3,
        "no_of_ratings": 14,
        "discount_price": 263.0,
        "actual_price": 699.0
    },
    {
        "name": "BATA womens Susan Thong Fashion Slippers",
        "ratings": 4.1,
        "no_of_ratings": 132,
        "discount_price": 591.0,
        "actual_price": 699.0
    },
    {
        "name": "Puma Unisex-Adult Easy Runner Light Running Shoe",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2199.0,
        "actual_price": 4499.0
    },
    {
        "name": "V-Guard Victo 15 Litre Water Heater with Free Installation & Free Connection Pipes (BEE 5 Star Rated), White (15 Litre)",
        "ratings": 4.5,
        "no_of_ratings": 5539,
        "discount_price": 7555.0,
        "actual_price": 9800.0
    },
    {
        "name": "HARMAN INDUSTRIES Euro-4 AXAIL Ventilation/Exhaust Fan (4-inch/100 mm, Brown)",
        "ratings": 3.4,
        "no_of_ratings": 42,
        "discount_price": 563.0,
        "actual_price": 999.0
    },
    {
        "name": "Vama Fashions Original Pearl Kurta Buttons for Women & Men with Chain",
        "ratings": 4.1,
        "no_of_ratings": 7,
        "discount_price": 356.0,
        "actual_price": 2000.0
    },
    {
        "name": "GLAMORAS Women Cotton Spandex Mid Rise Full Coverage Hipster Panty Brief",
        "ratings": 4.0,
        "no_of_ratings": 4,
        "discount_price": 499.0,
        "actual_price": 1198.0
    },
    {
        "name": "BIBA Women's Narrow Pant (Bottom W14918_Maroon_XXL)",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Darkbuck® Anime T Shirt for Men and Women Regular Lion Tshirts Unisex Pure Cotton Casual Wear Round Neck T-Shirt",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 649.0,
        "actual_price": 2999.0
    },
    {
        "name": "CEDO Samsung A51 Back Cover | Matte Soft Silicon Flexible | Camera Bump Protection | All Side Shock Proof Rubberised Back ...",
        "ratings": 4.2,
        "no_of_ratings": 1253,
        "discount_price": 149.0,
        "actual_price": 999.0
    },
    {
        "name": "Peter England Men Multi Pack of Two Trunks Multicolour",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 429.0,
        "actual_price": 699.0
    },
    {
        "name": "Royal Sapphire Rasoi Nano Folding Barbeque Tandoori Stand Grill for Home Gas Stove Charcoal & Gas BBQ Grill Oven Gi Steel...",
        "ratings": 3.2,
        "no_of_ratings": 7,
        "discount_price": 429.0,
        "actual_price": 989.0
    },
    {
        "name": "Bunnies Footwear Unisex-Child's Fashion Sandal",
        "ratings": 3.7,
        "no_of_ratings": 36,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "Stylista Top Load Fully Automatic Washing Machine Cover Suitable for Samsung 6 kg, 6.2 kg, 6.5 kg, 7 kg & 7.5 kg Grey",
        "ratings": 4.1,
        "no_of_ratings": 85,
        "discount_price": 499.0,
        "actual_price": 899.0
    },
    {
        "name": "Onmall barbeque air blower fan for bbq Fire Accelerator Plastic Mini Portable Manual barbeque air blower fan for making bb...",
        "ratings": 3.8,
        "no_of_ratings": 11,
        "discount_price": 164.0,
        "actual_price": 550.0
    },
    {
        "name": "BASIICS by La Intimo Men's Prime Thong Underwear (Pack of 2)",
        "ratings": 4.1,
        "no_of_ratings": 85,
        "discount_price": 360.0,
        "actual_price": 399.0
    },
    {
        "name": "Seven Horses Wall Painting with Special Effects Sparkle Lamination Synthetic Solid Frame (Size 52 x 80 cm) h57f,2( Digital...",
        "ratings": 4.3,
        "no_of_ratings": 59,
        "discount_price": 1199.0,
        "actual_price": 1699.0
    },
    {
        "name": "MASTOP Digital Men's Watch (Black Dial Black Colored Strap)",
        "ratings": 4.1,
        "no_of_ratings": 1026,
        "discount_price": 4760.0,
        "actual_price": 4762.0
    },
    {
        "name": "SMT A Grade Badminton Feather Shuttlecock Pack of 10",
        "ratings": 3.5,
        "no_of_ratings": 45,
        "discount_price": 199.0,
        "actual_price": 699.0
    },
    {
        "name": "LOOKLINE Women's Lucknow Embroidered Bottom Pants chikenkari Loose fit Palazzos Pant Ankle Length Plazo for Kurta Kurti",
        "ratings": 3.6,
        "no_of_ratings": 53,
        "discount_price": 379.0,
        "actual_price": 999.0
    },
    {
        "name": "Satrani Women's Dupatta",
        "ratings": 3.9,
        "no_of_ratings": 388,
        "discount_price": 269.0,
        "actual_price": 1043.0
    },
    {
        "name": "Van Heusen Women's Regular Fit Top",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 419.0,
        "actual_price": 1499.0
    },
    {
        "name": "VIMAL JONNEY Dryfit Solid Lycra Multicolor T-Shirt for Men (Pack of 2)-Dryfit_T_BLK_OLV_02-P",
        "ratings": 3.5,
        "no_of_ratings": 36,
        "discount_price": 329.0,
        "actual_price": 1998.0
    },
    {
        "name": "Lecherous Women's Rayon Straight Printed Kurta with Pant & Dupatta||Green Cotton Unstitched Suit||Women Kurta, Pant and Du...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 1100.0,
        "actual_price": 1550.0
    },
    {
        "name": "Zollyss Plastic Magic Sticker Series Self Adhesive Bathroom Towel Hanger Hook Rail/Utensil Rack Kitchen Hanger Hooks for C...",
        "ratings": 4.2,
        "no_of_ratings": 65,
        "discount_price": 399.0,
        "actual_price": 899.0
    },
    {
        "name": "Shriya Fashion Dark Full Sleeve CHINES Denim Women Shirt || Denim Shirt for Girls ||",
        "ratings": 2.7,
        "no_of_ratings": 6,
        "discount_price": 348.0,
        "actual_price": 1999.0
    },
    {
        "name": "AmazonBasics Foldable Burlap Storage Cubes (2-Pack)",
        "ratings": 4.5,
        "no_of_ratings": 1950,
        "discount_price": 1119.0,
        "actual_price": 2400.0
    },
    {
        "name": "Mitutoyo 184-307s thickness feeler gage set, straight leaves, 0.03-0.5mm thickness, 100mm length, 13 leaves",
        "ratings": 5.0,
        "no_of_ratings": 7,
        "discount_price": 2351.0,
        "actual_price": 2999.0
    },
    {
        "name": "Carlington Analog Women's Watch (CT2004)",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 799.0,
        "actual_price": 4999.0
    },
    {
        "name": "New Police Oxford Derby Lace-up Formal Uniform Shoes for Men & Boys 994 (Black) Size 11",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Romaisa Women's Satin Solid Maxi Length Nighty with Robe, Top with Pyjama, Bra with Panty _Nightwear Set Pack of 6_Free Size",
        "ratings": 3.5,
        "no_of_ratings": 34,
        "discount_price": 846.0,
        "actual_price": 2060.0
    },
    {
        "name": "Arrow Men Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1109.81,
        "actual_price": 2499.0
    },
    {
        "name": "Peora Gold Plated Pink Pearl Polki Chandelier Earring for Women Girls Stylish",
        "ratings": 3.1,
        "no_of_ratings": 7,
        "discount_price": 449.0,
        "actual_price": 1995.0
    },
    {
        "name": "ZOUK Handmade Vegan Leather Honeycomb Summer Print Women's Sling Bags With Adjustable Shoulder Strap",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1104.0,
        "actual_price": 3248.0
    },
    {
        "name": "Caprese Women Sling Bag (Beige)(SGARLMDBIG)",
        "ratings": 4.2,
        "no_of_ratings": 21,
        "discount_price": 1370.0,
        "actual_price": 2249.0
    },
    {
        "name": "Philips HI108 1000-Watt Dry Iron (White and Lavender)",
        "ratings": 4.2,
        "no_of_ratings": 883,
        "discount_price": 1089.0,
        "actual_price": 1095.0
    },
    {
        "name": "Marks & Spencer Men's Regular Fit Base Layer",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2009.0,
        "actual_price": 2999.0
    },
    {
        "name": "Aquieen Brass Full Threaded Pop Up Waste Coupling 32 MM (3\", Gold)",
        "ratings": 4.6,
        "no_of_ratings": 50,
        "discount_price": 900.0,
        "actual_price": 2050.0
    },
    {
        "name": "The Banyan Tee Half Sleeve Premium Printed Cotton Music T-Shirt Style Code: TBT-M_NIR_Man_WHO_Art_B",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "INDO ERA Women's Cotton Blend Embroidered Straight Kurta Palazzo With Dupatta Set (Black_KH4BK9070_Small)",
        "ratings": 4.3,
        "no_of_ratings": 6,
        "discount_price": 969.0,
        "actual_price": 4399.0
    },
    {
        "name": "Fommil sling bags for women bags handbags women",
        "ratings": 2.9,
        "no_of_ratings": 5,
        "discount_price": 649.0,
        "actual_price": 1899.0
    },
    {
        "name": "Bajaj DMH67 67L Desert Air Cooler for Home with DuraMarine Pump (2-Yr Warranty), Antibacterial Honeycomb Pads, Powerful Ai...",
        "ratings": 3.2,
        "no_of_ratings": 137,
        "discount_price": 9499.0,
        "actual_price": 14890.0
    },
    {
        "name": "Men Beige,Tan,Brown Color Leatherette Material",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 1331.0,
        "actual_price": 1381.0
    },
    {
        "name": "Amazon Brand - Solimo Fabric Saree Stacker cum Multipurpose Wardrobe Organiser, Set of 2, Black and White",
        "ratings": 4.0,
        "no_of_ratings": 76,
        "discount_price": 649.0,
        "actual_price": 1000.0
    },
    {
        "name": "Ravi Minio Hi-Speed Fan 250mm with speed regulator (Glossy Black)",
        "ratings": 4.4,
        "no_of_ratings": 8,
        "discount_price": 2799.0,
        "actual_price": 3000.0
    },
    {
        "name": "Upix® AC Remote No. 227, Compatible for Bluestar AC Remote Control (Exactly Same Remote Will Only Work)",
        "ratings": 4.9,
        "no_of_ratings": 7,
        "discount_price": 422.0,
        "actual_price": 899.0
    },
    {
        "name": "Envias Women's Handbag (Set of 3, Grey)",
        "ratings": 3.2,
        "no_of_ratings": 1578,
        "discount_price": 551.0,
        "actual_price": 3999.0
    },
    {
        "name": "Royal Aquafresh Epic Blue 12 Ltr RO+UV+UF+TDS 14 Layer Waterpurification Advance Technology Electric Water Purifier (1 Yea...",
        "ratings": 3.6,
        "no_of_ratings": 42,
        "discount_price": 3780.0,
        "actual_price": 16500.0
    },
    {
        "name": "SOMYA BY BM Jewellers 925 Pure Sterling Silver Nose-Ring Hoop Bali for Baby,Girls And Womens With Certificate OF Purity",
        "ratings": 3.6,
        "no_of_ratings": 8,
        "discount_price": 199.0,
        "actual_price": 499.0
    },
    {
        "name": "Allen Solly Men Jeans",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1149.0,
        "actual_price": 2299.0
    },
    {
        "name": "Arrow Men's David 2.0 Leather MID TOP",
        "ratings": 2.3,
        "no_of_ratings": 3,
        "discount_price": 3607.0,
        "actual_price": 5599.0
    },
    {
        "name": "Sattyaki Gold-Plated Rajasthani Bridal Jewellery AD/CZ Dulhan Set Heavy Choker, Long necklace, Earrings, Polki Matthapatti...",
        "ratings": 3.8,
        "no_of_ratings": 19,
        "discount_price": 1799.0,
        "actual_price": 5999.0
    },
    {
        "name": "ABYS Genuine Leather Passport Holder||Cash Bag||Neck Pouch||Shoulder Bag for Men & Women (Tan)",
        "ratings": 3.4,
        "no_of_ratings": 26,
        "discount_price": 799.0,
        "actual_price": 1999.0
    },
    {
        "name": "Puma mens Ignite Flash Evoknit Red Dahlia-High Risk Red-White Running Shoe - 8 UK (190508)",
        "ratings": 4.4,
        "no_of_ratings": 31,
        "discount_price": 3499.0,
        "actual_price": 6999.0
    },
    {
        "name": "Telmo Car Shampoo (535 ml) Free Microfiber Cloth",
        "ratings": 4.1,
        "no_of_ratings": 128,
        "discount_price": 187.0,
        "actual_price": 220.0
    },
    {
        "name": "LUCA D4 Pro Cricket Shoes for Men, Cricket Shoes for Men, with Rubber Sole, with PU Leather Upper, Sports Shoes for Men, W...",
        "ratings": 4.0,
        "no_of_ratings": 54,
        "discount_price": 949.0,
        "actual_price": 1499.0
    },
    {
        "name": "SHOPEE 12 Packs Background Backdrop Clips Clamps Holder with 9.05 inches/23 Centimeters Adjustable Elastic Cord for Photo ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 1000.0
    },
    {
        "name": "Bangalore Refinery 24k (999) Lord Ganesh 4 gm Yellow Gold Coin",
        "ratings": 4.7,
        "no_of_ratings": 20,
        "discount_price": 26065.0,
        "actual_price": 28000.0
    },
    {
        "name": "Skechers Mens Ingram- Marner Sneakers",
        "ratings": 4.5,
        "no_of_ratings": 475,
        "discount_price": 4319.0,
        "actual_price": 4799.0
    },
    {
        "name": "global desi Women's Relaxed Fit Pants",
        "ratings": 4.2,
        "no_of_ratings": 13,
        "discount_price": 374.0,
        "actual_price": 1499.0
    },
    {
        "name": "KNOOS Men's Casual Loafers",
        "ratings": 3.2,
        "no_of_ratings": 45,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "iEDS Action Camera Aluminium Alloy Holder Compatible with gopro Bike Mount with Two 360° rotational Angle for Bike Motorcy...",
        "ratings": 4.0,
        "no_of_ratings": 371,
        "discount_price": 999.0,
        "actual_price": 2999.0
    },
    {
        "name": "Inner Amour Camisole Wide Strap Daily Use Camisole/Spaghetti Top/Slip/Inner/Lingerie & Underwear/Camisoles & Vests for Wom...",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 216.0,
        "actual_price": 248.0
    },
    {
        "name": "Lamsa Flavoured Tea, 500g Carton",
        "ratings": 4.0,
        "no_of_ratings": 163,
        "discount_price": 207.0,
        "actual_price": 220.0
    },
    {
        "name": "SWADESI STUFF Multi Dial Analog Watch for Women and Girls",
        "ratings": 3.6,
        "no_of_ratings": 61,
        "discount_price": 219.0,
        "actual_price": 1299.0
    },
    {
        "name": "rts New Imported RFID Protected 9 Slot Vertical Genuine PU Leather Credit Debit ATM Business Card Holder Wallet Protector ...",
        "ratings": 4.2,
        "no_of_ratings": 217,
        "discount_price": 448.0,
        "actual_price": 4999.0
    },
    {
        "name": "Dennis Lingo Men's Checkered Slim Fit Casual Shirt",
        "ratings": 3.8,
        "no_of_ratings": 2609,
        "discount_price": 499.0,
        "actual_price": 2499.0
    },
    {
        "name": "iFFALCON 147 cm (58 inches) 4K Ultra HD Smart LED Google TV iFF58U62 (Black)",
        "ratings": 4.2,
        "no_of_ratings": 2033,
        "discount_price": 33999.0,
        "actual_price": 85990.0
    },
    {
        "name": "Fendo Aura 3 Fold Hand Open 21.5Inch Umbrella For Unisex",
        "ratings": 3.7,
        "no_of_ratings": 45,
        "discount_price": 459.0,
        "actual_price": 1479.0
    },
    {
        "name": "Raploch Men Cotton Boxers/Shorts",
        "ratings": 3.2,
        "no_of_ratings": 11,
        "discount_price": 510.0,
        "actual_price": 1099.0
    },
    {
        "name": "ANGAAKAR CLOTHINGS Baby Boys & Girls Regular Fit Cotton Track Pants for Kids Lowers Sports Trousers for Boys Pajama Pants ...",
        "ratings": 3.7,
        "no_of_ratings": 63,
        "discount_price": 830.0,
        "actual_price": 1797.0
    },
    {
        "name": "Cosmus Sun Casual College Backpack/School Bag (Black & Red)",
        "ratings": 3.3,
        "no_of_ratings": 2,
        "discount_price": 1699.0,
        "actual_price": 2399.0
    },
    {
        "name": "Aks Australia Running Shoe Olive/Gold Size 8 With Wrist Band Cotton 5\" Milange Red And Padded Cotton Socks Full White/Grey",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1721.0,
        "actual_price": 2147.0
    },
    {
        "name": "Sidharth Gems Zircon Cubic Zirconia American Diamond Loose Natural Certified Precious Gemstone 6.55 Carat",
        "ratings": 3.9,
        "no_of_ratings": 10,
        "discount_price": 501.0,
        "actual_price": 999.0
    },
    {
        "name": "Shasmi Women Microfiber Solid Saree Shapewear (Fish Cut Shapewear) (L, Real Black)",
        "ratings": 4.5,
        "no_of_ratings": 9,
        "discount_price": 419.0,
        "actual_price": 1599.0
    },
    {
        "name": "Weaves Blue Aztec Fringe Tote Bag | Metal Zipper Closure Handbag with Shoulder Strap For Ladies",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 949.0,
        "actual_price": 1999.0
    },
    {
        "name": "BIBA Womens Polyester Salwar Suit Set",
        "ratings": 3.7,
        "no_of_ratings": 83,
        "discount_price": 1799.0,
        "actual_price": 3999.0
    },
    {
        "name": "Silver Valley Drive safe keychain for boyfriend I love you keychains I need you here with me key rings",
        "ratings": 4.2,
        "no_of_ratings": 152,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "TORIYOX Hobo Bags for Women Faux Leather Purses and Handbags Large Hobo Purse with Tassel",
        "ratings": 4.4,
        "no_of_ratings": 58,
        "discount_price": 1299.0,
        "actual_price": 4499.0
    },
    {
        "name": "Soch Women Purple Bandhani Saree",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 3198.0,
        "actual_price": 3998.0
    },
    {
        "name": "Bird Feed Sunflower Seed 450 Grams for Parrots, Cockatiels, Love Birds, Budgies, Birds Feed Enriched with Cuttlefish Bone ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 109.0,
        "actual_price": 250.0
    },
    {
        "name": "Dennis Lingo Men's Cotton Slim Fit Casual Shirt",
        "ratings": 4.2,
        "no_of_ratings": 60,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "DEVIL Analog Girl's Watch (Multicolour Dial Pink Colored Strap)",
        "ratings": 3.4,
        "no_of_ratings": 9,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "Blaupunkt Newly Launched SBA15 14W Bluetooth Soundbar I 2000 mAh Battery I TurboVolt Charging I AUX, Bluetooth, USB & TWS ...",
        "ratings": 3.9,
        "no_of_ratings": 11455,
        "discount_price": 1199.0,
        "actual_price": 2999.0
    },
    {
        "name": "Retro Bluetooth Speaker, Vintage Radio-Greadio FM Radio with Old Fashioned Classic Style, Strong Bass Enhancement, Loud Vo...",
        "ratings": 4.6,
        "no_of_ratings": 2653,
        "discount_price": 5971.0,
        "actual_price": 11452.0
    },
    {
        "name": "LOUIS STITCH Men's Russet Tan Italian Suede Leather Loafers Casual Single Monk Penny Shoes for Men (Czech_Republic)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1999.0,
        "actual_price": 6999.0
    },
    {
        "name": "Mount Track B6 Ninja 40 Ltrs Rucksack, Hiking & Trekking Backpack Grey",
        "ratings": 3.9,
        "no_of_ratings": 41,
        "discount_price": 594.0,
        "actual_price": 2500.0
    },
    {
        "name": "LOHAYA Air Conditioner Remote Compatible for Samsung Split Inverter AC Remote Control [ Compatible for Samsung AC Remote C...",
        "ratings": 3.8,
        "no_of_ratings": 47,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "Nike Unisex Classic II Cushion Over-The-Calf Soccer Sock",
        "ratings": 4.5,
        "no_of_ratings": 913,
        "discount_price": 5545.0,
        "actual_price": 7929.0
    },
    {
        "name": "Multi-Coated Variable Polarizing ND Neutral Density Adjustable ND2 -ND400 (Waterproof, Scratchproof, Dustproof) (67MM)",
        "ratings": 4.0,
        "no_of_ratings": 36,
        "discount_price": 1299.0,
        "actual_price": 2999.0
    },
    {
        "name": "Campus Men's Styger Running Shoes",
        "ratings": 4.0,
        "no_of_ratings": 1095,
        "discount_price": 2039.0,
        "actual_price": 2799.0
    },
    {
        "name": "MANQ Men's Slim Fit Joggers",
        "ratings": 4.2,
        "no_of_ratings": 61,
        "discount_price": 469.0,
        "actual_price": 1299.0
    },
    {
        "name": "Jallad TREMORES BUG FIGHTER Bugs Powerful Bed & Termites Killer Spray Powder (Pack of Six, Maroon) - 60 gms",
        "ratings": 4.1,
        "no_of_ratings": 270,
        "discount_price": 689.0,
        "actual_price": 1062.0
    },
    {
        "name": "ATARZA Women's PU Leather Handbags/Shoulder Bags With Adjustable Long Strap, Laptop Bags for Women Hand Held Soft Designer...",
        "ratings": 5.0,
        "no_of_ratings": 4,
        "discount_price": 998.0,
        "actual_price": 2398.0
    },
    {
        "name": "PSK PET MART Strong, Sturdy, Heavy Duty Rope Toy for Aggressive Chewers and Big Dogs (24 Inch Long, XL Size, Colour May Vary)",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 379.0,
        "actual_price": 489.0
    },
    {
        "name": "M Men Style Lord Jesus Crusifix Cross With Black Zinc Metal And Cotton Dori Pendant Necklace For Men And Women SPn2022822",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 298.0,
        "actual_price": 799.0
    },
    {
        "name": "U.S. POLO ASSN. Men T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1719,
        "discount_price": 759.0,
        "actual_price": 999.0
    },
    {
        "name": "UltraProlink UM1050U Power Qube Surge Protector & Spike Guard | White | 175J Extension Board | 4 Universal Sockets 2500W |...",
        "ratings": 4.3,
        "no_of_ratings": 292,
        "discount_price": 2199.0,
        "actual_price": 2999.0
    },
    {
        "name": "PERFECTBLUE Women's Satin Saree with Unstitched Blouse Piece (Matkasatin_variation)",
        "ratings": 3.6,
        "no_of_ratings": 1442,
        "discount_price": 249.0,
        "actual_price": 1999.0
    },
    {
        "name": "WRIGHTRACK Latest New Generation Sports Digital Square Black Dial Day Date Calendar Yellow LED Watch for Boys, Girls & Kid...",
        "ratings": 2.9,
        "no_of_ratings": 271,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Bond Street by Redtape Men's Walking Shoes",
        "ratings": 3.9,
        "no_of_ratings": 408,
        "discount_price": 886.0,
        "actual_price": 3699.0
    },
    {
        "name": "Coasters Unisex Synthetic Trekking and Hiking Shoes",
        "ratings": 4.1,
        "no_of_ratings": 277,
        "discount_price": 1240.0,
        "actual_price": 1499.0
    },
    {
        "name": "MIDOSH Multifunctional 2 in 1 Electric Egg Boiling Steamer Egg Frying Pan Egg Boiler Electric Automatic Off with Egg Boile...",
        "ratings": 3.5,
        "no_of_ratings": 6,
        "discount_price": 374.0,
        "actual_price": 1499.0
    },
    {
        "name": "Infantbond Baby Head Support | Super Soft | Pillow Pack of 3 (0-6 Months;Multicolour)",
        "ratings": 3.6,
        "no_of_ratings": 20,
        "discount_price": 278.07,
        "actual_price": 899.0
    },
    {
        "name": "GODOX SB-FW120 Grid Softbox Strip Softbox Strip Box 120cm 47\" Octagon Honeycomb Grid Strip Softbox Strip Box with Bowens M...",
        "ratings": 4.4,
        "no_of_ratings": 142,
        "discount_price": 5000.0,
        "actual_price": 5100.0
    },
    {
        "name": "BATA Men's Joy Slipper",
        "ratings": 3.9,
        "no_of_ratings": 641,
        "discount_price": 369.0,
        "actual_price": 499.0
    },
    {
        "name": "GO DESi Sweet Amla Candy | Pack of 10 x 30g | Dried Gooseberry | Snacks | 300 g (Pack of 10)",
        "ratings": 3.6,
        "no_of_ratings": 378,
        "discount_price": 195.0,
        "actual_price": 200.0
    },
    {
        "name": "STXXOR C-C 65W OnePlus Dash Warp Charge Cable, 6.5A Type-C to USB C PD Data Sync Fast Charging Cable Compatible with One P...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 109.0,
        "actual_price": 249.0
    },
    {
        "name": "TNQ Women Cotton Half Chicken Embroidery Trouser || Straight Fit Chikan Palazzo || Trouser Pants",
        "ratings": 2.3,
        "no_of_ratings": 3,
        "discount_price": 490.0,
        "actual_price": 899.0
    },
    {
        "name": "FREDI HD PLUS Ultra Mini 3 Pin Plug Device Wireless GSM Audio Receiver SIM Card Ear Bug Listening Device one-Way Audio: Sp...",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 3350.0,
        "actual_price": 5999.0
    },
    {
        "name": "ASTRODIDI Nepali Ganesh Rudraksha (Brown)",
        "ratings": 4.1,
        "no_of_ratings": 24,
        "discount_price": 249.0,
        "actual_price": 999.0
    },
    {
        "name": "Uniform Sarees Corp Women's Poly Cotton Uniform Saree With Blouse Piece",
        "ratings": 3.6,
        "no_of_ratings": 36,
        "discount_price": 750.0,
        "actual_price": 1250.0
    },
    {
        "name": "Philips EasySpeed Plus Steam Iron GC2145/20-2200W, Quick Heat Up with up to 30 g/min steam, 110 g steam Boost, Scratch Res...",
        "ratings": 4.3,
        "no_of_ratings": 2428,
        "discount_price": 2903.0,
        "actual_price": 3995.0
    },
    {
        "name": "NIGHTFAB Women's Embroidered Lizzy Bizzy (Cotton Blend) Solid Maxi Nightgown with Front Open Buttons, Full Length Dress",
        "ratings": 4.5,
        "no_of_ratings": 5,
        "discount_price": 849.0,
        "actual_price": 1399.0
    },
    {
        "name": "Double R Bags Jute Heavy Duty Extra Large Storage Bag, Moving Bag Tote, Blanket Clothes Organizer, Comforter, Bedroom clos...",
        "ratings": 4.5,
        "no_of_ratings": 5,
        "discount_price": 499.0,
        "actual_price": 4999.0
    },
    {
        "name": "ARTIFICIAL TREE Latest Trend Brass Metal Evil Eye Charm Nazariya Payal (Anklet) with Black & Silver Beads (Crystal) for Gi...",
        "ratings": 3.6,
        "no_of_ratings": 17,
        "discount_price": 187.0,
        "actual_price": 599.0
    },
    {
        "name": "Havells Enticer 600mm Decorative, Dust Resistant, High Power in Low Voltage (HPLV), High Speed Ceiling Fan (Pearl White Ch...",
        "ratings": 4.0,
        "no_of_ratings": 583,
        "discount_price": 3898.0,
        "actual_price": 5040.0
    },
    {
        "name": "Puma Men's Hack Sandal",
        "ratings": 3.8,
        "no_of_ratings": 24,
        "discount_price": 1649.0,
        "actual_price": 2799.0
    },
    {
        "name": "LOVELY Mild Steel D-Hook Hanger (Heavy Duty) with M10X75mm Fasteners for Hanging Chandelier, Ceiling Fan or Jhoomer (2 Pc...",
        "ratings": 4.1,
        "no_of_ratings": 320,
        "discount_price": 258.0,
        "actual_price": 499.0
    },
    {
        "name": "CABLESETC Ultra Slim HDMI 2.0 To HDMI Male Ethernet Cable Wire 3D & Arc 4K Support (Length: 2m)",
        "ratings": 4.6,
        "no_of_ratings": 42,
        "discount_price": 499.0,
        "actual_price": 700.0
    },
    {
        "name": "Liberty Men Bryant-1 N.Blue Running Shoes",
        "ratings": 3.8,
        "no_of_ratings": 22,
        "discount_price": 1577.67,
        "actual_price": 1599.0
    },
    {
        "name": "GLORYBOYZ Half Sleeve Relaxed Fit Tropical Hawaiian Men's Casual Shirt",
        "ratings": 3.3,
        "no_of_ratings": 4,
        "discount_price": 899.0,
        "actual_price": 1299.0
    },
    {
        "name": "HIGHCRAFT Latest Sling bag for women Shoulder Bags with Golden Chain Starp Shining Croc PU Leather",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 1599.0
    },
    {
        "name": "Guance Leatherette & Plastic Gear Shift Knob-Black for Tata Indigo",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 431.0,
        "actual_price": 799.0
    },
    {
        "name": "Hopscotch Boys Polo T-Shirt",
        "ratings": 4.1,
        "no_of_ratings": 448,
        "discount_price": 604.56,
        "actual_price": 1289.0
    },
    {
        "name": "Hind Home Women's Cotton Full Hand Sun Protection Gloves (Beige, Large) - 1 Pair",
        "ratings": 3.8,
        "no_of_ratings": 206,
        "discount_price": 179.0,
        "actual_price": 299.0
    },
    {
        "name": "Soptool 8-inch Manual Wooden Salt & Pepper Grinder Crusher, Pepper Grinder Mill Shakers with Ceramic Rotor for Home & Kitc...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 399.0,
        "actual_price": 899.0
    },
    {
        "name": "Saree Pin/Hijab Pin Combo Pack of 12 pcs for Women/Girls - Assorted Multi Colors",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 295.0,
        "actual_price": 599.0
    },
    {
        "name": "Clovia Women's Comfort-Fit Active T-Shirt",
        "ratings": 3.4,
        "no_of_ratings": 7,
        "discount_price": 429.0,
        "actual_price": 999.0
    },
    {
        "name": "Women's Cotton Solid Maxi Night Gown",
        "ratings": 3.9,
        "no_of_ratings": 55,
        "discount_price": 542.0,
        "actual_price": 570.0
    },
    {
        "name": "Apnisanskriti 5 Mukhi Rudraksha Mala for Men/Women Wearing (6mm, Medium Bead Size, 108+1 Beads, Lab Certified) - Natural B...",
        "ratings": 3.8,
        "no_of_ratings": 24,
        "discount_price": 399.0,
        "actual_price": 799.0
    },
    {
        "name": "ACTION Dotcom DC-3101 Men's White Synthetic Leather Formal Shoes - EC-DC-3101-Parrent",
        "ratings": 3.9,
        "no_of_ratings": 21,
        "discount_price": 1119.0,
        "actual_price": 2699.0
    },
    {
        "name": "Duke Stardust Men Slim Fit Stretchable Jeans",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1649.0,
        "actual_price": 2749.0
    },
    {
        "name": "Tupperware Plastic Fliptop Water Bottle Set, 750ml, 2-Pieces (Color May Vary)",
        "ratings": 4.4,
        "no_of_ratings": 332,
        "discount_price": 512.0,
        "actual_price": 599.0
    },
    {
        "name": "Sanvatsar Ladkewale/Betewale/Mundewale/Dulha Morpankh Gold Plated Brouch/Brooch/Brooches Pin Pack for Men & Women",
        "ratings": 4.1,
        "no_of_ratings": 135,
        "discount_price": 1799.0,
        "actual_price": 2499.0
    },
    {
        "name": "GLAMORAS Women Girls Viscose Spandex Padded Non Wired Halter Neck Camisole, Size-M",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "Puma Men's Regular Fit T-Shirt",
        "ratings": 3.8,
        "no_of_ratings": 12,
        "discount_price": 689.0,
        "actual_price": 1499.0
    },
    {
        "name": "Acnos Blue dial and Silver Steel Plated Strap Analog Watch for Girl and Women Pack of - 1",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 310.0,
        "actual_price": 1999.0
    },
    {
        "name": "ORLOV® Jaguar HUD Car Phone Holder Leopard Design Cellphone GPS Stand 360 Degree Mount Adjustable Clip Holder Accessories ...",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Campus Sutra Men's Regular Fit Denim Jeans",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 759.0,
        "actual_price": 1899.0
    },
    {
        "name": "Good Friends Boys PU and Leather Brown Sling Bag for 12-inch iPads and Tabets",
        "ratings": 3.6,
        "no_of_ratings": 7,
        "discount_price": 719.0,
        "actual_price": 1599.0
    },
    {
        "name": "Zeel Clothing Women's Silk Semi stitched Lehenga Choli (7031-Blue-Wedding-Bridal-Heavy-Lehenga_Blue_Free Size)",
        "ratings": 5.0,
        "no_of_ratings": 8,
        "discount_price": 5699.0,
        "actual_price": 9999.0
    },
    {
        "name": "Pure Luxuries London Women Tan Solid Genuine Leather Chatham Handbag",
        "ratings": 4.3,
        "no_of_ratings": 7,
        "discount_price": 4880.0,
        "actual_price": 12200.0
    },
    {
        "name": "BSB HOME Pure Cotton 120 GSM Reversible Soft Lightweight Printed Single Bed Blanket/AC Dohar/Skin Friendly Dohar-220x152 c...",
        "ratings": 3.8,
        "no_of_ratings": 15,
        "discount_price": 499.0,
        "actual_price": 1499.0
    },
    {
        "name": "NIVIA Spirit Running Spikes",
        "ratings": 4.1,
        "no_of_ratings": 13,
        "discount_price": 1395.0,
        "actual_price": 1470.0
    },
    {
        "name": "P.N. Gadgil & Sons 1832-Gold Silver Diamonds.P N Gadgil & Sons Ltd Gold 24 Ct (995) Laxmi Coin (0.5Grams) (Gold-Laxmi-Coi...",
        "ratings": 4.8,
        "no_of_ratings": 11,
        "discount_price": 3675.0,
        "actual_price": 5717.0
    },
    {
        "name": "FRIZZIN - Mini Pepper Grinder Crusher Mill Stainless Steel Hand Thumb Press Set Machine with Stylish Design for Grinding S...",
        "ratings": 4.6,
        "no_of_ratings": 21,
        "discount_price": 387.0,
        "actual_price": 1599.0
    },
    {
        "name": "Adidas Mens Runfalcon 2.0 Running Shoe",
        "ratings": 4.0,
        "no_of_ratings": 1019,
        "discount_price": 3174.87,
        "actual_price": 6599.0
    },
    {
        "name": "Miraggio Penelope Solid Tote Bag for Women",
        "ratings": 4.7,
        "no_of_ratings": 9,
        "discount_price": 2624.0,
        "actual_price": 3499.0
    },
    {
        "name": "RCMB Creations Stainless Steel Style Classic Ring Engravable Heavy Polished for Boys, Men's (Black)",
        "ratings": 2.7,
        "no_of_ratings": 5,
        "discount_price": 224.0,
        "actual_price": 499.0
    },
    {
        "name": "RangTeq Expanding Cheque Book Holder Travelling Document Bag- 12 Section - Black & Blue",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 265.0,
        "actual_price": 499.0
    },
    {
        "name": "KSUT Pink Kota Doria Bandhej Foil Printed Kurta with Third Quarter Sleeves.",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 750.0,
        "actual_price": 2999.0
    },
    {
        "name": "Safari Glimpse 4W Set of 3 (56 cm + 69 cm + 79 cm) Wine Red Hardsided Trolley",
        "ratings": 4.2,
        "no_of_ratings": 19,
        "discount_price": 8675.0,
        "actual_price": 32997.0
    },
    {
        "name": "DREAMRAX Ayesha Cursive Gold & Silver Name Pendant Necklace, Best Jewelry Gift for Girls.",
        "ratings": 3.8,
        "no_of_ratings": 42,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "Shifaa Enterprise Large Canvas Mesh Eco Friendly Grocery Shopping Bags with Strong Reinforced Handles, Thick Base for Frui...",
        "ratings": 4.2,
        "no_of_ratings": 172,
        "discount_price": 399.0,
        "actual_price": 699.0
    },
    {
        "name": "LVA CREATIONS Fine pure Silver Currency Note coin bar of 200 with 999 Purity for gift in happy birthday gift & happy anniv...",
        "ratings": 3.9,
        "no_of_ratings": 8,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "The Shopoholic Analogue Black Dial Magnetic Belt Women's Watch",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 284.0,
        "actual_price": 1299.0
    },
    {
        "name": "Fabricorn Plain High Low Hem Cotton Tshirt for Women",
        "ratings": 4.0,
        "no_of_ratings": 1080,
        "discount_price": 360.0,
        "actual_price": 1199.0
    },
    {
        "name": "ADISA Women's & Girls' Sling Bag",
        "ratings": 4.0,
        "no_of_ratings": 1549,
        "discount_price": 399.0,
        "actual_price": 1499.0
    },
    {
        "name": "MESH MASTERS Air Cooler Plain Grass_Cooling Pads_Wood Wool_18 x 26 Inches_Set Of 3 Pack_Suitable For All Desert Coolers MM...",
        "ratings": 2.8,
        "no_of_ratings": 2,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "APN Girls Crop TOP Polyster Pack of 1",
        "ratings": 3.0,
        "no_of_ratings": 4,
        "discount_price": 245.0,
        "actual_price": 699.0
    },
    {
        "name": "Frantic Velvet 10 ltrs Kids School/Nursery/Picnic/Carry/Travelling Bag - 2 to 5 Year Age",
        "ratings": 3.9,
        "no_of_ratings": 5251,
        "discount_price": 299.0,
        "actual_price": 749.0
    },
    {
        "name": "Keycare® Silicone Key Cover and Keyring Compatible for MG Hector New Smart Key",
        "ratings": 4.2,
        "no_of_ratings": 3,
        "discount_price": 325.0,
        "actual_price": 799.0
    },
    {
        "name": "Jaipur Kurti Women's Regular Fit Cotton Trousers",
        "ratings": 3.9,
        "no_of_ratings": 42,
        "discount_price": 539.0,
        "actual_price": 1249.0
    },
    {
        "name": "WomenSky Stylish Traditional Gold Polished Kamarpatta, Kamar Chain, Tagdi, Kardhani, Bellychain, Kamarband, Vaddanam Waist...",
        "ratings": 3.7,
        "no_of_ratings": 149,
        "discount_price": 279.0,
        "actual_price": 1999.0
    },
    {
        "name": "6 Pairs Round Bra Inserts Pads,URSMART Removable and washable Bra Cups Inserts for Bikinis Top Swimsuit Sport Bra",
        "ratings": 4.4,
        "no_of_ratings": 689,
        "discount_price": 275.0,
        "actual_price": 999.0
    },
    {
        "name": "LipiWorld® 25 AC 3D Auto Remote Control (Old Remote Exactly Same Remote Will Only Work) Compatible for Mitsubishi AC",
        "ratings": 3.5,
        "no_of_ratings": 13,
        "discount_price": 399.0,
        "actual_price": 799.0
    },
    {
        "name": "BSE 350W BOSH Star Hand Blender Mixer (King Black)",
        "ratings": 3.8,
        "no_of_ratings": 156,
        "discount_price": 1148.0,
        "actual_price": 1999.0
    },
    {
        "name": "Myynti Silicone Earring Backs Stopper Pad for Girls Ladies Women Ear Lobe Support Patches for Heavy Earrings Transparent P...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 233.0,
        "actual_price": 599.0
    },
    {
        "name": "HAVAI Honeycomb Pad - Set of 3 - for USHA Dynamo 70 Litre Desert Cooler",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1690.0,
        "actual_price": 2190.0
    },
    {
        "name": "Eego Italy Heavy Duty Genuine Leather Steel Toe Safety Boots",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 999.0
    },
    {
        "name": "Ruzen's Handcrafted Striped Jute Tote Bag - Vegan and Animal-Friendly, Perfect for the Modern Woman's Everyday Style Multi...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 2000.0
    },
    {
        "name": "Marka 20 Gram Natural Aquamarine Rough Stone Aquamarine Gemstone Aquamarine Raw Crystal Aquamarine Rough Gemstone Aquamari...",
        "ratings": 2.7,
        "no_of_ratings": 5,
        "discount_price": 251.0,
        "actual_price": 599.0
    },
    {
        "name": "Kajal Dream Cool Multicolor Printed 50 Inches LED TV Cover ( PVC) fit for All Brands Every Models P-06",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 389.0,
        "actual_price": 999.0
    },
    {
        "name": "Go Vegan Raw Basil Seeds for weight loss - 300gm | Sabja Seed, Takmuria Seeds 300g (Jar Pack)",
        "ratings": 4.1,
        "no_of_ratings": 129,
        "discount_price": 210.0,
        "actual_price": 499.0
    },
    {
        "name": "Auto Hub Maruti Suzuki Swift (Model : 2018-Till Date) Car Cover Water Resistant / Swift New Cover Water Resistant / Swift ...",
        "ratings": 4.6,
        "no_of_ratings": 2,
        "discount_price": 899.0,
        "actual_price": 1999.0
    },
    {
        "name": "ZUPERIA Diamond Studded Analogue White Dial Rose Gold Watch with Two Hearts Bracelet",
        "ratings": 3.4,
        "no_of_ratings": 16,
        "discount_price": 329.0,
        "actual_price": 1299.0
    },
    {
        "name": "Priyaasi American Diamond Necklace Set for Women with Earrings | Trendy Gifts for Women & Girls",
        "ratings": 4.1,
        "no_of_ratings": 453,
        "discount_price": 1820.0,
        "actual_price": 7000.0
    },
    {
        "name": "Intex 164 cm (65 inches) 4K Ultra HD Smart LED TV Smart LED-WOS6501U (Black)",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 61490.0,
        "actual_price": 116999.0
    },
    {
        "name": "ExcluZiva Gallery Set of 1 Girls Unicorn Eye Mask Soft Breathable Plush Sleeping Mask Blindfold Eye Cover Elastic Band wit...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 297.0,
        "actual_price": 599.0
    },
    {
        "name": "IRIS Fitness 24 kgs Adjustable Dumbbell with Fast Adjustable Weight Plates for Body Workout Home Gym (1 Pc)",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 7999.0,
        "actual_price": 40000.0
    },
    {
        "name": "ADISA CL029 women clutch/sling bag",
        "ratings": 3.9,
        "no_of_ratings": 885,
        "discount_price": 399.0,
        "actual_price": 1499.0
    },
    {
        "name": "M&D Women's Cotton Straight Kurta",
        "ratings": 3.9,
        "no_of_ratings": 1924,
        "discount_price": 424.0,
        "actual_price": 1299.0
    },
    {
        "name": "ABOF Men's Slim Fit Stretchable Jeans",
        "ratings": 3.1,
        "no_of_ratings": 11,
        "discount_price": 949.0,
        "actual_price": 2099.0
    },
    {
        "name": "Jyokrish Combo Metal Silver Elephant & Turtle Blue Evil eye Glossy Black beads Chain Anklet |For Women |Girls Nazariya |Na...",
        "ratings": 4.3,
        "no_of_ratings": 8,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Vector X Fizer Indoor Football Shoes (Green-Blue)",
        "ratings": 4.2,
        "no_of_ratings": 206,
        "discount_price": 699.0,
        "actual_price": 769.0
    },
    {
        "name": "Butterflies Women Handbag",
        "ratings": 3.8,
        "no_of_ratings": 390,
        "discount_price": 899.0,
        "actual_price": 2399.0
    },
    {
        "name": "Kidsville Boy Shorts",
        "ratings": 4.0,
        "no_of_ratings": 112,
        "discount_price": 336.02,
        "actual_price": 1899.0
    },
    {
        "name": "Sia Technology Hikvision 2MP 8 Ch HD DVR & 2MP 6 Bullet Camera HD Combo kit, Include All Require Accessories for 6 Camera ...",
        "ratings": 4.2,
        "no_of_ratings": 18,
        "discount_price": 18499.0,
        "actual_price": 23000.0
    },
    {
        "name": "MIRCHI FASHION Women's Stylish Chiffon Leaf Printed Saree with Blouse Piece",
        "ratings": 4.0,
        "no_of_ratings": 11,
        "discount_price": 479.0,
        "actual_price": 2799.0
    },
    {
        "name": "Puma Unisex-Adult Flex Essential Puma Black-Puma Black Running Shoe- 7 UK (36526801)",
        "ratings": 3.9,
        "no_of_ratings": 20,
        "discount_price": 1900.0,
        "actual_price": 2999.0
    },
    {
        "name": "RAWHYD Leather Co Hunter Brown Leather Men's & Women's Money Clip",
        "ratings": 4.1,
        "no_of_ratings": 487,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Malabar Gold & Diamonds 22k (916) 10 gm Yellow Gold Coin",
        "ratings": 4.6,
        "no_of_ratings": 177,
        "discount_price": 58149.0,
        "actual_price": 61879.0
    },
    {
        "name": "MACTREE Men's Genuine Leather Lace Up Shoes for Formal Wear (Black Colored)",
        "ratings": 3.6,
        "no_of_ratings": 79,
        "discount_price": 848.0,
        "actual_price": 2099.0
    },
    {
        "name": "Zaveri Pearls Drop Earrings for Women (Golden) (ZPFK9029)",
        "ratings": 4.0,
        "no_of_ratings": 38,
        "discount_price": 322.0,
        "actual_price": 1663.0
    },
    {
        "name": "omtex Athletic Rome Cotton Stretchable Supporter Back Covered with Cup Pocket, Ideal for Workout and Sports Quick Dry Mois...",
        "ratings": 2.5,
        "no_of_ratings": 3,
        "discount_price": 300.0,
        "actual_price": 499.0
    },
    {
        "name": "Fusefit Men's Running Shoes",
        "ratings": 3.8,
        "no_of_ratings": 121,
        "discount_price": 899.0,
        "actual_price": 3199.0
    },
    {
        "name": "FRESH FEET Men's Cotton Ankle Length Socks, Free Size, Pack of 6",
        "ratings": 4.2,
        "no_of_ratings": 4175,
        "discount_price": 434.0,
        "actual_price": 999.0
    },
    {
        "name": "Harivar Mart Barbecue Basket Foldable for Roast BBQ Portable Grilling Basket with Wood Handle for Fish,Vegetables, Steak,S...",
        "ratings": 3.4,
        "no_of_ratings": 44,
        "discount_price": 499.0,
        "actual_price": 1098.0
    },
    {
        "name": "The Quasar Store Mixer Chutney Jar (250 ml,500 ml) Mixer Grinder Jar (1 Mini Unique Jar 1 Medium Jar) Suitable for all Loc...",
        "ratings": 3.5,
        "no_of_ratings": 199,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Okos Crystal Jewellery Valentines Day Special Rose Gold Plated Linking Hearts Adjustable Alloy Bracelet Beautified With Gr...",
        "ratings": 3.1,
        "no_of_ratings": 8,
        "discount_price": 189.0,
        "actual_price": 999.0
    },
    {
        "name": "Butterflies Women's Super Saver Combo (BNS WB0338)",
        "ratings": 4.2,
        "no_of_ratings": 12,
        "discount_price": 1199.0,
        "actual_price": 4899.0
    },
    {
        "name": "Karatcart Gold Plated Pearl Beads Kundan Bridal Necklace Set For Womens",
        "ratings": 3.1,
        "no_of_ratings": 6,
        "discount_price": 1612.0,
        "actual_price": 8050.0
    },
    {
        "name": "Amazon Brand - Symbol Cotton Regular Men's Kurtas",
        "ratings": 4.1,
        "no_of_ratings": 447,
        "discount_price": 649.0,
        "actual_price": 2199.0
    },
    {
        "name": "Charms Rudraksh Mala Shiva God Gold Plated Rudraksh Mala Chain Long 28 Inches For Unisex",
        "ratings": 3.8,
        "no_of_ratings": 7,
        "discount_price": 199.0,
        "actual_price": 1999.0
    },
    {
        "name": "Leather Police Shoes for Men",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 1249.0,
        "actual_price": 1949.0
    },
    {
        "name": "MG Tech Tummy Tucker Women Shape wear with 3 Bra Extender, & Tummy Shaper for Women, Body Shaper, Tummy tucker Women Belly...",
        "ratings": 4.9,
        "no_of_ratings": 33,
        "discount_price": 479.0,
        "actual_price": 1199.0
    },
    {
        "name": "Myvn 20W Flash Super Vooc Micro Usb 7 Pin Data Sync Fast Charging Cable For Cellular Phones Oppo Reno/Oppo F9 Pro/ F11 Pro...",
        "ratings": 4.1,
        "no_of_ratings": 3519,
        "discount_price": 329.0,
        "actual_price": 999.0
    },
    {
        "name": "Rudrika Fashion Women's Soft Pure Cotton All Over Print Maxi Nighties & Nightdresses/Sleep & Lounge Wear Nighty,Comfortabl...",
        "ratings": 3.9,
        "no_of_ratings": 32,
        "discount_price": 497.0,
        "actual_price": 999.0
    },
    {
        "name": "CP PLUS Wired 1080p FHD 2.4MP Security Camera",
        "ratings": 3.3,
        "no_of_ratings": 159,
        "discount_price": 10989.0,
        "actual_price": 29999.0
    },
    {
        "name": "InstaCuppa Rechargeable Mini Electric Chopper - Stainless Steel Blades, One Touch Operation, For Mincing Garlic, Ginger, O...",
        "ratings": 3.7,
        "no_of_ratings": 49,
        "discount_price": 999.0,
        "actual_price": 1499.0
    },
    {
        "name": "LOXBEE 2PCS Realistic Look Fake Dummy Security CCTV Bullet Camera with LED Light Indication, Silver (2)",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 599.0,
        "actual_price": 2139.0
    },
    {
        "name": "V-Guard Arido R35 H Air Cooler | 35 Litre | Air Delivery - 1100 m3/h | Two Years Warranty on Motor & Pump",
        "ratings": 3.4,
        "no_of_ratings": 56,
        "discount_price": 7138.0,
        "actual_price": 8800.0
    },
    {
        "name": "SIRIL Women's Lycra Saree Shapewear Petticoat Pack of 2",
        "ratings": 3.7,
        "no_of_ratings": 417,
        "discount_price": 419.0,
        "actual_price": 1497.0
    },
    {
        "name": "Orei HDS-104 1x4 Powered Splitter up to Full HD 1080P & 3D Support with EDID Control - 1 Source onto 4 Displays",
        "ratings": 4.4,
        "no_of_ratings": 4830,
        "discount_price": 2064.0,
        "actual_price": 9844.0
    },
    {
        "name": "Polycab Eleganz Plus 1200 mm Ceiling Fan (Pearl Indigo Blue)",
        "ratings": 3.9,
        "no_of_ratings": 14,
        "discount_price": 3501.0,
        "actual_price": 4700.0
    },
    {
        "name": "Decode LR4121 Silver",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 234.0,
        "actual_price": 2199.0
    },
    {
        "name": "TELESIN Techlife Multi-Function Battery Charging Dock Storage Box for GoPro Hero 5/6/7",
        "ratings": 4.2,
        "no_of_ratings": 58,
        "discount_price": 1349.0,
        "actual_price": 1999.0
    },
    {
        "name": "LEWEL Men's Hooded Buttoned Down Checked T-Shirt (Olive Green)",
        "ratings": 3.3,
        "no_of_ratings": 127,
        "discount_price": 455.0,
        "actual_price": 1999.0
    },
    {
        "name": "PunnkFunnk Matt21 in Ear Wired Earphone with Mic, Deep Bass Stereo Wired Earphone, All Device Support (White)",
        "ratings": 3.6,
        "no_of_ratings": 11,
        "discount_price": 155.0,
        "actual_price": 1299.0
    },
    {
        "name": "Aquadpure complete Ro water purifier filter service kit with all accessories",
        "ratings": 4.3,
        "no_of_ratings": 244,
        "discount_price": 1299.0,
        "actual_price": 3299.0
    },
    {
        "name": "Fashion2wear Women's Stylish Fit and Flare Fashionable Vichitra Silk Gown for Girls",
        "ratings": 3.1,
        "no_of_ratings": 4,
        "discount_price": 849.0,
        "actual_price": 999.0
    },
    {
        "name": "AFJ GOLD 1 Gram Golden Gold Plated Copper Traditional Designer Trendy Plain Bangles Sets for Women (Bangle 6, 2.4)",
        "ratings": 4.0,
        "no_of_ratings": 24,
        "discount_price": 450.0,
        "actual_price": 1940.0
    },
    {
        "name": "Levi's Women's 711 Skinny Fit Jeans",
        "ratings": 3.9,
        "no_of_ratings": 25,
        "discount_price": 899.0,
        "actual_price": 2999.0
    },
    {
        "name": "BlueRigger Ultra Series 8K HDMI to HDMI Cable with 48Gbps Speed, (35 Feet / 10.5 Meter) Supports 8K@60HZ, 4K@120HZ, 1080p ...",
        "ratings": 4.3,
        "no_of_ratings": 540,
        "discount_price": 1049.0,
        "actual_price": 37073.0
    },
    {
        "name": "ZUPERIA Analogue Mens Black DIAL Stainless Steel Chain Watch for Boys",
        "ratings": 1.5,
        "no_of_ratings": 2,
        "discount_price": 249.0,
        "actual_price": 1999.0
    },
    {
        "name": "crocs Unisex-Child Classic Clog",
        "ratings": 4.0,
        "no_of_ratings": 346,
        "discount_price": 1058.0,
        "actual_price": 1995.0
    },
    {
        "name": "Clovia Women's Satin 3/4 Sleeves Button Down Short Nighty",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 529.0,
        "actual_price": 1399.0
    },
    {
        "name": "Centrino Men's 3691",
        "ratings": 3.6,
        "no_of_ratings": 72,
        "discount_price": 679.0,
        "actual_price": 2299.0
    },
    {
        "name": "CLYMB Premium Men's Lightweight Casual Stylish Rubber Clogs for Mens Boys",
        "ratings": 2.8,
        "no_of_ratings": 82,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Clovia Women's Cotton Floral Knee Length Nightdress",
        "ratings": 4.3,
        "no_of_ratings": 40,
        "discount_price": 574.0,
        "actual_price": 699.0
    },
    {
        "name": "OCTOPUSPRIME Headlamp Headlight Weatherproof LED with Inbuilt Flash Light Rechargeable Battery Torch Headlamp Head Lamp To...",
        "ratings": 3.7,
        "no_of_ratings": 188,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "P.C. Chandra Jewellers 24k (995) 10 gm Yellow Gold Coin",
        "ratings": 3.8,
        "no_of_ratings": 6,
        "discount_price": 62583.0,
        "actual_price": 75517.0
    },
    {
        "name": "Oculy (Pack of 6) Japanese Microfiber Cloths with 1x Spray Spectacle & Camera Lens Cleaner | Professional & Essential Liqu...",
        "ratings": 3.9,
        "no_of_ratings": 50,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "RUDRAYA ABS Plastic Multipurpose Wall Mounted Magic Holder 4 Slot Broom Holder and Mop Organizer Storage 4 Position 5 Hook...",
        "ratings": 3.7,
        "no_of_ratings": 576,
        "discount_price": 449.0,
        "actual_price": 699.0
    },
    {
        "name": "ALIZA Gorgeous Handbag for Girls and Women",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 616.0,
        "actual_price": 2199.0
    },
    {
        "name": "Baggit Women's Sling Bag - Small",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 954.0,
        "actual_price": 1590.0
    },
    {
        "name": "Ambrane Unbreakable 60W / 3A Fast Charging 1.5m Braided Micro USB Cable for Smartphones, Tablets, Laptops & Other Micro US...",
        "ratings": 4.0,
        "no_of_ratings": 45983,
        "discount_price": 199.0,
        "actual_price": 299.0
    },
    {
        "name": "Pigeon by stovekraft Amaze Plus 1.5 Litre Electric Kettle, Black & Pigeon by Stovekraft Kessel 1.2-Litre Multi-Purpose Ket...",
        "ratings": 4.0,
        "no_of_ratings": 64,
        "discount_price": 1498.0,
        "actual_price": 2703.0
    },
    {
        "name": "CableCreation Type C to HDMI Cable, USB C to HDMI 4K@30Hz Cable Adapter for Home Office Laptop, Monitor, TV, Compatible wi...",
        "ratings": 3.9,
        "no_of_ratings": 13300,
        "discount_price": 1799.0,
        "actual_price": 1999.0
    },
    {
        "name": "LANCER Mens THUNDER-20 Grey Running Shoe - 7 UK (THUNDER-20LGR-ORG-7)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 874.0,
        "actual_price": 1399.0
    },
    {
        "name": "Pluto Accessories HDMI Splitter 1 x 4, 1 Input 4 Output HDMI Amplifier Switcher Box Hub Support 1080p",
        "ratings": 3.4,
        "no_of_ratings": 11,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Humidifier For Room RYLAN wooden Cool Mist Humidifiers Essential Oil Diffuser Aroma Air Humidifier with Colorful Change fo...",
        "ratings": 4.2,
        "no_of_ratings": 81,
        "discount_price": 549.0,
        "actual_price": 999.0
    },
    {
        "name": "Akari Plastic Emergency Light, Multicolour",
        "ratings": 3.5,
        "no_of_ratings": 51,
        "discount_price": 399.0,
        "actual_price": 499.0
    },
    {
        "name": "Lonik Instant Water Heater Water Geyser LTPL-9050 - Multicolour",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 1270.0,
        "actual_price": 3299.0
    },
    {
        "name": "Saudeep India Wooden Hand Carved Key Chains Elephant Pattern Multicoloured Set of 12",
        "ratings": 3.1,
        "no_of_ratings": 4,
        "discount_price": 377.0,
        "actual_price": 754.0
    },
    {
        "name": "MediPEDS Men's 4 Pack Diabetic Crew Socks",
        "ratings": 4.6,
        "no_of_ratings": 1982,
        "discount_price": 449.0,
        "actual_price": 800.0
    },
    {
        "name": "Arrow Newyork Men's Regular Polo Shirt (ANADOTS3812_Olive L)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 736.0,
        "actual_price": 1599.0
    },
    {
        "name": "WolkomHome Ring Type Car Steering Wheel Cover (Black Crock) for Maruti Alto 800 2019",
        "ratings": 4.0,
        "no_of_ratings": 35,
        "discount_price": 639.25,
        "actual_price": 899.0
    },
    {
        "name": "Ennoble Women High Waist Cotton Blend Bootcut Parallel Trouser Pants for Women Regular Fit, Straight Pants for Womens - Kh...",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1250.0,
        "actual_price": 1999.0
    },
    {
        "name": "TRS jewels Brass Double Layered Nose Ring 14K Yellow Gold Plated girls for women",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 1199.0
    },
    {
        "name": "Tiny Deal_15 Colors Contour Face Cream Makeup Concealer Palette + Make up Brush Matte Finish",
        "ratings": 2.7,
        "no_of_ratings": 8,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Fusefit Mens Scout 2.0 Running Shoes",
        "ratings": 3.5,
        "no_of_ratings": 29,
        "discount_price": 499.0,
        "actual_price": 2499.0
    },
    {
        "name": "Tynor Travel Pillow Urbane, Grey, Universal Size, 1 Unit",
        "ratings": 3.8,
        "no_of_ratings": 29,
        "discount_price": 1022.0,
        "actual_price": 1100.0
    },
    {
        "name": "JAISBOY Combo Set Gym Bag with Gym Gloves with Wrist Support Band and Shaker Bottle",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "1st Step Matte Collection BPA Free Polypropylene Hard Spout Sipper with Twin Handles for Easy Grip - Pink",
        "ratings": 3.7,
        "no_of_ratings": 32,
        "discount_price": 242.0,
        "actual_price": 269.0
    },
    {
        "name": "Tire Valve Stem Caps for Car, 12PCS Noctilucous Tire Air Caps Cover, Illuminated Auto Wheel Valve Stem Cap,Newly Upgraded ...",
        "ratings": 2.6,
        "no_of_ratings": 632,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "Marks & Spencer Women Briefs (Pack of 5)",
        "ratings": 4.2,
        "no_of_ratings": 29,
        "discount_price": 899.0,
        "actual_price": 1499.0
    },
    {
        "name": "Hidesign Limited Edition Women's Handbag",
        "ratings": 4.1,
        "no_of_ratings": 228,
        "discount_price": 1599.0,
        "actual_price": 3995.0
    },
    {
        "name": "BIBA Printed Band Collar Straight Fit Womens Kurta",
        "ratings": 3.4,
        "no_of_ratings": 7,
        "discount_price": 1379.0,
        "actual_price": 2299.0
    },
    {
        "name": "Campus Men's Artemis Running Shoes",
        "ratings": 3.9,
        "no_of_ratings": 990,
        "discount_price": 1329.0,
        "actual_price": 1899.0
    },
    {
        "name": "Xsquare Shoulder Handbag for Girls Ladies Women Printed (Grey and Black in Rose)",
        "ratings": 4.4,
        "no_of_ratings": 11,
        "discount_price": 689.0,
        "actual_price": 1999.0
    },
    {
        "name": "Brand Conquer Big Size Leather Clutch Crown Women Wallet | Unisex Wallet with Credit Card & Mobile Holder with Wristlet Ro...",
        "ratings": 4.1,
        "no_of_ratings": 1968,
        "discount_price": 474.0,
        "actual_price": 1999.0
    },
    {
        "name": "LOHAYA Air Conditioner Remote Compatible with Hitachi Split/Window AC Remote Control [Compatible for Hitachi AC Remote Con...",
        "ratings": 3.4,
        "no_of_ratings": 40,
        "discount_price": 449.0,
        "actual_price": 1199.0
    },
    {
        "name": "Classic Polo Mens Solid Half Sleeve Slim Fit Cotton Blend Polo Neck T-Shirt",
        "ratings": 3.7,
        "no_of_ratings": 139,
        "discount_price": 899.0,
        "actual_price": 999.0
    },
    {
        "name": "Adidas Men Running Shoes",
        "ratings": 3.4,
        "no_of_ratings": 112,
        "discount_price": 2428.0,
        "actual_price": 3999.0
    },
    {
        "name": "PUMA Men Noah Sneakers PUMA Black-PUMA White - 8",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 3599.0,
        "actual_price": 4499.0
    },
    {
        "name": "Honeymagic Derma Roller (0.5mm, 1mm, 1.5mm) with 540 Titanium Needles For Scalp, Face and Beard (1.00mm)",
        "ratings": 4.2,
        "no_of_ratings": 10,
        "discount_price": 179.0,
        "actual_price": 249.0
    },
    {
        "name": "ZELKEY Heavy Microfiber Cloth for Car Cleaning and Detailing, Double Sided, Extra Thick Plush Microfiber Towel Lint-Free, ...",
        "ratings": 4.6,
        "no_of_ratings": 26,
        "discount_price": 389.0,
        "actual_price": 1799.0
    },
    {
        "name": "Hapsford Cove Brown Tumb",
        "ratings": 4.2,
        "no_of_ratings": 20,
        "discount_price": 4274.0,
        "actual_price": 4499.0
    },
    {
        "name": "DHSVS Stainless Steel Round Dish Drainer | Dish Drying Rack | Dry Bartan Dish Weight - 2.00kg",
        "ratings": 3.8,
        "no_of_ratings": 19,
        "discount_price": 1299.0,
        "actual_price": 1998.0
    },
    {
        "name": "PURVAJA Women’s Co-Ords Midi Dress (Maxi-016-019)",
        "ratings": 4.2,
        "no_of_ratings": 16,
        "discount_price": 599.0,
        "actual_price": 3799.0
    },
    {
        "name": "Yantralay YT-S700 Phone Tripod Mount with Cold Shoe Mount for Microphone LED Light with 1/4'' Tripod Screw Compatible with...",
        "ratings": 4.0,
        "no_of_ratings": 403,
        "discount_price": 299.0,
        "actual_price": 449.0
    },
    {
        "name": "DIY Crafts 32 Pcs Deep Scratch Remover Car All Type Glass Headlight Windshield Polishing Shining Buffing Kit 3'' Wheel Cer...",
        "ratings": 3.1,
        "no_of_ratings": 17,
        "discount_price": 845.9,
        "actual_price": 3845.0
    },
    {
        "name": "RK HUB MEN'S LYCRA COTTTON DIGITAL PRINT CASUAL NEW SHIRT (Large, AADI LINE) (X-Large, DEVIL)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "Peluche The Doctor's Choice Silver Colored Cufflink and Brooch/Lapel Pin Set for Men",
        "ratings": 4.7,
        "no_of_ratings": 7,
        "discount_price": 1399.0,
        "actual_price": 2796.0
    },
    {
        "name": "Imou Ranger 2-D, 360° Coverage, AI Human Detection, Privacy Mode, Human Detection,1080P, Built-in Siren, Smart Tracking, P...",
        "ratings": 3.9,
        "no_of_ratings": 44,
        "discount_price": 2278.0,
        "actual_price": 7500.0
    },
    {
        "name": "Fedra Expandable Waterproof Polyester Lightweight 60 L Travel Duffle with 2 Wheels Purple",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 469.0,
        "actual_price": 2499.0
    },
    {
        "name": "KEEP CART Short Kurti for Women| Embroidered Straight Rayon Kurta | Round Neck Full Sleeves Short Kurti | Tunic Tops for W...",
        "ratings": 3.7,
        "no_of_ratings": 1115,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "fuerdanni Women's fd-3331200-latest Diamond black crystal glass Luxury Design Analog Watch",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "Harpa Basics Women's Striped Regular T-Shirt (GR6203A_White S)",
        "ratings": 3.6,
        "no_of_ratings": 4,
        "discount_price": 178.0,
        "actual_price": 999.0
    },
    {
        "name": "Cool Blue Aqua ro tap For All Water Purifier , 1 Piece.",
        "ratings": 4.1,
        "no_of_ratings": 1003,
        "discount_price": 139.0,
        "actual_price": 290.0
    },
    {
        "name": "HighSpark Silver Ball Earrings 92.5 Sterling Silver Plain Ball Stud Earrings for Women, Men, Boys & Girls",
        "ratings": 4.4,
        "no_of_ratings": 49,
        "discount_price": 474.0,
        "actual_price": 999.0
    },
    {
        "name": "ASIAN Men's Thar-08 Sports Running,Walking & Gym Shoes with Eva Sole Extra Jump Casual Sneaker Shoes for Men's & Boy's…",
        "ratings": 3.4,
        "no_of_ratings": 41,
        "discount_price": 538.0,
        "actual_price": 1249.0
    },
    {
        "name": "Generic Men's Silver Arrow Tie Bar Necktie Clip Clasp",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 670.0,
        "actual_price": 1340.0
    },
    {
        "name": "BASIC AYURVEDA Saraswatarishta Syrup 450ml- Natural Formulation With Gold | Ayurvedic Supplements For Support Good Health",
        "ratings": 4.0,
        "no_of_ratings": 242,
        "discount_price": 173.0,
        "actual_price": 185.0
    },
    {
        "name": "Wireless Bluetooth Headphones Earphones for Oneplus 8T 8 8Pro 7 Pro / 7T / 7T Pro Nord And Oneplus 3 / 3T / 5 / 5T / 6 / 6...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 590.0,
        "actual_price": 930.0
    },
    {
        "name": "MR.MANDAVIYA Red Leather Strap Wrist Watch for Girls and Womens",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 159.0,
        "actual_price": 249.0
    },
    {
        "name": "Jewelswonder Stone Pyrite /Raw Stone /Crystal 500 Grams (Golden, 3 x 3)",
        "ratings": 4.3,
        "no_of_ratings": 5,
        "discount_price": 2099.0,
        "actual_price": 4999.0
    },
    {
        "name": "Johny Kingdom Women's Cotton Shorts | (Pack of 3)",
        "ratings": 3.9,
        "no_of_ratings": 257,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "ALGERA Premium Embroidery Patch With Trendy Stylish Designer A-Line Side Slit Cotton Casual Latest Kurta Set For WomenGroup2",
        "ratings": 4.1,
        "no_of_ratings": 63,
        "discount_price": 649.0,
        "actual_price": 1299.0
    },
    {
        "name": "Puma Men's Shoes",
        "ratings": 3.7,
        "no_of_ratings": 763,
        "discount_price": 2259.83,
        "actual_price": 3999.0
    },
    {
        "name": "Brain Freezer Shockproof Silicone Remote Case Compatible with Fire TV Stick Lite Anti-Lost with Loop Remote Cover Black (R...",
        "ratings": 4.3,
        "no_of_ratings": 90,
        "discount_price": 295.0,
        "actual_price": 690.0
    },
    {
        "name": "SYGA Baby Tights For Girls Soft Cotton Infant Leggings Toddler Solid Knit Socks Newborn Warm Crochet Pants Stockings - White",
        "ratings": 4.2,
        "no_of_ratings": 50,
        "discount_price": 419.0,
        "actual_price": 999.0
    },
    {
        "name": "XOYA Printed Short Night Dress for Women with Pocket/Cotton Nighty",
        "ratings": 3.9,
        "no_of_ratings": 155,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "ENINAS Monthly Blankets Soft Floral Memory Blankets Girls Boys Cute Photo Background Blankets White (Rose Flower)",
        "ratings": 5.0,
        "no_of_ratings": 8,
        "discount_price": 599.0,
        "actual_price": 1899.0
    },
    {
        "name": "MORADO® Glace Cotton Single Bed Quilt Cover/Duvet Cover/Rajai Cover/Blanket Cover with Zipper (60X90 Inches, Bottle Green)",
        "ratings": 3.8,
        "no_of_ratings": 26,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "FLORA AND CO Stainless Steel Mixer Chutney Jar 400ML Capacity (Plastic Base)",
        "ratings": 4.0,
        "no_of_ratings": 197,
        "discount_price": 425.0,
        "actual_price": 510.0
    },
    {
        "name": "ikis - Micro HDMI Adapter, HDMI Female (Type-A) to Micro HDMI Male (Type-D) for Raspberry pi 4 Gold Plated Connector Conve...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 120.0,
        "actual_price": 450.0
    },
    {
        "name": "AVEDIA Sink Water Filter Faucet, Faucet Filter, 360° Rotating FaucFilters Purifier Kitchen Tap Filtration Removes Chlorine...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Lana Paws I Have The Best Daddy Dog Bandana Scarf (M-L)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 399.0,
        "actual_price": 450.0
    },
    {
        "name": "tbh Jute Lunch Bag | Tiffin Bag | Multi Purpose Tote Bag | Hand Bag - Eco-Friendly, Reusable",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 150.0,
        "actual_price": 250.0
    },
    {
        "name": "Nike Womens WMNS Downshifter 11 Running",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 2796.0,
        "actual_price": 3995.0
    },
    {
        "name": "Clovia Women's Nylon Non Padded Wire Free Full Coverage Bra Black",
        "ratings": 3.9,
        "no_of_ratings": 147,
        "discount_price": 259.0,
        "actual_price": 599.0
    },
    {
        "name": "Anand India Meru Ring Adjustable Tortoise Ring for Men and Women for Good Luck",
        "ratings": 3.1,
        "no_of_ratings": 77,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Peora Black Clutch Purses for Women Stone Studded Handmade Handbags Party Bridal Clutch",
        "ratings": 3.2,
        "no_of_ratings": 3,
        "discount_price": 3999.0,
        "actual_price": 19495.0
    },
    {
        "name": "ILLI LONDON Women's Slim FIT Crop Tops",
        "ratings": 4.0,
        "no_of_ratings": 41,
        "discount_price": 399.0,
        "actual_price": 1499.0
    },
    {
        "name": "Amazon Brand - House & Shields Men Polo Shirt",
        "ratings": 3.7,
        "no_of_ratings": 993,
        "discount_price": 399.0,
        "actual_price": 899.0
    },
    {
        "name": "Gala Plastic Popular Spin Mop With Easy Wheels, Long handle, Microfibre Refill and Water Outlet in Blue with White, Standa...",
        "ratings": 4.2,
        "no_of_ratings": 3607,
        "discount_price": 949.0,
        "actual_price": 1999.0
    },
    {
        "name": "GUESS Gradient Butterfly Women's Sunglasses 7346 PE 34|58|Brown Color Lens - Pack of 1",
        "ratings": 3.8,
        "no_of_ratings": 32,
        "discount_price": 2198.0,
        "actual_price": 9990.0
    },
    {
        "name": "AZZARO BLACK Men's Office wear Synthetic Leather Formal Shoes",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 749.0,
        "actual_price": 2199.0
    },
    {
        "name": "EXOTIC Sling Bag For Women's/Girl",
        "ratings": 4.1,
        "no_of_ratings": 1034,
        "discount_price": 429.0,
        "actual_price": 1399.0
    },
    {
        "name": "Usha Striker Hi-Speed 400 mm 3 Blades Wall Fan (White)",
        "ratings": 3.7,
        "no_of_ratings": 43,
        "discount_price": 2590.0,
        "actual_price": 3295.0
    },
    {
        "name": "GAZELLE ACTIVE Feel Good King Multi Colored Printed Dri Fit T-Shirt for Adults",
        "ratings": 2.5,
        "no_of_ratings": 17,
        "discount_price": 197.0,
        "actual_price": 499.0
    },
    {
        "name": "Lali prints Kids Quilt Motu patlu A.C Blanket Single Bed Size Dohar (Microfibre, Multicoloured, Lightweight, Pack of 1)",
        "ratings": 3.9,
        "no_of_ratings": 671,
        "discount_price": 445.0,
        "actual_price": 999.0
    },
    {
        "name": "Grousale Uber Series UHD 5 MP Outdoor WiFi 1080p Motorized Pan/Tilt Live View Color Night Vision IP66 Waterproof BuiltIn M...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 4099.0,
        "actual_price": 8250.0
    },
    {
        "name": "Adidas Men T-Shirt",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1099.0,
        "actual_price": 1999.0
    },
    {
        "name": "Jack & Jones Men Trunks",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 899.0,
        "actual_price": 1499.0
    },
    {
        "name": "new balance Men's Regular Fit Short Sleeve Top",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 519.0,
        "actual_price": 2599.0
    },
    {
        "name": "Vellinto Royal Look Shoes for Men ll Casual Shoes for Men ll Latest Patent Leather Zip/Chain Boots for Men",
        "ratings": 3.9,
        "no_of_ratings": 620,
        "discount_price": 499.0,
        "actual_price": 1299.0
    },
    {
        "name": "Yellow Chimes Bracelet for women and Girls Pink white Floral Bracelets for Women Bridal Wedding Bracelet Fabric Wrist Band...",
        "ratings": 4.4,
        "no_of_ratings": 5,
        "discount_price": 227.0,
        "actual_price": 945.0
    },
    {
        "name": "Red Chief Men's Leather Boots Casual Shoes",
        "ratings": 4.0,
        "no_of_ratings": 1126,
        "discount_price": 3863.0,
        "actual_price": 4545.0
    },
    {
        "name": "Baggit Women's Sling Bag - Large",
        "ratings": 3.8,
        "no_of_ratings": 367,
        "discount_price": 699.0,
        "actual_price": 1690.0
    },
    {
        "name": "ezpz Mini Feeding Set - 100% Silicone Suction Plate, Fork & Spoon for Infants + Toddlers (Pewter)",
        "ratings": 4.4,
        "no_of_ratings": 18,
        "discount_price": 2879.1,
        "actual_price": 3199.0
    },
    {
        "name": "DOMO nHance VR3 Fold VR Headset & Universal Virtual Reality 3D, 40(mm) Lens Capable of Changing IPD (Interpulillary Distan...",
        "ratings": 2.4,
        "no_of_ratings": 5,
        "discount_price": 349.0,
        "actual_price": 2290.0
    },
    {
        "name": "GIRISA Analog Women's Watch (Black Dial)",
        "ratings": 3.8,
        "no_of_ratings": 403,
        "discount_price": 189.0,
        "actual_price": 399.0
    },
    {
        "name": "Royal Export Women's Flared Floral Printed Salwar Suit Set",
        "ratings": 3.9,
        "no_of_ratings": 33,
        "discount_price": 899.0,
        "actual_price": 4999.0
    },
    {
        "name": "Tweens Women�s Heavily Padded Underwired T-Shirt Bra",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 119.0,
        "actual_price": 350.0
    },
    {
        "name": "Shree Bhavani Enterprise Crystal Diamond Watch Women Love Heart Lady Bracelet Analog Watch",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 999.0
    },
    {
        "name": "MARK & ALBERT Men's Checkered Cotton Formal Shirt Black",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1399.0,
        "actual_price": 3999.0
    },
    {
        "name": "ayushicreationa Women Cotton G-Sting Low Rise Sexy and Hot Thong Lingerie Panties Briefs Free Size-Pack of 1",
        "ratings": 3.8,
        "no_of_ratings": 24,
        "discount_price": 219.0,
        "actual_price": 499.0
    },
    {
        "name": "HOUSEHOLD CULTURE Multipurpose 18 Pcs Food Snack Plastic Bag Clip Sealer/Packet Sealer Clamps/Manual Vacuum Bag Sealer/Foo...",
        "ratings": 4.3,
        "no_of_ratings": 251,
        "discount_price": 179.0,
        "actual_price": 299.0
    },
    {
        "name": "Puma Mens Cario Idp Running Shoes",
        "ratings": 3.2,
        "no_of_ratings": 53,
        "discount_price": 1799.0,
        "actual_price": 3999.0
    },
    {
        "name": "wipro Garnet 12W Emergency LED Bulb (White, Standard, NE1201) - Pack of 2",
        "ratings": 3.8,
        "no_of_ratings": 172,
        "discount_price": 949.0,
        "actual_price": 1980.0
    },
    {
        "name": "Campus Gents Camp Marlon Running Shoes",
        "ratings": 4.1,
        "no_of_ratings": 10,
        "discount_price": 1299.0,
        "actual_price": 1499.0
    },
    {
        "name": "Twist99 Mens Printed Premium Italinan Oxford Linen Half Sleeve Regular Fit Shirt",
        "ratings": 3.9,
        "no_of_ratings": 18,
        "discount_price": 1285.0,
        "actual_price": 1999.0
    },
    {
        "name": "ACTION Athleo ATG-610 Men's Mesh Best Comfort/Ultra-Lightweight/Walking/Running/Gym & Sports Shoes",
        "ratings": 4.4,
        "no_of_ratings": 3,
        "discount_price": 998.0,
        "actual_price": 2799.0
    },
    {
        "name": "Floxum V-Neck Button Cardigan Babylock Full Sleeves Ribbed Top",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 479.0,
        "actual_price": 1299.0
    },
    {
        "name": "Elina Women's Full Coverage Cotton Hosiery Sport Bra",
        "ratings": 3.6,
        "no_of_ratings": 17,
        "discount_price": 389.0,
        "actual_price": 799.0
    },
    {
        "name": "W for Woman Women's Rayon Regular Kurta",
        "ratings": 3.6,
        "no_of_ratings": 24,
        "discount_price": 739.0,
        "actual_price": 1599.0
    },
    {
        "name": "KIDSKA Newborn Baby Cotton Cloth Nappies/Cotton Nappy For New Born Baby, Multi Color, 0-6 Month-Pack of 24",
        "ratings": 3.9,
        "no_of_ratings": 42,
        "discount_price": 499.0,
        "actual_price": 900.0
    },
    {
        "name": "Red Chief Formal Shoes for Men Brown",
        "ratings": 3.4,
        "no_of_ratings": 73,
        "discount_price": 2204.0,
        "actual_price": 4499.0
    },
    {
        "name": "Oz International Dog Raincoats (36\", Red)",
        "ratings": 3.8,
        "no_of_ratings": 70,
        "discount_price": 1999.0,
        "actual_price": 4000.0
    },
    {
        "name": "FASHION TRIANGLEGreen Sleeveless Jumpsuit One Pieces For Women's Girl With Beautiful Neck Design wide Leg Regular Length A...",
        "ratings": 3.5,
        "no_of_ratings": 16,
        "discount_price": 399.0,
        "actual_price": 899.0
    },
    {
        "name": "GT Copper Matka Stand,Matka Stand, Water Dispenser Stand,Kitchen Stand,Water Dispencer Stand, Water Pot Stand, Matka Pot S...",
        "ratings": 3.1,
        "no_of_ratings": 10,
        "discount_price": 369.0,
        "actual_price": 899.0
    },
    {
        "name": "Mochi Men Casual Sneakers (327-121)",
        "ratings": 2.7,
        "no_of_ratings": 3,
        "discount_price": 2249.0,
        "actual_price": 4499.0
    },
    {
        "name": "YUZUKI� Dial Gauge 0.001x1 mm",
        "ratings": 3.5,
        "no_of_ratings": 4,
        "discount_price": 2899.0,
        "actual_price": 3850.0
    },
    {
        "name": "NEVER LOSE Athleisure Men's Regular Fit Sports Shorts | Quick Dry Technology |",
        "ratings": 3.8,
        "no_of_ratings": 1329,
        "discount_price": 379.0,
        "actual_price": 749.0
    },
    {
        "name": "HPD Shakti Pressure Washer Hose Pipe (15 Mtr) Upto 2500 PSI Heavy Duty Black Molded Steel Pipe Suitable for Multiple Brand...",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 1369.0,
        "actual_price": 2999.0
    },
    {
        "name": "HUG 'n' FEEL SOFT TOYS Unicorn, Soft Toy, Baby Toys, Kids Toy, Soft Toy, Toy for Girl, Birthday Gift for Girl/Boys, Toy Gi...",
        "ratings": 4.1,
        "no_of_ratings": 28065,
        "discount_price": 238.0,
        "actual_price": 799.0
    },
    {
        "name": "HDMI to VGA Converter with Audio Cable Male to Female for PC Laptop Tablet Support HDTV Adapter (White)",
        "ratings": 3.6,
        "no_of_ratings": 13,
        "discount_price": 338.0,
        "actual_price": 1999.0
    },
    {
        "name": "Citizen Analog Blue Dial Men's Watch-CA4505-80L",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 21899.0,
        "actual_price": 28500.0
    },
    {
        "name": "EXCLUZO Men Chest Rig Vest Outdoor Harness Bag Sport Pouch Shoulder Bag Phone Holder Black",
        "ratings": 3.9,
        "no_of_ratings": 2,
        "discount_price": 2278.0,
        "actual_price": 4556.0
    },
    {
        "name": "Lux Inferno Women's Cotton Upper and Lower 3 Sleeves Quarter Inner Thermal Set (Grey, 80)",
        "ratings": 4.0,
        "no_of_ratings": 19,
        "discount_price": 815.0,
        "actual_price": 1100.0
    },
    {
        "name": "Lee Men Shirt",
        "ratings": 4.0,
        "no_of_ratings": 99,
        "discount_price": 878.0,
        "actual_price": 2199.0
    },
    {
        "name": "Caprese Women's Sling Bag (Rose Gold)",
        "ratings": 4.1,
        "no_of_ratings": 137,
        "discount_price": 1544.0,
        "actual_price": 3099.0
    },
    {
        "name": "Jabra Elite 3 in Ear Wireless Bluetooth Earbuds – Noise Isolating True Wireless Buds with 4 Built-in Microphones for Clear...",
        "ratings": 4.3,
        "no_of_ratings": 4882,
        "discount_price": 5899.0,
        "actual_price": 6999.0
    },
    {
        "name": "Bajaj Majesty Duetto Gas 6 Ltr Vertical Water Heater ( LPG), White",
        "ratings": 3.8,
        "no_of_ratings": 3764,
        "discount_price": 5247.0,
        "actual_price": 8800.0
    },
    {
        "name": "ALL ABOUT ELECTRONICS Polypropylene Magnetic Float Sensor Switch for Water Level Controller NO Type (Set of 4 Pieces)",
        "ratings": 4.0,
        "no_of_ratings": 18,
        "discount_price": 960.0,
        "actual_price": 1000.0
    },
    {
        "name": "Todani Jems? Stone 3.25 to 14.25 Ratti Certified Jamunia Katela Amethyst Gemstone (7.25)",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 263.0,
        "actual_price": 799.0
    },
    {
        "name": "Dennis Lingo Men's Shirt",
        "ratings": 4.0,
        "no_of_ratings": 2720,
        "discount_price": 499.0,
        "actual_price": 2499.0
    },
    {
        "name": "Rajnandini Women's Pink Cotton Printed Unstitched Salwar Suit Material (JOPLVSM4251)",
        "ratings": 3.0,
        "no_of_ratings": 8,
        "discount_price": 375.0,
        "actual_price": 1663.0
    },
    {
        "name": "HARA 'Foldable Bed Study Table Portable Multifunction Laptop-Table Lapdesk for Children Bed Foldabe Table Work Office Home...",
        "ratings": 3.8,
        "no_of_ratings": 204,
        "discount_price": 209.0,
        "actual_price": 699.0
    },
    {
        "name": "Clovia Women's Cotton Rich Non-Wired T-Shirt Bra with Transparent Multiway Straps",
        "ratings": 2.7,
        "no_of_ratings": 98,
        "discount_price": 259.0,
        "actual_price": 599.0
    },
    {
        "name": "Nowry Women Flats Fashion Sandals",
        "ratings": 2.5,
        "no_of_ratings": 4,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "BKRKJ For Men & Women Woollen Unstitched fine quality plain Merino Wool Spun Fabric- 5 meters(woolen,khadi,shirt,suit,Kurt...",
        "ratings": 3.8,
        "no_of_ratings": 76,
        "discount_price": 949.0,
        "actual_price": 1899.0
    },
    {
        "name": "Amazon Brand - Solimo Cotton Jewellery Organiser Box with Pouch, Yellow, cotton",
        "ratings": 4.0,
        "no_of_ratings": 731,
        "discount_price": 379.0,
        "actual_price": 700.0
    },
    {
        "name": "KERI PERRY Women's Crepe Western Peplum Top (Teal),Tops for Women, Floral Print Tops",
        "ratings": 4.9,
        "no_of_ratings": 11,
        "discount_price": 565.0,
        "actual_price": 1499.0
    },
    {
        "name": "Malabar Gold & Diamonds 22k (916) Two Colour Gold Pendant for Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 7639.0,
        "actual_price": 8799.0
    },
    {
        "name": "DVTECH 9H Clear View like Glass DSLR Camera Screen protector for Nikon Z5 (Screen size : 3 inch) (1 no) -Not a Tempered Glass",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 99.0,
        "actual_price": 399.0
    },
    {
        "name": "Buy That Trendz Women's Cotton Viscose Lycra Dhoti Patiyala Salwar Harem Bottoms Pants",
        "ratings": 3.9,
        "no_of_ratings": 680,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "TheGiftKart Shockproof Crystal Clear Back Cover Case for Redmi 11 Prime 5G | 360 Degree Protection | Protective Design | T...",
        "ratings": 4.0,
        "no_of_ratings": 83,
        "discount_price": 251.0,
        "actual_price": 999.0
    },
    {
        "name": "HAVAI Anti Bacterial Cover for Symphony Diet 50i Tower Cooler Water Resistant.Cover Size(LXBXH) cm:43 X 36 X 134.5",
        "ratings": 4.1,
        "no_of_ratings": 44,
        "discount_price": 549.0,
        "actual_price": 699.0
    },
    {
        "name": "FND UV Filter Combo for Sony Alpha 6000/6300/5100 for Dual Lens UV Filter (49 mm & 40.5MM)",
        "ratings": 3.6,
        "no_of_ratings": 21,
        "discount_price": 219.0,
        "actual_price": 599.0
    },
    {
        "name": "House of Banter Marvel Spiderman Theme Birthday decoration Pack - 67pc Combo- 60 Multicolor Balloons, 1 Spiderman Foil Bal...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 459.0,
        "actual_price": 1099.0
    },
    {
        "name": "HIFFIN®59\"x79\"/150x200cm 5 in 1 Reflector Translucent, Silver, Gold, White and Black Collapsible Round Multi Disc Light Re...",
        "ratings": 4.2,
        "no_of_ratings": 11,
        "discount_price": 3999.0,
        "actual_price": 5499.0
    },
    {
        "name": "Sfane Polyester 9.05 Black Men & Women Trendy Black Sports Duffle Gym Bag, Shoulder Bag",
        "ratings": 4.2,
        "no_of_ratings": 926,
        "discount_price": 297.0,
        "actual_price": 999.0
    },
    {
        "name": "Fresh From Loom Velvet Abstract Design Single Bedsheet Size - 58x90 inch Maroon with 1 Pillow Covers",
        "ratings": 3.8,
        "no_of_ratings": 95,
        "discount_price": 782.0,
        "actual_price": 1999.0
    },
    {
        "name": "Boldfit Bamboo Socks For Men Women Ankle Socks For Men Socks For Women Socks For Boys Moja Ankle Socks For Women Ankle Len...",
        "ratings": 4.7,
        "no_of_ratings": 102,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Gadget-Wagon 37\"-70\" Full Motion TV Wall Mount for LED, LCD Flat Panel TVs, Black, 37 to 70 (GW-3270)",
        "ratings": 4.4,
        "no_of_ratings": 49,
        "discount_price": 3750.0,
        "actual_price": 5340.0
    },
    {
        "name": "dockstreet Full Length Soft Fabric Stylish Regular Cargo/Joggers for Women",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 472.0,
        "actual_price": 999.0
    },
    {
        "name": "OM DESIGNER Analogue Barbie Multicolor Watch for Girls & Kids - Turquoise",
        "ratings": 2.2,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Frozen Girl's FZPGFS2069 Fashion Sandals (FZPGFS2069, Sky Blue)",
        "ratings": 2.6,
        "no_of_ratings": 13,
        "discount_price": 671.0,
        "actual_price": 849.0
    },
    {
        "name": "OUTFLITS 2 Pack Women's Slip Shorts Cotton Underwear, Anti Chafing Safety Boy Shorts Panties Under Dress, Yoga Shorts, Wor...",
        "ratings": 4.1,
        "no_of_ratings": 907,
        "discount_price": 549.0,
        "actual_price": 798.0
    },
    {
        "name": "Clapton Women's V-Neck Sleeveless Sweater",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 829.0,
        "actual_price": 2671.0
    },
    {
        "name": "ARTIBETTER Amber Acrylic Bag Chain Straps Replacement Acrylic Handbag Link Curb Chains Strap Purse Clutches Handle Strap H...",
        "ratings": 3.1,
        "no_of_ratings": 11,
        "discount_price": 1364.0,
        "actual_price": 2738.0
    },
    {
        "name": "Blaupunkt BT05 Portable Wireless Bluetooth Speaker with HD Sound I 1200mAh Rechargeable Battery I Built-in Mic/TF/FM for H...",
        "ratings": 3.8,
        "no_of_ratings": 100,
        "discount_price": 1099.0,
        "actual_price": 2099.0
    },
    {
        "name": "Shopping Station Women's Satin Printed Maxi Nighty (SSN5664-5202,Multicolor. Free Size)",
        "ratings": 3.8,
        "no_of_ratings": 27,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "S S LONG LIFE Slimming Tummy Tucker Vest Men's Undershirt",
        "ratings": 3.4,
        "no_of_ratings": 56,
        "discount_price": 599.0,
        "actual_price": 899.0
    },
    {
        "name": "Solid SF-252 Digital Satellite dB Meter",
        "ratings": 3.4,
        "no_of_ratings": 300,
        "discount_price": 699.0,
        "actual_price": 799.0
    },
    {
        "name": "Nifty Women's Slim Fit",
        "ratings": 3.9,
        "no_of_ratings": 351,
        "discount_price": 555.0,
        "actual_price": 1299.0
    },
    {
        "name": "Janasya Women's Teal Poly Silk Foil Print Crop Top with Palazzo and Jacket",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 1329.0,
        "actual_price": 3129.0
    },
    {
        "name": "Adidas Mens Rigket Outdoor Shoes",
        "ratings": 3.7,
        "no_of_ratings": 10,
        "discount_price": 3079.0,
        "actual_price": 5599.0
    },
    {
        "name": "VSHINE FASHION JEWELLERY Single Stone American Diamond Pressing Gold Plated Nose Pin Ring Collection Fashion Jewellery for...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 191.0,
        "actual_price": 1249.0
    },
    {
        "name": "Aim Emporium Manual Digital Hand Tally Counter/Finger Counter with Led Light Pack of 2.",
        "ratings": 4.5,
        "no_of_ratings": 62,
        "discount_price": 251.0,
        "actual_price": 599.0
    },
    {
        "name": "BROIDEN Women's Cotton Panty (Pack of 6)",
        "ratings": 2.7,
        "no_of_ratings": 25,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Bellina® Women Handbag in Pink color & wallet",
        "ratings": 3.7,
        "no_of_ratings": 3,
        "discount_price": 399.0,
        "actual_price": 1599.0
    },
    {
        "name": "Zivame Women's Polyester Padded Wire Free Regular Bra",
        "ratings": 3.7,
        "no_of_ratings": 50,
        "discount_price": 449.0,
        "actual_price": 995.0
    },
    {
        "name": "Touchstone Indian Heritage Fabric Anti-Pollution Smog Smoke Cold Cough Protective Face Masks filter pocket Reusable Washab...",
        "ratings": 3.6,
        "no_of_ratings": 10,
        "discount_price": 399.0,
        "actual_price": 599.0
    },
    {
        "name": "Marks & Spencer Men's Regular Fit Shirt",
        "ratings": 3.9,
        "no_of_ratings": 7,
        "discount_price": 689.0,
        "actual_price": 2299.0
    },
    {
        "name": "HELISHA Pasties Silicone-Women's Reusable Nipple Cover - Silicone Nipple Cover Bra Pad - Adhesive Reusable Nipple Pads - T...",
        "ratings": 4.0,
        "no_of_ratings": 1411,
        "discount_price": 235.0,
        "actual_price": 899.0
    },
    {
        "name": "Casio Analog Silver Dial Women's Watch-SHE-3067PGL-7AUDF (SX266)",
        "ratings": 3.2,
        "no_of_ratings": 13,
        "discount_price": 5997.0,
        "actual_price": 9995.0
    },
    {
        "name": "WZATCO A1 LED Smart Projector for Home 11000 Lumens (1050 ANSI) Auto Focus & Auto Keystone | Fully Sealed Dust Proof | And...",
        "ratings": 4.1,
        "no_of_ratings": 547,
        "discount_price": 32990.0,
        "actual_price": 49990.0
    },
    {
        "name": "SAI HERBS Rooibos Unani Churan - Rooibos Unani Tea - Caffeine Free - Rich in Antioxidants - For Healthy Sleep - Boosts Imm...",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 255.0,
        "actual_price": 3110.0
    },
    {
        "name": "Aqualite Fashionable and Comfort Cushion Outdoor Mens Slip-on Shoes",
        "ratings": 3.8,
        "no_of_ratings": 21,
        "discount_price": 331.0,
        "actual_price": 349.0
    },
    {
        "name": "Jack & Jones Men's Slim Jeans",
        "ratings": 3.5,
        "no_of_ratings": 39,
        "discount_price": 1569.0,
        "actual_price": 3499.0
    },
    {
        "name": "LipiWorld® STB03 Remote Control Compatible for Hathway Set Top Box",
        "ratings": 1.5,
        "no_of_ratings": 3,
        "discount_price": 279.0,
        "actual_price": 499.0
    },
    {
        "name": "Max mens Suplemov3 Sneakers",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 1154.0,
        "actual_price": 1499.0
    },
    {
        "name": "Artistix Alpine Business Class Series | Anti Theft Laptop Backpack (32 Litre, 15.6 inch) (Black)",
        "ratings": 4.5,
        "no_of_ratings": 1024,
        "discount_price": 1783.0,
        "actual_price": 3899.0
    },
    {
        "name": "(Renewed) Samsung SM-R180NZKAINU In-Ear Wireless Bluetooth Buds Live with Mic (Mystic Black)",
        "ratings": 3.7,
        "no_of_ratings": 127,
        "discount_price": 4599.0,
        "actual_price": 4999.0
    },
    {
        "name": "Vaya GoBag Blue Water Bottle Bag for College, Dust Proof Water Bottle Bag for School with Sling, Color: Blue",
        "ratings": 4.4,
        "no_of_ratings": 23,
        "discount_price": 590.0,
        "actual_price": 790.0
    },
    {
        "name": "Power Smart PS808 Battery Charger for Sony NP-FP50 FP70 FP90 NP-FH50 NP-FH100 NP-FV50 NP-FV70 NP-FV100 LCD Multifunction D...",
        "ratings": 3.2,
        "no_of_ratings": 7,
        "discount_price": 799.0,
        "actual_price": 1499.0
    },
    {
        "name": "ZAVERI PEARLS Traditional Green Beads Drop Choker Necklace Set For Women-ZPFK8682",
        "ratings": 3.8,
        "no_of_ratings": 136,
        "discount_price": 249.0,
        "actual_price": 1950.0
    },
    {
        "name": "Jainithish Collections Women's Silk Cotton Saree With Double Sided Tissue Patern Border (Navy Blue,Golden Jari) Silk Cotto...",
        "ratings": 3.1,
        "no_of_ratings": 4,
        "discount_price": 1265.0,
        "actual_price": 2499.0
    },
    {
        "name": "Orient Electric Roto-53 400 MM high speed wall mounted cabin fan (White & Blue)",
        "ratings": 3.8,
        "no_of_ratings": 272,
        "discount_price": 2565.0,
        "actual_price": 3880.0
    },
    {
        "name": "Joker & Witch Cosmo Black Watch Bracelet Stack for Women",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1300.0,
        "actual_price": 5199.0
    },
    {
        "name": "KS Woman Desire, Enigma and Sparkle Deodorant Spray - For Women (450 ml, Pack of 3)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 228.0,
        "actual_price": 559.0
    },
    {
        "name": "The Little Lookers� Super Soft Hooded Towel for Babies, Kids, Toddlers & Infants| Quick Dry Baby Towel/Wrap-On | 420 GSM M...",
        "ratings": 4.5,
        "no_of_ratings": 19,
        "discount_price": 599.0,
        "actual_price": 998.0
    },
    {
        "name": "Cottinfab Women's Waist Coat (XXL)",
        "ratings": 3.9,
        "no_of_ratings": 8,
        "discount_price": 536.0,
        "actual_price": 1279.0
    },
    {
        "name": "Foxtale Morning Glory Routine (Dewy) Skin Care Kit | Cleanser Face Wash 100ml + Ceramide Moisturizer 50ml + Vitamin C Face...",
        "ratings": 3.9,
        "no_of_ratings": 19,
        "discount_price": 1649.0,
        "actual_price": 2064.0
    },
    {
        "name": "WSF SPORTS Cricket Leather Batting Gloves Right Hand Size Men Black Color",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 1249.0,
        "actual_price": 1849.0
    },
    {
        "name": "Bagsy Malone Women's Messenger Bag",
        "ratings": 3.8,
        "no_of_ratings": 128,
        "discount_price": 836.0,
        "actual_price": 1999.0
    },
    {
        "name": "Boltove® Maroon Wrinkle Free Decoration Backdrop Curtain Drapes Maroon Backdrop Panels Background for Photography Wedding ...",
        "ratings": 3.6,
        "no_of_ratings": 42,
        "discount_price": 459.0,
        "actual_price": 899.0
    },
    {
        "name": "Fargo Women's Handbag (Set of 3, Blue)",
        "ratings": 3.6,
        "no_of_ratings": 660,
        "discount_price": 499.0,
        "actual_price": 2499.0
    },
    {
        "name": "Rajnandini Women's Pure Cambric Cotton Jaipuri Printed & Embroidered Kurta Set With Dupatta (JOPLVL288-P_Orange)",
        "ratings": 3.8,
        "no_of_ratings": 27,
        "discount_price": 1299.0,
        "actual_price": 4996.0
    },
    {
        "name": "Miss Chase Women's Mustard Yellow V-Neck 3/4 Sleeves Solid Empire Maxi Top",
        "ratings": 4.1,
        "no_of_ratings": 15,
        "discount_price": 959.6,
        "actual_price": 2399.0
    },
    {
        "name": "Keya Chai Masala, 90 gm",
        "ratings": 3.8,
        "no_of_ratings": 1021,
        "discount_price": 151.0,
        "actual_price": 190.0
    },
    {
        "name": "Wireless Bluetooth Headphones Earphones for OnePlus Nord CE 2 Lite 5G Original Sports Bluetooth Wireless Earphone with Dee...",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 590.0,
        "actual_price": 1254.0
    },
    {
        "name": "CLIENTALE India New ODI Retro Jersey 2020-21 for Men Women Boys Unisex (Medium, Navy Blue)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 413.0,
        "actual_price": 999.0
    },
    {
        "name": "ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone with BTv5.0, Up to 21 Hours Playback, 40mm Drivers with Deep Bass, Wir...",
        "ratings": 3.8,
        "no_of_ratings": 62423,
        "discount_price": 749.0,
        "actual_price": 1899.0
    },
    {
        "name": "Candes Fresh 12inch / 300 mm Anti Dust 3 Blade Exhaust Fan (Black, Pack of 1)",
        "ratings": 3.9,
        "no_of_ratings": 38,
        "discount_price": 1229.0,
        "actual_price": 1590.0
    },
    {
        "name": "AVSAR 18k (750) Yellow Gold Pendant for Women",
        "ratings": 2.8,
        "no_of_ratings": 3,
        "discount_price": 3099.0,
        "actual_price": 3864.0
    },
    {
        "name": "E-Image EI-A03 360° Multi Functional Mini Ball Head 1/4\" Thread Hot Shoe Mount Adapter for Cameras Smartphone Gopro LED Vi...",
        "ratings": 4.5,
        "no_of_ratings": 29,
        "discount_price": 325.0,
        "actual_price": 365.0
    },
    {
        "name": "Allen Solly Men's Regular Fit Shirt",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 1758.0,
        "actual_price": 2349.0
    },
    {
        "name": "SPOKOFIT YOGAPVC-BLK All Purpose Extra Thick Yoga Fitness & Exercise Mats with Carrying Bag & Strap, High Density Anti-Tea...",
        "ratings": 5.0,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 1399.0
    },
    {
        "name": "999STORE Printed Mirror for Wall Full Length for Bedroom Mirrors for Home Grey Sky& Stare Pattern 5ft Mirror for Wall (MD...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2999.0,
        "actual_price": 8999.0
    },
    {
        "name": "Preneum Women Top",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 249.0,
        "actual_price": 1199.0
    },
    {
        "name": "BLINKIN Women's 3/4 Gym Wear Tights for Women with Side Pockets : Perfect for Active Wear, Yoga & Workout - The Ultimate G...",
        "ratings": 4.1,
        "no_of_ratings": 246,
        "discount_price": 359.0,
        "actual_price": 1680.0
    },
    {
        "name": "Lee Men T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 798.0,
        "actual_price": 1999.0
    },
    {
        "name": "TAMAIRA FASHION Women's Plain Weave Pure Cotton Saree Without Blouse Piece",
        "ratings": 3.7,
        "no_of_ratings": 493,
        "discount_price": 549.0,
        "actual_price": 2999.0
    },
    {
        "name": "7SEVEN® Compatible Lg Smart Tv Remote Suitable for Any LG LED OLED LCD UHD Plasma Android Television and AKB75095303 repla...",
        "ratings": 4.1,
        "no_of_ratings": 328,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Samsung 1.5 Ton 5 Star Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-Bacteria, 2023 Model AR18CYNZABE W...",
        "ratings": 4.1,
        "no_of_ratings": 1444,
        "discount_price": 43599.0,
        "actual_price": 72990.0
    },
    {
        "name": "Lymio Women Trousers || Girl's Trousers (P-17)",
        "ratings": 4.3,
        "no_of_ratings": 106,
        "discount_price": 449.0,
        "actual_price": 3999.0
    },
    {
        "name": "Poplins 18 Pieces Cute Hair Bows Hair Clip Hair Pin Baby Elastic Hair Ties Hair Accessories Fancy Headwear Acessories Pony...",
        "ratings": 4.5,
        "no_of_ratings": 4,
        "discount_price": 275.0,
        "actual_price": 999.0
    },
    {
        "name": "EASTHILL Big Capacity Pencil Pen Case Office College School Large Storage High Capacity Bag Pouch Holder Box Organizer Blu...",
        "ratings": 4.7,
        "no_of_ratings": 18690,
        "discount_price": 3044.0,
        "actual_price": 6088.0
    },
    {
        "name": "EMOH ROCED Handmade Professional Artist Painting Brush Set for Acrylic, Watercolor, & Gouache Painting with Brush Holder -...",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 749.0,
        "actual_price": 1299.0
    },
    {
        "name": "GIVA 925 Sterling Silver Zircon Classic Stud Earrings | Studs to Gift Women & Girls | With Certificate of Authenticity and...",
        "ratings": 4.4,
        "no_of_ratings": 5,
        "discount_price": 854.0,
        "actual_price": 1799.0
    },
    {
        "name": "Air Fresho Non-Electric Organic Advanced Charcoal Air Purifier Bag Blue (100 Grms X 3)",
        "ratings": 3.6,
        "no_of_ratings": 8,
        "discount_price": 588.0,
        "actual_price": 1350.0
    },
    {
        "name": "KENT Gold Gravity Water Purifier (11014) | UF Technology Based | Non-Electric & Chemical Free | Counter Top | 20L Storage...",
        "ratings": 3.7,
        "no_of_ratings": 6174,
        "discount_price": 2799.0,
        "actual_price": 3200.0
    },
    {
        "name": "Jack & Jones Men's Regular Fit T-Shirt",
        "ratings": 2.9,
        "no_of_ratings": 3,
        "discount_price": 270.0,
        "actual_price": 899.0
    },
    {
        "name": "SC CREATIVES Set of 3 Modern Womens in Boho Style Framed Art Prints Painting l Arylic Glass 16 x 12 Inches Wall Art l Wall...",
        "ratings": 4.7,
        "no_of_ratings": 8,
        "discount_price": 1399.0,
        "actual_price": 4599.0
    },
    {
        "name": "Nelle Harper Women's Shoulder bag",
        "ratings": 4.2,
        "no_of_ratings": 57,
        "discount_price": 539.0,
        "actual_price": 2699.0
    },
    {
        "name": "Park Avenue Mens Formal Shoes",
        "ratings": 2.5,
        "no_of_ratings": 2,
        "discount_price": 2372.0,
        "actual_price": 3299.0
    },
    {
        "name": "Aroma NB128 Grace 24 Hours Playing Time | Deep Bass | Made in India | Neckband Earphone Bluetooth Headset (Green)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 349.0,
        "actual_price": 1499.0
    },
    {
        "name": "Cloudz (2) Pocket RFID Wrist Wallet - Black, Designer Black, Rfid Wallet",
        "ratings": 4.0,
        "no_of_ratings": 48,
        "discount_price": 3563.0,
        "actual_price": 5089.0
    },
    {
        "name": "Shravanya Banarasi Saree for Wedding with Unstitched Blouse Piece",
        "ratings": 3.9,
        "no_of_ratings": 30,
        "discount_price": 2499.0,
        "actual_price": 9999.0
    },
    {
        "name": "VoiletR Levi Ackerman - Attack of Titan Unisex Wear Printed Round Neck Pure Cotton Black T-Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 849.0
    },
    {
        "name": "Rachna's Organic Cotton Diaper Inserts Wet-Free High Absorbent Super Soft Reusable Baby Liner Pad Set for Adjustable Cloth...",
        "ratings": 3.3,
        "no_of_ratings": 74,
        "discount_price": 440.0,
        "actual_price": 799.0
    },
    {
        "name": "Vprint Set of 2 | Circle Shape Printed Wooden Keychains | Panda Painter | Circle Shape keyrings | Circle Shape Keychains| ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 199.0,
        "actual_price": 799.0
    },
    {
        "name": "Red Tape Men Cobalt Blue Collared T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 8,
        "discount_price": 649.0,
        "actual_price": 3099.0
    },
    {
        "name": "Hidesign Women's Tote Bag (Bronze)",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 9300.0,
        "actual_price": 9795.0
    },
    {
        "name": "HIKVISION 8 Channel DVR with 5 MP 8 Bullet Wired Cameras with Audio Recording + 2 TB HDD + (3+1) Cable roll + 8 CH Power S...",
        "ratings": 3.1,
        "no_of_ratings": 327,
        "discount_price": 24300.0,
        "actual_price": 48000.0
    },
    {
        "name": "Kuber Industries Reusable Large Size Grocery Bag Shopping Bag with Handle, Non-Woven Gift Bag Goodies Bag Gold Tote Bag (G...",
        "ratings": 3.8,
        "no_of_ratings": 47,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Bulfyss Plastic Sticky Lint Roller Hair Remover Cleaner Set of 5 Rolls 150 Sheets, 30 Sheets Each roll Lint Roller Remover...",
        "ratings": 3.5,
        "no_of_ratings": 1402,
        "discount_price": 289.0,
        "actual_price": 599.0
    },
    {
        "name": "Bullshot Shock Proof & Water Proof 2000 Watt Brass (Blue) Immersion Rod",
        "ratings": 3.6,
        "no_of_ratings": 35,
        "discount_price": 399.0,
        "actual_price": 599.0
    },
    {
        "name": "Damson Technologies Pvt. Ltd. Corseca Superflex Bluetooth Stereo Neckband with Upto 10 hrs of Playtime and Liquid Silicone...",
        "ratings": 4.7,
        "no_of_ratings": 6,
        "discount_price": 950.0,
        "actual_price": 2999.0
    },
    {
        "name": "PAPIO Analog Girl's Watch (Multicolour Dial Multi Colored Strap)",
        "ratings": 4.2,
        "no_of_ratings": 154,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Laurels Colors Black Dial Analog Wrist Watch - For Women",
        "ratings": 3.6,
        "no_of_ratings": 694,
        "discount_price": 249.0,
        "actual_price": 1199.0
    },
    {
        "name": "Levi's Men's Cotton Crew Neck Sweatshirt",
        "ratings": 4.0,
        "no_of_ratings": 200,
        "discount_price": 1075.0,
        "actual_price": 2499.0
    },
    {
        "name": "Ginni Quick Release Plate for Velbon QB-6RL PH368 Tripod CX686 C600 DC70 VCT-870 880",
        "ratings": 3.0,
        "no_of_ratings": 12,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Elisco Water Heater & Tankless Electric Fast Water Heating Tap Instant Electric Water Heater Faucet Tap Electric Water Hea...",
        "ratings": 3.3,
        "no_of_ratings": 32,
        "discount_price": 1100.0,
        "actual_price": 2999.0
    },
    {
        "name": "NMII Glass and Silk Thread Zircon Gemstone Bangle Set For Women/Girls, Pack Of 40 Bangles",
        "ratings": 3.7,
        "no_of_ratings": 263,
        "discount_price": 450.0,
        "actual_price": 3299.0
    },
    {
        "name": "wolpin 1Pc Fridge Cover for Top with 6 Utility Pockets Designer Daisy Prints Waterproof",
        "ratings": 3.8,
        "no_of_ratings": 257,
        "discount_price": 209.0,
        "actual_price": 999.0
    },
    {
        "name": "LORENZ Analog Silver Dial Watch & Grey Wallet Combo for Men- CM-3034WL-25",
        "ratings": 3.7,
        "no_of_ratings": 65,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "Shoprider Women's Canvas Wallet [Multicolour]",
        "ratings": 3.2,
        "no_of_ratings": 14,
        "discount_price": 329.0,
        "actual_price": 999.0
    },
    {
        "name": "Bourge Mens Loire-z137 Running Shoes",
        "ratings": 4.0,
        "no_of_ratings": 219,
        "discount_price": 659.0,
        "actual_price": 1499.0
    },
    {
        "name": "Mens Casual Shirt Half Sleeve Kutchi Block Print (Indigo Blue, Pure Cotton)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 950.0,
        "actual_price": 2150.0
    },
    {
        "name": "Rudra Rage Punjabi Kada Stainless Steel for Women and Kids, With edges, 2 mm thickness",
        "ratings": 4.7,
        "no_of_ratings": 14,
        "discount_price": 249.0,
        "actual_price": 1000.0
    },
    {
        "name": "Gauri Laxmi Enterprise Men's Cotton Blend Foil Print Kurta",
        "ratings": 3.9,
        "no_of_ratings": 21,
        "discount_price": 338.0,
        "actual_price": 1499.0
    },
    {
        "name": "blackberrys Men's Slim Fit Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 509.0,
        "actual_price": 999.0
    },
    {
        "name": "FAUSTO Basics Men's Textured Design Outdoor Classic Moccasin Loafer Shoes (6-12 UK)",
        "ratings": 3.3,
        "no_of_ratings": 54,
        "discount_price": 849.0,
        "actual_price": 1999.0
    },
    {
        "name": "Blueberry Keyboard bag Compatible With Casio SA-76, Casio SA-77, Casio SA-78 Keyboards",
        "ratings": 4.3,
        "no_of_ratings": 693,
        "discount_price": 312.0,
        "actual_price": 1095.0
    },
    {
        "name": "DS WORLD Stylish Regular Fit Plain Men's V-Neck Half Sleeve T-Shirt",
        "ratings": 3.4,
        "no_of_ratings": 33,
        "discount_price": 249.0,
        "actual_price": 449.0
    },
    {
        "name": "Sorella'z Womens Girls Golden & Silver Push Back Earrings Earcuff Combo",
        "ratings": 3.6,
        "no_of_ratings": 39,
        "discount_price": 198.0,
        "actual_price": 730.0
    },
    {
        "name": "Max Women's Printed Drawstring Waist Pyjamas",
        "ratings": 4.5,
        "no_of_ratings": 4,
        "discount_price": 629.0,
        "actual_price": 699.0
    },
    {
        "name": "MADSY MSP-5A Women's Nylon Beach Lingerie Bra Panty Set",
        "ratings": 3.9,
        "no_of_ratings": 5,
        "discount_price": 139.0,
        "actual_price": 499.0
    },
    {
        "name": "Chateliers Waves Seer Fish Wafers (100 Grams x 3)",
        "ratings": 4.3,
        "no_of_ratings": 187,
        "discount_price": 225.0,
        "actual_price": 240.0
    },
    {
        "name": "U.S. POLO ASSN. Women's Regular Fit T-Shirt",
        "ratings": 2.6,
        "no_of_ratings": 2,
        "discount_price": 329.0,
        "actual_price": 1199.0
    },
    {
        "name": "AGAAS ENTERPRISES Brass Battery Working Mini Table Fan for God Puja Room/Temple Return Gift Birthday/ShowpieceHome Decor T...",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 399.0,
        "actual_price": 499.0
    },
    {
        "name": "Rangriti Women Dress",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 839.0,
        "actual_price": 1799.0
    },
    {
        "name": "OMAX Analog Black Dial Men's Watch (Black Dial Silver Stainless Steel Bracelet Chain Luminous Index Dial Watch)-SS200",
        "ratings": 3.6,
        "no_of_ratings": 32,
        "discount_price": 2169.0,
        "actual_price": 2595.0
    },
    {
        "name": "Jayesh & Prisha Enterprises Virtual Reality Glasses for The Best Virtual Reality Experience",
        "ratings": 1.0,
        "no_of_ratings": 6,
        "discount_price": 499.0,
        "actual_price": 2500.0
    },
    {
        "name": "BINORI FASHIONS Rajasthani Style Royal Clutch Silk Batwa Bag Combo Khajoor Wristlets Ethnic Potli Combo For Women's Zari W...",
        "ratings": 4.4,
        "no_of_ratings": 105,
        "discount_price": 1399.0,
        "actual_price": 2999.0
    },
    {
        "name": "DECISIVE Men's Slim Fit Vest",
        "ratings": 3.9,
        "no_of_ratings": 16,
        "discount_price": 1499.0,
        "actual_price": 3297.0
    },
    {
        "name": "Armani Exchange Rocco Analog Grey Dial Men's Watch-AX2904",
        "ratings": 3.4,
        "no_of_ratings": 10,
        "discount_price": 7696.5,
        "actual_price": 10995.0
    },
    {
        "name": "Hot And Bold Couple-Combo Matching Best Friend Relationship Natural Multi Layer Tiple Protection Stone Beads Magnetic Brac...",
        "ratings": 3.9,
        "no_of_ratings": 895,
        "discount_price": 398.0,
        "actual_price": 3499.0
    },
    {
        "name": "Lino Perros womens handbag",
        "ratings": 3.9,
        "no_of_ratings": 32,
        "discount_price": 1706.0,
        "actual_price": 4495.0
    },
    {
        "name": "Chromozome Boy's Regular Fit T-Shirt (Pack of 3)",
        "ratings": 3.9,
        "no_of_ratings": 3913,
        "discount_price": 229.0,
        "actual_price": 922.0
    },
    {
        "name": "Kimirica Handmade Lavender Mint Artisan Soap For Moisturizing and Deep Cleansing | 100% Vegan & Paraben Free | Pure Natura...",
        "ratings": 3.9,
        "no_of_ratings": 12,
        "discount_price": 300.0,
        "actual_price": 375.0
    },
    {
        "name": "Yellow Chimes Chain for Men Rice Chain for Boys Classic Stainless Steel Golden Rice Chain Necklace for Men and Boys.",
        "ratings": 3.6,
        "no_of_ratings": 52,
        "discount_price": 269.0,
        "actual_price": 996.0
    },
    {
        "name": "Fashion2wear Women's Georgette Casual Knee Length Fit & Flare Long Gown Dress",
        "ratings": 3.6,
        "no_of_ratings": 16,
        "discount_price": 555.0,
        "actual_price": 999.0
    },
    {
        "name": "Weavers Villa Women's Nylon Dupatta.",
        "ratings": 4.2,
        "no_of_ratings": 114,
        "discount_price": 750.0,
        "actual_price": 2500.0
    },
    {
        "name": "Citizen Analog Blue Dial Men's Watch-CA4503-18L",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 19719.0,
        "actual_price": 27900.0
    },
    {
        "name": "Urbano Fashion Men's Slim Fit Jogger Jeans Stretch",
        "ratings": 3.7,
        "no_of_ratings": 11747,
        "discount_price": 729.0,
        "actual_price": 1699.0
    },
    {
        "name": "WC Right Men & Women Couple Graphic Printed Polyster Regular FIT T-Shirts (RED King Queen)",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 350.0,
        "actual_price": 599.0
    },
    {
        "name": "SKM Adathodai Manapagu 150 gram",
        "ratings": 4.4,
        "no_of_ratings": 18,
        "discount_price": 161.0,
        "actual_price": 171.0
    },
    {
        "name": "Parijata 1/2 Inch Inlet/Outlet Diaphragm Solenoid Valve for Water Purifiers, Agricultulture, Irrigation, Hydroponics, Aqua...",
        "ratings": 3.8,
        "no_of_ratings": 395,
        "discount_price": 315.0,
        "actual_price": 500.0
    },
    {
        "name": "LUX Men's Cotton Trunks (Pack of 5)",
        "ratings": 3.3,
        "no_of_ratings": 15,
        "discount_price": 739.0,
        "actual_price": 999.0
    },
    {
        "name": "Tronica TR-1501 Deep Bass Home Theater with Subwoofer 2.1 Channel with 55W Premium Signature Sound, Multiple Connectivity ...",
        "ratings": 3.4,
        "no_of_ratings": 170,
        "discount_price": 3299.0,
        "actual_price": 6000.0
    },
    {
        "name": "SNOWIE SOFT® Cloth Books for Babies, 6pcs Nontoxic Fabric Soft, Early Education Toys, Waterproof Soft Books for Toddler, I...",
        "ratings": 4.0,
        "no_of_ratings": 415,
        "discount_price": 791.0,
        "actual_price": 1122.0
    },
    {
        "name": "ORICO Aluminum M.2 NVMe SSD Enclosure, Tool-Free 10Gbps USB C Adapter, USB 3.2 M.2 NVMe Reader, External SSD Case Thunderb...",
        "ratings": 4.2,
        "no_of_ratings": 161,
        "discount_price": 1529.0,
        "actual_price": 2499.0
    },
    {
        "name": "Shine Guard Car Care Kit (Dashboard Polish/Shiner, Windshield/Glass Cleaner, Car Shampoo, Car Polish, Pack of 4 Items)",
        "ratings": 3.8,
        "no_of_ratings": 179,
        "discount_price": 449.0,
        "actual_price": 699.0
    },
    {
        "name": "Puma Unisex-Adult Smash V2 L Leather Sneaker",
        "ratings": 4.2,
        "no_of_ratings": 9528,
        "discount_price": 2488.0,
        "actual_price": 4999.0
    },
    {
        "name": "Amazon Brand - Symbol Men's Skinny Stretchable Jeans (SY-SB-CL-SK-216_Dark Grey-3_30)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 649.0,
        "actual_price": 1699.0
    },
    {
        "name": "Raymond Light Yellow Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1499.0,
        "actual_price": 2999.0
    },
    {
        "name": "Panasonic DMW-BLC12E Camera Accy (Black)",
        "ratings": 4.6,
        "no_of_ratings": 1369,
        "discount_price": 2849.0,
        "actual_price": 4999.0
    },
    {
        "name": "Hopscotch Girls Cotton Full Sleeves Text Printed Sweatshirt With Jogger Set in Pink Color",
        "ratings": 3.7,
        "no_of_ratings": 200,
        "discount_price": 703.81,
        "actual_price": 1429.0
    },
    {
        "name": "Women's Western Fit Rayon Palazzo (AC-GP-02_Red And White_2Xl)",
        "ratings": 4.0,
        "no_of_ratings": 45,
        "discount_price": 499.0,
        "actual_price": 1299.0
    },
    {
        "name": "SuperSave Trishul Damru OM Rudraksha Gold Plated Leather Mahadev Mahakal Shiva Bhakt Bahubali Navaratri Special Kada Brace...",
        "ratings": 3.5,
        "no_of_ratings": 536,
        "discount_price": 149.0,
        "actual_price": 299.0
    },
    {
        "name": "Amazon Brand - Symactive Mens Fanatic Running Shoe",
        "ratings": 3.8,
        "no_of_ratings": 532,
        "discount_price": 699.0,
        "actual_price": 2099.0
    },
    {
        "name": "Bevzilla 200 Gram Dark Wish Dark Roast 100% Arabica Strong Coffee | Black Roast Rich & Dark Instant Coffee Powder | Make U...",
        "ratings": 4.6,
        "no_of_ratings": 115,
        "discount_price": 279.0,
        "actual_price": 799.0
    },
    {
        "name": "Bajaj Tezz Ceiling Fan (1200mm, Bianco)",
        "ratings": 3.7,
        "no_of_ratings": 32,
        "discount_price": 1795.0,
        "actual_price": 1999.0
    },
    {
        "name": "Astrodidi 6 Mukhi Nepali Rudraksha with Certificate Mantra Siddha by Acharya",
        "ratings": 4.0,
        "no_of_ratings": 95,
        "discount_price": 239.0,
        "actual_price": 999.0
    },
    {
        "name": "E-COSMOS Washer Dryer Anti Vibration Pads with Suction Cup Feet, Fridge Washing Machine Leveling Feet Anti Walk Pads Shock...",
        "ratings": 4.0,
        "no_of_ratings": 769,
        "discount_price": 129.0,
        "actual_price": 149.0
    },
    {
        "name": "ACCESSHER Traditional Gold Plated Handcrafted gold plated Polki Kundan Nose Ring/Nath With Layered Chain for women and girls",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 807.0,
        "actual_price": 3990.0
    },
    {
        "name": "GOURAVSUMANA Baby Boy's & Baby Girl's Soft Woolen Winter Warm Kids Hand Gloves (Multicolor; Pack of 6) (2-3 Years)",
        "ratings": 3.8,
        "no_of_ratings": 30,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Kiaaron Women's Hand Block Kalamkari Batik Bagru Jaipuri Ikat Printed Handloom Pure Cotton Mulmul Traditional Ethnic Cotto...",
        "ratings": 2.7,
        "no_of_ratings": 2,
        "discount_price": 899.0,
        "actual_price": 6999.0
    },
    {
        "name": "SG Kashmir Eco Cricket Kit for Youth (Size 3, Ideal for Age Between 6 to 8 Yrs)",
        "ratings": 3.4,
        "no_of_ratings": 21,
        "discount_price": 5649.0,
        "actual_price": 5849.0
    },
    {
        "name": "Puma Women's Regular Fit T Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 629.0,
        "actual_price": 1999.0
    },
    {
        "name": "Oslen 4 in 1 Stainless Steel Multipurpose Bathroom Shelf/Perfume Rack/Toothbrush Stand/Tumbler Holder/Soap Dish/Bathroom A...",
        "ratings": 4.3,
        "no_of_ratings": 59,
        "discount_price": 1299.0,
        "actual_price": 2599.0
    },
    {
        "name": "Zitel Case with Screen Protector Compatible with Apple Watch SE 2nd gen 2022 / Series 6/5/4 SE, 40mm Hard PC Cover with Bu...",
        "ratings": 3.8,
        "no_of_ratings": 4321,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "hummel Mens Hmlthor Sneaker Sneaker",
        "ratings": 3.5,
        "no_of_ratings": 21,
        "discount_price": 2850.0,
        "actual_price": 4699.0
    },
    {
        "name": "Made in India Earbuds Headphones with Microphone, Pack of 2, Earbuds Wired Stereo Earphones in-Ear Headphones Bass Earbud...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 279.0,
        "actual_price": 1499.0
    },
    {
        "name": "ELEGANTE Mens Square Sunglasses, UV Protected Stylish Polarized Sun glasses for Men",
        "ratings": 3.6,
        "no_of_ratings": 100,
        "discount_price": 596.0,
        "actual_price": 2499.0
    },
    {
        "name": "Story@Home 210 TC Bedsheet for Single Bed Cotton 1 Single Bedsheets with 1 Pillow Cover for Kids (Ivory and Navy Blue)",
        "ratings": 3.9,
        "no_of_ratings": 231,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "DAIMETER Women's Polo T-shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 567.0,
        "actual_price": 987.0
    },
    {
        "name": "QENA Women A LINE Maxi Dress",
        "ratings": 3.6,
        "no_of_ratings": 94,
        "discount_price": 529.0,
        "actual_price": 999.0
    },
    {
        "name": "Ceela Sports Shoe and Accessories Bag Kit Bag Goalkeeper Gloves Bag Football Sports Bag with Towel Pocket",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 800.0
    },
    {
        "name": "ZAVERI PEARLS Embellished With Kundan & Pearls Necklace Set For Women-ZPFK8807",
        "ratings": 4.0,
        "no_of_ratings": 676,
        "discount_price": 599.0,
        "actual_price": 4760.0
    },
    {
        "name": "Alice Bronze Acoustic Guitar Strings (Pack of 1) + Alice Guitar Plectrums Pick of Various Thickness, 6 Pieces, Assorted Co...",
        "ratings": 4.3,
        "no_of_ratings": 9,
        "discount_price": 339.0,
        "actual_price": 650.0
    },
    {
        "name": "thenkumari wood eco friendly wooden kids toy kitchen set new model with cylinder, stove and kids chakla belan combo- Multi...",
        "ratings": 4.1,
        "no_of_ratings": 131,
        "discount_price": 349.0,
        "actual_price": 499.0
    },
    {
        "name": "EXSESON Professional Perfect Secret Hair Curler Roller Machine with Revolutionary Automatic Curling Technology for Women (...",
        "ratings": 2.5,
        "no_of_ratings": 6,
        "discount_price": 1299.0,
        "actual_price": 2999.0
    },
    {
        "name": "EXOTIC Office hand bag",
        "ratings": 3.9,
        "no_of_ratings": 7,
        "discount_price": 892.0,
        "actual_price": 2599.0
    },
    {
        "name": "ILLI LONDON Women's Cut-out Maxi Dress",
        "ratings": 4.2,
        "no_of_ratings": 554,
        "discount_price": 799.0,
        "actual_price": 2199.0
    },
    {
        "name": "Simple Daily Skin Detox Purifying Gel Facial Wash| Controls Sebum, Oil & Black Heads| For Pimple Prone Skin| Tested on Sen...",
        "ratings": 4.1,
        "no_of_ratings": 351,
        "discount_price": 374.0,
        "actual_price": 499.0
    },
    {
        "name": "Levi's Men's Slim Fit Jeans",
        "ratings": 1.9,
        "no_of_ratings": 17,
        "discount_price": 1289.0,
        "actual_price": 3699.0
    },
    {
        "name": "Tooba Women's Clutch",
        "ratings": 3.3,
        "no_of_ratings": 80,
        "discount_price": 470.0,
        "actual_price": 4999.0
    },
    {
        "name": "Havells Plastic Grey Handy Mini Chopper with 3 Blades, Yncxx00139",
        "ratings": 4.3,
        "no_of_ratings": 155,
        "discount_price": 348.0,
        "actual_price": 695.0
    },
    {
        "name": "HIYANSH Pom Pom Tutu and Bow Hair Tie, Birthday Smash Cake Skirt| Baby and Toddlers (0M-8T) Ultra Soft Tutu Skirt (0-6 Mon...",
        "ratings": 3.5,
        "no_of_ratings": 8,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Chimpaaanzee Women's Top",
        "ratings": 3.6,
        "no_of_ratings": 67,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "WATREAT Plastic NSF Certified RO Antiscalant (5 Kg)",
        "ratings": 3.0,
        "no_of_ratings": 14,
        "discount_price": 1899.0,
        "actual_price": 3000.0
    },
    {
        "name": "Amazon Brand - Symactive Men's Regular Fit T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 2908,
        "discount_price": 309.0,
        "actual_price": 999.0
    },
    {
        "name": "Royal Fabric Jute Bags Grocery Carry Bag Jute Kalamkari Small Tiffin Bags For Men & Women (Beige)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 325.0,
        "actual_price": 499.0
    },
    {
        "name": "Fashnest Thermal Wear Top Pajama Set for Boys Girls Kids Baby (Multicolor Pack of 2)",
        "ratings": 3.9,
        "no_of_ratings": 22,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "TP-Link Deco M4 Dual_Band Whole Home Mesh Wi-Fi System, Seamless Roaming and Speedy (AC1200) Mbps, Work with Amazon Echo/A...",
        "ratings": 4.4,
        "no_of_ratings": 18643,
        "discount_price": 6999.0,
        "actual_price": 15999.0
    },
    {
        "name": "ASHWATH Women's Solid Dupatta.",
        "ratings": 3.9,
        "no_of_ratings": 139,
        "discount_price": 1299.0,
        "actual_price": 2299.0
    },
    {
        "name": "Burwood Mens Bwd 55 Formal Shoes",
        "ratings": 3.8,
        "no_of_ratings": 287,
        "discount_price": 1072.52,
        "actual_price": 3299.0
    },
    {
        "name": "COOQUE GOJO SATORU Jujutsu Kaisen Anime t-Shirt Printed Half Sleeve Round Neck Black T-Shirt for Men's/Boy's Pack of 1 pc",
        "ratings": 4.5,
        "no_of_ratings": 6,
        "discount_price": 449.0,
        "actual_price": 1799.0
    },
    {
        "name": "Lavie Women's Emi Crossbody Sling Bag | Ladies Purse Handbag",
        "ratings": 4.0,
        "no_of_ratings": 64,
        "discount_price": 944.1,
        "actual_price": 2399.0
    },
    {
        "name": "AMEYS ALMUDA Men's Cotton Fabric Printed Regular Fit T-Shirts Fullsleeve Round Neck T-Shirts",
        "ratings": 3.4,
        "no_of_ratings": 23,
        "discount_price": 355.0,
        "actual_price": 999.0
    },
    {
        "name": "Bigbanana Plus Size Men's Regular Fit Trackpants",
        "ratings": 3.7,
        "no_of_ratings": 20,
        "discount_price": 799.0,
        "actual_price": 1999.0
    },
    {
        "name": "Piu Women's Cotton Printed Maxi Nighty",
        "ratings": 3.6,
        "no_of_ratings": 903,
        "discount_price": 599.0,
        "actual_price": 1500.0
    },
    {
        "name": "Technotech 1X4 HDMI Splitter with 1.4, Black (TT-HDMI-SPLITTER-1X4)",
        "ratings": 3.8,
        "no_of_ratings": 25,
        "discount_price": 899.0,
        "actual_price": 1499.0
    },
    {
        "name": "AnjuShree Choice Women Stitched Printed Cotton Anarkali Kurtis",
        "ratings": 3.9,
        "no_of_ratings": 1631,
        "discount_price": 513.0,
        "actual_price": 2284.0
    },
    {
        "name": "ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone with BTv5.0, Up to 21 Hours Playback, 40mm Drivers with Deep Bass, Wir...",
        "ratings": 3.8,
        "no_of_ratings": 62423,
        "discount_price": 749.0,
        "actual_price": 1899.0
    },
    {
        "name": "Dahua Audio 5MP Bullet Camera DH-HAC-B1A51P-A Compatible with J.K.Vision BNC",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 1813.0,
        "actual_price": 3980.0
    },
    {
        "name": "AUSHA Full HD 1080P WiFi Home Security Camera,2.4Ghz Wireless Security Camera,C9CCTV with 360 Degrees Panaromic View, Clou...",
        "ratings": 1.2,
        "no_of_ratings": 7,
        "discount_price": 1753.0,
        "actual_price": 2999.0
    },
    {
        "name": "ERH India (Pack of 2) F-Type RG6 Male to 2 Female 3-Way Coax Cable Splitter Adapter F-Type Connector for Video VCR Antenna...",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 238.0,
        "actual_price": 398.0
    },
    {
        "name": "Cruise 1.5 Ton 3 Star Inverter Split AC with 7-Stage Air Filtration (100% Copper, Convertible 4-in-1, PM 2.5 Filter, 2022 ...",
        "ratings": 4.3,
        "no_of_ratings": 23,
        "discount_price": 29990.0,
        "actual_price": 52900.0
    },
    {
        "name": "Isle Locada Women's Western (TAN) (EE ROSIE 04)",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 1849.0,
        "actual_price": 5295.0
    },
    {
        "name": "Mummamia Under The Bump Maternity Briefs in Soft Cotton; Suitable for Postpartam Use-Pack of 3",
        "ratings": 3.6,
        "no_of_ratings": 20,
        "discount_price": 699.0,
        "actual_price": 1200.0
    },
    {
        "name": "SebaMed Anti Dandruff Shampoo 200ml (New Packaging)",
        "ratings": 4.2,
        "no_of_ratings": 66,
        "discount_price": 552.0,
        "actual_price": 600.0
    },
    {
        "name": "Woodland Mens Gc 3447119 Sneaker",
        "ratings": 3.6,
        "no_of_ratings": 44,
        "discount_price": 2217.0,
        "actual_price": 3695.0
    },
    {
        "name": "AILTINO Women Potli Bag combo's and set's Multicolor (Set of 2)",
        "ratings": 3.6,
        "no_of_ratings": 28,
        "discount_price": 339.0,
        "actual_price": 1999.0
    },
    {
        "name": "Dervin Rectangular Sunglasses for Men & Women (Medium)",
        "ratings": 3.5,
        "no_of_ratings": 41,
        "discount_price": 229.0,
        "actual_price": 1499.0
    },
    {
        "name": "Travel Air Purifier,Timeage Wearable Air Purifier Necklace, Portable Mini Air Ionizer Eliminates Pollen,Smoke,Dust for Out...",
        "ratings": 3.9,
        "no_of_ratings": 36,
        "discount_price": 7413.0,
        "actual_price": 10413.0
    },
    {
        "name": "BATA Mens Magnus Toecap Formal Shoes",
        "ratings": 4.0,
        "no_of_ratings": 124,
        "discount_price": 909.0,
        "actual_price": 1299.0
    },
    {
        "name": "Glasswear Anti Glare Reading Glasses For Men And Women Protects From UV Rays All Power Are Available 1.00 1.25 1.50 1.75 ...",
        "ratings": 3.5,
        "no_of_ratings": 15,
        "discount_price": 528.0,
        "actual_price": 1199.0
    },
    {
        "name": "POLICE Groix Black Bi Fold Coin Leather Men Wallet,One Size",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 1199.0,
        "actual_price": 1999.0
    },
    {
        "name": "Assembly 42L Hard-Sided Polycarbonate Cabin Trolley Luggage Bag with Hard Shell Laptop Backpack (15.6 Inches) - Desert Ivory",
        "ratings": 3.9,
        "no_of_ratings": 21,
        "discount_price": 6999.0,
        "actual_price": 10498.0
    },
    {
        "name": "Milton Atlantis 900 Thermosteel Water Bottle, 750 ml, Orange",
        "ratings": 4.3,
        "no_of_ratings": 2369,
        "discount_price": 810.0,
        "actual_price": 980.0
    },
    {
        "name": "DIGITEK® (DTR-500BH) (152 CM) Professional Aluminum Tripod Cum Monopod, with Swivel Pan Head, Maximum Operating Height : 1...",
        "ratings": 4.3,
        "no_of_ratings": 2337,
        "discount_price": 4499.0,
        "actual_price": 4995.0
    },
    {
        "name": "Mehrang Cotton Blend Bootcut Parallel Trouser Pants for Women Regular Fit, Bellbottom Straight Pants for Womens",
        "ratings": 3.7,
        "no_of_ratings": 344,
        "discount_price": 349.0,
        "actual_price": 1699.0
    },
    {
        "name": "GoPro Sleeve + Lanyard White Hot for HERO8",
        "ratings": 4.5,
        "no_of_ratings": 147,
        "discount_price": 299.0,
        "actual_price": 1800.0
    },
    {
        "name": "RARE Women's Regular Fit Trousers",
        "ratings": 3.5,
        "no_of_ratings": 45,
        "discount_price": 749.0,
        "actual_price": 1599.0
    },
    {
        "name": "Hanumex Lens Filter Stepping UP CONVERTION Rings Set 8 Pcs Lens Stepping Down Ring||49-82mm||",
        "ratings": 4.3,
        "no_of_ratings": 21,
        "discount_price": 465.0,
        "actual_price": 899.0
    },
    {
        "name": "MILLETS Cell Phone Holder Clip and Ball Head Adapter Set for Tripod and Selfie Stick with 1/4 Screw, Universal Tripod Moun...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 199.0,
        "actual_price": 500.0
    },
    {
        "name": "Metro Men's Leather Moccasin Shoes (19-6527)",
        "ratings": 3.7,
        "no_of_ratings": 7,
        "discount_price": 1810.0,
        "actual_price": 3290.0
    },
    {
        "name": "Kuber Industries Reusable Large Size Grocery Bag Shopping Bag with Handle, Non-Woven Gift Bag Goodies Bag Gold Tote Bag (G...",
        "ratings": 3.8,
        "no_of_ratings": 47,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "VCREATE DECOR Floral Design PVC Wall Sticker & Decal (Multicolour, Size-58 cm X 41 cm), Botanical",
        "ratings": 3.6,
        "no_of_ratings": 107,
        "discount_price": 239.0,
        "actual_price": 799.0
    },
    {
        "name": "FUNDAY FASHION Women's Trendy Fleece Zipper Sweatshirt with Hoodie for Women and Girls",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 349.0,
        "actual_price": 1299.0
    },
    {
        "name": "Kara Multipurpose Obama Brown Portable Toiletry Kit - Genuine Leather Unisex Pouch for Travelling - Shaving Kit or Makeup ...",
        "ratings": 4.4,
        "no_of_ratings": 17,
        "discount_price": 1185.0,
        "actual_price": 4095.0
    },
    {
        "name": "Amazon Brand - Tavasya Women's Relaxed Bottom (210_Black_L)",
        "ratings": 4.1,
        "no_of_ratings": 29,
        "discount_price": 519.0,
        "actual_price": 1299.0
    },
    {
        "name": "Shoefly Men Shoes Black (1235) Latest Collection Comfortable Formal Shoes for Men",
        "ratings": 2.8,
        "no_of_ratings": 6,
        "discount_price": 525.0,
        "actual_price": 999.0
    },
    {
        "name": "nauti nati Girls Dress",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 549.0,
        "actual_price": 1199.0
    },
    {
        "name": "Todani Jems 7.25 Ratti Natural Certified Ruby Manik Ring",
        "ratings": 3.4,
        "no_of_ratings": 126,
        "discount_price": 398.0,
        "actual_price": 1999.0
    },
    {
        "name": "KEBILSHOP Multicell Charger for AA or 9 Volt Rechargeable Cell/Batteries.",
        "ratings": 3.6,
        "no_of_ratings": 152,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Studio Shringaar Women's Polyester Elbow Length Sleeves Saree Blouse.",
        "ratings": 4.1,
        "no_of_ratings": 511,
        "discount_price": 854.0,
        "actual_price": 1750.0
    },
    {
        "name": "LG 7.5 Kg 5 Star Smart Inverter Fully-Automatic Top Load Washing Machine (T75SKSF1Z, Middle Free Silver, TurboDrum | Smart...",
        "ratings": 4.2,
        "no_of_ratings": 346,
        "discount_price": 18850.0,
        "actual_price": 28990.0
    },
    {
        "name": "POD STUDIO Women's Black Pink Kpop Band Tshirts|Round Neck Regular Fit Half Sleeve Cotton Tshirt | K Pop Tshirts for Wome...",
        "ratings": 4.4,
        "no_of_ratings": 20,
        "discount_price": 599.0,
        "actual_price": 799.0
    },
    {
        "name": "Xthunder BTX9 Flex Pro Leather Series Wireless Neckband Bluetooth Headset with Upto 48 Hours Playtime, Magnetic Earbuds, B...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 2999.0
    },
    {
        "name": "KLICK Electric Room Heater for Winter 400W and 800W Heat Warmer with Blower comes in Two Heat Setting for Home (Wave-393)",
        "ratings": 2.4,
        "no_of_ratings": 2,
        "discount_price": 1189.0,
        "actual_price": 1250.0
    },
    {
        "name": "The Rosette Imprint Swim Bag Set with Wet & Dry Drawstring Bag and Pouch (PVC) (Waterproof) (Transport Design) (Dark Blue)",
        "ratings": 4.3,
        "no_of_ratings": 10,
        "discount_price": 675.0,
        "actual_price": 1195.0
    },
    {
        "name": "Jaipur Mart Preyans Strand Bracelet Rakhi with Roli Chawal for Men(3 Piece Combo) (RKH126CMB)",
        "ratings": 4.1,
        "no_of_ratings": 667,
        "discount_price": 102.62,
        "actual_price": 3099.0
    },
    {
        "name": "Clara Certified Opal 4.8cts or 5.25ratti Silver Pendant for Men & Women",
        "ratings": 3.8,
        "no_of_ratings": 8,
        "discount_price": 2546.0,
        "actual_price": 8350.0
    },
    {
        "name": "Craava Women Everyday Cotton Non Padded Non-Wired Air Sports Bra Combo Pack of 3 (Fit Size 28 to 34)",
        "ratings": 3.6,
        "no_of_ratings": 450,
        "discount_price": 369.0,
        "actual_price": 699.0
    },
    {
        "name": "Pilgrim Korean Beauty White Lotus Refreshing Face Mist & Toner | Toner for glowing skin | Alcohol-Free Mist & toner for op...",
        "ratings": 4.1,
        "no_of_ratings": 1453,
        "discount_price": 255.0,
        "actual_price": 300.0
    },
    {
        "name": "The Bebo Beautiful Sleeveless Maxi Dress for Women",
        "ratings": 3.3,
        "no_of_ratings": 29,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Maniac Color Block Women's Black Cotton Joggers",
        "ratings": 3.0,
        "no_of_ratings": 11,
        "discount_price": 371.0,
        "actual_price": 1499.0
    },
    {
        "name": "Skechers Men Go Run Focus-Athos Shoes",
        "ratings": 4.0,
        "no_of_ratings": 319,
        "discount_price": 4790.0,
        "actual_price": 4799.0
    },
    {
        "name": "JBL E65BTNC by Harman Wireless Over-Ear Active Noise Cancelling Headphones with Mic (Blue)",
        "ratings": 3.2,
        "no_of_ratings": 2027,
        "discount_price": 7999.0,
        "actual_price": 11499.0
    },
    {
        "name": "Aks Australia Cricket Studs Rubber White/Blue Size 6 With Wrist Band Cotton 5\" Milange Blue",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1684.0,
        "actual_price": 2098.0
    },
    {
        "name": "Men's Latest Elevator Height Increasing Faux Leather Slip-on Boots",
        "ratings": 2.7,
        "no_of_ratings": 8,
        "discount_price": 1499.0,
        "actual_price": 2999.0
    },
    {
        "name": "Dixcy Scott Maximus Men's Solid Regular (MAXV-003-GLIDE Vest-P2 White L)",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 334.0,
        "actual_price": 418.0
    },
    {
        "name": "SIR CORBETT Men's Synthetic Formal Lace Up Shoes(Special Stich)",
        "ratings": 3.6,
        "no_of_ratings": 49,
        "discount_price": 662.0,
        "actual_price": 2699.0
    },
    {
        "name": "AAHIRA Women Chanderi Cotton Unstitched Salwar Suit Dress Material With Thread Embroidery And Sequence Work(Free Size)",
        "ratings": 3.1,
        "no_of_ratings": 55,
        "discount_price": 854.0,
        "actual_price": 5999.0
    },
    {
        "name": "Discount4product Oh My God Movie Metal Alloy Chrome Keychain",
        "ratings": 3.2,
        "no_of_ratings": 27,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "Caprese Women's Satchel handbag",
        "ratings": 4.2,
        "no_of_ratings": 121,
        "discount_price": 1759.0,
        "actual_price": 6499.0
    },
    {
        "name": "Bevy Pearls Oxidised Silver Antique Trendy Boho Tribal Vintage Coin Necklace Long Necklace for Women and Girls",
        "ratings": 3.8,
        "no_of_ratings": 3,
        "discount_price": 448.0,
        "actual_price": 1999.0
    },
    {
        "name": "Contigo Ashland Autospout Water Bottle with Flip Straw, Large BPA Free Drinking Bottle, Sports Flask, Leakproof Gym Bottl...",
        "ratings": 4.6,
        "no_of_ratings": 2079,
        "discount_price": 1249.0,
        "actual_price": 1499.0
    },
    {
        "name": "Amayra Women's Rayon Printed Maroon Anarkali Kurta with Palazzos and Dupatta Set",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 2999.0
    },
    {
        "name": "MYL Universal Soundbar Wall Mount Bracket - Works with All Soundbars Including All Leading Brands - Depth Adjustable for D...",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "PRASANG Temple Jewellery set for bridal 5004",
        "ratings": 3.1,
        "no_of_ratings": 4,
        "discount_price": 3599.0,
        "actual_price": 3699.0
    },
    {
        "name": "The Derma Co 20% Vitamin C Face Serum For Unisex For Skin Radiance, 20ml (Dermaco)",
        "ratings": 3.9,
        "no_of_ratings": 1459,
        "discount_price": 817.0,
        "actual_price": 899.0
    },
    {
        "name": "Miss Claire Natural Mineral Compact Powder, 23 Brown, 7 g",
        "ratings": 4.1,
        "no_of_ratings": 49,
        "discount_price": 380.0,
        "actual_price": 495.0
    },
    {
        "name": "Kirti Sales 7.25 Ratti - 6.45 Carat Unheated Untreated Ceylone Yellow Sapphire Pukhraj Stone Original Certified Natural Ge...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1589.0,
        "actual_price": 4999.0
    },
    {
        "name": "Dark Wost Sunglasses for men Wayfarer Latest and Stylish Sunglasses | Original Polarized and 100% UV Protected | Men & Wom...",
        "ratings": 3.6,
        "no_of_ratings": 8,
        "discount_price": 370.0,
        "actual_price": 1449.0
    },
    {
        "name": "PRIKNIK Carbon Finish Trimmable Car Spoiler Car Lip Spoiler with Dual Adhesive Tape Compatible with Cars",
        "ratings": 3.8,
        "no_of_ratings": 351,
        "discount_price": 1894.0,
        "actual_price": 4700.0
    },
    {
        "name": "NAVA PAVA 50 Meters Golden Tape for Home Floor Tile Gap (Multipurpose) Waterproof Wallpaper Tape, Tiles Gap Stickers for F...",
        "ratings": 3.6,
        "no_of_ratings": 7,
        "discount_price": 209.0,
        "actual_price": 999.0
    },
    {
        "name": "Diversify Men’s Round Neck Regular Fit T-Shirt",
        "ratings": 3.3,
        "no_of_ratings": 166,
        "discount_price": 399.0,
        "actual_price": 1499.0
    },
    {
        "name": "PLUMBURY® Women's Cotton Spandex Sanitary Period Panties Menstrual Postpartum Underwear (Pack of 3)",
        "ratings": 3.8,
        "no_of_ratings": 79,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Puma Mens Hybrid Nx Ozone Running Shoe",
        "ratings": 4.1,
        "no_of_ratings": 282,
        "discount_price": 5599.0,
        "actual_price": 7999.0
    },
    {
        "name": "MSTECH 1080p Full HD Spy Wireless Small Camera with WiFi Module IP P2P Video Recorder Security Nanny Motion Detection for ...",
        "ratings": 2.7,
        "no_of_ratings": 3,
        "discount_price": 2480.0,
        "actual_price": 4999.0
    },
    {
        "name": "MANOHARI Most Trendy Banarasi Silk Woven Pattern Jacquard Saree for Women With Blouse Piece",
        "ratings": 3.5,
        "no_of_ratings": 4,
        "discount_price": 2799.0,
        "actual_price": 9999.0
    },
    {
        "name": "FELLAMO Girls/Women 3 Button Blazzer-33",
        "ratings": 2.5,
        "no_of_ratings": 6,
        "discount_price": 849.0,
        "actual_price": 1999.0
    },
    {
        "name": "ACUTAS Protective Silicone Remote Case for LG AN-MR600/LG AN-MR650 Magic Remote Cover Shockproof Washable Remote Holder fo...",
        "ratings": 4.4,
        "no_of_ratings": 406,
        "discount_price": 298.0,
        "actual_price": 999.0
    },
    {
        "name": "1Pc Cosmetic Puff Powder Smooth Women's Makeup Foundation Sponge Beauty Make Up Tools & Accessories Water Drop Blending Shape",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 50.0,
        "actual_price": 149.0
    },
    {
        "name": "Bigmuscles Nutrition The Real Burnz Fast Acting Fat Burner (Pack of 60N tablets) | Weight Management | Increased Energy, E...",
        "ratings": 3.7,
        "no_of_ratings": 157,
        "discount_price": 449.0,
        "actual_price": 799.0
    },
    {
        "name": "Puma Mens One8 Mid Sneakers",
        "ratings": 4.3,
        "no_of_ratings": 77,
        "discount_price": 4050.0,
        "actual_price": 8999.0
    },
    {
        "name": "MASALA POTLI® Professional 100% Cotton PACK OF 2 Hung Curd Hemmed Edges MUSLIN Cloth for Straining, Roti Cover, Cheese, Yo...",
        "ratings": 4.3,
        "no_of_ratings": 5,
        "discount_price": 149.0,
        "actual_price": 600.0
    },
    {
        "name": "Wooden Twist Stool for Living Room Soft Fabric Comfortable Cushion Ottoman Footrest Stool (Beige)",
        "ratings": 2.6,
        "no_of_ratings": 40,
        "discount_price": 1999.0,
        "actual_price": 5999.0
    },
    {
        "name": "Vellinto Royal Look Monk Strap Shoes For Men ll Casual Shoes For Men ll Latest Formal Boots for Men Boots For Men",
        "ratings": 3.8,
        "no_of_ratings": 112,
        "discount_price": 715.0,
        "actual_price": 1299.0
    },
    {
        "name": "Fabme Women's Cotton Printed Night Suit Set",
        "ratings": 3.5,
        "no_of_ratings": 506,
        "discount_price": 529.0,
        "actual_price": 1499.0
    },
    {
        "name": "Meenaz Men Jewellery Black Stainless Steel Ring for Men Boys Fancy Stylish Rings Valentine Gift for Boyfriend -MR901 (23)",
        "ratings": 3.6,
        "no_of_ratings": 3,
        "discount_price": 399.0,
        "actual_price": 4500.0
    },
    {
        "name": "Port Men's Brown Formal Shoes -10 UK",
        "ratings": 3.6,
        "no_of_ratings": 74,
        "discount_price": 427.0,
        "actual_price": 999.0
    },
    {
        "name": "boAt Newly Launched Rockerz 255 Max in Ear Earphones with 60H Playtime, EQ Modes, Power Magnetic Earbuds, Beast™ Mode, EN...",
        "ratings": 4.3,
        "no_of_ratings": 183,
        "discount_price": 1399.0,
        "actual_price": 3990.0
    },
    {
        "name": "Redmi 139 cm (55 inches) 4K Ultra HD Android Smart LED TV X55 | L55M6-RA (Black)",
        "ratings": 4.2,
        "no_of_ratings": 47642,
        "discount_price": 39990.0,
        "actual_price": 54999.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Regular Fit T-Shirt",
        "ratings": 3.5,
        "no_of_ratings": 15,
        "discount_price": 356.0,
        "actual_price": 1099.0
    },
    {
        "name": "Vaamsi Cotton Printed Kurti(VCK1136_Red)",
        "ratings": 4.0,
        "no_of_ratings": 4247,
        "discount_price": 389.0,
        "actual_price": 1499.0
    },
    {
        "name": "Paras Cotton Camisole Tank Top Vest Top Inner Wear Camis Raceback for Women Girls (Pack of 2)",
        "ratings": 3.1,
        "no_of_ratings": 7,
        "discount_price": 399.0,
        "actual_price": 539.0
    },
    {
        "name": "RangTeq Multipurpose Different Size Combo of 2 Yoga Print Jute Lunch Carry Bag with Zipper Closure Beige",
        "ratings": 3.0,
        "no_of_ratings": 16,
        "discount_price": 280.0,
        "actual_price": 599.0
    },
    {
        "name": "Philips Audio MMS2220B 2.1 Speaker 120W Bluetooth Convertible Multimedia Soundbar/Speaker (Black)",
        "ratings": 4.0,
        "no_of_ratings": 12499,
        "discount_price": 11499.0,
        "actual_price": 12999.0
    },
    {
        "name": "Puma unisex-adult X-ray 2 Square Sneaker",
        "ratings": 4.9,
        "no_of_ratings": 15,
        "discount_price": 2100.0,
        "actual_price": 6999.0
    },
    {
        "name": "LipiWorld® 131B AC Remote Compatible for Haier AC",
        "ratings": 3.9,
        "no_of_ratings": 19,
        "discount_price": 459.0,
        "actual_price": 799.0
    },
    {
        "name": "Aimly Women's Cotton Knee Length Skirt Slip - Pack of 3",
        "ratings": 3.9,
        "no_of_ratings": 14,
        "discount_price": 749.0,
        "actual_price": 1999.0
    },
    {
        "name": "Protoner 8 in 1 Decline Adjustable Bench, Black",
        "ratings": 3.7,
        "no_of_ratings": 27,
        "discount_price": 2515.72,
        "actual_price": 6999.0
    },
    {
        "name": "Red Tape Men's Classic Fit Shirt",
        "ratings": 3.7,
        "no_of_ratings": 521,
        "discount_price": 1238.0,
        "actual_price": 2999.0
    },
    {
        "name": "Quadmarq Electronics 6 inches 12 Volt DC Automotive & Multipurpose Fan for (Car/Home/Kitchen/Personal Use/Warehouse/Office...",
        "ratings": 3.1,
        "no_of_ratings": 359,
        "discount_price": 490.0,
        "actual_price": 599.0
    },
    {
        "name": "Baggit Women's Tote Handbag - Medium (Purple)",
        "ratings": 4.3,
        "no_of_ratings": 12,
        "discount_price": 1259.0,
        "actual_price": 2090.0
    },
    {
        "name": "wipro Garnet Base B22 10-Watt LED Bulb (White) - Pack of 10",
        "ratings": 3.8,
        "no_of_ratings": 21,
        "discount_price": 779.03,
        "actual_price": 5500.0
    },
    {
        "name": "Ruggers by Unlimited Men's Regular Fit Shirt",
        "ratings": 3.0,
        "no_of_ratings": 7,
        "discount_price": 714.0,
        "actual_price": 1599.0
    },
    {
        "name": "Arka Home Products Canvas Eco-Friendly, Washable, Reusable Water Bottle Bags ( Off-White ) - Set of 2",
        "ratings": 4.0,
        "no_of_ratings": 64,
        "discount_price": 205.0,
        "actual_price": 400.0
    },
    {
        "name": "Jack & Jones Men Sneakers",
        "ratings": 3.3,
        "no_of_ratings": 7,
        "discount_price": 1249.0,
        "actual_price": 2499.0
    },
    {
        "name": "Jungle Magic Doodle Waterz - Reusable I Water Colouring Book - Panchtantra Story I Lion & Talking Cave I Self-Drying with ...",
        "ratings": 4.2,
        "no_of_ratings": 2521,
        "discount_price": 275.0,
        "actual_price": 329.0
    },
    {
        "name": "KEKEMI 3 Fold UV Plain Automatic Sun & Rain Umbrella for Men & Women (Pack of 1)",
        "ratings": 3.6,
        "no_of_ratings": 17,
        "discount_price": 404.0,
        "actual_price": 1199.0
    },
    {
        "name": "PAW PAW Reusable Cloth Diaper for Babies | Perfect for Babies 4-8 Months | Adjustable, Washable & Reusable Cloth Diaper fo...",
        "ratings": 3.5,
        "no_of_ratings": 1984,
        "discount_price": 399.0,
        "actual_price": 449.0
    },
    {
        "name": "ZeniQ 8K Certified HDMI 2.1, 3 Meters, eARC Priority, 48Gbps 4K@120hz, 8K@60Hz, HDCP 2.2, 2.3, Dolby Vision 4:4:4 HDR, Com...",
        "ratings": 4.4,
        "no_of_ratings": 405,
        "discount_price": 2599.0,
        "actual_price": 4999.0
    },
    {
        "name": "Yellow Chimes Hair Clips for Women Girls Barrette Hair Clips for Women Hair Accessories for Women Butterfly Clips for Wome...",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 855.0
    },
    {
        "name": "SHOPEE 52mm Flower Shape Lens Hood for Nikon D3200 D40 D3000 D5100 D3100 D60 D5000 for Nikon nikor AF-S DX 18-55mm f/3.5-...",
        "ratings": 3.7,
        "no_of_ratings": 3187,
        "discount_price": 149.0,
        "actual_price": 400.0
    },
    {
        "name": "TWINLIGHT Akshu�s Collection Amazing Women�s Western Polycotton Top",
        "ratings": 3.6,
        "no_of_ratings": 77,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "S KUMAR GEMS & JEWELS Natural Cats Eye/Lahsuniya/Lahsuniya 5.50 Carat/Ct Certified Energized Loose Gemstone for Men",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 675.0,
        "actual_price": 3500.0
    },
    {
        "name": "Indya Women's Georgette Regular Pink Foil Flared High Slit Kurta",
        "ratings": 3.2,
        "no_of_ratings": 11,
        "discount_price": 1090.0,
        "actual_price": 2400.0
    },
    {
        "name": "Liberty Womens Flexpro20e Running Shoes",
        "ratings": 2.2,
        "no_of_ratings": 2,
        "discount_price": 1215.0,
        "actual_price": 1599.0
    },
    {
        "name": "Le Gear Dri-Fit Helmet Skull Cap (White)",
        "ratings": 4.0,
        "no_of_ratings": 480,
        "discount_price": 140.0,
        "actual_price": 149.0
    },
    {
        "name": "Diversey SUMA DET D1.2 Y Manual Dishwash Detergent Concentrate (5 L)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1350.0,
        "actual_price": 1899.0
    },
    {
        "name": "BIRJIS 104GY Waterproof Laptop Backpack (Grey) 21 L",
        "ratings": 3.9,
        "no_of_ratings": 210,
        "discount_price": 439.0,
        "actual_price": 1250.0
    },
    {
        "name": "blackberrys Men's Solid Slim Fit T-Shirt (UKMU0605K1MA18FL38_Light Tan)",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 569.0,
        "actual_price": 1299.0
    },
    {
        "name": "LG 215 L 3 Star Direct-Cool Single Door Refrigerator (GL-B221ASPD, Scarlet Plumeria, Moist 'N' Fresh, 2022 Model)",
        "ratings": 3.8,
        "no_of_ratings": 38,
        "discount_price": 20490.0,
        "actual_price": 24999.0
    },
    {
        "name": "DANSR Sink Strainer for Kitchen Sink Drain Silicone Sink Stopper Garbage Disposal Drain Stopper 4.5'' Diameter (Blue Set o...",
        "ratings": 4.6,
        "no_of_ratings": 10,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "Lazard by Khadim's Men Tan Casual Loafer Shoe",
        "ratings": 3.0,
        "no_of_ratings": 8,
        "discount_price": 783.0,
        "actual_price": 1399.0
    },
    {
        "name": "Kore (PVC/ Rubber/ Coloured Rubber/ Steel/ Professional Metal Integrted)  10 - 30 Kg Spare Weight Plates Combo",
        "ratings": 3.7,
        "no_of_ratings": 10509,
        "discount_price": 199.0,
        "actual_price": 249.0
    },
    {
        "name": "SKiDE Geniune Leather Unisex wallet (brown)",
        "ratings": 4.2,
        "no_of_ratings": 876,
        "discount_price": 499.0,
        "actual_price": 1599.0
    },
    {
        "name": "KASGO Sports Kids T-Shirt (Crew Neck, Blue)",
        "ratings": 4.2,
        "no_of_ratings": 19,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "RawFruit Premium Gourmet Dried Orange Slice, 400g by HyperFoods",
        "ratings": 3.6,
        "no_of_ratings": 6,
        "discount_price": 549.0,
        "actual_price": 1099.0
    },
    {
        "name": "Amazon Brand - House & Shields Men's Cotton Regular Boxers",
        "ratings": 3.9,
        "no_of_ratings": 731,
        "discount_price": 441.8,
        "actual_price": 1099.0
    },
    {
        "name": "Vigorous Women's Cotton Body Bracer Shapewear Body Shaper for Girls (Dark Beige)",
        "ratings": 3.5,
        "no_of_ratings": 10,
        "discount_price": 1031.0,
        "actual_price": 1358.0
    },
    {
        "name": "Peora 316L Stainless Steel Gold Plated Set in You Band Ring for Men & Boys",
        "ratings": 3.4,
        "no_of_ratings": 2,
        "discount_price": 269.0,
        "actual_price": 1995.0
    },
    {
        "name": "digNity PU Synthetic Leather Sling Cross Body Travel Office Business Messenger One Side Shoulder Bag for Men",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 1199.0
    },
    {
        "name": "Darkbuck® Anime T Shirt for Men and Women Regular Shoyo Hinata Haikyuu Tshirts Unisex Pure Cotton Casual Wear Round Neck ...",
        "ratings": 4.4,
        "no_of_ratings": 9,
        "discount_price": 599.0,
        "actual_price": 2999.0
    },
    {
        "name": "U.S. POLO ASSN. Men Pants",
        "ratings": 4.0,
        "no_of_ratings": 64,
        "discount_price": 815.0,
        "actual_price": 1199.0
    },
    {
        "name": "Hidesign Blue Tri-Fold",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1677.0,
        "actual_price": 2195.0
    },
    {
        "name": "YAZU LIFESTYLE Women's Georgette Kurta sharara with Dupatta Set | Sharara Pant Set with Stitched Kurta",
        "ratings": 3.8,
        "no_of_ratings": 24,
        "discount_price": 1699.0,
        "actual_price": 3200.0
    },
    {
        "name": "KENT Elegant Compact RO+UF Water Purifier | Patented Mineral RO Technology | RO + UF + TDS Control + UV In-tank | 15 LPH O...",
        "ratings": 4.3,
        "no_of_ratings": 2717,
        "discount_price": 13100.0,
        "actual_price": 14900.0
    },
    {
        "name": "SSDN™ Cotton Roti Cover/Chapati Cover/Traditional Roti Rumals (Assorted Color & Design) - Set of 3, Square",
        "ratings": 3.4,
        "no_of_ratings": 25,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "DEELMO Men's Cotton Blend Full Sleeve Short Kurta Shirt with Mandarin Collar (42, Rama)",
        "ratings": 3.1,
        "no_of_ratings": 19,
        "discount_price": 649.0,
        "actual_price": 1999.0
    },
    {
        "name": "ROMEIZ - Two Wheeler - Scooty - Bike Cover for Yamaha R15 V1 Cover with Water-Resistant and Dust Proof Premium 190T Fabri...",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 349.0,
        "actual_price": 1199.0
    },
    {
        "name": "Women's Chanderi Cotton Plain Dupatta/Chunni with Golden Border-Black & Red (Combo of 2)",
        "ratings": 3.0,
        "no_of_ratings": 3,
        "discount_price": 399.0,
        "actual_price": 850.0
    },
    {
        "name": "Supersox Women's Regular Cotton Socks (Pack Of 3)",
        "ratings": 4.4,
        "no_of_ratings": 125,
        "discount_price": 309.0,
        "actual_price": 399.0
    },
    {
        "name": "Bourge Mens Reef-79 Running Shoes",
        "ratings": 3.8,
        "no_of_ratings": 47,
        "discount_price": 469.0,
        "actual_price": 999.0
    },
    {
        "name": "Nike Girls Flex Runner Fable (Gs) Young Athletes",
        "ratings": 4.4,
        "no_of_ratings": 57,
        "discount_price": 2384.0,
        "actual_price": 3995.0
    },
    {
        "name": "Ferro Analog Silver Dial Women's Watch-F21149C-B",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 2999.0,
        "actual_price": 6250.0
    },
    {
        "name": "Bombey Scientific Wine Hydrometer- (Measurement Range, 1000-1100) - Pack Of 1",
        "ratings": 3.1,
        "no_of_ratings": 6,
        "discount_price": 399.0,
        "actual_price": 749.0
    },
    {
        "name": "FUNDAY FASHION Women Solid Casual/Formal Button Down Shirt (Pack of 2)",
        "ratings": 3.6,
        "no_of_ratings": 249,
        "discount_price": 448.0,
        "actual_price": 1499.0
    },
    {
        "name": "Mextech DET-99C Digital Earth Tester",
        "ratings": 3.2,
        "no_of_ratings": 56,
        "discount_price": 3121.0,
        "actual_price": 4122.0
    },
    {
        "name": "Accessorize London 15X Multi Stone Stud Earrings Pack Multi|One Size",
        "ratings": 4.1,
        "no_of_ratings": 5,
        "discount_price": 363.0,
        "actual_price": 1345.0
    },
    {
        "name": "BRUTON Casual Sneaker Light Weight Winter Shoes Loafers for Men (Pack of 2)",
        "ratings": 2.8,
        "no_of_ratings": 13,
        "discount_price": 359.0,
        "actual_price": 2499.0
    },
    {
        "name": "Lino Perros Women's Clutch (Golden) (Numbers 1) (GOLDEN)",
        "ratings": 4.0,
        "no_of_ratings": 66,
        "discount_price": 978.0,
        "actual_price": 1995.0
    },
    {
        "name": "MIRCHI FASHION Women's Fancy Penny Cotton Blend Kalamkari Printed Saree with Blouse Piece",
        "ratings": 4.3,
        "no_of_ratings": 10,
        "discount_price": 479.0,
        "actual_price": 3299.0
    },
    {
        "name": "V2A Digital Boy's Watch (White Dial Red & Blue Colored Strap)",
        "ratings": 3.9,
        "no_of_ratings": 171,
        "discount_price": 795.0,
        "actual_price": 2199.0
    },
    {
        "name": "Solar Dashboard Idol Ring Car Decoration Air Freshener Automatic 360 Degree Solar Rotating Perfume Double Ring Diffuser fo...",
        "ratings": 3.2,
        "no_of_ratings": 39,
        "discount_price": 200.0,
        "actual_price": 499.0
    },
    {
        "name": "RUF & TUF Men's Slim Jeans",
        "ratings": 3.5,
        "no_of_ratings": 20,
        "discount_price": 1078.0,
        "actual_price": 1799.0
    },
    {
        "name": "RKR �Hair Rollers Curlers (Pack Of 6) (multicolour)",
        "ratings": 2.8,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "CIERGE Women's Flower Printed Jaipur Cotton Fabric Night Suit",
        "ratings": 3.2,
        "no_of_ratings": 180,
        "discount_price": 1091.0,
        "actual_price": 2999.0
    },
    {
        "name": "Fusefit Mens Black Hawk Running Shoe",
        "ratings": 3.7,
        "no_of_ratings": 50,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "Brainwavz 4.4\" Adhesive Floating Shelf for Speakers, Security Cameras, Baby Monitors, Plants, Toys & More, Screwless Unive...",
        "ratings": 4.1,
        "no_of_ratings": 45,
        "discount_price": 699.0,
        "actual_price": 2299.0
    },
    {
        "name": "Shining Diva Fashion Latest Multilayer Western Neckpiece Neck Chain Necklace for Women and Girls (12146np)",
        "ratings": 2.9,
        "no_of_ratings": 16,
        "discount_price": 199.0,
        "actual_price": 1499.0
    },
    {
        "name": "U.S. CROWN vegan PU Crossbody Bag for Women Designer Handbag Quilted 3 partition pockets Casual Small Crossbody Purse Larg...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Star Weaves Washing Machine Cover for IFB 8 Kg 5 Star Fully-Automatic Front Load Washing Machine Senator Plus SX - Waterpr...",
        "ratings": 3.7,
        "no_of_ratings": 68,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Kuber Industries Polyester Dot Design Foldable Potli|Shopping|Gifting, Hand Bag With Handle Pack of 2 (Yellow)",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 240.0,
        "actual_price": 599.0
    },
    {
        "name": "GRECIILOOKS Top for Women - Chex Pattern Stand Collar Keyhole Cotton Top & Long Puff Sleeve Suitable for Function, Office,...",
        "ratings": 4.2,
        "no_of_ratings": 32,
        "discount_price": 298.0,
        "actual_price": 2299.0
    },
    {
        "name": "Janasya Women's Rust Cotton Western Dress",
        "ratings": 3.6,
        "no_of_ratings": 8,
        "discount_price": 1260.0,
        "actual_price": 3599.0
    },
    {
        "name": "DARKVELLY Women’s Cotton Lycra Tummy Control 4-in-1 Blended High Waist Tummy and Thigh Shapewear",
        "ratings": 3.2,
        "no_of_ratings": 51,
        "discount_price": 279.0,
        "actual_price": 499.0
    },
    {
        "name": "HIKVISION Infrared 1080p FHD 2MP 360° Viewing Area Security Camera, White",
        "ratings": 3.3,
        "no_of_ratings": 39,
        "discount_price": 2100.0,
        "actual_price": 2200.0
    },
    {
        "name": "Aaramkhor Gym Round Neck Half Sleeve T-Shirt for Men | Yoga se hi Hoga | Witty | Fitness",
        "ratings": 3.7,
        "no_of_ratings": 3,
        "discount_price": 599.0,
        "actual_price": 899.0
    },
    {
        "name": "INDO ERA Women's Cotton Straight Kurta",
        "ratings": 3.4,
        "no_of_ratings": 395,
        "discount_price": 299.0,
        "actual_price": 1999.0
    },
    {
        "name": "BIBA Women's Polyester Salwar Suit Set",
        "ratings": 3.4,
        "no_of_ratings": 43,
        "discount_price": 1709.0,
        "actual_price": 3799.0
    },
    {
        "name": "Verobelle Women Vegan Leather Small Handbags Fashion Satchel Bags Sling Bag Top Handle",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 461.0,
        "actual_price": 1699.0
    },
    {
        "name": "Park Avenue Men's Slim Fit Shirt",
        "ratings": 2.6,
        "no_of_ratings": 3,
        "discount_price": 949.0,
        "actual_price": 1999.0
    },
    {
        "name": "Lion King by Wear Your Mind Boy's Regular Round Neck Short Sleeves T-Shirt",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 331.0,
        "actual_price": 899.0
    },
    {
        "name": "THE BLAZZE Men's Blank Stringer Y Back Bodybuilding Gym Tank Tops",
        "ratings": 3.1,
        "no_of_ratings": 135,
        "discount_price": 499.0,
        "actual_price": 1499.0
    },
    {
        "name": "Faserz Women's Geometric Digital Printed Chanderi Silk Dupatta (Pink)",
        "ratings": 4.2,
        "no_of_ratings": 121,
        "discount_price": 595.0,
        "actual_price": 1399.0
    },
    {
        "name": "Metro Men's Leather Moccasin (71-8494)",
        "ratings": 4.0,
        "no_of_ratings": 14,
        "discount_price": 1920.0,
        "actual_price": 3490.0
    },
    {
        "name": "Wolpin 10 Pcs Seal Clip for Packet Sealing with Storage Box Fridge Magnet, Food Snack Bag Pouch Clip Sealer Large, Plastic...",
        "ratings": 2.0,
        "no_of_ratings": 2,
        "discount_price": 189.0,
        "actual_price": 599.0
    },
    {
        "name": "Zwart 25 Ltrs Black and Red School Backpack (SUPROV-R)",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 1703.0,
        "actual_price": 4400.0
    },
    {
        "name": "BASIICS Men's Cotton Briefs (Pack of 2)",
        "ratings": 4.4,
        "no_of_ratings": 9,
        "discount_price": 539.0,
        "actual_price": 599.0
    },
    {
        "name": "SHOPEE 1/4\"-20 Male to 1/4\"-20 Threaded Screw Adapter Tripod Screw Converter Compatible with Camera Cage Light Stand Monop...",
        "ratings": 4.0,
        "no_of_ratings": 52,
        "discount_price": 249.0,
        "actual_price": 500.0
    },
    {
        "name": "ONICORN® Blind Spot Mirrors, 2 inch Round HD Glass Convex 360° Wide Angle Side Rear View Mirror with ABS Housing for Cars,...",
        "ratings": 3.3,
        "no_of_ratings": 16,
        "discount_price": 330.0,
        "actual_price": 999.0
    },
    {
        "name": "TEAKWOOD Genuine Leather High Ankle Classic Boots Shoes for Men(Brown)",
        "ratings": 3.7,
        "no_of_ratings": 90,
        "discount_price": 5199.0,
        "actual_price": 12999.0
    },
    {
        "name": "UB WOLF Long Sleeves V- Neck Georgette Chiffon Lucknowi Chikankari Straight Kurti",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 744.0,
        "actual_price": 1499.0
    },
    {
        "name": "Darkbuck® T Shirt for Women and Men Regular Fit American Singer Billie Eilish Tshirt Unisex Pure Cotton Casual Wear Round ...",
        "ratings": 4.5,
        "no_of_ratings": 22,
        "discount_price": 599.0,
        "actual_price": 2999.0
    },
    {
        "name": "SHRIEZ Oversized Tshirt for Ladies Black Face & TD Green Printed T-Shirt for Women/Girls",
        "ratings": 3.5,
        "no_of_ratings": 16,
        "discount_price": 360.0,
        "actual_price": 699.0
    },
    {
        "name": "Zero Size Vest (Pack of 6) New Born Infant Baby Kids Inner Wear Baniyan Unisex Cotton Baby Sando Vest 100% Cotton Housiry...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 309.0,
        "actual_price": 999.0
    },
    {
        "name": "BATA mens Black Formal Shoes 7 UK (8216551)",
        "ratings": 3.7,
        "no_of_ratings": 265,
        "discount_price": 739.0,
        "actual_price": 999.0
    },
    {
        "name": "Chakradhari Flat Pure Nepaliya Copper Kada For Astrology And Ayurved Free Size For Men",
        "ratings": 4.4,
        "no_of_ratings": 1201,
        "discount_price": 421.0,
        "actual_price": 500.0
    },
    {
        "name": "Prolite Tripod PL 720-HW (67 inch | Payload Upto 5 kg) | for DSLR, Video Camera, Mobile, GoPro",
        "ratings": 4.2,
        "no_of_ratings": 1553,
        "discount_price": 1769.0,
        "actual_price": 2995.0
    },
    {
        "name": "Action Pro Double Bracket Bridge Mount Compatible with GoPro Hero 11 10 9 8 7 6 5 4 3+ 3 SJCAM YI EKEN 4K Xiaomi",
        "ratings": 3.4,
        "no_of_ratings": 18,
        "discount_price": 399.0,
        "actual_price": 499.0
    },
    {
        "name": "Syngenta Karate 100ml Insecticide (Lambda-Cyhalothrin EC), Pack of 1",
        "ratings": 4.1,
        "no_of_ratings": 103,
        "discount_price": 80.0,
        "actual_price": 84.0
    },
    {
        "name": "Irkaja 1.5 Meter Front & Top Load Washing Machine Flexible Inlet Hose Pipe with Lock Type Tap Adapter (1.5 Meter)",
        "ratings": 3.8,
        "no_of_ratings": 262,
        "discount_price": 299.0,
        "actual_price": 449.0
    },
    {
        "name": "LUX VENUS Men's Cotton Vest (Pack of 3)",
        "ratings": 4.0,
        "no_of_ratings": 11334,
        "discount_price": 228.0,
        "actual_price": 299.0
    },
    {
        "name": "Jockey Men's Cotton PocoT Brief (Pack of 3) (8035-0310-White XXL_White_2XL)",
        "ratings": 4.3,
        "no_of_ratings": 95,
        "discount_price": 516.0,
        "actual_price": 546.0
    },
    {
        "name": "SriHD A8 5MP IP Camera WiFi Outdoor Home Security Pan & Tilt PTZ Camera with 2 Way Talk 1080p FullHD 355° Coverage Color N...",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 4099.0,
        "actual_price": 12994.0
    },
    {
        "name": "Bajaj DMH 95 95L Desert Air Cooler with DuraMarine™ Pump (2-Yr Warranty), Ice Chamber, Antibacterial Hexacool Technology, ...",
        "ratings": 4.0,
        "no_of_ratings": 63,
        "discount_price": 11899.0,
        "actual_price": 17890.0
    },
    {
        "name": "Motorcycle Bike Fancy Stickers and Decals kit Stickers for Pulsar 135 LS 4 Valve",
        "ratings": 4.2,
        "no_of_ratings": 6,
        "discount_price": 449.0,
        "actual_price": 600.0
    },
    {
        "name": "LL LEATHER LAND DESIGNER BAGS Women's PU Hand Bag (LL_532_Parent)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 1899.0
    },
    {
        "name": "Womanix Women's Combo Handbag (Set of 4)",
        "ratings": 3.8,
        "no_of_ratings": 29,
        "discount_price": 799.0,
        "actual_price": 3699.0
    },
    {
        "name": "Malabar Gold and Diamonds 22 KT (916) purity Yellow Gold Malabar Gold Earring ERSK3139B for Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 7489.0,
        "actual_price": 8599.0
    },
    {
        "name": "True United Men's Cotton Checkered Half Sleeve Shirt",
        "ratings": 3.7,
        "no_of_ratings": 66,
        "discount_price": 479.0,
        "actual_price": 1499.0
    },
    {
        "name": "POLSTAR Lehar 400mm High Speed Wall Fan (Ivory) With 100% Copper Motor",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2699.0,
        "actual_price": 4570.0
    },
    {
        "name": "Yellow Chimes Rings for Men Stainless Steel Black Ring Square Shaped Crystal Black Steel Ring for Men and Boys.",
        "ratings": 4.1,
        "no_of_ratings": 11,
        "discount_price": 549.0,
        "actual_price": 1890.0
    },
    {
        "name": "Aameria® RO Water Purifier TAP (Chrome Plated Silver) Compatible with All RO Water Purifiers",
        "ratings": 4.0,
        "no_of_ratings": 137,
        "discount_price": 224.0,
        "actual_price": 290.0
    },
    {
        "name": "Salvus App SOLUTIONS Designer Plastic Standard Hair Stick/Juda Pin for Women and Girls Pack of 3",
        "ratings": 3.1,
        "no_of_ratings": 12,
        "discount_price": 249.0,
        "actual_price": 599.0
    },
    {
        "name": "Urban Tribe Transformer 2.0 Multipurpose 15.6 Inch| Water Repellent |20 litres | Laptop Backpack for Men and Women (Navy B...",
        "ratings": 3.9,
        "no_of_ratings": 137,
        "discount_price": 2023.0,
        "actual_price": 2999.0
    },
    {
        "name": "YouBella Jewellery Celebrity Inspired Adjustable Kamarband Waist Belt for Women/Girls (YB_Belt_16) (Black)",
        "ratings": 4.3,
        "no_of_ratings": 164,
        "discount_price": 314.0,
        "actual_price": 1299.0
    },
    {
        "name": "Amazon Brand - Solimo 12-inch Plastic & Glass Wall Clock - Digi Time (Silent Movement), Black",
        "ratings": 3.8,
        "no_of_ratings": 40,
        "discount_price": 559.0,
        "actual_price": 1100.0
    },
    {
        "name": "Evolove Loose Fit Nighty Long Maxi Sleepwear Nightgown for Women's or Ladies with Stylish Button or Zipper Viscose Liva Pr...",
        "ratings": 3.7,
        "no_of_ratings": 269,
        "discount_price": 699.0,
        "actual_price": 2299.0
    },
    {
        "name": "NAYRAH Women's Rayon Floral Print Regular Wear Top",
        "ratings": 3.9,
        "no_of_ratings": 85,
        "discount_price": 498.0,
        "actual_price": 1499.0
    },
    {
        "name": "W For Woman Women's Cotton Straight Kurta",
        "ratings": 3.9,
        "no_of_ratings": 63,
        "discount_price": 509.0,
        "actual_price": 1699.0
    },
    {
        "name": "ZEYO Women's Cotton Heart Printed Night Suit Set of Top & Shorts 5223",
        "ratings": 3.8,
        "no_of_ratings": 409,
        "discount_price": 679.0,
        "actual_price": 1999.0
    },
    {
        "name": "Hidesign Women's Leather Wallet (Blue)",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 1599.0,
        "actual_price": 2995.0
    },
    {
        "name": "Pepe Jeans Men's Regular fit Casual Shirt",
        "ratings": 3.4,
        "no_of_ratings": 18,
        "discount_price": 2998.0,
        "actual_price": 2999.0
    },
    {
        "name": "Cold Fusion Women's/Girls Trendy Full Sleeves Varsity Crop Jacket",
        "ratings": 3.1,
        "no_of_ratings": 6,
        "discount_price": 469.0,
        "actual_price": 999.0
    },
    {
        "name": "Quote Marshals Night Fury Round Neck Black Cottan T-Shirt for Men's",
        "ratings": 4.4,
        "no_of_ratings": 18,
        "discount_price": 599.0,
        "actual_price": 1098.0
    },
    {
        "name": "SHERRY Women's Cotton Regular Bra",
        "ratings": 4.4,
        "no_of_ratings": 46,
        "discount_price": 410.0,
        "actual_price": 999.0
    },
    {
        "name": "LMDPRAJAPATIS 10.00 Ratti Zambian Emerald/Panna Earth Mind Stone Unheated Untreated Natural Original Certified AAA++ Quali...",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 990.0,
        "actual_price": 2890.0
    },
    {
        "name": "Centrino Men's 3385 Formal Shoes",
        "ratings": 3.8,
        "no_of_ratings": 87,
        "discount_price": 499.0,
        "actual_price": 2499.0
    },
    {
        "name": "Shining Diva Fashion 18k Gold Plated Latest Stylish Fancy Choker Traditional Pearl Necklace Jewellery Set for Women",
        "ratings": 3.5,
        "no_of_ratings": 125,
        "discount_price": 320.0,
        "actual_price": 1999.0
    },
    {
        "name": "21 Mukhi Rudraksha Original Certified With Silver Capping 32mm Dhaga Dori 21 Face Rudraksha Original Certified Nepal 21 मु...",
        "ratings": 3.0,
        "no_of_ratings": 5,
        "discount_price": 15290.0,
        "actual_price": 17000.0
    },
    {
        "name": "PIRASO Classy Blue Artificial Leather Wallet for Men & Boys",
        "ratings": 4.2,
        "no_of_ratings": 25,
        "discount_price": 299.0,
        "actual_price": 1599.0
    },
    {
        "name": "V MART Men's Slim Fit Shirt",
        "ratings": 3.9,
        "no_of_ratings": 5,
        "discount_price": 447.0,
        "actual_price": 525.0
    },
    {
        "name": "(Renewed) Gunter & Hanke Concord 5.0 Bluetooth Wireless Speaker",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 1645.0,
        "actual_price": 4995.0
    },
    {
        "name": "SAAKAA Women's Top",
        "ratings": 4.0,
        "no_of_ratings": 151,
        "discount_price": 749.0,
        "actual_price": 1299.0
    },
    {
        "name": "Amazon Brand - Symbol Girls Sophie Ballet Flats",
        "ratings": 3.3,
        "no_of_ratings": 68,
        "discount_price": 339.0,
        "actual_price": 1699.0
    },
    {
        "name": "CERO Hart-Dill Analogue Multicolour Dial Combo Boy's and Girl's Casual Watch",
        "ratings": 2.4,
        "no_of_ratings": 2,
        "discount_price": 289.0,
        "actual_price": 1499.0
    },
    {
        "name": "Sashay Boutique® Women's Full Length Maxi Dress (Multicolor)",
        "ratings": 3.2,
        "no_of_ratings": 39,
        "discount_price": 649.0,
        "actual_price": 1499.0
    },
    {
        "name": "Klepe Men Chunky/Platform Sneakers",
        "ratings": 3.1,
        "no_of_ratings": 80,
        "discount_price": 599.0,
        "actual_price": 2999.0
    },
    {
        "name": "QuikProf 3 in 1 Digital White Black Grey Balance Cards, Gray Exposure Card, color calibration",
        "ratings": 3.9,
        "no_of_ratings": 396,
        "discount_price": 236.0,
        "actual_price": 499.0
    },
    {
        "name": "Royal Wings LED Cool Touch Lamp Bluetooth Speaker, Wireless HiFi Speaker Light-USB Rechargeable-Portable with TWS",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 589.0,
        "actual_price": 1299.0
    },
    {
        "name": "ROOLIUMS Premium Women Winter Woolen Stretchable Lycra Leggings (Pack of 1) Free Size",
        "ratings": 3.2,
        "no_of_ratings": 50,
        "discount_price": 239.0,
        "actual_price": 600.0
    },
    {
        "name": "Bajaj DC2016 67L Desert Air Cooler for Home with DuraMarine Pump (2-Yr Warranty), Air Cooler for Room Cooling for Large Ro...",
        "ratings": 3.5,
        "no_of_ratings": 570,
        "discount_price": 9499.0,
        "actual_price": 12990.0
    },
    {
        "name": "Vembley Stunning Gold Plated Yellow Flower Pendant Necklace for Women and Girls",
        "ratings": 3.4,
        "no_of_ratings": 35,
        "discount_price": 196.0,
        "actual_price": 1499.0
    },
    {
        "name": "REMIXON Couple Watch with Beautiful Hubby & Wifey Printed Dial Watch - for Men & Women",
        "ratings": 3.2,
        "no_of_ratings": 7,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "Dollar Men's Cotton Trunk (Pack of 5) (Lehar Long O/E 85x5_Multicolor, 85 Cm)",
        "ratings": 3.1,
        "no_of_ratings": 3,
        "discount_price": 789.0,
        "actual_price": 1299.0
    },
    {
        "name": "iCasso MacBook Air 13 Inch Case 2020 2019 2018 Release A2337M1/ A1932/A2179 with Retina Display Touch ID, Durable Hard Pla...",
        "ratings": 4.5,
        "no_of_ratings": 3231,
        "discount_price": 1099.0,
        "actual_price": 1999.0
    },
    {
        "name": "US Polo Association Men REDICK Leather Sneakers",
        "ratings": 3.0,
        "no_of_ratings": 17,
        "discount_price": 1399.0,
        "actual_price": 3999.0
    },
    {
        "name": "United Colors of Benetton Men's Regular Fit T-Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 999.0
    },
    {
        "name": "Milton Stylo Tuff Jug 500 Inner Steel Hot & Cold Multi Purpose Flasks, Green, 500 ml",
        "ratings": 3.1,
        "no_of_ratings": 112,
        "discount_price": 292.0,
        "actual_price": 385.0
    },
    {
        "name": "NAFA Helmet Jaw Strap Mount with Mobile Holder & Screw Compatible with All Smartphones, GoPro, SJCAM, Yi, DJI Osmo Action...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 399.0,
        "actual_price": 1399.0
    },
    {
        "name": "SIR MASHUP Men's Synthetic Leather Comfortable Formal Shoes",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 549.0,
        "actual_price": 999.0
    },
    {
        "name": "BATA Mens Skyline Blue Casual Shoes",
        "ratings": 3.9,
        "no_of_ratings": 54,
        "discount_price": 503.4,
        "actual_price": 899.0
    },
    {
        "name": "LOUIS STITCH Men's Ferrari Red Italian Suede Leather Loafers Slip ons Moccasins Casual Driving Loafer Tassel Buckle Design",
        "ratings": 3.4,
        "no_of_ratings": 14,
        "discount_price": 1699.0,
        "actual_price": 6999.0
    },
    {
        "name": "Amrutam Fab Women Lehenga Choli",
        "ratings": 3.5,
        "no_of_ratings": 4,
        "discount_price": 859.0,
        "actual_price": 2999.0
    },
    {
        "name": "Herbalife Nutrition Natural Tulsi Afresh Energy Drink Mix",
        "ratings": 4.0,
        "no_of_ratings": 1055,
        "discount_price": 584.0,
        "actual_price": 848.0
    },
    {
        "name": "HUVORA ® Sports Sunglasses for Cycling Cricket Trekking || HYDROPHOBIC || Full Coverage || UV 400 Protection || Mirrored L...",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 3999.0
    },
    {
        "name": "STESHWK PU Leather Super Soft Plaid Pattern Shoulder Crossbody Fashion Bag For Women's With Shoulder Strap",
        "ratings": 4.8,
        "no_of_ratings": 34,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "DDASPRATION Women's Cotton Long T-Shirt",
        "ratings": 2.4,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Sidharth Gems 7.25 Ratti / 6.45 Carat Manik Stone Original Certified Natural Burma Ruby Loose Gemstone",
        "ratings": 3.3,
        "no_of_ratings": 21,
        "discount_price": 695.0,
        "actual_price": 1454.0
    },
    {
        "name": "Majestic Man Checkered Slim fit Casual Shirt",
        "ratings": 3.6,
        "no_of_ratings": 15,
        "discount_price": 429.0,
        "actual_price": 1499.0
    },
    {
        "name": "Styleville.in Women Sweatshirt",
        "ratings": 3.3,
        "no_of_ratings": 8,
        "discount_price": 284.79,
        "actual_price": 2199.0
    },
    {
        "name": "Zaveri Pearls Gold Tone Kundan & Pearls Studded Flowers Ethnic Head Chain For Women-ZPFK13110",
        "ratings": 4.1,
        "no_of_ratings": 35,
        "discount_price": 359.0,
        "actual_price": 1499.0
    },
    {
        "name": "Vantage® Sweat Slimming Belt for Men and Women (Free Size) Black Color",
        "ratings": 3.5,
        "no_of_ratings": 1301,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "DISPOZ Women Regular Fit Disposable Panties",
        "ratings": 4.1,
        "no_of_ratings": 11,
        "discount_price": 325.0,
        "actual_price": 450.0
    },
    {
        "name": "blue tree 10 ltrs (30 Cms) kids backpack butterfly",
        "ratings": 3.8,
        "no_of_ratings": 205,
        "discount_price": 288.0,
        "actual_price": 999.0
    },
    {
        "name": "Wireless Bluetooth Headphones Earphones for OnePlus Nord 2T Original Sports Bluetooth Wireless Earphone with Deep Bass and...",
        "ratings": 2.6,
        "no_of_ratings": 4,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Maharaja Whiteline Joy Elite 750W Mixer Grinder with 4 Jars, Black",
        "ratings": 4.1,
        "no_of_ratings": 1867,
        "discount_price": 4079.0,
        "actual_price": 5499.0
    },
    {
        "name": "Kerala Ayurveda Hamsapadadi Kwath 200ml| Herbal Thyroid Care Syrup| Combats Thyroid Dysfunction| Overall Thyroid Wellness|...",
        "ratings": 4.3,
        "no_of_ratings": 67,
        "discount_price": 243.0,
        "actual_price": 270.0
    },
    {
        "name": "Ishin Women's Chiffon Saree (Ishinchtra-20007_Red & Yellow)",
        "ratings": 3.4,
        "no_of_ratings": 1002,
        "discount_price": 611.0,
        "actual_price": 2099.0
    },
    {
        "name": "VERO MODA Women's Regular Fit T-Shirt",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 584.0,
        "actual_price": 1299.0
    },
    {
        "name": "Shaye Women Floral Print Multicolored Top with Round Neck | Long Sleeves | Keyhole Back | Drawstring in Sleeves",
        "ratings": 4.5,
        "no_of_ratings": 4,
        "discount_price": 999.0,
        "actual_price": 2500.0
    },
    {
        "name": "CARIZO Carbon Fiber Black Pattern Steering Wheel Cover, Men's and Women's Safe and Non-Slip Car Accessory Compatible with ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Lavie Women's Marma Dome Sling Bag| Ladies Purse Handbag",
        "ratings": 4.2,
        "no_of_ratings": 1033,
        "discount_price": 807.0,
        "actual_price": 2099.0
    },
    {
        "name": "Chloride Test Kit (10-1000 mg/l)",
        "ratings": 3.5,
        "no_of_ratings": 7,
        "discount_price": 1086.0,
        "actual_price": 1500.0
    },
    {
        "name": "ZU Mens Cotton Interlock Solid Round Neck Drop Shoulder T-Shirt",
        "ratings": 4.1,
        "no_of_ratings": 167,
        "discount_price": 449.1,
        "actual_price": 649.0
    },
    {
        "name": "RYNOCHI Cat Eye Metal Small Frame Imported From Medium Full Rim UV Protection Glasses (women girls) (Yellow)",
        "ratings": 2.4,
        "no_of_ratings": 2,
        "discount_price": 413.0,
        "actual_price": 1299.0
    },
    {
        "name": "Havells Aindrila Premium 400mm Wall Fan (Dusty Rose White)",
        "ratings": 4.1,
        "no_of_ratings": 125,
        "discount_price": 4498.0,
        "actual_price": 6575.0
    },
    {
        "name": "Rupa Frontline Men's Cotton Brief(Colors and Prints May Vary)",
        "ratings": 3.9,
        "no_of_ratings": 468,
        "discount_price": 550.0,
        "actual_price": 699.0
    },
    {
        "name": "RVM Jewels Supernatural Dean Winchester Mask Vintage Amulet Demon Castiel Angel Wings Pentagram Protective Pendant Necklac...",
        "ratings": 3.5,
        "no_of_ratings": 3,
        "discount_price": 289.0,
        "actual_price": 699.0
    },
    {
        "name": "AEROPOSTALE Men Blue Button-Down Collar Solid Casual Shirt",
        "ratings": 3.5,
        "no_of_ratings": 4,
        "discount_price": 1080.0,
        "actual_price": 2399.0
    },
    {
        "name": "Indian Art Villa Small Copper Water Dispenser Pot Tank, 7000 Ml",
        "ratings": 4.0,
        "no_of_ratings": 722,
        "discount_price": 2860.0,
        "actual_price": 8355.0
    },
    {
        "name": "Casa Copenhagen, 27 L - D15.3 Air Punch Collection Personal Air Cooler with Anti Bacterial Honeycomb Pads, 3rd Turbo Fan, ...",
        "ratings": 5.0,
        "no_of_ratings": 14,
        "discount_price": 4299.0,
        "actual_price": 9999.0
    },
    {
        "name": "Red Tape Men's Solid Regular Fit T-Shirt",
        "ratings": 3.7,
        "no_of_ratings": 88,
        "discount_price": 753.09,
        "actual_price": 2399.0
    },
    {
        "name": "Fastrack Women's Satchel (Black)",
        "ratings": 3.5,
        "no_of_ratings": 28,
        "discount_price": 1701.0,
        "actual_price": 4999.0
    },
    {
        "name": "jj jewellers Gold Nose Ring for Women",
        "ratings": 3.5,
        "no_of_ratings": 26,
        "discount_price": 2299.0,
        "actual_price": 2899.0
    },
    {
        "name": "Octave Men Blue Light Fade Stretchable Jeans",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1754.0,
        "actual_price": 2699.0
    },
    {
        "name": "Amazon Brand - Solimo Unbreakable 3A Fast Charging Tough Braided Micro USB Data Cable - 1.5 Meter, WHITE",
        "ratings": 4.0,
        "no_of_ratings": 136,
        "discount_price": 130.0,
        "actual_price": 249.0
    },
    {
        "name": "SWAPKART Bluetooth Remote Controller Shutter Button for Selfie Click & Portable for iOS, Android Devices (Random Colour)",
        "ratings": 4.3,
        "no_of_ratings": 405,
        "discount_price": 175.0,
        "actual_price": 499.0
    },
    {
        "name": "Honeywell USB to Micro USB cable, Fast Charging, 480 MBPS Transfer Speed, Nylon-Braided sync and charge cable, Male-to-Mal...",
        "ratings": 3.8,
        "no_of_ratings": 171,
        "discount_price": 149.0,
        "actual_price": 449.0
    },
    {
        "name": "SIOVS WiFi Mini IP Camera 1080P HD IR CCTV Infrared Night Vision Micro Cam Home Security",
        "ratings": 2.2,
        "no_of_ratings": 3,
        "discount_price": 995.0,
        "actual_price": 2999.0
    },
    {
        "name": "Techfire Fire 500v2 Neckband hi-bass Wireless Bluetooth Headphone Bluetooth Headset,Black",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "Canon XA11 Professional Camcorder, Optical, Black",
        "ratings": 4.4,
        "no_of_ratings": 257,
        "discount_price": 84999.0,
        "actual_price": 96795.0
    },
    {
        "name": "dB DESH BIDESH Women`s Traditional Bengali Tant Handloom Cotton Saree Prism Desigined With Blouse Piece",
        "ratings": 3.7,
        "no_of_ratings": 97,
        "discount_price": 711.0,
        "actual_price": 3180.0
    },
    {
        "name": "KOMTO Cross Body bag Single Shoulder Causal Large Capacity Polyester men chest bag",
        "ratings": 3.4,
        "no_of_ratings": 21,
        "discount_price": 997.0,
        "actual_price": 2999.0
    },
    {
        "name": "THE NILGIRIS EUCALYPTUS OIL & ESSENTIAL OILS DISTILLERY TNEOEOD Pure and Natural Therapeutic Grade A Ooty Eucalyptus Oil 3...",
        "ratings": 4.0,
        "no_of_ratings": 598,
        "discount_price": 206.0,
        "actual_price": 300.0
    },
    {
        "name": "a baby cherry - Baby Bib || 21st Century Bib || Waterproof Silicone Bib for Feeding Infants and Toddlers (6M to 5 Yr) || C...",
        "ratings": 4.4,
        "no_of_ratings": 1827,
        "discount_price": 789.0,
        "actual_price": 999.0
    },
    {
        "name": "Lino Perros Womens Synthetic Leather Satchel",
        "ratings": 4.0,
        "no_of_ratings": 285,
        "discount_price": 1509.0,
        "actual_price": 3695.0
    },
    {
        "name": "CAVALLO by Linen Club White Printed Regular Fit Casual Shirt for Men",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1349.0,
        "actual_price": 1799.0
    },
    {
        "name": "Bell BLSP153 Wireless Bluetooth Mini Speaker Compatible with Mobile,Music Players, Portable Gaming Devices, and Computer, ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 575.0,
        "actual_price": 1699.0
    },
    {
        "name": "Vooki Ecofriendly Hard Stains Removal Spray, Wipe for Toughest House Hold Stains & Toilet Bowl Cleaner, 100 Flush Protecti...",
        "ratings": 3.7,
        "no_of_ratings": 377,
        "discount_price": 415.71,
        "actual_price": 498.0
    },
    {
        "name": "WOMEN MARKS PINK-DIE-HANDLE-HAND BAG",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 974.0,
        "actual_price": 2999.0
    },
    {
        "name": "ADISA Women's & Girls' Sling Bag",
        "ratings": 4.1,
        "no_of_ratings": 1819,
        "discount_price": 495.0,
        "actual_price": 1499.0
    },
    {
        "name": "KBNBJ Women's Cotton Striped Maxi Nighty(Pack of 2)(KB_34&35_Blue &Brown_Free Size)",
        "ratings": 3.5,
        "no_of_ratings": 107,
        "discount_price": 799.0,
        "actual_price": 1499.0
    },
    {
        "name": "Merchant of Designs Men's Casual Cotton Polo Half Sleeve T-Shirt for Men/Collar Neck Regular Fit T-Shirt for Men(Polo T-Sh...",
        "ratings": 4.2,
        "no_of_ratings": 12,
        "discount_price": 499.0,
        "actual_price": 599.0
    },
    {
        "name": "CLEAN GEMS Certified Zircon American Diamond Gemstone 7.25 Ratti/6.60 Carat with Certificate for Men and Women",
        "ratings": 4.4,
        "no_of_ratings": 3,
        "discount_price": 1225.0,
        "actual_price": 2635.0
    },
    {
        "name": "Bond Street by (Red Tape) Men Brown Loafers",
        "ratings": 3.3,
        "no_of_ratings": 21,
        "discount_price": 1470.0,
        "actual_price": 4199.0
    },
    {
        "name": "Peter England Men AV Linen Casual Shirt",
        "ratings": 3.8,
        "no_of_ratings": 6,
        "discount_price": 1609.0,
        "actual_price": 1999.0
    },
    {
        "name": "Lux Cozi Men's Cotton Boxers (Pack of 3) (8904209873361_COZI_Longs_ICDF_95_Assorted) (Color & Prints May Vary)",
        "ratings": 4.0,
        "no_of_ratings": 372,
        "discount_price": 389.0,
        "actual_price": 399.0
    },
    {
        "name": "Fllik Winter Full Legs Warm Thick Fur Lined Fleece Leggings Tight Stocking Thermal Legging for Women Free Size Skin Color",
        "ratings": 3.8,
        "no_of_ratings": 37,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "KILLER Men's Relaxed Fit T-Shirt",
        "ratings": 3.6,
        "no_of_ratings": 123,
        "discount_price": 429.0,
        "actual_price": 1399.0
    },
    {
        "name": "Redesign Performance Headband for Men and Women - Running, Cycling, Yoga, Tennis, Badminton & Other Sports (Multiple Color...",
        "ratings": 4.1,
        "no_of_ratings": 1782,
        "discount_price": 309.7,
        "actual_price": 999.0
    },
    {
        "name": "ANEZKA Slipper For Men's and Women's Flip Flops Massage Fashion Slides Open Toe Non Slip",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 324.5,
        "actual_price": 1479.0
    },
    {
        "name": "ADAMO Designer Analog Couple Combo Wrist Watch 107-816SM02",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 569.0,
        "actual_price": 2695.0
    },
    {
        "name": "Supples Baby Diaper Pants M Pack of 3 Super Jumbo Box (216 Piece)",
        "ratings": 4.0,
        "no_of_ratings": 127863,
        "discount_price": 1829.0,
        "actual_price": 3147.0
    },
    {
        "name": "Puma Mens Pace Slip on Idp Low Boot",
        "ratings": 4.2,
        "no_of_ratings": 2158,
        "discount_price": 2313.0,
        "actual_price": 3999.0
    },
    {
        "name": "Red Tape Men's Walking Shoes",
        "ratings": 3.6,
        "no_of_ratings": 10,
        "discount_price": 1149.0,
        "actual_price": 4599.0
    },
    {
        "name": "Soulemo Women's Cotton & Crush Printed Maxi Nighty",
        "ratings": 4.9,
        "no_of_ratings": 11,
        "discount_price": 1049.0,
        "actual_price": 2999.0
    },
    {
        "name": "SriGem Natural Catseye (Lahsuniya) 4 carat cats eye / 4 ratti lahsuniya approx- CERTIFIED",
        "ratings": 3.0,
        "no_of_ratings": 3,
        "discount_price": 1140.0,
        "actual_price": 4000.0
    },
    {
        "name": "AKHILAM Women's Organza Woven Design Saree With Unstitched Blouse Piece (KDVIKA283001_RJ_Parent)",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 1629.0,
        "actual_price": 7499.0
    },
    {
        "name": "RTI GROUP Women's Cotton Inskirt Saree Petticoats (Multicolour, Free Size) -Combo of 5",
        "ratings": 3.5,
        "no_of_ratings": 243,
        "discount_price": 765.0,
        "actual_price": 999.0
    },
    {
        "name": "Melon transperant Slime streachy Non Toxic for Kids",
        "ratings": 2.9,
        "no_of_ratings": 16,
        "discount_price": 225.0,
        "actual_price": 499.0
    },
    {
        "name": "Guddan Women's Satin Petticoat (Red, Free Size)",
        "ratings": 3.7,
        "no_of_ratings": 9,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "CAPRESIST Combo 3 inch 75mm Brass Wire and Twisted M10 Thread Cup Brush for 4 inch Angle Grinder set of 4pcs",
        "ratings": 3.8,
        "no_of_ratings": 13,
        "discount_price": 409.0,
        "actual_price": 659.0
    },
    {
        "name": "SAMPLUS MALL (LABEL) Stainless Steel Over The Door/Wall Hanger Hook Rail for Hanging Rack, Towel and Coat Organizer (Pack ...",
        "ratings": 3.6,
        "no_of_ratings": 640,
        "discount_price": 225.0,
        "actual_price": 399.0
    },
    {
        "name": "Vaamsi Women's A-Line Kurta",
        "ratings": 3.7,
        "no_of_ratings": 5984,
        "discount_price": 189.0,
        "actual_price": 999.0
    },
    {
        "name": "Luminous New York Hudson 1200 MM Ceiling Fan (Midnight Black)",
        "ratings": 4.1,
        "no_of_ratings": 250,
        "discount_price": 3449.0,
        "actual_price": 3840.0
    },
    {
        "name": "DHREXV Babydoll Nightwear Lingerie with Panty Short Transparent Nighty for Women Bra Panty Set for Women Baby Doll Night D...",
        "ratings": 3.8,
        "no_of_ratings": 234,
        "discount_price": 99.0,
        "actual_price": 699.0
    },
    {
        "name": "ZEBRONICS Zeb-Jaguar Wireless Mouse, 2.4GHz with USB Nano Receiver, High Precision Optical Tracking, 4 Buttons, Plug & Pla...",
        "ratings": 4.1,
        "no_of_ratings": 3420,
        "discount_price": 399.0,
        "actual_price": 1920.0
    },
    {
        "name": "Jolchobi Bhuter Raja Dilo BOR Unisex Regular Fit Cotton T-Shirt with Round Neck, Half Sleeve, Graphics T Shirt",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "F Gear President Brown 30 liter Laptop Backpack Sch Bag",
        "ratings": 4.3,
        "no_of_ratings": 510,
        "discount_price": 1011.0,
        "actual_price": 2780.0
    },
    {
        "name": "Veenoshka Ganesh JI Namah Card to Keep in Wallet for Wealth/Lucky God /Size Same as Bank ATM Card",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 99.0,
        "actual_price": 499.0
    },
    {
        "name": "ZOUK Women's Handcrafted Chittoor Red Kalamkari Classic Chain Wallet for Mobile Phones",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 899.0,
        "actual_price": 2198.0
    },
    {
        "name": "Champ 01 Wired In Ear Earphone with Mic (Multicolour)",
        "ratings": 3.3,
        "no_of_ratings": 9,
        "discount_price": 199.0,
        "actual_price": 599.0
    },
    {
        "name": "Purity of Love Radha Krishna Silver Coin 999 Purity 10 Grams Precious Gift",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 1149.0,
        "actual_price": 2199.0
    },
    {
        "name": "SanDisk Ultra Dual Drive Luxe USB Type-C 512GB, Metal Pendrive for Mobile (Silver)",
        "ratings": 4.3,
        "no_of_ratings": 24098,
        "discount_price": 4198.0,
        "actual_price": 11500.0
    },
    {
        "name": "CLYMB Men's, Boys Casual Clogs, Mules",
        "ratings": 3.2,
        "no_of_ratings": 144,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "Rocklin Men Men's Brown 3501 Loafers",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 689.0,
        "actual_price": 2399.0
    },
    {
        "name": "SHOPPOFOBIX Upgrade Kids Selfie Camera, Christmas Birthday Gifts for Boys Age 3-9, HD Digital Video Cameras for Toddler, P...",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "AmazonBasics Body Trimmer with Toning Belt",
        "ratings": 3.2,
        "no_of_ratings": 33,
        "discount_price": 469.0,
        "actual_price": 1000.0
    },
    {
        "name": "90 Degree 40 pcs Matt Finished Origami Full Size Colorful Craft Marble Foldable Paper Sheet (Square 15 x 15 cm)",
        "ratings": 3.6,
        "no_of_ratings": 26,
        "discount_price": 240.0,
        "actual_price": 300.0
    },
    {
        "name": "smars CL-671 LED Touch Lamp Wireless Bluetooth Speaker with TF Card/Aux/Speaker Phone",
        "ratings": 3.1,
        "no_of_ratings": 31,
        "discount_price": 489.0,
        "actual_price": 999.0
    },
    {
        "name": "Clara 0.925 Contemporary Sterling Silver Ring for Men",
        "ratings": 3.7,
        "no_of_ratings": 47,
        "discount_price": 1999.0,
        "actual_price": 2870.0
    },
    {
        "name": "Noir Aqua UV Filter with LED + UF Filter + 4pcs Elbows + 1/4” Water Pipe Tube, Supports All Domestic Water Purifiers For H...",
        "ratings": 3.9,
        "no_of_ratings": 16,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "NAINVISH Women Kurti with Pant",
        "ratings": 3.6,
        "no_of_ratings": 194,
        "discount_price": 469.0,
        "actual_price": 1999.0
    },
    {
        "name": "MINTRONICS® MI-4440-ROCK 100W Tower Speaker 74 cm Height 8 inch Subwoofer 10mm Wooden Cabinet Mic supportable Bluetooth/Au...",
        "ratings": 4.8,
        "no_of_ratings": 7,
        "discount_price": 4199.0,
        "actual_price": 7000.0
    },
    {
        "name": "Max Women Tight",
        "ratings": 3.8,
        "no_of_ratings": 43,
        "discount_price": 629.0,
        "actual_price": 699.0
    },
    {
        "name": "anubhutee Women's Maroon & White Ethnic Printed Pure Cotton Night Suit",
        "ratings": 2.3,
        "no_of_ratings": 15,
        "discount_price": 570.0,
        "actual_price": 2849.0
    },
    {
        "name": "NEVER QUIT Compression T-Shirt,Full Sleeve High Performance Plain Cool Dry Athletic Fit Multi Sports Stretchable T-Shirts ...",
        "ratings": 3.4,
        "no_of_ratings": 5,
        "discount_price": 355.0,
        "actual_price": 999.0
    },
    {
        "name": "French Connection Analog Women's Watch",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1707.32,
        "actual_price": 6950.0
    },
    {
        "name": "Tobo HDMI to HDMI Audio Extractor, 4K HDMI and Audio (RCA Stereo or Spdif) Converter (Supports Appel TV, Fire TV and Blue-...",
        "ratings": 3.5,
        "no_of_ratings": 61,
        "discount_price": 1499.0,
        "actual_price": 4999.0
    },
    {
        "name": "USB C GaN Charger 30W, Cytron PD 3.0 PPS Fast Charger for iPhone 14/ 14 Plus/14 Pro/14 Pro Max/13 Pro/13 Pro Max, Samsung ...",
        "ratings": 4.3,
        "no_of_ratings": 391,
        "discount_price": 1590.0,
        "actual_price": 2499.0
    },
    {
        "name": "Peter England Men's Checkered Slim Fit Shirt (PCSHSSLP187616_Multicolour 40)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 1599.0
    },
    {
        "name": "Fastrack Casual Analog Black Dial Men's Watch-3255NM01",
        "ratings": 4.2,
        "no_of_ratings": 62,
        "discount_price": 1800.0,
        "actual_price": 2250.0
    },
    {
        "name": "Candes 1000 W Plancha Heavy Weight Electric Dry Iron, 100% Non Stick Teflon Coating, White Blue (EI-1005WB1CC)",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 769.0,
        "actual_price": 1399.0
    },
    {
        "name": "BATA Men's Star Th E Slipper",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 665.0,
        "actual_price": 899.0
    },
    {
        "name": "Trendy Casual Shoes Loafers for Men",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 279.0,
        "actual_price": 1399.0
    },
    {
        "name": "Whirlpool Master Mind Double Door W10407008 Refrigerator Compatible Bottle Shelf in white plastic",
        "ratings": 3.9,
        "no_of_ratings": 37,
        "discount_price": 632.0,
        "actual_price": 1050.0
    },
    {
        "name": "SAI PRASEEDA Air Cooler Natural Grass_Cooling Pads 18 X 28 Inches_Set of 3 Pack_Suitable for All Desert Coolers SP6",
        "ratings": 2.5,
        "no_of_ratings": 4,
        "discount_price": 449.0,
        "actual_price": 799.0
    },
    {
        "name": "Nivia Training_3 Shorts for Men | Shorts for Gym | Sports Shorts | Running Shorts (Black,L)",
        "ratings": 3.8,
        "no_of_ratings": 82,
        "discount_price": 487.0,
        "actual_price": 625.0
    },
    {
        "name": "SARINKU Abaya Dress for Women's Stitched Burkha Dress for Girl's and Women, Georgette (Fully Lined) Peach Abaya Casual Wea...",
        "ratings": 3.5,
        "no_of_ratings": 9,
        "discount_price": 899.0,
        "actual_price": 1999.0
    },
    {
        "name": "Liberty Men HA8-03 Casual Shoes",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 3039.0,
        "actual_price": 3999.0
    },
    {
        "name": "Chennai Full Sleeve Cricket Jersey",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 359.0,
        "actual_price": 899.0
    },
    {
        "name": "Confort Look Women's Stretch Leggings",
        "ratings": 3.7,
        "no_of_ratings": 73,
        "discount_price": 265.0,
        "actual_price": 800.0
    },
    {
        "name": "clafoutis Men's Full Sleeves Chinese Collar t Shirt Pack of 2",
        "ratings": 3.2,
        "no_of_ratings": 10,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Nike Men Sweatshirt",
        "ratings": 3.4,
        "no_of_ratings": 766,
        "discount_price": 1819.0,
        "actual_price": 2595.0
    },
    {
        "name": "ANNI DESIGNER Women's Banarasi Silk Straight Printed Kurta with Pant & Dupatta (Banarsi-See)",
        "ratings": 3.7,
        "no_of_ratings": 202,
        "discount_price": 749.0,
        "actual_price": 2599.0
    },
    {
        "name": "Customised Number Plate Keychain in 4D Style for Any Bike or car/Name/Photo/Ride/Travel/Bag/Logo/Accessories/Unique/Person...",
        "ratings": 3.8,
        "no_of_ratings": 39,
        "discount_price": 249.0,
        "actual_price": 899.0
    },
    {
        "name": "Puma Unisex-Adult Duke Walking Shoe",
        "ratings": 4.1,
        "no_of_ratings": 163,
        "discount_price": 1679.0,
        "actual_price": 3999.0
    },
    {
        "name": "ExclusiveLane 'The Madhubani Tales' Handpainted Terracotta Decorative Wall Plates Decor Hanging Wall Décor Wall Plates For...",
        "ratings": 3.9,
        "no_of_ratings": 25,
        "discount_price": 1375.0,
        "actual_price": 1685.0
    },
    {
        "name": "Hush Puppies Mens California Mule Sandals, (8746972)",
        "ratings": 4.1,
        "no_of_ratings": 16,
        "discount_price": 2092.0,
        "actual_price": 3499.0
    },
    {
        "name": "Designer Aarti Export Women's Rayon Kurta with Palazzo Set",
        "ratings": 3.8,
        "no_of_ratings": 516,
        "discount_price": 829.0,
        "actual_price": 2999.0
    },
    {
        "name": "JBL C200SI, Premium in Ear Wired Earphones with Mic, Signature Sound, One Button Multi-Function Remote, Angled Earbuds for...",
        "ratings": 4.1,
        "no_of_ratings": 54381,
        "discount_price": 799.0,
        "actual_price": 1499.0
    },
    {
        "name": "GreyWings Vintage Hanging Triangle Pendant Ceiling Light Lamp with Filament Bulb - Pack of 2 (Black,Metal)",
        "ratings": 4.4,
        "no_of_ratings": 49,
        "discount_price": 699.0,
        "actual_price": 1499.0
    },
    {
        "name": "Spare Hub Spin Cap/Dryer Cover Compatible with LG Semi Automatic Washing Machine (Yellow, 10.5 inch)",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 140.0,
        "actual_price": 350.0
    },
    {
        "name": "Bhairaw Gems 7.25 Ratti 100% Natural Earth Mined Tiger Eye/Tiger Stone/Tiger's Eye Gemstone Natural Certified Loose Chitti...",
        "ratings": 3.4,
        "no_of_ratings": 10,
        "discount_price": 219.0,
        "actual_price": 999.0
    },
    {
        "name": "SHYLOC 10 inches Big led Ring Right for Photo and Video with Tripod Stand Compatible with Camera and Smartphones",
        "ratings": 3.5,
        "no_of_ratings": 4556,
        "discount_price": 1099.0,
        "actual_price": 1989.0
    },
    {
        "name": "Laps of Luxury ® Silver Colour Chrome Tape 25.4 mm (1 Inch) Wide and 7.31 m (24 Ft) Length",
        "ratings": 3.5,
        "no_of_ratings": 8,
        "discount_price": 319.0,
        "actual_price": 349.0
    },
    {
        "name": "ADWITS 5 Pack 20x67x0.5mm Thermal Conductive Silicone Pads with 6.0 W/mk Thermal Conductivity, Soft Safe Simple to Apply f...",
        "ratings": 4.1,
        "no_of_ratings": 514,
        "discount_price": 299.0,
        "actual_price": 652.0
    },
    {
        "name": "RISSACHI 26-55 Inches Fixed LED LCD Plasma Wall Mount Bracket with Heavy-Duty Max VESA 400 x 400 50 Kg Weight Capacity",
        "ratings": 3.8,
        "no_of_ratings": 895,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Budan French Press Coffee Brewer and Tea Maker 350ml with 4 Level Filtration System, Heat Resistant Borosilicate Glass wit...",
        "ratings": 4.6,
        "no_of_ratings": 26,
        "discount_price": 799.0,
        "actual_price": 1999.0
    },
    {
        "name": "Irkaja Heavy Duty Adjustable Front/Top Load Fully Automatic Washing Machine/Refrigerator/Fridge/Dishwasher Stand/Trolley w...",
        "ratings": 4.1,
        "no_of_ratings": 2138,
        "discount_price": 1249.0,
        "actual_price": 2999.0
    },
    {
        "name": "Sasitrends American Diamond Micro Gold Mugappu Chain for Women and Girls",
        "ratings": 2.9,
        "no_of_ratings": 5,
        "discount_price": 549.0,
        "actual_price": 4000.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim Fit T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 32,
        "discount_price": 1009.0,
        "actual_price": 1999.0
    },
    {
        "name": "THE BLAZZE Men's Regular Fit Top",
        "ratings": 3.6,
        "no_of_ratings": 67,
        "discount_price": 299.0,
        "actual_price": 399.0
    },
    {
        "name": "CONSES Heavy Duty Adjustable Fully Top Loading Washing Machine, Refrigerators, Dishwashers, and Coolers Trolley",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 1699.0
    },
    {
        "name": "Campus Remix Men's Running Shoes",
        "ratings": 3.3,
        "no_of_ratings": 8,
        "discount_price": 1749.0,
        "actual_price": 2399.0
    },
    {
        "name": "Type C to C Usb Cable for Google Pixel 4a USB Cable Original Like | Data Sync Cable | Rapid Quick Dash Fast Charging Cable...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 598.0
    },
    {
        "name": "Axter Men's Multi-Coloured Canvas Casual Shoes/Loafers - Pack of 3 (Combo-(3)-1216-5011-1215)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 749.0,
        "actual_price": 1497.0
    },
    {
        "name": "Pepe Jeans Men's Regular Fit Polos",
        "ratings": 3.9,
        "no_of_ratings": 6,
        "discount_price": 949.0,
        "actual_price": 1899.0
    },
    {
        "name": "Hershey's Bar - Rakhi Gift Pack Hershey's Bar - Rakhi Gift (Milk Bar 100 gm & Cookies & Crème  100 gm + Rakhi ), 2 x 100",
        "ratings": 4.2,
        "no_of_ratings": 12,
        "discount_price": 267.0,
        "actual_price": 267.75
    },
    {
        "name": "Aparna Smart 1200 mm (48 inch) High Speed Ceiling Fan (Smoke Brown)",
        "ratings": 5.0,
        "no_of_ratings": 10,
        "discount_price": 1399.0,
        "actual_price": 2199.0
    },
    {
        "name": "NEW WARE® Metal Electric Water Heater Pressure Relief Check Safety Valve 0.75Mpa",
        "ratings": 3.9,
        "no_of_ratings": 104,
        "discount_price": 389.0,
        "actual_price": 549.0
    },
    {
        "name": "DEFEND99 Self Sanitizing 3 Layer Reusable Washable Breathable Face Mask For Men Women – (Black, Pack of 1 )",
        "ratings": 3.7,
        "no_of_ratings": 104,
        "discount_price": 120.0,
        "actual_price": 125.0
    },
    {
        "name": "Campus Men's Neptune CH.Gry/WHT Running Shoes -6 UK/India",
        "ratings": 4.4,
        "no_of_ratings": 2,
        "discount_price": 1044.0,
        "actual_price": 1299.0
    },
    {
        "name": "UPC Milk Coffee Mug | Big Size Cup Set of 2 | Made of Fine Bone China, Modern Premium Light, 300ml",
        "ratings": 4.5,
        "no_of_ratings": 7,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "Acnos Luxury Analog Women's Watch (Blue Dial Rose Gold Colored Strap)",
        "ratings": 4.0,
        "no_of_ratings": 64,
        "discount_price": 299.0,
        "actual_price": 1999.0
    },
    {
        "name": "Matsun 95L Travel Backpack with Detachable Daypack / Camping Hiking Trekking Bag Rucksack, 1 Year Warranty",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 1899.0,
        "actual_price": 4999.0
    },
    {
        "name": "Samsung 21 L Convection Microwave Oven (CE73JD-B1/XTL, Black)",
        "ratings": 4.3,
        "no_of_ratings": 2463,
        "discount_price": 9990.0,
        "actual_price": 12990.0
    },
    {
        "name": "Jack & Jones Men's Slim Jeans",
        "ratings": 3.6,
        "no_of_ratings": 94,
        "discount_price": 2000.0,
        "actual_price": 3999.0
    },
    {
        "name": "Earton Men Casual Loafers & Moccasins (8 UK, Blue)",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 298.0,
        "actual_price": 499.0
    },
    {
        "name": "NFI essentials Waist Bag Travel Handy Hiking Zip Camera Pouch Money Phone Belt Sport Bag Bum Multipurpose Belt Bag for Men...",
        "ratings": 4.0,
        "no_of_ratings": 55,
        "discount_price": 399.0,
        "actual_price": 850.0
    },
    {
        "name": "ADRO Men's God Cotton Printed Cotton T-Shirt",
        "ratings": 3.5,
        "no_of_ratings": 5,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Amazon Brand - Symactive Women Hooded Sweatshirt",
        "ratings": 2.5,
        "no_of_ratings": 2,
        "discount_price": 608.49,
        "actual_price": 2999.0
    },
    {
        "name": "Rubicon Womens/Girls Cotton Non-Padded Bra Camisole(Pack of 3)(VILOT,Maroon,Sky Blue)",
        "ratings": 4.3,
        "no_of_ratings": 22,
        "discount_price": 329.0,
        "actual_price": 999.0
    },
    {
        "name": "Hukimoyo® Moss Balls Artificial Decorative Grass Stones for Home Decorations, Natural Green Foam Artificial Rocks Plant Si...",
        "ratings": 3.6,
        "no_of_ratings": 116,
        "discount_price": 449.0,
        "actual_price": 800.0
    },
    {
        "name": "REES52 YF-G1 Water Pipe Flow Meter Sensor Counter/Flow meter DN25 G1 Flow range 2-100L/min (Black)",
        "ratings": 4.6,
        "no_of_ratings": 2,
        "discount_price": 1050.0,
        "actual_price": 1700.0
    },
    {
        "name": "MINUTIAE Evil Eye Round Pendant Decorative Ring Loops Jewellery Accessories Compatible with Smart Watch Silicone Band Stra...",
        "ratings": 4.0,
        "no_of_ratings": 15,
        "discount_price": 355.0,
        "actual_price": 999.0
    },
    {
        "name": "Unikaa Leather Women Wallet(black)",
        "ratings": 4.0,
        "no_of_ratings": 8,
        "discount_price": 349.0,
        "actual_price": 950.0
    },
    {
        "name": "STYCARO- Right (Driver) Side Mirror Cover (Indicator Type) for Hundai i20 2011-2013 Type 2 Model -White",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 1099.0
    },
    {
        "name": "Impresa Products Descaler/Descaling Solution for Keurig, Nespresso, and All Coffee/Espresso Machines",
        "ratings": 4.4,
        "no_of_ratings": 16924,
        "discount_price": 2130.0,
        "actual_price": 5200.0
    },
    {
        "name": "K London Stylish Canvas Dari Woven Multi Colored Ethnic Design Waist Pack Waist Pouch Travel Pouch Passport Holder Waist B...",
        "ratings": 4.2,
        "no_of_ratings": 890,
        "discount_price": 355.0,
        "actual_price": 1800.0
    },
    {
        "name": "Trendy Dukaan Baby Boy's & Baby Girl's Cotton Blend Socks",
        "ratings": 4.4,
        "no_of_ratings": 489,
        "discount_price": 475.0,
        "actual_price": 999.0
    },
    {
        "name": "Bikaji Aslee Bikaneri - Falahari Mix - Indian Namkeen - Potato Sticks Snack 200gm (Pack of 4)",
        "ratings": 3.5,
        "no_of_ratings": 33,
        "discount_price": 259.0,
        "actual_price": 300.0
    },
    {
        "name": "Ekavir 8\" Inches Hand sealing machine for Plastic pouch packing Table Top Heat Sealer (8 inch 200 mm))",
        "ratings": 3.8,
        "no_of_ratings": 1879,
        "discount_price": 930.0,
        "actual_price": 1999.0
    },
    {
        "name": "NiTHO NX120 STEREO Wired GAMING On Ear HEADSET with Foldable Microphone, Compatible with PS4/Xbox One/Switch/Phone",
        "ratings": 3.6,
        "no_of_ratings": 211,
        "discount_price": 429.0,
        "actual_price": 1223.0
    },
    {
        "name": "Pankvi Women Rayon Slub Straight Kurta",
        "ratings": 3.8,
        "no_of_ratings": 14,
        "discount_price": 659.0,
        "actual_price": 2089.0
    },
    {
        "name": "ROLANDO Imani Women's Cross-body Leather Sling Bag",
        "ratings": 4.0,
        "no_of_ratings": 19,
        "discount_price": 2417.0,
        "actual_price": 9999.0
    },
    {
        "name": "UPVsales PVC Square Junction Box 4x4 Inches 10 Nos Pack for CCTV Cameras",
        "ratings": 3.9,
        "no_of_ratings": 267,
        "discount_price": 415.0,
        "actual_price": 1099.0
    },
    {
        "name": "KST Metal Split Keychain Ring with Connector Parts -60 Key Chains 25mm with 26mm Chains and 60 Open Jump Ring for Craft Ho...",
        "ratings": 3.8,
        "no_of_ratings": 17,
        "discount_price": 199.0,
        "actual_price": 299.0
    },
    {
        "name": "Bigbanana Men's Regular Fit Polo",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 720.0,
        "actual_price": 2099.0
    },
    {
        "name": "FASHIONZONE Women's Woolen Readymade V-Neck Winter Blouses Full Sleeve Free Size",
        "ratings": 3.6,
        "no_of_ratings": 4,
        "discount_price": 469.0,
        "actual_price": 999.0
    },
    {
        "name": "D&V ENGINEERING - Creative in innovation Metal Mobile TV Stand on Wheels for 32-55 Inch Flat/Curved Panel Screens TVs - He...",
        "ratings": 4.3,
        "no_of_ratings": 108,
        "discount_price": 5699.0,
        "actual_price": 9999.0
    },
    {
        "name": "ID Men's Leather Loafers",
        "ratings": 2.4,
        "no_of_ratings": 5,
        "discount_price": 1450.0,
        "actual_price": 3185.0
    },
    {
        "name": "Olivia Burton Rainbow Analog Black Dial Women's Watch-OB16FB13",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 14437.0,
        "actual_price": 15600.0
    },
    {
        "name": "Janasya Women's Cotton Lycra Stretchable Readymade Blouse (BL036-176GOLD_Gold_FreeSize)",
        "ratings": 3.6,
        "no_of_ratings": 104,
        "discount_price": 499.0,
        "actual_price": 1099.0
    },
    {
        "name": "QOCXRRIN PR Wireless Bluetooth in Ear Earphone with Mic & Mobile Holder Stand (Multicolour)",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 149.0,
        "actual_price": 799.0
    },
    {
        "name": "RAEGR RapidLine 100 is Type C to C & Type A to C Cable Combo, (1M/3.3ft) | Type-C to C | 3A Cable Up to 20W PD Fast Chargi...",
        "ratings": 4.0,
        "no_of_ratings": 198,
        "discount_price": 215.0,
        "actual_price": 999.0
    },
    {
        "name": "Bewakoof Men's Printed 100% Cotton T-Shirt - Regular Fit, Round Neck, Half Sleeves",
        "ratings": 4.2,
        "no_of_ratings": 6,
        "discount_price": 399.0,
        "actual_price": 1099.0
    },
    {
        "name": "ZIBUYU® 2 Pcs Friendship Necklace Magnetic Half Heart Pendant Best Friend Necklace Set for Besties, Best Friends, Girls Gi...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 248.0,
        "actual_price": 385.0
    },
    {
        "name": "Orient Electric Tornado Pedestal Fan, 450 mm, Black",
        "ratings": 4.1,
        "no_of_ratings": 464,
        "discount_price": 4700.0,
        "actual_price": 5155.0
    },
    {
        "name": "(Renewed) Sennheiser HD 4.40 Wireless Bluetooth Over the Ear Headphone with Mic (Black)",
        "ratings": 3.8,
        "no_of_ratings": 172,
        "discount_price": 5690.5,
        "actual_price": 32416.0
    },
    {
        "name": "Karatcart Traditional Gold Plated Kundan Kamarband",
        "ratings": 4.8,
        "no_of_ratings": 8,
        "discount_price": 810.0,
        "actual_price": 2455.0
    },
    {
        "name": "Muscfit Bodyfit Fitness Leather 20 Kg Weight Plates, 5Ft Straight And 3Ft Curl Rod, 2 D.Rods Home Gym Equipment Dumbbell S...",
        "ratings": 3.9,
        "no_of_ratings": 87,
        "discount_price": 1350.0,
        "actual_price": 3200.0
    },
    {
        "name": "ComicSense.xyz Haikyuu Anime Boke Hinata Boke Tote Bag",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "crocs Unisex-Child Ralen K Clog",
        "ratings": 4.3,
        "no_of_ratings": 1521,
        "discount_price": 1109.0,
        "actual_price": 1995.0
    },
    {
        "name": "LOKO® Pack of 3 New J Hook Quick Release Buckle Mount Compatible with GoPro 11 10 9 8 7 6 5 4 4k Eken AKASO SJCAM YI and O...",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Waste To Best Reusable foldable shopping bags, Portable Tote clip shopping bag grocery bags, reusable bags multicolor Tote...",
        "ratings": 3.0,
        "no_of_ratings": 19,
        "discount_price": 249.0,
        "actual_price": 899.0
    },
    {
        "name": "Bee M Pee Designer Women's Chiffon Brasso Printed Saree with Blouse Piece (PS Brasso Bhim)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 729.0,
        "actual_price": 2499.0
    },
    {
        "name": "all4pets Wormtek Susp (20 ml) -Combo Pack of 2",
        "ratings": 4.2,
        "no_of_ratings": 86,
        "discount_price": 197.0,
        "actual_price": 240.0
    },
    {
        "name": "Aurelia Women's Cotton Blend Regular Kurta",
        "ratings": 3.3,
        "no_of_ratings": 65,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "ESSA Women's Fair Lady Panties (Pack of 3) (80CM to 100CM) (Color May Vary)",
        "ratings": 4.2,
        "no_of_ratings": 70,
        "discount_price": 187.0,
        "actual_price": 300.0
    },
    {
        "name": "Evelyn Women's Latest Formal Analog White Dial Wrist Watch Brown Office wear",
        "ratings": 3.4,
        "no_of_ratings": 26,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "WALTZ Men's Slim Fit Grey Stretch Jeans",
        "ratings": 3.6,
        "no_of_ratings": 61,
        "discount_price": 699.0,
        "actual_price": 2999.0
    },
    {
        "name": "Radha's Creations imitation kemp jhumka EARRINGS for girls and women one gram gold traditional design Number 105J",
        "ratings": 4.0,
        "no_of_ratings": 10,
        "discount_price": 779.0,
        "actual_price": 1800.0
    },
    {
        "name": "Chinar Jewels Golden Bangle/Kada/Bracelet/Kangan (Set of 4) with Stones | The Traditional Ethnic Stylish Smart Collection ...",
        "ratings": 3.6,
        "no_of_ratings": 19,
        "discount_price": 579.0,
        "actual_price": 1200.0
    },
    {
        "name": "Samsung 314 L 2 Star Inverter Frost-Free Double Door Refrigerator (RT34T46324R/HL, Rythmic Twirl Red, Convertible, 2022 Mo...",
        "ratings": 3.9,
        "no_of_ratings": 99,
        "discount_price": 40500.0,
        "actual_price": 42990.0
    },
    {
        "name": "DIY Crafts Keychain Rings for Crafts, Key Rings with Chains, Jump Rings & Screw Eye Pins for Jewelry Findings Making Handb...",
        "ratings": 3.7,
        "no_of_ratings": 28,
        "discount_price": 328.9,
        "actual_price": 1495.0
    },
    {
        "name": "Birde Premium Blue Sneakers for Men-BRD-861_10",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Fila Men's Bomer Sport Shoes",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1039.0,
        "actual_price": 2599.0
    },
    {
        "name": "ZIMFIT Men's Cotton Thermal Lower in White",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 379.0,
        "actual_price": 999.0
    },
    {
        "name": "Metro Men's Synthetic Sneakers (71-8510)",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 2555.0,
        "actual_price": 2690.0
    },
    {
        "name": "Haber - Turkish Style Premium Cotton Bath Towel - Aura Collection (Pack of 3, Assorted Colours)",
        "ratings": 4.2,
        "no_of_ratings": 1819,
        "discount_price": 1499.0,
        "actual_price": 2097.0
    },
    {
        "name": "AUTOPOWERZ AC/DC 12V to 80V H4 LED Headlight Bulb with Cooling Fan Conversion Kit for Bike and car(50W , White, Pack of 1)",
        "ratings": 3.6,
        "no_of_ratings": 266,
        "discount_price": 702.0,
        "actual_price": 1900.0
    },
    {
        "name": "7eleven India New ODI Retro Jersey 2020-21 for Men Women Boys Unisex",
        "ratings": 4.1,
        "no_of_ratings": 50,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Privily Womens Regular Capri Pants Loose Yoga Pants Wide Leg Drawstring Comfy Lounge Pajama Capris Sweatpants Pack of 2",
        "ratings": 3.9,
        "no_of_ratings": 525,
        "discount_price": 711.0,
        "actual_price": 998.0
    },
    {
        "name": "LipiWorld® RC39NpT3 LeEco Box Televisions Remote Control for Le TV Remote",
        "ratings": 4.3,
        "no_of_ratings": 18,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "BOXO Foldable Summer Beach Hat Wide Brim Hat for Men and Women for Travelling",
        "ratings": 2.6,
        "no_of_ratings": 3,
        "discount_price": 295.0,
        "actual_price": 499.0
    },
    {
        "name": "crocs Women's Pure Water/multi Kadee Ii Dream Flip W Puw/mlt W8 - 6uk",
        "ratings": 4.6,
        "no_of_ratings": 16,
        "discount_price": 2494.0,
        "actual_price": 2495.0
    },
    {
        "name": "Unived Rest & Recover | Vegan Pea Protein for Athletes | Informed Sport Certified | 20g Pea Protein KSM-66 Calcium Magnesi...",
        "ratings": 3.6,
        "no_of_ratings": 5,
        "discount_price": 2475.0,
        "actual_price": 2750.0
    },
    {
        "name": "The Souled Store|Find Your Balance Round Neck Mens and Boys T-Shirt|Graphic Printed Half Sleeve|100% Cotton Blue Color T-S...",
        "ratings": 4.5,
        "no_of_ratings": 8,
        "discount_price": 629.0,
        "actual_price": 999.0
    },
    {
        "name": "Gizga Essentials 3-in-1 Phone Cleaner, Laptop Screen Cleaner, Fingerprint-Proof Screen Cleaner Kit, Reusable, Phones, TV S...",
        "ratings": 4.1,
        "no_of_ratings": 558,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Allen Solly Printed Linen Blend Regular Fit Mens Casual Shirt (S22FQLSPPY84531-P)",
        "ratings": 4.4,
        "no_of_ratings": 6,
        "discount_price": 1974.0,
        "actual_price": 2499.0
    },
    {
        "name": "Anuradha Art Jewellery Golden Finish Studded Stone Adorable Classy Traditional Mundavalya/Bashing for Men and Women",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 370.0,
        "actual_price": 799.0
    },
    {
        "name": "CEDO Samsung M13 5G Back Cover | Matte Soft Silicon Flexible | Camera Bump Protection | All Side Shock Proof Rubberised Ba...",
        "ratings": 4.2,
        "no_of_ratings": 101,
        "discount_price": 178.0,
        "actual_price": 999.0
    },
    {
        "name": "PAGALY Men's and Women's Waist Slimmer Sweat Slim Body Shaper Trimmer Belt (Black)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 1199.0
    },
    {
        "name": "U-TURN Men's Cotton Solid Half Sleeve Shirt",
        "ratings": 3.4,
        "no_of_ratings": 43,
        "discount_price": 398.0,
        "actual_price": 1499.0
    },
    {
        "name": "Borosil Easy Juice Cold Press Slow Juicer, Portable Slow Juicer, Compact Design, Less Oxidation, For Fresh Fruits & Vegeta...",
        "ratings": 2.8,
        "no_of_ratings": 125,
        "discount_price": 3732.0,
        "actual_price": 4999.0
    },
    {
        "name": "Centrino Men's 7108 Formal Shoes",
        "ratings": 3.8,
        "no_of_ratings": 166,
        "discount_price": 889.0,
        "actual_price": 1999.0
    },
    {
        "name": "Avsar 14k (585) Yellow Gold Stud Earrings for Women",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 6426.0,
        "actual_price": 14030.0
    },
    {
        "name": "Fossil Women's Handbag (Multi-Colour)",
        "ratings": 4.7,
        "no_of_ratings": 3,
        "discount_price": 8885.0,
        "actual_price": 14295.0
    },
    {
        "name": "Underjeans Men Trunks",
        "ratings": 3.7,
        "no_of_ratings": 4,
        "discount_price": 429.0,
        "actual_price": 539.0
    },
    {
        "name": "Scott International Rich Cotton Hooded Sweatshirt for Women",
        "ratings": 3.8,
        "no_of_ratings": 261,
        "discount_price": 626.0,
        "actual_price": 2999.0
    },
    {
        "name": "Sadow Screen Cleaner|Screen Cleaning Spray with Cloth for Mobile Phones, TV's, Laptops, Monitors, LED, LCD/LED TVs, Laptop...",
        "ratings": 4.7,
        "no_of_ratings": 6,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "Kk Home Store Decor Yoga Mat High Density, Anti-Slip Yoga mat for Gym Workout and Flooring Exercise Long Size. 4 mm Yoga M...",
        "ratings": 4.0,
        "no_of_ratings": 7,
        "discount_price": 500.0,
        "actual_price": 1200.0
    },
    {
        "name": "Samsung Galaxy M33 5G (Deep Ocean Blue, 8GB, 128GB Storage) | 6000mAh Battery | Upto 16GB RAM with RAM Plus | Travel Adapt...",
        "ratings": 4.1,
        "no_of_ratings": 24863,
        "discount_price": 17499.0,
        "actual_price": 25999.0
    },
    {
        "name": "Maheshvi Women Cotton Printed and Striped Regular Fit Half Sleeve Tshirt",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 259.0,
        "actual_price": 699.0
    },
    {
        "name": "You Forever Solid Maroon Lingerie Sets",
        "ratings": 3.3,
        "no_of_ratings": 12,
        "discount_price": 169.0,
        "actual_price": 599.0
    },
    {
        "name": "T-Shirt WMN SG RN WTESST011 Sky Blue M",
        "ratings": 4.4,
        "no_of_ratings": 8,
        "discount_price": 156.91,
        "actual_price": 599.0
    },
    {
        "name": "HIFFIN® 10 PCS Photography Backdrop Support Spring Clamp 4.3\"/11cm for Background Muslin, Canvas, Paper, Chromakey Screen,...",
        "ratings": 4.1,
        "no_of_ratings": 78,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "SanskrutiHomes Women's Cotton Printed Maxi Kaftan Nighty",
        "ratings": 3.5,
        "no_of_ratings": 104,
        "discount_price": 888.0,
        "actual_price": 2599.0
    },
    {
        "name": "Mivi Duopods A25 Bluetooth Truly Wireless In Ear Earbuds With Mic Upto 40 Hours Playtime With Ipx4 Water Resistance, Smoot...",
        "ratings": 3.6,
        "no_of_ratings": 35627,
        "discount_price": 1099.0,
        "actual_price": 2999.0
    },
    {
        "name": "Mr.SHOT MAX (Fitted with MCB) Instant Running Water Heater ABS Plastic, Auto Cut Off and Manual Reset, Inlet and Outlet Th...",
        "ratings": 3.7,
        "no_of_ratings": 136,
        "discount_price": 2000.0,
        "actual_price": 3699.0
    },
    {
        "name": "Yellow Chimes Crystal Bracelet Swarovski 18K Gold Plated Circle Chain Bracelet for Women and Girls",
        "ratings": 4.0,
        "no_of_ratings": 101,
        "discount_price": 549.0,
        "actual_price": 1999.0
    },
    {
        "name": "designer top and bottom set for men",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1499.0,
        "actual_price": 1699.0
    },
    {
        "name": "Skullcandy Jib True 2 Wireless in-Ear Earbuds - Chill Gray",
        "ratings": 4.3,
        "no_of_ratings": 976,
        "discount_price": 3399.0,
        "actual_price": 9999.0
    },
    {
        "name": "GOODLUCK LIFE Slim Fit Cotton Men's Full Sleave Checks Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Color Style Women's Sexy Bra Panty,Bikni |Lingerie Set|Hot & Sexy for Newly Married Couples Honeymoon/First Night/Annivers...",
        "ratings": 2.6,
        "no_of_ratings": 8,
        "discount_price": 209.0,
        "actual_price": 499.0
    },
    {
        "name": "Mungyo Bold Point Paint Marker (White)",
        "ratings": 3.6,
        "no_of_ratings": 1062,
        "discount_price": 170.0,
        "actual_price": 182.0
    },
    {
        "name": "LOVEY DOVEY Soft Toys Long Soft Lovable hugable Cute Giant Life Size (Pig Set, 4pcs)",
        "ratings": 3.4,
        "no_of_ratings": 289,
        "discount_price": 499.0,
        "actual_price": 899.0
    },
    {
        "name": "Organic Nuts Fresh Premium Whole Plain Cashew Nuts | Kaju/Cashew Dry Fruit Nuts 500g",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 545.0,
        "actual_price": 699.0
    },
    {
        "name": "Jevi Prints Women's Cotton Printed Plus Size Jaipuri Kurti",
        "ratings": 4.1,
        "no_of_ratings": 4,
        "discount_price": 719.0,
        "actual_price": 2295.0
    },
    {
        "name": "TAGAS Women Solid Elastic Waist Slant Pocket Skinny Women Trousers Pant",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 519.0,
        "actual_price": 1499.0
    },
    {
        "name": "L'Oréal Paris Conditioner, Nourishes, Repair & Shine, For Long and Lifeless Hair, Dream Lengths, 192.5ml",
        "ratings": 4.3,
        "no_of_ratings": 11774,
        "discount_price": 179.0,
        "actual_price": 239.0
    },
    {
        "name": "Rachakula Women's Cotton Nighty / Maxi / Nightgown with Pocket Black Colours Maternity Nighties of Plus Size Free Size Lar...",
        "ratings": 3.9,
        "no_of_ratings": 22,
        "discount_price": 999.0,
        "actual_price": 2100.0
    },
    {
        "name": "7SEVEN® hdmi Cable 5 meters Full hd 1080p Support Upto 120Hz and Suitable for tv Projector Laptop Computer pc Android Ampl...",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 369.0,
        "actual_price": 599.0
    },
    {
        "name": "Maharaja Whiteline Odacio Plus 550-Watt Juicer Mixer Grinder with 3 Jars (Black/Silver)",
        "ratings": 3.7,
        "no_of_ratings": 4260,
        "discount_price": 3299.0,
        "actual_price": 4799.0
    },
    {
        "name": "BIBA Women's Regular Fit Shirt",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Garden Genie Epsom Salt (Magnesium Sulphate) | Micro-Nutrient for Plants & Vegetables - 1000gm…",
        "ratings": 4.4,
        "no_of_ratings": 74,
        "discount_price": 240.0,
        "actual_price": 599.0
    },
    {
        "name": "Reebok Boy's Flexagon Energy 2.0 Humble Blue/Vivid Orange/None Training Shoes-2.5 UK (34 EU) (3 Kids US) (EH1634)",
        "ratings": 3.4,
        "no_of_ratings": 3,
        "discount_price": 2013.0,
        "actual_price": 4299.0
    },
    {
        "name": "muccasacra Women's Handbag (Set of 9, Multicoloured)",
        "ratings": 4.0,
        "no_of_ratings": 75,
        "discount_price": 383.0,
        "actual_price": 677.0
    },
    {
        "name": "VindhWashni Ladies Satin Night Suite for Female",
        "ratings": 3.2,
        "no_of_ratings": 15,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "YOTINO Paper Door Wall Sticker (60 x 500 cm, Transparent)",
        "ratings": 3.9,
        "no_of_ratings": 184,
        "discount_price": 590.0,
        "actual_price": 1850.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim Fit Casual Shirt",
        "ratings": 2.3,
        "no_of_ratings": 4,
        "discount_price": 1039.0,
        "actual_price": 1899.0
    },
    {
        "name": "Tweens Plus-Size Padded Comfortable T-Shirt Bra",
        "ratings": 3.3,
        "no_of_ratings": 7,
        "discount_price": 301.0,
        "actual_price": 505.0
    },
    {
        "name": "OM SAI LATEST CREATION Women Printed Top with Half Sleeves for Office Wear, Casual Wear, Under 399 Top for Women/Girls",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 239.0,
        "actual_price": 1999.0
    },
    {
        "name": "Lowepro Photo Hatchback 16L AW (Galaxy Blue)",
        "ratings": 4.4,
        "no_of_ratings": 459,
        "discount_price": 4999.0,
        "actual_price": 8990.0
    },
    {
        "name": "Fossil Gabby Analog Blue Dial Women's Watch-ES5087",
        "ratings": 4.4,
        "no_of_ratings": 54,
        "discount_price": 5997.0,
        "actual_price": 9995.0
    },
    {
        "name": "R Dabhi Spoon for Measuring Double End Adjustable Scale Metering Spoon in Gram and ML 1 Pc White",
        "ratings": 3.7,
        "no_of_ratings": 31,
        "discount_price": 125.0,
        "actual_price": 399.0
    },
    {
        "name": "Bewakoof Men's Printed 100% Cotton T-Shirt - Regular Fit, Round Neck, Half Sleeves",
        "ratings": 4.4,
        "no_of_ratings": 15,
        "discount_price": 399.0,
        "actual_price": 1099.0
    },
    {
        "name": "Dolce Crudo Women's Light Blue Skinny Fit High Rise Ankle Length Shaded Denim Stretchable Jeans",
        "ratings": 3.8,
        "no_of_ratings": 13,
        "discount_price": 936.0,
        "actual_price": 2399.0
    },
    {
        "name": "Hidesign Women's Shoulder Bag (Orange)",
        "ratings": 3.7,
        "no_of_ratings": 6,
        "discount_price": 4080.25,
        "actual_price": 4895.0
    },
    {
        "name": "VIMAL JONNEY Cotton Blend Night Suit Co-ord Set for Men with Round Neck Half Sleeve T-Shirt and Short-VJ-MNS-TS-GROUP1",
        "ratings": 4.5,
        "no_of_ratings": 6,
        "discount_price": 699.0,
        "actual_price": 2098.0
    },
    {
        "name": "Lychee bags Croco Finish Black Tote Bag",
        "ratings": 2.1,
        "no_of_ratings": 5,
        "discount_price": 1099.0,
        "actual_price": 2499.0
    },
    {
        "name": "WIWU Tablet Shoulder Bag 12.9 Inch,Tablet Bag for 12.9 Inch Tablet, multi pockets, multi use bag, adjustable strap-Black c...",
        "ratings": 4.0,
        "no_of_ratings": 10,
        "discount_price": 2189.0,
        "actual_price": 2999.0
    },
    {
        "name": "Wenz Genuine Leather Wallets for Women Ladies Purse Handbag Clutch Bags-RLCB-5",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 895.0,
        "actual_price": 2999.0
    },
    {
        "name": "SanDisk Ultra Luxe USB 3.1 Flash Drive 256GB, Upto 150MB/s, All Metal, Metallic Silver",
        "ratings": 4.3,
        "no_of_ratings": 31693,
        "discount_price": 1826.0,
        "actual_price": 5000.0
    },
    {
        "name": "SEGA Men's Running Shoes",
        "ratings": 3.6,
        "no_of_ratings": 125,
        "discount_price": 519.0,
        "actual_price": 799.0
    },
    {
        "name": "Enamic UK Roto Grill Cabin Fan Office Fan 12 Inches 300 MM 100% Copper Motor High Speed || 1 Year Warranty || HSLV Technol...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1449.0,
        "actual_price": 1999.0
    },
    {
        "name": "Livpure 1 Ton 3 Star Wi-Fi Inverter Split AC (Copper, EGAPA Filter, 2019 Model, HKS-IN12K3S19A White)",
        "ratings": 3.4,
        "no_of_ratings": 3,
        "discount_price": 37990.0,
        "actual_price": 38990.0
    },
    {
        "name": "Leqtroniq Oculus/Meta Quest 2 Facial Interface Bracket & Face Cover, Anti-Light Leakage Face Pad, Breathable Face Bracket,...",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1999.0,
        "actual_price": 3999.0
    },
    {
        "name": "Hesch 9 Pack of Two Sewing Machine lubricating Oil with Oil can for Home/Shop Sewing Machine for Singer/Usha/Sapna/Merit/B...",
        "ratings": 3.5,
        "no_of_ratings": 12,
        "discount_price": 199.0,
        "actual_price": 349.0
    },
    {
        "name": "Sanavya Gas Geyser Part ( Universal Knob For Types Geyser) | Gas Geyser Knobs | gas geyser parts | gas geyser Knobs | gas ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 160.0,
        "actual_price": 690.0
    },
    {
        "name": "BALENZIA Men's Regular Combed Cotton And Spandex Socks (Pack Of 3)",
        "ratings": 4.1,
        "no_of_ratings": 3903,
        "discount_price": 296.0,
        "actual_price": 599.0
    },
    {
        "name": "Blue Tree Kid's School Bagpack 3-5 Years 11 litres Cartoons Soft Toy Bag Gift for Kids (Spider red)",
        "ratings": 4.0,
        "no_of_ratings": 1150,
        "discount_price": 288.0,
        "actual_price": 799.0
    },
    {
        "name": "SriSaras Premuim Rayon Palazzo for Women and Girls",
        "ratings": 3.5,
        "no_of_ratings": 111,
        "discount_price": 321.0,
        "actual_price": 599.0
    },
    {
        "name": "Ravaiyaa - Attitude is everything Cotton Quilted Hand Block Floral Printed Women's Carry Bag Shoulder Shopping Tote Bag 1...",
        "ratings": 4.0,
        "no_of_ratings": 4,
        "discount_price": 999.0,
        "actual_price": 1499.0
    },
    {
        "name": "SAVIAURA 1 Sheet 2 in 1 3D Flat Lay Tabletop Double-Sided Photography Backdrop Photo Studio Flatlay Background PVC Wrinkl...",
        "ratings": 4.1,
        "no_of_ratings": 51,
        "discount_price": 398.0,
        "actual_price": 750.0
    },
    {
        "name": "Boult Audio Z20 True Wireless in Ear Earbuds with Zen ENC Mic, 40H Playtime, Type-C Fast Charging, Made in India, 10mm Ric...",
        "ratings": 3.8,
        "no_of_ratings": 11403,
        "discount_price": 1399.0,
        "actual_price": 5499.0
    },
    {
        "name": "Kaleera Brass Gold Plated and Cubic Zirconia Necklace Set for Women & Girls (Golden & White)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 2000.0
    },
    {
        "name": "BODYCARE KIDS Girls Assorted Coloured Minnie & Friends Cotton Printed Panties Pack of 5",
        "ratings": 4.4,
        "no_of_ratings": 178,
        "discount_price": 612.0,
        "actual_price": 645.0
    },
    {
        "name": "Printed Design Handicrafts Marble chakla Belan Set ( Wooden Belan) / Rolling Pin and Marble Board / Roti Maker",
        "ratings": 4.4,
        "no_of_ratings": 67,
        "discount_price": 900.0,
        "actual_price": 2900.0
    },
    {
        "name": "FOOTGASM Fancy & Comfortable Pencil Heel sandals Women's And Girls",
        "ratings": 3.5,
        "no_of_ratings": 12,
        "discount_price": 699.0,
        "actual_price": 1499.0
    },
    {
        "name": "BL25 Non Padded Low Coverage Wirefree Plunge Bra",
        "ratings": 3.8,
        "no_of_ratings": 20,
        "discount_price": 299.0,
        "actual_price": 440.0
    },
    {
        "name": "Arrow Mens Harrison Driving Style Loafer",
        "ratings": 3.9,
        "no_of_ratings": 26,
        "discount_price": 4590.0,
        "actual_price": 4999.0
    },
    {
        "name": "Arayna Women's Rayon Kurti Hand Work Gotta Patti Palazzo Dupatta Set, Orange Yellow",
        "ratings": 3.7,
        "no_of_ratings": 253,
        "discount_price": 899.0,
        "actual_price": 2999.0
    },
    {
        "name": "Lexigo Bra Hooks for Women Bra Extensions-Bra Extender Bra Hook Extender 2 Hook and 3 Eye",
        "ratings": 4.1,
        "no_of_ratings": 16,
        "discount_price": 149.0,
        "actual_price": 599.0
    },
    {
        "name": "V2A Retro Classic Small Digital Black Dial Men's and Women's Sports Watch",
        "ratings": 3.6,
        "no_of_ratings": 82,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "TGL Co. The Good Life Company Little Buddha Green Tea (200 g) with Green Sencha Tea, Pineapple, Papaya, Liquorice, Sandalw...",
        "ratings": 4.3,
        "no_of_ratings": 33,
        "discount_price": 1847.0,
        "actual_price": 2396.0
    },
    {
        "name": "akiara - Makes life easy Handy Sewing Machine/Stitch Machine | Mini Silai Machine for Home Tailoring use with Sewing Kit a...",
        "ratings": 3.3,
        "no_of_ratings": 597,
        "discount_price": 689.0,
        "actual_price": 1798.0
    },
    {
        "name": "Amazon Brand - Symbol Men's Regular Pajama Bottom",
        "ratings": 3.6,
        "no_of_ratings": 1023,
        "discount_price": 422.67,
        "actual_price": 2099.0
    },
    {
        "name": "Peter England Men's Slim Fit Shirt",
        "ratings": 4.2,
        "no_of_ratings": 26,
        "discount_price": 649.0,
        "actual_price": 1299.0
    },
    {
        "name": "Uniform Craft Female Nurse Uniform | Hospital Staff, clinics, Home Health, Nanny Uniforms for Women made of Polyester-Cotton",
        "ratings": 4.2,
        "no_of_ratings": 533,
        "discount_price": 899.0,
        "actual_price": 1000.0
    },
    {
        "name": "Hindware Atlantic 15 L Storage Water Geyser (Elicio, White, Black)",
        "ratings": 3.7,
        "no_of_ratings": 14,
        "discount_price": 6749.0,
        "actual_price": 9590.0
    },
    {
        "name": "PLERIZA Women's/Girls Short Sleeves High-Neck Crop Tops",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 1199.0
    },
    {
        "name": "Kangaro Paper Punch DP 700 - Colour May Vary",
        "ratings": 4.5,
        "no_of_ratings": 510,
        "discount_price": 465.0,
        "actual_price": 575.0
    },
    {
        "name": "Unisex Cotton Blend Cap (AR-099_White, Black_L)",
        "ratings": 3.5,
        "no_of_ratings": 208,
        "discount_price": 153.0,
        "actual_price": 499.0
    },
    {
        "name": "Edinaro Analogue Round Studed Dial with Silver Bracelet Strap Girl's & Women's Wrist Watch",
        "ratings": 3.5,
        "no_of_ratings": 26,
        "discount_price": 299.0,
        "actual_price": 1499.0
    },
    {
        "name": "VazzLox Multipurpose Bubble Foam Cleaner Kitchen Cleaner Spray Oil & Grease Stain Remover Chimney Cleaner Spray Bubble Cle...",
        "ratings": 3.8,
        "no_of_ratings": 1751,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Drools Calcium Bone 600 grm (Pack of 3)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1170.0,
        "actual_price": 1380.0
    },
    {
        "name": "Organature Natural Psyllium Whole Husk | Sat Isabgol (Bhusi) Husk - Fiber Supplement - Perfect for Keto Bread and Gluten F...",
        "ratings": 4.2,
        "no_of_ratings": 6,
        "discount_price": 229.0,
        "actual_price": 599.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim Fit Button Down Shirt",
        "ratings": 4.0,
        "no_of_ratings": 7,
        "discount_price": 776.0,
        "actual_price": 2399.0
    },
    {
        "name": "Celsius Men's Classic V-Neck T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 495.0,
        "actual_price": 645.0
    },
    {
        "name": "Bell BLSP153 Wireless Bluetooth Mini Speaker Compatible with Mobile,Music Players, Portable Gaming Devices, and Computer, ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 575.0,
        "actual_price": 1699.0
    },
    {
        "name": "Hawai Brown Genuine Leather Wallet for Men",
        "ratings": 3.4,
        "no_of_ratings": 45,
        "discount_price": 610.0,
        "actual_price": 1499.0
    },
    {
        "name": "Onekbhalo SSS Guard Cricket Helmet for Men & Boys (Adjustable Steel Grill | Color: Blue | Light Weigh) Large Size",
        "ratings": 4.8,
        "no_of_ratings": 8,
        "discount_price": 650.0,
        "actual_price": 750.0
    },
    {
        "name": "Gizga Essentials Earphone Earpod Cleaning Pen for AirPod, Earbuds, Headphones, Wireless Earphones, 5-in-1 Multifunctional ...",
        "ratings": 3.9,
        "no_of_ratings": 457,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "MBCARE Stainless Steel Wine Glass Rack/Holder Under Cabinet Wine Glass Hanging Holder for Pubs/Kitchen/Café/Bars/Clubs and...",
        "ratings": 4.2,
        "no_of_ratings": 76,
        "discount_price": 159.0,
        "actual_price": 599.0
    },
    {
        "name": "HAMMONDS FLYCATCHER Genuine Leather Laptop Bag for Men/Office Bag for Men, Brown | Fits Upto 14 Inch Laptop/MacBook | Leat...",
        "ratings": 4.4,
        "no_of_ratings": 1632,
        "discount_price": 2556.0,
        "actual_price": 9999.0
    },
    {
        "name": "Indirocks Women's Cotton Non-Padded Wire Free Sports Bra",
        "ratings": 2.9,
        "no_of_ratings": 5,
        "discount_price": 375.0,
        "actual_price": 999.0
    },
    {
        "name": "Hidesign",
        "ratings": 3.2,
        "no_of_ratings": 3,
        "discount_price": 2447.0,
        "actual_price": 3295.0
    },
    {
        "name": "White Button Baby Girls Lehenga Choli Set",
        "ratings": 4.1,
        "no_of_ratings": 1022,
        "discount_price": 913.0,
        "actual_price": 1999.0
    },
    {
        "name": "Aaishwarya Gold Chain with Rhinestone BABE lettered Alloy Wide Collar Choker Necklace For Women And Girls (Golden Chain/Ne...",
        "ratings": 4.2,
        "no_of_ratings": 8,
        "discount_price": 719.0,
        "actual_price": 1499.0
    },
    {
        "name": "Fastrack UV Protected Square Men's Sunglasses - (P418BK3|53|Black Color Lens) - Pack of 1",
        "ratings": 3.9,
        "no_of_ratings": 95,
        "discount_price": 957.0,
        "actual_price": 1099.0
    },
    {
        "name": "Universal Knob with Add on Adapter for Semi Automatic Washing Machines by PV Enterprises",
        "ratings": 3.6,
        "no_of_ratings": 21,
        "discount_price": 112.0,
        "actual_price": 220.0
    },
    {
        "name": "Aqualite Fashionable and Comfort Cushion Outdoor Mens Slip-on Shoes",
        "ratings": 3.6,
        "no_of_ratings": 45,
        "discount_price": 273.0,
        "actual_price": 279.5
    },
    {
        "name": "Comet Cleanser With Bleach 21oz",
        "ratings": 4.7,
        "no_of_ratings": 661,
        "discount_price": 2081.0,
        "actual_price": 4162.0
    },
    {
        "name": "MONROW Pheobe Leather Block Winter Boots for Women & Girls",
        "ratings": 4.5,
        "no_of_ratings": 6,
        "discount_price": 2699.0,
        "actual_price": 3499.0
    },
    {
        "name": "Harissons Bags Broadway 32L Polyester Casual Backpack for Men and Women, Office Backpack (Black)",
        "ratings": 4.2,
        "no_of_ratings": 17,
        "discount_price": 937.0,
        "actual_price": 1249.0
    },
    {
        "name": "NPLASH FASHION Women's Georgette & Jari Sequence Work Semi-Stitched Lehenga Choli",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 999.0,
        "actual_price": 2999.0
    },
    {
        "name": "Giordano Analog Watch for Women with Rose Gold Case, Crystal Studded Dial and Classy Metal Mesh Band, Ladies Wrist Watch G...",
        "ratings": 4.0,
        "no_of_ratings": 167,
        "discount_price": 2739.0,
        "actual_price": 8390.0
    },
    {
        "name": "Amazon Brand - Symbol Men's Regular Fit Denim Shorts",
        "ratings": 4.2,
        "no_of_ratings": 185,
        "discount_price": 550.87,
        "actual_price": 1099.0
    },
    {
        "name": "Thrifty Tech ABS Plastic Square Junction IP65 Box 5x5x2.5 (LxBxH) Inches Unbreakable for Dahua Hikvision CP Plus Qubo Imou...",
        "ratings": 4.3,
        "no_of_ratings": 28,
        "discount_price": 600.0,
        "actual_price": 4900.0
    },
    {
        "name": "Fargo Leatherette Side Sling Bags For Women's Ladies (Croco) (Green_FGO-349)",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "Sparx Mens Sx0523g Running Shoe",
        "ratings": 3.8,
        "no_of_ratings": 43,
        "discount_price": 999.0,
        "actual_price": 1249.0
    },
    {
        "name": "Kiaaron Women's Ikat Hand Block Print Jaipuri Cotton Mulmul Saree with Blouse Piece",
        "ratings": 3.6,
        "no_of_ratings": 75,
        "discount_price": 849.0,
        "actual_price": 6999.0
    },
    {
        "name": "FCUK Men T-Shirt",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 399.0,
        "actual_price": 1099.0
    },
    {
        "name": "Reebok Mens Race Runner Running Shoe",
        "ratings": 4.2,
        "no_of_ratings": 109,
        "discount_price": 1350.0,
        "actual_price": 2999.0
    },
    {
        "name": "Zaveri Pearls",
        "ratings": 3.9,
        "no_of_ratings": 1340,
        "discount_price": 299.0,
        "actual_price": 1127.0
    },
    {
        "name": "Janak 'n' Masaaya Check Fabric Knee Length Skirt 106 Red",
        "ratings": 3.6,
        "no_of_ratings": 8,
        "discount_price": 599.0,
        "actual_price": 1299.0
    },
    {
        "name": "Spider Hero Tshirt for Man Superhero Tshirt Half Sleeve Regular Fit Casual Stylish for Men",
        "ratings": 3.1,
        "no_of_ratings": 17,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "Knighthood Gold Badge with Star Crowned Eagle and Red Enamel Detailing Lapel Pin Brooch for Men",
        "ratings": 3.6,
        "no_of_ratings": 18,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "sugarcrush Women's Clutch",
        "ratings": 3.6,
        "no_of_ratings": 9,
        "discount_price": 2099.0,
        "actual_price": 4999.0
    },
    {
        "name": "Alphabet® Women's Cotton Capri Night Pajama Pants, 3/4th Pyjama, Womens Night Dress",
        "ratings": 2.5,
        "no_of_ratings": 4,
        "discount_price": 229.0,
        "actual_price": 459.0
    },
    {
        "name": "Shining Diva Fashion Latest Gold Plated Set of 2 Stylish Traditional Bangle for Women",
        "ratings": 2.0,
        "no_of_ratings": 2,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "T.T. Mens Jazz Fine Long Inner Elastic Trunk Pack of 5",
        "ratings": 4.2,
        "no_of_ratings": 4,
        "discount_price": 562.0,
        "actual_price": 740.0
    },
    {
        "name": "C.Cozami Women's Rayon Checkered Print Regular Wear Top",
        "ratings": 3.6,
        "no_of_ratings": 4,
        "discount_price": 499.0,
        "actual_price": 1199.0
    },
    {
        "name": "HIKVISION 4 Channal Turbo HD H.265 DVR 1Pcs,Outdoor Camera 5 MP Turbo HD Audio 2Pcs,Indoor Camera 5 MP Turbo HD Audio 2Pc...",
        "ratings": 3.3,
        "no_of_ratings": 5,
        "discount_price": 15750.0,
        "actual_price": 29999.0
    },
    {
        "name": "Beats Fit Pro – True Wireless Noise Cancelling Earbuds – Active Noise Cancelling - Sweat Resistant Earphones, Compatible w...",
        "ratings": 4.4,
        "no_of_ratings": 3814,
        "discount_price": 22200.0,
        "actual_price": 22900.0
    },
    {
        "name": "Impex STEAMER-1801 Stainless Steel Electric Kettle (1.8 Litre,1500 Watts,Silver)",
        "ratings": 3.1,
        "no_of_ratings": 5,
        "discount_price": 799.0,
        "actual_price": 1710.0
    },
    {
        "name": "FABRIC FITOOR Women Pure Organic Cotton Bell Sleeves Round Tie Ups Neck Regular Floral Print Peplum Top Girls",
        "ratings": 3.6,
        "no_of_ratings": 52,
        "discount_price": 729.0,
        "actual_price": 2599.0
    },
    {
        "name": "Glamoras Women's Nylon Spandex Sheer Pantyhose/Stocking, Size-Medium (Fits Waist 24\"-34\")",
        "ratings": 3.3,
        "no_of_ratings": 41,
        "discount_price": 331.0,
        "actual_price": 799.0
    },
    {
        "name": "piper Handheld Refractometer Salinity(0-100%) Test Marine Reef Hydrometer",
        "ratings": 2.9,
        "no_of_ratings": 3,
        "discount_price": 1299.0,
        "actual_price": 2500.0
    },
    {
        "name": "Vembley Silver Magnetic Heart Adjustable Matching Love Couple Rings for Men And Women",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 189.0,
        "actual_price": 1499.0
    },
    {
        "name": "The Wardrobe Farm TWF Bell Sleeve Knee Length Night Dress for Women / Cotton Nighty",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 490.0,
        "actual_price": 999.0
    },
    {
        "name": "LivingBasics Heavy Duty Rust Cloth Peg / Clothes Clip / Quilt Drying Pins / Pegs for Hanger / Rods / Ropes / Towel Dryer C...",
        "ratings": 4.6,
        "no_of_ratings": 1678,
        "discount_price": 242.0,
        "actual_price": 999.0
    },
    {
        "name": "Kunj Wrist Watch for Girls Kid's Combo Set of- 2",
        "ratings": 4.7,
        "no_of_ratings": 3,
        "discount_price": 399.0,
        "actual_price": 1400.0
    },
    {
        "name": "RANI SAAHIBA Women's Art Silk Printed Dupatta",
        "ratings": 4.2,
        "no_of_ratings": 9,
        "discount_price": 349.0,
        "actual_price": 699.0
    },
    {
        "name": "Air O Matic Room Air Purifier and Humidifier Revitalizer (Green)",
        "ratings": 3.6,
        "no_of_ratings": 74,
        "discount_price": 1279.0,
        "actual_price": 1399.0
    },
    {
        "name": "Amazon Brand - Inkast Denim Co. Men Casual Shirt",
        "ratings": 3.8,
        "no_of_ratings": 29,
        "discount_price": 529.0,
        "actual_price": 2099.0
    },
    {
        "name": "ZenCart Coffee frother for cappuccinos coffee| Coffee beater for hot chocolate| Milk frother for coffee, Mini and portable...",
        "ratings": 4.5,
        "no_of_ratings": 5,
        "discount_price": 299.0,
        "actual_price": 899.0
    },
    {
        "name": "Theme My Party Little Mermaid Girl Mermaid Birthday Party Cake Backdrop for Photography Banner Kids Event Cake Table Decor...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 649.0,
        "actual_price": 1499.0
    },
    {
        "name": "Hitmax Micro-21 Football Shoes for Men (Blue)",
        "ratings": 3.6,
        "no_of_ratings": 12,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Kodak XD Series 46MM 2 Layer UV Filter (46 mm)",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 509.0,
        "actual_price": 1250.0
    },
    {
        "name": "Lavie EMILIE 1 Women's Tote Bag (Tan)",
        "ratings": 4.3,
        "no_of_ratings": 9,
        "discount_price": 989.0,
        "actual_price": 4490.0
    },
    {
        "name": "Adidas Men's Fitted Polo Shirt",
        "ratings": 3.5,
        "no_of_ratings": 110,
        "discount_price": 1169.0,
        "actual_price": 1799.0
    },
    {
        "name": "AMARYLLIS Mixflow Inline Ceiling Mounted Ventilating Fan Sigma-6, 6 Inches, White/Ivory",
        "ratings": 3.4,
        "no_of_ratings": 13,
        "discount_price": 8780.0,
        "actual_price": 9590.0
    },
    {
        "name": "PRO GYM Ankle Brace Plantar Fasciitis and Ankle Support, Ankle Compression Sleeve for Achilles & Tendonitis, Foot Brace fo...",
        "ratings": 3.1,
        "no_of_ratings": 12,
        "discount_price": 183.0,
        "actual_price": 199.0
    },
    {
        "name": "Daniel Klein Analog Black Dial Men's Watch-DK11926-3",
        "ratings": 3.9,
        "no_of_ratings": 8,
        "discount_price": 3289.0,
        "actual_price": 6750.0
    },
    {
        "name": "AAYAN BABY Thong Mens Lingerie (07922)",
        "ratings": 3.7,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "Campus Men's Hummer R.Slate/Navy Sports Shoes -10 UK/India",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1454.0,
        "actual_price": 1999.0
    },
    {
        "name": "GBG Men's Orange Football Shoes - 9 UK",
        "ratings": 3.0,
        "no_of_ratings": 19,
        "discount_price": 714.0,
        "actual_price": 4999.0
    },
    {
        "name": "WildHorn Leather Women's Wallet (WHLW1000) (Carolina Blue)",
        "ratings": 3.9,
        "no_of_ratings": 243,
        "discount_price": 799.0,
        "actual_price": 1999.0
    },
    {
        "name": "Red Square Professional 250 Ml Empty Spray Bottles Clean Squirt BottleTransprent Multi-uses Spray Bottles for Cleaning, Wa...",
        "ratings": 3.8,
        "no_of_ratings": 191,
        "discount_price": 89.0,
        "actual_price": 199.0
    },
    {
        "name": "Amazon Brand - Inkast Denim Co. Men's Regular T-Shirt",
        "ratings": 4.1,
        "no_of_ratings": 99,
        "discount_price": 309.0,
        "actual_price": 1299.0
    },
    {
        "name": "polaris Suede & Nubuck Shoe Renovator and Color Reviver",
        "ratings": 3.9,
        "no_of_ratings": 517,
        "discount_price": 352.0,
        "actual_price": 499.0
    },
    {
        "name": "HIKVISION 8 Channel DVR with 2MP ColorVu 8 Bullet Cameras (24/7 Colorful Imaging) + 1TB HDD + Cable Roll (1+3) + CLOCITE 8...",
        "ratings": 3.0,
        "no_of_ratings": 5,
        "discount_price": 23499.0,
        "actual_price": 49999.0
    },
    {
        "name": "The WarShip Comfortable & Stylish Bellies for Women's and Girl's (Red)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 1299.0
    },
    {
        "name": "Tromko Men Micromodal Ultra Printed Brief Innerwear",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 105.0,
        "actual_price": 449.0
    },
    {
        "name": "Campus Men Running Shoes",
        "ratings": 4.0,
        "no_of_ratings": 51,
        "discount_price": 964.0,
        "actual_price": 1399.0
    },
    {
        "name": "Faubourg Men's Full Sleeve Slim Fit 100% Cotton Checkered Formal Shirt",
        "ratings": 3.8,
        "no_of_ratings": 16,
        "discount_price": 799.0,
        "actual_price": 999.0
    },
    {
        "name": "ENRICO Bluno Kids Computer Blue Light Blocking Glasses for Eye Protection | Anti Glare, Zero Power, Blue Light Filter Glas...",
        "ratings": 4.1,
        "no_of_ratings": 201,
        "discount_price": 625.0,
        "actual_price": 2499.0
    },
    {
        "name": "Axter Mens Black 9240 Running Shoe",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 487.0,
        "actual_price": 998.0
    },
    {
        "name": "Adc fashions Women's Belt",
        "ratings": 3.4,
        "no_of_ratings": 49,
        "discount_price": 550.0,
        "actual_price": 1500.0
    },
    {
        "name": "Pure Watt ISI Mark Shock-Proof & Water-Proof Brass 2000 W Immersion Heater  (Water Rod)",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Adidas mens Slalon M Slide Sandal",
        "ratings": 3.8,
        "no_of_ratings": 376,
        "discount_price": 519.0,
        "actual_price": 1499.0
    },
    {
        "name": "Adidas Original Flat Knit Ankle Cotton Socks - 3 Pairs (6N) (AD-0735) (Shadow Olive/Coll Navy/Legacy Teal)",
        "ratings": 3.1,
        "no_of_ratings": 7,
        "discount_price": 579.0,
        "actual_price": 599.0
    },
    {
        "name": "TIMEX Analog Black Dial Men's Watch-TWHG03SMU17",
        "ratings": 3.9,
        "no_of_ratings": 52,
        "discount_price": 2999.0,
        "actual_price": 5995.0
    },
    {
        "name": "DUPATTA BAZAAR Women's All Over Print Silk Blend Dupatta (DB3192_Beige & Black_Free)",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 237.0,
        "actual_price": 899.0
    },
    {
        "name": "VOYLLA Mandala Aztec Inspired Ring",
        "ratings": 3.7,
        "no_of_ratings": 6,
        "discount_price": 187.0,
        "actual_price": 399.0
    },
    {
        "name": "Upix® AC Remote No. 175, Compatible for Videocon AC Remote Control (Exactly Same Remote Will Only Work)",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 449.0,
        "actual_price": 899.0
    },
    {
        "name": "Honeywell Type C to 2.0 HDMI Cable (Braided), Transmission Speed of 18GBPS, Supports UHD Resolution Upto 4Kx2K@60Hz, Male ...",
        "ratings": 3.5,
        "no_of_ratings": 3,
        "discount_price": 2219.0,
        "actual_price": 3999.0
    },
    {
        "name": "Shining Star Women's Handbag",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 999.0,
        "actual_price": 2199.0
    },
    {
        "name": "Pepe Jeans Men's Regular Fit Shirt",
        "ratings": 4.6,
        "no_of_ratings": 9,
        "discount_price": 2598.0,
        "actual_price": 2599.0
    },
    {
        "name": "Amazon Brand - Symbol Mens Willie Sneakers",
        "ratings": 4.0,
        "no_of_ratings": 11,
        "discount_price": 546.06,
        "actual_price": 1899.0
    },
    {
        "name": "CableCreation 8K HDMI Cable 6.6 Feet, 8K 60Hz eARC HDMI Cable Ultra High Speed 48Gbps HDR HDCP 2.2 & 2.3 Dolby Vision HDMI...",
        "ratings": 4.4,
        "no_of_ratings": 199,
        "discount_price": 1195.0,
        "actual_price": 1230.0
    },
    {
        "name": "Catwalk Women's Bronze Fashion Sandals",
        "ratings": 3.6,
        "no_of_ratings": 121,
        "discount_price": 899.0,
        "actual_price": 2195.0
    },
    {
        "name": "Spillbox Paracord Wrist Strap for Robust Hand Grip to Hold All DSLR Camera/Heavy Gear/Binocular (Black)",
        "ratings": 4.3,
        "no_of_ratings": 22,
        "discount_price": 229.0,
        "actual_price": 349.0
    },
    {
        "name": "M Men Style Quran Aayat Al Kursi Prayer Allah Muslim Silver Stainless Steel Pendant Necklace Chain For Men And Women SPn20...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 199.0,
        "actual_price": 799.0
    },
    {
        "name": "WORRICOW H700 Wireless Bluetooth Neckband with Mic, Magnetic, SD Card Supported Bluetooth Headset",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 549.0,
        "actual_price": 1100.0
    },
    {
        "name": "Infantbond Born Baby Mattress with Net & Sleeping Bag(0-6 Months) (Yellow)(Star)",
        "ratings": 3.6,
        "no_of_ratings": 48,
        "discount_price": 557.07,
        "actual_price": 1999.0
    },
    {
        "name": "Mom's Darling Baby Bed Protector Waterproof Plastic Sheets, Urine Matress Protector Sheets, Baby Diaper Changing Sheet(0-1...",
        "ratings": 4.2,
        "no_of_ratings": 91,
        "discount_price": 378.0,
        "actual_price": 699.0
    },
    {
        "name": "Janasya Women's Red Cotton Western Dress",
        "ratings": 3.6,
        "no_of_ratings": 32,
        "discount_price": 909.0,
        "actual_price": 1898.0
    },
    {
        "name": "SWADESI STUFF Silver Dial Date Display Analogue Watch for Men and Boys",
        "ratings": 3.5,
        "no_of_ratings": 40,
        "discount_price": 279.0,
        "actual_price": 1999.0
    },
    {
        "name": "Handcuffs Baseball Cap for Men & Women Sports Caps",
        "ratings": 4.1,
        "no_of_ratings": 2963,
        "discount_price": 449.0,
        "actual_price": 799.0
    },
    {
        "name": "Rudraksha Shiv Trishul Damroo Om Kada a beautiful diamond is situated between damroo and Trishul Free Size for Mens,boys &...",
        "ratings": 2.9,
        "no_of_ratings": 4,
        "discount_price": 225.0,
        "actual_price": 499.0
    },
    {
        "name": "f-apparel Women's Solid Cotton Dupatta",
        "ratings": 2.5,
        "no_of_ratings": 3,
        "discount_price": 169.0,
        "actual_price": 999.0
    },
    {
        "name": "BabyMoon New Born Baby Photography Shoot Props Costumes (Brown)",
        "ratings": 3.6,
        "no_of_ratings": 374,
        "discount_price": 498.0,
        "actual_price": 1000.0
    },
    {
        "name": "GJSHOP Round Silicon New Donut Shape Small Bags Women |Handbags Crossbody Sling Bags For Women Girls (Multicolor)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 385.0,
        "actual_price": 599.0
    },
    {
        "name": "Amazon Brand - Eden & Ivy Aw-19 Women's Sling bag",
        "ratings": 4.2,
        "no_of_ratings": 215,
        "discount_price": 1059.0,
        "actual_price": 2199.0
    },
    {
        "name": "Crypo® Model no. 171, Compatible Remote for Reliance Reconnect AC/Split AC/Window AC Remote Control",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "VRINDAM JEWELLERS 925 Sterling Silver Designer Bichiya Toe Rings for Women and Girls |Leg Finger Ring |Latest Pure Chandi ...",
        "ratings": 3.8,
        "no_of_ratings": 20,
        "discount_price": 550.0,
        "actual_price": 1450.0
    },
    {
        "name": "Keiraa Women Blouse Half Sleeve Office Lady Shirt Women Tops",
        "ratings": 3.3,
        "no_of_ratings": 538,
        "discount_price": 599.0,
        "actual_price": 990.0
    },
    {
        "name": "Colorsoft™ 8x10 Ft. Green Blue 2in1 Photography Backdrop Background Screen for Photostudio Photoshoot YouTube Video Shooting",
        "ratings": 3.5,
        "no_of_ratings": 56,
        "discount_price": 799.0,
        "actual_price": 1499.0
    },
    {
        "name": "Allimity Replacement Remote Control Suit for Logitech Surround Sound Speaker System Z906",
        "ratings": 4.6,
        "no_of_ratings": 44,
        "discount_price": 539.0,
        "actual_price": 599.0
    },
    {
        "name": "Sowbaghya Shree 2 Ltr Wet Grinder (Tilting Model) (With Attachments) 110V for USA & CANADA Table Top Wet Grinder | Heavy D...",
        "ratings": 2.4,
        "no_of_ratings": 6,
        "discount_price": 9999.0,
        "actual_price": 17099.0
    },
    {
        "name": "Applecreation Women's Kanchipuram Khadi Silk Saree with Blouse Piece (madhubani print sarees for women MDB8404_Beige)",
        "ratings": 3.7,
        "no_of_ratings": 1164,
        "discount_price": 560.0,
        "actual_price": 2999.0
    },
    {
        "name": "Bajaj New Majesty Instant 3 Litre, 3 KW Verical Water Heater (White)",
        "ratings": 4.1,
        "no_of_ratings": 1238,
        "discount_price": 3085.0,
        "actual_price": 5030.0
    },
    {
        "name": "Indya Women's Cotton Fit and Flare Maxi Dress",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 682.0,
        "actual_price": 2600.0
    },
    {
        "name": "Just Care Men's Skinny Fit Sports Leggings",
        "ratings": 3.9,
        "no_of_ratings": 613,
        "discount_price": 347.0,
        "actual_price": 999.0
    },
    {
        "name": "Alpines Store Women's Moroccan Madness Box Bag | Jacquard Book Tote Blue Multipurpose Handbag (Large) (Medium)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1299.0,
        "actual_price": 2999.0
    },
    {
        "name": "Chaka Chaundh Tea Quotes Frames - Tea Quotes Wall Frames - Tea Poster Framed - Dining Quotes Frame - (14 X 11 inches)(Mult...",
        "ratings": 4.3,
        "no_of_ratings": 105,
        "discount_price": 369.0,
        "actual_price": 899.0
    },
    {
        "name": "Blue Aura Naruto Keychain Kakashi Key Chains for Anime Fans Merchandise Collectible (Kakashi New Key)",
        "ratings": 5.0,
        "no_of_ratings": 6,
        "discount_price": 374.0,
        "actual_price": 899.0
    },
    {
        "name": "Trending Women's Multicolor Pallazo",
        "ratings": 3.3,
        "no_of_ratings": 49,
        "discount_price": 269.0,
        "actual_price": 395.0
    },
    {
        "name": "Puma Unisex-Adult Flex Essential Puma Black-Puma Black Running Shoe- 6 UK (36526801)",
        "ratings": 3.6,
        "no_of_ratings": 11,
        "discount_price": 2039.0,
        "actual_price": 2999.0
    },
    {
        "name": "Momin Libas Full Front Button Open Black Abaya & Burkha",
        "ratings": 3.7,
        "no_of_ratings": 76,
        "discount_price": 1324.0,
        "actual_price": 3999.0
    },
    {
        "name": "HIERA Men's Leather RFID Blocking Slim Bi-fold Minimalist Front Pocket Wallets (Crunch Tan)",
        "ratings": 4.0,
        "no_of_ratings": 154,
        "discount_price": 499.0,
        "actual_price": 1499.0
    },
    {
        "name": "Philips HL1632 500-Watt 3 Jar Juicer Mixer Grinder with Fruit Filter (Blue)",
        "ratings": 4.0,
        "no_of_ratings": 4394,
        "discount_price": 3999.0,
        "actual_price": 5295.0
    },
    {
        "name": "Creations Garg Men's PVC Captain Casual Shoes (Blue & Black)",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "PURPURA Sleeveless Cotton A-Line White Maxi Dress for Women",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 999.0,
        "actual_price": 2399.0
    },
    {
        "name": "anubhutee Women Pink & Golden Foil Ethnic Printed Straight Kurta",
        "ratings": 3.6,
        "no_of_ratings": 11,
        "discount_price": 399.0,
        "actual_price": 1799.0
    },
    {
        "name": "Princeware Plastic Plaid Casserole Set - 3.1L, 3 Pcs, Pink",
        "ratings": 3.9,
        "no_of_ratings": 3063,
        "discount_price": 624.0,
        "actual_price": 651.0
    },
    {
        "name": "AFJ GOLD Copper Gold Plated and Ruby Necklace for Women & Girls (Yellow)",
        "ratings": 4.2,
        "no_of_ratings": 134,
        "discount_price": 620.0,
        "actual_price": 3210.0
    },
    {
        "name": "Chumbak Teal Bird Paradise Watch - Dark Blue",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1397.0,
        "actual_price": 2795.0
    },
    {
        "name": "TUCUTE Women's Cotton Cartoon Knee Length Short Nighty (Cartoon print PK3, Multicolour, Free Size)",
        "ratings": 3.2,
        "no_of_ratings": 2947,
        "discount_price": 599.0,
        "actual_price": 1199.0
    },
    {
        "name": "DJI OM 5-Handheld 3-Axis Smartphone Gimbal Stabilizer with Grip Tripod, Built-in Extension Rod, Shot Guide for Vlogging, Y...",
        "ratings": 4.2,
        "no_of_ratings": 3006,
        "discount_price": 10500.0,
        "actual_price": 17990.0
    },
    {
        "name": "Traditions Bazaar Women's All Over Print Art Silk Dupatta",
        "ratings": 3.6,
        "no_of_ratings": 17,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "RAJESHWAR FASHION WITH RF Women's Pure Georgette Saree With Blouse Piece",
        "ratings": 3.5,
        "no_of_ratings": 461,
        "discount_price": 786.0,
        "actual_price": 2999.0
    },
    {
        "name": "Levi's Men Jeans",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1844.0,
        "actual_price": 4099.0
    },
    {
        "name": "Psychovest Women's Sexy Lace Pearl Design Tail Back Bra and Panty Lingerie Set Free Size",
        "ratings": 3.6,
        "no_of_ratings": 112,
        "discount_price": 496.0,
        "actual_price": 899.0
    },
    {
        "name": "(Renewed) Philips In-Mms6080B/94 60 Watt 2.1 Channel Auxiliary Multimedia Speaker (Black)",
        "ratings": 3.4,
        "no_of_ratings": 37,
        "discount_price": 3429.0,
        "actual_price": 5166.0
    },
    {
        "name": "Dott Systems DIAZE Remote Control Switch System for One Fan, A Home Automation Module (White)",
        "ratings": 3.7,
        "no_of_ratings": 119,
        "discount_price": 758.0,
        "actual_price": 1306.0
    },
    {
        "name": "INDIAN SPORTS GEAR Cotton Army Combat Camouflage All Over Print Half Sleeves T Shirt for Men",
        "ratings": 4.1,
        "no_of_ratings": 4,
        "discount_price": 999.0,
        "actual_price": 1799.0
    },
    {
        "name": "TULSATTVA Women Black Slim Fit Solid Treggings",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 572.5,
        "actual_price": 1145.0
    },
    {
        "name": "Mee Mee Baby manual Toothbrush for kids(Pack of 3) (Easy Grip, Green)",
        "ratings": 4.1,
        "no_of_ratings": 1171,
        "discount_price": 199.0,
        "actual_price": 207.0
    },
    {
        "name": "Liberty Mens Jaxon-1e Running Shoes",
        "ratings": 3.8,
        "no_of_ratings": 19,
        "discount_price": 987.0,
        "actual_price": 1299.0
    },
    {
        "name": "GIVA 925 Sterling Silver Zircon Shimmer Drop Earrings | Studs to Gift Women & Girls | With Certificate of Authenticity and...",
        "ratings": 4.4,
        "no_of_ratings": 34,
        "discount_price": 1614.0,
        "actual_price": 3399.0
    },
    {
        "name": "Centrino Men's 3696",
        "ratings": 3.5,
        "no_of_ratings": 140,
        "discount_price": 679.0,
        "actual_price": 2299.0
    },
    {
        "name": "Campus Men Freedom Running Shoes",
        "ratings": 3.8,
        "no_of_ratings": 378,
        "discount_price": 1194.0,
        "actual_price": 1599.0
    },
    {
        "name": "Mamaearth Milky Soft Body Lotion with Oats, Milk & Calendula - 400 ml",
        "ratings": 4.3,
        "no_of_ratings": 2629,
        "discount_price": 304.0,
        "actual_price": 399.0
    },
    {
        "name": "Rushifab Boys Cotton Blazer Style Formal Shirt and Pant Set with Bow in Navy Colour",
        "ratings": 3.0,
        "no_of_ratings": 32,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "wipro Garnet N70002 B22 7-Watt LED Bulb (Warm White/Golden Yellow) -Pack of 2",
        "ratings": 4.3,
        "no_of_ratings": 101,
        "discount_price": 200.0,
        "actual_price": 450.0
    },
    {
        "name": "SPENO Men's Grey Synthetic Loafers for Men, 9 UK (ANIL-015-GREY-09)",
        "ratings": 3.2,
        "no_of_ratings": 27,
        "discount_price": 299.0,
        "actual_price": 1249.0
    },
    {
        "name": "ISLE LOCADA HERO PRODUCT -CROCO/CROCO-BROWN/BROWN",
        "ratings": 4.7,
        "no_of_ratings": 10,
        "discount_price": 1365.92,
        "actual_price": 3995.0
    },
    {
        "name": "Veirdo® Pure Cotton Oversize Loose Baggy Fit Round Neck Half Sleeve Black Graphic Teddy Printed T-Shirt for Men & Boys",
        "ratings": 4.3,
        "no_of_ratings": 25,
        "discount_price": 439.0,
        "actual_price": 1199.0
    },
    {
        "name": "Park Avenue Medium Blue Shirt",
        "ratings": 4.4,
        "no_of_ratings": 19,
        "discount_price": 1249.0,
        "actual_price": 2499.0
    },
    {
        "name": "Centrino Men's 3703",
        "ratings": 3.1,
        "no_of_ratings": 70,
        "discount_price": 546.41,
        "actual_price": 2299.0
    },
    {
        "name": "PENADIA Cotton Reusable Super Breathable Fabric Face Mask with Adjustable Ear Loop, Anti-Bacterial,Designer Embroidered Cl...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 321.0,
        "actual_price": 1499.0
    },
    {
        "name": "CLYMB Men's Sports Shoes/Walking Shoes/Outdoor Ultra Lightweight Sneakers Running Zym Shoes for Mens, Boys",
        "ratings": 3.5,
        "no_of_ratings": 193,
        "discount_price": 539.0,
        "actual_price": 999.0
    },
    {
        "name": "Campus Boys Madrid Running Shoes",
        "ratings": 4.1,
        "no_of_ratings": 16,
        "discount_price": 1034.0,
        "actual_price": 1499.0
    },
    {
        "name": "Stylum Women's Self Woven Kantha Cotton Cord Set",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 775.0,
        "actual_price": 2599.0
    },
    {
        "name": "Longway Star 1200mm/48 inch High Speed Anti-dust Decorative 5 Star Rated Ceiling Fan 400 RPM with 3 Year Warranty (White, ...",
        "ratings": 3.0,
        "no_of_ratings": 26,
        "discount_price": 2499.0,
        "actual_price": 4962.0
    },
    {
        "name": "Harissons Ellipsis Grey Vintage Classic Sling Bag Expandable Mutil-Pocket Polyester Fabric Crossbody Bag Satchel Bag Ideal...",
        "ratings": 4.1,
        "no_of_ratings": 11,
        "discount_price": 998.0,
        "actual_price": 1279.0
    },
    {
        "name": "Pepe Jeans Men's Regular Fit Jeans",
        "ratings": 4.3,
        "no_of_ratings": 6,
        "discount_price": 2249.0,
        "actual_price": 4999.0
    },
    {
        "name": "Berliner Bags Vintage Leather Backpack Paris XL, Large Waterproof Bookbag for Men and Women - Brown",
        "ratings": 4.6,
        "no_of_ratings": 180,
        "discount_price": 6999.0,
        "actual_price": 9500.0
    },
    {
        "name": "Women Quick-Dry Padded Wirefree Workout Crop Cute Tank Tops Camisole Yoga Fitness Running Gym(28 Till 34) Pack of 1 White ...",
        "ratings": 3.6,
        "no_of_ratings": 3,
        "discount_price": 499.0,
        "actual_price": 799.0
    },
    {
        "name": "KARCHER K 2.050 HIGH Pressure CAR Washer",
        "ratings": 4.0,
        "no_of_ratings": 489,
        "discount_price": 6398.0,
        "actual_price": 10999.0
    },
    {
        "name": "Fabme Women's Low Back Converter - 2 Hook - (Colour Options: Skin, White Black)- Pack of 1",
        "ratings": 3.6,
        "no_of_ratings": 622,
        "discount_price": 155.0,
        "actual_price": 299.0
    },
    {
        "name": "RKPM HOMES DIY Handmade Soap Molds, Cupcake Liners - 100% Handmade Square Silicone - Microwave, Oven, Refrigerator, Freeze...",
        "ratings": 3.8,
        "no_of_ratings": 60,
        "discount_price": 199.0,
        "actual_price": 699.0
    },
    {
        "name": "Ayushiv SINDOOR - SINDUR ORIGINAL - SINDOOR FOR POOJA - PURE SINDOOR FOR LORD HANUMAN (100 GM)",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 369.0,
        "actual_price": 449.0
    },
    {
        "name": "INGCO Impact Drill, 680W | 0-3000rpm | 13mm Power Hammer Drills, Variable Speed Corded Drill Machine, Froward/Reverse Swit...",
        "ratings": 4.0,
        "no_of_ratings": 161,
        "discount_price": 1999.0,
        "actual_price": 3999.0
    },
    {
        "name": "Jaipur Export qulaity Blue Indigo Printed Woman Pure, cootan Kaftan Ladies Caftan Kurti Tops Free Size Bohemian Women Nigh...",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 1700.0
    },
    {
        "name": "Gear Bounce 27 Ltrs Water Resistant School Bag/Backpack/College Bag for Men/Women-Grey Orange",
        "ratings": 3.6,
        "no_of_ratings": 378,
        "discount_price": 629.0,
        "actual_price": 1799.0
    },
    {
        "name": "SanDisk Extreme SDXC, SDXVF 256GB, V30, U3, C10, UHS-I, 90MB/s R, 60MB/s W, for 4K Video",
        "ratings": 4.5,
        "no_of_ratings": 215311,
        "discount_price": 3499.0,
        "actual_price": 10500.0
    },
    {
        "name": "TnW Men Artifcial Leather Wallet(Black)",
        "ratings": 4.1,
        "no_of_ratings": 131,
        "discount_price": 207.0,
        "actual_price": 1195.0
    },
    {
        "name": "Senslife Women's Soft and Smooth Satin Solid Short Sleeve Nightwear Top and Pyjama Set (SL009, Navy Blue, Large)",
        "ratings": 4.0,
        "no_of_ratings": 100,
        "discount_price": 239.0,
        "actual_price": 1199.0
    },
    {
        "name": "MIRABI Women's Fishnet Hooded See Through Sheer Pure Mesh Crop Top",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 1499.0
    },
    {
        "name": "Etzin 60M HDMI Extender, HDMI to RJ45 Network Cable Extender Converter Repeater Compatible With 5e / 6 1080p up to 60m HDT...",
        "ratings": 2.9,
        "no_of_ratings": 22,
        "discount_price": 1799.0,
        "actual_price": 4999.0
    },
    {
        "name": "M Cart Designed for iPhone 13 Pro Case 2021 Silicone Ultra Slim Shockproof Protective Phone Case with [Soft Anti-Scratch M...",
        "ratings": 3.9,
        "no_of_ratings": 136,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Scratchgard Screen Protector for Canon EOS R5 Camera (Twin)",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 1299.0
    },
    {
        "name": "AKSHAR4U 1 Psc Mini Small First Aid Kit Travel Pouch Medicine Storage Bag Double Zippers Handy Pills Pocket for Travel Sch...",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 240.0,
        "actual_price": 599.0
    },
    {
        "name": "Hot And Bold Certified Natural Reiki-Yoga Aum-Hamsa Hand Sodalite Good Luck Elephant Beads Unisex Bracelet",
        "ratings": 2.0,
        "no_of_ratings": 3,
        "discount_price": 428.0,
        "actual_price": 4199.0
    },
    {
        "name": "Baggit Women's Wallet",
        "ratings": 4.6,
        "no_of_ratings": 31,
        "discount_price": 639.0,
        "actual_price": 1190.0
    },
    {
        "name": "Phomemo Mini Bluetooth Wireless Paper Pocket Printer Portable Instant Mobile Printer Thermal Printer Compatible with iOS +...",
        "ratings": 4.4,
        "no_of_ratings": 1502,
        "discount_price": 6897.0,
        "actual_price": 10300.0
    },
    {
        "name": "Max Girls Graphic Print T-Shirt with Long Sleeves",
        "ratings": 4.2,
        "no_of_ratings": 118,
        "discount_price": 139.0,
        "actual_price": 199.0
    },
    {
        "name": "Samvardhan Unicorn Wired Over the Ear Headphone with Mic (Pink)",
        "ratings": 4.2,
        "no_of_ratings": 100,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Tommy Hilfiger Men Shirt",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 2809.0,
        "actual_price": 3999.0
    },
    {
        "name": "ISKCON Jagannath 5 Mukhi Rudraksha Jaap Mala, Certified (54+1 Beads)",
        "ratings": 3.6,
        "no_of_ratings": 10,
        "discount_price": 250.0,
        "actual_price": 750.0
    },
    {
        "name": "Hidesign Womens Bag",
        "ratings": 3.9,
        "no_of_ratings": 62,
        "discount_price": 3217.0,
        "actual_price": 4295.0
    },
    {
        "name": "FURO Mens R1014 794 Running Shoes",
        "ratings": 3.6,
        "no_of_ratings": 53,
        "discount_price": 1099.0,
        "actual_price": 2540.0
    },
    {
        "name": "Silicone Sucker Nagpal Anti Scratch Door Edge Rubber Guard Buffer Protectors for Cars - Original Type Door Guard for All C...",
        "ratings": 4.1,
        "no_of_ratings": 422,
        "discount_price": 240.0,
        "actual_price": 1299.0
    },
    {
        "name": "HASTHIP® Tree of Life Tapestry Wall Hanging, Wishing Tree Aesthetic Tapestries Psychedelic Wall Carpet Mystic Aesthetic Wa...",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 899.0,
        "actual_price": 1199.0
    },
    {
        "name": "Massaya Girl's Net Fabric Long Tulle Skirt",
        "ratings": 3.0,
        "no_of_ratings": 43,
        "discount_price": 629.0,
        "actual_price": 1199.0
    },
    {
        "name": "SEGA Men's Cricket Shoe",
        "ratings": 3.8,
        "no_of_ratings": 66,
        "discount_price": 1449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Puma Men T-Shirt",
        "ratings": 3.8,
        "no_of_ratings": 100,
        "discount_price": 809.0,
        "actual_price": 1999.0
    },
    {
        "name": "AKSHARLLC Women's Embroidered Naylon Net Dupatta",
        "ratings": 4.4,
        "no_of_ratings": 67,
        "discount_price": 349.0,
        "actual_price": 1099.0
    },
    {
        "name": "WaterScience Hard Water Filter for Dishwasher - Protects from Limescale, Hard Water, Rust & Dust (DWF 822)",
        "ratings": 4.7,
        "no_of_ratings": 5,
        "discount_price": 845.0,
        "actual_price": 995.0
    },
    {
        "name": "Adidas Mens Rapidus M Running Shoes",
        "ratings": 3.9,
        "no_of_ratings": 81,
        "discount_price": 2799.0,
        "actual_price": 5599.0
    },
    {
        "name": "RAJMANDIRFABRICS Women's Cotton Bandhej Printed Embroidered Kurta Pant & Dupatta Set",
        "ratings": 4.0,
        "no_of_ratings": 62,
        "discount_price": 1375.0,
        "actual_price": 3699.0
    },
    {
        "name": "Toodlegram Never Trust Me Atom Men/Women Tshirt, 100% Cotton Regular Fit Graphic Printed Tshirt, Plus Size Collection, Siz...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 999.0
    },
    {
        "name": "GUESS Analog Silver Dial Women's Watch-GW0300L1",
        "ratings": 4.6,
        "no_of_ratings": 23,
        "discount_price": 7696.5,
        "actual_price": 10995.0
    },
    {
        "name": "WILD MODA Women's Shoulder Bag",
        "ratings": 4.1,
        "no_of_ratings": 993,
        "discount_price": 699.0,
        "actual_price": 1699.0
    },
    {
        "name": "TIMEX Moon Phase Multifunction Analog Rose Gold Dial Women's Watch-TWEL13105",
        "ratings": 4.2,
        "no_of_ratings": 250,
        "discount_price": 2789.0,
        "actual_price": 3995.0
    },
    {
        "name": "aeepd Mens Chef Shoes Comfortable Slip Resistant Shoes Breathable Oil Resistant Food Service Shoes",
        "ratings": 4.1,
        "no_of_ratings": 46,
        "discount_price": 10858.0,
        "actual_price": 15519.0
    },
    {
        "name": "Kapiva Immune Care Juice (2L) | 11 Immune-booster herbs in 1 Ayurvedic Juice including Amla, Neem, Ashwagandha and More | ...",
        "ratings": 4.0,
        "no_of_ratings": 29,
        "discount_price": 599.0,
        "actual_price": 998.0
    },
    {
        "name": "Digital 24 Images Projector Watch for Kids, Return Gift (Available in Different variants) (Avengers)",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 193.0,
        "actual_price": 499.0
    },
    {
        "name": "SHAUN Women Free Size (Waist Size-26-34 inch) Stretchable-Jeggings (Length 37-39 inch_Pack of 1)",
        "ratings": 3.7,
        "no_of_ratings": 18,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Action Pro 360 Degree Rotary Backpack Clip Mount with Phone Holder Compatible with GoPro Hero 11 10 9 8 7 6 5 Black Action...",
        "ratings": 4.0,
        "no_of_ratings": 514,
        "discount_price": 699.0,
        "actual_price": 799.0
    },
    {
        "name": "Fast Type-C Usb Cable for Motorola Moto G60 USB Cable Original Like | Data Sync Cable | Rapid Quick Dash Fast Charging Cab...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 270.0,
        "actual_price": 566.0
    },
    {
        "name": "Adidas Men Running Shoes",
        "ratings": 3.9,
        "no_of_ratings": 40,
        "discount_price": 3794.0,
        "actual_price": 6999.0
    },
    {
        "name": "The Indian Garage Co Men's Slim Fit Shirt",
        "ratings": 3.3,
        "no_of_ratings": 7,
        "discount_price": 490.0,
        "actual_price": 1749.0
    },
    {
        "name": "SOLO Men's Cotton Briefs (Pack of 5)",
        "ratings": 3.8,
        "no_of_ratings": 121,
        "discount_price": 713.0,
        "actual_price": 849.0
    },
    {
        "name": "Paras Mani Enterprises Men Multicolor Cotton Blend Boxer Shorts Pack of 3 (M)",
        "ratings": 3.4,
        "no_of_ratings": 7,
        "discount_price": 248.0,
        "actual_price": 999.0
    },
    {
        "name": "STATUS MANTRA Full Sleeves Tshirt for Women Combo Pack of 2 | Round Neck Cotton Printed Casual Tees",
        "ratings": 3.7,
        "no_of_ratings": 266,
        "discount_price": 799.0,
        "actual_price": 1499.0
    },
    {
        "name": "IJJA Camera Silicone body Protective Camera Case Cover Compatible with Nikon D7500 (Black)",
        "ratings": 3.8,
        "no_of_ratings": 27,
        "discount_price": 1099.0,
        "actual_price": 3999.0
    },
    {
        "name": "Shining Diva Fashion 18k Gold Plated AAA Diamonds Stylish Bracelet for Women & Girls",
        "ratings": 4.1,
        "no_of_ratings": 89,
        "discount_price": 399.0,
        "actual_price": 2499.0
    },
    {
        "name": "Fusion L-Shaped Board for Learning Driver Red Car Decal Sticker of 14Cm X 14 cm (Pack of 2 Sticker)(14 cm,14 cm,0.25 cm)",
        "ratings": 3.8,
        "no_of_ratings": 42,
        "discount_price": 189.0,
        "actual_price": 244.0
    },
    {
        "name": "Portronics Toad 27 Wireless Mouse, Silent Buttons, 2.4 GHz with USB Nano Dongle for PC/Mac/Laptop, Auto Power Saving Mode,...",
        "ratings": 4.0,
        "no_of_ratings": 55,
        "discount_price": 389.0,
        "actual_price": 499.0
    },
    {
        "name": "Mokobara The Sling Bag Vegan Leather Cross Body Bag for Men and Women",
        "ratings": 4.4,
        "no_of_ratings": 24,
        "discount_price": 3999.0,
        "actual_price": 6999.0
    },
    {
        "name": "Red Tape Women Black Walking Shoes",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 1140.0,
        "actual_price": 4599.0
    },
    {
        "name": "VINAAN Women's Plus Size Printed Cape Top",
        "ratings": 4.5,
        "no_of_ratings": 28,
        "discount_price": 798.0,
        "actual_price": 2999.0
    },
    {
        "name": "Aviean International Oven Baked Soft Dog Adult Biscuit 1kg Pack Chicken Flavour Dog Treat with High Protein",
        "ratings": 3.5,
        "no_of_ratings": 12,
        "discount_price": 170.0,
        "actual_price": 400.0
    },
    {
        "name": "Diverse Men Formal Shirt",
        "ratings": 3.9,
        "no_of_ratings": 18,
        "discount_price": 614.12,
        "actual_price": 2998.0
    },
    {
        "name": "Faynci Mini Holy Bible Religious Decorative Cross Both Sided Key Chain in Silver with Actual Bible Text Pages",
        "ratings": 3.8,
        "no_of_ratings": 2,
        "discount_price": 269.0,
        "actual_price": 599.0
    },
    {
        "name": "LUNAGARIYA®, Protective Cover for DAIKIN AC Remote Control, PU Leather Cover Holder (Before Placing Order Compare The Dime...",
        "ratings": 3.7,
        "no_of_ratings": 13,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "Acco & Deco 2 Tier Wooden Multipurpose Turn-n-Tube Engineered Wood End Table Beside Sofa Side Table Corner Night Stand for...",
        "ratings": 3.6,
        "no_of_ratings": 173,
        "discount_price": 711.0,
        "actual_price": 3000.0
    },
    {
        "name": "HELISHA Women's & Girls Slicone Wire Free Stick-On Free-Bra, Silicone Nipple Cover Bra Pad - Adhesive Reusable Nipple Pad...",
        "ratings": 3.4,
        "no_of_ratings": 104,
        "discount_price": 398.0,
        "actual_price": 1299.0
    },
    {
        "name": "MM-21 Women's Loose Fit Denim Palazzo",
        "ratings": 3.8,
        "no_of_ratings": 143,
        "discount_price": 599.0,
        "actual_price": 1999.0
    },
    {
        "name": "GUESS PU Zipper Closure Womens Casual Tote Handbag (Yellow_Frsz)",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 7999.0,
        "actual_price": 9999.0
    },
    {
        "name": "Women's Kurta Sharara Set with Embroidery and Gotta Work/Ethnic Straight Kurti & Sharara Set",
        "ratings": 3.1,
        "no_of_ratings": 266,
        "discount_price": 598.0,
        "actual_price": 1999.0
    },
    {
        "name": "Lipiworld® 193A WiFi AC Remote Control Compatible for Bluestar AC Remote",
        "ratings": 4.3,
        "no_of_ratings": 4,
        "discount_price": 489.0,
        "actual_price": 799.0
    },
    {
        "name": "NAVIFORCE Men's Analog Chronograph Quartz Watch with Stainless Steel Bracelet NF9165",
        "ratings": 4.3,
        "no_of_ratings": 28,
        "discount_price": 2952.0,
        "actual_price": 4999.0
    },
    {
        "name": "Bajaj New Shakti Storage 25 Litre Vertical Water Heater, White, 4 Star (43.3 x 44.1 x 57 cms)",
        "ratings": 4.2,
        "no_of_ratings": 21089,
        "discount_price": 7299.0,
        "actual_price": 9900.0
    },
    {
        "name": "DHRUVS COLLECTION 925 Silver Nazariya Anklet Single Piece with Black & Silver Crystal Beads For Girls and Women",
        "ratings": 4.5,
        "no_of_ratings": 7,
        "discount_price": 440.0,
        "actual_price": 999.0
    },
    {
        "name": "Usha Heavy Weight Iron Heavy Weight 1.75 kg - White Pack of 2",
        "ratings": 3.7,
        "no_of_ratings": 8,
        "discount_price": 2199.0,
        "actual_price": 4990.0
    },
    {
        "name": "Orient Electric PP Plastic Pedestal Stand-32 Fan (Signal White - 400 MM)",
        "ratings": 3.7,
        "no_of_ratings": 57,
        "discount_price": 2790.0,
        "actual_price": 3775.0
    },
    {
        "name": "CILICAnT Orange Silica Gel Beads for Moisture Control, Rechargeable Indicating Desiccant Dehumidifier (Beads Size: 2-4 mm)...",
        "ratings": 4.6,
        "no_of_ratings": 16,
        "discount_price": 540.0,
        "actual_price": 700.0
    },
    {
        "name": "JusCliq Digital to Analog Audio Converter + Toslink SPDIF Optical Cable + Analog RCA 2.1 Cable .",
        "ratings": 3.5,
        "no_of_ratings": 10,
        "discount_price": 799.0,
        "actual_price": 1249.0
    },
    {
        "name": "Denill Women Stylish Slip On Slipper",
        "ratings": 3.3,
        "no_of_ratings": 18,
        "discount_price": 249.0,
        "actual_price": 1499.0
    },
    {
        "name": "Puma Unisex Bosco Jr 2 Dp Sneakers",
        "ratings": 2.0,
        "no_of_ratings": 150,
        "discount_price": 676.0,
        "actual_price": 2099.0
    },
    {
        "name": "Bata mens RAYSON Black Sneaker - 10 UK (8216019)",
        "ratings": 3.2,
        "no_of_ratings": 25,
        "discount_price": 783.37,
        "actual_price": 1699.0
    },
    {
        "name": "Ourdaily Vitamin C (500mg) & Zinc, chewable tablets, tasty lemony orange flavour - builds immunity against viruses and col...",
        "ratings": 4.2,
        "no_of_ratings": 2658,
        "discount_price": 223.0,
        "actual_price": 414.0
    },
    {
        "name": "AMAN Fitness 04 KG to 20 KG Home Gym Combo of PVC Dumbbell Plate Set with Dumbbell Rods Exercise & Fitness Sets (4 kg set ...",
        "ratings": 2.6,
        "no_of_ratings": 3,
        "discount_price": 499.0,
        "actual_price": 1599.0
    },
    {
        "name": "Van Heusen Men's Formal Shirt",
        "ratings": 4.1,
        "no_of_ratings": 17,
        "discount_price": 2135.0,
        "actual_price": 2399.0
    },
    {
        "name": "TWINLIGHT Women's Sleeveless Round Neck Crop Top",
        "ratings": 4.3,
        "no_of_ratings": 6,
        "discount_price": 449.0,
        "actual_price": 1999.0
    },
    {
        "name": "SKMEI Men's Digital Sports Wrist Watch LED Screen Large Face Electronics Military Watches Waterproof Alarm Stopwatch Back ...",
        "ratings": 4.0,
        "no_of_ratings": 2255,
        "discount_price": 799.0,
        "actual_price": 999.0
    },
    {
        "name": "BULLMER Mens Regular Fit Printed Polo Collared Tshirt - Light Green/4X-Large",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 489.0,
        "actual_price": 999.0
    },
    {
        "name": "RSPR 8.25 Ratti 7.60 Carat Certified Natural Yellow Sapphire Pukhraj Gemstone Adjustable Ring/Anguthi for Men and Women",
        "ratings": 3.0,
        "no_of_ratings": 8,
        "discount_price": 604.0,
        "actual_price": 2999.0
    },
    {
        "name": "Lymio Women's Green Color V Neck 3/4th Sleeve Polyester Dress",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Upscale Digital Temperature Controlled Electric Glass Kettle|| Tea & Coffee Maker with Infuser cum Strainer Filter| Borosi...",
        "ratings": 3.8,
        "no_of_ratings": 112,
        "discount_price": 2499.0,
        "actual_price": 3499.0
    },
    {
        "name": "LAWMAN PG3 Men Polo",
        "ratings": 3.8,
        "no_of_ratings": 79,
        "discount_price": 314.0,
        "actual_price": 1499.0
    },
    {
        "name": "GRECIILOOKS Tops for Women -Cotton Lining Pattern Stitched T-Shirt with Fancy Sleeve for Girls, Suitable for Festival, Off...",
        "ratings": 4.4,
        "no_of_ratings": 6,
        "discount_price": 299.0,
        "actual_price": 2299.0
    },
    {
        "name": "Super Combo Pack of 10 Pcs BNC Connector with Copper Wire 18 cm and 10 Pcs DC Power Pin Male Cables with Copper Wire Conne...",
        "ratings": 3.8,
        "no_of_ratings": 127,
        "discount_price": 265.0,
        "actual_price": 600.0
    },
    {
        "name": "A.K LEATHER Women's Handmade Original Leather Handbag/Shoulder bag",
        "ratings": 4.0,
        "no_of_ratings": 8,
        "discount_price": 1499.0,
        "actual_price": 7550.0
    },
    {
        "name": "Lee Men Jeans",
        "ratings": 3.7,
        "no_of_ratings": 18,
        "discount_price": 1358.0,
        "actual_price": 3399.0
    },
    {
        "name": "Dahua 2MP IP Bullet Full Color Camera DH-IPC-HFW1239S1P-LED-S4",
        "ratings": 4.7,
        "no_of_ratings": 22,
        "discount_price": 2999.0,
        "actual_price": 7525.0
    },
    {
        "name": "WENGER Cote D' Azure Large Hardside ABS Suitcase (96L, Silver, Swiss Designed-Blend of Style and Function, 612230)",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 8250.0,
        "actual_price": 15000.0
    },
    {
        "name": "AND Women's Linen A-Line Mini Dress",
        "ratings": 4.8,
        "no_of_ratings": 6,
        "discount_price": 1175.0,
        "actual_price": 3499.0
    },
    {
        "name": "Himalaya Gentle Baby Shampoo (200ml) & Himalaya Baby Hair Oil 200 ml(1 Count)",
        "ratings": 4.5,
        "no_of_ratings": 6,
        "discount_price": 362.0,
        "actual_price": 415.0
    },
    {
        "name": "AmazonBasics HL-007331 High-Speed Micro-HDMI (NOT Micro-USB) to HDMI Cable - 3 Feet (2-Pack) (Latest Standard) (Black)",
        "ratings": 4.1,
        "no_of_ratings": 17298,
        "discount_price": 529.0,
        "actual_price": 1200.0
    },
    {
        "name": "KLEIO Snake Pattern PU Leather Satchel Handbag For Women Ladies (HO9046KL)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1797.0,
        "actual_price": 4999.0
    },
    {
        "name": "Lee Men T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 9,
        "discount_price": 478.0,
        "actual_price": 1199.0
    },
    {
        "name": "Birthday Popper Unicorn Soft Plush Sling Cross Body Bag | 6 No | with Cute Prints for Birthday | Navratri | Diwali Gifts |...",
        "ratings": 4.0,
        "no_of_ratings": 18,
        "discount_price": 450.0,
        "actual_price": 600.0
    },
    {
        "name": "crocs ClsMrblCutieCg",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 1962.0,
        "actual_price": 3295.0
    },
    {
        "name": "SWADESI STUFF Multi Color Army Kids Digital Watch for Boys",
        "ratings": 3.7,
        "no_of_ratings": 5478,
        "discount_price": 239.0,
        "actual_price": 1099.0
    },
    {
        "name": "REZEK Portable Blender, Juicer Maker Mixer, Personal Size Electric Rechargeable USB Juicer Cup, Fruit Mixer Jar Machine wi...",
        "ratings": 2.9,
        "no_of_ratings": 32,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "Robbie jones Sneakers Casual Canvas Fabric Colour Shoes for Men and Boys",
        "ratings": 3.1,
        "no_of_ratings": 425,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "ASUS Vivobook 14, Intel Core i7-1165G7 11th Gen, 14\" (35.56 cm) FHD, Thin and Laptop (16GB/512GB SSD/Intel Iris Xe Graphic...",
        "ratings": 4.1,
        "no_of_ratings": 269,
        "discount_price": 56990.0,
        "actual_price": 80990.0
    },
    {
        "name": "Baybee Reusable Fabric Nappy-Washable Cloth Diaper - Knot Adjustable Cloth Nappies for Babies - Suitable for Boys & Girls ...",
        "ratings": 4.1,
        "no_of_ratings": 676,
        "discount_price": 769.0,
        "actual_price": 1499.0
    },
    {
        "name": "HIKVISION Full HD 5MP Cameras Wired Combo KIT , 1 Bullet Cameras + 3 Dome Cameras+1TB Hard DISC+ Wire ROLL +Supply & All R...",
        "ratings": 3.2,
        "no_of_ratings": 34,
        "discount_price": 14900.0,
        "actual_price": 24000.0
    },
    {
        "name": "JUNEBERRY Night Suits for Women, Night Dresses for Women, Night Wear for Women, Co ord Set for Women, Coord Sets for Women...",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 599.0,
        "actual_price": 1999.0
    },
    {
        "name": "\"TGC\" Kaee Colour Dotted Matt Metal Bangle / Dark Green Color Chudi Set for Women and Girls (Pack of 24 Bangles)",
        "ratings": 3.8,
        "no_of_ratings": 21,
        "discount_price": 159.0,
        "actual_price": 499.0
    },
    {
        "name": "secret love Women Sheer Fabric Erotic Bra Panty Set Adjustable Straps Sexy Look",
        "ratings": 3.0,
        "no_of_ratings": 4,
        "discount_price": 269.0,
        "actual_price": 998.0
    },
    {
        "name": "Trendy Dukaan Diaper Bag/Mother Backpack for Travel (Printed Black) Prints and Colours May Vary",
        "ratings": 4.4,
        "no_of_ratings": 68,
        "discount_price": 1399.0,
        "actual_price": 2700.0
    },
    {
        "name": "Allen Solly Men's Slim Fit Shirt",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 1651.0,
        "actual_price": 2799.0
    },
    {
        "name": "GZ99 Microfiber Duster Brush Microfibre Dry Brush for Car & Home (Black, 1 Unit)",
        "ratings": 3.9,
        "no_of_ratings": 11,
        "discount_price": 475.0,
        "actual_price": 699.0
    },
    {
        "name": "Mini Bluetooth Speaker with FM Radio, Memory Card Slot, USB Pen Drive Slot, AUX Input Mode",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 690.0,
        "actual_price": 890.0
    },
    {
        "name": "Amazon Brand - Symbol Men's Relaxed Jeans",
        "ratings": 3.7,
        "no_of_ratings": 2659,
        "discount_price": 709.0,
        "actual_price": 2399.0
    },
    {
        "name": "GODOX LED1000Bi II Bi-Color DMX LED Video Light (Remote Not Included)",
        "ratings": 3.3,
        "no_of_ratings": 2,
        "discount_price": 25346.0,
        "actual_price": 29490.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim Shirt",
        "ratings": 3.1,
        "no_of_ratings": 5,
        "discount_price": 1780.0,
        "actual_price": 2399.0
    },
    {
        "name": "Gizga Essentials 2-in-1 Professional Cleaning Kit (XL -170ML) for Camera, Lens, Binocular, Laptop, TV, Monitor,Smartphone,...",
        "ratings": 4.2,
        "no_of_ratings": 25215,
        "discount_price": 349.0,
        "actual_price": 599.0
    },
    {
        "name": "Peluche Silver Crystal Flower Shaped Brooch for Men",
        "ratings": 3.7,
        "no_of_ratings": 8,
        "discount_price": 799.0,
        "actual_price": 1596.0
    },
    {
        "name": "YouBella Jewellery Latest Stylish Crystal Unisex Leaf Brooch for Wedding/Party for Women/Girls/Men (Silver)",
        "ratings": 3.9,
        "no_of_ratings": 81,
        "discount_price": 299.0,
        "actual_price": 1599.0
    },
    {
        "name": "WORLD WEAR FOOTWEAR Men's (9064-9310) Multicolor Casual Sports Running Shoes 10 UK (Set of 2 Pair)",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 644.0,
        "actual_price": 998.0
    },
    {
        "name": "WeTek HDMI Extension, Female to Female Extender Connector Adapter Support 4K 1080P",
        "ratings": 3.6,
        "no_of_ratings": 24,
        "discount_price": 175.0,
        "actual_price": 499.0
    },
    {
        "name": "Coaster Men Stylish Black Lace up Synthetic Leather Outdoor Sports Running Shoes",
        "ratings": 3.7,
        "no_of_ratings": 15,
        "discount_price": 999.0,
        "actual_price": 1119.0
    },
    {
        "name": "SH-12 Wireless Bluetooth Over the Ear Headphone with Mic (Blue)",
        "ratings": 3.3,
        "no_of_ratings": 112,
        "discount_price": 449.0,
        "actual_price": 899.0
    },
    {
        "name": "CarryPro Mojo Travel Laptop Backpack - 20L",
        "ratings": 4.4,
        "no_of_ratings": 8,
        "discount_price": 2299.0,
        "actual_price": 3999.0
    },
    {
        "name": "Manikya CITYGOLD Gold Colored Copper With 24 Carat Micro Gold Plated Guaranteed Pack of 2 Bangles",
        "ratings": 4.0,
        "no_of_ratings": 16,
        "discount_price": 479.0,
        "actual_price": 480.0
    },
    {
        "name": "Nike Men Sock Dart KJCRD Running Shoes",
        "ratings": 3.8,
        "no_of_ratings": 19,
        "discount_price": 6144.0,
        "actual_price": 10795.0
    },
    {
        "name": "Red Chief Men's Leather Boat Shoes",
        "ratings": 4.0,
        "no_of_ratings": 37,
        "discount_price": 2135.0,
        "actual_price": 3495.0
    },
    {
        "name": "KABEER ART 100ml Empty Cute Bear and Floral Refillable Fine Mist Sprayer Spray Bottle Atomizer with Ultra-Fine Mist Pump f...",
        "ratings": 4.0,
        "no_of_ratings": 1281,
        "discount_price": 184.3,
        "actual_price": 300.0
    },
    {
        "name": "Merayo Metal Mesh Pen and Pencil Stationary Storage Tidy Desk Organizer Box with 6 Compartment for Home and Office Accesso...",
        "ratings": 4.4,
        "no_of_ratings": 1492,
        "discount_price": 789.0,
        "actual_price": 1299.0
    },
    {
        "name": "Dixcy Slimz Women's Regular Fit Thermal",
        "ratings": 4.0,
        "no_of_ratings": 971,
        "discount_price": 321.0,
        "actual_price": 499.0
    },
    {
        "name": "Luv Lap Galaxy Baby Stroller, Pram for Baby with 5 Point Safety Harness, Spacious Cushioned seat with Multi Level seat Rec...",
        "ratings": 4.2,
        "no_of_ratings": 5833,
        "discount_price": 6499.0,
        "actual_price": 7799.0
    },
    {
        "name": "DHRUVI TRENDZ Microfiber Saree Shapewear Petticoat for Women, Cotton Blended Shape Wear for Saree Petticoat",
        "ratings": 4.0,
        "no_of_ratings": 192,
        "discount_price": 389.0,
        "actual_price": 1999.0
    },
    {
        "name": "Alfa Men's Winter wear Solid V Neck Thermal Top - Pack of 3 (Navy,Brown,Black)",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 999.0,
        "actual_price": 3897.0
    },
    {
        "name": "ZAVERI PEARLS Peach Meenakari Multistrand Cluster Beaded Kundan Necklace Earring Maangtikka & Ring Set For Women-ZPFK14057",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 550.0,
        "actual_price": 2750.0
    },
    {
        "name": "Janasya Women's Light Blue Denim Solid Flared Western Dress",
        "ratings": 2.7,
        "no_of_ratings": 4,
        "discount_price": 1369.0,
        "actual_price": 3619.0
    },
    {
        "name": "Lux Cozi Men's Cotton Boxers (Pack of 3) (Color & Prints May Vary)",
        "ratings": 3.4,
        "no_of_ratings": 223,
        "discount_price": 449.0,
        "actual_price": 672.0
    },
    {
        "name": "Nike Men's Black, White Running Shoes - 8 UK (8.5 US)",
        "ratings": 4.0,
        "no_of_ratings": 4,
        "discount_price": 6990.0,
        "actual_price": 6995.0
    },
    {
        "name": "Evogirl Rubberbands Schooltime Dailyuse All Purpose Ponytailers Hair Ties Elastic Rubberband Soft & Strong No Metal 1.4cm ...",
        "ratings": 3.8,
        "no_of_ratings": 28,
        "discount_price": 149.0,
        "actual_price": 599.0
    },
    {
        "name": "BATA Womens Mary Heels, (7616700)",
        "ratings": 4.1,
        "no_of_ratings": 159,
        "discount_price": 701.0,
        "actual_price": 1299.0
    },
    {
        "name": "Shoefly Men Multicolour Latest Collection Sports Running Shoes - Pack of 2 (Combo-(2)",
        "ratings": 2.7,
        "no_of_ratings": 24,
        "discount_price": 499.0,
        "actual_price": 998.0
    },
    {
        "name": "KARCHER SC2 EasyFix Steam Cleaner",
        "ratings": 4.4,
        "no_of_ratings": 1117,
        "discount_price": 11012.0,
        "actual_price": 17999.0
    },
    {
        "name": "AAFIYA Baby Doll Nightwear Robe/Kimono Lingerie/Negligee/Sleep Dress & Bra Panty Hot Sexy for Honeymoon/First Night/Annive...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 185.0,
        "actual_price": 999.0
    },
    {
        "name": "MOHUR Happy Birthday 10 Gm Silver Coin Coloured (999) Pure Silver",
        "ratings": 4.3,
        "no_of_ratings": 50,
        "discount_price": 1298.0,
        "actual_price": 1599.0
    },
    {
        "name": "My Magic Gift Personalized Smart Touch Mood LAMP Bluetooth Speaker",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 1149.0
    },
    {
        "name": "JIM HALO Polarized Sports Sunglasses Mirror Wrap Around Driving Fishing Men Women",
        "ratings": 4.0,
        "no_of_ratings": 2340,
        "discount_price": 1219.0,
        "actual_price": 1599.0
    },
    {
        "name": "Klepe Mens Kdd17 Loafer",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 639.0,
        "actual_price": 3199.0
    },
    {
        "name": "Dime Store Multi Tier Plant Stand Flower Pot Stand for Balcony Living Room Outdoor Indoor Plants Plant Holder Home Decor Item",
        "ratings": 3.7,
        "no_of_ratings": 1099,
        "discount_price": 1695.0,
        "actual_price": 2999.0
    },
    {
        "name": "Fast Charger for Xiomi Redmi Note 3, Redmi Note 5 Pro, Redmi Note 5, Mi Note 4 Mobile USB Charger Power Adapter Hi Speed T...",
        "ratings": 4.2,
        "no_of_ratings": 4,
        "discount_price": 349.0,
        "actual_price": 799.0
    },
    {
        "name": "Daniel Klein Analog Blue Dial Women's Watch-DK.1.12432-7",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 1519.0,
        "actual_price": 3450.0
    },
    {
        "name": "Nike Men's Regular fit T-Shirt",
        "ratings": 3.3,
        "no_of_ratings": 14,
        "discount_price": 1669.0,
        "actual_price": 2495.0
    },
    {
        "name": "Eva-Dry E-333 Dehumidifier",
        "ratings": 4.2,
        "no_of_ratings": 28680,
        "discount_price": 2999.0,
        "actual_price": 7500.0
    },
    {
        "name": "Mamaearth Nourishing Hair Oil for Babies 100ml (0-10 Years) & Gentle Cleansing Shampoo for Babies (200 ml, 0-5 Yrs) & dust...",
        "ratings": 4.3,
        "no_of_ratings": 5272,
        "discount_price": 519.0,
        "actual_price": 697.0
    },
    {
        "name": "Aurelia Women's Rayon Straight Kurta",
        "ratings": 3.7,
        "no_of_ratings": 62,
        "discount_price": 389.0,
        "actual_price": 1299.0
    },
    {
        "name": "Hand Towels, Tea Towel, Set of 4, White/Dark Grey/Patterned 45x60 cm (18x24 ). Ikea.",
        "ratings": 4.3,
        "no_of_ratings": 64,
        "discount_price": 330.0,
        "actual_price": 799.0
    },
    {
        "name": "Frido Orthopedic Heel Pads for Heel Pain Relief, Heel Insole for Extra Cushioning and Comfort, Slim Designed Heel Cushions...",
        "ratings": 3.8,
        "no_of_ratings": 1734,
        "discount_price": 499.0,
        "actual_price": 1099.0
    },
    {
        "name": "FROZIL Analog 5 Different Color Round Dial Watch for Women and Girl Single and Combo Watches for Womens and Girls Set of 2...",
        "ratings": 3.6,
        "no_of_ratings": 18,
        "discount_price": 235.0,
        "actual_price": 599.0
    },
    {
        "name": "RPS FASHION WITH DEVICE OF R Quartz Movement Analogue Display Multicoloured Dial Men's Watch (Green Dial Green Colored Str...",
        "ratings": 3.3,
        "no_of_ratings": 566,
        "discount_price": 125.0,
        "actual_price": 999.0
    },
    {
        "name": "AANIJ® Wash Bottle Polyethylene made Size 1000 ml, Pack of (1)",
        "ratings": 4.5,
        "no_of_ratings": 10,
        "discount_price": 189.0,
        "actual_price": 1199.0
    },
    {
        "name": "MAYAPURI Wooden 3 Round Tulsi Kanthi/Mala for Men and Women",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 210.0,
        "actual_price": 710.0
    },
    {
        "name": "Faber-Castell Triangular Colour Pencils - Pack of 12 (Assorted)",
        "ratings": 4.3,
        "no_of_ratings": 484,
        "discount_price": 98.0,
        "actual_price": 100.0
    },
    {
        "name": "Lee Cooper Polarized Round Women's Sunglasses - (LC9148ENB BLKSMK|49|Grey Color Lens)",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 1799.0,
        "actual_price": 1999.0
    },
    {
        "name": "Tusok Men Women Rayon Shirt Top Combo Twinning Casual Hawaiian Aloha Flower Floral Leaf Party Beach Vacation Quirky Tropic...",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 1299.0,
        "actual_price": 2350.0
    },
    {
        "name": "hardoll Solar Motion Sensor 32 LED Waterproof Automatic Lights for Home Outdoor Garden Security(Pack of 2)",
        "ratings": 3.7,
        "no_of_ratings": 131,
        "discount_price": 1225.5,
        "actual_price": 1700.0
    },
    {
        "name": "kiddeo Boys Track Pants (Pack of 6)",
        "ratings": 3.9,
        "no_of_ratings": 131,
        "discount_price": 549.0,
        "actual_price": 1999.0
    },
    {
        "name": "Giffee Baby Towels / New Born / Kids / Hooded / Soft Cotton / Infants (Green || Orange)",
        "ratings": 4.3,
        "no_of_ratings": 4,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Bridge2shopping Aluminium Lassi Maker Hand Blender, NO.6 (Silver)",
        "ratings": 3.5,
        "no_of_ratings": 24,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "4EVER Women Embroidery Work Designer Potli Bags Best for Gifting on Diwali and Christmas | Bridal Ethnic Potli Bag for Par...",
        "ratings": 3.9,
        "no_of_ratings": 28,
        "discount_price": 284.0,
        "actual_price": 799.0
    },
    {
        "name": "HUL Pureit Marvella G2 UV 4 Stage Table Top/Wall Mountable White & Blue 4 litres Water Purifier (Not Suitable for tanker o...",
        "ratings": 4.4,
        "no_of_ratings": 906,
        "discount_price": 8450.0,
        "actual_price": 10490.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim T-Shirt",
        "ratings": 3.9,
        "no_of_ratings": 5,
        "discount_price": 1039.0,
        "actual_price": 1699.0
    },
    {
        "name": "Woodiva Sheesham Wood Brass Carving/Round Beautiful Carving Design Side Table/Coffee Table/Outdoor Table/Living Room Furni...",
        "ratings": 4.3,
        "no_of_ratings": 17,
        "discount_price": 2137.0,
        "actual_price": 3999.0
    },
    {
        "name": "grey jack Cateye Un-Breakage TR90 Spectacle Frame with 5Pcs Magnetic Polarized Clip On Sunglasses Lenses for Myopic Men Wo...",
        "ratings": 3.5,
        "no_of_ratings": 33,
        "discount_price": 1099.0,
        "actual_price": 1799.0
    },
    {
        "name": "Clovia Women's Satin Solid Knee Length Nightdress (NS0466P16_L_Orange_Large_Orange_L)",
        "ratings": 3.7,
        "no_of_ratings": 100,
        "discount_price": 544.0,
        "actual_price": 1299.0
    },
    {
        "name": "RPR Organic Camphor Powder, 1kg (500g X 2 Jars), White",
        "ratings": 3.9,
        "no_of_ratings": 9,
        "discount_price": 1480.0,
        "actual_price": 2000.0
    },
    {
        "name": "REAL LIFE SOLUTION Quick Connector and Water Filter Pressure Washer Accessory Suitable for Black & Decker, Bosch",
        "ratings": 4.0,
        "no_of_ratings": 215,
        "discount_price": 399.0,
        "actual_price": 899.0
    },
    {
        "name": "Puma Unisex-Adult NRGY Comet Pale Grape White Walking Shoe - 10 UK (19055663)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2738.0,
        "actual_price": 4499.0
    },
    {
        "name": "Jarbazaar [ TRIAL PACK OF 2 PC 100ml Hair Root Applicator Amber square Bottle + Flip Top Cap + Plug for Herbal & Natural B...",
        "ratings": 2.8,
        "no_of_ratings": 5,
        "discount_price": 118.0,
        "actual_price": 180.0
    },
    {
        "name": "Liberty Mens LB109-09 Casual Shoes",
        "ratings": 3.6,
        "no_of_ratings": 19,
        "discount_price": 1829.0,
        "actual_price": 2999.0
    },
    {
        "name": "MARKET 99 Metal Self Draining Tableware Storage Box - Spoon, Knife, Fork, Chopstick, Cutlery Holder Kitchen Organizer Stan...",
        "ratings": 4.8,
        "no_of_ratings": 14,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "Evelyn Analogue White Dial Women's Watch - CC-251",
        "ratings": 2.8,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 1599.0
    },
    {
        "name": "AuraDecor Scented Tealight Candles, Pure Wax 20 Pcs (Lavender)",
        "ratings": 3.4,
        "no_of_ratings": 41,
        "discount_price": 199.0,
        "actual_price": 298.0
    },
    {
        "name": "Zivame Women's Rayon Non Padded Wire Free T-Shirt Bra",
        "ratings": 3.8,
        "no_of_ratings": 155,
        "discount_price": 220.0,
        "actual_price": 445.0
    },
    {
        "name": "Miss Chase Women's Lavender V Neck Full Sleeves Solid Bomber Regular Jacket",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 815.0,
        "actual_price": 2449.0
    },
    {
        "name": "Spigen EZ Fit Tempered Glass Screen Guard for iPhone 12 and iPhone 12 Pro - 2 Pack",
        "ratings": 4.6,
        "no_of_ratings": 1935,
        "discount_price": 1199.0,
        "actual_price": 2899.0
    },
    {
        "name": "Kiaaron Women's Ikat Hand Block Print Jaipuri Cotton Mulmul Saree with Blouse Piece -Grey_Kia502",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 849.0,
        "actual_price": 6999.0
    },
    {
        "name": "Jockey Men's Synthetic Trunk (Pack Of 6) (Assorted_M)",
        "ratings": 3.0,
        "no_of_ratings": 4,
        "discount_price": 1798.0,
        "actual_price": 1854.0
    },
    {
        "name": "Winza Designer Women's Chiffon Brasso Printed Saree with Blouse Piece (PS Brasso Gagan_W)",
        "ratings": 4.1,
        "no_of_ratings": 220,
        "discount_price": 560.0,
        "actual_price": 2499.0
    },
    {
        "name": "Lux Inferno Full Length Men's Premium Thermal Lower/Trouser - Pack of 2 (#Inferno-Lower)",
        "ratings": 4.6,
        "no_of_ratings": 4,
        "discount_price": 800.0,
        "actual_price": 1080.0
    },
    {
        "name": "Das Fab Creation Rayon Printed Knee Length with Round Neck Night Wear Kaftan Dress Loungewear Beachwear for Womens (Red)",
        "ratings": 3.0,
        "no_of_ratings": 3,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "Pramadda Pure Luxury Classic Pastel Green Sling Handbag Purse For Women | Special Birthday Gift Item for Girls | Unique Fe...",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 600.0,
        "actual_price": 1799.0
    },
    {
        "name": "GIZMORE Giz Squad Pro 4109 Speaker 80W Home Entertainment",
        "ratings": 3.6,
        "no_of_ratings": 4,
        "discount_price": 6499.0,
        "actual_price": 7999.0
    },
    {
        "name": "Lola Dola Women's Padded Polyamide Bra Panty Bikini Lingerie Set",
        "ratings": 4.2,
        "no_of_ratings": 8,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Pigeon Feather Mixer Grinder with Touch Panel Control, 3 Jars and 1 Juicer Jar, 1000 Watts. India's First Touch Panel Mixe...",
        "ratings": 2.6,
        "no_of_ratings": 9,
        "discount_price": 4290.0,
        "actual_price": 8995.0
    },
    {
        "name": "Red Tape Men's Walking Shoes",
        "ratings": 3.6,
        "no_of_ratings": 70,
        "discount_price": 1701.0,
        "actual_price": 6299.0
    },
    {
        "name": "Fflirtygo Baby Wear 100% Hosiery Cotton Infants Rompers with Booties/Onesies/Body Suit/Jumpsuit/Sleepsuit Full Sleeve Main...",
        "ratings": 3.8,
        "no_of_ratings": 7,
        "discount_price": 499.0,
        "actual_price": 1498.0
    },
    {
        "name": "Buy That Trendz Women's Cotton Graphic Print Knee Length Short Night Dress (Pack of 2)",
        "ratings": 4.1,
        "no_of_ratings": 99,
        "discount_price": 899.0,
        "actual_price": 2599.0
    },
    {
        "name": "DealFreez Mijia Piston Colorful Edition Earphones Headphone Headset in-Ear with Mic (Silver)",
        "ratings": 4.4,
        "no_of_ratings": 9,
        "discount_price": 549.0,
        "actual_price": 799.0
    },
    {
        "name": "The Wise Ninja Bus Conductor Leather Cash Bag/Petrol Pump Cashier Leather Bag - Handmade Sandal Color with 4 Compartments ...",
        "ratings": 3.4,
        "no_of_ratings": 3,
        "discount_price": 890.0,
        "actual_price": 1600.0
    },
    {
        "name": "On Time Octus Analog Girl's and Women's Watch (Multi Color Dial Multi-Colored Strap)",
        "ratings": 4.2,
        "no_of_ratings": 520,
        "discount_price": 239.0,
        "actual_price": 999.0
    },
    {
        "name": "Meyer Select Nickel Free Stainless Steel Open Milkpan | Tea pot| Milk Pot | Small Milk Pan with triply Base | Chai Pan | M...",
        "ratings": 4.3,
        "no_of_ratings": 213,
        "discount_price": 1817.0,
        "actual_price": 2375.0
    },
    {
        "name": "Todani Jems 9.25 Ratti Blue Sapphire (NEELAM/NILAM Stone) Original Certified Natural Gemstone",
        "ratings": 2.8,
        "no_of_ratings": 3,
        "discount_price": 424.0,
        "actual_price": 1999.0
    },
    {
        "name": "Luxury Fashionable Sneaker Shoes for Men",
        "ratings": 3.2,
        "no_of_ratings": 120,
        "discount_price": 499.0,
        "actual_price": 1299.0
    },
    {
        "name": "Rudhra Eye Wear Reading Power Eyeglasses| Power Spectacles for Men & Women Pack of 1 (Assorted colour: Will be send Black ...",
        "ratings": 3.4,
        "no_of_ratings": 13,
        "discount_price": 189.0,
        "actual_price": 699.0
    },
    {
        "name": "Milk Frother Handheld USB Rechargeable Electric Foam Maker with 2 Stainless whisks, 3 Speeds Mini Milk Foamer Drink Mixer ...",
        "ratings": 4.1,
        "no_of_ratings": 201,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Juflix Binocular Telescope Folding Zoom Lens for Sports, Hunting, Camping for Bird Watching Binocular 16x52 Telescope Mono...",
        "ratings": 3.7,
        "no_of_ratings": 4,
        "discount_price": 1199.0,
        "actual_price": 2499.0
    },
    {
        "name": "INDO ERA Women Viscose Indo Era Liva Kurta Set",
        "ratings": 4.1,
        "no_of_ratings": 37,
        "discount_price": 1149.0,
        "actual_price": 5999.0
    },
    {
        "name": "Peter England Men's Slim Fit Shirt",
        "ratings": 3.1,
        "no_of_ratings": 24,
        "discount_price": 879.0,
        "actual_price": 1599.0
    },
    {
        "name": "OOMPH! Women's Crepe A-Line Maxi Dress - mdfoil",
        "ratings": 3.8,
        "no_of_ratings": 130,
        "discount_price": 639.0,
        "actual_price": 2000.0
    },
    {
        "name": "URSUS PROFESSIONAL Peel Off Lipstick Lip Gloss Waterproof Peel Off Liquid Tint Matte Magic Long Lasting Lipstick - 15 Gm (...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 199.0,
        "actual_price": 499.0
    },
    {
        "name": "Janasya Women's Green Poly Georgette Floral Flared Western Dress",
        "ratings": 3.9,
        "no_of_ratings": 176,
        "discount_price": 859.0,
        "actual_price": 2298.0
    },
    {
        "name": "MyGlamm Presents Beauty Hi-Shine Lipstick, Glossy Finish - Vintage Wine, 4gm",
        "ratings": 3.6,
        "no_of_ratings": 810,
        "discount_price": 522.0,
        "actual_price": 950.0
    },
    {
        "name": "Anushka Womens Cotton Camisoles Slips Pack of 3 (Colors May Vary) s m l XL XXL Sizes",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 350.0,
        "actual_price": 999.0
    },
    {
        "name": "HRB MUSICALS GUITAR BLACK CAPO b4",
        "ratings": 4.5,
        "no_of_ratings": 34,
        "discount_price": 189.0,
        "actual_price": 299.0
    },
    {
        "name": "Nokia 105 Single SIM, Keypad Mobile Phone with Wireless FM Radio | Charcoal",
        "ratings": 3.8,
        "no_of_ratings": 4022,
        "discount_price": 1299.0,
        "actual_price": 1599.0
    },
    {
        "name": "MORE N MORE TRENDZ Women's Kanchipuram Organza Saree With Blouse Piece",
        "ratings": 4.0,
        "no_of_ratings": 116,
        "discount_price": 999.0,
        "actual_price": 3090.0
    },
    {
        "name": "SYN SONS Bluetooth Headset P20 in-Ear Headphones with Mic Hand-Free Feature, Wireless Bluetooth Headset, for All Devices, ...",
        "ratings": 3.5,
        "no_of_ratings": 12,
        "discount_price": 429.0,
        "actual_price": 749.0
    },
    {
        "name": "SIDHARTH GEMS Natural Certified Unheated Untreatet 18.00 Ratti A+ Quality Natural Burma Ruby Manik Gemstone Ring for Wome...",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 1027.0,
        "actual_price": 2199.0
    },
    {
        "name": "BELLIE BELLA Women Ethnic Footwear Punjabi Jutti/Mojari",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 697.0,
        "actual_price": 1299.0
    },
    {
        "name": "Eego Italy Mens Genuine Leather Steel Toe Boots with Anti Skid Sole",
        "ratings": 2.7,
        "no_of_ratings": 14,
        "discount_price": 1294.0,
        "actual_price": 2999.0
    },
    {
        "name": "Fastrack Fundamentals Analog Black Dial Women's Watch-NL68008SL02/NP68008SL02",
        "ratings": 4.2,
        "no_of_ratings": 544,
        "discount_price": 1160.0,
        "actual_price": 1450.0
    },
    {
        "name": "7Eleven Jaguar Design Hud Car Mobile Phone Holder Mount Stand 360 Degree Rotation Adjustable Clip Holder for Dashboard - (...",
        "ratings": 2.5,
        "no_of_ratings": 6,
        "discount_price": 284.05,
        "actual_price": 999.0
    },
    {
        "name": "Rangwell Stainless Steel Toolkit Keychain (Assorted_KeyChain-01)",
        "ratings": 2.9,
        "no_of_ratings": 32,
        "discount_price": 309.0,
        "actual_price": 409.0
    },
    {
        "name": "PERFECTBLUE Sequence(Readymade) Blouse with Cotton Inner(Sequence Blouse)",
        "ratings": 3.4,
        "no_of_ratings": 444,
        "discount_price": 269.0,
        "actual_price": 1999.0
    },
    {
        "name": "Garden Art Artifact Turtle with 7 LED, Garden Decor Statue with Solar Light for Outdoor Garden Ornament for Outside, Yard ...",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 1999.0,
        "actual_price": 3999.0
    },
    {
        "name": "LG 10.5 Kg / 7.0 Kg Inverter Front Load Wi-Fi Washer Dryer (FHD1057STB, Black Steel, In-built Heater, Turbo Wash)",
        "ratings": 4.2,
        "no_of_ratings": 186,
        "discount_price": 65990.0,
        "actual_price": 94990.0
    },
    {
        "name": "BOGESI Artificial PU Leather Men's Wallet (BOG-WA836-BWN_Brown)",
        "ratings": 3.8,
        "no_of_ratings": 206,
        "discount_price": 449.0,
        "actual_price": 1299.0
    },
    {
        "name": "Radium Tape Night Glow in Dark Tape 12mm (0.5 Inch) Width. X 05 Meters Length. Luminous Tape Self-Adhesive Tape Night Visi...",
        "ratings": 3.1,
        "no_of_ratings": 68,
        "discount_price": 169.0,
        "actual_price": 349.0
    },
    {
        "name": "Wrangler Men's Regular Fit Polo Tshirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 638.0,
        "actual_price": 1599.0
    },
    {
        "name": "RANGOLI ART Womens And Girls Fox Georgette Fabric With Degital Print And 3 Layer Ruffel Work Lehengha Saree For Speciel Ev...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2179.0,
        "actual_price": 3699.0
    },
    {
        "name": "YAGVIZ Car Dashboard Accessories Adorable Flower Pot with Car Perfume and anti slip pad Car Dashboard Idols and Showpiece ...",
        "ratings": 3.7,
        "no_of_ratings": 32,
        "discount_price": 399.0,
        "actual_price": 799.0
    },
    {
        "name": "CP PLUS 2MP Full HD IR Network Cube Camera",
        "ratings": 2.7,
        "no_of_ratings": 3,
        "discount_price": 3771.42,
        "actual_price": 7500.0
    },
    {
        "name": "The House of tara Brown Jute Tassel Embellished Crossbody Sling Side Purse Bag for Women (HTCB 048_Brown)",
        "ratings": 3.9,
        "no_of_ratings": 107,
        "discount_price": 825.0,
        "actual_price": 1199.0
    },
    {
        "name": "Ellozia 3.5mm Male Plug to 3RCA Female Adapter Cable Video Adapter for AV,Audio, Video, LCD TV,HDTV (Multi)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 399.0
    },
    {
        "name": "YONEX Graphite Badminton Racquet Astrox 99 Game with Full Cover (White Tiger)",
        "ratings": 3.1,
        "no_of_ratings": 6,
        "discount_price": 5780.0,
        "actual_price": 8390.0
    },
    {
        "name": "GoSriKi Women's Cotton Blend Floral Printed Straight Kurta with Palazzos & Dupatta (PANAL-GS)",
        "ratings": 3.5,
        "no_of_ratings": 3,
        "discount_price": 699.0,
        "actual_price": 2599.0
    },
    {
        "name": "Ankle Length Women Trouser and Formal Pant",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "FUNDAY FASHION Women's Regular Fit Denim Joggers",
        "ratings": 3.3,
        "no_of_ratings": 645,
        "discount_price": 471.0,
        "actual_price": 1299.0
    },
    {
        "name": "DigiSmart Kitchen Mate 750 Watt Mixer Grinder (Gray and Black) | 4 Jars | | Comes With 2 Year Warranty |",
        "ratings": 3.9,
        "no_of_ratings": 122,
        "discount_price": 1599.0,
        "actual_price": 4290.0
    },
    {
        "name": "Pigeon by Stovekraft Elite Sine 2 L Tri-Ply Body Outer Lid Pressure Cooker Induction and Gas Stove Compatible That Distrib...",
        "ratings": 3.6,
        "no_of_ratings": 594,
        "discount_price": 1097.0,
        "actual_price": 2395.0
    },
    {
        "name": "Caseria Men's Round Neck Cotton Half Sleeved T-Shirt with Printed Graphics - Team Jesus",
        "ratings": 4.6,
        "no_of_ratings": 4,
        "discount_price": 439.0,
        "actual_price": 999.0
    },
    {
        "name": "Rupa Women Hipster Panties",
        "ratings": 4.3,
        "no_of_ratings": 9,
        "discount_price": 590.0,
        "actual_price": 720.0
    },
    {
        "name": "Sanjog Pearl Tiara/Crown And Matching Hand Tiara/Puff Wrap for Wedding/Party",
        "ratings": 4.2,
        "no_of_ratings": 82,
        "discount_price": 539.0,
        "actual_price": 1099.0
    },
    {
        "name": "Poomex Men's Cotton Inner Elastic IE Brief (Pack of 3) Colour May Vary",
        "ratings": 4.3,
        "no_of_ratings": 15,
        "discount_price": 499.0,
        "actual_price": 599.0
    },
    {
        "name": "ABOF Women Shirt",
        "ratings": 4.3,
        "no_of_ratings": 4,
        "discount_price": 230.0,
        "actual_price": 1049.0
    },
    {
        "name": "Yellow Chimes Rings for Women and Girls Silver Ring | Adjustable Crystal Rings Rosegold Silver Plated Finger Ring for Wome...",
        "ratings": 3.9,
        "no_of_ratings": 38,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "LADY HAWK Eye Shaped Costume Prop Locket and Superhero Character Accessory Metal Pendant with Length Adjustable Chain for ...",
        "ratings": 3.9,
        "no_of_ratings": 3,
        "discount_price": 569.0,
        "actual_price": 1450.0
    },
    {
        "name": "Feroc Men's Football Shoes",
        "ratings": 3.7,
        "no_of_ratings": 197,
        "discount_price": 649.0,
        "actual_price": 1399.0
    },
    {
        "name": "WOMEN BLACK SLING HANDBAG",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 350.0,
        "actual_price": 999.0
    },
    {
        "name": "Mee Mee 210ml 2 in 1 Spout and Straw Sipper Cup (Blue) & Mee Mee 210ml 2 in 1 Spout and Straw Sipper Cup (Green)",
        "ratings": 3.6,
        "no_of_ratings": 12,
        "discount_price": 479.0,
        "actual_price": 678.0
    },
    {
        "name": "Walking Shoes for Men",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 899.0,
        "actual_price": 1699.0
    },
    {
        "name": "one8 by Virat Kohli Men's Boxers (Pack of 3)",
        "ratings": 3.6,
        "no_of_ratings": 13,
        "discount_price": 852.0,
        "actual_price": 855.0
    },
    {
        "name": "In-Ear TYPE-C PORT Headphone For vivo iQOO Neo6 , vivo iQOO Neo 6 In- Ear Headphone | Earphones | Headphone| Handsfree | H...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 440.0,
        "actual_price": 799.0
    },
    {
        "name": "SURATDIAMOND Single Line Real Freshwater Pearl Necklace for Women (SN123)",
        "ratings": 3.7,
        "no_of_ratings": 68,
        "discount_price": 679.0,
        "actual_price": 4960.0
    },
    {
        "name": "ASIAN Men's Vocal-25 Sports Running Shoes for Men I Casual Sports Shoes for Boys with PVC Sole for Extra Jump I Sports Run...",
        "ratings": 3.5,
        "no_of_ratings": 71,
        "discount_price": 479.0,
        "actual_price": 999.0
    },
    {
        "name": "JetFire Practice Wicket Keeping Gloves and Inner Gloves Combo (Men, Green)",
        "ratings": 3.3,
        "no_of_ratings": 2,
        "discount_price": 599.0,
        "actual_price": 2599.0
    },
    {
        "name": "GODOX P90H High-Temperature Resistant Version 35 Inch/ 90cm 16 Rods Portable Umbrella Brolly Reflector for Studio Photo Fl...",
        "ratings": 4.5,
        "no_of_ratings": 30,
        "discount_price": 6325.0,
        "actual_price": 7300.0
    },
    {
        "name": "Ashish Professional Sales Professional Measuring Tape/Ruler - 30 Meter",
        "ratings": 3.2,
        "no_of_ratings": 5,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "FIMALIA 36 & 72 Pc Double Sided Tape for Clothes Bra Stickers One-off Body Skin Tape,Invisible Clear Bra Clothing Tape Str...",
        "ratings": 3.7,
        "no_of_ratings": 65,
        "discount_price": 169.0,
        "actual_price": 500.0
    },
    {
        "name": "Puma Mens Concave Pro Running Shoes",
        "ratings": 3.7,
        "no_of_ratings": 95,
        "discount_price": 2208.0,
        "actual_price": 4299.0
    },
    {
        "name": "DEVOTION Solid 17 Cms Cosmetic Pouch (M_TB01_multi)",
        "ratings": 3.9,
        "no_of_ratings": 85,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "ASIAN Eco-Friendly Jute Bag-Reusable Tiffin Shopping Grocery Multipurpose Hand Bag with Zip & Handle for Men and Women (Pa...",
        "ratings": 3.7,
        "no_of_ratings": 130,
        "discount_price": 204.0,
        "actual_price": 499.0
    },
    {
        "name": "EzLife - TSA Approved 3 Digit Flexible Cable Luggage Locks, Re-settable Keyless Lock for Gym Locker, Backpack (Multicolor)...",
        "ratings": 3.9,
        "no_of_ratings": 11,
        "discount_price": 749.0,
        "actual_price": 1199.0
    },
    {
        "name": "Fairytale Black Medium Soft Cotton Elastic Hair Rubber Bands For Girls/Women's/Kids. (Pack of 12)",
        "ratings": 4.3,
        "no_of_ratings": 4,
        "discount_price": 139.0,
        "actual_price": 249.0
    },
    {
        "name": "PK MART Women's Chiffon multi leheriya Saree With Blouse Piece",
        "ratings": 2.8,
        "no_of_ratings": 10,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Buy That Trendz Printed Cotton Short Night Dress for Women 2 Pcs Combo Love Black Be Kind Tomato Red",
        "ratings": 4.3,
        "no_of_ratings": 9,
        "discount_price": 899.0,
        "actual_price": 2599.0
    },
    {
        "name": "Action Pro™ Helmet 3M Chin Mount Set Compatible with All Smartphones GoPro Hero 11 10 9 8 7 6 5 4 SJCAM DJI Osmo and All A...",
        "ratings": 3.8,
        "no_of_ratings": 4690,
        "discount_price": 499.0,
        "actual_price": 799.0
    },
    {
        "name": "FURO by Redchief Men's Red Sneaker Sports Shoes",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 1389.75,
        "actual_price": 1745.0
    },
    {
        "name": "GYMBROTHERS Men's Gym Vest Stringer for Workout, Bodybuilding, Fitness & Training Hustle Hard Deep Cut Tank top",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 448.0,
        "actual_price": 999.0
    },
    {
        "name": "FUSIONIC women's Georgette Semi-stitched Lehenga Choli (TF-51_Yellow_Free Size)",
        "ratings": 3.9,
        "no_of_ratings": 3,
        "discount_price": 2977.0,
        "actual_price": 7443.0
    },
    {
        "name": "Customized Vegan Mens Wallet + Pen + Metal Keychain (3 pcs) (Brown)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 1199.0
    },
    {
        "name": "LEALDEALZ Men's Cotton Boxer Pack of 3",
        "ratings": 3.6,
        "no_of_ratings": 1152,
        "discount_price": 629.0,
        "actual_price": 1197.0
    },
    {
        "name": "U.S. POLO ASSN. Men Jeans",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 2089.0,
        "actual_price": 3799.0
    },
    {
        "name": "Robustrion Smart Trifold Hard Back Flip Stand Case for Samsung Tab A 10.1 Back Cover T510/T515 10.1 inch 2019 - Black",
        "ratings": 4.3,
        "no_of_ratings": 7062,
        "discount_price": 549.0,
        "actual_price": 1999.0
    },
    {
        "name": "Chromozome Cotton Regular Fit Mens Brief WS 8 (Pack of 2) M V81:Navy-Aquatonic",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 302.0,
        "actual_price": 378.0
    },
    {
        "name": "ANM Remote Control for led Smart tv Compatible with Motorola led LCD Please Match with Your Old Remote Before Placing Orde...",
        "ratings": 3.6,
        "no_of_ratings": 62,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "ESPERTO READERS RAINY READING GLASSES FOR MEN & WOMEN POWER +1.00 to +3.00",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 745.0,
        "actual_price": 1395.0
    },
    {
        "name": "Centrino Mens Formal Shoes",
        "ratings": 3.7,
        "no_of_ratings": 69,
        "discount_price": 657.13,
        "actual_price": 2499.0
    },
    {
        "name": "Sunmeet 1000 watts Heavy Duty Mixer Grinder with 4 Jars Color BlackSilver (Chutney Jar, Medium Jar, Large Jar and Juicer J...",
        "ratings": 3.7,
        "no_of_ratings": 4,
        "discount_price": 2749.0,
        "actual_price": 4599.0
    },
    {
        "name": "Mahi Jaguar Shaped Brooch Lapel Pin for Men and Boys (PABP1101076PR)",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 214.0,
        "actual_price": 1199.0
    },
    {
        "name": "Kalt Men's Full Sleeves Polo Neck Cotton Blend T-Shirt(Orange::White::Black)",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 649.0,
        "actual_price": 1100.0
    },
    {
        "name": "chenyang Hd-066- New Cy Right Angled 90D Micro Hdmi To Hdmi Male Cable Right Angled - 1.5m",
        "ratings": 4.1,
        "no_of_ratings": 47,
        "discount_price": 800.0,
        "actual_price": 2450.0
    },
    {
        "name": "YouBella Jewellery Bracelets for Women Stylish Couple Love Bracelet for Girls/Women/Boys/Men",
        "ratings": 4.2,
        "no_of_ratings": 760,
        "discount_price": 195.0,
        "actual_price": 999.0
    },
    {
        "name": "Zaveri Pearls Rose Gold Cubic Zirconia & Pearl Contemporary Brass Stud Earring For Women-ZPFK10094",
        "ratings": 3.8,
        "no_of_ratings": 11,
        "discount_price": 315.0,
        "actual_price": 2496.0
    },
    {
        "name": "Ghelonadi Women’s Cotton Clip-on Mock Lace Camisole Cami Secret Underwear Bra Insert Breast Cover Free Size Black White an...",
        "ratings": 3.0,
        "no_of_ratings": 10,
        "discount_price": 288.0,
        "actual_price": 499.0
    },
    {
        "name": "MaFs Handicraft Beautiful Embroidery Bling Box Clutch Bag Purse For Bridal, Casual, Party, Wedding",
        "ratings": 4.4,
        "no_of_ratings": 6,
        "discount_price": 599.0,
        "actual_price": 2499.0
    },
    {
        "name": "AshleyandAlvis Anti Bacterial, Bamboo Micromodal, Premium Panty, Women Boysleg Brief, No Itching, 3X Moisture Wicking Dail...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 855.0,
        "actual_price": 1465.0
    },
    {
        "name": "Blue Tree 10 Ltrs ( Cms)Backpack(Bluetree_Backpacks_034_Multi Colour)",
        "ratings": 4.0,
        "no_of_ratings": 1058,
        "discount_price": 288.0,
        "actual_price": 599.0
    },
    {
        "name": "Yellow Chimes Earrings for Men and Boys | Fashion Black Studs | High Polished Dumbbells Shaped Stud Earring | Stainless St...",
        "ratings": 4.0,
        "no_of_ratings": 319,
        "discount_price": 219.0,
        "actual_price": 876.0
    },
    {
        "name": "VredeVogel Silk Embroidery Straight Kurta Pant and Organza Dupatta Set for Women",
        "ratings": 2.9,
        "no_of_ratings": 15,
        "discount_price": 656.0,
        "actual_price": 1999.0
    },
    {
        "name": "EL PASO Men's Faux Leather Casual Slip On Loafer Shoes",
        "ratings": 3.5,
        "no_of_ratings": 60,
        "discount_price": 999.0,
        "actual_price": 2529.0
    },
    {
        "name": "Havells Sprint LED 400mm Pedestal Fan (Blue)",
        "ratings": 3.7,
        "no_of_ratings": 567,
        "discount_price": 2933.0,
        "actual_price": 4765.0
    },
    {
        "name": "GoSriKi Women's Rayon Blend Straight Printed Kurta with Pant & Dupatta (KURSI-GS)",
        "ratings": 3.8,
        "no_of_ratings": 236,
        "discount_price": 679.0,
        "actual_price": 2599.0
    },
    {
        "name": "DUPATTA BAZAAR Women's White Banarasi Silk Dupatta with Silver Border",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 485.0,
        "actual_price": 1199.0
    },
    {
        "name": "Nasher Miles Istanbul Hard-Sided ABS and PC Cabin Luggage Teal and Dark Blue 24 inch |65cm Trolley Bag",
        "ratings": 4.1,
        "no_of_ratings": 209,
        "discount_price": 4559.0,
        "actual_price": 16995.0
    },
    {
        "name": "Q&Q Analog Red Dial Women's Watch-S345-002NY",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1236.0,
        "actual_price": 1395.0
    },
    {
        "name": "IRIS Lightweight Portable Folding Chair, Outdoor Indoor Compact Ultra Foldable Camp Beach Picnic Fishing Backpacking 1 Cam...",
        "ratings": 3.5,
        "no_of_ratings": 74,
        "discount_price": 699.0,
        "actual_price": 1500.0
    },
    {
        "name": "WORLD WEAR FOOTWEAR Men's Black Casual Sneakers Shoes",
        "ratings": 3.4,
        "no_of_ratings": 16,
        "discount_price": 378.0,
        "actual_price": 499.0
    },
    {
        "name": "Exotica Casual Analog Girl's Watch (White Dial, Multicolored Strap) (Pack of 2)",
        "ratings": 3.7,
        "no_of_ratings": 118,
        "discount_price": 222.0,
        "actual_price": 599.0
    },
    {
        "name": "Duckback Air Floral Travel Pillow Pack of 1 (Yellow)",
        "ratings": 3.9,
        "no_of_ratings": 42,
        "discount_price": 460.0,
        "actual_price": 999.0
    },
    {
        "name": "atomberg Renesa 600mm BLDC motor Energy Saving Ceiling Fan with Remote Control (Brown and Black)",
        "ratings": 4.3,
        "no_of_ratings": 1931,
        "discount_price": 3470.0,
        "actual_price": 4570.0
    },
    {
        "name": "Troo Air Purifier Filter Set (True HEPA Filter FY-3433 + Activated Carbon Filter FY-3432) Compatible with Philips Air Puri...",
        "ratings": 3.5,
        "no_of_ratings": 5,
        "discount_price": 2499.0,
        "actual_price": 4999.0
    },
    {
        "name": "Italic Softage Women’s/Girl’s Everyday Padded Bra",
        "ratings": 3.0,
        "no_of_ratings": 7,
        "discount_price": 247.0,
        "actual_price": 399.0
    },
    {
        "name": "Puma Mens Softride Enzo Nxt Walking Shoe",
        "ratings": 4.4,
        "no_of_ratings": 880,
        "discount_price": 4674.0,
        "actual_price": 5499.0
    },
    {
        "name": "Bhakti Nandan Creation Women Ethnic Wear Cotton Silk Un-Stitched Dress Material (Salwar Suit)",
        "ratings": 3.7,
        "no_of_ratings": 16,
        "discount_price": 469.0,
        "actual_price": 1999.0
    },
    {
        "name": "Clarks C Mocc Boat2 Tan Leather",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 2749.0,
        "actual_price": 4999.0
    },
    {
        "name": "Fastrack girls Sling Bag",
        "ratings": 4.0,
        "no_of_ratings": 14,
        "discount_price": 990.0,
        "actual_price": 2476.0
    },
    {
        "name": "Soul & Scents 120 ml Lavender Reed Diffuser Set | Free 6 Fiber Reed Sticks |Toxin Free & Stress Relief | Fine-Living Natur...",
        "ratings": 3.9,
        "no_of_ratings": 1027,
        "discount_price": 662.0,
        "actual_price": 699.0
    },
    {
        "name": "Clarks Women's Wedge Sandal",
        "ratings": 4.2,
        "no_of_ratings": 10,
        "discount_price": 2749.0,
        "actual_price": 4999.0
    },
    {
        "name": "Yashika Women's Linen Blend With Zari Border Saree With Blouse Piece",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "iBELL SEK105BL Electric Kettle 500 ml with Removable Lid, 950 Watt, Auto Cut off Function, Stainless Steel with Insulatio...",
        "ratings": 4.2,
        "no_of_ratings": 847,
        "discount_price": 953.0,
        "actual_price": 1590.0
    },
    {
        "name": "Kuber Industries Men's & Women's Cotton Hand Summer Gloves for Protection from Sun Burn/Heat/Pollution (Pack Of-1 Pairs, B...",
        "ratings": 3.4,
        "no_of_ratings": 423,
        "discount_price": 199.0,
        "actual_price": 342.0
    },
    {
        "name": "AQUA D PURE Copper RO Water Purifier with UV, UF and TDS Controller | 12L | Best For Home and Office",
        "ratings": 4.2,
        "no_of_ratings": 683,
        "discount_price": 4848.0,
        "actual_price": 5299.0
    },
    {
        "name": "Konex Bloomun Synthetic Grip Wrap Polyurethane Anti-slip Badminton/Tennis/Squash Racket Handle over Grips (Assorted Colou...",
        "ratings": 3.5,
        "no_of_ratings": 30,
        "discount_price": 235.0,
        "actual_price": 299.0
    },
    {
        "name": "Zeeza's 100% Cotton Casual Pant for Women's | Ankle Length Regular fit Cotton Trouser | Straight Fit Pants for Formal, Off...",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 449.0,
        "actual_price": 899.0
    },
    {
        "name": "BATA Mens Nestor Black Sneaker - 9 UK (8546730)",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 2399.0,
        "actual_price": 2999.0
    },
    {
        "name": "Trajectory Premium Vegan Leather 15.6 Inch Laptop Messenger Office Bag with 10 years warranty and dual compartment with ex...",
        "ratings": 3.9,
        "no_of_ratings": 642,
        "discount_price": 1399.0,
        "actual_price": 2500.0
    },
    {
        "name": "7SEVEN™ Compatible for Sony smart OLED 4K tv remote control HRM1796 H42106070467 Sony Original replacement remote for rmf-...",
        "ratings": 3.9,
        "no_of_ratings": 88,
        "discount_price": 499.0,
        "actual_price": 899.0
    },
    {
        "name": "ZAVERI PEARLS Pink & Green South Indian Style Temple Necklace Earring & Ring Set For Women-ZPFK10800",
        "ratings": 2.8,
        "no_of_ratings": 5,
        "discount_price": 343.0,
        "actual_price": 2950.0
    },
    {
        "name": "Hitage HB-19 Hands Free in-Ear Wired Earphones with Mic (Black)",
        "ratings": 4.3,
        "no_of_ratings": 2,
        "discount_price": 249.0,
        "actual_price": 299.0
    },
    {
        "name": "Hunky Dory 200ml Empty Clear Plastic Bottles Refillable Travel Size Cosmetic Containers Leak Proof Squeeze Bottles with Wh...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 149.0,
        "actual_price": 199.0
    },
    {
        "name": "IONIX Imported Weight Machine for Kitchen & Weight Machine for Luggage Combo, Weight Scale Digital for Kitchen",
        "ratings": 3.8,
        "no_of_ratings": 44,
        "discount_price": 379.0,
        "actual_price": 599.0
    },
    {
        "name": "Bizpressions Food Snack Bag Pouch Clip Heavy Duty Multipurpose Sealer for Home an Kitchen, Airtight Vacuum Seal Clips Plas...",
        "ratings": 4.4,
        "no_of_ratings": 626,
        "discount_price": 239.0,
        "actual_price": 299.0
    },
    {
        "name": "0-DEGREE Jeans Pant Stretch Denim for Men Denim Very Dark Blue 32 Inch Waist",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 849.0,
        "actual_price": 2499.0
    },
    {
        "name": "Copper Sulphate Powder | Neela Thota CuSO4 4500GM (5KG)",
        "ratings": 4.2,
        "no_of_ratings": 3,
        "discount_price": 2999.0,
        "actual_price": 3499.0
    },
    {
        "name": "INDUS VALLEY Bio Organic 100% Natural Herbal Henna Powder,100g",
        "ratings": 3.9,
        "no_of_ratings": 2441,
        "discount_price": 139.0,
        "actual_price": 249.0
    },
    {
        "name": "CEDO 25W Dual Port (USB A + USB C) 25W PD + 18W QC Quick Charge Wall Charger Travel Adapter for Samsung M33,M53,F23, Flip...",
        "ratings": 3.9,
        "no_of_ratings": 316,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "Glus Women Cotton High Waist Broad Waist Band Full Coverage Hipster Panties Everyday Wearing Cotton Panties for Women, Com...",
        "ratings": 3.1,
        "no_of_ratings": 111,
        "discount_price": 699.0,
        "actual_price": 1499.0
    },
    {
        "name": "Generic 10Pcs Golf Club Iron Putter Head Cover Set Nylon Protection Case - Black",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 945.0,
        "actual_price": 990.0
    },
    {
        "name": "JNKC Professional 3110 Tripod Stand for Mobile & DSLR Cameras Clip Holder Fully Flexible Mount Cum Portable Bluetooth Remo...",
        "ratings": 5.0,
        "no_of_ratings": 7,
        "discount_price": 479.0,
        "actual_price": 999.0
    },
    {
        "name": "FURO Mens R1014 794 Running Shoes",
        "ratings": 3.6,
        "no_of_ratings": 53,
        "discount_price": 1099.0,
        "actual_price": 2540.0
    },
    {
        "name": "FIMALIA Women's Seamless Hipster Ice Silk Panty Multicolor Pack of 1,2,3",
        "ratings": 4.0,
        "no_of_ratings": 40,
        "discount_price": 549.0,
        "actual_price": 1000.0
    },
    {
        "name": "Voltonix Bathroom Mat,Door mat Door Mat Quick Drying Water Soak Bathroom Mats Anti Slip Big Size Water Absorbing Floor Was...",
        "ratings": 4.7,
        "no_of_ratings": 98,
        "discount_price": 299.0,
        "actual_price": 2099.0
    },
    {
        "name": "SL FASHION Funky Printed Shirt for Men Half Sleeves",
        "ratings": 3.5,
        "no_of_ratings": 10,
        "discount_price": 499.0,
        "actual_price": 2999.0
    },
    {
        "name": "MONT CONNETT Women Woolen Double Collar Daffodil Fabric Cardigan Winter Wear Pure Wool Cardigan for Women Free Size Long C...",
        "ratings": 3.5,
        "no_of_ratings": 30,
        "discount_price": 649.0,
        "actual_price": 3499.0
    },
    {
        "name": "SriSaras Women's Loose Fit Palazzo",
        "ratings": 3.7,
        "no_of_ratings": 189,
        "discount_price": 367.0,
        "actual_price": 799.0
    },
    {
        "name": "3/4 Sleeves Stretchable Blouses for Women Nonpadded (L to 4XL)",
        "ratings": 3.1,
        "no_of_ratings": 4,
        "discount_price": 385.0,
        "actual_price": 999.0
    },
    {
        "name": "Klepe Men Chunky/Platform Sneakers",
        "ratings": 3.1,
        "no_of_ratings": 80,
        "discount_price": 599.0,
        "actual_price": 2999.0
    },
    {
        "name": "Yellow Chimes Palm Cuff for Women Latest Fashion Vogue Crystal Hand Cuff Palm Silver-Plated Bracelet For Women and Girls",
        "ratings": 4.3,
        "no_of_ratings": 5,
        "discount_price": 249.0,
        "actual_price": 675.0
    },
    {
        "name": "Deremz Grey Clogs for Men's",
        "ratings": 3.0,
        "no_of_ratings": 6,
        "discount_price": 449.0,
        "actual_price": 600.0
    },
    {
        "name": "WolkomHome Car OE Audio FM/AM Roof Antenna for Maruti Suzuki Alto",
        "ratings": 3.4,
        "no_of_ratings": 20,
        "discount_price": 549.0,
        "actual_price": 999.0
    },
    {
        "name": "ACTIVA 1200MM HIGH Speed 390 RPM BEE Approved 5 Star Rated Star Deco Anti DUST Coating Ceiling Fan Smoke Grey-2 Year Warra...",
        "ratings": 3.2,
        "no_of_ratings": 33,
        "discount_price": 2419.0,
        "actual_price": 4980.0
    },
    {
        "name": "makerV Screwless Speaker Stand, Adhesive Wifi Router Stand, Stick On Display Shelf, Universal Wall Mount Adhesive Floating...",
        "ratings": 3.2,
        "no_of_ratings": 6,
        "discount_price": 599.0,
        "actual_price": 949.0
    },
    {
        "name": "Samsung 125 cm (50 inches) 4K Ultra HD Smart QLED TV QA50QN90AAKLXL (Black)",
        "ratings": 4.2,
        "no_of_ratings": 38,
        "discount_price": 84890.0,
        "actual_price": 119900.0
    },
    {
        "name": "SAMTROH Multi Colour Formal Wallet for Men's",
        "ratings": 4.4,
        "no_of_ratings": 35,
        "discount_price": 219.0,
        "actual_price": 999.0
    },
    {
        "name": "CHHAVNI Women Printed Gown Kurta Rayon Printed Maxi Long Gown Blue Dress.",
        "ratings": 3.9,
        "no_of_ratings": 10,
        "discount_price": 469.0,
        "actual_price": 1199.0
    },
    {
        "name": "Fastrack All Nighters Analog White Dial Women's Watch-6186KM02 / 6186KM02",
        "ratings": 4.3,
        "no_of_ratings": 57,
        "discount_price": 3528.0,
        "actual_price": 4695.0
    },
    {
        "name": "K&F Concept HD 12X50 Monocular Telescope for Smartphone, High Power Monoculars for Adults, BAK4 Prism IP68 Waterproof Comp...",
        "ratings": 3.9,
        "no_of_ratings": 12,
        "discount_price": 4490.0,
        "actual_price": 8990.0
    },
    {
        "name": "HIPPON Women's Padded Sports Bra (Pack of 3)",
        "ratings": 3.6,
        "no_of_ratings": 16,
        "discount_price": 175.0,
        "actual_price": 399.0
    },
    {
        "name": "I Define You Women's Combo of Handbag and Sling bag",
        "ratings": 3.5,
        "no_of_ratings": 19,
        "discount_price": 1179.0,
        "actual_price": 5999.0
    },
    {
        "name": "AmazonBasics 3.5mm to 2-Male RCA Adapter cable - 25 feet",
        "ratings": 4.4,
        "no_of_ratings": 71432,
        "discount_price": 849.0,
        "actual_price": 1395.0
    },
    {
        "name": "TOPLOT Women's Top",
        "ratings": 3.8,
        "no_of_ratings": 19,
        "discount_price": 299.0,
        "actual_price": 1999.0
    },
    {
        "name": "MyViradi Luggage Wheels Only for Replacement and Repair Travel Trolley Bag VIP, Safari, Skybag, Amrican Tourister Suitcase...",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 490.0,
        "actual_price": 1299.0
    },
    {
        "name": "Kirti Sales GEMS 5.25 Ratti / 4.42 Carat Neelam Stone Cylone Mined Certified Natural Blue Sapphire Gemstone",
        "ratings": 3.8,
        "no_of_ratings": 3,
        "discount_price": 2479.0,
        "actual_price": 15999.0
    },
    {
        "name": "SJ Shubham Jewellers Pure 925 Sterling Silver Rakhi for Brother With Cotton Kalawa thread For Men, Women, Boys and Girls s...",
        "ratings": 4.0,
        "no_of_ratings": 114,
        "discount_price": 1099.0,
        "actual_price": 1999.0
    },
    {
        "name": "ZUVINO Women's Maxi Maternity Dress",
        "ratings": 4.0,
        "no_of_ratings": 1086,
        "discount_price": 799.0,
        "actual_price": 2999.0
    },
    {
        "name": "Mochi Women Synthetic Sandals (34-9391)",
        "ratings": 3.9,
        "no_of_ratings": 21,
        "discount_price": 1934.0,
        "actual_price": 1990.0
    },
    {
        "name": "Esspy Who Understand Excellence® DEEP Heavy Quality Iron(CI Casting) Bid Puri Maker,Puri Press,Kitchen Press not a chapati...",
        "ratings": 3.3,
        "no_of_ratings": 10,
        "discount_price": 799.0,
        "actual_price": 899.0
    },
    {
        "name": "LOTIK Women's Cotton Polka Dots Knee Length Nightdress",
        "ratings": 4.5,
        "no_of_ratings": 5,
        "discount_price": 649.0,
        "actual_price": 1700.0
    },
    {
        "name": "Wishing Clouds Single Seater Jhula for Kids with Cotton Filling and Leg Lock Mechanism (Jazz Printed, Pink)",
        "ratings": 3.8,
        "no_of_ratings": 125,
        "discount_price": 999.0,
        "actual_price": 2000.0
    },
    {
        "name": "DN Enterprises Cross Body Chain Sling Bag for Women (Black)",
        "ratings": 4.7,
        "no_of_ratings": 6,
        "discount_price": 398.0,
        "actual_price": 999.0
    },
    {
        "name": "Aurion Best Premium Pro Genuine Leather Weight Lifting Belt (Large, Black, Pack of 1) for Men and Women | Body Fitness Gym...",
        "ratings": 4.2,
        "no_of_ratings": 88,
        "discount_price": 799.0,
        "actual_price": 899.0
    },
    {
        "name": "Offbeat® Bluetooth 5.1 + 2.4 Ghz Wireless Gaming 7D Buttons Mouse, 3 DPI Modes 1600:2400:3200 mice for ipad, Mac Book, Tab...",
        "ratings": 4.2,
        "no_of_ratings": 175,
        "discount_price": 1290.0,
        "actual_price": 1990.0
    },
    {
        "name": "Ink India Company Men's Casual Full Sleeves Checkered Regular Fit Cotton Shirt",
        "ratings": 2.9,
        "no_of_ratings": 4,
        "discount_price": 799.0,
        "actual_price": 2199.0
    },
    {
        "name": "First Choice Women's Rayon Ethnic Wear Lace Dhoti",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 599.0,
        "actual_price": 1199.0
    },
    {
        "name": "jainx Analog Unisex Watch (Black Dial Silver Colored Strap)",
        "ratings": 3.8,
        "no_of_ratings": 268,
        "discount_price": 566.0,
        "actual_price": 2499.0
    },
    {
        "name": "NODENS Compression Men's Shorts Tights (Nylon) Skins for Gym, Running, Cycling, Swimming, Basketball, Cricket, Yoga, Footb...",
        "ratings": 3.9,
        "no_of_ratings": 291,
        "discount_price": 399.0,
        "actual_price": 700.0
    },
    {
        "name": "OneOdio Wired Headphones - Over Ear Headphones with Noise Isolation Dual Jack Professional Studio Monitor & Mixing Recordi...",
        "ratings": 4.4,
        "no_of_ratings": 2279,
        "discount_price": 8728.0,
        "actual_price": 11728.0
    },
    {
        "name": "Gadget Wagon LED LCD TV Glass Safety Guard Protection (32\" / 81 cm, Max 75.5 x 46 cm, 2 mm Thickness, Transparent)",
        "ratings": 4.0,
        "no_of_ratings": 131,
        "discount_price": 2599.0,
        "actual_price": 3999.0
    },
    {
        "name": "Kanchan World Women's Long Casual T-Shirt Wish Print_A15 Cream, XL",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "DNE Handbags For Girls and Woman",
        "ratings": 4.2,
        "no_of_ratings": 4,
        "discount_price": 279.0,
        "actual_price": 1299.0
    },
    {
        "name": "Campus Men's Camp Casper Running Shoes",
        "ratings": 4.0,
        "no_of_ratings": 4,
        "discount_price": 799.0,
        "actual_price": 999.0
    },
    {
        "name": "BRUTON Shoes for Trendy Shoes | Casual Shoes | Sports Shoes | Running Shoes | Exclusive Shoes for Men",
        "ratings": 2.5,
        "no_of_ratings": 2,
        "discount_price": 349.0,
        "actual_price": 1299.0
    },
    {
        "name": "GRECIILOOKS Women Palazzo",
        "ratings": 3.6,
        "no_of_ratings": 7,
        "discount_price": 298.0,
        "actual_price": 2299.0
    },
    {
        "name": "SG Calceus Men Running Shoes",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 990.0,
        "actual_price": 1949.0
    },
    {
        "name": "ASTROGHAR Natural Chintamani Saffordite Crystal pendant For Men And Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 749.0,
        "actual_price": 900.0
    },
    {
        "name": "Vrct 3 Fold Printed Ladies Office Umbrella, Fits in Hand Bag, Color & Design May Vary (Black)",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 320.0,
        "actual_price": 799.0
    },
    {
        "name": "Crazefashions Casual Round Neck Printed Crop Top for Women, Girls Combo Pack of 3",
        "ratings": 3.0,
        "no_of_ratings": 42,
        "discount_price": 549.0,
        "actual_price": 699.0
    },
    {
        "name": "Lymio Dresses for Women Multi Color Women Dress (522-540)",
        "ratings": 3.8,
        "no_of_ratings": 614,
        "discount_price": 549.0,
        "actual_price": 3999.0
    },
    {
        "name": "XEREBIAN ABS + SEBS + Stainless Steel + PC Multi-Functional Self Adhesive No Drilling Strong Sticky Wall Hook Strip Rail H...",
        "ratings": 4.0,
        "no_of_ratings": 54,
        "discount_price": 379.0,
        "actual_price": 999.0
    },
    {
        "name": "Brain Freezer J Floating Grip; MONOPOD Handheld Stick Compatible with GOPRO Hero 5 (Waterproof Case Not Including)",
        "ratings": 4.1,
        "no_of_ratings": 19,
        "discount_price": 129.0,
        "actual_price": 290.0
    },
    {
        "name": "Bilton Pure Wooden Hand Blender / Mathani Rai - (Brown)",
        "ratings": 4.0,
        "no_of_ratings": 153,
        "discount_price": 185.0,
        "actual_price": 399.0
    },
    {
        "name": "Bleu Travel Bag with Trolley - (Grey, 512)",
        "ratings": 3.2,
        "no_of_ratings": 3,
        "discount_price": 799.0,
        "actual_price": 2999.0
    },
    {
        "name": "Marks & Spencer Men's Regular Fit Formal Shirt",
        "ratings": 3.9,
        "no_of_ratings": 8,
        "discount_price": 839.0,
        "actual_price": 2799.0
    },
    {
        "name": "KDM G2 Wireless Bluetooth In Ear Earphone with Mic (Black)",
        "ratings": 3.6,
        "no_of_ratings": 54,
        "discount_price": 649.0,
        "actual_price": 799.0
    },
    {
        "name": "Woodland Mens Gc 2871118 Sneaker",
        "ratings": 3.5,
        "no_of_ratings": 145,
        "discount_price": 1947.0,
        "actual_price": 3895.0
    },
    {
        "name": "Mirana Crew Neck Front Pleat Detail Women Top with Long Sleeves for Office Wear, Casual Wear, Top for Women/Girls Top",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 429.0,
        "actual_price": 999.0
    },
    {
        "name": "Giordano Fashionista Collection Analog Bracelet Watch for Women with Color Variant, Ladies Wrist Watch with Bracelet Stra...",
        "ratings": 4.0,
        "no_of_ratings": 81,
        "discount_price": 3607.0,
        "actual_price": 4250.0
    },
    {
        "name": "Tanishqa Women's Cotton Non-Wired Maternity Bra",
        "ratings": 4.0,
        "no_of_ratings": 24,
        "discount_price": 399.0,
        "actual_price": 409.0
    },
    {
        "name": "FancyDressWale Convocation/Graduation/Academic Gown Dress For Kids",
        "ratings": 4.0,
        "no_of_ratings": 113,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "RAW Creatine Monohydrate Powder Unflavored | Micronized Creatine Monohydrate Supplement Helps Workout Performance, Build M...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1499.0,
        "actual_price": 1999.0
    },
    {
        "name": "Shree Durga Monofilament 3 Ply Black Mask 75 GSM with central Nosepin Ultrasonic Black Color with Meltblown Soft round Ela...",
        "ratings": 3.3,
        "no_of_ratings": 17,
        "discount_price": 299.0,
        "actual_price": 399.0
    },
    {
        "name": "Genuine Leather Women Small Coin Hand Purse for Regular Use, (Size, L- 5.50 x H- 3.50 Inch) R01 Bombay Sheep Leather",
        "ratings": 3.8,
        "no_of_ratings": 12,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "CZARTECH Wired Earphones, Powerful Bass, HD Sound Quality Earphones, Tangle Free Cable, Comfortable in Ear Fit, with 3.5 m...",
        "ratings": 3.8,
        "no_of_ratings": 1173,
        "discount_price": 169.0,
        "actual_price": 599.0
    },
    {
        "name": "Ishin Women's Cotton Black Embellished A-Line Kurta Trouser Set With Jacket…",
        "ratings": 3.7,
        "no_of_ratings": 103,
        "discount_price": 1299.0,
        "actual_price": 4499.0
    },
    {
        "name": "Urbano Plus Men's Jet Black Regular Fit Washed Jeans Stretchable",
        "ratings": 3.7,
        "no_of_ratings": 7,
        "discount_price": 799.0,
        "actual_price": 1699.0
    },
    {
        "name": "Puma Unisex-Adult RBR Future Rider Sneaker",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 3593.0,
        "actual_price": 7999.0
    },
    {
        "name": "Zeya Yellow Gold and Cubic Zirconia Pendant for Women",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 7940.0,
        "actual_price": 8960.0
    },
    {
        "name": "Life Line Fitness LB-301 AB Care Bench for Home Gym Workout, Abs Exerciser AB King Pro Machine, 5 Adjustable Positions, Fr...",
        "ratings": 2.9,
        "no_of_ratings": 4,
        "discount_price": 3899.0,
        "actual_price": 7050.0
    },
    {
        "name": "Diverse Men's Regular Fit Casual Shirt",
        "ratings": 3.7,
        "no_of_ratings": 185,
        "discount_price": 489.0,
        "actual_price": 1499.0
    },
    {
        "name": "Styleville.in Women's Plain Regular Fit Top",
        "ratings": 3.8,
        "no_of_ratings": 747,
        "discount_price": 200.4,
        "actual_price": 1099.0
    },
    {
        "name": "PATRANCE 2MP Wireless WiFi Outdoor PTZ CCTV Camera with Day/Night Color, Two-Way Audio, Motion Detection, Upto 128 GB Micr...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2743.0,
        "actual_price": 10500.0
    },
    {
        "name": "Women's Casual Embroidered Cotton Plus size Kurti",
        "ratings": 3.6,
        "no_of_ratings": 379,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Diana Korr Women's Handbag (Tan) (DK10HNUD00)",
        "ratings": 3.4,
        "no_of_ratings": 52,
        "discount_price": 2051.0,
        "actual_price": 3999.0
    },
    {
        "name": "FLiX (Beetel) USB to Type C Nylon Braided Data Sync & 2A Fast Charging Cable, Made in India, 480Mbps Data Sync, Super stro...",
        "ratings": 4.0,
        "no_of_ratings": 223,
        "discount_price": 210.0,
        "actual_price": 249.0
    },
    {
        "name": "Quote Marshals Sleeping Beauty Black Cotton T-Shirt for Men's",
        "ratings": 4.7,
        "no_of_ratings": 5,
        "discount_price": 599.0,
        "actual_price": 1099.0
    },
    {
        "name": "Fastrack Men Square Black Sunglasses-Pack of 1",
        "ratings": 4.0,
        "no_of_ratings": 16221,
        "discount_price": 559.0,
        "actual_price": 799.0
    },
    {
        "name": "TRIPIN Classic TIE PIN for Men and Boys in A Gift Box TSHOTIEPIN1280",
        "ratings": 4.2,
        "no_of_ratings": 16,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "(Renewed) Skullcandy Jib Plus S2JPW-M101 Wireless in-Earphone with Mic (Blue/Black)",
        "ratings": 3.9,
        "no_of_ratings": 173,
        "discount_price": 1049.0,
        "actual_price": 1348.0
    },
    {
        "name": "Kensington Hi-Fi On-Ear Headphones with 9-Foot Cord (K33137)",
        "ratings": 4.4,
        "no_of_ratings": 931,
        "discount_price": 3260.0,
        "actual_price": 4659.0
    },
    {
        "name": "Racold Platinum PLTSP-50 V_I 50-Litre Vertical Water Heater (Ivory)",
        "ratings": 3.6,
        "no_of_ratings": 7,
        "discount_price": 20990.0,
        "actual_price": 23099.0
    },
    {
        "name": "W for Woman Women Kurta",
        "ratings": 3.8,
        "no_of_ratings": 24,
        "discount_price": 935.0,
        "actual_price": 1999.0
    },
    {
        "name": "RICHER BRAND Ys Headphone Earphone with mic Compatible for Sam_Sung Galaxy A Star, Sam_Sung Galaxy A20, Sam_Sung Galaxy A3...",
        "ratings": 3.5,
        "no_of_ratings": 143,
        "discount_price": 249.0,
        "actual_price": 599.0
    },
    {
        "name": "beyerdynamic DT 240 Pro Wired Over Ear Headphones with Mic (Black)",
        "ratings": 4.5,
        "no_of_ratings": 1606,
        "discount_price": 5990.0,
        "actual_price": 7188.0
    },
    {
        "name": "DAZZLE GUARDS Matte Finish Screen Protector Guard For Panasonic Lumix DMC G7 DSLR Camera LCD Screen Protection",
        "ratings": 3.7,
        "no_of_ratings": 12,
        "discount_price": 215.0,
        "actual_price": 699.0
    },
    {
        "name": "Rozti Black Dial Magnet Strap Mesh Belt Quartz Wrist Watches Women & Girls",
        "ratings": 1.6,
        "no_of_ratings": 3,
        "discount_price": 299.0,
        "actual_price": 1199.0
    },
    {
        "name": "Young & Forever Valentine Gift Boho Gypsy Antique Silver Tribal Pendant Set for Women oxidised Turquoise Stone Lucky Eleph...",
        "ratings": 4.3,
        "no_of_ratings": 45,
        "discount_price": 540.0,
        "actual_price": 5750.0
    },
    {
        "name": "Women's Rayon Anarkali Embroidered Kurta and Pant with Dupatta Set",
        "ratings": 3.2,
        "no_of_ratings": 19,
        "discount_price": 1299.0,
        "actual_price": 2599.0
    },
    {
        "name": "Lunar's Bingo - 48 L Laptop Office/School/Travel/Business Backpack Water Resistant - Fits Up to 15.6 Inch Laptop Notebook ...",
        "ratings": 3.9,
        "no_of_ratings": 9024,
        "discount_price": 899.0,
        "actual_price": 1999.0
    },
    {
        "name": "KMJSA PRO_03 Bluetooth Camera Remote Shutter for Smartphones, UBeesize Wireless Camera Remote Control Compatible with iPho...",
        "ratings": 3.8,
        "no_of_ratings": 56,
        "discount_price": 179.0,
        "actual_price": 999.0
    },
    {
        "name": "Ulanzi ST-02S Newest Aluminum Phone Tripod Mount w Cold Shoe Mount, Support Vertical and Horizontal, Universal Metal Adjus...",
        "ratings": 4.5,
        "no_of_ratings": 2419,
        "discount_price": 1299.0,
        "actual_price": 1790.0
    },
    {
        "name": "Cotton Colors Cotton Bath Towel 200 gsm (Pack of 4, Large Size,Colors: White, Chexs Design)",
        "ratings": 3.6,
        "no_of_ratings": 543,
        "discount_price": 379.0,
        "actual_price": 750.0
    },
    {
        "name": "LG 224 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-D241ASCY, Scarlet Charm, Base stand with Drawer, Total c...",
        "ratings": 4.4,
        "no_of_ratings": 1122,
        "discount_price": 19990.0,
        "actual_price": 25790.0
    },
    {
        "name": "NIBKA women self design net saree with blouse piece",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1099.0,
        "actual_price": 2599.0
    },
    {
        "name": "Big Fox Men's Loafer",
        "ratings": 3.3,
        "no_of_ratings": 2152,
        "discount_price": 649.0,
        "actual_price": 1999.0
    },
    {
        "name": "LUMINOUS London Mayfair 1200MM Star-rated BEE Certified Energy Efficient 57-Watt High Speed Ceiling Fan (Sapphire Blue)",
        "ratings": 3.2,
        "no_of_ratings": 35,
        "discount_price": 3899.0,
        "actual_price": 4640.0
    },
    {
        "name": "Nivia mens Nivia Men Ditmar 2.0 Football Shoes Nivia Men Ditmar 2.0 Football Shoes",
        "ratings": 4.0,
        "no_of_ratings": 69,
        "discount_price": 1187.0,
        "actual_price": 1360.0
    },
    {
        "name": "Gym Bag TUFFGEAR Workout 23 Litre Gym Duffle Bag (Black)",
        "ratings": 4.0,
        "no_of_ratings": 903,
        "discount_price": 295.0,
        "actual_price": 899.0
    },
    {
        "name": "Octagon Hub Gold Plated Yin Yang Stylish Pendant Necklace Stianlesssteel chain for Couples",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 220.0,
        "actual_price": 999.0
    },
    {
        "name": "DUO Men T-Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 309.0,
        "actual_price": 1739.0
    },
    {
        "name": "Colorplus Men's Slim Fit Casual Shirt",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 629.0,
        "actual_price": 1999.0
    },
    {
        "name": "Vstec OO LALA JI For Eureka Forbes Aquaguard Sensa Tap for Protect, springfresh, sensa, aquasure Ro+UV Models (15mm Diameter)",
        "ratings": 3.5,
        "no_of_ratings": 28,
        "discount_price": 180.0,
        "actual_price": 499.0
    },
    {
        "name": "LookMark Women's Cotton Printed Straight Kurta",
        "ratings": 4.3,
        "no_of_ratings": 35,
        "discount_price": 379.0,
        "actual_price": 1999.0
    },
    {
        "name": "Njels™ Rakhi 925 BIS Hallmarked Handmade Original Silver Stylish Rudraksha Rakhi for Brother",
        "ratings": 3.8,
        "no_of_ratings": 10,
        "discount_price": 799.0,
        "actual_price": 1199.0
    },
    {
        "name": "D'Mak Panel LED Light for Ceiling, 15-Watt Square Panel Light with IP50 Dust Proof, Energy Saving White Light for Indoor U...",
        "ratings": 3.9,
        "no_of_ratings": 9,
        "discount_price": 1340.0,
        "actual_price": 1800.0
    },
    {
        "name": "Sullery Religious Jesus Cross Charm Silver Stainless Steel Non-piercing Hoop earrings For Men And Women",
        "ratings": 3.2,
        "no_of_ratings": 7,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "GULASS WICK Men Synthetic Lace Up Casual Shoes and Loafers Shoes (Brown)",
        "ratings": 2.9,
        "no_of_ratings": 6,
        "discount_price": 584.0,
        "actual_price": 999.0
    },
    {
        "name": "MESHIV USB to HDMI Adapter, USB 3.0/2.0 to HDMI 1080P Video Graphics Cable Converter with Audio for PC/ Laptop/ Projector/...",
        "ratings": 2.8,
        "no_of_ratings": 6,
        "discount_price": 1097.0,
        "actual_price": 2999.0
    },
    {
        "name": "Duke Slip On Running Shoes for Men",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 989.0,
        "actual_price": 3295.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Thermal Top",
        "ratings": 4.0,
        "no_of_ratings": 406,
        "discount_price": 655.0,
        "actual_price": 819.0
    },
    {
        "name": "ORBON 2000 Watts Rectangular G-Coil Electric Cooking Stove with Rotary Switch, Induction Cooktop, Electric Heater (Works w...",
        "ratings": 3.3,
        "no_of_ratings": 57,
        "discount_price": 2198.0,
        "actual_price": 4590.0
    },
    {
        "name": "Hybite RMF-TX500P Voice Command Remote Control Replacement for Sony Bravia LCD TV KD-55A8H KD-65A8H KD-85X9500G KD-75X9500...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1599.0,
        "actual_price": 2999.0
    },
    {
        "name": "Chircrafts Black Handbag Cotton Canvas Cloth Handmade for Girls & women",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 449.0,
        "actual_price": 1100.0
    },
    {
        "name": "CREATURE Casual Tri-fold Clutch For Women/Girls with multiple card slots/money pockets(Color-Orange||CL-06)",
        "ratings": 2.8,
        "no_of_ratings": 13,
        "discount_price": 519.0,
        "actual_price": 2499.0
    },
    {
        "name": "Bellina Multicolored Polyester Women's Clutch",
        "ratings": 3.7,
        "no_of_ratings": 9,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Lavie Women's Taffy Dome Sling Bag | Ladies Purse Handbag | Detachable Crossbody Sling Strap",
        "ratings": 3.9,
        "no_of_ratings": 60,
        "discount_price": 749.0,
        "actual_price": 2599.0
    },
    {
        "name": "Friends of Meditation Sleep Mask | Eye Cover | Upgraded Velcro Design | Total Blackout | 100% Mulberry Silk | Night Eye Ma...",
        "ratings": 5.0,
        "no_of_ratings": 6,
        "discount_price": 1399.0,
        "actual_price": 1999.0
    },
    {
        "name": "Peter England Men's Slim Fit Cotton Jeans",
        "ratings": 3.5,
        "no_of_ratings": 8,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Shaya by CaratLane Oxidised Chasing My Impromptu Opportunities Bracelet in 925 sterling silver",
        "ratings": 4.7,
        "no_of_ratings": 3,
        "discount_price": 1187.5,
        "actual_price": 1250.0
    },
    {
        "name": "SUVE® Table Top Wet Grinder Cover for Kitchen for All Wet Grinders , Multicolour to SUVE® Table Top Wet Grinder Cover for ...",
        "ratings": 4.0,
        "no_of_ratings": 37,
        "discount_price": 289.0,
        "actual_price": 500.0
    },
    {
        "name": "Zeya Yellow Gold and Swarovski Zirconia Art Earring Stud Earrings for Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 31313.0,
        "actual_price": 35267.0
    },
    {
        "name": "ABROS Men's ASSG1116O Hyper-O Sports Shoes/Casual Shoes/Running Shoes",
        "ratings": 3.7,
        "no_of_ratings": 23,
        "discount_price": 744.0,
        "actual_price": 1549.0
    },
    {
        "name": "Puma Unisex-Adult Accent Walking Shoe",
        "ratings": 3.8,
        "no_of_ratings": 128,
        "discount_price": 2199.0,
        "actual_price": 3999.0
    },
    {
        "name": "Amaal Gold Plated Brass Kaju Bali Salman Khan Bollywood Style Hoop Earrings for Men",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 249.0,
        "actual_price": 1500.0
    },
    {
        "name": "Scarlet Electric Kettle Design for Hot Water, Tea,Coffee,Milk, Rice and Other Multi PuRP Accessoriesose Cooking Foods Kettle",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 579.0,
        "actual_price": 999.0
    },
    {
        "name": "Anuj Sales 11.25 Ratti 10.50 Carat A+ Quality Natural Burma Ruby Manik Unheated Untreatet Gemstone Gold Ring for Women's a...",
        "ratings": 4.2,
        "no_of_ratings": 7,
        "discount_price": 650.0,
        "actual_price": 1299.0
    },
    {
        "name": "Generic Stainless Steel Water Filter Catridge Regular Ceramic Candle with Thermocol Box Packing (Size 7\" x 2\")",
        "ratings": 3.0,
        "no_of_ratings": 10,
        "discount_price": 139.0,
        "actual_price": 399.0
    },
    {
        "name": "YABER ACE K1 4K Projector 650 ANSI Ultra Bright, Home Theater with WiFi 6, Bluetooth, Auto Screen, First Full-Sealed Engin...",
        "ratings": 4.3,
        "no_of_ratings": 854,
        "discount_price": 32990.0,
        "actual_price": 44990.0
    },
    {
        "name": "Baggit Women's Ziparound Wallet - Large",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 650.0,
        "actual_price": 1290.0
    },
    {
        "name": "Portronics Clamp M2 Adjustable Car Mobile Phone Holder Stand, 360° Rotational, Strong Suction Cup, Compatible with 4 to 6 ...",
        "ratings": 4.1,
        "no_of_ratings": 643,
        "discount_price": 649.0,
        "actual_price": 899.0
    },
    {
        "name": "Lavie Women's Glossy Raily Tote Bag | Ladies Purse Handbag",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1239.0,
        "actual_price": 4799.0
    },
    {
        "name": "VRITRAZ Kid's Caps",
        "ratings": 4.1,
        "no_of_ratings": 157,
        "discount_price": 399.0,
        "actual_price": 499.0
    },
    {
        "name": "CP Plus 12V 10 Amp Metal Body Security Camera CCTV Power Supply for 8 Channel SMPS",
        "ratings": 3.9,
        "no_of_ratings": 216,
        "discount_price": 896.0,
        "actual_price": 1700.0
    },
    {
        "name": "Sri Jagdamba Pearls Dealer White Gold-Plated Single Line Graded Pearl Set for Women's",
        "ratings": 3.6,
        "no_of_ratings": 7,
        "discount_price": 2455.0,
        "actual_price": 2640.0
    },
    {
        "name": "Shy Shy Let€™s Touch The Sky Wooden Hammocks Swing With Complete Accessories For Indoor, Outdoor, Home Balcony, Garden Sin...",
        "ratings": 4.0,
        "no_of_ratings": 62,
        "discount_price": 1950.0,
        "actual_price": 2450.0
    },
    {
        "name": "Ammeter (Accuracy± 2.0%)",
        "ratings": 4.0,
        "no_of_ratings": 47,
        "discount_price": 409.0,
        "actual_price": 1100.0
    },
    {
        "name": "UPAKARMA Ayurveda Pure and Natural Shilajit/Shilajeet Resin 15g - Pack of 1",
        "ratings": 3.9,
        "no_of_ratings": 3903,
        "discount_price": 899.0,
        "actual_price": 1450.0
    },
    {
        "name": "DAXTON Synthetic Leather Classic Design Trendy Chain Strap Shoulder Hobo Crossbody Slingbag For Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 648.0,
        "actual_price": 2199.0
    },
    {
        "name": "THE ELEGANT FASHION Women's Calf Length Printed Capri Cropped Leggings Cotton Lycra Fabric Slim Fit 3/4th | Pants",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 239.0,
        "actual_price": 499.0
    },
    {
        "name": "Harbell Home 200 GSM 400 TC Kids Glace Cotton Reversible Cartoon Printed Double Bed King Size Comforter with Matching Beds...",
        "ratings": 3.7,
        "no_of_ratings": 71,
        "discount_price": 1499.0,
        "actual_price": 3288.0
    },
    {
        "name": "Malabar Gold and Diamonds 18 KT (750) purity Yellow Gold Gold Ring SKCZLR16217_Y_13 for Women",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 9209.0,
        "actual_price": 10599.0
    },
    {
        "name": "BLUE TEA - Chamomile Green Tea - 100g || RELAX TEA || Chamomile Flower blended with Whole Leaf Green Tea - Premium Zipper ...",
        "ratings": 3.9,
        "no_of_ratings": 510,
        "discount_price": 250.0,
        "actual_price": 499.0
    },
    {
        "name": "HP Deskjet 2331 Colour Printer, Scanner and Copier for Home/Small Office, Compact Size, Reliable, Easy Set-Up Through HP S...",
        "ratings": 3.5,
        "no_of_ratings": 22081,
        "discount_price": 4198.0,
        "actual_price": 4971.0
    },
    {
        "name": "Will Tuner Hand Mixer | Hand Blender with 7 Speed Control & Detachable Stainless-Steel Finish Beater & Whisker. Cake Mixer.",
        "ratings": 3.4,
        "no_of_ratings": 2,
        "discount_price": 411.0,
        "actual_price": 699.0
    },
    {
        "name": "Van Heusen Sport Men Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1487.37,
        "actual_price": 3099.0
    },
    {
        "name": "SHIMALWAL Fashion Presents MILETRY Color Commando Black T Shirt Full SLEVES for Men & Boys",
        "ratings": 2.9,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "ANAND saree Women's Dyed Georgette saree with Unstitched Blouse Piece, WHITE_FF_BL4466_12",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 1299.0
    },
    {
        "name": "Whirlpool 184 L 4 Star Inverter Direct-Cool Single Door Refrigerator (WDE 205 ROY 4S INV SAPPHIRE MAGNOLIA-Z, Sapphire Mag...",
        "ratings": 4.2,
        "no_of_ratings": 1672,
        "discount_price": 15490.0,
        "actual_price": 21500.0
    },
    {
        "name": "LANCER Mens Running Shoes Hiking Shoe",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 683.0,
        "actual_price": 1199.0
    },
    {
        "name": "HIFFIN® MT-11 Camera Tripod, Mini Flexible Tripod Stand with Hidden Phone Holder w Cold Shoe Mount, 1/4'' Screw for Magic ...",
        "ratings": 4.4,
        "no_of_ratings": 47,
        "discount_price": 1111.0,
        "actual_price": 1990.0
    },
    {
        "name": "Camera Shutter Button, Upscale and Delicate Soft Shutter Release Button (3 Pack)",
        "ratings": 4.6,
        "no_of_ratings": 253,
        "discount_price": 2119.0,
        "actual_price": 3943.0
    },
    {
        "name": "CAMEY Night Suit Set for Women | Printed Cotton Top & Shorts Set for Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 446.0,
        "actual_price": 899.0
    },
    {
        "name": "AGARO Grand High Pressure Washer, 1500 Watts, 110 Bars, 6.5L/Min Flow Rate, 5 Meters Outlet Hose,Upright Design with Whee...",
        "ratings": 4.2,
        "no_of_ratings": 234,
        "discount_price": 6190.0,
        "actual_price": 9990.0
    },
    {
        "name": "LOUIS STITCH Men's Seaweed Green Italian Saffiano Leather Wallet RFID Blocking Slim Card Holder Multiple Slots Handcrafted...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 2199.0
    },
    {
        "name": "MIRCHI FASHION Women's Kota Doria Foil Printed Stylish Saree with Blouse Piece",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 479.0,
        "actual_price": 2699.0
    },
    {
        "name": "BELLISSA Checked Printed PU Leather Handbag For Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1273.0,
        "actual_price": 3499.0
    },
    {
        "name": "CreativiT Graphic Printed T-Shirt for Unisex Funny Tshirt | Casual Half Sleeve Round Neck T-Shirt | 100% Cotton | D00271-180",
        "ratings": 4.1,
        "no_of_ratings": 16,
        "discount_price": 499.0,
        "actual_price": 799.0
    },
    {
        "name": "AUXTER UNB Army Camouflage School Bag Casual Backpack College Bag With Laptop Compartment",
        "ratings": 4.1,
        "no_of_ratings": 1445,
        "discount_price": 628.68,
        "actual_price": 676.0
    },
    {
        "name": "athizay Clutch Bags golden thread and wire Embroidery with long chain sling strap",
        "ratings": 4.0,
        "no_of_ratings": 56,
        "discount_price": 340.0,
        "actual_price": 999.0
    },
    {
        "name": "ACPL Precious Moments Silver Coin New-Born Baby Gift 999 Purity",
        "ratings": 4.5,
        "no_of_ratings": 81,
        "discount_price": 2160.0,
        "actual_price": 3000.0
    },
    {
        "name": "TONY TONE High speed small desk fan, 3 speed portable mini Wall Cum Table Fan, 9 Inches 225 mm Suitable for Cabin, Room, K...",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 919.0,
        "actual_price": 1545.0
    },
    {
        "name": "Lacoste Moon Analog Multi-Colour Dial Women's Watch-2001078",
        "ratings": 4.6,
        "no_of_ratings": 58,
        "discount_price": 6119.0,
        "actual_price": 13950.0
    },
    {
        "name": "USP - SH020 Pan/Tilt Wireless WiFi 3MP Full HD 1296p | IP Security Camera | CCTV with Auto Tracking - White",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 2299.0,
        "actual_price": 4499.0
    },
    {
        "name": "Soundcore AK-A3107012 5 Watt 4.2 Channel Wireless Bluetooth Portable Outdoor Speaker (Black)",
        "ratings": 4.6,
        "no_of_ratings": 722,
        "discount_price": 2499.0,
        "actual_price": 3299.0
    },
    {
        "name": "Transparent Men's Naughty Polyester Spandex Coverage Red Thong Brief Underwear Free Size",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 259.0,
        "actual_price": 699.0
    },
    {
        "name": "ABROS Men's Grande ASSG0131 Running Shoes",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 999.0
    },
    {
        "name": "Kiddiehug Organic Knitted Cotton Sleveless Shirts Jhablas Dresses for Baby Girls and Boys Kids Infant Clothing Combo (Mult...",
        "ratings": 4.3,
        "no_of_ratings": 7,
        "discount_price": 650.0,
        "actual_price": 950.0
    },
    {
        "name": "Lee Cooper Men's Blue Loafer",
        "ratings": 3.8,
        "no_of_ratings": 93,
        "discount_price": 2159.0,
        "actual_price": 2699.0
    },
    {
        "name": "MISK Garment Steamer for Clothes|Steam Iron| Clothes Steamer for Horizontal And Vertical Fabric Ironing with Fast Steam Bu...",
        "ratings": 4.0,
        "no_of_ratings": 20,
        "discount_price": 2449.0,
        "actual_price": 4500.0
    },
    {
        "name": "BATA 851-4412-43 Men's Formal Slip On Shoes",
        "ratings": 3.4,
        "no_of_ratings": 6,
        "discount_price": 949.0,
        "actual_price": 999.0
    },
    {
        "name": "Satrani Women's Floral Printed Georgette Saree with Blouse Piece",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 269.0,
        "actual_price": 608.0
    },
    {
        "name": "Chaizup Instant Premix Ginger Tea | Karak Chai with Adrak & Low Sugar | Ginger Flavor | 10 Sachets | Adrak Chai | Masala G...",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 140.0,
        "actual_price": 150.0
    },
    {
        "name": "Vighnaharta traditional south indian Gold and Rhodium Plated finger Ghoda Odi ungila vanki Ring VFJ1673FRRG",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 328.0,
        "actual_price": 830.0
    },
    {
        "name": "Organic India - Jaggery Powder 500g (Pack of 2)",
        "ratings": 4.4,
        "no_of_ratings": 3231,
        "discount_price": 175.9,
        "actual_price": 184.0
    },
    {
        "name": "T TOPLINE Magic Cool Mist Humidifiers Essential Oil Diffuser Aroma Air Humidifier with Led Night Light Colorful Change for...",
        "ratings": 3.9,
        "no_of_ratings": 640,
        "discount_price": 664.0,
        "actual_price": 999.0
    },
    {
        "name": "ZX3 Women's Cotton Regular Fit Formal Shirt",
        "ratings": 4.1,
        "no_of_ratings": 26,
        "discount_price": 699.0,
        "actual_price": 1299.0
    },
    {
        "name": "NOCXTUN Wireless Bluetooth in Ear Earphone with Mic & Calling Wireless Sport Bluetooth for Light Weight (Multi Color)",
        "ratings": 2.6,
        "no_of_ratings": 9,
        "discount_price": 199.0,
        "actual_price": 799.0
    },
    {
        "name": "Knighthood FBI Mulder ID Card Folding Lapel Pin Badge Coat Suit Jacket Wedding Gift Party Shirt Collar Accessories Brooch",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "Power Mens N Walk Calm Sneaker",
        "ratings": 3.7,
        "no_of_ratings": 461,
        "discount_price": 1047.0,
        "actual_price": 1499.0
    },
    {
        "name": "Car Cup Holder Extender Adapter, 2 in 1 Multifunctional Car Drink Cup Holder Organizer, Adjustable Base, Fits 14oz to 24oz...",
        "ratings": 3.4,
        "no_of_ratings": 25,
        "discount_price": 889.0,
        "actual_price": 1122.0
    },
    {
        "name": "Peter England Men's Regular Jeans",
        "ratings": 3.7,
        "no_of_ratings": 101,
        "discount_price": 1049.0,
        "actual_price": 1799.0
    },
    {
        "name": "Levi's Men's Regular Fit T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 15,
        "discount_price": 377.0,
        "actual_price": 1199.0
    },
    {
        "name": "SERA Women's Shrug (LA2594_Navy_Small",
        "ratings": 4.0,
        "no_of_ratings": 28,
        "discount_price": 517.0,
        "actual_price": 1294.0
    },
    {
        "name": "UJOY Bangle Bracelet Set of Three Enamel Black",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 1490.0,
        "actual_price": 4470.0
    },
    {
        "name": "Lifelong Without Gear Single Speed 26T MTB Cycle, Mountain Bikes|Frame Size: 18 inches|Cycle with Free Installation Assist...",
        "ratings": 3.8,
        "no_of_ratings": 870,
        "discount_price": 5399.0,
        "actual_price": 7499.0
    },
    {
        "name": "Aurelia Women Kurta",
        "ratings": 2.2,
        "no_of_ratings": 3,
        "discount_price": 519.0,
        "actual_price": 1299.0
    },
    {
        "name": "SaleOn Pack of 12 Pcs Mix Cute Animals Swimming Water Toys Non-Toxic,BPA Free Colorful Soft Rubber Float Squeeze Sound Squ...",
        "ratings": 3.8,
        "no_of_ratings": 1758,
        "discount_price": 398.05,
        "actual_price": 899.0
    },
    {
        "name": "Water-Proof 2000 Watt Immersion Rod Water Heater (100% Copper) Shock Proof (2000 watt)",
        "ratings": 3.8,
        "no_of_ratings": 47,
        "discount_price": 489.0,
        "actual_price": 900.0
    },
    {
        "name": "Kastar Battery (4-Pack) for Olympus BLN-1, BCN-1, BLN1 and Olympus OM-D E-M1, OM-D E-M5, PEN E-P5 Digital Cameras",
        "ratings": 4.7,
        "no_of_ratings": 3,
        "discount_price": 7648.0,
        "actual_price": 10929.0
    },
    {
        "name": "Panasonic Anchor Anmol Fresh Air 230Mm Exhaust Fan |Exhaust Fan for Home, Office, Kitchen and Bathroom (Grey)",
        "ratings": 3.8,
        "no_of_ratings": 218,
        "discount_price": 1300.0,
        "actual_price": 2400.0
    },
    {
        "name": "BOROSILICATE GLASS, TEST TUBE WITH SCREW CAP CAPACITY 30 ML, CULTURE TUBE, SET OF 50 UNITS",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 749.0,
        "actual_price": 2700.0
    },
    {
        "name": "Oplera Spark Celebrity Inspired Oxidised Trishul Ganesh Stud Earring For Women and Girls",
        "ratings": 3.5,
        "no_of_ratings": 13,
        "discount_price": 199.0,
        "actual_price": 800.0
    },
    {
        "name": "FLIPPED Vegan Leather Flip Case Back Cover for XIAOMI MI REDMI Note 9 (Flexible, Shock Proof | Hand Stitched Leather Finis...",
        "ratings": 4.0,
        "no_of_ratings": 311,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Careflection || Propeller Strap Mount for DJI Mavic Mini Protection Velcro Fastener",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 219.0,
        "actual_price": 999.0
    },
    {
        "name": "Park Avenue Men's Slim Fit T-Shirt",
        "ratings": 3.5,
        "no_of_ratings": 4,
        "discount_price": 659.0,
        "actual_price": 1399.0
    },
    {
        "name": "Liberty LEAP7X Sport Shoe for Men",
        "ratings": 3.5,
        "no_of_ratings": 4,
        "discount_price": 1519.0,
        "actual_price": 1999.0
    },
    {
        "name": "Maizic Smartstudio 2 Pcs Studio Microphone Foam Mic Shield Cover for Clear and Crisp Sound Quality Black",
        "ratings": 3.2,
        "no_of_ratings": 8,
        "discount_price": 249.0,
        "actual_price": 999.0
    },
    {
        "name": "Kids Headphones for School with Mic, Riwbox CS6 Folding Stereo Headphones Over Ear Wired Headset Sharing Function with Mic...",
        "ratings": 4.3,
        "no_of_ratings": 1110,
        "discount_price": 1359.0,
        "actual_price": 2550.0
    },
    {
        "name": "Silver Layered Jewellery Small Necklace Layered Chain,Gold Plated Long Temple Coin Traditional Fashion Jewellery Set For W...",
        "ratings": 3.3,
        "no_of_ratings": 4,
        "discount_price": 55.0,
        "actual_price": 120.0
    },
    {
        "name": "Judy Jewelry Rinhoo Stainless Steel Gold Initial Alphabet 26 Letters Script Name Pendant Chain Necklace From A-Z (A)",
        "ratings": 4.5,
        "no_of_ratings": 1469,
        "discount_price": 315.0,
        "actual_price": 699.0
    },
    {
        "name": "one8 by Virat Kohli Men's Cotton Briefs (Pack of 1)",
        "ratings": 3.7,
        "no_of_ratings": 58,
        "discount_price": 149.0,
        "actual_price": 274.0
    },
    {
        "name": "Safari Flo Secure 4 Wheels Double Zipper Hard Side Trolley Bag 77 Gun Metal",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 8295.0,
        "actual_price": 14829.0
    },
    {
        "name": "AERO Brass Traditional Filter Coffee Maker, Brass, South Indian Drip Sytle Decoction Liquid Maker, Coffee Filter Vessel, U...",
        "ratings": 4.4,
        "no_of_ratings": 8,
        "discount_price": 1339.0,
        "actual_price": 1999.0
    },
    {
        "name": "Precious Moments BIS Hallmarked Personalised Newly Married Silver Square Coin 10/20/50/100 Gram 999 Pure",
        "ratings": 4.6,
        "no_of_ratings": 62,
        "discount_price": 2540.0,
        "actual_price": 3500.0
    },
    {
        "name": "Classic Polo Mens Solid Half Sleeve 100% Cotton Slim Fit Polo Neck T-Shirt (PRISTO-GR02)",
        "ratings": 3.7,
        "no_of_ratings": 54,
        "discount_price": 699.0,
        "actual_price": 799.0
    },
    {
        "name": "QUEFIT Thigh Shaper Belt for Fitness & Weight Loss Slimming Belt for Men and Women(Pack of 2) | Helps in Toning Your Thigh...",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 279.0,
        "actual_price": 899.0
    },
    {
        "name": "Spigen Thermoplastic Polyurethane Liquid Air Cover Case Designed for Galaxy Watch 4 Classic (46mm) - Matte Black (Watch no...",
        "ratings": 4.1,
        "no_of_ratings": 2859,
        "discount_price": 1299.0,
        "actual_price": 1599.0
    },
    {
        "name": "REXOTEX Exclusive Georgette Lucknowi Chiply Work Dress Material Salwar Suit Unstitched",
        "ratings": 3.4,
        "no_of_ratings": 241,
        "discount_price": 889.0,
        "actual_price": 1499.0
    },
    {
        "name": "AA Creation Women's Fit And Flare Knee Length Dress",
        "ratings": 3.5,
        "no_of_ratings": 1934,
        "discount_price": 389.0,
        "actual_price": 999.0
    },
    {
        "name": "Kneaders Stainless Steel Measuring Cups and Spoons Set Combo for Kitchen Baking Cake, Measure Dry or Liquid Ingredients (R...",
        "ratings": 3.6,
        "no_of_ratings": 80,
        "discount_price": 279.0,
        "actual_price": 599.0
    },
    {
        "name": "ANNACREATIONS 1 Pcs Stylish Polyester Duffel Bag and 10 Pcs Hair Clips, 1 Pcs Watch Perfect Unicorn Combo Gift Set for Bab...",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 397.0,
        "actual_price": 999.0
    },
    {
        "name": "Yumun 2 in 1 Multi-Function Cleaning Brushes with Dustpan Hand-held Tools Window Track Gap Groove Computer Keyboard Tools ...",
        "ratings": 3.7,
        "no_of_ratings": 6,
        "discount_price": 169.0,
        "actual_price": 399.0
    },
    {
        "name": "SHIRT THEORY Light Black Cotton Full Sleeves Casual Denim Shirt Men II Premium Cotton Denim Shirt menII Stylish Shirt for ...",
        "ratings": 3.6,
        "no_of_ratings": 25,
        "discount_price": 799.0,
        "actual_price": 1999.0
    },
    {
        "name": "KLEIO Women's Stylish Jacquard Laptop Handbag, White Orange",
        "ratings": 4.2,
        "no_of_ratings": 89,
        "discount_price": 1285.0,
        "actual_price": 2799.0
    },
    {
        "name": "EXOTIC Studded hand bag for women",
        "ratings": 4.1,
        "no_of_ratings": 694,
        "discount_price": 1249.0,
        "actual_price": 2999.0
    },
    {
        "name": "Inkholic Collar & Round Neck Black Sports Jersey Combo Pack of Two",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 749.0,
        "actual_price": 1599.0
    },
    {
        "name": "Tusok Men Short Sleeve Rayon Cotton Casual Hawaiian Aloha Floral Leaf Party Beach Vacation Light Yellow Flower Leafy",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 1175.0
    },
    {
        "name": "Skybags Rubik Polyester 58 Cms Softsided Cabin Luggage",
        "ratings": 4.3,
        "no_of_ratings": 3500,
        "discount_price": 3514.0,
        "actual_price": 8620.0
    },
    {
        "name": "Ozean Plastic Auto Shut Off Sensor for Commercial RO Water Purifier, Coolers and Storage Tanks",
        "ratings": 4.0,
        "no_of_ratings": 145,
        "discount_price": 650.0,
        "actual_price": 1200.0
    },
    {
        "name": "Techlife Braided King Cobra Style Paracord Hand Grip Wrist Strap for All DSLR Camera/Binoculars (Black)",
        "ratings": 4.2,
        "no_of_ratings": 414,
        "discount_price": 275.0,
        "actual_price": 375.0
    },
    {
        "name": "Love Maker hot Nighty for Women Sexy Nights, Stylish Designer Women Babydoll Nighty Set for Girls ( Size S-XXL) Fit Well f...",
        "ratings": 3.0,
        "no_of_ratings": 25,
        "discount_price": 299.0,
        "actual_price": 1499.0
    },
    {
        "name": "LandVK Toothbrush for Kids with U Shaped Silicone Brush Head for 360 Degree Cleaning Suitable For 2-6 Years, Manual,Heart ...",
        "ratings": 3.6,
        "no_of_ratings": 1028,
        "discount_price": 259.0,
        "actual_price": 899.0
    },
    {
        "name": "Royalkart 4.5ft x 2.2ft PVC Backdrops for Photography Waterproof | Flatlay Photography Backdrops for Product Photoshoots (...",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 664.0,
        "actual_price": 1500.0
    },
    {
        "name": "TIED RIBBONS Resin Krishna Idol, Standard, Multicolour, 1 Piece",
        "ratings": 4.3,
        "no_of_ratings": 69,
        "discount_price": 379.0,
        "actual_price": 899.0
    },
    {
        "name": "EGOTUDE Premium Hybrid Slim fit Rubberized Matte Semi Transparent Back Cover Case with Metallic Buttons for iPhone 12 & iP...",
        "ratings": 4.4,
        "no_of_ratings": 1174,
        "discount_price": 474.0,
        "actual_price": 1499.0
    },
    {
        "name": "PRAKRUTHI PURE AYURVEDA Herbal Black Adivasi Hair Oil for Hair Growth And Hair Fall, 100% Natural Hair Oils (250 ML)",
        "ratings": 3.7,
        "no_of_ratings": 47,
        "discount_price": 300.0,
        "actual_price": 999.0
    },
    {
        "name": "LMDPRAJAPATIS Certified 5.25 Ratti / 4.90 Carat Ruby Manik Ashtadhatu Gold Plated Pendant/Locket Gemstone by Lab Certified",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 390.0,
        "actual_price": 2890.0
    },
    {
        "name": "Universal Water Tap Adapter for Fully Automatic Washing Machine Inlet Pipe Pack of 2",
        "ratings": 3.5,
        "no_of_ratings": 57,
        "discount_price": 175.0,
        "actual_price": 499.0
    },
    {
        "name": "Lino Perros Women's Faux Leather Handbag",
        "ratings": 4.0,
        "no_of_ratings": 99,
        "discount_price": 1248.0,
        "actual_price": 4995.0
    },
    {
        "name": "Vfashion Men,s The Wolverine Half Sleeve T-Shirt Superhero Black 100% Cotton Thor t-Shirts",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 799.0,
        "actual_price": 1899.0
    },
    {
        "name": "Sparx",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 1004.0,
        "actual_price": 1349.0
    },
    {
        "name": "Generic Immunocin Syrup Gufic, 200 ml, Pack of 2",
        "ratings": 4.2,
        "no_of_ratings": 57,
        "discount_price": 350.0,
        "actual_price": 358.0
    },
    {
        "name": "BIXXON MT-40 Mini Flexible Tripod for Mobile Phone and Camera with Hidden Phone Holder. Suitable for Photography, Video, V...",
        "ratings": 4.4,
        "no_of_ratings": 21,
        "discount_price": 1099.0,
        "actual_price": 2999.0
    },
    {
        "name": "Wet n Wild Lipstick, Berry (Matte)",
        "ratings": 4.2,
        "no_of_ratings": 474,
        "discount_price": 505.0,
        "actual_price": 650.0
    },
    {
        "name": "J B Fashion Dresses for Women || Dresses for Women Dress || Dress for Women || Western Dresses for Women || Women Dress ||...",
        "ratings": 3.5,
        "no_of_ratings": 92,
        "discount_price": 429.0,
        "actual_price": 2999.0
    },
    {
        "name": "Sunsilk Stunning Black Shine Shampoo 1 L, With Amla + Oil & Pearl Protein, Gives Shiny, Moisturised and Fuller Hair - Para...",
        "ratings": 4.4,
        "no_of_ratings": 4787,
        "discount_price": 596.3,
        "actual_price": 820.0
    },
    {
        "name": "Preethi Glitter Electric Cooker, 2.2 Liters with Double Pan – White & Blue, (RC326)",
        "ratings": 3.1,
        "no_of_ratings": 7,
        "discount_price": 3408.0,
        "actual_price": 4469.0
    },
    {
        "name": "Conbre MiniXR V380 Pro Wireless HD Security CCTV Camera Night Vision Supports up to 64gb SD Card (White)",
        "ratings": 3.3,
        "no_of_ratings": 891,
        "discount_price": 1234.0,
        "actual_price": 2999.0
    },
    {
        "name": "GaxQuly Floral 12 Cms Cosmetic Pouch (Standard_Hanging Bag_Multicolor)",
        "ratings": 3.6,
        "no_of_ratings": 114,
        "discount_price": 365.0,
        "actual_price": 999.0
    },
    {
        "name": "BESIMPLE Women Stripe V-Neck Crop Top",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 330.0,
        "actual_price": 1100.0
    },
    {
        "name": "madhuram textiles Women's Rayon Anarkali Printed Kurta, 3/4 Sleeve Fully Stitched Women Long Kurti Everyday Wear Comfortab...",
        "ratings": 4.0,
        "no_of_ratings": 215,
        "discount_price": 899.0,
        "actual_price": 3499.0
    },
    {
        "name": "ADRO Men's Regular Fit T-Shirt",
        "ratings": 3.9,
        "no_of_ratings": 52,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Janasya Women's Poly Crepe Crop Top with Palazzo and Dupatta",
        "ratings": 4.1,
        "no_of_ratings": 1420,
        "discount_price": 779.0,
        "actual_price": 2949.0
    },
    {
        "name": "Peter England Men's Slim Fit Polo Shirt",
        "ratings": 2.5,
        "no_of_ratings": 2,
        "discount_price": 679.0,
        "actual_price": 1299.0
    },
    {
        "name": "MINITATU Boys Cotton Crew Neck Sweatshirt",
        "ratings": 3.9,
        "no_of_ratings": 479,
        "discount_price": 349.0,
        "actual_price": 599.0
    },
    {
        "name": "Fressia Fabrics Women's Stretchable Readymade Saree Blouse Crop Top Choli Pack of 2",
        "ratings": 3.9,
        "no_of_ratings": 103,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "ZOTIC Men's Comfort fit Cotton Trackpants with Twin Side Zipper Pockets (Pack of 1) | for Running, Yoga, Gym Workout | Reg...",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 449.0,
        "actual_price": 749.0
    },
    {
        "name": "Max Women Ballerina Sneaker",
        "ratings": 3.8,
        "no_of_ratings": 14,
        "discount_price": 655.0,
        "actual_price": 799.0
    },
    {
        "name": "INLAZER Mens Suede Material Double Monk Shoes All Occasions",
        "ratings": 2.6,
        "no_of_ratings": 8,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "G4Girl Long Printed Kaftan Nightsuit",
        "ratings": 3.4,
        "no_of_ratings": 32,
        "discount_price": 319.0,
        "actual_price": 999.0
    },
    {
        "name": "Men Red Checkered Short Boxer Export Quality Nikkar",
        "ratings": 2.5,
        "no_of_ratings": 25,
        "discount_price": 135.0,
        "actual_price": 215.0
    },
    {
        "name": "Adidas Men's COSET 2018 M Flip-Flops",
        "ratings": 4.0,
        "no_of_ratings": 1307,
        "discount_price": 899.0,
        "actual_price": 1499.0
    },
    {
        "name": "Fashion Comfortz Bra & Panty Set for Women Ll Ladies and Girls Lingerie Set",
        "ratings": 3.0,
        "no_of_ratings": 5,
        "discount_price": 287.0,
        "actual_price": 789.0
    },
    {
        "name": "REMOTEX Compitable Remote Control for TCL LED/LCD/TV",
        "ratings": 4.2,
        "no_of_ratings": 59,
        "discount_price": 349.0,
        "actual_price": 599.0
    },
    {
        "name": "Coffeeza Coffee Capsule Holder with Rotating Stand - Holds 40 Coffee Pods| Compatible with Nespresso Pods | Espresso Pod H...",
        "ratings": 4.6,
        "no_of_ratings": 25,
        "discount_price": 1139.0,
        "actual_price": 2200.0
    },
    {
        "name": "Stylish Tibetan bike keychain (Pack of 2) | Multicolor Tibetan keychain for hanging keys | Stylish Ladakh prayer flag keyc...",
        "ratings": 4.2,
        "no_of_ratings": 9,
        "discount_price": 149.0,
        "actual_price": 299.0
    },
    {
        "name": "Osaka Bi-Color Dimmable LED Video Light OS-LED-308 Pocket LED Slim for All DSLR Video Cameras YouTube Video tiktok Photogr...",
        "ratings": 4.2,
        "no_of_ratings": 1568,
        "discount_price": 2899.0,
        "actual_price": 4799.0
    },
    {
        "name": "Sonata Floral Folk Art Analog Pink Dial Women's Watch-8976YL04/NP8976YL04W",
        "ratings": 3.3,
        "no_of_ratings": 6,
        "discount_price": 743.0,
        "actual_price": 875.0
    },
    {
        "name": "Cuxnoo Tobo VGA to HDMI Adapter for Connecting Traditional VGA Interface Laptop, PC to HDMI Monitor or Projector, 1080P VG...",
        "ratings": 3.4,
        "no_of_ratings": 476,
        "discount_price": 759.0,
        "actual_price": 999.0
    },
    {
        "name": "Deewa Women's Polyester Floral Print Maxi Dress, Regular Fit, Ethnic Wear (Red)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 791.0,
        "actual_price": 1649.0
    },
    {
        "name": "Days Off Crepe Paper Solid Streamer Ribbon Decorations For Birthday & Craft (Multicolour, Pack Of 20)",
        "ratings": 3.8,
        "no_of_ratings": 375,
        "discount_price": 249.0,
        "actual_price": 450.0
    },
    {
        "name": "MACTREE Men's Mid Top Ankle Sneakers Boots",
        "ratings": 3.4,
        "no_of_ratings": 323,
        "discount_price": 648.0,
        "actual_price": 3995.0
    },
    {
        "name": "Amazon Brand - Anarva Women's Hand Block Printed Cotton Kalamkari Dupatta (2.5 Meters)",
        "ratings": 5.0,
        "no_of_ratings": 4,
        "discount_price": 790.0,
        "actual_price": 1490.0
    },
    {
        "name": "amiciTools High Precision LCD Digital Scale 50 g/0.006 g Powder Gold Jewelry Medicinal Herbs Weighing Electronic Pocket Sc...",
        "ratings": 3.9,
        "no_of_ratings": 323,
        "discount_price": 2375.01,
        "actual_price": 3500.0
    },
    {
        "name": "NAINVISH Girl's Cotton Blend Kurta with Pant (KD03_KB_Blue_9-10 Year)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 2199.0
    },
    {
        "name": "Kabir Fabrics Women's Vasttram kanchi pattu Kanchipuram Banarasi Lichi Silk Saree With Plain Unstitched Blouse piece (Peac...",
        "ratings": 2.8,
        "no_of_ratings": 12,
        "discount_price": 1499.0,
        "actual_price": 2999.0
    },
    {
        "name": "DHRUVI TRENDZ Women Soft Cotton Silk Banarasi Saree for women Under 300 2022 Beautiful saree free size with blouse piece",
        "ratings": 4.0,
        "no_of_ratings": 4416,
        "discount_price": 259.0,
        "actual_price": 1999.0
    },
    {
        "name": "Puma Unisex-Adult Alpha Slip on Cv Sneaker",
        "ratings": 3.5,
        "no_of_ratings": 9,
        "discount_price": 1347.0,
        "actual_price": 2999.0
    },
    {
        "name": "Mahi Rhodium Plated Couple Ring Set With Crystal FRCO1103045R",
        "ratings": 2.2,
        "no_of_ratings": 5,
        "discount_price": 280.0,
        "actual_price": 1999.0
    },
    {
        "name": "Ananth Jewels BIS Hallmarked Silver 10 grams CONGRATULATIONS BABY ON CRADLE",
        "ratings": 4.5,
        "no_of_ratings": 7,
        "discount_price": 907.0,
        "actual_price": 1999.0
    },
    {
        "name": "Puma Mens Hustle V2 Idp Shoe",
        "ratings": 3.7,
        "no_of_ratings": 62,
        "discount_price": 2999.0,
        "actual_price": 3999.0
    },
    {
        "name": "Giordano Women's Round Analog Wrist Watch with Black Dial and Stainless Steel Strap 34mm diameter, 16mm strap width, 30m w...",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 5895.0,
        "actual_price": 11790.0
    },
    {
        "name": "Naughty Kidz Baby Teething Toys, Soft and Natural Fruit Shape Teether Bpa Free/Natural/Organic/, Soft & Textured Teethers...",
        "ratings": 3.5,
        "no_of_ratings": 254,
        "discount_price": 199.0,
        "actual_price": 399.0
    },
    {
        "name": "Osaka 32-inch / 80 cm 5 in 1 Photography Camera Reflector Collapsible Multi-Disc Light with Bag - Translucent, Silver, Gol...",
        "ratings": 4.3,
        "no_of_ratings": 384,
        "discount_price": 799.0,
        "actual_price": 2000.0
    },
    {
        "name": "Wesley Spartan Unisex Travel Hiking Laptop Bag fits Upto 17.3 inch with Raincover and Internal Organiser Backpack Rucksack...",
        "ratings": 4.1,
        "no_of_ratings": 1034,
        "discount_price": 790.0,
        "actual_price": 798.0
    },
    {
        "name": "Longies Men Thermal Inner Wear",
        "ratings": 3.6,
        "no_of_ratings": 14,
        "discount_price": 1229.0,
        "actual_price": 2499.0
    },
    {
        "name": "Organic Tattva, Organic Triphala Powder 100 Gram Tin | All Natural,No Artificial Additives Or Harmful Pesticides | for Gas...",
        "ratings": 4.1,
        "no_of_ratings": 110,
        "discount_price": 110.0,
        "actual_price": 135.0
    },
    {
        "name": "ARVESA Monthly Birthday Milestone Special Unisex Baby Romper Onesies Dress Half Sleeve Envelope Neck",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 349.0,
        "actual_price": 599.0
    },
    {
        "name": "HOJI Jaguar Design Hud Car Mobile Phone Holder Mount Stand Adjustable Clip Holder for Dashboard - (Color May Vary)",
        "ratings": 2.8,
        "no_of_ratings": 111,
        "discount_price": 349.0,
        "actual_price": 1299.0
    },
    {
        "name": "Favria Water Resistant Camera Bag, DSLR Camera Shoulder Bag, Outdoor Travel Camera Bag Case for Nikon Canon Sony Mirrorles...",
        "ratings": 4.0,
        "no_of_ratings": 56,
        "discount_price": 899.0,
        "actual_price": 999.0
    },
    {
        "name": "Arrow Men Polo Shirt",
        "ratings": 4.5,
        "no_of_ratings": 8,
        "discount_price": 660.0,
        "actual_price": 1499.0
    },
    {
        "name": "Levi's Women's Cotton Hooded Neck Sweatshirt",
        "ratings": 4.0,
        "no_of_ratings": 11,
        "discount_price": 989.0,
        "actual_price": 2299.0
    },
    {
        "name": "Zumrut® Gold Plated Classic Design CZ Studded Sikh Sardar Sikhism Punjabi Khalsa Khanda Chain Pendant Locket Necklace Spir...",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 391.0,
        "actual_price": 1699.0
    },
    {
        "name": "Hidesign Women's BETH 01 Handbag",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 1787.0,
        "actual_price": 4195.0
    },
    {
        "name": "She Dreams Neon Sign Led Pink Yellow Moon Neon Lights for Wall Decor Word Acrylic Light Up Signs for Bedroom Home Wedding ...",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 1790.0,
        "actual_price": 2990.0
    },
    {
        "name": "WELBORN Camera Battery Charger for Nikon EN-EL10 Battery",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 599.0,
        "actual_price": 700.0
    },
    {
        "name": "Konvio Neer Non-Electric Gravity Based Ultra Filtration 14L Water Purifier Spare Filter Parts (Spun + UF)",
        "ratings": 4.1,
        "no_of_ratings": 106,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "MosQuick® Portable Hot Water Bag Small for Babies, Kids & Adults - 1 Pc Blue (Print May Vary)",
        "ratings": 3.6,
        "no_of_ratings": 72,
        "discount_price": 329.18,
        "actual_price": 500.0
    },
    {
        "name": "MOBIUS Manfo2 Tripod Bag Case Adjustable Shoulder Strap Suitable for Tripod with 3 Way Head | All Round Padding for Added ...",
        "ratings": 5.0,
        "no_of_ratings": 6,
        "discount_price": 1250.0,
        "actual_price": 1995.0
    },
    {
        "name": "IMPREXIS STORE Dark Rani Color Traditional Bangles Set for Women/Girls Traditional Chuda for Any Occasion",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 1399.0
    },
    {
        "name": "K.K. VillA Home Fitness Equipment Upgraded Sit-ups and Push-ups Assistant Device Lose Weight Gym Workout Abdominal curl Ex...",
        "ratings": 4.3,
        "no_of_ratings": 61,
        "discount_price": 699.0,
        "actual_price": 1100.0
    },
    {
        "name": "githaan Casual Peach and Navy Blue Rayon Solid Top for Women and Girls",
        "ratings": 4.6,
        "no_of_ratings": 7,
        "discount_price": 899.0,
        "actual_price": 1399.0
    },
    {
        "name": "Hunky Dory 10pcs 30ml Empty Clear Plastic Bottles Refillable Travel Size Cosmetic Containers Small Leak Proof Squeeze Bott...",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "Redwolf Star Wars Millennium Falcon Blueprint Officially Licensed Half Sleeve Cotton T-Shirt Blue",
        "ratings": 4.3,
        "no_of_ratings": 26,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "HUETRAP Men's Crouching Tiger Turq Blue T Shirt",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 484.0,
        "actual_price": 1499.0
    },
    {
        "name": "Prolific Men's Casual Drving Loafers (Size UK 6-13)",
        "ratings": 3.7,
        "no_of_ratings": 40,
        "discount_price": 758.0,
        "actual_price": 2549.0
    },
    {
        "name": "Lacoste Men's Relaxed T-Shirt",
        "ratings": 4.1,
        "no_of_ratings": 6,
        "discount_price": 5500.0,
        "actual_price": 6250.0
    },
    {
        "name": "ZOTIC Multicolor Trunk Men Underwear Combo,Cotton,Innerwear,Pack of 3 PBR_GR_CO",
        "ratings": 3.6,
        "no_of_ratings": 19,
        "discount_price": 392.0,
        "actual_price": 657.0
    },
    {
        "name": "Amazon Brand - Symbol Men's Flexi Waist Slim Casual Pants",
        "ratings": 4.4,
        "no_of_ratings": 6,
        "discount_price": 879.0,
        "actual_price": 2599.0
    },
    {
        "name": "Arrow Men Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1100.0,
        "actual_price": 2199.0
    },
    {
        "name": "LONDON BELLY Women's Fit and Flare Dress",
        "ratings": 3.3,
        "no_of_ratings": 32,
        "discount_price": 459.0,
        "actual_price": 1999.0
    },
    {
        "name": "GG ORIGINALS Women's Stylish Sling Hand bag",
        "ratings": 3.6,
        "no_of_ratings": 62,
        "discount_price": 500.0,
        "actual_price": 799.0
    },
    {
        "name": "Kitchen Need - Washable and Reusable - (Pack of 1 Roll) Kitchen Printed Tissue/Towel Paper Roll - Washable and Reusable ap...",
        "ratings": 3.8,
        "no_of_ratings": 618,
        "discount_price": 118.0,
        "actual_price": 299.0
    },
    {
        "name": "Patanjali Divya Neem Ghanvati 60 Tabs",
        "ratings": 4.1,
        "no_of_ratings": 18,
        "discount_price": 91.0,
        "actual_price": 100.0
    },
    {
        "name": "JJC F-NDV52mm Variable Neutral Density Filter ND2 to ND400, Slim Fader ND Filter for Canon EF-M 55-200mm f/4.5-6.3, Fujifi...",
        "ratings": 4.2,
        "no_of_ratings": 95,
        "discount_price": 2199.0,
        "actual_price": 5900.0
    },
    {
        "name": "Janasya Women's Grey Poly Silk Kurta with Dupatta",
        "ratings": 3.8,
        "no_of_ratings": 15,
        "discount_price": 899.0,
        "actual_price": 2649.0
    },
    {
        "name": "The Korhean Store BTS J-Hope Obey Black T-Shirt",
        "ratings": 4.6,
        "no_of_ratings": 20,
        "discount_price": 459.0,
        "actual_price": 1299.0
    },
    {
        "name": "Keya Seth Aromatherapy Aromatic 100% Natura Liquid Sindoor Maroon 2Pcs & Natural Ayurvedic Aalta 1Pcs With Applicator (Pac...",
        "ratings": 4.1,
        "no_of_ratings": 10,
        "discount_price": 399.0,
        "actual_price": 435.0
    },
    {
        "name": "Maxwax Wonder White for School Personal Training Canvas Shoes - 120 gram",
        "ratings": 3.8,
        "no_of_ratings": 101,
        "discount_price": 55.0,
        "actual_price": 70.0
    },
    {
        "name": "PK shopper Dry Fruit Box, Dry Fruits Container with Lid, Serving Box, Multipurpose Storage Container For Dessert, Candy, M...",
        "ratings": 3.4,
        "no_of_ratings": 3,
        "discount_price": 248.0,
        "actual_price": 299.0
    },
    {
        "name": "MOM'S HOME Organic Cotton Baby Muslin Swaddle - 0-12 Months - Pack of 3 - Fruits",
        "ratings": 2.6,
        "no_of_ratings": 4,
        "discount_price": 799.0,
        "actual_price": 1949.0
    },
    {
        "name": "grey jack Polarized Polygon Sunglasses for Men Women,Stylish Metal Frame Sunglasses S1272",
        "ratings": 4.0,
        "no_of_ratings": 603,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "BKRKJ Women's South Cotton Style Unstitched Dress Material | Rajasthani Gold Print | Zari Border | Gujarati Gujri Kutch Pr...",
        "ratings": 3.0,
        "no_of_ratings": 7,
        "discount_price": 1049.0,
        "actual_price": 2200.0
    },
    {
        "name": "Joyfit Ankle Weights - Adjustable Wrist Weights, Neoprene padded, Sand filled weights.For Running, Cycling, Crossfit. Hom...",
        "ratings": 4.0,
        "no_of_ratings": 99,
        "discount_price": 999.0,
        "actual_price": 2000.0
    },
    {
        "name": "Kadence KAD-SC-AC2 Guitar Pick Combo",
        "ratings": 3.8,
        "no_of_ratings": 488,
        "discount_price": 516.0,
        "actual_price": 999.0
    },
    {
        "name": "GEE AAR IMPEX SPORTS WATCH COLLECTIONS Boy's and Girl's Sports Digital Watch with 7 Lights in Round Dial (Black)",
        "ratings": 3.1,
        "no_of_ratings": 30,
        "discount_price": 115.0,
        "actual_price": 599.0
    },
    {
        "name": "Shoprider Printed Multicolor Genuine Leather Black Men Wallet,Canvas Printed Wallet for Men & Boys Multicolor Men Wallet",
        "ratings": 3.7,
        "no_of_ratings": 2,
        "discount_price": 279.0,
        "actual_price": 599.0
    },
    {
        "name": "Defunc True Basic Wireless Bluetooth TWS (Pink)",
        "ratings": 4.1,
        "no_of_ratings": 10,
        "discount_price": 2549.0,
        "actual_price": 4999.0
    },
    {
        "name": "Shining Jewel - By Shivansh 24K Gold Plated & Brass Traditional Thushi Pipe Necklace for Women (Gold)",
        "ratings": 4.0,
        "no_of_ratings": 93,
        "discount_price": 256.96,
        "actual_price": 999.0
    },
    {
        "name": "ASICS Unisex-Adult Attack Bladelyte 4 Badminton Shoe",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 6139.0,
        "actual_price": 7999.0
    },
    {
        "name": "KETEX Green Polyster/Cotton Blend Polo Collar Men's Tshirt",
        "ratings": 3.2,
        "no_of_ratings": 12,
        "discount_price": 175.0,
        "actual_price": 399.0
    },
    {
        "name": "SWADESI STUFF Black Analog Watch for Girls and Women Watch - for Girls",
        "ratings": 3.4,
        "no_of_ratings": 118,
        "discount_price": 219.0,
        "actual_price": 999.0
    },
    {
        "name": "Enoki Women's Tote Handbag",
        "ratings": 3.1,
        "no_of_ratings": 16,
        "discount_price": 474.0,
        "actual_price": 949.0
    },
    {
        "name": "SIA VENDORS? Mirror Vinyl Film Foil Car Sticker DIY Wrapping Silver Chrome Mirror Vinyl Wrap Film Car Sticker Decal Sheet ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 1499.0
    },
    {
        "name": "Sevgi Girl's Rayon Embroidered Kurti with Trousers",
        "ratings": 3.5,
        "no_of_ratings": 66,
        "discount_price": 498.0,
        "actual_price": 875.0
    },
    {
        "name": "Metro Women Synthetic Sandals (33-1354)",
        "ratings": 3.9,
        "no_of_ratings": 11,
        "discount_price": 645.0,
        "actual_price": 1290.0
    },
    {
        "name": "FrionKandy Women Maxi Wrap Around Skirt",
        "ratings": 4.2,
        "no_of_ratings": 38,
        "discount_price": 436.0,
        "actual_price": 999.0
    },
    {
        "name": "Altegic red checks Lug Cap Lid for Glass Jar, Airtight Metal Cap Lid for Storage Glass Jar and bottle cap Rust-proof, Leak...",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 169.0,
        "actual_price": 295.0
    },
    {
        "name": "Pepe Jeans Men's Regular Fit Casual Shirt",
        "ratings": 3.7,
        "no_of_ratings": 7,
        "discount_price": 1673.0,
        "actual_price": 2799.0
    },
    {
        "name": "Janisa Women's Embroidery Chanderi Cotton Dupatta",
        "ratings": 3.6,
        "no_of_ratings": 186,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Midkart Polycarbonate Front and Back Cover Compatible for Samsung Galaxy Z Fold 3 with Electroplating Glossy Border Anti-Y...",
        "ratings": 3.3,
        "no_of_ratings": 19,
        "discount_price": 1599.0,
        "actual_price": 2999.0
    },
    {
        "name": "ProElite Smart Trifold Flip Stand Case Cover for Apple iPad 10.2\" 9th Gen (2021) / 8th Gen / 7th Gen, Translucent Back, Da...",
        "ratings": 4.3,
        "no_of_ratings": 816,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "VERO MODA Rayon a-line Skirt",
        "ratings": 3.6,
        "no_of_ratings": 5,
        "discount_price": 559.0,
        "actual_price": 2499.0
    },
    {
        "name": "Cason -Tripod for Action Camera 3-Way Monopod Grip Foldable Selfie Stick Tripod Compatible with Action Camera Cason CN10 C...",
        "ratings": 3.5,
        "no_of_ratings": 10,
        "discount_price": 469.0,
        "actual_price": 995.0
    },
    {
        "name": "MVTECH HDMI to HDMI 90 Degree Adapter, Right Angle L Shape HDMI Male to HDMI Female Gold Plated-Black",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 175.0,
        "actual_price": 399.0
    },
    {
        "name": "Kenvi US Immersion shockproof",
        "ratings": 3.8,
        "no_of_ratings": 35,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "Elite Forces Jungle Warriors Cobra Unisex Embroidery T-Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1599.0,
        "actual_price": 3999.0
    },
    {
        "name": "Ranipal Fabric Whitener/Cloth Whitener for Your White and Colored Clothes | Ranipal Fabric Whitener Powder Detergent - Pac...",
        "ratings": 4.1,
        "no_of_ratings": 65,
        "discount_price": 300.0,
        "actual_price": 350.0
    },
    {
        "name": "Candere By Kalyan Jewellers Yellow Gold Stud Earrings for Women",
        "ratings": 4.3,
        "no_of_ratings": 6,
        "discount_price": 14897.0,
        "actual_price": 18985.0
    },
    {
        "name": "High Hill Men's Slim Fit Shirt",
        "ratings": 3.2,
        "no_of_ratings": 159,
        "discount_price": 499.0,
        "actual_price": 899.0
    },
    {
        "name": "THE BLAZZE Men's Bodybuilding Gym Solid Color Tank Top Stringers",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 449.0,
        "actual_price": 799.0
    },
    {
        "name": "SAVIAURA 1 Sheet 2 in 1 3D Flat Lay Tabletop Double-sided Photography Backdrop Photo Studio Flatlay Background PVC Wrinkl...",
        "ratings": 4.3,
        "no_of_ratings": 195,
        "discount_price": 398.0,
        "actual_price": 750.0
    },
    {
        "name": "rangita Women Rayon Peach Printed Calf Length Anarkali Tiered Kurti with Contrats Printed Placket",
        "ratings": 4.6,
        "no_of_ratings": 9,
        "discount_price": 1199.0,
        "actual_price": 1799.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Slim Fit T-Shirt",
        "ratings": 3.7,
        "no_of_ratings": 15,
        "discount_price": 549.0,
        "actual_price": 999.0
    },
    {
        "name": "Glus Women's Plastic Bra Strap Clips - Pack of 3 (Multicolour, Free Size)",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 199.0,
        "actual_price": 799.0
    },
    {
        "name": "Bacca Bucci® Sprite Men's Snow Boots High-Top Six Inches Ankle Boots",
        "ratings": 4.1,
        "no_of_ratings": 1627,
        "discount_price": 1399.0,
        "actual_price": 2999.0
    },
    {
        "name": "Pistaa's Women's Cotton Blend Salwar Suit",
        "ratings": 3.8,
        "no_of_ratings": 135,
        "discount_price": 999.0,
        "actual_price": 2999.0
    },
    {
        "name": "Pepe Jeans Men's Slim fit Casual Shirt",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 1199.0,
        "actual_price": 2199.0
    },
    {
        "name": "CORXIL® Analogue Diamond Studded Black Dial Magnet Watch with Gift Bracelet for Women or Girls and Watch for Girl or Women",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 289.0,
        "actual_price": 1599.0
    },
    {
        "name": "S Kumar Gems & Jewels Certified Lab Tested Natural Ruby (manik/manikya) Gemstone 5.25 Ratti for Astrological Purpose",
        "ratings": 3.1,
        "no_of_ratings": 12,
        "discount_price": 1120.0,
        "actual_price": 5950.0
    },
    {
        "name": "BATA Mens Tifpac Loafers",
        "ratings": 4.2,
        "no_of_ratings": 69,
        "discount_price": 1241.0,
        "actual_price": 1799.0
    },
    {
        "name": "Puma unisex-adult Nitrocat Future Z Slide",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 3149.0,
        "actual_price": 4499.0
    },
    {
        "name": "Trylo Vivanta_D_Rasberry_38",
        "ratings": 4.4,
        "no_of_ratings": 6,
        "discount_price": 597.0,
        "actual_price": 650.0
    },
    {
        "name": "0-DEGREE Jeans Pant Stretch Denim for Men Denim Blue 36 Inch Waist",
        "ratings": 4.3,
        "no_of_ratings": 2,
        "discount_price": 849.0,
        "actual_price": 2999.0
    },
    {
        "name": "Accurate Traders Original Morpankhi Stone 20 Ratti (18.2 carats) Rashi Ratna Natural and Certified by GLI Labradorite Gems...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2508.0,
        "actual_price": 5518.0
    },
    {
        "name": "P.R.COTTONS: Cotton Kitchen Towels, 5pcs, 45x70CM, 200GSM Multi Color! Multi Purpose Towel for Kitchen,Car,Windows,Drying ...",
        "ratings": 4.3,
        "no_of_ratings": 24,
        "discount_price": 320.0,
        "actual_price": 399.0
    },
    {
        "name": "Besick Pink Cartoon Oversized Baggy fit Drop Shoulder Tshirt for Men & Women",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 659.0,
        "actual_price": 1599.0
    },
    {
        "name": "Satrani Women'S Organza Scalloped Border & Printed With Gota Embroidery Saree With Unstitched Blouse Piece",
        "ratings": 4.5,
        "no_of_ratings": 5,
        "discount_price": 899.0,
        "actual_price": 4071.0
    },
    {
        "name": "MYL Adjustable Height Satellite Speaker Stand for Home Theatre Speakers 2.1; 5.1 and 7.1 - Pack of 2 Stands (1Pairs)",
        "ratings": 3.6,
        "no_of_ratings": 10,
        "discount_price": 3999.0,
        "actual_price": 16999.0
    },
    {
        "name": "Nivia 2280-3 Nitro-4 Polyester Casual Round T-Shirt, XXL (Dark Grey)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 398.0,
        "actual_price": 399.0
    },
    {
        "name": "SHIVMART Brass Hanuman Chalisa Yantra Locket with Chalisa Printed on Optical Lens with Chain (Multi)",
        "ratings": 3.2,
        "no_of_ratings": 32,
        "discount_price": 219.0,
        "actual_price": 799.0
    },
    {
        "name": "Hermosa India Single Breasted Formal Black Blazer with Two Simple Button",
        "ratings": 2.9,
        "no_of_ratings": 7,
        "discount_price": 827.0,
        "actual_price": 2599.0
    },
    {
        "name": "MPRT Wooden Cricket Kit for Tennis Ball Combo for Age Group 12-14 Years, Size 5, Wood",
        "ratings": 3.9,
        "no_of_ratings": 765,
        "discount_price": 699.0,
        "actual_price": 1299.0
    },
    {
        "name": "ZOUK Women's Handmade Vegan Leather and Jute Purse with Indian Geo Optics Print for Mobile Phones (Multicolour)",
        "ratings": 4.4,
        "no_of_ratings": 10,
        "discount_price": 899.0,
        "actual_price": 2198.0
    },
    {
        "name": "M. R. Fashion Men's Regular Fit Denim Strechable Jeans Marigold",
        "ratings": 4.4,
        "no_of_ratings": 28,
        "discount_price": 899.0,
        "actual_price": 1499.0
    },
    {
        "name": "ASICS Unisex Adult Rote Japan Lyte Ff 2 Multicolor Other-Men's Sports-5.5 Kids UK (1053A028)",
        "ratings": 4.8,
        "no_of_ratings": 8,
        "discount_price": 6194.0,
        "actual_price": 8999.0
    },
    {
        "name": "NEON ROCK Men and Women Foldable Cotton Pocket Cap for All Sports and Outdoor Activities, Easy to Carry (Free Size)",
        "ratings": 4.1,
        "no_of_ratings": 25,
        "discount_price": 398.0,
        "actual_price": 999.0
    },
    {
        "name": "Jaanshi Women's Faux Leather Shiny Front Zip Open Pole Fantasy Dress",
        "ratings": 3.6,
        "no_of_ratings": 171,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Ahuja WS-664T PA Wall Speaker",
        "ratings": 3.7,
        "no_of_ratings": 13,
        "discount_price": 1850.0,
        "actual_price": 2364.0
    },
    {
        "name": "Orient Electric Orina 1200mm Ceiling Fan (Chocolate Brown Ivory)",
        "ratings": 4.1,
        "no_of_ratings": 1147,
        "discount_price": 3650.0,
        "actual_price": 4200.0
    },
    {
        "name": "Whirlpool 190 L 3 Star Single Door Refrigerator (WDE 205 CLS PLUS 3S, Sapphire Radiance, 2022 Model)",
        "ratings": 4.2,
        "no_of_ratings": 1212,
        "discount_price": 14740.0,
        "actual_price": 18550.0
    },
    {
        "name": "PSK Exports Women's Printed Parallel Two Piece Ladies Wrap Top Dressess with Palazzo Set",
        "ratings": 3.0,
        "no_of_ratings": 24,
        "discount_price": 499.0,
        "actual_price": 1149.0
    },
    {
        "name": "FURO Mens W3023 F006 Running Shoe",
        "ratings": 4.2,
        "no_of_ratings": 5,
        "discount_price": 1524.0,
        "actual_price": 2345.0
    },
    {
        "name": "Reebok Men's Royal Complete CLN Matt Running Shoes",
        "ratings": 3.9,
        "no_of_ratings": 239,
        "discount_price": 2095.0,
        "actual_price": 3499.0
    },
    {
        "name": "DZert Kids School Bag Soft Plush Backpacks Cartoon Boys Girls Baby (2-5 Years)",
        "ratings": 3.7,
        "no_of_ratings": 11137,
        "discount_price": 239.0,
        "actual_price": 699.0
    },
    {
        "name": "Bajaj Edge 1200mm Ceiling Fan (Brown)",
        "ratings": 4.0,
        "no_of_ratings": 1002,
        "discount_price": 1734.0,
        "actual_price": 2490.0
    },
    {
        "name": "Eopzo Travel Makeup Bag, Hanging Toiletry Bag for Women, Make Up Bag, Cosmetic Bag for Travel Size Toiletries & Travel Acc...",
        "ratings": 4.6,
        "no_of_ratings": 18,
        "discount_price": 459.0,
        "actual_price": 999.0
    },
    {
        "name": "Red Tape Men's Regular Fit Casual Shirt",
        "ratings": 3.7,
        "no_of_ratings": 11,
        "discount_price": 489.0,
        "actual_price": 2699.0
    },
    {
        "name": "HIFFIN® 8x12 Ft, Yellow Professional Backdrop for Background Photography Background Stand for Photo Light Studio Accurate ...",
        "ratings": 3.8,
        "no_of_ratings": 755,
        "discount_price": 469.0,
        "actual_price": 899.0
    },
    {
        "name": "Ensure Complete, Balanced Nutrition Drink For Adults 200g, Chocolate Flavour, Now With A Special Ingredient HMB And 32 Ess...",
        "ratings": 4.3,
        "no_of_ratings": 831,
        "discount_price": 333.0,
        "actual_price": 335.0
    },
    {
        "name": "OORA Men Shorts Set",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 279.0,
        "actual_price": 699.0
    },
    {
        "name": "BEEVEE Mens Camouflage Grey Elasticated Track Pant with Drawstring.",
        "ratings": 4.0,
        "no_of_ratings": 10,
        "discount_price": 1079.0,
        "actual_price": 1799.0
    },
    {
        "name": "Tubination Hat Cotton Solid Sun Protection Hat for Mens & Boys",
        "ratings": 3.8,
        "no_of_ratings": 23,
        "discount_price": 329.0,
        "actual_price": 999.0
    },
    {
        "name": "Kanha exports Women Floral Print Co-Ord Set with (2 Piece Printed Set)",
        "ratings": 3.8,
        "no_of_ratings": 10,
        "discount_price": 1422.0,
        "actual_price": 1599.0
    },
    {
        "name": "5W to 20W Type-C USB Cable for Samsung Galaxy M02s / M 02 s USB Cable Original Like | Charger Cable | Rapid Quick Dash Fas...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 279.0,
        "actual_price": 349.0
    },
    {
        "name": "TIMEX Analog Black Dial Men's Watch-TWTG80SMU04",
        "ratings": 3.9,
        "no_of_ratings": 102,
        "discount_price": 1499.0,
        "actual_price": 4195.0
    },
    {
        "name": "ABYS Dark Brown RFID Protected Genuine Leather Wallet||Card Case||ID Holder for Men and Women(IN206LB)",
        "ratings": 3.8,
        "no_of_ratings": 76,
        "discount_price": 474.05,
        "actual_price": 999.0
    },
    {
        "name": "KLEIO Floral Printed Zipper Tote Shoulder Handbag For Women/Ladies (HO4014KL-TU)(TURQUOISE)",
        "ratings": 3.6,
        "no_of_ratings": 26,
        "discount_price": 1749.0,
        "actual_price": 4999.0
    },
    {
        "name": "Cover Lab - TVS Wego New BS6 Water Resistant - Dust Proof - Full Bike Scooty Two Wheeler Body Cover for TVS Wego (Maroon)",
        "ratings": 3.7,
        "no_of_ratings": 46,
        "discount_price": 369.0,
        "actual_price": 499.0
    },
    {
        "name": "AJS spares \"SUJATA\" Mixer-grinder Jar Lid (Plastic, White) (1000ml Jar Lid)",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 329.0,
        "actual_price": 498.0
    },
    {
        "name": "Sparx Mens Sx0384g Sports Shoes",
        "ratings": 3.7,
        "no_of_ratings": 35,
        "discount_price": 988.0,
        "actual_price": 1449.0
    },
    {
        "name": "METRONAUT 9.O Android WiFi, YouTube, Netflix, HD LED, 3D HQ4 Projector Bluetooth 5000 Lumens",
        "ratings": 3.6,
        "no_of_ratings": 84,
        "discount_price": 9999.0,
        "actual_price": 24999.0
    },
    {
        "name": "Kuber Industries Polyester Handcrafted Embroidered Women Clutch Women Handbag, Gold (CTKTC4329)",
        "ratings": 3.5,
        "no_of_ratings": 18,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "HIKVISION 1080p HD 2MP Security Camera, White",
        "ratings": 4.0,
        "no_of_ratings": 152,
        "discount_price": 2050.0,
        "actual_price": 3000.0
    },
    {
        "name": "Enamor Athleisure Polyester E115 Active Racer Tank for Women| Scoop Neck Quick Dry Antimicrobial 4 Way Stretch Tank with R...",
        "ratings": 4.5,
        "no_of_ratings": 35,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "AGARO Maple Ice Cream, Sorbet, Slush & Frozen Yoghurt Maker 1.2 Litres",
        "ratings": 3.4,
        "no_of_ratings": 235,
        "discount_price": 2133.0,
        "actual_price": 4199.0
    },
    {
        "name": "9 Mukhi Rudraksha Original Certified Nepali Big Size With Silver Capping 22mm 9 Face Rudraksha नौ मुखी रुद्राक्ष माँ भगवती...",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 1499.0,
        "actual_price": 1800.0
    },
    {
        "name": "GM 7205 Cricket T-Shirt Half Sleeve",
        "ratings": 3.4,
        "no_of_ratings": 101,
        "discount_price": 788.0,
        "actual_price": 875.0
    },
    {
        "name": "BERRY BIRD ® Tops for Women|Crop top Tank top|Beach wear|Stylish Tops|Inner for Women|Ribbed Tops|Spaghetti top|Stretchabl...",
        "ratings": 4.4,
        "no_of_ratings": 86,
        "discount_price": 279.0,
        "actual_price": 1449.0
    },
    {
        "name": "chetanoring CAR WASH pump Black Rubber WASHER O Rings High Pressure Washer Hose packing ring for water pressure Aquatak/AQ...",
        "ratings": 3.7,
        "no_of_ratings": 110,
        "discount_price": 288.0,
        "actual_price": 349.0
    },
    {
        "name": "GIVA AVNI 925 Oxidised Wheel Clip On Nose Pin | Nose Pin For Women & Girls | With Certificate of Authenticity and 925 Stam...",
        "ratings": 3.4,
        "no_of_ratings": 12,
        "discount_price": 569.0,
        "actual_price": 1299.0
    },
    {
        "name": "Brishti Cat Character Multicolored Disco Light and Music Digital Girl's Wrist Watch Cum Toy (Best Return Gift for Boy's an...",
        "ratings": 3.4,
        "no_of_ratings": 4,
        "discount_price": 379.0,
        "actual_price": 899.0
    },
    {
        "name": "TANGY Mens Wear Full Sleeves Check Shirt",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 650.0,
        "actual_price": 1200.0
    },
    {
        "name": "Whirlpool 2.0 Ton 3 Star, Flexicool Inverter Split AC (Copper, Convertible 4-in-1 Cooling Mode, HD Filter 2023 Model, S3I3...",
        "ratings": 3.9,
        "no_of_ratings": 258,
        "discount_price": 43890.0,
        "actual_price": 78200.0
    },
    {
        "name": "Tee Mafia Unisex Designer Starlabs T-Shirt| dc Comic T-Shirts| Superhero Movie t-Shirt| Flash t-Shirt| Flash Lightning t-S...",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 799.0
    },
    {
        "name": "HIKVISION EVteQ Turbo AcuSense DVR, Face Detection/False Alarm Filter/ Face Recognition Metal Body DVR (5MP/8MP, iDS-7216H...",
        "ratings": 3.7,
        "no_of_ratings": 27,
        "discount_price": 20880.0,
        "actual_price": 29999.0
    },
    {
        "name": "Turtle Wax Fresh Shine Interior Plastic & Dashboard Cleaner 500ml Vanilla",
        "ratings": 4.3,
        "no_of_ratings": 172,
        "discount_price": 599.0,
        "actual_price": 965.0
    },
    {
        "name": "Samyak Wear FALTU.CO Women's Cotton Hooded Hoodies Jacket with Zip & Pocket | Sweatshirt for Women",
        "ratings": 3.9,
        "no_of_ratings": 83,
        "discount_price": 899.0,
        "actual_price": 1299.0
    },
    {
        "name": "TecnoSoul Mini Bluetooth Speaker | Stereo Sound | Selfie Shutter Button | Call | Music | Splash Proof | Tweeter | Surround...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 489.0,
        "actual_price": 999.0
    },
    {
        "name": "Vibhavari Men's Blue Microfiber Pocket Square",
        "ratings": 4.2,
        "no_of_ratings": 108,
        "discount_price": 274.0,
        "actual_price": 599.0
    },
    {
        "name": "ikis - 4K Ultra HD HDMI Male to Male Cable (Black) -Compatible with Laptop, PC, Projector & TV & All HDMI Supported Device...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 120.0,
        "actual_price": 450.0
    },
    {
        "name": "GOLDY Mini Refrigerator Portable Fridge 12V Auto Mini Car Travel Fridge ABS Multi-Function Home Cooler Freezer Warmer Cool...",
        "ratings": 2.5,
        "no_of_ratings": 9,
        "discount_price": 1999.0,
        "actual_price": 4999.0
    },
    {
        "name": "pTron Bassbuds Tango ENC (Environmental Noise Cancellation), Dedicated Movie Mode, 40Hrs Total Playtime, Bluetooth 5.1 Wir...",
        "ratings": 3.7,
        "no_of_ratings": 24285,
        "discount_price": 999.0,
        "actual_price": 3999.0
    },
    {
        "name": "POLICE Black Color Waterline RFID Credit Card Wallet",
        "ratings": 4.8,
        "no_of_ratings": 6,
        "discount_price": 1199.0,
        "actual_price": 2399.0
    },
    {
        "name": "Rubani Women's Chikankari Cotton Unstitched Salwar Suit Dress Material With Thread Embroidery On Tie(Free Size,White)",
        "ratings": 4.0,
        "no_of_ratings": 20,
        "discount_price": 889.0,
        "actual_price": 3999.0
    },
    {
        "name": "Digital Dress Room Golden Mangalsutra Women's Pride Gold Plated 17 Big Mani Pendant Mangalsutra for Women 16-inch Length B...",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 475.0,
        "actual_price": 699.0
    },
    {
        "name": "Rupa Thermocot Volcano Men's V-Neck Thermal Set",
        "ratings": 4.1,
        "no_of_ratings": 263,
        "discount_price": 853.0,
        "actual_price": 900.0
    },
    {
        "name": "RICHER BRAND YS Headphones Earphones Compatible with Sam_Sung Galaxy J2 Pro,Sam_Sung J2Pro,Sam_Sung Galaxy J3,Sam_Sung J3",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 249.0,
        "actual_price": 599.0
    },
    {
        "name": "Skillmatics Card Game - Guess in 10 Junior Community Helpers, Gifts & Fun Learning for Ages 3 to 6, Quick Game of Smart Qu...",
        "ratings": 4.5,
        "no_of_ratings": 1281,
        "discount_price": 379.0,
        "actual_price": 399.0
    },
    {
        "name": "Sidharth Gems Certified Unheated Untreatet 10.25 Ratti 9.75 Carat A+ Quality Natural Black Hakik/Hakeek Loose Gemstone for...",
        "ratings": 2.9,
        "no_of_ratings": 7,
        "discount_price": 400.0,
        "actual_price": 1999.0
    },
    {
        "name": "Fusefit Mens Amaze Running Shoe",
        "ratings": 3.7,
        "no_of_ratings": 54,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "Green Scapper Luxury Analog Watch Women & Girls-9658 (Slight Color Change in Blue)",
        "ratings": 3.9,
        "no_of_ratings": 125,
        "discount_price": 421.0,
        "actual_price": 1299.0
    },
    {
        "name": "Baggit Women Satchel Handbag (CARROT)",
        "ratings": 4.2,
        "no_of_ratings": 9,
        "discount_price": 1249.0,
        "actual_price": 3090.0
    },
    {
        "name": "Arrow Men's Regular Shirt (ASACSH4117_Blue 40)",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1034.0,
        "actual_price": 2299.0
    },
    {
        "name": "M Men Style Gothic Jewelry Warrior Sword Handmade Meaningful Jewelry Locket With Chain Silver Stainless Steel Sword Pendan...",
        "ratings": 3.1,
        "no_of_ratings": 5,
        "discount_price": 235.0,
        "actual_price": 999.0
    },
    {
        "name": "ASIAN Men's Nitrogen-02 Sports Running,Walking & Gym Shoes with Max Cushion Technology Phylon Sole with Memory Form Casual...",
        "ratings": 3.0,
        "no_of_ratings": 8,
        "discount_price": 1059.0,
        "actual_price": 2299.0
    },
    {
        "name": "REDHORNS Elastic Fabric Waist Belt for Women Dresses Leaf Design Stretchy Slim Ladies Belt for Saree Girls Jeans - Free Si...",
        "ratings": 4.3,
        "no_of_ratings": 244,
        "discount_price": 297.0,
        "actual_price": 999.0
    },
    {
        "name": "Parx Men's Regular Fit T-Shirt",
        "ratings": 4.2,
        "no_of_ratings": 8,
        "discount_price": 750.0,
        "actual_price": 1499.0
    },
    {
        "name": "Amazon Brand - Inkast Denim Co. Men's Regular Fit T-Shirt",
        "ratings": 3.8,
        "no_of_ratings": 96,
        "discount_price": 268.31,
        "actual_price": 1399.0
    },
    {
        "name": "Suruchi bindi red size -4(pack of 12 leeaflets) for women and girls",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 189.0,
        "actual_price": 399.0
    },
    {
        "name": "Rupa Jon Men's Cotton Brief (Pack of 3)(8903978687599_JN Brief_GR Mel/AIRF/COFF)(Colors and Prints May Vary)",
        "ratings": 3.9,
        "no_of_ratings": 423,
        "discount_price": 350.0,
        "actual_price": 360.0
    },
    {
        "name": "Melomane Flow Melopods Bluetooth Truly Wireless In Ear Earbuds With Mic Dual Master Pods Feature, Noise Isolation, Ipx 5 W...",
        "ratings": 3.0,
        "no_of_ratings": 80,
        "discount_price": 999.0,
        "actual_price": 4999.0
    },
    {
        "name": "Butterflies Women's Handbag with Wallet (Beige, Orange) (BNS WB054) (Set of 2)",
        "ratings": 4.0,
        "no_of_ratings": 20,
        "discount_price": 1299.0,
        "actual_price": 4999.0
    },
    {
        "name": "Time Up Digital LED Dial Multi-Quantity 3D Design Gift Watches for Boys & Girls -M5MULTI-X (Set of 5-BK-GY-WH-HP-YB)",
        "ratings": 4.4,
        "no_of_ratings": 2,
        "discount_price": 895.0,
        "actual_price": 1495.0
    },
    {
        "name": "CAMTREE Swing Away Wide Angle Carbon Fiber Matte Box fr Camera Shoulder rig kit (C-MB-23-CF)",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 12900.0,
        "actual_price": 31733.0
    },
    {
        "name": "Dollar Bigboss Men's White Pack of 3 Derby RN Vest",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 399.0,
        "actual_price": 599.0
    },
    {
        "name": "Aarke Ritu Kumar Round Neck Sleeveless Embroidered Dress",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 1620.0,
        "actual_price": 2700.0
    },
    {
        "name": "Jyva 26T 7 Speed Carbon Steel Mountain Bike, Multicolor, 18 Inch Frame - Ideal for Unisex Youth",
        "ratings": 2.0,
        "no_of_ratings": 16,
        "discount_price": 8607.0,
        "actual_price": 14999.0
    },
    {
        "name": "V-Guard VIH151 1500 W Immersion Water Heater (Multicolour)",
        "ratings": 4.0,
        "no_of_ratings": 303,
        "discount_price": 625.0,
        "actual_price": 890.0
    },
    {
        "name": "MARK & ALBERT Men's Casual Black Checkered Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1399.0,
        "actual_price": 3999.0
    },
    {
        "name": "Urbano Fashion Men's Carbon Blue Slim Fit Washed Jeans Stretchable",
        "ratings": 2.5,
        "no_of_ratings": 7,
        "discount_price": 749.0,
        "actual_price": 1499.0
    },
    {
        "name": "A.D.FRESH Universal Car Food Tray with Clamp Bracket Folding Dining Table Drink Holder Car Pallet Back Seat Water Car Cup ...",
        "ratings": 3.8,
        "no_of_ratings": 16,
        "discount_price": 948.0,
        "actual_price": 1950.0
    },
    {
        "name": "Fila Men Ramata Running Shoes",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 1499.0,
        "actual_price": 2999.0
    },
    {
        "name": "TechEase 360° 1296p (Full HD) Smart Home Office Wireless WiFi Camera Outdoor PTZ Camera CCTV |3MP ) Color Night Vision|Ai ...",
        "ratings": 3.9,
        "no_of_ratings": 455,
        "discount_price": 3190.0,
        "actual_price": 6999.0
    },
    {
        "name": "Mona B Women Canvas Messenger Crossbody Vintage Sling Bag (Vintage Script, Medium)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 863.0,
        "actual_price": 1500.0
    },
    {
        "name": "boAt Airdopes 393ANC True Wireless in Ear Earbuds with 32dB Hybrid ANC, Quad Mics with ENx™ Tech, 30 Hours Playback,Beast™...",
        "ratings": 3.7,
        "no_of_ratings": 67,
        "discount_price": 2299.0,
        "actual_price": 4990.0
    },
    {
        "name": "GunAlly Stretchable Nylon Ammo Thing Holder 32 Bore Size (Not Ammo, Black)",
        "ratings": 4.0,
        "no_of_ratings": 52,
        "discount_price": 150.0,
        "actual_price": 599.0
    },
    {
        "name": "Aircon Split AC Stand Mounting Bracket Stand for 1 Ton, 1.5 Ton, 2 Ton AC Heavy Duty Fix-It Split Ac Stand,White,40 x 8 x ...",
        "ratings": 4.1,
        "no_of_ratings": 21,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Trend Arrest Women Black Loose Fit High-Rise Joggers Trousers",
        "ratings": 2.9,
        "no_of_ratings": 4,
        "discount_price": 699.0,
        "actual_price": 1399.0
    },
    {
        "name": "Density Sports Running Shoes for Men",
        "ratings": 2.5,
        "no_of_ratings": 13,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "ServEzee Coffee Milk Frother Handheld, Drink Coffee Mixer, Battery Operated Electric Foam Maker, Milk Foamer for Lattes, F...",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 189.0,
        "actual_price": 299.0
    },
    {
        "name": "Upgraded Eyebrow Trimmer, Funstant Precision Electric Eyebrow Razor for Women Battery-Operated Facial Hair Remover with Co...",
        "ratings": 4.2,
        "no_of_ratings": 6124,
        "discount_price": 3228.0,
        "actual_price": 3828.0
    },
    {
        "name": "BATA 851-6912-43 Men's Black Formal Slip On Shoes (9 UK)",
        "ratings": 3.3,
        "no_of_ratings": 65,
        "discount_price": 949.0,
        "actual_price": 999.0
    },
    {
        "name": "TheCoolio 300pcs of Assorted Blind (POP) Rivets in Three Sizes",
        "ratings": 4.2,
        "no_of_ratings": 499,
        "discount_price": 440.0,
        "actual_price": 490.0
    },
    {
        "name": "French Connection Analog Blue Dial Women's Watch-FCN0001J",
        "ratings": 4.2,
        "no_of_ratings": 21,
        "discount_price": 2780.0,
        "actual_price": 6950.0
    },
    {
        "name": "Deal Lock 3.5mm Jack Wired Headphone Earphone with mic Compatible for Android and iOS - White (Pack of 2)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 699.0
    },
    {
        "name": "NIVEDHA MATTRESS-Organic Silk Cotton/Semal/Ilavam Panju/Kapok Contour Soft Sleeping Pillow (20 X 25 inches) Standard Size ...",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 1250.0,
        "actual_price": 3200.0
    },
    {
        "name": "NABAAT Universal Waterproof Dust Cycle / Bicycle Cover for Outdoor Rain/ Sun/ Snow/ Corrosion Protection (Black & Silver)",
        "ratings": 4.1,
        "no_of_ratings": 169,
        "discount_price": 549.0,
        "actual_price": 999.0
    },
    {
        "name": "Top Select Multipurpose Professional Empty Spray Bottle for Home and Salon Use for Spraying Water on Face and Hair Dressin...",
        "ratings": 4.1,
        "no_of_ratings": 171,
        "discount_price": 165.0,
        "actual_price": 499.0
    },
    {
        "name": "Dilency Sales Racer Back Sports Bra for Women's/Girls (Gym,Yoga,Running,Workout) (Removable Pads) (30 to 34 Size)",
        "ratings": 3.6,
        "no_of_ratings": 459,
        "discount_price": 399.0,
        "actual_price": 1399.0
    },
    {
        "name": "Humble Swivel 1/4\" Screw Tripod Ball Head Bracket Holder Ball Head 360 Degree Aluminium Alloy Body Rotating for DSLR Camer...",
        "ratings": 3.9,
        "no_of_ratings": 95,
        "discount_price": 199.0,
        "actual_price": 599.0
    },
    {
        "name": "Super Absorbent 2 Ply Kitchen Printed Tissue/Towel Paper Roll - Washable and Reusable- 1 Roll (140 Pulls Per Roll)- 60 GS...",
        "ratings": 3.6,
        "no_of_ratings": 4,
        "discount_price": 113.0,
        "actual_price": 249.0
    },
    {
        "name": "Blueberry's 5.1 42 Watt Multimedia Home Theatre Speaker System Ultra Sound with USB/FM/Bluetooth Connectivity Made in Indi...",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 3999.0,
        "actual_price": 4990.0
    },
    {
        "name": "SNISHET Women's Pure Cotton Batik Jodhpuri Printed Unstitched Salwar Suit Dress Material With Cotton Print Dupatta (Free S...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "Clovia Cotton Mid Waist Boyshorts",
        "ratings": 3.8,
        "no_of_ratings": 88,
        "discount_price": 229.0,
        "actual_price": 499.0
    },
    {
        "name": "Puma Unisex Kid's Vista V Ps Bridal Rose White-Pastel Sneakers",
        "ratings": 4.1,
        "no_of_ratings": 205,
        "discount_price": 1572.0,
        "actual_price": 3499.0
    },
    {
        "name": "global desi Women's Rayon Kurta",
        "ratings": 3.8,
        "no_of_ratings": 13,
        "discount_price": 524.0,
        "actual_price": 2499.0
    },
    {
        "name": "SHINDE EXPORTS Pure Copper Kada/Bracelet for Men and Women. (9 MM Chain Kada)",
        "ratings": 3.8,
        "no_of_ratings": 51,
        "discount_price": 379.0,
        "actual_price": 800.0
    },
    {
        "name": "LMDPRAJAPATIS 8.25 Ratti / 7.50 Carat Natural Yellow Sapphire Gold Ring Pukhraj Gemstone Adjustable Ring For Men And Women",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 389.0,
        "actual_price": 2890.0
    },
    {
        "name": "Peter England Men Jeans",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 1379.0,
        "actual_price": 2299.0
    },
    {
        "name": "Nakabh Sai Baba Gold Plated Stainless Steel Kada Bracelet for Men Boys",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 399.0,
        "actual_price": 1999.0
    },
    {
        "name": "P47 Wireless Bluetooth Portable Sports Headphones with Microphone, Stereo FM, Memory Card Support-Black",
        "ratings": 3.0,
        "no_of_ratings": 14,
        "discount_price": 449.0,
        "actual_price": 699.0
    },
    {
        "name": "House of Quirk 6 Hooks Under Shelf Cup Holder Mutifunctional Kitchen Utensil Rack for Hanging - White (Set 2)",
        "ratings": 4.0,
        "no_of_ratings": 377,
        "discount_price": 399.0,
        "actual_price": 499.0
    },
    {
        "name": "CHEVIK CAM-Grip Action Camera Mount for Motorcycle, Bike and Bicycle with 360 Degrees rotatable (CAM-Grip Large)",
        "ratings": 4.5,
        "no_of_ratings": 128,
        "discount_price": 1599.0,
        "actual_price": 2999.0
    },
    {
        "name": "Urban Platter Kadak Bombay Masala Chai, 500g (Aromatic Blend of Black CTC Tea infused with Spices like Ginger, Cardamom, S...",
        "ratings": 4.0,
        "no_of_ratings": 199,
        "discount_price": 475.0,
        "actual_price": 500.0
    },
    {
        "name": "Indietoga Women Plus Size Cotton Linen Tunic Tops (2XL to 10XL)",
        "ratings": 3.8,
        "no_of_ratings": 129,
        "discount_price": 795.0,
        "actual_price": 2650.0
    },
    {
        "name": "Arrow Men's Regular Fit Shirt",
        "ratings": 2.7,
        "no_of_ratings": 3,
        "discount_price": 649.0,
        "actual_price": 2399.0
    },
    {
        "name": "ZEBRONICS, Zeb- Sound Bomb S1 Wireless Earbuds Comes with Bluetooth v5.0 Supporting Call Function,Voice Assistant & Upto 1...",
        "ratings": 3.6,
        "no_of_ratings": 1551,
        "discount_price": 1099.0,
        "actual_price": 2849.0
    },
    {
        "name": "The Heyuze Haat Shop Your Expression Kids Boys Girls Cotton Round Neck Assamese Gamusa Dhoti Kurta",
        "ratings": 3.7,
        "no_of_ratings": 36,
        "discount_price": 499.0,
        "actual_price": 799.0
    },
    {
        "name": "Beurer 37 Watts Professional Curling Tongs, 13-25 mm with Conical Heating Element for styling soft, Shiny Salon-like Curl...",
        "ratings": 3.9,
        "no_of_ratings": 16,
        "discount_price": 999.0,
        "actual_price": 3999.0
    },
    {
        "name": "Liberty womens Wagas-20 Slipper",
        "ratings": 2.9,
        "no_of_ratings": 8,
        "discount_price": 759.0,
        "actual_price": 999.0
    },
    {
        "name": "Jockey Sleeveless Men's Cotton Vest Pack of 8 (8816)",
        "ratings": 4.5,
        "no_of_ratings": 8,
        "discount_price": 1720.0,
        "actual_price": 1832.0
    },
    {
        "name": "Lavie Women's Glossy Sacy Zip Around Wallet | Ladies Purse Handbag",
        "ratings": 4.4,
        "no_of_ratings": 168,
        "discount_price": 669.0,
        "actual_price": 1999.0
    },
    {
        "name": "SR TRADERS Ice Gel Sleep Mask For Meditation Avoid Dark Circle Smooth and Soft Fabric Sleeping Eye Mask With Cooling Pack ...",
        "ratings": 3.5,
        "no_of_ratings": 21,
        "discount_price": 159.0,
        "actual_price": 999.0
    },
    {
        "name": "Lava Flip, Blue - Dual Sim Keypad GSM Mobile with Unique Design, Notification LED and Number Talker",
        "ratings": 4.0,
        "no_of_ratings": 7386,
        "discount_price": 1790.0,
        "actual_price": 2129.0
    },
    {
        "name": "GLS Men Canvas Casual Sneakers Shoes for Running, Walking, Gym, Training White",
        "ratings": 2.9,
        "no_of_ratings": 4,
        "discount_price": 849.0,
        "actual_price": 999.0
    },
    {
        "name": "Fargo Leatherette Side Sling Bags For Women's Ladies (Croco) (Grey_FGO-357)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 449.0,
        "actual_price": 1999.0
    },
    {
        "name": "Superbat SDI Cable BNC Cable 3G/6G/12G (Belden 1694A)，10FT/15FT/30FT/50FT/100FT/200FT,Supports HD-SDI/3G-SDI/4K/8K，SDI Vid...",
        "ratings": 4.7,
        "no_of_ratings": 273,
        "discount_price": 5085.0,
        "actual_price": 42285.0
    },
    {
        "name": "Tarshika Women's Art Silk Printed Saree With Blouse Piece(KESAR)",
        "ratings": 3.4,
        "no_of_ratings": 11,
        "discount_price": 299.0,
        "actual_price": 1199.0
    },
    {
        "name": "shahana Enterprises Baby Gold Panties with Floral Printed Panty Antibacterial and Stretchable Panty for Women/Girls (Pack ...",
        "ratings": 3.5,
        "no_of_ratings": 6,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "BRIDA Cotton Rich Non Padded Non Wired-Extra Stretch,Soft, & Lining -Seamless Cups-Everyday T-Shirt Bra - Easy fit",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 179.99,
        "actual_price": 200.0
    },
    {
        "name": "Kortex-Y10D Waterproof high Pressure car Washer Machine with Motive Power 2800 watt and max Pressure 180 bar Including All...",
        "ratings": 3.9,
        "no_of_ratings": 51,
        "discount_price": 9877.0,
        "actual_price": 16999.0
    },
    {
        "name": "PLUCKILY Women A-line 16 Frill Leopard Dress",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Puma Women's Regular Fit T-Shirt",
        "ratings": 4.1,
        "no_of_ratings": 42,
        "discount_price": 430.0,
        "actual_price": 1299.0
    },
    {
        "name": "Peter England Men's Slim Fit Shirt",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 1514.0,
        "actual_price": 1799.0
    },
    {
        "name": "Fancy Lifestyle Women Net & Santoon Silk Anarkali Gown Suit (73002_Dark Green_Free Size)",
        "ratings": 3.9,
        "no_of_ratings": 15,
        "discount_price": 1399.0,
        "actual_price": 3999.0
    },
    {
        "name": "River Fox (4 Pieces) Screw Fastening Type Female DC Power Plug Connector",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 170.0,
        "actual_price": 249.0
    },
    {
        "name": "Sukkhi Gold Plated Choker Necklace Set for Women",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 326.0,
        "actual_price": 1397.0
    },
    {
        "name": "DailyObjects Blue Nylon Men's Wallet",
        "ratings": 4.0,
        "no_of_ratings": 1214,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Printed Baby Vest for Kids Cotton Sleeveless Sando Baniyan Toddler Innerwear Baby Cloth for Boys & Girls Pack of 3",
        "ratings": 2.5,
        "no_of_ratings": 3,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "Memoir Copper twisted wire design, health benificial free size Kada Fashion copper jewellery Men women, by Memoir",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 399.0,
        "actual_price": 1199.0
    },
    {
        "name": "Winble Back Cover for OnePlus Nord 2T 5G Back Cover Camera Protection Soft Silicone Protective Back Cover Designed for One...",
        "ratings": 3.9,
        "no_of_ratings": 297,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "DailyObjects Printed Arch Sling Crossbody Bag For Women| Navy Feathers Print Vegan Leather Purse With Slip Pocket| Zip Clo...",
        "ratings": 3.5,
        "no_of_ratings": 5,
        "discount_price": 1225.0,
        "actual_price": 2499.0
    },
    {
        "name": "Jupiter Bullet 4 Blades BLDC Motor 900 mm | Energy Efficient 5 Star Energy Saver | High Speed Decorative Ceiling Fan Remot...",
        "ratings": 3.5,
        "no_of_ratings": 12,
        "discount_price": 3199.0,
        "actual_price": 4500.0
    },
    {
        "name": "FROZIL Analogue White Dial Watch for Girls (Flower Black)",
        "ratings": 2.6,
        "no_of_ratings": 3,
        "discount_price": 199.0,
        "actual_price": 499.0
    },
    {
        "name": "Kiditos Pop It Backpack, Synthetic & Silicon Casual Backpack for Kids, Waterproof Fabric, Unicorn Backpack, Mini Pop It Ba...",
        "ratings": 4.3,
        "no_of_ratings": 20,
        "discount_price": 599.0,
        "actual_price": 1599.0
    },
    {
        "name": "Vedu Creation Stylish Boxer Shorts for Men - Soft Cool Latest Print Cotton Boxers Sizes S M L XL for Casual, Beachwear, Tr...",
        "ratings": 3.7,
        "no_of_ratings": 14,
        "discount_price": 500.0,
        "actual_price": 1111.0
    },
    {
        "name": "Istyle Can Sleeveless Spaghetti Strap Color Block V Neck Women's Crop Top",
        "ratings": 3.3,
        "no_of_ratings": 13,
        "discount_price": 309.0,
        "actual_price": 999.0
    },
    {
        "name": "MIXEN Lunch Bag Cute Little Panda Soft Insulation Freezer Bag Reusable Waterproof Foldable Easy to Clean for Women, Studen...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 349.0,
        "actual_price": 799.0
    },
    {
        "name": "JPT Foam Lance Adaptor (for Bosch)",
        "ratings": 4.1,
        "no_of_ratings": 171,
        "discount_price": 798.0,
        "actual_price": 1999.0
    },
    {
        "name": "KIARVI GALLERY Analogue Moon Dial Unique Designer Leather Strap Women's and Girl's Watch",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 215.0,
        "actual_price": 999.0
    },
    {
        "name": "LANDMARK LM BH132 in-Ear True Wireless Earbuds (TWS) with Bass Sound, Bluetooth 5.0, 30Hrs Playtime, Passive Noise Cancell...",
        "ratings": 3.4,
        "no_of_ratings": 14,
        "discount_price": 1299.0,
        "actual_price": 2499.0
    },
    {
        "name": "Colorplus Men Casual Shirt",
        "ratings": 3.9,
        "no_of_ratings": 4,
        "discount_price": 979.0,
        "actual_price": 1899.0
    },
    {
        "name": "Usha Trienergy+ 800 Watt Powerful 100% Copper Motor 4 Jar Mixer Grinder with Unique QuadriFlow Square Blender Jar for Fast...",
        "ratings": 4.0,
        "no_of_ratings": 972,
        "discount_price": 4300.0,
        "actual_price": 7190.0
    },
    {
        "name": "amiciSense Digital Weather Station, Thermometer Hygrometer for Indoor Temperature and Humidity Monitoring with Touch Displ...",
        "ratings": 4.2,
        "no_of_ratings": 500,
        "discount_price": 1187.01,
        "actual_price": 1800.0
    },
    {
        "name": "Desi belle Women's Regular Fit T-Shirt",
        "ratings": 3.6,
        "no_of_ratings": 96,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Astberg Ventilation Astberg Outer Cowl Steel 6 inches (150mm)",
        "ratings": 4.4,
        "no_of_ratings": 25,
        "discount_price": 1100.0,
        "actual_price": 2999.0
    },
    {
        "name": "ROUXOUS Combo Offer! Women Babydoll Nightwear Lace Bra Panty Lingerie Set",
        "ratings": 3.7,
        "no_of_ratings": 27,
        "discount_price": 279.0,
        "actual_price": 699.0
    },
    {
        "name": "Phalin Women's Satin Solid Knee Length Nighty with Robe (rnew_fnew_34_free_Grey_Grey_Free Size)",
        "ratings": 3.8,
        "no_of_ratings": 19,
        "discount_price": 379.0,
        "actual_price": 1448.0
    },
    {
        "name": "Onlymat Coir Doormat Long-Lasting, Heavy-Duty, Weather Resistant Entryway Rug Coco Coir with Vinyl Backing for Indoor & Co...",
        "ratings": 3.8,
        "no_of_ratings": 16,
        "discount_price": 899.0,
        "actual_price": 1100.0
    },
    {
        "name": "Suruthi Women's Cotton Camisole (Pack of 3)",
        "ratings": 3.6,
        "no_of_ratings": 170,
        "discount_price": 400.0,
        "actual_price": 749.0
    },
    {
        "name": "Kuchipoo Boys Regular Fit Winterwear Sweatshirts (KUC-SWT-125, Multi-Colored)",
        "ratings": 4.5,
        "no_of_ratings": 12,
        "discount_price": 699.0,
        "actual_price": 1899.0
    },
    {
        "name": "ILU ® Feathers Dream Catcher with Lights, Wall Hangings, Crafts, Home Decor, Handmade for Bedroom, Balcony, Garden, Party,...",
        "ratings": 4.2,
        "no_of_ratings": 597,
        "discount_price": 275.0,
        "actual_price": 599.0
    },
    {
        "name": "WAZSAMG WZ-01 Wireless Bluetooth In Ear Neckband Earphone with Mic (Black)",
        "ratings": 3.1,
        "no_of_ratings": 11,
        "discount_price": 398.0,
        "actual_price": 1599.0
    },
    {
        "name": "OTOROYS Metal CNC Bike Mount Holder Navigation 360 Degree Rotation Mirror Cradle for All Smartphones Bicycle, Motorcycle, ...",
        "ratings": 3.5,
        "no_of_ratings": 380,
        "discount_price": 265.0,
        "actual_price": 349.0
    },
    {
        "name": "Your's Shopekart Heavy Duty Refrigerator Stand Suitable for All Brand Single Door/Double Door Refrigerators, 150-292 L (Ma...",
        "ratings": 4.0,
        "no_of_ratings": 1822,
        "discount_price": 499.0,
        "actual_price": 899.0
    },
    {
        "name": "VIPREKHO Outdoor Cooking Hand Crank Powered Barbecue Charcoal Grill BBQ Fan Air Blower Charcoal Grill",
        "ratings": 2.5,
        "no_of_ratings": 14,
        "discount_price": 299.0,
        "actual_price": 869.0
    },
    {
        "name": "Serein Women's Polyester Casual Shrug Sweater",
        "ratings": 3.1,
        "no_of_ratings": 15,
        "discount_price": 289.0,
        "actual_price": 1999.0
    },
    {
        "name": "Miraan Cotton Printed Readymade Salwar Suit For Women(MIRAANSGPRI418, Red)",
        "ratings": 3.8,
        "no_of_ratings": 309,
        "discount_price": 845.0,
        "actual_price": 3330.0
    },
    {
        "name": "Dxn Lemonzhi Powder (500 gm)",
        "ratings": 4.3,
        "no_of_ratings": 19,
        "discount_price": 480.0,
        "actual_price": 570.0
    },
    {
        "name": "Vaseline Blue Seal Original Baby Gentle Protective Jelly 100ml",
        "ratings": 4.5,
        "no_of_ratings": 200,
        "discount_price": 430.0,
        "actual_price": 499.0
    },
    {
        "name": "Womanista Women's Crepe Embellished Ready to Wear Saree (FS9979_Red_OneSize)",
        "ratings": 4.0,
        "no_of_ratings": 165,
        "discount_price": 1979.0,
        "actual_price": 6049.0
    },
    {
        "name": "PULP MVP Daily Primer + Sunscreen SPF 50 for men and women Non-Greasy Mattifying Effect Suitable for Combination Skin 50ml",
        "ratings": 3.9,
        "no_of_ratings": 14,
        "discount_price": 844.0,
        "actual_price": 1299.0
    },
    {
        "name": "BC-QZ1 Camera Battery Charger for NP-FZ100 Battery Pack (Black)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 2149.0,
        "actual_price": 3999.0
    },
    {
        "name": "Panasonic Rice Cooker - Black, Multicolour SR-WA18H(BBW) - 1.8 Liters",
        "ratings": 4.0,
        "no_of_ratings": 76,
        "discount_price": 2889.0,
        "actual_price": 3195.0
    },
    {
        "name": "P.C. Perry Collection_Women Fancy Simple and Sober Hosiery Cartoons Print Long T Shirt for Regular Walk,Indoor and Outdoor...",
        "ratings": 3.3,
        "no_of_ratings": 6,
        "discount_price": 449.0,
        "actual_price": 1559.0
    },
    {
        "name": "M MODDY Women's Slim Fit 5 Button Jeans",
        "ratings": 4.0,
        "no_of_ratings": 765,
        "discount_price": 750.0,
        "actual_price": 1299.0
    },
    {
        "name": "SKMT snap Hook Lock, snap Hook for Rope, Stainless Steel Spring Snap Hook Carabiner (Silver), Outdoor Sports Carabiner sna...",
        "ratings": 4.2,
        "no_of_ratings": 69,
        "discount_price": 199.0,
        "actual_price": 899.0
    },
    {
        "name": "Poplins Cute Panda Eye Blind Sleeping Eye Mask Slip Night Sleep Eye White and Black Super Soft & Smooth Travel Masks for M...",
        "ratings": 3.7,
        "no_of_ratings": 55,
        "discount_price": 175.0,
        "actual_price": 799.0
    },
    {
        "name": "Earphones Wired for Xiaomi Mi 11 Ultra Earphone Original Like Wired Stereo Deep Bass Head Hands-free Headset Earbud With B...",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "SHOPEE HDMI to Mini HDMI Converter Adapter Mini HDMI Adapter HDMI V1.4 Ethernet 1080P",
        "ratings": 3.8,
        "no_of_ratings": 48,
        "discount_price": 170.0,
        "actual_price": 500.0
    },
    {
        "name": "Vogue Hair Accessories Women's Printed Nylon Fabric Knot Metal Hairband for Women, Pack of 1 - Black",
        "ratings": 4.0,
        "no_of_ratings": 705,
        "discount_price": 279.0,
        "actual_price": 999.0
    },
    {
        "name": "Padam Natural Wood Charcoal for Barbecue/Angeethi (Use in Odor Remover for Home, Kitchen & Garden) 2KG",
        "ratings": 4.3,
        "no_of_ratings": 4,
        "discount_price": 289.0,
        "actual_price": 900.0
    },
    {
        "name": "Urali Women's Cotton Floral Maxi Length Kaftan (N245-106--Kaftan-Tulip-DarkMehndi_Dark Mehndi_Free Size)",
        "ratings": 4.1,
        "no_of_ratings": 12,
        "discount_price": 985.0,
        "actual_price": 1999.0
    },
    {
        "name": "Aeropostale Men's Jora Sneakers",
        "ratings": 3.4,
        "no_of_ratings": 50,
        "discount_price": 1828.0,
        "actual_price": 2799.0
    },
    {
        "name": "Cello SS and Plastic Telescopic Double Blade Bathroom Wiper (Red)",
        "ratings": 3.9,
        "no_of_ratings": 482,
        "discount_price": 597.0,
        "actual_price": 699.0
    },
    {
        "name": "Pepe Jeans Men's Slim Jeans",
        "ratings": 3.3,
        "no_of_ratings": 15,
        "discount_price": 1671.05,
        "actual_price": 3999.0
    },
    {
        "name": "ADRO Just Be Cool Design Printed T-Shirts for Men & Women",
        "ratings": 3.5,
        "no_of_ratings": 90,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "PowerLocus Kids Headphones Over-Ear, Bluetooth Wireless Headphones for Kids,with Microphone, Safe 85DB Volume Limited, Fol...",
        "ratings": 4.5,
        "no_of_ratings": 3632,
        "discount_price": 7068.0,
        "actual_price": 10068.0
    },
    {
        "name": "PDENT Women's Plain Solid Cotton Dupatta Chunnis Pack of 8",
        "ratings": 3.4,
        "no_of_ratings": 9,
        "discount_price": 1049.0,
        "actual_price": 3999.0
    },
    {
        "name": "GraspaDeal RG58 Coaxial Cable with BNC Male to BNC Male Connectors 50 Ohm- 2 Mtr.",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 499.0,
        "actual_price": 799.0
    },
    {
        "name": "Wearific Black & White Women's Viscose Innerwear Top, Half-Sleeves, Sizes S-XL",
        "ratings": 3.4,
        "no_of_ratings": 47,
        "discount_price": 383.0,
        "actual_price": 799.0
    },
    {
        "name": "Max Girls Solid Knit Elasticated Leggings",
        "ratings": 4.2,
        "no_of_ratings": 65,
        "discount_price": 139.0,
        "actual_price": 199.0
    },
    {
        "name": "Jenna™ 100% Natural Silk and Fur Reversible Sleep Mask Cover for Insomnia, Puffy Eyes and Dark Circles (Grey)",
        "ratings": 4.0,
        "no_of_ratings": 63,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "LOUIS STITCH Men's High Ankle Boots Italian Leather Handcrafted Shoes for Men Biking Hiking Trekking Solid",
        "ratings": 4.6,
        "no_of_ratings": 2,
        "discount_price": 2499.0,
        "actual_price": 8999.0
    },
    {
        "name": "Rupa Men's 77 Hunk Vest (Colors & Print May Vary) , Assorted, 90",
        "ratings": 3.7,
        "no_of_ratings": 7,
        "discount_price": 149.0,
        "actual_price": 201.0
    },
    {
        "name": "boAt Stone 1200 14W Bluetooth Speaker with Upto 9 Hours Battery, RGB LEDs, IPX7 and TWS Feature(Jazzy Blue)",
        "ratings": 4.2,
        "no_of_ratings": 15462,
        "discount_price": 3699.0,
        "actual_price": 6990.0
    },
    {
        "name": "Teczest Stainless Steel Mahindra Car Logo Metallic Car Keychain/Keyring Silver Plated Chrome Finish",
        "ratings": 3.4,
        "no_of_ratings": 4,
        "discount_price": 197.0,
        "actual_price": 499.0
    },
    {
        "name": "Milton Pro Cook Stainless Steel Sandwich Bottom Induction Sauce/Tea Pan with Glass Lid, 18 cm / 2.3 Litres, Steel Plain | ...",
        "ratings": 4.1,
        "no_of_ratings": 175,
        "discount_price": 896.0,
        "actual_price": 1195.0
    },
    {
        "name": "Mallory Winston Women Lace Solid Above Knee Babydoll Lingerie Set",
        "ratings": 3.3,
        "no_of_ratings": 120,
        "discount_price": 249.0,
        "actual_price": 999.0
    },
    {
        "name": "Yellow Chimes Bracelet For Men and Women Black PU Leather Silver Designed Bracelet For Unisex",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 272.0,
        "actual_price": 648.0
    },
    {
        "name": "Yashika Womens Printed Georgette Saree With Blouse Piece",
        "ratings": 4.1,
        "no_of_ratings": 8,
        "discount_price": 279.0,
        "actual_price": 1499.0
    },
    {
        "name": "Luminous NXG 1150 Pure Sinewave Solar Inverter with ISOT Technology, Intelligent Load Sharing for Home, Office, and Shops...",
        "ratings": 4.0,
        "no_of_ratings": 346,
        "discount_price": 7450.0,
        "actual_price": 11500.0
    },
    {
        "name": "Yash Gallery Women Dress",
        "ratings": 3.6,
        "no_of_ratings": 112,
        "discount_price": 459.0,
        "actual_price": 1299.0
    },
    {
        "name": "Newly Launched Fire_Bolt Ring 3 Smart Watch Charging Cable USB Fast Charger Magnetic Charging Cable Adapter (Charger only ...",
        "ratings": 1.8,
        "no_of_ratings": 11,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Baggit Women's Bowling Handbag - Small",
        "ratings": 3.4,
        "no_of_ratings": 11,
        "discount_price": 856.0,
        "actual_price": 1990.0
    },
    {
        "name": "OZJI Men Casual X CONVER HIGH TOP Sneaker for Men",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 2299.0
    },
    {
        "name": "Sindhi Footwear Womens Ballet Flats",
        "ratings": 3.0,
        "no_of_ratings": 6,
        "discount_price": 435.0,
        "actual_price": 799.0
    },
    {
        "name": "ADRO The Stronger T-Shirt for Men",
        "ratings": 3.8,
        "no_of_ratings": 114,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Sukkhi Glorious Gold Plated Wedding Jewellery Pearl Choker Necklace Set For Women (2719NGLDPP1250_D3)",
        "ratings": 3.4,
        "no_of_ratings": 102,
        "discount_price": 238.0,
        "actual_price": 2156.0
    },
    {
        "name": "Shoefly Men Black-795 Casual Sneakers Shoes.",
        "ratings": 2.8,
        "no_of_ratings": 9,
        "discount_price": 378.0,
        "actual_price": 499.0
    },
    {
        "name": "OM Dum Durgayei Namaha (Durga Devi Mantra)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 450.0,
        "actual_price": 599.0
    },
    {
        "name": "Red Chief Leather Without Lace Formal Shoes for Men RC3512",
        "ratings": 3.8,
        "no_of_ratings": 682,
        "discount_price": 2116.0,
        "actual_price": 4599.0
    },
    {
        "name": "Reiki Crystal Products Certified Carnelian Mala/Necklace Natural Crystal Stone Reiki Healing Chip Bead Mala. Charged By Re...",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 524.0,
        "actual_price": 825.0
    },
    {
        "name": "Peora Gold Plated Copper Jaipur Enamel Traditional Moon Shape Ring for Women",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 549.0,
        "actual_price": 3345.0
    },
    {
        "name": "ETEX Mens' Shirts, Digital Printed Half Sleeves Shirts for Men, Rayon Cotton (Dark Green, XXL)",
        "ratings": 2.3,
        "no_of_ratings": 5,
        "discount_price": 349.0,
        "actual_price": 2599.0
    },
    {
        "name": "CP PLUS Wired 5MP Security Camera",
        "ratings": 3.3,
        "no_of_ratings": 37,
        "discount_price": 21200.0,
        "actual_price": 46000.0
    },
    {
        "name": "ESBEDA Navy Blue Colour Twill Wallet For Women",
        "ratings": 2.9,
        "no_of_ratings": 2,
        "discount_price": 740.0,
        "actual_price": 1180.0
    },
    {
        "name": "Titan HTSE 3 Analog Black Dial Women's Watch-2525NL02 / 2525NL02",
        "ratings": 2.1,
        "no_of_ratings": 7,
        "discount_price": 9039.0,
        "actual_price": 12995.0
    },
    {
        "name": "CRUST CS45 Car Bluetooth Device for Music System, FM Transmitter with Call Receiver; (PD 20W + QC3.0) Fast Charger; Real T...",
        "ratings": 4.9,
        "no_of_ratings": 13,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "GLink Gold-Plated Soft PVC High-Speed HDMI Cable (15M. / 46 FT.) | Supports Ethernet 1.4V, 3D, 4K video,1080P (Black) (GL-...",
        "ratings": 3.9,
        "no_of_ratings": 21,
        "discount_price": 749.0,
        "actual_price": 899.0
    },
    {
        "name": "ANNI DESIGNER Women's Cotton Blend Regular Shirt",
        "ratings": 3.5,
        "no_of_ratings": 360,
        "discount_price": 419.0,
        "actual_price": 2599.0
    },
    {
        "name": "VTS® DSLR Camera Backpack Bag Waterproof Shock Proof for Lens Accessories Tripod Monopod Heavy Duty and Video Camera for D...",
        "ratings": 4.0,
        "no_of_ratings": 485,
        "discount_price": 2499.0,
        "actual_price": 6000.0
    },
    {
        "name": "SupCares Edge to Edge Privacy Tempered Glass for iPhone 11 and iPhone XR (6.1 Inch) with Easy Self Installation Kit | Black",
        "ratings": 3.8,
        "no_of_ratings": 51,
        "discount_price": 399.0,
        "actual_price": 799.0
    },
    {
        "name": "JONAYA Cotton Flex Ankle Length Regular Plus Size Trouser Pant for Women",
        "ratings": 4.1,
        "no_of_ratings": 21,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "LMDPRAJAPATIS 5.25 Ratti 4.50 Carat Amethyst Silver Ring Katela Original Certified Natural Amethyst Stone Ring for Men And...",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 579.0,
        "actual_price": 2890.0
    },
    {
        "name": "LipiWorld® LX176 LG73 2.1 and 5.1 Home Theater System Remote Control Compatible for LG Home Theater Remote",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 369.0,
        "actual_price": 499.0
    },
    {
        "name": "Smith & Blake Luxurious Laptop Messenger Bag Double Compartment Black Premium Leatherette | Fits upto 15.6 Inch | Manhattan",
        "ratings": 4.8,
        "no_of_ratings": 9,
        "discount_price": 6499.0,
        "actual_price": 9999.0
    },
    {
        "name": "BODYCARE Solid Men Thermal Top",
        "ratings": 4.4,
        "no_of_ratings": 11,
        "discount_price": 645.0,
        "actual_price": 665.0
    },
    {
        "name": "EUME Virgo 29L Laptop Backpack for Office & Travel | Water Resistance | Fit Up to 15.6-inch Laptop",
        "ratings": 4.1,
        "no_of_ratings": 498,
        "discount_price": 1143.0,
        "actual_price": 2809.0
    },
    {
        "name": "Sohi Studs earrings | Cute western earrings in Multi color | fashion jewellery for women|light weight earrings for women |...",
        "ratings": 2.9,
        "no_of_ratings": 34,
        "discount_price": 260.0,
        "actual_price": 525.0
    },
    {
        "name": "Zoom Shoes Men's A-4353 Leather Moccasin",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 443.23,
        "actual_price": 3399.0
    },
    {
        "name": "FALTU.CO Sweatshirt Women's Cotton Hooded Hoodies for Women Navy Blue",
        "ratings": 4.1,
        "no_of_ratings": 3,
        "discount_price": 749.0,
        "actual_price": 1499.0
    },
    {
        "name": "Vintage Round Eyewear Blue Light Blocking Eyewear Black Frame Anti Blue Light Transparent Lens",
        "ratings": 3.4,
        "no_of_ratings": 31,
        "discount_price": 5351.0,
        "actual_price": 9351.0
    },
    {
        "name": "Mirror Camera Bag Camera Backpack Waterproof Fabric, Anyprize DSLR Camera, Lens, Tripod and Camera Accessories Camera Bag ...",
        "ratings": 3.6,
        "no_of_ratings": 100,
        "discount_price": 689.0,
        "actual_price": 1599.0
    },
    {
        "name": "Sasitrends Brass Micro Gold Plated Designer Chain for Women and Girls",
        "ratings": 4.1,
        "no_of_ratings": 28,
        "discount_price": 349.0,
        "actual_price": 2500.0
    },
    {
        "name": "ehuntz Boy's and Girl's Polyester Multicolour Captain America, Avengers, Hulk, Iron Man 5D Embossed Waterproof School Bag...",
        "ratings": 3.3,
        "no_of_ratings": 7,
        "discount_price": 879.0,
        "actual_price": 1499.0
    },
    {
        "name": "Shree Shyam Women's Hosiery Nighty Purple Colour Size L/XL/XXL",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 949.0,
        "actual_price": 1799.0
    },
    {
        "name": "FITG18 Girls/Women/Ladies Stylish/Hot Shimmer Black with white & red blue stripe track pant/jogger/Tights for gym/work ou...",
        "ratings": 3.5,
        "no_of_ratings": 19,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "Spykar Men's Relaxed Fit Cotton Jeans",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 2348.0,
        "actual_price": 3099.0
    },
    {
        "name": "MEENAZ Stainless Steel Black Silver Triangle Magnetic Clip on Non Piercing pressing Hoop Bali Stud Earrings Combo pack set...",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 3000.0
    },
    {
        "name": "Reebok Men's Regular Fit T-Shirts",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 692.0,
        "actual_price": 2199.0
    },
    {
        "name": "Vitalogy - Ingrown Toenail Correction Tool with CASE | Feet Toe Nail Pedicure Corrector Lifter Fixer Toe Nail Straightener...",
        "ratings": 2.9,
        "no_of_ratings": 190,
        "discount_price": 325.0,
        "actual_price": 599.0
    },
    {
        "name": "Nutraj Special Walnut Kernels 250g - Vacuum Pack Without Shell Walnut Kernels | Dry Fruits | Akhroth Giri | Unsalted | for...",
        "ratings": 4.0,
        "no_of_ratings": 691,
        "discount_price": 417.0,
        "actual_price": 549.0
    },
    {
        "name": "AMAZOR 1 Pieces Drain Water Valve Rubber Seal Set for LG Old Model Semi Automatic Washing Machine",
        "ratings": 3.9,
        "no_of_ratings": 109,
        "discount_price": 145.0,
        "actual_price": 490.0
    },
    {
        "name": "AUTOSMARTLOOK Car 90CM Rear Windshield Brake Strip LED Red Warning Light for Maruti Baleno",
        "ratings": 2.1,
        "no_of_ratings": 4,
        "discount_price": 895.0,
        "actual_price": 1599.0
    },
    {
        "name": "ASTRID Backpack With Front Pockets For Girls",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 739.0,
        "actual_price": 1999.0
    },
    {
        "name": "VXI® Silicon Scrubbing Gloves for Hand Protection for Dish Washing, Car, Pet Care and Grooming, Bathroom Cleaning, Reusabl...",
        "ratings": 3.7,
        "no_of_ratings": 82,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "nAzAqAt Pure Kota Cotton White Chikankari Dyeable Dupatta for Women & Girls, Length 2.40 Metres and Width 1.10 Metres",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1121.0,
        "actual_price": 1599.0
    },
    {
        "name": "Yashika Women's Polyester Art Silk Kalamkari Art Silk and Bhagalpuri Saree with Blouse Piece (Multicolour)",
        "ratings": 3.6,
        "no_of_ratings": 68,
        "discount_price": 239.0,
        "actual_price": 2499.0
    },
    {
        "name": "Ernieball 9606 Axis Dual Radius Capo Gold Satin",
        "ratings": 4.7,
        "no_of_ratings": 1300,
        "discount_price": 1028.0,
        "actual_price": 1082.0
    },
    {
        "name": "Bleh Women Cotton Regular Fit Formal Blazer (Black)",
        "ratings": 3.0,
        "no_of_ratings": 7,
        "discount_price": 2699.0,
        "actual_price": 3899.0
    },
    {
        "name": "Women's Handbag",
        "ratings": 3.6,
        "no_of_ratings": 66,
        "discount_price": 325.0,
        "actual_price": 500.0
    },
    {
        "name": "ACPL Precious Moments Colorful Peacock 999 Pure Silver Coin",
        "ratings": 4.3,
        "no_of_ratings": 95,
        "discount_price": 1299.0,
        "actual_price": 1500.0
    },
    {
        "name": "Satrani Women's Printed Georgette Saree with Unstitched Blouse Piece(_",
        "ratings": 4.7,
        "no_of_ratings": 3,
        "discount_price": 379.0,
        "actual_price": 1156.0
    },
    {
        "name": "GIVA 925 Sterling Silver Zircon Blooming Flower Earrings | Studs to Gift Women & Girls | With Certificate of Authenticity ...",
        "ratings": 4.6,
        "no_of_ratings": 7,
        "discount_price": 1614.0,
        "actual_price": 3399.0
    },
    {
        "name": "Buy That Trendz Women's Cotton Printed Night Suit",
        "ratings": 3.6,
        "no_of_ratings": 422,
        "discount_price": 799.0,
        "actual_price": 1699.0
    },
    {
        "name": "Liberty Kids FLYNN-29 Casual Sandal",
        "ratings": 4.3,
        "no_of_ratings": 4,
        "discount_price": 471.0,
        "actual_price": 699.0
    },
    {
        "name": "BigPlayer Smart Wired Type C Earphone with Mic, HD bass and HiFi Stereo Sports Design Type C Earphones, Compatible for All...",
        "ratings": 3.2,
        "no_of_ratings": 8,
        "discount_price": 649.0,
        "actual_price": 999.0
    },
    {
        "name": "Usha 3302 Gold 1100 W Lightweight Dry Iron with Black American Heritage Soleplate (Galaxy Blue)",
        "ratings": 4.2,
        "no_of_ratings": 3868,
        "discount_price": 820.0,
        "actual_price": 1150.0
    },
    {
        "name": "GoSriKi Women's Cotton Blend Printed Straight Kurta with Pant & Dupatta (Rinki-GO)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 2599.0
    },
    {
        "name": "Scizor Insulated Reusable Lunch Bag,Waterproof Leakproof Lunch Bag,Durable Lunch Bag for Women/Kids/Men, Insulated Lunch C...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "2022 New Cleaner Kit for Airpods Pro and 1/2 Multifunction Cleaning Pen with Soft Brush for Bluetooth Earphones Case (whit...",
        "ratings": 4.5,
        "no_of_ratings": 335,
        "discount_price": 125.0,
        "actual_price": 300.0
    },
    {
        "name": "Synqe USB Type C Fast Charging Data Cable Compatible with Samsung Galaxy M21 M51 M31 M52 5G M12 M53 5G M33 5G M32 S20 FE 5...",
        "ratings": 4.3,
        "no_of_ratings": 3178,
        "discount_price": 329.0,
        "actual_price": 1099.0
    },
    {
        "name": "SAMTROH Artificial/PU Leather Clutch Wallet for Women's (Tan)",
        "ratings": 4.2,
        "no_of_ratings": 13,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Unived Rise & Grind | Vegan Pea Protein for Athletes | Informed Sport Certified | 25g Pea Protein 140mg Nitrates, B-Vitami...",
        "ratings": 4.0,
        "no_of_ratings": 12,
        "discount_price": 2475.0,
        "actual_price": 2750.0
    },
    {
        "name": "Women's & Girl's Patiala Salwar Pant",
        "ratings": 3.8,
        "no_of_ratings": 141,
        "discount_price": 299.0,
        "actual_price": 899.0
    },
    {
        "name": "Maheshvi Women's High Waist Bell Bottom Trouser, Elastic Flared Bootcut Pants, Stretchy Parallel Leg for Casual Office Wor...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 399.0
    },
    {
        "name": "Oraimo Vortex 2S Optimized Sound Metal in-Ear Wired Earphones with Remote Control & Microphone, Black",
        "ratings": 3.9,
        "no_of_ratings": 707,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "Milano Home Sleepwear Cotton Boyfriend Nightshirt Sleepshirt for Women and Girls",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 1500.0
    },
    {
        "name": "STYLEYOO Lace-UP Genuine Leather Formal Shoes for Men |STYS007|",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 3999.0
    },
    {
        "name": "BELLISSA PU Leather Combo Handbag for Women (Blue)",
        "ratings": 4.1,
        "no_of_ratings": 46,
        "discount_price": 1619.0,
        "actual_price": 4998.0
    },
    {
        "name": "XYXX Athleisure Men's Cotton Joggers | Antimicrobial, Peach Finish, Extra Sweat Absorbent Loungewear | Regular Fit Solid H...",
        "ratings": 4.0,
        "no_of_ratings": 133,
        "discount_price": 999.0,
        "actual_price": 1499.0
    },
    {
        "name": "Puma Unisex-Adult Ferrari A3rocat Sneaker",
        "ratings": 3.8,
        "no_of_ratings": 45,
        "discount_price": 5599.0,
        "actual_price": 7999.0
    },
    {
        "name": "ThreeH Stick Umbrella Windproof and Rainproof Bamboo Hook Handle Auto Open Protable Lightweight KS08,Black",
        "ratings": 4.3,
        "no_of_ratings": 277,
        "discount_price": 2199.0,
        "actual_price": 2749.0
    },
    {
        "name": "Beera Women Pleated Mini Skirt Solid Ruffle Lingerie Skirts Sexy Babydoll Lingerie Honeymoon/First Night/Anniversary",
        "ratings": 3.3,
        "no_of_ratings": 35,
        "discount_price": 303.05,
        "actual_price": 999.0
    },
    {
        "name": "Amazon Brand Solimo Laundry Basket with Lid, 55 Litres, Matte Brown",
        "ratings": 3.1,
        "no_of_ratings": 18,
        "discount_price": 829.0,
        "actual_price": 1059.0
    },
    {
        "name": "Tee Mafia Unisex Manchester United Football Combo of Sipper and T-Shirts| Manchester unitedT-Shirt| Manchester United Sipper",
        "ratings": 3.7,
        "no_of_ratings": 36,
        "discount_price": 649.0,
        "actual_price": 1599.0
    },
    {
        "name": "The Gifti Cotton Prayer Mat/Aasan/Pooja Mat/Meditation Mat/Multipurpose Use Pack of 4 (Blue Colour)",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 399.0,
        "actual_price": 749.0
    },
    {
        "name": "Yellow Chimes Chain for Men Golden Chain for Boys Classic Stainless Steel Spiga/Wheat Chain Interlinked Neck Chain for Men...",
        "ratings": 3.6,
        "no_of_ratings": 30,
        "discount_price": 299.0,
        "actual_price": 996.0
    },
    {
        "name": "ATOM A 102 Notebook 1kg (1000gram) x 0.01g (10mg)| Digital Jewellery Weighing Scale| Used in Gold & Silver ornaments and v...",
        "ratings": 3.6,
        "no_of_ratings": 63,
        "discount_price": 914.0,
        "actual_price": 1999.0
    },
    {
        "name": "Pervas Women's Banarasi Silk Saree Pure Kanjivaram Silk Saree Sarees With Blouse Piece (paithani Zigzag)",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 749.0,
        "actual_price": 999.0
    },
    {
        "name": "Lee Star 650 Watts Atta Kneader/Dough Kneader with Stainless Steel Bowl, White - LE-837",
        "ratings": 5.0,
        "no_of_ratings": 4,
        "discount_price": 4275.0,
        "actual_price": 5890.0
    },
    {
        "name": "MAXOBULL Base BT-24 Bluetooth 5.0 Explosive Bass IPX 5.0 Water Resistance Bluetooth Hands Free with in lin hd Mic,Bluetoot...",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 824.0,
        "actual_price": 1999.0
    },
    {
        "name": "Selvia Women's Poly Viscose Solid Regular Fit Shirt",
        "ratings": 3.7,
        "no_of_ratings": 63,
        "discount_price": 269.0,
        "actual_price": 1237.0
    },
    {
        "name": "Campus Boys Norton Running Shoe",
        "ratings": 3.8,
        "no_of_ratings": 10,
        "discount_price": 679.0,
        "actual_price": 899.0
    },
    {
        "name": "GO GULABI Women's Printed Rayon Gown | Anarkali Flared Kurta for Women | Full Length Stitched",
        "ratings": 3.5,
        "no_of_ratings": 291,
        "discount_price": 689.0,
        "actual_price": 1999.0
    },
    {
        "name": "Power Mens Casual Shoes",
        "ratings": 4.1,
        "no_of_ratings": 36,
        "discount_price": 933.28,
        "actual_price": 1499.0
    },
    {
        "name": "ANNI DESIGNER Women's Cotton Straight Kurta with Palazzo & Dupatta (DHOLI Pink)",
        "ratings": 3.8,
        "no_of_ratings": 354,
        "discount_price": 649.0,
        "actual_price": 2599.0
    },
    {
        "name": "Oncro ® Short Usb Cable, Micro Usb Cable Fast Charging, Power Bank Cable Micro Usb Short Length, Mini Small Powerbank Cabl...",
        "ratings": 3.8,
        "no_of_ratings": 828,
        "discount_price": 225.0,
        "actual_price": 445.0
    },
    {
        "name": "Watch City Girl Watch Analogue Round White Dial Leather Band Quartz Women's and Girl's Watch for Gifte",
        "ratings": 4.1,
        "no_of_ratings": 3,
        "discount_price": 249.0,
        "actual_price": 499.0
    },
    {
        "name": "Campus Men's Gilbert Plus Running Shoes",
        "ratings": 3.9,
        "no_of_ratings": 1190,
        "discount_price": 659.0,
        "actual_price": 1199.0
    },
    {
        "name": "NAYRAH Women's Rayon Floral Print Regular Wear Top",
        "ratings": 3.9,
        "no_of_ratings": 85,
        "discount_price": 498.0,
        "actual_price": 1499.0
    },
    {
        "name": "The Banyan Tee Half Sleeve Premium Printed Cotton Music T-Shirt Style Code: TBT-M_LP_Living_THNGS_W",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "ORICO IF Certified USB4 Cable Compatible with Thunderbolt 3, 40Gbps USB C Cable 2.62Ft, 100W PD, 8K@60Hz（Dual 4K@ 60Hz for...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1999.0,
        "actual_price": 2999.0
    },
    {
        "name": "Pujia Mills women's embroidery handwork multi work peacock design readymade blouse",
        "ratings": 3.4,
        "no_of_ratings": 66,
        "discount_price": 409.0,
        "actual_price": 3000.0
    },
    {
        "name": "Mist Jute Yoga Print Eco-Friendly Bag, 14.5x5x12 inches (Beige, 2PK 14.5x5x12\" YogaPrint Jute Bag- Beige) - Pack of 2 (2)",
        "ratings": 4.1,
        "no_of_ratings": 1150,
        "discount_price": 349.0,
        "actual_price": 499.0
    },
    {
        "name": "Sony MDR-XB450AP Headphones with Extra Bass (Blue)",
        "ratings": 4.4,
        "no_of_ratings": 246,
        "discount_price": 2465.0,
        "actual_price": 2490.0
    },
    {
        "name": "Gold Chain Golden Gold Plated Light Weight Simple Chain 24 Inches Unisex Chain by GoldNera",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 199.0,
        "actual_price": 999.0
    },
    {
        "name": "Amazon Brand – Umi Cotton Single Quilt Cover Blanket Cover Razai Duvet Cover Comforter Cover for Single Size Duvets with Z...",
        "ratings": 3.9,
        "no_of_ratings": 6,
        "discount_price": 659.0,
        "actual_price": 1999.0
    },
    {
        "name": "Royal Enfield Solid Cotton Mens Casual Shirt (Blue, Extra Large)",
        "ratings": 4.6,
        "no_of_ratings": 6,
        "discount_price": 1440.0,
        "actual_price": 2400.0
    },
    {
        "name": "Dashmesh Shopping® Wireless Earphones Neckband Magnetic Bluetooth Headphones - Full Black (Black Red)",
        "ratings": 3.2,
        "no_of_ratings": 17,
        "discount_price": 299.0,
        "actual_price": 2999.0
    },
    {
        "name": "BEYOND BEAUTY 6 Strap Padded Bra(Removable Pads) Free Size Light Pink Color",
        "ratings": 3.2,
        "no_of_ratings": 17,
        "discount_price": 168.0,
        "actual_price": 501.0
    },
    {
        "name": "Hidesign Women's Tote (Red)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 3205.98,
        "actual_price": 7995.0
    },
    {
        "name": "Red Tape Men Stone Blue Printed T-Shirt",
        "ratings": 3.9,
        "no_of_ratings": 11,
        "discount_price": 479.0,
        "actual_price": 1599.0
    },
    {
        "name": "freshcant Compact Moisture Absorber, Dehumidifier, Refresh Every Place (Fragrance Lavender, Weight: 400 ml)",
        "ratings": 3.7,
        "no_of_ratings": 192,
        "discount_price": 225.0,
        "actual_price": 293.0
    },
    {
        "name": "CIPZI Free Size Premium Waist Belt Elastic Band Weight Loss Flat Belly Belt Body Shaper Abdominal Belt After Delivery for ...",
        "ratings": 4.6,
        "no_of_ratings": 45,
        "discount_price": 549.0,
        "actual_price": 1999.0
    },
    {
        "name": "DOUBLE R BAGS Big Eco Cotton Canvas Shopping Bags for Carry Milk Grocery Fruits Vegetable with Reinforced Handles jhola Ba...",
        "ratings": 4.2,
        "no_of_ratings": 142,
        "discount_price": 713.0,
        "actual_price": 1999.0
    },
    {
        "name": "10W to 65W Type-C USB Cable for Samsung Galaxy M31 / M 31 USB Cable Original Like Charger Cable | Quick, Dash, Warp, Dart,...",
        "ratings": 2.5,
        "no_of_ratings": 5,
        "discount_price": 279.0,
        "actual_price": 349.0
    },
    {
        "name": "Nirja Creation Women silk Cotton Saree With Blouse",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 865.0,
        "actual_price": 2999.0
    },
    {
        "name": "Kuber Industries Marvel Spider-Man School Bag|2 Compartment Rexine School Bagpack|School Bag for Kids|School Bags for Girl...",
        "ratings": 5.0,
        "no_of_ratings": 7,
        "discount_price": 578.0,
        "actual_price": 699.0
    },
    {
        "name": "Janasya Women's Brown Poly Crepe Kurta",
        "ratings": 3.6,
        "no_of_ratings": 31,
        "discount_price": 379.0,
        "actual_price": 1499.0
    },
    {
        "name": "NIXON Time Teller OPP A1361-100m Water Resistant Unisex Analog Fashion Watch (40mm Watch Face, 20mm PU/Rubber/Silicone Band)",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 19795.0,
        "actual_price": 24795.0
    },
    {
        "name": "Snallparts Bikini Set Non-Padded Bra & Panty|Nightwear Hot & Sexy for Couples Honeymoon/First Night/Anniversary",
        "ratings": 4.5,
        "no_of_ratings": 5,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "MMTC-PAMP 999.9 Purity 20 gm Ganesha Silver Coin",
        "ratings": 4.5,
        "no_of_ratings": 30,
        "discount_price": 2095.0,
        "actual_price": 3000.0
    },
    {
        "name": "SOLO Men's Cotton Briefs (Pack of 2)",
        "ratings": 3.4,
        "no_of_ratings": 20,
        "discount_price": 313.0,
        "actual_price": 449.0
    },
    {
        "name": "DUDAO GU9 One Click Retractable Bluetooth Earpiece, Collar Clip Single Earbuds with Microphone Bluetooth V5.0, 200H Standb...",
        "ratings": 2.2,
        "no_of_ratings": 3,
        "discount_price": 1424.05,
        "actual_price": 3999.0
    },
    {
        "name": "AADI Women's EVA Daily Casual Shoes MRJ1923",
        "ratings": 3.6,
        "no_of_ratings": 826,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "DJS Fashionable Trendy PU lather Fancy Sling Bag For Women and Girls",
        "ratings": 4.0,
        "no_of_ratings": 4,
        "discount_price": 495.0,
        "actual_price": 799.0
    },
    {
        "name": "Panasonic 1.5 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper, 7 in 1 Convertible with additional AI Mode, 4 Way Swing, n...",
        "ratings": 4.4,
        "no_of_ratings": 118,
        "discount_price": 54490.0,
        "actual_price": 76900.0
    },
    {
        "name": "Parampara kempu Nosepin",
        "ratings": 4.1,
        "no_of_ratings": 5,
        "discount_price": 230.0,
        "actual_price": 320.0
    },
    {
        "name": "Cycle Hub Alloy 36 Spoke Hole Front and Rear Threaded Hub Combo - Black",
        "ratings": 3.4,
        "no_of_ratings": 5,
        "discount_price": 348.0,
        "actual_price": 499.0
    },
    {
        "name": "I Jewels Traditional Ethnic Indian Kundan Dulhan Bridal Jewellery Set for Women",
        "ratings": 3.8,
        "no_of_ratings": 241,
        "discount_price": 1999.0,
        "actual_price": 9999.0
    },
    {
        "name": "Cherry Crumble California Kids Girl's Little Black Polyester Dress (CTWS-PDRS-Z5218_Black)",
        "ratings": 4.0,
        "no_of_ratings": 16,
        "discount_price": 1070.0,
        "actual_price": 2549.0
    },
    {
        "name": "7SEVEN® Compatible Original AC Remote Control for Electrolux air Conditioner for Split and Window AC - Existing Remote Mod...",
        "ratings": 3.9,
        "no_of_ratings": 10,
        "discount_price": 399.0,
        "actual_price": 799.0
    },
    {
        "name": "W for Woman Women's Regular Fit Carrot Pants",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 711.19,
        "actual_price": 1699.0
    },
    {
        "name": "HiloRill Women's Polyester & Net Solid Above knee Baby Doll",
        "ratings": 3.7,
        "no_of_ratings": 692,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Reebok Men's Slim Fit Polo Shirt",
        "ratings": 4.1,
        "no_of_ratings": 100,
        "discount_price": 538.0,
        "actual_price": 1099.0
    },
    {
        "name": "Puma Unisex-Adult King Hero 21 Fg Football Shoe",
        "ratings": 4.4,
        "no_of_ratings": 74,
        "discount_price": 4019.0,
        "actual_price": 5999.0
    },
    {
        "name": "Janasya Women Cotton KURTA",
        "ratings": 4.2,
        "no_of_ratings": 1202,
        "discount_price": 720.0,
        "actual_price": 1599.0
    },
    {
        "name": "MiEstilo Women's Cotton Blend Non-Padded Wirefree Maternity/Nursing Bra Combo",
        "ratings": 4.1,
        "no_of_ratings": 1834,
        "discount_price": 469.0,
        "actual_price": 1999.0
    },
    {
        "name": "VIMAL JONNEY Dryfit Lycra Solid Multicolor T-Shirt for Women (Pack of 2)-Dryfit_T_BLK_BLU_002-P",
        "ratings": 3.7,
        "no_of_ratings": 271,
        "discount_price": 329.0,
        "actual_price": 1998.0
    },
    {
        "name": "Riderscart Anti-Skid Rubber Car Floor Mat with Brush for Maruti Suzuki Swift, All-Weather Protection Heavy Duty Floor Mat ...",
        "ratings": 3.7,
        "no_of_ratings": 501,
        "discount_price": 1647.0,
        "actual_price": 2299.0
    },
    {
        "name": "ACCESSHER Golden Copper Bajuband, Alloy Metal,Traditional Antique Design for Women and Girls Set of 1",
        "ratings": 3.3,
        "no_of_ratings": 4,
        "discount_price": 649.0,
        "actual_price": 2370.0
    },
    {
        "name": "KS Creations Metal Solid Dip bar with padded seats, Leg raise wall mounting Stand in Black",
        "ratings": 3.6,
        "no_of_ratings": 10,
        "discount_price": 900.0,
        "actual_price": 4500.0
    },
    {
        "name": "Handcuffs Men Women Bucket Hat Sun Hats Summer Fisherman Beach Hat",
        "ratings": 4.0,
        "no_of_ratings": 57,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "Vaamsi Women's Cotton Blend Printed Kurta Set with Dupatta (VKSKD1238_Blue)",
        "ratings": 3.7,
        "no_of_ratings": 501,
        "discount_price": 679.0,
        "actual_price": 4247.0
    },
    {
        "name": "Smoky Men's Black Formal Shoes",
        "ratings": 3.7,
        "no_of_ratings": 6,
        "discount_price": 699.0,
        "actual_price": 1099.0
    },
    {
        "name": "Ant Esports ICE-C612 with RGB CPU Cooler/Fan Support Intel LGA775, LGA1200, LGA1150, LGA1151, LGA1155, LGA1156, LGA2066, L...",
        "ratings": 4.2,
        "no_of_ratings": 904,
        "discount_price": 1509.0,
        "actual_price": 3499.0
    },
    {
        "name": "M S TECH 1080p FHD Security Camera, White",
        "ratings": 3.7,
        "no_of_ratings": 7,
        "discount_price": 2199.0,
        "actual_price": 3499.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Skinny Jeans",
        "ratings": 3.2,
        "no_of_ratings": 10,
        "discount_price": 1799.0,
        "actual_price": 3599.0
    },
    {
        "name": "Hidesign Women Wallet (Red)",
        "ratings": 4.6,
        "no_of_ratings": 42,
        "discount_price": 1779.0,
        "actual_price": 3195.0
    },
    {
        "name": "Jasvon Foundation, Eyeshadow Makeup Brush set of 10 | Natural Combo | Professional Makeup Brushes",
        "ratings": 4.7,
        "no_of_ratings": 8,
        "discount_price": 204.0,
        "actual_price": 350.0
    },
    {
        "name": "Levi's Men's 65504 Skinny Fit Jeans",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 1479.0,
        "actual_price": 4699.0
    },
    {
        "name": "Men's Stylish Sneakers for Man Shoes",
        "ratings": 2.4,
        "no_of_ratings": 4,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "Puma Men Mega Nrgy Turbo 2 Running Shoes",
        "ratings": 4.2,
        "no_of_ratings": 148,
        "discount_price": 3299.0,
        "actual_price": 5499.0
    },
    {
        "name": "Raymond Men Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 949.0,
        "actual_price": 2199.0
    },
    {
        "name": "helix Analog Brown Dial Women's Watch-TW035HL08",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1207.0,
        "actual_price": 2195.0
    },
    {
        "name": "ZAVERI PEARLS Gold Tone ShimmeRing For Women Diamonds Adjustable Finger Ring For Women-ZPFK10353",
        "ratings": 4.1,
        "no_of_ratings": 4,
        "discount_price": 252.0,
        "actual_price": 1458.0
    },
    {
        "name": "BLIVE Printed Men's Sleeveless Cotton Vest Combo (Pack of 2)",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 349.0,
        "actual_price": 2499.0
    },
    {
        "name": "AMPEREUS 5\" Cowl Cover for Kitchen Chimney Exhaust Duct Pipe",
        "ratings": 3.8,
        "no_of_ratings": 102,
        "discount_price": 220.0,
        "actual_price": 399.0
    },
    {
        "name": "Branzios Present 4 Pcs Multicolored Wall Mounted Storage Case for TV Remote, AC Remote,Toothbrush Holder, Mobile Phone Plu...",
        "ratings": 3.3,
        "no_of_ratings": 142,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "OPTIMA Laptop Backpack of OPT-262/263/273/274/1395/1396",
        "ratings": 3.9,
        "no_of_ratings": 4627,
        "discount_price": 438.0,
        "actual_price": 1399.0
    },
    {
        "name": "Golden Tips Full Leaf Pyramid Masala Chai Tea Bags (20 Bags, 40 Gram )",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 318.0,
        "actual_price": 335.0
    },
    {
        "name": "Indigifts Eye Mask For Sleeping Women Ten Min More Quote Printed Gray Eye Mask 7.8x3.3 inch - Sleeping Eye Mask For Men, E...",
        "ratings": 4.0,
        "no_of_ratings": 69,
        "discount_price": 269.0,
        "actual_price": 899.0
    },
    {
        "name": "JBL Live 100BT by Harman in-Ear Bluetooth Headphone with Bulit-in Mic, Multi-Point Connection, 9 Hours of Playtime and Voi...",
        "ratings": 3.3,
        "no_of_ratings": 18,
        "discount_price": 1994.0,
        "actual_price": 2999.0
    },
    {
        "name": "HeartInk® BTS Bangtan Boys KPOP Theme Fan Art Laptop Bag Casual School Backpack (COMBO OF 3-SIZE BAGS) - HIKBTSBGSET02",
        "ratings": 4.1,
        "no_of_ratings": 7,
        "discount_price": 1399.0,
        "actual_price": 1999.0
    },
    {
        "name": "Sona Women's Cotton Non Padded Wire Free Full Coverage Bra",
        "ratings": 3.8,
        "no_of_ratings": 221,
        "discount_price": 465.0,
        "actual_price": 490.0
    },
    {
        "name": "Krishika Women's Ethinic Long Skirt",
        "ratings": 3.9,
        "no_of_ratings": 402,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Hearty Bite Raw Pumpkin Seeds For Eating, Plant Based Protein Snack, Rich in Fibre, Antioxidants & Omega Fatty acids, Vega...",
        "ratings": 4.1,
        "no_of_ratings": 14,
        "discount_price": 216.0,
        "actual_price": 240.0
    },
    {
        "name": "CABLESETC Pro Series Toslink Digital Optical Audio S/PDIF Cable Support Dolby Digital DTS PCM 1.8 Meters (6 Feet)",
        "ratings": 4.0,
        "no_of_ratings": 330,
        "discount_price": 699.0,
        "actual_price": 1000.0
    },
    {
        "name": "Mansiyaorange Traditional One Gram Gold Forming Golden Color Heavy semi bridal jewellery sets for women/Necklace/Jewelery/...",
        "ratings": 4.6,
        "no_of_ratings": 6,
        "discount_price": 561.0,
        "actual_price": 3199.0
    },
    {
        "name": "DVT WOMEN RAJASTHANI TRADITIONAL MOTRA LEHRIYA Georgette FABRIC FULL STITCH LEHENGA CHOLI SET",
        "ratings": 2.7,
        "no_of_ratings": 6,
        "discount_price": 1199.0,
        "actual_price": 3000.0
    },
    {
        "name": "Ocean Fashion Women's Brocade & Georgette Short Sleeve Readymade Saree Blouse",
        "ratings": 3.2,
        "no_of_ratings": 56,
        "discount_price": 399.0,
        "actual_price": 1599.0
    },
    {
        "name": "Sleepsia Butterfly Memory Foam Contour Size Cervical Orthopedic Bed Pillow for Sleeping, Butterfly Shape Pillow, Neck, Pai...",
        "ratings": 3.7,
        "no_of_ratings": 98,
        "discount_price": 1234.0,
        "actual_price": 3499.0
    },
    {
        "name": "Berliner Bags Vintage Leather Shoulder Bag Siena, Crossbody Handbag for Women - Brown",
        "ratings": 4.6,
        "no_of_ratings": 1030,
        "discount_price": 8000.0,
        "actual_price": 10000.0
    },
    {
        "name": "Levi's Men's Skinny Tapered Fit Jeans",
        "ratings": 2.5,
        "no_of_ratings": 6,
        "discount_price": 1109.0,
        "actual_price": 3699.0
    },
    {
        "name": "Puma Unisex-Adult Flyer Runner Mesh Running Shoe",
        "ratings": 4.2,
        "no_of_ratings": 2248,
        "discount_price": 2599.0,
        "actual_price": 3999.0
    },
    {
        "name": "GLOSSIA Fashion Women's Floral Print Half Sleeve Hosiery Cotton Top and Pajama Night Suit Set for Women/Girls (HSRYNS-D2-$)",
        "ratings": 3.4,
        "no_of_ratings": 5,
        "discount_price": 699.0,
        "actual_price": 1499.0
    },
    {
        "name": "Rider Republic Women's Skirt",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 680.0,
        "actual_price": 1495.0
    },
    {
        "name": "Pepe Jeans Men's Slim fit T-Shirt",
        "ratings": 3.6,
        "no_of_ratings": 122,
        "discount_price": 359.0,
        "actual_price": 1199.0
    },
    {
        "name": "Imagimagics Digital Ben 10 Projector Watch for Kids, 24 Digital Projector Images.(Green) Print May Vary",
        "ratings": 3.4,
        "no_of_ratings": 21,
        "discount_price": 229.0,
        "actual_price": 399.0
    },
    {
        "name": "Rupa Men's Cotton Boxers (Color & Print May Vary) (Pack of 3) (WOV Boxer P3 Combo 1 _Assorted_Large_Assorted_L)",
        "ratings": 3.7,
        "no_of_ratings": 102,
        "discount_price": 400.0,
        "actual_price": 999.0
    },
    {
        "name": "Crompton Solarium Neo 15-L 5 Star Rated Storage Water Heater with Advanced 3 Level Safety (Ivory)",
        "ratings": 4.1,
        "no_of_ratings": 853,
        "discount_price": 7797.91,
        "actual_price": 13500.0
    },
    {
        "name": "One For Blue Super Soft Cotton 3 Layer Face Masks for Kids with Nose Clip and Loop Adjusters, Hippo, Panda, Turtle, 4-10 y...",
        "ratings": 3.8,
        "no_of_ratings": 404,
        "discount_price": 299.0,
        "actual_price": 749.0
    },
    {
        "name": "Silicone Rubber Earbuds Tips, Eartips, Earpads, Earplugs, for Replacement in Earphones and Bluetooth Medium Size (10 Pcs B...",
        "ratings": 3.9,
        "no_of_ratings": 687,
        "discount_price": 99.0,
        "actual_price": 999.0
    },
    {
        "name": "crocs Unisex-Child Bayaband Clog K Clog",
        "ratings": 3.6,
        "no_of_ratings": 18,
        "discount_price": 1835.0,
        "actual_price": 2795.0
    },
    {
        "name": "AmazonBasics 2-Piece Set (20\", 28\"), Orange",
        "ratings": 4.5,
        "no_of_ratings": 68,
        "discount_price": 4744.74,
        "actual_price": 20000.0
    },
    {
        "name": "panihari collection centre Women's Solid Rayon Straight Kurta Pant Dupatta Set",
        "ratings": 1.7,
        "no_of_ratings": 3,
        "discount_price": 1299.0,
        "actual_price": 1899.0
    },
    {
        "name": "herbalife F 1 Mango F 3 Protein Powder And Afresh Lemon",
        "ratings": 3.9,
        "no_of_ratings": 5232,
        "discount_price": 2475.0,
        "actual_price": 4476.0
    },
    {
        "name": "Lavie Women's Quilt Eden Large Zip Around Purse | 2 Fold Wallet | Ladies Handbag",
        "ratings": 4.2,
        "no_of_ratings": 28,
        "discount_price": 599.0,
        "actual_price": 2299.0
    },
    {
        "name": "LEOTUDE Cotton Blend Half Sleeve Oversized Back Printed Women's T-Shirt",
        "ratings": 3.9,
        "no_of_ratings": 6,
        "discount_price": 299.0,
        "actual_price": 1099.0
    },
    {
        "name": "SAP Automatic Sui Dhaga Needle Threading Device (Plastic) Pack of 3 pcs",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 185.0,
        "actual_price": 999.0
    },
    {
        "name": "Zumrut® Gold Plated CZ Studded Swastik/Swastika/स्वास्तिक Symbol on Tortoise Turtle Shape Vaastu Fengshui Kachua Good Luck...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 349.0,
        "actual_price": 1499.0
    },
    {
        "name": "Thrifty Wraps® 3 Layer Matt Debit Credit ATM Metro Gym or Other RFID Cards Skin for Front Side of Card (Small Chip, Funny,...",
        "ratings": 2.0,
        "no_of_ratings": 2,
        "discount_price": 199.0,
        "actual_price": 599.0
    },
    {
        "name": "Generic 2 Pcs Studio Microphone Foam Mic Shield Cover Black",
        "ratings": 3.6,
        "no_of_ratings": 1496,
        "discount_price": 209.0,
        "actual_price": 999.0
    },
    {
        "name": "Gambit Multipurpose Food Snack Plastic Bag Clip Sealer/Packet Sealer Clamps/Manual Vacuum Bag Sealer/Food Pouch Clip/Bag Z...",
        "ratings": 4.2,
        "no_of_ratings": 2609,
        "discount_price": 56.0,
        "actual_price": 160.0
    },
    {
        "name": "Acto Pupine Men's Casual Synthetic Leather Slip On Outdoor Sandals (White)",
        "ratings": 3.7,
        "no_of_ratings": 136,
        "discount_price": 349.0,
        "actual_price": 499.0
    },
    {
        "name": "Case Plus Tripod/Mini (13 Inch) Tripod for Mobile Phone with Phone Mount | Flexible Gorilla Stand for DSLR & Action Cameras.",
        "ratings": 3.6,
        "no_of_ratings": 5,
        "discount_price": 325.0,
        "actual_price": 1999.0
    },
    {
        "name": "RDK Car Hanging Accessories Plaque | Antique Sandalwood Beads Car Interior Deco Rear Mirror Hanging Plaque | Material Chan...",
        "ratings": 3.2,
        "no_of_ratings": 7,
        "discount_price": 899.0,
        "actual_price": 1099.0
    },
    {
        "name": "Hubberholme Men's Cotton Blend White Stripe Regular Fit Joggers - Trackpant with Drawstring Elastic Waistband, Lower for J...",
        "ratings": 3.8,
        "no_of_ratings": 18,
        "discount_price": 320.0,
        "actual_price": 1999.0
    },
    {
        "name": "Axcess ET-60II Flower Lens Hood for EF 75-300MM F/4-5.6 III EF-S 55-250mm f/4-5.6 is- Lens Hood",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Chinar Jewels Pink Metal Bangles, Plain Bangles 4Dozen Bangles(set of 48) For Women and Girls with Box",
        "ratings": 3.1,
        "no_of_ratings": 32,
        "discount_price": 295.0,
        "actual_price": 595.0
    },
    {
        "name": "Schrodinger15 999012 Stylish Fashionable Crafted Ladies Girls Women Hand Bag Beading Evening Clutch Specially Designed For...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Bajaj Freshee 300 mm Exhaust Fan (Metallic Grey)",
        "ratings": 3.4,
        "no_of_ratings": 27,
        "discount_price": 2445.0,
        "actual_price": 3219.0
    },
    {
        "name": "SHOPEE Branded Camera LCD Screen Sun Shield Hood Shade for Flip-Out DSLR and Camcorder LCD's (3.5\" Screens)",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 399.0,
        "actual_price": 800.0
    },
    {
        "name": "Levi's Bodywear Men's Plain Cotton Trunks",
        "ratings": 3.6,
        "no_of_ratings": 114,
        "discount_price": 295.0,
        "actual_price": 299.0
    },
    {
        "name": "Lymio Women's Regular Green Color V Neck Half Sleeve Reyon Digital Print Dress (492-Green-M)",
        "ratings": 4.0,
        "no_of_ratings": 3,
        "discount_price": 498.0,
        "actual_price": 3999.0
    },
    {
        "name": "URBAN FOREST Black Chris RFID Blocking Leather Card Holder for Men",
        "ratings": 3.9,
        "no_of_ratings": 462,
        "discount_price": 299.0,
        "actual_price": 1200.0
    },
    {
        "name": "Yellow Chimes Men Gifting Set for Men Exquisite Men Gifting Set Business Suits Set Diary,Pen, Cufflinks,Pocket Watch Men A...",
        "ratings": 4.1,
        "no_of_ratings": 2,
        "discount_price": 1162.0,
        "actual_price": 4497.0
    },
    {
        "name": "Mirako by Van Heusen Women T-Shirt",
        "ratings": 3.7,
        "no_of_ratings": 11,
        "discount_price": 241.0,
        "actual_price": 799.0
    },
    {
        "name": "Godrej 1 Ton 3 Star Inverter Split Ac Model 2023 (100% Copper,5-In-1 Convertible, Ac 1T Ei 12Tinv3R32-Gwa Split, White)",
        "ratings": 3.9,
        "no_of_ratings": 268,
        "discount_price": 29490.0,
        "actual_price": 42900.0
    },
    {
        "name": "ASIAN Men's Crystal-05 Sports Running Shoes & Walking Shoes Gym Casual Sneaker Lace-Up Shoes",
        "ratings": 3.7,
        "no_of_ratings": 1584,
        "discount_price": 1117.0,
        "actual_price": 1999.0
    },
    {
        "name": "LINDA DELLA Women's Cotton Lightly-Padded Wire Free T-Shirt Bra",
        "ratings": 3.9,
        "no_of_ratings": 18,
        "discount_price": 289.0,
        "actual_price": 999.0
    },
    {
        "name": "pluss Women Dress",
        "ratings": 4.0,
        "no_of_ratings": 1039,
        "discount_price": 620.0,
        "actual_price": 2299.0
    },
    {
        "name": "(Renewed) Amkette Pocket FM Portable Multimedia Speaker with USB, SD Card, Clock, and Powerful Torch",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 899.0,
        "actual_price": 1044.0
    },
    {
        "name": "Vembley Stunning Magnetic Necklace for women and girls",
        "ratings": 3.4,
        "no_of_ratings": 7,
        "discount_price": 199.0,
        "actual_price": 1499.0
    },
    {
        "name": "POLLEN Double Layer Egg Boiler Electric Automatic Off 14 Egg Poacher for Steaming, Cooking, Egg Poacher for Steaming, Cook...",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 269.0,
        "actual_price": 999.0
    },
    {
        "name": "Sheetal Associates Women Full Sleeve V-Neck Bodycon Casual Knee Length Dress",
        "ratings": 3.9,
        "no_of_ratings": 127,
        "discount_price": 379.0,
        "actual_price": 999.0
    },
    {
        "name": "AT Vaghasiya Women's Banarasi Kanchipuram Silk Saree with Blouse Piece (Grey)……",
        "ratings": 4.1,
        "no_of_ratings": 27,
        "discount_price": 599.0,
        "actual_price": 1999.0
    },
    {
        "name": "Lloyd Havells-Lloyd 9 Kg 5 Star Semi-Automatic Top Load Washing Machine (LWMS90HT1 Grey, Floral pattern Toughened Glass Lids)",
        "ratings": 4.2,
        "no_of_ratings": 480,
        "discount_price": 14500.0,
        "actual_price": 19090.0
    },
    {
        "name": "AutoClean Rear Wiper Blade With Arm For Suzuki Wagon R (Washer Tablet Free)",
        "ratings": 4.2,
        "no_of_ratings": 145,
        "discount_price": 369.0,
        "actual_price": 990.0
    },
    {
        "name": "Orpat OEK-8147 1-Litre Cordless Kettle (Stainless Steel)",
        "ratings": 4.3,
        "no_of_ratings": 1966,
        "discount_price": 1045.0,
        "actual_price": 1145.0
    },
    {
        "name": "MARS BY GHC Apple Cider Vinegar Gummies for Men | 30 Days Pack | Formulated for Energy Boost & Gut Health - Supports Diges...",
        "ratings": 4.5,
        "no_of_ratings": 34,
        "discount_price": 239.0,
        "actual_price": 599.0
    },
    {
        "name": "W for Woman Women Kurta",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 719.0,
        "actual_price": 1799.0
    },
    {
        "name": "Plantex Space Aluminum Towel Holder/Rod/Hanger/Stand with Side Hooks for Bathroom & Kitchen - Bathroom/Kitchen Accessories...",
        "ratings": 5.0,
        "no_of_ratings": 4,
        "discount_price": 854.0,
        "actual_price": 2199.0
    },
    {
        "name": "Handicraft Kottage 1 Gram Gold Plated Bridal Belly Chain (Kamarband) for Wedding, Anniversary, Ceremony, Pooja etc. for Wo...",
        "ratings": 4.1,
        "no_of_ratings": 181,
        "discount_price": 559.0,
        "actual_price": 1099.0
    },
    {
        "name": "SparkLady Printed Cotton Fabric Knot Bow Hairband/Headband For Women and Girls, Pack of 5 - Multicolor, Design May Vary",
        "ratings": 3.3,
        "no_of_ratings": 60,
        "discount_price": 188.0,
        "actual_price": 599.0
    },
    {
        "name": "ZOUK Women Laptop Bag Royal Indian Peacock Motif",
        "ratings": 4.4,
        "no_of_ratings": 76,
        "discount_price": 1699.0,
        "actual_price": 4863.0
    },
    {
        "name": "Dr. Korpet non-breakable plastic jal neti pot neti lota for nasal cleansing sinus and passages for Health, neti kriya kit...",
        "ratings": 4.1,
        "no_of_ratings": 179,
        "discount_price": 129.0,
        "actual_price": 350.0
    },
    {
        "name": "B.K ACCESSORIES Bullet Leg Guard Single Rod with Heavy Open Baseball Bat for Classic Reborn 350 (Black)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 1320.0,
        "actual_price": 3599.0
    },
    {
        "name": "ZOUK Women's Handcrafted Blac Motif Printed Side Tote Bag for Office and College",
        "ratings": 3.3,
        "no_of_ratings": 5,
        "discount_price": 1599.0,
        "actual_price": 3075.0
    },
    {
        "name": "Reebok Unisex-Adult Regular Fit T-Shirt",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 1019.0,
        "actual_price": 1999.0
    },
    {
        "name": "VIMAL JONNEY Dryfit Solid Lycra Multicolor T-Shirt for Women (Pack of 4)-Dryfit_T_BLK_Gry_L.Gry_OLV_004-P",
        "ratings": 3.8,
        "no_of_ratings": 15,
        "discount_price": 569.0,
        "actual_price": 3996.0
    },
    {
        "name": "OOMPH! Women's Crepe Pleated Knee-Long Dress - Candlelight Orange - md139",
        "ratings": 3.6,
        "no_of_ratings": 1136,
        "discount_price": 399.0,
        "actual_price": 2340.0
    },
    {
        "name": "BATA Mens Rome-isd Sneaker",
        "ratings": 3.0,
        "no_of_ratings": 4,
        "discount_price": 969.86,
        "actual_price": 1999.0
    },
    {
        "name": "Levi's Men's 513 Straight Fit Jeans",
        "ratings": 3.6,
        "no_of_ratings": 44,
        "discount_price": 2549.0,
        "actual_price": 2999.0
    },
    {
        "name": "Action Pro™ Helmet Chin Mount Strap Set Compatible with All Smartphones GoPro Hero 11 10 9 8 7 6 5 4 SJCAM DJI Osmo and Al...",
        "ratings": 3.8,
        "no_of_ratings": 4690,
        "discount_price": 499.0,
        "actual_price": 699.0
    },
    {
        "name": "Morphy Richards Icon Superb 1000-Watt Food Processor (Glazing Copper)",
        "ratings": 3.8,
        "no_of_ratings": 1200,
        "discount_price": 9499.0,
        "actual_price": 19495.0
    },
    {
        "name": "Puma Men's Ignite Proknit Low Boot",
        "ratings": 3.3,
        "no_of_ratings": 12,
        "discount_price": 5756.0,
        "actual_price": 12999.0
    },
    {
        "name": "Campus Kids BINGO-151V Black School Shoes",
        "ratings": 3.5,
        "no_of_ratings": 193,
        "discount_price": 449.0,
        "actual_price": 499.0
    },
    {
        "name": "LOVELASH 1 Pairs Magnetic False Eyelash with 1 Waterproof Magnetic Eyeliner Kit, India's First 8D Faux Mink Eye lashes, Na...",
        "ratings": 4.4,
        "no_of_ratings": 26,
        "discount_price": 299.0,
        "actual_price": 600.0
    },
    {
        "name": "LAFILLETTE Exercise Band, Stretch Band for Exercise, Legs, Gym, Workout, Pull ups, Light, Medium, Resistance Loop Bands fo...",
        "ratings": 3.5,
        "no_of_ratings": 12,
        "discount_price": 399.0,
        "actual_price": 1299.0
    },
    {
        "name": "Linen Club White Solid Casual Regular Fit Linen Shirt for Men",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1724.0,
        "actual_price": 2299.0
    },
    {
        "name": "NIUBEE Umbrella Umbrella for Men, Umberallas for Rain Big Size Men, Windproof Umberalla Large for Man,Women,Kids,Girls,Boy...",
        "ratings": 4.8,
        "no_of_ratings": 662,
        "discount_price": 679.0,
        "actual_price": 2899.0
    },
    {
        "name": "HAIDER ALI AND SONS Girls Dress Material",
        "ratings": 3.6,
        "no_of_ratings": 114,
        "discount_price": 935.0,
        "actual_price": 2250.0
    },
    {
        "name": "ERH India 2 pcs Convex Lens (75 mm Diameter) (Focal Length 15 CM)",
        "ratings": 3.1,
        "no_of_ratings": 3,
        "discount_price": 317.0,
        "actual_price": 549.0
    },
    {
        "name": "Cross Dakota, Men's Leather Bi Fold Coin RFID Wallet (Black)",
        "ratings": 4.1,
        "no_of_ratings": 72,
        "discount_price": 1299.0,
        "actual_price": 3499.0
    },
    {
        "name": "SE Single Sided Copper Tape with Conductive Adhesive for Electric Guitar (12 MM X 25 Meter) Rakhi Decorating Items/Home Dé...",
        "ratings": 3.8,
        "no_of_ratings": 6,
        "discount_price": 649.0,
        "actual_price": 999.0
    },
    {
        "name": "Kashmir Origin | Kashmiri Namkeen Tea | Noon Chai | Pink Tea | Sheer Chai | Samovar Tea | Kashmiri chai | 400 GM",
        "ratings": 3.5,
        "no_of_ratings": 45,
        "discount_price": 339.0,
        "actual_price": 399.0
    },
    {
        "name": "Saddle & Barnes Men's Leather Formal Shoes",
        "ratings": 3.2,
        "no_of_ratings": 107,
        "discount_price": 1440.0,
        "actual_price": 3499.0
    },
    {
        "name": "SAMTROH Men's Beige PU Leather Wallet/Purse",
        "ratings": 3.7,
        "no_of_ratings": 14,
        "discount_price": 249.0,
        "actual_price": 999.0
    },
    {
        "name": "Adira Period Panties for Women Leak Proof & Breathable | Hipster Fit for Medium Flow | Use with Pad for Non Icky Feeling |...",
        "ratings": 4.0,
        "no_of_ratings": 813,
        "discount_price": 590.0,
        "actual_price": 698.0
    },
    {
        "name": "UK Enterprise Relax Recliner Comfort Folding Chair for Indoor, Outdoor, Home, Beach, Garden, Lounge, Camping, Deck Chair (...",
        "ratings": 3.4,
        "no_of_ratings": 9,
        "discount_price": 3899.0,
        "actual_price": 7899.0
    },
    {
        "name": "Panasonic Duro Digi 10L Water Heater (White) with Free Pipe and Installation",
        "ratings": 4.0,
        "no_of_ratings": 28,
        "discount_price": 8460.0,
        "actual_price": 13500.0
    },
    {
        "name": "TECH-X 12 Inch(1 FEET) Pack 1 Long USB to DC Power Cable Charger Cord Barrel Jack USB 2.0 to DC Jack 5.5 x 2.5mm or 5.5 x ...",
        "ratings": 2.7,
        "no_of_ratings": 38,
        "discount_price": 199.0,
        "actual_price": 499.0
    },
    {
        "name": "Oboe Silicone Protective Full Wrap Case Compatible with Xiaomi Mi TV Remote Netflix/Amazon Model 4X (65,55,50,43 inch)/ 4A...",
        "ratings": 4.4,
        "no_of_ratings": 565,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "Ananth Jewels BIS Hallmarked 20 Grams Silver Coin Gift for Happy Birthday",
        "ratings": 4.2,
        "no_of_ratings": 32,
        "discount_price": 2160.0,
        "actual_price": 4500.0
    },
    {
        "name": "Lasmo Oversized Mens Round Neck Cotton Blend Half Sleeve T-Shirts.",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "Jump cuts Men's All Over Printed Hooded Neck Fullsleeve Multicolor Polyester Lycra Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 491.0,
        "actual_price": 1719.0
    },
    {
        "name": "Sparx Mens Sm 651 Sports Shoes",
        "ratings": 4.2,
        "no_of_ratings": 2497,
        "discount_price": 734.0,
        "actual_price": 1049.0
    },
    {
        "name": "Serein Women's Midi Dress (Printed Dress with Shoulder Ruffle Full Sleeve)",
        "ratings": 3.7,
        "no_of_ratings": 1076,
        "discount_price": 449.0,
        "actual_price": 1999.0
    },
    {
        "name": "ORAYAN Luxuria Designer Edition Diamond Cut Dial Magnetic Belt Analog Women's and Girl's Wrist Watch",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 479.0,
        "actual_price": 1999.0
    },
    {
        "name": "G 1 Garbage Bags | Dustbin Bags | Trash Bags | Medium | 19x21 inches | Pack of 3 | Black | 30 Bags Per Pack",
        "ratings": 4.2,
        "no_of_ratings": 5190,
        "discount_price": 190.0,
        "actual_price": 375.0
    },
    {
        "name": "Arrow Newyork Men's Regular Polo Shirt (ANADOTS3812_Olive L)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 736.0,
        "actual_price": 1599.0
    },
    {
        "name": "Purity of Love Radha Krishna Silver Coin 999 Purity 10 Grams Precious Gift",
        "ratings": 5.0,
        "no_of_ratings": 5,
        "discount_price": 1149.0,
        "actual_price": 2199.0
    },
    {
        "name": "Sfane polyester 23 cms Duffle Bag(BG - 05 HALF LTSHOE COMPTT_grey)",
        "ratings": 4.3,
        "no_of_ratings": 6583,
        "discount_price": 384.0,
        "actual_price": 1199.0
    },
    {
        "name": "OYO BABY Baby Bed Protector Sheet (Extra Large-( 200cm X 140cm), Sea Blue)",
        "ratings": 4.3,
        "no_of_ratings": 2138,
        "discount_price": 949.0,
        "actual_price": 1399.0
    },
    {
        "name": "Akshita gems 9.25 Ratti 8.60 Carat Unheated Untreatet Quality Natural Peridot Loose Gemstone Stone Gemstone by Lab Certifi...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1125.0,
        "actual_price": 4545.0
    },
    {
        "name": "Yellow Chimes Layered Necklace for Women Gold-plated Western Pearl Beads Multi layered Chain Necklace for Women and Girl",
        "ratings": 3.7,
        "no_of_ratings": 134,
        "discount_price": 249.0,
        "actual_price": 1165.0
    },
    {
        "name": "FURO by Redchief Men's Blue Running Sports Shoes",
        "ratings": 3.2,
        "no_of_ratings": 3,
        "discount_price": 2157.0,
        "actual_price": 3595.0
    },
    {
        "name": "Peppyzone Men's Cotton Sleeveless Vest",
        "ratings": 3.8,
        "no_of_ratings": 685,
        "discount_price": 399.0,
        "actual_price": 699.0
    },
    {
        "name": "omtex Seamless Shorts with Inner Pockets for Abdomen Guard Suitable for All Kinds of Sports and Training Activities",
        "ratings": 3.9,
        "no_of_ratings": 105,
        "discount_price": 605.0,
        "actual_price": 615.0
    },
    {
        "name": "Alibasics Lint Roller for Clothes - Portable Lint Remover for Pet Hair, Sofa, Bedsheet, Fur & Woolen Fabric with Cover, 2 ...",
        "ratings": 4.3,
        "no_of_ratings": 255,
        "discount_price": 599.0,
        "actual_price": 899.0
    },
    {
        "name": "Aquagems Panchdhatu Sulemani Hakik 3.25 Ratti or 3 Carat Astrological Birthstone 5 Metals Gold Plated Pendant for Men & Wo...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1125.0,
        "actual_price": 2205.0
    },
    {
        "name": "Beclina Handbag For Women And Girls | Ladies Purse Faux Leather Handbag | Woman Gifts | Wedding Gifts For Woman | Women 3 ...",
        "ratings": 3.8,
        "no_of_ratings": 2918,
        "discount_price": 1149.0,
        "actual_price": 2999.0
    },
    {
        "name": "3 Wheels for Tripod. Turn Your Tripod into a Slider. Tripod Dolly Wheels (Long Wheels)",
        "ratings": 2.7,
        "no_of_ratings": 6,
        "discount_price": 1380.0,
        "actual_price": 2900.0
    },
    {
        "name": "JJ TEES Polyester Half Sleeve Jersey with Round Collar and Digital Print All Over for Men (Color: Neon Yellow, Navy Blue a...",
        "ratings": 3.8,
        "no_of_ratings": 72,
        "discount_price": 345.0,
        "actual_price": 999.0
    },
    {
        "name": "SERONA FABRICS Women's Banarasi Cotton Silk Embroidered Work Saree With Blouse Piece",
        "ratings": 3.8,
        "no_of_ratings": 99,
        "discount_price": 849.0,
        "actual_price": 4999.0
    },
    {
        "name": "Lavie Women's Xoxo Medium Tote Bag | Ladies Purse Handbag",
        "ratings": 3.3,
        "no_of_ratings": 3,
        "discount_price": 1299.0,
        "actual_price": 4199.0
    },
    {
        "name": "CYCLOSTAR STRYDER KORUS 26T Road Bicycle with inbuilt Carrier, Free Bell & Lock | Ideal for : 13+ Years",
        "ratings": 2.5,
        "no_of_ratings": 4,
        "discount_price": 6400.0,
        "actual_price": 8000.0
    },
    {
        "name": "14 Mukhi Rudraksha 14 Faced Rudraksha 25mm With Silver Capping Natural Nepali 14 मुखी रुद्राक्ष चौदह मुखी रुद्राक्ष भगवान ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 3499.0,
        "actual_price": 8100.0
    },
    {
        "name": "Crompton Hiflo Neo 16-Inch Table Fan 400mm ( kd White)",
        "ratings": 3.8,
        "no_of_ratings": 103,
        "discount_price": 2200.0,
        "actual_price": 2740.0
    },
    {
        "name": "Himalaya Gentle Daily Care Natural Protein Shampoo, protects from daily wear and tear , Gently cleanses & strengthens, Wit...",
        "ratings": 4.1,
        "no_of_ratings": 716,
        "discount_price": 80.0,
        "actual_price": 130.0
    },
    {
        "name": "MIRT Collection Men's Slim Fit Stretchable Relaxed Jeans Jeans for Boys & Mens Blue design-SL203",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 898.0,
        "actual_price": 2999.0
    },
    {
        "name": "Puma Unisex-Adult Tri-Fold AOP Wallet IND, TRUE BLUE, X (5405103)",
        "ratings": 4.1,
        "no_of_ratings": 71,
        "discount_price": 549.0,
        "actual_price": 1299.0
    },
    {
        "name": "Ortho + Rest Women's & Girl's Extra Soft Doctor Ortho Slippers | Orthopedic Comfortable Flip Flops Footwear",
        "ratings": 3.3,
        "no_of_ratings": 55,
        "discount_price": 478.0,
        "actual_price": 699.0
    },
    {
        "name": "LIBSADRESSES Green Strip's Casual Half Shirt for Men/Boy's.",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 449.0,
        "actual_price": 799.0
    },
    {
        "name": "Lino Perros Women's Faux Leather Handbag",
        "ratings": 4.2,
        "no_of_ratings": 79,
        "discount_price": 1328.0,
        "actual_price": 3995.0
    },
    {
        "name": "Golden Treez Charcoal Bath Soap | Luxurious and Natural Bathing Soap enriched with Activated Charcoal, Olive Oil and Aloe ...",
        "ratings": 5.0,
        "no_of_ratings": 26,
        "discount_price": 378.0,
        "actual_price": 498.0
    },
    {
        "name": "SanDisk Ultra Luxe USB 3.1 Flash Drive 32GB, Upto 150MB/s, All Metal, Metallic Silver",
        "ratings": 4.3,
        "no_of_ratings": 31693,
        "discount_price": 468.0,
        "actual_price": 1000.0
    },
    {
        "name": "Bagello 21 Ltrs Classic Backpack Casual Fashion Premium Anti Theft Backpack for Boys/Girls/Women -Black",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 420.0,
        "actual_price": 1599.0
    },
    {
        "name": "Seiko Lord Analog White Dial Women's Watch-SUR809P1",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 17548.0,
        "actual_price": 21000.0
    },
    {
        "name": "Active Pixel 960P HD 2MP Wireless WiFi Panoramic Fisheye Bulb Camera with Motion Detection",
        "ratings": 3.4,
        "no_of_ratings": 20,
        "discount_price": 3500.0,
        "actual_price": 4500.0
    },
    {
        "name": "Casio Analog Black Dial Women's Watch-SHE-4543GL-8AUDF",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 6597.0,
        "actual_price": 10995.0
    },
    {
        "name": "KINIK Plastic Toilet Seat Cover Hinges Parry Type Clamp Box",
        "ratings": 3.1,
        "no_of_ratings": 23,
        "discount_price": 218.0,
        "actual_price": 399.0
    },
    {
        "name": "Sector z Polyester 25 Cms Duffle Bag(51_ Black)",
        "ratings": 3.5,
        "no_of_ratings": 49,
        "discount_price": 114.0,
        "actual_price": 499.0
    },
    {
        "name": "Uptownie Lite Women's Denim Knee Length Slit Skirt",
        "ratings": 3.5,
        "no_of_ratings": 16,
        "discount_price": 443.0,
        "actual_price": 1899.0
    },
    {
        "name": "CP PLUS Infrared HD 2.4MP Security Camera",
        "ratings": 3.8,
        "no_of_ratings": 808,
        "discount_price": 1498.0,
        "actual_price": 2800.0
    },
    {
        "name": "Via Mazzini 316L Stainless Steel No-Tarnish No-Rusting Clip-On Non-Pierced 8mm Nose Ring For Women And Girls (1 Pair)",
        "ratings": 3.4,
        "no_of_ratings": 64,
        "discount_price": 342.0,
        "actual_price": 815.0
    },
    {
        "name": "Do Bhai Men's Formal Shoes",
        "ratings": 3.2,
        "no_of_ratings": 14,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Ssretail Men's Cotton Langot Supporter for Gym,(Free-Size) Traditional Supporter Gym,Yoga, Work Out, Running Langot/Langot...",
        "ratings": 3.6,
        "no_of_ratings": 11,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Yellow Chimes Jewellery Set for Women & Girls Traditional American Diamond Jewellery Set | Rhodium Plated Floral AD Neckla...",
        "ratings": 3.9,
        "no_of_ratings": 14,
        "discount_price": 1206.0,
        "actual_price": 6657.0
    },
    {
        "name": "INDO ERA Women's Cotton Blend Paisley A-Line Kurta Trousers With Dupatta Set (KH0RT4670)",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 1579.0,
        "actual_price": 5999.0
    },
    {
        "name": "People Women's Regular Fit T-Shirt",
        "ratings": 4.6,
        "no_of_ratings": 5,
        "discount_price": 129.0,
        "actual_price": 499.0
    },
    {
        "name": "Van Heusen Women's Wallet (Black)",
        "ratings": 4.5,
        "no_of_ratings": 42,
        "discount_price": 849.0,
        "actual_price": 1599.0
    },
    {
        "name": "KIFAARU Girls Underwear Cotton Panties Kids Innerwear Briefs Combo (Assorted Prints and Colours)",
        "ratings": 3.6,
        "no_of_ratings": 5,
        "discount_price": 299.0,
        "actual_price": 1299.0
    },
    {
        "name": "TONZO Full HD+ Projector, Lumens 10,000 with 5G WiFi,Contrast 10000:1, Native 1080P, 2022 New Full HD 4K Android 9.0 LED P...",
        "ratings": 3.9,
        "no_of_ratings": 43,
        "discount_price": 29999.0,
        "actual_price": 49999.0
    },
    {
        "name": "Young & Forever Valentine Gift for mom Diwali Gift Festive Collection Gold/Silver Egyptian Armband Cuff Jewelry Bracelet f...",
        "ratings": 3.9,
        "no_of_ratings": 9,
        "discount_price": 469.0,
        "actual_price": 3240.0
    },
    {
        "name": "Fashion Frill Trendy Unique Design Evil Eye Silver Plated Chain Necklace For Girls Women Men Boys Fashion Jewellery",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 201.0,
        "actual_price": 999.0
    },
    {
        "name": "Van Heusen Women's Satchel",
        "ratings": 4.2,
        "no_of_ratings": 94,
        "discount_price": 1419.0,
        "actual_price": 2799.0
    },
    {
        "name": "crocs Women's Kadee Platinum Rubber Ballet Flats",
        "ratings": 4.2,
        "no_of_ratings": 20822,
        "discount_price": 1778.0,
        "actual_price": 2995.0
    },
    {
        "name": "Agriansh Heavy Duty 12Vdc Electric Battery Sprayer diaphragm 110 Psi Pump Motor Plus Power Charger, Regulator, Clamps and ...",
        "ratings": 3.4,
        "no_of_ratings": 37,
        "discount_price": 1469.0,
        "actual_price": 2999.0
    },
    {
        "name": "bluehaaat Men's Slim Fit T-Shirts",
        "ratings": 4.1,
        "no_of_ratings": 99,
        "discount_price": 499.0,
        "actual_price": 1299.0
    },
    {
        "name": "ZEBSTER 19\" LED Monitor with HDMI- ZEB-ZE19HD (HDMI+VGA)",
        "ratings": 3.3,
        "no_of_ratings": 23,
        "discount_price": 4470.0,
        "actual_price": 5999.0
    },
    {
        "name": "BATA Women Dessa Fashion Sandals",
        "ratings": 3.8,
        "no_of_ratings": 255,
        "discount_price": 951.0,
        "actual_price": 1299.0
    },
    {
        "name": "UV Filter 58MM 2 PCS Compatible with Canon EOS 1300D/1500D/700D/200D/ 200d Mark II /3000D(Replacement for Canon Lens 18-55...",
        "ratings": 4.1,
        "no_of_ratings": 306,
        "discount_price": 219.0,
        "actual_price": 499.0
    },
    {
        "name": "PURE LUXURIES LONDON Women Solid Genuine Leather Jura Handbag",
        "ratings": 3.5,
        "no_of_ratings": 5,
        "discount_price": 4060.0,
        "actual_price": 14500.0
    },
    {
        "name": "Saheb Stylish Formal High Heel Pump Shoes for Girls and Women (518)",
        "ratings": 3.6,
        "no_of_ratings": 3,
        "discount_price": 1049.0,
        "actual_price": 1899.0
    },
    {
        "name": "MAVEN Women Sandals with Transparent Upper",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1195.0,
        "actual_price": 1799.0
    },
    {
        "name": "Marks & Spencer Women's Regular Fit Blouse",
        "ratings": 3.6,
        "no_of_ratings": 5,
        "discount_price": 850.0,
        "actual_price": 2999.0
    },
    {
        "name": "Kuchipoo Baby Boys and Baby Girls T-Shirt - Pack of 5 (Tshrt-181)",
        "ratings": 4.2,
        "no_of_ratings": 418,
        "discount_price": 594.0,
        "actual_price": 1899.0
    },
    {
        "name": "Royalkart 1 Sheet 2 in 1 Photography Backdrop 3D Flat Lay Tabletop Double-Sided 56x88 CM Photo Background PVC Coated Wrink...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 379.0,
        "actual_price": 900.0
    },
    {
        "name": "Kopykat Women's Non Padded Wire Free Fourway Lycra Sports Bra",
        "ratings": 3.8,
        "no_of_ratings": 46,
        "discount_price": 379.0,
        "actual_price": 699.0
    },
    {
        "name": "QUBINE- Women's Multicolor Seamless Lycra Cotton Panty-Pack of 3",
        "ratings": 2.4,
        "no_of_ratings": 17,
        "discount_price": 319.0,
        "actual_price": 999.0
    },
    {
        "name": "30 PCS Black Women Elastic Cloth Hair Bands Scrunchies Hair Tie band Hair Accessories",
        "ratings": 4.2,
        "no_of_ratings": 45,
        "discount_price": 299.0,
        "actual_price": 499.0
    },
    {
        "name": "Pinaaki Enterprises Oppo A76 Flip Case | Premium Leather Finish Flip Cover | with Card Pockets | Wallet Stand |Complete Pr...",
        "ratings": 3.7,
        "no_of_ratings": 14,
        "discount_price": 169.0,
        "actual_price": 499.0
    },
    {
        "name": "Lehenga Style Women's Net Embroidered Semi-Stitched Lehenga Choli (Free Size)",
        "ratings": 3.9,
        "no_of_ratings": 20,
        "discount_price": 799.0,
        "actual_price": 2499.0
    },
    {
        "name": "Trendy Dukaan Unisex Regular Fit Track Pants",
        "ratings": 3.9,
        "no_of_ratings": 78,
        "discount_price": 1325.0,
        "actual_price": 2299.0
    },
    {
        "name": "TRUE HUMAN Women's Leather Designer Embroidered Clutch, Wallets (Pink)",
        "ratings": 3.9,
        "no_of_ratings": 55,
        "discount_price": 289.0,
        "actual_price": 999.0
    },
    {
        "name": "Fraternity by MensXP, Folkstone Grey Canvas Lace Up Espadrilles",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 799.0,
        "actual_price": 2199.0
    },
    {
        "name": "Eyewear Stylez™ Progressive Reading Glasses For Men Black Color Free Size Full Frame Progressive Power Glasses For Men And...",
        "ratings": 3.8,
        "no_of_ratings": 11,
        "discount_price": 899.0,
        "actual_price": 1699.0
    },
    {
        "name": "Luker Flora Delux Anti Dust Fan-Cherry Red 1200mm",
        "ratings": 3.3,
        "no_of_ratings": 5,
        "discount_price": 2799.0,
        "actual_price": 3150.0
    },
    {
        "name": "LONDON BELLY Women's Net Crop Top",
        "ratings": 3.7,
        "no_of_ratings": 106,
        "discount_price": 249.0,
        "actual_price": 1299.0
    },
    {
        "name": "Honeywell 2 MP (2B) CCTV KIT +Zebronics 19.5 inch Monitor",
        "ratings": 4.7,
        "no_of_ratings": 6,
        "discount_price": 15998.0,
        "actual_price": 39939.0
    },
    {
        "name": "ABROS Men's Salem ASGO0119 Sports Shoes/Casual Shoes/Running Shoes",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 844.0,
        "actual_price": 1299.0
    },
    {
        "name": "ELECTROLUX UltimateHome 700 Canister Bagless Vacuum Cleaner for Home, 2000 W, Dust Cleaner, Nesno High Nozzle, 3-in-1 Kit,...",
        "ratings": 4.6,
        "no_of_ratings": 7,
        "discount_price": 15990.0,
        "actual_price": 20990.0
    },
    {
        "name": "LORENZ Gift Set Combo of Tan Wallet and Watch for Men & Boys | CM-1049WL-TAN",
        "ratings": 4.0,
        "no_of_ratings": 48,
        "discount_price": 399.0,
        "actual_price": 2299.0
    },
    {
        "name": "Xs and Os Women's Polyester & Spandex Solid Above knee Baby Doll",
        "ratings": 3.5,
        "no_of_ratings": 204,
        "discount_price": 469.0,
        "actual_price": 969.0
    },
    {
        "name": "Neska Moda Women's Skin Beige Panty Hose Long Comfort Stockings -STK4",
        "ratings": 3.3,
        "no_of_ratings": 45,
        "discount_price": 249.0,
        "actual_price": 799.0
    },
    {
        "name": "ZECVA Women's Kanjivaram Soft Silk Traditional Saree With Attach Unstitched Blouse Piece",
        "ratings": 3.7,
        "no_of_ratings": 14,
        "discount_price": 799.0,
        "actual_price": 5999.0
    },
    {
        "name": "Raajsi by Yellow Chimes Silver Hallmark and Certified Purity Silver Chain Necklace for Men and Boys",
        "ratings": 3.8,
        "no_of_ratings": 10,
        "discount_price": 1708.0,
        "actual_price": 10125.0
    },
    {
        "name": "IFORREST Double Sleeping Bag - 2 Person Cold Weather Camping Bed, Extra-Wide & Warm (3-4 Seasons), King Size XXL with 2 Up...",
        "ratings": 4.4,
        "no_of_ratings": 950,
        "discount_price": 18048.0,
        "actual_price": 25789.0
    },
    {
        "name": "Ankit Traders Traditional Vintage Embroidered Potli Purse for Women with Zipper, Potli Bags (Set of 6) Multi colour (L X ...",
        "ratings": 4.0,
        "no_of_ratings": 137,
        "discount_price": 399.0,
        "actual_price": 999.0
    },
    {
        "name": "WILLFE Kanjivaram Soft Lichi Silk Traditional Lehenga Saree, Unstitched Lehenga Choli, Half Saree",
        "ratings": 3.1,
        "no_of_ratings": 17,
        "discount_price": 1748.0,
        "actual_price": 7499.0
    },
    {
        "name": "BASIICS Men Cotton Briefs (Pack of 1) (BCSBR02RD0_XL_Red_XL)",
        "ratings": 3.8,
        "no_of_ratings": 18,
        "discount_price": 237.0,
        "actual_price": 249.0
    },
    {
        "name": "Zeel Clothing Brown and Golden Zari and Sequins Work Silk Semi-Stitched Lehenga Choli (7709-Wedding-Bridal-Dulhan-Lehenga;...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 6999.0,
        "actual_price": 19999.0
    },
    {
        "name": "Sanganeri Kurti Women's Cotton Emberoidered Kurta And Pant Set (PEACH)",
        "ratings": 3.9,
        "no_of_ratings": 793,
        "discount_price": 599.0,
        "actual_price": 2999.0
    },
    {
        "name": "Zeel Clothing Women's Silk Embroidered Semi-Stitched Wedding Lehenga Choli with Dupatta (103-Orange-New-Bridal-Latest-Lehe...",
        "ratings": 3.6,
        "no_of_ratings": 8,
        "discount_price": 3899.0,
        "actual_price": 9999.0
    },
    {
        "name": "Yellow Chimes for Myx Earrings For Women Silver Toned Blue and Orange Stone Studded Tear Drop Shaped Earrings For Women an...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 250.0,
        "actual_price": 828.0
    },
    {
        "name": "MEECOSTE Realistic Look Dummy Home Security CCTV Fake Bullet Indoor Outdoor Usage Camera with LED Light Indication",
        "ratings": 3.7,
        "no_of_ratings": 5,
        "discount_price": 325.0,
        "actual_price": 1160.0
    },
    {
        "name": "Philips BT3102/15 Cordless Beard Trimmer (Black and Grey)",
        "ratings": 4.2,
        "no_of_ratings": 5193,
        "discount_price": 1343.0,
        "actual_price": 1495.0
    },
    {
        "name": "Universal Buyer Polyester Travel Bag with Packing Cubes Laundry Bag Packing Cube Luggage Bag Organizer for 6 Size - 6 Pouc...",
        "ratings": 3.2,
        "no_of_ratings": 6,
        "discount_price": 380.0,
        "actual_price": 599.0
    },
    {
        "name": "SYSKA Fab-4001 Fan Shaped Base B22 40-Watt Led Bulb (Pack Of 2, White,B22D)",
        "ratings": 3.7,
        "no_of_ratings": 58,
        "discount_price": 1245.0,
        "actual_price": 1598.0
    },
    {
        "name": "HASTHIP® 35Pcs Double Sided Bra Stickers Tape One-Off Body Clothing Bra Strip 10mm White",
        "ratings": 3.7,
        "no_of_ratings": 280,
        "discount_price": 197.0,
        "actual_price": 280.0
    },
    {
        "name": "ZEBRONICS Zeb-Envy Bluetooth Wireless Over Ear Headphones with Mic with 33 hrs Playback time, Voice Assistant, with Detach...",
        "ratings": 3.8,
        "no_of_ratings": 1848,
        "discount_price": 1499.0,
        "actual_price": 3299.0
    },
    {
        "name": "DUPATTA BAZAAR Women's White Blended Silk dupatta with Silver Stripes",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 299.0,
        "actual_price": 699.0
    },
    {
        "name": "JUPON Premium Silk Darkening Door Curtain (Beige, 44 X 84 Inches) - Pack of 2 Piece, Blackout",
        "ratings": 4.3,
        "no_of_ratings": 843,
        "discount_price": 1299.0,
        "actual_price": 2099.0
    },
    {
        "name": "Cablecreation Active Dp To Hdmi Cable, Displayport Male To Hdmi Male Cable, Fhd Gold-Plated Compatible With Projector, Lap...",
        "ratings": 4.1,
        "no_of_ratings": 2038,
        "discount_price": 1562.0,
        "actual_price": 6599.0
    },
    {
        "name": "AstroCart Natural Pearl Moti Mala 7mm Round 108 Beads मोती की माला from South Sea Pearl White Moti Beautiful Tarak Ratan M...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 9995.0,
        "actual_price": 15000.0
    },
    {
        "name": "Metro Women Synthetic Sandals (32-250)",
        "ratings": 3.1,
        "no_of_ratings": 23,
        "discount_price": 1030.0,
        "actual_price": 2290.0
    },
    {
        "name": "SToK 4 Liters 1500W Smart Rapid 3D Air Technology Digital Air Fryer With Double Layer Grill, Black",
        "ratings": 4.4,
        "no_of_ratings": 157,
        "discount_price": 4850.0,
        "actual_price": 7999.0
    },
    {
        "name": "Panasonic 1 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper, 7 in 1 Convertible with additional AI Mode, 4 Way Swing, nan...",
        "ratings": 4.2,
        "no_of_ratings": 29,
        "discount_price": 48490.0,
        "actual_price": 68400.0
    },
    {
        "name": "Allen Solly Men's Slim Jeans",
        "ratings": 3.8,
        "no_of_ratings": 245,
        "discount_price": 949.0,
        "actual_price": 1899.0
    },
    {
        "name": "JJ TEES Polyester Half Sleeve Jersey with Round Collar and Digital Print All Over for Men (Color: White, Orange and Green)",
        "ratings": 3.9,
        "no_of_ratings": 18,
        "discount_price": 345.0,
        "actual_price": 999.0
    },
    {
        "name": "Campus Sutra Stylish Designed Full Sleeve Casual Shirt for Men",
        "ratings": 3.7,
        "no_of_ratings": 22,
        "discount_price": 719.0,
        "actual_price": 1599.0
    },
    {
        "name": "GKI Wooden Kung Fu Table Tennis Racket Paddle (Red, Black)",
        "ratings": 4.0,
        "no_of_ratings": 5,
        "discount_price": 899.0,
        "actual_price": 1050.0
    },
    {
        "name": "U.S. POLO ASSN. Men's Skinny Jeans",
        "ratings": 3.8,
        "no_of_ratings": 27,
        "discount_price": 1429.0,
        "actual_price": 2199.0
    },
    {
        "name": "Dollar Bigboss Men's Solid Vest (Pack of 3)",
        "ratings": 3.9,
        "no_of_ratings": 68,
        "discount_price": 479.0,
        "actual_price": 699.0
    },
    {
        "name": "Crunchy Fashion Jewellery Traditional Indian Ethnic Bridal Wedding Gold Plated Yellow Meenakari Pearl Hoop Jhumka Jhumki E...",
        "ratings": 4.0,
        "no_of_ratings": 9,
        "discount_price": 439.0,
        "actual_price": 1575.0
    },
    {
        "name": "TOOBA Girl's Diamond Heart Clutch",
        "ratings": 3.3,
        "no_of_ratings": 50,
        "discount_price": 695.0,
        "actual_price": 4999.0
    },
    {
        "name": "JUARI BE A GENTLEMAN Men's Bull Printed White Tank Top Gym Vest for Men",
        "ratings": 3.8,
        "no_of_ratings": 401,
        "discount_price": 314.0,
        "actual_price": 499.0
    },
    {
        "name": "Amazon Brand - Solimo String Lights with USB-Operated, 5m (Warm White)",
        "ratings": 2.5,
        "no_of_ratings": 2,
        "discount_price": 112.0,
        "actual_price": 399.0
    },
    {
        "name": "SPC Empty Acrylic San Jar Transparent Cosmetic Container with Leakproof Inner lids for Lip Balms, Lip Scrubs, Body Butter...",
        "ratings": 4.1,
        "no_of_ratings": 211,
        "discount_price": 165.0,
        "actual_price": 500.0
    },
    {
        "name": "ALBERTO TORRESI Men's Synthetic Formal Shoes",
        "ratings": 3.4,
        "no_of_ratings": 68,
        "discount_price": 1499.0,
        "actual_price": 3295.0
    },
    {
        "name": "Vellinto® Men's Black Ethnic Juttis Mojaris & Partys Shoes ll Men's Casual Loafers Shoes",
        "ratings": 3.7,
        "no_of_ratings": 636,
        "discount_price": 498.0,
        "actual_price": 1299.0
    },
    {
        "name": "Studds Urban Pink With White Strip Open Face Helmet (M)",
        "ratings": 4.5,
        "no_of_ratings": 428,
        "discount_price": 946.0,
        "actual_price": 1075.0
    },
    {
        "name": "Red Tape Men's Regular Fit Polo",
        "ratings": 3.7,
        "no_of_ratings": 26,
        "discount_price": 719.0,
        "actual_price": 2399.0
    },
    {
        "name": "Neska Moda Baby Girls Booties For 6 To 12 Months (Maroon,Pink) -BT17andSK179",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 299.0,
        "actual_price": 799.0
    },
    {
        "name": "Baby Story Gentle Nail Cutter with Magnifier Zoom Lens for Newborn Babies/Toddler/Kids/Children",
        "ratings": 3.8,
        "no_of_ratings": 103,
        "discount_price": 189.0,
        "actual_price": 399.0
    },
    {
        "name": "Wearilio Multipurpose and Multi Compartment PVC Mother Bag / Diaper Bags",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1045.0,
        "actual_price": 1999.0
    },
    {
        "name": "Zenvista Meditech Cosmetics Shan Jars, 50 gm with Matte Finish Black Lids, for Lip Balms, DIY Skin Care - Pack of 3",
        "ratings": 5.0,
        "no_of_ratings": 4,
        "discount_price": 395.0,
        "actual_price": 800.0
    },
    {
        "name": "Campus Men's Neptune CH.Gry/WHT Running Shoes -6 UK/India",
        "ratings": 4.4,
        "no_of_ratings": 2,
        "discount_price": 1044.0,
        "actual_price": 1299.0
    },
    {
        "name": "JSPM Girls' & Women's' Shoulder Bag (Handbag Blue (SP-002)_Blue)",
        "ratings": 3.7,
        "no_of_ratings": 424,
        "discount_price": 299.0,
        "actual_price": 599.0
    },
    {
        "name": "BENRO T560 56.5 inches Digital SLR Camera Aluminium Travel Portable Tripod with Carry Bag (Black)",
        "ratings": 4.4,
        "no_of_ratings": 99,
        "discount_price": 1604.0,
        "actual_price": 2990.0
    },
    {
        "name": "Joker & Witch Vintage Square Dial Black Magnetic Watch",
        "ratings": 2.6,
        "no_of_ratings": 8,
        "discount_price": 949.0,
        "actual_price": 3799.0
    },
    {
        "name": "Aristrocrat Unisex Laptop Bag Grey",
        "ratings": 4.4,
        "no_of_ratings": 18,
        "discount_price": 699.0,
        "actual_price": 2300.0
    },
    {
        "name": "muteyaar Women's Checkered Cotton Dupatta",
        "ratings": 4.0,
        "no_of_ratings": 58,
        "discount_price": 379.0,
        "actual_price": 599.0
    },
    {
        "name": "Piyali's Creation Women's Women's Cotton Printed Maxi Length Nighty (PCW0000937-XXL-44_Yellow_2XL)",
        "ratings": 3.9,
        "no_of_ratings": 51,
        "discount_price": 399.0,
        "actual_price": 1199.0
    },
    {
        "name": "GUESS UV Protected Wayfarer Women's Sunglasses - (GU7578-D 54 55C|54|Blue Color Lens)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 8287.0,
        "actual_price": 11051.0
    },
    {
        "name": "KZ EDX Pro IEM Earphone, HiFi Stereo Special Dual Magnetic Circuit Dynamic Driver Resin Inlay Metal Process in-Ear Monitor...",
        "ratings": 4.2,
        "no_of_ratings": 32,
        "discount_price": 1190.0,
        "actual_price": 1999.0
    },
    {
        "name": "BASIICS Men Cotton Thong (Pack of 1)(BCSTH01BE1_L_Blue_L)",
        "ratings": 4.1,
        "no_of_ratings": 29,
        "discount_price": 237.0,
        "actual_price": 249.0
    },
    {
        "name": "Auory 925 Sterling Silver Rose Gold Dual Heart Pendant with Link Chain Elegant Gifts For Women Love gift Jewellery 925 STAMP",
        "ratings": 5.0,
        "no_of_ratings": 14,
        "discount_price": 1319.0,
        "actual_price": 2399.0
    },
    {
        "name": "Max Women Top",
        "ratings": 4.3,
        "no_of_ratings": 3,
        "discount_price": 639.0,
        "actual_price": 799.0
    },
    {
        "name": "COTTON BREEZE Women's Skirt (FP372,Turquoise)",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 365.0,
        "actual_price": 999.0
    },
    {
        "name": "crocs unisex-adult Bayaband Clog LEMON/WHITE Clog - 8 UK Men/ 9 UK Women (M9W11) (205089-7B0)",
        "ratings": 4.3,
        "no_of_ratings": 576,
        "discount_price": 1922.0,
        "actual_price": 3495.0
    },
    {
        "name": "GULASS WICK Mocassins Casual Loafers for Men (White)",
        "ratings": 3.0,
        "no_of_ratings": 3,
        "discount_price": 587.0,
        "actual_price": 999.0
    },
    {
        "name": "Hikvision 2MP 8 Ch HD DVR & 2MP 2 Dome -4 Bullet Camera HD Combo kit, Include All Require Accessories for 6 Camera Install...",
        "ratings": 4.2,
        "no_of_ratings": 18,
        "discount_price": 19399.0,
        "actual_price": 27000.0
    },
    {
        "name": "Cougar Speed Resistor | Nylon Harness with Padded Shoulder Strap | Resistance Training Power Harness",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 520.0,
        "actual_price": 600.0
    },
    {
        "name": "Adidas Mens Ligra 7 M Indoor Court Shoe",
        "ratings": 4.1,
        "no_of_ratings": 70,
        "discount_price": 3827.0,
        "actual_price": 5999.0
    },
    {
        "name": "BIBA Women Cotton Salwar Suit Set",
        "ratings": 3.7,
        "no_of_ratings": 192,
        "discount_price": 1999.0,
        "actual_price": 3999.0
    },
    {
        "name": "FabSeasons Winter Outdoor Ear Muffs / Warmer for Men and Women for protection from Cold, Value Combo Pack of 4 & 8",
        "ratings": 4.1,
        "no_of_ratings": 362,
        "discount_price": 279.0,
        "actual_price": 499.0
    },
    {
        "name": "Michael Kors Analog Champagne Dial Women's Watch-MK5354",
        "ratings": 4.5,
        "no_of_ratings": 1314,
        "discount_price": 16995.0,
        "actual_price": 21995.0
    },
    {
        "name": "Adidas Mens M 3S Fl Hd Sweatshirt (Hs6076_2Xl, Dark Grey Heather/Black, 2Xl)",
        "ratings": 3.5,
        "no_of_ratings": 11,
        "discount_price": 2439.0,
        "actual_price": 3999.0
    },
    {
        "name": "Ibtida Women's Georgette Chikankari Kurti",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 899.0,
        "actual_price": 1950.0
    },
    {
        "name": "Amazon Brand - House & Shields Men's Regular Fit Woven Shorts",
        "ratings": 4.0,
        "no_of_ratings": 303,
        "discount_price": 324.07,
        "actual_price": 1999.0
    },
    {
        "name": "Avantika Fashion Women's Adorable Kanjivaram Soft Silk Saree With Blouse Piece",
        "ratings": 3.8,
        "no_of_ratings": 358,
        "discount_price": 555.0,
        "actual_price": 1999.0
    },
    {
        "name": "Miraan Women Cotton Unstitched Dress Material (SAN1414, Blue, Free Size)",
        "ratings": 3.8,
        "no_of_ratings": 100,
        "discount_price": 689.0,
        "actual_price": 2697.0
    },
    {
        "name": "Aaishwarya Solid Antique Gold Plated 13mm Hip Hop Necklace, 90s Punk Style Long Chain Necklace Stainless Steel For Men.",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 2199.0
    },
    {
        "name": "Barmunda Gems 6.25 Ratti / 5.63 Carat Blue Sapphire Stone Original Certified Neelam Loose Gemstone A+ Quality",
        "ratings": 3.4,
        "no_of_ratings": 10,
        "discount_price": 849.0,
        "actual_price": 3999.0
    },
    {
        "name": "Van Heusen Mens Round Neck Solid Vest Thermal Top (Black_Large)",
        "ratings": 3.6,
        "no_of_ratings": 4,
        "discount_price": 1100.0,
        "actual_price": 1349.0
    },
    {
        "name": "Maddy mens Clog Clog",
        "ratings": 2.7,
        "no_of_ratings": 15,
        "discount_price": 449.0,
        "actual_price": 999.0
    },
    {
        "name": "RIGO Women Blue Cut-Out Waist Round Neck Full Sleeve Activewear Crop Top",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 379.0,
        "actual_price": 999.0
    },
    {
        "name": "Flying Machine Men's Solid Regular Fit Casual Shirt (FMSH7118_Yellow M)",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 856.0,
        "actual_price": 1499.0
    },
    {
        "name": "Malabar Gold & Diamonds 22k (916) Gold with Diamond Bracelet for Women (Yellow)",
        "ratings": 4.1,
        "no_of_ratings": 2,
        "discount_price": 20029.0,
        "actual_price": 22999.0
    },
    {
        "name": "Hammonds Flycatcher Genuine Leather Toiletry Bag for Men, Brown | Leather Dopp Kit | Toiletry Bag | Shaving Kit Bag for Me...",
        "ratings": 4.3,
        "no_of_ratings": 148,
        "discount_price": 1549.0,
        "actual_price": 5999.0
    },
    {
        "name": "OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)",
        "ratings": 4.2,
        "no_of_ratings": 36800,
        "discount_price": 14999.0,
        "actual_price": 19999.0
    },
    {
        "name": "Godrej 195 L 3 Star Direct-Cool Single Door Refrigerator (RD UNO 1953 PTDF AQ WN, Aqua Wine, Cool Lock Technology, 2022 Mo...",
        "ratings": 4.0,
        "no_of_ratings": 60,
        "discount_price": 15490.0,
        "actual_price": 18490.0
    },
    {
        "name": "Big Fox Men's Designer Loafer Shoes",
        "ratings": 3.4,
        "no_of_ratings": 59,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Urban Modern VAAYU JET Plane Solar Car Air Freshener Natural Aromatherapy with Strong Solar Panel working under sunlight f...",
        "ratings": 3.8,
        "no_of_ratings": 61,
        "discount_price": 749.0,
        "actual_price": 1499.0
    },
    {
        "name": "Women's Regular Fit Cigarette Pants",
        "ratings": 4.1,
        "no_of_ratings": 17,
        "discount_price": 514.0,
        "actual_price": 1249.0
    },
    {
        "name": "ANNI DESIGNER Women's Cotton Blend Traditional Straight Printed Kurta and Pant Set (Danapa)",
        "ratings": 3.8,
        "no_of_ratings": 69,
        "discount_price": 479.0,
        "actual_price": 2599.0
    },
    {
        "name": "Go Crackers Amber Broken Walnuts Kernels Without Shell 1Kg, (250g x 4)",
        "ratings": 2.5,
        "no_of_ratings": 43,
        "discount_price": 619.0,
        "actual_price": 1180.0
    },
    {
        "name": "3110 Tripod Combo with Selfi Remote and Collar Mic 1.5 Meter Long, Mobile Stand Holder, Fold-able, Portable Adjustable, Al...",
        "ratings": 3.0,
        "no_of_ratings": 197,
        "discount_price": 389.0,
        "actual_price": 1499.0
    },
    {
        "name": "crocs Unisex-Adult Bayaband Clog Lemon/White Clog - 8 UK Men/ 9 UK Women (M9W11) (205089-7B0)",
        "ratings": 4.9,
        "no_of_ratings": 9,
        "discount_price": 2607.0,
        "actual_price": 4495.0
    },
    {
        "name": "Campus Sutra Women’s Winter Wear Coat Regular Fit For Casual Wear | Collared Neck | Full Sleeve | Buttoned | Latest Stylis...",
        "ratings": 3.8,
        "no_of_ratings": 23,
        "discount_price": 1139.0,
        "actual_price": 4999.0
    },
    {
        "name": "Voylla Amaira Leaf Drop Earrings for Women and Girls",
        "ratings": 3.9,
        "no_of_ratings": 13,
        "discount_price": 199.0,
        "actual_price": 499.0
    },
    {
        "name": "blackberrys Slim Fit Casuale Shirt",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 869.0,
        "actual_price": 1995.0
    },
    {
        "name": "SSK WiFi Endoscope Camera 2MP (1600x1200 Pixels), 5 Meter Hard Wire (Semi Rigid), 8mm Dia for Indoor and Outdoor Usage, Su...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 4444.0,
        "actual_price": 6999.0
    },
    {
        "name": "The Souled Store|Official Manchester City: Crest Mens and Boys Vests| Regular fit Graphic Printed| Sleeveless Sleeve|80% C...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 944.0,
        "actual_price": 999.0
    },
    {
        "name": "Todani Jems 14.25 Ratti Pukhraj Stone Original Certified Yellow Sapphire Gemstone Gold Plated Adjustable Woman Man Ring Wi...",
        "ratings": 2.0,
        "no_of_ratings": 4,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "Amante Non-Padded Wirefree Seamless T-Shirt Bra",
        "ratings": 4.1,
        "no_of_ratings": 49,
        "discount_price": 476.0,
        "actual_price": 595.0
    },
    {
        "name": "To The Nines Metal Lion Lapel Pin/Brooch for Men",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 464.0,
        "actual_price": 1499.0
    },
    {
        "name": "KESAR ZEMS Gold Plated Jay Mata Di Kada For Unisex (Size:2.6 Inche) Golden.",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 247.0,
        "actual_price": 475.0
    },
    {
        "name": "SAVIAURA 1 Sheet 2 in 1 Photography Backdrop 3D Flat Lay Tabletop Double-Sided Photo Background PVC Wrinkle-Free Small Pro...",
        "ratings": 3.7,
        "no_of_ratings": 92,
        "discount_price": 237.0,
        "actual_price": 750.0
    },
    {
        "name": "Amazon Brand - Symbol Women's Skinny Jeans",
        "ratings": 3.8,
        "no_of_ratings": 1582,
        "discount_price": 799.0,
        "actual_price": 2399.0
    },
    {
        "name": "JASORA Women's Printed Hosiery Cotton Full Sleeve Nighty/Nightgown/Maxi (Size - X-Large) - RBC-446 Multicolour",
        "ratings": 2.0,
        "no_of_ratings": 1,
        "discount_price": 899.0,
        "actual_price": 1699.0
    },
    {
        "name": "Elk Men's Cotton Trunks (Pack of 6)",
        "ratings": 3.8,
        "no_of_ratings": 178,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "Guru Kripa Enterprises Women's Stole (Blue) SIZE(170CM X 55CM) HANDBLOCK PRINTED",
        "ratings": 3.7,
        "no_of_ratings": 29,
        "discount_price": 289.0,
        "actual_price": 310.0
    },
    {
        "name": "Grofilo Beach Bags Swimming Necessity PVC Waterproof Dry For Many AlllSize Available for Boating, Kayaking, Heavey-Duty PV...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 999.0
    },
    {
        "name": "Amazon Brand - Symbol Women's Regular Fit T-Shirt",
        "ratings": 4.1,
        "no_of_ratings": 304,
        "discount_price": 323.0,
        "actual_price": 799.0
    },
    {
        "name": "DH Discovery DJ 205 II 250w Wireless Home Bluetooth Speaker Mic Included (Black)",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 14999.0,
        "actual_price": 35990.0
    },
    {
        "name": "SKYBEN Men's Track Pants 002 LG in Cotton Stuff",
        "ratings": 3.1,
        "no_of_ratings": 43,
        "discount_price": 390.0,
        "actual_price": 899.0
    },
    {
        "name": "Klepe Men's Vulcanised PU Sneakers-",
        "ratings": 3.2,
        "no_of_ratings": 80,
        "discount_price": 809.0,
        "actual_price": 2699.0
    },
    {
        "name": "SPL Kavis Leather Men's Wallet (K0028_Brown)",
        "ratings": 4.2,
        "no_of_ratings": 50,
        "discount_price": 1299.0,
        "actual_price": 2499.0
    },
    {
        "name": "Americanapple Personalized Printed Tshirts Customised Printed Photo Text Round Neck Half Sleeve Tshirt YouTube Tshirt for ...",
        "ratings": 4.0,
        "no_of_ratings": 228,
        "discount_price": 443.0,
        "actual_price": 1299.0
    },
    {
        "name": "Nut Toppers Long seedless Green Raisins 500g Value Pack | Kishmish 500g | kismis 500gm | Premium natural green raisins |",
        "ratings": 4.3,
        "no_of_ratings": 12,
        "discount_price": 254.0,
        "actual_price": 310.0
    },
    {
        "name": "ABROS Men's Roxwell ASGO0118 Sports Shoes/Casual Shoes/Running Shoes",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 1367.0,
        "actual_price": 1799.0
    },
    {
        "name": "CableCreation USB B to USB C Printer Cable 6.6FT,USB C to USB B 2.0 Printer Cable,Scanner Printer Cable to USB C MIDI Cabl...",
        "ratings": 4.4,
        "no_of_ratings": 7341,
        "discount_price": 953.0,
        "actual_price": 1699.0
    },
    {
        "name": "SHOPEE Branded Lens Hood Compatible EW-63C for Canon EF-S 18-55mm f/3.5-5.6 is STM -Black",
        "ratings": 3.7,
        "no_of_ratings": 3187,
        "discount_price": 175.0,
        "actual_price": 500.0
    },
    {
        "name": "Levi's Men's Slim Fit Shirt",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 1667.0,
        "actual_price": 2099.0
    },
    {
        "name": "Sparx",
        "ratings": 4.0,
        "no_of_ratings": 15,
        "discount_price": 949.0,
        "actual_price": 1049.0
    },
    {
        "name": "Wired Earphones for OnePlus Nord/One Plus Nord Earphone Original Like Wired Stereo Deep Bass Head Hands-free Headset Earbu...",
        "ratings": 2.0,
        "no_of_ratings": 2,
        "discount_price": 349.0,
        "actual_price": 999.0
    },
    {
        "name": "Zyla Women Textured Comfort Wedge Heel Sandals",
        "ratings": 3.0,
        "no_of_ratings": 2,
        "discount_price": 799.0,
        "actual_price": 999.0
    },
    {
        "name": "Cane Bamboo Hanging Round Pendant Lamp Shade (8-Inch, Brown) -Set of 2 Pieces",
        "ratings": 4.1,
        "no_of_ratings": 18,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "Fabnest Women Indigo Chevron Cotton Sleeveless Straight Dress with a Side Slit-Plus Size",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 1349.0,
        "actual_price": 2500.0
    },
    {
        "name": "Women's Butt Lifter Low Waist Panties! Padded Seamless Bottom Butt Hip Enhancing Briefs, Waist Shaper Underwear Panties (P...",
        "ratings": 2.4,
        "no_of_ratings": 2,
        "discount_price": 529.0,
        "actual_price": 999.0
    },
    {
        "name": "HUF & NUF Non Toxic Silicone Giraffe Shape Teether and Fruit Shape teether BPA Free for Baby/Toddlers/Infants/Children Pac...",
        "ratings": 4.0,
        "no_of_ratings": 7,
        "discount_price": 330.0,
        "actual_price": 380.0
    },
    {
        "name": "Clogs for Men Combo (Pack of 4) Multicolour",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 775.0,
        "actual_price": 1400.0
    },
    {
        "name": "LeeRooy RAJASTHANI JAIPURI TRADITIONAL HANDWORK MAROON COLOR DESIGNER SLING |HAND BAG|PURSE|CLUTCH|HAND BAG|EMBROIDERED FO...",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 449.0,
        "actual_price": 899.0
    },
    {
        "name": "Studio Shringaar Women's Polyester Silk Sleeveless Saree Blouse",
        "ratings": 4.5,
        "no_of_ratings": 8,
        "discount_price": 625.0,
        "actual_price": 1595.0
    },
    {
        "name": "Rajnandini Women's Pure Cambric Cotton Kalamkari hand block print Straight Kurta Set With Dupatta (Ready To Wear; Navy Blu...",
        "ratings": 3.9,
        "no_of_ratings": 44,
        "discount_price": 789.0,
        "actual_price": 4996.0
    },
    {
        "name": "5 O'CLOCK Sports Tummy Twister Abdominal ABS Exerciser Body Toner-Fat Buster Oblique Workout Perfect Waist Trimmer Home Gy...",
        "ratings": 3.7,
        "no_of_ratings": 19,
        "discount_price": 309.0,
        "actual_price": 900.0
    },
    {
        "name": "URBN 10000 mAh Li-Polymer Ultra Compact Power Bank | 12W Fast Charge | Dual USB Output | Type C & Micro Input | Pocket Siz...",
        "ratings": 3.9,
        "no_of_ratings": 37028,
        "discount_price": 999.0,
        "actual_price": 2499.0
    },
    {
        "name": "Power Men's Gallop Running Shoes",
        "ratings": 4.0,
        "no_of_ratings": 2150,
        "discount_price": 766.0,
        "actual_price": 1299.0
    },
    {
        "name": "Leather Retail Women's Solid Regular Jacket",
        "ratings": 3.7,
        "no_of_ratings": 181,
        "discount_price": 1759.0,
        "actual_price": 3999.0
    },
    {
        "name": "Havells OFR 11 Wave Fins Heater with Fan Beige 2900 Watts",
        "ratings": 4.1,
        "no_of_ratings": 955,
        "discount_price": 11300.0,
        "actual_price": 16325.0
    },
    {
        "name": "SIRIL Women's Crepe Crop Printed Top(299TK161-L_Blue)",
        "ratings": 3.4,
        "no_of_ratings": 3,
        "discount_price": 229.0,
        "actual_price": 1090.0
    },
    {
        "name": "Ghelonadi 3 Pieces Women Cotton Seamless Panties Set Medium Waist Briefs Hipster Underwear Random Color Size_Free Multicolour",
        "ratings": 3.6,
        "no_of_ratings": 125,
        "discount_price": 345.0,
        "actual_price": 499.0
    },
    {
        "name": "mastBus Perfume Spray Bottles 100ml Pack of 2 Clear Plastic Empty Fine Mist Set, Small Refillable Liquid Containers (Trans...",
        "ratings": 4.1,
        "no_of_ratings": 226,
        "discount_price": 119.0,
        "actual_price": 399.0
    },
    {
        "name": "NISHAJ Large First Aid Kit Travel Pouch Medicine Storage Bag For Traveling, Family Picnic, Long Trip, Tour Usable Toiletry...",
        "ratings": 3.4,
        "no_of_ratings": 5,
        "discount_price": 373.0,
        "actual_price": 859.0
    },
    {
        "name": "Paper Plane Design Coasters Set of 4 Designer Patterns for Home,Bar, Office and Gifting. (A)",
        "ratings": 4.2,
        "no_of_ratings": 110,
        "discount_price": 429.0,
        "actual_price": 745.0
    },
    {
        "name": "MIXOSA Electric Handheld Milk Wand Mixer Frother for Latte Coffee Hot Milk, Milk Frother for Coffee, Egg Beater, Hand Blen...",
        "ratings": 3.7,
        "no_of_ratings": 13,
        "discount_price": 219.0,
        "actual_price": 699.0
    },
    {
        "name": "Skechers mens Gambix 2.0-utopo SLIPPER",
        "ratings": 3.8,
        "no_of_ratings": 118,
        "discount_price": 2849.0,
        "actual_price": 2999.0
    },
    {
        "name": "GIVA 925 Sterling Silver Rose Gold Heap of Love Bracelet, Adjustable | Gifts for Women and Girls | With Certificate of Aut...",
        "ratings": 2.1,
        "no_of_ratings": 3,
        "discount_price": 1899.0,
        "actual_price": 3798.0
    },
    {
        "name": "Pepe Jeans Men's Slim Jeans",
        "ratings": 4.0,
        "no_of_ratings": 19,
        "discount_price": 1380.0,
        "actual_price": 2999.0
    },
    {
        "name": "Freshwind Non-Electric 100% Activated Charcoal Air Purifier, Deodorizer, Odor Absorber and Dehumidifier for Wardrobe, Frid...",
        "ratings": 3.6,
        "no_of_ratings": 45,
        "discount_price": 690.0,
        "actual_price": 1497.0
    },
    {
        "name": "Swiss Beauty Stain Matte Lipstick | Long Lasting, Hydrating & Lightweight Lipstick | Hot Nude, 3.4gm| ",
        "ratings": 3.8,
        "no_of_ratings": 2384,
        "discount_price": 199.0,
        "actual_price": 249.0
    },
    {
        "name": "Colorplus Solid Cotton Dark Indigo Ainsley Collar Shirt for Men",
        "ratings": 2.8,
        "no_of_ratings": 7,
        "discount_price": 1009.0,
        "actual_price": 2099.0
    },
    {
        "name": "Bstar Men's Vest Slim n Lift Tummy Tucker Body Shaper Size Medium - White(GE_MensVest_White_Medium)",
        "ratings": 2.6,
        "no_of_ratings": 8,
        "discount_price": 479.0,
        "actual_price": 999.0
    },
    {
        "name": "AEROPOSTALE Men Shirts",
        "ratings": 4.0,
        "no_of_ratings": 2,
        "discount_price": 1080.0,
        "actual_price": 2399.0
    },
    {
        "name": "Equila Premium Loafers for Men",
        "ratings": 3.6,
        "no_of_ratings": 111,
        "discount_price": 649.0,
        "actual_price": 999.0
    },
    {
        "name": "Tripole Walker 65 litres Rucksack with 20 Litre Foldable Day Pack | Internal Frame with Metal Rod | Rain Cover | Bottom Op...",
        "ratings": 4.4,
        "no_of_ratings": 940,
        "discount_price": 2609.0,
        "actual_price": 3799.0
    },
    {
        "name": "Allin Exporters LH-2030B Top Fill Humidifier with Touch Screen, Night Light & Essential Oil Tray Ultrasonic Cool Mist for ...",
        "ratings": 3.5,
        "no_of_ratings": 97,
        "discount_price": 2339.0,
        "actual_price": 2999.0
    },
    {
        "name": "Elle Analog Mother of Pearl Dial Women's Watch-ELL21004",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 2198.0,
        "actual_price": 5495.0
    },
    {
        "name": "Ambrosia Organic Farm Amarnath Rice Cakes | Biggest Pack | Vegan, All Natural, Gluten Free (Pack of 1)",
        "ratings": 4.5,
        "no_of_ratings": 6,
        "discount_price": 135.0,
        "actual_price": 200.0
    },
    {
        "name": "BLUE SHINE Gold Plated and Cubic Zirconia Adjustable Ring for Unisex-adult Husband Wife Birthday Anniversary",
        "ratings": 3.5,
        "no_of_ratings": 27,
        "discount_price": 449.0,
        "actual_price": 1499.0
    },
    {
        "name": "First Flavour Premium Danedaar Tea Strong Kadak Regular Black Tea Single Origin Tea, Fresh Assam Tea Premium Chai Pati Loo...",
        "ratings": 4.0,
        "no_of_ratings": 33,
        "discount_price": 309.0,
        "actual_price": 440.0
    },
    {
        "name": "Shree Dhootpapeshwar Ltd. Shwaskas Chintamani Rasa (30 Tab)",
        "ratings": 4.4,
        "no_of_ratings": 41,
        "discount_price": 2462.0,
        "actual_price": 3856.0
    },
    {
        "name": "Optify Premium Blue Ray Cut Antiglare Power Reading Glasses For Men And Women(+1.50)",
        "ratings": 3.9,
        "no_of_ratings": 51,
        "discount_price": 399.0,
        "actual_price": 699.0
    },
    {
        "name": "BSB HOME Cotton Feel All Around Elastic Fitted Glace Printed QueenSize Double Bed Bedsheet with 2 Large Pillow Covers Fits...",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "BABY DESIRE Women's Printed Soft and Silky 100% Cotton Nighty Nightdress Nightwear Knee Length Short Sleeve Breathable wit...",
        "ratings": 4.3,
        "no_of_ratings": 29,
        "discount_price": 350.0,
        "actual_price": 999.0
    },
    {
        "name": "Ibtida Women's Georgette Chikankari Kurti",
        "ratings": 3.8,
        "no_of_ratings": 9,
        "discount_price": 899.0,
        "actual_price": 1950.0
    },
    {
        "name": "INKMILAN Women's Elephant Vintage Embroidery Wide Butterfly Strap Modern Traditions Bag, Mini Doctor Bag Clutch Crossbody ...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1699.0,
        "actual_price": 4999.0
    },
    {
        "name": "MODGET MOG X3 10W Stereo Bluetooth Speaker with Built in Mic - Black",
        "ratings": 3.5,
        "no_of_ratings": 2,
        "discount_price": 1499.0,
        "actual_price": 3990.0
    },
    {
        "name": "pranjals house 13 inch Leather Messenger Side Bags for Men, Brown",
        "ratings": 3.5,
        "no_of_ratings": 33,
        "discount_price": 1499.0,
        "actual_price": 2599.0
    },
    {
        "name": "uppercase Medium 23 Ltrs Tall Boy (14.6 inch) Laptop Backpack 2500EBP1 3x more water resistant sustainable bag with rain p...",
        "ratings": 4.1,
        "no_of_ratings": 184,
        "discount_price": 1700.0,
        "actual_price": 2300.0
    },
    {
        "name": "NETFLIP Women's Hooded Cotton Half Sleeve Zipper Hoodie(Zip Hoodie-H04)",
        "ratings": 3.4,
        "no_of_ratings": 33,
        "discount_price": 699.0,
        "actual_price": 1999.0
    },
    {
        "name": "BODARA | 5 in 1 Keyboard & Earphone Cleaner Keyboard Cleaning Brush Laptop Cleaning Kit Cleaning Pen for Airpods Cleaner S...",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 239.0,
        "actual_price": 479.0
    },
    {
        "name": "Zeniso® Men's Pants Simple Four Hole Buttons Pack of 4 Dozens, Total 48 Pieces for Sewing, Knitting, Dress Making, Decorat...",
        "ratings": 3.6,
        "no_of_ratings": 6,
        "discount_price": 99.0,
        "actual_price": 600.0
    },
    {
        "name": "True Shape Women Printed Maternity Straight Kurti Dress with Concealed Feeding Zip for Pregnancy & Motherhood",
        "ratings": 4.1,
        "no_of_ratings": 233,
        "discount_price": 575.0,
        "actual_price": 2199.0
    },
    {
        "name": "Levi's Women Jeans",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 1199.0,
        "actual_price": 2399.0
    },
    {
        "name": "CleanBold® Max Power Magic Eraser, Extra Durable Melamine Sponge, 4X Stronger, Pack of 6 Chemical Free Multipurpose Non-Sc...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 430.0,
        "actual_price": 699.0
    },
    {
        "name": "AWESOME FASHIONS Cream Synthetic Women's Clutch (AF059)",
        "ratings": 4.2,
        "no_of_ratings": 48,
        "discount_price": 199.0,
        "actual_price": 799.0
    },
    {
        "name": "Miss Chase Women's Teal V-Neck Cap Sleeve Solid Wrapped Polyester Knee-Long Dress",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 978.0,
        "actual_price": 2445.0
    },
    {
        "name": "Audiovan Projector Tripod Floor Stand Height 3.5 Feet to 6 Feet Plate Surface 14.5 x 10.5 Inches",
        "ratings": 4.6,
        "no_of_ratings": 3,
        "discount_price": 2295.0,
        "actual_price": 8600.0
    },
    {
        "name": "Adidas Men's Synthetic CRI Rise V2 Ftwwht/Solred/Vicblu Cricket Shoes - 11 UK",
        "ratings": 2.5,
        "no_of_ratings": 2,
        "discount_price": 4139.0,
        "actual_price": 4599.0
    },
    {
        "name": "BIBA Womens Printed Palazzos",
        "ratings": 3.7,
        "no_of_ratings": 95,
        "discount_price": 377.0,
        "actual_price": 1199.0
    },
    {
        "name": "ElloZia 15L Outdoor Waterproof Trekking Dry Bag Camping Backpack Swimming Beach Bike Accessories Ocean Pack Water Resistant",
        "ratings": 3.1,
        "no_of_ratings": 2,
        "discount_price": 549.0,
        "actual_price": 849.0
    },
    {
        "name": "Peora Gold Plated Floral Studded Jhumki Traditional Wedding Earrings for Women",
        "ratings": 4.4,
        "no_of_ratings": 4,
        "discount_price": 419.0,
        "actual_price": 1995.0
    },
    {
        "name": "GoSriKi Women's Cotton Blend Straight Printed Kurta with Palazzo (Nampati-GO)",
        "ratings": 4.7,
        "no_of_ratings": 10,
        "discount_price": 499.0,
        "actual_price": 2599.0
    },
    {
        "name": "SHOPEE Locking Ball Head with Phone Holder and Hot Shoe Adapter Set for use with DLSR or Tripod. Easily Attach Phone Mount...",
        "ratings": 3.5,
        "no_of_ratings": 56,
        "discount_price": 275.0,
        "actual_price": 700.0
    },
    {
        "name": "Arrow Men Brown and Blue Long Sleeve Check Cotton Linen Casual Shirt",
        "ratings": 3.4,
        "no_of_ratings": 15,
        "discount_price": 818.0,
        "actual_price": 2599.0
    },
    {
        "name": "Lux Men's Cotton Trunk (Pack of 5)",
        "ratings": 3.9,
        "no_of_ratings": 67,
        "discount_price": 700.0,
        "actual_price": 750.0
    },
    {
        "name": "Puma Unisex-Adult Ibero Ii Football Shoe",
        "ratings": 3.5,
        "no_of_ratings": 3,
        "discount_price": 3887.0,
        "actual_price": 5999.0
    },
    {
        "name": "crocs Unisex-Child Bayaband Clog K Ballerina Pink/Candy Pink Clog - 1.5-2 Years, 5 Kids UK, 12.3 cms (C5) (207018-6TG)",
        "ratings": 3.2,
        "no_of_ratings": 29,
        "discount_price": 1422.0,
        "actual_price": 2995.0
    },
    {
        "name": "Sukkhi Incredible Pearl Gold Plated Peacock Long Haram Necklace Set for Women (SKR70421), pink & green, free size",
        "ratings": 3.1,
        "no_of_ratings": 10,
        "discount_price": 489.0,
        "actual_price": 1630.0
    },
    {
        "name": "co2crea Hard Travel Case for JBL Charge 4 Waterproof Bluetooth Speaker (Black)",
        "ratings": 4.8,
        "no_of_ratings": 7616,
        "discount_price": 5419.0,
        "actual_price": 8419.0
    },
    {
        "name": "Zemic Umbrella Umbrella for Men, Umberallas for Rain Big Size Men, Winproof Umberalla Large for Man,Women,Kids,Girls,Boys...",
        "ratings": 3.4,
        "no_of_ratings": 271,
        "discount_price": 552.0,
        "actual_price": 2000.0
    },
    {
        "name": "rangita Women Chanderi Pink Sequin Yoke Embroidered Calf Length Straight Kurti",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 849.0,
        "actual_price": 1399.0
    },
    {
        "name": "Joyalukkas 22KT Yellow Gold Drop Earrings for Girls",
        "ratings": 2.3,
        "no_of_ratings": 11,
        "discount_price": 15638.0,
        "actual_price": 16445.0
    },
    {
        "name": "Philips Fy3433 Nanoprotect 3000 Series True Hepa3 Filter For Air Purifier (Multicolor)",
        "ratings": 4.4,
        "no_of_ratings": 610,
        "discount_price": 2849.0,
        "actual_price": 3395.0
    },
    {
        "name": "Harions Camping and Outdoor Tent for Cloth Changing Shower Picnic Portable Camp Toilet Tent (Polyester,190 cm, 1 Person)",
        "ratings": 4.0,
        "no_of_ratings": 36,
        "discount_price": 1499.0,
        "actual_price": 3499.0
    },
    {
        "name": "FROH FEET Comfort Platform Casual Heels For Woman Latest Stylish Design for Women for All Occassions",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 649.0,
        "actual_price": 1995.0
    },
    {
        "name": "DAZIBAO® Double Toning Resistance Tube Pull Rope Elastic Rubber Exercise Band for Stretching, Workout, Home Gym and Toning...",
        "ratings": 3.8,
        "no_of_ratings": 2337,
        "discount_price": 499.0,
        "actual_price": 1099.0
    },
    {
        "name": "Shoe Island ® Premium Class Designer Brogues Jet Black Slip-On Patent Leatherette Party Formal Shoes",
        "ratings": 4.0,
        "no_of_ratings": 8,
        "discount_price": 612.0,
        "actual_price": 999.0
    },
    {
        "name": "eCraftIndia 'Golden Bal Gopal Krishna Having Makhan' Decorative Showpiece (Metal, 8 cm x 9 cm, Golden, AGK507)",
        "ratings": 4.2,
        "no_of_ratings": 101,
        "discount_price": 229.0,
        "actual_price": 1499.0
    },
    {
        "name": "AYSIS Umbrella Umbrella for Men, Umberallas for Rain Big Size Men, Winproof Umberalla Large for Man,Women,Kids,Girls,Boys...",
        "ratings": 4.4,
        "no_of_ratings": 58,
        "discount_price": 549.0,
        "actual_price": 2000.0
    },
    {
        "name": "Quote Marshals Men's Regular Fit T-Shirt",
        "ratings": 4.2,
        "no_of_ratings": 15,
        "discount_price": 599.0,
        "actual_price": 1098.0
    },
    {
        "name": "Samsung 163 cm (65 inches) Wondertainment Series 4K Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray)",
        "ratings": 4.4,
        "no_of_ratings": 217,
        "discount_price": 81999.0,
        "actual_price": 129900.0
    },
    {
        "name": "SPYKART Women's Lace Padded Wire Free Bralette Bra",
        "ratings": 4.3,
        "no_of_ratings": 6,
        "discount_price": 199.0,
        "actual_price": 699.0
    },
    {
        "name": "Puma Mens Velocity Trn Running Shoe",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 1799.0,
        "actual_price": 3999.0
    },
    {
        "name": "C&E HDMI Cable (40 Feet/12 Meters) Supports 4K@30Hz, High Speed, Hand-Tested, HDMI Ready - HD, 10.2Gbps, Audio Return Chan...",
        "ratings": 4.5,
        "no_of_ratings": 499,
        "discount_price": 1379.0,
        "actual_price": 2799.0
    },
    {
        "name": "Wrangler Men's Slim Fit T-Shirt",
        "ratings": 3.8,
        "no_of_ratings": 4,
        "discount_price": 558.0,
        "actual_price": 1399.0
    },
    {
        "name": "JUGULAR Men's Polyester Solid Men Stylish Cargo Track Pants",
        "ratings": 2.8,
        "no_of_ratings": 33,
        "discount_price": 699.0,
        "actual_price": 999.0
    },
    {
        "name": "Spykar Mid Tone Wash Cotton Super Skinny Fit Mens Jeans (S21R-01BA-023GR-P)",
        "ratings": 2.5,
        "no_of_ratings": 3,
        "discount_price": 1979.0,
        "actual_price": 3599.0
    },
    {
        "name": "United Colors of Benetton Men's Checkered Slim Fit Casual Shirt",
        "ratings": 3.9,
        "no_of_ratings": 77,
        "discount_price": 839.0,
        "actual_price": 2799.0
    },
    {
        "name": "Reebok Men's Speed-o-Nick Running Shoe",
        "ratings": 4.0,
        "no_of_ratings": 137,
        "discount_price": 1686.0,
        "actual_price": 3599.0
    },
    {
        "name": "Parteet Cute Multipurpose Coin Earphone Pouch Return Gifts for Kids (Pack of 6)",
        "ratings": 3.8,
        "no_of_ratings": 45,
        "discount_price": 499.0,
        "actual_price": 900.0
    },
    {
        "name": "Hidesign Women's Satchel (Green)",
        "ratings": 4.1,
        "no_of_ratings": 38,
        "discount_price": 6507.0,
        "actual_price": 8795.0
    },
    {
        "name": "Dorvik Unisex Original Machh Mani Locket For To remove Rahu Dosha",
        "ratings": 4.0,
        "no_of_ratings": 1,
        "discount_price": 260.0,
        "actual_price": 999.0
    },
    {
        "name": "Skudgear Great Non-Slip Headband Workout Lycra Sweatband for Men & Women (White, One Size, 1pc) | Gym Equipment | Running,...",
        "ratings": 3.4,
        "no_of_ratings": 50,
        "discount_price": 269.0,
        "actual_price": 999.0
    },
    {
        "name": "Coloron Dreamz Canvas Packing Cubes / Pouch / Bag Travel Organiser (White, Set of 4)",
        "ratings": 3.9,
        "no_of_ratings": 32,
        "discount_price": 599.0,
        "actual_price": 1200.0
    },
    {
        "name": "Himalaya Rumalaya Forte 30 Tablets (Pack of 4)",
        "ratings": 4.2,
        "no_of_ratings": 7,
        "discount_price": 573.0,
        "actual_price": 600.0
    },
    {
        "name": "Lazard by Khadim Men Canvas Sneakers",
        "ratings": 3.5,
        "no_of_ratings": 6,
        "discount_price": 769.0,
        "actual_price": 1399.0
    },
    {
        "name": "Stoked Kombucha - Pineapple Ginger Kombucha 200 ml (Pack of 6) | Fizzy Fermented Tea | Probiotic Drink",
        "ratings": 4.6,
        "no_of_ratings": 7,
        "discount_price": 720.0,
        "actual_price": 900.0
    },
    {
        "name": "The Souled Store |Sage Round Neck Green Color Half Sleeve Mens and Boys T-Shirt|Solid 100% Cotton | Oversized T-Shirts",
        "ratings": 3.8,
        "no_of_ratings": 23,
        "discount_price": 944.0,
        "actual_price": 1499.0
    },
    {
        "name": "Q&Q Analog Black Dial Women's Watch-QA97J402Y",
        "ratings": 3.9,
        "no_of_ratings": 3,
        "discount_price": 1674.0,
        "actual_price": 2495.0
    },
    {
        "name": "Henicepte Men Slimming Tummy Control Chest Compression Hide Gynecomastia Undershirt Shapewear",
        "ratings": 4.1,
        "no_of_ratings": 740,
        "discount_price": 3999.0,
        "actual_price": 7000.0
    },
    {
        "name": "Puma Mens Pacer X Graphicster Idp Sneaker",
        "ratings": 3.8,
        "no_of_ratings": 917,
        "discount_price": 1359.0,
        "actual_price": 3999.0
    },
    {
        "name": "MEENAZ Traditional One Gram Gold Long Stylish Meenakari Maharashtrian Wati Mangal sutra Tanmaniya maglsutra nallapusalu Bl...",
        "ratings": 3.1,
        "no_of_ratings": 11,
        "discount_price": 237.0,
        "actual_price": 3000.0
    },
    {
        "name": "Dyazo 13.3 inch Laptop Bag Sleeve Sleeve Bag Cover for 13 inch Apple Mac Book Air Pro Retina 13 13.3 inch MacBook 13.3 inc...",
        "ratings": 4.4,
        "no_of_ratings": 427,
        "discount_price": 299.0,
        "actual_price": 899.0
    },
    {
        "name": "TYMU Kids GLOING Light Pink Barbi Watch",
        "ratings": 4.6,
        "no_of_ratings": 2,
        "discount_price": 329.0,
        "actual_price": 399.0
    },
    {
        "name": "OM SAI LATEST CREATION Designer Slub Rayon Fully Stitched Straight Kurti for Women & Girls on Jeans Palazzo or Skirt (Plus...",
        "ratings": 3.7,
        "no_of_ratings": 730,
        "discount_price": 359.0,
        "actual_price": 1999.0
    },
    {
        "name": "Hidesign Women's Handbag (Tan)",
        "ratings": 4.3,
        "no_of_ratings": 25,
        "discount_price": 4633.85,
        "actual_price": 9495.0
    },
    {
        "name": "KUVI Printed White Marble Roti Maker with Wooden Belan Enamel Print/White Marble Chakla 10 Inch Diameter with Belan (Print...",
        "ratings": 4.4,
        "no_of_ratings": 184,
        "discount_price": 799.0,
        "actual_price": 949.0
    },
    {
        "name": "Priyaasi PU Leather Paisley Play Printed Sling Bag for Women - Stylish, Trendy, Casual Crossbody Bag with Adjustable Stra...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1299.0,
        "actual_price": 6296.0
    },
    {
        "name": "Jaanvi fashion Women's Embroidered Plastic Mirror Net Dupatta/Chunni",
        "ratings": 3.7,
        "no_of_ratings": 131,
        "discount_price": 330.0,
        "actual_price": 2000.0
    },
    {
        "name": "Voylla Kalbelia Colorful Enamel Statement Necklace",
        "ratings": 5.0,
        "no_of_ratings": 2,
        "discount_price": 489.0,
        "actual_price": 999.0
    },
    {
        "name": "Puma Unisex-Adult Cap",
        "ratings": 4.5,
        "no_of_ratings": 47,
        "discount_price": 949.0,
        "actual_price": 1899.0
    },
    {
        "name": "FLUTE Women's Polyester Above knee Baby Doll",
        "ratings": 3.6,
        "no_of_ratings": 22,
        "discount_price": 248.0,
        "actual_price": 799.0
    },
    {
        "name": "INICIO USB-C to HDMI Cable 4K/60Hz Type C HDTV Adapter Thunderbolt 3 Compatible for MacBook Pro/Air iPad Pro XPS Spectre E...",
        "ratings": 3.4,
        "no_of_ratings": 46,
        "discount_price": 999.0,
        "actual_price": 1999.0
    },
    {
        "name": "Neemiya Women's Rayon Embroidered Anarkali Kurta|Gown for Women|Flared Kurta for Women",
        "ratings": 4.1,
        "no_of_ratings": 307,
        "discount_price": 695.0,
        "actual_price": 1799.0
    },
    {
        "name": "V-Guard VCB14-F030 Automatic Water Pressure Pump Suitable for Hot Water Circulation, Washing Machine, RO Shower- Multicolour",
        "ratings": 4.0,
        "no_of_ratings": 836,
        "discount_price": 4335.0,
        "actual_price": 7000.0
    },
    {
        "name": "ComicSense.xyz Dragon Ball Z Anime Kamehameha Jogger",
        "ratings": 4.1,
        "no_of_ratings": 16,
        "discount_price": 599.0,
        "actual_price": 1299.0
    },
    {
        "name": "Arrow Men Polo Shirt",
        "ratings": 3.8,
        "no_of_ratings": 377,
        "discount_price": 409.0,
        "actual_price": 1299.0
    },
    {
        "name": "LOVICA Women's Cotton Hipster Panty Combo Pack of 3",
        "ratings": 2.8,
        "no_of_ratings": 5,
        "discount_price": 340.0,
        "actual_price": 699.0
    },
    {
        "name": "Peluche Glowing Petals - Silver Colored Brooch / Lapel Pin for Men",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 349.0,
        "actual_price": 1096.0
    },
    {
        "name": "AnjuShree Choice Women Stitched Multi Colour Printed Cotton Kurti",
        "ratings": 3.8,
        "no_of_ratings": 3615,
        "discount_price": 495.0,
        "actual_price": 2384.0
    },
    {
        "name": "Nilu's Collection Latest Collection of Crystal Kada Bracelet for Women and Girls | Elegant Bracelet Stylish Bracelet (Pack...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 349.0,
        "actual_price": 1050.0
    },
    {
        "name": "Aava Naturally Alkaline Mineral Water 200ml | Origin Aravalli Hills | 100% Alkaline pH 8.0+ | Benefits of Calcium & Magnes...",
        "ratings": 4.0,
        "no_of_ratings": 616,
        "discount_price": 449.0,
        "actual_price": 480.0
    },
    {
        "name": "FCUK Analog Unisex Adult Watch (Dial Colored Strap)",
        "ratings": 3.6,
        "no_of_ratings": 14,
        "discount_price": 598.81,
        "actual_price": 3250.0
    },
    {
        "name": "Men's Cotton Regular Fit Track Suit",
        "ratings": 3.6,
        "no_of_ratings": 26,
        "discount_price": 999.0,
        "actual_price": 4999.0
    },
    {
        "name": "global desi Women's Cotton a-line Salwar Suit Set",
        "ratings": 4.4,
        "no_of_ratings": 8,
        "discount_price": 1230.0,
        "actual_price": 5999.0
    },
    {
        "name": "Crucial BX500 480GB 3D NAND SATA 6.35 cm (2.5-inch) SSD (CT480BX500SSD1)",
        "ratings": 4.5,
        "no_of_ratings": 98615,
        "discount_price": 2187.0,
        "actual_price": 3200.0
    },
    {
        "name": "MIRCHI FASHION Women's Chiffon Forest Designer Printed Saree with Blouse Piece",
        "ratings": 3.8,
        "no_of_ratings": 1012,
        "discount_price": 429.0,
        "actual_price": 2699.0
    },
    {
        "name": "Highlark® Premium Exclusive Meta with Leather Keychain Car, Bike & Home Keychain | Heavy Duty Keychain | Key Ring Hook | K...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "Nelle Harper Women's Western (Dark Blue)",
        "ratings": 3.0,
        "no_of_ratings": 1,
        "discount_price": 274.41,
        "actual_price": 949.0
    },
    {
        "name": "LSRP'S Universal Fit (24.5CM) Spin Cover for 6kg, 6.5kg & 7kg LG Washing Machine Safety Cover/Spinner Cap/Dryer Safety Cov...",
        "ratings": 4.4,
        "no_of_ratings": 2,
        "discount_price": 169.0,
        "actual_price": 299.0
    },
    {
        "name": "Jockey Men's Cotton Midi Brief (Pack of 2)(Colors & Print May Vary)",
        "ratings": 4.0,
        "no_of_ratings": 81,
        "discount_price": 398.0,
        "actual_price": 418.0
    },
    {
        "name": "PBROS 2 Pieces PP Spun Filter for PUREIT Classic RO MF UV, 6' INCHES, 5 Micron",
        "ratings": 3.9,
        "no_of_ratings": 156,
        "discount_price": 310.0,
        "actual_price": 1050.0
    },
    {
        "name": "Joker Printed T-Shirt for Men",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 499.0,
        "actual_price": 800.0
    },
    {
        "name": "jd collection Gold Plated Solitaire Modern Cz American Diamond Mangalsutra for Women",
        "ratings": 1.0,
        "no_of_ratings": 2,
        "discount_price": 149.0,
        "actual_price": 299.0
    },
    {
        "name": "F9 FASHION Women's Poly Cotton Micro Bikini Set Exotic Lingeire Set G-String Thongs Lingerie Sets",
        "ratings": 3.5,
        "no_of_ratings": 157,
        "discount_price": 290.0,
        "actual_price": 699.0
    },
    {
        "name": "SIOVS Mini HD Wireless Video Audio Recording Watch Live Full HD 1080P CCTV WiFi IP Camera with Night Vision, Motion Detect...",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 995.0,
        "actual_price": 2999.0
    },
    {
        "name": "Fastrack Analog Pink Dial Women's Watch-NL6078SM07",
        "ratings": 3.7,
        "no_of_ratings": 28,
        "discount_price": 2526.0,
        "actual_price": 3395.0
    },
    {
        "name": "AIV TECH Edge To Edge Tempered Glass For Google Pixel 6A with Easy Installation Kit",
        "ratings": 3.5,
        "no_of_ratings": 51,
        "discount_price": 251.0,
        "actual_price": 999.0
    },
    {
        "name": "KIRONIKNIT School Uniform Plain Sleeveless Sweater - Daffodil",
        "ratings": 4.1,
        "no_of_ratings": 61,
        "discount_price": 499.0,
        "actual_price": 1999.0
    },
    {
        "name": "Peter England Men Polo Shirt",
        "ratings": 4.6,
        "no_of_ratings": 10,
        "discount_price": 599.0,
        "actual_price": 999.0
    },
    {
        "name": "Honeywell Trueno U200 Wireless Bluetooth V5.0 Speaker 10W, IPX6, Upto 15Hrs Playtime, Experience Premium Sound with 44.45m...",
        "ratings": 3.6,
        "no_of_ratings": 316,
        "discount_price": 1999.0,
        "actual_price": 5999.0
    },
    {
        "name": "Glory Sarees Women's Banarasi Artificial Silk Saree With Blouse Piece",
        "ratings": 3.8,
        "no_of_ratings": 1116,
        "discount_price": 799.0,
        "actual_price": 4999.0
    },
    {
        "name": "BabyPro Lab Tested - Certified (Set of 5) Baby Proofing Combo of 2 Metres Edge Guard & 4 Corner Protectors, Thin & Sleek D...",
        "ratings": 4.0,
        "no_of_ratings": 1515,
        "discount_price": 349.0,
        "actual_price": 500.0
    },
    {
        "name": "Tommy Hilfiger Coppel 20 Ltrs Navy Laptop Backpack (TH/COPPELLAP08)",
        "ratings": 4.0,
        "no_of_ratings": 42,
        "discount_price": 1739.0,
        "actual_price": 2899.0
    },
    {
        "name": "ProElite Smart Flip Case Cover for Apple iPad 9.7 inch 5th/6th Gen Air 1 Air 2 A1822 A1823 A1893 A1954 with Stylus Pen, Tr...",
        "ratings": 4.3,
        "no_of_ratings": 3886,
        "discount_price": 549.0,
        "actual_price": 1499.0
    },
    {
        "name": "AVIEMORE Men's Greenwich-25 Running Shoes",
        "ratings": 3.7,
        "no_of_ratings": 66,
        "discount_price": 599.0,
        "actual_price": 1499.0
    },
    {
        "name": "BALLOREX Inlet Nozzle Pack of 3 Suitable for Ballorex, CAZAR, Starq Jpt Resqtech, Btali, Vantro, Bosch Karcher Pressure wa...",
        "ratings": 3.9,
        "no_of_ratings": 6,
        "discount_price": 275.0,
        "actual_price": 650.0
    },
    {
        "name": "ABROS Men's Blaze-N ASSG0183N Sports Shoes",
        "ratings": 2.5,
        "no_of_ratings": 3,
        "discount_price": 764.0,
        "actual_price": 849.0
    },
    {
        "name": "DIGITEK® (DRL-18RT) Profesional 46cm (18 Inch) LED Ring Light with Remote Control, Runs on AC Power with No Shadow apertur...",
        "ratings": 4.0,
        "no_of_ratings": 4707,
        "discount_price": 3199.0,
        "actual_price": 5995.0
    },
    {
        "name": "Adrohai 7 in 1 Electronic Cleaner kit | Keyboard Cleaning Kit | Air pod Cleaner Pen | Earbud Cleaner | Keycap Puller | Ear...",
        "ratings": 5.0,
        "no_of_ratings": 7,
        "discount_price": 359.0,
        "actual_price": 999.0
    },
    {
        "name": "FURTHER Canvas Shoes for Men and Boys Casual and Stylish Sneakers for Gym Sports Training Running Outdoor Flat Sneaker Gen...",
        "ratings": 3.3,
        "no_of_ratings": 5,
        "discount_price": 649.0,
        "actual_price": 999.0
    },
    {
        "name": "Liril Lemon and Tea Tree Oil Body Wash SuperSaver XL Pump Bottle with Long Lasting Fragrance, Glycerine, Paraben Free, Ext...",
        "ratings": 4.4,
        "no_of_ratings": 716,
        "discount_price": 253.0,
        "actual_price": 390.0
    },
    {
        "name": "Max Men Tshirt",
        "ratings": 3.9,
        "no_of_ratings": 38,
        "discount_price": 157.0,
        "actual_price": 299.0
    },
    {
        "name": "Kodak 80 cm (32 inches) HD Ready Certified Android Smart LED TV 32HDX7XPROBL (Black)",
        "ratings": 4.1,
        "no_of_ratings": 2590,
        "discount_price": 9499.0,
        "actual_price": 19499.0
    },
    {
        "name": "Spykar Men's Cotton Slim Fit Printed Halfsleeve T-Shirt (MKT-02BA-053)",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 649.0,
        "actual_price": 1299.0
    },
    {
        "name": "Yellow Chimes Claw Clips for Women Hair Clutches for Women Hair Accessories For Women Set of 4 Pcs Claw Clip Multicolor Bi...",
        "ratings": 5.0,
        "no_of_ratings": 3,
        "discount_price": 315.0,
        "actual_price": 1008.0
    },
    {
        "name": "GIVA 925 Sterling Silver Zircon Clover Charm Anklet|Gifts for Women and Girls | With Certificate of Authenticity and 925 S...",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 1614.0,
        "actual_price": 3399.0
    },
    {
        "name": "blackberrys Men's Slim Fit Shirt",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 959.0,
        "actual_price": 2195.0
    },
    {
        "name": "Featherline Pure Cotton Non Padded Perfect Fitted Women's Everyday Bras",
        "ratings": 3.4,
        "no_of_ratings": 15,
        "discount_price": 575.0,
        "actual_price": 1050.0
    },
    {
        "name": "ExcluZiva Gallery Set Of 1 Blocks Building Peg Board with Beads Blocks Puzzle - Creative Multi Coloured Educational Constr...",
        "ratings": 3.8,
        "no_of_ratings": 33,
        "discount_price": 249.0,
        "actual_price": 429.0
    },
    {
        "name": "Amazon Brand - Inkast Denim Co. Men's Regular Fit Polo Shirt",
        "ratings": 3.7,
        "no_of_ratings": 1366,
        "discount_price": 459.0,
        "actual_price": 1299.0
    },
    {
        "name": "Diving Deep Cute Style Female Student Waterproof Anti Thief School Backpack 10 L Backpack (Black, Pink)",
        "ratings": 4.0,
        "no_of_ratings": 16,
        "discount_price": 289.0,
        "actual_price": 999.0
    },
    {
        "name": "Red Tape Men Tan Solid T-Shirt",
        "ratings": 3.7,
        "no_of_ratings": 39,
        "discount_price": 299.0,
        "actual_price": 1499.0
    },
    {
        "name": "Trendy Tap Pubg PUBG Earphones Sound Headphones with Mic",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 249.0,
        "actual_price": 399.0
    },
    {
        "name": "Stainless Steel Kitchen 3-Tier Step Standing rack Kitchen Spice Bottle Rack Utensil Holder Food Storage Organizer for Cabi...",
        "ratings": 3.9,
        "no_of_ratings": 196,
        "discount_price": 579.0,
        "actual_price": 1299.0
    },
    {
        "name": "Clothy N Wave Women's Rayon Embroidered Mustard Kurta Pant set (KP135Musterd)",
        "ratings": 1.0,
        "no_of_ratings": 1,
        "discount_price": 699.0,
        "actual_price": 1699.0
    },
    {
        "name": "ADISA Women's Shoulder Bag",
        "ratings": 4.0,
        "no_of_ratings": 2182,
        "discount_price": 895.0,
        "actual_price": 2399.0
    },
    {
        "name": "Crownlit Personalized Combo of Ladies and Gents Wallet with Name",
        "ratings": 3.7,
        "no_of_ratings": 8,
        "discount_price": 885.0,
        "actual_price": 1299.0
    },
    {
        "name": "I Jewels 18k Gold Plated Metal Adjustable Kamarband Waist Belt for Women/Girls (B031FL)",
        "ratings": 4.7,
        "no_of_ratings": 4,
        "discount_price": 699.0,
        "actual_price": 2999.0
    },
    {
        "name": "Centrino Mens 7732 Sneakers",
        "ratings": 3.7,
        "no_of_ratings": 19,
        "discount_price": 439.0,
        "actual_price": 2199.0
    },
    {
        "name": "SPRITZEN 330 Ohms Carbon Film Resistor 0.25W 5% Tolerance (Pack of 500)",
        "ratings": 4.7,
        "no_of_ratings": 16,
        "discount_price": 160.0,
        "actual_price": 299.0
    },
    {
        "name": "Woodland Men's Ff 3689120 Flipflop",
        "ratings": 3.8,
        "no_of_ratings": 14,
        "discount_price": 430.0,
        "actual_price": 695.0
    },
    {
        "name": "Satrani Women's Cotton Silk Dyed & Zari Patta Traditional Dupatta",
        "ratings": 3.5,
        "no_of_ratings": 6,
        "discount_price": 159.0,
        "actual_price": 389.0
    },
    {
        "name": "AFJ GOLD Copper Gold Plated Ruby Earrings For Women's & Girls",
        "ratings": 4.0,
        "no_of_ratings": 38,
        "discount_price": 329.0,
        "actual_price": 1950.0
    },
    {
        "name": "Winique Handheld Spray Fan,3000mAh Battery Powered Water Misting Desk Fan with 3 Speeds& 20ml Water Tank, 180°Foldable Per...",
        "ratings": 4.4,
        "no_of_ratings": 448,
        "discount_price": 2166.0,
        "actual_price": 6000.0
    },
    {
        "name": "Dr Vedic 100% Pure & Natural Oil (15ml) (Pack Of 1)",
        "ratings": 3.7,
        "no_of_ratings": 1737,
        "discount_price": 860.0,
        "actual_price": 999.0
    },
    {
        "name": "Puma Women Suede Mayu Sandal Infuse Wns Slide Beige (38388602-6)",
        "ratings": 3.1,
        "no_of_ratings": 2,
        "discount_price": 5599.0,
        "actual_price": 6999.0
    },
    {
        "name": "GIVA 999 Pure Silver Coin, 5 Grams with Maha Lakshmi Embossing | 6 Month Warranty*",
        "ratings": 4.4,
        "no_of_ratings": 15,
        "discount_price": 685.0,
        "actual_price": 999.0
    },
    {
        "name": "Baggit Women's Wallet",
        "ratings": 4.0,
        "no_of_ratings": 52,
        "discount_price": 369.0,
        "actual_price": 1090.0
    },
    {
        "name": "Clovia Women's Sheer Babydoll & Robe with Thong in Blue - Georgette & Lace",
        "ratings": 4.0,
        "no_of_ratings": 6,
        "discount_price": 1188.0,
        "actual_price": 2898.0
    },
    {
        "name": "LMDPRAJAPATIS 6.00 Ratti Natural Yellow Sapphire Pukhraj Guru Graha Rashi Ratan Panchdhatu Astrological Certified Gemstone...",
        "ratings": 3.3,
        "no_of_ratings": 4,
        "discount_price": 539.0,
        "actual_price": 2890.0
    },
    {
        "name": "Wearville Women's Adjustable strap 100% Non padded Cotton Camisole ladies Bra Slip-combo pack of 5 (One or two colors may ...",
        "ratings": 3.6,
        "no_of_ratings": 15,
        "discount_price": 629.0,
        "actual_price": 1299.0
    },
    {
        "name": "FASHIRE Women's Straight Kurta and Pant Set with Dupatta (Rust)",
        "ratings": 3.3,
        "no_of_ratings": 8,
        "discount_price": 775.0,
        "actual_price": 2349.0
    },
    {
        "name": "Durga sarees Unstitched Velvet Blouse Material Embroidered",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 504.0,
        "actual_price": 999.0
    },
    {
        "name": "Atulit Stylish Casual Fancy Footwear Bellies Belly Slip-on's Shoes for Women Girls Ladies. (Brown, Numeric_4)",
        "ratings": 3.8,
        "no_of_ratings": 5,
        "discount_price": 299.0,
        "actual_price": 999.0
    },
    {
        "name": "HRIKSHIKA FASHION Women's Polyester Blend Round Neck Sweater",
        "ratings": 3.9,
        "no_of_ratings": 452,
        "discount_price": 355.0,
        "actual_price": 1599.0
    },
    {
        "name": "Rjfabrics Pure Cotton Geometric Printed Fabric Material",
        "ratings": 4.5,
        "no_of_ratings": 2,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Cottoncube Cotton Macrame Storage Baskets Handmade Woven Boho Decor Countertop Cabinet Organizer for Bedroom, Kitchen, Roo...",
        "ratings": 3.8,
        "no_of_ratings": 14,
        "discount_price": 498.0,
        "actual_price": 999.0
    },
    {
        "name": "Prettify Blue Embroidered Denim Top",
        "ratings": 5.0,
        "no_of_ratings": 1,
        "discount_price": 679.0,
        "actual_price": 2299.0
    },
    {
        "name": "SHIVANSH CREATIONS Healing Witchcraft Crystals Viking Rune Hand Casting Kit Chakra Healing River Stones Reiki Crystals Gem...",
        "ratings": 4.3,
        "no_of_ratings": 20,
        "discount_price": 499.0,
        "actual_price": 999.0
    },
    {
        "name": "Shopo handbags for women combo | Faux Leather | Attractive hobo bags purse | 5 vibrant Colors | Shoulder bags for women wi...",
        "ratings": 3.9,
        "no_of_ratings": 87,
        "discount_price": 1949.0,
        "actual_price": 2499.0
    },
    {
        "name": "Radhesh Creation Jewellery Gold Plated Maang Tikka for Women and Girls",
        "ratings": 3.8,
        "no_of_ratings": 36,
        "discount_price": 219.0,
        "actual_price": 438.0
    }
];