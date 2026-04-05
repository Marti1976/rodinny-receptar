import { Category, Recipe } from "../types";

export const recipesP: Recipe[] = [
    // ✅ Zkontrolováno.
  {
    id: "1p",
    category: Category.PRESNIDAVKA,
    title: "Knäckebrot se sýrem, šunkou a zeleninou",
    instructions: "Knäckebrot obložíme sýrem a šunkou. Podáváme společně se zeleninou.",
    ingredients: [
      { name: "žitný knäckebrot", syn: 31, mamka: 17, unit: "g", note: "3 plátky / 1.5 plátku" },
      { name: "sýr eidam 30% t.v.s.", syn: 45, mamka: 25, unit: "g", note: "3 plátky / 1.5 plátku" },
      { name: "vepřová šunka", syn: 10, mamka: 6, unit: "g" },
      { name: "červená paprika", syn: 67, mamka: 67, unit: "g", note: "⅓ ks" }
    ],
    nutrition: {
      syn: { kj: 1100, kcal: 263, p: 18.5, s: 25.1, t: 8.3 },
      mamka: { kj: 660, kcal: 158, p: 11.1, s: 15.1, t: 5.0 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "2p",
    category: Category.PRESNIDAVKA,
    title: "Rajčatový salát s mozzarellou a pečivem",
    instructions: "Do misky nakrájíme rajčata, natrháme mozzarellu, přidáme sekanou bazalku a dochutíme solí a pepřem. Podáváme spolu s pečivem.",
    ingredients: [
      { name: "mozzarella light", syn: 66, mamka: 38, unit: "g", note: "⅔ ks / 1/3 ks" },
      { name: "rajčata", syn: 144, mamka: 85, unit: "g", note: "2 ks / 1 ks" },
      { name: "bazalka", syn: 7, mamka: 6, unit: "g" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "celozrnný chléb (k podávání)", syn: 47, mamka: 30, unit: "g", note: "1 krajíc / 1/2 krajíc" }
    ],
    nutrition: {
      syn: { kj: 1104, kcal: 264, p: 18.2, s: 25.2, t: 9.5 },
      mamka: { kj: 670, kcal: 160, p: 10.9, s: 15.8, t: 5.6 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "3p",
    category: Category.PRESNIDAVKA,
    title: "Ředkvičky s tvarohem a knäckebrotem",
    instructions: "Ředkvičky omyjeme, nastrouháme a promícháme s tvarohem naředěným jogurtem, ochutíme kmínem a solí. Podáváme s pečivem.",
    ingredients: [
      { name: "ředkvičky", syn: 137, mamka: 137, unit: "g", note: "1 svazek" },
      { name: "polotučný tvaroh", syn: 81, mamka: 45, unit: "g", note: "3 polévkové lžíce / 1.5 polévkové lžíce" },
      { name: "bílý jogurt 3,5% tuku", syn: 122, mamka: 68, unit: "g", note: "¾ kelímku / 1/2 kelímku" },
      { name: "kmín", syn: 1, mamka: 1, unit: "špetka" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "žitný knäckebrot", syn: 30, mamka: 17, unit: "g", note: "3 plátky / 1.5 plátku" }
    ],
    nutrition: {
      syn: { kj: 1257, kcal: 300, p: 19.5, s: 31.2, t: 8.7 },
      mamka: { kj: 754, kcal: 180, p: 11.7, s: 18.7, t: 5.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "4p",
    category: Category.PRESNIDAVKA,
    title: "Chléb s máslem a šunkou, mrkev",
    instructions: "Chléb namažeme máslem, obložíme šunkou a podáváme s mrkví nakrájenou na kolečka.",
    ingredients: [
      { name: "celozrnný chléb", syn: 42, mamka: 23, unit: "g", note: "¾ krajíce / 1/2 krajíce" },
      { name: "máslo", syn: 7, mamka: 4, unit: "g", note: "1 čajová lžička" },
      { name: "krůtí šunka", syn: 74, mamka: 41, unit: "g", note: "6 plátků / 3 plátky" },
      { name: "mrkev", syn: 128, mamka: 128, unit: "g", note: "1 ½ ks" }
    ],
    nutrition: {
      syn: { kj: 1100, kcal: 263, p: 18.3, s: 24.8, t: 8.2 },
      mamka: { kj: 660, kcal: 158, p: 11.0, s: 14.9, t: 4.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "5p",
    category: Category.PRESNIDAVKA,
    title: "Toast s tofu, rajčaty a bazalkou",
    instructions: "Toast obložíme tofu a rajčaty. Ochutíme bazalkou a špetkou soli.",
    ingredients: [
      { name: "tofu", syn: 96, mamka: 53, unit: "g", note: "½ ks / 1/4 ks" },
      { name: "špaldový toast", syn: 49, mamka: 27, unit: "g", note: "2 ½ ks / 1.5 ks" },
      { name: "rajčata", syn: 62, mamka: 62, unit: "g", note: "¾ ks" },
      { name: "sušená bazalka", syn: 1, mamka: 1, unit: "špetka" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 1103, kcal: 264, p: 19, s: 26, t: 10.1 },
      mamka: { kj: 662, kcal: 158, p: 11.4, s: 15.6, t: 6.1 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "6p",
    category: Category.PRESNIDAVKA,
    title: "Jablko s mrkví, ořechy a strouhaným tvarohem",
    instructions: "Mrkev s jablkem nastrouháme and dobře promícháme. Směs posypeme nasekanými ořechy, nastrouhaným tvarohem a podáváme.",
    ingredients: [
      { name: "jablko", syn: 124, mamka: 80, unit: "g", note: "¾ ks / 1/2 ks" },
      { name: "mrkev", syn: 169, mamka: 81, unit: "g", note: "2 ks / 1 ks" },
      { name: "pekanové ořechy", syn: 10, mamka: 6, unit: "g", note: "3 ½ ks / 2 ks" },
      { name: "tvrdý tvaroh", syn: 70, mamka: 40, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1116, kcal: 267, p: 18.4, s: 24.8, t: 8.4 },
      mamka: { kj: 643, kcal: 154, p: 10.5, s: 14.2, t: 5 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "7p",
    category: Category.PRESNIDAVKA,
    title: "Chléb se šunkou a zeleninovým cottage sýrem",
    instructions: "Zeleninu nakrájíme na drobné kostičky a smícháme se sýrem cottage, pepřem a nasekanou bazalkou. Podáváme spolu s chlebem a šunkou.",
    ingredients: [
      { name: "sýr cottage", syn: 103, mamka: 57, unit: "g", note: "⅔ kelímku / 1/3 kelímku" },
      { name: "rajčata", syn: 100, mamka: 100, unit: "g", note: "1 ½ ks" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "bazalka", syn: 4, mamka: 4, unit: "g" },
      { name: "vepřová šunka", syn: 20, mamka: 11, unit: "g" },
      { name: "žitný chléb", syn: 40, mamka: 22, unit: "g", note: "1 krajíček / 1/2 krajíčku" }
    ],
    nutrition: {
      syn: { kj: 1102, kcal: 263, p: 19.6, s: 26.5, t: 8.4 },
      mamka: { kj: 661, kcal: 158, p: 11.8, s: 15.9, t: 5.0 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "8p",
    category: Category.PRESNIDAVKA,
    title: "Kompletní svačina na cesty",
    instructions: "Jablko nakrájíme na měsíčky a dáme spolu s ořechy do krabičky. Protein dáme do shakeru nebo malé lahvičky a před konzumací jen zalijeme vodou a promícháme.",
    ingredients: [
      { name: "syrovátkový protein", syn: 19, mamka: 11, unit: "g" },
      { name: "kešu ořechy", syn: 14, mamka: 8, unit: "g", note: "1 polévková lžíce / 1/2 polévkové lžíce" },
      { name: "jablko", syn: 195, mamka: 195, unit: "g", note: "1 ½ ks" }
    ],
    nutrition: {
      syn: { kj: 1093, kcal: 261, p: 18.5, s: 25.2, t: 8.3 },
      mamka: { kj: 656, kcal: 157, p: 11.1, s: 15.1, t: 5.0 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "9p",
    category: Category.PRESNIDAVKA,
    title: "Jablko se šunkou a ořechy",
    instructions: "Jablko nakrájíme na měsíčky a podáváme spolu se šunkou a ořechy.",
    ingredients: [
      { name: "hovězí šunka", syn: 80, mamka: 44, unit: "g", note: "5 ½ plátky / 3 plátky" },
      { name: "vlašské ořechy", syn: 10, mamka: 6, unit: "g", note: "3 ½ ks / 2 ks" },
      { name: "jablko", syn: 200, mamka: 200, unit: "g", note: "1 ½ ks" }
    ],
    nutrition: {
      syn: { kj: 1080, kcal: 258, p: 18.4, s: 22.5, t: 9.3 },
      mamka: { kj: 648, kcal: 155, p: 11.0, s: 13.5, t: 5.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "10p",
    category: Category.PRESNIDAVKA,
    title: "Tvaroh s ovocem a mandlemi",
    instructions: "Banán rozmačkáme vidličkou a smícháme spolu s tvarohem, medem a skořicí. Vzniklý krém ozdobíme omytým ovocem spolu s nasekanými mandlemi a podáváme.",
    ingredients: [
      { name: "odtučněný tvaroh (měkký)", syn: 132, mamka: 73, unit: "g", note: "5 ½ polévkové lžíce / 3 polévkové lžíce" },
      { name: "banán", syn: 40, mamka: 40, unit: "g", note: "¼ ks" },
      { name: "borůvky", syn: 100, mamka: 100, unit: "g" },
      { name: "med", syn: 5, mamka: 3, unit: "g", note: "½ čajové lžičky" },
      { name: "loupané mandle", syn: 12, mamka: 7, unit: "g", note: "¾ polévkové lžíce" },
      { name: "skořice mletá", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 1123, kcal: 268, p: 20.2, s: 27.1, t: 7.4 },
      mamka: { kj: 674, kcal: 161, p: 12.1, s: 16.3, t: 4.4 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "11p",
    category: Category.PRESNIDAVKA,
    title: "Tvaroh s kousky čokolády a ovocem",
    instructions: "Čokoládu nasekáme na malé kousky, ovoce nakrájíme na kostičky a oboje vmícháme do tvarohu.",
    ingredients: [
      { name: "hořká čokoláda 70% kakao", syn: 18, mamka: 11, unit: "g", note: "¼ ks / 1/4 ks" },
      { name: "pomeranč", syn: 141, mamka: 70, unit: "g", note: "1 ks / 1/2 ks" },
      { name: "odtučněný tvaroh (měkký)", syn: 133, mamka: 75, unit: "g", note: "5 ½ polévkové lžíce / 3 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1096, kcal: 262, p: 18.9, s: 25.5, t: 8.2 },
      mamka: { kj: 618, kcal: 148, p: 10.6, s: 13.7, t: 5 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "12p",
    category: Category.PRESNIDAVKA,
    title: "Jablko s mandlemi a řeckým jogurtem",
    instructions: "Jablko nakrájíme na kousky, smícháme s jogurtem a posypeme sekanými mandlemi.",
    ingredients: [
      { name: "jablko", syn: 180, mamka: 95, unit: "g", note: "1 ks / 1/2 ks" },
      { name: "loupané mandle", syn: 13, mamka: 8, unit: "g", note: "1 polévková lžíce / 4 ks" },
      { name: "řecký jogurt 0% tuku", syn: 151, mamka: 85, unit: "g", note: "1 ks / 1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1090, kcal: 261, p: 18.7, s: 25.2, t: 8.1 },
      mamka: { kj: 617, kcal: 148, p: 10.7, s: 13.5, t: 4.9 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "13p",
    category: Category.PRESNIDAVKA,
    title: "Mango se strouhaným tvarohem a semínky",
    instructions: "Tvaroh nastrouháme a přidáme na kousky nakrájené mango a semena dýně.",
    ingredients: [
      { name: "mango", syn: 167, mamka: 167, unit: "g", note: "⅔ ks" },
      { name: "tvrdý tvaroh", syn: 58, mamka: 32, unit: "g" },
      { name: "dýňová sušená semínka", syn: 16, mamka: 9, unit: "g", note: "1 polévková lžíce / 1/2 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1110, kcal: 265, p: 18.9, s: 25.6, t: 8.6 },
      mamka: { kj: 666, kcal: 159, p: 11.3, s: 15.4, t: 5.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "14p",
    category: Category.PRESNIDAVKA,
    title: "Sýrová rolka se šunkou a knäckebrotem",
    instructions: "Sýr potřeme lučinou, položíme na něj šunku a zatočíme. Podáváme s čerstvou nakrájenou zeleninou a s knäckebrotem.",
    ingredients: [
      { name: "plátový sýr 30%", syn: 29, mamka: 16, unit: "g", note: "2 plátky / 1 plátek" },
      { name: "krůtí šunka", syn: 27, mamka: 15, unit: "g", note: "2 ½ plátky / 1.5 plátku" },
      { name: "Lučina linie", syn: 27, mamka: 15, unit: "g" },
      { name: "rajčata", syn: 105, mamka: 105, unit: "g", note: "1 ½ ks" },
      { name: "žitný knäckebrot", syn: 30, mamka: 17, unit: "g", note: "3 plátky / 1.5 plátku" }
    ],
    nutrition: {
      syn: { kj: 1134, kcal: 271, p: 18.7, s: 26, t: 8.6 },
      mamka: { kj: 680, kcal: 163, p: 11.2, s: 15.6, t: 5.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "15p",
    category: Category.PRESNIDAVKA,
    title: "Tvarohovo smetanový dip s řapíkatým celerem",
    instructions: "Tvaroh smícháme se zakysanou smetanou, lehce osolíme, opepříme, můžeme přimíchat bylinky a česnek dle chuti. Podáváme s omytým a nakrájeným řapíkatým celerem a očištěnou mrkví.",
    ingredients: [
      { name: "polotučný tvaroh", syn: 96, mamka: 53, unit: "g", note: "4 polévkové lžíce / 2 polévkové lžíce" },
      { name: "zakysaná smetana 8%", syn: 24, mamka: 13, unit: "ml", note: "2 polévkové lžíce / 1 polévková lžíce" },
      { name: "mrkev", syn: 200, mamka: 200, unit: "g", note: "2 ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "bylinky", syn: 3, mamka: 3, unit: "g" },
      { name: "česnek", syn: 20, mamka: 11, unit: "g", note: "4 stroužky / 2 stroužky" },
      { name: "řapíkatý celer", syn: 159, mamka: 159, unit: "g", note: "⅓ ks" }
    ],
    nutrition: {
      syn: { kj: 1096, kcal: 262, p: 17.6, s: 23.7, t: 7.7 },
      mamka: { kj: 658, kcal: 157, p: 10.6, s: 14.2, t: 4.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "16p",
    category: Category.PRESNIDAVKA,
    title: "Svačinový salátek",
    instructions: "Všechny ingredience nakrájíme na malé kousky a smícháme. V krabičce je salátek vhodnou svačinkou do práce i na cesty.",
    ingredients: [
      { name: "krůtí šunka", syn: 61, mamka: 34, unit: "g", note: "3 plátky" },
      { name: "mrkev", syn: 96, mamka: 96, unit: "g", note: "1 ks" },
      { name: "dýňová sušená semínka", syn: 16, mamka: 9, unit: "g", note: "1 1/2 čajové lžičky" },
      { name: "hroznové víno", syn: 81, mamka: 45, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1098, kcal: 263, p: 18.4, s: 23.6, t: 8.5 },
      mamka: { kj: 610, kcal: 146, p: 10.2, s: 13.1, t: 4.7 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "17p",
    category: Category.PRESNIDAVKA,
    title: "Bílý jogurt, nakrájená zelenina",
    instructions: "Bílý jogurt smícháme s tvarohem. Zeleninu omyjeme, očistíme a nakrájíme. Podáváme společně.",
    ingredients: [
      { name: "bílý jogurt 3,5% tuku", syn: 227, mamka: 126, unit: "g", note: "3/4 kelímku" },
      { name: "odtučněný tvaroh měkký", syn: 56, mamka: 31, unit: "g", note: "1 polévková lžíce" },
      { name: "červená paprika", syn: 45, mamka: 45, unit: "g", note: "1/4 ks" },
      { name: "mrkev", syn: 50, mamka: 50, unit: "g", note: "1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1116, kcal: 266, p: 18.7, s: 24.3, t: 8.5 },
      mamka: { kj: 620, kcal: 148, p: 10.4, s: 13.5, t: 4.7 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "18p",
    category: Category.PRESNIDAVKA,
    title: "Lehký zeleninový salát se šunkou",
    instructions: "Papriku a mrkev omyjeme, očistíme a nakrájíme na kostičky. Ledový salát omyjeme a natrháme. Společně s kukuřicí zeleninu vložíme do mísy a pokapeme olejem. Nakrájíme šunku, přidáme k zelenině a podáváme.",
    ingredients: [
      { name: "červená paprika", syn: 65, mamka: 65, unit: "g", note: "1/3 ks" },
      { name: "mrkev", syn: 88, mamka: 88, unit: "g", note: "1 ks" },
      { name: "ledový salát", syn: 69, mamka: 69, unit: "g" },
      { name: "olivový olej", syn: 7, mamka: 4, unit: "ml", note: "3/4 čajové lžičky" },
      { name: "krůtí šunka", syn: 76, mamka: 42, unit: "g", note: "3 1/2 plátku" },
      { name: "sterilovaná cukrová kukuřice", syn: 36, mamka: 20, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1174, kcal: 281, p: 18.5, s: 25.6, t: 9 },
      mamka: { kj: 652, kcal: 156, p: 10.3, s: 14.2, t: 5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "19p",
    category: Category.PRESNIDAVKA,
    title: "Sýrová rolka se šunkou, zelenina",
    instructions: "Sýr potřeme lučinou, položíme na něj šunku a zatočíme. Podáváme s čerstvou nakrájenou zeleninou.",
    ingredients: [
      { name: "plátkový sýr 30% tuku", syn: 31, mamka: 17, unit: "g", note: "1 plátek / 1/2 plátku" },
      { name: "krůtí šunka", syn: 22, mamka: 12, unit: "g", note: "1 plátek / 1/2 plátku" },
      { name: "lučina linie", syn: 36, mamka: 20, unit: "g" },
      { name: "rajčata", syn: 151, mamka: 151, unit: "g", note: "2 ks" },
      { name: "mrkev", syn: 105, mamka: 105, unit: "g", note: "1 ks" }
    ],
    nutrition: {
      syn: { kj: 1186, kcal: 284, p: 19.8, s: 25, t: 9.9 },
      mamka: { kj: 659, kcal: 158, p: 11, s: 13.9, t: 5.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "20p",
    category: Category.PRESNIDAVKA,
    title: "Plátkový sýr s mrkví a rajčaty",
    instructions: "Mrkev omyjeme, očistíme a nakrájíme na hranolky. Rajčata omyjeme a nakrájíme na měsíčky. Urovnáme na talíř nebo do misky, ze sýru vytvoříme rolky a společně podáváme.",
    ingredients: [
      { name: "plátkový sýr 30% tuku", syn: 49, mamka: 27, unit: "g", note: "1 1/2 plátku / 1 plátek" },
      { name: "rajčata", syn: 121, mamka: 121, unit: "g", note: "1 1/2 ks" },
      { name: "mrkev", syn: 132, mamka: 132, unit: "g", note: "1 1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1096, kcal: 263, p: 17.6, s: 23.4, t: 9.2 },
      mamka: { kj: 609, kcal: 146, p: 9.8, s: 13, t: 5.1 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "21p",
    category: Category.PRESNIDAVKA,
    title: "Eidam s paprikou",
    instructions: "Papriku nakrájíme na proužky a podáváme se sýrem eidamem.",
    ingredients: [
      { name: "sýr eidam 30% tuku", syn: 49, mamka: 27, unit: "g", note: "2 plátky / 1 plátek" },
      { name: "červená paprika", syn: 200, mamka: 200, unit: "g", note: "1 1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1066, kcal: 256, p: 17.6, s: 22.3, t: 8.8 },
      mamka: { kj: 592, kcal: 142, p: 9.8, s: 12.4, t: 4.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "22p",
    category: Category.PRESNIDAVKA,
    title: "Jogurt s tvarohem a mandarinkou",
    instructions: "Jogurt smícháme s tvarohem. Přidáme měsíčky mandarinky a podáváme.",
    ingredients: [
      { name: "bílý jogurt 3,5% tuku", syn: 108, mamka: 60, unit: "g", note: "4 1/2 polévkové lžíce" },
      { name: "mandarinky", syn: 98, mamka: 98, unit: "g", note: "1 ks" },
      { name: "polotučný tvaroh", syn: 108, mamka: 60, unit: "g", note: "2 1/2 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1138, kcal: 272, p: 19.8, s: 25.2, t: 9.2 },
      mamka: { kj: 632, kcal: 151, p: 11, s: 14, t: 5.1 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "23p",
    category: Category.PRESNIDAVKA,
    title: "Jednoduchá brokolicová pomazánka se zeleninou",
    instructions: "Brokolici lehce spaříme a nadrobno nasekáme. Vmícháme sýr a osolíme. Podáváme s nakrájenou zeleninou.",
    ingredients: [
      { name: "brokolice", syn: 114, mamka: 114, unit: "g", note: "1/4 ks" },
      { name: "sýr žervé 50% tuku", syn: 45, mamka: 25, unit: "g" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "mrkev", syn: 150, mamka: 150, unit: "g", note: "1 1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1084, kcal: 259, p: 17.3, s: 21.6, t: 7.9 },
      mamka: { kj: 602, kcal: 144, p: 9.6, s: 12, t: 4.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "24p",
    category: Category.PRESNIDAVKA,
    title: "Malinový chia koktejl s tvarohem",
    instructions: "Všechny ingredience rozmixujeme v mixéru dohladka. Pokud je nápoj příliš hustý, můžeme jej ještě trochu naředit vodou a znovu rozmixovat. Ihned podáváme.",
    ingredients: [
      { name: "polotučné mléko", syn: 329, mamka: 183, unit: "ml", note: "1 šálek / 1/2 šálku" },
      { name: "maliny", syn: 126, mamka: 70, unit: "g" },
      { name: "chia semínka", syn: 9, mamka: 5, unit: "g", note: "1 1/2 čajové lžičky" },
      { name: "odtučněný tvaroh měkký", syn: 54, mamka: 30, unit: "g", note: "1 polévková lžíce" }
    ],
    nutrition: {
      syn: { kj: 1215, kcal: 290, p: 20.9, s: 26.8, t: 8.6 },
      mamka: { kj: 675, kcal: 161, p: 11.6, s: 14.9, t: 4.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "25p",
    category: Category.PRESNIDAVKA,
    title: "Okurka s bílým jogurtem",
    instructions: "Okurku očistíme a nakrájíme na kolečka či proužky a podáváme s jogurtem.",
    ingredients: [
      { name: "salátová okurka", syn: 300, mamka: 300, unit: "g", note: "1 ks" },
      { name: "bílý jogurt 3,5% tuku", syn: 241, mamka: 134, unit: "g", note: "1 kelímek" }
    ],
    nutrition: {
      syn: { kj: 1069, kcal: 256, p: 16.2, s: 23.4, t: 9.4 },
      mamka: { kj: 594, kcal: 142, p: 9, s: 13, t: 5.2 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "26p",
    category: Category.PRESNIDAVKA,
    title: "Pestrá svačina na cesty",
    instructions: "Vejce uvaříme natvrdo a spolu se šunkou a nakrájenou zeleninou můžeme zabalit do krabičky na cesty.",
    ingredients: [
      { name: "slepičí vejce", syn: 81, mamka: 45, unit: "g", note: "1 ks" },
      { name: "krůtí šunka", syn: 36, mamka: 20, unit: "g", note: "1 1/2 plátku" },
      { name: "paprika", syn: 102, mamka: 102, unit: "g", note: "2/3 ks" },
      { name: "mrkev", syn: 104, mamka: 104, unit: "g", note: "1 ks" }
    ],
    nutrition: {
      syn: { kj: 1143, kcal: 274, p: 20, s: 23.8, t: 8.6 },
      mamka: { kj: 635, kcal: 152, p: 11.1, s: 13.2, t: 4.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "27p",
    category: Category.PRESNIDAVKA,
    title: "Kefírové mléko se semínky",
    instructions: "Do kefíru pouze nasypeme semínka, promícháme a podáváme.",
    ingredients: [
      { name: "kefírové mléko", syn: 495, mamka: 275, unit: "ml", note: "2 šálky" },
      { name: "lněná semínka", syn: 13, mamka: 7, unit: "g", note: "1 čajová lžička" }
    ],
    nutrition: {
      syn: { kj: 1084, kcal: 259, p: 16, s: 25.4, t: 9.7 },
      mamka: { kj: 602, kcal: 144, p: 8.9, s: 14.1, t: 5.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "28p",
    category: Category.PRESNIDAVKA,
    title: "Cottage s nastrouhaným jablkem",
    instructions: "Do misky dáme cottage a přidáme nastrouhané jablko. Takto podáváme.",
    ingredients: [
      { name: "sýr cottage", syn: 142, mamka: 79, unit: "g", note: "4 polévkové lžíce" },
      { name: "jablko", syn: 99, mamka: 99, unit: "g", note: "2/3 ks" }
    ],
    nutrition: {
      syn: { kj: 1096, kcal: 263, p: 16.4, s: 23, t: 10.6 },
      mamka: { kj: 609, kcal: 146, p: 9.1, s: 12.8, t: 5.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "29p",
    category: Category.PRESNIDAVKA,
    title: "Tvaroh s banánem a chia semínky",
    instructions: "Ovoce nakrájíme na plátky a všechny ingredience smícháme. Necháme nejlépe přes noc odležet v lednici.",
    ingredients: [
      { name: "polotučný tvaroh", syn: 130, mamka: 72, unit: "g", note: "3 polévkové lžíce" },
      { name: "banán", syn: 90, mamka: 50, unit: "g", note: "1/3 ks" },
      { name: "chia semínka", syn: 7, mamka: 4, unit: "g", note: "1 čajová lžička" }
    ],
    nutrition: {
      syn: { kj: 1094, kcal: 261, p: 19.3, s: 24.5, t: 8.6 },
      mamka: { kj: 608, kcal: 145, p: 10.7, s: 13.6, t: 4.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "30p",
    category: Category.PRESNIDAVKA,
    title: "Mléčný koktejl s jahodami a chia semínky",
    instructions: "Mléko rozmixujeme s jahodami a chia semínky. Můžeme přidat vodu dle potřeby a podáváme.",
    ingredients: [
      { name: "polotučné mléko", syn: 387, mamka: 215, unit: "ml", note: "1 1/2 šálku" },
      { name: "voda", syn: 90, mamka: 50, unit: "ml", note: "3 1/2 polévkové lžíce" },
      { name: "zahradní jahody", syn: 72, mamka: 40, unit: "g", note: "2 ks" },
      { name: "chia semínka", syn: 13, mamka: 7, unit: "g", note: "2/3 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1091, kcal: 261, p: 16, s: 23.9, t: 10.1 },
      mamka: { kj: 606, kcal: 145, p: 8.9, s: 13.3, t: 5.6 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "31p",
    category: Category.PRESNIDAVKA,
    title: "Tvaroh s borůvkami",
    instructions: "Tvaroh smícháme s ovocem a podáváme.",
    ingredients: [
      { name: "polotučný tvaroh", syn: 140, mamka: 78, unit: "g", note: "3 polévkové lžíce" },
      { name: "borůvky", syn: 122, mamka: 122, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1107, kcal: 265, p: 19.6, s: 24.7, t: 7.9 },
      mamka: { kj: 615, kcal: 147, p: 10.9, s: 13.7, t: 4.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "32p",
    category: Category.PRESNIDAVKA,
    title: "Toust se šunkou a zeleninou",
    instructions: "Toust namažeme pomazánkovým máslem, poklademe šunku a podáváme s čerstvou zeleninou.",
    ingredients: [
      { name: "celozrnný toast", syn: 36, mamka: 20, unit: "g" },
      { name: "pomazánkové máslo", syn: 20, mamka: 11, unit: "g" },
      { name: "krůtí šunka", syn: 72, mamka: 40, unit: "g", note: "3 1/2 plátku" },
      { name: "paprika", syn: 69, mamka: 69, unit: "g", note: "1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1076, kcal: 257, p: 17.5, s: 23.8, t: 8.6 },
      mamka: { kj: 598, kcal: 143, p: 9.7, s: 13.2, t: 4.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "33p",
    category: Category.PRESNIDAVKA,
    title: "Čokoláda s hroznovým vínem a tvarohem",
    instructions: "Tvaroh smícháme s nakrájenými hrozny a posypeme nastrouhanou čokoládou.",
    ingredients: [
      { name: "hroznové víno", syn: 90, mamka: 50, unit: "g" },
      { name: "hořká čokoláda 70% kakaa", syn: 18, mamka: 10, unit: "g", note: "1/4 ks" },
      { name: "odtučněný tvaroh měkký", syn: 142, mamka: 79, unit: "g", note: "3 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1098, kcal: 263, p: 19.4, s: 25.4, t: 8.3 },
      mamka: { kj: 610, kcal: 146, p: 10.8, s: 14.1, t: 4.6 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "34p",
    category: Category.PRESNIDAVKA,
    title: "Kefír s chia a lesním ovocem",
    instructions: "Bílý kefír smícháme s chia semínky a necháme 5 minut odstát. Lesní ovoce podáváme zvlášť nebo společně rozmixované.",
    ingredients: [
      { name: "kefírové mléko", syn: 504, mamka: 280, unit: "ml", note: "2 šálky" },
      { name: "maliny", syn: 54, mamka: 30, unit: "g" },
      { name: "chia semínka", syn: 14, mamka: 8, unit: "g", note: "3/4 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1224, kcal: 292, p: 17.3, s: 28.6, t: 10.4 },
      mamka: { kj: 680, kcal: 162, p: 9.6, s: 15.9, t: 5.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "35p",
    category: Category.PRESNIDAVKA,
    title: "Kostky eidamu, hroznové víno",
    instructions: "Sýr nakrájíme na kostky a podáváme s kuličkami hroznového vína.",
    ingredients: [
      { name: "sýr eidam 30%", syn: 58, mamka: 32, unit: "g", note: "2 plátky" },
      { name: "hroznové víno", syn: 84, mamka: 84, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1093, kcal: 261, p: 17.6, s: 23.8, t: 9.9 },
      mamka: { kj: 607, kcal: 145, p: 9.8, s: 13.2, t: 5.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "36p",
    category: Category.PRESNIDAVKA,
    title: "Hruškové kostičky se sýrem",
    instructions: "Sýr i hrušku nakrájíme na drobné kostky, promícháme a ihned podáváme.",
    ingredients: [
      { name: "sýr eidam 30%", syn: 58, mamka: 32, unit: "g", note: "2 plátky" },
      { name: "hruška", syn: 110, mamka: 110, unit: "g", note: "3/4 ks" }
    ],
    nutrition: {
      syn: { kj: 1107, kcal: 265, p: 17.6, s: 23, t: 9.9 },
      mamka: { kj: 615, kcal: 147, p: 9.8, s: 12.8, t: 5.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "37p",
    category: Category.PRESNIDAVKA,
    title: "Tvaroh s hruškou a ořechy",
    instructions: "Hrušku nastrouháme a smícháme s tvarohem. Ozdobíme sekanými ořechy a podáváme.",
    ingredients: [
      { name: "odtučněný tvaroh měkký", syn: 139, mamka: 77, unit: "g", note: "3 polévkové lžíce" },
      { name: "hruška", syn: 91, mamka: 91, unit: "g", note: "2/3 ks" },
      { name: "vlašské ořechy", syn: 13, mamka: 7, unit: "g", note: "2 1/2 ks" }
    ],
    nutrition: {
      syn: { kj: 1121, kcal: 268, p: 19.8, s: 24.7, t: 8.5 },
      mamka: { kj: 623, kcal: 149, p: 11, s: 13.7, t: 4.7 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "38p",
    category: Category.PRESNIDAVKA,
    title: "Jogurt s ovocem a skořicí",
    instructions: "V misce našleháme jogurt s tvarohem a skořicí. Vmícháme omyté ovoce pokrájené na kostičky.",
    ingredients: [
      { name: "mandarinky", syn: 61, mamka: 61, unit: "g", note: "3/4 ks" },
      { name: "bílý jogurt 3,5% tuku", syn: 216, mamka: 120, unit: "g", note: "3/4 kelímku" },
      { name: "odtučněný tvaroh měkký", syn: 90, mamka: 50, unit: "g", note: "2 polévkové lžíce" },
      { name: "skořice mletá", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 1118, kcal: 266, p: 21.4, s: 24.5, t: 7.9 },
      mamka: { kj: 621, kcal: 148, p: 11.9, s: 13.6, t: 4.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "39p",
    category: Category.PRESNIDAVKA,
    title: "Paprika se sýrem a ořechy",
    instructions: "Papriku umyjeme a nakrájíme na kostičky. Smícháme jí s nakrájeným sýrem a sekanými ořechy a podáváme.",
    ingredients: [
      { name: "červená paprika", syn: 210, mamka: 210, unit: "g", note: "1 1/2 ks" },
      { name: "olomoucké tvarůžky", syn: 41, mamka: 23, unit: "g" },
      { name: "vlašské ořechy", syn: 11, mamka: 6, unit: "g", note: "2 ks" }
    ],
    nutrition: {
      syn: { kj: 1091, kcal: 261, p: 18, s: 23.9, t: 8.1 },
      mamka: { kj: 606, kcal: 145, p: 10, s: 13.3, t: 4.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "40p",
    category: Category.PRESNIDAVKA,
    title: "Proteinový nápoj s banánem a kešu",
    instructions: "Banán oloupeme, nakrájíme na kolečka a vložíme do mixéru. Všechny ingredience pak společně rozmixujeme. Pokud je nápoj příliš hustý, naředíme jej ještě trochou vody.",
    ingredients: [
      { name: "syrovátkový protein", syn: 19, mamka: 11, unit: "g" },
      { name: "banán", syn: 95, mamka: 53, unit: "g", note: "¾ ks / 1/2 ks" },
      { name: "kešu ořechy", syn: 16, mamka: 9, unit: "g", note: "1 polévková lžíce / 1/2 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 1109, kcal: 265, p: 19, s: 26, t: 9 },
      mamka: { kj: 665, kcal: 159, p: 11.4, s: 15.6, t: 5.4 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "41p",
    category: Category.PRESNIDAVKA,
    title: "Čokoládový termix s ovocem",
    instructions: "Čokoládu rozpustíme v mikrovlnné troubě nebo ve vodní lázni a vyšleháme s tvarohem. Podáváme s na kostičky nakrájeným ovocem.",
    ingredients: [
      { name: "odtučněný tvaroh (měkký)", syn: 139, mamka: 77, unit: "g", note: "½ balení / 1/4 balení" },
      { name: "hořká čokoláda 70%", syn: 18, mamka: 10, unit: "g", note: "¼ ks / 1/8 ks" },
      { name: "třešně", syn: 92, mamka: 51, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1071, kcal: 256, p: 19, s: 24, t: 8 },
      mamka: { kj: 643, kcal: 154, p: 11.4, s: 14.4, t: 4.8 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  // ⚠️ Konec Kontroly.
];
