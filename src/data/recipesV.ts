import { Category, Recipe } from "../types";
export const recipesV: Recipe[] = [
  {
    id: "1v",
    category: Category.VECERE,
    title: "Salát s drůbežími kousky a jogurtem",
    instructions: "Maso nakrájíme na kousky a zakápneme sójovou omáčkou. Nakrájíme zeleninu a rozložíme ji na talíř. Opečeme maso na oleji a položíme ho na zeleninu. Přidáme jogurt a podáváme s nasucho opečeným pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "kuřecí prsa bez kůže", syn: 142, mamka: 80, unit: "g" },
      { name: "rajčata", syn: 100, mamka: 30, unit: "g", note: "1 ½ ks / 1/3 ks" },
      { name: "salátová okurka", syn: 100, mamka: 30, unit: "g", note: "¼ ks / 1/4 ks" },
      { name: "hlávkový salát", syn: 123, mamka: 50, unit: "g", note: "⅓ ks / 1/4 ks" },
      { name: "červená paprika", syn: 48, mamka: 25, unit: "g", note: "¼ ks / 1/4 ks" },
      { name: "bílý jogurt 3,5% tuku", syn: 30, mamka: 30, unit: "g", note: "2 ½ polévkové lžíce / 2 1/2 polévkové lžíce" },
      { name: "sójová omáčka", syn: 10, mamka: 6, unit: "g", note: "⅔ polévkové lžíce / 1 čajová lžička" },
      { name: "řepkový olej", syn: 6, mamka: 5, unit: "ml", note: "1 čajová lžička / 1 čajová lžička" },
      { name: "celozrnný chléb (příloha)", syn: 86, mamka: 41, unit: "g", note: "1 ½ krajíce / 3/4 krajíce" }
    ],
    nutrition: {
      syn: { kj: 2157, kcal: 516, p: 47, s: 48, t: 13 },
      mamka: { kj: 1183, kcal: 283, p: 25.6, s: 22.5, t: 9 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "2v",
    category: Category.VECERE,
    title: "Knäckebrot se sýrem, šunkou a zeleninou",
    instructions: "Knäckebrot obložíme sýrem a šunkou. Podáváme společně se zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "žitný knäckebrot", syn: 47, mamka: 30, unit: "g", note: "4 ½ plátky / 3 plátky" },
      { name: "sýr eidam 30% t.v.s.", syn: 60, mamka: 42, unit: "g", note: "4 plátky / 3 plátky" },
      { name: "vepřová šunka", syn: 80, mamka: 39, unit: "g" },
      { name: "červená paprika", syn: 200, mamka: 106, unit: "g", note: "1 ½ ks / 2/3 ks" }
    ],
    nutrition: {
      syn: { kj: 2007, kcal: 480, p: 39.4, s: 44.3, t: 13.5 },
      mamka: { kj: 1237, kcal: 296, p: 23.6, s: 26.9, t: 8.8 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "3v",
    category: Category.VECERE,
    title: "Salát s kuřecími kousky, pečivo",
    instructions: "Kuřecí maso nakrájíme na kousky a orestujeme na olivovém oleji dozlatova. Maso osolíme a opepříme a promícháme s nasekanou pažitkou. Zeleninu omyjeme, nakrájíme na kousky a přendáme na talíř. Na zeleninu dáme maso a podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "kuřecí prsa bez kůže", syn: 162, mamka: 90, unit: "g" },
      { name: "ledový salát", syn: 150, mamka: 150, unit: "g" },
      { name: "cherry rajčata", syn: 56, mamka: 56, unit: "g", note: "5 ½ ks / 5 ½ ks" },
      { name: "olivový olej", syn: 9, mamka: 5, unit: "ml", note: "¾ polévkové lžíce / ½ polévkové lžíce" },
      { name: "červená paprika", syn: 126, mamka: 126, unit: "g", note: "¾ ks / ¾ ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "celozrnný rohlík", syn: 67, mamka: 37, unit: "g", note: "1 ½ ks / ¾ ks" },
      { name: "pažitka", syn: 5, mamka: 5, unit: "g", note: "1 ½ čajové lžičky / 1 ½ čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 2165, kcal: 517, p: 47.1, s: 48.2, t: 14 },
      mamka: { kj: 1203, kcal: 287, p: 26.2, s: 26.8, t: 7.8 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "4v",
    category: Category.VECERE,
    title: "Hovězí vývar se zeleninou a rýžovými nudlemi",
    instructions: "Maso omyjeme a osušíme. Zeleninu oloupeme a vložíme do kastrolu se studenou vodou spolu s masem a kořením a pomalu vaříme (cca 3 hodiny). Když je maso měkké, vyndáme jej a obereme z kostí. Samotné maso pak vrátíme zpět do polévky. Stejně tak zeleninu nakrájíme nadrobno a vrátíme do polévky. Osolíme, opepříme a vložíme nudle, které v polévce ještě asi 5 minut povaříme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "hovězí maso (ideálně žebra)", syn: 166, mamka: 92, unit: "g" },
      { name: "voda", syn: 232, mamka: 232, unit: "ml", note: "1 hrnek / 1 hrnek" },
      { name: "mrkev", syn: 33, mamka: 33, unit: "g", note: "⅓ ks / ⅓ ks" },
      { name: "petržel", syn: 23, mamka: 23, unit: "g", note: "1 svazek / 1 svazek" },
      { name: "bulvový celer", syn: 100, mamka: 100, unit: "g", note: "¼ ks / ¼ ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "nové koření", syn: 2, mamka: 2, unit: "g", note: "2 ks / 2 ks" },
      { name: "rýžové nudle", syn: 50, mamka: 28, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2168, kcal: 518, p: 47.3, s: 48.1, t: 13.9 },
      mamka: { kj: 1204, kcal: 288, p: 26.3, s: 26.7, t: 7.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "5v",
    category: Category.VECERE,
    title: "Kuřecí plátek s pohankou, zelenina",
    instructions: "Plátek masa osolíme a okořeníme dle chuti a zprudka opečeme z obou stran na pánvi s rozpáleným olejem. Pohanku uvaříme dle návodu doměkka. Vše podáváme s očištěnou a nakrájenou čerstvou zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "kuřecí prsa bez kůže", syn: 152, mamka: 80, unit: "g" },
      { name: "pohanka", syn: 59, mamka: 30, unit: "g" },
      { name: "řepkový olej", syn: 11, mamka: 7, unit: "ml", note: "¾ polévkové lžíce / 1 1/2 čajové lžičky" },
      { name: "ledový salát", syn: 120, mamka: 64, unit: "g" },
      { name: "rajčata", syn: 120, mamka: 72, unit: "g", note: "1 ½ ks / 1 ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2105, kcal: 503, p: 45.2, s: 43.5, t: 15 },
      mamka: { kj: 1147, kcal: 274, p: 23.7, s: 22.6, t: 9.1 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: "6v",
    category: Category.VECERE,
    title: "Volské oko se šunkou, pečivem a zeleninou",
    instructions: "Na pánvi rozpálíme olej a vyklepneme vajíčka, ze kterých připravíme volská oka. Když jsou hotová, můžeme osolit a přendáme je na talíř, obložíme šunkou, zeleninou a posypeme semínky. Podáváme s celozrnným pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "slepičí vejce", syn: 69, mamka: 38, unit: "g", note: "1 ½ ks / ¾ ks" },
      { name: "krůtí šunka", syn: 149, mamka: 83, unit: "g" },
      { name: "celozrnný chléb", syn: 101, mamka: 56, unit: "g", note: "2 krajíce / 1 krajíc" },
      { name: "olivový olej", syn: 3, mamka: 2, unit: "ml", note: "½ čajové lžičky / ¼ čajové lžičky" },
      { name: "směs semínek", syn: 5, mamka: 3, unit: "g", note: "¼ polévkové lžíce / ⅛ polévkové lžíce" },
      { name: "rajčata", syn: 139, mamka: 139, unit: "g", note: "1 ½ ks / 1 ½ ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2310, kcal: 552, p: 46.8, s: 48.3, t: 16.8 },
      mamka: { kj: 1283, kcal: 307, p: 26, s: 26.8, t: 9.3 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "7v",
    category: Category.VECERE,
    title: "Kuřecí maso na tymiánu s cuketovými placičkami",
    instructions: "Kuřecí kousky osolíme, opepříme, pokapeme šťávou z citronu, podlijeme troškou vody a dáme péct do trouby předehřáté na 180°C. Mezitím oloupeme cuketu a bramboru, které nastrouháme do větší misky, podle potřeby slijeme vodu. Smícháme s vejcem a nasekanou cibulkou, osolíme, opepříme, dochutíme oreganem a zasypeme moukou. Tvoříme placičky a restujeme na trošce oleje.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "kuřecí prsa bez kůže", syn: 134, mamka: 74, unit: "g" },
      { name: "cuketa", syn: 200, mamka: 200, unit: "g", note: "⅔ ks / ⅔ ks" },
      { name: "brambor", syn: 130, mamka: 72, unit: "g", note: "1 ks / ½ ks" },
      { name: "slepičí vejce", syn: 72, mamka: 40, unit: "g", note: "1 ½ ks / ¾ ks" },
      { name: "jarní cibulka", syn: 40, mamka: 40, unit: "g", note: "2 ks / 2 ks" },
      { name: "špaldová hladká mouka", syn: 26, mamka: 14, unit: "g" },
      { name: "olivový olej", syn: 5, mamka: 3, unit: "ml", note: "1 čajová lžička / ½ čajové lžičky" },
      { name: "oregano", syn: 0, mamka: 1, unit: "špetka" },
      { name: "čerstvý tymián", syn: 3, mamka: 3, unit: "g", note: "½ čajové lžičky / ½ čajové lžičky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "čerstvá citronová šťáva", syn: 5, mamka: 5, unit: "ml", note: "⅔ čajové lžičky / ⅔ čajové lžičky" },
      { name: "voda", syn: 60, mamka: 60, unit: "ml", note: "4 polévkové lžíce / 4 polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 2195, kcal: 524, p: 48.2, s: 48.7, t: 14.3 },
      mamka: { kj: 1219, kcal: 291, p: 26.8, s: 27.1, t: 7.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "8v",
    category: Category.VECERE,
    title: "Salát s tuňákem a cherry rajčaty, pečivo",
    instructions: "Salát omyjeme a natrháme, rajčata a vejce nakrájíme na měsíčky a smícháme se salátem. Poté přidáme i zbytek ingrediencí a dobře promícháme. Podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "vejce vařené natvrdo", syn: 82, mamka: 46, unit: "g", note: "1 ½ ks / ¾ ks" },
      { name: "olivový olej", syn: 3, mamka: 2, unit: "ml", note: "½ čajové lžičky / ¼ čajové lžičky" },
      { name: "cherry rajčata", syn: 40, mamka: 40, unit: "g", note: "4 ks / 4 ks" },
      { name: "listový salát", syn: 100, mamka: 100, unit: "g" },
      { name: "tuňák ve vlastní šťávě", syn: 118, mamka: 66, unit: "g" },
      { name: "celozrnný rohlík", syn: 83, mamka: 46, unit: "g", note: "1 ½ ks / ¾ ks" }
    ],
    nutrition: {
      syn: { kj: 2196, kcal: 525, p: 47.4, s: 48.7, t: 15.5 },
      mamka: { kj: 1220, kcal: 292, p: 26.3, s: 27.1, t: 8.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "9v",
    category: Category.VECERE,
    title: "Krůtí maso se salátem a ořechy",
    instructions: "Na trošce olivového oleje orestujeme plátek masa, osolíme a opepříme. Míchaný salát opláchneme a smícháme jej s nadrcenými vlašskými ořechy, měsíčky grapefruitu, bílým jogurtem, citronem a dochutíme solí a pepřem. Podáváme s vařenými brambory.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "krůtí maso", syn: 176, mamka: 98, unit: "g" },
      { name: "vlašské ořechy", syn: 6, mamka: 3, unit: "g", note: "2 ks / 1 ks" },
      { name: "grapefruit", syn: 67, mamka: 67, unit: "g", note: "⅓ ks / ⅓ ks" },
      { name: "míchaný salát", syn: 215, mamka: 215, unit: "g", note: "1 miska / 1 miska" },
      { name: "bílý jogurt (zálivka)", syn: 21, mamka: 12, unit: "g", note: "1 ½ polévkové lžíce / ¾ polévkové lžíce" },
      { name: "olivový olej (zálivka)", syn: 3, mamka: 2, unit: "ml", note: "½ čajové lžičky / ¼ čajové lžičky" },
      { name: "čerstvá citronová šťáva (zálivka)", syn: 10, mamka: 10, unit: "ml", note: "1 ½ čajové lžičky / 1 ½ čajové lžičky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "brambory vařené bez slupky", syn: 191, mamka: 106, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2221, kcal: 531, p: 48.8, s: 50.2, t: 14.2 },
      mamka: { kj: 1234, kcal: 295, p: 27.1, s: 27.9, t: 7.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "10v",
    category: Category.VECERE,
    title: "Rychlý sýrový talíř se zeleninou",
    instructions: "Všechnu zeleninu očistíme, spolu se sýry nakrájíme na malé kousky a narovnáme na talíř. Podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "olomoucké tvarůžky", syn: 66, mamka: 37, unit: "g" },
      { name: "rajčata", syn: 200, mamka: 200, unit: "g", note: "2 ½ ks / 2 ½ ks" },
      { name: "červená paprika", syn: 118, mamka: 118, unit: "g", note: "¾ ks / ¾ ks" },
      { name: "salátová okurka", syn: 155, mamka: 155, unit: "g", note: "½ ks / ½ ks" },
      { name: "sýr eidam 30% t.v.s.", syn: 35, mamka: 19, unit: "g", note: "2 ½ plátky / 1 ½ plátku" },
      { name: "žitný knäckebrot", syn: 42, mamka: 23, unit: "g", note: "4 plátky / 2 plátky" },
      { name: "mozzarella light", syn: 50, mamka: 28, unit: "g", note: "½ ks / ¼ ks" }
    ],
    nutrition: {
      syn: { kj: 2203, kcal: 527, p: 47.7, s: 48, t: 13.6 },
      mamka: { kj: 1224, kcal: 293, p: 26.5, s: 26.7, t: 7.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "11v",
    category: Category.VECERE,
    title: "Čočková polévka s kuřecím masem a mrkví",
    instructions: "Maso nakrájíme na kostičky, osolíme, opepříme a orestujeme na oleji tak, aby se zatáhlo. Poté přidáme protlak a promícháme. Dále přidáme čočku, zalijeme vodou, přidáme na kousky nakrájenou mrkev a vaříme přibližně 15 minut. Nakonec polévku dochutíme česnekem a bylinkami.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "červená čočka", syn: 86, mamka: 48, unit: "g" },
      { name: "mrkev", syn: 70, mamka: 70, unit: "g", note: "¾ ks / ¾ ks" },
      { name: "česnek", syn: 5, mamka: 5, unit: "g", note: "1 stroužek / 1 stroužek" },
      { name: "sušená bazalka", syn: 1, mamka: 1, unit: "špetka" },
      { name: "petrželová nať", syn: 5, mamka: 5, unit: "g" },
      { name: "voda", syn: 350, mamka: 350, unit: "ml", note: "1 ½ hrnku / 1 ½ hrnku" },
      { name: "kuřecí prsa bez kůže", syn: 86, mamka: 48, unit: "g" },
      { name: "řepkový olej", syn: 14, mamka: 8, unit: "ml", note: "1 polévková lžíce / ½ polévkové lžíce" },
      { name: "rajčatový protlak", syn: 14, mamka: 8, unit: "g", note: "⅔ polévkové lžíce / ⅓ polévkové lžíce" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 0, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2230, kcal: 533, p: 42.5, s: 42.6, t: 16.4 },
      mamka: { kj: 1239, kcal: 296, p: 23.6, s: 23.7, t: 9.1 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "12v",
    category: Category.VECERE,
    title: "Cottage s tuňákem, rajčaty a pečivem",
    instructions: "V misce smícháme cottage, tuňáka ve vlastní šťávě, na kolečka nakrájenou jarní cibulku, sůl a semínka. Hotovou směs podáváme s pečivem a nakrájenými rajčaty.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "sýr cottage", syn: 148, mamka: 82, unit: "g", note: "1 kelímek / ½ kelímku" },
      { name: "tuňák ve vlastní šťávě", syn: 95, mamka: 53, unit: "g" },
      { name: "jarní cibulka", syn: 30, mamka: 30, unit: "g", note: "1 ½ ks / 1 ½ ks" },
      { name: "směs semínek", syn: 5, mamka: 3, unit: "g", note: "¼ polévkové lžíce / ⅛ polévkové lžíce" },
      { name: "pohankový chléb", syn: 74, mamka: 41, unit: "g", note: "2 krajíce / 1 krajíc" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "rajčata", syn: 60, mamka: 60, unit: "g", note: "¾ ks / ¾ ks" }
    ],
    nutrition: {
      syn: { kj: 2249, kcal: 538, p: 48.8, s: 49.8, t: 14.8 },
      mamka: { kj: 1249, kcal: 299, p: 27.1, s: 27.7, t: 8.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "13v",
    category: Category.VECERE,
    title: "Grilované maso se zeleninou a pečivem",
    instructions: "Plátek masa osolíme a opepříme. Na zahřáté pánvi s trochou oleje orestujeme z obou stran tak, aby bylo dobře propečené. Zeleninu nakrájíme na větší kousky a také orestujeme, aby trochu změkla. Maso podáváme s grilovanou zeleninou a pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "krůtí maso", syn: 167, mamka: 93, unit: "g" },
      { name: "křehké pohankové chlebíčky", syn: 49, mamka: 27, unit: "g", note: "10 plátků / 5 ½ plátků" },
      { name: "červená paprika", syn: 200, mamka: 200, unit: "g", note: "1 ½ ks / 1 ½ ks" },
      { name: "olivový olej", syn: 8, mamka: 4, unit: "ml", note: "1 ½ čajové lžičky / ¾ čajové lžičky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2192, kcal: 524, p: 46.3, s: 45, t: 15.6 },
      mamka: { kj: 1218, kcal: 291, p: 25.7, s: 25, t: 8.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "14v",
    category: Category.VECERE,
    title: "Rýžové chlebíčky s pomazánkou z tresky",
    instructions: "Tresku ochutíme solí a čerstvými bylinkami, orestujeme na oleji z obou stran a necháme vychladnout. Poté rybu rozdrobíme a smícháme s tvarohem. Podáváme s rýžovými chlebíčky.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "rýžové chlebíčky", syn: 56, mamka: 31, unit: "g", note: "5 ½ plátky / 3 plátky" },
      { name: "filet aljašské tresky bez kůže", syn: 120, mamka: 67, unit: "g" },
      { name: "polotučný tvaroh", syn: 120, mamka: 67, unit: "g", note: "5 polévkových lžic / 3 polévkové lžíce" },
      { name: "bazalka", syn: 5, mamka: 5, unit: "g" },
      { name: "řepkový olej", syn: 5, mamka: 3, unit: "ml", note: "1 čajová lžička / ½ čajové lžičky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 1977, kcal: 472, p: 39.4, s: 48.9, t: 12.5 },
      mamka: { kj: 1098, kcal: 262, p: 21.9, s: 27.2, t: 6.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "15v",
    category: Category.VECERE,
    title: "Drůbeží nugety pečené v troubě se zeleninovými hranolkami",
    instructions: "Maso osolíme a obalíme v našlehaném bílku. Následně obalíme v mouce a pečeme v předehřáté troubě cca 15-20 minut. Pečeme společně s na hranolky nakrájenou zeleninou, česnekem a podáváme jako přílohu.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "krůtí maso", syn: 126, mamka: 70, unit: "g" },
      { name: "vaječný bílek", syn: 83, mamka: 46, unit: "g", note: "3 ks / 1 ½ ks" },
      { name: "mandlová mouka", syn: 19, mamka: 11, unit: "g" },
      { name: "mletá sladká paprika", syn: 5, mamka: 5, unit: "g", note: "1 ½ čajové lžičky / 1 ½ čajové lžičky" },
      { name: "batáty (sladké brambory)", syn: 200, mamka: 111, unit: "g", note: "½ ks / ¼ ks" },
      { name: "česnek", syn: 20, mamka: 20, unit: "g", note: "4 stroužky / 4 stroužky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2188, kcal: 523, p: 46.8, s: 51, t: 15.5 },
      mamka: { kj: 1216, kcal: 291, p: 26, s: 28.3, t: 8.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "16v",
    category: Category.VECERE,
    title: "Drůbeží špízy se zeleninou",
    instructions: "Drůbeží prsa omyjeme a nakrájíme na stejně velké kostky, osolíme a opepříme. Oloupeme žampiony a nakrájíme na čtvrtiny. Zeleninu nakrájíme na stejně velké kousky. Postupně vše střídavě napichujeme na špejli. Špíz vložíme do pekáče, pokapeme olivovým olejem a pečeme zhruba 40 minut na 200 °C. Podáváme s vařenými bramborami.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "krůtí prsa bez kosti a kůže", syn: 144, mamka: 80, unit: "g" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "pórek", syn: 43, mamka: 43, unit: "g", note: "1/4 ks / 1/4 ks" },
      { name: "žampiony", syn: 33, mamka: 33, unit: "g", note: "1 1/2 ks / 1 1/2 ks" },
      { name: "červená paprika", syn: 52, mamka: 52, unit: "g", note: "1/4 ks / 1/4 ks" },
      { name: "brambory", syn: 180, mamka: 100, unit: "g", note: "1 1/3 ks / 3/4 ks" },
      { name: "olivový olej", syn: 13, mamka: 7, unit: "g", note: "2 1/2 čajové lžičky / 1 1/2 čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 1969, kcal: 470, p: 41.6, s: 38.3, t: 15.1 },
      mamka: { kj: 1094, kcal: 261, p: 23.1, s: 21.3, t: 8.4 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "17v",
    category: Category.VECERE,
    title: "Sýrový talíř se zeleninou a pečivem",
    instructions: "Všechnu zeleninu očistíme, spolu se sýry nakrájíme na malé kousky a narovnáme na talíř. Podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "olomoucké tvarůžky", syn: 54, mamka: 30, unit: "g" },
      { name: "rajčata", syn: 79, mamka: 79, unit: "g", note: "1 ks / 1 ks" },
      { name: "červená paprika", syn: 62, mamka: 62, unit: "g", note: "1/3 ks / 1/3 ks" },
      { name: "salátová okurka", syn: 56, mamka: 56, unit: "g", note: "1/4 ks / 1/4 ks" },
      { name: "sýr eidam 30%", syn: 36, mamka: 20, unit: "g", note: "2 1/2 plátky / 1 1/2 plátky" },
      { name: "celozrnný chléb", syn: 58, mamka: 32, unit: "g", note: "1 krajíc / 1/2 krajíce" },
      { name: "sýr gouda", syn: 27, mamka: 15, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2065, kcal: 493, p: 42.5, s: 38.2, t: 17.3 },
      mamka: { kj: 1147, kcal: 274, p: 23.6, s: 21.2, t: 9.6 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "18v",
    category: Category.VECERE,
    title: "Houska se šunkou, ředkvičkami a ledovým salátem",
    instructions: "Housku rozkrojíme, namažeme žervé, obložíme šunkou a podáváme s nakrájenou zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "špaldová houska", syn: 81, mamka: 45, unit: "g", note: "1 3/4 ks / 1 ks" },
      { name: "krůtí šunka", syn: 126, mamka: 70, unit: "g", note: "11 plátků / 6 plátků" },
      { name: "sýr žervé 50%", syn: 74, mamka: 41, unit: "g" },
      { name: "ředkvičky", syn: 54, mamka: 54, unit: "g", note: "3 1/2 ks / 3 1/2 ks" },
      { name: "ledový salát", syn: 20, mamka: 20, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1987, kcal: 475, p: 40.1, s: 38.5, t: 16 },
      mamka: { kj: 1104, kcal: 264, p: 22.3, s: 21.4, t: 8.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "19v",
    category: Category.VECERE,
    title: "Brokolicový krém s vejcem",
    instructions: "Na oleji orestujeme cibulku s česnekem a přidáme pokrájenou brokolici. Poté zalijeme vývarem, osolíme a vaříme cca 20 min na mírném plameni. Následně rozmixujeme na hladký krém, do kterého zašleháme vajíčko a ještě chvilku povaříme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "brokolice", syn: 305, mamka: 305, unit: "g", note: "1/2 ks / 1/2 ks" },
      { name: "cibule", syn: 73, mamka: 73, unit: "g", note: "1 ks / 1 ks" },
      { name: "česnek", syn: 5, mamka: 5, unit: "g", note: "1 stroužek / 1 stroužek" },
      { name: "zeleninový vývar", syn: 250, mamka: 250, unit: "ml", note: "1 hrnek / 1 hrnek" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "olivový olej", syn: 5, mamka: 3, unit: "ml", note: "1 čajová lžička / 1/2 čajové lžičky" },
      { name: "slepičí vejce", syn: 90, mamka: 50, unit: "g", note: "1 3/4 ks / 1 ks" }
    ],
    nutrition: {
      syn: { kj: 2191, kcal: 524, p: 41, s: 36.9, t: 17.6 },
      mamka: { kj: 1217, kcal: 291, p: 22.8, s: 20.5, t: 9.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "20v",
    category: Category.VECERE,
    title: "Mrkvovo-šunková pomazánka",
    instructions: "Šunku nasekáme na jemné nudličky, mrkev nastrouháme a vše orestujeme na oleji. Po vychladnutí smícháme s tvarohem a jarní cibulkou, dochutíme solí a podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "hovězí šunka", syn: 121, mamka: 67, unit: "g", note: "8 plátků / 4 1/2 plátky" },
      { name: "jarní cibulka", syn: 20, mamka: 20, unit: "g", note: "1 ks / 1 ks" },
      { name: "mrkev", syn: 60, mamka: 60, unit: "g", note: "2/3 ks / 2/3 ks" },
      { name: "polotučný tvaroh", syn: 95, mamka: 53, unit: "g", note: "3 1/2 polévkové lžíce / 2 polévkové lžíce" },
      { name: "žitný knäckebrot", syn: 54, mamka: 30, unit: "g", note: "5 1/2 plátky / 3 plátky" },
      { name: "řepkový olej", syn: 7, mamka: 4, unit: "ml", note: "1 1/2 čajové lžičky / 3/4 čajové lžičky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2261, kcal: 540, p: 43.2, s: 48.6, t: 16.7 },
      mamka: { kj: 1256, kcal: 300, p: 24, s: 27, t: 9.3 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "21v",
    category: Category.VECERE,
    title: "Omeleta s paprikou a pečivem",
    instructions: "Bílky a žloutky rozkvedláme s mlékem. Cibuli oloupeme, papriku očistíme a obobí nakrájíme na malé kostičky. Ty pak vhodíme na rozpálený olej a krátce osmahneme. Přidáme rozkvedlaná vejce a necháme ztuhnout. Omeletu obrátíme a osmažíme dozlatova. Podáváme s pečivem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "slepičí vejce", syn: 90, mamka: 50, unit: "g", note: "1 3/4 ks / 1 ks" },
      { name: "vaječný bílek", syn: 194, mamka: 108, unit: "g", note: "6 ks / 3 1/2 ks" },
      { name: "polotučné mléko", syn: 32, mamka: 18, unit: "ml", note: "2 polévkové lžíce / 1 polévková lžíce" },
      { name: "cibule", syn: 20, mamka: 20, unit: "g", note: "1/4 ks / 1/4 ks" },
      { name: "červená paprika", syn: 81, mamka: 81, unit: "g", note: "1/2 ks / 1/2 ks" },
      { name: "olivový olej", syn: 5, mamka: 3, unit: "g", note: "1 čajová lžička / 1/2 čajové lžičky" },
      { name: "celozrnný chléb", syn: 58, mamka: 32, unit: "g", note: "1 krajíc / 1/2 krajíce" }
    ],
    nutrition: {
      syn: { kj: 2039, kcal: 488, p: 40.7, s: 38.3, t: 17.3 },
      mamka: { kj: 1133, kcal: 271, p: 22.6, s: 21.3, t: 9.6 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "22v",
    category: Category.VECERE,
    title: "Masové placky s bramborami a fazolkami",
    instructions: "Prolisovaný česnek a cibuli nakrájenou najemno promícháme s masem. Osolíme, opepříme a utvoříme placky. Pomažeme je olejem, vložíme do pekáčku, podlijeme trochou vody a pečeme ve vyhřáté troubě. Mezitím uvaříme brambory a podusíme fazolky. Vše pak společně podáváme.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "brambory (k podávání)", syn: 180, mamka: 100, unit: "g", note: "1 1/3 ks / 3/4 ks" },
      { name: "zelené fazolky (k podávání)", syn: 104, mamka: 104, unit: "g" },
      { name: "hovězí maso (placky)", syn: 144, mamka: 80, unit: "g" },
      { name: "sůl (placky)", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř (placky)", syn: 1, mamka: 1, unit: "špetka" },
      { name: "česnek (placky)", syn: 5, mamka: 5, unit: "g", note: "1 stroužek / 1 stroužek" },
      { name: "cibule (placky)", syn: 32, mamka: 32, unit: "g", note: "1/2 ks / 1/2 ks" },
      { name: "řepkový olej (placky)", syn: 5, mamka: 3, unit: "g", note: "1 čajová lžička / 1/2 čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 2209, kcal: 527, p: 45.4, s: 42.1, t: 17.8 },
      mamka: { kj: 1227, kcal: 293, p: 25.2, s: 23.4, t: 9.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "23v",
    category: Category.VECERE,
    title: "Pečená treska s batátovým pyré a semínky",
    instructions: "Tresku omyjeme, osušíme, osolíme a opepříme a vložíme do trouby na pečící papír. Zakápneme ji olejem a pečeme přibližně 20 minut na 180 °C. Batáty oloupeme, nakrájíme na kostky a uvaříme v osolené vodě doměkka. Poté je slijeme a s troškou vody rozmixujeme na hladké pyré. Semínky opražíme nasucho na pánvi. Tresku servírujeme s batátovým pyré, které posypeme praženými semínky a podáváme spolu s lístky salátu.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "filet aljašské tresky bez kůže", syn: 230, mamka: 128, unit: "g" },
      { name: "batáty sladké brambory", syn: 184, mamka: 102, unit: "g", note: "1/2 ks / 1/4 ks" },
      { name: "olivový olej", syn: 11, mamka: 6, unit: "ml", note: "2 čajové lžičky / 1 čajová lžička" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "sezamová semínka", syn: 9, mamka: 5, unit: "g", note: "1 1/2 čajové lžičky / 3/4 čajové lžičky" },
      { name: "polníček", syn: 38, mamka: 38, unit: "g", note: "2 hrsti / 2 hrsti" }
    ],
    nutrition: {
      syn: { kj: 1984, kcal: 473, p: 43.4, s: 39.8, t: 16.2 },
      mamka: { kj: 1102, kcal: 263, p: 24.1, s: 22.1, t: 9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "24v",
    category: Category.VECERE,
    title: "Salát s cottage sýrem, červenou řepou a šunkou",
    instructions: "Cottage sýr smícháme se semínky, nakrájenou šunkou a nastrouhanou vařenou řepou. Osolíme, opepříme a nandáme na talíř s natrhaným salátem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "slunečnicová semínka", syn: 5, mamka: 3, unit: "g", note: "1 čajová lžička / 1/2 čajové lžičky" },
      { name: "sýr cottage", syn: 202, mamka: 112, unit: "g", note: "1 kelímek / 2/3 kelímku" },
      { name: "červená vařená řepa", syn: 153, mamka: 153, unit: "g" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "polníček", syn: 37, mamka: 37, unit: "g", note: "2 hrsti / 2 hrsti" },
      { name: "krůtí šunka", syn: 76, mamka: 42, unit: "g", note: "6 plátků / 3 1/2 plátky" }
    ],
    nutrition: {
      syn: { kj: 2079, kcal: 497, p: 42.1, s: 38.9, t: 17.5 },
      mamka: { kj: 1155, kcal: 276, p: 23.4, s: 21.6, t: 9.7 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "25v",
    category: Category.VECERE,
    title: "Krůtí maso na kari, zeleninové hranolky",
    instructions: "Krůtí maso nakrájíme na nudličky, osolíme, opepříme a na trošce oleje orestujeme. Přidáme kari koření a zalijeme smetanou. Chvíli povaříme. Celer a mrkev nakrájíme na hranolky, pokapeme olejem, medem a přidáme koření a bylinky dle chuti. Pečeme v troubě dozlatova. Podáváme s masem a salátem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "krůtí maso", syn: 144, mamka: 80, unit: "g" },
      { name: "kari koření", syn: 5, mamka: 5, unit: "g", note: "1 1/2 čajové lžičky / 1 1/2 čajové lžičky" },
      { name: "smetana 12%", syn: 38, mamka: 21, unit: "ml", note: "2 1/2 polévkové lžíce / 1 1/2 polévkové lžíce" },
      { name: "bulvový celer", syn: 107, mamka: 107, unit: "g", note: "1/4 ks / 1/4 ks" },
      { name: "řepkový olej", syn: 5, mamka: 3, unit: "ml", note: "1 čajová lžička / 1/2 čajové lžičky" },
      { name: "ledový salát", syn: 83, mamka: 83, unit: "g" },
      { name: "mrkev", syn: 107, mamka: 107, unit: "g", note: "1 ks / 1 ks" },
      { name: "med", syn: 14, mamka: 8, unit: "g", note: "2 čajové lžičky / 1 čajová lžička" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2129, kcal: 509, p: 41.8, s: 37.8, t: 17.3 },
      mamka: { kj: 1183, kcal: 283, p: 23.2, s: 21, t: 9.6 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "26v",
    category: Category.VECERE,
    title: "Drůbeží plátek se směsí dušené zeleniny",
    instructions: "Na části oleje osmahneme směs zeleniny, osolíme, podlijeme vodou a necháme dusit. Plátek masa osolíme, opepříme a opečeme z obou stran na pánvi s druhou částí oleje. Podlijeme trochou vody a dusíme do změknutí. Podáváme maso společně se zeleninou.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "směs mrkev, hrášek, kukuřice", syn: 172, mamka: 172, unit: "g" },
      { name: "kuřecí prsa bez kůže", syn: 144, mamka: 80, unit: "g" },
      { name: "řepkový olej", syn: 13, mamka: 7, unit: "ml", note: "2 1/2 čajové lžičky / 1 1/2 čajové lžičky" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" }
    ],
    nutrition: {
      syn: { kj: 2012, kcal: 481, p: 42.1, s: 37.1, t: 15.3 },
      mamka: { kj: 1118, kcal: 267, p: 23.4, s: 20.6, t: 8.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "27v",
    category: Category.VECERE,
    title: "Obložený talíř s vajíčkem, knäckebrot",
    instructions: "Uvaříme vejce natvrdo (trvá to asi 10 minut). Na talíř naservírujeme na čtvrtiny nakrájená vajíčka, šunku, sýr, zeleninu a podáváme s knäckebrotem.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "vejce vařené natvrdo", syn: 81, mamka: 45, unit: "g", note: "1 3/4 ks / 1 ks" },
      { name: "salátová okurka", syn: 50, mamka: 50, unit: "g", note: "1/4 ks / 1/4 ks" },
      { name: "plátkový sýr 30%", syn: 31, mamka: 17, unit: "g", note: "2 plátky / 1 plátek" },
      { name: "krůtí šunka", syn: 90, mamka: 50, unit: "g", note: "7 plátků / 4 plátky" },
      { name: "rajčata", syn: 58, mamka: 58, unit: "g", note: "2/3 ks / 2/3 ks" },
      { name: "červená paprika", syn: 55, mamka: 55, unit: "g", note: "1/3 ks / 1/3 ks" },
      { name: "žitný knäckebrot (k podávání)", syn: 54, mamka: 30, unit: "g", note: "5 1/2 plátky / 3 plátky" }
    ],
    nutrition: {
      syn: { kj: 2255, kcal: 540, p: 42.3, s: 49.1, t: 16.4 },
      mamka: { kj: 1253, kcal: 300, p: 23.5, s: 27.3, t: 9.1 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "28v",
    category: Category.VECERE,
    title: "Knäckebrot s tuňákem",
    instructions: "Lze vše zvlášt nebo smíchat tuňáka s olejem a pom. Máslem a udělat pomazánku a tu namazat na chleba. Podáváme se zeleninou.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "žitný knäckebrot", syn: 53, mamka: 30, unit: "g" },
      { name: "tuňák ve vlastní šťávě", syn: 145, mamka: 83, unit: "g" },
      { name: "olivový olej (nebo pod. z konzervy)", syn: 8.8, mamka: 5, unit: "ml" },
      { name: "pomazánkové máslo", syn: 18, mamka: 10, unit: "g" },
      { name: "červená paprika", syn: 140, mamka: 80, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2156, kcal: 515, p: 40.3, s: 43.8, t: 17.5 },
      mamka: { kj: 1232, kcal: 294, p: 23.0, s: 25.0, t: 10.0 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "29v",
    category: Category.VECERE,
    title: "Cherry rajčátka s mozzarellou, šunkou a pečivem",
    instructions: "Rajčátka rozkrájíme na polovinu. Sýr natrháme na menší kousky a prokládáme se šnunkou a rajčaty. Podáváme s pečivem.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "cherry rajče", syn: 206, mamka: 129, unit: "g" },
      { name: "žitný knäckebrot", syn: 48, mamka: 30, unit: "g" },
      { name: "mozzarella light", syn: 106, mamka: 66, unit: "g" },
      { name: "krůtí šunka", syn: 62, mamka: 39, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 1915, kcal: 458, p: 36.8, s: 40.0, t: 14.4 },
      mamka: { kj: 1197, kcal: 286, p: 23.0, s: 25.0, t: 9.0 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "30v",
    category: Category.VECERE,
    title: "Tortilly s vajíčkem",
    instructions: "POZOR, POUZE PRO DVA. Jednu tortilu dáme do spod, na ní nalejeme míchané vajčko se sýrem, šunkou a kořením a vše zakryjeme druhou tortillou. Pečeme pod pokličkou, aby se vše prohřálo. Servirujeme jako dort s rajčaty.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "sýr eidam 20%", syn: 50, mamka: 30, unit: "g" },
      { name: "vejce slepičí", syn: 70, mamka: 40, unit: "g" },
      { name: "šunka kuřecí dušená 95%", syn: 60, mamka: 40, unit: "g" },
      { name: "tortilla wraps vollkorn", syn: 78, mamka: 45, unit: "g" },
      { name: "rajčata keříková", syn: 150, mamka: 100, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 2235, kcal: 534, p: 45.7, s: 45.3, t: 17.7 },
      mamka: { kj: 1229, kcal: 294, p: 27.0, s: 26.0, t: 11.0 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "31v",
    category: Category.VECERE,
    title: "Dušená ryba s krémovou čočkou",
    instructions: "Čočku předem namočíme do studené vody (nejméně hodiny) a necháme odmočit. Poté čočku slijeme, propláchneme a uvaříme na zkus podle návodu na obalu. Poté ji propláchneme studenou vodou. Mezitím rozehřejeme troubu na 180 °C. V hrnci rozpálíme olej a opečeme na něm očištěnou a na kostičky nakrájenou zeleninu dozlatova. Poté přidáme čočku a ochutíme balsamikem. Nakonec vmícháme smetanu a dochutíme solí a pepřem. Rybu omyjeme, osušíme, dochutíme solí a pepřem a dáme péct v alobalu do rozpálené trouby na 15 - 20 minut. Hotovou rybu podáváme s čočkou a posypanou nasekanými bylinkami.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "pangasius dolnooký (pangas)", syn: 179, mamka: 99, unit: "g" },
      { name: "petrželová nať", syn: 4, mamka: 3, unit: "g", note: "30 špetek" },
      { name: "vařená červená čočka", syn: 199, mamka: 111, unit: "g" },
      { name: "cibule šalotka", syn: 20, mamka: 17, unit: "g", note: "2/3 ks" },
      { name: "bulvový celer", syn: 30, mamka: 25, unit: "g" },
      { name: "mrkev", syn: 30, mamka: 25, unit: "g", note: "1/4 ks" },
      { name: "pórek", syn: 50, mamka: 42, unit: "g", note: "1/4 ks" },
      { name: "olivový olej", syn: 9, mamka: 6, unit: "ml", note: "3/4 / 1/2 polévkové lžíce" },
      { name: "ocet balsamiko", syn: 6, mamka: 4, unit: "ml", note: "1 / 3/4 čajová lžička" },
      { name: "zakysaná smetana 15 %", syn: 15, mamka: 8, unit: "ml", note: "1 polévková lžíce" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "šp" },
      { name: "sůl", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2247, kcal: 537, p: 50, s: 49, t: 16 },
      mamka: { kj: 1475, kcal: 352, p: 33.0, s: 32.0, t: 10.7 },
      originSyn: "X",
      originMamka: ""
	}
	  },
	  {
	  id: "v32",
	  category: Category.VECERE,
	  title: "Vaječná Omeleta s Tvarůžky",
	  instructions: "Na pánvi rozehřejeme ghí a rozložíme šunku. Do hrníčku rozklepneme a rozšleháme vejce, osolíme, opepříme. Vylijeme na šunku. Po chvilce přidáme nakrájené tvarůžky. Když je omeleta hotová, přendáme na talíř a podáváme se zeleninou a pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "slepičí vejce", syn:  82, mamka:  50, unit:  "g", note:  "1 ½ ks / 1 ks" },
		{ name:  "olomoucké tvarůžky", syn:  74, mamka:  40, unit:  "g" },
		{ name:  "polníček", syn:  70, mamka:  30, unit:  "g", note:  "3 ½ hrsti / 1 ½ hrsti" },
		{ name:  "ghí", syn:  5, mamka:  5, unit:  "g", note:  "½ čajové lžičky" },
		{ name:  "kuřecí šunka", syn:  31, mamka:  33, unit:  "g" },
		{ name:  "žitný chléb", syn:  90, mamka:  42, unit:  "g", note:  "2 krajíce / 1 krajíček" },
		{ name:  "sůl", syn:  0, mamka:  0, unit:  "šp" },
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp" }
	  ],
	  nutrition: {
		syn: { kj:  2131, kcal:  509, p:  46, s:  48, t:  14 },
		mamka: { kj:  1245, kcal:  298, p:  27, s:  22, t:  11 },
		originSyn: "X",
		originMamka: "X"
	  }
	},
	{
	  id: "33v",
	  category: Category.VECERE,
	  title: "Vaječná Omeleta, Pečivo",
	  instructions: "Vejce rozšleháme s mlékem a solí. Oloupeme a na malé kostičky nakrájíme cibuli. Na pánvi zahřejeme olej a cibuli krátce osmahneme. Přidáme rozšlehaná vejce a z obou stran osmažíme dozlatova. Podáváme s pečivem a nakrájenou omytou zeleninou.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "vaječný bílek", syn:  162, mamka:  90, unit:  "g", note:  "3 ks / 5 ks"},
		{ name:  "slepičí vejce", syn:  81, mamka:  45, unit:  "g", note:  "3/4 ks / 1, 5 ks"},
		{ name:  "polotučné mléko", syn:  32, mamka:  18, unit:  "ml", note:  "1 polévková lžíce"},
		{ name:  "cibule", syn:  32, mamka:  27, unit:  "g", note:  "1/3 ks"},
		{ name:  "olivový olej", syn:  5, mamka:  3, unit:  "ml", note:  "1/2 čajové lžičky"},
		{ name:  "celozrnný chléb", syn:  77, mamka:  43, unit:  "g", note:  "1 krajíc"},
		{ name:  "rajčata", syn:  60, mamka:  50, unit:  "g", note:  "1/2 ks"}
	  ],
	  nutrition: {
		syn: { kj:  2016, kcal:  482, p:  38, s:  41, t:  16 },
		mamka: { kj:  1120, kcal:  268, p:  21, s:  23, t:  9 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "34v",
	  category: Category.VECERE,
	  title: "Kuřecí Steak Na Asijský Způsob",
	  instructions: "Kuřecí maso omyjeme, osolíme, opepříme a orestujeme na oleji dozlatova. Mezitím uvaříme fazolové lusky v osolené vodě a rýži dle návodu na obale. Na talíř dáme rýži, maso, lusky. Ozdobíme mátou a posypeme klíčky.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "kuřecí prsa bez kůže", syn:  179, mamka:  99, unit:  "g"},
		{ name:  "jasmínová rýže", syn:  70, mamka:  39, unit:  "g", note:  "6 polévkových lžic"},
		{ name:  "zelené fazolky", syn:  60, mamka:  50, unit:  "g"},
		{ name:  "mungo klíčky", syn:  20, mamka:  17, unit:  "g", note:  "2 čajové lžičky"},
		{ name:  "sezamový olej", syn:  11, mamka:  6, unit:  "ml"},
		{ name:  "máta", syn:  5, mamka:  4, unit:  "g", note:  "5 lístků"},
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp"}
	  ],
	  nutrition: {
		syn: { kj:  2345, kcal:  561, p:  47, s:  58, t:  14 },
		mamka: { kj:  1303, kcal:  312, p:  26, s:  32, t:  8 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "35v",
	  category: Category.VECERE,
	  title: "Těstovinový Salát S Tuňákem",
	  instructions: "Těstoviny uvaříme podle návodu na obalu a necháme vychladnout. Rajčata nakrájíme na kostičky a olivy na kolečka. V míse promícháme uvařené těstoviny s ostatními ingrediencemi a podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "celozrnné těstoviny", syn:  66, mamka:  37, unit:  "g"},
		{ name:  "tuňák ve vlastní šťávě", syn:  150, mamka:  83, unit:  "g"},
		{ name:  "černé olivy", syn:  30, mamka:  17, unit:  "g", note:  "10 ks / 6 ks"},
		{ name:  "čerstvá citronová šťáva", syn:  10, mamka:  8, unit:  "ml", note:  "1 1/2 čajové lžičky / 1 1/4 čajové lžičky"},
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp"},
		{ name:  "extra panenský olivový olej", syn:  10, mamka:  6, unit:  "ml", note:  "3/4 polévkové lžíce / 1/2 polévkové lžíce"},
		{ name:  "rajčata", syn:  104, mamka:  87, unit:  "g", note:  "1 1/2 ks / 1 1/4 ks"}
	  ],
	  nutrition: {
		syn: { kj:  2258, kcal:  540, p:  45, s:  50, t:  16 },
		mamka: { kj:  1254, kcal:  300, p:  25, s:  27.8, t:  8.9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "36v",
	  category: Category.VECERE,
	  title: "Drůbeží Kapsa Se Špenátem",
	  instructions: "Drůbeží maso omyjeme, nařízneme, osolíme a opepříme a naplníme špenátem a sýrem. Zavážeme nití, opečeme na oliji dozlatova a dopečeme v troubě na 200 °C. Mezitím si očistíme a batáty, nakrájíme na kostičky a necháme vařit v osolené vodě doměkka. Poté natrháme listy salátu a smícháme je s nahrubo nastrouhanou mrkví a vše společně podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "řepkový olej", syn:  5, mamka:  3, unit:  "ml", note:  "1 čajová lžička / 0.5 čajové lžičky" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "kuřecí prsa bez kůže", syn:  174, mamka:  97, unit:  "g" },
		{ name:  "listový špenát", syn:  100, mamka:  83, unit:  "g", note:  "5 hrstí / cca 4 hrstě" },
		{ name:  "plátkový sýr 30%", syn:  31, mamka:  17, unit:  "g", note:  "2 plátky / 1 plátek" },
		{ name:  "batáty (sladké brambory)", syn:  161, mamka:  89, unit:  "g", note:  "1/2 ks / cca 1/4 ks" },
		{ name:  "hlávkový salát", syn:  100, mamka:  83, unit:  "g", note:  "1/4 ks / cca 1/5 ks" },
		{ name:  "mrkev", syn:  100, mamka:  83, unit:  "g", note:  "1 ks / cca 0.8 ks" }
	  ],
	  nutrition: {
		syn: { kj:  2178, kcal:  521, p:  55, s:  43, t:  13 },
		mamka: { kj:  1210, kcal:  289, p:  31, s:  24, t:  7 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "37v",
	  category: Category.VECERE,
	  title: "Vepřové Maso s Kapustou a Bramborem",
	  instructions: "Vepřové maso nakrájíme na kostky, osolíme, opepříme a orestujeme na olivovém oleji doměkka. Poté přidáme nakrájenou kapustu, mírně podlijeme vodou a dusíme cca dalších 15 min. Mezitím si oškrábeme brambory, nakrájíme je na kostky a uvaříme v osolené vodě. Vše podáváme společně.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "brambory", syn:  176, mamka:  98, unit:  "g", note:  "1.3 ks / 0.75 ks" },
		{ name:  "hlávková kapusta", syn:  203, mamka:  169, unit:  "g" },
		{ name:  "olivový olej", syn:  9, mamka:  5, unit:  "ml", note:  "cca 2 lžičky / 1 lžička" },
		{ name:  "vepřové plece", syn:  144, mamka:  80, unit:  "g" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" }
	  ],
	  nutrition: {
		syn: { kj:  1947, kcal:  466, p:  39, s:  33, t:  19.8 },
		mamka: { kj:  1217, kcal:  291, p:  23, s:  20, t:  11 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "38v",
	  category: Category.VECERE,
	  title: "Biftek, Pečené Brambory",
	  instructions: "Z vhodné části masa nakrájíme asi 3 cm široké bifteky, lehce je naklepeme a opepříme. Necháme odležet. Poté je opečeme na tuku po obou stranách a osolíme. Podáváme s bramborami pečenými v alobalu v troubě.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "hovězí maso", syn:  144, mamka:  80, unit:  "g"},
		{ name:  "ghí", syn:  9, mamka:  5, unit:  "g", note:  "cca 1 lžička / 1/2 čajové lžičky"},
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp"},
		{ name:  "brambory", syn:  232, mamka:  129, unit:  "g", note:  "cca 2 ks / 1 ks"}
	  ],
	  nutrition: {
		syn: { kj:  2104, kcal:  502, p:  41.4, s:  37.8, t:  21.6 },
		mamka: { kj:  1169, kcal:  279, p:  23, s:  21, t:  12 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "39v",
	  category: Category.VECERE,
	  title: "Pečená Ryba v Alobalu, Zelenina",
	  instructions: "Filet ryby omyjeme, osolíme, pokapeme citrónovou šťávou, zabalíme do alobalu a necháme péct přibližně 20 minut na 200 °C. Mezitím uvaříme brambory ve slupce a na tuku osmahneme a následně dusíme zeleninu doměkka. Podáváme společně s upečenou rybou.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "filet aljašské tresky bez kůže", syn:  211, mamka:  117, unit:  "g", note:  "bez kůže" },
		{ name:  "ghí", syn:  14, mamka:  8, unit:  "g", note:  "cca 1 1/4 čajové lžičky / 3/4 čajové lžičky" },
		{ name:  "brambory", syn:  203, mamka:  113, unit:  "g", note:  "cca 2 ks / 1 ks" },
		{ name:  "čerstvá citronová šťáva", syn:  12, mamka:  10, unit:  "ml", note:  "cca 1 3/4 čajové lžičky / 1 1/2 čajové lžičky" },
		{ name:  "zelené fazolky", syn:  120, mamka:  100, unit:  "g" }
	  ],
	  nutrition: {
		syn: { kj:  2030, kcal:  486, p:  41.4, s:  39.6, t:  16.2 },
		mamka: { kj:  1128, kcal:  270, p:  23, s:  22, t:  9 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "40v",
	  category: Category.VECERE,
	  title: "Šopský Salát se Šmakounem a Pečivem",
	  instructions: "Zeleninu omyjeme a nakrájíme na kostičky. Balkánský sýr a šmakouna také nakrájíme. Všechny ingredience smícháme v misce. Podáváme s pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "balkánský sýr,  50 % t. v s.", syn:  67, mamka:  37, unit:  "g"},
		{ name:  "rajčata", syn:  150, mamka:  125, unit:  "g", note:  "2 ks / cca 1, 5 ks"},
		{ name:  "salátová okurka", syn:  150, mamka:  125, unit:  "g", note:  "1/2 ks"},
		{ name:  "žlutá paprika", syn:  50, mamka:  42, unit:  "g", note:  "1/4 ks"},
		{ name:  "šmakoun", syn:  178, mamka:  99, unit:  "g", note:  "2 ks / 1 ks"},
		{ name:  "žitný knäckebrot", syn:  40, mamka:  22, unit:  "g", note:  "4 plátky / 2 plátky"}
	  ],
	  nutrition: {
		syn: { kj:  2100, kcal:  502, p:  45, s:  44, t:  15 },
		mamka: { kj:  1167, kcal:  279, p:  25, s:  24, t:  8 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "41v",
	  category: Category.VECERE,
	  title: "Salát s Vejcem a Provensálským Šmakounem a Cherry Rajčaty, Pečivo",
	  instructions: "Vejce uvaříme a necháme vychladnout. Salát a rajčata opláchneme a nakrájíme, pokapeme olejem, přidáme strouhaný šmakoun a nakrájené vejce na plátky. Popřípadě dochutíme solí. Podáváme s pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "vejce vařené natvrdo", syn:  88, mamka:  49, unit:  "g", note:  "2 ks / 1 ks" },
		{ name:  "žitný knäckebrot", syn:  42, mamka:  23, unit:  "g", note:  "4 plátky / 2 plátky" },
		{ name:  "olivový olej", syn:  3, mamka:  2, unit:  "ml", note:  "1/2 čajové lžičky" },
		{ name:  "cherry rajčata", syn:  127, mamka:  106, unit:  "g", note:  "12 1/2 ks / 10 ks" },
		{ name:  "listový salát", syn:  120, mamka:  100, unit:  "g" },
		{ name:  "šmakoun s provensálským kořením", syn:  200, mamka:  111, unit:  "g", note:  "2 ks / 1 ks" }
	  ],
	  nutrition: {
		syn: { kj:  2181, kcal:  521, p:  44, s:  45, t:  15 },
		mamka: { kj:  1212, kcal:  289, p:  24.4, s:  25, t:  8.3 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "43v",
	  category: Category.VECERE,
	  title: "Brambory Zapečené s Masem a Brokolicí",
	  instructions: "Troubu předehřejeme na 180 °C. Brambory očistíme a dáme vařit do osolené vody. Poté je nakrájíme na kostky. Brokolici nejprve zbavíme košťálu a rozdělíme na malé růžičky. Uvaříme v osolené vodě, asi 10 minut. Potom ji ihned slijeme a propláchneme studenou vodou. Maso nakrájíme na malé kousky a promícháme s brokolicí, bramborami a tukem. Vložíme do zapékací misky a vše společně zapečeme v troubě dozlatova.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "brambory", syn:  207, mamka:  115, unit:  "g", note:  "1 ks"},
		{ name:  "kuřecí prsa bez kůže", syn:  144, mamka:  80, unit:  "g"},
		{ name:  "brokolice", syn:  150, mamka:  125, unit:  "g", note:  "1/4 ks"},
		{ name:  "ghí", syn:  14, mamka:  8, unit:  "g", note:  "3/4 čajové lžičky"}
	  ],
	  nutrition: {
		syn: { kj:  2155, kcal:  515, p:  46.8, s:  37.8, t:  16.2 },
		mamka: { kj:  1197, kcal:  286, p:  26, s:  21, t:  9 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "44v",
	  category: Category.VECERE,
	  title: "Zapečená tortilla s tuňákem",
	  instructions: "Tortillu naplníme tuňákem, kukuřicí a nastrouhaným nebo nakrájeným sýrem. Poté zarolujeme a dáme zapéct do kontaktního grilu nebo na pánev. Lze podávat ale i nastudeno.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "špaldová tortilla", syn:  80, mamka:  44, unit:  "g", note:  "1 1/2 ks / cca 1 ks", alternatives:  "kukuřičná tortilla (91/51g)" },
		{ name:  "sýr eidam 30% t. v s.", syn:  40, mamka:  22, unit:  "g", note:  "2 1/2 plátku / cca 1 1/2 plátku", alternatives:  "camembert (36/20g)" },
		{ name:  "sterilovaná cukrová kukuřice", syn:  46, mamka:  38, unit:  "g"},
		{ name:  "tuňák ve vlastní šťávě", syn:  120, mamka:  67, unit:  "g"}
	  ],
	  nutrition: {
		syn: { kj:  2218, kcal:  530, p:  44, s:  49, t:  16 },
		mamka: { kj:  1232, kcal:  294, p:  24, s:  27, t:  9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "45v",
	  category: Category.VECERE,
	  title: "Míchaná Vajíčka Se Šmakounem, Pečivem A Zeleninovým Salátem",
	  instructions: "Vejce umícháme na teflonové pánvi, promícháme s uzeným šmakounem, který jsme předem nastrouhali na hrubém struhadle. Podáváme s pečivem a zeleninovým salátem z očištěné pokrájené zeleniny a olivového oleje.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "celozrnný chléb", syn:  85, mamka:  37, unit:  "g", note:  "1 1/2 krajíce / 2/3 krajíce" },
		{ name:  "rajčata", syn:  139, mamka:  67, unit:  "g", note:  "1 1/2 ks / 3/4 ks" },
		{ name:  "extra panenský olivový olej", syn:  3, mamka:  3, unit:  "ml", note:  "1/2 čajové lžičky" },
		{ name:  "salátová okurka", syn:  150, mamka:  66, unit:  "g", note:  "1/2 ks / 1/4 ks" },
		{ name:  "uzený šmakoun", syn:  150, mamka:  75, unit:  "g", note:  "1 1/2 ks / 3/4 ks" },
		{ name:  "slepičí vejce", syn:  81, mamka:  63, unit:  "g", note:  "1 1/2 ks / 1 ks" }
	  ],
	  nutrition: {
		syn: { kj:  2096, kcal:  501, p:  43, s:  47, t:  15 },
		mamka: { kj:  1168, kcal:  279, p:  23, s:  22, t:  11 },
		originSyn: "X",
		originMamka: "X"
	  }
	},
	{
	  id: "46v",
	  category: Category.VECERE,
	  title: "Krůtí Maso se Salátem a Ořechy",
	  instructions: "Na trošce olivového oleje orestujeme plátek masa, osolíme a opepříme. Míchaný salát opláchneme a smícháme jej s nadrcenými vlašskými ořechy, měsíčky grapefruitu, bílým jogurtem, citronem a dochutíme solí a pepřem. Podáváme s vařenými brambory.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "krůtí maso", syn:  176, mamka:  98, unit:  "g"},
		{ name:  "vlašské ořechy", syn:  6, mamka:  3, unit:  "g", note:  "2 ks / 1 ks"},
		{ name:  "grapefruit", syn:  67, mamka:  56, unit:  "g", note:  "1/3 ks"},
		{ name:  "míchaný salát", syn:  215, mamka:  179, unit:  "g", note:  "1 miska"},
		{ name:  "bílý jogurt", syn:  21, mamka:  12, unit:  "g", note:  "1 1/2 polévkové lžíce / 1 lžíce"},
		{ name:  "olivový olej", syn:  3, mamka:  2, unit:  "ml", note:  "1/2 čajové lžičky"},
		{ name:  "čerstvá citronová šťáva", syn:  10, mamka:  8, unit:  "ml", note:  "1 1/2 čajové lžičky"},
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp"},
		{ name:  "brambory vařené bez slupky", syn:  191, mamka:  106, unit:  "g"}
	  ],
	  nutrition: {
		syn: { kj:  2221, kcal:  531, p:  49, s:  50, t:  14 },
		mamka: { kj:  1234, kcal:  295, p:  27.2, s:  27.8, t:  7.8 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "47v",
	  category: Category.VECERE,
	  title: "Salát s Uzeným Lososem, Mozzarellou a Pečivem",
	  instructions: "Natrhaný salát smícháme s čerstvým baby špenátem, nakrájenými rajčaty. Poklademe kousky sýra a kousky uzeného lososa. Podáváme s pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "rajčata", syn:  50, mamka:  42, unit:  "g", note:  "1/2 ks" },
		{ name:  "listový salát", syn:  100, mamka:  83, unit:  "g" },
		{ name:  "uzený losos", syn:  100, mamka:  56, unit:  "g" },
		{ name:  "mozzarella light", syn:  31, mamka:  17, unit:  "g", note:  "1/4 ks" },
		{ name:  "baby špenát", syn:  40, mamka:  33, unit:  "g" },
		{ name:  "žitný chléb", syn:  85, mamka:  47, unit:  "g", note:  "1 1/2 krajíce / 1 krajíc" }
	  ],
	  nutrition: {
		syn: { kj:  1971, kcal:  471, p:  40, s:  45, t:  13 },
		mamka: { kj:  1095, kcal:  262, p:  22.2, s:  25, t:  7.2 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "48v",
	  category: Category.VECERE,
	  title: "Cuketa s mletým masem a rýží",
	  instructions: "Cuketu nakrájíme na větší kostičky a restujeme na cibulce na oleji. Mleté maso nasucho orestujeme na teflonové pánvi. Poté vmícháme do cuketové směsi a rozmícháme s trochou protlaku. Osolíme, opepříme a přidáme bylinky. Podáváme s rýží uvařenou podle návodu na obalu.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp", note:  "špetka" },
		{ name:  "petrželová nať", syn:  10, mamka:  8, unit:  "g", note:  "100 špetek" },
		{ name:  "cuketa", syn:  150, mamka:  125, unit:  "g", note:  "½ ks" },
		{ name:  "cibule", syn:  20, mamka:  17, unit:  "g", note:  "¼ ks" },
		{ name:  "olivový olej", syn:  3, mamka:  2, unit:  "ml", note:  "½ čajové lžičky" },
		{ name:  "rajčatový protlak", syn:  13, mamka:  7, unit:  "g", note:  "1 ½ čajové lžičky" },
		{ name:  "hovězí maso", syn:  150, mamka:  83, unit:  "g" },
		{ name:  "loupaná rýže", syn:  47, mamka:  26, unit:  "g", note:  "4 polévkové lžíce" }
	  ],
	  nutrition: {
		syn: { kj:  2075, kcal:  496, p:  43, s:  45, t:  16 },
		mamka: { kj:  1153, kcal:  276, p:  23.9, s:  25, t:  8.9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "49v",
	  category: Category.VECERE,
	  title: "Sýrové Těstoviny Se Špenátem",
	  instructions: "Těstoviny uvaříme dle návodu. Mezitím oloupeme cuketu a nakrájíme na malé kostičky. Pánev potřeme olejem, vložíme cuketu, osolíme a zprudka orestujeme doměkka. Poté přidáme baby špenát, česnek a vše prohřejeme. Do uvařených horkých těstovin nastrouháme sýr, přidáme směs cukety a špenátu a promícháme. Dochutíme solí, bazalkou a můžeme podávat.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "celozrnné těstoviny", syn:  53, mamka:  29, unit:  "g" },
		{ name:  "sýr eidam 30% t. v s.", syn:  50, mamka:  28, unit:  "g", note:  "3 1/2 plátku / 2 plátky" },
		{ name:  "cuketa", syn:  240, mamka:  200, unit:  "g", note:  "3/4 ks / cca 2/3 ks" },
		{ name:  "baby špenát", syn:  156, mamka:  130, unit:  "g" },
		{ name:  "česnek", syn:  20, mamka:  17, unit:  "g", note:  "4 stroužky / 3 stroužky" },
		{ name:  "řepkový olej", syn:  5, mamka:  3, unit:  "ml", note:  "1 čajová lžička" },
		{ name:  "bazalka", syn:  4, mamka:  3, unit:  "g" }
	  ],
	  nutrition: {
		syn: { kj:  1996, kcal:  477, p:  29, s:  48, t:  16 },
		mamka: { kj:  1109, kcal:  265, p:  16.1, s:  26.7, t:  8.9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "50v",
	  category: Category.VECERE,
	  title: "Pečené papriky plněné mletým masem, jáhly",
	  instructions: "Cibulku zpěníme na tuku ve větší pánvi. Přidáme mleté maso a orestujeme spolu s prolisovaným česnekem, solí a pepřem. Vrch papriky ukrojíme, vydlabeme semínka a naplníme směsí z masa. Vložíme do pekáčku a zalijeme asi 2 cm vodou. Pečeme v troubě předehřáté na 200°C asi 20 minut. Jáhly připravíme dle návodu na obale. Zeleninovou omáčku připravíme z krájených rajčat, která podusíme ve vodě, osolíme a opepříme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "libové hovězí plece bez kosti", syn:  177, mamka:  98, unit:  "g"},
		{ name:  "červená paprika", syn:  162, mamka:  135, unit:  "g", note:  "1 ks / 1 ks"},
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp"},
		{ name:  "cibule", syn:  20, mamka:  17, unit:  "g", note:  "1/4 ks / 1/4 ks"},
		{ name:  "česnek", syn:  5, mamka:  4, unit:  "g", note:  "1 stroužek / 1 stroužek"},
		{ name:  "olivový olej", syn:  7, mamka:  4, unit:  "ml", note:  "1 1/2 čajové lžičky / 1 čajová lžička"},
		{ name:  "cherry rajčata", syn:  164, mamka:  137, unit:  "g", note:  "2/3 balíček / 1/2 balíček"},
		{ name:  "jáhly", syn:  43, mamka:  24, unit:  "g", note:  "3 polévkové lžíce / 1.5 polévkové lžíce"}
	  ],
	  nutrition: {
		syn: { kj:  2181, kcal:  521, p:  47, s:  48, t:  14 },
		mamka: { kj:  1212, kcal:  289, p:  26.1, s:  26.7, t:  7.8 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "51v",
	  category: Category.VECERE,
	  title: "Cherry Rajčátka s Mozzarellou, Šunkou a Pečivem",
	  instructions: "Cherry rajčátka rozkrájíme na poloviny. Mozzarellu natrháme na menší kousky a prokládáme střídavě s rajčátky a šunkou. Podáváme s na kousky nalámaným pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "cherry rajčata", syn:  155, mamka:  129, unit:  "g", note:  "cca 16 ks / 13 ks"},
		{ name:  "žitný knäckebrot", syn:  54, mamka:  30, unit:  "g", note:  "cca 5 plátků / 3 plátky"},
		{ name:  "mozzarella light", syn:  119, mamka:  66, unit:  "g", note:  "cca 1 1/5 ks / 2/3 ks"},
		{ name:  "krůtí šunka", syn:  70, mamka:  39, unit:  "g", note:  "cca 6 plátků / 3 1/2 plátku"}
	  ],
	  nutrition: {
		syn: { kj:  2155, kcal:  515, p:  41.4, s:  45, t:  16.2 },
		mamka: { kj:  1197, kcal:  286, p:  23, s:  25, t:  9 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "52v",
	  category: Category.VECERE,
	  title: "Brambory zapečené se šmakounem a pórkem",
	  instructions: "Brambory očistíme a dáme vařit do osolené vody. Pórek nakrájíme na kolečka a podusíme. Šmakouna nakrájíme na malé kousky a promícháme s pórkem a bramborami. Vložíme do zapékací misky a vše společně zapečeme posypané sýrem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "brambory", syn:  200, mamka:  111, unit:  "g", note:  "1 ½ ks / 1 ks" },
		{ name:  "šmakoun", syn:  80, mamka:  44, unit:  "g", note:  "¾ ks / ½ ks" },
		{ name:  "pórek", syn:  160, mamka:  133, unit:  "g", note:  "¼ ks / ⅕ ks" },
		{ name:  "sýr eidam 30% t. v s.", syn:  73, mamka:  41, unit:  "g", note:  "5 plátků / 3 plátky" }
	  ],
	  nutrition: {
		syn: { kj:  1888, kcal:  451, p:  40, s:  41, t:  13 },
		mamka: { kj:  1211, kcal:  289, p:  26, s:  26, t:  8 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "53v",
	  category: Category.VECERE,
	  title: "Čočková Polévka s Kuřecím Masem a Mrkví",
	  instructions: "Maso nakrájíme na kostičky, osolíme, opepříme a orestujeme na oleji tak, aby se zatáhlo. Poté přidáme protlak a promícháme. Dále přidáme čočku, zalijeme vodou, přidáme na kousky nakrájenou mrkev a vaříme přibližně 15 minut. Nakonec polévku dochutíme česnekem a bylinkami.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "červená čočka", syn:  86, mamka:  48, unit:  "g" },
		{ name:  "mrkev", syn:  70, mamka:  58, unit:  "g", note:  "3/4 ks / cca 1/2 ks" },
		{ name:  "česnek", syn:  5, mamka:  4, unit:  "g", note:  "1 stroužek / 1 stroužek" },
		{ name:  "sušená bazalka", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "petrželová nať", syn:  5, mamka:  4, unit:  "g", note:  "50 špetek / 40 špetek" },
		{ name:  "kuřecí prsa bez kůže", syn:  86, mamka:  48, unit:  "g" },
		{ name:  "řepkový olej", syn:  14, mamka:  8, unit:  "ml", note:  "1 PL / cca 1/2 PL" },
		{ name:  "rajčatový protlak", syn:  14, mamka:  12, unit:  "g", note:  "2/3 PL / cca 1/2 PL" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" }
	  ],
	  nutrition: {
		syn: { kj:  2230, kcal:  533, p:  42, s:  43, t:  16 },
		mamka: { kj:  1239, kcal:  296, p:  23, s:  24, t:  9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "54v",
	  category: Category.VECERE,
	  title: "Knäckebrot s Tuňákem",
	  instructions: "V misce smícháme tuňáka s olejem a pomazánkovým máslem. Namažeme na knäckebrot a podáváme se zeleninovou oblohou.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "žitný knäckebrot", syn:  54, mamka:  30, unit:  "g", note:  "cca 5 plátků / 3 plátky" },
		{ name:  "tuňák ve vlastní šťávě", syn:  149, mamka:  83, unit:  "g" },
		{ name:  "extra panenský olivový olej", syn:  9, mamka:  5, unit:  "ml", note:  "cca 2 čajové lžičky / 1 čajová lžička" },
		{ name:  "pomazánkové máslo", syn:  18, mamka:  10, unit:  "g" },
		{ name:  "červená paprika", syn:  96, mamka:  80, unit:  "g", note:  "cca 1/2 ks" }
	  ],
	  nutrition: {
		syn: { kj:  2218, kcal:  529, p:  41.4, s:  45, t:  18 },
		mamka: { kj:  1232, kcal:  294, p:  23, s:  25, t:  10 },
		originSyn: "",
		originMamka: "X"
    }
  }
];
