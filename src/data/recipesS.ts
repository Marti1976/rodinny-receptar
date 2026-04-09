import { Category, Recipe } from "../types";

export const recipesS: Recipe[] = [
  {
    id: "1s",
    category: Category.SNIDANE,
    title: "Špaldový chléb se šunkou, sýrem a zeleninou",
    instructions: "Chléb obložíme šunkou, sýrem a zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Špaldový chléb", syn: 120, mamka: 71, unit: "g", note: "2 ½ krajíce / 1 ½ krajíce", alternatives: "žitný chléb 85/50g, knäckebrot plátky 65/37g" },
      { name: "Krůtí šunka", syn: 63, mamka: 41, unit: "g", note: "5 ½ plátku / 3 ½ plátky" },
      { name: "Plátkový sýr 30%", syn: 60, mamka: 27, unit: "g", note: "4 plátky / 1 ½ plátky" },
      { name: "Cherry rajčata", syn: 120, mamka: 120, unit: "g" },
      { name: "Římský salát", syn: 80, mamka: 80, unit: "g", note: "¼ ks / ¼ ks" }
    ],
    nutrition: {
      syn: { kj: 2338, kcal: 559, p: 38, s: 54.8, t: 18.7 },
      mamka: { kj: 1377, kcal: 329, p: 21.8, s: 34.4, t: 10.0 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "2s",
    category: Category.SNIDANE,
    title: "Čokoládová kaše s proteinem a arašídovým máslem",
    instructions: "Vločky povaříme ve vodě. Chvíli před tím, než bude kaše hotová, vhodíme k ní do kastrolku čokoládu, aby se roztekla. Do hotové kaše přimícháme ještě protein na doslazení. Kaši pak ještě ozdobíme nakrájeným ovocem, arašídovým máslem a podáváme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ovesné vločky", syn: 63, mamka: 35, unit: "g", note: "6 ½ polévkové lžíce" },
      { name: "Banán", syn: 91, mamka: 50, unit: "g", note: "¾ ks" },
      { name: "Syrovátkový protein", syn: 30, mamka: 15, unit: "g" },
      { name: "Hořká čokoláda 70% kakao", syn: 10, mamka: 5, unit: "g", note: "¼ ks" },
      { name: "Voda", syn: 225, mamka: 125, unit: "ml", note: "1 hrnek" },
      { name: "Arašídové máslo", syn: 20, mamka: 10, unit: "g", note: "¾ polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 2573, kcal: 615, p: 39.6, s: 61.7, t: 20.1 },
      mamka: { kj: 1445, kcal: 345, p: 22.7, s: 36.1, t: 10.4 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "3s",
    category: Category.SNIDANE,
    title: "Bagetka s parmskou šunkou, rajčaty a mozzarellou",
    instructions: "Bagetu rozkrojíme, obložíme parmskou šunkou, nakrájenými rajčaty, mozzarellou a ozdobíme rukolou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Žitná bageta", syn: 120, mamka: 67, unit: "g", note: "¾ ks" },
      { name: "Rukola", syn: 20, mamka: 20, unit: "g" },
      { name: "Mozzarella light", syn: 97, mamka: 54, unit: "g", note: "1 ks" },
      { name: "Rajčata", syn: 100, mamka: 100, unit: "g", note: "1 ½ ks" },
      { name: "Sušená šunka parmská", syn: 60, mamka: 33, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2584, kcal: 618, p: 43, s: 63.5, t: 21.1 },
      mamka: { kj: 1435, kcal: 343, p: 23.9, s: 35.3, t: 11.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "4s",
    category: Category.SNIDANE,
    title: "Pohankové palačinky s javorovým sirupem a borůvkami",
    instructions: "V míse vyšleháme vejce, mléko, mouku se špetkou soli. Necháme v lednici na chvíli odstát. Pánev potřeme olejem a smažíme palačinky z obou stran. Hotové palačinky dáme na talíř, ozdobíme omytými borůvkami, tvarohem a pokapeme javorovým sirupem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Borůvky", syn: 150, mamka: 150, unit: "g" },
      { name: "Polotučný tvaroh", syn: 145, mamka: 81, unit: "g", note: "½ ks" },
      { name: "Javorový sirup", syn: 9, mamka: 5, unit: "g", note: "1 ½ čajové lžičky" },
      { name: "Řepkový olej", syn: 4, mamka: 2, unit: "ml", note: "¾ čajové lžičky" },
      { name: "Slepičí vejce", syn: 77, mamka: 43, unit: "g", note: "1 ½ ks" },
      { name: "Polotučné mléko", syn: 161, mamka: 89, unit: "ml", note: "1 šálek" },
      { name: "Pohankové mouka", syn: 32, mamka: 18, unit: "g", note: "2 polévkové lžíce" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2457, kcal: 587, p: 38.2, s: 55.2, t: 22 },
      mamka: { kj: 1365, kcal: 326, p: 21.2, s: 30.7, t: 12.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "5s",
    category: Category.SNIDANE,
    title: "Tuňáková pomazánka s vajíčkem a ředkvičkami",
    instructions: "Nejprve uvaříme vejce natvrdo a necháme vychladnout. Tuňáka necháme okapat a rozmačkáme v misce. Smícháme s hořčicí, máslem, žervé a najemno nakrájeným vejcem. Pomazánku dochutíme solí, pepřem a podáváme s pečivem a omytými ředkvičkami.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ředkvičky", syn: 120, mamka: 120, unit: "g", note: "¾ svazku" },
      { name: "Žitný kváskový chléb", syn: 120, mamka: 67, unit: "g", note: "2 krajíce" },
      { name: "Tuňák ve vlastní šťávě", syn: 80, mamka: 44, unit: "g" },
      { name: "Plnotučná hořčice", syn: 5, mamka: 3, unit: "g", note: "½ čajové lžičky" },
      { name: "Sýr žervé 50% t.v.s.", syn: 43, mamka: 24, unit: "g" },
      { name: "Máslo", syn: 10, mamka: 6, unit: "g", note: "1 ½ čajové lžičky" },
      { name: "Slepičí vejce", syn: 62, mamka: 34, unit: "g", note: "1 ks" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "Černý pepř", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2476, kcal: 592, p: 38.9, s: 58.5, t: 22.4 },
      mamka: { kj: 1375, kcal: 329, p: 21.6, s: 32.5, t: 12.4 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "6s",
    category: Category.SNIDANE,
    title: "Vločková kaše s ovocem, chia semínky a mandlemi",
    instructions: "Vločky spolu s chia semínky necháme namočit ve vodě přes noc v kastrůlku v lednici. Ráno povaříme do zhoustnutí. Do lehce vychladlé kaše zamícháme tvaroh. Posypeme mandlemi a ozdobíme pokrájeným ovocem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ovesné vločky", syn: 80, mamka: 44, unit: "g", note: "8 polévkových lžic / 4 ½ polévkové lžíce" },
      { name: "Hruška", syn: 75, mamka: 42, unit: "g", note: "½ ks / ¼ ks" },
      { name: "Chia semínka", syn: 20, mamka: 11, unit: "g", note: "2 polévkové lžíce / 1 polévková lžíce" },
      { name: "Bezlaktózový tvaroh", syn: 124, mamka: 69, unit: "g", note: "½ balení / ¼ balení" },
      { name: "Loupané mandle", syn: 12, mamka: 7, unit: "g", note: "¾ polévkové lžíce / ½ polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 2576, kcal: 616, p: 39.1, s: 59.7, t: 20.2 },
      mamka: { kj: 1431, kcal: 342, p: 21.7, s: 33.2, t: 11.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "7s",
    category: Category.SNIDANE,
    title: "Lehký anglický \"ham and eggs\"",
    instructions: "Šunku opečeme na pánvi do křupava a položíme na talíř. Na tuku na stejné pánvi usmažíme vajíčka (buď jako míchaná nebo sázená). Ochutíme solí a pepřem a podáváme se zeleninou a pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Kuřecí šunka", syn: 39, mamka: 22, unit: "g" },
      { name: "Rajčata", syn: 295, mamka: 164, unit: "g", note: "3 ½ ks / 2 ks" },
      { name: "Slepičí vejce", syn: 150, mamka: 83, unit: "g", note: "3 ks / 1 ½ ks" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "Černý pepř", syn: 1, mamka: 1, unit: "šp" },
      { name: "Olivový olej", syn: 3, mamka: 2, unit: "g", note: "½ čajové lžičky / ¼ čajové lžičky" },
      { name: "Žitný chléb", syn: 103, mamka: 57, unit: "g", note: "2 krajíce / 1 krajíc" }
    ],
    nutrition: {
      syn: { kj: 2405, kcal: 575, p: 35.8, s: 63.3, t: 18.7 },
      mamka: { kj: 1336, kcal: 319, p: 19.9, s: 35.2, t: 10.4 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "8s",
    category: Category.SNIDANE,
    title: "Vločkové lívance s tvarohem a ovocem",
    instructions: "Vejce smícháme s pomletými vločkami, vodou a skořicí. Směs postupně lijeme na pánev a nasucho smažíme lívance dozlatova. Na talíři ozdobíme tvarohem, který dle potřeby zakápneme čekankovým sirupem a navrch dozdobíme ovocem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Jablko", syn: 153, mamka: 73, unit: "g", note: "1 ks / ½ ks" },
      { name: "Ovesné vločky", syn: 62, mamka: 41, unit: "g", note: "6 polévkových lžic / 4 polévkové lžíce" },
      { name: "Skořice mletá", syn: 1, mamka: 1, unit: "šp" },
      { name: "Čekankový sirup", syn: 20, mamka: 9, unit: "ml", note: "1 ½ polévkové lžíce / 1 ½ čajové lžičky" },
      { name: "Slepičí vejce", syn: 118, mamka: 31, unit: "g", note: "2 ½ ks / 1 ks" },
      { name: "Voda", syn: 50, mamka: 50, unit: "ml", note: "3 ½ polévkové lžíce / 3 ½ polévkové lžíce" },
      { name: "Polotučný tvaroh", syn: 114, mamka: 96, unit: "g", note: "4 ½ polévkové lžíce / 4 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 2595, kcal: 620, p: 38.2, s: 57.5, t: 20.4 },
      mamka: { kj: 1453, kcal: 347, p: 22, s: 35, t: 10.1 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "9s",
    category: Category.SNIDANE,
    title: "Ovesná kaše s borůvkami a tvarohem",
    instructions: "Vločky si přes noc namočíme do mléka v kastrůlku. Ráno je povaříme případně s trochou vody do kašovité konzistence. Poté přidáme tvaroh a posypeme semínky. Dozdobíme omytými borůvkami a podáváme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ovesné vločky", syn: 66, mamka: 37, unit: "g", note: "6 ½ polévkové lžíce / 3 ½ polévkové lžíce" },
      { name: "Polotučné mléko", syn: 200, mamka: 111, unit: "ml", note: "1 ½ šálky / ¾ šálku" },
      { name: "Dýňová sušená semínka", syn: 16, mamka: 9, unit: "g", note: "1 polévková lžíce / ½ polévkové lžíce" },
      { name: "Polotučný tvaroh", syn: 131, mamka: 73, unit: "g", note: "5 polévkových lžic / 3 polévkové lžíce" },
      { name: "Borůvky", syn: 71, mamka: 71, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2492, kcal: 596, p: 38.1, s: 57.7, t: 20.7 },
      mamka: { kj: 1384, kcal: 331, p: 21.2, s: 32.1, t: 11.5 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "10s",
    category: Category.SNIDANE,
    title: "Vločková kaše se sušeným ovocem, jogurtem a kešu ořechy",
    instructions: "Vločky dáme do misky a spaříme vroucí vodou. Přidáme sušené ovoce, vmícháme jogurt, protein a posypeme kešu ořechy.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ovesné vločky", syn: 39, mamka: 22, unit: "g", note: "4 polévkové lžíce / 2 polévkové lžíce" },
      { name: "Sušené švestky", syn: 60, mamka: 33, unit: "g" },
      { name: "Bílý jogurt 3,5% tuku", syn: 111, mamka: 62, unit: "g", note: "⅔ kelímku / ⅓ kelímku" },
      { name: "Voda", syn: 100, mamka: 100, unit: "ml", note: "⅔ kelímku / ⅔ kelímku" },
      { name: "Kešu ořechy", syn: 30, mamka: 17, unit: "g", note: "2 polévkové lžíce / 1 polévková lžíce" },
      { name: "Syrovátkový protein", syn: 25, mamka: 14, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2582, kcal: 617, p: 36.9, s: 61.7, t: 21.4 },
      mamka: { kj: 1434, kcal: 343, p: 20.5, s: 34.3, t: 11.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "11s",
    category: Category.SNIDANE,
    title: "Houska se šunkou a sýrem, zelenina",
    instructions: "Housku rozřízneme, namažeme sýrem, obložíme šunkou a plátkovým sýrem. Do housky vložíme i list salátu a zbytek očištěné zeleniny podáváme zvlášť.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Žitná houska", syn: 107, mamka: 67, unit: "g", note: "2 ks / 1 ½ ks" },
      { name: "Lučina linie", syn: 94, mamka: 46, unit: "g" },
      { name: "Sýr eidam 30% t.v.s.", syn: 60, mamka: 28, unit: "g", note: "4 plátky / 2 plátky" },
      { name: "Krůtí šunka", syn: 26, mamka: 30, unit: "g", note: "2 plátky / 2 ½ plátky" },
      { name: "Římský salát", syn: 20, mamka: 20, unit: "g", note: "¼ ks / ¼ ks" },
      { name: "Rajčata", syn: 197, mamka: 72, unit: "g", note: "2 ½ ks / 1 ks" }
    ],
    nutrition: {
      syn: { kj: 2622, kcal: 627, p: 39.5, s: 61.7, t: 21.1 },
      mamka: { kj: 1456, kcal: 348, p: 22.7, s: 35.9, t: 10.4 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "12s",
    category: Category.SNIDANE,
    title: "Banánové proteinové placičky",
    instructions: "Zralý banán rozmačkáme s moukou, vločkami, vejcem a proteinovým práškem. Ze směsi vytvoříme placičky, které z obou stran osmažíme na přepuštěném másle a podáváme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ovesné vločky", syn: 62, mamka: 34, unit: "g", note: "6 polévkových lžic / 3 ½ polévkové lžíce" },
      { name: "Banán", syn: 93, mamka: 52, unit: "g", note: "¾ ks / ½ ks" },
      { name: "Syrovátkový protein", syn: 23, mamka: 13, unit: "g" },
      { name: "Slepičí vejce", syn: 85, mamka: 47, unit: "g", note: "1 ½ ks / 1 ks" },
      { name: "Kokosová mouka", syn: 15, mamka: 8, unit: "g", note: "1 polévková lžíce / ½ polévkové lžíce" },
      { name: "Ghí", syn: 5, mamka: 3, unit: "g", note: "½ čajové lžičky / ¼ čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 2584, kcal: 618, p: 40.6, s: 60.2, t: 19.8 },
      mamka: { kj: 1435, kcal: 343, p: 22.6, s: 33.4, t: 11.0 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "13s",
    category: Category.SNIDANE,
    title: "Vajíčkovo-tvarohová pomazánka s pečivem",
    instructions: "Vejce uvaříme natvrdo. V míse rozmícháme tvaroh, cibulku a olivový olej. Přidáme rozkrájená vejce a okořeníme. Podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Slepičí vejce", syn: 130, mamka: 72, unit: "g", note: "2 ½ ks / 1 ½ ks" },
      { name: "Polotučný tvaroh", syn: 123, mamka: 68, unit: "g", note: "5 polévkových lžic / 2 ½ polévkové lžíce" },
      { name: "Jarní cibulka", syn: 50, mamka: 50, unit: "g", note: "2 ½ ks / 2 ½ ks" },
      { name: "Černý pepř", syn: 1, mamka: 1, unit: "šp" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "Extra panenský olivový olej", syn: 3, mamka: 2, unit: "g", note: "½ čajové lžičky / ¼ čajové lžičky" },
      { name: "Křehký žitný chléb", syn: 79, mamka: 44, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2622, kcal: 627, p: 40.2, s: 60.8, t: 22.4 },
      mamka: { kj: 1457, kcal: 348, p: 22.3, s: 33.8, t: 12.4 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '14s',
    category: Category.SNIDANE,
    title: 'Jablečný koláč',
    instructions: 'Jablka nastrouháme, přidáme do nich vejce, rozpuštěný olej. Postupně přidáváme mouku, kypřící prášek nebo jedlou sodu. Nakonec vmícháme tvaroh. Dochutíme skořicí a medem. Pečeme na 180 st. cca 30 minut.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Jablko', syn: 170, mamka: 94, unit: 'g', note: '1 ks / ½ ks' },
      { name: 'Pohanková mouka', syn: 50, mamka: 28, unit: 'g', note: '3 ½ polévkové lžíce / 2 polévkové lžíce' },
      { name: 'Slepičí vejce', syn: 141, mamka: 78, unit: 'g', note: '3 ks / 1 ½ ks' },
      { name: 'Kokosový olej', syn: 5, mamka: 3, unit: 'ml', note: '1 čajová lžička / ½ čajové lžičky' },
      { name: 'Bezlaktózový tvaroh', syn: 106, mamka: 59, unit: 'g', note: '⅓ balení / ¼ balení' },
      { name: 'Skořice mletá', syn: 2, mamka: 1, unit: 'g', note: '⅔ čajové lžičky / ⅓ čajové lžičky' },
      { name: 'Med', syn: 5, mamka: 3, unit: 'g', note: '½ čajové lžičky / ¼ čajové lžičky' },
      { name: 'Kypřící prášek do pečiva', syn: 15, mamka: 8, unit: 'g', note: '1 ½ ks / 1 ks' }
    ],
    nutrition: {
      syn: { kj: 2706, kcal: 647, p: 41.9, s: 65.7, t: 22.2 },
      mamka: { kj: 1503, kcal: 359, p: 23.3, s: 36.5, t: 12.3 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '15s',
    category: Category.SNIDANE,
    title: 'Pečivo s cottage a zeleninou',
    instructions: 'Pečivo namažeme cottage sýrem a podáváme s očištěnou pokrájnou zeleninou.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Sýr cottage', syn: 200, mamka: 111, unit: 'g', note: '1 ½ kelímku / ¾ kelímku' },
      { name: 'Celozrnný chléb', syn: 120, mamka: 67, unit: 'g', note: '2 ½ krajíce / 1 ½ krajíce' },
      { name: 'Salátová okurka', syn: 187, mamka: 187, unit: 'g', note: '½ ks / ½ ks' }
    ],
    nutrition: {
      syn: { kj: 2344, kcal: 560, p: 35.9, s: 56.5, t: 19.1 },
      mamka: { kj: 1302, kcal: 311, p: 19.9, s: 31.4, t: 10.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '16s',
    category: Category.SNIDANE,
    title: 'Tvaroh s vločkami, semínky a ovocem',
    instructions: "Banán v misce rozmačkáme vidličkou a promícháme spolu s tvarohem. Ochucený tvaroh posypeme zbylými ingrediencemi a podáváme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Polotučný tvaroh", syn: 243, mamka: 135, unit: "g", note: "10 polévkových lžic / 5 ½ polévkové lžíce" },
      { name: "Ovesné vločky", syn: 43, mamka: 24, unit: "g", note: "4 ½ polévkové lžíce / 2 ½ polévkové lžíce" },
      { name: "Banán", syn: 119, mamka: 66, unit: "g", note: "1 ks / ½ ks" },
      { name: "Maliny", syn: 39, mamka: 39, unit: "g" },
      { name: "Slunečnicová semínka", syn: 9, mamka: 5, unit: "g", note: "1 ½ čajové lžičky / ¾ čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 2601, kcal: 621, p: 40.9, s: 65, t: 18.7 },
      mamka: { kj: 1445, kcal: 345, p: 22.7, s: 36.1, t: 10.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '17s',
    category: Category.SNIDANE,
    title: 'Chléb s vejcem, šunkou a zeleninou',
    instructions: "Vejce uvaříme naměkko, lžičkou odstraníme horní část skořápky a vejce osolíme. Podáváme s chlebem, šunkou a omytou nakrájenou zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Slepičí vejce", syn: 193, mamka: 107, unit: "g", note: "3 ½ ks / 2 ks" },
      { name: "Krůtí šunka", syn: 40, mamka: 22, unit: "g", note: "3 ½ plátku / 2 plátky" },
      { name: "Červená paprika", syn: 92, mamka: 92, unit: "g", note: "½ ks / ½ ks" },
      { name: "Žitný chléb", syn: 112, mamka: 62, unit: "g", note: "2 krajíce / 1 krajíc" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2615, kcal: 625, p: 41.6, s: 66.2, t: 19.6 },
      mamka: { kj: 1453, kcal: 347, p: 23.1, s: 36.8, t: 10.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '18s',
    category: Category.SNIDANE,
    title: 'Vločky s tvarohem a skořicovým jablkem',
    instructions: "Vločky dáme do misky spolu s nasekanými ořechy a zalijeme trochou vařící vody, aby hladina sahala lehce pod hranu vloček. Necháme odstát, aby se veškerá voda vsákla. Mezitím si nastrouháme jablko a smícháme se skořicí. Vločky podáváme spolu s tvarohem a ochuceným jablkem. Směs můžeme i zamíchat.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Ovesné vločky", syn: 68, mamka: 38, unit: "g", note: "7 polévkových lžic / 4 polévkové lžíce" },
      { name: "Polotučný tvaroh", syn: 214, mamka: 119, unit: "g", note: "9 polévkových lžic / 5 polévkových lžic" },
      { name: "Jablko", syn: 187, mamka: 104, unit: "g", note: "1 ks / ⅔ ks" },
      { name: "Loupané mandle", syn: 9, mamka: 5, unit: "g", note: "4 ½ ks / 2 ½ ks" },
      { name: "Skořice mletá", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2633, kcal: 630, p: 39.6, s: 65.9, t: 19.6 },
      mamka: { kj: 1463, kcal: 350, p: 22, s: 36.6, t: 10.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '19s',
    category: Category.SNIDANE,
    title: 'Toust a míchaná vajíčka',
    instructions: "Vejce osolíme, opepříme a umícháme na teflonové pánvi nasucho. Podáváme s opečeným chlebem a očištěnou pokrájenou zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Slepičí vejce", syn: 223, mamka: 124, unit: "g", note: "4 ½ ks / 2 ½ ks" },
      { name: "Žitný chléb", syn: 101, mamka: 56, unit: "g", note: "2 krajíce / 1 krajíc" },
      { name: "Salátová okurka", syn: 250, mamka: 250, unit: "g", note: "¾ ks / ¾ ks" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "Černý pepř", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2570, kcal: 614, p: 40.5, s: 60.3, t: 22.3 },
      mamka: { kj: 1428, kcal: 341, p: 22.5, s: 33.5, t: 12.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '20s',
    category: Category.SNIDANE,
    title: 'Knäckebrot s vajíčkovou pomazánkou',
    instructions: "Vajíčka uvaříme natvrdo, vidličkou rozmačkáme, smícháme s tvarohem, hořčicí, osolíme a opepříme. Podáváme s knäckebrotem a se zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Vejce vařené natvrdo", syn: 119, mamka: 66, unit: "g", note: "2 ½ ks / 1 ½ ks" },
      { name: "Polotučný tvaroh", syn: 112, mamka: 62, unit: "g", note: "4 ½ polévkové lžíce / 2 ½ polévkové lžíce" },
      { name: "Plnotučná hořčice", syn: 9, mamka: 5, unit: "g", note: "1 čajová lžička / ½ čajové lžičky" },
      { name: "Žitný knäckebrot", syn: 61, mamka: 34, unit: "g", note: "6 plátků / 3 ½ plátky" },
      { name: "Sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "Černý pepř", syn: 1, mamka: 1, unit: "šp" },
      { name: "Zelená paprika", syn: 200, mamka: 200, unit: "g", note: "1 ½ ks / 1 ½ ks" }
    ],
    nutrition: {
      syn: { kj: 2612, kcal: 625, p: 39.4, s: 64.8, t: 21.6 },
      mamka: { kj: 1451, kcal: 347, p: 21.9, s: 36, t: 12 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '21s',
    category: Category.SNIDANE,
    title: 'Chléb s máslem, tvarůžky a zeleninou',
    instructions: "Chléb namažeme máslem a poklademe pokrájeným sýrem. Podáváme spolu s očištěnou a pokrájenou zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Celozrnný chléb", syn: 139, mamka: 77, unit: "g", note: "2 ½ krajíce / 1 ½ krajíce" },
      { name: "Olomoucké tvarůžky", syn: 79, mamka: 44, unit: "g", note: "1 balení / ½ balení" },
      { name: "Máslo", syn: 14, mamka: 8, unit: "g", note: "2 čajové lžičky / 1 čajová lžička" },
      { name: "Rajčata", syn: 97, mamka: 97, unit: "g", note: "1 ks / 1 ks" },
      { name: "Salátová okurka", syn: 89, mamka: 89, unit: "g", note: "¼ ks / ¼ ks" }
    ],
    nutrition: {
      syn: { kj: 2601, kcal: 621, p: 40.9, s: 65, t: 18.7 },
      mamka: { kj: 1439, kcal: 344, p: 22.9, s: 36.4, t: 10.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '22s',
    category: Category.SNIDANE,
    title: 'Pečivo s máslem, šunkou a sýrem',
    instructions: 'Pečivo rozřízneme, namažeme máslem a poklademe šunkou a sýrem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Žitný dalamánek', syn: 126, mamka: 70, unit: 'g', note: '2 ks / 1 ks' },
      { name: 'Krůtí šunka', syn: 76, mamka: 42, unit: 'g', note: '6 plátků / 3 ½ plátky' },
      { name: 'Plátkový sýr 30%', syn: 52, mamka: 29, unit: 'g', note: '3 ½ plátky / 2 plátky' },
      { name: 'Máslo', syn: 11, mamka: 6, unit: 'g', note: '2 čajové lžičky / 1 čajová lžička' }
    ],
    nutrition: {
      syn: { kj: 2595, kcal: 620, p: 38.2, s: 57.5, t: 20.4 },
      mamka: { kj: 1453, kcal: 347, p: 22.8, s: 36.2, t: 10.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '23s',
    category: Category.SNIDANE,
    title: 'Bílý jogurt s vločkami, ořechy a jablkem',
    instructions: 'Jogurt promícháme s vločkami, ořechy a na kostičky nakrájeným jablkem a podáváme.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Řecký jogurt 0% tuku', syn: 317, mamka: 176, unit: 'g', note: '2 ½ ks / 1 ½ ks' },
      { name: 'Pohankové vločky', syn: 45, mamka: 25, unit: 'g', note: '4 ½ polévkové lžíce / 2 ½ polévkové lžíce' },
      { name: 'Vlašské ořechy', syn: 25, mamka: 14, unit: 'g', note: '8 ks / 4 ½ ks' },
      { name: 'Jablko', syn: 212, mamka: 118, unit: 'g', note: '1 ½ ks / ¾ ks' }
    ],
    nutrition: {
      syn: { kj: 2598, kcal: 621, p: 45.4, s: 61.1, t: 16.2 },
      mamka: { kj: 1438, kcal: 344, p: 22.9, s: 36.6, t: 10.2 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '24s',
    category: Category.SNIDANE,
    title: 'Skyr s cereáliemi, oříšky a ovocem',
    instructions: 'Skyr smícháme s cereáliemi a oříšky. Podáváme s nakrájeným ovocem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Hroznové víno', syn: 70, mamka: 70, unit: 'g' },
      { name: 'Skyr', syn: 259, mamka: 144, unit: 'g', note: '2 kelímky / 1 kelímek' },
      { name: 'Sypané müsli', syn: 56, mamka: 31, unit: 'g' },
      { name: 'Vlašské ořechy', syn: 27, mamka: 15, unit: 'g', note: '9 ks / 5 ks' }
    ],
    nutrition: {
      syn: { kj: 2597, kcal: 621, p: 41.1, s: 64.9, t: 18.2 },
      mamka: { kj: 1442, kcal: 345, p: 22.9, s: 36.1, t: 10.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '25s',
    category: Category.SNIDANE,
    title: 'Tousty se šunkou a sýrem, čerstvá zelenina',
    instructions: 'Tousty zapečeme se šunkou a sýrem v toustovači nebo nasucho na pánvi a podáváme s čerstvou nakrájenou zeleninou.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Salátová okurka', syn: 50, mamka: 50, unit: 'g', note: '¼ ks / ¼ ks' },
      { name: 'Krůtí šunka', syn: 49, mamka: 27, unit: 'g', note: '4 plátky / 2 ½ plátky' },
      { name: 'Plátkový sýr 30%', syn: 61, mamka: 34, unit: 'g', note: '4 plátky / 2 plátky' },
      { name: 'Špaldový toast', syn: 122, mamka: 68, unit: 'g', note: '6 ks / 3 ½ ks' },
      { name: 'Rajčata', syn: 72, mamka: 72, unit: 'g', note: '1 ks / 1 ks' }
    ],
    nutrition: {
      syn: { kj: 2615, kcal: 625, p: 39.6, s: 63, t: 18.2 },
      mamka: { kj: 1266, kcal: 303, p: 21.9, s: 34.2, t: 9.6 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '26s',
    category: Category.SNIDANE,
    title: 'Pečivo s lučinou, sýrem a zeleninou',
    instructions: 'Pečivo namažeme lučinou, obložíme sýrem a pokrájenou zeleninou.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Pohankový chléb', syn: 88, mamka: 49, unit: 'g', note: '2 krajíce / 1 krajíc' },
      { name: 'Lučina linie', syn: 54, mamka: 30, unit: 'g' },
      { name: 'Plátkový sýr 30%', syn: 65, mamka: 36, unit: 'g', note: '4 ½ plátky / 2 ½ plátky' },
      { name: 'Kedlubna', syn: 200, mamka: 200, unit: 'g', note: '3 ½ ks / 3 ½ ks' }
    ],
    nutrition: {
      syn: { kj: 2584, kcal: 618, p: 40.6, s: 60.2, t: 19.8 },
      mamka: { kj: 1423, kcal: 340, p: 22, s: 34.9, t: 10.3 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '27s',
    category: Category.SNIDANE,
    title: 'Míchaná vajíčka se šunkou, zelenina, pečivo',
    instructions: 'Vajíčka rozšleháme v misce a nalijeme na nepřilnavou pánev, osolíme, opepříme a mícháme do požadované konzistence. Ještě před koncem přidáme pokrájenou šunku. Podáváme s očištěnou pokrájenou zeleninou a pečivem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'Slepičí vejce', syn: 189, mamka: 105, unit: 'g', note: "3 ½ ks / 2 ks" },
      { name: 'Krůtí šunka', syn: 43, mamka: 24, unit: 'g', note: '4 plátky / 2 plátky' },
      { name: 'Rajčata', syn: 102, mamka: 102, unit: 'g', note: '1 ½ ks / 1 ½ ks' },
      { name: 'Žitný chléb', syn: 119, mamka: 66, unit: 'g', note: '2 ½ krajíce / 1 ½ krajíce' },
      { name: 'Sůl', syn: 1, mamka: 1, unit: 'šp' },
      { name: 'Černý pepř', syn: 1, mamka: 1, unit: 'šp' }
    ],
    nutrition: {
      syn: { kj: 2622, kcal: 627, p: 40.2, s: 60.8, t: 22.4 },
      mamka: { kj: 1448, kcal: 346, p: 23.6, s: 37.3, t: 10.7 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "28s",
    category: Category.SNIDANE,
    title: "Chléb s marmeládou a proteinový shake",
    instructions: "Chléb namažeme máslem a marmeládou. Tvaroh a proteinový prášek smícháme, doplníme vodou a rozmixujeme. Podáváme spolu.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "Třešňová marmeláda (75% ovoce)", syn: 36, mamka: 20, unit: "g" },
      { name: "Celozrnný chléb", syn: 86, mamka: 47, unit: "g", alternatives: "žitný chléba 85/50g, knäckebrot plátky 65/37g" },
      { name: "Máslo", syn: 19, mamka: 10, unit: "g", alternatives: "ořechové máslo 25/14g" },
      { name: "Odtučněný tvaroh", syn: 120, mamka: 66, unit: "g", alternatives: "tučný tvaroh 100/55g" },
      { name: "Syrovátkový protein", syn: 22, mamka: 12, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2574, kcal: 615, p: 38, s: 62, t: 23 },
      mamka: { kj: 1416, kcal: 338, p: 20.9, s: 34.1, t: 12.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "29s",
    category: Category.SNIDANE,
    title: "Hustá česnečka",
    instructions: "Brambory očistíme a nakrájíme na malé kousky a uvaříme v osolené vodě doměkka. Přidáme pepř, nadrobno nakrájenou šunku, zeleninu a na závěr rozklepneme vajíčko. Na talíř dáme stroužek česneku, následně zalijeme polévkou a pak přidáme sýr a podáváme s pečivem. Lze nasucho i opéct pečivo a přidat jako krutony.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "slepičí vejce", syn: 116, mamka: 64, unit: "g", note: "2 ks / 1 ks" },
      { name: "žitný chleba", syn: 62, mamka: 34, unit: "g", note: "1 krajíce / 1/2 krajíc" },
      { name: "česnek", syn: 5, mamka: 2.8, unit: "g", note: "1 stroužek / 1/2 stroužku" },
      { name: "vepřová šunka", syn: 48, mamka: 26, unit: "g", alternatives: "hovězí šunky 55/30g" },
      { name: "sýr (bezlaktozový nebo hodně bílkovin)", syn: 48, mamka: 26, unit: "g" },
      { name: "cibule šalotka", syn: 200, mamka: 110, unit: "g" },
      { name: "brambor", syn: 109, mamka: 60, unit: "g" },
      { name: "černého pepře", syn: 1, mamka: 1, unit: "šp" },
      { name: "soli", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2752, kcal: 658, p: 43.0, s: 67.0, t: 22.0 },
      mamka: { kj: 1514, kcal: 362, p: 23.7, s: 36.9, t: 12.1 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "30s",
    category: Category.SNIDANE,
    title: "Mandlové francouzské tousty",
    instructions: "Mléko, čekankový sirup, mandle, vejce a skořici dáme do mixéru a důkladně promixujeme. Následně přelijeme do hlubokého talíře a obalujeme tousty z obou stran. Smažíme na ghí másle.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "celozrnné tousty", syn: 99, mamka: 54, unit: "g" },
      { name: "polotučné mléko", syn: 119, mamka: 65, unit: "ml" },
      { name: "čekankový sirup", syn: 8, mamka: 4.4, unit: "ml" },
      { name: "plátky mandlí", syn: 10, mamka: 5.5, unit: "g" },
      { name: "řecký jogurt", syn: 140, mamka: 77, unit: "g" },
      { name: "jahody", syn: 50, mamka: 28, unit: "g" },
      { name: "slepičí vajíčko", syn: 50, mamka: 28, unit: "g" },
      { name: "ghí máslo", syn: 5, mamka: 2.8, unit: "g" },
      { name: "špetka skořice", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2472, kcal: 591, p: 36.0, s: 57.0, t: 21.0 },
      mamka: { kj: 1360, kcal: 325, p: 19.8, s: 31.4, t: 11.6 },
      originSyn: "X",
      originMamka: "X"
    }
  }
];