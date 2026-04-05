import { Category, Recipe } from "../types";
import { recipesImages } from "./recipesImages";

const recipeImages: Record<string, string> = {
  ...recipesImages
};

export const recipesO: Recipe[] = [
  // ✅ Zkontrolováno.
  // ✅ 1o — SYN+MAMKA v xlsx → originSyn:'X', originMamka:'X' — vše OK
  {
    id: "1o",
    category: Category.OBED,
    title: "Drůbeží maso na kari s rýží",
    image: recipeImages["1o"],
    instructions: "Cibuli a pórek pokrájíme a necháme zpěnit na oleji. Jakmile pomalu chytá barvu, přidáme kari koření a na kostky pokrájené a osolené drůbeží maso. Opékáme dozlatova. Po chvíli přidáme vodu a necháme dusit. Nakonec můžeme dochutit smetanou. Rýži uvaříme dle návodu a podáváme s masovou směsí.",
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
  // ✅ 2o — SYN v xlsx → originSyn:'X' — vše OK
  {
    id: '2o',
    category: Category.OBED,
    title: 'Těstoviny s kuřecím masem a špenátem',
    image: recipeImages['2o'],
    instructions: 'Těstoviny uvaříme dle návodu al dente. Cibuli nakrájíme najemno, česnek na plátky a oboje opékáme dozlatova na pánvi s rozpáleným olejem. Maso nakrájíme na malé kousky, přidáme do pánve a opečeme, aby se zatáhlo a začalo zlátnout. Poté přidáme špenát, ricottu, osolíme, opepříme a krátce vše podusíme. Podáváme s těstovinami.',
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
  // ✅ 3o — SYN v xlsx → originSyn:'X' — vše OK
  {
    id: '3o',
    category: Category.OBED,
    title: 'Tortilla s prsíčky a zeleninou',
    image: recipeImages['3o'],
    instructions: 'Nejprve omyjeme a osušíme maso. Nakrájíme ho na malé kostičky a krátce restujeme na teflonové pánvi. Připravíme si dresink smícháním všech ingrediencí v misce. Zeleninu očistíme a nakrájíme na tenké proužky. Tortillu potřeme dresinkem, přidáme maso, zeleninu a zatočíme.',
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
  // ✅ 4o — SYN v xlsx → originSyn:'X' — vše OK (mamka není v xlsx)
  {
    id: '4o',
    category: Category.OBED,
    title: 'Obložené restované drůbeží prsíčko s kuskusem',
    image: recipeImages['4o'],
    instructions: 'Kuskus připravíme podle návodu na obalu. Poté si osolíme očištěné maso a orestujeme ho na většině oleje. Mezitím nakrájíme na plátky rajče, mozzarellu a připravíme pár lístků bazalky. Jak bude maso z obou stran opečené, tak navrch položíme střídavě plátek rajčete, mozzarelly a lístek bazalky. Když se začne mozzarella zlehka rozpouštět, sejmeme maso z plotny. Kuskus ještě dochutíme olivovým olejem, špetkou soli a podáváme jako přílohu k masu.',
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
  // ✅ 5o — SYN v xlsx → originSyn:'X' — vše OK (mamka není v xlsx)
  {
    id: "5o",
    category: Category.OBED,
    title: "Grilovaný steak, dušená zelenina, rýže",
    image: recipeImages["5o"],
    instructions: "Maso omyjeme, osušíme a na chvilku necháme odležet potřené olejem se solí a pepřem. Poté maso ugrilujeme na grilu, popřípadě na grilovací pánvi. Zeleninu omyjeme, nakrájíme na menší kousky a dusíme na páře doměkka. Rýži uvaříme dle návodu. Na talíř servírujeme ugrilované maso spolu se zeleninou s máslem a uvařenou rýží.",
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
  // ⚠️ 6o — MAMKA v xlsx → OPRAVENO: přidána chybějící ingredience voda (mamka=70ml)
  {
    id: '6o',
    category: Category.OBED,
    title: 'Vepřové maso v mrkvi, doch. muškát. oříškem, vařený brambor',
    image: recipeImages['30o'],
    instructions: 'Mrkev očistíme a nakrájíme na kolečka. Na malé části másla orestujeme maso, které osolíme a opepříme, následně přidáme mrkev i zbytek másla, podlijeme trochou vody a dusíme do měkka, dochutíme strouhaným muškátovým oříškem a případně citrónovou šťávou. V mezičase si oškrábeme brambory, které uvaříme a podáváme jako přílohu k masu s mrkví.',
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
  // ✅ 7o — SYN v xlsx → originSyn:'X' — vše OK
  {
    id: '7o',
    category: Category.OBED,
    title: 'Čočkovo-mrkvové karbanátky s cuketou a semínky',
    image: recipeImages['7o'],
    instructions: 'Čočku uvaříme podle návodu. Mezitím si nastrouháme očištěnou zeleninu. Osolíme, opepříme, přidáme vejce, uvařenou čočku, semínka a mouku. Restujeme na olivovém oleji dozlatova.',
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
  // ✅ 8o — SYN v xlsx → originSyn:'X' — vše OK
  {
    id: '8o',
    category: Category.OBED,
    title: 'Drůbeží nudličky a těstoviny s rajčatovou omáčkou',
    image: recipeImages['8o'],
    instructions: 'Maso nakrájíme na nudličky, osolíme, opepříme a orestujeme v pánvi na zahřátém oleji. Přidáme nakrájená rajčata, protlak a podusíme 20 minut. Mezitím uvaříme těstoviny podle návodu na obalu, slijeme a promícháme se směsí na pánvi. Posypeme strouhaným sýrem a bazalkou.',
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
  // ✅ 9o — SYN v xlsx → originSyn:'X' — vše OK
  {
    id: '9o',
    category: Category.OBED,
    title: 'Vepřové na zelenině s rýží',
    image: recipeImages['9o'],
    instructions: 'Do hrnce naskládáme na kolečka nakrájenou cibuli. Maso nakrájíme na kostičky, osolíme, opepříme a dáme na cibuli. Papriku nakrájíme na proužky a položíme na maso. Následně nakrájíme rajčata na osminky a položíme na papriku. Osolíme, opepříme a pokapeme olejem. Hrnec přikryjeme pokličkou a vaříme asi 80 minut, dokud není maso měkké. Nepodléváme ani nemícháme. Mezitím uvaříme rýži podle návodu na obalu. Hotové jídlo podáváme s rýží.',
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
  // ✅ 10o — SYN v xlsx → originSyn:'X' — vše OK
  {
    id: '10o',
    category: Category.OBED,
    title: 'Svíčková omáčka, těstoviny',
    image: recipeImages['10o'],
    instructions: 'Mrkev, petržel a celer oškrábeme. Cibuli oloupeme. Jednu mrkev nakrájíme na špalíčky a vše ostatní na drobné kostičky. Maso očistíme od tuku a prošpikujeme špalíčky mrkve. Maso zprudka orestujeme na oleji ze všech stran. Dáme ho stranou a pak orestujeme kořenovou zeleninu. Do pekáče vložíme maso, zeleninu, osolíme, zalijeme vodou, vložíme sítko s kořením. Pečeme v troubě. Hotové maso vyndáme z pekáče, zeleninu rozmixujeme na pyré, zalijeme vývarem a společně krátce povaříme. Přidáme smetanu, dochutíme solí, pepřem, octem, citrónovou šťávou a ještě pár minut provaříme. Těstoviny uvaříme dle návodu a podáváme s omáčkou a masem.',
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
  // ⚠️ 11o — SYN v xlsx → OPRAVENO: nutrition syn + ingredience syn dle xlsx
  // xlsx: červené hlávkové zelí=200g, jablko=75g(½ks), kmín, kuřecí maso=192g, pohanka=78g, sůl
  {
    id: '11o',
    category: Category.OBED,
    title: 'Pečené kuře s jablečným zelím a pohankou',
    image: recipeImages['11o'],
    instructions: 'Zelí nakrájíme na nudličky, jablko nastrouháme nahrubo a vše společně s kuřecím stehnem vložíme do pekáčku. Lehce podlijeme vodou, osolíme, okmínujeme a dáme péct do trouby vyhřáté na 170 °C. Pečeme tak dlouho, dokud maso nezezlátne. Podáváme s uvařenou pohankou.',
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
  // ⚠️ 12o — SYN v xlsx → OPRAVENO: nutrition syn + ingredience syn dle xlsx
  // xlsx: Basmati rýže=98g(8 lžic), krůtí maso=179g, brokolice=80g(¼ks), olivový olej=15g(1½ lžíce), sůl
  {
    id: '12o',
    category: Category.OBED,
    title: 'Brokolice s drůbežím masem a rýží',
    image: recipeImages['12o'],
    instructions: 'Maso nakrájíme na nudličky, osolíme a orestujeme na oleji. Brokolici rozebereme na růžičky a uvaříme v páře doměkka. Rýži uvaříme dle návodu na obalu. Vše smícháme dohromady a podáváme.',
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
  // ⚠️ 13o — SYN v xlsx → OPRAVENO: nutrition syn + ingredience syn dle xlsx (odlišná struktura!)
  // xlsx: krůtí prsa=148g, kukuřičná mouka=65g, mletá sladká paprika, kmín, vejce=50g(1ks), ledový salát=150g, řepkový olej=17ml, celozrnný chléb=68g, sůl
  {
    id: '13o',
    category: Category.OBED,
    title: 'Pikantní stripsy se zeleninovým salátem',
    image: recipeImages['13o'],
    instructions: 'Maso nakrájíme na proužky, osolíme, opepříme a obalíme v kukuřičných lupíncích. Pečeme v troubě vyhřáté na 180 °C dozlatova. Mezitím si připravíme salát z nakrájené zeleniny, kterou dochutíme olivovým olejem a citronovou šťávou. Podáváme s uvařenými bramborami.',
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
  // ⚠️ 14o — SYN v xlsx → OPRAVENO: nutrition syn + ingredience syn dle xlsx (odlišná struktura!)
  // xlsx: vejce=56g(1ks), černá čočka Beluga=150g(3 hrsti), vepřová šunka=20g, cibule=20g(¼ks), ghí=15g(¾ lžíce), sůl, černý pepř
  {
    id: '14o',
    category: Category.OBED,
    title: 'Beluga čočka s vejcem a šunkou',
    image: recipeImages['14o'],
    instructions: 'Čočku uvaříme podle návodu na obalu. Vejce uvaříme natvrdo. Šunku nakrájíme na kostičky a orestujeme na pánvi na oleji. Poté vše smícháme dohromady, přidáme nakrájenou zeleninu a podáváme s pečivem.',
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
  // ⚠️ 15o — SYN v xlsx → OPRAVENO: nutrition syn + ingredience syn dle xlsx (odlišná struktura!)
  // xlsx: krůtí prsa=147g, špaldová tortilla=120g(2½ks), ledový salát=50g, sůl, černý pepř,
  //        bílý jogurt=80g(6 lžic), pažitka=4g(1½ lžičky), řepkový olej=11ml(¾ lžíce), červená paprika=150g(1ks)
  {
    id: '15o',
    category: Category.OBED,
    title: 'Tortilla s krůtím masem, jogurtem a salátem',
    image: recipeImages['15o'],
    instructions: 'Maso nakrájíme na nudličky, osolíme a orestujeme na pánvi na oleji. Tortillu nahřejeme, potřeme jogurtem, poklademe nakrájenou zeleninou a masem. Zabalíme a podáváme.',
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
  // ✅ 16o — NENALEZENO v xlsx → beze změny
  {
    id: '16o',
    category: Category.OBED,
    title: 'Tortilla s kuřecím masem, zeleninou a dipem',
    image: recipeImages['16o'],
    instructions: 'Maso nakrájíme na nudličky, osolíme a orestujeme na pánvi na oleji. Tortillu nahřejeme, potřeme jogurtem, poklademe nakrájenou zeleninou a masem. Zabalíme a podáváme.',
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
  // ✅ 17o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '17o',
    category: Category.OBED,
    title: 'Cuketa s mletým masem a rýží',
    image: recipeImages['17o'],
    instructions: 'Cuketu nakrájíme na větší kostičky a restujeme na cibulce na oleji. Mleté maso nasucho orestujeme na teflonové pánvi. Poté vmícháme do cuketové směsi a rozmícháme s trochou protlaku. Osolíme, opepříme a přidáme bylinky. Podáváme s rýží uvařenou podle návodu na obalu.',
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
  // ✅ 18o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '18o',
    category: Category.OBED,
    title: 'Pórková polévka s vejcem',
    image: recipeImages['18o'],
    instructions: 'Pórek omyjeme, nakrájíme na nudličky a orestujeme na oleji. Po chvilce přidáme vývar a chvilku povaříme, popřípadě dochutíme solí. Nakonec přidáme rozšlehané vejce. Podáváme s pečivem.',
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
  // ✅ 19o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '19o',
    category: Category.OBED,
    title: 'Čína z drůbežího masa se zeleninou a rýží',
    image: recipeImages['19o'],
    instructions: 'Rýži propláchneme a uvaříme v osolené vodě dle návodu na obalu. Maso nakrájíme na kostičky, osolíme a opepříme a orestujeme na oleji dozlatova. Pak maso vyndáme do misky a na té samé pánvi orestujeme zeleninu tak, aby zůstala ještě trochu křupavá. Zeleninu smícháme s masem a sojovou omáčkou and podáváme spolu s vařenou rýží.',
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
  // ⚠️ 20o — MAMKA v xlsx → OPRAVENO: nutrition mamka + ingredience mamka dle xlsx
  // Změny: kj/kcal/t/s/p, olivový olej mamka 6→3, mozzarella mamka 61→69,
  //        zeleninový vývar mamka 144→200, žitný chléb→celozrnný chléb mamka 33→50,
  //        přidána ingredience petrželka (mamka=10g)
  {
    id: '20o',
    category: Category.OBED,
    title: 'Rajčatová polévka se špenátem',
    image: recipeImages['20o'],
    instructions: 'Na oleji zpěníme cibulku, přidáme sterilovaná rajčata a chvilku povaříme. Dochutíme solí, pepřem a česnekem. Poté do polévky přilijeme zeleninový vývar a vaříme asi 15min. Polévku rozmixujeme do hladkého krému a nakonec přidáme nasekané listy čerstvého baby špenátu, nakrájenou mozzarellu a ozdobíme petrželkou. Podáváme s pečivem.',
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
  // ⚠️ 21o — SYN+MAMKA v xlsx → OPRAVENO: nutrition syn + ingredience syn dle xlsx
  // Změny syn: kj 3265→3055, kcal 779→730, p 51.7→48.5, s 82.3→72, t 24.8→25.6
  // Ingredience syn: kuřecí 148→144, olivový olej 13→15(1½ lžíce), těstoviny 110→100,
  //                  zakysaná smetana 58→47, okurka 30→64(¼ks), rajčata 46→30(⅓ks)
  {
    id: '21o',
    category: Category.OBED,
    title: 'Těstovinový salát s grilovaným kuřetem',
    image: recipeImages['21o'],
    instructions: 'Těstoviny uvaříme podle návodu na obalu a scedíme. Do mísy dáme zakysanou smetanu a na malé kostičky nakrájenou zeleninu. Poté přidáme i těstoviny, dobře promícháme a případně dochutíme solí a pepřem. Maso omyjeme a osušíme. V grilovací pánvi rozpálíme olej a z obou stran na něm maso opečeme doměkka a aby bylo celé propečené. Poté jej také můžeme dochutit a podáváme spolu s vlažným těstovinovým salátem.',
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
  // ✅ 22o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '22o',
    category: Category.OBED,
    title: 'Lehký salát',
    image: recipeImages['22o'],
    instructions: 'Těstoviny uvaříme v osolené vodě al dente a necháme vychladnout. Poté dáme do mísy, přidáme na kostičky nakrájené rajče, okurku a sýr. Osolíme, opepříme a promícháme s jogurtem. Zdobíme na kostičky nakrájeným vejcem a pažitkou.',
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
  // ✅ 23o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '23o',
    category: Category.OBED,
    title: 'Přírodní plátek s fazolkami a bramborovo-batátovou kaší',
    image: recipeImages['23o'],
    instructions: 'Brambory uvaříme spolu s batáty v osolené vodě doměkka a poté šťouchadlem rozmělníme na hustou kaši. Fazolky podusíme v páře nebo ve vodě do změknutí. Mezitím na druhé pánvi rozehřejeme olej, vložíme omytý a očištěný plátek masa, osolíme, opepříme a restujeme dozlatova. Hotové maso podáváme s fazolkami a kaší.',
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
  // ✅ 24o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '24o',
    category: Category.OBED,
    title: 'Lečo se šunkou a vejcem',
    image: recipeImages['24o'],
    instructions: 'Na pánvi rozehřejeme olej, přidáme nadrobno nakrájenou cibulku, poté na nudličky nakrájenou šunku a na kostičky nakrájenou zeleninu. Přikryjeme pokličkou a dusíme. Nakonec zalijeme vajíčkem, promícháme, osolíme a opepříme dle chuti. Podáváme s chlebem.',
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
  // ⚠️ 25o — MAMKA v xlsx → OPRAVENO: pouze nutrition mamka (ingredience OK)
  // Změny: kj 1787→1760, kcal 427→421, p 29.1→27.7, s 43.7→43.5, t 14.1→13.1
  {
    id: '25o',
    category: Category.OBED,
    title: 'Čočka s vejcem a dušenou zeleninou',
    image: recipeImages['25o'],
    instructions: 'Čočku propláchneme pod tekoucí vodou a namočíme jí přes noc. Druhý den vodu slijeme a v nové vodě uvaříme doměkka. Cibuli oloupeme, nakrájíme na kostičky a orestujeme na tuku. Přidáme čočku, dochutíme solí, pepřem, česnekem a libečkem. Brokolici rozdělíme na růžičky a připravíme na páře. Dochutíme solí. Vejce uvaříme natvrdo. Na talíř naservírujeme čočku, brokolici a přidáme rozkrojené vejce.',
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
  // ✅ 26o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '26o',
    category: Category.OBED,
    title: 'Pečené kuře s červeným zelím a bramborami',
    image: recipeImages['26o'],
    instructions: 'Zelí nakrájíme na nudličky. Kuřecí stehno vložíme do pekáčku společně se zelím, lehce podlijeme vodou, přiklopíme víkem a dáme péct do trouby vyhřáté na 170 °C. Pečeme tak dlouho, dokud maso nezezlátne. Podáváme s bramborami vařenými ve slupce pokapanými přepuštěným máslem.',
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
  // ✅ 27o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '27o',
    category: Category.OBED,
    title: 'Těstoviny zapečené s brokolicí a sýrem',
    image: recipeImages['27o'],
    instructions: 'Těstoviny uvaříme podle návodu na obalu. Brokolici rozebranou na růžičky vhodíme do osolené vroucí vody a krátce povaříme na skus. Sýr nastrouháme. Uvařené těstoviny promícháme s brokolicí, kořením a polovinou strouhaného sýra. Přendáme do vymazané zapékací mísy. Rozšleháme vejce se zbylým sýrem a přelijeme na těstovinovou směs. Pečeme v předehřáté troubě na 180 °C cca 20 minut.',
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
  // ✅ 28o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '28o',
    category: Category.OBED,
    title: 'Guláš s těstovinami',
    image: recipeImages['28o'],
    instructions: 'Na rozehřátém tuku v pánvi orestujeme na kostičky nakrájenou cibulku. Přidáme omyté, osušené a na kostičky nakrájené maso, které necháme zatáhnout, ochutíme kořením a solí. Směs podlijeme horkou vodou a dusíme doměkka. Těstoviny uvaříme dle návodu na obale a podáváme jako přílohu ke guláši.',
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
  // ✅ 29o — MAMKA v xlsx → originMamka:'X' — vše OK
  {
    id: '29o',
    category: Category.OBED,
    title: 'Losos s dušeným špenátem, brambory',
    image: recipeImages['29o'],
    instructions: 'Plátek lososa osolíme, opepříme a zakapeme citronovou šťávou. Cibuli a česnek oloupeme a nakrájíme na jemné kostičky, přidáme dušený špenát, promícháme a necháme prohřát. V pánvi na oleji propečeme lososa z obou stran a podáváme s vařeným bramborem.',
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
  }
  // ⚠️ Konec Kontroly.
];