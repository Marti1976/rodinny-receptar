import { Category, Recipe } from "../types";
export const recipesO: Recipe[] = [
  {
    id: "1o",
    category: Category.OBED,
    title: "Drůbeží maso na kari s rýží",
    instructions: "Cibuli a pórek pokrájíme a necháme zpěnit na oleji. Jakmile pomalu chytá barvu, přidáme kari koření a na kostky pokrájené a osolené drůbeží maso. Opékáme dozlatova. Po chvíli přidáme vodu a necháme dusit. Nakonec můžeme dochutit smetanou. Rýži uvaříme dle návodu a podáváme s masovou směsí.",
    favorites:"", 
    printed:"",
    ingredients: [
      { name: "kuřecí prsa bez kůže", syn: 183, mamka: 98, unit: "g" },
      { name: "kari koření", syn: 1, mamka: 1, unit: "špetka" },
      { name: "řepkový olej", syn: 20, mamka: 10, unit: "ml", note: "1 ½ polévkové lžíce / 3/4 polévkové lžíce" },
      { name: "cibule", syn: 60, mamka: 60, unit: "g", note: "1 ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "Basmati rýže", syn: 89, mamka: 49, unit: "g", note: "7 ½ polévkové lžíce / 4 polévkové lžíce" },
      { name: "smetana na vaření 10% tuku", syn: 35, mamka: 18, unit: "g" },
      { name: "pórek", syn: 47, mamka: 40, unit: "g", note: "¼ ks" },
      { name: "voda", syn: 70, mamka: 70, unit: "ml", note: "4 ½ polévkové lžíce" }
    ],
    nutrition: {
      syn: { kj: 3205, kcal: 766, p: 52.2, s: 76.2, t: 26.9 },
      mamka: { kj: 1774, kcal: 424, p: 28.8, s: 44.2, t: 13.8 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: '2o',
    category: Category.OBED,
    title: 'Těstoviny s kuřecím masem a špenátem',
    instructions: 'Těstoviny uvaříme dle návodu al dente. Cibuli nakrájíme najemno, česnek na plátky a oboje opékáme dozlatova na pánvi s rozpáleným olejem. Maso nakrájíme na malé kousky, přidáme do pánve a opečeme, aby se zatáhlo a začalo zlátnout. Poté přidáme špenát, ricottu, osolíme, opepříme a krátce vše podusíme. Podáváme s těstovinami.',
    favorites:"", 
    printed:"",    
    ingredients: [
      { name: 'celozrnné těstoviny', syn: 100, mamka: 56, unit: 'g' },
      { name: 'kuřecí prsa bez kůže', syn: 130, mamka: 72, unit: 'g' },
      { name: 'listový špenát', syn: 40, mamka: 22, unit: 'g', note: '2 hrsti' },
      { name: 'cibule', syn: 30, mamka: 17, unit: 'g', note: '⅓ ks' },
      { name: 'česnek', syn: 5, mamka: 3, unit: 'g', note: '1 stroužek' },
      { name: 'ricotta', syn: 100, mamka: 56, unit: 'g', note: '6 ½ polévkové lžíce' },
      { name: 'extra panenský olivový olej', syn: 11, mamka: 6, unit: 'ml', note: '1 polévková lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3122, kcal: 746, p: 53.4, s: 73.1, t: 24.3 },
      mamka: { kj: 1734, kcal: 414, p: 29.7, s: 40.6, t: 13.5 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '3o',
    category: Category.OBED,
    title: 'Tortilla s prsíčky a zeleninou',
    instructions: 'Nejprve omyjeme a osušíme maso. Nakrájíme ho na malé kostičky a krátce restujeme na teflonové pánvi. Připravíme si dresink smícháním všech ingrediencí v misce. Zeleninu očistíme a nakrájíme na tenké proužky. Tortillu potřeme dresinkem, přidáme maso, zeleninu a zatočíme.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'krůtí prsa bez kosti a kůže', syn: 140, mamka: 78, unit: 'g' },
      { name: 'špaldová tortilla', syn: 109, mamka: 61, unit: 'g', note: '2 ks' },
      { name: 'mrkev', syn: 70, mamka: 39, unit: 'g', note: '¾ ks' },
      { name: 'salátová okurka', syn: 70, mamka: 39, unit: 'g', note: '¼ ks' },
      { name: 'bezlaktózový jogurt', syn: 77, mamka: 43, unit: 'g', note: '6 polévkových lžic' },
      { name: 'extra panenský olivový olej', syn: 13, mamka: 7, unit: 'ml', note: '1 polévková lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'kopr', syn: 3, mamka: 2, unit: 'g', note: '1 čajová lžička' },
      { name: 'plnotučná hořčice', syn: 8, mamka: 4, unit: 'g', note: '1 čajová lžička' }
    ],
    nutrition: {
      syn: { kj: 2998, kcal: 717, p: 48.9, s: 66.7, t: 26.3 },
      mamka: { kj: 1666, kcal: 398, p: 27.2, s: 37.1, t: 14.6 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '4o',
    category: Category.OBED,
    title: 'Obložené restované drůbeží prsíčko s kuskusem',
    instructions: 'Kuskus připravíme podle návodu na obalu. Poté si osolíme očištěné maso a orestujeme ho na většině oleje. Mezitím nakrájíme na plátky rajče, mozzarellu a připravíme pár lístků bazalky. Jak bude maso z obou stran opečené, tak navrch položíme střídavě plátek rajčete, mozzarelly a lístek bazalky. Když se začne mozzarella zlehka rozpouštět, sejmeme maso z plotny. Kuskus ještě dochutíme olivovým olejem, špetkou soli a podáváme jako přílohu k masu.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'celozrnný kuskus', syn: 115, mamka: 64, unit: 'g' },
      { name: 'kuřecí prsa bez kůže', syn: 117, mamka: 65, unit: 'g' },
      { name: 'mozzarella', syn: 67, mamka: 37, unit: 'g', note: '⅔ ks' },
      { name: 'rajčata', syn: 67, mamka: 37, unit: 'g', note: '¾ ks' },
      { name: 'bazalka', syn: 5, mamka: 5, unit: 'g' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'olivový olej', syn: 11, mamka: 6, unit: 'ml', note: '1 polévková lžíce' }
    ],
    nutrition: {
      syn: { kj: 3245, kcal: 776, p: 52.7, s: 78.8, t: 26.4 },
      mamka: { kj: 1803, kcal: 431, p: 29.3, s: 43.8, t: 14.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "5o",
    category: Category.OBED,
    title: "Grilovaný steak, dušená zelenina, rýže",
    instructions: "Maso omyjeme, osušíme a na chvilku necháme odležet potřené olejem se solí a pepřem. Poté maso ugrilujeme na grilu, popřípadě na grilovací pánvi. Zeleninu omyjeme, nakrájíme na menší kousky a dusíme na páře doměkka. Rýži uvaříme dle návodu. Na talíř servírujeme ugrilované maso spolu se zeleninou s máslem a uvařenou rýží.",
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: "libový hovězí roštěnec bez kosti", syn: 196, mamka: 109, unit: "g" },
      { name: "olivový olej", syn: 12, mamka: 7, unit: "ml", note: "1 polévková lžíce" },
      { name: "sůl", syn: 1, mamka: 1, unit: "špetka" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "špetka" },
      { name: "cuketa", syn: 120, mamka: 120, unit: "g", note: "⅓ ks" },
      { name: "červená paprika", syn: 70, mamka: 70, unit: "g", note: "½ ks" },
      { name: "máslo", syn: 5, mamka: 3, unit: "g", note: "⅔ čajové lžičky" },
      { name: "neloupané (natural) rýže", syn: 98, mamka: 54, unit: "g", note: "8 polévkových lžic" }
    ],
    nutrition: {
      syn: { kj: 3257, kcal: 778, p: 52, s: 77.8, t: 27.3 },
      mamka: { kj: 1809, kcal: 432, p: 28.9, s: 43.2, t: 15.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '6o',
    category: Category.OBED,
    title: 'Vepřové maso v mrkvi, doch. muškát. oříškem, vařený brambor',
    instructions: 'Mrkev očistíme a nakrájíme na kolečka. Na malé části másla orestujeme maso, které osolíme a opepříme, následně přidáme mrkev i zbytek másla, podlijeme trochou vody a dusíme do měkka, dochutíme strouhaným muškátovým oříškem a případně citrónovou šťávou. V mezičase si oškrábeme brambory, které uvaříme a podáváme jako přílohu k masu s mrkví.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'brambory', syn: 355, mamka: 197, unit: 'g', note: '1 ½ ks' },
      { name: 'mrkev', syn: 197, mamka: 197, unit: 'g', note: '2 ks' },
      { name: 'máslo', syn: 14, mamka: 8, unit: 'g', note: '1 čajová lžička' },
      { name: 'vepřová plec', syn: 196, mamka: 109, unit: 'g' },
      { name: 'muškátový oříšek', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'čerstvá citronová šťáva', syn: 10, mamka: 10, unit: 'ml', note: '1 ½ čajové lžičky' },
      { name: 'voda', syn: 70, mamka: 70, unit: 'ml', note: '4 ½ polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3235, kcal: 772, p: 49.1, s: 79.9, t: 25.4 },
      mamka: { kj: 1797, kcal: 429, p: 27.3, s: 44.4, t: 14.1 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '7o',
    category: Category.OBED,
    title: 'Čočkovo-mrkvové karbanátky s cuketou a semínky',
    instructions: 'Čočku uvaříme podle návodu. Mezitím si nastrouháme očištěnou zeleninu. Osolíme, opepříme, přidáme vejce, uvařenou čočku, semínka a mouku. Restujeme na olivovém oleji dozlatova.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'červená čočka', syn: 118, mamka: 66, unit: 'g' },
      { name: 'olivový olej', syn: 8, mamka: 4, unit: 'ml', note: '1 ½ čajové lžičky' },
      { name: 'mrkev', syn: 144, mamka: 144, unit: 'g', note: '1 ½ ks' },
      { name: 'cuketa', syn: 144, mamka: 144, unit: 'g', note: '½ ks' },
      { name: 'konopná semínka', syn: 8, mamka: 4, unit: 'g', note: '1 ½ čajové lžičky' },
      { name: 'slepičí vejce', syn: 98, mamka: 54, unit: 'g', note: '2 ks' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'ovesná mouka', syn: 19, mamka: 11, unit: 'g' }
    ],
    nutrition: {
      syn: { kj: 3221, kcal: 770, p: 48.5, s: 71.1, t: 24.6 },
      mamka: { kj: 1789, kcal: 428, p: 26.9, s: 39.5, t: 13.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '8o',
    category: Category.OBED,
    title: 'Drůbeží nudličky a těstoviny s rajčatovou omáčkou',
    instructions: 'Maso nakrájíme na nudličky, osolíme, opepříme a orestujeme v pánvi na zahřátém oleji. Přidáme nakrájená rajčata, protlak a podusíme 20 minut. Mezitím uvaříme těstoviny podle návodu na obalu, slijeme a promícháme se směsí na pánvi. Posypeme strouhaným sýrem a bazalkou.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'celozrnné špagety (syrové)', syn: 100, mamka: 56, unit: 'g' },
      { name: 'kuřecí stehenní řízek bez kůže a kosti', syn: 160, mamka: 89, unit: 'g' },
      { name: 'rajčatový protlak', syn: 25, mamka: 14, unit: 'g', note: '1 ½ polévkové lžíce' },
      { name: 'sýr feta', syn: 45, mamka: 25, unit: 'g' },
      { name: 'olivový olej', syn: 3, mamka: 2, unit: 'ml', note: '½ čajové lžičky' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'bazalka', syn: 10, mamka: 10, unit: 'g' },
      { name: 'rajčata', syn: 40, mamka: 40, unit: 'g', note: '½ ks' }
    ],
    nutrition: {
      syn: { kj: 3184, kcal: 761, p: 50.5, s: 72.1, t: 28.6 },
      mamka: { kj: 1769, kcal: 423, p: 28.1, s: 40.1, t: 15.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '9o',
    category: Category.OBED,
    title: 'Vepřové na zelenině s rýží',
    instructions: 'Do hrnce naskládáme na kolečka nakrájenou cibuli. Maso nakrájíme na kostičky, osolíme, opepříme a dáme na cibuli. Papriku nakrájíme na proužky a položíme na maso. Následně nakrájíme rajčata na osminky a položíme na papriku. Osolíme, opepříme a pokapeme olejem. Hrnec přikryjeme pokličkou a vaříme asi 80 minut, dokud není maso měkké. Nepodléváme ani nemícháme. Mezitím uvaříme rýži podle návodu na obalu. Hotové jídlo podáváme s rýží.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'libová vepřová kýta', syn: 200, mamka: 111, unit: 'g' },
      { name: 'cibule', syn: 50, mamka: 50, unit: 'g', note: '⅔ ks' },
      { name: 'žlutá paprika', syn: 60, mamka: 60, unit: 'g', note: '⅓ ks' },
      { name: 'rajčata', syn: 82, mamka: 82, unit: 'g', note: '1 ks' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'olivový olej', syn: 19, mamka: 11, unit: 'ml', note: '1 ½ polévkové lžíce' },
      { name: 'Basmati rýže', syn: 89, mamka: 49, unit: 'g', note: '7 ½ polévkové lžíce' }
    ],
    nutrition: {
      syn: { kj: 3230, kcal: 772, p: 51.7, s: 78.5, t: 27.2 },
      mamka: { kj: 1794, kcal: 429, p: 28.7, s: 43.6, t: 15.1 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '10o',
    category: Category.OBED,
    title: 'Svíčková omáčka, těstoviny',
    instructions: 'Mrkev, petržel a celer oškrábeme. Cibuli oloupeme. Jednu mrkev nakrájíme na špalíčky a vše ostatní na drobné kostičky. Maso očistíme od tuku a prošpikujeme špalíčky mrkve. Maso zprudka orestujeme na oleji ze všech stran. Dáme ho stranou a pak orestujeme kořenovou zeleninu. Do pekáče vložíme maso, zeleninu, osolíme, zalijeme vodou, vložíme sítko s kořením. Pečeme v troubě. Hotové maso vyndáme z pekáče, zeleninu rozmixujeme na pyré, zalijeme vývarem a společně krátce povaříme. Přidáme smetanu, dochutíme solí, pepřem, octem, citrónovou šťávou a ještě pár minut provaříme. Těstoviny uvaříme dle návodu a podáváme s omáčkou a masem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'hovězí maso', syn: 141, mamka: 78, unit: 'g' },
      { name: 'mrkev', syn: 144, mamka: 144, unit: 'g', note: '1 ½ ks' },
      { name: 'petržel', syn: 88, mamka: 88, unit: 'g', note: '4 ½ svazky' },
      { name: 'bulvový celer', syn: 96, mamka: 96, unit: 'g', note: '¼ ks' },
      { name: 'smetana 12%', syn: 50, mamka: 28, unit: 'ml', note: '3 ½ polévkové lžíce' },
      { name: 'celozrnné těstoviny', syn: 75, mamka: 42, unit: 'g' },
      { name: 'řepkový olej', syn: 10, mamka: 6, unit: 'ml', note: '¾ polévkové lžíce' },
      { name: 'cibule', syn: 20, mamka: 20, unit: 'g', note: '¼ ks' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'bobkový list', syn: 3, mamka: 3, unit: 'g', note: '3 ks' },
      { name: 'nové koření', syn: 3, mamka: 3, unit: 'g', note: '3 ks' },
      { name: 'voda', syn: 200, mamka: 200, unit: 'ml', note: '1 ½ kelímky' },
      { name: 'kvasný ocet', syn: 3, mamka: 2, unit: 'ml', note: '½ čajové lžičky' },
      { name: 'čerstvá citronová šťáva', syn: 5, mamka: 3, unit: 'ml', note: '⅔ čajové lžičky' }
    ],
    nutrition: {
      syn: { kj: 3467, kcal: 829, p: 52.7, s: 78.6, t: 30.9 },
      mamka: { kj: 1926, kcal: 461, p: 29.3, s: 43.7, t: 17.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '11o',
    category: Category.OBED,
    title: 'Pečené kuře s jablečným zelím a pohankou',
    instructions: 'Zelí nakrájíme na nudličky, jablko nastrouháme nahrubo a vše společně s kuřecím stehnem vložíme do pekáčku. Lehce podlijeme vodou, osolíme, okmínujeme a dáme péct do trouby vyhřáté na 170 °C. Pečeme tak dlouho, dokud maso nezezlátne. Podáváme s uvařenou pohankou.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'kuřecí maso', syn: 192, mamka: 87, unit: 'g' },
      { name: 'červené hlávkové zelí', syn: 200, mamka: 156, unit: 'g' },
      { name: 'jablko', syn: 75, mamka: 125, unit: 'g', note: '½ ks' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'kmín', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'pohanka (syrová)', syn: 78, mamka: 49, unit: 'g' }
    ],
    nutrition: {
      syn: { kj: 2953, kcal: 706, p: 45.1, s: 64.8, t: 26.5 },
      mamka: { kj: 1792, kcal: 428, p: 29.1, s: 43.6, t: 14.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '12o',
    category: Category.OBED,
    title: 'Brokolice s drůbežím masem a rýží',
    instructions: 'Maso nakrájíme na nudličky, osolíme a orestujeme na oleji. Brokolici rozebereme na růžičky a uvaříme v páře doměkka. Rýži uvaříme dle návodu na obalu. Vše smícháme dohromady a podáváme.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'krůtí maso', syn: 179, mamka: 102, unit: 'g' },
      { name: 'brokolice', syn: 80, mamka: 183, unit: 'g', note: '¼ ks' },
      { name: 'Basmati rýže', syn: 98, mamka: 49, unit: 'g', note: '8 polévkových lžic' },
      { name: 'olivový olej', syn: 15, mamka: 10, unit: 'g', note: '1 ½ polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3094, kcal: 739, p: 53, s: 77.5, t: 22.7 },
      mamka: { kj: 1797, kcal: 429, p: 29.1, s: 43.4, t: 15.1 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '13o',
    category: Category.OBED,
    title: 'Pikantní stripsy se zeleninovým salátem',
    instructions: 'Maso nakrájíme na proužky, osolíme, opepříme a obalíme v kukuřičných lupíncích. Pečeme v troubě vyhřáté na 180 °C dozlatova. Mezitím si připravíme salát z nakrájené zeleniny, kterou dochutíme olivovým olejem a citronovou šťávou. Podáváme s uvařenými bramborami.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'krůtí prsa bez kosti a kůže', syn: 148, mamka: 89, unit: 'g' },
      { name: 'kukuřičná mouka', syn: 65, mamka: 22, unit: 'g' },
      { name: 'mletá sladká paprika', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'kmín', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'slepičí vejce', syn: 50, mamka: 0, unit: 'g', note: '1 ks' },
      { name: 'ledový salát', syn: 150, mamka: 120, unit: 'g' },
      { name: 'řepkový olej', syn: 17, mamka: 6, unit: 'ml', note: '1 ½ polévkové lžíce' },
      { name: 'celozrnný chléb', syn: 68, mamka: 0, unit: 'g', note: '1 ½ krajíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3340, kcal: 798, p: 54.6, s: 74.7, t: 28.7 },
      mamka: { kj: 1788, kcal: 427, p: 29, s: 43.5, t: 14.9 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '14o',
    category: Category.OBED,
    title: 'Beluga čočka s vejcem a šunkou',
    instructions: 'Čočku uvaříme podle návodu na obalu. Vejce uvaříme natvrdo. Šunku nakrájíme na kostičky a orestujeme na pánvi na oleji. Poté vše smícháme dohromady, přidáme nakrájenou zeleninu a podáváme s pečivem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'slepičí vejce', syn: 56, mamka: 27, unit: 'g', note: '1 ks' },
      { name: 'černá čočka – Beluga', syn: 150, mamka: 56, unit: 'g', note: '3 hrsti' },
      { name: 'vepřová šunka', syn: 20, mamka: 33, unit: 'g' },
      { name: 'cibule', syn: 20, mamka: 20, unit: 'g', note: '¼ ks' },
      { name: 'ghí', syn: 15, mamka: 6, unit: 'g', note: '¾ polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 2913, kcal: 696, p: 45.9, s: 63.7, t: 23.7 },
      mamka: { kj: 1798, kcal: 430, p: 27.2, s: 40.2, t: 15.8 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '15o',
    category: Category.OBED,
    title: 'Tortilla s krůtím masem, jogurtem a salátem',
    instructions: 'Maso nakrájíme na nudličky, osolíme a orestujeme na pánvi na oleji. Tortillu nahřejeme, potřeme jogurtem, poklademe nakrájenou zeleninou a masem. Zabalíme a podáváme.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'krůtí prsa bez kosti a kůže', syn: 147, mamka: 78, unit: 'g' },
      { name: 'špaldová tortilla', syn: 120, mamka: 69, unit: 'g', note: '2 ½ ks' },
      { name: 'ledový salát', syn: 50, mamka: 100, unit: 'g' },
      { name: 'bílý jogurt 3,5% tuku', syn: 80, mamka: 33, unit: 'g', note: '6 polévkových lžic' },
      { name: 'pažitka', syn: 4, mamka: 0, unit: 'g', note: '1 ½ čajové lžičky' },
      { name: 'červená paprika', syn: 150, mamka: 0, unit: 'g', note: '1 ks' },
      { name: 'řepkový olej', syn: 11, mamka: 7, unit: 'ml', note: '¾ polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 0, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3154, kcal: 754, p: 50.9, s: 74, t: 25.4 },
      mamka: { kj: 1801, kcal: 431, p: 29.1, s: 43.7, t: 14.8 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: '16o',
    category: Category.OBED,
    title: 'Tortilla s kuřecím masem, zeleninou a dipem',
    instructions: 'Maso nakrájíme na nudličky, osolíme a orestujeme na pánvi na oleji. Tortillu nahřejeme, potřeme jogurtem, poklademe nakrájenou zeleninou a masem. Zabalíme a podáváme.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'pšeničná tortilla', syn: 124, mamka: 69, unit: 'g', note: '2 ks' },
      { name: 'kuřecí prsa bez kůže', syn: 140, mamka: 78, unit: 'g' },
      { name: 'bílý jogurt 3,5% tuku', syn: 60, mamka: 33, unit: 'g', note: '4 polévkové lžíce' },
      { name: 'ledový salát', syn: 100, mamka: 100, unit: 'g', note: '¼ ks' },
      { name: 'rajčata', syn: 80, mamka: 80, unit: 'g', note: '1 ks' },
      { name: 'salátová okurka', syn: 80, mamka: 80, unit: 'g', note: '⅓ ks' },
      { name: 'řepkový olej', syn: 12, mamka: 7, unit: 'ml', note: '1 polévková lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3242, kcal: 775, p: 52.4, s: 78.7, t: 26.6 },
      mamka: { kj: 1801, kcal: 431, p: 29.1, s: 43.7, t: 14.8 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: '17o',
    category: Category.OBED,
    title: 'Cuketa s mletým masem a rýží',
    instructions: 'Cuketu nakrájíme na větší kostičky a restujeme na cibulce na oleji. Mleté maso nasucho orestujeme na teflonové pánvi. Poté vmícháme do cuketové směsi a rozmícháme s trochou protlaku. Osolíme, opepříme a přidáme bylinky. Podáváme s rýží uvařenou podle návodu na obalu.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'cuketa', syn: 80, mamka: 80, unit: 'g', note: '¼ ks' },
      { name: 'cibule', syn: 34, mamka: 34, unit: 'g', note: '½ ks' },
      { name: 'olivový olej', syn: 11, mamka: 6, unit: 'ml', note: '1 čajová lžička' },
      { name: 'rajčatový protlak', syn: 45, mamka: 25, unit: 'g', note: '1 ½ polévkové lžíce' },
      { name: 'hovězí maso mleté', syn: 169, mamka: 94, unit: 'g' },
      { name: 'Basmati rýže', syn: 81, mamka: 45, unit: 'g', note: '4 polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'petrželová nať', syn: 6, mamka: 6, unit: 'g' }
    ],
    nutrition: {
      syn: { kj: 3215, kcal: 769, p: 51.8, s: 80.8, t: 25.2 },
      mamka: { kj: 1786, kcal: 427, p: 28.8, s: 44.9, t: 14.0 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '18o',
    category: Category.OBED,
    title: 'Pórková polévka s vejcem',
    instructions: 'Pórek omyjeme, nakrájíme na nudličky a orestujeme na oleji. Po chvilce přidáme vývar a chvilku povaříme, popřípadě dochutíme solí. Nakonec přidáme rozšlehané vejce. Podáváme s pečivem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'slepičí vejce', syn: 187, mamka: 104, unit: 'g', note: '2 ks' },
      { name: 'pórek', syn: 200, mamka: 200, unit: 'g', note: '⅓ ks' },
      { name: 'zeleninový vývar', syn: 360, mamka: 200, unit: 'ml', note: '1 ½ šálku' },
      { name: 'olivový olej', syn: 5, mamka: 3, unit: 'ml', note: '½ čajové lžičky' },
      { name: 'žitný dalamánek', syn: 90, mamka: 50, unit: 'g', note: '½ ks' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3087, kcal: 738, p: 43.7, s: 72.9, t: 26.1 },
      mamka: { kj: 1715, kcal: 410, p: 24.3, s: 40.5, t: 14.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '19o',
    category: Category.OBED,
    title: 'Čína z drůbežího masa se zeleninou a rýží',
    instructions: 'Rýži propláchneme a uvaříme v osolené vodě dle návodu na obalu. Maso nakrájíme na kostičky, osolíme a opepříme a orestujeme na oleji dozlatova. Pak maso vyndáme do misky a na té samé pánvi orestujeme zeleninu tak, aby zůstala ještě trochu křupavá. Zeleninu smícháme s masem a sojovou omáčkou and podáváme spolu s vařenou rýží.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'kuřecí maso', syn: 175, mamka: 97, unit: 'g' },
      { name: 'sójová omáčka', syn: 27, mamka: 15, unit: 'g', note: '1 polévková lžíce' },
      { name: 'olivový olej', syn: 5, mamka: 3, unit: 'ml', note: '½ čajové lžičky' },
      { name: 'cibule', syn: 39, mamka: 39, unit: 'g', note: '½ ks' },
      { name: 'pórek', syn: 120, mamka: 120, unit: 'g', note: '¼ ks' },
      { name: 'červená paprika', syn: 40, mamka: 40, unit: 'g', note: '¼ ks' },
      { name: 'Basmati rýže', syn: 76, mamka: 42, unit: 'g', note: '3 ½ polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3220, kcal: 770, p: 44.1, s: 76.7, t: 28.6 },
      mamka: { kj: 1789, kcal: 428, p: 24.5, s: 42.6, t: 15.9 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '20o',
    category: Category.OBED,
    title: 'Rajčatová polévka se špenátem',
    instructions: 'Na oleji zpěníme cibulku, přidáme sterilovaná rajčata a chvilku povaříme. Dochutíme solí, pepřem a česnekem. Poté do polévky přilijeme zeleninový vývar a vaříme asi 15min. Polévku rozmixujeme do hladkého krému a nakonec přidáme nasekané listy čerstvého baby špenátu, nakrájenou mozzarellu a ozdobíme petrželkou. Podáváme s pečivem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'sterilovaná rajčata', syn: 250, mamka: 250, unit: 'g', note: 'loupaná, krájená' },
      { name: 'cibule', syn: 53, mamka: 53, unit: 'g', note: '¾ ks' },
      { name: 'baby špenát', syn: 60, mamka: 60, unit: 'g' },
      { name: 'zeleninový vývar', syn: 144, mamka: 200, unit: 'ml', note: '¾ šálku / 1 ½ šálky' },
      { name: 'olivový olej', syn: 10, mamka: 3, unit: 'ml', note: '¾ polévkové lžíce / ½ čajové lžičky' },
      { name: 'mozzarella light', syn: 110, mamka: 69, unit: 'g', note: '⅔ ks' },
      { name: 'česnek', syn: 5, mamka: 5, unit: 'g', note: '1 ks' },
      { name: 'celozrnný chléb', syn: 60, mamka: 50, unit: 'g', note: '1 ½ krajíce / 1 krajíc' },
      { name: 'petrželka', syn: 0, mamka: 10, unit: 'g', note: '½ svazek' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3230, kcal: 772, p: 48.6, s: 78.5, t: 26.2 },
      mamka: { kj: 1726, kcal: 413, p: 24.7, s: 41.9, t: 14.3 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '21o',
    category: Category.OBED,
    title: 'Těstovinový salát s grilovaným kuřetem',
    instructions: 'Těstoviny uvaříme podle návodu na obalu a scedíme. Do mísy dáme zakysanou smetanu a na malé kostičky nakrájenou zeleninu. Poté přidáme i těstoviny, dobře promícháme a případně dochutíme solí a pepřem. Maso omyjeme a osušíme. V grilovací pánvi rozpálíme olej a z obou stran na něm maso opečeme doměkka a aby bylo celé propečené. Poté jej také můžeme dochutit a podáváme spolu s vlažným těstovinovým salátem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'kuřecí prsa bez kůže', syn: 144, mamka: 82, unit: 'g' },
      { name: 'olivový olej', syn: 15, mamka: 7, unit: 'ml', note: '1 ½ polévkové lžíce / 1 ½ čajové lžičky' },
      { name: 'celozrnné těstoviny', syn: 100, mamka: 61, unit: 'g' },
      { name: 'zakysaná smetana 12%', syn: 47, mamka: 32, unit: 'g', note: '4 polévkové lžíce' },
      { name: 'salátová okurka', syn: 64, mamka: 30, unit: 'g', note: '¼ ks' },
      { name: 'rajčata', syn: 30, mamka: 46, unit: 'g', note: '⅓ ks / ½ ks' },
      { name: 'červená cibule', syn: 20, mamka: 20, unit: 'g', note: '1 ½ polévkové lžíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3055, kcal: 730, p: 48.5, s: 72, t: 25.6 },
      mamka: { kj: 1814, kcal: 433, p: 28.7, s: 45.7, t: 13.8 },
      originSyn: 'X',
      originMamka: 'X'
    }
  },
  {
    id: '22o',
    category: Category.OBED,
    title: 'Lehký salát',
    instructions: 'Těstoviny uvaříme v osolené vodě al dente a necháme vychladnout. Poté dáme do mísy, přidáme na kostičky nakrájené rajče, okurku a sýr. Osolíme, opepříme a promícháme s jogurtem. Zdobíme na kostičky nakrájeným vejcem a pažitkou.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'celozrnné těstoviny', syn: 94, mamka: 52, unit: 'g' },
      { name: 'rajčata', syn: 80, mamka: 80, unit: 'g', note: '1 ks' },
      { name: 'salátová okurka', syn: 100, mamka: 100, unit: 'g', note: '¼ ks' },
      { name: 'sýr eidam 30%', syn: 81, mamka: 45, unit: 'g', note: '3 plátky' },
      { name: 'bílý jogurt 3,5% tuku', syn: 90, mamka: 50, unit: 'g', note: '4 polévkové lžíce' },
      { name: 'vejce vařené natvrdo', syn: 81, mamka: 45, unit: 'g', note: '1 ks' },
      { name: 'pažitka', syn: 3, mamka: 3, unit: 'g', note: '1 čajová lžička' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3321, kcal: 794, p: 52.7, s: 77.2, t: 28.8 },
      mamka: { kj: 1845, kcal: 441, p: 29.3, s: 42.9, t: 16.0 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '23o',
    category: Category.OBED,
    title: 'Přírodní plátek s fazolkami a bramborovo-batátovou kaší',
    instructions: 'Brambory uvaříme spolu s batáty v osolené vodě doměkka a poté šťouchadlem rozmělníme na hustou kaši. Fazolky podusíme v páře nebo ve vodě do změknutí. Mezitím na druhé pánvi rozehřejeme olej, vložíme omytý a očištěný plátek masa, osolíme, opepříme a restujeme dozlatova. Hotové maso podáváme s fazolkami a kaší.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'kuřecí prsa s kůží a kostí', syn: 194, mamka: 108, unit: 'g' },
      { name: 'olivový olej', syn: 14, mamka: 8, unit: 'ml', note: '1 ½ čajové lžičky' },
      { name: 'mražené fazolky', syn: 200, mamka: 200, unit: 'g', note: '2 šálky' },
      { name: 'brambory', syn: 187, mamka: 104, unit: 'g', note: '1 ks' },
      { name: 'batáty', syn: 144, mamka: 80, unit: 'g', note: '¼ ks' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3208, kcal: 767, p: 52.0, s: 80.5, t: 25.6 },
      mamka: { kj: 1782, kcal: 426, p: 28.9, s: 44.7, t: 14.2 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '24o',
    category: Category.OBED,
    title: 'Lečo se šunkou a vejcem',
    instructions: 'Na pánvi rozehřejeme olej, přidáme nadrobno nakrájenou cibulku, poté na nudličky nakrájenou šunku a na kostičky nakrájenou zeleninu. Přikryjeme pokličkou a dusíme. Nakonec zalijeme vajíčkem, promícháme, osolíme a opepříme dle chuti. Podáváme s chlebem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'krůtí šunka', syn: 155, mamka: 86, unit: 'g', note: '7 plátků' },
      { name: 'slepičí vejce', syn: 90, mamka: 50, unit: 'g', note: '1 ks' },
      { name: 'cibule', syn: 43, mamka: 43, unit: 'g', note: '½ ks' },
      { name: 'žlutá paprika', syn: 80, mamka: 80, unit: 'g', note: '½ ks' },
      { name: 'rajčata', syn: 136, mamka: 136, unit: 'g', note: '1 ½ ks' },
      { name: 'řepkový olej', syn: 13, mamka: 7, unit: 'ml', note: '1 ½ čajové lžičky' },
      { name: 'žitný chléb', syn: 121, mamka: 67, unit: 'g', note: '1 ½ krajíce' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3267, kcal: 781, p: 52.7, s: 82.3, t: 25.2 },
      mamka: { kj: 1815, kcal: 434, p: 29.3, s: 45.7, t: 14.0 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '25o',
    category: Category.OBED,
    title: 'Čočka s vejcem a dušenou zeleninou',
    instructions: 'Čočku propláchneme pod tekoucí vodou a namočíme jí přes noc. Druhý den vodu slijeme a v nové vodě uvaříme doměkka. Cibuli oloupeme, nakrájíme na kostičky a orestujeme na tuku. Přidáme čočku, dochutíme solí, pepřem, česnekem a libečkem. Brokolici rozdělíme na růžičky a připravíme na páře. Dochutíme solí. Vejce uvaříme natvrdo. Na talíř naservírujeme čočku, brokolici a přidáme rozkrojené vejce.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'slepičí vejce', syn: 95, mamka: 53, unit: 'g', note: '1 ks' },
      { name: 'hnědá čočka (v suchém stavu)', syn: 104, mamka: 58, unit: 'g', note: '7 ½ polévkové lžíce' },
      { name: 'brokolice', syn: 136, mamka: 136, unit: 'g', note: '¼ ks' },
      { name: 'cibule', syn: 50, mamka: 50, unit: 'g', note: '⅔ ks' },
      { name: 'olivový olej', syn: 13, mamka: 7, unit: 'ml', note: '1 ½ čajové lžičky' },
      { name: 'česnek', syn: 5, mamka: 5, unit: 'g', note: '1 ks' },
      { name: 'libeček', syn: 3, mamka: 3, unit: 'g' },
      { name: 'sůl', syn: 2, mamka: 2, unit: 'g' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3217, kcal: 769, p: 52.4, s: 78.7, t: 25.4 },
      mamka: { kj: 1760, kcal: 421, p: 27.7, s: 43.5, t: 13.1 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '26o',
    category: Category.OBED,
    title: 'Pečené kuře s červeným zelím a bramborami',
    instructions: 'Zelí nakrájíme na nudličky. Kuřecí stehno vložíme do pekáčku společně se zelím, lehce podlijeme vodou, přiklopíme víkem a dáme péct do trouby vyhřáté na 170 °C. Pečeme tak dlouho, dokud maso nezezlátne. Podáváme s bramborami vařenými ve slupce pokapanými přepuštěným máslem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'kuřecí stehenní řízek bez kosti a kůže', syn: 234, mamka: 130, unit: 'g' },
      { name: 'červené zelí hlávkové', syn: 250, mamka: 250, unit: 'g', note: '2 ½ šálku' },
      { name: 'brambory vařené se slupkou', syn: 360, mamka: 200, unit: 'g', note: '2 ks' },
      { name: 'ghí', syn: 9, mamka: 5, unit: 'g', note: '½ čajové lžičky' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'kmín', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3290, kcal: 787, p: 54.0, s: 75.4, t: 27.9 },
      mamka: { kj: 1828, kcal: 437, p: 30.0, s: 41.9, t: 15.5 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '27o',
    category: Category.OBED,
    title: 'Těstoviny zapečené s brokolicí a sýrem',
    instructions: 'Těstoviny uvaříme podle návodu na obalu. Brokolici rozebranou na růžičky vhodíme do osolené vroucí vody a krátce povaříme na skus. Sýr nastrouháme. Uvařené těstoviny promícháme s brokolicí, kořením a polovinou strouhaného sýra. Přendáme do vymazané zapékací mísy. Rozšleháme vejce se zbylým sýrem a přelijeme na těstovinovou směs. Pečeme v předehřáté troubě na 180 °C cca 20 minut.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'celozrnné špagety (syrové)', syn: 112, mamka: 62, unit: 'g' },
      { name: 'brokolice', syn: 118, mamka: 118, unit: 'g', note: '¼ ks' },
      { name: 'mozzarella light', syn: 104, mamka: 58, unit: 'g', note: '½ ks' },
      { name: 'slepičí vejce', syn: 61, mamka: 34, unit: 'g', note: '1 ks' },
      { name: 'olivový olej', syn: 5, mamka: 3, unit: 'g', note: '½ čajové lžičky' },
      { name: 'muškátový oříšek', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3236, kcal: 774, p: 50.2, s: 79.4, t: 25.4 },
      mamka: { kj: 1798, kcal: 430, p: 27.9, s: 44.1, t: 14.1 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '28o',
    category: Category.OBED,
    title: 'Guláš s těstovinami',
    instructions: 'Na rozehřátém tuku v pánvi orestujeme na kostičky nakrájenou cibulku. Přidáme omyté, osušené a na kostičky nakrájené maso, které necháme zatáhnout, ochutíme kořením a solí. Směs podlijeme horkou vodou a dusíme doměkka. Těstoviny uvaříme dle návodu na obale a podáváme jako přílohu ke guláši.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'semolinové těstoviny bezvaječné', syn: 101, mamka: 56, unit: 'g' },
      { name: 'krůtí stehenní řízek bez kosti a kůže', syn: 218, mamka: 121, unit: 'g' },
      { name: 'ghí', syn: 9, mamka: 5, unit: 'g', note: '½ čajové lžičky' },
      { name: 'cibule', syn: 50, mamka: 50, unit: 'g', note: '⅔ ks' },
      { name: 'mletá sladká paprika', syn: 3, mamka: 3, unit: 'g', note: '1 čajová lžička' },
      { name: 'majoránka', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3157, kcal: 754, p: 52.2, s: 83.0, t: 26.6 },
      mamka: { kj: 1754, kcal: 419, p: 29.0, s: 46.1, t: 14.8 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: '29o',
    category: Category.OBED,
    title: 'Losos s dušeným špenátem, brambory',
    instructions: 'Plátek lososa osolíme, opepříme a zakapeme citronovou šťávou. Cibuli a česnek oloupeme a nakrájíme na jemné kostičky, přidáme dušený špenát, promícháme a necháme prohřát. V pánvi na oleji propečeme lososa z obou stran a podáváme s vařeným bramborem.',
    favorites:"", 
    printed:"",   
    ingredients: [
      { name: 'losos filet bez kůže', syn: 171, mamka: 95, unit: 'g' },
      { name: 'dušený špenát', syn: 160, mamka: 160, unit: 'g', note: '1 ½ šálku' },
      { name: 'olivový olej', syn: 11, mamka: 6, unit: 'ml', note: '1 čajová lžička' },
      { name: 'brambory vařené se slupkou', syn: 360, mamka: 200, unit: 'g', note: '2 ks' },
      { name: 'šalotka', syn: 15, mamka: 15, unit: 'g', note: '½ ks' },
      { name: 'česnek', syn: 20, mamka: 20, unit: 'g', note: '4 ks' },
      { name: 'citronová šťáva', syn: 10, mamka: 10, unit: 'ml', note: '1 ½ čajové lžičky' },
      { name: 'sůl', syn: 1, mamka: 1, unit: 'špetka' },
      { name: 'černý pepř', syn: 1, mamka: 1, unit: 'špetka' }
    ],
    nutrition: {
      syn: { kj: 3236, kcal: 774, p: 52.7, s: 83.2, t: 25.6 },
      mamka: { kj: 1798, kcal: 430, p: 29.3, s: 46.2, t: 14.2 },
      originSyn: '',
      originMamka: 'X'
    }
  },
  {
    id: "30o",
    category: Category.OBED,
    title: "Tortilla s prsíčky a zeleninou",
    instructions: "Nejprve omyjeme a osušíme maso. Nakrájíme ho na malé kostičky a krátce restujeme na teflonové pánvi. Připravíme si dresink smícháním všech ingrediencí v misce. Zeleninu očistíme a nakrájíme na tenké proužky. Tortillu potřeme dresinkem, přidáme maso, zeleninu a zatočíme.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "krůtí prsa bez k.k.", syn: 140, mamka: 77, unit: "g" },
      { name: "špaldové tortilly", syn: 109, mamka: 60, unit: "g", note: "2 ks / 1 ks" },
      { name: "mrkve", syn: 70, mamka: 39, unit: "g", note: "¾ ks / ¾ ks" },
      { name: "salátové okurky", syn: 70, mamka: 39, unit: "g", note: "¼ ks / ¼ ks" },
      { name: "jogurtu 3,5%", syn: 77, mamka: 42, unit: "g", note: "6 pol.lžíce / 3 pol.lžíce" },
      { name: "olivového extra panenského oleje", syn: 13, mamka: 7.2, unit: "ml", note: "1 pol.lžíce / 0.6 pol.lžíce" },
      { name: "kopr", syn: 3, mamka: 1.7, unit: "g", note: "1 čaj.lžíce / 1 čaj.lžíce" },
      { name: "plnotučná hořtice", syn: 8, mamka: 4.4, unit: "g", note: "1 čaj.lžíce / 1 čaj.lžíce" },
      { name: "špetka černého pepře a soli", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2998, kcal: 717, p: 48.9, s: 66.7, t: 26.3 },
      mamka: { kj: 1649, kcal: 394, p: 26.9, s: 36.7, t: 14.5 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "31o",
    category: Category.OBED,
    title: "Drůbeží maso na kari s rýží",
    instructions: "Cibuli a pórek pokrájíme a necháme zpěnit na oleji. Jakmile pomalu chytá barvu, přidáme koření a na kostky pokrájené a osolené drůbeží maso. Opékáme dozlatova. Po chvíli přidáme vodu a necháme dusit. Nakonec můžeme dochutit smetanou. Rýži uvaříme dle návodu a podáváme s masovou směsí.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "kuřecí prso bez k.", syn: 183, mamka: 98, unit: "g" },
      { name: "řepkový olej", syn: 20, mamka: 10, unit: "ml", note: "1.5 pol.lžíce / 0.8 pol.lžíce" },
      { name: "cibule", syn: 60, mamka: 60, unit: "g", note: "1 ks / 1 ks" },
      { name: "smetany na vaření s 10% tuku", syn: 35, mamka: 18, unit: "g" },
      { name: "pórku", syn: 47, mamka: 40, unit: "g" },
      { name: "basmati rýže", syn: 89, mamka: 49, unit: "g", note: "7.5 pol.lžíce / 4.5 pol.lžíce" },
      { name: "špetka kary, soli a pepře", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 3205, kcal: 766, p: 52.2, s: 76.2, t: 26.9 },
      mamka: { kj: 1774, kcal: 424, p: 28.8, s: 44.0, t: 14.0 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "32o",
    category: Category.OBED,
    title: "Lečo se šunkou a vejcem",
    instructions: "Na pánvi rozehřejeme olej, přidáme nadrobno nakrájenou cibulku, poté na nudličky nakrájenou šunku a na kostičky nakrájenou zeleninu. Přikryjeme pokličkou a dusíme. Nakonec zalijeme vajíčkem, promícháme, osolíme a opepříme dle chuti. Podáváme s chlebem.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "krutí šunka", syn: 150, mamka: 86, unit: "g" },
      { name: "žluté papriky", syn: 90, mamka: 50, unit: "g", note: "1 ks / 1 ks" },
      { name: "rajče", syn: 50, mamka: 43, unit: "g" },
      { name: "slepičí vejce", syn: 80, mamka: 80, unit: "g" },
      { name: "cibule", syn: 136, mamka: 136, unit: "g" },
      { name: "řepkový olej", syn: 12, mamka: 7, unit: "ml" },
      { name: "žitný chléb", syn: 120, mamka: 67, unit: "g" },
      { name: "špetka soli a černého pepře", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 3176, kcal: 760, p: 51.3, s: 80.0, t: 24.5 },
      mamka: { kj: 1815, kcal: 434, p: 29.3, s: 45.7, t: 14.0 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "33o",
    category: Category.OBED,
    title: "Cuketa s mletým masem a rýží",
    instructions: "Cuketu nakrájíme na větší kostičky a restujeme na cibulce na oleji. Mleté maso nasucho orestujeme na teflonové pánvi. Poté vmícháme do cuketové směsi a rozmícháme s trochou protlaku. Osolíme, opepříme a přidáme bylinky. Podáváme s rýží uvařenou podle návodu na obalu.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "hovězí mleté maso", syn: 165, mamka: 94, unit: "g" },
      { name: "cuketa", syn: 140, mamka: 80, unit: "g" },
      { name: "rýže loupaná", syn: 60, mamka: 34, unit: "g" },
      { name: "cibule", syn: 44, mamka: 25, unit: "g" },
      { name: "olivový olej", syn: 11, mamka: 6, unit: "ml", note: "1.5 čaj.lžíce / 1 čaj.lžíce" },
      { name: "rajčatový protlak", syn: 79, mamka: 45, unit: "g" },
      { name: "petrželová nať", syn: 11, mamka: 6, unit: "g", note: "1.5 čaj.lžíce / 1 čaj.lžíce" },
      { name: "špetka soli a černého pepře", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 3126, kcal: 747, p: 50.4, s: 78.6, t: 24.5 },
      mamka: { kj: 1786, kcal: 427, p: 28.8, s: 44.9, t: 14.0 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "34o",
    category: Category.OBED,
    title: "Pečené kuře s červeným zelím a bramborami",
    instructions: "Zelí nakrájíme na nudličky. Kuřecí stehno vložíme do pekáčku společně se zelím, lehce podlijeme vodou, přiklopíme víkem a dáme péct do trouby vyhřáté na 170 °C. Pečeme tak dlouho, dokud maso nezezlátne. Podáváme s bramborami vařenými ve slupce pokapanými přepuštěným máslem.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "kuřecí stehno horní bez kosti a kůže", syn: 208, mamka: 130, unit: "g" },
      { name: "červeného hlávkového zelí", syn: 200, mamka: 150, unit: "g" },
      { name: "vařené brambory ve slupce", syn: 200, mamka: 150, unit: "g" },
      { name: "ghí máslo", syn: 8, mamka: 5, unit: "g" },
      { name: "špetka kmínu, soli a pepře", syn: 1, mamka: 1, unit: "šp" }
    ],
    nutrition: {
      syn: { kj: 2925, kcal: 699, p: 48.0, s: 67.0, t: 24.8 },
      mamka: { kj: 1828, kcal: 437, p: 30.0, s: 41.9, t: 15.5 },
      originSyn: "X",
      originMamka: "X"
    }
  },
  {
    id: "35o",
    category: Category.OBED,
    title: "Boloňská omáčka s rýžovými nudlemi",
    instructions: "Na tuku orestujeme dozlatova nadrobno nasekanou cibuli. Přidáme utřený česnek, zeleninu a po chvilce pomleté maso. Chvíli restujeme a poté vmícháme rajčatové pyré a dochutíme kořením. Podáváme s uvařenými rýžovými nudlemi, posypané strouhaným sýrem a s oblohou z čerstvé zeleniny.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "olivový olej", syn: 10, mamka: 6, unit: "g", note: "¾ polévkové lžíce" },
      { name: "hovězí maso", syn: 143, mamka: 79, unit: "g" },
      { name: "cibule", syn: 20, mamka: 17, unit: "g", note: "¼ ks" },
      { name: "česnek", syn: 20, mamka: 20, unit: "g", note: "4 stroužky" },
      { name: "rajčatový protlak", syn: 25, mamka: 21, unit: "g", note: "1 ½ polévkové lžíce" },
      { name: "římský kmín", syn: 1, mamka: 1, unit: "šp" },
      { name: "sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "šp" },
      { name: "sýr eidam 30%", syn: 20, mamka: 11, unit: "g", note: "1 ½ plátku" },
      { name: "mrkev", syn: 50, mamka: 42, unit: "g", note: "½ ks" },
      { name: "řapíkatý celer", syn: 49, mamka: 41, unit: "g", note: "¼ ks" },
      { name: "rýžové nudle", syn: 51, mamka: 28, unit: "g" },
      { name: "ledový salát", syn: 46, mamka: 38, unit: "g" },
      { name: "salátová okurka", syn: 36, mamka: 30, unit: "g", note: "¼ ks" }
    ],
    nutrition: {
      syn: { kj: 2792, kcal: 667, p: 48.7, s: 58.1, t: 25.3 },
      mamka: { kj: 1504, kcal: 360, p: 26.3, s: 31.3, t: 13.7 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "36o",
    category: Category.OBED,
    title: "Ryba s cherry rajčátky a bylinkovým olejem nebo s pestem",
    instructions: "Těstoviny uvaříme podle návodu na obalu. Rybu opláchneme a osušíme. Filet osolíme, opepříme, pokapeme citronovou šťávou a obalíme v mouce. Na pánvi zahřejeme polovinu oleje a osmahneme cca 6 minut z každé strany dozlatova. Přendáme stranou a udržujeme v teple. Na pánvi zahřejeme zbylý olej a přidáme nasekané bylinky (popřípadě ve stejném poměru Medvědí pesto). Po 2 minutách přidáme rajčátka a dusíme 5 minut, osolíme a opepříme. Rybu podáváme s rajčátky, bylinkovým olejem, těstovinami a salátem.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "duhový pstruh", syn: 175, mamka: 97, unit: "g" },
      { name: "citrón", syn: 30, mamka: 25, unit: "g", note: "¼ ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "černý pepř", syn: 1, mamka: 1, unit: "šp" },
      { name: "pohanková mouka", syn: 20, mamka: 11, unit: "g", note: "1 ½ polévkové lžíce" },
      { name: "olivový olej", syn: 6, mamka: 3, unit: "ml", note: "1 čajová lžička", alternatives: "lze nahradit medvedím pestem 12/9g" },
      { name: "šalvěj", syn: 3, mamka: 3, unit: "g", note: "½ čajové lžičky", alternatives: "v případě náhrady pestem, nepřidávat" },
      { name: "čerstvý tymián", syn: 3, mamka: 3, unit: "g", note: "½ čajové lžičky", alternatives: "v případě náhrady pestem, nepřidávat" },
      { name: "cherry rajčata", syn: 50, mamka: 42, unit: "g", note: "5 ks" },
      { name: "římský salát", syn: 126, mamka: 105, unit: "g", note: "1/3 ks" },
      { name: "syrové celozrnné špagety", syn: 78, mamka: 43, unit: "g" }
    ],
    nutrition: {
      syn: { kj: 3071, kcal: 734, p: 47.6, s: 73.4, t: 26.2 },
      mamka: { kj: 1655, kcal: 396, p: 25.6, s: 39.6, t: 14.2 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "37o",
    category: Category.OBED,
    title: "Těstoviny s drůbežím masem a bylinkovou omáčkou",
    instructions: "Maso nakrájené na kousky vložíme do zapékací mísy, osolíme a posypeme nastrouhanou mozzarellou. Pečeme v troubě předehřáté na 180 °C dozlatova. Těstoviny uvaříme podle návodu na obalu. Na pánvi smícháme všechny ingredience na omáčku a krátce prohřejeme. Maso podáváme s těstovinami přelité omáčkou.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "syrové celozrnné špagety", syn: 102, mamka: 57, unit: "g" },
      { name: "kuřecí horní stehno bez kosti a kůže", syn: 140, mamka: 78, unit: "g" },
      { name: "mozzarella light", syn: 43, mamka: 24, unit: "g", note: "1/3 ks" },
      { name: "sůl", syn: 1, mamka: 1, unit: "šp" },
      { name: "smetana na vaření 10%", syn: 50, mamka: 28, unit: "g" },
      { name: "rozmarýn", syn: 4, mamka: 3, unit: "g", alternatives: "nebo jiné bylinky jako kopr 4/4g" },
      { name: "čerstvá citronová šťáva", syn: 10, mamka: 8, unit: "g", note: "1 ½ čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 2880, kcal: 688, p: 48.2, s: 70.7, t: 22.5 },
      mamka: { kj: 1600, kcal: 382, p: 26.8, s: 39.3, t: 12.5 },
      originSyn: 'X',
      originMamka: ''
    }
  },
  {
    id: "38o",
    category: Category.OBED,
    title: "Dýňová polévka s marinovaným tofu",
    instructions: "Dýni omyjeme a nakrájíme na 1,5 cm velké kostky. V hrnci na rozpáleném oleji pár minut orestujeme na kostičky nakrájenou cibulku. Poté přidáme dýni, sůl, pepř a koření na svíčkovou, zamícháme a podlijeme vodou tak, aby zelenina byla akorát ponořená. Dýni takto necháme přibližně 20 minut vařit. Poté přidáme marinované tofu pokrájené na kostičky a necháme 10 minut odstát na plotně. Polévku poté rozmixujeme, zjemníme mlékem, dochutíme citrónovou šťávou a znovu vrátíme na plotnu a ještě 5 minut prohřejeme. Hotovou polévku servírujeme posypanou čerstvými nasekanými bylinkami. (K obědu podáváme pro větší nasycení s žitným chlebem).",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "dýně", syn: 360, mamka: 200, unit: "g", note: "1/4 ks" },
      { name: "tofu", syn: 241, mamka: 134, unit: "g", note: "2/3 ks" },
      { name: "olivový olej", syn: 5, mamka: 3, unit: "ml", note: "1/2 čajové lžičky" },
      { name: "cibule šalotka", syn: 24, mamka: 20, unit: "g", note: "2/3 ks" },
      { name: "polotučné mléko", syn: 200, mamka: 111, unit: "ml", note: "2/3 šálku" },
      { name: "nové koření", syn: 2, mamka: 1, unit: "šp" },
      { name: "bobkový list", syn: 2, mamka: 1, unit: "šp" },
      { name: "černý pepř", syn: 2, mamka: 1, unit: "šp" },
      { name: "medvědí česnek", syn: 20, mamka: 17, unit: "g" },
      { name: "žitný chléb", syn: 77, mamka: 43, unit: "g", note: "1 krajíček" },
      { name: "čerstvá citronová šťáva", syn: 12, mamka: 10, unit: "ml", note: "1 1/2 čajové lžičky" }
    ],
    nutrition: {
      syn: { kj: 3330, kcal: 796, p: 52, s: 81, t: 29 },
      mamka: { kj: 1850, kcal: 442, p: 29, s: 45, t: 16 },
      originSyn: "",
      originMamka: "X"
    }
	},
	{
	  id: "39o",
	  category: Category.OBED,
	  title: "Rýžový Nákyp s Meruňkami a Tvarohem",
	  instructions: "Rýži uvaříme dle návodu. Bílky vyšleháme s polovinou množství cukru. Meruňky nakrájíme na kousky. Následně v míse smícháme uvařenou rýži se žloutkem, meruňkami a zbylým cukrem. Poté jemně vmícháme ušlehaný sníh. Hotovou směs dáme do máslem vymazané zapékací misky a pečeme na 150 °C přibližně 45 minut dozlatova. Podáváme s tvarohem smíchaným s proteinem a polité zbylým rozpuštěným máslem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "rýže arborio", syn:  56, mamka:  31, unit:  "g", note:  "" },
		{ name:  "vaječný bílek", syn:  60, mamka:  33, unit:  "g", note:  "2 ks / cca 1 ks" },
		{ name:  "slepičí vejce", syn:  62, mamka:  34, unit:  "g", note:  "1 ks" },
		{ name:  "třtinový cukr", syn:  12, mamka:  7, unit:  "g", note:  "1 polévková lžíce" },
		{ name:  "meruňky", syn:  146, mamka:  122, unit:  "g", note:  "5 ks" },
		{ name:  "máslo", syn:  15, mamka:  8, unit:  "g", note:  "1 polévková lžíce" },
		{ name:  "polotučný tvaroh", syn:  95, mamka:  53, unit:  "g", note:  "4 polévkové lžíce" },
		{ name:  "syrovátkový protein", syn:  19, mamka:  11, unit:  "g", note:  "" }
	  ],
	  nutrition: {
		syn: { kj:  3030, kcal:  724, p:  47, s:  77, t:  24 },
		mamka: { kj:  1683, kcal:  402, p:  26, s:  43, t:  13 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "40o",
	  category: Category.OBED,
	  title: "Krůtí Stripsy a Zeleninový Salát",
	  instructions: "Maso nakrájíme na kousky, osolíme a obalíme ve vajíčku a v mouce s kořením. Stripsy rozložíme na plech vyložený pečicím papírem, pokapeme částí oleje a pečeme ve vyhřáté troubě přibližně 20 minut. Mezitím zeleninu nakrájíme na kousky a pokapeme zbylým olejem. Stripsy podáváme se salátem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "krůtí prsa bez kosti a bez kůže", syn:  133, mamka:  74, unit:  "g" },
		{ name:  "kukuřičná mouka", syn:  100, mamka:  56, unit:  "g" },
		{ name:  "mletá sladká paprika", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "slepičí vejce", syn:  83, mamka:  46, unit:  "g", note:  "1 ½ ks / cca 1 ks" },
		{ name:  "ledový salát", syn:  130, mamka:  108, unit:  "g" },
		{ name:  "řepkový olej", syn:  13, mamka:  7, unit:  "ml", note:  "1 polévková lžíce" },
		{ name:  "ředkvičky", syn:  50, mamka:  42, unit:  "g", note:  "3 ½ ks / 3 ks" }
	  ],
	  nutrition: {
		syn: { kj:  3180, kcal:  760, p:  51, s:  75, t:  26 },
		mamka: { kj:  1767, kcal:  422, p:  28.3, s:  41.7, t:  14.4 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "41o",
	  category: Category.OBED,
	  title: "Vepřová panenka s lilkem a pohankou",
	  instructions: "Lilek omyjeme, osušíme a nakrájíme na kostky. Ty pak nasucho upečeme v troubě doměkka. Pohanku uvaříme dle návodu na obalu. Panenku očistíme, nakrájíme na medailonky a opečeme na rozpáleném oleji doměkka a těsně před koncem přidáme pečený lilek, semínka a jen lehce promícháme. Na závěr jídlo podle chuti osolíme a opepříme a podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "vepřová panenka", syn:  171, mamka:  95, unit:  "g" },
		{ name:  "lilek", syn:  250, mamka:  208, unit:  "g", note:  "1/2 ks" },
		{ name:  "řepkový olej", syn:  4, mamka:  2, unit:  "ml", note:  "3/4 čajové lžičky" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "slunečnicová semínka", syn:  5, mamka:  3, unit:  "g", note:  "3/4 čajové lžičky" },
		{ name:  "pohanka", syn:  100, mamka:  56, unit:  "g" }
	  ],
	  nutrition: {
		syn: { kj:  3083, kcal:  737, p:  50, s:  71, t:  25 },
		mamka: { kj:  1713, kcal:  409, p:  27.8, s:  39.4, t:  13.9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "42o",
	  category: Category.OBED,
	  title: "Masový Závitek",
	  instructions: "Maso naklepeme, aby vznikl tenký plátek. Očištěnou zeleninu nakrájíme na nudličky stejně jako šunku. Na plátek masa položíme šunku, zeleninu a zavineme. Sepneme párátkem a na sucho opečeme. Podlijeme horkou vodou, přidáme kari, sůl a dusíme doměkka. Měkké závitky vyjmeme a odstraníme párátka. V malém množství vody rozmícháme mouku a nalijeme do šťávy a necháme v ní prohřát závitky. Nakonec do omáčky dáme studené máslo. Podáváme spolu s přílohou uvařenou podle návodu na obalu.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "hovězí maso", syn:  131, mamka:  100, unit:  "g" },
		{ name:  "mrkev", syn:  52, mamka:  40, unit:  "g", note:  "½ ks / ⅓ ks" },
		{ name:  "kořen petržele", syn:  39, mamka:  30, unit:  "g" },
		{ name:  "kuřecí šunka", syn:  26, mamka:  20, unit:  "g" },
		{ name:  "kari koření", syn:  3, mamka:  3, unit:  "g", note:  "1 čajová lžička" },
		{ name:  "celozrnná špaldová mouka", syn:  20, mamka:  12, unit:  "g", note:  "1 ½ polévkové lžíce / ¾ polévkové lžíce" },
		{ name:  "máslo", syn:  17, mamka:  8, unit:  "g", note:  "1 polévková lžíce / 1 čajová lžička" },
		{ name:  "basmati rýže", syn:  67, mamka:  37, unit:  "g", note:  "5 ½ polévkové lžíce / 3 polévkové lžíce" }
	  ],
	  nutrition: {
		syn: { kj:  3056, kcal:  730, p:  47, s:  73, t:  26 },
		mamka: { kj:  1930, kcal:  461, p:  34, s:  43, t:  16 },
		originSyn: "X",
		originMamka: "X"
	  }
	},
	{
	  id: "43o",
	  category: Category.OBED,
	  title: "Hovězí Steak s Grilovanou Paprikou",
	  instructions: "Maso vyndáme z lednice a necháme několik minut odpočinout v pokojové teplotě. Poté ho mírně osolíme a opepříme, vložíme na grilovací pánev a na troše oleje grilujeme z obou stran dozlatova. Přendáme na talíř a na pánev vložíme omyté a přepůlené papriky. Když jsou hotové, přidáme k masu, ozdobíme rukolou a podáváme s pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "libové hovězí roštěnce bez kosti", syn:  158, mamka:  88, unit:  "g" },
		{ name:  "rukola", syn:  70, mamka:  58, unit:  "g" },
		{ name:  "červená paprika", syn:  200, mamka:  167, unit:  "g", note:  "1 1/2 ks / 1 1/4 ks" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "olivový olej", syn:  17, mamka:  9, unit:  "ml", note:  "1 1/2 polévkové lžíce / 3/4 polévkové lžíce" },
		{ name:  "žitný dalamánek", syn:  118, mamka:  66, unit:  "g", note:  "1 1/2 ks / 1 ks" }
	  ],
	  nutrition: {
		syn: { kj:  3148, kcal:  752, p:  51, s:  72, t:  26 },
		mamka: { kj:  1749, kcal:  418, p:  28.3, s:  40, t:  14.4 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "44o",
	  category: Category.OBED,
	  title: "Těstoviny s masem a omáčkou z balkánského sýru",
	  instructions: "Těstoviny uvaříme dle návodu na obalu. Na pánvi necháme rozpustit máslo, přidáme nadrobno nakrájený balkánský sýr, na plátky nakrájený česnek, sůl a mléko. Počkáme, dokud se kostičky balkánského sýru nerozpustí a omáčka není hladká. Na druhé pánvi si na rozpáleném oleji orestujeme na kostičky nakrájené kuřecí maso. Do těstovin vmícháme hotové maso a přelijeme hotovou omáčkou.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "celozrnné těstoviny", syn:  105, mamka:  58, unit:  "g" },
		{ name:  "balkánský sýr,  50 % t. v s.", syn:  38, mamka:  21, unit:  "g" },
		{ name:  "polotučné mléko", syn:  109, mamka:  61, unit:  "ml", note:  "2/3 šálku" },
		{ name:  "česnek", syn:  5, mamka:  4, unit:  "g", note:  "1 stroužek" },
		{ name:  "máslo", syn:  8, mamka:  4, unit:  "g", note:  "1 čajová lžička" },
		{ name:  "kuřecí prsa bez kůže", syn:  112, mamka:  62, unit:  "g" },
		{ name:  "řepkový olej", syn:  5, mamka:  3, unit:  "ml", note:  "1 čajová lžička" }
	  ],
	  nutrition: {
		syn: { kj:  3152, kcal:  753, p:  51, s:  77, t:  25 },
		mamka: { kj:  1751, kcal:  418, p:  28.3, s:  42.8, t:  13.9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "45o",
	  category: Category.OBED,
	  title: "Drůbeží Maso s Bramborovo-dýňovým Pyré",
	  instructions: "Drůbeží maso omyjeme, osolíme, opepříme podle chuti a orestujeme na oleji. Brambory a dýni oloupeme, nakrájíme na kostičky a dáme vařit v osolené vodě. Když jsou uvařené, slijeme, přidáme máslo, sůl, mléko a připravíme mixérem pyré. Ozdobíme petrželkou. Ihned podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "brambory", syn:  270, mamka:  150, unit:  "g", note:  "1 1/2 ks pro mamku", alternatives:  "" },
		{ name:  "kuřecí prsa bez kůže", syn:  144, mamka:  80, unit:  "g", note:  "", alternatives:  "" },
		{ name:  "olivový olej", syn:  13, mamka:  7, unit:  "ml", note:  "1 1/2 čajové lžičky pro mamku", alternatives:  "" },
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp", note:  "", alternatives:  "" },
		{ name:  "dýně", syn:  107, mamka:  89, unit:  "g", note:  "1/4 ks pro mamku", alternatives:  "" },
		{ name:  "máslo", syn:  9, mamka:  5, unit:  "g", note:  "2/3 čajové lžičky pro mamku", alternatives:  "" },
		{ name:  "polotučné mléko", syn:  270, mamka:  150, unit:  "ml", note:  "1 šálek pro mamku", alternatives:  "" },
		{ name:  "petrželka", syn:  18, mamka:  15, unit:  "g", note:  "3/4 svazku pro mamku", alternatives:  "" }
	  ],
	  nutrition: {
		syn: { kj:  2986, kcal:  713, p:  50.4, s:  68.4, t:  27 },
		mamka: { kj:  1659, kcal:  396, p:  28, s:  38, t:  15 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "46o",
	  category: Category.OBED,
	  title: "Čočkovo-mrkvové karbanátky s cuketou a semínky",
	  instructions: "Čočku uvaříme podle návodu. Mezitím si nastrouháme očištěnou zeleninu. Osolíme, opepříme, přidáme vejce, uvařenou čočku, semínka a mouku. Restujeme na olivovém oleji dozlatova.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "červená čočka", syn:  118, mamka:  66, unit:  "g", note:  "" },
		{ name:  "olivový olej", syn:  8, mamka:  4, unit:  "ml", note:  "1 1/2 čajové lžičky / cca 3/4 lžičky" },
		{ name:  "mrkev", syn:  144, mamka:  120, unit:  "g", note:  "1 1/2 ks / 1 1/4 ks" },
		{ name:  "cuketa", syn:  144, mamka:  120, unit:  "g", note:  "1/2 ks / cca 2/5 ks" },
		{ name:  "konopná semínka", syn:  8, mamka:  4, unit:  "g", note:  "1 1/2 čajové lžičky / cca 3/4 lžičky" },
		{ name:  "slepičí vejce", syn:  98, mamka:  54, unit:  "g", note:  "2 ks / 1 ks" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp", note:  "" },
		{ name:  "ovesná mouka", syn:  19, mamka:  11, unit:  "g", note:  "" }
	  ],
	  nutrition: {
		syn: { kj:  3221, kcal:  770, p:  48, s:  71, t:  25 },
		mamka: { kj:  1789, kcal:  428, p:  26.7, s:  39.4, t:  13.9 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "47o",
	  category: Category.OBED,
	  title: "Vepřová Panenka s Chřestem a Rýží",
	  instructions: "Rýži uvaříme dle návodu na obalu. Panenku očistíme, nakrájíme na medailonky a opečeme na rozpáleném oleji doměkka. Těsně před koncem přidáme omytý a osušený chřest. Na závěr jídlo podle chuti osolíme a opepříme a podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "vepřová panenka", syn:  200, mamka:  111, unit:  "g", note:  "" },
		{ name:  "jasmínová rýže", syn:  91, mamka:  51, unit:  "g", note:  "7 1/2 polévkové lžíce" },
		{ name:  "bílý chřest", syn:  200, mamka:  167, unit:  "g", note:  "18 ks" },
		{ name:  "řepkový olej", syn:  6, mamka:  3, unit:  "ml", note:  "1 čajová lžička" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp", note:  "" }
	  ],
	  nutrition: {
		syn: { kj:  3148, kcal:  752, p:  49, s:  79, t:  26 },
		mamka: { kj:  1749, kcal:  418, p:  27.2, s:  43.9, t:  14.4 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "48o",
	  category: Category.OBED,
	  title: "Losos s Bramborami a Dušenou Mrkví na Tymiánu",
	  instructions: "Filet lososa osolíme, potřeme částí olivovým olejem a pečeme v troubě na pečicím papíře přibližně 12 minut na 200 °C. Mrkev nakrájíme na malé kousky a pozvolna orestujeme na zbylém olivovém oleji, přidáme cukr, necháme zkaramelizovat, ochutíme tymiánem, zakápneme vodou a krátce podusíme. Podáváme s vařenými bramborami.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "filet z atlantického lososa bez kůže", syn:  178, mamka:  99, unit:  "g" },
		{ name:  "brambory", syn:  360, mamka:  200, unit:  "g", note:  "cca 2 3/4 ks / 1 1/2 ks" },
		{ name:  "mrkev", syn:  96, mamka:  80, unit:  "g", note:  "cca 1 1/4 ks / 1 ks" },
		{ name:  "extra panenský olivový olej", syn:  14, mamka:  8, unit:  "ml", note:  "cca 2 3/4 lžičky / 1 1/2 lžičky" },
		{ name:  "třtinový cukr", syn:  5, mamka:  3, unit:  "g", note:  "cca 1 1/4 lžičky / 3/4 lžičky" },
		{ name:  "čerstvý tymián", syn:  4, mamka:  3, unit:  "g", note:  "cca 1/2 lžičky" }
	  ],
	  nutrition: {
		syn: { kj:  3242, kcal:  776, p:  49, s:  74, t:  29 },
		mamka: { kj:  1801, kcal:  431, p:  27, s:  41, t:  16 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "49o",
	  category: Category.OBED,
	  title: "Těstoviny s tuňákem a zelenými fazolkami",
	  instructions: "Těstoviny uvaříme podle návodu na obalu. Tuňáka společně s fazolkami prohřejeme na pánvi s rozpáleným olejem a promícháme s vařenými těstovinami. Dochutíme solí a pepřem a podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "špaldové těstoviny", syn:  102, mamka:  57, unit:  "g" },
		{ name:  "tuňák ve vlastní šťávě", syn:  130, mamka:  72, unit:  "g" },
		{ name:  "zelené fazolky", syn:  121, mamka:  101, unit:  "g" },
		{ name:  "olivový olej", syn:  24, mamka:  13, unit:  "ml", note:  "2 polévkové lžíce / 1 polévková lžíce" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" }
	  ],
	  nutrition: {
		syn: { kj:  3079, kcal:  736, p:  47, s:  70, t:  27 },
		mamka: { kj:  1711, kcal:  409, p:  26.1, s:  38.9, t:  15 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "50o",
	  category: Category.OBED,
	  title: "Rajčatová polévka se špenátem",
	  instructions: "Na oleji zpěníme cibulku, přidáme sterilovaná rajčata a chvilku povaříme. Dochutíme solí, pepřem a česnekem. Poté do polévky přilijeme zeleninový vývar a vaříme asi 15min. Polévku rozmixujeme do hladkého krému a nakonec přidáme nasekané listy čerstvého baby špenátu, nakrájenou mozzarellu a ozdobíme petrželkou. Podáváme s pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "sterilovaná,  loupaná,  krájená rajčata", syn:  300, mamka:  250, unit:  "g" },
		{ name:  "cibule", syn:  64, mamka:  53, unit:  "g", note:  "3/4 ks" },
		{ name:  "baby špenát", syn:  72, mamka:  60, unit:  "g" },
		{ name:  "olivový olej", syn:  5, mamka:  3, unit:  "ml", note:  "1/2 čajové lžičky" },
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp" },
		{ name:  "petrželka", syn:  12, mamka:  10, unit:  "g", note:  "1/2 svazku" },
		{ name:  "mozzarella light", syn:  124, mamka:  69, unit:  "g", note:  "2/3 ks" },
		{ name:  "celozrnný chléb", syn:  90, mamka:  50, unit:  "g", note:  "1 krajíc" },
		{ name:  "zeleninový vývar", syn:  240, mamka:  200, unit:  "ml", note:  "1 1/2 šálku" },
		{ name:  "česnek", syn:  6, mamka:  5, unit:  "g", note:  "1 stroužek" }
	  ],
	  nutrition: {
		syn: { kj:  3107, kcal:  743, p:  45, s:  75.6, t:  25.2 },
		mamka: { kj:  1726, kcal:  413, p:  25, s:  42, t:  14 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "51o",
	  category: Category.OBED,
	  title: "Brambory zapečené se šmakounem a salát s ananasem",
	  instructions: "Šmakouna nakrájíme na kostičky, smícháme s uvařenými bramborami a zeleninou. Směs solíme, opepříme, zakápneme olejem, dobře promícháme a pečeme v zapékací misce v troubě dozlatova. Podáváme se salátem a na kostičky nakrájeným ananasem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "brambory", syn:  313, mamka:  174, unit:  "g", note:  "2 ¾ ks / 1 ½ ks" },
		{ name:  "šmakoun", syn:  274, mamka:  152, unit:  "g", note:  "2 ¾ ks / 1 ½ ks" },
		{ name:  "květák", syn:  120, mamka:  100, unit:  "g", note:  "1/3 ks / 1/4 ks" },
		{ name:  "olivový olej", syn:  23, mamka:  13, unit:  "ml", note:  "1 ¾ polévkové lžíce / 1 polévková lžíce" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "ledový salát", syn:  161, mamka:  134, unit:  "g" },
		{ name:  "čerstvý ananas", syn:  139, mamka:  77, unit:  "g", note:  "2 ¾ plátku / 1 ½ plátku" }
	  ],
	  nutrition: {
		syn: { kj:  3117, kcal:  745, p:  52, s:  78, t:  25 },
		mamka: { kj:  1825, kcal:  436, p:  29, s:  45, t:  14 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "52o",
	  category: Category.OBED,
	  title: "Batátové Hranolky s Tofu a Zeleninou",
	  instructions: "Batáty nakrájíme na hranolky, poklademe na pečící papír a vložíme do trouby. Pečeme zhruba 50 min na 180 °C nebo do zezlátnutí. Na rozpáleném oleji usmažíme nakrájené tofu nakrájené na kostičky. Podáváme s dušenou brokolicí, kukuřicí, rajčaty a hotovými batáty.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "batáty (sladké brambory)", syn:  209, mamka:  116, unit:  "g", note:  "1/4 ks" },
		{ name:  "olivový olej", syn:  11, mamka:  6, unit:  "ml", note:  "1 čajová lžička" },
		{ name:  "tofu", syn:  196, mamka:  109, unit:  "g", note:  "1/2 ks" },
		{ name:  "dušená brokolice", syn:  360, mamka:  300, unit:  "g", note:  "1/2 ks" },
		{ name:  "sterilovaná cukrová kukuřice", syn:  36, mamka:  20, unit:  "g" },
		{ name:  "rajčata", syn:  36, mamka:  30, unit:  "g", note:  "1/3 ks" }
	  ],
	  nutrition: {
		syn: { kj:  3314, kcal:  792, p:  49, s:  86, t:  29 },
		mamka: { kj:  1841, kcal:  440, p:  27, s:  48, t:  16 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "53o",
	  category: Category.OBED,
	  title: "Červená Čočka s Paprikou a Vajíčkem",
	  instructions: "Červenou čočku propláchneme. Cibuli nakrájíme na drobno a osmažíme na oleji. Papriku nakrájíme na kostičky a přidáme k cibulce a orestujeme. Pak přidáme čočku a vodu. Osolíme a vaříme cca 10 minut než čočka změkne a lehce se rozvaří. Mezitím si vejce uvaříme natvrdo. Na talíři posypeme čočku drobně nakrájeným pórkem a podáváme vejci.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "červená čočka", syn:  136, mamka:  76, unit:  "g", note:  "" },
		{ name:  "cibule", syn:  40, mamka:  33, unit:  "g", note:  "1/2 ks" },
		{ name:  "červená paprika", syn:  100, mamka:  83, unit:  "g", note:  "2/3 ks" },
		{ name:  "pórek", syn:  20, mamka:  17, unit:  "g", note:  "" },
		{ name:  "olivový olej", syn:  13, mamka:  7, unit:  "ml", note:  "1 polévková lžíce" },
		{ name:  "slepičí vejce", syn:  93, mamka:  52, unit:  "g", note:  "1 1/2 ks" }
	  ],
	  nutrition: {
		syn: { kj:  3047, kcal:  728, p:  47, s:  64, t:  24 },
		mamka: { kj:  1693, kcal:  404, p:  26.1, s:  35.6, t:  13.3 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "54o",
	  category: Category.OBED,
	  title: "Kuře na Paprice s Rýží",
	  instructions: "Kuřecí maso očistíme, osolíme, opepříme a zprudka opečeme na části oleje. Na zbylém oleji orestujeme jemně nakrájenou cibuli, přidáme sladkou papriku, krátce orestujeme a zalijeme vodou. Osolíme, opepříme, vložíme opečené maso a dusíme doměkka. Poté maso vyndáme a omáčku zahustíme moukou rozmíchanou ve smetaně. Povaříme alespoň 20 minut a rozmixujeme tyčovým mixérem. Rýži připravíme podle návodu na obalu. Na talíř servírujeme kuře na paprice s vařenou rýží a nakrájenou zeleninou.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "kuřecí prsa bez kůže", syn:  175, mamka:  97, unit:  "g", note:  "" },
		{ name:  "cibule", syn:  28, mamka:  23, unit:  "g", note:  "1/3 ks / 1/4 ks" },
		{ name:  "slunečnicový olej", syn:  14, mamka:  8, unit:  "ml", note:  "" },
		{ name:  "mletá sladká paprika", syn:  7, mamka:  4, unit:  "g", note:  "2 1/2 lžičky / 1 1/2 lžičky" },
		{ name:  "celozrnná špaldová mouka", syn:  18, mamka:  10, unit:  "g", note:  "1 1/4 lžíce / 2/3 lžíce" },
		{ name:  "smetana 12%", syn:  45, mamka:  25, unit:  "ml", note:  "3 lžíce / 1 1/2 lžíce" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp", note:  "" },
		{ name:  "basmati rýže", syn:  86, mamka:  48, unit:  "g", note:  "7 lžic / 4 lžíce" },
		{ name:  "zelená paprika", syn:  41, mamka:  34, unit:  "g", note:  "1/3 ks / 1/4 ks" }
	  ],
	  nutrition: {
		syn: { kj:  3368, kcal:  805, p:  54, s:  88, t:  25 },
		mamka: { kj:  1871, kcal:  447, p:  30, s:  49, t:  14 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "55o",
	  category: Category.OBED,
	  title: "Čočka s Červenou Řepou a Feta Sýrem",
	  instructions: "Čočku uvaříme dle návodu na obalu. Po uvaření ji dáme do misky. Přidáme nastrouhanou uvařenou řepu, rozdrobený feta sýr a bylinky na dochucení. Poté vše dobře promícháme a můžeme podávat. Také můžeme podávat i variantu za studena.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "červená čočka", syn:  128, mamka:  71, unit:  "g" },
		{ name:  "červená řepa", syn:  185, mamka:  154, unit:  "g", note:  "2 ks / 1 ½ ks" },
		{ name:  "sýr feta", syn:  92, mamka:  51, unit:  "g" },
		{ name:  "petrželová nať", syn:  6, mamka:  5, unit:  "g", note:  "60 špetek / 50 špetek" }
	  ],
	  nutrition: {
		syn: { kj:  3220, kcal:  769, p:  50, s:  77, t:  23 },
		mamka: { kj:  1789, kcal:  427, p:  28, s:  43, t:  13 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "56o",
	  category: Category.OBED,
	  title: "Masové Placičky, Pečená Mrkev s Bramborem",
	  instructions: "Mleté maso osolíme, opepříme a přidáme prolisovaný česnek a část provensálských bylinek. Zamícháme a vytvarujeme placičky, které dáme na pečící papír na plech. Brambory oloupeme a nakrájíme na měsíčky. Mrkev očistíme a nakrájíme na proužky. Brambory i mrkev dáme také na plech na pečící papír, oboje posypeme druhou částí provensálských bylinek, solí, vše zakápneme olejem. Vše pečeme v troubě na 180 stupňů, cca 20-30 minut. Po upečení servírujeme na talíř a podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "hovězí maso", syn:  153, mamka:  85, unit:  "g" },
		{ name:  "česnek", syn:  6, mamka:  5, unit:  "g", note:  "1 stroužek" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "provensálské bylinky", syn:  6, mamka:  5, unit:  "g", note:  "1 ½ čajové lžičky" },
		{ name:  "mrkev", syn:  240, mamka:  200, unit:  "g", note:  "2 ks" },
		{ name:  "olivový olej", syn:  11, mamka:  6, unit:  "ml", note:  "1 čajová lžička" },
		{ name:  "brambory", syn:  247, mamka:  137, unit:  "g", note:  "1 ks" }
	  ],
	  nutrition: {
		syn: { kj:  2732, kcal:  653, p:  49, s:  58, t:  25 },
		mamka: { kj:  1627, kcal:  389, p:  27, s:  37, t:  14 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "57o",
	  category: Category.OBED,
	  title: "Pečené papriky plněné mletým masem, jáhly",
	  instructions: "Cibulku zpěníme na tuku ve větší pánvi. Přidáme mleté maso a orestujeme spolu s prolisovaným česnekem, solí a pepřem. Vrch papriky ukrojíme, vydlabeme semínka a naplníme směsí z masa. Vložíme do pekáčku a zalijeme asi 2 cm vodou. Pečeme v troubě předehřáté na 200°C asi 20 minut. Jáhly připravíme dle návodu na obale. Zeleninovou omáčku připravíme z krájených rajčat, která podusíme ve vodě, osolíme a opepříme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "libové hovězí plece bez kosti", syn:  142, mamka:  100, unit:  "g" },
		{ name:  "červené papriky", syn:  180, mamka:  130, unit:  "g", note:  "1 ks" },
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp" },
		{ name:  "cibule", syn:  29, mamka:  20, unit:  "g", note:  "1/3 ks / 1/4 ks" },
		{ name:  "česnek", syn:  5, mamka:  5, unit:  "g", note:  "1 stroužek" },
		{ name:  "olivový olej", syn:  21, mamka:  9, unit:  "ml", note:  "2 polévkové lžíce / 3/4 polévkové lžíce" },
		{ name:  "cherry rajčata", syn:  250, mamka:  151, unit:  "g", note:  "1 balíček / 1/2 balíček" },
		{ name:  "jáhly", syn:  67, mamka:  47, unit:  "g", note:  "4 1/2 polévkové lžíce / 3 polévkové lžíce" }
	  ],
	  nutrition: {
		syn: { kj:  3043, kcal:  727, p:  44, s:  69, t:  28 },
		mamka: { kj:  1913, kcal:  457, p:  31, s:  48, t:  14 },
		originSyn: "X",
		originMamka: "X"
	  }
	},
	{
	  id: "o58",
	  category: Category.OBED,
	  title: "Těstoviny s lososem a krémovým tomatovým špenátem",
	  instructions: "Těstoviny uvaříme podle návodu na obalu. Rybu osolíme, opepříme a pokapeme citronovou šťávou. Na pánvi zahřejeme olej a rybu opečeme a dáme stranou. Na stejné pánvi krátce restujeme protlak, přidáme smetanu, špenát a sůl a dusíme, dokud špenát výrazně nezmenší svůj objem. Nakonec směs promícháme s uvařenými těstovinami a natrhanou rybou a podáváme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "syrové celozrnné špagety", syn:  99, mamka:  55, unit:  "g" },
		{ name:  "filet z atlantického lososa bez kůže", syn:  126, mamka:  70, unit:  "g" },
		{ name:  "rajčatový protlak", syn:  20, mamka:  11, unit:  "g", note:  "1 polévková lžíce" },
		{ name:  "listový špenát", syn:  120, mamka:  100, unit:  "g", note:  "6 hrstí" },
		{ name:  "smetana 12%", syn:  25, mamka:  14, unit:  "ml", note:  "1 ½ polévkové lžíce" },
		{ name:  "čerstvá citronová šťáva", syn:  7, mamka:  6, unit:  "ml", note:  "1 čajová lžička" },
		{ name:  "olivový olej", syn:  14, mamka:  8, unit:  "ml", note:  "1 polévková lžíce" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" }
	  ],
	  nutrition: {
		syn: { kj:  3144, kcal:  751, p:  45, s:  72, t:  29 },
		mamka: { kj:  1747, kcal:  417, p:  25, s:  40, t:  16 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "59o",
	  category: Category.OBED,
	  title: "Maso Stroganov s rýží",
	  instructions: "Mleté krůtí maso restujeme na pánvi s cibulkou na rozehřátém oleji, okořeníme, přidáme sýr se smetanou a podusíme doměkka. Mezitím uvaříme rýži podle návodu a podáváme jako přílohu.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "krůtí maso", syn:  162, mamka:  90, unit:  "g", note:  "mleté" },
		{ name:  "cibule", syn:  36, mamka:  30, unit:  "g", note:  "1/3 ks" },
		{ name:  "řepkový olej", syn:  9, mamka:  5, unit:  "ml", note:  "1 čajová lžička" },
		{ name:  "balkánský sýr", syn:  36, mamka:  20, unit:  "g", note:  "50 % t. v s." },
		{ name:  "smetana 12%", syn:  36, mamka:  20, unit:  "ml", note:  "1 1/2 polévkové lžíce" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "basmati rýže", syn:  95, mamka:  53, unit:  "g", note:  "4 1/2 polévkové lžíce" }
	  ],
	  nutrition: {
		syn: { kj:  3307, kcal:  790, p:  54, s:  79, t:  27 },
		mamka: { kj:  1837, kcal:  439, p:  30, s:  44, t:  15 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "60o",
	  category: Category.OBED,
	  title: "Hovězí steak s bramborami a červenou řepou",
	  instructions: "Troubu rozpálíme na 200 °C. Brambory pořádně očistíme (nové se nemusí loupat) a nakrájíme na měsíčky, stejně jako převařenou červenou řepu. Oboje promícháme s částí oleje a vložíme na plech vyložený pečicím papírem a přibližně 30 minut pečeme. Mezitím si na zbytku oleje z obou stran opečeme maso. Vše pak až na talíři podle chuti osolíme a opepříme.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "hovězí maso", syn:  162, mamka:  90, unit:  "g", note:  "" },
		{ name:  "brambory", syn:  360, mamka:  200, unit:  "g", note:  "1 ½ ks pro mamku" },
		{ name:  "červená řepa", syn:  132, mamka:  110, unit:  "g", note:  "1 ks pro mamku" },
		{ name:  "řepkový olej", syn:  13, mamka:  7, unit:  "ml", note:  "1 ½ čajové lžičky pro mamku" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp", note:  "" }
	  ],
	  nutrition: {
		syn: { kj:  3105, kcal:  742, p:  50.4, s:  77.4, t:  27 },
		mamka: { kj:  1725, kcal:  412, p:  28, s:  43, t:  15 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "61o",
	  category: Category.OBED,
	  title: "Gulášová Polévka",
	  instructions: "Cibulku nakrájíme najemno a opečeme na ghí. Přidáme na kostky nakrájené hovězí maso, orestujeme, zaprášíme mletou paprikou a zalijeme vodou. Do hrnce přidáme nakrájenou mrkev, pórek, petržel, bulvový celer a na kostičky nakrájené brambory. Vaříme do změkčení všech surovin. Před koncem vaření dochutíme prolisovaným česnekem, majoránkou a pepřem. Polévku zahustíme lahůdkovým droždím a podáváme s plátkem celozrnného chleba.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "cibule", syn:  50, mamka:  42, unit:  "g", note:  "2/3 ks / 1/2 ks" },
		{ name:  "ghí", syn:  10, mamka:  6, unit:  "g", note:  "1 čajová lžička" },
		{ name:  "hovězí maso", syn:  103, mamka:  57, unit:  "g" },
		{ name:  "mrkev", syn:  40, mamka:  33, unit:  "g", note:  "1/3 ks" },
		{ name:  "pórek", syn:  40, mamka:  33, unit:  "g", note:  "1/4 ks" },
		{ name:  "petržel", syn:  33, mamka:  28, unit:  "g", note:  "1 1/2 svazku" },
		{ name:  "bulvový celer", syn:  33, mamka:  28, unit:  "g" },
		{ name:  "brambory", syn:  120, mamka:  67, unit:  "g", note:  "1 ks" },
		{ name:  "mletá sladká paprika", syn:  2, mamka:  2, unit:  "g", note:  "2/3 čajové lžičky" },
		{ name:  "sušená majoránka", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "česnek", syn:  5, mamka:  4, unit:  "g", note:  "1 stroužek" },
		{ name:  "lahůdkové droždí", syn:  21, mamka:  12, unit:  "g", note:  "3 1/2 polévkové lžíce" },
		{ name:  "celozrnný chléb", syn:  77, mamka:  43, unit:  "g", note:  "1 1/2 krajíce / 1 krajíc" }
	  ],
	  nutrition: {
		syn: { kj:  2945, kcal:  704, p:  50, s:  65, t:  23 },
		mamka: { kj:  1636, kcal:  391, p:  27.8, s:  36.1, t:  12.8 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "62o",
	  category: Category.OBED,
	  title: "Kuře na Kari se Zázvorem a Čočkou",
	  instructions: "Rýži uvaříme dle návodu na obale. Kuřecí maso omyjeme, osolíme, opepříme a orestujeme s cibulkou na troše oleje dozlatova. Poté podlijeme vodou, přidáme kari, zázvor a červenou čočku. Dusíme doměkka. Podáváme s rýží.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "kuřecích prsou bez kůže", syn:  138, mamka:  77, unit:  "g", note:  "" },
		{ name:  "cibule", syn:  30, mamka:  25, unit:  "g", note:  "1/3 ks / cca 1/4 ks" },
		{ name:  "sušeného mletého zázvoru", syn:  1, mamka:  1, unit:  "šp", note:  "" },
		{ name:  "černého pepře", syn:  1, mamka:  1, unit:  "šp", note:  "" },
		{ name:  "červené čočky", syn:  70, mamka:  39, unit:  "g", note:  "" },
		{ name:  "olivového oleje", syn:  23, mamka:  13, unit:  "ml", note:  "2 polévkové lžíce / 1 polévková lžíce" },
		{ name:  "kari koření", syn:  1, mamka:  1, unit:  "šp", note:  "" },
		{ name:  "basmati rýže", syn:  68, mamka:  38, unit:  "g", note:  "5 1/2 polévkové lžíce / 3 polévkové lžíce" }
	  ],
	  nutrition: {
		syn: { kj:  3447, kcal:  824, p:  55, s:  82, t:  26 },
		mamka: { kj:  1915, kcal:  458, p:  30.6, s:  45.6, t:  14.4 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "63o",
	  category: Category.OBED,
	  title: "Maso s Paprikami a Sýrem, Rýže",
	  instructions: "Rýži uvaříme podle návodu na obalu. Maso naklepeme, osolíme a na oleji zprudka opečeme. Vložíme do pekáčku, na maso položíme papriku, okolo něj pórek, lehce podlijeme a dáme péci. Před koncem pečení dáme na maso sýr a dozlatova dopečeme. Podáváme s vařenou rýží.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "hovězí maso", syn:  107, mamka:  59, unit:  "g" },
		{ name:  "řepkový olej", syn:  11, mamka:  6, unit:  "ml", note:  "3/4 polévkové lžíce / 1/2 polévkové lžíce" },
		{ name:  "zelená paprika", syn:  103, mamka:  86, unit:  "g", note:  "2/3 ks / 1/2 ks" },
		{ name:  "pórek", syn:  150, mamka:  125, unit:  "g", note:  "1/4 ks / 1/5 ks" },
		{ name:  "plátkový sýr 30%", syn:  43, mamka:  24, unit:  "g", note:  "2 1/2 plátku / 1 1/2 plátku" },
		{ name:  "basmati rýže", syn:  83, mamka:  46, unit:  "g", note:  "7 polévkových lžic / 4 polévkové lžíce" }
	  ],
	  nutrition: {
		syn: { kj:  3215, kcal:  769, p:  50, s:  76, t:  29 },
		mamka: { kj:  1786, kcal:  427, p:  27.8, s:  42.2, t:  16.1 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "64o",
	  category: Category.OBED,
	  title: "Drůbeží nugety pečené v troubě se zeleninovými hranolkami",
	  instructions: "Maso osolíme a obalíme v našlehaném bílku. Následně obalíme v mouce a pečeme v předehřáté troubě cca 15-20 minut. Pečeme společně s na hranolky nakrájenou zeleninou, česnekem a podáváme jako přílohu.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "krůtí maso", syn:  132, mamka:  73, unit:  "g" },
		{ name:  "vaječný bílek", syn:  76, mamka:  42, unit:  "g", note:  "2 ½ ks / 1 ½ ks" },
		{ name:  "mandlová mouka", syn:  43, mamka:  24, unit:  "g" },
		{ name:  "mletá sladká paprika", syn:  3, mamka:  2, unit:  "g", note:  "1 čajová lžička" },
		{ name:  "batáty (sladké brambory)", syn:  200, mamka:  167, unit:  "g", note:  "½ ks" },
		{ name:  "česnek", syn:  44, mamka:  37, unit:  "g", note:  "⅔ ks / ½ ks" }
	  ],
	  nutrition: {
		syn: { kj:  2905, kcal:  694, p:  53, s:  63, t:  28 },
		mamka: { kj:  1740, kcal:  416, p:  29, s:  39, t:  16 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "65o",
	  category: Category.OBED,
	  title: "Špenátový Krém se Šunkou",
	  instructions: "Na oleji orestujeme na kostičky nakrájenou cibulku a přidáme nakrájenou šunku a špenát. Osolíme a prolisujeme česnek. Zalijeme vývarem a 15 min vaříme. Poté rozmixujeme a podáváme s pečivem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "listový špenát", syn:  130, mamka:  108, unit:  "g", note:  "5 ½ hrsti" },
		{ name:  "cibule", syn:  72, mamka:  60, unit:  "g", note:  "1 ks" },
		{ name:  "olivový olej", syn:  13, mamka:  7, unit:  "ml", note:  "1 ½ čajové lžičky" },
		{ name:  "vepřová šunka", syn:  142, mamka:  79, unit:  "g" },
		{ name:  "zeleninový vývar", syn:  240, mamka:  200, unit:  "ml", note:  "1 ½ šálku" },
		{ name:  "celozrnný chléb", syn:  99, mamka:  55, unit:  "g", note:  "1 krajíc" },
		{ name:  "česnek", syn:  24, mamka:  20, unit:  "g", note:  "4 stroužky" }
	  ],
	  nutrition: {
		syn: { kj:  3013, kcal:  720, p:  49, s:  72, t:  23 },
		mamka: { kj:  1674, kcal:  400, p:  27, s:  40, t:  13 },
		originSyn: "",
		originMamka: "X"
	  }
	},
	{
	  id: "66o",
	  category: Category.OBED,
	  title: "Pikantní stripsy se zeleninovým salátem",
	  instructions: "Maso nakrájíme na kousky, osolíme a obalíme ve vajíčku a v mouce s kořením. Orestujeme na pánvi, nebo pečeme v troubě cca 20 minut na pečícím papíru. Podáváme s pečivem a salátem.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "krůtí prsa bez kosti a bez kůže", syn:  148, mamka:  82, unit:  "g" },
		{ name:  "kukuřičná mouka", syn:  65, mamka:  36, unit:  "g" },
		{ name:  "mletá sladká paprika", syn:  0, mamka:  0, unit:  "šp" },
		{ name:  "kmín", syn:  0, mamka:  0, unit:  "šp" },
		{ name:  "slepičí vejce", syn:  50, mamka:  28, unit:  "g", note:  "1 ks / ~0.5 ks" },
		{ name:  "ledový salát", syn:  150, mamka:  125, unit:  "g" },
		{ name:  "řepkový olej", syn:  17, mamka:  9, unit:  "ml", note:  "1 ½ polévkové lžíce / ~¾ polévkové lžíce" },
		{ name:  "celozrnný chléb", syn:  68, mamka:  38, unit:  "g", note:  "1 ½ krajíce / ~1 krajíc" }
	  ],
	  nutrition: {
		syn: { kj:  3340, kcal:  798, p:  55, s:  75, t:  29 },
		mamka: { kj:  1856, kcal:  443, p:  31, s:  42, t:  16 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "67o",
	  category: Category.OBED,
	  title: "Boloňské celozrnné špagety s hovězím masem",
	  instructions: "Na tuku orestujeme dozlatova nadrobno nasekanou cibuli. Přidáme utřený česnek a hrubě pomleté maso. Chvíli restujeme a poté vmícháme rozkrájená rajčata a dochutíme kořením. Podáváme s těstovinami, uvařenými al dente a ozdobíme lístky čerstvé bazalky.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "olivový olej", syn:  13, mamka:  7, unit:  "ml", note:  "1 polévková lžíce" },
		{ name:  "hovězí maso", syn:  146, mamka:  81, unit:  "g" },
		{ name:  "cibule", syn:  20, mamka:  17, unit:  "g", note:  "1/4 ks" },
		{ name:  "česnek", syn:  10, mamka:  8, unit:  "g", note:  "2 stroužky" },
		{ name:  "sterilovaná rajčata", syn:  166, mamka:  138, unit:  "g", note:  "loupaná,  krájená" },
		{ name:  "sušená bazalka", syn:  3, mamka:  3, unit:  "g", note:  "30 špetek" },
		{ name:  "oregano", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "černý pepř", syn:  1, mamka:  1, unit:  "šp" },
		{ name:  "syrové celozrnné špagety", syn:  111, mamka:  62, unit:  "g" }
	  ],
	  nutrition: {
		syn: { kj:  3396, kcal:  812, p:  54, s:  83, t:  27 },
		mamka: { kj:  1887, kcal:  451, p:  30, s:  46, t:  15 },
		originSyn: "X",
		originMamka: ""
	  }
	},
	{
	  id: "68o",
	  category: Category.OBED,
	  title: "Krůtí Kuličky s Rajčatovou Omáčkou a Rýží",
	  instructions: "Mleté maso smícháme v míse se soli, pepřem, kmínem a s polovinou najemno nasekané bazalky. Čistýma rukama prohněteme a ze směsi tvarujeme stejně velké kuličky. Ty dáme péct přibližně na 30 minut do trouby vyhřáté na 180°C. Rýži uvaříme dle návodu na obalu. Rajčatovou passatu dáme do hrnce, přidáme i zbylou nasekanou bazalku, osolíme a opepříme a necháme ještě chvíli prohřát. Nakonec přidáme olivový olej a cukr na dochucení. Krůtí kuličky podáváme s rýží a rajčatovou omáčkou.",
	  favorites: "",
	  printed: "",
	  ingredients: [
		{ name:  "krůtí maso", syn:  180, mamka:  100, unit:  "g" },
		{ name:  "bazalka", syn:  5, mamka:  4, unit:  "g" },
		{ name:  "kmín", syn:  0, mamka:  0, unit:  "šp" },
		{ name:  "basmati rýže", syn:  86, mamka:  48, unit:  "g", note:  "7 polévkových lžic / 4 polévkové lžíce" },
		{ name:  "rajčatový protlak", syn:  100, mamka:  83, unit:  "g", note:  "5 polévkových lžic / 4 polévkové lžíce" },
		{ name:  "olivový olej", syn:  14, mamka:  8, unit:  "ml", note:  "1 polévková lžíce / 0, 5 polévkové lžíce" },
		{ name:  "černý pepř", syn:  0, mamka:  0, unit:  "šp" }
	  ],
	  nutrition: {
		syn: { kj:  3192, kcal:  763, p:  51, s:  87, t:  22 },
		mamka: { kj:  1773, kcal:  424, p:  28, s:  48, t:  12 },
		originSyn: "X",
		originMamka: ""
	  }
	}
];
