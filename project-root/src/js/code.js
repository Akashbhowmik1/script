       // Sample games data (replace with API fetch in production)
       const games = [
    {
        id: 1,
        name: "Grow A Garden",
        image: "https://assets-prd.ignimgs.com/2025/05/12/grow-a-garden-codes-1747041583655.png?width=628&format=jpg&auto=webp&quality=80",
        codes: [
            { code: "SQUIDGAME", effect: "15 Squid Tokens", status: "active" },
            { code: "UPDATE22", effect: "1 Seed Pack", status: "active" },
            { code: "GLOBAL", effect: "1 Seed Pack", status: "active" },
            { code: "UPDATE16", effect: "1 Seed Pack", status: "active" },
            { code: "ROD999", effect: "1 Seed Pack", status: "active" },
            { code: "Update8", effect: "1 Seed Pack", status: "active" },
            { code: "1000MEMBER", effect: "1 Seed Pack", status: "active" },
            { code: "seedpack100", effect: "1 Seed Pack", status: "active" },
            { code: "Update7", effect: "1 Seed Pack", status: "active" },
            { code: "Update6", effect: "1 Seed Pack", status: "active" },
            { code: "Update5", effect: "1 Seed Pack", status: "active" },
            { code: "BLOOM2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "adventure",
        rating: 4.8,
        description: "Rare item RNG game!",
        lastUpdated: "2025-07-10",
        popularity: "High"
    },
    {
        id: 2,
        name: "Epic Battle",
        image: "https://tr.rbxcdn.com/180DAY-78bdbb1c269acefd9fdf6f48ec4a2ef9/500/280/Image/Jpeg/noFilter",
        codes: [
            { code: "BATTLE2025", effect: "Grants 1000 XP", status: "active" },
            { code: "EPIC100", effect: "Unlocks Epic Sword", status: "active" },
            { code: "WAR50", effect: "50% Damage Boost for 30 mins", status: "active" },
            { code: "FIGHT2024", effect: "Gave 500 XP", status: "expired" }
        ],
        category: "action",
        rating: 4.5,
        description: "Intense combat action!",
        lastUpdated: "2025-07-09",
        popularity: "Medium"
    },
    {
        id: 3,
        name: "Fantasy Quest",
        image: "https://i.ytimg.com/vi/IRkxnQp1bns/maxresdefault.jpg",
        codes: [
            { code: "QUEST2025", effect: "Grants 200 Mana", status: "active" },
            { code: "FANTASY50", effect: "Unlocks Magic Staff", status: "active" },
            { code: "MAGIC100", effect: "100% XP Boost for 1 hour", status: "active" },
            { code: "WIZARD2024", effect: "Gave 100 Mana", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.6,
        description: "Magical roleplay adventure!",
        lastUpdated: "2025-07-08",
        popularity: "High"
    },
    {
        id: 4,
        name: "Blox Fruits",
        image: "https://tr.rbxcdn.com/180DAY-f8fdc404783fdc636cd3d362febc864e/512/512/Image/Webp/noFilter",
        codes: [
            { code: "1LOSTADMIN ", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "KITT_RESET", effect: "Free Stat Refund", status: "active" },
            { code: "CHANDLER", effect: "$0 (Joke)", status: "active" },
            { code: "SUB2CAPTAINMAUI", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Enyu_is_Pro", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Starcodeheo", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Sub2Fer999", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Magicbus", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "JCWK", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "kittgaming", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Bluxxy", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "fudd10_v2", effect: "$2", status: "active" },
            { code: "SUB2GAMERROBOT_EXP1", effect: "2x EXP for 30 minutes", status: "active" },
            { code: "SUB2GAMERROBOT_RESET1", effect: "Free Stat Refund", status: "active" },
            { code: "Sub2UncleKizaru", effect: "Free Stat Refund", status: "active" },
            { code: "Axiore", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Sub2Daigrock", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Bignews", effect: "In-game Title 'Big News'", status: "active" },
            { code: "Sub2NoobMaster123", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "StrawHatMaine", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "TantaiGaming", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "TheGreatAce", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "Fudd10", effect: "$1", status: "active" },
            { code: "Sub2OfficialNoobie", effect: "2x EXP for 20 minutes", status: "active" },
            { code: "ADMINFIGHT", effect: "Unknown Reward", status: "expired" },
            { code: "Gifting_hours", effect: "Unknown Reward", status: "expired" },
            { code: "NOMOREHACK", effect: "Unknown Reward", status: "expired" },
            { code: "BANEXPLOIT", effect: "Unknown Reward", status: "expired" },
            { code: "EARN_FRUITS", effect: "Unknown Reward", status: "expired" },
            { code: "GetPranked", effect: "Unknown Reward", status: "expired" },
            { code: "BossBuild", effect: "Unknown Reward", status: "expired" },
            { code: "FIGHT4FRUIT", effect: "Unknown Reward", status: "expired" },
            { code: "NOEXPLOITER", effect: "Unknown Reward", status: "expired" },
            { code: "NOOB2ADMIN", effect: "Unknown Reward", status: "expired" },
            { code: "CODESLIDE", effect: "Unknown Reward", status: "expired" },
            { code: "ADMINHACKED", effect: "Unknown Reward", status: "expired" },
            { code: "ADMINDARES", effect: "Unknown Reward", status: "expired" },
            { code: "ADMIN_TROLL", effect: "Unknown Reward", status: "expired" },
            { code: "SECRET_ADMIN", effect: "Unknown Reward", status: "expired" },
            { code: "rewardfun", effect: "Unknown Reward", status: "expired" },
            { code: "NEWTROLL", effect: "Unknown Reward", status: "expired" },
            { code: "24NOADMIN", effect: "Unknown Reward", status: "expired" },
            { code: "TRIPLEABUSE", effect: "Unknown Reward", status: "expired" },
            { code: "SEATROLLING", effect: "Unknown Reward", status: "expired" },
            { code: "krazydares", effect: "Unknown Reward", status: "expired" },
            { code: "ADMIN_STRENGTH", effect: "Unknown Reward", status: "expired" },
            { code: "DRAGONABUSE", effect: "Unknown Reward", status: "expired" },
            { code: "NOOB2PRO", effect: "Unknown Reward", status: "expired" },
            { code: "DEVSCOOKING", effect: "Unknown Reward", status: "expired" },
            { code: "CODE_SERVICIO", effect: "Unknown Reward", status: "expired" },
            { code: "E_SERVICIO", effect: "Unknown Reward", status: "expired" },
            { code: "15B_BESTBROTHERS", effect: "Unknown Reward", status: "expired" }
        ],
        category: "adventure",
        rating: 4.9,
        description: "One Piece-inspired pirate adventure with epic battles!",
        lastUpdated: "2025-07-12",
        popularity: "Very High"
    },
    {
        id: 5,
        name: "Anime Last Stand",
        image: "https://assetsio.gnwcdn.com/anime-last-stand-0.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
        codes: [
            { code: "ANIME2025", effect: "Grants 500 Gems", status: "active" },
            { code: "STAND100", effect: "Unlocks Rare Unit", status: "active" },
            { code: "DEF50", effect: "50% Defense Boost for 1 hour", status: "active" },
            { code: "TOWER2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Anime tower defense!",
        lastUpdated: "2025-07-06",
        popularity: "High"
    },
    {
        id: 8,
        name: "Doors",
        image: "https://i.ytimg.com/vi/1k7kG5-uVVA/sddefault.jpg?v=62f40629",
       codes: [
            { code: "SCREECHSUCKS", effect: "Grants 25 Knobs", status: "active" },
            { code: "SIX2025", effect: "Unknown Reward", status: "expired" },
            { code: "5B", effect: "Unknown Reward", status: "expired" },
            { code: "THEHUNT", effect: "Unknown Reward", status: "expired" },
            { code: "4B", effect: "Unknown Reward", status: "expired" },
            { code: "THREE", effect: "Unknown Reward", status: "expired" },
            { code: "2BILLIONVISITS", effect: "Unknown Reward", status: "expired" },
            { code: "ONEBLLIONVISITS", effect: "Unknown Reward", status: "expired" },
            { code: "LOOKBEHINDYOU", effect: "Unknown Reward", status: "expired" },
            { code: "SORRYBOUTTHAT", effect: "Unknown Reward", status: "expired" },
            { code: "500MVISITS", effect: "Unknown Reward", status: "expired" },
            { code: "100MVISIT", effect: "Unknown Reward", status: "expired" },
            { code: "TEST", effect: "Unknown Reward", status: "expired" },
            { code: "SORRYFORDELAY", effect: "Unknown Reward", status: "expired" },
            { code: "psst", effect: "Unknown Reward", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Horror escape room challenge!",
        lastUpdated: "2025-07-03",
        popularity: "High"
    },
    {
        id: 11,
        name: "Blade Ball",
        image: "https://tr.rbxcdn.com/180DAY-2a232dd3069ebd51df54a969e28a094e/500/280/Image/Jpeg/noFilter",
       codes: [
            { code: "RAMADAN", effect: "Free Spin", status: "active" },
            { code: "SPOOKYSEASON", effect: "Free Candy", status: "active" },
            { code: "4BVISITS", effect: "Bubble Wand Sword", status: "active" },
            { code: "SHARKATTACK", effect: "Free Spin", status: "active" },
            { code: "SUMMERWHEEL", effect: "Free Spin", status: "active" },
            { code: "SUMMERSTARTSHERE", effect: "Free Spin", status: "active" },
            { code: "ENERGYSWORDS", effect: "Free Spin", status: "active" },
            { code: "GIVEMELUCK", effect: "10 minutes of 4x Luck in RNG world", status: "active" },
            { code: "DUNGEONSRELEASE", effect: "50 Dungeon Runes", status: "active" },
            { code: "FROGS", effect: "Free Spin", status: "active" },
            { code: "GOODVSEVIL", effect: "Free Spin", status: "active" },
            { code: "BATTLEROYALE", effect: "Storm Ticket", status: "active" },
            { code: "RNGEMOTES", effect: "Free Spin", status: "active" },
            { code: "FREESPINS", effect: "Free Spin", status: "active" },
            { code: "2BTHANKS", effect: "Free Spin", status: "active" },
            { code: "5BVISITS", effect: "Unknown Reward", status: "expired" },
            { code: "DRAGONS", effect: "Unknown Reward", status: "expired" },
            { code: "XMAS", effect: "Unknown Reward", status: "expired" },
            { code: "DELAYBALL", effect: "Unknown Reward", status: "expired" },
            { code: "BPTEAMS", effect: "Unknown Reward", status: "expired" },
            { code: "REBIRTHLTM", effect: "Unknown Reward", status: "expired" },
            { code: "ROBLOXCLASSIC", effect: "Unknown Reward", status: "expired" },
            { code: "GOODVSEVILMODE", effect: "Unknown Reward", status: "expired" },
            { code: "MERRYXMAS", effect: "Unknown Reward", status: "expired" },
            { code: "EASTERHYPE", effect: "Unknown Reward", status: "expired" },
            { code: "ZEROGRAVITY", effect: "Unknown Reward", status: "expired" },
            { code: "GALAXYSEASON", effect: "Unknown Reward", status: "expired" },
            { code: "FALLINGLTM", effect: "Unknown Reward", status: "expired" },
            { code: "TOURNAMENTSW", effect: "Unknown Reward", status: "expired" },
            { code: "LAVAFLOOR", effect: "Unknown Reward", status: "expired" },
            { code: "LUNARNEWYEAR", effect: "Unknown Reward", status: "expired" },
            { code: "LIVEEVENTS", effect: "Unknown Reward", status: "expired" },
            { code: "1.5BTHANKS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE.DAY", effect: "Unknown Reward", status: "expired" },
            { code: "UPD250COINS", effect: "Unknown Reward", status: "expired" },
            { code: "SERPENT_HYPE", effect: "Unknown Reward", status: "expired" },
            { code: "VISITS_TY", effect: "Unknown Reward", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Dodgeball battle royale!",
        lastUpdated: "2025-06-30",
        popularity: "High"
    },
    {
        id: 12,
        name: "Tower Defense X",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NoHkD6ZRkQJtp-sknWmk-XMANtnDFVx7Dg&s",
       codes: [
            { code: "THREEHUNDREDTHOUSANDPLAYERS", effect: "200 Gems, 10 Trait Burners, 10 Stat Dice, 9 Bounded Cubes, 1 Roka Fruit, 1 Doma Fruit", status: "active" },
            { code: "THANKYOUFORSUPPORT", effect: "300 Gems, 5 Trait Burners, 9 Bounded Cubes, 1 Roka Fruit, 2 Doma Fruits", status: "active" },
            { code: "UPD1", effect: "400 Gems, 30 Trait Burners, 20 Stat Dice", status: "active" },
            { code: "LIKEF5", effect: "500 Gems, 10 Trait Burners, 10 Stat Dice, 9 Basic Capsules", status: "active" },
            { code: "VERYHIGHLIKEB", effect: "500 Gems, 15 Trait Burners, 10 Stat Dice, 3 Basic Capsules", status: "active" },
            { code: "ONEEIGHTYFIVELIKES", effect: "500 Gems, 15 Trait Burners, 10 Stat Dice, 1 Cookin Love, 10 Bounded Cubes", status: "active" },
            { code: "FORTYFIVELIKES", effect: "500 Gems, 10 Trait Burners, 2 Summon Tickets, 10 Bounded Cubes", status: "active" },
            { code: "somanylikes", effect: "500 Gems, 2 Premium Capsules, 10 Trait Burners, 2 Skill Orb Bags", status: "active" },
            { code: "AFIRSTTIME3001", effect: "500 Gems, 5 Basic Capsule, 20 Trait Burner, 2 Skill Orb Bag, 1 Cloud Summon", status: "active" },
            { code: "FREENIMBUSMOUNT", effect: "Nimbus Mount", status: "active" }
        ],
        category: "strategy",
        rating: 4.6,
        description: "Innovative tower defense!",
        lastUpdated: "2025-06-29",
        popularity: "Medium"
    },
    {
        id: 13,
        name: "Project Slayers",
        image: "https://i.ytimg.com/vi/YBcB-bs8Kl4/maxresdefault.jpg",
        codes: [
            { code: "SLAY2025", effect: "Grants 200 Wen", status: "active" },
            { code: "DEMON100", effect: "Unlocks Demon Art Spin", status: "active" },
            { code: "FIGHT50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "SLAYER2024", effect: "Gave 100 Wen", status: "expired" }
        ],
        category: "action",
        rating: 4.8,
        description: "Demon Slayer-inspired RPG!",
        lastUpdated: "2025-06-28",
        popularity: "High"
    },
    {
        id: 14,
        name: "Fisch",
        image: "https://i.ytimg.com/vi/JVDAoUkOxac/maxresdefault.jpg",
        codes: [
            { code: "FRIENDXP", effect: "A unique Title, Various Totems, Various Eggs, Various Bobbers, Various Rod Skins, The Crimson Jetski, and Lunar Thread", status: "active" },
            { code: "Brother", effect: "Brother’s rod", status: "active" },
            { code: "4THOFJULY", effect: "Patriot rod, A unique title, Shiny and Sparkling totems", status: "active" },
            { code: "ChangesComing", effect: "50 Golden Tentacles and Rod Skin", status: "active" },
            { code: "Legomy", effect: "Gullible Title", status: "active" },
            { code: "SorryReward", effect: "5 Kraken Tentacle baits and 1500 Cash", status: "active" },
            { code: "THEKRAKEN", effect: "Sunken Ship bobber and 2500 Cash", status: "active" },
            { code: "CARBON", effect: "Free Carbon bobber", status: "active" },
            { code: "SORRYGUYS", effect: "2 Kraken Tentacle baits and 1000 Cash", status: "active" },
            { code: "ATLANTEANSTORM", effect: "1000 Cash and 2 Hangman’s Hook baits", status: "active" },
            { code: "GOLDENTIDE", effect: "2000 Cash and 2 Instant Catchers", status: "active" },
            { code: "NewYear", effect: "1000 Cash, 2 Holy Berry, and 2 Peppermint Worm", status: "active" },
            { code: "NorthernExpedition", effect: "1000 Cash, 2 Holy Berry, and 3 Peppermint Worm", status: "active" },
            { code: "FISCHMASDAY", effect: "Unknown Reward", status: "expired" },
            { code: "MERRYFISCHMAS", effect: "Unknown Reward", status: "expired" },
            { code: "RFG", effect: "Unknown Reward", status: "expired" },
            { code: "NewBeginnings", effect: "Unknown Reward", status: "expired" },
            { code: "1BVisits", effect: "Unknown Reward", status: "expired" },
            { code: "GOODBYEFISCHMAS", effect: "Unknown Reward", status: "expired" },
            { code: "ThankYouFollowers3", effect: "Unknown Reward", status: "expired" },
            { code: "ThankYouFollowers2", effect: "Unknown Reward", status: "expired" },
            { code: "Advent", effect: "Unknown Reward", status: "expired" },
            { code: "ThankYouFollowers", effect: "Unknown Reward", status: "expired" },
            { code: "AncientIsle", effect: "Unknown Reward", status: "expired" },
            { code: "Prehistoric", effect: "Unknown Reward", status: "expired" },
            { code: "TheDepths", effect: "Unknown Reward", status: "expired" },
            { code: "100M", effect: "Unknown Reward", status: "expired" },
            { code: "200K", effect: "Unknown Reward", status: "expired" },
            { code: "SorryForDowntime", effect: "Unknown Reward", status: "expired" },
            { code: "Scubaaaa", effect: "Unknown Reward", status: "expired" },
            { code: "ThanksFor10Mil", effect: "Unknown Reward", status: "expired" },
            { code: "FischFright2024", effect: "Unknown Reward", status: "expired" },
            { code: "SorryforShutdown", effect: "Unknown Reward", status: "expired" }
        ],
        category: "simulation",
        rating: 4.5,
        description: "Deep-sea fishing adventure!",
        lastUpdated: "2025-06-27",
        popularity: "Medium"
    },
    {
        id: 16,
        name: "Blue Lock Rivals",
        image: "https://tr.rbxcdn.com/180DAY-957d12604f10fb02beed7ffda5a1254e/768/432/Image/Webp/noFilter",
        codes: [
            { code: "SUMMERPT1!", effect: "7 Lucky Style and 7 Lucky Flow", status: "active" },
            { code: "NELREO!", effect: "Unknown Reward", status: "expired" },
            { code: "MASTEROFALLTRADES!", effect: "Unknown Reward", status: "expired" },
            { code: "KINGOVERHAUL!", effect: "Unknown Reward", status: "expired" },
            { code: "KINGAUTHORITY!", effect: "Unknown Reward", status: "expired" },
            { code: "MASSIVEBUGFIXES!", effect: "Unknown Reward", status: "expired" },
            { code: "KINGAWAKENING!", effect: "Unknown Reward", status: "expired" },
            { code: "LUCKY7!", effect: "Unknown Reward", status: "expired" },
            { code: "CAREPACKAGE!", effect: "Unknown Reward", status: "expired" },
            { code: "THEGODSPRINTER!", effect: "Unknown Reward", status: "expired" },
            { code: "GODSPEED!", effect: "Unknown Reward", status: "expired" },
            { code: "MASTERS!", effect: "Unknown Reward", status: "expired" },
            { code: "JULIANLOKI!", effect: "Unknown Reward", status: "expired" },
            { code: "RANKED!", effect: "Unknown Reward", status: "expired" },
            { code: "LOKISOON!", effect: "Unknown Reward", status: "expired" },
            { code: "AIKUREWORK!", effect: "Unknown Reward", status: "expired" },
            { code: "SNAKEDEFENCE!", effect: "Unknown Reward", status: "expired" },
            { code: "AIKU1.15M!", effect: "Unknown Reward", status: "expired" },
            { code: "NEWHIORI!", effect: "Unknown Reward", status: "expired" },
            { code: "3BILLIONVISITS!", effect: "Unknown Reward", status: "expired" },
            { code: "NELSUMMER!", effect: "Unknown Reward", status: "expired" },
            { code: "NEWCHEM1.1M!", effect: "Unknown Reward", status: "expired" },
            { code: "4HOURS!", effect: "Unknown Reward", status: "expired" },
            { code: "Rin999K!", effect: "Unknown Reward", status: "expired" },
            { code: "1MILLIONCCU!!", effect: "Unknown Reward", status: "expired" },
            { code: "NeoEgoistRIN!", effect: "Unknown Reward", status: "expired" },
            { code: "TheDestroyer!", effect: "Unknown Reward", status: "expired" },
            { code: "OTOYA!!", effect: "Unknown Reward", status: "expired" },
            { code: "CHEMREACTION!", effect: "Unknown Reward", status: "expired" },
            { code: "REVAMP!", effect: "Unknown Reward", status: "expired" },
            { code: "BACHIRA!!", effect: "Unknown Reward", status: "expired" },
            { code: "EASTER25!", effect: "Unknown Reward", status: "expired" },
            { code: "EGGHunt!!!", effect: "Unknown Reward", status: "expired" },
            { code: "Sry4Delay", effect: "Unknown Reward", status: "expired" },
            { code: "IGAGOAT1.8M!", effect: "Unknown Reward", status: "expired" },
            { code: "THEMONK!", effect: "Unknown Reward", status: "expired" },
            { code: "2BVISITS!", effect: "Unknown Reward", status: "expired" },
            { code: "KING1.5M", effect: "Unknown Reward", status: "expired" },
            { code: "KINGREWORK", effect: "Unknown Reward", status: "expired" },
            { code: "GOALRUSH", effect: "Unknown Reward", status: "expired" },
            { code: "KAISERFIX", effect: "Unknown Reward", status: "expired" },
            { code: "LUCKYCODE10", effect: "Unknown Reward", status: "expired" },
            { code: "MIRO1MCCU", effect: "Unknown Reward", status: "expired" },
            { code: "KAISER2M", effect: "Unknown Reward", status: "expired" },
            { code: "KAISERSOON", effect: "Unknown Reward", status: "expired" },
            { code: "SHARKBOY", effect: "Unknown Reward", status: "expired" },
            { code: "KURONANOW", effect: "Unknown Reward", status: "expired" },
            { code: "NELISAGI", effect: "Unknown Reward", status: "expired" },
            { code: "SORRYDELAYGGS", effect: "Unknown Reward", status: "expired" },
            { code: "KURONATOMORROW", effect: "Unknown Reward", status: "expired" },
            { code: "FINE1M", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLO4AM", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLO4FUN", effect: "Unknown Reward", status: "expired" },
            { code: "SORRY4DELAY", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOCAREPACKAGE", effect: "Unknown Reward", status: "expired" },
            { code: "10KDEVS", effect: "Unknown Reward", status: "expired" },
            { code: "100KCHRO", effect: "Unknown Reward", status: "expired" },
            { code: "1BVISITS", effect: "Unknown Reward", status: "expired" },
            { code: "DONLORENZO", effect: "Unknown Reward", status: "expired" },
            { code: "300KCHROLLO", effect: "Unknown Reward", status: "expired" },
            { code: "1MEVENT", effect: "Unknown Reward", status: "expired" },
            { code: "20KCHANNEL", effect: "Unknown Reward", status: "expired" },
            { code: "40KCHANNEL", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLO100K", effect: "Unknown Reward", status: "expired" },
            { code: "40KAGAIN", effect: "Unknown Reward", status: "expired" },
            { code: "THECODE", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOYT", effect: "Unknown Reward", status: "expired" },
            { code: "40KKUNIGAMI", effect: "Unknown Reward", status: "expired" },
            { code: "KUNIGAMIUPD", effect: "Unknown Reward", status: "expired" },
            { code: "KUN1G@M1", effect: "Unknown Reward", status: "expired" },
            { code: "200KSUB", effect: "Unknown Reward", status: "expired" },
            { code: "KARASU", effect: "Unknown Reward", status: "expired" },
            { code: "THX40KAGAIN", effect: "Unknown Reward", status: "expired" },
            { code: "THX40KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "50KTATLIS", effect: "Unknown Reward", status: "expired" },
            { code: "THX30KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "DRAGON", effect: "Unknown Reward", status: "expired" },
            { code: "MONST3R", effect: "Unknown Reward", status: "expired" },
            { code: "60KFOLLOWERS", effect: "Unknown Reward", status: "expired" },
            { code: "30KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "YUKIMIYA", effect: "Unknown Reward", status: "expired" },
            { code: "20KLIKESPT2", effect: "Unknown Reward", status: "expired" },
            { code: "TRAILER20K", effect: "Unknown Reward", status: "expired" },
            { code: "THANKYOU", effect: "Unknown Reward", status: "expired" },
            { code: "300KREO", effect: "Unknown Reward", status: "expired" },
            { code: "35KCHROLLO", effect: "Unknown Reward", status: "expired" },
            { code: "25KTATLIS", effect: "Unknown Reward", status: "expired" },
            { code: "5KVID", effect: "Unknown Reward", status: "expired" },
            { code: "20KCHROLLO", effect: "Unknown Reward", status: "expired" },
            { code: "15KTATLIS", effect: "Unknown Reward", status: "expired" },
            { code: "MRSPAX", effect: "Unknown Reward", status: "expired" },
            { code: "5KTATLIS", effect: "Unknown Reward", status: "expired" },
            { code: "CHRISTMAS", effect: "Unknown Reward", status: "expired" },
            { code: "SORRYDELAY", effect: "Unknown Reward", status: "expired" },
            { code: "WINTERPART2", effect: "Unknown Reward", status: "expired" },
            { code: "1KTATLIS", effect: "Unknown Reward", status: "expired" },
            { code: "AIKU", effect: "Unknown Reward", status: "expired" },
            { code: "HOORAY", effect: "Unknown Reward", status: "expired" },
            { code: "1MLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "900KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "800KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "700KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "600KCRAZY", effect: "Unknown Reward", status: "expired" },
            { code: "ITOSHIBROTHERS", effect: "Unknown Reward", status: "expired" },
            { code: "500KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "400KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "300KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "250KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "GAGAMARU", effect: "Unknown Reward", status: "expired" },
            { code: "200CRAZY", effect: "Unknown Reward", status: "expired" },
            { code: "150KWOW", effect: "Unknown Reward", status: "expired" },
            { code: "100KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "70KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "THANKSGIVING", effect: "Unknown Reward", status: "expired" },
            { code: "20KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "40KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "FORGIVEME", effect: "Unknown Reward", status: "expired" },
            { code: "6KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "3KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "1KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "RELEASED", effect: "Unknown Reward", status: "expired" }
        ],
        category: "sports",
        rating: 4.6,
        description: "Anime-style soccer battles!",
        lastUpdated: "2025-06-25",
        popularity: "High"
    },
    {
        id: 17,
        name: "Meme Sea",
        image: "https://tr.rbxcdn.com/180DAY-8969e7930b6813c9240a0e7387dfbf25/512/512/Image/Webp/noFilter",
        codes: [
            { code: "MEME2025", effect: "Grants 200 Doubloons", status: "active" },
            { code: "SEA100", effect: "Unlocks Meme Ship", status: "active" },
            { code: "LAUGH50", effect: "50% Speed Boost for 1 hour", status: "active" },
            { code: "PIRATE2024", effect: "Gave 100 Doubloons", status: "expired" }
        ],
        category: "adventure",
        rating: 4.5,
        description: "Meme-filled pirate adventure!",
        lastUpdated: "2025-06-24",
        popularity: "Medium"
    },
    {
        id: 18,
        name: "Natural Disaster Survival",
        image: "https://tr.rbxcdn.com/180DAY-9b827b2f6927b039ec508bf133bedd9a/512/512/Image/Webp/noFilter",
        codes: [
            { code: "SURV2025", effect: "Grants 100 Survival Points", status: "active" },
            { code: "DISASTER100", effect: "Unlocks Safety Kit", status: "active" },
            { code: "SAFE50", effect: "50% Health Boost for 1 round", status: "active" },
            { code: "STORM2024", effect: "Gave 50 Survival Points", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Survive natural disasters!",
        lastUpdated: "2025-06-23",
        popularity: "High"
    },
    {
        id: 21,
        name: "Anime Champions Simulator",
        image: "https://tr.rbxcdn.com/180DAY-4222f841696f494b912d3a4b5eea24ba/500/280/Image/Jpeg/noFilter",
        codes: [
            { code: "CHAMP2025", effect: "Grants 500 Gems", status: "active" },
            { code: "ANIME100", effect: "Unlocks Rare Champion", status: "active" },
            { code: "FIGHT50", effect: "50% Damage Boost for 1 hour", status: "active" },
            { code: "HERO2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "strategy",
        rating: 4.6,
        description: "Anime hero battles!",
        lastUpdated: "2025-06-20",
        popularity: "High"
    },
    {
        id: 22,
        name: "Combat Warriors",
        image: "https://pbs.twimg.com/profile_images/1608587710091894787/UgbxJ1Jr_400x400.jpg",
        codes: [
            { code: "WAR2025", effect: "Grants 1000 XP", status: "active" },
            { code: "FIGHT100", effect: "Unlocks Rare Weapon", status: "active" },
            { code: "BLOOD50", effect: "50% Damage Boost for 1 match", status: "active" },
            { code: "COMBAT2024", effect: "Gave 500 XP", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Melee and ranged combat!",
        lastUpdated: "2025-06-19",
        popularity: "Medium"
    },
    {
        id: 26,
        name: "Phantom Forces",
        image: "https://tr.rbxcdn.com/180DAY-e4ee39e5d609420f3a1290e277ca3294/768/432/Image/Webp/noFilter",
        codes: [
            { code: "PF2025", effect: "Grants 1000 Credits", status: "active" },
            { code: "SHOOT100", effect: "Unlocks Rare Gun", status: "active" },
            { code: "TROOP50", effect: "50% Ammo Boost for 1 match", status: "active" },
            { code: "SNIPE2024", effect: "Gave 500 Credits", status: "expired" }
        ],
        category: "action",
        rating: 4.8,
        description: "Tactical FPS shooter!",
        lastUpdated: "2025-06-15",
        popularity: "High"
    },
    {
        id: 27,
        name: "Piggy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5savQUWmPyS2NnA0_6Rw-R4NPaSMqb_zJQg&s",
        codes: [
            { code: "PIG2025", effect: "Grants 100 Tokens", status: "active" },
            { code: "HORR100", effect: "Unlocks Trap Item", status: "active" },
            { code: "SAVE50", effect: "50% Speed Boost for 1 round", status: "active" },
            { code: "ESCAPE2024", effect: "Gave 50 Tokens", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Horror survival with puzzles!",
        lastUpdated: "2025-06-14",
        popularity: "High"
    },
    {
        id: 28,
        name: "SpongeBob Simulator",
        image: "https://tr.rbxcdn.com/180DAY-032209cbf2199db0be55fb176b804d9a/768/432/Image/Webp/noFilter",
        codes: [
            { code: "SPONGE2025", effect: "Grants 500 Doubloons", status: "active" },
            { code: "DUB100", effect: "Unlocks Rare Pet", status: "active" },
            { code: "BUDDY50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "BIKINI2024", effect: "Gave 200 Doubloons", status: "expired" }
        ],
        category: "simulation",
        rating: 4.7,
        description: "Collect doubloons in Bikini Bottom!",
        lastUpdated: "2025-06-13",
        popularity: "High"
    },
    {
        id: 29,
        name: "Rainbow Friends",
        image: "https://tr.rbxcdn.com/180DAY-5afb9efbaecda590c3ca938e896696d3/512/512/Image/Webp/noFilter",
        codes: [
            { code: "RAIN2025", effect: "Grants 100 Coins", status: "active" },
            { code: "HIDE100", effect: "Unlocks Stealth Item", status: "active" },
            { code: "ESC50", effect: "50% Speed Boost for 1 round", status: "active" },
            { code: "COLOR2024", effect: "Gave 50 Coins", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Escape colorful monsters!",
        lastUpdated: "2025-06-12",
        popularity: "High"
    },
    {
        id: 30,
        name: "Rift Royale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXw5n4jsKiSPLonS0AaS_KOvULU2xH41UTw&s",
        codes: [
            { code: "RIFT2025", effect: "Grants 500 Gold", status: "active" },
            { code: "BATTLE100", effect: "Unlocks Rare Weapon", status: "active" },
            { code: "WIN50", effect: "50% XP Boost for 1 match", status: "active" },
            { code: "ROYALE2024", effect: "Gave 200 Gold", status: "expired" }
        ],
        category: "action",
        rating: 4.5,
        description: "Battle royale survival!",
        lastUpdated: "2025-06-11",
        popularity: "Medium"
    },
    {
        id: 31,
        name: "Horse Life",
        image: "https://images.squarespace-cdn.com/content/v1/5b981d61ec4eb7dc9c7aac8a/1716640370562-KL3IQXK0RQTEQXJMGVWY/maxresdefault.jpg?format=1500w",
        codes: [
            { code: "HORSE2025", effect: "Grants 100 Hay", status: "active" },
            { code: "RIDE100", effect: "Unlocks Rare Saddle", status: "active" },
            { code: "STABLE50", effect: "50% Speed Boost for 1 race", status: "active" },
            { code: "GALLOP2024", effect: "Gave 50 Hay", status: "expired" }
        ],
        category: "simulation",
        rating: 4.7,
        description: "Horse care and racing!",
        lastUpdated: "2025-06-10",
        popularity: "High"
    },
    {
        id: 33,
        name: "Dragon Adventures",
        image: "https://tr.rbxcdn.com/180DAY-6a6e83f4f4b18c5b2e3046dcd1ab6056/768/432/Image/Webp/noFilter",
        codes: [
            { code: "DRAGON2025", effect: "Grants 100 Scales", status: "active" },
            { code: "FLY100", effect: "Unlocks Rare Dragon Egg", status: "active" },
            { code: "NEST50", effect: "50% Growth Boost for 1 hour", status: "active" },
            { code: "WING2024", effect: "Gave 50 Scales", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Raise and fly dragons!",
        lastUpdated: "2025-06-08",
        popularity: "High"
    },
    {
        id: 34,
        name: "Feline's Destiny",
        image: "https://tr.rbxcdn.com/180DAY-4dc870b37b94e8835acc04f19ab22615/500/280/Image/Jpeg/noFilter",
        codes: [
            { code: "CAT2025", effect: "Grants 200 Paws", status: "active" },
            { code: "CLAW100", effect: "Unlocks Rare Claw", status: "active" },
            { code: "PACK50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "MEOW2024", effect: "Gave 100 Paws", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.5,
        description: "Cat clan survival RPG!",
        lastUpdated: "2025-06-07",
        popularity: "Medium"
    },
    {
        id: 35,
        name: "Mad City",
        image: "https://tr.rbxcdn.com/180DAY-40d6565321a10597347d8078bc5a30aa/500/280/Image/Jpeg/noFilter",
        codes: [
            { code: "MAD2025", effect: "Grants 500 Cash", status: "active" },
            { code: "CRIME100", effect: "Unlocks Rare Vehicle", status: "active" },
            { code: "COP50", effect: "50% Speed Boost for 1 heist", status: "active" },
            { code: "ROB2024", effect: "Gave 200 Cash", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Open-world crime simulator!",
        lastUpdated: "2025-06-06",
        popularity: "High"
    },
    {
        id: 36,
        name: "Build a Boat for Treasure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNf17u0a1jMho81yEKNIZMdG1fpaSEEK3qw&s",
        codes: [
            { code: "BOAT2025", effect: "Grants 100 Gold", status: "active" },
            { code: "BUILD100", effect: "Unlocks Rare Block", status: "active" },
            { code: "TREASURE50", effect: "50% Speed Boost for 1 run", status: "active" },
            { code: "SAIL2024", effect: "Gave 50 Gold", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Craft boats for treasure hunts!",
        lastUpdated: "2025-06-05",
        popularity: "High"
    },
    {
        id: 37,
        name: "Tower of Hell",
        image: "https://tr.rbxcdn.com/180DAY-96795a30c5fe4cc27052afed6a2cc9fe/512/512/Image/Webp/noFilter",
        codes: [
            { code: "TOWER2025", effect: "Grants 100 Coins", status: "active" },
            { code: "CLIMB100", effect: "Unlocks Speed Boost", status: "active" },
            { code: "FALL50", effect: "50% Fall Protection for 1 run", status: "active" },
            { code: "OBBY2024", effect: "Gave 50 Coins", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Obby challenge with obstacles!",
        lastUpdated: "2025-06-04",
        popularity: "High"
    },
    {
        id: 38,
        name: "Work at a Pizza Place",
        image: "https://tr.rbxcdn.com/180DAY-6941df37ecac26f0e0a1063ba46f725d/768/432/Image/Webp/noFilter",
        codes: [
            { code: "PIZZA2025", effect: "Grants 200 Cash", status: "active" },
            { code: "JOB100", effect: "Unlocks Rare Uniform", status: "active" },
            { code: "TIP50", effect: "50% Tip Boost for 1 shift", status: "active" },
            { code: "SLICE2024", effect: "Gave 100 Cash", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Work and chaos in a pizzeria!",
        lastUpdated: "2025-06-03",
        popularity: "High"
    },
    {
        id: 40,
        name: "Bee Swarm Simulator",
        image: "https://tr.rbxcdn.com/180DAY-8d26dcb333e237ef13ef6e2bf125799e/768/432/Image/Webp/noFilter",
        codes: [
            { code: "BEE2025", effect: "Grants 100 Honey", status: "active" },
            { code: "HONEY100", effect: "Unlocks Rare Bee", status: "active" },
            { code: "SWARM50", effect: "50% Pollen Boost for 1 hour", status: "active" },
            { code: "BUZZ2024", effect: "Gave 50 Honey", status: "expired" }
        ],
        category: "simulation",
        rating: 4.7,
        description: "Collect honey with bees!",
        lastUpdated: "2025-06-01",
        popularity: "High"
    },
    {
        id: 41,
        name: "Thanksgiving 2025",
        image: "https://t3.rbxcdn.com/180DAY-3b2ec062707376a89a223ea44c20d408",
        codes: [
            { code: "THANKS2025", effect: "Grants 200 Coins", status: "active" },
            { code: "FEAST100", effect: "Unlocks Festive Outfit", status: "active" },
            { code: "TURKEY50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "FALL2024", effect: "Gave 100 Coins", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.5,
        description: "Festive family roleplay!",
        lastUpdated: "2025-05-31",
        popularity: "Medium"
    },
    {
        id: 42,
        name: "Superhero Tycoon",
        image: "https://tr.rbxcdn.com/180DAY-244ec6aa67a4bddddcdf5cb14963e412/512/512/Image/Webp/noFilter",
        codes: [
            { code: "HERO2025", effect: "Grants 500 Cash", status: "active" },
            { code: "POWER100", effect: "Unlocks Rare Power", status: "active" },
            { code: "BASE50", effect: "50% Build Speed for 1 hour", status: "active" },
            { code: "CAPE2024", effect: "Gave 200 Cash", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Build your superhero empire!",
        lastUpdated: "2025-05-30",
        popularity: "High"
    },
    {
        id: 43,
        name: "Speed Run 4",
        image: "https://tr.rbxcdn.com/180DAY-9421e59416494146fbbbd2eee1bbcd3d/512/512/Image/Webp/noFilter",
        codes: [
            { code: "SPEED2025", effect: "Grants 100 Gems", status: "active" },
            { code: "RUN100", effect: "Unlocks Speed Boost", status: "active" },
            { code: "FAST50", effect: "50% Speed Boost for 1 run", status: "active" },
            { code: "RACE2024", effect: "Gave 50 Gems", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Fast-paced obby challenges!",
        lastUpdated: "2025-05-29",
        popularity: "High"
    },
    {
        id: 44,
        name: "Steal a Brainrot",
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/secret-brainrots-steal-a-brainrot.jpg?q=70&fit=contain&w=1200&h=628&dpr=1",
        codes: [
            { code: "BRAIN2025", effect: "Grants 200 Memes", status: "active" },
            { code: "STEAL100", effect: "Unlocks Rare Meme", status: "active" },
            { code: "ROT50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "MEME2024", effect: "Gave 100 Memes", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Steal memes in a chaotic world!",
        lastUpdated: "2025-05-28",
        popularity: "Medium"
    },
    {
        id: 45,
        name: "9 Nights in the Forest [FURNITURE]",
        image: "https://tr.rbxcdn.com/180DAY-8416ccb670b3523971f66e894153b263/768/432/Image/Webp/noFilter",
        codes: [
            { code: "NIGHT2025", effect: "Grants 100 Wood", status: "active" },
            { code: "FOREST100", effect: "Unlocks Rare Furniture", status: "active" },
            { code: "CAMP50", effect: "50% Craft Speed for 1 hour", status: "active" },
            { code: "SURVIVE2024", effect: "Gave 50 Wood", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Survive eerie nights with crafting!",
        lastUpdated: "2025-05-27",
        popularity: "Medium"
    },
    {
        id: 46,
        name: "[NOLI] Forsaken",
        image: "https://tr.rbxcdn.com/180DAY-e129a9c962138a89f0ca8917367079cc/768/432/Image/Webp/noFilter",
        codes: [
            { code: "NOLI2025", effect: "Grants 200 Essence", status: "active" },
            { code: "FORSAKE100", effect: "Unlocks Rare Artifact", status: "active" },
            { code: "DARK50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "SHADOW2024", effect: "Gave 100 Essence", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.7,
        description: "Dark fantasy roleplay survival!",
        lastUpdated: "2025-05-26",
        popularity: "High"
    },
    
    {
        id: 48,
        name: "[RELEASE] All Star Tower Defense X",
        image: "https://tr.rbxcdn.com/180DAY-fd7c4e0d7660c05d0472a13d90b3c4d2/768/432/Image/Webp/noFilter",
        codes: [
            { code: "STAR2025", effect: "Grants 500 Gems", status: "active" },
            { code: "TOWER100", effect: "Unlocks Rare Unit", status: "active" },
            { code: "DEFEND50", effect: "50% Defense Boost for 1 wave", status: "active" },
            { code: "ASTD2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "strategy",
        rating: 4.8,
        description: "Anime-inspired tower defense!",
        lastUpdated: "2025-05-24",
        popularity: "High"
    },
    {
        id: 49,
        name: "RIVALS",
        image: "https://tr.rbxcdn.com/180DAY-ce669abe73b7f229cfdcb93c2326dfa3/512/512/Image/Webp/noFilter",
        codes: [
            { code: "RIVAL2025", effect: "Grants 500 Coins", status: "active" },
            { code: "FIGHT100", effect: "Unlocks Rare Weapon", status: "active" },
            { code: "CLASH50", effect: "50% Damage Boost for 1 match", status: "active" },
            { code: "BATTLE2024", effect: "Gave 200 Coins", status: "expired" }
        ],
        category: "action",
        rating: 4.6,
        description: "Competitive battle showdown!",
        lastUpdated: "2025-05-23",
        popularity: "Medium"
    },
    {
        id: 50,
        name: "Berry Avenue RP",
        image: "https://tr.rbxcdn.com/180DAY-428861a514e7f04b59e5b556c33ced99/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BERRY2025", effect: "Grants 200 Cash", status: "active" },
            { code: "TOWN100", effect: "Unlocks Rare Outfit", status: "active" },
            { code: "ROLE50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "AVENUE2024", effect: "Gave 100 Cash", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.7,
        description: "Vibrant open-world roleplay!",
        lastUpdated: "2025-05-22",
        popularity: "Very High"
    },
    {
        id: 51,
        name: "The Strongest Battlegrounds",
        image: "https://tr.rbxcdn.com/180DAY-85755b822cee060522bc974f98924350/512/512/Image/Webp/noFilter",
       codes: [
            { code: "4544601361", effect: "Pls Subscribe Kill Sound Effect", status: "active" },
            { code: "937885646", effect: "Ultra Kill Sound Effect", status: "active" },
            { code: "8508727445", effect: "Death Kill Sound Effect", status: "active" },
            { code: "8243098911", effect: "Do you feel sorry for me? Kill Sound Effect", status: "active" },
            { code: "6286038151", effect: "Birb Kill Sound Effect", status: "active" },
            { code: "5700183626", effect: "Blood Splash Kill Sound Effect", status: "active" },
            { code: "8233569802", effect: "Ara Ara Kill Sound Effect", status: "active" },
            { code: "8140095101", effect: "2010 Song Kill Sound Effect", status: "active" },
            { code: "7393653993", effect: "Don’t Get Mad! Kill Sound Effect", status: "active" },
            { code: "7147847068", effect: "You Lie Kill Sound Effect", status: "active" },
            { code: "8721555368", effect: "Fetch Kill Sound Effect", status: "active" },
            { code: "6879335951", effect: "Android Kill Sound Effect", status: "active" },
            { code: "8235260386", effect: "Another Fatherless Child Kill Sound Effect", status: "active" },
            { code: "7291000847", effect: "Blue Passport Kill Sound Effect", status: "active" },
            { code: "6185331235", effect: "Acne Sad Kill Sound Effect", status: "active" },
            { code: "3168087931", effect: "Telephone Roar Kill Sound Effect", status: "active" },
            { code: "6835794541", effect: "Sponge Bob! Kill Sound Effect", status: "active" },
            { code: "9057023555", effect: "Leave Me Alone Kill Sound Effect", status: "active" },
            { code: "7727945686", effect: "Slice Kill Sound Effect", status: "active" },
            { code: "4702564143", effect: "Mini Jam Kill Sound Effect", status: "active" },
            { code: "8649450925", effect: "You Going to Cry? Kill Sound Effect", status: "active" },
            { code: "2661731024", effect: "Windows Crash Kill Sound Effect", status: "active" },
            { code: "8550333107", effect: "Beat with a Stick! Kill Sound Effect", status: "active" },
            { code: "7345224995", effect: "Welcome to the Shadow Realm Kill Sound Effect", status: "active" },
            { code: "5304557205", effect: "Ah!!!! Kill Sound Effect", status: "active" },
            { code: "7187643697", effect: "MM2 Win Sound Kill Sound Effect", status: "active" },
            { code: "7361085557", effect: "Boom Headshot Meme Kill Sound Effect", status: "active" },
            { code: "9073674876", effect: "Bone Cold Kill Sound Effect", status: "active" },
            { code: "2618158728", effect: "Children Scream Kill Sound Effect", status: "active" },
            { code: "6927310432", effect: "Prowler Kill Sound Effect", status: "active" },
            { code: "6467894576", effect: "Scary Scream Kill Sound Effect", status: "active" },
            { code: "2261507666", effect: "Cool Remix Kill Sound Effect", status: "active" },
            { code: "130783046", effect: "Godzilla Kill Sound Effect", status: "active" },
            { code: "8974751426", effect: "Head Shot Kill Sound Effect", status: "active" },
            { code: "5951474720", effect: "Naruto Pain! Kill Sound Effect", status: "active" },
            { code: "9117321903", effect: "Gojo from Wish Kill Sound Effect", status: "active" },
            { code: "7355090174", effect: "Toxicity Kill Sound Effect", status: "active" },
            { code: "7118312248", effect: "Fishing Blow Kill Sound Effect", status: "active" },
            { code: "1832576951", effect: "Pathetic Kill Sound Effect", status: "active" },
            { code: "7109386510", effect: "Dababy? Kill Sound Effect", status: "active" },
            { code: "3200130016", effect: "You Are an Idiot Kill Sound Effect", status: "active" },
            { code: "9064673560", effect: "Man Shut Up! Kill Sound Effect", status: "active" },
            { code: "6087891128", effect: "Toilet Fart Kill Sound Effect", status: "active" },
            { code: "132366334", effect: "Pac-Man Death Kill Sound Effect", status: "active" },
            { code: "8395383233", effect: "Lego Brick Breaking Kill Sound Effect", status: "active" },
            { code: "7405233417", effect: "Sorry About That! Kill Sound Effect", status: "active" },
            { code: "792323017", effect: "Alarm! Kill Sound Effect", status: "active" },
            { code: "6649017583", effect: "Gambare Gambare Kill Sound Effect", status: "active" },
            { code: "8223869886", effect: "I will send you to Jesus Kill Sound Effect", status: "active" }
        ],
        category: "action",
        rating: 4.8,
        description: "Ultimate anime fighting arena!",
        lastUpdated: "2025-05-21",
        popularity: "High"
    },
    {
        id: 52,
        name: "Dandy's World [ALPHA]",
        image: "https://tr.rbxcdn.com/180DAY-b8b370156544095f5e1a7b0732410e53/512/512/Image/Webp/noFilter",
        codes: [
            { code: "DANDY2025", effect: "Grants 200 Coins", status: "active" },
            { code: "WORLD100", effect: "Unlocks Rare Item", status: "active" },
            { code: "ALPHA50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "ALPHA2024", effect: "Gave 100 Coins", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Explore a quirky adventure world!",
        lastUpdated: "2025-05-20",
        popularity: "Medium"
    },
    {
        id: 53,
        name: "[HIDE & SEEK] Squid Game X",
        image: "https://tr.rbxcdn.com/180DAY-62710b6a52c2e40f7ab18781fd6d4ada/512/512/Image/Webp/noFilter",
        codes: [
            { code: "500K_LIKES", effect: "100 Coins", status: "active" },
            { code: "STACKED", effect: "40 Coins", status: "active" },
            { code: "NEVERLOSE", effect: "40 Coins", status: "active" },
            { code: "FASTPASS", effect: "30 Coins", status: "active" },
            { code: "400K_LIKES", effect: "100 Coins", status: "active" },
            { code: "LEVELUP", effect: "20 Coins", status: "active" },
            { code: "ONECHANCE", effect: "40 Coins", status: "active" },
            { code: "PROPLAYER", effect: "40 Coins", status: "active" },
            { code: "QUICKWIN", effect: "40 Coins", status: "active" },
            { code: "350K_LIKES", effect: "100 Coins", status: "active" },
            { code: "REWARDTIME", effect: "40 Coins", status: "active" },
            { code: "RAININGCASH", effect: "40 Coins", status: "active" },
            { code: "RISKYPLAY", effect: "40 Coins", status: "active" },
            { code: "$250K$", effect: "50 Coins", status: "active" },
            { code: "FRONTMAN", effect: "75 Coins", status: "active" },
            { code: "REVAMP", effect: "33 Coins", status: "active" },
            { code: "150KLIKES", effect: "55 Coins", status: "active" },
            { code: "PENTA", effect: "35 Coins", status: "active" },
            { code: "MINGLE", effect: "45 Coins", status: "active" },
            { code: "UPDATE11RELEASE", effect: "75 Coins", status: "active" },
            { code: "$100K$", effect: "50 Coins", status: "active" },
            { code: "100KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "$100M$", effect: "Unknown Reward", status: "expired" },
            { code: "^100MIL^", effect: "Unknown Reward", status: "expired" },
            { code: "BAXTRIX", effect: "Unknown Reward", status: "expired" },
            { code: "BAXTRIX_2", effect: "Unknown Reward", status: "expired" },
            { code: "SANTA", effect: "Unknown Reward", status: "expired" },
            { code: "+80KLIKES+", effect: "Unknown Reward", status: "expired" },
            { code: "20KCONC", effect: "Unknown Reward", status: "expired" },
            { code: "50KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE7RELEASE", effect: "Unknown Reward", status: "expired" },
            { code: "75MIL", effect: "Unknown Reward", status: "expired" },
            { code: "35KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE4RELEASE", effect: "Unknown Reward", status: "expired" },
            { code: "GUARDS", effect: "Unknown Reward", status: "expired" },
            { code: "28KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE3RELEASE", effect: "Unknown Reward", status: "expired" },
            { code: "REFUND", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE5RELEASE", effect: "Unknown Reward", status: "expired" },
            { code: "10MIL", effect: "Unknown Reward", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Survive deadly hide-and-seek games!",
        lastUpdated: "2025-05-19",
        popularity: "High"
    },
    {
        id: 54,
        name: "My Singing Brainrot",
        image: "https://tr.rbxcdn.com/180DAY-c1dc2203bf7da0c028e818902bb8c1d9/512/512/Image/Webp/noFilter",
        codes: [
            { code: "SING2025", effect: "Grants 200 Notes", status: "active" },
            { code: "MEME100", effect: "Unlocks Rare Song", status: "active" },
            { code: "TUNE50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "SONG2024", effect: "Gave 100 Notes", status: "expired" }
        ],
        category: "simulation",
        rating: 4.5,
        description: "Sing and meme in a chaotic world!",
        lastUpdated: "2025-05-18",
        popularity: "Medium"
    },
    {
        id: 55,
        name: "Catalog Avatar Creator",
        image: "https://tr.rbxcdn.com/180DAY-da0a5ce93a8b496f66abe3d93d30ffa7/512/512/Image/Webp/noFilter",
        codes: [
            { code: "AVATAR2025", effect: "Grants 200 Credits", status: "active" },
            { code: "CREATE100", effect: "Unlocks Rare Accessory", status: "active" },
            { code: "LOOK50", effect: "50% Customization Speed for 1 hour", status: "active" },
            { code: "STYLE2024", effect: "Gave 100 Credits", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.6,
        description: "Design your dream avatar!",
        lastUpdated: "2025-05-17",
        popularity: "High"
    },
    {
        id: 56,
        name: "[UPD] Basketball: Zero",
        image: "https://tr.rbxcdn.com/180DAY-1208e2385a30c2026d9ba075d7169c3e/512/512/Image/Webp/noFilter",
        codes: [
            { code: "GOODWEEKEND", effect: "15 Lucky spins and 15 Lucky zone spins", status: "active" },
            { code: "UNCLESAM", effect: "15 Lucky spins and 15 Lucky zone spins", status: "active" },
            { code: "OIL", effect: "15 Lucky spins and 15 Lucky zone spins", status: "active" },
            { code: "VERYSRRYDELAY", effect: "7 Lucky spins and 7 Lucky zone spins", status: "active" },
            { code: "CHROLLODROPHOORAY", effect: "Unknown Reward", status: "expired" },
            { code: "TEAMTATLISHOORAY", effect: "Unknown Reward", status: "expired" },
            { code: "LAZYWORKER", effect: "Unknown Reward", status: "expired" },
            { code: "LEWIWASHEREAGAIN", effect: "Unknown Reward", status: "expired" },
            { code: "LEWISAYSSORRY", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLO700KSUBS", effect: "Unknown Reward", status: "expired" },
            { code: "BONUSCHROLLO", effect: "Unknown Reward", status: "expired" },
            { code: "4.5MLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "SUMMERFIXES", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLO1MTT", effect: "Unknown Reward", status: "expired" },
            { code: "ANOTHERGIFT", effect: "Unknown Reward", status: "expired" },
            { code: "10KFOLLOWERSTY", effect: "Unknown Reward", status: "expired" },
            { code: "STOPBEGGING", effect: "Unknown Reward", status: "expired" },
            { code: "CHROTATCAREPACKAGE", effect: "Unknown Reward", status: "expired" },
            { code: "TEAMCHROLLO", effect: "Unknown Reward", status: "expired" },
            { code: "TEAMTATLIS", effect: "Unknown Reward", status: "expired" },
            { code: "DOBETTERM", effect: "Unknown Reward", status: "expired" },
            { code: "TATLISBETTER", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOSOLOS", effect: "Unknown Reward", status: "expired" },
            { code: "TOOEZ", effect: "Unknown Reward", status: "expired" },
            { code: "GOLD", effect: "Unknown Reward", status: "expired" },
            { code: "ACEREWORK", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOBOREDRN", effect: "Unknown Reward", status: "expired" },
            { code: "BOOSTEDCODE", effect: "Unknown Reward", status: "expired" },
            { code: "BASKETBALLGOD", effect: "Unknown Reward", status: "expired" },
            { code: "3.5MLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLO600KSUBS", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOSBACK", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOSGIFTTY", effect: "Unknown Reward", status: "expired" },
            { code: "EMPERORUPD", effect: "Unknown Reward", status: "expired" },
            { code: "300KEMPEROR", effect: "Unknown Reward", status: "expired" },
            { code: "10KLIKESYTS", effect: "Unknown Reward", status: "expired" },
            { code: "ACCIDENTS", effect: "Unknown Reward", status: "expired" },
            { code: "EMPERORSOON", effect: "Unknown Reward", status: "expired" },
            { code: "STARREWORK", effect: "Unknown Reward", status: "expired" },
            { code: "HISRRY", effect: "Unknown Reward", status: "expired" },
            { code: "RANKEDCODE", effect: "Unknown Reward", status: "expired" },
            { code: "rankedsoon", effect: "Unknown Reward", status: "expired" },
            { code: "chrollohi", effect: "Unknown Reward", status: "expired" },
            { code: "PERFECTION", effect: "Unknown Reward", status: "expired" },
            { code: "200KPERFECT", effect: "Unknown Reward", status: "expired" },
            { code: "2.5MLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "TATLISPATCHWOW", effect: "Unknown Reward", status: "expired" },
            { code: "300KINTERESTED", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOGIFT", effect: "Unknown Reward", status: "expired" },
            { code: "200KLOCK", effect: "Unknown Reward", status: "expired" },
            { code: "10klikesyt", effect: "Unknown Reward", status: "expired" },
            { code: "150KLOCK", effect: "Unknown Reward", status: "expired" },
            { code: "1.5MLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "NEWCODESRRY", effect: "Unknown Reward", status: "expired" },
            { code: "SUNDAYPATCH", effect: "Unknown Reward", status: "expired" },
            { code: "wowforgotcode", effect: "Unknown Reward", status: "expired" },
            { code: "YIPPEE3V3", effect: "Unknown Reward", status: "expired" },
            { code: "SORRY4DELAY", effect: "Unknown Reward", status: "expired" },
            { code: "200KINTERESTED", effect: "Unknown Reward", status: "expired" },
            { code: "150KINTERESTED2", effect: "Unknown Reward", status: "expired" },
            { code: "15KLIKESYT", effect: "Unknown Reward", status: "expired" },
            { code: "100KINTERESTED", effect: "Unknown Reward", status: "expired" },
            { code: "TATLISBUGOOPS", effect: "Unknown Reward", status: "expired" },
            { code: "SRRYFORCRASH", effect: "Unknown Reward", status: "expired" },
            { code: "JACKPOT", effect: "Unknown Reward", status: "expired" },
            { code: "JACKPOTTOMORROW", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOFORGOT", effect: "Unknown Reward", status: "expired" },
            { code: "CHROLLOMVP", effect: "Unknown Reward", status: "expired" },
            { code: "TATLISCODE", effect: "Unknown Reward", status: "expired" },
            { code: "150kevent", effect: "Unknown Reward", status: "expired" },
            { code: "WOW100K", effect: "Unknown Reward", status: "expired" },
            { code: "1MLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "400KWOW", effect: "Unknown Reward", status: "expired" },
            { code: "100KW", effect: "Unknown Reward", status: "expired" },
            { code: "WCHROLLO", effect: "Unknown Reward", status: "expired" },
            { code: "RELEASE", effect: "Unknown Reward", status: "expired" },
            { code: "500KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "350KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "150KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "50KLIKES", effect: "Unknown Reward", status: "expired" }
        ],
        category: "sports",
        rating: 4.6,
        description: "Anime-style basketball battles!",
        lastUpdated: "2025-05-16",
        popularity: "Medium"
    },
    {
        id: 57,
        name: "☀️ Evade",
        image: "https://tr.rbxcdn.com/180DAY-536b521a17fa10f753bf152e3e449a33/512/512/Image/Webp/noFilter",
        codes: [
            { code: "EVADE2025", effect: "Grants 100 Coins", status: "active" },
            { code: "RUN100", effect: "Unlocks Speed Boost", status: "active" },
            { code: "HIDE50", effect: "50% Stealth Boost for 1 round", status: "active" },
            { code: "CHASE2024", effect: "Gave 50 Coins", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Dodge obstacles in a fast-paced chase!",
        lastUpdated: "2025-05-15",
        popularity: "High"
    },
    {
        id: 58,
        name: "[MAP] Welcome to Bloxburg",
        image: "https://tr.rbxcdn.com/180DAY-c976e91d74b18b1d96128a576fdb90b0/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BLOX2025", effect: "Grants 200 Blockbux", status: "active" },
            { code: "TOWN100", effect: "Unlocks Rare Furniture", status: "active" },
            { code: "BUILD50", effect: "50% Build Speed for 1 hour", status: "active" },
            { code: "CITY2024", effect: "Gave 100 Blockbux", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.8,
        description: "Build and live in a vibrant city!",
        lastUpdated: "2025-05-14",
        popularity: "Very High"
    },
    {
        id: 59,
        name: "LifeTogether RP",
        image: "https://tr.rbxcdn.com/180DAY-662f88fef8ef8dab0f8d8bad602a9d52/512/512/Image/Webp/noFilter",
        codes: [
            { code: "LIFE2025", effect: "Grants 200 Cash", status: "active" },
            { code: "FRIEND100", effect: "Unlocks Rare Outfit", status: "active" },
            { code: "HOME50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "SOCIAL2024", effect: "Gave 100 Cash", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.7,
        description: "Social roleplay with friends!",
        lastUpdated: "2025-05-13",
        popularity: "High"
    },
    {
        id: 60,
        name: "Brainrot Evolution",
        image: "https://tr.rbxcdn.com/180DAY-e0aae25ccf77834ed2f49e1cee76ebaa/512/512/Image/Webp/noFilter",
        codes: [
            { code: "EVOL2025", effect: "Grants 200 Memes", status: "active" },
            { code: "MEME100", effect: "Unlocks Rare Meme", status: "active" },
            { code: "ROT50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "VIRAL2024", effect: "Gave 100 Memes", status: "expired" }
        ],
        category: "simulation",
        rating: 4.5,
        description: "Evolve memes in a crazy world!",
        lastUpdated: "2025-05-12",
        popularity: "Medium"
    },
  {
    id: 61,
    name: "Climb and Jump Tower [UPD SOON]",
    image: "https://tr.rbxcdn.com/180DAY-1bd1137a28545fc4ecd738930c0f2ef4/512/512/Image/Webp/noFilter",
    codes: [
        { code: "CLIMB2025", effect: "Grants 100 Coins", status: "active" },
        { code: "JUMP100", effect: "Unlocks Speed Boost", status: "active" },
        { code: "TOWER50", effect: "50% Fall Protection for 1 run", status: "active" },
        { code: "TOWER2024", effect: "Gave 50 Coins", status: "expired" }
    ],
    category: "adventure",
    rating: 4.6,
    description: "Scale challenging towers!",
    lastUpdated: "2025-05-11",
    popularity: "High"
},
    {
        "id": 62,
        "name": "Sonic Speed Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-38341e97e2bfa082f01dd073a999fb03/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "SONIC2025", "effect": "Grants 100 Rings", "status": "active" },
            { "code": "SPEED100", "effect": "Unlocks Speed Boost", "status": "active" },
            { "code": "RACE50", "effect": "50% Speed Boost for 1 race", "status": "active" },
            { "code": "RING2024", "effect": "Gave 50 Rings", "status": "expired" }
        ],
        "category": "adventure",
        "rating": 4.7,
        "description": "Race as Sonic in a speedy world!",
        "lastUpdated": "2025-05-10",
        "popularity": "High"
    },
    {
        "id": 63,
        "name": "Royale High",
        "image": "https://tr.rbxcdn.com/180DAY-27a0ec1acb15103cb422e52bdcc475a1/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "ROYALE2025", "effect": "Grants 200 Diamonds", "status": "active" },
            { "code": "CROWN100", "effect": "Unlocks Rare Accessory", "status": "active" },
            { "code": "GLAM50", "effect": "50% XP Boost for 1 hour", "status": "active" },
            { "code": "QUEEN2024", "effect": "Gave 100 Diamonds", "status": "expired" }
        ],
        "category": "roleplay",
        "rating": 4.8,
        "description": "Live a magical school life!",
        "lastUpdated": "2025-05-09",
        "popularity": "Very High"
    },
    {
        "id": 64,
        "name": "Anime Fighting Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-d27e716b9560bb56dc40451b45c9d00e/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "ANIMEF2025", "effect": "Grants 1000 Chikara", "status": "active" },
            { "code": "FIGHT100", "effect": "Unlocks Rare Power", "status": "active" },
            { "code": "POWER50", "effect": "50% Damage Boost for 1 hour", "status": "active" },
            { "code": "CHIKARA2024", "effect": "Gave 500 Chikara", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.7,
        "description": "Train and battle anime heroes!",
        "lastUpdated": "2025-05-08",
        "popularity": "High"
    },
    {
        "id": 65,
        "name": "3008",
        "image": "https://tr.rbxcdn.com/180DAY-37bde0e4ae471169438b99942b8be44b/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "STORE2025", "effect": "Grants 100 Supplies", "status": "active" },
            { "code": "HIDE100", "effect": "Unlocks Stealth Item", "status": "active" },
            { "code": "SURV50", "effect": "50% Health Boost for 1 night", "status": "active" },
            { "code": "IKEA2024", "effect": "Gave 50 Supplies", "status": "expired" }
        ],
        "category": "adventure",
        "rating": 4.6,
        "description": "Survive in an endless store!",
        "lastUpdated": "2025-05-07",
        "popularity": "High"
    },
    {
        "id": 66,
        "name": "Jujutsu Shenanigans",
        "image": "https://tr.rbxcdn.com/180DAY-1caf54cff5f60cca72f8295bdd9725c3/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "JUJUTSU2025", "effect": "Grants 1000 Cursed Energy", "status": "active" },
            { "code": "CURSE100", "effect": "Unlocks Rare Technique", "status": "active" },
            { "code": "BATTLE50", "effect": "50% Damage Boost for 1 fight", "status": "active" },
            { "code": "CURSE2024", "effect": "Gave 500 Cursed Energy", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.8,
        "description": "Anime-inspired cursed battles!",
        "lastUpdated": "2025-05-06",
        "popularity": "High"
    },
    {
        "id": 67,
        "name": "Base Raiders",
        "image": "https://tr.rbxcdn.com/180DAY-965e8c233ccb9dcd0fd4519225cd1201/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "RAID2025", "effect": "Grants 500 Resources", "status": "active" },
            { "code": "BASE100", "effect": "Unlocks Rare Defense", "status": "active" },
            { "code": "ATTACK50", "effect": "50% Attack Boost for 1 raid", "status": "active" },
            { "code": "FORT2024", "effect": "Gave 200 Resources", "status": "expired" }
        ],
        "category": "strategy",
        "rating": 4.6,
        "description": "Build and raid enemy bases!",
        "lastUpdated": "2025-05-05",
        "popularity": "Medium"
    },
    {
        "id": 68,
        "name": "Batting Champions",
        "image": "https://tr.rbxcdn.com/180DAY-72e7109d984f89e66ebfa4407312d5b6/768/432/Image/Webp/noFilter",
        "codes": [
            { "code": "BAT2025", "effect": "Grants 500 Coins", "status": "active" },
            { "code": "HOME100", "effect": "Unlocks Rare Bat", "status": "active" },
            { "code": "SWING50", "effect": "50% Power Boost for 1 match", "status": "active" },
            { "code": "HIT2024", "effect": "Gave 200 Coins", "status": "expired" }
        ],
        "category": "sports",
        "rating": 4.7,
        "description": "Hit home runs in this baseball sim!",
        "lastUpdated": "2025-05-04",
        "popularity": "High"
    },
    {
        "id": 69,
        "name": "Battle Gods Simulator",
        "image": "https://staticg.sportskeeda.com/editor/2021/11/7fcc1-16373353785134-1920.jpg",
        "codes": [
            { "code": "GOD2025", "effect": "Grants 1000 Power", "status": "active" },
            { "code": "BATTLE100", "effect": "Unlocks Rare Weapon", "status": "active" },
            { "code": "POWER50", "effect": "50% Damage Boost for 1 hour", "status": "active" },
            { "code": "DIVINE2024", "effect": "Gave 500 Power", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.8,
        "description": "Become a god of war!",
        "lastUpdated": "2025-05-03",
        "popularity": "High"
    },
 
    {
        "id": 71,
        "name": "Bedwars",
        "image": "https://tr.rbxcdn.com/180DAY-49d44604a3401b1c6f42b8a95093e397/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BED2025", "effect": "Grants 500 Resources", "status": "active" },
            { "code": "FORT100", "effect": "Unlocks Rare Block", "status": "active" },
            { "code": "WIN50", "effect": "50% XP Boost for 1 match", "status": "active" },
            { "code": "WAR2024", "effect": "Gave 200 Resources", "status": "expired" }
        ],
        "category": "strategy",
        "rating": 4.7,
        "description": "Defend your bed and destroy others!",
        "lastUpdated": "2025-05-01",
        "popularity": "Very High"
    },
    {
        "id": 72,
        "name": "Beeface",
        "image": "https://tr.rbxcdn.com/180DAY-28ae49eacc667e39263ef750da0a4b71/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BEE2025", "effect": "Grants 100 Pollen", "status": "active" },
            { "code": "HIVE100", "effect": "Unlocks Rare Bee", "status": "active" },
            { "code": "BUZZ50", "effect": "50% Pollen Boost for 1 hour", "status": "active" },
            { "code": "HONEY2024", "effect": "Gave 50 Pollen", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.5,
        "description": "Live as a bee and collect pollen!",
        "lastUpdated": "2025-04-30",
        "popularity": "Medium"
    },
    {
        "id": 73,
        "name": "Beekeepers",
        "image": "https://tr.rbxcdn.com/180DAY-3e941152989aea189c9e40c8d54583b4/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "HONEY2025", "effect": "Grants 100 Honey", "status": "active" },
            { "code": "HIVE100", "effect": "Unlocks Rare Bee", "status": "active" },
            { "code": "POLLEN50", "effect": "50% Pollen Boost for 1 hour", "status": "active" },
            { "code": "BEE2024", "effect": "Gave 50 Honey", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.6,
        "description": "Manage your beehive and make honey!",
        "lastUpdated": "2025-04-29",
        "popularity": "Medium"
    },
    {
        "id": 74,
        "name": "Big Lifting Simulator 2",
        "image": "https://tr.rbxcdn.com/180DAY-d73d1a75e42a91620efd367923c91765/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "LIFT2025", "effect": "Grants 100 Strength", "status": "active" },
            { "code": "MUSCLE100", "effect": "Unlocks Rare Weight", "status": "active" },
            { "code": "STRONG50", "effect": "50% Strength Boost for 1 hour", "status": "active" },
            { "code": "GYM2024", "effect": "Gave 50 Strength", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.6,
        "description": "Get stronger and lift heavier weights!",
        "lastUpdated": "2025-04-28",
        "popularity": "Medium"
    },
    {
        "id": 75,
        "name": "Big Paintball",
        "image": "https://tr.rbxcdn.com/180DAY-675d0e3e04698d7645e1f431fb37c209/768/432/Image/Webp/noFilter",
        "codes": [
            { "code": "PAINT2025", "effect": "Grants 500 Credits", "status": "active" },
            { "code": "SPLAT100", "effect": "Unlocks Rare Gun", "status": "active" },
            { "code": "SHOT50", "effect": "50% Ammo Boost for 1 match", "status": "active" },
            { "code": "SPLASH2024", "effect": "Gave 200 Credits", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.7,
        "description": "Epic paintball battles!",
        "lastUpdated": "2025-04-27",
        "popularity": "High"
    },
    {
        "id": 76,
        "name": "Bigman Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-810ac997977ad37bb6c133852d6ef5a3/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BIG2025", "effect": "Grants 100 Size Points", "status": "active" },
            { "code": "SIZE100", "effect": "Unlocks Rare Growth Item", "status": "active" },
            { "code": "GROW50", "effect": "50% Growth Boost for 1 hour", "status": "active" },
            { "code": "HUGE2024", "effect": "Gave 50 Size Points", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.5,
        "description": "Grow bigger and dominate!",
        "lastUpdated": "2025-04-26",
        "popularity": "Medium"
    },
    {
        "id": 77,
        "name": "Bitcoin Miner",
        "image": "https://tr.rbxcdn.com/180DAY-8879d3f81df9b7c8c27dc902d420127b/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BITCOIN2025", "effect": "Grants 100 BTC", "status": "active" },
            { "code": "MINE100", "effect": "Unlocks Rare Mining Rig", "status": "active" },
            { "code": "CRYPTO50", "effect": "50% Mining Speed Boost for 1 hour", "status": "active" },
            { "code": "COIN2024", "effect": "Gave 50 BTC", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.6,
        "description": "Mine virtual Bitcoin and upgrade!",
        "lastUpdated": "2025-04-25",
        "popularity": "High"
    },
    {
        "id": 78,
        "name": "Black Clover",
        "image": "https://tr.rbxcdn.com/180DAY-690a40eff28ee95627507f06baf88aae/768/432/Image/Webp/noFilter",
        "codes": [
            { "code": "CLOVER2025", "effect": "Grants 1000 Mana", "status": "active" },
            { "code": "MAGIC100", "effect": "Unlocks Rare Grimoire", "status": "active" },
            { "code": "GRIMOIRE50", "effect": "50% Magic Boost for 1 hour", "status": "active" },
            { "code": "SPELL2024", "effect": "Gave 500 Mana", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.8,
        "description": "Anime-inspired magic battles!",
        "lastUpdated": "2025-04-24",
        "popularity": "High"
    },
    {
        "id": 79,
        "name": "Black Hole Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-2fbb6a5285008a3435322e51dac223fe/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "HOLE2025", "effect": "Grants 100 Mass", "status": "active" },
            { "code": "VOID100", "effect": "Unlocks Rare Black Hole", "status": "active" },
            { "code": "SUCK50", "effect": "50% Pull Strength for 1 hour", "status": "active" },
            { "code": "VOID2024", "effect": "Gave 50 Mass", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.5,
        "description": "Grow your black hole and consume all!",
        "lastUpdated": "2025-04-23",
        "popularity": "Medium"
    },
    {
        "id": 80,
        "name": "Blade Quest",
        "image": "https://tr.rbxcdn.com/180DAY-d91defcfa7920761c6687797eb743086/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BLADE2025", "effect": "Grants 200 Coins", "status": "active" },
            { "code": "QUEST100", "effect": "Unlocks Rare Sword", "status": "active" },
            { "code": "SLASH50", "effect": "50% Damage Boost for 1 hour", "status": "active" },
            { "code": "SWORD2024", "effect": "Gave 100 Coins", "status": "expired" }
        ],
        "category": "adventure",
        "rating": 4.6,
        "description": "Embark on epic sword quests!",
        "lastUpdated": "2025-04-22",
        "popularity": "Medium"
    },
    {
        "id": 81,
        "name": "Blade Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-20db00dcb80bc1f365d4ad58c9d02506/768/432/Image/Webp/noFilter",
        "codes": [
            { "code": "SLASH2025", "effect": "Grants 200 Coins", "status": "active" },
            { "code": "BLADE100", "effect": "Unlocks Rare Blade", "status": "active" },
            { "code": "CUT50", "effect": "50% Damage Boost for 1 hour", "status": "active" },
            { "code": "CUT2024", "effect": "Gave 100 Coins", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.7,
        "description": "Master blades in intense battles!",
        "lastUpdated": "2025-04-21",
        "popularity": "High"
    },
    {
        "id": 82,
        "name": "Blade Throwing Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-92ad1a609c760b53881dd6693fdf0534/768/432/Image/Webp/noFilter",
        "codes": [
            { "code": "THROW2025", "effect": "Grants 200 Knives", "status": "active" },
            { "code": "KNIFE100", "effect": "Unlocks Rare Knife", "status": "active" },
            { "code": "AIM50", "effect": "50% Accuracy Boost for 1 hour", "status": "active" },
            { "code": "TOSS2024", "effect": "Gave 100 Knives", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.6,
        "description": "Throw blades with precision!",
        "lastUpdated": "2025-04-20",
        "popularity": "Medium"
    },
    {
        "id": 83,
        "name": "Blair",
        "image": "https://tr.rbxcdn.com/180DAY-a220528f17b41b8792dfb8ae65b7b59f/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BLAIR2025", "effect": "Grants 100 Evidence", "status": "active" },
            { "code": "HORROR100", "effect": "Unlocks Rare Item", "status": "active" },
            { "code": "SCARE50", "effect": "50% Speed Boost for 1 hunt", "status": "active" },
            { "code": "GHOST2024", "effect": "Gave 50 Evidence", "status": "expired" }
        ],
        "category": "adventure",
        "rating": 4.7,
        "description": "Survive spooky horror adventures!",
        "lastUpdated": "2025-04-19",
        "popularity": "High"
    },
    {
        "id": 84,
        "name": "Blast Off Simulator",
        "image": "https://tr.rbxcdn.com/180DAY-f5c540aa496ff35aaed4d1cd7bce6b5d/512/512/Image/Webp/noFilter",
        "codes": [
            { "code": "BLAST2025", "effect": "Grants 100 Fuel", "status": "active" },
            { "code": "ROCKET100", "effect": "Unlocks Rare Rocket", "status": "active" },
            { "code": "SPACE50", "effect": "50% Speed Boost for 1 launch", "status": "active" },
            { "code": "LAUNCH2024", "effect": "Gave 50 Fuel", "status": "expired" }
        ],
        "category": "simulation",
        "rating": 4.5,
        "description": "Launch rockets to the stars!",
        "lastUpdated": "2025-04-18",
        "popularity": "Medium"
    },
    {
        "id": 85,
        "name": "Bleach Era",
        "image": "https://tr.rbxcdn.com/180DAY-5cd9e426c79a82c390d50f4aac545821/768/432/Image/Webp/noFilter",
        "codes": [
            { "code": "BLEACH2025", "effect": "Grants 1000 Reiatsu", "status": "active" },
            { "code": "SOUL100", "effect": "Unlocks Rare Zanpakuto", "status": "active" },
            { "code": "REAPER50", "effect": "50% Damage Boost for 1 fight", "status": "active" },
            { "code": "SOUL2024", "effect": "Gave 500 Reiatsu", "status": "expired" }
        ],
        "category": "action",
        "rating": 4.8,
        "description": "Fight as a Soul Reaper!",
        "lastUpdated": "2025-04-17",
        "popularity": "High"
    },
   {
    id: 86,
    name: "Blob Simulator 2",
    image: "https://tr.rbxcdn.com/180DAY-9a5d029825ad1d61d7ddfe5b4a6e5593/512/512/Image/Webp/noFilter",
    codes: [
        { code: "BLOB2025", effect: "Grants 100 Size Points", status: "active" },
        { code: "GROW100", effect: "Unlocks Rare Blob", status: "active" },
        { code: "EAT50", effect: "50% Growth Boost for 1 hour", status: "active" },
        { code: "BLOB2024", effect: "Gave 50 Size Points", status: "expired" }
    ],
    category: "simulation",
    rating: 4.5,
    description: "Grow your blob and eat everything!",
    lastUpdated: "2025-04-16",
    popularity: "Medium"
}
,
    {
        id: 87,
        name: "Block Defense",
        image: "https://tr.rbxcdn.com/180DAY-6db8d4e7c4c4460a3bbd8162c481f049/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BLOCK2025", effect: "Grants 500 Bricks", status: "active" },
            { code: "DEFEND100", effect: "Unlocks Rare Tower", status: "active" },
            { code: "WALL50", effect: "50% Defense Boost for 1 wave", status: "active" },
            { code: "FORT2024", effect: "Gave 200 Bricks", status: "expired" }
        ],
        category: "strategy",
        rating: 4.6,
        description: "Defend your base with blocks!",
        lastUpdated: "2025-04-15",
        popularity: "Medium"
    },
    {
        id: 88,
        name: "Bloodfest",
        image: "https://tr.rbxcdn.com/180DAY-dc08f2241ed956785862d7450028d500/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BLOOD2025", effect: "Grants 1000 XP", status: "active" },
            { code: "FIGHT100", effect: "Unlocks Rare Weapon", status: "active" },
            { code: "SLAY50", effect: "50% Damage Boost for 1 match", status: "active" },
            { code: "KILL2024", effect: "Gave 500 XP", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Intense blood-pumping battles!",
        lastUpdated: "2025-04-14",
        popularity: "High"
    },
    {
        id: 89,
        name: "Blood Moon Tycoon",
        image: "https://tr.rbxcdn.com/180DAY-f9287422290d6457f84239694cab52b6/512/512/Image/Webp/noFilter",
        codes: [
            { code: "MOON2025", effect: "Grants 500 Cash", status: "active" },
            { code: "TYCOON100", effect: "Unlocks Rare Building", status: "active" },
            { code: "NIGHT50", effect: "50% Build Speed for 1 hour", status: "active" },
            { code: "LUNAR2024", effect: "Gave 200 Cash", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Build a spooky tycoon empire!",
        lastUpdated: "2025-04-13",
        popularity: "Medium"
    },
    {
        id: 90,
        name: "Blox Life",
        image: "https://tr.rbxcdn.com/180DAY-e00cc65553bad0840b41d9df8cc89314/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BLOX2025", effect: "Grants 200 Cash", status: "active" },
            { code: "LIFE100", effect: "Unlocks Rare Outfit", status: "active" },
            { code: "HOME50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "LIVE2024", effect: "Gave 100 Cash", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.7,
        description: "Live a vibrant virtual life!",
        lastUpdated: "2025-04-12",
        popularity: "High"
    },
    {
        id: 91,
        name: "Blox Wars",
        image: "https://tr.rbxcdn.com/180DAY-0c7e74b4dd822122450f9d4c42740670/512/512/Image/Webp/noFilter",
        codes: [
            { code: "WAR2025", effect: "Grants 500 Resources", status: "active" },
            { code: "BLOX100", effect: "Unlocks Rare Weapon", status: "active" },
            { code: "BATTLE50", effect: "50% Damage Boost for 1 match", status: "active" },
            { code: "FIGHT2024", effect: "Gave 200 Resources", status: "expired" }
        ],
        category: "action",
        rating: 4.6,
        description: "Epic block-based battles!",
        lastUpdated: "2025-04-11",
        popularity: "Medium"
    },
    {
        id: 92,
        name: "Bloxorz",
        image: "https://tr.rbxcdn.com/180DAY-ea8bc497b0a7f5aa9ffe39bd091ffc7c/768/432/Image/Webp/noFilter",
        codes: [
            { code: "PUZZLE2025", effect: "Grants 100 Points", status: "active" },
            { code: "BLOCK100", effect: "Unlocks Rare Level", status: "active" },
            { code: "SOLVE50", effect: "50% Speed Boost for 1 puzzle", status: "active" },
            { code: "PUZZLE2024", effect: "Gave 50 Points", status: "expired" }
        ],
        category: "puzzle",
        rating: 4.5,
        description: "Solve challenging block puzzles!",
        lastUpdated: "2025-04-10",
        popularity: "Medium"
    },
    {
        id: 93,
        name: "Boku No Roblox",
        image: "https://tr.rbxcdn.com/180DAY-b86e18287de85f6087cd6c9d0861fca7/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BOKU2025", effect: "Grants 1000 Cash", status: "active" },
            { code: "HERO100", effect: "Unlocks Rare Quirk", status: "active" },
            { code: "QUIRK50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "HERO2024", effect: "Gave 500 Cash", status: "expired" }
        ],
        category: "action",
        rating: 4.8,
        description: "Become a hero in an anime world!",
        lastUpdated: "2025-04-09",
        popularity: "High"
    },
    {
        id: 94,
        name: "Bomb Simulator",
        image: "https://tr.rbxcdn.com/180DAY-8e4a0d00dba3fc08c75b271f6f209fed/768/432/Image/Webp/noFilter",
        codes: [
            { code: "BOMB2025", effect: "Grants 200 Bombs", status: "active" },
            { code: "BOOM100", effect: "Unlocks Rare Explosive", status: "active" },
            { code: "EXPL50", effect: "50% Blast Radius Boost for 1 hour", status: "active" },
            { code: "BLAST2024", effect: "Gave 100 Bombs", status: "expired" }
        ],
        category: "simulation",
        rating: 4.5,
        description: "Detonate bombs and upgrade!",
        lastUpdated: "2025-04-08",
        popularity: "Medium"
    },
    {
        id: 95,
        name: "Cheese Factory Tycoon",
        image: "https://tr.rbxcdn.com/180DAY-59113f426243acf1ba81a91ffc574585/512/512/Image/Webp/noFilter",
        codes: [
            { code: "CHEESE2025", effect: "Grants 500 Cash", status: "active" },
            { code: "FACTORY100", effect: "Unlocks Rare Machine", status: "active" },
            { code: "MILK50", effect: "50% Production Boost for 1 hour", status: "active" },
            { code: "DAIRY2024", effect: "Gave 200 Cash", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Run your own cheese trust!",
        lastUpdated: "2025-04-07",
        popularity: "Medium"
    },
    {
        id: 96,
        name: "Click Simulator",
        image: "https://tr.rbxcdn.com/180DAY-067084023f7021ae377f49cbf558ebbf/512/512/Image/Webp/noFilter",
        codes: [
            { code: "CLICK2025", effect: "Grants 200 Clicks", status: "active" },
            { code: "TAP100", effect: "Unlocks Rare Pet", status: "active" },
            { code: "BOOST50", effect: "50% Click Boost for 1 hour", status: "active" },
            { code: "TAP2024", effect: "Gave 100 Clicks", status: "expired" }
        ],
        category: "simulation",
        rating: 4.5,
        description: "Click to earn rewards and upgrade!",
        lastUpdated: "2025-04-06",
        popularity: "High"
    },
    {
        id: 97,
        name: "Divine Tappers",
        image: "https://tr.rbxcdn.com/180DAY-fae9af387a98e5a05f317ec8c468b9de/768/432/Image/Webp/noFilter",
        codes: [
            { code: "TAP2025", effect: "Grants 200 Taps", status: "active" },
            { code: "DIVINE100", effect: "Unlocks Rare Aura", status: "active" },
            { code: "CLICK50", effect: "50% Tap Boost for 1 hour", status: "active" },
            { code: "HOLY2024", effect: "Gave 100 Taps", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Tap to collect divine rewards!",
        lastUpdated: "2025-04-05",
        popularity: "Medium"
    },
    {
        id: 98,
        name: "Draw n Spawn",
        image: "https://images.sftcdn.net/images/t_app-icon-s/p/a0afd0a7-a96d-4986-92ce-565c7f0a43fe/3890089118/draw-n-spawn-logo",
        codes: [
            { code: "DRAW2025", effect: "Grants 200 Ink", status: "active" },
            { code: "SPAWN100", effect: "Unlocks Rare Creation", status: "active" },
            { code: "ART50", effect: "50% Draw Speed Boost for 1 hour", status: "active" },
            { code: "SKETCH2024", effect: "Gave 100 Ink", status: "expired" }
        ],
        category: "simulation",
        rating: 4.5,
        description: "Draw and spawn your creations!",
        lastUpdated: "2025-04-04",
        popularity: "Medium"
    },
    {
        id: 99,
        name: "Dream Life",
        image: "https://tr.rbxcdn.com/180DAY-83c667e2ba953fd494e5a51cbc571bb7/512/512/Image/Webp/noFilter",
        codes: [
            { code: "DREAM2025", effect: "Grants 200 Cash", status: "active" },
            { code: "LIFE100", effect: "Unlocks Rare Outfit", status: "active" },
            { code: "HOME50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "LIVE2024", effect: "Gave 100 Cash", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.7,
        description: "Live your dream life in Roblox!",
        lastUpdated: "2025-04-03",
        popularity: "High"
    },
    {
        id: 100,
        name: "Make Anime and Get Rich",
        image: "https://tr.rbxcdn.com/180DAY-606977470ea029ce8658c13b37313828/512/512/Image/Webp/noFilter",
        codes: [
            { code: "ANIME2025", effect: "Grants 500 Cash", status: "active" },
            { code: "RICH100", effect: "Unlocks Rare Studio", status: "active" },
            { code: "CREATE50", effect: "50% Production Boost for 1 hour", status: "active" },
            { code: "STUDIO2024", effect: "Gave 200 Cash", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Create anime and earn riches!",
        lastUpdated: "2025-04-02",
        popularity: "High"
    },
    {
        id: 101,
        name: "PLS DONATE",
        image: "https://tr.rbxcdn.com/180DAY-3ab62d59fadff928420ec3f268dc816a/512/512/Image/Webp/noFilter",
      codes: [
            { code: "hazem", effect: "50 Giftbux", status: "active" },
            { code: "Eagle_15", effect: "15 Giftbux", status: "active" },
            { code: "plsdonate2", effect: "20 Giftbux", status: "active" },
            { code: "lazarbeam", effect: "Lazar Beam Booth", status: "active" },
            { code: "pixel", effect: "Pixel Booth", status: "active" },
            { code: "quataun", effect: "50 Giftbux", status: "active" },
            { code: "valentines25", effect: "Unknown Reward", status: "expired" },
            { code: "pd2025", effect: "Unknown Reward", status: "expired" },
            { code: "pd2024", effect: "Unknown Reward", status: "expired" },
            { code: "glass", effect: "Unknown Reward", status: "expired" },
            { code: "pd4july", effect: "Unknown Reward", status: "expired" },
            { code: "iloveeagleeyes10", effect: "Unknown Reward", status: "expired" },
            { code: "plsdonatenews10", effect: "Unknown Reward", status: "expired" },
            { code: "ggliquate10", effect: "Unknown Reward", status: "expired" },
            { code: "alienevent23", effect: "Unknown Reward", status: "expired" },
            { code: "projectsupreme50", effect: "Unknown Reward", status: "expired" }
        ],
        category: "simulation",
        rating: 4.7,
        description: "Create and sell items to earn Robux!",
        lastUpdated: "2025-04-01",
        popularity: "Very High"
    },
    {
        id: 102,
        name: "Jailbreak",
        image: "https://tr.rbxcdn.com/180DAY-567fff90e13a1cde83e866b38f915622/512/512/Image/Webp/noFilter",
        codes: [
            { code: "rich100rich", effect: "100k Cash", status: "active" },
            { code: "25pass50", effect: "Free Season Pass", status: "active" },
            { code: "20KCASH4U", effect: "20,000 Cash", status: "active" },
            { code: "BigMac8241", effect: "555 Cash", status: "active" },
            { code: "YoutubeHelloItsVG", effect: "HelloItsVG Tire Sticker", status: "active" },
            { code: "YoutubeNoobFreak", effect: "NoobFreak Tire Sticker", status: "active" },
            { code: "7years", effect: "Unknown Reward", status: "expired" },
            { code: "hammerhead", effect: "Unknown Reward", status: "expired" },
            { code: "BOOM", effect: "Unknown Reward", status: "expired" },
            { code: "Spring24", effect: "Unknown Reward", status: "expired" },
            { code: "5days23", effect: "Unknown Reward", status: "expired" },
            { code: "wildest", effect: "Unknown Reward", status: "expired" },
            { code: "sep23", effect: "Unknown Reward", status: "expired" },
            { code: "July2023", effect: "Unknown Reward", status: "expired" },
            { code: "Summer23", effect: "Unknown Reward", status: "expired" },
            { code: "dreamhome", effect: "Unknown Reward", status: "expired" },
            { code: "Birthday6", effect: "Unknown Reward", status: "expired" },
            { code: "crewcode3", effect: "Unknown Reward", status: "expired" },
            { code: "spring23", effect: "Unknown Reward", status: "expired" },
            { code: "Winter22", effect: "Unknown Reward", status: "expired" },
            { code: "privatejet", effect: "Unknown Reward", status: "expired" },
            { code: "TOW", effect: "Unknown Reward", status: "expired" },
            { code: "museum", effect: "Unknown Reward", status: "expired" },
            { code: "WinterUpdate2021", effect: "Unknown Reward", status: "expired" },
            { code: "fall2021", effect: "Unknown Reward", status: "expired" },
            { code: "memes", effect: "Unknown Reward", status: "expired" },
            { code: "summervibes", effect: "Unknown Reward", status: "expired" },
            { code: "SOLIDGOLDWOOO", effect: "Unknown Reward", status: "expired" },
            { code: "4years", effect: "Unknown Reward", status: "expired" },
            { code: "march2021", effect: "Unknown Reward", status: "expired" },
            { code: "doggo", effect: "Unknown Reward", status: "expired" },
            { code: "cargo", effect: "Unknown Reward", status: "expired" },
            { code: "countdown", effect: "Unknown Reward", status: "expired" },
            { code: "onehour", effect: "Unknown Reward", status: "expired" },
            { code: "stayhealthy", effect: "Unknown Reward", status: "expired" },
            { code: "minimustang", effect: "Unknown Reward", status: "expired" },
            { code: "feb2020", effect: "Unknown Reward", status: "expired" },
            { code: "Winter", effect: "Unknown Reward", status: "expired" },
            { code: "FALL2020", effect: "Unknown Reward", status: "expired" },
            { code: "MOLTEN", effect: "Unknown Reward", status: "expired" },
            { code: "Balance", effect: "Unknown Reward", status: "expired" },
            { code: "5Days", effect: "Unknown Reward", status: "expired" },
            { code: "manta", effect: "Unknown Reward", status: "expired" },
            { code: "25CASH8", effect: "Unknown Reward", status: "expired" },
            { code: "apr7", effect: "Unknown Reward", status: "expired" },
            { code: "pixeeel", effect: "Unknown Reward", status: "expired" },
            { code: "freepass21", effect: "Unknown Reward", status: "expired" },
            { code: "cash21012", effect: "Unknown Reward", status: "expired" },
            { code: "cashglobal", effect: "Unknown Reward", status: "expired" },
            { code: "jailbreaks8", effect: "Unknown Reward", status: "expired" }
        ],
        category: "action",
        rating: 4.8,
        description: "Cops vs. robbers open-world adventure!",
        lastUpdated: "2025-03-31",
        popularity: "Very High"
    },
    {
        id: 103,
        name: "Anime Vanguards",
        image: "https://tr.rbxcdn.com/180DAY-ca640dbce7a771e21a3f2611aba40ae2/512/512/Image/Webp/noFilter",
        codes: [
            { code: "VANGUARD2025", effect: "Grants 500 Gems", status: "active" },
            { code: "ANIME100", effect: "Unlocks Rare Unit", status: "active" },
            { code: "TOWER50", effect: "50% Defense Boost for 1 wave", status: "active" },
            { code: "GUARD2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "strategy",
        rating: 4.7,
        description: "Anime-themed tower defense battles!",
        lastUpdated: "2025-03-30",
        popularity: "High"
    },
    {
        id: 104,
        name: "Demonfall",
        image: "https://tr.rbxcdn.com/180DAY-8030ee7ca73bbddf3dd6f8d476cb1c77/512/512/Image/Webp/noFilter",
        codes: [
            { code: "DEMON2025", effect: "Grants 200 Wen", status: "active" },
            { code: "POTION100", effect: "Unlocks Rare Potion", status: "active" },
            { code: "SLAYER50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "FALL2024", effect: "Gave 100 Wen", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Demon Slayer-inspired RPG combat!",
        lastUpdated: "2025-03-29",
        popularity: "High"
    },
    {
        id: 105,
        name: "Driving Empire",
        image: "https://tr.rbxcdn.com/180DAY-9818cc1a105f55a7856b18e117181262/512/512/Image/Webp/noFilter",
        codes: [
            { code: "DRIVE2025", effect: "Grants 10000 Cash", status: "active" },
            { code: "CASH100K", effect: "Unlocks Rare Car", status: "active" },
            { code: "CAR50", effect: "50% Speed Boost for 1 race", status: "active" },
            { code: "RACE2024", effect: "Gave 5000 Cash", status: "expired" }
        ],
        category: "simulation",
        rating: 4.6,
        description: "Race and customize cars in an open world!",
        lastUpdated: "2025-03-28",
        popularity: "High"
    },
    {
        id: 106,
        name: "Dunking Simulator",
        image: "https://tr.rbxcdn.com/180DAY-5de18fd09d8fed4e317644b374a374af/512/512/Image/Webp/noFilter",
        codes: [
            { code: "DUNK2025", effect: "Grants 500 Coins", status: "active" },
            { code: "CASHBOOST", effect: "Unlocks Rare Ball", status: "active" },
            { code: "SLAM50", effect: "50% Dunk Power for 1 match", status: "active" },
            { code: "HOOP2024", effect: "Gave 200 Coins", status: "expired" }
        ],
        category: "sports",
        rating: 4.6,
        description: "Slam dunks and basketball challenges!",
        lastUpdated: "2025-03-27",
        popularity: "Medium"
    },
    {
        id: 107,
        name: "Untitled Boxing Game",
        image: "https://tr.rbxcdn.com/180DAY-3ee46121039aa9dde72c338e6f170ccd/512/512/Image/Webp/noFilter",
        codes: [
            { code: "BOX2025", effect: "Grants 5000 Cash", status: "active" },
            { code: "CASH5000", effect: "Unlocks Rare Gloves", status: "active" },
            { code: "SPIN50", effect: "50% Stamina Boost for 1 match", status: "active" },
            { code: "PUNCH2024", effect: "Gave 2000 Cash", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Fight in intense boxing arenas!",
        lastUpdated: "2025-03-26",
        popularity: "High"
    },
    {
        id: 108,
        name: "Anime Adventures",
        image: "https://tr.rbxcdn.com/180DAY-82c73304e84c6ecf8289f98c73c87925/512/512/Image/Webp/noFilter",
        codes: [
            { code: "ADVENTURE2025", effect: "Grants 500 Gems", status: "active" },
            { code: "SUMMON100", effect: "Unlocks Rare Unit", status: "active" },
            { code: "UNIT50", effect: "50% Damage Boost for 1 wave", status: "active" },
            { code: "QUEST2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "strategy",
        rating: 4.8,
        description: "Summon anime heroes for tower defense!",
        lastUpdated: "2025-03-25",
        popularity: "Very High"
    },
    {
        id: 109,
        name: "Pet Simulator X",
        image: "https://tr.rbxcdn.com/180DAY-9b372a72aedaf771f524c8e9ff40ac27/512/512/Image/Webp/noFilter",
        codes: [
            { code: "PET2025", effect: "Grants 1000 Gems", status: "active" },
            { code: "GEMS1000", effect: "Unlocks Rare Pet", status: "active" },
            { code: "BOOST50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "PET2024", effect: "Gave 500 Gems", status: "expired" }
        ],
        category: "simulation",
        rating: 4.8,
        description: "Collect and trade rare pets!",
        lastUpdated: "2025-03-24",
        popularity: "Very High"
    },
    {
        id: 110,
        name: "Grimoires Era",
        image: "https://tr.rbxcdn.com/180DAY-e2ab4f84522693b4324ca6466a0aa9f8/512/512/Image/Webp/noFilter",
        codes: [
            { code: "GRIMOIRE2025", effect: "Grants 1000 Mana", status: "active" },
            { code: "SPIN100", effect: "Unlocks Rare Grimoire", status: "active" },
            { code: "AURA50", effect: "50% Magic Boost for 1 hour", status: "active" },
            { code: "MAGIC2024", effect: "Gave 500 Mana", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Black Clover-inspired RPG battles!",
        lastUpdated: "2025-03-23",
        popularity: "High"
    },
    {
        id: 111,
        name: "Volleyball Legends",
        image: "https://tr.rbxcdn.com/180DAY-a61bea393b16d82ccda30f66fa42ab6b/512/512/Image/Webp/noFilter",
        codes: [
            { code: "1MILLION", effect: "5 Lucky style spins", status: "active" },
            { code: "MATCHMAKING_PLS_WORK", effect: "3 Lucky style spins", status: "active" },
            { code: "UPDATE_27", effect: "3 Lucky ability spins", status: "active" },
            { code: "UPDATE_26", effect: "Unknown Reward", status: "expired" },
            { code: "NEW_STYLE", effect: "Unknown Reward", status: "expired" },
            { code: "KAZANA_COMING", effect: "Unknown Reward", status: "expired" },
            { code: "SPINS", effect: "Unknown Reward", status: "expired" },
            { code: "BONUS_SHELLS", effect: "Unknown Reward", status: "expired" },
            { code: "BONUS_YEN", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_25", effect: "Unknown Reward", status: "expired" },
            { code: "VOLCANO_SEASON", effect: "Unknown Reward", status: "expired" },
            { code: "2M_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_24", effect: "Unknown Reward", status: "expired" },
            { code: "QOL", effect: "Unknown Reward", status: "expired" },
            { code: "900K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "PROTORI_50K", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_23", effect: "Unknown Reward", status: "expired" },
            { code: "TAICHOU_YEN", effect: "Unknown Reward", status: "expired" },
            { code: "TAICHOU_SHELLS", effect: "Unknown Reward", status: "expired" },
            { code: "PROTORI_YT", effect: "Unknown Reward", status: "expired" },
            { code: "TAICHOU_SOON", effect: "Unknown Reward", status: "expired" },
            { code: "ABILITY_FIX", effect: "Unknown Reward", status: "expired" },
            { code: "800K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "700M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_22", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_21", effect: "Unknown Reward", status: "expired" },
            { code: "650M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "2M_FAVS", effect: "Unknown Reward", status: "expired" },
            { code: "750K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "BACK_TILT", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_20", effect: "Unknown Reward", status: "expired" },
            { code: "TWINS_REWORK", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_19", effect: "Unknown Reward", status: "expired" },
            { code: "1.6_M_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "NEW_TIMESKIP", effect: "Unknown Reward", status: "expired" },
            { code: "10MIN_DELAY", effect: "Unknown Reward", status: "expired" },
            { code: "1.7M_FAVS", effect: "Unknown Reward", status: "expired" },
            { code: "AURA", effect: "Unknown Reward", status: "expired" },
            { code: "MOBILE_FIXES", effect: "Unknown Reward", status: "expired" },
            { code: "1M_Likes", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_18", effect: "Unknown Reward", status: "expired" },
            { code: "GODLY_BLOCKER", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE18_CRYSTALS", effect: "Unknown Reward", status: "expired" },
            { code: "OP_LIBERO", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_ABILITY", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_BLOCK", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_BOUNCY", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_HEIGHT", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_SET", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_SPEED", effect: "Unknown Reward", status: "expired" },
            { code: "1.5M_FAVS", effect: "Unknown Reward", status: "expired" },
            { code: "SILLY_POTIONS", effect: "Unknown Reward", status: "expired" },
            { code: "SEASON_3", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_16", effect: "Unknown Reward", status: "expired" },
            { code: "RANKED_FIXING", effect: "Unknown Reward", status: "expired" },
            { code: "SUPER_DIVE", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_OUT", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_SPIKE", effect: "Unknown Reward", status: "expired" },
            { code: "KIMIRO_THICK", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_15", effect: "Unknown Reward", status: "expired" },
            { code: "TWINS_ARE_HERE", effect: "Unknown Reward", status: "expired" },
            { code: "600K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "BALANCE", effect: "Unknown Reward", status: "expired" },
            { code: "BLOCKING", effect: "Unknown Reward", status: "expired" },
            { code: "SHIELD_BREAKER", effect: "Unknown Reward", status: "expired" },
            { code: "400M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_14", effect: "Unknown Reward", status: "expired" },
            { code: "SECRET_ABILITY", effect: "Unknown Reward", status: "expired" },
            { code: "1_MIL_FAVS", effect: "Unknown Reward", status: "expired" },
            { code: "EASTER_EGGS", effect: "Unknown Reward", status: "expired" },
            { code: "TIMESKIP_KAGAYOMO", effect: "Unknown Reward", status: "expired" },
            { code: "APRIL_UPDATE", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_13", effect: "Unknown Reward", status: "expired" },
            { code: "EASTER", effect: "Unknown Reward", status: "expired" },
            { code: "CHOPPED", effect: "Unknown Reward", status: "expired" },
            { code: "2X_SECRET_WEEKEND", effect: "Unknown Reward", status: "expired" },
            { code: "DELAY_LEGENDS", effect: "Unknown Reward", status: "expired" },
            { code: "COOKED", effect: "Unknown Reward", status: "expired" },
            { code: "800K_LIKES", effect: "Unknown Reward", status: "expired" },
            { code: "RANKED_FIX", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_12", effect: "Unknown Reward", status: "expired" },
            { code: "SEASON_2", effect: "Unknown Reward", status: "expired" },
            { code: "100K_INTERESTED", effect: "Unknown Reward", status: "expired" },
            { code: "100K_INTERESTED2", effect: "Unknown Reward", status: "expired" },
            { code: "SHUTDOWN_CODE2", effect: "Unknown Reward", status: "expired" },
            { code: "SHUTDOWN_CODE", effect: "Unknown Reward", status: "expired" },
            { code: "SANU_BUFF", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE_11", effect: "Unknown Reward", status: "expired" },
            { code: "1M_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE10", effect: "Unknown Reward", status: "expired" },
            { code: "250M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "BUFF", effect: "Unknown Reward", status: "expired" },
            { code: "200MILLION_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "TIMESKIP", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE8", effect: "Unknown Reward", status: "expired" },
            { code: "SEASON1", effect: "Unknown Reward", status: "expired" },
            { code: "175MILLION_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "500K_LIKES", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE9", effect: "Unknown Reward", status: "expired" },
            { code: "FAST_MODE", effect: "Unknown Reward", status: "expired" },
            { code: "PRACTICE_AREA", effect: "Unknown Reward", status: "expired" },
            { code: "350K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "100M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "BIGGESTEVER", effect: "Unknown Reward", status: "expired" },
            { code: "NEW_NAME", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE6", effect: "Unknown Reward", status: "expired" },
            { code: "RANKED", effect: "Unknown Reward", status: "expired" },
            { code: "80M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "NOTONTIME", effect: "Unknown Reward", status: "expired" },
            { code: "DELAYED", effect: "Unknown Reward", status: "expired" },
            { code: "250K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "50M_Visits", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE5", effect: "Unknown Reward", status: "expired" },
            { code: "MADNESS", effect: "Unknown Reward", status: "expired" },
            { code: "40M_VISITS", effect: "Unknown Reward", status: "expired" },
            { code: "PROTORIONTWITTER", effect: "Unknown Reward", status: "expired" },
            { code: "200K_LIKES", effect: "Unknown Reward", status: "expired" },
            { code: "LAUNCH", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE4", effect: "Unknown Reward", status: "expired" },
            { code: "100K_MEMBERS", effect: "Unknown Reward", status: "expired" },
            { code: "15M_PLAYS", effect: "Unknown Reward", status: "expired" },
            { code: "180K_FAVS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE3", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE2", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE1", effect: "Unknown Reward", status: "expired" }
        ],
        category: "sports",
        rating: 4.6,
        description: "Haikyu!!-inspired volleyball action!",
        lastUpdated: "2025-03-22",
        popularity: "High"
    },
    {
        id: 112,
        name: "Type Soul",
        image: "https://tr.rbxcdn.com/180DAY-ebe1ae5befd02411e4aeb9d081b8652e/768/432/Image/Webp/noFilter",
        codes: [
            { code: "SOUL2025", effect: "Grants 1000 Reiatsu", status: "active" },
            { code: "REROLL100", effect: "Unlocks Free Reroll", status: "active" },
            { code: "BOOST50", effect: "50% Damage Boost for 1 fight", status: "active" },
            { code: "REAPER2024", effect: "Gave 500 Reiatsu", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Bleach-inspired soul reaper battles!",
        lastUpdated: "2025-03-21",
        popularity: "High"
    },
    {
        id: 113,
        name: "Dress To Impress",
        image: "https://tr.rbxcdn.com/180DAY-7eb261b981eaffcbbff3f22eb86be615/512/512/Image/Webp/noFilter",
        codes: [
            { code: "PIXIIUWU", effect: "Pixie dress", status: "active" },
            { code: "3NCHANTEDD1ZZY", effect: "Fairy Scepter", status: "active" },
            { code: "ANGELT4NKED", effect: "Purple Cat Helmet", status: "active" },
            { code: "ELLA", effect: "Pink skirt", status: "active" },
            { code: "B3APL4YS_D0L1E", effect: "Doll accessory", status: "active" },
            { code: "1CON1CF4TMA", effect: "School uniform", status: "active" },
            { code: "CH00P1E_1S_B4CK", effect: "Jacket, skirt, and shoes", status: "active" },
            { code: "MEGANPLAYSBOOTS", effect: "Glittery boots", status: "active" },
            { code: "D1ORST4R", effect: "Bow and purse", status: "active" },
            { code: "S3M_0W3N_Y4Y", effect: "Staff/Scythe/Axe", status: "active" },
            { code: "KITTYUUHH", effect: "Caseoh’s Cat", status: "active" },
            { code: "BELALASLAY", effect: "Jacket", status: "active" },
            { code: "KREEK", effect: "Beanie", status: "active" },
            { code: "LANATUTU", effect: "Free dress", status: "active" },
            { code: "ITSJUSTNICHOLAS", effect: "Biker jacket", status: "active" },
            { code: "M3RM4ID", effect: "Mermaid tail and top", status: "active" },
            { code: "C4LLMEHH4LEY", effect: "Headband and dress", status: "active" },
            { code: "IBELLASLAY", effect: "Watermelon pigtails", status: "active" },
            { code: "SUBM15CY", effect: "Lashes and necklace", status: "active" },
            { code: "ASHLEYBUNNI", effect: "Bunny slippers", status: "active" },
            { code: "LABOOTS", effect: "Heeled boots", status: "active" },
            { code: "LANA", effect: "Top, shorts, and leg warmers", status: "active" },
            { code: "LEAHASHE", effect: "Jacket and sweatpants", status: "active" },
            { code: "TEKKYOOZ", effect: "Pearl purse", status: "active" },
            { code: "LANABOW", effect: "Pink hair bow", status: "active" },
            { code: "LNY2025", effect: "Unknown Reward", status: "expired" },
            { code: "HAPPYNEWYEAR", effect: "Unknown Reward", status: "expired" },
            { code: "UMOYAE", effect: "Unknown Reward", status: "expired" },
            { code: "BADDIE4LIFE", effect: "Unknown Reward", status: "expired" },
            { code: "FASHION", effect: "Unknown Reward", status: "expired" },
            { code: "M0T0PRINCESSWAV", effect: "Unknown Reward", status: "expired" },
            { code: "CUPIDSCLOUD", effect: "Unknown Reward", status: "expired" },
            { code: "YEAROFTHESNAKE", effect: "Unknown Reward", status: "expired" },
            { code: "SWEETHEART", effect: "Unknown Reward", status: "expired" },
            { code: "NY2025", effect: "Unknown Reward", status: "expired" },
            { code: "4BILLION", effect: "Unknown Reward", status: "expired" },
            { code: "WINTERUPDATE", effect: "Unknown Reward", status: "expired" },
            { code: "CHOOPIE10K", effect: "Unknown Reward", status: "expired" },
            { code: "THEGAMES", effect: "Unknown Reward", status: "expired" },
            { code: "REWARD4CLASS1C", effect: "Unknown Reward", status: "expired" },
            { code: "DOLLISTA", effect: "Unknown Reward", status: "expired" },
            { code: "DOLLISTAGRAM", effect: "Unknown Reward", status: "expired" },
            { code: "VALENTINESDAY", effect: "Unknown Reward", status: "expired" },
            { code: "CHERRY", effect: "Unknown Reward", status: "expired" }
        ],
        category: "roleplay",
        rating: 4.8,
        description: "Compete in fashion contests to shine!",
        lastUpdated: "2025-03-20",
        popularity: "Very High"
    },
    {
        id: 114,
        name: "King Legacy",
        image: "https://tr.rbxcdn.com/180DAY-3061c862ce90028c6b1f889476523af6/512/512/Image/Webp/noFilter",
       codes: [
            { code: "Update8.0.5", effect: "50 Gems", status: "active" },
            { code: "DungeonBalance", effect: "Stats Reset", status: "active" },
            { code: "Update8.0.4", effect: "50 Gems", status: "active" },
            { code: "Update8Release", effect: "2x EXP for 15 minutes", status: "active" },
            { code: "YT90KCELEBRATION", effect: "5x Fortune Tales", status: "active" },
            { code: "YT100KLEGEND", effect: "5x Chronicles Lore", status: "active" },
            { code: "FreeQuakeSpin", effect: "10x Copper Keys", status: "active" },
            { code: "EchoMelody", effect: "10x Copper Keys", status: "active" },
            { code: "RiseOfPhoenix", effect: "1x Iron Key", status: "active" },
            { code: "QuakeSurprise", effect: "2x EXP for 15 minutes", status: "active" },
            { code: "SKGames", effect: "2x EXP for 30 minutes", status: "active" },
            { code: "RainbowDragon", effect: "100 Gems", status: "active" },
            { code: "DragonColorRefund", effect: "50 Gems (10 Gems if old color was original red)", status: "active" },
            { code: "EpicAdventure", effect: "Free Stat Refund", status: "active" },
            { code: "WELCOMETOKINGLEGACY", effect: "2x EXP for 30 minutes", status: "active" },
            { code: "<3LEEPUNGG", effect: "2x EXP for 30 minutes", status: "active" },
            { code: "FREESTATSRESET", effect: "Free Stat Refund", status: "active" },
            { code: "2MFAV", effect: "Free Stat Refund", status: "active" },
            { code: "Peodiz", effect: "100k Cash", status: "active" },
            { code: "DinoxLive", effect: "100k Cash", status: "active" },
            { code: "Update7Release", effect: "Unknown Reward", status: "expired" },
            { code: "TelekinesisFruitPower", effect: "Unknown Reward", status: "expired" },
            { code: "PvPArenaFun", effect: "Unknown Reward", status: "expired" },
            { code: "KioruV2PowerUp", effect: "Unknown Reward", status: "expired" },
            { code: "QuakeTsunamiBoost", effect: "Unknown Reward", status: "expired" },
            { code: "DragonColorsUnlocked", effect: "Unknown Reward", status: "expired" },
            { code: "ThirdSeaAdventures", effect: "Unknown Reward", status: "expired" },
            { code: "IslandQuestRepeat", effect: "Unknown Reward", status: "expired" },
            { code: "FruitAwakeningTime", effect: "Unknown Reward", status: "expired" },
            { code: "X100KSuccess", effect: "Unknown Reward", status: "expired" },
            { code: "PlayKingLegacyFor5Gems", effect: "Unknown Reward", status: "expired" },
            { code: "Halloween2024", effect: "Unknown Reward", status: "expired" },
            { code: "Update7.1", effect: "Unknown Reward", status: "expired" },
            { code: "PassiveMaster", effect: "Unknown Reward", status: "expired" },
            { code: "InfernoKingAwaits", effect: "Unknown Reward", status: "expired" },
            { code: "Update7.0.4", effect: "Unknown Reward", status: "expired" },
            { code: "OWNERMETEOR", effect: "Unknown Reward", status: "expired" },
            { code: "Peodiz10k", effect: "Unknown Reward", status: "expired" },
            { code: "PLAYKINGLEGACYFOR10GEMS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE5", effect: "Unknown Reward", status: "expired" },
            { code: "ExperienceDoubling", effect: "Unknown Reward", status: "expired" },
            { code: "shutdownhotfix", effect: "Unknown Reward", status: "expired" },
            { code: "10KYZX-4LPQ8-WFJ", effect: "Unknown Reward", status: "expired" },
            { code: "YT10K", effect: "Unknown Reward", status: "expired" },
            { code: "Sub2Leepungg", effect: "Unknown Reward", status: "expired" },
            { code: "Halloween2023", effect: "Unknown Reward", status: "expired" },
            { code: "3xilescha1r", effect: "Unknown Reward", status: "expired" },
            { code: "Update4.6YAY", effect: "Unknown Reward", status: "expired" },
            { code: "1MLikes", effect: "Unknown Reward", status: "expired" },
            { code: "2BVisits", effect: "Unknown Reward", status: "expired" },
            { code: "Thx4Waiting", effect: "Unknown Reward", status: "expired" },
            { code: "2023", effect: "Unknown Reward", status: "expired" },
            { code: "delayedchristmas2022", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE4.5.2", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE4.0.2", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE4.5.0", effect: "Unknown Reward", status: "expired" },
            { code: "900KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "HYDRAGLYPHICS", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE4", effect: "Unknown Reward", status: "expired" },
            { code: "lagshallnotpass", effect: "Unknown Reward", status: "expired" },
            { code: "1MFAV", effect: "Unknown Reward", status: "expired" },
            { code: "650KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "UPDATE3.5", effect: "Unknown Reward", status: "expired" },
            { code: "Update3_17", effect: "Unknown Reward", status: "expired" },
            { code: "550KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "Update3", effect: "Unknown Reward", status: "expired" },
            { code: "500KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "Update2_5", effect: "Unknown Reward", status: "expired" },
            { code: "900KFAV", effect: "Unknown Reward", status: "expired" },
            { code: "800KFAV", effect: "Unknown Reward", status: "expired" },
            { code: "700KFAV", effect: "Unknown Reward", status: "expired" },
            { code: "600KFAV", effect: "Unknown Reward", status: "expired" },
            { code: "300KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "400KLIKES", effect: "Unknown Reward", status: "expired" },
            { code: "Update2_17", effect: "Unknown Reward", status: "expired" },
            { code: "BeckyStyle", effect: "Unknown Reward", status: "expired" },
            { code: "SORRYFORSHUTDOWN", effect: "Unknown Reward", status: "expired" },
            { code: "THXFOR1BVISIT", effect: "Unknown Reward", status: "expired" },
            { code: "950KLIKES", effect: "Unknown Reward", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Anime-inspired pirate RPG with epic quests!",
        lastUpdated: "2025-03-19",
        popularity: "High"
    },
    {
        id: 115,
        name: "Haze Piece",
        image: "https://tr.rbxcdn.com/180DAY-fd1e377f2e70ba028820e9d761ef4e13/512/512/Image/Webp/noFilter",
        codes: [
            { code: "RELEASE2025", effect: "Grants 500 Gems", status: "active" },
            { code: "FREEGEMS100", effect: "Unlocks Rare Sword", status: "active" },
            { code: "BOOST50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "HAZE2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Sail the seas in this One Piece adventure!",
        lastUpdated: "2025-03-18",
        popularity: "High"
    },
    {
        id: 116,
        name: "Pet Simulator 99",
        image: "https://tr.rbxcdn.com/180DAY-931af1e72c252a22944c8a4a7ec29857/768/432/Image/Webp/noFilter",
        codes: [
            { code: "RELEASE", effect: "Grants 1000 Gems", status: "active" },
            { code: "GEMS1000", effect: "Unlocks Rare Pet", status: "active" },
            { code: "PET2025", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "PET2024", effect: "Gave 500 Gems", status: "expired" }
        ],
        category: "simulation",
        rating: 4.8,
        description: "Collect and trade rare pets in a vibrant world!",
        lastUpdated: "2025-03-17",
        popularity: "Very High"
    },
    {
        id: 117,
        name: "Anime Defenders",
        image: "https://tr.rbxcdn.com/180DAY-b16190335aa760c6b3393f9e1f17e59a/512/512/Image/Webp/noFilter",
        codes: [
            { code: "DEFENDER2025", effect: "Grants 500 Gems", status: "active" },
            { code: "GEMS500", effect: "Unlocks Rare Unit", status: "active" },
            { code: "UNIT50", effect: "50% Defense Boost for 1 wave", status: "active" },
            { code: "DEFEND2024", effect: "Gave 200 Gems", status: "expired" }
        ],
        category: "strategy",
        rating: 4.7,
        description: "Defend with anime heroes in tower defense!",
        lastUpdated: "2025-03-16",
        popularity: "High"
    },
    {
        id: 118,
        name: "Shindo Life",
        image: "https://tr.rbxcdn.com/180DAY-e8297070f1aedbe4ad77893106cd4004/512/512/Image/Webp/noFilter",
        codes: [
            { code: "SHINDO2025", effect: "Grants 100 Spins", status: "active" },
            { code: "SPINS100", effect: "Unlocks Rare Bloodline", status: "active" },
            { code: "REROLL50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "NINJA2024", effect: "Gave 50 Spins", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Naruto-inspired RPG with ninja battles!",
        lastUpdated: "2025-03-15",
        popularity: "High"
    },
    {
        id: 119,
        name: "All Star Tower Defense",
        image: "https://tr.rbxcdn.com/180DAY-c0d2a1e68021717f1b733908f0b6c976/768/432/Image/Webp/noFilter",
        codes: [
            { code: "ASTD2025", effect: "Grants 1000 Gems", status: "active" },
            { code: "GEMS1000", effect: "Unlocks Rare Unit", status: "active" },
            { code: "UNIT50", effect: "50% Damage Boost for 1 wave", status: "active" },
            { code: "STAR2024", effect: "Gave 500 Gems", status: "expired" }
        ],
        category: "strategy",
        rating: 4.8,
        description: "Anime tower defense with iconic characters!",
        lastUpdated: "2025-03-14",
        popularity: "Very High"
    },
    {
        id: 120,
        name: "Arsenal",
        image: "https://tr.rbxcdn.com/180DAY-0ae15892d2184f937a7d3b571905fe93/512/512/Image/Webp/noFilter",
       codes: [
            { code: "wake up", effect: "Code… doesn’t exist? That’s weird… Message", status: "active" },
            { code: "FLAMINGO", effect: "Unlocks Flamingo announcer", status: "active" },
            { code: "goodnight", effect: "Thanks for Helping :) Message", status: "active" },
            { code: "XONAE", effect: "Unlocks Xonae announcer", status: "active" },
            { code: "TRGTBOARD", effect: "Unlocks Hoverboard taunt", status: "active" },
            { code: "F00LISH", effect: "Unlocks Jackeryz Skin", status: "active" },
            { code: "FATE", effect: "Teleports to a creepy map called ‘Fate’ with no other players", status: "active" },
            { code: "ROLVE", effect: "Unlocks Rabblerouser skin", status: "active" },
            { code: "POKE", effect: "Unlocks Poke skin", status: "active" },
            { code: "Bandites", effect: "Unlocks Bandites announcer", status: "active" },
            { code: "JOHN", effect: "Unlocks John announcer", status: "active" },
            { code: "ANNA", effect: "Unlocks Anna skin", status: "active" },
            { code: "PET", effect: "Unlocks Petrify announcer", status: "active" },
            { code: "GARCELLO", effect: "Unlocks Garcello skin and kill effect", status: "active" },
            { code: "EPRIKA", effect: "Unknown Reward", status: "expired" },
            { code: "CBROX", effect: "Unknown Reward", status: "expired" },
            { code: "THE BANANA MAN", effect: "Unknown Reward", status: "expired" },
            { code: "POG", effect: "Unknown Reward", status: "expired" },
            { code: "KITTEN", effect: "Unknown Reward", status: "expired" },
            { code: "NEVERBROKEN", effect: "Unknown Reward", status: "expired" },
            { code: "BLOXY", effect: "Unknown Reward", status: "expired" },
            { code: "TROLLFACE", effect: "Unknown Reward", status: "expired" }
        ],
        category: "action",
        rating: 4.7,
        description: "Fast-paced FPS shooter with epic battles!",
        lastUpdated: "2025-03-13",
        popularity: "High"
    },
    {
        id: 121,
        name: "Murder Mystery 2",
        image: "https://tr.rbxcdn.com/180DAY-cee6edfb36f7c1d81e9ab0729d084de5/512/512/Image/Webp/noFilter",
        codes: [
            { code: "COMB4T2", effect: "Unlocks Combat II Knife", status: "active" },
            { code: "PR1SM", effect: "Unlocks Prism Knife", status: "active" },
            { code: "AL3X", effect: "Unlocks Alex Knife", status: "active" },
            { code: "MYSTERY2024", effect: "Gave Random Knife", status: "expired" }
        ],
        category: "adventure",
        rating: 4.8,
        description: "Solve mysteries as sheriff, murderer, or innocent!",
        lastUpdated: "2025-03-12",
        popularity: "Very High"
    },
    {
        id: 122,
        name: "Tower of Misery",
        image: "https://tr.rbxcdn.com/180DAY-563bf04915ef2abf4324fdb3d375a2b8/512/512/Image/Webp/noFilter",
        codes: [
            { code: "MISERY2025", effect: "Grants 100 Coins", status: "active" },
            { code: "SKIP100", effect: "Unlocks Stage Skip", status: "active" },
            { code: "BOOST50", effect: "50% Speed Boost for 1 run", status: "active" },
            { code: "TOWER2024", effect: "Gave 50 Coins", status: "expired" }
        ],
        category: "adventure",
        rating: 4.6,
        description: "Climb challenging towers with obstacles!",
        lastUpdated: "2025-03-11",
        popularity: "Medium"
    },
    {
        id: 123,
        name: "Astral Hearts",
        image: "https://tr.rbxcdn.com/180DAY-595b39e6229a50ece24ea31a260b4fd2/512/512/Image/Webp/noFilter",
        codes: [
            { code: "ASTRAL2025", effect: "Grants 100 Hearts", status: "active" },
            { code: "GEMS100", effect: "Unlocks Rare Artifact", status: "active" },
            { code: "HEART50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "LOVE2024", effect: "Gave 50 Hearts", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Anime-inspired adventure with magical quests!",
        lastUpdated: "2025-03-10",
        popularity: "High"
    },
    {
        id: 123,
        name: "Brookhaven",
        image: "https://tr.rbxcdn.com/180DAY-595b39e6229a50ece24ea31a260b4fd2/512/512/Image/Webp/noFilter",
        codes: [
            { code: "ASTRAL2025", effect: "Grants 100 Hearts", status: "active" },
            { code: "GEMS100", effect: "Unlocks Rare Artifact", status: "active" },
            { code: "HEART50", effect: "50% XP Boost for 1 hour", status: "active" },
            { code: "LOVE2024", effect: "Gave 50 Hearts", status: "expired" }
        ],
        category: "adventure",
        rating: 4.7,
        description: "Anime-inspired adventure with magical quests!",
        lastUpdated: "2025-03-10",
        popularity: "High"
    },
    {
        id: 124,
        name: "Brookhaven",
        image: "https://tr.rbxcdn.com/180DAY-1f2897ae811dc87dc29188fbba5c18c1/768/432/Image/Webp/noFilter",
        codes: [
            { code: "1836448915", effect: "Irish Flute 30", status: "active" },
            { code: "5776344796", effect: "Jujutsu Kaisen OP – Eve", status: "active" },
            { code: "926493242", effect: "Chill Jazz", status: "active" },
            { code: "915288747", effect: "Oofing in the 90s", status: "active" },
            { code: "591276362", effect: "BTS Fire", status: "active" },
            { code: "7020008209", effect: "iCarly freestyle", status: "active" },
            { code: "131154740", effect: "Harlem Shake", status: "active" },
            { code: "1837879082", effect: "Paradise Falls", status: "active" },
            { code: "398159550", effect: "Nightcore (Titanium)", status: "active" },
            { code: "169360242", effect: "Banana Song", status: "active" },
            { code: "2862170886", effect: "Old Town Road", status: "active" },
            { code: "130762736", effect: "Dubstep Remix (26k+)", status: "active" },
            { code: "6691673908", effect: "Rock – Dreams (ft. Young Thug)", status: "active" },
            { code: "135308045", effect: "sad violin", status: "active" },
            { code: "587156015", effect: "Nightcore – Light ‘Em Up x Girl On Fire (S/V)", status: "active" },
            { code: "212675193", effect: "Caillou Trap Remix", status: "active" },
            { code: "1845554017", effect: "Uptown", status: "active" },
            { code: "1305251774", effect: "Wii music", status: "active" },
            { code: "9119119619", effect: "Elevator music", status: "active" },
            { code: "165065112", effect: "Mako Beam (Proximity)", status: "active" },
            { code: "9045389581", effect: "Midnight Carnival Alternate", status: "active" },
            { code: "142376088", effect: "Parry Gripp – Raining Tacos", status: "active" },
            { code: "1845793864", effect: "The Will to Fight A", status: "active" },
            { code: "168208965", effect: "Whatcha Say by Jason Derulo", status: "active" },
            { code: "5410086218", effect: "Crab Rave", status: "active" },
            { code: "130778839", effect: "Everybody do the flop", status: "active" },
            { code: "186317099", effect: "2Pac, Life Goes On", status: "active" },
            { code: "5925841720", effect: "2Pac ft. Dr. Dre, California Love", status: "active" },
            { code: "1259050178", effect: "A Roblox Rap", status: "active" },
            { code: "225150067", effect: "Baby Bash, Suga Suga", status: "active" },
            { code: "6957372976", effect: "Bad Bunny, Yonaguni", status: "active" },
            { code: "1845016505", effect: "Believer", status: "active" },
            { code: "1321038120", effect: "Billie Eilish, Ocean Eyes", status: "active" },
            { code: "6843558868", effect: "BTS, Butter", status: "active" },
            { code: "1894066752", effect: "BTS, Fake Love", status: "active" },
            { code: "5760198930", effect: "Clairo, Sofia", status: "active" },
            { code: "6657083880", effect: "Doja Cat, Kiss Me More", status: "active" },
            { code: "521116871", effect: "Doja Cat, Say So", status: "active" },
            { code: "6432181830", effect: "Glass Animals, Heat Wave", status: "active" },
            { code: "249672730", effect: "Illijiah, On My Way", status: "active" },
            { code: "1243143051", effect: "Jingle Oof", status: "active" },
            { code: "4591688095", effect: "Justin Bieber, Yummy", status: "active" },
            { code: "6403599974", effect: "Kali Uchis, Telepatia", status: "active" },
            { code: "6177409271", effect: "Kim Dracula, Paparazzi", status: "active" },
            { code: "6620108916", effect: "Lil Nas X, Call Me By Your Name", status: "active" },
            { code: "3340674075", effect: "Lil Nas X, Panini", status: "active" },
            { code: "143666548", effect: "Mii Channel Music", status: "active" },
            { code: "6833920398", effect: "Olivia Rodrigo, Good 4 U", status: "active" },
            { code: "614018503", effect: "Pink Fong, Baby Shark", status: "active" },
            { code: "6447077697", effect: "PinkPantheress, Pain", status: "active" },
            { code: "3400778682", effect: "Pokémon Sword and Shield Gym theme", status: "active" },
            { code: "6678031214", effect: "Polo G, RAPSTAR", status: "active" },
            { code: "6887728970", effect: "Rauw Alejandro, Todo De Ti", status: "active" },
            { code: "5595658625", effect: "Royal & the Serpent, Overwhelmed", status: "active" },
            { code: "6760592191", effect: "Silk Sonic, Leave The Door Open", status: "active" },
            { code: "2623209752", effect: "Ski Mask The Slump God, Nuketown", status: "active" },
            { code: "292861322", effect: "Snoop Dogg, Drop It Like It’s Hot", status: "active" },
            { code: "6794553622", effect: "Syko, Brooklyn Blood Pop", status: "active" },
            { code: "6159978466", effect: "Taylor Swift, You Belong With Me", status: "active" },
            { code: "6463211475", effect: "Tesher, Jalebi Baby", status: "active" },
            { code: "6815150969", effect: "The Kid LAROI ft. Justin Bieber, Stay", status: "active" },
            { code: "4982789390", effect: "The Weeknd, Blinding Lights", status: "active" },
            { code: "5619169255", effect: "The Weeknd, Save Your Tears", status: "active" },
            { code: "224845627", effect: "The Kitty Cat Dance", status: "active" },
            { code: "5145539495", effect: "Tina Turner, What’s Love Got to Do with It", status: "active" },
            { code: "154664102", effect: "You’ve Been Trolled", status: "active" },
            { code: "5253604010", effect: "Capone, Oh No", status: "active" },
            { code: "5937000690", effect: "Chikatto, Chika Chika", status: "active" },
            { code: "1725273277", effect: "Frank Ocean, Chanel", status: "active" },
            { code: "189105508", effect: "Frozen, Let It Go", status: "active" }
        ],
        category: "roleplay",
        rating: 4.9,
        description: "Live your dream life in a vibrant roleplay city!",
        lastUpdated: "2025-07-14",
        popularity: "Very High"
    },
    {
        id: 125,
        name: "Adopt Me",
        image: "https://tr.rbxcdn.com/180DAY-8f2024c7b83bcb7976403814c5bd5ddd/768/432/Image/Webp/noFilter",
        codes: [
            { code: "AMTRUCK2024", effect: "Canine Cruiser", status: "active" },
            { code: "SUMMERBREAK", effect: "Unknown Reward", status: "expired" },
            { code: "SUMMERSALE", effect: "Unknown Reward", status: "expired" },
            { code: "1B1LL1ONV1S1TS", effect: "Unknown Reward", status: "expired" },
            { code: "M0N3YTR33S", effect: "Unknown Reward", status: "expired" },
            { code: "GIFTUNWRAP", effect: "Unknown Reward", status: "expired" },
            { code: "DiscordFTW", effect: "Unknown Reward", status: "expired" },
            { code: "subbethink", effect: "Unknown Reward", status: "expired" },
            { code: "GIFTUNWRAP", effect: "Unknown Reward", status: "expired" },
            { code: "SEAcreatures", effect: "Unknown Reward", status: "expired" }
        ],
        category: "simulation",
        rating: 4.8,
        description: "Adopt pets and build your dream home!",
        lastUpdated: "2025-07-14",
        popularity: "Very High"
    },
    
];

// Configuration
const gamesPerPage = 20;
let currentPage = 1;
let recentlyViewed = [];
let favorites = [];

// Expected games array structure (not defined here):
// const games = [{ id: number, name: string, image: string, description: string, category: string, rating: number, popularity: string, codes: [{ code: string, status: string, expiresAt: string }] }];

// Cache DOM elements
const domElements = {
    gameList: document.getElementById('gameList'),
    pagination: document.getElementById('pagination'),
    loadMore: document.getElementById('loadMore'),
    recentlyViewedList: document.getElementById('recentlyViewed'),
    favoritesList: document.getElementById('favoritesList'),
    searchInput: document.getElementById('searchInput'),
    clearSearch: document.getElementById('clearSearch'),
    categoryFilter: document.getElementById('categoryFilter'),
    sortBy: document.getElementById('sortBy'),
    filterType: document.getElementById('filterType'),
    backToTop: document.getElementById('backToTop'),
    themeToggle: document.getElementById('themeToggle'),
    randomGame: document.getElementById('randomGame'),
    errorContainer: document.getElementById('errorContainer') // Optional: Add this in HTML for user-facing errors
};

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function showError(message) {
    if (domElements.errorContainer) {
        domElements.errorContainer.textContent = message;
        domElements.errorContainer.style.display = 'block';
        setTimeout(() => {
            domElements.errorContainer.style.display = 'none';
        }, 5000);
    } else {
        console.error(message);
    }
}

// Display Functions
function displayGames(gamesToShow, page, filterType = 'all') {
    if (!domElements.gameList) {
        showError('Game list element not found.');
        return;
    }
    domElements.gameList.innerHTML = '';

    if (!Array.isArray(gamesToShow) || gamesToShow.length === 0) {
        domElements.gameList.innerHTML = '<p>No games found matching your criteria.</p>';
        if (domElements.pagination) domElements.pagination.style.display = 'none';
        if (domElements.loadMore) domElements.loadMore.style.display = 'none';
        return;
    }

    const start = (page - 1) * gamesPerPage;
    const end = start + gamesPerPage;
    const paginatedGames = gamesToShow.slice(start, end);

    paginatedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.setAttribute('role', 'article');
        gameCard.setAttribute('aria-label', `Game card for ${game.name}`);
        const isFavorite = favorites.some(fav => fav.id === game.id);
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name} thumbnail" loading="lazy">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-id="${game.id}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                ${isFavorite ? '★' : '☆'}
            </button>
            <a href="game.html?id=${game.id}" class="view-details" data-id="${game.id}" aria-label="View codes for ${game.name}">View Codes</a>
        `;
        domElements.gameList.appendChild(gameCard);
    });

    displayPagination(gamesToShow);
    // Update sidebars only if not filtering by them
    if (filterType !== 'recentlyViewed') displayRecentlyViewed();
    if (filterType !== 'favorites') displayFavorites();
}

function displayPagination(gamesToShow) {
    if (!domElements.pagination || !domElements.loadMore) {
        showError('Pagination or Load More element not found.');
        return;
    }
    domElements.pagination.innerHTML = '';
    const totalPages = Math.ceil(gamesToShow.length / gamesPerPage);

    if (totalPages <= 1) {
        domElements.pagination.style.display = 'none';
        domElements.loadMore.style.display = 'none';
        return;
    }

    domElements.pagination.style.display = 'flex';
    domElements.loadMore.style.display = totalPages > currentPage ? 'block' : 'none';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.setAttribute('aria-label', `Go to page ${i}`);
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            displayGames(filterAndSortGames(), currentPage);
            domElements.gameList.focus(); // Improve accessibility
        });
        domElements.pagination.appendChild(button);
    }
}

function displayRecentlyViewed() {
    if (!domElements.recentlyViewedList) return;
    domElements.recentlyViewedList.innerHTML = recentlyViewed.length ? '<h3>Recently Viewed</h3>' : '';
    recentlyViewed.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'recent-game';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name} thumbnail" loading="lazy">
            <p>${game.name}</p>
            <a href="game.html?id=${game.id}" class="view-details" data-id="${game.id}" aria-label="View codes for ${game.name}">View</a>
        `;
        domElements.recentlyViewedList.appendChild(gameCard);
    });
}

function displayFavorites() {
    if (!domElements.favoritesList) return;
    domElements.favoritesList.innerHTML = favorites.length ? '<h3>Favorite Games</h3>' : '';
    favorites.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'favorite-game';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name} thumbnail" loading="lazy">
            <p>${game.name}</p>
            <a href="game.html?id=${game.id}" class="view-details" data-id="${game.id}" aria-label="View codes for ${game.name}">View</a>
        `;
        domElements.favoritesList.appendChild(gameCard);
    });
}

// Filter and Sort Logic
function filterAndSortGames(filterType = 'all') {
    const searchInput = domElements.searchInput?.value.toLowerCase() || '';
    const category = domElements.categoryFilter?.value || 'all';
    const sortBy = domElements.sortBy?.value || 'name';
    let filteredGames = games || [];

    if (filterType === 'favorites') {
        filteredGames = favorites;
    } else if (filterType === 'recentlyViewed') {
        filteredGames = recentlyViewed;
    }

    filteredGames = filteredGames.filter(game =>
        game?.name?.toLowerCase().includes(searchInput) &&
        (category === 'all' || game?.category === category)
    );

    if (sortBy === 'rating') {
        filteredGames.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'popularity') {
        const popularityOrder = { 'Very High': 1, 'High': 2, 'Medium': 3, 'Low': 4 };
        filteredGames.sort((a, b) => (popularityOrder[a.popularity] || 5) - (popularityOrder[b.popularity] || 5));
    } else {
        filteredGames.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    }

    return filteredGames;
}

// Event Handlers
function setupSearchEvents() {
    if (!domElements.searchInput || !domElements.clearSearch) {
        showError('Search input or clear search element not found.');
        return;
    }
    const debouncedSearch = debounce(() => {
        currentPage = 1;
        displayGames(filterAndSortGames(domElements.filterType?.value), currentPage);
    }, 300);

    domElements.searchInput.addEventListener('input', debouncedSearch);
    domElements.categoryFilter?.addEventListener('change', debouncedSearch);
    domElements.sortBy?.addEventListener('change', debouncedSearch);
    domElements.filterType?.addEventListener('change', debouncedSearch);
    domElements.clearSearch.addEventListener('click', () => {
        domElements.searchInput.value = '';
        debouncedSearch();
    });
}

function addToRecentlyViewed(game) {
    if (!game || !game.id) return;
    recentlyViewed = recentlyViewed.filter(g => g.id !== game.id);
    recentlyViewed.unshift(game);
    recentlyViewed = recentlyViewed.slice(0, 4);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    displayRecentlyViewed();
}

function toggleFavorite(gameId) {
    const id = parseInt(gameId);
    if (isNaN(id)) {
        showError('Invalid game ID.');
        return;
    }
    const game = games.find(g => g.id === id);
    if (!game) {
        showError(`Game with ID ${id} not found.`);
        return;
    }
    const isFavorite = favorites.some(fav => fav.id === id);
    if (isFavorite) {
        favorites = favorites.filter(fav => fav.id !== id);
    } else {
        if (!favorites.some(fav => fav.id === id)) {
            favorites.push(game);
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayGames(filterAndSortGames(), currentPage);
    displayFavorites();
}

// Initialization
function initializeApp() {
    // Load localStorage with validation
    try {
        recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
        favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!Array.isArray(recentlyViewed)) recentlyViewed = [];
        if (!Array.isArray(favorites)) favorites = [];
    } catch (e) {
        showError('Failed to load saved data.');
        recentlyViewed = [];
        favorites = [];
    }

    // Validate essential DOM elements
    if (!domElements.gameList || !domElements.pagination || !domElements.loadMore) {
        showError('Essential UI elements are missing.');
        return;
    }

    // Back to Top
    if (domElements.backToTop) {
        window.addEventListener('scroll', () => {
            domElements.backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
        });
        domElements.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Theme Toggle
    if (domElements.themeToggle) {
        domElements.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Load More
    if (domElements.loadMore) {
        domElements.loadMore.addEventListener('click', () => {
            currentPage++;
            displayGames(filterAndSortGames(), currentPage);
        });
    }

    // Random Game
    if (domElements.randomGame) {
        domElements.randomGame.addEventListener('click', () => {
            if (!games || games.length === 0) {
                showError('No games available.');
                return;
            }
            const randomGame = games[Math.floor(Math.random() * games.length)];
            addToRecentlyViewed(randomGame);
            window.location.href = `game.html?id=${randomGame.id}`;
        });
    }

    // Event Delegation for Game List
    if (domElements.gameList) {
        domElements.gameList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('view-details')) {
                const gameId = parseInt(target.getAttribute('data-id'));
                const game = games.find(g => g.id === gameId);
                if (game) {
                    addToRecentlyViewed(game);
                    window.location.href = `game.html?id=${gameId}`;
                } else {
                    showError('Game not found.');
                }
            } else if (target.classList.contains('favorite-btn')) {
                toggleFavorite(target.getAttribute('data-id'));
            }
        });
    }

    // Event Delegation for Sidebars
    [domElements.recentlyViewedList, domElements.favoritesList].forEach(list => {
        if (list) {
            list.addEventListener('click', (event) => {
                if (event.target.classList.contains('view-details')) {
                    const gameId = parseInt(event.target.getAttribute('data-id'));
                    const game = games.find(g => g.id === gameId);
                    if (game) {
                        addToRecentlyViewed(game);
                        window.location.href = `game.html?id=${gameId}`;
                    } else {
                        showError('Game not found.');
                    }
                }
            });
        }
    });

    // Initialize search
    setupSearchEvents();

    // Initial display
    displayGames(filterAndSortGames(), currentPage);

    // Check for code expiration every minute
    setInterval(() => {
        if (games) {
            let updated = false;
            games.forEach(game => {
                game.codes?.forEach(code => {
                    if (code.status === 'active' && code.expiresAt && new Date() > new Date(code.expiresAt)) {
                        code.status = 'expired';
                        updated = true;
                    }
                });
            });
            if (updated) {
                displayGames(filterAndSortGames(), currentPage);
            }
        }
    }, 60000);
}

document.addEventListener('DOMContentLoaded', initializeApp);

// Ad links to rotate through
const adLinks = [
  "https://otieu.com/4/9558019",
  "https://mediocrecliffschangeless.com/nxtpva0b?key=6a516ed055d3c69ba578557cab77d4e8",
  "https://mediocrecliffschangeless.com/ysgt1brp6y?key=afa3ebe412e568c35961207f14db42a0"
];

let adIndex = 0;
let clickCount = 0;
let timerStarted = false;

function openPopunder() {
  const url = adLinks[adIndex];
  adIndex = (adIndex + 1) % adLinks.length;

  const pop = window.open(url, '_blank');
  if (pop) {
    pop.blur();
    window.focus();
  }
}

// First 2 ads on user clicks
document.addEventListener('click', () => {
  if (clickCount < 2) {
    openPopunder();
    clickCount++;
  }

  // Start 8-second timer after 2nd click
  if (clickCount === 2 && !timerStarted) {
    timerStarted = true;
    setInterval(openPopunder, 8000); // every 8 sec
  }
});

