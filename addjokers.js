let jokers = [
  {
    name: "Yu Sze",
    text: [
      "This Joker gains {X:mult,C:white}X0.2{} Mult each time a {C:attention}Stone{} card is scored",
    ],
    image_url: "img/j_yusze.png",
    rarity: "Legendary"
  },

  {
    name: "Cepillin",
    text: [
      "Retrigger all played cards {C:attention}4{} additional times if {C:attention}played hand{} is {C:attention}High Card{} and contains {C:attention}5{} cards"
    ],
    image_url: "img/j_cepillin.png",
    rarity: "Legendary"
  },

  {
    name: "Snake",
    text: [
      "If {C:attention}played hand{} has only {C:attention}1{} card, {C:attention}+2{} hand size,", "{C:red}-1{} discard",
      "{C:inactive}Art by {C:GREEN}BoxWari",
    ],
    image_url: "img/j_snake.png",
    rarity: "Rare"
  },

  {
    name: "Souls",
    text: [
      "After {C:attention}7{} rounds,",
      "sell this card to",
      "create a free {C:purple}The Soul{} card",
    ],
    image_url: "img/j_soul.png",
    rarity: "Rare"
  },
  
  {
    name: "Paleta Payaso",
    text: [
      "All scored {C:attention}face{} cards have",
      "{C:green}1 in 2{} chance to change to another {C:attention}face{} card,",
      "{C:green}1 in 4{} chance to change its {C:attention}Enhancement,",
      "{C:green}1 in 8{} chance to change its {C:attention}Edition",
    ],
    image_url: "img/j_paleta_payaso.png",
    rarity: "Rare"
  },

  {
    name: "Moai",
    text: [
       "This Joker gains ",
        "{X:blue,C:white}X0.15{} Chips for each destroyed {C:attention}Stone{} card",
        "{C:chips}+25{} Chips for each played {C:attention}Stone{} card",
    ],
    image_url: "img/j_moai.png",
    rarity: "Rare"
  },

  {
    name: "D4C",
    text: [
      "If discarded hand contains exactly {C:attention}3{}",
      "cards and two of them are of the same {C:attention}rank{},",
      "{C:attention}destroy{} all cards",
    ],
    image_url: "img/j_d4c.png",
    rarity: "Uncommon"
  },

  {
    name: "Lucky Clover",
    text: [
      "Played {C:clubs}Club{} cards have {C:green}1 in 4{} chance to become {C:attention}Lucky{} cards when scored",
      "{C:inactive}Art by {C:GREEN}BoxWari",
    ],
    image_url: "img/j_lucky.png",
    rarity: "Uncommon"
  },

  {
    name: "Bust",
    text: [
      "Retrigger all played {C:attention}Stone{} cards",
    ],
    image_url: "img/j_bust.png",
    rarity: "Uncommon"
  },

  {
    name: "Balloon",
    text: [
      "{C:attention}+5{} Mult each round",
      "{C:green}1 in 12{} chance this",
      "is destroyed at the end of round",
    ],
    image_url: "img/j_balloon.png",
    rarity: "Common"
  },

  {
    name: "Junaluska",
    text: [
      "{C:chips}+120{} Chips",
      "{C:green}1 in 6{} chance this is destroyed at the end of round",
    ],
    image_url: "img/j_junaluska.png",
    rarity: "Common"
  },

  {
    name: "Red Delicious",
    text: [
      "{X:blue,C:white} X3{} Chips",
      "{C:green}1 in 1000{} chance this is destroyed at the end of round",
    ],
    image_url: "img/j_reddelicious.png",
    rarity: "Common"
  },

]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
//  {
//    name: "Joker",
//    text: [
//      "{C:mult}+4{} Mult"
//    ],
//    image_url: "img/j_joker.png",
//    rarity: "Voucher"
//  },
//  {
//    name: "Joker",
//    text: [
//      "{C:mult}+4{} Mult"
//    ],
//    image_url: "img/j_joker.png",
//    rarity: "Pack"
//  },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}