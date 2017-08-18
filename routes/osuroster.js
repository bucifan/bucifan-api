var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var rosterJson ={
    players:[
    {
        number:  "1",
        name:  "Dixon, Johnnie",
        position:  "WR",
        nothing:  "11-May",
        weight:  "195",
       year:  "JR",
        HS:  "West Palm Beach, Fla. (Dwyer)"
    },
    {
        number:  "1",
        name:  "Okudah, Jeffrey",
        position:  "CB",
        nothing:  "1-Jun",
        weight:  "193",
       year:  "FR",
        HS:  "Grand Prairie, Texas (South Grand Prairie)"
    },
    {
        number:  "2",
        name:  "Dobbins, J.K.",
        position:  "RB",
        nothing:  "10-May",
        weight:  "208",
       year:  "FR",
        HS:  "La Grange, Texas (La Grange)"
    },
    {
        number:  "2",
        name:  "Young, Chase",
        position:  "DE",
        nothing:  "5-Jun",
        weight:  "240",
       year:  "FR",
        HS:  "Upper Marlboro, Md. (DeMatha Catholic)"
    },
    {
        number:  "3",
        name:  "Arnette, Damon",
        position:  "CB",
        nothing:  "Jun-00",
        weight:  "195",
       year:  "RS SO",
        HS:  "Fort Lauderdale, Fla. (St. Thomas Aquinas)"
    },
    {
        number:  "4",
        name:  "Fuller, Jordan",
        position:  "SAF",
        nothing:  "2-Jun",
        weight:  "207",
       year:  "SO",
        HS:  "Norwood, N.J. (Old Tappan)"
    },
    {
        number:  "5",
        name:  "Browning, Baron",
        position:  "LB",
        nothing:  "4-Jun",
        weight:  "230",
       year:  "FR",
        HS:  "Fort Worth, Texas (Kennedale)"
    },
    {
        number:  "6",
        name:  "Curtis, Kory",
        position:  "QB",
        nothing:  "4-Jun",
        weight:  "230",
       year:  "FR",
        HS:  "Cape Coral, Fla. (Island Coast)"
    },
    {
        number:  "6",
        name:  "Hubbard, Sam",
        position:  "DE",
        nothing:  "5-Jun",
        weight:  "265",
       year:  "JR",
        HS:  "Cincinnati, Ohio (Archbishop Moeller)"
    },
    {
        number:  "7",
        name:  "Haskins, Dwayne",
        position:  "QB",
        nothing:  "3-Jun",
        weight:  "214",
       year:  "RS FR",
        HS:  "Potomac, Md. (Bullis School)"
    },
    {
        number:  "7",
        name:  "Webb, Damon",
        position:  "SAF",
        nothing:  "11-May",
        weight:  "195",
       year:  "SR",
        HS:  "Detroit, Mich (Cass Tech)"
    },
    {
        number:  "8",
        name:  "Grimes, Trevon",
        position:  "WR",
        nothing:  "4-Jun",
        weight:  "202",
       year:  "FR",
        HS:  "Fort Lauderdale, Fla. (St. Thomas Aquinas)"
    },
    {
        number:  "8",
        name:  "Sheffield, Kendall",
        position:  "CB",
        nothing:  "Jun-00",
        weight:  "183",
       year:  "SO",
        HS:  "Missouri City, Texas"
    },
    {
        number:  "9",
        name:  "Cornell, Jashon",
        position:  "DT",
        nothing:  "3-Jun",
        weight:  "280",
       year:  "RS SO",
        HS:  "St. Paul, Minn. (Cretin-Derham Hall)"
    },
    {
        number:  "9",
        name:  "Victor, Binjimen",
        position:  "WR",
        nothing:  "4-Jun",
        weight:  "195",
       year:  "SO",
        HS:  "Pompano Beach, Florida (Coconut Creek)"
    },
    {
        number:  "10",
        name:  "Burrow, Joe",
        position:  "QB",
        nothing:  "3-Jun",
        weight:  "215",
       year:  "RS SO",
        HS:  "The Plains, Ohio (Athens)"
    },
    {
        number:  "10",
        name:  "Riep, Amir",
        position:  "CB",
        nothing:  "11-May",
        weight:  "183",
       year:  "FR",
        HS:  "Cincinnati (Colerain)"
    },
    {
        number:  "11",
        name:  "Holmes, Jalyn",
        position:  "DE",
        nothing:  "5-Jun",
        weight:  "270",
       year:  "SR",
        HS:  "Norfolk, Va. (Lake Taylor)"
    },
    {
        number:  "11",
        name:  "Mack, Austin",
        position:  "WR",
        nothing:  "2-Jun",
        weight:  "215",
       year:  "SO",
        HS:  "Fort Wayne, Ind. (Bishop Luers)"
    },
    {
        number:  "12",
        name:  "Skalitzky, Brendan",
        position:  "WR",
        nothing:  "11-May",
        weight:  "190",
       year:  "SO",
        HS:  "Evergreen Park, Illinois"
    },
    {
        number:  "12",
        name:  "Ward, Denzel",
        position:  "CB",
        nothing:  "10-May",
        weight:  "191",
       year:  "JR",
        HS:  "Macedonia, Ohio (Nordonia)"
    },
    {
        number:  "13",
        name:  "Berry, Rashod",
        position:  "TE",
        nothing:  "4-Jun",
        weight:  "260",
       year:  "RS SO",
        HS:  "Lorain, Ohio (Lorain)"
    },
    {
        number:  "13",
        name:  "Forte, Trevon",
        position:  "CB",
        nothing:  "8-May",
        weight:  "185",
       year:  "SR",
        HS:  "Youngstown, Ohio (Cardinal Mooney)"
    },
    {
        number:  "14",
        name:  "Hill, K.J.",
        position:  "WR",
        nothing:  "Jun-00",
        weight:  "198",
       year:  "RS SO",
        HS:  "Little Rock, Ark. (North Little Rock)"
    },
    {
        number:  "14",
        name:  "Pryor, Isaiah",
        position:  "SAF",
        nothing:  "2-Jun",
        weight:  "195",
       year:  "FR",
        HS:  "Bradenton, Florida (IMG Academy)"
    },
    {
        number:  "15",
        name:  "Davis, Wayne",
        position:  "DB",
        nothing:  "10-May",
        weight:  "193",
       year:  "RS FR",
        HS:  "Norfolk, Va (Lake Taylor H.S.)"
    },
    {
        number:  "15",
        name:  "Harris, Jaylen",
        position:  "WR",
        nothing:  "5-Jun",
        weight:  "205",
       year:  "FR",
        HS:  "Cleveland (Cleveland Heights)"
    },
    {
        number:  "16",
        name:  "Barrett, J.T.",
        position:  "QB",
        nothing:  "2-Jun",
        weight:  "220",
       year:  "SR",
        HS:  "Wichita Falls, Texas (Rider)"
    },
    {
        number:  "16",
        name:  "Jones, Keandre",
        position:  "LB",
        nothing:  "2-Jun",
        weight:  "225",
       year:  "SO",
        HS:  "Olney, Md. (Good Counsel)"
    },
    {
        number:  "17",
        name:  "Baker, Jerome",
        position:  "LB",
        nothing:  "1-Jun",
        weight:  "225",
       year:  "JR",
        HS:  "Cleveland, Ohio (Benedictine)"
    },
    {
        number:  "18",
        name:  "Cooper, Jonathon",
        position:  "DL",
        nothing:  "3-Jun",
        weight:  "248",
       year:  "RS FR",
        HS:  "Gahanna, Ohio (Lincoln)"
    },
    {
        number:  "18",
        name:  "Martell, Tate",
        position:  "QB",
        nothing:  "11-May",
        weight:  "205",
       year:  "FR",
        HS:  "Las Vegas, Nevada (Bishop Gorman)"
    },
    {
        number:  "19",
        name:  "Glover-Williams, Eric",
        position:  "SAF",
        nothing:  "9-May",
        weight:  "180",
       year:  "JR",
        HS:  "Canton, Ohio (McKinley)"
    },
    {
        number:  "19",
        name:  "Metzer, Jake",
        position:  "P",
        nothing:  "3-Jun",
        weight:  "220",
       year:  "SO",
        HS:  "Doylestown, Pa. (Central Bucks West)"
    },
    {
        number:  "20",
        name:  "Werner, Pete",
        position:  "LB",
        nothing:  "3-Jun",
        weight:  "215",
       year:  "FR",
        HS:  "Indianapolis (Catherdral)"
    },
    {
        number:  "21",
        name:  "Campbell, Parris",
        position:  "WR",
        nothing:  "1-Jun",
        weight:  "208",
       year:  "JR",
        HS:  "Akron (St. Vincent-St. Mary)"
    },
    {
        number:  "21",
        name:  "Williamson, Marcus",
        position:  "CB",
        nothing:  "10-May",
        weight:  "180",
       year:  "FR",
        HS:  "Westerville, Ohio (IMG Academy)"
    },
    {
        number:  "23",
        name:  "Hartway, Michael",
        position:  "WR",
        nothing:  "3-Jun",
        weight:  "206",
       year:  "FR",
        HS:  "Columbus, Ohio (Africentric)"
    },
    {
        number:  "23",
        name:  "Wint, Jahsen",
        position:  "SAF",
        nothing:  "10-May",
        weight:  "196",
       year:  "RS FR",
        HS:  "Brooklyn, N.Y. (Erasmus Hall)"
    },
    {
        number:  "24",
        name:  "Hawkins, Kierre",
        position:  "TE",
        nothing:  "3-Jun",
        weight:  "248",
       year:  "RS FR",
        HS:  "Maple Heights, Ohio (Maple Heights)"
    },
    {
        number:  "24",
        name:  "Wade, Shaun",
        position:  "CB",
        nothing:  "1-Jun",
        weight:  "185",
       year:  "FR",
        HS:  "Jacksonville, Florida (Trinity Christian Academy)"
    },
    {
        number:  "25",
        name:  "Weber, Mike",
        position:  "RB",
        nothing:  "10-May",
        weight:  "214",
       year:  "RS SO",
        HS:  "Detroit, Mich. (Cass Tech)"
    },
    {
        number:  "25",
        name:  "White, Brendon",
        position:  "SAF",
        nothing:  "2-Jun",
        weight:  "210",
       year:  "FR",
        HS:  "Powell, Ohio (Olentangy Liberty)"
    },
    {
        number:  "26",
        name:  "Williams, Antonio",
        position:  "RB",
        nothing:  "11-May",
        weight:  "208",
       year:  "SO",
        HS:  "New London, N.C. (North Stanly)"
    },
    {
        number:  "28",
        name:  "Hamilton, Jack",
        position:  "DB",
        nothing:  "10-May",
        weight:  "181",
       year:  "FR",
        HS:  "Dublin, Ohio (Coffman)"
    },
    {
        number:  "28",
        name:  "Leasure, Jordan",
        position:  "RB",
        nothing:  "Jun-00",
        weight:  "215",
       year:  "SO",
        HS:  "Amanda, Ohio (Amanda-Clearcreek)"
    },
    {
        number:  "29",
        name:  "Dever, Kevin",
        position:  "SAF",
        nothing:  "Jun-00",
        weight:  "186",
       year:  "FR",
        HS:  "Cleveland, Ohio (St. Edward)"
    },
    {
        number:  "30",
        name:  "Drake, Jared",
        position:  "LB",
        nothing:  "Jun-00",
        weight:  "225",
       year:  "JR",
        HS:  "Westerville, Ohio (Westerville Central)"
    },
    {
        number:  "30",
        name:  "McCall, Demario",
        position:  "RB",
        nothing:  "9-May",
        weight:  "195",
       year:  "FR",
        HS:  "North Ridgeville, Ohio (North Ridgeville H.S.)"
    },
    {
        number:  "32",
        name:  "Borland, Tuf",
        position:  "LB",
        nothing:  "1-Jun",
        weight:  "229",
       year:  "RS FR",
        HS:  "Bolingbrook, Ill. (Bolingbrook)"
    },
    {
        number:  "32",
        name:  "Knight, Jeremiah",
        position:  "RB",
        nothing:  "10-May",
        weight:  "196",
       year:  "FR",
        HS:  "Jefferson, Ohio (Jefferson Area)"
    },
    {
        number:  "33",
        name:  "Booker, Dante",
        position:  "LB",
        nothing:  "3-Jun",
        weight:  "240",
       year:  "SR",
        HS:  "Akron (St. Vincent-St. Mary)"
    },
    {
        number:  "33",
        name:  "Prater, Garyn",
        position:  "WR",
        nothing:  "5-Jun",
        weight:  "200",
       year:  "FR",
        HS:  "Cincinnati, Ohio (Wyoming)"
    },
    {
        number:  "34",
        name:  "Rossi, Mitch",
        position:  "RB",
        nothing:  "1-Jun",
        weight:  "232",
       year:  "FR",
        HS:  "Franklin, Tenn. (Franklin)"
    },
    {
        number:  "34",
        name:  "Smith, Erick",
        position:  "SAF",
        nothing:  "Jun-00",
        weight:  "203",
       year:  "SR",
        HS:  "Cleveland, Ohio (Glenville)"
    },
    {
        number:  "35",
        name:  "Backenstoe, Alex",
        position:  "RB",
        nothing:  "1-Jun",
        weight:  "220",
       year:  "JR",
        HS:  "Hilliard, OH (Davidson)"
    },
    {
        number:  "35",
        name:  "Worley, Chris",
        position:  "LB",
        nothing:  "2-Jun",
        weight:  "230",
       year:  "SR",
        HS:  "Cleveland, Ohio (Glenville)"
    },
    {
        number:  "36",
        name:  "Turnure, Zach",
        position:  "LB",
        nothing:  "1-Jun",
        weight:  "225",
       year:  "SR",
        HS:  "St. Louis, Mo. (CBC)"
    },
    {
        number:  "37",
        name:  "Goins, Elijaah",
        position:  "WR",
        nothing:  "1-Jun",
        weight:  "200",
       year:  "SR",
        HS:  "Concord, N.C. (Cox Mill)"
    },
    {
        number:  "37",
        name:  "Malone, Derrick",
        position:  "TE",
        nothing:  "5-Jun",
        weight:  "245",
       year:  "JR",
        HS:  "Dayton, Ohio (Thurgood Marshall H.S.)"
    },
    {
        number:  "38",
        name:  "Kelleher, Logan",
        position:  "DB",
        nothing:  "8-May",
        weight:  "192",
       year:  "SR",
        HS:  "Cincinnati, Ohio (Archbishop Moeller)"
    },
    {
        number:  "39",
        name:  "Harrison, Malik",
        position:  "LB",
        nothing:  "3-Jun",
        weight:  "235",
       year:  "SO",
        HS:  "Columbus, Ohio (Walnut Ridge)"
    },
    {
        number:  "41",
        name:  "Jester, Hayden",
        position:  "LB",
        nothing:  "1-Jun",
        weight:  "230",
       year:  "SO",
        HS:  "Cincinnati, Ohio (LaSalle)"
    },
    {
        number:  "43",
        name:  "Conner, Nick",
        position:  "LB",
        nothing:  "3-Jun",
        weight:  "234",
       year:  "RS SO",
        HS:  "Dublin, Ohio (Scioto)"
    },
    {
        number:  "46",
        name:  "Haney, Cin\u0027Quan",
        position:  "CB",
        nothing:  "1-Jun",
        weight:  "200",
       year:  "SR",
        HS:  "Dayton, Ohio (Chaminade-Julienne)"
    },
    {
        number:  "47",
        name:  "Hilliard, Justin",
        position:  "LB",
        nothing:  "1-Jun",
        weight:  "230",
       year:  "SO",
        HS:  "Cincinnati, Ohio (St. Xavier)"
    },
    {
        number:  "48",
        name:  "Raterman, Clay",
        position:  "SAF",
        nothing:  "Jun-00",
        weight:  "185",
       year:  "JR",
        HS:  "Dublin, Ohio (Coffman)"
    },
    {
        number:  "49",
        name:  "McCullough, Liam",
        position:  "LS",
        nothing:  "2-Jun",
        weight:  "228",
       year:  "RS SO",
        HS:  "Columbus, Ohio (Worthington Kilbourne)"
    },
    {
        number:  "50",
        name:  "Brock, Nathan",
        position:  "OL",
        nothing:  "4-Jun",
        weight:  "285",
       year:  "SO",
        HS:  "Powell, Ohio (Olentangy Liberty)"
    },
    {
        number:  "51",
        name:  "Seme, Nick",
        position:  "DL",
        nothing:  "3-Jun",
        weight:  "250",
       year:  "SR",
        HS:  "Wadsworth, Ohio (Wadsworth)"
    },
    {
        number:  "52",
        name:  "Davis, Wyatt",
        position:  "OL",
        nothing:  "4-Jun",
        weight:  "310",
       year:  "FR",
        HS:  "Bellflower, Calif. (St. John Bosco)"
    },
    {
        number:  "53",
        name:  "Hamilton, Davon",
        position:  "DT",
        nothing:  "4-Jun",
        weight:  "300",
       year:  "RS SO",
        HS:  "Pickerington, Ohio (Central)"
    },
    {
        number:  "54",
        name:  "Price, Billy",
        position:  "OL",
        nothing:  "4-Jun",
        weight:  "312",
       year:  "SR",
        HS:  "Austintown, Ohio (Fitch)"
    },
    {
        number:  "55",
        name:  "Barrow, Malik",
        position:  "DT",
        nothing:  "2-Jun",
        weight:  "290",
       year:  "RS FR",
        HS:  "Tampa, Fla. (Catholic IMG Academy)"
    },
    {
        number:  "56",
        name:  "Cox, Aaron",
        position:  "DL",
        nothing:  "4-Jun",
        weight:  "250",
       year:  "FR",
        HS:  "Mantua, Ohio (Crestwood)"
    },
    {
        number:  "58",
        name:  "Alabi, Joshua",
        position:  "OL",
        nothing:  "5-Jun",
        weight:  "300",
       year:  "RS SO",
        HS:  "Detroit, Mich. (Cass Tech)"
    },
    {
        number:  "59",
        name:  "Lewis, Tyquan",
        position:  "DL",
        nothing:  "4-Jun",
        weight:  "265",
       year:  "SR",
        HS:  "Tarboro, N.C. (Tarboro)"
    },
    {
        number:  "59",
        name:  "Prince, Isaiah",
        position:  "OL",
        nothing:  "7-Jun",
        weight:  "310",
       year:  "JR",
        HS:  "Greenbelt, Md. (Eleanor Roosevelt)"
    },
    {
        number:  "60",
        name:  "Pfenning, Blake",
        position:  "OL",
        nothing:  "5-Jun",
        weight:  "290",
       year:  "JR",
        HS:  "Wapakoneta, Ohio (Wapakoneta)"
    },
    {
        number:  "61",
        name:  "Cupp, Gavin",
        position:  "OL",
        nothing:  "5-Jun",
        weight:  "305",
       year:  "RS FR",
        HS:  "Leipsic, Ohio (Leipsic H.S.)"
    },
    {
        number:  "62",
        name:  "Pahl, Brandon",
        position:  "OL",
        nothing:  "2-Jun",
        weight:  "295",
       year:  "JR",
        HS:  "Cutler, Ohio (Warren)"
    },
    {
        number:  "63",
        name:  "Woidke, Kevin",
        position:  "OL",
        nothing:  "6-Jun",
        weight:  "295",
       year:  "JR",
        HS:  "Cleveland, Ohio (St. Ignatius)"
    },
    {
        number:  "64",
        name:  "Wohlabaugh, Jack",
        position:  "OL",
        nothing:  "4-Jun",
        weight:  "293",
       year:  "RS FR",
        HS:  "Cuyahoga Falls, Ohio (Walsh Jesuit)"
    },
    {
        number:  "66",
        name:  "Pridgeon, Malcolm",
        position:  "OL",
        nothing:  "7-Jun",
        weight:  "315",
       year:  "JR",
        HS:  "Central Islip, N.Y (Central Islip H.S.)"
    },
    {
        number:  "67",
        name:  "Landers, Robert",
        position:  "DL",
        nothing:  "1-Jun",
        weight:  "283",
       year:  "SO",
        HS:  "Dayton, Ohio (Huber Heights Wayne)"
    },
    {
        number:  "69",
        name:  "Burrell, Matthew",
        position:  "OL",
        nothing:  "3-Jun",
        weight:  "300",
       year:  "RS SO",
        HS:  "Woodbridge, Va. (Hylton)"
    },
    {
        number:  "70",
        name:  "Donald, Noah",
        position:  "DL",
        nothing:  "1-Jun",
        weight:  "275",
       year:  "SO",
        HS:  "Uniontown, Ohio (Walsh Jesuit)"
    },
    {
        number:  "71",
        name:  "Myers, Josh",
        position:  "OL",
        nothing:  "5-Jun",
        weight:  "305",
       year:  "FR",
        HS:  "Miamisburg, Ohio (Miamisburgh)"
    },
    {
        number:  "73",
        name:  "Jordan, Michael",
        position:  "OL",
        nothing:  "7-Jun",
        weight:  "310",
       year:  "SO",
        HS:  "Canton, Mich. (Plymouth)"
    },
    {
        number:  "74",
        name:  "Jones, Jamarco",
        position:  "OL",
        nothing:  "5-Jun",
        weight:  "310",
       year:  "SR",
        HS:  "Chicago, Ill. (De La Salle)"
    },
    {
        number:  "75",
        name:  "Munford, Thayer",
        position:  "OL",
        nothing:  "6-Jun",
        weight:  "325",
       year:  "FR",
        HS:  "Cincinnati, Ohio (Massillon Washington)"
    },
    {
        number:  "76",
        name:  "Bowen, Branden",
        position:  "OL",
        nothing:  "7-Jun",
        weight:  "312",
       year:  "RS SO",
        HS:  "Draper, Utah (Corner Canyon)"
    },
    {
        number:  "77",
        name:  "Feder, Kevin",
        position:  "OL",
        nothing:  "9-Jun",
        weight:  "303",
       year:  "RS SO",
        HS:  "Ramsey, N.J. (Don Boscoe Prep)"
    },
    {
        number:  "77",
        name:  "Hill, Michael",
        position:  "DT",
        nothing:  "3-Jun",
        weight:  "305",
       year:  "SR",
        HS:  "Pendleton, S.C. (Pendleton)"
    },
    {
        number:  "78",
        name:  "Knox, Demetrius",
        position:  "OL",
        nothing:  "4-Jun",
        weight:  "308",
       year:  "JR",
        HS:  "Fort Worth, Texas (All Saints Episcopal)"
    },
    {
        number:  "79",
        name:  "Taylor, Brady",
        position:  "OL",
        nothing:  "5-Jun",
        weight:  "300",
       year:  "JR",
        HS:  "Columbus, Ohio (Bishop Ready)"
    },
    {
        number:  "80",
        name:  "Saunders, C.J.",
        position:  "WR",
        nothing:  "11-May",
        weight:  "176",
       year:  "JR",
        HS:  "Dublin, Ohio (Coffman H.S)"
    },
    {
        number:  "81",
        name:  "Hausmann, Jake",
        position:  "TE",
        nothing:  "4-Jun",
        weight:  "252",
       year:  "RS FR",
        HS:  "Cincinnati, Ohio (Archbishop Moeller)"
    },
    {
        number:  "83",
        name:  "McLaurin, Terry",
        position:  "WR",
        nothing:  "1-Jun",
        weight:  "204",
       year:  "JR",
        HS:  "Indianapolis (Cathedral)"
    },
    {
        number:  "84",
        name:  "Davin, Brock",
        position:  "TE",
        nothing:  "3-Jun",
        weight:  "235",
       year:  "SO",
        HS:  "Cincinnati, Ohio (St. Xavier)"
    },
    {
        number:  "85",
        name:  "Baugh, Marcus",
        position:  "TE",
        nothing:  "5-Jun",
        weight:  "250",
       year:  "SR",
        HS:  "Riverside, Calif. (John W. North)"
    },
    {
        number:  "86",
        name:  "Jones, DreMont",
        position:  "DL",
        nothing:  "3-Jun",
        weight:  "295",
       year:  "RS SO",
        HS:  "Cleveland, Ohio (St. Ignatius)"
    },
    {
        number:  "87",
        name:  "Gardiner, Ellijah",
        position:  "WR",
        nothing:  "4-Jun",
        weight:  "200",
       year:  "FR",
        HS:  "Kemp, Texas (Kemp)"
    },
    {
        number:  "88",
        name:  "Alexander, A.J.",
        position:  "TE",
        nothing:  "2-Jun",
        weight:  "252",
       year:  "RS SO",
        HS:  "Burke, Va. (Lake Braddock)"
    },
    {
        number:  "89",
        name:  "Farrell, Luke",
        position:  "TE",
        nothing:  "6-Jun",
        weight:  "250",
       year:  "RS FR",
        HS:  "Perry, Ohio (Perry H.S.)"
    },
    {
        number:  "90",
        name:  "Kristan, Bryan",
        position:  "K",
        nothing:  "3-Jun",
        weight:  "190",
       year:  "JR",
        HS:  "Canfield, Ohio (Canfield)"
    },
    {
        number:  "91",
        name:  "Chrisman, Drue",
        position:  "P",
        nothing:  "3-Jun",
        weight:  "212",
       year:  "SO",
        HS:  "Cincinnati, Ohio (Cincinnati LaSalle H.S.)"
    },
    {
        number:  "92",
        name:  "Garrett, Haskell",
        position:  "DL",
        nothing:  "2-Jun",
        weight:  "286",
       year:  "FR",
        HS:  "Las Vegas, Nev. (Bishop Gorman)"
    },
    {
        number:  "93",
        name:  "Sprinkle, Tracy",
        position:  "DL",
        nothing:  "3-Jun",
        weight:  "293",
       year:  "SR",
        HS:  "Elyria, Ohio (Elyria)"
    },
    {
        number:  "94",
        name:  "Thompson, Dylan",
        position:  "DL",
        nothing:  "5-Jun",
        weight:  "280",
       year:  "JR",
        HS:  "Lombard, Ill. (Montini Catholic)"
    },
    {
        number:  "95",
        name:  "Haubeil, Blake",
        position:  "K",
        nothing:  "3-Jun",
        weight:  "200",
       year:  "FR",
        HS:  "Buffalo, N.Y. (Canisius)"
    },
    {
        number:  "96",
        name:  "Nuernberger, Sean",
        position:  "K",
        nothing:  "1-Jun",
        weight:  "225",
       year:  "JR",
        HS:  "Buckner, Ky. (Oldham Co.)"
    },
    {
        number:  "97",
        name:  "Bosa, Nick",
        position:  "DL",
        nothing:  "4-Jun",
        weight:  "270",
       year:  "SO",
        HS:  "Fort Lauderdale, Fla. (St. Thomas Aquinas)"
    },
    {
        number:  "98",
        name:  "Cage, Jerron",
        position:  "DL",
        nothing:  "3-Jun",
        weight:  "280",
       year:  "FR",
        HS:  "Cincinnati, OH (Winton Woods)"
    }
]

  };
  var rosterJson2017 = {
    players: [{
      TwoDeep: 1,
      OffDef: "O",
      name: "Noah Brown",
      pos: "WR",
      el: "RSSO",
      number: 80,
      from: "Sparta N.J. | Pope John XXIII",
      hgt: 6.2,
      wgt: 222
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Parris Campbell",
      pos: "WR",
      el: "RSSO",
      number: 21,
      from: "Akron | St. Vincent-St.Mary",
      hgt: 6.1,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Corey Smith",
      pos: "WR",
      el: "RSSR-6",
      number: 5,
      from: "Akron | Akron Buchtel",
      hgt: 6.1,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Johnnie Dixon",
      pos: "WR",
      el: "RSSO",
      number: 1,
      from: "West Palm Beach Fla | Dwyer",
      hgt: 5.11,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Terry McLaurin",
      pos: "WR",
      el: "RSSO",
      number: 83,
      from: "Indianapolis Ind | Cathedral",
      hgt: 6.0,
      wgt: 204
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "James Clark",
      pos: "WR",
      el: "RSSR-6",
      number: 82,
      from: "New Smyrna Beach, Fla | New Smyrna Beach",
      hgt: 5.10,
      wgt: 185
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Binjimen Victor",
      pos: "WR",
      el: "FR",
      number: 9,
      from: "Fort Lauderdale Fla| Coconut Creek",
      hgt: 6.4,
      wgt: 185
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Austin Mack",
      pos: "WR",
      el: "FR",
      number: 11,
      from: "Fort Wayne Ind | Bishop Lucas",
      hgt: 6.2,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Curtis Sammuel",
      pos: "WR",
      el: "JR",
      number: 4,
      from: "Brooklyn N.Y | Erasmus",
      hgt: 5.11,
      wgt: 200
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Dontre Wilson",
      pos: "WR",
      el: "SR",
      number: 2,
      from: "Plano TX | DeSoto ",
      hgt: 5.10,
      wgt: 185
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Marcus Baugh",
      pos: "TE",
      el: "RSJR",
      number: 85,
      from: "Riverside Cal. | John W. North",
      hgt: 6.5,
      wgt: 255
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Jake Hausmann",
      pos: "TE",
      el: "SO",
      number: 81,
      from: "Cincinnati | Archbishop Moeller",
      hgt: 6.4,
      wgt: 245
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "J.T. Barrett",
      pos: "QB",
      el: "RSJR",
      number: 16,
      from: "Witchita Falls Texas | Rider",
      hgt: 6.2,
      wgt: 225
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Joe Burrow",
      pos: "QB",
      el: "RSFR",
      number: 10,
      from: "Athens | Athens",
      hgt: 6.3,
      wgt: 208
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Mike Webber",
      pos: "RB",
      el: "RSFR",
      number: 25,
      from: "Detroit | Cass Tech",
      hgt: 5.10,
      wgt: 215
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Sam Hubbard",
      pos: "DE",
      el: "RSSO",
      number: 6,
      from: "Cincinnati | Archbishop Moeller",
      hgt: 6.5,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Nick Bosa",
      pos: "DE",
      el: "FR",
      number: 97,
      from: "Fort Lauderdale, Fla | St. Thomas Aquinas",
      hgt: 6.4,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Michael Hill",
      pos: "DT",
      el: "RSJR",
      number: 77,
      from: "Pendleton, S.C. | Pendleton",
      hgt: 6.3,
      wgt: 295
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Robert Landers",
      pos: "DT",
      el: "RSFR",
      number: 57,
      from: "Dayton | Huber Heights",
      hgt: 6.2,
      wgt: 290
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Tracy Sprinkle",
      pos: "DT",
      el: "RSJR",
      number: 93,
      from: "Elyria | Elyria",
      hgt: 6.3,
      wgt: 290
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jashon Cornell",
      pos: "DT",
      el: "RSFR",
      number: 9,
      from: "St. Paul. Minn | Cretin-Derham Hall",
      hgt: 6.3,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Tyquan Lewis",
      pos: "DE",
      el: "RSJR",
      number: 59,
      from: "Tarboro N.C. | Tarboro",
      hgt: 6.4,
      wgt: 260
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jalyn Holmes",
      pos: "DE",
      el: "JR",
      number: 11,
      from: "Norfolk, Va. | Lake Taylor",
      hgt: 6.5,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Dante Booker",
      pos: "LB",
      el: "JR",
      number: 33,
      from: "Akron | St. Vincent-St.Mary",
      hgt: 6.3,
      wgt: 233
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Justin Hilliard",
      pos: "LB",
      el: "RSFR",
      number: 47,
      from: "Cinicinnati | St. Xavier",
      hgt: 6.2,
      wgt: 230
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Joe Burger",
      pos: "LB",
      el: "SR",
      number: 48,
      from: "Cinicinnati | LaSalle",
      hgt: 6.2,
      wgt: 230
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Johnathan Cooper",
      pos: "DE",
      el: "FR",
      number: 18,
      from: "Gahanna | Lincohn",
      hgt: 6.3,
      wgt: 248
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "DreMont Jones",
      pos: "DT",
      el: "RSFR",
      number: 86,
      from: "Cleveland | St. Ignasius",
      hgt: 6.3,
      wgt: 280
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Davon Hamilton",
      pos: "DT",
      el: "RSFR",
      number: 53,
      from: "Pickerington | Pickerington Central",
      hgt: 6.4,
      wgt: 297
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Raekwon McMillan",
      pos: "LB",
      el: "JR",
      number: 5,
      from: "Hinesville, Ga. | Liberty County",
      hgt: 6.2,
      wgt: 240
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Nick Conner",
      pos: "LB",
      el: "RSFR",
      number: 34,
      from: "Dublin | Scioto",
      hgt: 6.3,
      wgt: 230
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Chris Worley",
      pos: "LB",
      el: "RSJR",
      number: 35,
      from: "Cleveland | Glenville",
      hgt: 6.2,
      wgt: 225
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jerome Baker",
      pos: "LB",
      el: "SO",
      number: 17,
      from: "Cleveland | St. Benedictine",
      hgt: 6.2,
      wgt: 215
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Craig Fada",
      pos: "LB",
      el: "SR",
      number: 38,
      from: "Columbus | Waterson",
      hgt: 6.1,
      wgt: 225
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Gareon Conley",
      pos: "CB",
      el: "RSJR",
      number: 8,
      from: "Massillon | Washington",
      hgt: 6.0,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Damon Arnette",
      pos: "CB",
      el: "RSFR",
      number: 3,
      from: "Fort Lauderdale, Fla. | St. Thomas Aquinas",
      hgt: 6.0,
      wgt: 191
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Malik Hooker",
      pos: "SS",
      el: "RSSO",
      number: 24,
      from: "New Castle, Pa | New Castle",
      hgt: 6.2,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Cam Burrows",
      pos: "SS",
      el: "RSJR",
      number: 16,
      from: "Trotwood | Trotwood Madison",
      hgt: 6.0,
      wgt: 208
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Erick Smith",
      pos: "FS",
      el: "JR",
      number: 34,
      from: "Cleveland | Glenville",
      hgt: 6.0,
      wgt: 202
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Damon Webb",
      pos: "FS",
      el: "JR",
      number: 7,
      from: "Detroit  | Cass Tech",
      hgt: 5.11,
      wgt: 193
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Marshon Lattimore",
      pos: "CB",
      el: "RSSO",
      number: 2,
      from: "Cleveland | Glenville",
      hgt: 6.0,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Denzel Ward",
      pos: "CB",
      el: "SO",
      number: 12,
      from: "Macedonia | Nordonia",
      hgt: 5.11,
      wgt: 175
    }, {
      TwoDeep: 0,
      OffDef: "D",
      name: "Joshua Albi",
      pos: "DT",
      el: "RSFR",
      number: 58,
      from: "Detroit | Cass Tech",
      hgt: 6.5,
      wgt: 295
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "A.J. Alexander",
      pos: "TE",
      el: "RSFR",
      number: 88,
      from: "Burke, Va. | Lake Braddock",
      hgt: 6.2,
      wgt: 254
    }, {
      TwoDeep: 0,
      OffDef: "O",
      name: "Alex Backenstoe",
      pos: "RB",
      el: "SO",
      number: 35,
      from: "Hilliard | Davidson",
      hgt: 6.0,
      wgt: 220
    }, {
      TwoDeep: 0,
      OffDef: "D",
      name: "Jarrod Barnes",
      pos: "SAF",
      el: "GS",
      number: 26,
      from: "Westerville | South",
      hgt: 6.0,
      wgt: 200
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "K.J. Hill",
      pos: "WR",
      el: "FR",
      number: 14,
      from: "North Little Rock, Ark. | North Little Rock",
      hgt: 6.0,
      wgt: 200
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Rashod Berry",
      pos: "DE",
      el: "FR",
      number: 13,
      from: "Lorain | Lorain",
      hgt: 6.4,
      wgt: 252
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jordan Fuller",
      pos: "FS",
      el: "FR",
      number: 4,
      from: "Old Tappan, N.J. | Old Tappan",
      hgt: 6.2,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Jamarco Jones",
      pos: "OT",
      el: "JR",
      number: 74,
      from: "Chicago Il | De LasSalle",
      hgt: 6.5,
      wgt: 310
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Evan Lisle",
      pos: "OT",
      el: "JR",
      number: 75,
      from: "Centerville | Centerville",
      hgt: 6.6,
      wgt: 308
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Kevin Woidke",
      pos: "OT",
      el: "SO",
      number: 63,
      from: "Cleveland | St. Ignasius",
      hgt: 6.6,
      wgt: 295
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Michael Jordan",
      pos: "OG",
      el: "FR",
      number: 73,
      from: "Canton Mich. | Plymoth",
      hgt: 6.7,
      wgt: 310
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Matthew Burrell",
      pos: "OG",
      el: "FR",
      number: 69,
      from: "Woodbridge Va. | Hylton",
      hgt: 6.4,
      wgt: 305
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Pat Elflein",
      pos: "C",
      el: "SR",
      number: 65,
      from: "Pickerington | Pickerington North",
      hgt: 6.3,
      wgt: 300
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Brady Taylor",
      pos: "C",
      el: "SO",
      number: 79,
      from: "Columbus | Bishop Ready",
      hgt: 6.5,
      wgt: 300
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Billy Price",
      pos: "OG",
      el: "JR",
      number: 54,
      from: "Austintown | Fitch",
      hgt: 6.4,
      wgt: 315
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Demetrius Knox",
      pos: "OG",
      el: "SO",
      number: 78,
      from: "Fort Worth, TX | All Saints Episcopal ",
      hgt: 6.4,
      wgt: 308
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Isiah Price",
      pos: "OT",
      el: "SO",
      number: 59,
      from: "Greenbelt, Md. | Eleanor Roosevelt",
      hgt: 6.7,
      wgt: 310
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Brandon Bowen",
      pos: "OT",
      el: "RSFR",
      number: 76,
      from: "Draper, Utah (Corner Canyon)",
      hgt: 6.7,
      wgt: 315
    }]
  };
  res.json(rosterJson);
});

module.exports = router;