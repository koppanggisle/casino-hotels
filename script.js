document.addEventListener("DOMContentLoaded", () => {
  // Data for the site
  const navLinks = [
    { text: "Home", href: "#hero" },
    { text: "Top Casinos", href: "#top-casinos" },
    { text: "Features", href: "#features" },
    { text: "Gallery", href: "#gallery" },
    { text: "Events", href: "#events" },
    { text: "VIP Club", href: "#vip" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "World Map", href: "#world-map" },
    { text: "FAQ", href: "#faq" },
    { text: "Blog", href: "#blog" },
  ]

  const casinoData = [
    {
      name: "Bellagio Resort & Casino",
      location: "Las Vegas, USA",
      rating: 5,
      description:
        "Famous for its dancing fountains and elegant design, the Bellagio offers world-class gaming and entertainment.",
      image:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        'The Bellagio is a renowned casino resort located on the Las Vegas Strip. The Italian-themed property is famous for its dancing fountains choreographed to music, elegant architecture, and refined atmosphere. The casino floor spans 156,000 square feet with over 2,300 slot machines and 150 table games including blackjack, craps, roulette, baccarat, and poker. The Bellagio hosts a renowned poker room known as "The Office" that frequently features high-stakes games with professional players.',
      additionalImages: [
        "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Marina Bay Sands",
      location: "Singapore",
      rating: 5,
      description:
        "With its iconic triple towers and rooftop infinity pool, Marina Bay Sands is a landmark destination for gaming enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1555912881-1ecd82307e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "Marina Bay Sands is an integrated resort fronting Marina Bay in Singapore. The resort features a 2,561-room hotel, a 1.3 million sq ft convention-exhibition center, a shopping mall, and the world's largest atrium casino with over 600 tables and 1,500 slot machines. The distinctive architecture includes three connected 55-story towers topped with a 340m-long SkyPark featuring an infinity pool with breathtaking views of the city skyline.",
      additionalImages: [
        "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Casino de Monte-Carlo",
      location: "Monaco",
      rating: 5,
      description:
        "This legendary Belle Époque casino has been featured in multiple James Bond films and offers exclusive gaming experiences.",
      image:
        "https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "The Casino de Monte-Carlo is a historic gambling facility located in Monaco. Built in 1863, this Belle Époque masterpiece has been featured in numerous James Bond films and represents the epitome of European gambling elegance. The casino offers a range of traditional table games including French Roulette, Blackjack, and Punto Banco in a setting of extraordinary opulence with ornate ceilings, gold sculptures, and dazzling chandeliers. The dress code is formal, creating an atmosphere of refined exclusivity.",
      additionalImages: [
        "https://images.unsplash.com/photo-1602088113608-c39e1cc376ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "The Venetian Macao",
      location: "Macau, China",
      rating: 5,
      description:
        "As the largest casino in the world, The Venetian Macao offers an extraordinary gaming experience in an Italian-themed setting.",
      image:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "The Venetian Macao is a luxury hotel and casino resort in Macau, modeled after its sister property in Las Vegas. It is the largest casino in the world and the seventh-largest building by floor area. The casino features over 3,400 slot machines and 800 gaming tables across 546,000 square feet of gaming space. The Venetian is famous for its replica of Venice's Grand Canal, complete with gondolas and singing gondoliers, creating an immersive Italian atmosphere.",
      additionalImages: [
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Caesars Palace",
      location: "Las Vegas, USA",
      rating: 4,
      description:
        "This iconic Roman-themed casino resort has been a centerpiece of Las Vegas entertainment since 1966.",
      image:
        "https://images.unsplash.com/photo-1608551279839-95ceb38e0c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "Caesars Palace is a landmark luxury hotel and casino on the Las Vegas Strip. Since opening in 1966, it has set the standard for Las Vegas casinos with its Roman-themed architecture and decor. The 124,181 square foot casino offers hundreds of table games, over 1,500 slot machines, and a state-of-the-art sportsbook. The property also houses the Colosseum, a 4,296-seat entertainment venue that has hosted performances by artists like Celine Dion, Elton John, and Rod Stewart.",
      additionalImages: [
        "https://images.unsplash.com/photo-1601751818941-571144562ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Crown Casino",
      location: "Melbourne, Australia",
      rating: 4,
      description:
        "Australia's premier gaming destination features a vast selection of table games and electronic gaming machines.",
      image:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "Crown Casino is the largest casino complex in the Southern Hemisphere and one of the largest in the world. Located on the Yarra River in Melbourne, the complex includes three hotels, restaurants, shopping, and entertainment facilities. The casino features over 3,500 electronic gaming machines and 500 table games including blackjack, roulette, baccarat, and poker. The property also hosts the Aussie Millions Poker Championship, one of the most prestigious poker tournaments in the world.",
      additionalImages: [
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Atlantis Paradise Island",
      location: "Nassau, Bahamas",
      rating: 4,
      description:
        "This ocean-themed resort features a 60,000 square foot casino with spectacular views of the Caribbean.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "Atlantis Paradise Island is a ocean-themed resort on Paradise Island in the Bahamas. The resort features a 60,000 square foot casino called Atlantis Casino that offers over 700 slot machines and 85 gaming tables set against a backdrop of spectacular marine views. The gaming area is decorated with hand-painted glass and colorful mosaics reflecting the underwater theme. In addition to traditional games like blackjack, baccarat, and craps, the casino offers Caribbean stud poker and Let it Ride.",
      additionalImages: [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Wynn Las Vegas",
      location: "Las Vegas, USA",
      rating: 5,
      description:
        "Known for its sophistication and attention to detail, the Wynn offers an elevated gaming experience.",
      image:
        "https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "Wynn Las Vegas is a luxury casino and resort on the Las Vegas Strip. Opened in 2005, it was designed by casino developer Steve Wynn and features an 111,000 square foot casino with 1,800 slot machines and 26 poker tables. The Wynn is known for its sophistication, with flower arrangements and natural light—unusual for Las Vegas casinos. The property also includes an 18-hole golf course, designed by Tom Fazio and Steve Wynn, directly connected to the hotel.",
      additionalImages: [
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ]

  const additionalCasinos = [
    {
      name: "MGM Grand",
      location: "Las Vegas, USA",
      rating: 4,
      description: "One of the largest hotels in the world with a massive gaming floor and entertainment options.",
      image:
        "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "The MGM Grand Las Vegas is a hotel and casino located on the Las Vegas Strip. With 6,852 rooms, it is the largest single hotel in the United States. The 175,000 square foot casino is one of the largest in Las Vegas, featuring numerous slot machines, table games, and a large race and sports book. The property is home to many entertainment venues, restaurants by celebrity chefs, and the Grand Garden Arena which hosts major sporting events and concerts.",
      additionalImages: [
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Sun City Resort",
      location: "North West Province, South Africa",
      rating: 4,
      description:
        "This entertainment complex features two casinos and is surrounded by the beautiful Pilanesberg mountains.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details:
        "Sun City Resort is an entertainment complex in South Africa near the city of Rustenburg. The resort features two casinos: the original Sun City Casino and the newer Soho Hotel Casino. The complex is surrounded by the beautiful Pilanesberg mountains and is adjacent to the Pilanesberg Game Reserve, offering unique gaming and safari experiences. The resort is designed with an African theme and features swimming pools with artificial waves, water slides, and a tropical beach created with sand imported from Mozambique.",
      additionalImages: [
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ]

  const featureData = [
    {
      title: "Casino Floor",
      description:
        "Experience the excitement of world-class gaming with thousands of slot machines and hundreds of table games.",
      icon: "fa-dice",
      moreInfo:
        "Modern casino floors feature a diverse range of games designed to appeal to different types of players. From classic table games like blackjack, roulette, baccarat, and craps to thousands of cutting-edge slot machines with various themes and progressive jackpots. Many casinos also include dedicated poker rooms hosting cash games and tournaments, as well as specialized areas for high-limit play that offer more personalized service and higher betting limits.",
    },
    {
      title: "Gourmet Dining",
      description: "Savor exquisite cuisine from celebrity chefs at restaurants ranging from casual to fine dining.",
      icon: "fa-utensils",
      moreInfo:
        "Top hotel casinos have revolutionized their culinary offerings, moving far beyond the traditional buffets to feature restaurants from world-renowned chefs like Gordon Ramsay, Wolfgang Puck, and Guy Savoy. These dining venues cover a range of cuisines and styles, from authentic Asian eateries to classic steakhouses, innovative fusion restaurants, and farm-to-table concepts. Many casino restaurants offer spectacular views and themed environments that enhance the dining experience.",
    },
    {
      title: "Live Entertainment",
      description: "Enjoy spectacular shows, concerts, and performances from world-renowned artists and performers.",
      icon: "fa-mask",
      moreInfo:
        "Entertainment is a cornerstone of the modern casino resort experience, with many properties featuring purpose-built theaters hosting production shows, concerts, and comedy performances. These venues attract headline performers and touring Broadway productions, while smaller lounges showcase up-and-coming artists. Many casinos also feature nightclubs with celebrity DJs, creating vibrant nightlife scenes that complement the gaming experience.",
    },
    {
      title: "VIP Tables",
      description: "Access exclusive high-limit gaming areas with personalized service and higher betting limits.",
      icon: "fa-crown",
      moreInfo:
        "High-limit or VIP gaming areas cater to players who prefer larger wagers and a more exclusive atmosphere. These secluded sections of the casino typically feature higher table limits, dedicated dealers and hosts, and enhanced privacy. Many VIP rooms also offer complimentary food and beverage service, private cashier windows, and dedicated entrance points, creating a more personalized gaming experience for high rollers and regular players with generous budgets.",
    },
    {
      title: "Slot Arcade",
      description: "Try your luck at thousands of classic and modern slot machines with various themes and jackpots.",
      icon: "fa-slot-machine",
      moreInfo:
        "Modern slot arcades feature an astonishing array of gaming machines ranging from classic reel slots to immersive video slots with elaborate bonus features. Many casinos regularly update their slot selection to include the latest titles with cutting-edge graphics, sound effects, and game mechanics. Progressive jackpot networks link machines across multiple properties, creating potential multi-million dollar prizes that grow until a lucky player hits the winning combination.",
    },
    {
      title: "Poker Tournaments",
      description: "Participate in casual games or competitive tournaments with players from around the world.",
      icon: "fa-cards",
      moreInfo:
        "Poker rooms in premier casino hotels host everything from low-stakes cash games to major tournament series that attract professionals and amateurs alike. Many properties have specialized poker areas with dozens of tables, dedicated dealers, tableside food service, and sophisticated player tracking systems. Famous tournaments like the World Series of Poker and World Poker Tour make stops at major casino destinations, bringing together poker enthusiasts from around the globe in pursuit of championship bracelets and substantial prize pools.",
    },
  ]

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Elegant casino floor with chandeliers and gaming tables",
      thumb:
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel exterior with dramatic architecture at night",
      thumb:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "High-limit gaming area with exclusive décor",
      thumb:
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Gourmet restaurant with exquisite plating and atmosphere",
      thumb:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Performance theater with state-of-the-art lighting",
      thumb:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1606293459339-aa5a4c5e3f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Poker tournament in progress with focused players",
      thumb:
        "https://images.unsplash.com/photo-1606293459339-aa5a4c5e3f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Outdoor pool area with cabanas and bar service",
      thumb:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1555912881-1ecd82307e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Aerial view of integrated resort complex",
      thumb:
        "https://images.unsplash.com/photo-1555912881-1ecd82307e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
  ]

  const eventData = [
    {
      title: "World Poker Championship",
      date: "March 15-20, 2025",
      location: "Bellagio Resort & Casino, Las Vegas",
      image:
        "https://images.unsplash.com/photo-1606293459339-aa5a4c5e3f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Join the most prestigious poker tournament of the year with a guaranteed prize pool of $10 million.",
      details:
        "The World Poker Championship brings together the best poker players from around the globe to compete for one of the largest prize pools in the game. The six-day event features multiple poker variants including No-Limit Texas Hold'em, Pot-Limit Omaha, and Seven-Card Stud. Daily satellites and qualifying tournaments will be held in the months leading up to the main event. The final table will be broadcast live worldwide with expert commentary from poker legends.",
    },
    {
      title: "Fortune Dragon Baccarat Tournament",
      date: "May 8-10, 2025",
      location: "Marina Bay Sands, Singapore",
      image:
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Test your baccarat skills in this high-stakes tournament with a buy-in of $25,000.",
      details:
        "The Fortune Dragon Baccarat Tournament is one of Asia's premier baccarat competitions, attracting high-rollers and skilled players from around the world. The tournament follows a knockout format, with players advancing through rounds based on their chip accumulation. The grand prize includes not only a substantial cash award but also a custom-designed gold dragon trophy and complimentary accommodation in a Chairman Suite for a future stay at Marina Bay Sands.",
    },
    {
      title: "International Casino Expo",
      date: "July 18-22, 2025",
      location: "Caesars Palace, Las Vegas",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Discover the latest innovations in gaming technology and network with industry professionals.",
      details:
        "The International Casino Expo is the world's largest gathering of casino industry professionals, featuring over 500 exhibitors showcasing the latest in gaming technology, security systems, hospitality solutions, and more. The five-day event includes keynote speeches from industry leaders, panel discussions on regulatory trends, workshops on responsible gaming, and numerous networking opportunities. Attendees will get hands-on experience with next-generation slot machines, table games, and online gaming platforms before they reach the casino floor.",
    },
    {
      title: "European Roulette Masters",
      date: "September 5-7, 2025",
      location: "Casino de Monte-Carlo, Monaco",
      image:
        "https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Experience the elegance of Monte Carlo while competing in this exclusive roulette tournament.",
      details:
        "The European Roulette Masters is held in the legendary Casino de Monte-Carlo, bringing together roulette enthusiasts in one of the world's most iconic gaming venues. The tournament uses European single-zero roulette rules and features a unique scoring system that rewards both winning bets and strategic chip placement. Participants will enjoy a gala dinner overlooking the Mediterranean Sea, a private tour of Monaco, and the opportunity to network with fellow roulette aficionados in an atmosphere of old-world glamour.",
    },
    {
      title: "Global Slots Championship",
      date: "November 12-14, 2025",
      location: "Crown Casino, Melbourne",
      image:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Compete on specially programmed slot machines with over $1 million in guaranteed prizes.",
      details:
        "The Global Slots Championship transforms slot play into a competitive sport, with participants playing on identical machines programmed specifically for the tournament. Points are awarded based on wins and bonus features triggered during timed sessions, with the highest scorers advancing to subsequent rounds. The championship features various slot themes and formats, testing players' luck and timing across different game styles. Beyond the main tournament, participants can enjoy masterclasses on slot strategy, meet-and-greets with game designers, and exclusive after-hours access to Crown's newest slot machines.",
    },
    {
      title: "Caribbean Stud Poker Showdown",
      date: "December 3-5, 2025",
      location: "Atlantis Paradise Island, Bahamas",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Enjoy tropical surroundings while competing for the Caribbean Stud Poker championship title.",
      details:
        "The Caribbean Stud Poker Showdown combines competitive gaming with a festive island atmosphere at the Atlantis resort. The tournament uses a cumulative chip model, where players carry their chip stacks through multiple sessions of Caribbean Stud Poker, a casino table game where players compete against the house rather than each other. The event includes a welcome beach party, daily side tournaments with lower buy-ins, and a charity tournament benefiting local Bahamian communities. Players of all skill levels are welcome, with optional strategy workshops available for those new to the game.",
    },
  ]

  const testimonialData = [
    {
      name: "Michael Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "I've visited over 50 casino hotels worldwide, and this guide has introduced me to hidden gems I hadn't discovered. The detailed descriptions and honest assessments helped me plan my most memorable gaming trip yet.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Sophia Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "As someone new to casino gaming, I found this guide incredibly helpful. The explanations of different games and what makes each destination unique gave me the confidence to plan my first casino vacation.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "James Chen",
      location: "Vancouver, Canada",
      rating: 4,
      text: "The section on poker tournaments was particularly useful for me. I used the information to plan a trip to Las Vegas during the World Series of Poker and had an amazing experience. The venue descriptions were spot-on.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Emily Parker",
      location: "Sydney, Australia",
      rating: 5,
      text: "I appreciate the balanced coverage of casinos around the world, not just in Las Vegas or Macau. The insights into regional gaming differences helped me understand what to expect at each destination.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Daniel Kovács",
      location: "Budapest, Hungary",
      rating: 4,
      text: "The event calendar is a game-changer. I planned my trip to coincide with a major baccarat tournament and ended up placing in the top ten! I wouldn't have known about it without this resource.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ]

  const mapLocations = [
    { name: "Bellagio Resort & Casino", location: "Las Vegas, USA", coordinates: { x: 125, y: 175 } },
    { name: "Marina Bay Sands", location: "Singapore", coordinates: { x: 550, y: 220 } },
    { name: "Casino de Monte-Carlo", location: "Monaco", coordinates: { x: 320, y: 160 } },
    { name: "The Venetian Macao", location: "Macau, China", coordinates: { x: 530, y: 195 } },
    { name: "Crown Casino", location: "Melbourne, Australia", coordinates: { x: 600, y: 330 } },
    { name: "Atlantis Paradise Island", location: "Bahamas", coordinates: { x: 190, y: 190 } },
    { name: "Sun City Resort", location: "South Africa", coordinates: { x: 360, y: 280 } },
    { name: "Casino de Montréal", location: "Montreal, Canada", coordinates: { x: 165, y: 155 } },
  ]

  const faqData = [
    {
      question: 'What makes a hotel casino one of the "best" in the world?',
      answer:
        "The world's best hotel casinos are distinguished by several factors: the range and quality of their gaming options, the standard of accommodation, diversity of entertainment and dining options, architectural significance, customer service excellence, and their overall reputation in the industry. Historic importance, unique features, and consistent positive reviews from visitors also contribute to a casino's ranking among the best.",
    },
    {
      question: "Are these casino hotels suitable for non-gamblers?",
      answer:
        "Modern hotel casinos are designed as complete entertainment destinations with numerous attractions for non-gamblers. These can include world-class restaurants, shopping arcades, live shows and concerts, art galleries, pools and recreation areas, fitness centers, and entertainment activities suitable for all ages. Many casino resorts also serve as ideal bases for exploring the surrounding region.",
    },
    {
      question: "What should I pack for a visit to a casino hotel?",
      answer:
        "Your packing list should include a mix of casual wear for daytime activities and more formal attire for evenings, especially if you plan to visit upscale restaurants or shows. Many casinos have dress codes for certain areas, particularly in the evening. Comfortable shoes are essential as casino floors are typically vast. It's also advisable to bring a light jacket or sweater as casino interiors are often well air-conditioned.",
    },
    {
      question: "How do casino loyalty programs work?",
      answer:
        "Casino loyalty programs reward players based on their gaming activity. Typically, you'll receive a player's card that tracks your play when inserted into slot machines or presented at table games. Points earned can be redeemed for various perks including free play, dining credits, show tickets, discounted or complimentary room stays, and merchandise. Higher tiers of play unlock additional benefits such as priority service, exclusive events, and personal host services.",
    },
    {
      question: "What is the best time of year to visit major casino destinations?",
      answer:
        "This varies by location. Las Vegas typically offers better rates during mid-week stays and in the summer (though it can be extremely hot) or during the winter off-season (except for major holidays). Macau is busiest during Chinese holidays, while Monaco's peak season is in the summer. Many destinations host major tournaments or events at specific times of year, which can either be attractions or times to avoid if you prefer smaller crowds.",
    },
    {
      question: "Are there age restrictions for entering casino hotels?",
      answer:
        "While guests of any age can typically stay at casino hotels, access to the gaming floor is restricted to adults. The minimum gambling age varies by country and sometimes by region: in the United States, it's either 18 or 21 depending on the state; in most European countries, it's 18; in Macau, it's 21. Some properties strictly enforce these age limits throughout the casino area, while others may allow younger guests to pass through gaming areas when accompanied by adults.",
    },
    {
      question: "What payment methods are accepted at international casinos?",
      answer:
        "Most international casinos accept major credit cards, cash in local currency, and traveler's checks. Many larger establishments also accept widely-used foreign currencies and offer currency exchange services. Increasingly, casinos are implementing digital payment methods and mobile wallets. For high-rollers, arrangements for wire transfers or credit lines can typically be made in advance. It's always advisable to check with the specific property before your visit, especially regarding any restrictions or fees.",
    },
  ]

  const blogData = [
    {
      title: "The Evolution of Casino Architecture: From Gaming Halls to Integrated Resorts",
      date: "January 15, 2025",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt:
        "Explore how casino design has transformed over the decades from simple gambling halls to massive integrated resorts.",
      content:
        "Casino architecture has undergone a remarkable transformation over the past century, evolving from hidden gambling rooms to city-defining architectural masterpieces. The early casinos of Las Vegas were modest compared to today's mega-resorts, often featuring low ceilings, minimal natural light, and maze-like layouts designed to keep players engaged with the gaming floor.\n\nThe paradigm shift began in the late 1980s and 1990s when developers recognized the potential of integrated resorts that combine gaming with high-end hotels, dining, shopping, and entertainment. This new approach to casino design expanded their appeal beyond hardcore gamblers to include families, convention attendees, and luxury travelers.\n\nToday's premier casino resorts utilize design psychology in every aspect, from the strategic placement of gaming areas to the careful selection of colors, sounds, and even scents. Modern casino architects focus on creating memorable experiences through dramatic spaces, themed environments, and iconic features that become destinations in themselves, such as the Bellagio fountains or Marina Bay Sands' rooftop infinity pool.\n\nSustainability has also become increasingly important, with newer properties incorporating green building practices, energy-efficient systems, and innovative water conservation technologies. These design evolutions reflect the industry's adaptation to changing consumer preferences and regulatory environments, creating immersive worlds that capture the imagination far beyond the gaming floor.",
    },
    {
      title: "Behind the Tables: The Life of a Professional Casino Dealer",
      date: "February 28, 2025",
      image:
        "https://images.unsplash.com/photo-1606744837616-53c0df6d5c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt:
        "Gain insight into the training, challenges, and experiences of professional dealers at top casino destinations.",
      content:
        'Professional casino dealers are the frontline ambassadors of the gaming industry, requiring a unique blend of technical skills, psychological insight, and customer service excellence. The journey to becoming a dealer at a prestigious casino often begins at dealing school, where students master the mechanics of various games, from the precise chip handling of blackjack to the complex payouts of craps.\n\nBeyond the technical requirements, successful dealers develop what veterans call "table sense"—the ability to read players, maintain game flow, and handle challenging situations with diplomacy. This skill becomes particularly valuable when managing high-limit tables, where tensions can run high and millions may change hands in a single session.\n\nThe job comes with unique occupational challenges, from standing for extended periods to working overnight shifts and managing the psychological impact of witnessing both tremendous wins and devastating losses. Many dealers develop coping mechanisms for handling abusive behavior from frustrated players while maintaining their professional demeanor.\n\nDespite these challenges, the profession offers noteworthy rewards, including competitive earnings through tips, opportunities to work in glamorous destinations worldwide, and the constant human interaction that many dealers find energizing. For those who excel, career advancement paths can lead to roles as pit bosses, shift managers, or even casino executives, with each step bringing increased responsibility and compensation.\n\nAs the casino industry evolves with technology and changing customer preferences, the role of dealers continues to adapt, balancing the efficiencies of electronic systems with the irreplaceable human element that creates memorable gaming experiences.',
    },
    {
      title: "The Psychology of Casino Game Design: Why We Play and Keep Playing",
      date: "April 10, 2025",
      image:
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt: "Discover the psychological principles and design elements that make casino games so compelling.",
      content:
        'Casino games represent masterclasses in behavioral psychology, carefully crafted to create engaging experiences that keep players returning. At the foundation of this psychology is the variable reward schedule—unpredictable payouts that trigger dopamine releases in the brain similar to those from other pleasurable activities. This neurological response creates the "near-miss" effect, where outcomes that almost result in wins can be as stimulating as actual victories, encouraging continued play.\n\nModern slot machines exemplify sophisticated psychological design, featuring calculated hit frequencies, multiple small wins to extend playing sessions, and sensory stimulation through lights, sounds, and animations that create celebratory atmospheres even for minor wins. Bonus rounds and progressive storylines tap into our completion instinct, making it difficult to walk away before seeing what happens next.\n\nTable games incorporate different psychological elements, with the tangible interaction of chips and cards creating a sense of agency and skill that appeals to players seeking more control over outcomes. Social dynamics at these tables—whether competitive or collaborative—add another layer of engagement beyond the monetary aspect.\n\nCasino environments themselves are designed to enhance game psychology, with considerations given to everything from ceiling height (lower ceilings create more intimate, focused gaming spaces) to background music (upbeat tempos encourage faster play) and even subtle scents that influence mood and perception of time.\n\nResponsible game designers and operators increasingly recognize the importance of balancing engagement with player protection, implementing features like reality checks, spending limits, and prominent display of odds to promote informed decision-making while maintaining the entertainment value that draws people to these games in the first place.',
    },
    {
      title: "Rising Stars: Emerging Casino Destinations Challenging the Established Markets",
      date: "June 5, 2025",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt: "Learn about up-and-coming casino markets that are gaining recognition on the global stage.",
      content:
        "While Las Vegas, Macau, and Monaco have long dominated the global casino landscape, several emerging destinations are rapidly gaining prominence by offering unique gaming experiences tailored to both local preferences and international visitors.\n\nThe Philippines has transformed Manila's Entertainment City into a major gaming hub through significant investments in integrated resorts like Okada Manila and City of Dreams. These properties combine Asian-focused gaming with Filipino hospitality and entertainment, positioning the country as a compelling alternative to Macau, particularly for visitors from China, South Korea, and Japan.\n\nVietnam's measured approach to casino development has resulted in several world-class resorts in scenic locations, with Corona Resort on Phu Quoc Island and Hoiana Resort near Hoi An emerging as standouts. The country's strategic location, natural beauty, and pilot program allowing local residents to gamble at select properties have created strong foundations for continued growth.\n\nCambodia has seen rapid expansion beyond its initial border casinos, with Sihanoukville developing into a major gaming center and new integrated resorts planned for Phnom Penh. The industry's development has attracted significant regional investment, though regulatory frameworks continue to evolve.\n\nIn Europe, Georgia has established itself as a regional gaming destination centered in Batumi on the Black Sea coast, while Cyprus is developing Europe's largest integrated resort, City of Dreams Mediterranean. Both locations benefit from attracting visitors from nearby countries with more restrictive gambling laws.\n\nJapan represents the most anticipated emerging market, with its Integrated Resort Implementation Law paving the way for the first legal casinos in the world's third-largest economy. While development has proceeded more slowly than initially expected, the potential combination of Japanese aesthetics, technology, and service excellence with world-class gaming has operators competing intensely for a limited number of licenses.\n\nThese emerging destinations are not merely replicating established markets but differentiating themselves through cultural integration, technological innovation, and distinct regulatory approaches that reflect regional priorities and values.",
    },
  ]

  const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Mexico",
    "Monaco",
    "Netherlands",
    "Russia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ]

  // DOM elements
  const desktopNav = document.getElementById("desktopNav")
  const mobileNav = document.getElementById("mobileNav")
  const hamburgerBtn = document.getElementById("hamburgerBtn")
  const closeMenu = document.getElementById("closeMenu")
  const mobileMenu = document.getElementById("mobileMenu")
  const footerLinks = document.getElementById("footerLinks")
  const sectionsContainer = document.getElementById("sectionsContainer")
  const casinoCards = document.getElementById("casinoCards")
  const loadMoreBtn = document.getElementById("loadMoreBtn")
  const loadSpinner = document.getElementById("loadSpinner")
  const featureBlocks = document.getElementById("featureBlocks")
  const eventCards = document.getElementById("eventCards")
  const countrySelect = document.getElementById("country")
  const favoriteCasinoSelect = document.getElementById("favoriteCasino")
  const vipForm = document.getElementById("vipForm")
  const submitSpinner = document.getElementById("submitSpinner")
  const testimonialCards = document.getElementById("testimonialCards")
  const mapContainer = document.getElementById("mapContainer")
  const faqAccordion = document.getElementById("faqAccordion")
  const blogPosts = document.getElementById("blogPosts")
  const casinoModal = document.getElementById("casinoModal")
  const closeModal = document.getElementById("closeModal")
  const modalCasinoName = document.getElementById("modalCasinoName")
  const modalContent = document.getElementById("modalContent")
  const eventModal = document.getElementById("eventModal")
  const closeEventModal = document.getElementById("closeEventModal")
  const modalEventName = document.getElementById("modalEventName")
  const eventModalContent = document.getElementById("eventModalContent")
  const blogModal = document.getElementById("blogModal")
  const closeBlogModal = document.getElementById("closeBlogModal")
  const modalBlogTitle = document.getElementById("modalBlogTitle")
  const blogModalContent = document.getElementById("blogModalContent")
  const successModal = document.getElementById("successModal")
  const closeSuccessModal = document.getElementById("closeSuccessModal")
  const successMessage = document.getElementById("successMessage")
  const toast = document.getElementById("toast")
  const toastMessage = document.getElementById("toastMessage")
  const newsletterForm = document.getElementById("newsletterForm")
  const newsletterSpinner = document.getElementById("newsletterSpinner")
  const exploreBtn = document.getElementById("exploreBtn")
  const vipBtn = document.getElementById("vipBtn")

  // Countdown timer
  function updateCountdown() {
    const eventDate = new Date("October 15, 2025 00:00:00").getTime()
    const now = new Date().getTime()
    const distance = eventDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("days").innerText = days.toString().padStart(2, "0")
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0")
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0")
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0")
  }
  setInterval(updateCountdown, 1000)
  updateCountdown()

  // Random section ordering
  function randomizeSections() {
    const sections = Array.from(sectionsContainer.children)
    const shuffledSections = [...sections].sort(() => Math.random() - 0.5)

    // Optionally remove 0-2 sections
    const sectionsToRemove = Math.floor(Math.random() * 3) // 0, 1, or 2
    for (let i = 0; i < sectionsToRemove; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledSections.length)
      if (shuffledSections.length > 5) {
        // Keep at least 5 sections
        shuffledSections.splice(randomIndex, 1)
      }
    }

    // Clear the container and append sections in new order
    sectionsContainer.innerHTML = ""
    shuffledSections.forEach((section) => {
      sectionsContainer.appendChild(section)
    })
  }
  randomizeSections()

  // Navigation
  function populateNavigation() {
    // Shuffle nav links
    const shuffledLinks = [...navLinks].sort(() => Math.random() - 0.5)
    // Randomly select 5-8 links
    const selectedLinks = shuffledLinks.slice(0, Math.floor(Math.random() * 4) + 5)

    // Desktop nav
    selectedLinks.forEach((link) => {
      const a = document.createElement("a")
      a.href = link.href
      a.textContent = link.text
      a.className = "hover:text-gray-300 transition duration-300"
      desktopNav.appendChild(a)
    })

    // Mobile nav
    selectedLinks.forEach((link) => {
      const a = document.createElement("a")
      a.href = link.href
      a.textContent = link.text
      a.className = "block text-white text-lg"
      mobileNav.appendChild(a)
    })

    // Footer links
    selectedLinks.slice(0, 6).forEach((link) => {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.href = link.href
      a.textContent = link.text
      a.className = "hover:text-gray-300 transition duration-300"
      li.appendChild(a)
      footerLinks.appendChild(li)
    })
  }
  populateNavigation()

  // Mobile menu toggle
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.add("active")
    mobileMenu.classList.add("active")
  })

  closeMenu.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      // Close mobile menu if open
      if (mobileMenu.classList.contains("active")) {
        hamburgerBtn.classList.remove("active")
        mobileMenu.classList.remove("active")
      }

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Populate casino cards
  function populateCasinoCards() {
    casinoCards.innerHTML = ""

    // Only display the first 6 casinos initially
    casinoData.slice(0, 6).forEach((casino) => {
      const card = document.createElement("div")
      card.className = "bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover"

      card.innerHTML = `
        <img src="${casino.image}" alt="${casino.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold mb-1">${casino.name}</h3>
          <p class="text-gray-600 mb-2">${casino.location}</p>
          <div class="flex mb-2">
            ${Array(casino.rating)
              .fill()
              .map(() => `<i class="fas fa-star text-yellow-500"></i>`)
              .join("")}
            ${Array(5 - casino.rating)
              .fill()
              .map(() => `<i class="far fa-star text-yellow-500"></i>`)
              .join("")}
          </div>
          <p class="mb-4">${casino.description}</p>
          <button class="learn-more-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" data-casino="${casino.name}">
            Learn More
          </button>
        </div>
      `

      casinoCards.appendChild(card)
    })

    // Add event listeners to the Learn More buttons
    document.querySelectorAll(".learn-more-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const casinoName = this.getAttribute("data-casino")
        const casino =
          casinoData.find((c) => c.name === casinoName) || additionalCasinos.find((c) => c.name === casinoName)

        if (casino) {
          modalCasinoName.textContent = casino.name

          modalContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <img src="${casino.image}" alt="${casino.name}" class="w-full h-auto rounded-lg">
              <div>
                <p class="text-lg mb-2"><strong>Location:</strong> ${casino.location}</p>
                <div class="flex mb-2">
                  <strong class="mr-2">Rating:</strong>
                  ${Array(casino.rating)
                    .fill()
                    .map(() => `<i class="fas fa-star text-yellow-500"></i>`)
                    .join("")}
                  ${Array(5 - casino.rating)
                    .fill()
                    .map(() => `<i class="far fa-star text-yellow-500"></i>`)
                    .join("")}
                </div>
                <p>${casino.description}</p>
              </div>
            </div>
            <h4 class="text-xl font-bold mb-3">About ${casino.name}</h4>
            <p class="mb-4">${casino.details}</p>
            <h4 class="text-xl font-bold mb-3">Gallery</h4>
            <div class="grid grid-cols-3 gap-2">
              ${casino.additionalImages
                .map(
                  (img) => `
                <img src="${img}" alt="Additional view of ${casino.name}" class="w-full h-32 object-cover rounded-lg">
              `,
                )
                .join("")}
            </div>
          `

          casinoModal.classList.remove("hidden")
          document.body.classList.add("overflow-hidden")
        }
      })
    })
  }

  populateCasinoCards()

  // Load more casinos
  loadMoreBtn.addEventListener("click", () => {
    loadMoreBtn.disabled = true
    loadSpinner.classList.remove("hidden")

    // Simulate loading delay
    setTimeout(() => {
      // Combine both casino arrays and display all
      const allCasinos = [...casinoData, ...additionalCasinos]
      casinoCards.innerHTML = ""

      allCasinos.forEach((casino) => {
        const card = document.createElement("div")
        card.className = "bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover"

        card.innerHTML = `
          <img src="${casino.image}" alt="${casino.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-1">${casino.name}</h3>
            <p class="text-gray-600 mb-2">${casino.location}</p>
            <div class="flex mb-2">
              ${Array(casino.rating)
                .fill()
                .map(() => `<i class="fas fa-star text-yellow-500"></i>`)
                .join("")}
              ${Array(5 - casino.rating)
                .fill()
                .map(() => `<i class="far fa-star text-yellow-500"></i>`)
                .join("")}
            </div>
            <p class="mb-4">${casino.description}</p>
            <button class="learn-more-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" data-casino="${casino.name}">
              Learn More
            </button>
          </div>
        `

        casinoCards.appendChild(card)
      })

      // Re-add event listeners to the new buttons
      document.querySelectorAll(".learn-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const casinoName = this.getAttribute("data-casino")
          const casino = allCasinos.find((c) => c.name === casinoName)

          if (casino) {
            modalCasinoName.textContent = casino.name

            modalContent.innerHTML = `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img src="${casino.image}" alt="${casino.name}" class="w-full h-auto rounded-lg">
                <div>
                  <p class="text-lg mb-2"><strong>Location:</strong> ${casino.location}</p>
                  <div class="flex mb-2">
                    <strong class="mr-2">Rating:</strong>
                    ${Array(casino.rating)
                      .fill()
                      .map(() => `<i class="fas fa-star text-yellow-500"></i>`)
                      .join("")}
                    ${Array(5 - casino.rating)
                      .fill()
                      .map(() => `<i class="far fa-star text-yellow-500"></i>`)
                      .join("")}
                  </div>
                  <p>${casino.description}</p>
                </div>
              </div>
              <h4 class="text-xl font-bold mb-3">About ${casino.name}</h4>
              <p class="mb-4">${casino.details}</p>
              <h4 class="text-xl font-bold mb-3">Gallery</h4>
              <div class="grid grid-cols-3 gap-2">
                ${casino.additionalImages
                  .map(
                    (img) => `
                  <img src="${img}" alt="Additional view of ${casino.name}" class="w-full h-32 object-cover rounded-lg">
                `,
                  )
                  .join("")}
              </div>
            `

            casinoModal.classList.remove("hidden")
            document.body.classList.add("overflow-hidden")
          }
        })
      })

      loadMoreBtn.disabled = false
      loadSpinner.classList.add("hidden")
      loadMoreBtn.classList.add("hidden") // Hide the button after loading all
    }, 1500)
  })

  // Close casino modal
  closeModal.addEventListener("click", () => {
    casinoModal.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  })

  // Close event modal
  closeEventModal.addEventListener("click", () => {
    eventModal.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  })

  // Close blog modal
  closeBlogModal.addEventListener("click", () => {
    blogModal.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  })

  // Close success modal
  closeSuccessModal.addEventListener("click", () => {
    successModal.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  })

  // When clicking outside the modal content, close the modal
  window.addEventListener("click", (e) => {
    if (e.target === casinoModal) {
      casinoModal.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")
    }
    if (e.target === eventModal) {
      eventModal.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")
    }
    if (e.target === blogModal) {
      blogModal.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")
    }
    if (e.target === successModal) {
      successModal.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")
    }
  })

  // Populate feature blocks
  function populateFeatureBlocks() {
    featureBlocks.innerHTML = ""

    featureData.forEach((feature) => {
      const block = document.createElement("div")
      block.className =
        "bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"

      block.innerHTML = `
        <div class="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-800 rounded-full mb-4 mx-auto">
          <i class="fas ${feature.icon} text-2xl"></i>
        </div>
        <h3 class="text-xl font-bold text-center mb-2">${feature.title}</h3>
        <p class="text-center mb-4">${feature.description}</p>
        <button class="read-more-btn w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-300" data-feature="${feature.title}">
          Read More
        </button>
        <div class="feature-more-info hidden mt-4 p-4 bg-gray-100 rounded-lg">
          <p>${feature.moreInfo}</p>
        </div>
      `

      featureBlocks.appendChild(block)
    })

    // Add event listeners to the Read More buttons
    document.querySelectorAll(".read-more-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const moreInfo = this.nextElementSibling
        moreInfo.classList.toggle("hidden")
        this.textContent = moreInfo.classList.contains("hidden") ? "Read More" : "Read Less"
      })
    })
  }

  populateFeatureBlocks()

  // Initialize Swiper for gallery
  function initGallerySwiper() {
    const swiperContainer = document.querySelector(".swiper")
    const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper")
    const thumbsContainer = document.querySelector(".swiper-thumbs")

    // Add slides
    galleryImages.forEach((image, index) => {
      const slide = document.createElement("div")
      slide.className = "swiper-slide"
      slide.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" class="w-full h-72 object-cover rounded-lg" loading="lazy">
      `
      swiperWrapper.appendChild(slide)

      // Add thumbnail
      const thumb = document.createElement("div")
      thumb.className = "cursor-pointer hover:opacity-75 transition duration-300"
      thumb.innerHTML = `
        <img src="${image.thumb}" alt="Thumbnail ${index + 1}" class="w-full h-20 object-cover rounded" loading="lazy">
      `
      thumb.setAttribute("data-index", index)
      thumbsContainer.appendChild(thumb)

      // Add click event to thumbnail
      thumb.addEventListener("click", function () {
        const index = Number.parseInt(this.getAttribute("data-index"))
        swiper.slideTo(index)
      })
    })

    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    })

    // Update active thumb on slide change
    swiper.on("slideChange", () => {
      const activeIndex = swiper.realIndex
      document.querySelectorAll(".swiper-thumbs > div").forEach((thumb, index) => {
        if (index === activeIndex) {
          thumb.classList.add("ring-2", "ring-blue-500")
        } else {
          thumb.classList.remove("ring-2", "ring-blue-500")
        }
      })
    })
  }

  // Initialize Swiper for events
  function initEventSwiper() {
    // Add event slides
    eventData.forEach((event, index) => {
      const slide = document.createElement("div")
      slide.className = "swiper-slide"
      slide.innerHTML = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
          <img src="${event.image}" alt="${event.title}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-1">${event.title}</h3>
            <p class="text-gray-600 mb-2">${event.date}</p>
            <p class="text-gray-600 mb-2">${event.location}</p>
            <p class="mb-4">${event.description}</p>
            <button class="event-learn-more bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" data-event="${index}">
              Learn More
            </button>
          </div>
        </div>
      `
      eventCards.appendChild(slide)
    })

    // Initialize Swiper
    const eventSwiper = new Swiper(".eventSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-events",
        prevEl: ".swiper-button-prev-events",
      },
    })

    // Add event listeners to the Learn More buttons
    document.querySelectorAll(".event-learn-more").forEach((button) => {
      button.addEventListener("click", function () {
        const eventIndex = Number.parseInt(this.getAttribute("data-event"))
        const event = eventData[eventIndex]

        if (event) {
          modalEventName.textContent = event.title

          eventModalContent.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="w-full h-auto rounded-lg mb-4">
            <p class="text-lg mb-2"><strong>Date:</strong> ${event.date}</p>
            <p class="text-lg mb-2"><strong>Location:</strong> ${event.location}</p>
            <p class="mb-4">${event.description}</p>
            <h4 class="text-xl font-bold mb-2">Event Details</h4>
            <p>${event.details}</p>
            <div class="mt-6 bg-gray-100 p-4 rounded-lg">
              <h4 class="font-bold mb-2">Countdown to Event</h4>
              <div class="flex justify-center gap-4">
                <div class="text-center">
                  <span class="text-2xl font-bold block event-days">00</span>
                  <span class="text-sm">Days</span>
                </div>
                <div class="text-center">
                  <span class="text-2xl font-bold block event-hours">00</span>
                  <span class="text-sm">Hours</span>
                </div>
                <div class="text-center">
                  <span class="text-2xl font-bold block event-minutes">00</span>
                  <span class="text-sm">Minutes</span>
                </div>
              </div>
            </div>
          `

          // Set countdown for this specific event
          const eventDate = new Date(
            event.date.split("-")[0],
            Number.parseInt(event.date.split("-")[1]) - 1,
            Number.parseInt(event.date.split("-")[2]),
          )
          const now = new Date()
          const distance = eventDate.getTime() - now.getTime()

          const days = Math.floor(distance / (1000 * 60 * 60 * 24))
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

          document.querySelector(".event-days").innerText = days.toString().padStart(2, "0")
          document.querySelector(".event-hours").innerText = hours.toString().padStart(2, "0")
          document.querySelector(".event-minutes").innerText = minutes.toString().padStart(2, "0")

          eventModal.classList.remove("hidden")
          document.body.classList.add("overflow-hidden")
        }
      })
    })
  }

  // Initialize Swiper for testimonials
  function initTestimonialSwiper() {
    // Add testimonial slides
    testimonialData.forEach((testimonial) => {
      const slide = document.createElement("div")
      slide.className = "swiper-slide"
      slide.innerHTML = `
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mr-4">
            <div>
              <h3 class="font-bold">${testimonial.name}</h3>
              <p class="text-gray-600">${testimonial.location}</p>
              <div class="flex mt-1">
                ${Array(testimonial.rating)
                  .fill()
                  .map(() => `<i class="fas fa-star text-yellow-500"></i>`)
                  .join("")}
                ${Array(5 - testimonial.rating)
                  .fill()
                  .map(() => `<i class="far fa-star text-yellow-500"></i>`)
                  .join("")}
              </div>
            </div>
          </div>
          <p class="italic text-gray-700">"${testimonial.text}"</p>
        </div>
      `
      testimonialCards.appendChild(slide)
    })

    // Initialize Swiper
    const testimonialSwiper = new Swiper(".testimonialSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-testimonials",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    })
  }

  // Create the world map with pins
  function createWorldMap() {
    // Create a simple world map background
    mapContainer.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <rect x="0" y="0" width="800" height="500" fill="#e6f2ff" />
        <path d="M100,100 C150,80 200,90 250,100 C300,110 350,130 400,120 C450,110 500,90 550,85 C600,80 650,90 700,100 L700,400 C650,410 600,420 550,415 C500,410 450,400 400,410 C350,420 300,430 250,420 C200,410 150,420 100,400 Z" fill="#cce5ff" stroke="#99caff" stroke-width="2" />
      </svg>
    `

    // Add pins for each location
    mapLocations.forEach((location, index) => {
      const pin = document.createElement("div")
      pin.className =
        "absolute z-10 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white cursor-pointer transform hover:scale-110 transition duration-300 map-pin"
      pin.style.left = `${location.coordinates.x}px`
      pin.style.top = `${location.coordinates.y}px`
      pin.innerHTML = `<span class="text-xs font-bold">${index + 1}</span>`

      const tooltip = document.createElement("div")
      tooltip.className = "absolute z-20 bg-white p-3 rounded-lg shadow-lg w-48 map-tooltip"
      tooltip.style.left = `${location.coordinates.x - 24}px`
      tooltip.style.top = `${location.coordinates.y + 16}px`
      tooltip.innerHTML = `
        <h3 class="font-bold mb-1">${location.name}</h3>
        <p class="text-sm text-gray-600 mb-2">${location.location}</p>
        <button class="map-learn-more text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition duration-300" data-location="${location.name}">
          Learn More
        </button>
      `

      mapContainer.appendChild(pin)
      mapContainer.appendChild(tooltip)
    })

    // Add event listeners to the map Learn More buttons
    document.querySelectorAll(".map-learn-more").forEach((button) => {
      button.addEventListener("click", function () {
        const locationName = this.getAttribute("data-location")
        const casino =
          casinoData.find((c) => c.name === locationName) || additionalCasinos.find((c) => c.name === locationName)

        if (casino) {
          modalCasinoName.textContent = casino.name

          modalContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <img src="${casino.image}" alt="${casino.name}" class="w-full h-auto rounded-lg">
              <div>
                <p class="text-lg mb-2"><strong>Location:</strong> ${casino.location}</p>
                <div class="flex mb-2">
                  <strong class="mr-2">Rating:</strong>
                  ${Array(casino.rating)
                    .fill()
                    .map(() => `<i class="fas fa-star text-yellow-500"></i>`)
                    .join("")}
                  ${Array(5 - casino.rating)
                    .fill()
                    .map(() => `<i class="far fa-star text-yellow-500"></i>`)
                    .join("")}
                </div>
                <p>${casino.description}</p>
              </div>
            </div>
            <h4 class="text-xl font-bold mb-3">About ${casino.name}</h4>
            <p class="mb-4">${casino.details}</p>
            <h4 class="text-xl font-bold mb-3">Gallery</h4>
            <div class="grid grid-cols-3 gap-2">
              ${casino.additionalImages
                .map(
                  (img) => `
                <img src="${img}" alt="Additional view of ${casino.name}" class="w-full h-32 object-cover rounded-lg">
              `,
                )
                .join("")}
            </div>
          `

          casinoModal.classList.remove("hidden")
          document.body.classList.add("overflow-hidden")
        } else {
          // If the location doesn't have detailed data, show a simple alert
          alert(`Information about ${locationName} coming soon!`)
        }
      })
    })
  }

  // Populate FAQ accordion
  function populateFaqAccordion() {
    faqAccordion.innerHTML = ""

    faqData.forEach((faq, index) => {
      const item = document.createElement("div")
      item.className = "py-4"

      item.innerHTML = `
        <button class="faq-question flex justify-between items-center w-full text-left font-semibold focus:outline-none" aria-expanded="false" aria-controls="faq-answer-${index}">
          <span>${faq.question}</span>
          <i class="fas fa-plus text-purple-600 transform transition-transform duration-300"></i>
        </button>
        <div id="faq-answer-${index}" class="faq-answer mt-2 text-gray-600 hidden" aria-hidden="true">
          <p>${faq.answer}</p>
        </div>
      `

      faqAccordion.appendChild(item)
    })

    // Add event listeners to FAQ questions
    document.querySelectorAll(".faq-question").forEach((question, index) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling
        const icon = this.querySelector("i")

        // Toggle answer visibility
        answer.classList.toggle("hidden")

        // Toggle icon
        if (answer.classList.contains("hidden")) {
          icon.classList.remove("fa-minus", "rotate-45")
          icon.classList.add("fa-plus")
          this.setAttribute("aria-expanded", "false")
          answer.setAttribute("aria-hidden", "true")
        } else {
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus", "rotate-45")
          this.setAttribute("aria-expanded", "true")
          answer.setAttribute("aria-hidden", "false")
        }
      })
    })
  }

  // Populate blog posts
  function populateBlogPosts() {
    blogPosts.innerHTML = ""

    blogData.slice(0, 3).forEach((post, index) => {
      const article = document.createElement("article")
      article.className = "bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover"

      article.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">${post.title}</h3>
          <p class="text-gray-600 mb-3">${post.date}</p>
          <p class="mb-4">${post.excerpt}</p>
          <button class="read-blog-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" data-blog="${index}">
            Read More
          </button>
        </div>
      `

      blogPosts.appendChild(article)
    })

    // Add event listeners to the Read More buttons
    document.querySelectorAll(".read-blog-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const blogIndex = Number.parseInt(this.getAttribute("data-blog"))
        const post = blogData[blogIndex]

        if (post) {
          modalBlogTitle.textContent = post.title

          blogModalContent.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="w-full h-auto rounded-lg mb-4">
            <p class="text-gray-600 mb-4">${post.date}</p>
            <div class="prose max-w-none">
              ${post.content
                .split("\n\n")
                .map((paragraph) => `<p class="mb-4">${paragraph}</p>`)
                .join("")}
            </div>
          `

          blogModal.classList.remove("hidden")
          document.body.classList.add("overflow-hidden")
        }
      })
    })
  }

  // Populate country and favorite casino selects
  function populateSelectOptions() {
    // Country options
    countries.forEach((country) => {
      const option = document.createElement("option")
      option.value = country
      option.textContent = country
      countrySelect.appendChild(option)
    })

    // Favorite casino options
    const allCasinos = [...casinoData, ...additionalCasinos]
    allCasinos.forEach((casino) => {
      const option = document.createElement("option")
      option.value = casino.name
      option.textContent = casino.name
      favoriteCasinoSelect.appendChild(option)
    })
  }

  // VIP Form submission
  vipForm.addEventListener("submit", (e) => {
    e.preventDefault()
    submitSpinner.classList.remove("hidden")

    // Simulate form submission
    setTimeout(() => {
      submitSpinner.classList.add("hidden")

      // Show success modal
      successMessage.textContent = "You have successfully joined our VIP Club! Check your email for confirmation."
      successModal.classList.remove("hidden")
      document.body.classList.add("overflow-hidden")

      // Reset form
      vipForm.reset()
    }, 1500)
  })

  // Newsletter form submission
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    newsletterSpinner.classList.remove("hidden")

    // Simulate form submission
    setTimeout(() => {
      newsletterSpinner.classList.add("hidden")

      // Show toast notification
      toastMessage.textContent = "Thank you for subscribing to our newsletter!"
      toast.classList.remove("translate-y-24")
      toast.classList.add("translate-y-0")

      // Hide toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove("translate-y-0")
        toast.classList.add("translate-y-24")
      }, 3000)

      // Reset form
      newsletterForm.reset()
    }, 1000)
  })

  // Explore button scrolls to top casinos section
  exploreBtn.addEventListener("click", () => {
    const targetElement = document.getElementById("top-casinos")
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    })
  })

  // VIP button scrolls to VIP section
  vipBtn.addEventListener("click", () => {
    const targetElement = document.getElementById("vip")
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    })
  })

  // Initialize Swipers
  function initializeSwipers() {
    initGallerySwiper()
    initEventSwiper()
    initTestimonialSwiper()
  }

  // Initialize when DOM is loaded
  populateSelectOptions()
  populateFaqAccordion()
  populateBlogPosts()
  createWorldMap()
  initializeSwipers()

  // Intersection Observer for scroll animations
  const sections = document.querySelectorAll(".section-container")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })
})
