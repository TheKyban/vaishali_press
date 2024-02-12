import {
    BaggageClaim,
    Box,
    LayoutDashboard,
    Album,
    BookUser,
    Home,
    Users,
    FormInput,
} from "lucide-react";

export const navigation = [
    { name: "Home", href: "/", Icon: Home },
    // { name: "About", href: "/about", Icon: Album },
    { name: "Contact", href: "/contact", Icon: BookUser },
];

export const DashboardLinks = [
    {
        link: "/",
        name: "Home",
        Icon: <Home className="text-indigo-700 dark:text-slate-600" />,
    },
    {
        link: "/dashboard",
        name: "Dashboard",
        Icon: (
            <LayoutDashboard className="text-orange-800 dark:text-indigo-500" />
        ),
    },
    {
        link: "/dashboard/clients",
        name: "Clients",
        Icon: <Users className="text-slate-600 dark:text-rose-600" />,
    },
    {
        link: "/dashboard/products",
        name: "Products",
        Icon: <Box className="text-red-700 dark:text-orange-600" />,
    },
    {
        link: "/dashboard/sales",
        name: "Sales",
        Icon: <BaggageClaim className="text-gray-700 dark:text-yellow-500" />,
    },
    {
        link: "/dashboard/password",
        name: "Password",
        Icon: <FormInput className="text-rose-700 dark:text-rose-500" />,
    },
];

export const districtsAndBlocks = [
    {
        name: "Araria",
        block: [
            "Araria",
            "Bhargama",
            "Forbesganj",
            "Jokihat",
            "Kursakanta",
            "Narpatganj",
            "Palasi",
            "Raniganj",
            "Sikti",
        ],
    },
    {
        name: "Arwal",
        block: [
            "Arwal",
            "Sonbhadra Banshi Surypur",
            "Kaler",
            "Karpi",
            "Kurtha",
        ],
    },
    {
        name: "Aurangabad",
        block: [
            "Aurangabad",
            "Barun",
            "Daudnagar",
            "Deo",
            "Goh",
            "Haspura",
            "Kutumba",
            "Madanpur",
            "Nabinagar",
            "Obra",
            "Rafiganj",
        ],
    },
    {
        name: "Banka",
        block: [
            "Amarpur",
            "Banka",
            "Barahat",
            "Belhar",
            "Bounsi",
            "Chandan",
            "Dhoraiya",
            "Fullidumar",
            "Katoriya",
            "Rajoun",
            "Shambhuganj",
        ],
    },
    {
        name: "Begusarai",
        block: [
            "Bachwara",
            "Bakhri",
            "Balia",
            "Barauni",
            "Begusarai",
            "Bhagawanpur",
            "Birpur",
            "Cheria Bariyarpur",
            "Chhourahi",
            "Dandari",
            "Garhpura",
            "Khodabandpur",
            "Mansurchak",
            "Matihani",
            "Navkothi",
            "Sahebpur Kamal",
            "Samho-Akaha-Kurha",
            "Teghra",
        ],
    },
    {
        name: "Bhabhua",
        block: [
            "Adhaura",
            "Bhabhua",
            "Bhagwanpur",
            "Chainpur",
            "Chand",
            "Durgawati",
            "Kudra",
            "Mohania",
            "Nuawon",
            "Ramgarh",
            "Rampur",
        ],
    },
    {
        name: "Bhagalpur",
        block: [
            "Bihpur",
            "Gauradih",
            "Gopalpur",
            "Ishmailpur",
            "Jagdishpur",
            "Kahalgaon",
            "Kharik",
            "Narayanpur",
            "Nathnagar",
            "Navgachhia",
            "Pirpainty",
            "Rangra Chowk",
            "Sabour",
            "Shahkund",
            "Sanhoula",
            "Sultanganj purushottam",
        ],
    },
    {
        name: "Ara",
        block: [
            "Agioan",
            "Ara Sadar",
            "Barhara",
            "Bihiya",
            "Charpokhri",
            "Garhani",
            "Jagdishpur",
            "Koilwar",
            "Piro",
            "Sahar",
            "Sandesh",
            "Shahpur",
            "Tarari",
            "Udwantnagar",
        ],
    },
    {
        name: "Buxar",
        block: [
            "Brahmpur",
            "Buxar",
            "Chakki",
            "Chaugain",
            "Dumraon",
            "Itarhi",
            "Kesath",
            "Nawanagar",
            "Rajpur",
            "Simari",
        ],
    },
    {
        name: "Darbhanga",
        block: [
            "Alinagar",
            "Bahadurpur",
            "Baheri",
            "Benipur",
            "Biraul",
            "Darbhanga",
            "Gaura Bauram",
            "Ghanshyampur",
            "Hanuman Nagar",
            "Hayaghat",
            "Jale",
            "Keoti",
            "Kiratpur",
            "Kusheswar Asthan",
            "Kusheswar Asthan East",
            "Manigachhi",
            "Singhwara",
            "Tardih",
        ],
    },
    {
        name: "Motihari",
        block: [
            "Adapur",
            "Areraj",
            "Banjariya",
            "Chakia",
            "Chhauradano",
            "Chiraiya",
            "Dhaka",
            "Ghorasahan",
            "Harsiddhi",
            "Kalyanpur",
            "Kesaria",
            "Kotwa",
            "Madhuban",
            "Mehsi",
            "Motihari",
            "Paharpur",
            "Pakaridayal",
            "Patahi",
            "Phenhara",
            "Piprakothi",
            "Ramgarhwa",
            "Raxaul",
            "Sangrampur",
            "Sugauli",
            "Tetaria",
            "Turkauliya",
            "Bankatwa",
        ],
    },
    {
        name: "Gaya",
        block: [
            "Amas",
            "Atri",
            "Banke Bazar",
            "Barachatty",
            "Belaganj",
            "Bodh Gaya",
            "Dobhi",
            "Dumariya",
            "Fatehpur",
            "Gaya Sadar",
            "Guraru",
            "Gurua",
            "Imamganj",
            "Khizar Sarai",
            "Konch",
            "Manpur",
            "Mohanpur",
            "Mohra",
            "Bathani",
            "Paraiya",
            "Sherghatty",
            "Tankuppa",
            "Tekari",
            "Wazirganj",
        ],
    },
    {
        name: "Gopalganj",
        block: [
            "Bhore",
            "Gopalganj",
            "Manjha",
            "Uchkagaon",
            "Kuchaikot",
            "Kateya",
            "Vijaipur",
            "Barauli",
            "Hathua",
            "Baikunthpur",
            "Phulwaria",
            "Thawe",
            "Panchdevari",
            "Sidhwalia",
        ],
    },
    {
        name: "Jamui",
        block: [
            "Barhat",
            "Chakai",
            "Gidhaur",
            "Isalmanagar Aliganj",
            "Jamui",
            "Jhajha",
            "Khaira",
            "Laxmipur",
            "Sikandra",
            "Sono",
        ],
    },
    {
        name: "Jehanabad",
        block: [
            "Jehanabad",
            "Ghoshi",
            "Hulasgunj",
            "Kako",
            "Makhdumpur",
            "Modanganj",
            "Ratni Faridpur",
        ],
    },
    {
        name: "Katihar",
        block: [
            "Amdabad",
            "Azamnagar",
            "Balrampur",
            "Barari",
            "Barsoi",
            "Dandkhora",
            "Falka",
            "Hasanganj",
            "Kadwa",
            "Katihar",
            "Korha",
            "Kursela",
            "Manihari",
            "Mansahi",
            "Pranpur",
            "Sameli",
        ],
    },
    {
        name: "Khagaria",
        block: [
            "Allouli Beldaur",
            "Beldaur",
            "Chautham",
            "Gogari",
            "Khagaria",
            "Mansi",
            "Parbatta",
        ],
    },
    {
        name: "Kishanganj",
        block: [
            "Bahadurganj",
            "Dighalbank",
            "Kishanganj",
            "Kochadhaman",
            "Pothia",
            "Terhagachh",
            "Thakurganj",
        ],
    },
    {
        name: "Lakhisarai",
        block: [
            "Barahia",
            "Channan",
            "Halsi",
            "Lakhisarai",
            "Piparia",
            "Ramgarh chowk",
            "Suryagarha",
        ],
    },
    {
        name: "Madhepura",
        block: [
            "Alamnagar",
            "Bihariganj",
            "Chausa",
            "Ghailadh",
            "Gamharia",
            "Gualpara",
            "Kumarkhand",
            "Madhepura",
            "Murliganj",
            "Puraini",
            "Shankarpur",
            "Sigheshwarsthan",
            "Uda kishanganj",
        ],
    },
    {
        name: "Madhubani",
        block: [
            "Khutauna",
            "Phulparas",
            "Laukahi",
            "Ghoghardiha",
            "Rahika",
            "Pandaul",
            "Rajnagar",
            "Khajauli",
            "Kaluahi",
            "Babubarhi",
            "Madhwapur",
            "Harlakhi",
            "Bisfi",
            "Benipatti",
            "Lakhanaur",
            "Madhepur",
            "Jhanjharpur",
            "Andharathari",
            "Basopatti",
            "Ladania",
            "Jainagar",
        ],
    },
    {
        name: "Monghyr",
        block: [
            "Munger sadar",
            "Dharahara",
            "Bariyarpur",
            "Jamalpur",
            "Tetiya bamber",
            "Haveli kharagpur",
            "Tarapura",
            "Asarganj",
            "Sangarampur",
        ],
    },
    {
        name: "Muzaffarpur",
        block: [
            "Sahebganj",
            "Motipur",
            "Paroo",
            "Saraiya",
            "Kurhani",
            "Kanti",
            "Marwan",
            "Minapur",
            "Mushahari",
            "Bochahan",
            "Aurai",
            "Katara",
            "Gaighat",
            "Muraul",
            "Sakra",
            "Bandra",
        ],
    },
    {
        name: "Nalanda",
        block: [
            "Ekangarsarai",
            "Biharsarif",
            "Asthawan",
            "Noorsarai",
            "Sarmera",
            "Rahui",
            "Harnaut",
            "Hilsa",
            "Islampur",
            "Ben",
            "Bind",
            "Parwalpur",
            "Katrisarai",
            "Karai parsurai",
            "Nagarnausa",
            "Chandi",
            "Tharthari",
            "Giriyak",
            "Rajgir",
            "Silao",
        ],
    },
    {
        name: "Nawada",
        block: [
            "Rajauli",
            "Akbarpur",
            "Sirdala",
            "Kowakole",
            "Pakaribarawan",
            "Warsaliganj",
            "Kashichak",
            "Nawada",
            "Nardiganj",
            "Roh",
            "Meskaur",
            "Govindpur",
            "Narhat",
            "Hisua",
        ],
    },
    {
        name: "Patna",
        block: [
            "Athmalgola",
            "Bakhtiarpur",
            "Barh",
            "Belchhi",
            "Bihta",
            "Bikram",
            "Danapur",
            "Daniyawaan",
            "Dhanarua",
            "Dulhin bazar",
            "Fatuha",
            "Ghoswari",
            "Khusrupur",
            "Maner",
            "Masaurhi",
            "Mokama",
            "Naubatpur",
            "Paliganj",
            "Pandarak",
            "Patna sadar",
            "Phulwari sharif",
            "Punpun",
            "Sampatchak",
        ],
    },
    {
        name: "Purnea",
        block: [
            "Amour",
            "Baisa",
            "Baisi",
            "Banmankhi",
            "Barhara kothi",
            "Bhawanipur",
            "Dagarua",
            "Dhamdaha",
            "Jalalgarh",
            "Krityanandnagar",
            "Kasba",
            "Purnia",
            "Rupouli",
            "Srinagar",
        ],
    },
    {
        name: "Sasaram",
        block: [
            "Akorhigola",
            "Bikramganj",
            "Chenari",
            "Dawath",
            "Dehri",
            "Dinara",
            "Karakat",
            "Kargahar",
            "Kochas",
            "Nasriganj",
            "Nauhatta",
            "Nokha",
            "Rajpur",
            "Rohtas",
            "Sanjhauli",
            "Sasaram",
            "Sheosagar",
            "Surajpura",
            "Tilouthu",
        ],
    },
    {
        name: "Saharsa",
        block: [
            "Kahra",
            "Sattar katiya",
            "Saur bazar",
            "Patarghat",
            "Mahishi",
            "Sonbarsa",
            "Nauhatta",
            "Salkhua",
            "Banma itahri",
            "Simri bakhtiyarpur",
        ],
    },
    {
        name: "Samastipur",
        block: [
            "Kalyanpur",
            "Warisnagar",
            "Khanpur",
            "Samastipur",
            "Pusa",
            "Tajpur",
            "Morwa",
            "Sarairanjan",
            "Patori",
            "Mohanpur",
            "Mohiuddinnagar",
            "Vidyapatinagar",
            "Dalsingsarai",
            "Ujiyarpur",
            "Bibhutipur",
            "Rosera",
            "Shivajeenagar",
            "Singhia",
            "Hasanpur",
            "Bithan",
        ],
    },
    {
        name: "Chapra",
        block: [
            "Baniyapur",
            "Lahladpur",
            "Jalalpur",
            "Nagra",
            "Ekma",
            "Manjhi",
            "Rivilganj",
            "Chapra",
            "Maker",
            "Garkha",
            "Marhourah",
            "Amnour",
            "Mashrakh",
            "Panapur",
            "Taraiyan",
            "Ishuapur",
            "Parsa",
            "Dariyapur",
            "Dighwara",
            "Sonepur",
        ],
    },
    {
        name: "Sheikhpura",
        block: [
            "Sheikhpura",
            "Barbigha",
            "Shekhopur sarai",
            "Ariari",
            "Chewara",
            "Ghat kusumba",
        ],
    },
    {
        name: "Sheohar",
        block: ["Sheohar", "Dumari", "Piprahi", "Purnahiya", "Tariyani"],
    },
    {
        name: "Sitamarhi",
        block: [
            "Belsand",
            "Parsauni",
            "Runnisaidpur",
            "Dumra",
            "Riga",
            "Bairgania",
            "Majorganj",
            "Suppi",
            "Bathnaha",
            "Sonbarsa",
            "Parihar",
            "Sursand",
            "Bajpatti",
            "Pupri",
            "Choraut",
            "Nanpur",
            "Bokhra",
        ],
    },
    {
        name: "Siwan",
        block: [
            "Jeeradei",
            "Andar",
            "Siswan",
            "Guthani",
            "Pachrukhi",
            "Darauli",
            "Goreakothi",
            "Bhagwanpur",
            "Hussainganj",
            "Mairwa",
            "Duraundha",
            "Siwan",
            "Barharia",
            "Raghunathpur",
            "Basantpur",
            "Maharajganj",
            "Lakri nabiganj",
            "Hasanpura",
            "Nautan",
        ],
    },
    {
        name: "Supaul",
        block: [
            "Nirmali",
            "Marauna",
            "Supaul",
            "Kishanpur",
            "Saraigarh",
            "Pipra",
            "Basantpur",
            "Raghopur",
            "Pratapganj",
            "Trivenganj",
            "Chhatapur",
        ],
    },
    {
        name: "Hajipur",
        block: [
            "Hajipur",
            "Raghopur",
            "Bidupur",
            "Lalganj",
            "Vaishali",
            "Bhagwanpur",
            "Patedhi belsar",
            "Mahnar",
            "Sahdei",
            "Mahua",
            "Chehrakala",
            "Jandaha",
            "Garaul",
            "Patepur",
            "Rajapakar",
            "Desri",
        ],
    },
    {
        name: "Bettiah",
        block: [
            "Madhuban",
            "Thakaraha",
            "Bagaha 1",
            "Bagaha 2",
            "Ramnagar",
            "Gaunaha",
            "Narkatiaganj",
            "Jogapatti",
            "Sikta",
            "Lauriya",
            "Mainatand",
            "Chanpatia",
            "Bettiah",
            "Majhaulia",
            "Bairiya",
            "Nautan",
            "Piprasi",
            "Bhitha",
        ],
    },
];

export const DISTRICTS = [
    "araria",
    "arwal",
    "aurangabad",
    "banka",
    "begusarai",
    "bhabhua",
    "bhagalpur",
    "ara",
    "buxar",
    "darbhanga",
    "motihari",
    "gaya",
    "gopalganj",
    "jamui",
    "jehanabad",
    "katihar",
    "khagaria",
    "kishanganj",
    "lakhisarai",
    "madhepura",
    "madhubani",
    "monghyr",
    "muzaffarpur",
    "nalanda",
    "nawada",
    "patna",
    "purnea",
    "sasaram",
    "saharsa",
    "samastipur",
    "chapra",
    "sheikhpura",
    "sheohar",
    "sitamarhi",
    "siwan",
    "supaul",
    "hajipur",
    "bettiah",
];
