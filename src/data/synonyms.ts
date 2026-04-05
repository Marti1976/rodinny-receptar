/**
 * Mapa synonym pro ingredience.
 * Klíč: Oficiální název suroviny v receptech (malými písmeny).
 * Hodnota: Pole alternativních názvů (malými písmeny).
 */
export const ingredientSynonyms: Record<string, string[]> = {
  "vejce": ["vajčko", "vajicko", "vajicka", "vajcko", "vajco", "vajíčko", "vajíčka"],
  "brambory": ["brambor", "erteple", "brambůrky", "brambory vařené", "bramborami"],
  "kuřecí maso": ["kure", "kureci", "prsicko", "stripsy", "kuře", "kuřecí", "prsíčko"],
  "vepřové maso": ["veprove", "vepřové", "kotleta", "panenka"],
  "hovězí maso": ["hovezi", "hovězí", "steak", "svíčková"],
  "šunka": ["sunka", "šunčička"],
  "sýr": ["syr", "eidam", "mozzarella", "hermelín", "niva", "gouda"],
  "těstoviny": ["testoviny", "nudle", "špagety", "kolínka", "penne"],
  "rýže": ["ryze", "rýže"],
  "chléb": ["chleb", "chleba", "pečivo", "houska", "rohlík"],
  "jogurt": ["jogurt", "skyr", "řecký jogurt", "bílý jogurt"],
  "tvaroh": ["tvaroh", "tvarohem"],
  "ovoce": ["jablko", "banán", "hruška", "jahody", "borůvky", "mango", "mandarinka"],
  "zelenina": ["mrkev", "cibule", "česnek", "paprika", "rajče", "okurka", "cuketa", "brokolice", "pórek", "špenát", "celer", "petržel", "fazolky"]
};
