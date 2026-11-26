const PEOPLE = {"M":"Mark","K":"Krista","C":"Cassandra","Mk":"Marky","S":"Sawyer","B":"Bupa","L":"Laurie"};
const DISHES = [
 {
  "id": "smoked",
  "name": "Smoked turkey",
  "where": "Bupa's Keg",
  "color": "#8a4b2a",
  "lead": "M",
  "goal": "Off the Keg about 1:25, breast 155–161°F, thigh 170°F+",
  "ingredients": [
   "{{16 lb|7.3 kg}} turkey, brined",
   "Canola oil to coat, about {{2 Tbsp|28 g}}",
   "Lump charcoal, {{15–20 lb|7–9 kg}}",
   "3–4 apple or cherry wood chunks",
   "Shield: metal plate wrapped in foil, then a big pan with {{1½ in|4 cm}} of water",
   "Probe thermometer, plus an instant-read"
  ],
  "steps": [
   [
    "08:35",
    "M",
    "Out of the brine. Check the cavity is empty (no neck or giblet bag). Rinse inside and out. Pat it very dry: dry skin crisps, wet skin goes rubbery. Untie the legs; tuck the wing tips behind the back. Rub with about {{2 Tbsp|28 g}} oil. Breast probe in, not touching bone.",
    "Out of brine, dry, oil, probe"
   ],
   [
    "08:40",
    "Mk",
    "Keg set-up: scoop out old ash. Foil-wrapped metal plate where the deflector goes, a big pan with {{1½ in|4 cm}} of water on it, grate on top. Leave {{1–2 in|3–5 cm}} of space all round the edges for air. {{15–20 lb|7–9 kg}} lump charcoal and the wood next to the Keg.",
    "Keg set-up"
   ],
   [
    "09:00",
    "M",
    "Light a medium bed of lump charcoal. Set the vents to settle the dome at 325°F (open the top vent more to bring it up, not the bottom).",
    "Light the Keg"
   ],
   [
    "09:45",
    "M",
    "Steady at 325°F for 10 minutes: add 3–4 wood chunks. Wait for thin, clean smoke.",
    "Wood chunks in"
   ],
   [
    "10:00",
    "M",
    "Bird on, breast up, over the water pan. Lid shut; check it closes without touching the bird. Every peek lets the heat out.",
    "Bird on, lid shut"
   ],
   [
    "10:00",
    "B",
    "Keg watch: read the dome now and then. Tell Mark if it leaves 300–350°F.",
    "Keg watch"
   ],
   [
    "12:30",
    "M",
    "Check breast and thigh temperature. Estimate the pull time; it's often faster than planned. Top up the water pan with hot water if it's under {{½ in|1 cm}}. Turn the bird 180° if one side is browning faster.",
    "Check temp"
   ],
   [
    "13:25",
    "M",
    "Off at breast 155–161°F and thigh 170°F+ (check the thigh with the instant-read). Tent with foil. Close the Keg's vents.",
    "Off, tent"
   ],
   [
    "14:25",
    "M",
    "Carve onto a platter. Bag the carcass for Friday's stock.",
    "Carve"
   ]
  ],
  "tips": [
   "Smoked meat stays pink under the skin even when cooked. Trust the thermometer, not the colour.",
   "It rests 60–90 minutes under foil and stays hot. That rest is the day's buffer.",
   "Breast browning too fast? Lay a loose piece of foil over it."
  ]
 },
 {
  "id": "roast",
  "name": "Roast turkey",
  "where": "Main oven",
  "color": "#b5651d",
  "lead": "M",
  "goal": "Out about 1:15, breast 155–161°F, thigh 170°F+. Its drippings make the gravy.",
  "ingredients": [
   "{{16 lb|7.3 kg}} turkey, brined",
   "1 apple, ½ onion, 1 cinnamon stick, {{1 cup|240 g}} water (aromatics)",
   "4 rosemary sprigs, 6 sage leaves",
   "Canola oil to coat, about {{2 Tbsp|28 g}}",
   "Roasting pan and rack",
   "Probe thermometer"
  ],
  "steps": [
   [
    "09:00",
    "K",
    "Out of the brine. Check the cavity is empty (no neck or giblet bag). Rinse inside and out. Pat dry inside and out. Onto the rack in the roasting pan. Pour the brine away outside. Then scrub the sink and counter with hot soapy water: raw turkey was there, and the broccoli drains next.",
    "Out of brine, dry, rack"
   ],
   [
    "09:45",
    "K",
    "Oven to 500°F. Move a second rack above where the bird will sit and check a {{13x9|33x23 cm}} pan fits over it (the gratin goes there). Microwave 1 apple and ½ onion (both cut up), 1 cinnamon stick and {{1 cup|240 g}} water for 5 minutes.",
    "Oven 500°F, rack, aromatics"
   ],
   [
    "10:15",
    "M",
    "Hot aromatics, 4 rosemary sprigs and 6 sage leaves into the cavity. Rub the skin with about {{2 Tbsp|28 g}} oil. Lowest rack at 500°F. Timer 30 minutes.",
    "In at 500°F"
   ],
   [
    "10:45",
    "M",
    "Oven down to 350°F. Probe in the thickest part of the breast. About {{1 cup|240 g}} of water into the pan so the drippings don't scorch.",
    "Down to 350°F, probe, water"
   ],
   [
    "12:30",
    "M",
    "Check the pan: if it's dry, add {{½ cup|120 g}} water so the drippings don't burn.",
    "Pan check"
   ],
   [
    "13:15",
    "M",
    "Out at breast 155–161°F and thigh 170°F+. Bird onto the board, tented with foil. Keep the pan: the drippings go to Krista for the gravy.",
    "Out, tent, save pan"
   ],
   [
    "14:25",
    "M",
    "Carve onto a platter.",
    "Carve"
   ]
  ],
  "tips": [
   "Drippings from a brined bird are salty. Tell whoever finishes the gravy."
  ]
 },
 {
  "id": "gravy",
  "name": "Gravy",
  "where": "Stovetop, big heavy pot",
  "color": "#7a5c2e",
  "lead": "K",
  "goal": "Base made by 11:30. Finished with the roast bird's drippings at 1:30.",
  "ingredients": [
   "Both sets of necks, hearts and gizzards (no livers)",
   "{{1 Tbsp|14 g}} vegetable oil",
   "1 onion ({{about 4 oz|110 g}}), chopped, skin on",
   "{{6 cups|1440 g}} low-sodium chicken broth",
   "{{3 cups|710 g}} water",
   "2 sprigs thyme, 8 parsley stems",
   "{{5 Tbsp|71 g}} butter",
   "{{6 Tbsp (¼ cup + 2 Tbsp)|47 g}} flour",
   "{{1½ cups|355 g}} dry white wine",
   "Salt and pepper"
  ],
  "steps": [
   [
    "09:30",
    "K",
    "{{1 Tbsp|14 g}} oil in the big pot, medium-high. Brown the necks, hearts and gizzards (no livers), 5 minutes. Add 1 chopped onion, 3 minutes. Cover, heat to low, 20 minutes.",
    "Brown giblets, onion, sweat"
   ],
   [
    "10:00",
    "K",
    "Add {{6 cups|1440 g}} chicken broth, {{3 cups|710 g}} water, 2 thyme sprigs and 8 parsley stems. Bring to a boil, then simmer uncovered 30 minutes, skimming any scum.",
    "Broth simmer 30 min"
   ],
   [
    "10:30",
    "K",
    "Strain: about {{8 cups|1.9 litres}}. Keep the hearts and gizzards; throw out the necks.",
    "Strain"
   ],
   [
    "10:45",
    "C",
    "Second pot, medium-low: melt {{5 Tbsp|71 g}} butter. When the foam settles, whisk in {{6 Tbsp|47 g}} flour. Stir constantly until nutty brown, about 10 minutes.",
    "Brown roux"
   ],
   [
    "10:55",
    "C",
    "Whisk in the hot broth (all {{8 cups|1.9 litres}}) a little at a time, hard. Then {{1½ cups|355 g}} white wine. Boil, then simmer on medium-low 30 minutes until slightly thick. Turn it off.",
    "Broth + wine, simmer 30"
   ],
   [
    "11:00",
    "C",
    "Cut the gristle off the gizzards. Dice the hearts and gizzards. Into the fridge.",
    "Dice giblets"
   ],
   [
    "13:15",
    "K",
    "Gravy back to a simmer.",
    "Back to simmer"
   ],
   [
    "13:30",
    "K",
    "Spoon the fat off the roast pan. Strain the drippings into the gravy, pressing the solids. Diced giblets in. Lowest heat. Taste before any salt.",
    "Drippings + giblets in"
   ],
   [
    "14:45",
    "K",
    "Back to a simmer. Season. Into the gravy boat.",
    "Season, into boat"
   ]
  ],
  "tips": [
   "Brined drippings are salty: taste before you salt.",
   "Too thin at 2:45? Whisk {{2 Tbsp|16 g}} cornstarch into {{¼ cup|60 g}} cold water, stir it in, simmer 1 minute.",
   "Between 11:30 and 1:15 keep the lid on. It's under two hours off the heat, which is fine."
  ]
 },
 {
  "id": "gratin",
  "name": "Au gratin potatoes",
  "where": "Main oven, top rack",
  "color": "#c9a227",
  "lead": "M",
  "goal": "Bakes beside the bird, then a cheese top and crisp at 2:15.",
  "ingredients": [
   "{{6 lb|2.7 kg}} russet potatoes ({{about 5½ lb|2450 g}} once peeled)",
   "{{3 cups|710 g}} heavy cream",
   "{{8 oz|225 g}} Gruyère, finely grated",
   "{{3 oz|85 g}} Parmigiano, finely grated",
   "5 garlic cloves ({{about 1 Tbsp|15 g}}), smashed",
   "6 thyme sprigs, plus {{1 tsp|1 g}} leaves to finish",
   "1 bay leaf, a few gratings of nutmeg",
   "{{6 tsp Diamond Crystal salt (or 3 tsp Morton)|18 g kosher salt}}",
   "{{1 tsp|2 g}} black pepper",
   "{{3 Tbsp|43 g}} butter ({{1 Tbsp|14 g}} for the pan, {{2 Tbsp|28 g}} melted)",
   "{{13x9 pan, 2½ in deep|33x23 cm pan, 6 cm deep}}, on a sheet pan",
   "Mandoline and cut glove"
  ],
  "steps": [
   [
    "10:00",
    "S",
    "Peel the {{6 lb|2.7 kg}} of potatoes. Keep them whole in a bowl of cold water so they don't go grey. Pat dry just before slicing. (Soaking whole is fine; it's the slices that mustn't be rinsed.)",
    "Peel potatoes"
   ],
   [
    "10:15",
    "M",
    "Infuse the cream: {{3 cups|710 g}} heavy cream, 5 smashed garlic cloves, 6 thyme sprigs, 1 bay leaf and a few gratings of nutmeg to a bare simmer. Off the heat, cover, 15 minutes.",
    "Infuse cream"
   ],
   [
    "10:30",
    "M",
    "Strain into your biggest bowl, pressing the garlic. Stir in {{6 tsp Diamond Crystal salt (3 tsp Morton)|18 g kosher salt}} and {{1 tsp|2 g}} pepper. Butter the pan with {{1 Tbsp|14 g}} butter. Mix {{8 oz|225 g}} Gruyère and {{3 oz|85 g}} Parmigiano; bag a third of it ({{about 1 cup|100 g}}) for later. Whisk the rest into the warm cream.",
    "Strain, cheese, pan"
   ],
   [
    "10:45",
    "M",
    "Glove on. Slice the potatoes {{⅛ inch|3 mm}} on the mandoline straight into the cream, tossing so every slice is coated. Don't rinse them.",
    "Mandoline"
   ],
   [
    "11:00",
    "M",
    "Square up stacks like a deck of cards and stand them on edge in the {{13x9|33x23 cm}} pan, packed tight. Pour cream to halfway up. Foil on tight.",
    "Pack the pan, foil"
   ],
   [
    "11:15",
    "M",
    "Into the oven on the top rack, beside the bird, at 350°F, covered.",
    "In at 350°F, covered"
   ],
   [
    "12:30",
    "M",
    "When a knife slides in with slight resistance, foil off. Bake on, uncovered, until pale golden and fully tender (about 35 minutes).",
    "Foil off"
   ],
   [
    "13:05",
    "M",
    "Out. Rest on the counter.",
    "Out, rest"
   ],
   [
    "14:15",
    "M",
    "Oven at 375°F. Brush the ridges with {{2 Tbsp|28 g}} melted butter, scatter the bagged cheese ({{about 1 cup|100 g}}). Bake uncovered until deep golden with dark crisp edges, about 30 minutes.",
    "Cheese top, 375°F"
   ],
   [
    "14:45",
    "M",
    "Out. Rest 10 minutes. Scatter {{1 tsp|1 g}} thyme leaves.",
    "Out, thyme"
   ]
  ],
  "tips": [
   "Bakes slower at 350°F than the recipe's 400°F, and the bird slows it too: go by the knife, not the clock.",
   "If it won't fit above the bird, check whether the toaster oven takes the pan; if not, it goes in after the bird comes out at 1:15."
  ]
 },
 {
  "id": "sweet",
  "name": "Sweet potato casserole",
  "where": "Microwave, then main oven",
  "color": "#d2691e",
  "lead": "K",
  "goal": "Mash in the pan by 11:30. Into the oven at 1:45; topping on at 2:20.",
  "ingredients": [
   "{{4 lb|1.8 kg}} sweet potatoes (6–7 medium)",
   "{{1 stick (8 Tbsp)|113 g}} butter",
   "{{½ cup packed|110 g}} brown sugar",
   "{{1½ cups|40 g}} corn flakes",
   "{{About 3 cups|About 150 g}} mini marshmallows",
   "{{13x9|33x23 cm}} foil pan, buttered"
  ],
  "steps": [
   [
    "10:15",
    "K",
    "Scrub {{4 lb|1.8 kg}} sweet potatoes. Poke all over with a fork. Microwave half ({{2 lb|900 g}}), 12–15 minutes, turning halfway, until completely soft.",
    "Microwave batch 1"
   ],
   [
    "10:45",
    "K",
    "Microwave the second {{2 lb|900 g}} the same way.",
    "Microwave batch 2"
   ],
   [
    "11:00",
    "K",
    "Cool enough to handle. Scoop the flesh out. Mash with {{6 Tbsp|85 g}} butter and {{6 Tbsp|80 g}} brown sugar. Taste; it's Krista's call.",
    "Scoop and mash"
   ],
   [
    "11:15",
    "K",
    "Spread level in the buttered {{13x9|33x23 cm}} foil pan. Cover. Into the fridge.",
    "Into pan, fridge"
   ],
   [
    "13:00",
    "K",
    "Out of the fridge to take the chill off.",
    "Out of fridge"
   ],
   [
    "13:45",
    "K",
    "Into the oven at 375°F. Timer 35 minutes.",
    "In at 375°F"
   ],
   [
    "14:10",
    "K",
    "Topping: {{1½ cups|40 g}} corn flakes tossed with {{2 Tbsp|28 g}} melted butter and {{2 Tbsp|30 g}} brown sugar.",
    "Make topping"
   ],
   [
    "14:20",
    "K",
    "Corn flakes and {{about 3 cups|about 150 g}} mini marshmallows on. Back in about 20 minutes until puffed and golden. Look at 10 minutes: marshmallows go from golden to black fast.",
    "Topping on"
   ],
   [
    "14:40",
    "K",
    "Out. To the table on a trivet.",
    "Out, to table"
   ]
  ],
  "tips": [
   "Amounts are estimates; Krista's taste rules."
  ]
 },
 {
  "id": "broccoli",
  "name": "Broccoli and cheddar",
  "where": "Stovetop, then main oven",
  "color": "#3f7d3a",
  "lead": "C",
  "goal": "Prep done by 10:00. Into the oven at 2:25.",
  "ingredients": [
   "{{2½ lb|1.1 kg}} broccoli florets (about 3 heads)",
   "{{3 Tbsp|42 g}} butter",
   "1 garlic clove ({{about 1 tsp|3 g}}), finely grated",
   "{{3 Tbsp|24 g}} flour",
   "{{2 cups|490 g}} whole milk, warmed",
   "{{10 oz|283 g}} sharp cheddar, grated from a block ({{8 oz|227 g}} if that's all there is)",
   "A small handful ({{about ¼ cup|15 g}}) of grated Parmigiano, if there's extra",
   "{{1 tsp|5 g}} Dijon",
   "A few dashes of hot sauce (Frank's or Tabasco)",
   "Pinch of cayenne, a little nutmeg",
   "{{½ tsp|3 g}} salt, plus plenty for the water",
   "{{13x9|33x23 cm}} foil pan"
  ],
  "steps": [
   [
    "08:35",
    "C",
    "Big pot of water on to boil, with a big handful of salt. Grate {{10 oz|283 g}} cheddar from the block and leave it on the counter. Cut {{2½ lb|1.1 kg}} broccoli into bite-size florets.",
    "Pot on, grate, florets"
   ],
   [
    "09:00",
    "C",
    "Blanch the broccoli 2 minutes, until bright green. Lift it out with a slotted spoon or spider onto a towel-lined sheet pan to dry. Don't use the sink: raw turkey is being rinsed there until 9:30.",
    "Blanch 2 min, dry"
   ],
   [
    "09:30",
    "C",
    "Sauce: melt {{3 Tbsp|42 g}} butter on medium. 1 grated garlic clove in for 30 seconds. Whisk in {{3 Tbsp|24 g}} flour, 2 minutes, without browning. Whisk in {{2 cups|490 g}} warm milk a splash at a time. Simmer, whisking, 5 minutes, until it coats a spoon.",
    "Make the white sauce"
   ],
   [
    "09:40",
    "C",
    "Off the heat. Wait a minute so it stops bubbling. Add the cheddar a handful at a time, stirring until each melts, then a small handful of Parmigiano if there is some. {{1 tsp|5 g}} Dijon, a few dashes hot sauce, a pinch of cayenne, a little nutmeg, {{½ tsp|3 g}} salt. It should taste a little too strong on its own.",
    "Cheese in, season"
   ],
   [
    "10:00",
    "C",
    "Press plastic wrap onto the sauce's surface. Box the broccoli and the sauce separately. Both into the fridge.",
    "Box, fridge"
   ],
   [
    "14:05",
    "C",
    "Sauce into a pan on low with a splash of milk. Stir often until hot, about 15 minutes. Never let it boil.",
    "Warm sauce gently"
   ],
   [
    "14:25",
    "C",
    "Broccoli into the {{13x9|33x23 cm}} foil pan. Pour the hot sauce over. Into the oven at 375°F, 20 minutes.",
    "Pan + sauce, oven"
   ],
   [
    "14:45",
    "C",
    "Out. To the table.",
    "Out, to table"
   ]
  ],
  "tips": [
   "No American cheese: the white sauce keeps it smooth. Grate your own cheddar (bagged shreds go grainy) and never boil it once the cheese is in.",
   "Gone thick or grainy? Off the heat, a splash of warm milk, whisk hard."
  ]
 },
 {
  "id": "brussels",
  "name": "Brussels sprouts",
  "where": "Stovetop, 12-inch skillet",
  "color": "#556b2f",
  "lead": "Mk",
  "goal": "Prep done by 10:15. Seared on the stovetop in three batches from 2:15.",
  "ingredients": [
   "{{3 lb|1.36 kg}} Brussels sprouts",
   "{{6 oz|170 g}} diced pancetta",
   "4 shallots ({{about 6 oz|160 g}}), halved and thinly sliced",
   "{{3 Tbsp|40 g}} olive oil",
   "{{¼ cup|80 g}} thick balsamic (or {{½ cup|128 g}} regular)",
   "{{2 Tbsp|42 g}} honey",
   "{{1½ oz|45 g}} Parmigiano, shaved with a peeler",
   "1 lemon, for zest",
   "{{1½ tsp|5 g}} kosher salt, black pepper",
   "{{12-inch|30 cm}} skillet (cast iron if there is one) with a lid",
   "A big bowl and foil"
  ],
  "steps": [
   [
    "09:00",
    "Mk",
    "Trim the ends of {{3 lb|1.36 kg}} sprouts and pull off loose leaves. Halve each sprout; quarter the big ones. Bag them in the fridge.",
    "Trim and halve"
   ],
   [
    "09:30",
    "Mk",
    "Glaze, with the thick balsamic: {{¼ cup|80 g}} thick balsamic and {{1 Tbsp|21 g}} honey in a small pan on low, just until blended, about 1 minute. Don't simmer it: it's already reduced. Taste: if it's sweet enough, skip the honey. Too thick to drizzle? A teaspoon of water. (With thin balsamic instead: {{½ cup|128 g}} plus {{2 Tbsp|42 g}} honey, simmered about 8 minutes until reduced by half.) Into a jar.",
    "Glaze"
   ],
   [
    "09:45",
    "Mk",
    "{{6 oz|170 g}} diced pancetta into a cold {{12-inch|30 cm}} skillet, medium heat, until crisp, about 9 minutes. Lift it out. Fry 4 sliced shallots in the fat until golden, about 6 minutes; onto paper towel. Pour the fat into a jar.",
    "Pancetta and shallots"
   ],
   [
    "14:05",
    "Mk",
    "Set up by the stove: sprouts, pancetta fat, olive oil, salt, pepper, a big bowl, foil. Glaze, pancetta, shallots, Parmesan and lemon lined up for the finish.",
    "Set up by the stove"
   ],
   [
    "14:15",
    "Mk",
    "Batch 1: skillet on medium-high with {{1 Tbsp|13 g}} pancetta fat and {{1 Tbsp|13 g}} olive oil (if the pancetta fat runs out, use olive oil). A third of the sprouts, cut side down, one layer. Don't touch them for 5 minutes, until the faces are deep brown. Add {{2 Tbsp|30 g}} water, lid on, 2 minutes, until a knife slides into the core. A pinch of salt. Into the bowl, foil over.",
    "Batch 1"
   ],
   [
    "14:24",
    "Mk",
    "Batch 2, the same way: {{1 Tbsp|13 g}} fat, {{1 Tbsp|13 g}} oil, a third of the sprouts, 5 minutes, {{2 Tbsp|30 g}} water, lid on 2 minutes.",
    "Batch 2"
   ],
   [
    "14:33",
    "Mk",
    "Batch 3, the same way: {{1 Tbsp|13 g}} fat, {{1 Tbsp|13 g}} oil, the last of the sprouts, 5 minutes, {{2 Tbsp|30 g}} water, lid on 2 minutes.",
    "Batch 3"
   ],
   [
    "14:45",
    "Mk",
    "Toss everything with the pancetta, shallots and three quarters of the glaze. Onto the platter. Drizzle the rest. Shave {{1½ oz|45 g}} Parmigiano and zest 1 lemon over. Taste before any more salt. To the table.",
    "Toss, finish, serve"
   ]
  ],
  "tips": [
   "Pancetta is salty: taste before adding more salt.",
   "Don't crowd the pan: one layer, or they steam instead of browning."
  ]
 }
];
const OTHERS = [
 [
  "13:15",
  "M",
  "Light the Weber; set it for about 350°F, burners under one side only."
 ],
 [
  "13:20",
  "L",
  "Spanakopita into the main oven at 375°F once the bird is out, about 40–45 minutes."
 ],
 [
  "13:25",
  "K",
  "Stacey's stuffing and scalloped carrots into the Weber, covered, on the unlit side. Lid shut. Hot through in 30–40 minutes."
 ],
 [
  "14:05",
  "K",
  "Stacey's dishes hot through: turn the Weber to low and keep the lid shut until serving."
 ],
 [
  "14:05",
  "L",
  "Spanakopita out; to the guests with the appetizers."
 ],
 [
  "15:00",
  "K",
  "Sit down."
 ]
];
