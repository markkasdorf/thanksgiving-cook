const PEOPLE = {"M":"Mark","K":"Krista","C":"Cassandra","Mk":"Marky","S":"Sawyer","B":"Bupa","L":"Laurie"};
const DISHES = [
 {
  "id": "smoked",
  "name": "Smoked turkey",
  "where": "Bupa's Keg",
  "color": "#8a4b2a",
  "lead": "M",
  "goal": "Done. Carve at 1:30 for a 2:00 sit-down.",
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
    "M",
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
    "M",
    "Keg watch: read the dome now and then. Tell Mark if it leaves 300–350°F.",
    "Keg watch"
   ],
   [
    "12:25",
    "M",
    "Check deep in the breast every 10 minutes. Off when the deepest reading is 155°F (thighs are already past 170°F). Foil over the legs, not the breast.",
    "Check every 10 min"
   ],
   [
    "12:40",
    "M",
    "Off at 152°F deepest breast; rested 15 minutes, then wrapped in foil and towels in a clean cooler.",
    "Off, into cooler"
   ],
   [
    "13:30",
    "M",
    "Out of the cooler. Carve onto a platter. This is the juicy breast: serve it as the main white meat.",
    "Carve"
   ]
  ],
  "tips": [
   "Smoked meat stays pink under the skin even when cooked. Trust the thermometer, not the colour.",
   "It rests 60–90 minutes under foil and stays hot. That rest is the day's buffer.",
   "Breast browning too fast? Lay a loose piece of foil over it."
  ],
  "status": "Off. Wrapped and holding in the cooler. Carve at 1:30."
 },
 {
  "id": "roast",
  "name": "Roast turkey",
  "where": "Main oven",
  "color": "#b5651d",
  "lead": "M",
  "goal": "Breast slices rescued in warm broth and butter. Dark meat is fine.",
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
    "M",
    "Out of the brine. Check the cavity is empty (no neck or giblet bag). Rinse inside and out. Pat dry inside and out. Onto the rack in the roasting pan. Pour the brine away outside. Then scrub the sink and counter with hot soapy water: raw turkey was there, and the broccoli drains next.",
    "Out of brine, dry, rack"
   ],
   [
    "09:45",
    "M",
    "Oven to 500°F. Move a second rack above where the bird will sit and check a {{13x9|33x23 cm}} pan fits over it (the gratin goes there). Microwave 1 apple and ½ onion (both cut up), 1 cinnamon stick and {{1 cup|240 g}} water for 5 minutes.",
    "Oven 500°F, rack, aromatics"
   ],
   [
    "11:00",
    "M",
    "Hot aromatics, 4 rosemary sprigs and 6 sage leaves into the cavity. Rub the skin with about {{2 Tbsp|28 g}} oil. Lowest rack at 500°F. Timer 30 minutes.",
    "In at 500°F"
   ],
   [
    "11:30",
    "M",
    "Oven down to 350°F. Probe in the thickest part of the breast. About {{1 cup|240 g}} of water into the pan so the drippings don't scorch.",
    "Down to 350°F, probe, water"
   ],
   [
    "12:50",
    "M",
    "Out early: breast 172–190°F, thighs 180°F+. Rest uncovered 15–20 minutes, then loosely tented. Drippings into a jug for the gravy.",
    "Out, rest"
   ],
   [
    "13:15",
    "M",
    "Carve the breast, slice ½ inch thick. Slices into a foil pan with {{1 cup|240 g}} warm broth and {{2–3 Tbsp|30–40 g}} butter in pieces. Legs and thighs in too. Foil on tight.",
    "Slice into broth"
   ],
   [
    "13:30",
    "M",
    "Pan into the main oven at 375°F for 15 minutes, until hot.",
    "Warm in oven"
   ]
  ],
  "tips": [
   "Drippings from a brined bird are salty. Tell whoever finishes the gravy."
  ],
  "status": "Out early and overcooked in the breast. Resting; slices go into broth and butter at 1:15."
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
    "K",
    "Second pot, medium-low: melt {{5 Tbsp|71 g}} butter. When the foam settles, whisk in {{6 Tbsp|47 g}} flour. Stir constantly until nutty brown, about 10 minutes.",
    "Brown roux"
   ],
   [
    "10:55",
    "K",
    "Whisk in the hot broth (all {{8 cups|1.9 litres}}) a little at a time, hard. Then {{1½ cups|355 g}} white wine. Boil, then simmer on medium-low 30 minutes until slightly thick. Turn it off.",
    "Broth + wine, simmer 30"
   ],
   [
    "11:00",
    "K",
    "Cut the gristle off the gizzards. Dice the hearts and gizzards. Into the fridge.",
    "Dice giblets"
   ],
   [
    "12:25",
    "K",
    "Gravy base into the fridge now, lid on. Two hours off the heat is the limit.",
    "Into the fridge"
   ],
   [
    "13:20",
    "K",
    "Base out of the fridge, back to a simmer, stirring.",
    "Back to simmer"
   ],
   [
    "13:25",
    "K",
    "Spoon the fat off the drippings in the jug. Add the drippings a little at a time, tasting (they're salty and concentrated). Diced giblets in. Salt only at the end. Hold on low.",
    "Drippings + giblets in"
   ],
   [
    "13:50",
    "K",
    "Into the gravy boat.",
    "Into boat"
   ]
  ],
  "tips": [
   "Brined drippings are salty: taste before you salt.",
   "Too thin at 2:45? Whisk {{2 Tbsp|16 g}} cornstarch into {{¼ cup|60 g}} cold water, stir it in, simmer 1 minute.",
   "Between 11:30 and 1:15 keep the lid on. It's under two hours off the heat, which is fine."
  ],
  "status": "Base in the fridge. Finish from 1:20."
 },
 {
  "id": "gratin",
  "name": "Au gratin potatoes",
  "where": "Main oven",
  "color": "#c9a227",
  "lead": "Mk",
  "goal": "Cheese top at 12:55; out at 1:30.",
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
    "Mk",
    "Peel the {{6 lb|2.7 kg}} of potatoes. Keep them whole in a bowl of cold water so they don't go grey. Pat dry just before slicing. (Soaking whole is fine; it's the slices that mustn't be rinsed.)",
    "Peel potatoes"
   ],
   [
    "10:15",
    "Mk",
    "Infuse the cream: {{3 cups|710 g}} heavy cream, 5 smashed garlic cloves, 6 thyme sprigs, 1 bay leaf and a few gratings of nutmeg to a bare simmer. Off the heat, cover, 15 minutes.",
    "Infuse cream"
   ],
   [
    "10:30",
    "Mk",
    "Strain into your biggest bowl, pressing the garlic. Stir in {{6 tsp Diamond Crystal salt (3 tsp Morton)|18 g kosher salt}} and {{1 tsp|2 g}} pepper. Butter the pan with {{1 Tbsp|14 g}} butter. Mix {{8 oz|225 g}} Gruyère and {{3 oz|85 g}} Parmigiano; bag a third of it ({{about 1 cup|100 g}}) for later. Whisk the rest into the warm cream.",
    "Strain, cheese, pan"
   ],
   [
    "10:45",
    "Mk",
    "Glove on. Slice the potatoes {{⅛ inch|3 mm}} on the mandoline straight into the cream, tossing so every slice is coated. Don't rinse them.",
    "Mandoline"
   ],
   [
    "11:00",
    "Mk",
    "Square up stacks like a deck of cards and stand them on edge in the {{13x9|33x23 cm}} pan, packed tight. Pour cream to halfway up. Foil on tight.",
    "Pack the pan, foil"
   ],
   [
    "11:30",
    "Mk",
    "Into the oven on the top rack, beside the bird, once the oven is down to 350°F. Covered.",
    "In at 350°F, covered"
   ],
   [
    "12:55",
    "Mk",
    "Knife test. Foil off. Brush the ridges with {{2 Tbsp|28 g}} melted butter, scatter the bagged cheese. Back in at 375°F, uncovered, until deep golden with crisp edges, about 30 minutes (10 more if the knife met real resistance).",
    "Cheese top, 375°F"
   ],
   [
    "13:30",
    "Mk",
    "Out. Rest 10 minutes. Scatter {{1 tsp|1 g}} thyme leaves.",
    "Out, thyme"
   ]
  ],
  "tips": [
   "Bakes slower at 350°F than the recipe's 400°F, and the bird slows it too: go by the knife, not the clock.",
   "If it won't fit above the bird, check whether the toaster oven takes the pan; if not, it goes in after the bird comes out at 1:15."
  ],
  "status": "In the oven; cheese top going on now at 375°F."
 },
 {
  "id": "sweet",
  "name": "Sweet potato casserole",
  "where": "Toaster oven",
  "color": "#d2691e",
  "lead": "K",
  "goal": "Toaster oven from 12:55; out about 1:40.",
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
    "12:55",
    "K",
    "Into the toaster oven at 375°F, covered with foil so the top doesn't scorch near the element. 30 minutes.",
    "Toaster oven, covered"
   ],
   [
    "13:20",
    "K",
    "Topping: {{1½ cups|40 g}} corn flakes tossed with {{2 Tbsp|28 g}} melted butter and {{2 Tbsp|30 g}} brown sugar.",
    "Make topping"
   ],
   [
    "13:25",
    "K",
    "Foil off. Corn flakes on. 10 minutes.",
    "Corn flakes on"
   ],
   [
    "13:35",
    "K",
    "Marshmallows on ({{about 3 cups|about 150 g}}). Stay at the toaster oven: 2–3 minutes may be enough that close to the element. Out the moment they're golden.",
    "Marshmallows, watch"
   ],
   [
    "13:45",
    "K",
    "To the table on a trivet.",
    "To table"
   ]
  ],
  "tips": [
   "Amounts are estimates; Krista's taste rules."
  ],
  "status": "Into the toaster oven now, covered."
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
    "13:00",
    "C",
    "Sauce in a pan on low with a splash of milk. Stir until hot, about 15 minutes. Never let it boil.",
    "Warm sauce"
   ],
   [
    "13:15",
    "C",
    "Broccoli into the {{13x9|33x23 cm}} foil pan, hot sauce over, into the main oven beside the gratin at 375°F. 20 minutes.",
    "Into oven"
   ],
   [
    "13:35",
    "C",
    "Out. To the table.",
    "Out, to table"
   ]
  ],
  "tips": [
   "No American cheese: the white sauce keeps it smooth. Grate your own cheddar (bagged shreds go grainy) and never boil it once the cheese is in.",
   "Gone thick or grainy? Off the heat, a splash of warm milk, whisk hard."
  ],
  "status": "Both in the fridge. Sauce on at 1:00."
 },
 {
  "id": "brussels",
  "name": "Brussels sprouts",
  "where": "Stovetop, 12-inch skillet",
  "color": "#556b2f",
  "lead": "S",
  "goal": "Cooked and glazed early. Reheated in the skillet at 2:35.",
  "ingredients": [
   "{{3 lb|1.36 kg}} Brussels sprouts",
   "{{6 oz|170 g}} diced pancetta",
   "4 shallots ({{about 6 oz|160 g}}), halved and thinly sliced",
   "{{6 Tbsp|80 g}} olive oil (the pancetta fat went into the glaze today)",
   "{{¼ cup|60 ml}} thick balsamic (or {{½ cup|128 g}} regular)",
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
    "S",
    "Trim the ends of {{3 lb|1.36 kg}} sprouts and pull off loose leaves. Halve each sprout; quarter the big ones. Bag them in the fridge.",
    "Trim and halve"
   ],
   [
    "09:30",
    "S",
    "Glaze, with the thick balsamic: {{¼ cup|60 ml}} thick balsamic and {{1 Tbsp|21 g}} honey in a small pan on low, just until blended, about 1 minute. Don't simmer it: it's already reduced. Taste: if it's sweet enough, skip the honey. Too thick to drizzle? A teaspoon of water. (With thin balsamic instead: {{½ cup|128 g}} plus {{2 Tbsp|42 g}} honey, simmered about 8 minutes until reduced by half.) Into a jar. (Today the pancetta fat went into the glaze too. That's fine: it's now a warm balsamic dressing. Shake or whisk it before using.)",
    "Glaze"
   ],
   [
    "09:45",
    "S",
    "{{6 oz|170 g}} diced pancetta into a cold {{12-inch|30 cm}} skillet, medium heat, until crisp, about 9 minutes. Lift it out. Fry 4 sliced shallots in the fat until golden, about 6 minutes; onto paper towel. Pour the fat into a jar. Once cool, pancetta and shallots go in the fridge in separate containers (not on the counter). The fat jar can stay out.",
    "Pancetta and shallots"
   ],
   [
    "12:25",
    "S",
    "Spread the glazed sprouts in a wide dish, uncovered, to cool fast. Then into the fridge.",
    "Cool, fridge"
   ],
   [
    "13:35",
    "S",
    "12-inch skillet on MEDIUM (the glaze burns) with {{1 Tbsp|13 g}} olive oil. Half the sprouts, stirring, about 5 minutes until hot. Into a bowl under foil. Repeat with the rest.",
    "Reheat in skillet"
   ],
   [
    "13:50",
    "S",
    "Onto the platter. Shave {{1½ oz|45 g}} Parmigiano and zest 1 lemon over. To the table.",
    "Finish, serve"
   ]
  ],
  "tips": [
   "Pancetta is salty: taste before adding more salt.",
   "Don't crowd the pan: one layer, or they steam instead of browning."
  ],
  "status": "Cooked and glazed, in the fridge. Reheat at 1:35."
 }
];
const OTHERS = [
 [
  "12:55",
  "B",
  "Stacey's stuffing and carrots, covered, into the Keg at 350°F on the grate over the water pan. Lid shut. Check there's still charcoal burning."
 ],
 [
  "12:55",
  "S",
  "Set the table for 9. Two turkey platters, gravy boat, trivets, a serving spoon for each dish."
 ],
 [
  "13:35",
  "B",
  "Check the middle of Stacey's dishes is steaming hot. Spanakopita into the Keg for 10 minutes."
 ],
 [
  "13:50",
  "S",
  "Water in every glass."
 ],
 [
  "14:00",
  "K",
  "Sit down."
 ]
];
const STATUS_AT = "12:55";
