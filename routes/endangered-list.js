const endangeredAnimals = [
    {
        id: 1,
        name: "Amur Leopard",
        status: "Critically Endangered",
        population: "Around 90",
        habitat: ["Temperate, broadleaf, and mixed forests"],
        location: "Far Eastern Russia",
        description: "People usually think of leopards in the savannas of Africa but in the Russian Far East, a rare subspecies has adapted to life in the temperate forests that make up the northern-most part of the species’ range. Similar to other leopards, the Amur leopard can run at speeds of up to 37 miles per hour. This incredible animal has been reported to leap more than 19 feet horizontally and up to 10 feet vertically. The Amur leopard is solitary. Nimble-footed and strong, it carries and hides unfinished kills so that they are not taken by other predators. It has been reported that some males stay with females after mating, and may even help with rearing the young. Several males sometimes follow and fight over a female. They live for 10-15 years, and in captivity up to 20 years. The Amur leopard is also known as the Far East leopard, the Manchurian leopard or the Korean leopard.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/878/images/hero_full/amur-leopard_99144569.jpg?1345532564"
    },
    {
        id: 2,
        name: "Black Rhino",
        status: "Critically Endangered",
        population: "Around 5,600",
        habitat: ["SemiDesert Savannah", "Woodlands", "Forests", "Wetlands"],
        location: "Coastal East Africa",
        description: "Black rhinos are the smaller of the two African rhino species. The most notable difference between white and black rhinos are their hooked upper lip. This distinguishes them from the white rhino, which has a square lip. Black rhinos are browsers rather than grazers, and their pointed lip helps them feed on leaves from bushes and trees. They have two horns, and occasionally a third, small posterior horn. Populations of black rhino declined dramatically in the 20th century at the hands of European hunters and settlers. Between 1960 and 1995, black rhino numbers dropped by a sobering 98%, to less than 2,500. Since then, the species has made a tremendous comeback from the brink of extinction. Thanks to persistent conservation efforts across Africa, black rhino numbers have doubled from their historic low 20 years ago to around 5,600 today. However, the black rhino is still considered critically endangered, and a lot of work remains to bring the numbers up to even a fraction of what it once was—and to ensure that it stays there. Wildlife crime—in this case, poaching and black-market trafficking of rhino horn—continues to plague the species and threaten its recovery.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/1376/images/hero_full/Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg?1345543661"
    },
    {
        id: 3,
        name: "Bornean Orangutan",
        status: "Critically Endangered",
        population: "About 104,700",
        habitat: ["Lowland rainforests", "Tropical, swamp, and mountain forests"],
        location: "Borneo, Sumatra",
        description: "Bornean orangutan populations have declined by more than 50% over the past 60 years, and the species' habitat has been reduced by at least 55% over the past 20 years. The Bornean orangutan differs in appearance from the Sumatran orangutan, with a broader face and shorter beard and also slightly darker in color. Three subspecies are recognized, each localized to different parts of the island: Northwest Bornean orangutans are the most threatened subspecies. Its habitat has been seriously affected by logging and hunting, and a mere 1,500 individuals or so remain. Many habitat patches in the area are small and fragmented. Northeast Bornean orangutans are the smallest in size and found in Sabah and eastern Kalimantan as far as the Mahakam River. Central Bornean orangutans are the subspecies with the most animals, with at least 35,000 individuals.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/1145/images/hero_full/Bornean_Orangutan_8.1.2012_hero_and_circle_XL_279107.jpg?1345587030"
    },
    {
        id: 4,
        name: "Cross River Gorilla",
        status: "Critically Endangered",
        population: "200 to 300 individuals",
        habitat: ["Forest"],
        location: "Congo Basin",
        description: "This subspecies of the western gorilla is very similar in appearance to the more numerous western lowland gorilla, but subtle differences can be found in the skull and tooth dimensions. Cross River gorillas live in a region populated by many humans who have encroached upon the gorilla’s territory—clearing forests for timber and to create fields for agriculture and livestock. Poaching occurs in the forests as well, and the loss of even a few of these gorillas has a detrimental effect on such a small population. Efforts to protect these animals are focused on securing the forests that house them. WWF and partners have worked with the governments of Cameroon and Nigeria to create a protected area for the Cross River gorilla that spans the border of these two nations.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/18410/images/hero_full/Medium_WW267197.jpg?1578345502"
    },
    {
        id: 5,
        name: "Eastern Lowland Gorilla",
        status: "Critically Endangered",
        population: "Unknown",
        habitat: ["Forest habitat"],
        location: "Congo Basin",
        description: "The eastern lowland gorilla—also known as Grauer’s gorilla—is the largest of the four gorilla subspecies. It is distinguished from other gorillas by its stocky body, large hands and short muzzle. Despite its size, eastern lowland gorillas subsist mainly on fruit and other herbaceous materials, just like other gorilla subspecies. Years of civil unrest in the Democratic Republic of Congo (DRC) have taken their toll on both the eastern lowland gorilla and the mountain gorilla. The eastern lowland gorilla makes its home in lowland tropical rainforests in the eastern DRC. In the last 50 years, its range has decreased from 8,100 square miles—about the size of the state of Massachusetts— to about 4,600 square miles today. This subspecies may now occupy only 13% of its historical range. There were nearly 17,000 eastern lowland gorillas in the mid-1990s but scientists estimate that the population has declined by more than 50% since then. An accurate accounting of the animals has been impossible for many years because of violence in the region. Throughout the unrest, the gorillas have been vulnerable to poaching, even in Kahuzi-Biega National Park, home to the largest population of protected eastern lowland gorillas. Rebels and poachers invaded the park and people set up illegal mines. But, with help from WWF and other organizations, park staff are reestablishing control over the land",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/1113/images/hero_full/eastern_lowland_gorilla_7.31.2012_hero_and_circle_HI_48384.jpg?1345586273"
    },
    {
        id: 6,
        name: "Hawksbill Turtle",
        status: "Critically Endangered",
        population: "Unknown",
        habitat: ["Oceans"],
        location: "Mesoamerican Reef, Coastal East Africa, Coral Triangle",
        description: "Hawksbills are named for their narrow, pointed beak. They also have a distinctive pattern of overlapping scales on their shells that form a serrated-look on the edges. These colored and patterned shells make them highly-valuable and commonly sold as 'tortoiseshell' in markets. Hawksbills are found mainly throughout the world's tropical oceans, predominantly in coral reefs. They feed mainly on sponges by using their narrow pointed beaks to extract them from crevices on the reef, but also eat sea anemones and jellyfish. Sea turtles are the living representatives of a group of reptiles that has existed on Earth and travelled our seas for the last 100 million years. They are a fundamental link in marine ecosystems and help maintain the health of coral reefs and sea grass beds.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/18418/images/hero_full/Medium_WW22305.jpg?1578407582"
    },
    {
        id: 7,
        name: "Javan Rhino",
        status: "Critically Endangered",
        population: "Around 60",
        habitat: ["Tropical forests"],
        location: "Ujung Kulon National Park, Java, Indonesia",
        description: "Javan rhinos are the most threatened of the five rhino species, with only around 60 individuals that live only in Ujung Kulon National Park in Java, Indonesia. Javan rhinos once lived throughout northeast India and Southeast Asia. Vietnam’s last Javan rhino was poached in 2010. This species is a dusky grey color and has a single horn of up to about 10 inches. Its skin has a number of loose folds, giving the appearance of armor plating. The Javan rhino is very similar in appearance to the closely-related greater one-horned rhinoceros, but has a much smaller head and less apparent skin folds.",
        image_url: ""
    },
    {
        id: 8,
        name: "Saola",
        status: "Critically Endangered",
        population: "Unknown",
        habitat: ["Evergreen forests"],
        location: "Greater Mekong",
        description: "The saola was discovered in May 1992 during a joint survey carried out by the Ministry of Forestry of Vietnam and WWF in north-central Vietnam. The team found a skull with unusual long, straight horns in a hunter's home and knew it was something extraordinary. The find proved to be the first large mammal new to science in more than 50 years and one of the most spectacular zoological discoveries of the 20th century. Saola (pronounced: sow-la) are recognized by two parallel horns with sharp ends, which can reach 20 inches in length and are found on both males and females. Meaning “spindle horns” in Vietnamese, they are a cousin of cattle but resemble an antelope. Saola have striking white markings on the face and large maxillary glands on the muzzle, which could be used to mark territory or attract mates. They are found only in the Annamite Mountains of Vietnam and Laos.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/156/images/hero_full/LG-Saola_Hero_image_%28c%29_David_Hulse_WWF_Canon.jpg?1345515547"
    },
    {
        id: 9,
        name: "Sumatran Elephant",
        status: "Critically Endangered",
        population: "About 2,400 - 2,800",
        habitat: ["Broadleaf tropical forests"],
        location: "Borneo, Sumatra",
        description: "Sumatran elephants feed on a variety of plants and deposit seeds wherever they go, contributing to a healthy forest ecosystem. They also share their lush forest habitat with several other endangered species, such as the Sumatran rhino, tiger, and orangutan, and countless other species that all benefit from an elephant population that thrives in a healthy habitat.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/1683/images/hero_full/MID_247517.jpg?1345600799"
    },
    {
        id: 10,
        name: "Sumatran Tiger",
        status: "Critically Endangered",
        population: "Less than 400",
        habitat: ["Tropical broadleaf evergreen forests", "Freshwater swamp forests"],
        location: "Sunda Island of Sumatra",
        description: "Sunda tigers are distinguished by heavy black stripes on their orange coats. The last of the Sunda island tigers—estimated to be fewer than 400 today—are holding on for survival in the remaining patches of forest on the island of Sumatra. Accelerating deforestation and rampant poaching mean this noble creature could end up extinct like its Javan and Balinese counterparts. In Indonesia, anyone caught hunting tigers could face jail time and steep fines. But despite increased efforts in tiger conservation—including strengthening law enforcement and antipoaching capacity—a substantial market remains in Sumatra and other parts of Asia for tiger parts and products. Sunda tigers are losing their habitat and prey fast, and poaching is an ever-present threat.",
        image_url: "https://c402277.ssl.cf1.rackcdn.com/photos/2090/images/hero_full/Sumatran-Tiger-Hero.jpg?1345559303"
    }
]

module.exports = endangeredAnimals; 