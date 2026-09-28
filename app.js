const TIMES = ["8:50 p.m.", "9:00 p.m.", "9:10 p.m.", "9:20 p.m.", "9:30 p.m."];
const CASE_TIMES = [
  TIMES,
  ["11:30 p.m.", "11:40 p.m.", "11:50 p.m.", "12:00 a.m.", "12:10 a.m."],
  ["6:50 p.m.", "7:00 p.m.", "7:10 p.m.", "7:20 p.m.", "7:30 p.m."],
  ["9:50 p.m.", "10:00 p.m.", "10:10 p.m.", "10:20 p.m.", "10:30 p.m."],
  ["7:50 p.m.", "8:00 p.m.", "8:10 p.m.", "8:20 p.m.", "8:30 p.m."],
  ["5:40 a.m.", "5:50 a.m.", "6:00 a.m.", "6:10 a.m.", "6:20 a.m."],
  ["7:10 p.m.", "7:20 p.m.", "7:30 p.m.", "7:40 p.m.", "7:50 p.m."],
  ["8:30 p.m.", "8:40 p.m.", "8:50 p.m.", "9:00 p.m.", "9:10 p.m."],
  ["11:40 p.m.", "11:50 p.m.", "12:00 a.m.", "12:10 a.m.", "12:20 a.m."],
  ["9:40 p.m.", "9:50 p.m.", "10:00 p.m.", "10:10 p.m.", "10:20 p.m."],
  ["9:30 p.m.", "9:40 p.m.", "9:50 p.m.", "10:00 p.m.", "10:10 p.m."],
  ["8:20 p.m.", "8:30 p.m.", "8:40 p.m.", "8:50 p.m.", "9:00 p.m."],
  TIMES,
  ["9:40 p.m.", "9:50 p.m.", "10:00 p.m.", "10:10 p.m.", "10:20 p.m."],
  ["10:50 p.m.", "11:00 p.m.", "11:10 p.m.", "11:20 p.m.", "11:30 p.m."],
  ["5:40 p.m.", "5:50 p.m.", "6:00 p.m.", "6:10 p.m.", "6:20 p.m."],
  ["11:30 p.m.", "11:40 p.m.", "11:50 p.m.", "12:00 a.m.", "12:10 a.m."],
  ["3:10 p.m.", "3:20 p.m.", "3:30 p.m.", "3:40 p.m.", "3:50 p.m."],
  ["9:20 p.m.", "9:30 p.m.", "9:40 p.m.", "9:50 p.m.", "10:00 p.m."],
  ["9:40 p.m.", "9:50 p.m.", "10:00 p.m.", "10:10 p.m.", "10:20 p.m."]
];
const PARTS = [
  { title: "Part I - House of Secrets", range: [1, 5] },
  { title: "Part II - Beyond the Gates", range: [6, 10] },
  { title: "Part III - Instruments of Deceit", range: [11, 15] },
  { title: "Part IV - The Wrenmere Reckoning", range: [16, 20] }
];

const CASES = [
  {
    title: "The Last Bell", setting: "Wrenmere House", victim: "Eleanor Wren", difficulty: "Beginner",
    deck: "A stopped clock. A rain-locked manor. Five guests whose stories refuse to agree.",
    caseHeading: "The death at Wrenmere House",
    story: "At 9:24 p.m., during a storm-bound charity auction preview, Eleanor Wren was found dead in the Conservatory. A toppled mantel clock had stopped at 9:20. Beside her lay a bloodied brass candlestick. Five guests had moved through the east wing in the forty minutes before the alarm. Each person was seen once, in a different room, at a different time, carrying a different object.",
    suspects: [
      ["Felix Vale", "The family solicitor", "Eleanor planned to replace him after an audit exposed missing records."],
      ["Celia Frost", "The estranged niece", "A new will threatened to leave her with nothing but the house's debts."],
      ["Dorian Pike", "The art dealer", "Eleanor had discovered that his prized miniature was a forgery."],
      ["Mara Quinn", "The head gardener", "Eleanor intended to sell the glasshouse and dismiss the estate staff."],
      ["Iris Bell", "The society columnist", "Eleanor possessed letters that could end Iris's career and marriage."]
    ],
    rooms: ["Library", "Kitchen", "Gallery", "Conservatory", "Billiard Room"],
    items: ["Silver flask", "Torn letter", "Pocket watch", "Brass candlestick", "Blue scarf"],
    inspectorNote: "No one entered or left the east wing during the relevant period. The servants agree on the five arrival times, but not on who appeared where. One suspect insists the stopped clock is a distraction. It is not.",
    solutionHeading: "Mara Quinn rang the last bell",
    deductionPath: [
      "Clues 1-4 place the Kitchen at 9:00, the Gallery at 9:10, the Conservatory at 9:20, and the Billiard Room at 9:30. The Library must therefore be the 8:50 room.",
      "Clues 5 and 6 put Dorian and the pocket watch in the Gallery at 9:10.",
      "Clue 7 puts Mara at 9:20, which is the Conservatory slot. Clue 8 then puts Iris at 9:30.",
      "Clue 9 puts Celia at 9:00, leaving Felix at 8:50. Clues 10-12 place the flask at 8:50, the letter at 9:00, and the scarf at 9:30.",
      "The only unused object at 9:20 is the brass candlestick. Mara therefore matches the room, time, and weapon fixed by the crime scene."
    ]
  },
  {
    title: "A Toast to Silence", setting: "The Lantern Club", victim: "Sebastian Rook", difficulty: "Beginner",
    deck: "The champagne was untouched. The alibis were not.",
    story: "Minutes before the Lantern Club's midnight toast, its founder Sebastian Rook collapsed in the Winter Garden. A crystal decanter lay shattered beside him. Five members crossed the private floor during the final forty minutes of his life, each through a different room and with a different possession.",
    suspects: [["Nora Finch","The club secretary"],["Adrian Moss","The political aide"],["Leila Voss","The soprano"],["Gideon Shaw","The vintner"],["Tamsin Grey","The photographer"]],
    rooms: ["Card Room","Pantry","Music Room","Winter Garden","Reading Room"],
    items: ["Gold lighter","Sealed menu","Opera glasses","Crystal decanter","Black glove"]
  },
  {
    title: "The Vanishing Violin", setting: "Harrowby Hall", victim: "Maestro Emil Hart", difficulty: "Beginner",
    deck: "A priceless violin disappeared before its owner played his final note.",
    story: "Maestro Emil Hart was discovered in the Green Salon after a private recital rehearsal. The Stradivarius he guarded for thirty years had vanished, while a snapped ebony bow remained at the scene. Five people were recorded crossing Harrowby Hall in a strict sequence.",
    suspects: [["Theo March","The first violinist"],["Anika Reed","The patron"],["Basil Crowe","The conductor"],["Seren Holt","The luthier"],["Miles Penn","The critic"]],
    rooms: ["Foyer","Wardrobe","Music Library","Green Salon","Grand Stage"],
    items: ["Rosin tin","Folded score","Metronome","Ebony bow","White carnation"]
  },
  {
    title: "Ashes in the Map Room", setting: "Calder Estate", victim: "Sir Rowan Calder", difficulty: "Intermediate",
    deck: "One map burned. One inheritance redrawn.",
    story: "Sir Rowan Calder died as smoke crept from the estate's old Map Room. The fire was small, deliberate, and set after the fatal blow. Five overnight guests had each been seen in one wing of the house with an object that did not belong there.",
    suspects: [["Beatrice Crane","The archivist"],["Owen Flint","The nephew"],["Priya North","The surveyor"],["Lucian Beck","The estate manager"],["Harriet Sloane","The historian"]],
    rooms: ["Boot Room","Breakfast Hall","Portrait Gallery","Map Room","Orangery"],
    items: ["Brass compass","Charred deed","Red pencil","Marble bookend","Green ribbon"]
  },
  {
    title: "The Blue Orchid", setting: "Wrenmere Glasshouse", victim: "Dr. Viola Ames", difficulty: "Intermediate",
    deck: "The rarest flower in England bloomed beside a body.",
    story: "Botanist Viola Ames was found beneath the blue orchid she had spent a decade cultivating. The specimen was unharmed; the heavy watering lance beside her was not. Five visitors had signed into separate glasshouse zones that evening.",
    suspects: [["Juniper Hall","The research fellow"],["Marcus Yeo","The collector"],["Clara Dunn","The seed merchant"],["Elias Thorn","The groundskeeper"],["Poppy Wren","The benefactor"]],
    rooms: ["Fern House","Potting Shed","Palm Court","Orchid Room","Herbarium"],
    items: ["Seed packet","Lab note","Humidity gauge","Watering lance","Blue handkerchief"]
  },
  {
    title: "Death at Low Tide", setting: "Greyhaven Lighthouse", victim: "Captain Amos Pike", difficulty: "Intermediate",
    deck: "The sea withdrew and exposed more than the rocks.",
    story: "At low tide, retired captain Amos Pike was found in the lighthouse Chart Room. A rusted marlinspike had delivered the fatal wound. Five islanders had crossed the causeway before the water rose, each carrying something remembered by the keeper.",
    suspects: [["Mina Cole","The harbourmaster"],["Rufus Dane","The salvager"],["Elena Ward","The marine biologist"],["Jonah Kells","The deckhand"],["Sable Fox","The innkeeper"]],
    rooms: ["Lamp Store","Galley","Signal Room","Chart Room","Boathouse"],
    items: ["Storm lantern","Tide table","Brass whistle","Marlinspike","Yellow oilskin"]
  },
  {
    title: "The Locked Rehearsal", setting: "Marrow Theatre", victim: "Imogen Price", difficulty: "Intermediate",
    deck: "The stage door was locked. The murderer was already inside.",
    story: "Director Imogen Price failed to appear for the final rehearsal. She was found behind the velvet curtain in the Prop Room, killed with an iron stage weight. Five members of the company had moved through the darkened theatre on separate errands.",
    suspects: [["Cass Rowan","The leading actor"],["Dahlia Moon","The understudy"],["Victor Lane","The producer"],["Esme Hart","The stage manager"],["Noel Bright","The playwright"]],
    rooms: ["Box Office","Dressing Room","Fly Gallery","Prop Room","Orchestra Pit"],
    items: ["Makeup case","Revised script","Cue lamp","Stage weight","Feather mask"]
  },
  {
    title: "A Portrait in Red", setting: "Bellweather Gallery", victim: "Alistair Wynn", difficulty: "Intermediate",
    deck: "Fresh paint concealed an older crime.",
    story: "Dealer Alistair Wynn died during the private viewing of an anonymous portrait. The canvas had been slashed, and a bronze palette knife lay beside him in the Red Room. Five guests were photographed entering separate galleries before the lights failed.",
    suspects: [["Maeve Orr","The portraitist"],["Silas Kent","The restorer"],["Helena Ward","The collector"],["Roman Dyer","The curator"],["Kit Mercer","The journalist"]],
    rooms: ["Print Room","Conservation Lab","Sculpture Hall","Red Room","Auction Salon"],
    items: ["Paint rag","Provenance card","Magnifying lens","Palette knife","Crimson shawl"]
  },
  {
    title: "The Midnight Telegram", setting: "Wrenmere Post House", victim: "Arthur Quill", difficulty: "Intermediate",
    deck: "The message arrived at midnight. Its recipient never read it.",
    story: "Postmaster Arthur Quill was found beside the silent telegraph in the Sorting Room. A cast-iron date stamp had been wiped clean. Five late callers had each been admitted through a different office with a different parcel or personal item.",
    suspects: [["Elsie Crane","The telegraphist"],["Hugh Marr","The magistrate"],["Farah Bell","The courier"],["Percival Snow","The clerk"],["Ada Lark","The codebreaker"]],
    rooms: ["Front Office","Parcel Store","Telegraph Room","Sorting Room","Mail Coach Bay"],
    items: ["Leather pouch","Undelivered wire","Code wheel","Date stamp","Violet umbrella"]
  },
  {
    title: "Snowfall at Blackthorn Lodge", setting: "Blackthorn Lodge", victim: "Edmund Blackthorn", difficulty: "Intermediate",
    deck: "No footprints led away from the lodge.",
    story: "A blizzard sealed Blackthorn Lodge from the world. By the time the generator failed, Edmund Blackthorn was dead in the Trophy Room beneath a fallen hunting plaque. Five residents had moved from room to room before snow erased the view outside.",
    suspects: [["Rose Vale","The daughter"],["Alec Frost","The physician"],["Nina Brook","The cook"],["Gareth Pine","The gamekeeper"],["Milo Quince","The biographer"]],
    rooms: ["Mudroom","Kitchen","Gun Room","Trophy Room","Winter Parlour"],
    items: ["Silver thermos","Medical chart","Compass watch","Hunting plaque","Red scarf"]
  },
  {
    title: "The Glass Key", setting: "Alderwick Hotel", victim: "Constance Vale", difficulty: "Advanced",
    deck: "Every door was locked. One key was made to shatter.",
    story: "Hotelier Constance Vale was found in the mirrored Palm Suite after the staff heard breaking glass. The weapon was a heavy glass key from the reception display. Five guests had used the private floor during the same narrow interval.",
    suspects: [["Julian Ash","The architect"],["Mira Lowe","The heiress"],["Tobias Reed","The porter"],["Cora Wynn","The manager"],["Felix Hart","The illusionist"]],
    rooms: ["Lobby","Service Pantry","Mirror Hall","Palm Suite","Roof Lounge"],
    items: ["Room ledger","Bent keycard","Bell pull","Glass key","Pearl veil"]
  },
  {
    title: "Murder Between the Lines", setting: "The Quill and Lantern", victim: "Agnes Page", difficulty: "Advanced",
    deck: "A first edition contained a final confession.",
    story: "Bookseller Agnes Page was discovered in the Rare Books Vault after a literary supper. A stone book press had been moved from its stand. Five guests browsed five sections of the shop, each leaving behind one unmistakable object.",
    suspects: [["Edwin Verse","The novelist"],["Lila March","The editor"],["Bram Holt","The collector"],["Sylvia Quill","The assistant"],["Ned Folio","The printer"]],
    rooms: ["Reading Nook","Bindery","Poetry Loft","Rare Books Vault","Courtyard"],
    items: ["Fountain pen","Proof sheet","Monocle","Book press","Green bookmark"]
  },
  {
    title: "The Clockmaker's Guest", setting: "Vesper Clockworks", victim: "Henrik Vesper", difficulty: "Advanced",
    deck: "At nine twenty, every clock in the house stopped.",
    story: "Master clockmaker Henrik Vesper died in the Escapement Room as twenty clocks halted together. A weighted pendulum had been detached from the great hall clock. Five visitors arrived by appointment, each carrying a different piece of time.",
    suspects: [["Orla Tick","The apprentice"],["Simon Bell","The financier"],["Amira Dawn","The astronomer"],["Caleb Gear","The machinist"],["Willa Noon","The granddaughter"]],
    rooms: ["Showroom","Workshop","Bell Chamber","Escapement Room","Clock Tower"],
    items: ["Watch spring","Repair ticket","Star chart","Iron pendulum","Ivory glove"]
  },
  {
    title: "The Widow's Garden", setting: "Rosemere Gardens", victim: "Lady Lenora Rose", difficulty: "Advanced",
    deck: "Every flower had a meaning. One meant murder.",
    story: "Lady Lenora Rose was found among the night-blooming flowers in the Poison Garden. A marble sundial finial had been placed neatly beside her. Five invitees wandered the moonlit paths during her final garden party.",
    suspects: [["Emmett Green","The botanist"],["Flora Ash","The companion"],["Damien Reed","The stepson"],["Ivy Stone","The landscape architect"],["Pearl Moss","The perfumer"]],
    rooms: ["Rose Walk","Tea Pavilion","Maze","Poison Garden","Lily Terrace"],
    items: ["Pruning knife","Pressed violet","Garden map","Sundial finial","Lace parasol"]
  },
  {
    title: "Last Train to Wrenmere", setting: "The Nightingale Express", victim: "Justice Halden", difficulty: "Advanced",
    deck: "Five passengers. Four locked carriages. One final stop.",
    story: "Justice Halden was found in the Observation Car moments before the Nightingale Express reached Wrenmere. A brass luggage hook had been torn from the wall. Five passengers were seen moving between the reserved carriages at recorded times.",
    suspects: [["Mabel Cross","The governess"],["Ravi Flint","The barrister"],["Cecily Moor","The widow"],["Otis Rail","The conductor"],["Vera Penn","The correspondent"]],
    rooms: ["Dining Car","Sleeping Car","Mail Car","Observation Car","Brake Van"],
    items: ["Silver ticket case","Legal brief","Pocket timetable","Luggage hook","Green hatbox"]
  },
  {
    title: "The Cipher at Candlemas", setting: "Saint Orison College", victim: "Professor Abel Saye", difficulty: "Expert",
    deck: "The answer was written in a language no one admitted knowing.",
    story: "Cryptographer Abel Saye died during the Candlemas lecture, hidden in the Scriptorium while bells filled the quadrangle. A bronze seal press was the weapon. Five scholars crossed the old college carrying texts and tools from the archive.",
    suspects: [["Nadia Key","The linguist"],["Peter Rune","The dean"],["Sara Venn","The doctoral student"],["Colm Ashby","The archivist"],["Yuna Glass","The visiting scholar"]],
    rooms: ["Porter's Lodge","Archive","Lecture Hall","Scriptorium","Bell Cloister"],
    items: ["Cipher disk","Latin fragment","Wax tablet","Seal press","White candle"]
  },
  {
    title: "The Drowned Observatory", setting: "Merefall Observatory", victim: "Dr. Celeste Orr", difficulty: "Expert",
    deck: "The dome was dry. The victim's clothes were not.",
    story: "Astronomer Celeste Orr was found beneath the great telescope after the hill's water tanks ruptured. A brass telescope counterweight lay at her side. Five researchers had occupied distinct stations during the final observations.",
    suspects: [["Leon Star","The cosmologist"],["Maya Tide","The engineer"],["Oren Night","The donor"],["Selene Brook","The technician"],["Cass Comet","The science writer"]],
    rooms: ["Weather Station","Plate Library","Control Room","Telescope Dome","Pump House"],
    items: ["Red flashlight","Observation log","Star atlas","Counterweight","Silver raincoat"]
  },
  {
    title: "The Auction of Secrets", setting: "Wrenmere Assembly Rooms", victim: "Crispin Locke", difficulty: "Expert",
    deck: "Lot forty-seven was withdrawn. Its owner was silenced.",
    story: "Auctioneer Crispin Locke died in the Valuation Room while bidders waited for a missing jewel to appear. The oak gavel from the rostrum had vanished and reappeared beside him. Five registered bidders entered the staff corridor during the recess.",
    suspects: [["Sabine Gold","The jeweller"],["Hector Price","The rival auctioneer"],["Lena Wren","The trustee"],["Martin Lot","The porter"],["Opal Dean","The collector"]],
    rooms: ["Coat Check","Catalogue Office","Main Saloon","Valuation Room","Strong Room"],
    items: ["Bid paddle","Withdrawn card","Loupe","Oak gavel","Velvet purse"]
  },
  {
    title: "The House Without Footsteps", setting: "Hush House", victim: "Marion Hush", difficulty: "Expert",
    deck: "Fresh snow surrounded the house. No one had entered. No one had left.",
    story: "Recluse Marion Hush was found in the Sound Room of her experimental silent house. A stone doorstop had been lifted from the acoustic seal. Five residents were tracked by the house's mechanical indicator board, though one signal had been altered.",
    suspects: [["Evan Quiet","The sound engineer"],["Rhea Mute","The ward"],["Jonas Soft","The caretaker"],["Alice Hush","The sister"],["Grey Echo","The composer"]],
    rooms: ["Snow Porch","Kitchen","Listening Hall","Sound Room","Roof Walk"],
    items: ["Wax cylinder","Indicator card","Tuning fork","Stone doorstop","Grey slippers"]
  },
  {
    title: "The Final Invitation", setting: "Wrenmere House", victim: "Inspector Silas Wren", difficulty: "Master",
    deck: "The invitation named twenty guests. Only five arrived. One came to end the story.",
    story: "A year after Eleanor Wren's death, five figures from the county's darkest cases received identical invitations to Wrenmere House. Inspector Silas Wren was found in the Bell Tower beside the iron clapper that had summoned them. The final puzzle would reveal whether the murders had ever truly been separate.",
    suspects: [["Poppy Wren","The hidden heir"],["Ada Lark","The codebreaker"],["Cora Wynn","The hotel manager"],["Colm Ashby","The archivist"],["Vera Penn","The correspondent"]],
    rooms: ["Library","Old Kitchen","Portrait Gallery","Bell Tower","East Gate"],
    items: ["Wren signet","Final invitation","Cipher journal","Iron clapper","Olive overcoat"]
  }
].map((entry, index) => ({ ...entry, id: index + 1 }));

const SOLUTION_PATTERNS = {
  classic: { rooms: [0, 1, 2, 3, 4], times: [0, 1, 2, 3, 4], items: [0, 1, 2, 3, 4] },
  alibi: { rooms: [2, 4, 1, 0, 3], times: [1, 3, 0, 4, 2], items: [4, 0, 3, 1, 2] },
  trail: { rooms: [3, 0, 4, 2, 1], times: [4, 1, 3, 0, 2], items: [1, 3, 0, 4, 2] },
  sequence: { rooms: [1, 3, 0, 4, 2], times: [2, 0, 4, 1, 3], items: [2, 4, 1, 0, 3] },
  contradiction: { rooms: [4, 2, 3, 1, 0], times: [3, 4, 1, 2, 0], items: [3, 2, 4, 0, 1] }
};

const CASE_PROFILES = [
  { pattern: "classic", target: 3, caseType: "Classic deduction · Murder", evidenceHeading: "The twelve clues", evidenceIntro: "Build the timeline first, then carry each confirmed match across the other grids.", personLabel: "The killer", placeLabel: "Crime room", timeLabel: "Time of death", itemLabel: "Murder weapon", submissionHeading: "Make your accusation", resultVerb: "committed the murder" },
  { pattern: "alibi", target: 2, caseType: "Broken alibi · Murder", evidenceHeading: "Five alibis, seven records", evidenceIntro: "The signed room register is reliable. The spoken alibis are not. Reconstruct the records before deciding whose story breaks.", personLabel: "The liar", placeLabel: "Unaccounted room", timeLabel: "Critical time", itemLabel: "Concealed object", submissionHeading: "Expose the false alibi", resultVerb: "gave the fatal false alibi" },
  { pattern: "trail", target: 4, caseType: "Object trail · Disappearance", evidenceHeading: "The abandoned trail", evidenceIntro: "Trace each object through the hall, then connect it to the person who carried it.", personLabel: "The accomplice", placeLabel: "Last-seen room", timeLabel: "Vanishing time", itemLabel: "Object left behind", submissionHeading: "Explain the disappearance", resultVerb: "helped stage the disappearance" },
  { pattern: "contradiction", target: 0, caseType: "Contradiction case · Arson cover-up", evidenceHeading: "Statements under caution", evidenceIntro: "Each statement is individually true, but together they expose where the fire was used to hide an earlier crime.", personLabel: "The culprit", placeLabel: "Origin room", timeLabel: "Fire-setting time", itemLabel: "Planted evidence", submissionHeading: "Name the culprit", resultVerb: "set the fire to conceal the crime" },
  { pattern: "sequence", target: 1, caseType: "Movement sequence · Attempted poisoning", evidenceHeading: "Glasshouse movement log", evidenceIntro: "Establish the order of entry before matching the equipment carried through each zone.", personLabel: "The saboteur", placeLabel: "Contaminated zone", timeLabel: "Exposure time", itemLabel: "Altered equipment", submissionHeading: "Identify the saboteur", resultVerb: "tampered with the glasshouse equipment" },
  { pattern: "classic", target: 1, caseType: "Tide-table deduction · Murder", evidenceHeading: "The keeper's log", evidenceIntro: "Use the tide bell and causeway sightings as fixed anchors; the objects resolve the remaining movements.", personLabel: "The killer", placeLabel: "Crime room", timeLabel: "Time of death", itemLabel: "Murder weapon", submissionHeading: "Make your accusation", resultVerb: "committed the murder" },
  { pattern: "sequence", target: 3, caseType: "Cue sequence · Attempted murder", evidenceHeading: "The prompt-book record", evidenceIntro: "Stage cues happened in a fixed order. Match each cue to a room, company member, and prop.", personLabel: "The saboteur", placeLabel: "Rigged room", timeLabel: "Trigger time", itemLabel: "Rigged prop", submissionHeading: "Identify the saboteur", resultVerb: "rigged the fatal stage cue" },
  { pattern: "contradiction", target: 4, caseType: "Provenance puzzle · Murder", evidenceHeading: "The provenance contradictions", evidenceIntro: "The photographs establish rooms; the catalogue times and objects reveal which provenance story cannot stand.", personLabel: "The forger", placeLabel: "Exchange room", timeLabel: "Exchange time", itemLabel: "Forged evidence", submissionHeading: "Expose the forger", resultVerb: "made the fatal exchange" },
  { pattern: "trail", target: 0, caseType: "Message trail · Interception", evidenceHeading: "The telegram's route", evidenceIntro: "Follow the parcels and office stamps to learn who intercepted the message before it reached its recipient.", personLabel: "The interceptor", placeLabel: "Intercept room", timeLabel: "Intercept time", itemLabel: "Taken message", submissionHeading: "Trace the interception", resultVerb: "intercepted the telegram" },
  { pattern: "alibi", target: 4, caseType: "Locked-house alibis · Murder", evidenceHeading: "Alibis in the snow", evidenceIntro: "No footprints crossed the grounds. The interior register and carried objects expose the only impossible alibi.", personLabel: "The killer", placeLabel: "Crime room", timeLabel: "Time of death", itemLabel: "Murder weapon", submissionHeading: "Break the locked-house alibi", resultVerb: "committed the murder" },
  { pattern: "contradiction", target: 2, caseType: "Impossible theft · Locked rooms", evidenceHeading: "The key ledger", evidenceIntro: "Every door was locked, but the key ledger, room sequence, and display objects cannot all support the same story.", personLabel: "The thief", placeLabel: "Removal room", timeLabel: "Removal time", itemLabel: "Stolen object", submissionHeading: "Solve the impossible theft", resultVerb: "removed the display object" },
  { pattern: "trail", target: 1, caseType: "Marginalia trail · Hidden confession", evidenceHeading: "Clues between the lines", evidenceIntro: "Match the abandoned reading objects to their sections and times; the owner of the final trace found the confession first.", personLabel: "The suppressor", placeLabel: "Discovery room", timeLabel: "Discovery time", itemLabel: "Hidden evidence", submissionHeading: "Recover the confession", resultVerb: "attempted to suppress the confession" },
  { pattern: "sequence", target: 0, caseType: "Mechanical sequence · Murder", evidenceHeading: "The stopped-clock sequence", evidenceIntro: "The clocks stopped in order, not together. Rebuild that sequence before assigning tools and visitors.", personLabel: "The killer", placeLabel: "Crime room", timeLabel: "True death time", itemLabel: "Murder weapon", submissionHeading: "Correct the false timeline", resultVerb: "committed the murder" },
  { pattern: "alibi", target: 3, caseType: "Symbolic alibis · Poisoning", evidenceHeading: "The language of flowers", evidenceIntro: "Each guest used a flower as an alibi. Match the tokens to paths and times to discover which symbol was planted.", personLabel: "The poisoner", placeLabel: "Poisoning site", timeLabel: "Poisoning time", itemLabel: "Planted token", submissionHeading: "Identify the poisoner", resultVerb: "planted the poisonous token" },
  { pattern: "sequence", target: 4, caseType: "Carriage sequence · Disappearance", evidenceHeading: "The conductor's sequence", evidenceIntro: "The train never stopped. Reconstruct the carriage movements to find who helped the missing passenger change identities.", personLabel: "The accomplice", placeLabel: "Switching carriage", timeLabel: "Switch time", itemLabel: "Disguise container", submissionHeading: "Explain the disappearance", resultVerb: "enabled the passenger's disappearance" },
  { pattern: "contradiction", target: 1, caseType: "Cipher testimony · Murder", evidenceHeading: "Decoded testimony", evidenceIntro: "The decoded statements fix rooms and times. Cross them with the archive tools to expose the scholar who lied in plain sight.", personLabel: "The killer", placeLabel: "Crime room", timeLabel: "Time of death", itemLabel: "Murder weapon", submissionHeading: "Submit the decoded accusation", resultVerb: "committed the murder" },
  { pattern: "trail", target: 3, caseType: "Evidence trail · Flood sabotage", evidenceHeading: "The waterline evidence", evidenceIntro: "Water moved downhill; people did not. Trace each dry object back to its station and owner.", personLabel: "The saboteur", placeLabel: "Valve station", timeLabel: "Release time", itemLabel: "Sabotage tool", submissionHeading: "Identify the saboteur", resultVerb: "released the observatory tanks" },
  { pattern: "alibi", target: 0, caseType: "Bidder alibis · Jewel theft", evidenceHeading: "The recess alibis", evidenceIntro: "Bid records fix four movements. The missing jewel belongs to the one route the alibis cannot explain.", personLabel: "The thief", placeLabel: "Hiding place", timeLabel: "Theft time", itemLabel: "Stolen lot", submissionHeading: "Recover lot forty-seven", resultVerb: "stole lot forty-seven" },
  { pattern: "contradiction", target: 2, caseType: "Signal contradiction · Staged disappearance", evidenceHeading: "The altered indicator board", evidenceIntro: "One signal was falsified. Reconstruct the true room and time records, then identify who made the house appear sealed.", personLabel: "The architect", placeLabel: "Staging room", timeLabel: "Signal-change time", itemLabel: "Altered signal", submissionHeading: "Unmask the staging", resultVerb: "staged the disappearance" },
  { pattern: "trail", target: 4, caseType: "Final synthesis · Conspiracy", evidenceHeading: "Twenty echoes, twelve final clues", evidenceIntro: "Objects and methods from earlier cases return in new hands. Solve the trail first; only then decide whether the murders were connected.", personLabel: "The mastermind", placeLabel: "Final meeting place", timeLabel: "Reckoning time", itemLabel: "Linking evidence", submissionHeading: "Name the mastermind", resultVerb: "orchestrated the Wrenmere conspiracy" }
];

const STORY_UPDATES = {
  3: "The Green Salon stood empty after the private rehearsal. Maestro Emil Hart and his Stradivarius had vanished, while a snapped ebony bow remained on the carpet. Five people crossed Harrowby Hall in a strict sequence. One of them helped Hart turn a theft into a disappearance.",
  5: "Botanist Viola Ames collapsed beneath the blue orchid she had spent a decade cultivating, but prompt treatment saved her life. The specimen was unharmed; residue inside a heavy watering lance showed deliberate contamination. Five visitors had signed into separate glasshouse zones that evening.",
  7: "Director Imogen Price was found unconscious behind the velvet curtain moments before the final rehearsal. An iron stage weight had been rigged to fall on the next cue. Five company members had moved through the darkened theatre on separate errands.",
  9: "Postmaster Arthur Quill was struck beside the silent telegraph, but survived. The midnight message and a cast-iron date stamp had disappeared. Five late callers had each been admitted through a different office with a parcel or personal item.",
  11: "During a private reception at the Alderwick Hotel, the ceremonial glass key vanished from its locked display. Every door on the mirrored floor remained secured. Five guests had used the private corridor during the same narrow interval.",
  15: "Justice Halden vanished from the Nightingale Express moments before it reached Wrenmere. His compartment was locked from inside, yet a green hatbox appeared in the Brake Van. Five passengers were seen moving between the reserved carriages at recorded times.",
  17: "The great telescope narrowly missed astronomer Celeste Orr when the hill's water tanks ruptured and the dome machinery failed. A brass counterweight had been moved deliberately. Five researchers occupied distinct stations during the final observations.",
  18: "During the recess at Wrenmere Assembly Rooms, lot forty-seven—a celebrated black diamond—vanished before it reached the rostrum. Five registered bidders entered the staff corridor, each carrying an object recorded by the porter.",
  19: "Recluse Marion Hush vanished from the Sound Room of her experimental silent house. Fresh snow surrounded the building, and the mechanical indicator board showed no exit. Five residents remained inside, but one signal had been altered."
};

const ANSWER_SLOTS = {
  1: [3, 3, 3], 2: [3, 2, 3], 3: [3, 2, 3], 4: [3, 4, 1], 5: [3, 2, 3],
  6: [3, 0, 3], 7: [3, 3, 3], 8: [3, 1, 1], 9: [3, 2, 1], 10: [3, 4, 3],
  11: [3, 1, 3], 12: [3, 3, 4], 13: [3, 3, 3], 14: [3, 2, 1], 15: [3, 1, 4],
  16: [3, 4, 3], 17: [4, 2, 3], 18: [4, 0, 4], 19: [3, 3, 1], 20: [3, 4, 2]
};

function forceSlot(order, personIndex, valueIndex) {
  const adjusted = [...order];
  const currentOwner = adjusted.indexOf(valueIndex);
  [adjusted[personIndex], adjusted[currentOwner]] = [adjusted[currentOwner], adjusted[personIndex]];
  return adjusted;
}

CASES.forEach((data, index) => {
  const profile = CASE_PROFILES[index];
  Object.assign(data, profile);
  if (STORY_UPDATES[data.id]) data.story = STORY_UPDATES[data.id];
  if (data.id === 18) data.items[4] = "Black diamond";
  data.times = CASE_TIMES[index];
  data.goal = `Reconstruct all five records, then identify ${data.personLabel.toLowerCase()} whose room, time, and object match the fixed evidence.`;
  const pattern = SOLUTION_PATTERNS[profile.pattern];
  const [answerRoom, answerTime, answerItem] = ANSWER_SLOTS[data.id];
  const roomOrder = forceSlot(pattern.rooms, profile.target, answerRoom);
  const timeOrder = forceSlot(pattern.times, profile.target, answerTime);
  const itemOrder = forceSlot(pattern.items, profile.target, answerItem);
  data.records = data.suspects.map((suspect, personIndex) => ({
    person: suspect[0],
    room: data.rooms[roomOrder[personIndex]],
    time: data.times[timeOrder[personIndex]],
    item: data.items[itemOrder[personIndex]]
  }));
  data.answer = data.records[profile.target];
});

function partFor(id) {
  return PARTS.findIndex(part => id >= part.range[0] && id <= part.range[1]);
}

function cluesFor(data) {
  const records = data.records;
  const firstFour = records.slice(0, 4);
  const byTime = [...records].sort((a, b) => data.times.indexOf(a.time) - data.times.indexOf(b.time));
  if (data.id === 1) return [
    `The ${data.rooms[1]} was visited at 9:00 p.m.`,
    `The ${data.rooms[2]} visit happened exactly ten minutes after the ${data.rooms[1]} visit.`,
    `The ${data.rooms[3]} visit happened exactly ten minutes after the ${data.rooms[2]} visit.`,
    `The ${data.rooms[4]} was the final room visited.`,
    `The person carrying the ${data.items[2].toLowerCase()} was seen in the ${data.rooms[2]}.`,
    `${data.suspects[2][0]} was carrying the ${data.items[2].toLowerCase()}.`,
    `${data.suspects[3][0]} arrived exactly ten minutes after ${data.suspects[2][0]}.`,
    `${data.suspects[4][0]} arrived later than ${data.suspects[3][0]}.`,
    `${data.suspects[1][0]} arrived before ${data.suspects[2][0]}, but was not the first arrival.`,
    `${data.suspects[0][0]} was carrying the ${data.items[0].toLowerCase()}.`,
    `The ${data.items[1].toLowerCase()} was seen in the ${data.rooms[1]}.`,
    `The ${data.items[4].toLowerCase()} was seen in the ${data.rooms[4]}.`
  ];
  if (data.pattern === "alibi") return [
    ...firstFour.map((r, i) => `${r.person}'s signed alibi places ${i % 2 ? "them" : "that guest"} in the ${r.room} at ${r.time}`),
    ...firstFour.map((r, i) => `${i % 2 ? "A porter recorded" : "The inventory lists"} the ${r.item.toLowerCase()} with ${r.person}.`),
    `${byTime[4].person} was seen later than ${byTime[0].person}.`,
    `The ${records[4].item.toLowerCase()} never entered the ${records[0].room}.`,
    `The guest in the ${records[4].room} did not arrive at ${records[0].time}`,
    `Only one unsigned alibi remains after the four register entries are placed.`
  ];
  if (data.pattern === "trail") return [
    ...firstFour.map((r, i) => `Trace ${i + 1}: the ${r.item.toLowerCase()} was recovered in the ${r.room} after the ${r.time} visit.`),
    ...firstFour.map((r, i) => `${r.person} ${i % 2 ? "admitted carrying" : "was witnessed with"} the ${r.item.toLowerCase()}.`),
    `${byTime[4].person} arrived after ${byTime[0].person}.`,
    `The final unclaimed object belongs to the final unassigned person.`,
    `The ${records[4].room} was not visited at ${records[0].time}`,
    `No two recovered objects came from the same room or time slot.`
  ];
  if (data.pattern === "sequence") return [
    ...firstFour.map((r, i) => `${i === 0 ? "The opening record" : `Sequence ${i + 1}`} places ${r.person} at ${r.time}`),
    ...byTime.slice(0, 4).map(r => `At ${r.time}, the movement log records the ${r.room}.`),
    ...firstFour.map((r, i) => `${r.person} carried the ${r.item.toLowerCase()}${i === 3 ? " during the recorded movement" : ""}.`)
  ];
  if (data.pattern === "contradiction") return [
    ...firstFour.map((r, i) => `Statement ${i + 1}: ${r.person} was in the ${r.room}.`),
    ...firstFour.map((r, i) => `The verified timestamp for ${r.person} is ${r.time}`),
    ...firstFour.map((r, i) => `The ${r.item.toLowerCase()} was logged in the ${r.room}.`)
  ];
  return [
    ...byTime.slice(0, 4).map(r => `At ${r.time}, the recorded room was the ${r.room}.`),
    ...firstFour.map(r => `${r.person} was carrying the ${r.item.toLowerCase()}.`),
    ...firstFour.map(r => `${r.person} was the visitor seen in the ${r.room}.`)
  ];
}

function hintsFor(data) {
  const answer = data.answer;
  if (data.id === 1) return [
    `Start with clues 1-4. They lock the five rooms into a complete chronological chain beginning with the ${data.rooms[0]}.`,
    `Combine clues 5 and 6 to place ${data.suspects[2][0]}. Then clue 7 places ${data.suspects[3][0]}.`,
    `Clues 8 and 9 settle the last two uncertain arrivals. The unused object at 9:20 is the weapon.`
  ];
  const guides = {
    classic: ["Begin with the four time-and-room records.", "Place the named people and their objects, then use one-per-row elimination.", `The decisive record is the visitor in the ${answer.room} at ${answer.time}`],
    alibi: ["Treat the signed alibis as combined person-room-time facts.", "The inventory settles four person-object matches; the fifth follows by elimination.", `Compare the remaining record with the ${answer.item.toLowerCase()}.`],
    trail: ["Place each recovered object with its room and time before assigning people.", "Use the four witnessed carriers to connect people to the object trail.", `Follow the trail that ends in the ${answer.room}.`],
    sequence: ["Complete the person-by-time grid from the first four records.", "Transfer each time to its logged room, then add the carried objects.", `The critical step occurs at ${answer.time}`],
    contradiction: ["Enter the four verified person-room statements first.", "Add the timestamps, then connect each logged room to its object.", `The unresolved record points to the ${answer.item.toLowerCase()}.`]
  };
  return guides[data.pattern];
}

const state = loadState();
let currentChapter = Math.min(20, Math.max(1, Number(location.hash.replace("#chapter-", "")) || state.current || 1));

function loadState() {
  try {
    const current = JSON.parse(localStorage.getItem("wrenmere-book-v2"));
    if (current) return current;
    const legacy = JSON.parse(localStorage.getItem("wrenmere-book-v1"));
    return legacy ? { current: legacy.current || 1, chapters: legacy.chapters?.[1] ? { 1: legacy.chapters[1] } : {} } : { current: 1, chapters: {} };
  } catch {
    return { current: 1, chapters: {} };
  }
}

function saveState(message) {
  state.current = currentChapter;
  localStorage.setItem("wrenmere-book-v2", JSON.stringify(state));
  if (message) announce(message);
  updateProgress();
}

function announce(message) {
  document.getElementById("live-region").textContent = message;
}

function chapterState(id) {
  if (!state.chapters[id]) state.chapters[id] = { cells: {}, solved: false, attempts: 0, reasoning: "" };
  return state.chapters[id];
}

function initials(name) {
  return name.split(" ").map(x => x[0]).join("").slice(0, 2);
}

function escapeHTML(value = "") {
  return value.replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function optionList(values, label) {
  return `<option value="">Choose ${label}</option>${values.map(v => `<option value="${v}">${v}</option>`).join("")}`;
}

function gridMarkup(id, title, rows, cols, gridKey) {
  const saved = chapterState(id).cells;
  return `<section class="grid-card" aria-labelledby="${gridKey}-title">
    <h4 id="${gridKey}-title">${title}</h4>
    <div class="grid-scroll">
      <table class="logic-grid">
        <thead><tr><th scope="col">Match</th>${cols.map(c => `<th scope="col">${c.replace(" p.m.", "")}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row, r) => `<tr><th scope="row">${row}</th>${cols.map((col, c) => {
          const key = `${gridKey}:${r}:${c}`;
          const cellState = saved[key] || "blank";
          const symbol = cellState === "x" ? "×" : cellState === "o" ? "○" : "";
          return `<td><button class="logic-cell" type="button" data-key="${key}" data-state="${cellState}" aria-label="${row} with ${col}: ${cellState}">${symbol}</button></td>`;
        }).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  </section>`;
}

function tutorialMarkup() {
  const people = ["Ada Reed", "Bram Cole", "Cora Finch"];
  const rooms = ["Study", "Kitchen", "Gallery"];
  return `<section class="section tutorial-section" aria-labelledby="tutorial-title">
    <div class="section-heading"><span class="section-index">02</span><h3 id="tutorial-title">How the game works</h3></div>
    <p class="tutorial-lead">You are not guessing the murderer. You are reconstructing a hidden table: who entered which room, at what time, carrying which object. When one complete record matches the crime room, time, and weapon, the killer emerges.</p>

    <ol class="play-loop" aria-label="Five steps for solving a case">
      <li><span>1</span><div><strong>Read for facts</strong><p>Some clues give a direct match. Others compare two entries, such as ten minutes earlier or later.</p></div></li>
      <li><span>2</span><div><strong>Mark the grids</strong><p>Use <b class="mark-sample mark-o">O</b> for a pairing that must be true and <b class="mark-sample mark-x">X</b> for one that cannot be true.</p></div></li>
      <li><span>3</span><div><strong>Complete the row and column</strong><p>Every option is used once. After placing an O, every other square in that row and column becomes X.</p></div></li>
      <li><span>4</span><div><strong>Carry facts across</strong><p>If Ada has the lantern and the lantern was in the Study, Ada must have been in the Study. Record that result in the people-by-room grid.</p></div></li>
      <li><span>5</span><div><strong>Match the crime facts</strong><p>Find the person whose room, time, and object match the fixed evidence, then submit all four parts of the accusation.</p></div></li>
    </ol>

    <div class="practice-panel">
      <div class="practice-copy">
        <p class="practice-kicker">Practice file</p>
        <h4>Three guests and three rooms</h4>
        <p>Use these clues to complete the miniature grid. Select a square to cycle from blank to X to O.</p>
        <ol class="practice-clues">
          <li>Bram Cole was seen in the Gallery.</li>
          <li>Ada Reed was not in the Kitchen.</li>
          <li>Cora Finch was not in the Study.</li>
        </ol>
        <p class="practice-tip"><strong>Elimination matters:</strong> once Bram takes the Gallery, Ada and Cora cannot be there. The two negative clues settle the remaining rooms.</p>
      </div>
      <div class="practice-workspace">
        <div class="practice-grid-scroll">
          <table class="practice-grid">
            <thead><tr><th scope="col">Guest</th>${rooms.map(room => `<th scope="col">${room}</th>`).join("")}</tr></thead>
            <tbody>${people.map((person, row) => `<tr><th scope="row">${person}</th>${rooms.map((room, col) => `<td><button class="practice-cell" type="button" data-row="${row}" data-col="${col}" data-state="blank" aria-label="${person} in ${room}: blank"></button></td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
        <div class="practice-actions">
          <button class="secondary-button" id="check-practice" type="button">Check practice grid</button>
          <button class="outline-button" id="show-practice" type="button">Show worked answer</button>
          <button class="text-button" id="reset-practice" type="button">Reset</button>
        </div>
        <p id="practice-feedback" class="practice-feedback" role="status">Aim for one O in every row and column.</p>
      </div>
    </div>

    <div class="deduction-example" aria-label="Example of carrying a deduction across grids">
      <span>Example chain</span>
      <strong>Ada + lantern</strong><i aria-hidden="true">→</i><strong>lantern + Study</strong><i aria-hidden="true">→</i><strong>Ada + Study</strong>
      <p>Two confirmed pairings create a third. This is how separate grids work together.</p>
    </div>
  </section>`;
}

function expandedSolutionMarkup(data) {
  const answer = data.answer;
  const timeline = [...data.records].sort((a, b) => data.times.indexOf(a.time) - data.times.indexOf(b.time));
  return `<div id="solution" class="solution expanded-solution ${chapterState(data.id).solved ? "" : "is-hidden"}">
    <p class="solution-label">Solution</p>
    <h4>${data.solutionHeading}</h4>
    <p>${answer.person} was in the ${answer.room} at ${answer.time} carrying the ${answer.item.toLowerCase()}. ${answer.person} ${data.resultVerb}.</p>
    <div class="timeline-scroll">
      <table class="timeline-table">
        <thead><tr><th scope="col">Time</th><th scope="col">Suspect</th><th scope="col">Room</th><th scope="col">Object</th></tr></thead>
        <tbody>${timeline.map(record => `<tr ${record.person === answer.person ? 'class="culprit-row"' : ""}><td>${record.time}</td><td>${record.person}</td><td>${record.room}</td><td>${record.item}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <h5>Deduction path</h5>
    <ol class="deduction-path">${data.deductionPath.map(step => `<li>${step}</li>`).join("")}</ol>
  </div>`;
}

function renderChapter(id, focus = false) {
  currentChapter = id;
  location.hash = `chapter-${id}`;
  const data = CASES[id - 1];
  const partIndex = partFor(id);
  const part = PARTS[partIndex];
  const cState = chapterState(id);
  const isExpandedChapter = id === 1;
  const clues = cluesFor(data);
  const hints = hintsFor(data);
  document.getElementById("top-part").textContent = part.title;
  document.getElementById("top-title").textContent = data.title;

  document.getElementById("chapter").innerHTML = `
    <header class="chapter-hero">
      <div>
        <p class="chapter-number">Chapter ${String(id).padStart(2, "0")} · ${part.title.replace(/^Part [IVX]+ - /, "")}</p>
        <h2>${data.title}</h2>
        <p class="chapter-deck">${data.deck}</p>
      </div>
      <aside class="case-stamp" aria-label="Case details">
        <span>Case file ${String(id).padStart(3, "0")}</span>
        <strong>${data.setting}</strong>
        <em>${data.caseType}</em>
        <small>${data.difficulty} · Approx. 20-35 minutes · Unique solution</small>
      </aside>
      <figure class="chapter-banner">
        <img src="assets/chapters/chapter-${String(id).padStart(2, "0")}.jpg" alt="Atmospheric illustration of ${data.setting} for ${data.title}." width="1600" height="900" ${id === 1 ? 'fetchpriority="high"' : 'loading="lazy"'}>
      </figure>
    </header>

    <section class="section intro-copy" aria-labelledby="brief-title">
      <div class="section-heading"><span class="section-index">01</span><h3 id="brief-title">${data.caseHeading || "The case"}</h3></div>
      <p>${data.story}</p>
      ${isExpandedChapter ? `<div class="assignment-panel">
        <h4>Your assignment</h4>
        <p>Use the clues and grids to match every suspect with one room, one arrival time, and one object. Then name the killer. There is exactly one solution. If logic grids are new to you, complete the short practice file below before reading the case clues.</p>
        <dl class="case-reference">
          <div><dt>Arrival times</dt><dd>${data.times.join(" · ")}</dd></div>
          <div><dt>Rooms</dt><dd>${data.rooms.join(" · ")}</dd></div>
          <div><dt>Objects</dt><dd>${data.items.join(" · ")}</dd></div>
        </dl>
        <div class="marking-guide"><h4>How to mark the grids</h4><p>Place an <strong>X</strong> where a pairing cannot be true. Place an <strong>O</strong> where a pairing must be true. Each row and column receives exactly one O. Carry confirmed matches across the other grids.</p><p><strong>Important:</strong> Times describe when each guest was seen entering a room, not how long the guest remained there.</p></div>
      </div>` : `<p class="case-objective"><strong>Your brief:</strong> ${data.goal}</p>`}
      <div class="facts-grid">
        <div class="fact"><span>${data.placeLabel}</span><strong>${data.answer.room}</strong></div>
        <div class="fact"><span>${data.timeLabel}</span><strong>${data.answer.time}</strong></div>
        <div class="fact"><span>${data.itemLabel}</span><strong>${data.answer.item}</strong></div>
      </div>
    </section>

    ${isExpandedChapter ? tutorialMarkup() : ""}

    <section class="section" aria-labelledby="cast-title">
      <div class="section-heading"><span class="section-index">${isExpandedChapter ? "03" : "02"}</span><h3 id="cast-title">${isExpandedChapter ? "Five people with reasons to lie" : "The suspects"}</h3></div>
      ${isExpandedChapter ? `<p class="section-intro">Eleanor had collected enemies as readily as art. The motives below establish atmosphere, but the solution depends only on the twelve clues.</p>
      <div class="cast-table-wrap"><table class="cast-table"><thead><tr><th scope="col">Suspect</th><th scope="col">Connection</th><th scope="col">Possible motive</th></tr></thead><tbody>${data.suspects.map(([name, role, motive]) => `<tr><th scope="row">${name}</th><td>${role}</td><td>${motive}</td></tr>`).join("")}</tbody></table></div>
      <aside class="inspector-note"><span>Inspector's note</span><p>${data.inspectorNote}</p></aside>` : `<div class="cast-grid">${data.suspects.map(([name, role]) => `<article class="suspect-card" data-initials="${initials(name)}"><h4>${name}</h4><p>${role}</p></article>`).join("")}</div>`}
    </section>

    <section class="section" aria-labelledby="clues-title">
      <div class="section-heading"><span class="section-index">${isExpandedChapter ? "04" : "03"}</span><h3 id="clues-title">${data.evidenceHeading}</h3></div>
      <p class="section-intro">${isExpandedChapter ? "Read carefully. The wording is exact: immediately before or after means a ten-minute difference." : data.evidenceIntro}</p>
      <div class="clue-grid">${clues.map((clue, i) => `<article class="clue"><b>${i + 1}</b><p>${clue}</p></article>`).join("")}</div>
    </section>

    <section class="section" aria-labelledby="grid-title">
      <div class="section-heading"><span class="section-index">${isExpandedChapter ? "05" : "04"}</span><h3 id="grid-title">Your deduction grid</h3></div>
      <div class="tool-intro"><p>Select a square to cycle between blank, X, and O. Your work is saved on this device.</p><button class="reset-button" id="reset-grid" type="button">Clear this case</button></div>
      <div class="grids">
        ${gridMarkup(id, "Suspects by room", data.suspects.map(s => s[0]), data.rooms, "people-rooms")}
        ${gridMarkup(id, "Suspects by time", data.suspects.map(s => s[0]), data.times, "people-times")}
        ${gridMarkup(id, "Suspects by object", data.suspects.map(s => s[0]), data.items, "people-items")}
        ${gridMarkup(id, "Rooms by object", data.rooms, data.items, "rooms-items")}
      </div>
    </section>

    <section class="section" aria-labelledby="accuse-title">
      <div class="section-heading"><span class="section-index">${isExpandedChapter ? "06" : "05"}</span><h3 id="accuse-title">${data.submissionHeading}</h3></div>
      <div class="accusation-layout">
        <form id="accusation-form" class="accusation-form">
          <div class="field-grid">
            <div class="field"><label for="accuse-person">${data.personLabel}</label><select id="accuse-person">${optionList(data.suspects.map(s => s[0]), "a person")}</select></div>
            <div class="field"><label for="accuse-room">${data.placeLabel}</label><select id="accuse-room">${optionList(data.rooms, "a room")}</select></div>
            <div class="field"><label for="accuse-time">${data.timeLabel}</label><select id="accuse-time">${optionList(data.times, "a time")}</select></div>
            <div class="field"><label for="accuse-item">${data.itemLabel}</label><select id="accuse-item">${optionList(data.items, "an object")}</select></div>
          </div>
          ${isExpandedChapter ? `<div class="reasoning-field"><label for="reasoning">Explain your reasoning</label><textarea id="reasoning" rows="6" placeholder="Which clues fixed the timeline? What eliminated the other suspects?">${escapeHTML(cState.reasoning || "")}</textarea><span>Your notes are saved on this device.</span></div>` : ""}
          <div class="form-actions"><button class="secondary-button" type="submit">Check finding</button><button class="outline-button" id="reveal-answer" type="button">Reveal after an attempt</button></div>
          <p id="feedback" class="feedback" role="status"></p>
          ${isExpandedChapter ? expandedSolutionMarkup(data) : `<div id="solution" class="solution ${cState.solved ? "" : "is-hidden"}">
            <h4>${data.personLabel}: ${data.answer.person}</h4>
            <p>${data.answer.person} was in the ${data.answer.room} at ${data.answer.time} carrying the ${data.answer.item.toLowerCase()}, and ${data.resultVerb}. The full reconstruction is ${[...data.records].sort((a, b) => data.times.indexOf(a.time) - data.times.indexOf(b.time)).map(record => `${record.time}: ${record.person} in the ${record.room} with the ${record.item.toLowerCase()}`).join("; ")}.</p>
          </div>`}
        </form>
        <aside class="hints">
          <h4>Hint ladder</h4><p>Reveal only what you need.</p>
          ${hints.map((hint, i) => `<div class="hint-item"><button type="button" aria-expanded="false">Hint ${i + 1}<span aria-hidden="true">+</span></button><p class="hint-answer is-hidden">${hint}</p></div>`).join("")}
        </aside>
      </div>
    </section>

    <footer class="chapter-footer">
      <button class="nav-button" id="prev-chapter" type="button" ${id === 1 ? "disabled" : ""}>← Previous case</button>
      <span class="case-complete">${cState.solved ? "Case solved" : "Case open"}</span>
      <button class="nav-button" id="next-chapter" type="button" ${id === 20 ? "disabled" : ""}>Next case →</button>
    </footer>`;

  bindChapterEvents(data);
  renderNav();
  saveState();
  if (focus) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("main").focus({ preventScroll: true });
  }
}

function bindChapterEvents(data) {
  document.querySelectorAll(".logic-cell").forEach(button => {
    button.addEventListener("click", () => {
      const sequence = { blank: "x", x: "o", o: "blank" };
      const next = sequence[button.dataset.state];
      button.dataset.state = next;
      button.textContent = next === "x" ? "×" : next === "o" ? "○" : "";
      button.setAttribute("aria-label", button.getAttribute("aria-label").replace(/: (blank|x|o)$/, `: ${next}`));
      const cState = chapterState(currentChapter);
      if (next === "blank") delete cState.cells[button.dataset.key]; else cState.cells[button.dataset.key] = next;
      saveState("Grid updated and saved.");
    });
  });

  document.getElementById("reset-grid").addEventListener("click", () => {
    if (!confirm("Clear every mark and attempt for this case?")) return;
    state.chapters[currentChapter] = { cells: {}, solved: false, attempts: 0, reasoning: "" };
    saveState("This case has been cleared.");
    renderChapter(currentChapter);
  });

  const reasoning = document.getElementById("reasoning");
  if (reasoning) reasoning.addEventListener("input", () => {
    chapterState(currentChapter).reasoning = reasoning.value;
    saveState();
  });

  const practiceCells = [...document.querySelectorAll(".practice-cell")];
  if (practiceCells.length) {
    const expected = ["o", "x", "x", "x", "x", "o", "x", "o", "x"];
    const feedback = document.getElementById("practice-feedback");
    const setPracticeCell = (cell, next) => {
      cell.dataset.state = next;
      cell.textContent = next === "x" ? "×" : next === "o" ? "○" : "";
      cell.setAttribute("aria-label", cell.getAttribute("aria-label").replace(/: (blank|x|o)$/, `: ${next}`));
    };

    practiceCells.forEach(cell => cell.addEventListener("click", () => {
      const sequence = { blank: "x", x: "o", o: "blank" };
      setPracticeCell(cell, sequence[cell.dataset.state]);
      feedback.className = "practice-feedback";
      feedback.textContent = "Keep going. Aim for one O in every row and column.";
    }));

    document.getElementById("check-practice").addEventListener("click", () => {
      const correct = practiceCells.filter((cell, index) => cell.dataset.state === expected[index]).length;
      if (correct === expected.length) {
        feedback.className = "practice-feedback success";
        feedback.textContent = "Practice solved. Bram takes the Gallery, Ada takes the Study, and Cora takes the Kitchen.";
      } else {
        feedback.className = "practice-feedback error";
        feedback.textContent = `${correct} of 9 squares are correct. Use the confirmed Gallery match first, then eliminate its row and column.`;
      }
    });

    document.getElementById("show-practice").addEventListener("click", () => {
      practiceCells.forEach((cell, index) => setPracticeCell(cell, expected[index]));
      feedback.className = "practice-feedback success";
      feedback.textContent = "Worked answer shown. Notice that every row and every column contains exactly one O.";
    });

    document.getElementById("reset-practice").addEventListener("click", () => {
      practiceCells.forEach(cell => setPracticeCell(cell, "blank"));
      feedback.className = "practice-feedback";
      feedback.textContent = "Aim for one O in every row and column.";
    });
  }

  document.querySelectorAll(".hint-item button").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.querySelector("span").textContent = open ? "+" : "−";
      answer.classList.toggle("is-hidden", open);
    });
  });

  document.getElementById("accusation-form").addEventListener("submit", event => {
    event.preventDefault();
    const answer = [data.answer.person, data.answer.room, data.answer.time, data.answer.item];
    const guess = ["accuse-person", "accuse-room", "accuse-time", "accuse-item"].map(id => document.getElementById(id).value);
    const feedback = document.getElementById("feedback");
    const cState = chapterState(currentChapter);
    cState.attempts = (cState.attempts || 0) + 1;
    if (guess.some(x => !x)) {
      feedback.className = "feedback error";
      feedback.textContent = "Complete all four fields before checking your finding.";
    } else if (guess.every((value, i) => value === answer[i])) {
      cState.solved = true;
      feedback.className = "feedback success";
      feedback.textContent = "Case closed. Every part of your finding is correct.";
      document.getElementById("solution").classList.remove("is-hidden");
      document.querySelector(".case-complete").textContent = "Case solved";
      announce(`Chapter ${currentChapter} solved.`);
    } else {
      const correct = guess.filter((value, i) => value === answer[i]).length;
      feedback.className = "feedback error";
      feedback.textContent = `Not yet. ${correct} of your 4 choices are correct. Revisit the grid or open a hint.`;
    }
    saveState();
    renderNav();
  });

  document.getElementById("reveal-answer").addEventListener("click", () => {
    const cState = chapterState(currentChapter);
    const feedback = document.getElementById("feedback");
    if (!cState.attempts) {
      feedback.className = "feedback error";
      feedback.textContent = "Commit to a finding first. The solution unlocks after one attempt.";
      return;
    }
    cState.solved = true;
    document.getElementById("solution").classList.remove("is-hidden");
    document.querySelector(".case-complete").textContent = "Case solved";
    feedback.className = "feedback success";
    feedback.textContent = "Solution revealed. Compare it with your grid and reasoning.";
    saveState("Solution revealed and case marked complete.");
    renderNav();
  });

  document.getElementById("prev-chapter").addEventListener("click", () => currentChapter > 1 && renderChapter(currentChapter - 1, true));
  document.getElementById("next-chapter").addEventListener("click", () => currentChapter < 20 && renderChapter(currentChapter + 1, true));
}

function renderNav() {
  const nav = document.getElementById("chapter-nav");
  nav.innerHTML = PARTS.map((part, partIndex) => {
    const activePart = partFor(currentChapter) === partIndex;
    const chapters = CASES.filter(c => c.id >= part.range[0] && c.id <= part.range[1]);
    return `<section class="part-group">
      <button class="part-toggle" type="button" aria-expanded="${activePart}" aria-controls="part-${partIndex}">${part.title}<span class="chevron" aria-hidden="true">⌄</span></button>
      <div id="part-${partIndex}" class="part-list" ${activePart ? "" : "hidden"}>${chapters.map(c => `<button class="chapter-link" type="button" data-id="${c.id}" ${c.id === currentChapter ? 'aria-current="page"' : ""}><span class="number">${String(c.id).padStart(2, "0")}</span><span class="title">${c.title}</span><span class="done" aria-label="${chapterState(c.id).solved ? "Solved" : "Open"}">${chapterState(c.id).solved ? "✓" : ""}</span></button>`).join("")}</div>
    </section>`;
  }).join("");

  nav.querySelectorAll(".part-toggle").forEach(button => button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  }));
  nav.querySelectorAll(".chapter-link").forEach(button => button.addEventListener("click", () => {
    renderChapter(Number(button.dataset.id), true);
    closeMenu();
  }));
  updateProgress();
}

function updateProgress() {
  const solved = CASES.filter(c => chapterState(c.id).solved).length;
  document.getElementById("progress-text").textContent = `${solved} / 20`;
  document.getElementById("progress-bar").style.width = `${solved * 5}%`;
}

function openBook() {
  document.getElementById("cover").classList.add("is-hidden");
  document.getElementById("book").classList.remove("is-hidden");
  renderChapter(currentChapter, true);
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("is-open");
  document.getElementById("menu-button").setAttribute("aria-expanded", "false");
}

document.getElementById("enter-book").addEventListener("click", openBook);
document.getElementById("return-cover").addEventListener("click", () => {
  document.getElementById("book").classList.add("is-hidden");
  document.getElementById("cover").classList.remove("is-hidden");
  window.scrollTo(0, 0);
});
document.getElementById("menu-button").addEventListener("click", event => {
  const sidebar = document.getElementById("sidebar");
  const open = sidebar.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.getElementById("print-button").addEventListener("click", () => window.print());
window.addEventListener("hashchange", () => {
  const id = Number(location.hash.replace("#chapter-", ""));
  if (id >= 1 && id <= 20 && id !== currentChapter && !document.getElementById("book").classList.contains("is-hidden")) renderChapter(id, true);
});

renderNav();
if (location.hash.startsWith("#chapter-")) openBook();
