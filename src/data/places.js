import capCarbon from '../assets/img/cap-carbon.webp';
import tichy from '../assets/img/tichy.webp';
import gouraya from '../assets/img/gouraya.webp';
import picDesSinges from '../assets/img/pic-des-singes.webp';
import centre from '../assets/img/centre.webp';
import bordjMoussa from '../assets/img/bordj-moussa.webp';
import aokas from '../assets/img/aokas.webp';
import cliffs from '../assets/img/cliffs.webp';
import kefrida from '../assets/img/kefrida.webp';

export const CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'coast', label: 'Coast & beaches' },
    { id: 'nature', label: 'Nature & hiking' },
    { id: 'heritage', label: 'Heritage' },
];

export const places = [
    {
        slug: 'cap-carbon',
        title: 'Cap Carbon',
        category: 'nature',
        image: capCarbon,
        excerpt: 'A lighthouse perched 220 m above the sea, one of the highest in the Mediterranean.',
        facts: [['Lighthouse', 'since 1907'], ['Altitude', '220 m'], ['Best time', 'sunset']],
        description: [
            'Cape Carbon is a rocky headland north of the port of Béjaïa. In 1907 it was equipped with a lighthouse built 220 m above sea level, making it one of the highest lighthouses in the Mediterranean and one of the highest in the world standing on a natural site.',
            'The narrow road that climbs to the cape offers some of the most spectacular views of the gulf, with the Babor mountains on the horizon.',
        ],
    },
    {
        slug: 'tichy',
        title: 'Tichy Bay',
        category: 'coast',
        image: tichy,
        excerpt: 'The great seaside resort of the gulf, with long sandy beaches east of the city.',
        facts: [['Distance', '≈ 17 km from Béjaïa'], ['Type', 'sandy beaches'], ['Season', 'June – September']],
        description: [
            'Tichy is a commune of the wilaya of Béjaïa, in the Kabylia region. Besides the town centre, it is made up of the two ârchs of Aït Amrous and Aït Melloul.',
            'It is one of the most important seaside resorts of the Algerian coast and welcomes a large number of visitors every summer.',
        ],
    },
    {
        slug: 'yemma-gouraya',
        title: 'Yemma Gouraya',
        category: 'nature',
        image: gouraya,
        excerpt: 'The mountain that watches over the city, crowned by a fort at 660 m.',
        facts: [['Altitude', '660 m'], ['Status', 'national park'], ['Hike', 'from the city centre']],
        description: [
            'Yemma Gouraya, or Lalla Gouraya, is the mountain overlooking Béjaïa at 660 m above sea level. It is said to be the resting place of the patron saint of the city, although no archaeological evidence confirms it. A fort stands at the summit and the whole massif is part of a protected area.',
            'According to tradition, Yemma Gouraya was the sister of Yemma Mezghitane, patron saint of Jijel, of Yemma Timezrit and of Yemma Kouda, patron saint of Makouda.',
        ],
    },
    {
        slug: 'pic-des-singes',
        title: 'Monkey Peak',
        category: 'nature',
        image: picDesSinges,
        excerpt: 'Home of the Barbary macaque, the last macaque species living in Africa.',
        facts: [['Wildlife', 'Barbary macaque'], ['Area', 'Cap Carbon'], ['Tip', "don't feed the monkeys"]],
        description: [
            'The Pic des Singes (Monkey Peak) rises north-west of Béjaïa, in the Cap Carbon area of the Tell Atlas, right above the Mediterranean.',
            'The mountain is a habitat of the endangered Barbary macaque (Macaca sylvanus), the only surviving species of its genus in Africa. In prehistoric times these primates were spread over a much wider area than today.',
        ],
    },
    {
        slug: 'old-town',
        title: 'Béjaïa old town',
        category: 'heritage',
        image: centre,
        excerpt: 'Saldae, Hammadid capital, where Fibonacci learned the Arabic numerals.',
        facts: [['Roman name', 'Saldae'], ['Golden age', '11th – 13th c.'], ['Must see', 'Bab El Bahr']],
        description: [
            'Known as Saldae in Roman times, the city became the capital of the Vandal kingdom before being Islamised in the 8th century. A modest Berber town, it rose to a prestigious capital under the Hammadids in the 11th century and became a religious, commercial and scholarly centre of the Mediterranean. After an Almohad interlude, it was once again the capital of a branch of the Hafsids.',
            'Famous in Europe for its beeswax candles — to which it gave its name in French, « bougie » — Béjaïa also played a key role in spreading Arabic numerals and mathematical knowledge to the West. In the Middle Ages, scholars such as Raymond Lull, Fibonacci and Ibn Khaldun lived and studied there.',
        ],
    },
    {
        slug: 'bordj-moussa',
        title: 'Bordj Moussa',
        category: 'heritage',
        image: bordjMoussa,
        excerpt: 'A 16th-century Spanish fort turned museum, from prehistory to today.',
        facts: [['Built', '16th century'], ['Museum', 'since 1989'], ['Location', 'old town']],
        description: [
            'The Bordj Moussa museum is a Spanish fort built in the 16th century, restored and transformed several times since. It served as a military fort during the Ottoman period, then as a prison under the name of Fort Barral during colonisation.',
            'A museum since 1989, it holds collections ranging from prehistory to the contemporary era.',
        ],
    },
    {
        slug: 'aokas-grotto',
        title: 'Aokas Grotto',
        category: 'coast',
        image: aokas,
        excerpt: 'The “marvellous caves”, found by chance while digging a road tunnel.',
        facts: [['Discovered', '1962'], ['Open since', '1985'], ['Inside', '16 – 18 °C']],
        description: [
            'This coastal town is home to one of the most beautiful caves in the country. It was discovered by chance in 1962 during the digging of a tunnel through the rock, and only opened to the public in 1985.',
            'The underground treasure keeps a constant temperature of around 16 to 18 °C. A guide trained in the history of the site leads visitors along the 60-metre gallery.',
        ],
    },
    {
        slug: 'aiguades',
        title: 'Les Aiguades',
        category: 'coast',
        image: cliffs,
        excerpt: 'A turquoise cove where sailors have drawn fresh water since antiquity.',
        facts: [['Name', '“watering place”'], ['History', 'Phoenician trading post'], ['Access', 'Cap Carbon road']],
        description: [
            'The word “Aiguades” refers to a place where ships take on fresh water. A spring still flows here, and navigators have stopped at it since antiquity. The French later installed a pump whose pipe ran along the Corniche road and Sidi Yahia to supply part of the city with drinking water.',
            'The bay has seen many civilisations: Phoenicians and Carthaginians set up a trading post here to trade with the local population, and tombs carved into huge rocks are still visible. This is also where the Spanish landed in 1510 to take the city.',
        ],
    },
    {
        slug: 'kefrida-waterfalls',
        title: 'Kefrida Waterfalls',
        category: 'nature',
        image: kefrida,
        excerpt: 'A tall waterfall in a green gorge, a cool escape inland from the coast.',
        facts: [['Commune', 'Taskriout'], ['Type', 'waterfall & gorge'], ['Best time', 'spring']],
        description: [
            'In the east of the wilaya, near Taskriout, the Kefrida waterfalls drop into a green, rocky gorge. The site is a favourite for families and hikers looking for shade and fresh water away from the beaches.',
            'The falls are at their fullest in spring, after the winter rains.',
        ],
    },
];

export const findPlace = (slug) => places.find((p) => p.slug === slug);
