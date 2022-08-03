const word = ["empty", "boorish", "homeless", "deeply", "receptive", "gifted", "wet", "calculating", "living", "judicious", "lacking", "longing", "solid", "quickest", "paltry", "tasteful", "tricky", "vigorous", "neat", "extensive", "equal", "learned", "clear", "married", "racial", "antsy", "innocent", "fair", "aloof", "heavenly", "early", "ablaze", "habitual", "entertaining", "bored", "vacuous", "alert", "panoramic", "careful", "wide-eyed", "instinctive", "cooing", "magenta", "chubby", "frightened", "warm", "marvelous", "outstanding", "belligerent", "invincible", "medical", "minor", "tender", "rebel", "talented", "vivid", "male", "fierce", "light", "abashed", "unkempt", "worthless", "stout", "nonsensical", "labored", "unaccountable", "red", "big", "optimal", "obedient", "frothy", "well-groomed", "glib", "ripe", "elderly", "distinct", "gratis", "busy", "precious", "wacky", "wiry", "courageous", "lucky", "offbeat", "chilly", "clueless", "silly", "numberless", "womanly", "jagged", "questionable", "next", "obtainable", "educated", "glamorous", "lethal", "grotesque", "unwieldy", "gabby", "teeny", "noiseless", "convincing", "imminent", "incompetent", "near", "infamous", "juvenile", "wobbly", "quarrelsome", "blue", "nice", "befitting", "grieving", "wealthy", "incredible", "uneven", "puny", "chivalrous", "cold", "familiar", "lavish", "brainy", "scant", "filthy", "utter", "pathetic", "nimble", "lyrical", "nasty", "accessible", "insidious", "deep", "hysterical", "curved", "teeny-tiny", "cagey", "tame", "delicious", "illegal", "naughty", "witty", "tangy", "acceptable", "sour", "impossible", "itchy", "dull", "harebrained", "coherent", "intelligent", "nosy", "lumpy", "astonishing", "unequal", "cool", "crazy", "highfalutin", "deceitful", "tan", "meaty", "ultra", "sharp", "miniature", "virtuous", "demonic", "little", "gamy", "steep", "painful", "caring", "tense", "tacit", "long-term", "delightful", "superior", "apprehensive", "well-to-do", "low", "square", "substantial", "elite", "naive", "upbeat", "damaged", "tangible", "painstaking", "motionless", "inexpensive", "panicky", "jealous", "nebulous", "impolite", "kindhearted", "brave", "selfish", "yummy", "successful", "depressed", "husky", "distraught", "endurable", "redundant", "female", "murky", "white", "bitter", "bumpy", "jobless", "dashing", "scared", "unadvised", "maddening", "messy", "absurd", "nonchalant", "scandalous", "decayed", "absent", "rotund", "coordinated", "closed", "confused", "soggy", "cut", "bashful", "sticky", "dazzling", "straight", "abandoned", "tall", "lush", "glossy", "disgusted", "fearful", "intrigued", "brash", "lovely", "hollow", "organic", "unbecoming", "barbarous", "rapid", "luxuriant", "lowly", "foolish", "fantastic", "wrathful", "brief", "oceanic", "vulgar", "mistaken", "accidental", "faint", "happy", "frantic", "aggressive", "like", "volatile", "actually", "stale", "scattered", "fearless", "embarrassed", "bloody", "youthful", "berserk", "odd", "hilarious", "black", "heavy", "oafish", "unable", "gigantic", "mysterious", "bustling", "appetizing", "strong", "aboard", "wise", "satisfying", "omniscient", "emaciated", "pale", "fresh", "heartbreaking", "obsequious", "burly", "interesting", "cheap", "scary", "flat", "abiding", "aboriginal", "vague", "encouraging", "keen", "obsolete", "zippy", "wasteful", "appalling", "used", "hateful", "numerous", "huge", "wrong", "limping", "wonderful", "smoggy", "ceaseless", "whopping", "dizzy", "minute", "hard", "nutty", "beautiful", "aback", "scintillating", "waggish", "sparkling", "muddled", "likeable", "descriptive", "watery", "quizzical", "abrupt", "hellish", "hapless", "bite-sized", "mighty", "brown", "voiceless", "ugliest", "beneficial", "inquisitive", "heady", "various", "bewildered", "massive", "perpetual", "verdant", "fabulous", "wakeful", "materialistic", "blushing", "miscreant", "unhealthy", "far-flung", "proud", "elegant", "fluttering", "cloistered", "condemned", "blue-eyed", "malicious", "complete", "greasy", "childlike", "mindless", "erect", "real", "adamant", "willing", "loving", "obeisant", "ignorant", "windy", "normal", "disturbed", "eight", "determined", "absorbed", "abounding", "venomous", "sable", "enthusiastic", "chunky", "recondite", "bad", "merciful", "new", "workable", "mortified", "milky", "mere", "common", "strange", "timely", "twitterpated", "nervous", "deranged", "immense", "enchanted", "broad", "violent", "known", "meek", "wild", "thoughtless", "hulking", "useful", "friendly", "enormous", "maniacal", "gentle", "spicy", "rotten", "charming", "good", "loutish", "sassy", "hurried", "corny", "trite", "natural", "level", "late", "unnatural", "ghastly", "parsimonious", "conscious", "quirky", "far", "telling", "bizarre", "magnificent", "military", "fancy", "kind", "wistful", "few", "hospitable", "eminent", "lying", "aberrant", "inconclusive", "depraved", "ashamed", "needy", "orange", "imported", "decisive", "scrawny", "elated", "arrogant", "modern", "warlike", "well-off", "elfin", "acoustic", "same", "languid", "energetic", "left", "better", "perfect", "convoluted", "wicked", "hungry", "goofy", "elastic", "calm", "marked", "bent", "muddy", "sarcastic", "graceful", "dark", "irritating", "narrow", "exuberant", "easy", "sore", "untidy", "last", "obscene", "lamentable", "dangerous", "wry", "jaded", "fuzzy", "floppy", "holistic", "moldy", "shallow", "humorous", "dependent", "billowy", "terrible", "smooth", "fast", "periodic", "illustrious", "impressionable", "moaning", "whole", "weak", "macabre", "quack", "cumbersome", "melancholy", "parched", "smarmy", "faithful", "harsh", "understood", "shaggy", "idiotic", "defeated", "curly", "ecstatic", "tacky", "mellow", "unsuitable", "lazy", "hissing", "kaput", "attractive", "swanky", "mammoth", "icy", "bawdy", "faded", "mushy", "gaping", "hushed", "relieved", "gorgeous", "acrid", "majestic", "frustrating", "fascinated", "gritty", "drained", "costly", "skinny", "abundant", "abnormal", "mean", "wary", "irate", "one", "safe", "delicate", "unruly", "juicy", "handsomely", "nostalgic", "penitent", "past", "glorious", "adventurous", "noisy", "colossal", "uppity", "nonstop", "best", "breakable", "humdrum", "wretched", "smiling", "abaft", "neighborly", "melodic", "abrasive", "boring", "chemical", "vivacious", "pungent", "laughable", "macho", "sweet", "smug", "long", "delirious", "wiggly", "irritable", "yellow", "jittery", "clammy", "equable", "gleaming", "feeble", "boiling", "lean", "pastoral", "enchanting", "imperfect", "hallowed", "brawny", "decorous", "waiting", "slimy", "halting", "boundless", "nutritious", "null", "tasteless", "wide", "ossified", "imaginary", "amiable", "ill-informed", "prickly", "unusual", "momentous", "average", "madly", "succulent", "dilapidated", "lopsided", "agitated", "rabid", "wandering", "versed", "hot", "eager", "gainful", "unequaled", "quaint", "steady", "hanging", "FALSE", "scientific", "defective", "deserted", "feigned", "craven", "abstracted", "jolly", "permissible", "silky", "lame", "nappy", "reassured", "bulky", "cowardly", "jumpy", "homely", "certain", "helpless", "stunning", "outrageous", "changeable", "garrulous", "handsome", "observant", "glistening", "ludicrous", "contemplative", "raspy", "acidic", "splendid", "bland", "honorable", "dead", "ready", "rainy", "classy", "moody", "giddy", "black-and-white", "undesirable", "drab", "industrious", "tasty", "hideous", "lewd", "spotless", "unarmed", "crabby", "beefy", "literate", "quick", "incandescent", "godly", "hard-to-find", "taboo", "absorbing", "bright", "vast", "able", "economic", "mixed", "fertile", "yielding", "makeshift", "tearful", "funny", "second", "grubby", "capable", "devilish", "material", "grumpy", "cautious", "horrible", "horrific", "creepy", "debonair", "victorious", "ethereal", "fallacious", "melted", "curvy", "nifty", "slippery", "uninterested", "ill", "colorful", "ratty", "worried", "salty", "complex", "obnoxious", "kindly", "outgoing", "quiet", "dear", "shaky", "uttermost", "deadpan", "excited", "parallel", "abhorrent", "capricious", "breezy", "electric", "mundane", "condescending", "necessary", "unsightly", "rough", "cruel", "rampant", "large", "small", "callous", "handy", "nippy", "cluttered", "internal", "hurt", "dapper", "knotty", "efficacious", "exhilarated", "scarce", "ubiquitous", "adorable", "careless", "high", "gaudy", "cuddly", "efficient", "amused", "icky", "thankful", "rambunctious", "innate", "short", "famous", "general", "bouncy", "well-made", "livid", "petite", "upset", "round", "chief", "uncovered", "despicable", "nauseating", "comfortable", "mute", "second-hand", "festive", "joyous", "earsplitting", "responsive", "tedious", "stormy", "nondescript", "exasperated", "misty", "historical", "faulty", "testy", "violet", "damp", "valuable", "damaging", "screeching", "measly", "half", "ideal", "shiny", "unique", "tart", "nine", "fierce", "old", "hypnotic", "fat", "lonely", "cooperative", "cloudy", "quixotic", "distressed", "repulsive", "lively", "ragged", "useless", "helpful", "mountainous", "clumsy", "healthy", "giant", "high-pitched", "daily", "vexed", "noxious", "mature", "daffy", "loose", "hesitant", "old-fashioned", "ill-fated", "abusive", "thick", "grandiose", "ordinary", "tight", "reflective", "unwritten", "many", "jazzy", "annoyed", "concerned", "important", "clean", "jumbled", "opposite", "curious", "sad", "detailed", "clever", "troubled", "regular", "cheeky", "open", "savory", "loud", "eatable", "cultured", "grateful", "combative", "uptight", "legal", "harmonious", "unbiased", "woozy", "woebegone", "onerous", "anxious", "unused", "broken", "earthy", "voracious", "vagabond", "deafening", "fanatical", "utopian", "accurate", "tawdry", "erratic", "envious", "superficial", "lackadaisical", "gray", "obese", "rare", "young", "cheerful", "knowing", "weary", "zealous", "robust", "impartial", "diminutive", "ugly", "whimsical", "biting", "peaceful", "abortive", "magical", "whispering", "abject", "cynical", "crooked", "needless", "thoughtful", "defiant", "acid", "vengeful", "batty", "unknown"];

document.addEventListener('DOMContentLoaded', function() {
    var sideNavOptions = {
        edge: "left",
        draggable: true
    }
    var tabsOptions = {
        duration: 300,
        swipeable: true
    }

    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavInstance = M.Sidenav.init(sideNavElems, sideNavOptions);

    var tabsElems = document.querySelectorAll('.tabs');
    var tabsInstance = M.Tabs.init(tabsElems, tabsOptions); 
    var instance = M.Tabs.getInstance(tabsElems);
    
});

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        accordion: true
    }

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});

document.getElementById("generateButton").addEventListener("click", wordGenerate);
document.getElementById("dailyWord").addEventListener("click", dailyWord);

function wordGenerate() {
    

    var selection;
    selection = word[Math.floor(Math.random()*word.length)];

    //getDefinition(selection);
    
    if (selection.slice(-1)[0] === "y") {
        document.getElementById("generateButton").innerText = selection + "aj"
    } else {
        document.getElementById("generateButton").innerText = selection + "yaj"
    }
}

function getDefinition(word) {
    const key = '65db1d0d-ac92-4bac-b05f-ef390f6c5cfe';
    var siteData;
    var xmlDoc;
    var parser;
    var tag;
    var text;
    var element;

    parser = new DOMParser();
    tag = document.createElement("p")

  fetch(`http://www.dictionaryapi.com/api/v1/references/collegiate/xml/${word}?key=${key}`)
    .then(response => response.text())
    .then(data => siteData = data)
    .then(data => console.log(data))
    .then(() => xmlDoc = parser.parseFromString(siteData,"text/xml"))
    .then(() => console.log(xmlDoc))
    //.then(() => console.log(xmlDoc.getElementsByTagName("fl")[0].childNodes[0].nodeValue))
    //.then(() => console.log(xmlDoc.getElementsByTagName("dt")[0].childNodes[0].nodeValue))
    //.then(() => console.log(xmlDoc.getElementsByTagName("fw")[0].childNodes[0].nodeValue))
    .then(() => text = document.createTextNode(xmlDoc.getElementsByTagName("dt")[0].childNodes[0].nodeValue))
    .then(() => tag.appendChild(text))
    .then(() => element = document.getElementById("definition"))
    .then(() => element.appendChild(tag))
    .catch(error => console.error(error))
}

function dailyWord() {
    alert("Testingaj")
    var today = new Date();
    alert(today)
    var date_to_reply = new Date('2022-8-1');
    alert(date_to_reply)
    var timeinmilisec = today.getTime() - date_to_reply.getTime();
    alert(timeinmilisec)
    var wordIndex = Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
    alert(wordIndex)

    if (word[wordIndex].slice(-1)[0] === "y") {
        document.getElementById("dailyWord").innerText = word[wordIndex] + "aj"
        alert(word[wordIndex] + "aj")
        alert("testing")
    } else {
        document.getElementById("dailyWord").innerText = word[wordIndex] + "yaj"
        alert(word[wordIndex] + "yaj")
    }
}
