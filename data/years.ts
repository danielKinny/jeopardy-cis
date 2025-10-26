export type Clue = {
  value: number;
  question: string;
  answer: string;
  revealed?: boolean;
  image: string | null;
};

export type Category = {
  title: string;
  clues: Clue[];
};

export type YearData = {
  year: number;
  categories: Category[];
};

export const YEARS: YearData[] = [
  {
    year: 7,
    categories: [
      {
        title: "Advanced Algebra",
        clues: [
          { value: 100, question: "", answer: "x=-1", image: "advancedalg100" },
          { value: 200, question: "", answer: "x=2.25", image: "advancedalg200" },
          { value: 300, question: "", answer: "x=7", image: "advancedalg300" },
          { value: 400, question: "", answer: "Volume = 50000", image: "advancedalg400" },
          { value: 500, question: "", answer: "Coordinates at (4,-5)", image: "advancedalg500" },
        ],
      },
      {
        title: "Angles",
        clues: [
          { value: 100, question: "What is the sum of angles in a triangle?", answer: "180 Degrees", image: null },
          { value: 200, question: "", answer: "135 Degrees", image: "angles200" },
          { value: 300, question: "", answer: "90 Degrees", image: "angles300" },
          { value: 400, question: "", answer: "55 Degrees", image: "angles400" },
          { value: 500, question: "In a 4-sided shape, there are 4 angles, each being twice as much than the one before, what is the size of the largest angle?", answer: "192", image: null },
        ],
      },
      {
        title: "Fractions",
        clues: [
          { value: 100, question: "What is 1/2 + 1/4?", answer: "3/4", image: null },
          { value: 200, question: "Which is the larger fraction: 2/3 or 3/5?", answer: "2/3", image: null },
          { value: 300, question: "", answer: "3/50", image: "f300" },
          { value: 400, question: "", answer: "500g", image: "f400" },
          { value: 500, question: "", answer: "1727.5", image: "f500" },
        ],
      },
      {
        title: "Mental Maths",
        clues: [
          { value: 100, question: "", answer: "46", image: "mm100" },
          { value: 200, question: "", answer: "141", image: "mm200" },
          { value: 300, question: "", answer: "32", image: "mm300" },
          { value: 400, question: "", answer: "4 pound, 4 pence", image: "mm400" },
          { value: 500, question: "What is 2 to the power of 7", answer: "128", image: null },
        ],
      },
      {
        title: "Real-Life Maths",
        clues: [
          { value: 100, question: "A T-shirt costs £20. During a sale, the shop offers a 25% discount. How much do you pay after the discount?", answer: "£15", image: null },
          { value: 200, question: "A recipe for 4 people needs 300 g of pasta. How much pasta is needed for 10 people, if everyone eats the same amount?", answer: "750 g", image: null },
          { value: 300, question: "A train travels 120 km in 2 hours. If it keeps the same speed, how long will it take to travel 300 km?", answer: "5 hours", image: null },
          { value: 400, question: "A rectangular garden is 12 m long and 8 m wide. You want to build a path 1 m wide all around it. What is the area of the path?", answer: "44 m²", image: null },
          { value: 500, question: "A theme park charges a £5 entry fee plus £3 per ride. If Mia spends £29, how many rides did she go on?", answer: "8 rides", image: null },
        ],
      },
    ],
  },
  {
    year: 8,
    categories: [
      {
        title: "Algebra Adventures",
        clues: [
          { value: 100, question: "Simplify: 3x + 4x", answer: "7x", image: null },
          { value: 200, question: "Solve: 3x - 5 = 10", answer: "x = 5", image: null },
          { value: 300, question: "Expand and simplify: 2(3x - 4) - (x - 5)", answer: "5x - 3", image: null },
          { value: 400, question: "Solve: 5x + 2 = 3x + 10", answer: "x = 4", image: null },
          { value: 500, question: "Factorise completely: 3x² - 12x", answer: "3x(x - 4)", image: null },
        ],
      },
      {
        title: "Geometry Galore",
        clues: [
          { value: 100, question: "How many degrees are in a right angle?", answer: "90°", image: null },
          { value: 200, question: "Find the area of a triangle with base 10 cm and height 6 cm.", answer: "30 cm²", image: null },
          { value: 300, question: "A rectangle has a perimeter of 36 cm and length 10 cm. Find its width.", answer: "8 cm", image: null },
          { value: 400, question: "The radius of a circle is 4 cm. Find its area (π = 3.14).", answer: "50.24 cm²", image: null },
          { value: 500, question: "The ratio of sides of two similar triangles is 2:5. If the smaller triangle’s area is 8 cm², find the larger triangle’s area.", answer: "50 cm²", image: null },
        ],
      },
      {
        title: "Number Ninjas",
        clues: [
          { value: 100, question: "What is 25% of 80?", answer: "20", image: null },
          { value: 200, question: "Write 0.75 as a fraction in simplest form.", answer: "3/4", image: null },
          { value: 300, question: "Evaluate 2⁴ + 3².", answer: "25", image: null },
          { value: 400, question: "Find the least common multiple (LCM) of 6, 8, and 12.", answer: "24", image: null },
          { value: 500, question: "A number is divided by 3, then increased by 5 to give 17. What was the original number?", answer: "36", image: null },
        ],
      },
      {
        title: "Data Detectives",
        clues: [
          { value: 100, question: "What is the mode of 2, 4, 4, 6, 7?", answer: "4", image: null },
          { value: 200, question: "What is the mean of 3, 5, 7, 9, 11?", answer: "7", image: null },
          { value: 300, question: "Find the range of 10, 12, 8, 14, 9.", answer: "6", image: null },
          { value: 400, question: "The average of 5 numbers is 8. If four numbers are 5, 9, 11, and 7, find the missing number.", answer: "8", image: null },
          { value: 500, question: "A class of 20 students has an average height of 150 cm. If one new student joins, making the average 151 cm, what is the height of the new student?", answer: "171 cm", image: null },
        ],
      },
      {
        title: "Math Mysteries (Word Problems)",
        clues: [
          { value: 100, question: "A pencil costs £2. How much do 5 pencils cost?", answer: "£10", image: null },
          { value: 200, question: "Sarah has £60. She spends one-third. How much does she have left?", answer: "£40", image: null },
          { value: 300, question: "A car travels 180 km in 3 hours, then 120 km in 2 hours. What is its average speed?", answer: "60 km/h", image: null },
          { value: 400, question: "A rectangle’s length is twice its width. Its perimeter is 48 cm. Find its area.", answer: "144 cm²", image: null },
          { value: 500, question: "A shop sells pens for £1.50 each and notebooks for £2. If someone spends £19.50 on 12 items, how many pens did they buy?", answer: "9 pens, 3 notebooks", image: null },
        ],
      },
    ],
  },
  {
    year: 9,
    categories: [
      {
        title: "Computing",
        clues: [
          { value: 100, question: "The abbreviation for 'HyperText Markup Language'.", answer: "What is HTML?", image: null },
          { value: 200, question: "The language commonly used to style web pages.", answer: "What is CSS?", image: null },
          { value: 300, question: "A small piece of code stored in the browser to remember you.", answer: "What is a cookie?", image: null },
          { value: 400, question: "A popular programming language that shares its name with a coffee.", answer: "What is Java?", image: null },
          { value: 500, question: "The term for software designed to harm a computer.", answer: "What is malware?", image: null },
        ],
      },
      {
        title: "Music",
        clues: [
          { value: 100, question: "A musical symbol that raises a note by a semitone.", answer: "What is a sharp (#)?", image: null },
          { value: 200, question: "The number of beats in common time (4/4).", answer: "What is four?", image: null },
          { value: 300, question: "The instrument with 88 keys commonly used in classical music.", answer: "What is the piano?", image: null },
          { value: 400, question: "A group of singers performing together is called this.", answer: "What is a choir?", image: null },
          { value: 500, question: "The composer of the Ninth Symphony (Ode to Joy).", answer: "Who is Ludwig van Beethoven?", image: null },
        ],
      },
      {
        title: "Sports",
        clues: [
          { value: 100, question: "A sport played with a round ball on a 11-player team commonly called 'football' in most countries.", answer: "What is soccer/football?", image: null },
          { value: 200, question: "The Olympic event where athletes swim, cycle and run in sequence.", answer: "What is a triathlon?", image: null },
          { value: 300, question: "The number of players on a basketball team on court.", answer: "What is five?", image: null },
          { value: 400, question: "A sport played on ice with sticks and a puck.", answer: "What is ice hockey?", image: null },
          { value: 500, question: "The major tennis tournament played on grass in London.", answer: "What is Wimbledon?", image: null },
        ],
      },
    ],
  },
  {
    year: 10,
    categories: [
      {
        title: "Chemistry",
        clues: [
          { value: 100, question: "The chemical symbol for water's oxygen atom.", answer: "What is O?", image: null },
          { value: 200, question: "pH value less than 7 indicates this.", answer: "What is acidic?", image: null },
          { value: 300, question: "Table salt is also called this (chemical name).", answer: "What is sodium chloride?", image: null },
          { value: 400, question: "The periodic table element with atomic number 1.", answer: "What is hydrogen?", image: null },
          { value: 500, question: "The study of matter and its interactions.", answer: "What is chemistry?", image: null },
        ],
      },
      {
        title: "Art",
        clues: [
          { value: 100, question: "A famous painting of a smiling woman by Leonardo da Vinci.", answer: "What is the Mona Lisa?", image: null },
          { value: 200, question: "Primary colours include red, blue and this other colour.", answer: "What is yellow?", image: null },
          { value: 300, question: "A material artists use to paint on; often made of stretched fabric.", answer: "What is a canvas?", image: null },
          { value: 400, question: "The art movement featuring distorted shapes and surreal scenes (think Salvador Dalí).", answer: "What is surrealism?", image: null },
          { value: 500, question: "A technique using tiny dots to create an image (used by Seurat).", answer: "What is pointillism?", image: null },
        ],
      },
      {
        title: "Languages",
        clues: [
          { value: 100, question: "Hola is 'hello' in this language.", answer: "What is Spanish?", image: null },
          { value: 200, question: "Merci means 'thank you' in this language.", answer: "What is French?", image: null },
          { value: 300, question: "The language primarily spoken in Brazil.", answer: "What is Portuguese?", image: null },
          { value: 400, question: "The country where Japanese is the primary language.", answer: "What is Japan?", image: null },
          { value: 500, question: "The writing system of ancient Egypt using pictures.", answer: "What are hieroglyphs?", image: null },
        ],
      },
    ],
  },
  {
    year: 11,
    categories: [
      {
        title: "Politics",
        clues: [
          { value: 100, question: "The head of government of the UK is called this.", answer: "What is the Prime Minister?", image: null },
          { value: 200, question: "The process by which citizens choose their leaders.", answer: "What is an election?", image: null },
          { value: 300, question: "The written system that explains how a country is governed.", answer: "What is a constitution?", image: null },
          { value: 400, question: "The international body formed after World War II to promote peace (abbrev.).", answer: "What is the UN?", image: null },
          { value: 500, question: "A political system where the people vote on laws directly.", answer: "What is direct democracy?", image: null },
        ],
      },
      {
        title: "Economics",
        clues: [
          { value: 100, question: "Money paid by workers to employers for their labour.", answer: "What is wages/salary?", image: null },
          { value: 200, question: "When prices rise across the economy it's called this.", answer: "What is inflation?", image: null },
          { value: 300, question: "A market structure with one seller is called this.", answer: "What is a monopoly?", image: null },
          { value: 400, question: "Goods used up in production or consumption are called this (short).", answer: "What are consumables?", image: null },
          { value: 500, question: "The study of how societies use limited resources to produce goods.", answer: "What is economics?", image: null },
        ],
      },
      {
        title: "Philosophy",
        clues: [
          { value: 100, question: "Philosophy is the study of these fundamental questions about existence, knowledge, and values.", answer: "What is wisdom?", image: null },
          { value: 200, question: "Famous Greek philosopher who taught Alexander the Great.", answer: "Who is Aristotle?", image: null },
          { value: 300, question: "A branch of philosophy dealing with moral principles.", answer: "What is ethics?", image: null },
          { value: 400, question: "René Descartes' famous statement 'I think, therefore I am' in Latin begins with this word ('I think').", answer: "What is 'Cogito'?", image: null },
          { value: 500, question: "The study of knowledge and justified belief.", answer: "What is epistemology?", image: null },
        ],
      },
    ],
  },
];

export function getYear(year: number) {
  return YEARS.find((y) => y.year === year) ?? null;
}
