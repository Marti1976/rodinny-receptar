import { Category, Recipe } from "../types";

export const recipesPEC: Recipe[] = [
  {
    id: "p1",
    category: Category.PECENI,
    title: "Jablečná bábovka z krupice",
    instructions: "1. Všechny suroviny kromě kakaa smícháme v hladké těsto, které rozdělíme na dvě poloviny.\n2. Jednu polovinu vlijeme do dobře vymazané a moukou vysypané bábovkové formy. Do druhé poloviny vsypeme kakao a nalijeme na světlé těsto. Pečeme při 180 °C asi 45 minut.\n3. Po upečení můžeme ozdobit čokoládovou polevou.\n\nDoba přípravy: 15 minut. Počet kousků: 12. Orientační cena: 70 Kč.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "Strouhaná jablka", extra: 300, unit: "g" },
      { name: "Cukr moučka", extra: 300, unit: "g" },
      { name: "Žloutky", extra: 3, unit: "ks" },
      { name: "Dětská krupička", extra: 200, unit: "g" },
      { name: "Kakao", extra: 2, unit: "lžíce" },
      { name: "Bílky (na sníh)", extra: 3, unit: "ks" },
      { name: "Kypřicí prášek", extra: 1/2, unit: "ks" },
      { name: "Strouhané vlašské ořechy", extra: 1, unit: "lžíce" },
      { name: "Rozinky", extra: 1, unit: "hrst" },
      { name: "Tuk a mouka na vymazání formy", extra: 1, unit: "dle potřeby" }
    ]
  },
  {
    id: "p2",
    category: Category.PECENI,
    title: "Piškotové těsto",
    instructions: "Vše zamíchat a nalít na pekáč – vymazaný a vysypaný.\n\nDo těsta můžeš dát tvaroh i ovoce. Tvaroh rozdělám jen s vanilkovým cukrem a lžičkou ho dávám do těsta – libovolně. Mezi to můžeš naházet i ovoce.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "Cukr písek", extra: 1, unit: "hrnek" },
      { name: "Vejce", extra: 2, unit: "ks" },
      { name: "Olej", extra: 2, unit: "dcl" },
      { name: "Mléko", extra: 1, unit: "hrnek" },
      { name: "Prášek do pečiva", extra: 1, unit: "ks" },
      { name: "Hladká mouka", extra: 1, unit: "hrnek" },
      { name: "Polohrubá mouka", extra: 1, unit: "hrnek" }
    ]
  },
  {
    id: "p3",
    category: Category.PECENI,
    title: "Jablečný trhanec",
    instructions: "Oba cukry vyšleháme s vejci, přidáme mouku, sůl, mléko a vymícháme řídké těsto. Nalijeme jej na vymazaný plech a posypeme jablky. Pečeme v troubě vyhřáté na 180 °C. Když začne povrch zlátnout, dvěma vidličkami ho roztrháme na kousky a necháme dopéct dokřupava, před podáváním posypeme cukrem se skořicí.",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "Mléko", extra: 1.5, unit: "hrnku" },
      { name: "Hrubá mouka", extra: 150, unit: "g" },
      { name: "Cukr moučka", extra: 30, unit: "g" },
      { name: "Prášek do pečiva", extra: 1/2, unit: "ks" },
      { name: "Vanilkový cukr", extra: 1, unit: "ks" },
      { name: "Vejce", extra: 2, unit: "ks" },
      { name: "Jablka", extra: 4, unit: "ks" },
      { name: "Sůl", extra: 1, unit: "špetka" },
      { name: "Skořicový cukr", extra: 1, unit: "ks" }
    ]
  },
  {
    id: "p4",
    category: Category.PECENI,
    title: "Mrkvové sušenky",
    instructions: "Do mísy dejte mouku, přidejte cukr, promíchejte a přidejte pokrájené změklé máslo a žloutek. Vše důkladně propracujte, až vznikne hladké těsto bez hrudek. Pak do něj zamíchejte najemno nastrouhanou mrkev. Těsto vyválejte a vykrajujte z něho zajíčky nebo jiné velikonoční tvary. Skládejte je na plech vyložený pečicím papírem. Pečte je 8 až 10 minut. Mezitím dejte do misky citronovou šťávu. Postupně přidávejte cukr a šlehejte metličkou, až vznikne konzistence polevy. Naneste ji na sušenky a dozdobte nasekanými pistáciemi.\n(Na 40 sušenek)",
    favorites: "",
    printed: "",
    ingredients: [
      { name: "Hladká mouka", extra: 250, unit: "g" },
      { name: "Máslo", extra: 130, unit: "g" },
      { name: "Žloutek", extra: 1, unit: "ks" },
      { name: "Středně velká mrkev", extra: 1, unit: "ks" },
      { name: "Moučkový cukr", extra: 100, unit: "g" },
      { name: "Šťáva z citronu", extra: 1, unit: "ks" },
      { name: "Moučkový cukr (na polevu)", extra: 1, unit: "dle potřeby" },
      { name: "Hrst nesolených pistácií", extra: 1, unit: "ks" }
    ]
  }
];
