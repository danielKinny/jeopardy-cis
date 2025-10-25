export type Clue = {
  value: number;
  question: string;
  answer: string;
  revealed?: boolean;
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
        title: "Animals",
        clues: [
          { value: 100, question: "The largest land animal.", answer: "What is an elephant?" },
          { value: 200, question: "A baby cat is called this.", answer: "What is a kitten?" },
          { value: 300, question: "This bird cannot fly and lives in Antarctica.", answer: "What is a penguin?" },
          { value: 400, question: "The fastest land animal.", answer: "What is a cheetah?" },
          { value: 500, question: "This mammal lays eggs.", answer: "What is a platypus?" },
        ],
      },
      {
        title: "Math",
        clues: [
          { value: 100, question: "2 + 2 = ?", answer: "What is 4?" },
          { value: 200, question: "10 x 5 = ?", answer: "What is 50?" },
          { value: 300, question: "Half of 90.", answer: "What is 45?" },
          { value: 400, question: "12 x 12 = ?", answer: "What is 144?" },
          { value: 500, question: "The value of pi rounded to two decimals.", answer: "What is 3.14?" },
        ],
      },
      {
        title: "Geography",
        clues: [
          { value: 100, question: "The capital of France.", answer: "What is Paris?" },
          { value: 200, question: "The largest ocean on Earth.", answer: "What is the Pacific Ocean?" },
          { value: 300, question: "The continent that contains Egypt.", answer: "What is Africa?" },
          { value: 400, question: "Country known for maple syrup and hockey.", answer: "What is Canada?" },
          { value: 500, question: "The longest river in the world (commonly cited).", answer: "What is the Nile?" },
        ],
      },
    ],
  },
  {
    year: 8,
    categories: [
      {
        title: "Science",
        clues: [
          { value: 100, question: "The gas we breathe that is essential for life.", answer: "What is oxygen?" },
          { value: 200, question: "H2O is the chemical formula for this.", answer: "What is water?" },
          { value: 300, question: "The centre of an atom.", answer: "What is the nucleus?" },
          { value: 400, question: "Process plants use to make food using sunlight.", answer: "What is photosynthesis?" },
          { value: 500, question: "The force that pulls objects toward Earth.", answer: "What is gravity?" },
        ],
      },
      {
        title: "History",
        clues: [
          { value: 100, question: "The ship that carried the Pilgrims to America in 1620.", answer: "What is the Mayflower?" },
          { value: 200, question: "The wall built to divide East and West Germany.", answer: "What is the Berlin Wall?" },
          { value: 300, question: "Leader of the Roman Empire at the time of Jesus' birth (emperor).", answer: "What is Augustus?" },
          { value: 400, question: "The year the United States declared independence.", answer: "What is 1776?" },
          { value: 500, question: "The war between the North and South in the United States from 1861–1865.", answer: "What is the American Civil War?" },
        ],
      },
      {
        title: "English",
        clues: [
          { value: 100, question: "A word that means the opposite of 'cold'.", answer: "What is 'hot'?" },
          { value: 200, question: "The author of 'Romeo and Juliet'.", answer: "Who is William Shakespeare?" },
          { value: 300, question: "A noun that refers to a place where books are kept.", answer: "What is a library?" },
          { value: 400, question: "A three-syllable word for a very large animal (elephant is one).", answer: "What is 'elephant'?" },
          { value: 500, question: "The literary device that gives human traits to non-human things.", answer: "What is personification?" },
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
          { value: 100, question: "The abbreviation for 'HyperText Markup Language'.", answer: "What is HTML?" },
          { value: 200, question: "The language commonly used to style web pages.", answer: "What is CSS?" },
          { value: 300, question: "A small piece of code stored in the browser to remember you.", answer: "What is a cookie?" },
          { value: 400, question: "A popular programming language that shares its name with a coffee.", answer: "What is Java?" },
          { value: 500, question: "The term for software designed to harm a computer.", answer: "What is malware?" },
        ],
      },
      {
        title: "Music",
        clues: [
          { value: 100, question: "A musical symbol that raises a note by a semitone.", answer: "What is a sharp (#)?" },
          { value: 200, question: "The number of beats in common time (4/4).", answer: "What is four?" },
          { value: 300, question: "The instrument with 88 keys commonly used in classical music.", answer: "What is the piano?" },
          { value: 400, question: "A group of singers performing together is called this.", answer: "What is a choir?" },
          { value: 500, question: "The composer of the Ninth Symphony (Ode to Joy).", answer: "Who is Ludwig van Beethoven?" },
        ],
      },
      {
        title: "Sports",
        clues: [
          { value: 100, question: "A sport played with a round ball on a 11-player team commonly called 'football' in most countries.", answer: "What is soccer/football?" },
          { value: 200, question: "The Olympic event where athletes swim, cycle and run in sequence.", answer: "What is a triathlon?" },
          { value: 300, question: "The number of players on a basketball team on court.", answer: "What is five?" },
          { value: 400, question: "A sport played on ice with sticks and a puck.", answer: "What is ice hockey?" },
          { value: 500, question: "The major tennis tournament played on grass in London.", answer: "What is Wimbledon?" },
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
          { value: 100, question: "The chemical symbol for water's oxygen atom.", answer: "What is O?" },
          { value: 200, question: "pH value less than 7 indicates this.", answer: "What is acidic?" },
          { value: 300, question: "Table salt is also called this (chemical name).", answer: "What is sodium chloride?" },
          { value: 400, question: "The periodic table element with atomic number 1.", answer: "What is hydrogen?" },
          { value: 500, question: "The study of matter and its interactions.", answer: "What is chemistry?" },
        ],
      },
      {
        title: "Art",
        clues: [
          { value: 100, question: "A famous painting of a smiling woman by Leonardo da Vinci.", answer: "What is the Mona Lisa?" },
          { value: 200, question: "Primary colours include red, blue and this other colour.", answer: "What is yellow?" },
          { value: 300, question: "A material artists use to paint on; often made of stretched fabric.", answer: "What is a canvas?" },
          { value: 400, question: "The art movement featuring distorted shapes and surreal scenes (think Salvador Dalí).", answer: "What is surrealism?" },
          { value: 500, question: "A technique using tiny dots to create an image (used by Seurat).", answer: "What is pointillism?" },
        ],
      },
      {
        title: "Languages",
        clues: [
          { value: 100, question: "Hola is 'hello' in this language.", answer: "What is Spanish?" },
          { value: 200, question: "Merci means 'thank you' in this language.", answer: "What is French?" },
          { value: 300, question: "The language primarily spoken in Brazil.", answer: "What is Portuguese?" },
          { value: 400, question: "The country where Japanese is the primary language.", answer: "What is Japan?" },
          { value: 500, question: "The writing system of ancient Egypt using pictures.", answer: "What are hieroglyphs?" },
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
          { value: 100, question: "The head of government of the UK is called this.", answer: "What is the Prime Minister?" },
          { value: 200, question: "The process by which citizens choose their leaders.", answer: "What is an election?" },
          { value: 300, question: "The written system that explains how a country is governed.", answer: "What is a constitution?" },
          { value: 400, question: "The international body formed after World War II to promote peace (abbrev.).", answer: "What is the UN?" },
          { value: 500, question: "A political system where the people vote on laws directly.", answer: "What is direct democracy?" },
        ],
      },
      {
        title: "Economics",
        clues: [
          { value: 100, question: "Money paid by workers to employers for their labour.", answer: "What is wages/salary?" },
          { value: 200, question: "When prices rise across the economy it's called this.", answer: "What is inflation?" },
          { value: 300, question: "A market structure with one seller is called this.", answer: "What is a monopoly?" },
          { value: 400, question: "Goods used up in production or consumption are called this (short).", answer: "What are consumables?" },
          { value: 500, question: "The study of how societies use limited resources to produce goods.", answer: "What is economics?" },
        ],
      },
      {
        title: "Philosophy",
        clues: [
          { value: 100, question: "Philosophy is the study of these fundamental questions about existence, knowledge, and values.", answer: "What is wisdom?" },
          { value: 200, question: "Famous Greek philosopher who taught Alexander the Great.", answer: "Who is Aristotle?" },
          { value: 300, question: "A branch of philosophy dealing with moral principles.", answer: "What is ethics?" },
          { value: 400, question: "René Descartes' famous statement 'I think, therefore I am' in Latin begins with this word ('I think').", answer: "What is 'Cogito'?" },
          { value: 500, question: "The study of knowledge and justified belief.", answer: "What is epistemology?" },
        ],
      },
    ],
  },
];

export function getYear(year: number) {
  return YEARS.find((y) => y.year === year) ?? null;
}
