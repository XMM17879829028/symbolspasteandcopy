// Fallback symbol data, used when network loading fails
// Data from original symbols.ts file

export const commonSymbols = [
  { category: 'Facilities', items: ['🏧', '🚹', '🚺', '♿', '🚻', '🚼', '⚕️', 'WC', '🎫', '🛄'] },
  { category: 'Warning Signs', items: ['⚠️', '🚫', '🚳', '🚭', '🚷', '⛔', '📵', '🔞', '☢️', '☣️'] },
  { category: 'Arrows', items: ['⬆️', '↗️', '➡️', '↘️', '⬇️', '↙️', '⬅️', '↖️', '↕️', '↔️', '🔄', '↩️', '↪️', '⤴️', '⤵️'] },
  { category: 'Symbols', items: ['⚛️', '✡️', '☸️', '☯️', '✝️', '☪️', '☮️', '🕎', '☯️', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'] },
  { category: 'Controls', items: ['⏮️', '⏪', '⏯️', '▶️', '⏩', '⏭️', '⏸️', '⏹️', '⏺️', '🔼', '⏫', '🔽', '⏬'] },
  { category: 'Other', items: ['♀️', '♂️', '⚕️', '∞', '♻️', '⚜️', '🎵', '👄', '📖', '⭕', '✅', '☑️', '✔️', '❌', '✖️', '❎'] },
  { category: 'Emoticons', items: ['☺', '☹', '☻', '❤', '♡', '♥', '❣', '❥'] },
  { category: 'Special Symbols', items: ['♀', '℃', '℉', '✽', '✾', '✿', '❀', '❁', '❃', '❊', '❋', '✣', '✤', '⋆', '★', '☆', '✦', '✧', '❂', '❉', '✯', '✰', '✱', '✩', '✪', '✺', '✼', '☀', '☁', '☂', '☃', '☄', '☼', '☽', '☾', '☈', '♫', '♬', '☜', '☝', '☞', '☟', '✌', '✉', '✍', '✎', '✑', '✒', '©', '™', '✓', '✔', '✖', '✗', '✘', '⌚', '⌛', '☌', '☎', '✆', '☏', '✂', '†', '☪', '☥', '♔', '♕', '♚', '♛', '☠', '💀', '☢', '☣', '☤', '☯', '✈', '❖'] },
  { category: 'Currency Symbols', items: ['€', '$', '₤', '£', '¥', '🚗', '🚘', '🚦', '🏎', '🚁', '💰', '🤵'] },
  { category: 'Heart Symbols', items: ['♥', '♡', '❤', '❥', '❣', '❦', '❧', 'დ', 'ღ', '۵', 'ლ', 'ও', 'ლ', '❤', '💙', '💚', '💛', '💜', '🖤', '💗', '💓', '💔', '💟', '💕', '💖', '❣', '💘', '💝', '💞'] },
  { category: 'Star Symbols', items: ['★', '☆', '⚝', '✩', '✴', '✳', '☄', '✪', '✫', '✬', '✭', '🟉', '🟊', '✮', '✯', '✰', '⭐', '⛤', '⛦', '⛧', '🟀', '🟂', '🟃', '✦', '✧', '🟄', '🟆', '🟇', '🟈', '🌟', '🌠', '🟌', '🟍', '✶', '✡', '✡', '☪', '❂', '✴', '✵', '✷', '✸', '🟎', '🟐', '🟒', '🟔', '⋆', '⍟', '≛', '⍣', '٭', '*', '⁎', '⁑', '✱', '✲', '✼', '✽', '❃', '❉', '⧆', '✢', '✣', '✤', '✥', '✳', '❊', '❋', '✺', '∗', '⊛', '✨', '❇', '❈', '🔆', '🔅'] },
  { category: 'Math Symbols', items: ['∀', '∁', '∂', '∃', '∄', '∅', '∆', '∇', '∈', '∉', '∊', '∋', '∌', '∍', '➕', '➖', '➗', '✖', '∎', '∏', '∐', '∑', '−', '∓', '∔', '∕', '∖', '∗', '∘', '∙', '√', '∛', '∜', '∝', '∞', '∟', '∠', '∡', '∢', '∣', '∤', '∥', '∦', '∧', '∨', '∩', '∪', '∫', '∬', '∭', '∮', 'π', '∯', '∰', '∱', '∲', '∳', '∴', '∵', '∶', '∷', '∸', '∹', '∺', '∻', '∼', '∽', '∾', '∿', '≀', '≁', '≂', '≃', '≄', '≅', '≆', '≇', '≈', '≉', '≊', '≋', '≌', '≍', '≎', '≏', '≐', '≑', '≒', '≓', '≔', '≕', '≖', '≗', '≘', '≙', '≚', '≛', '≜', '≝', '≞', '≟', '≠', '≡', '≢', '≣', '≤', '≥', '≦', '≧', '≨', '≩', '≪', '≫', '≬', '≭', '≮', '≯', '≰', '≱', '≲', '≳', '≴', '≵', '≶', '≷', '≸', '≹', '≺', '≻', '≼', '≽', '≾', '≿', '⊀', '⊁', '⊂', '⊃', '⊄', '⊅', '⊆', '⊇', '⊈', '⊉', '⊊', '⊋', '⊌', '⊍', '⊎', '⊏', '⊐', '⊑', '⊒', '⊓', '⊔', '⊕', '⊖', '⊗', '⊘', '⊙', '⊚', '⊛', '⊜', '⊝', '⊞', '⊟', '⊠', '⊡', '⊢', '⊣', '⊤', '⊥', '⊦', '⊧', '⊨', '⊩', '⊪', '⊫', '⊬', '⊭', '⊮', '⊯', '⊰', '⊱', '⊲', '⊳', '⊴', '⊵', '⊶', '⊷', '⊸', '⊹', '⊺', '⊻', '⊼', '⊽', '⊾', '⊿', '⋀', '⋁', '⋂', '⋃', '⋄', '⋅', '⋆', '⋇', '⋈', '⋉', '⋊', '⋋', '⋌', '⋍', '⋎', '⋏', '⋐', '⋑', '⋒', '⋓', '⋔', '⋕', '⋖', '⋗', '⋘', '⋙', '⋚', '⋛', '⋜', '⋝', '⋞', '⋟', '⋠', '⋡', '⋢', '⋣', '⋤', '⋥', '⋦', '⋧', '⋨', '⋩', '⋪', '⋫', '⋬', '⋭', '⋮', '⋯', '⋰', '⋱', '➿'] },
  { category: 'Arrow Symbols', items: ['←', '↑', '→', '↓', '↚', '↛', '↜', '↝', '↞', '↟', '↠', '↡', '↢', '↣', '↤', '↥', '↦', '↧', '↨', '↫', '↬', '↭', '↮', '↯', '↰', '↱', '↲', '↳', '↴', '↵', '↶', '↷', '↸', '↹', '↺', '↻', '⇄', '⇅', '⇆', '⇇', '⇈', '⇉', '🏹', '💘', '📩', '📲', '📤', '📥', '🔙', '🔚', '🔛', '🔜', '🔝', '⬆', '↗', '➡', '↘', '⬇', '↙', '⬅', '↖', '↕', '↔', '↩', '↪', '⤴', '⤵', '🔀', '🔁', '🔂', '🔃', '🔄', '⇊', '⇍', '⇎', '⇏', '⇐', '⇑', '⇒', '⇓', '⇔', '⇕', '⇖', '⇗', '⇘', '⇙', '⇚', '⇛', '⇜', '⇝', '⇞', '⇟', '⇠', '⇡', '⇢', '⇣', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '⇱', '⇲', '⇳', '⇴', '⇵', '⇶', '⇷', '⇸', '⇹', '⇺', '⇻', '⇼', '⇽', '⇾', '⇿', '⌁', '⍼', '⎋', '➔', '➘', '➙', '➚', '➛', '➜', '➝', '➞', '➟', '➠', '➢', '➣', '➤', '➥', '➦', '➧', '➨', '➩', '➪', '➫', '➬', '➭', '➮', '➯', '➱', '➲', '➳', '➴', '➵', '➶', '➷', '➸', '➹', '➺', '➻', '➼', '➽', '➾', '⟰', '⟱', '⟲', '⟳', '⟴', '⟵', '⟶', '⟷', '⟸', '⟹', '⟺', '⟻', '⟼', '⟽', '⟾', '⟿', '⤀', '⤁', '⤂', '⤃', '⤄', '⤅', '⤆', '⤇', '⤈', '⤉', '⤊', '⤋', '⤌', '⤍', '⤎', '⤏', '⤐', '⤑', '⤒', '⤓', '⤔', '⤕', '⤖', '⤗', '⤘', '⤙', '⤚', '⤛', '⤜', '⤝', '⤞', '⤟', '⤠', '⤡', '⤢', '⤣', '⤤', '⤥', '⤦', '⤳', '⤶', '⤷', '⤸', '⤹', '⤺', '⤻', '⤼', '⤽', '⤾', '⤿', '⥀', '⥁', '⥂', '⥃', '⥄', '⥅', '⥆', '⥇', '⥈', '⥉', '⦽', '⧪', '⧬', '⧭', '⨗', '⬀', '⬁', '⬂', '⬃', '⬄', '⬈', '⬉', '⬊', '⬋', '⬌', '⬍', '⬎', '⬏', '⬐', '⬑', '⬰', '⬱', '⬲', '⬳', '⬴', '⬵', '⬶', '⬷', '⬸', '⬹', '⬺', '⬻', '⬼', '⬽', '⬾', '⬿', '⭀', '⭁', '⭂', '⭃', '⭄', '⭅', '⭆', '⭇', '⭈', '⭉', '⭊', '⭋', '⭌', '⽮', '￩', '￪', '￫', '￬'] },
  {
    "category": "Flower Symbols",
    "items": ["✽", "✾", "✿", "❀", "❁", "❃", "❊", "❋", "✣", "✤", "⚜", "⚘", "ꕤ", "ꕥ", "☘", "🍀", "🌼", "🌻", "🌺", "🌹", "🌸", "🌷", "💐", "𓆸", "⚘", "🎕", "💮", "🥀"]
  },
  {
    "category": "Office Supplies",
    "items": ["⌚", "⌛", "☌", "☎", "☏", "✁", "✂", "✃", "✄", "✆", "⌨", "✉", "✍", "✎", "✏", "✐", "✑", "✒", "📝", "💻", "🖥️", "💼", "📁", "📂", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "📑", "🔖", "📧", "📨", "📩", "📤", "📥", "📦", "📫", "📪", "📮", "🔰", "🖩", "📟", "📴"]
  },
  {
    "category": "Weather Symbols",
    "items": ["☼", "☀", "☉", "☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "☂", "☔", "🌫", "🌁", "☇", "☈", "☃", "⛄", "⛇", "🌡", "☄", "🌀", "🌈", "🌂", "🌌", "⚡", "🌊", "💧", "🔥", "❅", "❆", "ϟ", "❄", "♨", "💨", "🌬️", "〰️"]
  },
  {
    "category": "Emoji Symbols",
    "items": ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "😛", "😝", "😜", "😍", "😘", "😗", "😙", "😚", "😋", "🤗", "😠", "😡", "😳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😰", "😥", "😢", "😭", "🤢", "🤧", "😷", "🤒", "🤕", "🤑"]
  },
  {
    "category": "Number Symbols",
    "items": ["⓪", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑰", "⑯", "⑱", "⑲", "⑳", "⓿", "➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒", "➓", "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴", "⓵", "⓶", "⓷", "⓸", "⓹", "⓺", "⓻", "⓼", "⓽", "⓾", "㉑", "㉒", "㉓", "㉔", "㉕", "㉖", "㉗", "㉘", "㉙", "㉚", "㉛", "㉜", "㉝", "㉞", "㉟", "㊱", "㊲", "㊳", "㊴", "㊵", "㊶", "㊷", "㊸", "㊹", "㊺", "㊻", "㊼", "㊽", "㊾", "㊿", "⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "💯", "⑴", "⑵", "⑶", "⑷", "⑸", "⑹", "⑺", "⑻", "⑼", "⑽", "⑾", "⑿", "⒀", "⒁", "⒂", "⒃", "⒄", "⒅", "⒆", "⒇"]
  },
  {
    "category": "Geometric Shapes",
    "items": ["■", "□", "▢", "▣", "▤", "▥", "▦", "▧", "▨", "▩", "▪", "▫", "◧", "◨", "◩", "◪", "◫", "◰", "◱", "◲", "◳", "◻", "◼", "◽", "◾", "⚿", "⛋", "⛝", "⛞", "⛶", "⛾", "⟎", "⟏", "⟤", "⟥", "⧄", "⧅", "⧆", "⧇", "⧈", "⧉", "⧠", "⧮", "⧯", "⬒", "⬓", "⬔", "⬕", "⬚", "⬛", "⬜", "⬝", "⬞", "⯀", "⯐", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "▉", "▊", "▋", "█", "▌", "▐", "▍", "▎", "▏", "▕", "░", "▒", "▓", "❏", "❐", "❑", "❒", "▀", "▔", "▬", "▢", "▣", "▤", "▥", "▦", "▧", "▨", "▩", "▭", "▮", "▯", "☰", "☲", "☱", "☴", "☵", "☶", "☳", "☷", "▰", "▱", "◧", "◨", "◩", "◪", "◫", "∎", "□", "⊟", "⊠", "⊡", "❘", "❙", "❚", "〓", "◊", "◈", "◇", "◆", "⎔", "⎚", "☖", "☗", "⬛", "⬜", "◼", "◻", "◾", "◽", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "💠", "🔳", "🔲"]
  },
  {
    "category": "Playing Card Symbols",
    "items": ["♠", "♥", "♦", "♣", "♤", "♧", "♡", "♢", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅", "🎲"]
  },
  {
    "category": "Sports",
    "items": [
      "⚽️", "🏀", "🏈", "⚾️", "🥎", "🏐", "🏉", "🎾", "🥏", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🥍", "🏏", "⛳️", "🏹", "🎣", "🥊", "🥋", "🎽", "⛸", "🥌", "🛷", "🛹", "🎿", "⛷", "🏂", "🏋️‍♀️", "🏋🏻‍♀️", "🏋🏼‍♀️", "🏋🏽‍♀️", "🏋🏾‍♀️", "🏋🏿‍♀️", "🏋️‍♂️", "🏋🏻‍♂️", "🏋🏼‍♂️", "🏋🏽‍♂️", "🏋🏾‍♂️", "🏋🏿‍♂️", "🤼‍♀️", "🤼‍♂️", "🤸‍♀️", "🤸🏻‍♀️", "🤸🏼‍♀️", "🤸🏽‍♀️", "🤸🏾‍♀️", "🤸🏿‍♀️", "🤸‍♂️", "🤸🏻‍♂️", "🤸🏼‍♂️", "🤸🏽‍♂️", "🤸🏾‍♂️", "🤸🏿‍♂️", "⛹️‍♀️", "⛹🏻‍♀️", "⛹🏼‍♀️", "⛹🏽‍♀️", "⛹🏾‍♀️", "⛹🏿‍♀️", "⛹️‍♂️", "⛹🏻‍♂️", "⛹🏼‍♂️", "⛹🏽‍♂️", "⛹🏾‍♂️", "⛹🏿‍♂️", "🤺", "🤾‍♀️", "🤾🏻‍♀️", "🤾🏼‍♀️", "🤾🏾‍♀️", "🤾🏾‍♀️", "🤾🏿‍♀️", "🤾‍♂️", "🤾🏻‍♂️", "🤾🏼‍♂️", "🤾🏽‍♂️", "🤾🏾‍♂️", "🤾🏿‍♂️", "🏌️‍♀️", "🏌🏻‍♀️", "🏌🏼‍♀️", "🏌🏽‍♀️", "🏌🏾‍♀️", "🏌🏿‍♀️", "🏌️‍♂️", "🏌🏻‍♂️", "🏌🏼‍♂️", "🏌🏽‍♂️", "🏌🏾‍♂️", "🏌🏿‍♂️", "🏇", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "🧘‍♀️", "🧘🏻‍♀️", "🧘🏼‍♀️", "🧘🏽‍♀️", "🧘🏾‍♀️", "🧘🏿‍♀️", "🧘‍♂️", "🧘🏻‍♂️", "🧘🏼‍♂️", "🧘🏽‍♂️", "🧘🏾‍♂️", "🧘🏿‍♂️", "🏄‍♀️", "🏄🏻‍♀️", "🏄🏼‍♀️", "🏄🏽‍♀️", "🏄🏾‍♀️", "🏄🏿‍♀️", "🏄‍♂️", "🏄🏻‍♂️", "🏄🏼‍♂️", "🏄🏽‍♂️", "🏄🏾‍♂️", "🏄🏿‍♂️", "🏊‍♀️", "🏊🏻‍♀️", "🏊🏼‍♀️", "🏊🏽‍♀️", "🏊🏾‍♀️", "🏊🏿‍♀️", "🏊‍♂️", "🏊🏻‍♂️", "🏊🏼‍♂️", "🏊🏽‍♂️", "🏊🏾‍♂️", "🏊🏿‍♂️", "🤽‍♀️", "🤽🏻‍♀️", "🤽🏼‍♀️", "🤽🏽‍♀️", "🤽🏾‍♀️", "🤽🏿‍♀️", "🤽‍♂️", "🤽🏻‍♂️", "🤽🏼‍♂️", "🤽🏽‍♂️", "🤽🏾‍♂️", "🤽🏿‍♂️", "🚣‍♀️", "🚣🏻‍♀️", "🚣🏼‍♀️", "🚣🏽‍♀️", "🚣🏾‍♀️", "🚣🏿‍♀️", "🚣‍♂️", "🚣🏻‍♂️", "🚣🏼‍♂️", "🚣🏽‍♂️", "🚣🏾‍♂️", "🚣🏿‍♂️", "🧗‍♀️", "🧗🏻‍♀️", "🧗🏼‍♀️", "🧗🏽‍♀️", "🧗🏾‍♀️", "🧗🏿‍♀️", "🧗‍♂️", "🧗🏻‍♂️", "🧗🏼‍♂️", "🧗🏽‍♂️", "🧗🏾‍♂️", "🧗🏿‍♂️", "🚵‍♀️", "🚵🏻‍♀️", "🚵🏼‍♀️", "🚵🏽‍♀️", "🚵🏾‍♀️", "🚵🏿‍♀️", "🚵‍♂️", "🚵🏻‍♂️", "🚵🏼‍♂️", "🚵🏽‍♂️", "🚵🏾‍♂️", "🚵🏿‍♂️", "🚴‍♀️", "🚴🏻‍♀️", "🚴🏼‍♀️", "🚴🏽‍♀️", "🚴🏾‍♀️", "🚴🏿‍♀️", "🚴‍♂️", "🚴🏻‍♂️", "🚴🏼‍♂️", "🚴🏽‍♂️", "🚴🏾‍♂️", "🚴🏿‍♂️", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖", "🏵", "🎗", "🎫", "🎟", "🎪", "🤹‍♀️", "🤹🏻‍♀️", "🤹🏼‍♀️", "🤹🏽‍♀️", "🤹🏾‍♀️", "🤹🏿‍♀️", "🤹‍♂️", "🤹🏻‍♂️", "🤹🏼‍♂️", "🤹🏽‍♂️", "🤹🏾‍♂️", "🤹🏿‍♂️", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🎻", "🎲", "🧩", "♟", "🎯", "🎳", "🎮", "🎰"
    ]
  }
];

export const egyptSymbols = [
  {
    category: "Egyptian Hieroglyphs",
    items: ["𓁸", "𓁹", "𓁺", "𓁻", "𓁼", "𓁽", "𓁾", "𓁿", "𓂀", "𓂁", "𓂂", "𓂃", "𓂄", "𓂅", "𓂆", "𓂇", "𓂈", "𓂉", "𓂊", "𓂋", "𓂌", "𓂍", "𓂎", "𓂏", "𓂐", "𓂑", "𓂒", "𓂓", "𓂔", "𓂕", "𓂖", "𓂗", "𓂘", "𓂙", "𓂚", "𓂛", "𓂜", "𓂝", "𓂞", "𓂟", "𓂠", "𓂡", "𓂢", "𓂣", "𓂤", "𓂥", "𓂦", "𓂧", "𓂨", "𓂩", "𓂪", "𓂫", "𓂬", "𓂭", "𓂮", "𓂯", "𓂰", "𓂱", "𓂲", "𓂳", "𓂴", "𓂵", "𓂶", "𓂷", "𓂸", "𓂹", "𓂺", "𓂻", "𓂼", "𓂽", "𓂾", "𓂿", "𓃀", "𓃁", "𓃂", "𓃃", "𓃄", "𓃅", "𓃆", "𓃇", "𓃈", "𓃉", "𓃊", "𓃋", "𓃌", "𓃍", "𓃎", "𓃏"]
  }
];

export const lennySymbols = [
  {
    category: 'Table Flip',
    items: ['(ノ ﾟДﾟ)ノ ==== ┻━━┻', '(/#-_-)/~┻┻〃', '(ノ#-_-)ノ ミ ┴┴', '(╯ □ )╯︵ ┻━┻', '(ノಠ益ಠ)ノ彡┻━┻', 'ʕノ•ᴥ•ʔノ ︵ ┻━┻', '(/ ◡ ‿ ◡)/ ~ ┻━┻', '(ノ-_-)ノ ~┻━┻', '(ﾉ;；)ﾉ~┻━┻', '(ﾉ-_-)ﾉ ~┻━┻ ☆`', '(ノ-_-)ノ・・・~~┻━┻', 'ノ￣□￣)ノ ~┻━┻', '(ﾉꐦ ⊙曲ఠ)ﾉ彡┻━┻', '(ﾉ`□ )ﾉ⌒┻━┻', '(ﾉꐦ ๑ Д`๑)ﾉ彡┻━┻', '┻━┻ミ\\(≧ロ≦\\)', '(ﾉ￣□￣)ﾉ ~┻━┻', '(ノ♯`△ )ノ~\'┻━┻', '(ノT_T)ノ ^┻━┻', '(┛ಠДಠ)┛彡┻━┻', '(ノ ▽ )ノ︵┻━┻', '(ﾉ*\'ω\'*)ﾉ彡┻━┻', '‎(ﾉಥ益ಥ)ﾉ ┻━┻', '(._.) ~ ︵ ┻━┻', '(╯\'□\')╯︵ ┻━┻', '┗[ ♒ ]┛ ︵ ┻━┻', '┻━┻ ︵ ლ(⌒-⌒ლ)', '(ﾉ^◡^)ﾉ︵ ┻━┻', 'ヽ༼ ツ ༽ﾉ ︵┻━┻', '(╯ ͝ ͜ʖ͡ )╯︵ ┻━┻', '(┛◉Д◉)┛彡┻━┻', '(ﾉ≧∇≦)ﾉ ﾐ ┸━┸', '┻━┻ミ\\(≧ﾛ≦\\)', '(ノ` )ノ ~┻━┻ ~', '(ﾉ▼д▼)ﾉ ~┻━┻ ☆`', '┻━┻ ︵ ლ(ಠ益ಠლ)', '(┛❍ᴥ❍)┛彡┻━┻', '(ノ`Д )ノ~┻━┻', '┻━┻ ヘ╰( •̀ε•́ ╰)', '(╯ ･ ᗜ ･ )╯︵ ┻━┻', '！！！！|┛*`Д |┛・・~~┻━┻ ┳━┳', '(ﾉ≧∇≦)ﾉ ﾐ ┸┸', '(ﾉ`⌒ )ﾉ ┫:・\'.::・┻┻:・\'.::・', '┻━┻ ︵ \\ (ツ)/ ︵ ┻━┻', '┻━┻ ︵ヽ(`Д )ﾉ︵ ┻━┻', '(ノÒ益Ó)ノ彡▔▔▏', 'ミ(ノ￣^￣)ノ!≡≡≡≡≡━┳━☆()￣□￣)/', '(۶ૈ ۜ ᵒ̌▱๋ᵒ̌ )۶ૈ=͟͟͞͞ ⌨']
  },
  {
    category: 'Shrug',
    items: ['\_( ͡ ͜ʖ ͡ )_/', '\_ȌᴥȌ_/', '\_(☯෴☯)_/', 't(ツ)_/', '\\( _o)/', '\\( ) /', '\_( ◉ 3 ◉ )_/', '\_〳•̀·〵_/', 'へ‿(ツ)‿ㄏ', '\_▒ – ﹏ – ▒_/', '\_(⊙︿⊙)_/', '┐( ~`)┌', '┐( ー`)┌', '┐(￣ヘ￣)┌', '╮(╯∀╰)╭', '╮(╯_╰)╭', '┐( д`)┌', '┐( ∀`)┌', 'ʅ(́◡◝)ʃ', 'ლ(ﾟдﾟლ)', '乁(ᴗ ͜ʖ ᴗ)ㄏ', '┐(͠≖ ͜ʖ͠≖)┌', '\_(⊙_ʖ⊙)_/', '乁( ⏒ ͜ʖ ⏒ )ㄏ', 'ʅ( ͡ ͜ʖ ͡ )ʃ', '乁( ͡ ͜ʖ ͡ )ㄏ', '┐( ͡ ʖ̯ ͡ )┌', '乁( ͡ ͜ʖ ͡ )ㄏ', '\_( ͜ʖ )_/', '┐( ͡◉ ͜ʖ ͡◉)┌', '┐( д`)┌', '┐(ﾟ~ﾟ)┌', '┐(\'द\')┌', 'ლ|^Д^ლ|', 'ლ(╹ε╹ლ)', 'ლ(ಠ益ಠ)ლ', '┐(\'~`;)┌', 'ヘ( -`;)ヘ', '┐( -"-)┌', '乁༼☯‿☯✿༽ㄏ', 'ʅ( ◔౪◔)ʃ', 'ლ(•ω •ლ)', 'ヽ(゜~゜o)ノ', 'ヽ(~~~ )ノ', '┐(~ー~;)┌', '┐(-。ー;)┌', '\_(ツ)_/', '\_(⊙_ʖ⊙)_/', '乁ʕ •̀ ۝ •́ ʔㄏ', '\_༼ ಥ ‿ ಥ ༽_/', '乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ', '乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ', '\_( ͡⟃ ͜ʖ ⟄)_/', '\_( ͡~ ͜ʖ ͡ )_/', '\_( ͠ ͟ʖ ͠ )_/', '\_( ͡☉ ͜ʖ ͡☉)_/', '\_( ͠ ͟ʖ ͠ )_/', '\_( ͡ᵔ ͜ʖ ͡ᵔ )_/', '\_( ͠ ͟ل͜ ͡ )_/', '\_(⁰͡ ͜ʖ⁰͡ )_/', '\_(⁰͡ ͜ʖ꒡)_/', '\_▐ ☯ ︿ ☯ ▐_/', '\_| ✖ 〜 ✖ |_/', '\_ȌᴥȌ_/', '\_╏ ՞ ︿ ՞ ╏_/', '\_ʘᗜʘ_/']
  },
  {
    category: 'Classic Lenny',
    items: ['( ͡ ͜ʖ ͡ )', '( ͜ʖ )', '( ͡ᵔ ͜ʖ ͡ᵔ )', '( ͡~ ͜ʖ ͡ )', '( ͠ ͟ʖ ͡ )', '(͠≖ ͜ʖ͠≖)', '( ͡ ʖ̯ ͡ )', '(ᴗ ͜ʖ ᴗ)', '͡ ͜ʖ ͡ –', '( ͡ ͜ʖ ͡ -)', '͜ʖ ͡ -', '͜ʖ ͡ – ✧']
  },
  {
    category: 'Happy Lenny',
    items: ['( ✧≖ ͜ʖ≖)', '(✿❦ ͜ʖ ❦)', '( ͡ʘ ͜ʖ ͡ʘ)', '(͡o ͜ʖ ͡o)', '( ಠ ͜ʖಠ)', '٩(^ᴗ^)۶', 'ᕕ( ᐛ )ᕗ', '(✿╹◡╹)', 'd( ͡ _ʖ ^)', '( ͡ _ʖ −)☆', '( ͡ _ʖ ~)', '( ͡♥_ʖ -)☆', '(* ͡ _ʖ -)☆', '( ͡ _ʖｰ)~☆', '( ͡ _ʖ ≦)ノ', '͡ ͜ʖ ͡ – ✧']
  },
  {
    category: 'Action Lenny',
    items: ['( ͡ ͜ʖ ͡ )╭∩╮', '(╯ ͠ ͟ʖ ͡ )╯┻━┻', '(ง ͡ʘ ͜ʖ ͡ʘ)ง', '(ง ͠ ͟ل͜ ͡ )ง', '\_( ͡ ͜ʖ ͡ )_/', '(☞ ͡ ͜ʖ ͡ )☞', 'ᕦ( ͡ ͜ʖ ͡ )ᕤ', 'ᕕ( ͡ ͜ʖ ͡ )ᕗ', 'ᕤ( ͡~ ͜ʖ ͡ )', '( ͡~ ͜ʖ ͡ )', '(˵ ͡~ ͜ʖ ͡ ˵)ﾉ⌒♡*:･。.', '( ͡ _ʖ <)']
  },
  {
    category: 'Cute Winks',
    items: ['(○ﾟε^○)', '(･ω<)☆', '(*^-ﾟ)v', 'く(^ｰﾟ)ﾉ', '(ﾉ･_-)☆', '{・ω-*}', '(⌒.−)=★', '(^_−)☆', '(･ｪ-)', '(・ωｰ)~☆', '(^_-)-☆', '(◕ฺー≦)ノ', '(・ω<)', '(๑◕ㅂ▰)', '(^_<)~☆', '(*ゝω・)ﾉ', 'ಠ‿↼', '^.~', '(⌒.-)=★', '(v^ー)', '(*^∀゜)', '(*^-)五', '(*・∀-)☆', '(๑ゝڡ◕๑)', '(・_+)', '(^_-)', '(o\'u≦o)', 'd(-_^)', '(*^∀ﾟ)ъ']
  },
  {
    category: 'Funny Faces',
    items: ['(хдх)', '( *`)', '(≧m≦)', '(^~^)', '( π`)', '(\' a `)', '(*Л*)', '(●≧艸≦', '(>3<)三', '(;Д`)', '( -.-)', '(~ x ~;)', '(×米×)', '(･□･)川', '（艸`*)', '_|￣|○､;', '(。-<>ー。)', '( З`)=3', '(~Д~)***', 'σ( \' ┰￣)', '( ﾟ 3ﾟ)≡@', '(((○∀○)))', '(;-з-)=゜。', '((〇<*`_、′', 'ΣΣΣΣΣ(0<)', '(;ﾟ;艸；ﾟ;)', '`.゜∵(゜∀゜)', '_( ཀ`」 ∠)_', '(*●艸зU $)◆◆◇', '(o\'ｪﾟ):；*.', '(*бωб)', '(ᇴ‿ฺᇴ)', '(๑￫ܫ￩)', '(❍ᴥ❍ʋ)', 'ʕ ᴥ ʔ', '(✪‿✪)ノ', '(͡o‿O͡)', '( ͡ ͡ )', '( ͡ ⊖ ͡ )', '( ͡ Ɛ ͡ )', '( ͡ з ͡ )', 'ʕ￫ᴥ￩ʔ', '٩◔̯◔۶', 'U^ｴ^U', 'ʕ ᴥ ʔ', 'ʕ•ᴥ•ʔ', '(ˇ⊖ˇ)', '༼☯﹏☯༽', '^ↀᴥↀ^', '(◕ᴥ◕)', 'ʕ⊙ᴥ⊙ʔ', '( ﹃`)', '༼ꉺɷꉺ༽', '(✿ヘᴥヘ)', 'ʕ￫ᴥ￩ ʔ', '(✿╹◡╹)', '(▰∀◕)ﾉ', '（人◕ω◕)', '(ㆁᴗㆁ✿)', '(ﾉ≧ڡ≦)', 'ʕ ᴥ ʔ', '(≖ᴗ≖✿)', '(◕‿◕✿)', '(๑♜д♜)', '(✾♛‿♛)', '( ͡ - ͡ )', '( ͡ ⊱ ͡ )', '( ͡ ❥ ͡ )', '( ͡ ω ͡ )', '(ง⌐□ل͜□)ง', '( ͡ 〓 ͡ )', '( ͡ 👅 ͡ )', '(͡• ͜ʖ ͡•)', '( ͡ ͜ ͡ )', '( ͡ ᴥ ͡ )', '(͡• ͜໒ ͡• )', '( ͡◉ ͜ʖ ͡◉)', '(͡ ͜V ͡)', '( ͡• ͜ʖ ͡• )', 'ヽ(͡◕ ͜ʖ ͡◕)ﾉ', '๐ (৹˃̵﹏˂̵৹) ๐', '‧ (˚ ˃̣̣̥⌓˂̣̣̥ )‧ ˚', '(つ﹏<)･ﾟ｡', '｡ﾟ･(>﹏<)･ﾟ｡', '๐ (৹˃̵﹏˂̵৹) ๐', '。`(>▂<) ` .', '｡･ﾟﾟ･(>д<)･ﾟﾟ･｡', '(总计)', '(┳Д┳)', '(ಥ﹏ಥ)', '(;へ:)', 'ಥʖ̯ಥ', 'ຈل͜ຈ', 'ಥ ͜ʖಥ', 'ʖ̯ T', '☭ ͜ʖ ☭', 'ཀ ʖ̯ ཀ', '(ಥ ͜ʖಥ)', '(☭ ͜ʖ ☭)', 'أ‿أ', '╥﹏╥', '(;﹏;)', '(T_T)', '(πーπ)', '(T▽T)', '(⋟﹏⋞)', '(IдI)', '( Д⊂ヽ', '(;Д;)', '(>﹏<)', '(TдT)', '(つ﹏⊂)', '༼☯﹏☯༽', '(ノ﹏ヽ)', '(ノAヽ)', '(╥_╥)', '(T⌓T)', '(༎ຶ⌑༎ຶ)', '(☍﹏⁰)｡', '(ಥ_ʖಥ)', '(つд⊂)', '(≖͞_≖̥)', '(இ﹏இ`｡)', '༼ಢ_ಢ༽', '༼ ༎ຶ ෴ ༎ຶ༽', 'ヽ༼ຈل͜ຈ༽ﾉ', '░ಥ╭͜ʖ╮ಥ░', '( ཀ ʖ̯ ཀ)', '(ʖ̯·t)', '͡ಥ ͜ʖ ͡ಥ', 'ᕕ( ཀ ʖ̯ ཀ)ᕗ', '( ͡ಥ ͜ʖ ͡ಥ)', '༎ຶ ͜ʖ ༎ຶ `', '( ༎ຶ ͜ʖ ༎ຶ `)♡', 'ᕙ(░ಥ╭͜ʖ╮ಥ░)━☆ﾟ.*･｡ﾟ', 'デ╦-( ͡ಥʖ̯ಥ;)╯╲___XXXX', '︵‿︵( ͡༎ຶ ͜ʖ ͡༎ຶ `)︵‿︵', '(⁎ ́௰ ̀)◞ ͂͂(˒̩̩̥́௰˓̩̩̥̀⁎)', '( \'́⌣\'̀)/(˘̩̩ε˘̩ƪ)', 'ͼ(ݓ_ݓ)ͽ', '( ɵ̥̥ ˑ̫ ɵ̥̥)', '(◍ ̧̧̧o ̧̧̧◍)', '( •̥̥̥ω•̥̥̥` )', '（个_个)', '( -̩̩̩͡˛ -̩̩̩͡ )', '⁝(˚͈͈͈͈̥̆₍₎˚͈͈͈͈̥̆⁎)⁝', '( ͒˃̩̩⌂˂̩̩ ͒)', '╥﹏╥', '-◕ᴥ◕-', '୧༼ᄒ ᴥ ᄒ༽୨', 'ᕙ(›̥ᴥ ‹̥̥)ᕗ', 'ヽ(◕ᴥ◕)ﾉ', '乁[ ᴥ ]ㄏ', '(^◔ᆽ◔^)', '੧( ਠ ᴥ ਠ ˵)ノ', '(^ᴥ^)', 'ᘳ⦿͡ ᴥ ⦿͡ᘰ', '⊂ᵔᴥᵔ⊃', '(⦿͡ ᴥ⦿͡)', '/ᐠ･ᆽ･ᐟ\\', 'ʕง•ᴥ•ʔっ', '。ʕʘ‿ʘʔ.', 'ʕ•́ᴥ•̀ʔっ', '☜(*•ᴗ•*)☞', '/ᐢ⸼⸼ᐢ\\', '/(Ő × Ő)\\', '/(≧ x ≦)\\', '=^ʘ_ʘ^=', '(ꏿ ᆺ ꏿ)', '(≡๏ᴥ๏≡)', '⊂(^◔ܫ◔^)⊃', '(◕ᴥ◕✿)', '(◔_◔)', '｡･ﾟﾟ･(≖̥.≖̥)･ﾟﾟ･｡', '(≖̥ _≖̥)', '⊂(・‿・⊂)', 'ค(╹⌣╹)ค', '┌(◔◡◔)┘', '(ﾉ•o•)ﾉﾟ', 'ヘ(^o^)ヘ', '⊙⌓⊙', '(◢ ︿ ◣)', '˵ ಠ ᴥ ಠ ˵', '(ಥ д ಥ)', '( ◢﹏◣)', '╰(●ᴗ●)╯', '\\(^ᴗ^)/', '(ง ◕_ ◕)ง', '(✿◕ ˬ ◕) ̸ /̸̅̅ ̆̅ ̅̅ ̅̅', '✿(｡◕‿◕｡)✿', '(/・0・)', '┐( д`)┌', 'ʕっ•‿•ʔっ', '(っ｡◝‿◜｡)っ', '乁(◕‸◕)ㄏ', '(♡-‿-♡)', 'ᕕ(︶︿︶)╭∩╮', '♡(ᵕﮧᵕ)♡', 'ʕง•ᴥ•ʔっ', '.ʕʘ‿ʘʔ.', 'ʕ•́ᴥ•̀ʔっ', '୧ʕノ•ᴥ•ʔ୨', 'ʕง•ᴥ•ʔっ', 'ʕっ•ᴥ•ʔっ', '⊂ʕ•ᴥ•⊂ʔ', 'ʕ⊙ᴥ⊙ʔ', 'ᕕʕ •ₒ• ʔ୨', '୧ʕ ▀ ⌂ ▀ ʔ୨', '(̵̵́╹ᴥ╹)', 'ᘳ´• ᴥ •`ᘰ', 'ᕦʕ•ᴥ•ʔᕤ', 'ʅʕ♡•ᴥ•♡ʔʃ', 'ʕっಠᴥಠʔっ', '(灬•ᴥ•灬)', 'ʕ♡˙ᴥ˙♡ʔ', '✺◟(ಠᴥಠ)◞✺', 'ლ(⟃ ᴥ ⟄)ლ', 'ˁ˚ᴥ˚ˀ', '୧ʕ•̀ᴥ•́ʔ୨❥', '╭∩╮ʕ•ᴥ•ʔ╭∩╮', '(ꏿ ᆺ ꏿ)', '໒( ಠ ᴥ ಠ )७', '(✿ ͡° ᴥ ͡°)', '/ᐠ･_･ᐟ\\', 'ฅ(◕ᆺ◕)ฅ', 'ฅ(=‐ܫ‐=)ฅ', '٩| ⁰ ᴥ ⁰ |ᕗ', '（ꏿ ᴥ ꏿ）', '=^ʘ_ʘ^=', '(ⓛ ᴥ ⓛ)', '|☉ﻌ☉|ᕗ', '（≡◔ܫ◔≡）', '(ꃪܫꃪ)', '(^◕ᆽ◕^)', '(≡ꆤ ﻌ ꆤ≡)∫', '（Φ ᴥ Φ）', '^(╹ᆽ╹)^', '▼・ᴥ・▼', '(˵Φ ㅅ Φ˵)', '/ᐠ(✪ᆺ✪)ᐟ\\', '⊂(▶ᴥ◀)⊃', '(๑ↀᆺↀ๑)', 'ฅ(^._.^)ฅ', '(=^ᴥ^*=)', '┏(ಠᴥಠ)┓', '(≽Φ ﻌ Φ≼)∫', 'ʕっ•ᴥ•ʔっ', '٩(° ᴥ ° )ᕗ', 'ฅ(≡´•ܫ•`≡)ฅ', '/\\☉_☉/\\', 'ฅ(≡^°ܫ°^≡)ฅ', '(◕ᆽ◕)', '(^ↀᴥↀ^)', '(≡ⓛᆽⓛ≡)', '(≡◕ܫ◕≡)', '(≡ዕᆽዕ≡)', '^(◔ᴥ◔)^', '└(°ᴥ°)┘', 'ᘳ´• ﻌ •`ᘰ', '(≡๏ᴥ๏≡)', '(≽Φ ﻌ Φ≼)ﾉ', 'ฅ(≡°ܫ°≡)ฅ', '(ꀂܫꀂ)', '/ᐠ(ơᆽơ)ᐟ\\', 'ฅ(^・ܫ・^)ฅ', '/ᐠ´•ܫ•`ᐟ\\', '(ⓛ ω ⓛ)', '(ฅ\'ᴥ\'ฅ)', '(≡ටܫට≡)', '(≡⓿ ω ⓿≡)', '(≡ộܫộ≡)', '(≡^ ◡ ^≡)', '\\=(^ᴥ^)=/', 'ฅ(☉ω☉ฅ)', '(≡☾☽ω☾☽≡)', 'ฅ(^•ﻌ•^)ฅ', '=^☉ᆽ☉^=', '▼◕ᴥ◕▼', '(≡´☉◡☉`≡)', '=^●ꞈ●^=', '(ꅈܫꅈ)', '⊂(^◔ܫ◔^)⊃', 'Σ(;Φ ㅅ Φ)', 'ლ(ಠᴥಠ)ლ', '/ᐠ=✪ ﻌ ✪=ᐟ\\', '(=☉ᆽ☉=)', '^ᴥↀ^', '(=^°ܫ°^=)', '(=ↀᴥↀ=)', '(≡ዎ ㅅ ዎ≡)ﾉ', '(โ๏▾๏ใ)', '=(^ᴥ^)=', '(ↀㅅↀ)✧', '(^･ᆺ･^)', '-ᄒᴥᄒ-', '/ᐠơ ﻌ ơᐟ\\', '(°ꀾ°)', '/ᐠዎ_ዎᐟ\\', '/ᐠơ ﻌ ơᐟ\\', 'ʋ(❍ᴥ❍)ʋ', '⎰≀◕ᴥ◕≀⎰', '(≡◕ｘ◕≡)', '/ᐠ☉ ﻌ ☉ᐟ\\', '=^╹ᆽ╹^=', '/ᐠ-_-ᐟ\\', '(≽ዕᆽዕ≼)', '◖⚆_⚆◗', 'ᕦʕ°ᴥ°ʔᕤ', '\\=(ΘܫΘ)=/', '(≡ዋ ﻌ ዋ≡)ﾉ', '/ᐠⓛܫⓛᐟ\\', '/ᐠ=ᗜꞈᗜ=ᐟ\\', '(Φ▾Φ)', '/ᐠ(ꆤᆽꆤ)ᐟ\\', '(ʘ̥ܫʘ̥)', '(🄋 .🄋 )', '(🄌 _🄌)？', '(@_@)ゝ', '٩(◐_◑)۶﻿', '(\'°.°\')', '(ఠ_ఠ)ヾ', '(܍⍘܍)', '(^_^)ゞ', '(・_・)', 'ヽ(•́ᴥ•̀)ノ', '(◑_◑)', '(•ิ_•ิ)?', '⸮(ⴲ_ⴲ)?', '(◎_◎)', '(・ｏ・)？', 'ᖗ(ᵔ.ᵔ)ᖘ', '(`_\`)', 'ↂ_ↂ', '(-_-)゛', '(・⌓・)?', '( °◇°)？', '|●.●|', '(\'◉.◉\')', '【・_・?】', '(´°_°`)', 'く（＾ﾍ＾)ゝ', '☉.☉', '(ó.ò)', '(°ヘ°)', '(◔_◔)۶', '(◔_◔)', '(\'◉.◉\')', 'ʕ(ⱺ⍘ⱺ)ʔ', '(❍.❍)', '(ﾟ｡ﾟ)ゝ', '(◔◇◔)？', '・_・', 'ଘ(੭ˊωˋ)੭', '٩(´･ᴗ･ `)۶', '(´｡• ‿ •｡`)', 'ˁ•ᴗ•ˀつ～❤', '( つ•̀ω•́)つ', '(*^ᴥ^*)', '(✿ ᵒ̌ ᴥ ᵒ̌ ✿)', '_(‸◦°w°◦‸)_', '(´｡• ‿ •｡`)', '*+:(◍•ᴗ•◍):+*', '⊂ʕ•⌣•⊂ʔ', '⊂(・‿・⊂)', '✫❄︎(>⌄<)❤⁍-✮', '✶ ପ✽( •̤ᴥ•̤ )੭⁾｡:✽', '(,\'\'>ᴥ<\',,)', '(✿◕‿◕)']
  },
  {
    category: 'Angry Lenny',
    items: ['(‡▼益▼)', '(‡ಠ╭╮ಠ)', '(╬ಠ益ಠ)', '凸( •̀_•́ )凸', '┌П┐(►˛◄\'!)', 'ಠ╭╮ಠ', '(ᗒᗣᗕ)՞', 'ಥ_ಥ']
  },
  {
    category: 'Special Lenny',
    items: ['( • )( • )ԅ(≖⌣≖ԅ)', '(‿!‿) ԅ(≖‿≖ԅ)', '•́ε•̀٥', '(͠≖ ͜ʖ͠≖)ε`●)', '｡*ﾟ.*.｡(っ ᐛ )っ✂╰⋃╯', '( ͡ ( ͡ ͜ʖ( ͡ ͜ʖ ͡ )ʖ ͡ ) ͡ )', '୨୧ ᕼᗩᑭᑭY ᗷIᖇTᕼᗞᗩY୨୧', 'ღƪ(ˆ◡ˆ)ʃ♡ƪ(ˆ◡ˆ)ʃ♪']
  },
  {
    category: 'Cool Lenny',
    items: ['(▀̿̿Ĺ̯̿̿▀̿ ̿)', 'ლ(▀̿̿Ĺ̯̿̿▀̿ლ)', '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄', '━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)', '┬┴┬┴┤ᕦ( ▀̿ Ĺ̯ ▀̿├┬┴┬', '<:::::[]=¤ (▀̿̿Ĺ̯̿̿▀̿ ̿)', 'ᕙ(▀̿̿Ĺ̯̿̿▀̿ ̿) ᕗ', '┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)']
  },
  {
    category: 'Confused Lenny',
    items: ['ɿ(｡･ɜ･)ɾⓌⓗⓨ?', 'ɿ(｡･ɜ･)ɾⓌⓗⓐⓣ?', 'щ(ﾟдﾟщ)"亲爱的上帝why‽)', '(｢๑•₃•)｢ ʷʱʸ?', '（个_个)', 'ヽ(ﾟДﾟ)ﾉ', '눈_눈', '⋋_⋌']
  }
];

export const artSymbols = [
  {
    "category": "Small House",
    "items": [
      "∵*.•´¸.•*´✶´♡\n° ☆ °˛*˛☆_Π______*˚☆*\n˚ ˛★˛•˚*/______/ ~⧹。˚˚\n˚ ˛•˛•˚ ｜ 田田 ｜門｜ ˚*\n🌷╬╬🌷╬╬🌷╬╬🌷╬╬🌷",
      "∵*.•´¸.•*´✶´♡\n° ☆ ° ˛*˛☆_Π______˚☆\n*˚ ˛★˛•*/________/ ~ ⧹。˚ ˚\n˚ ˛•˛•˚  ｜ 田田 ｜門｜ ˚\n🌷╬╬🌷╬╬🌷╬╬🌷╬╬🌷"
    ]
  },
  {
    "category": "Emoticons",
    "items": [
      "ฅ^•ﻌ•^ฅ",
      "(◕ᴥ◕)",
      "ʕ•ᴥ•ʔ",
      "(｡◕‿◕｡)",
      "(◠‿◠)",
      "(づ｡◕‿‿◕｡)づ"
    ]
  }
]; 