import { Category, Recipe } from "../types";

export const recipesEXT: Recipe[] = [
  {
    id: "e1",
    category: Category.EXTRA,
    title: "Tvarohový beránek (vel.)",
    instructions: "Změklý tuk, cukr, tvaroh a vejce utřeme v míse. Pak přidáme prosátou mouku s práškem do pečiva a rozinky, které jsme namočili v rumu. Těsto nalijeme do vymazané a moukou vysypané formy a pečeme ve středně vyhřáté troubě (150 °C) dorůžova. Beránka posypeme cukrem.",
    favorites: "X",
    printed: "",
    ingredients: [
      { name: "Máslo (nebo rostlinný tuk)", extra: 200, unit: "g" },
      { name: "Měkký tvaroh", extra: 250, unit: "g" },
      { name: "Cukr", extra: 200, unit: "g" },
      { name: "Polohrubá mouka", extra: 250, unit: "g" },
      { name: "Vejce", extra: 3, unit: "ks" },
      { name: "Vanilkový cukr", extra: 1, unit: "ks" },
      { name: "Prášek do pečiva", extra: 1/2, unit: "balíčku" },
      { name: "Rozinky", extra: 1, unit: "dle chuti" },
      { name: "Špetka soli", extra: 1, unit: "ks" }
    ]
  },
  {
    id: "e2",
    category: Category.EXTRA,
    title: "Mazanec (vel.)",
    instructions: "Do vlažného mléka nasypeme cukr, rozdrobíme droždí a necháme vzejít kvásek. Do mísy prosijeme mouku, osolíme, přidáme rozpuštěné máslo, žloutek, kůru, muškátový květ, rozinky, vzešlý kvásek a vypracujeme hladké těsto. Necháme ho na teplém místě hodinu vykynout. Troubu předehřejeme na 170 stupňů. Z těsta vytvoříme dva bochánky, které přemístíme na plech s pečicím papírem a necháme znovu cca 20 min. kynout. Pak mazance potřeme bílkem, posypeme mandlemi a pomalu pečeme cca 40 minut.\n(Suroviny na 4 porce)",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "Hladká mouka", extra: 200, unit: "g" },
      { name: "Polohrubá mouka", extra: 380, unit: "g" },
      { name: "Cukr krupice", extra: 100, unit: "g" },
      { name: "Droždí", extra: 20, unit: "g" },
      { name: "Mléko", extra: 250, unit: "ml" },
      { name: "Rozpuštěné máslo", extra: 80, unit: "g" },
      { name: "Vanilkový cukr", extra: 1, unit: "ks" },
      { name: "Žloutek", extra: 1, unit: "ks" },
      { name: "Citronová kůra", extra: 1, unit: "lžička" },
      { name: "Špetka muškátového květu", extra: 1, unit: "ks" },
      { name: "Rozinky naložené v rumu", extra: 1, unit: "dle chuti" },
      { name: "Bílek na potření", extra: 1, unit: "ks" },
      { name: "Mandlové lupínky", extra: 1, unit: "dle chuti" }
    ]
  },
  {
    id: "e3",
    category: Category.EXTRA,
    title: "Špaldové perníčky",
    instructions: "Máslo ušlehejte s cukrem do pěny. Pak do směsi zašlehejte vejce, med a nakonec přidejte všechny sypké suroviny. Vše důkladně promíchejte a vypracujte hladké těsto. Těsto zabalte do fólie a nechte dvě hodiny odpočinout v chladu. Pak ho vyválejte na plát a vykrajujte různé tvary. Perníčky vyskládejte na plech vyložený pečicím papírem a pečte je 10 minut. Ještě horké je potřete rozšlehaným vejcem.\n(Na 30 kousků. Doba přípravy: 30 min, doba pečení: 10 min)",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "Špaldová mouka", extra: 200, unit: "g" },
      { name: "Máslo", extra: 50, unit: "g" },
      { name: "Moučkový cukr", extra: 50, unit: "g" },
      { name: "Vejce", extra: 1, unit: "ks" },
      { name: "Med", extra: 2, unit: "lžíce" },
      { name: "Jedlá soda", extra: 1, unit: "lžička" },
      { name: "Perníkové koření", extra: 1, unit: "lžíce" },
      { name: "Vejce na potření", extra: 1, unit: "ks" }
    ]
  }
];
