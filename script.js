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

function wordGenerate() {
    const word = ["aback", "abaft", "abandoned", "abashed", "aberrant", "abhorrent", "abiding", "abject", "ablaze", "able", "abnormal", "aboard", "aboriginal", "abortive", "abounding", "abrasive", "abrupt", "absent", "absorbed", "absorbing", "abstracted", "absurd", "abundant", "abusive", "acceptable", "accessible", "accidental", "accurate", "acid", "acidic", "acoustic", "acrid", "actually", "adamant", "adorable", "adventurous", "aggressive", "agitated", "alert", "aloof", "amiable", "amused", "annoyed", "antsy", "anxious", "appalling", "appetizing", "apprehensive", "arrogant", "ashamed", "astonishing", "attractive", "average", "bad", "barbarous", "bashful", "batty", "bawdy", "beautiful", "beefy", "befitting", "belligerent", "beneficial", "bent", "berserk", "best", "better", "bewildered", "big", "billowy", "bite-sized", "biting", "bitter", "bizarre", "black", "black-and-white", "bland", "bloody", "blue", "blue-eyed", "blushing", "boiling", "boorish", "bored", "boring", "bouncy", "boundless", "brainy", "brash", "brave", "brawny", "breakable", "breezy", "brief", "bright", "broad", "broken", "brown", "bulky", "bumpy", "burly", "bustling", "busy", "cagey", "calculating", "callous", "calm", "capable", "capricious", "careful", "careless", "caring", "cautious", "ceaseless", "certain", "changeable", "charming", "cheap", "cheeky", "cheerful", "chemical", "chief", "childlike", "chilly", "chivalrous", "chubby", "chunky", "clammy", "classy", "clean", "clear", "clever", "cloistered", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coherent", "cold", "colorful", "colossal", "combative", "comfortable", "common", "complete", "complex", "concerned", "condemned", "condescending", "confused", "conscious", "contemplative", "convincing", "convoluted", "cooing", "cool", "cooperative", "coordinated", "corny", "costly", "courageous", "cowardly", "crabby", "craven", "crazy", "creepy", "crooked", "cruel", "cuddly", "cultured", "cumbersome", "curious", "curly", "curved", "curvy", "cut", "cynical", "daffy", "daily", "damaged", "damaging", "damp", "dangerous", "dapper", "dark", "dashing", "dazzling", "dead", "deadpan", "deafening", "dear", "debonair", "decayed", "deceitful", "decisive", "decorous", "deep", "deeply", "defeated", "defective", "defiant", "delicate", "delicious", "delightful", "delirious", "demonic", "dependent", "depraved", "depressed", "deranged", "descriptive", "deserted", "despicable", "detailed", "determined", "devilish", "dilapidated", "diminutive", "disgusted", "distinct", "distraught", "distressed", "disturbed", "dizzy", "drab", "drained", "dull", "eager", "early", "earsplitting", "earthy", "easy", "eatable", "economic", "ecstatic", "educated", "efficacious", "efficient", "eight", "elastic", "elated", "elderly", "electric", "elegant", "elfin", "elite", "emaciated", "embarrassed", "eminent", "empty", "enchanted", "enchanting", "encouraging", "endurable", "energetic", "enormous", "entertaining", "enthusiastic", "envious", "equable", "equal", "erect", "erratic", "ethereal", "exasperated", "excited", "exhilarated", "extensive", "exuberant", "fabulous", "faded", "faint", "fair", "faithful", "fallacious", "FALSE", "familiar", "famous", "fanatical", "fancy", "fantastic", "far", "far-flung", "fascinated", "fast", "fat", "faulty", "fearful", "fearless", "feeble", "feigned", "female", "fertile", "festive", "few", "fierce", "fierce", "filthy", "flat", "floppy", "fluttering", "foolish", "frantic", "fresh", "friendly", "frightened", "frothy", "frustrating", "funny", "fuzzy", "gabby", "gainful", "gamy", "gaping", "garrulous", "gaudy", "general", "gentle", "ghastly", "giant", "giddy", "gifted", "gigantic", "glamorous", "gleaming", "glib", "glistening", "glorious", "glossy", "godly", "good", "goofy", "gorgeous", "graceful", "grandiose", "grateful", "gratis", "gray", "greasy", "grieving", "gritty", "grotesque", "grubby", "grumpy", "habitual", "half", "hallowed", "halting", "handsome", "handsomely", "handy", "hanging", "hapless", "happy", "hard", "hard-to-find", "harebrained", "harmonious", "harsh", "hateful", "heady", "healthy", "heartbreaking", "heavenly", "heavy", "hellish", "helpful", "helpless", "hesitant", "hideous", "high", "highfalutin", "high-pitched", "hilarious", "hissing", "historical", "holistic", "hollow", "homeless", "homely", "honorable", "horrible", "horrific", "hospitable", "hot", "huge", "hulking", "humdrum", "humorous", "hungry", "hurried", "hurt", "hushed", "husky", "hypnotic", "hysterical", "icky", "icy", "ideal", "idiotic", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illustrious", "imaginary", "immense", "imminent", "impartial", "imperfect", "impolite", "important", "imported", "impossible", "impressionable", "incandescent", "incompetent", "inconclusive", "incredible", "industrious", "inexpensive", "infamous", "innate", "innocent", "inquisitive", "insidious", "instinctive", "intelligent", "interesting", "internal", "intrigued", "invincible", "irate", "irritable", "irritating", "itchy", "jaded", "jagged", "jazzy", "jealous", "jittery", "jobless", "jolly", "joyous", "judicious", "juicy", "jumbled", "jumpy", "juvenile", "kaput", "keen", "kind", "kindhearted", "kindly", "knotty", "knowing", "known", "labored", "lackadaisical", "lacking", "lame", "lamentable", "languid", "large", "last", "late", "laughable", "lavish", "lazy", "lean", "learned", "left", "legal", "lethal", "level", "lewd", "light", "like", "likeable", "limping", "literate", "little", "lively", "livid", "living", "lonely", "long", "longing", "long-term", "loose", "lopsided", "loud", "loutish", "lovely", "loving", "low", "lowly", "lucky", "ludicrous", "lumpy", "lush", "luxuriant", "lying", "lyrical", "macabre", "macho", "maddening", "madly", "magenta", "magical", "magnificent", "majestic", "makeshift", "male", "malicious", "mammoth", "maniacal", "many", "marked", "married", "marvelous", "massive", "material", "materialistic", "mature", "mean", "measly", "meaty", "medical", "meek", "melancholy", "mellow", "melodic", "melted", "merciful", "mere", "messy", "mighty", "military", "milky", "mindless", "miniature", "minor", "minute", "miscreant", "mistaken", "misty", "mixed", "moaning", "modern", "moldy", "momentous", "moody", "mortified", "motionless", "mountainous", "muddled", "muddy", "mundane", "murky", "mushy", "mute", "mysterious", "naive", "nappy", "narrow", "nasty", "natural", "naughty", "nauseating", "near", "neat", "nebulous", "necessary", "needless", "needy", "neighborly", "nervous", "new", "next", "nice", "nifty", "nimble", "nine", "nippy", "noiseless", "noisy", "nonchalant", "nondescript", "nonsensical", "nonstop", "normal", "nostalgic", "nosy", "noxious", "null", "numberless", "numerous", "nutritious", "nutty", "oafish", "obedient", "obeisant", "obese", "obnoxious", "obscene", "obsequious", "observant", "obsolete", "obtainable", "oceanic", "odd", "offbeat", "old", "old-fashioned", "omniscient", "one", "onerous", "open", "opposite", "optimal", "orange", "ordinary", "organic", "ossified", "outgoing", "outrageous", "outstanding", "painful", "painstaking", "pale", "paltry", "panicky", "panoramic", "parallel", "parched", "parsimonious", "past", "pastoral", "pathetic", "peaceful", "penitent", "perfect", "periodic", "permissible", "perpetual", "petite", "precious", "prickly", "proud", "pungent", "puny", "quack", "quaint", "quarrelsome", "questionable", "quick", "quickest", "quiet", "quirky", "quixotic", "quizzical", "rabid", "racial", "ragged", "rainy", "rambunctious", "rampant", "rapid", "rare", "raspy", "ratty", "ready", "real", "reassured", "rebel", "receptive", "recondite", "red", "redundant", "reflective", "regular", "relieved", "repulsive", "responsive", "ripe", "robust", "rotten", "rotund", "rough", "round", "sable", "sad", "safe", "salty", "same", "sarcastic", "sassy", "satisfying", "savory", "scandalous", "scant", "scarce", "scared", "scary", "scattered", "scientific", "scintillating", "scrawny", "screeching", "second", "second-hand", "selfish", "shaggy", "shaky", "shallow", "sharp", "shiny", "short", "silky", "silly", "skinny", "slimy", "slippery", "small", "smarmy", "smiling", "smoggy", "smooth", "smug", "soggy", "solid", "sore", "sour", "sparkling", "spicy", "splendid", "spotless", "square", "stale", "steady", "steep", "sticky", "stormy", "stout", "straight", "strange", "strong", "stunning", "substantial", "successful", "succulent", "superficial", "superior", "swanky", "sweet", "taboo", "tacit", "tacky", "talented", "tall", "tame", "tan", "tangible", "tangy", "tart", "tasteful", "tasteless", "tasty", "tawdry", "tearful", "tedious", "teeny", "teeny-tiny", "telling", "tender", "tense", "terrible", "testy", "thankful", "thick", "thoughtful", "thoughtless", "tight", "timely", "tricky", "trite", "troubled", "twitterpated", "ubiquitous", "ugliest", "ugly", "ultra", "unable", "unaccountable", "unadvised", "unarmed", "unbecoming", "unbiased", "uncovered", "understood", "undesirable", "unequal", "unequaled", "uneven", "unhealthy", "uninterested", "unique", "unkempt", "unknown", "unnatural", "unruly", "unsightly", "unsuitable", "untidy", "unused", "unusual", "unwieldy", "unwritten", "upbeat", "uppity", "upset", "uptight", "used", "useful", "useless", "utopian", "utter", "uttermost", "vacuous", "vagabond", "vague", "valuable", "various", "vast", "vengeful", "venomous", "verdant", "versed", "vexed", "victorious", "vigorous", "violent", "violet", "virtuous", "vivacious", "vivid", "voiceless", "volatile", "voracious", "vulgar", "wacky", "waggish", "waiting", "wakeful", "wandering", "warlike", "warm", "wary", "wasteful", "watery", "weak", "wealthy", "weary", "well-groomed", "well-made", "well-off", "well-to-do", "wet", "whimsical", "whispering", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "windy", "wiry", "wise", "wistful", "witty", "wobbly", "woebegone", "womanly", "wonderful", "woozy", "workable", "worried", "worthless", "wrathful", "wretched", "wrong", "wry", "yellow", "yielding", "young", "youthful", "yummy", "zealous", "zippy"];

    var selection;
    selection = word[Math.floor(Math.random()*word.length)];

    getDefinition();
    
    if (selection.slice(-1)[0] === "y") {
        document.getElementById("generateButton").innerText = selection + "aj"
    } else {
        document.getElementById("generateButton").innerText = selection + "yaj"
    }
}

function getDefinition() {
    fetch("https://www.dictionary.com/browse/sneaky")
    .then(function() {
        console.log(response.json());
    })
    .catch(function() {
      // handle the error
    });
  
}