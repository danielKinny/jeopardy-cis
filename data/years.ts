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
          { value: 100, question: "", answer: "x=-1", image: "/y7/advancedalg100.png" },
          { value: 200, question: "", answer: "x=2.25", image: "/y7/advancedalg200.png" },
          { value: 300, question: "", answer: "x=7", image: "/y7/advancedalg300.png" },
          { value: 400, question: "", answer: "Volume = 50000", image: "/y7/advancedalg400.png" },
          { value: 500, question: "", answer: "Coordinates at (4,-5)", image: "/y7/advancedalg500.png" },
        ],
      },
      {
        title: "Angles",
        clues: [
          { value: 100, question: "What is the sum of angles in a triangle?", answer: "180 Degrees", image: null },
          { value: 200, question: "", answer: "90 Degrees", image: "/y7/angles200.png" },
          { value: 300, question: "", answer: "135 Degrees", image: "/y7/angles300.png" },
          { value: 400, question: "", answer: "55 Degrees", image: "/y7/angles400.png" },
          { value: 500, question: "In a 4-sided shape, there are 4 angles, each being twice as much than the one before, what is the size of the largest angle?", answer: "192", image: null },
        ],
      },
      {
        title: "Fractions",
        clues: [
          { value: 100, question: "What is 1/2 + 1/4?", answer: "3/4", image: null },
          { value: 200, question: "Which is the larger fraction: 2/3 or 3/5?", answer: "2/3", image: null },
          { value: 300, question: "", answer: "3/50", image: "/y7/f300.png" },
          { value: 400, question: "", answer: "500g", image: "/y7/f400.png" },
          { value: 500, question: "", answer: "1727.5", image: "/y7/f500.png" },
        ],
      },
      {
        title: "Mental Maths",
        clues: [
          { value: 100, question: "", answer: "46", image: "/y7/mm100.png" },
          { value: 200, question: "", answer: "141", image: "/y7/mm200.png" },
          { value: 300, question: "", answer: "32", image: "/y7/mm300.png" },
          { value: 400, question: "", answer: "4 pound, 4 pence", image: "/y7/mm400.png" },
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
        title: "Trigonometry",
        clues: [
          { value: 100, question: "In a right-angled triangle the side opposite angle A is 5 cm and the hypotenuse is 13 cm. Find sin A.", answer: "sin A = 5/13 ≈ 0.3846", image: null },
          { value: 200, question: "In a right triangle angle B = 40° and the hypotenuse = 12 cm. Find the side opposite angle B.", answer: "Opposite = 12 × sin 40° ≈ 7.7 cm", image: null },
          { value: 300, question: "A ramp rises 1.5 m vertically over a horizontal distance of 3.2 m. Find the angle of elevation of the ramp.", answer: "tan θ = 1.5/3.2 ≈ 0.46875 → θ ≈ 25.1°", image: null },
          { value: 400, question: "In right-angled triangle ABC, AC = 10 cm, BC = 6 cm. Find angle A and side AB.", answer: "cos A = 6/10 = 0.6 → A ≈ 53.1°; AB = √(10² − 6²) = 8 cm", image: null },
          { value: 500, question: "In triangle XYZ (not right-angled), side x = 7 cm is opposite X = 40°, and side y = 10 cm is opposite Y. Find angle Y.", answer: "sin Y = (10 × sin 40°)/7 ≈ 0.9183 → Y ≈ 66.9°", image: null },
        ],
      },
      {
        title: "Algebra",
        clues: [
          { value: 100, question: "Simplify: 4a + 3b - 2a + 5b", answer: "2a + 8b", image: null },
          { value: 200, question: "Evaluate 2x^2 − 3y when x = 3 and y = 4.", answer: "2(3^2) - 3(4) = 18 - 12 = 6", image: null },
          { value: 300, question: "Expand: (x + 4)(x - 5)", answer: "x^2 - x - 20", image: null },
          { value: 400, question: "Solve: 3(2x − 5) = 9x − 15", answer: "6x - 15 = 9x - 15 → x = 0", image: null },
          { value: 500, question: "The perimeter of a rectangle is 48 cm. Its length is 3 times the width. Find length and width.", answer: "Width = 6 cm; Length = 18 cm", image: null },
        ],
      },
      {
        title: "Quadratics",
        clues: [
          { value: 100, question: "Which of these is a quadratic expression? a) 3x + 2  b) 2x^2 − 5x + 1  c) 7x^3 − 1", answer: "b) 2x^2 − 5x + 1", image: null },
          { value: 200, question: "Expand: (x − 6)^2", answer: "x^2 − 12x + 36", image: null },
          { value: 300, question: "Factorise: x^2 − 7x + 10", answer: "(x − 5)(x − 2)", image: null },
          { value: 400, question: "Solve: x^2 − 3x − 10 = 0", answer: "(x − 5)(x + 2) = 0 → x = 5 or x = −2", image: null },
          { value: 500, question: "Solve (no calculator): 2x^2 − 5x + 1 = 0", answer: "x = (5 ± √17)/4", image: null },
        ],
      },
      {
        title: "Probability",
        clues: [
          { value: 100, question: "What is the probability of rolling an even number on a fair die?", answer: "3/6 = 1/2", image: null },
          { value: 200, question: "A spinner has 5 equal sections (1–5). What is the probability of not getting a 3?", answer: "4/5 = 0.8", image: null },
          { value: 300, question: "A coin is flipped and a die rolled. What's the probability of getting heads and a 4?", answer: "1/2 × 1/6 = 1/12", image: null },
          { value: 400, question: "A bag contains 3 red, 2 blue, 1 green marble. What is P(red or blue)?", answer: "(3 + 2)/6 = 5/6", image: null },
          { value: 500, question: "A fair coin is flipped twice. Find the probability of getting at least one tail.", answer: "1 - P(HH) = 1 - 1/4 = 3/4", image: null },
        ],
      },
      {
        title: "Proportionality",
        clues: [
          { value: 100, question: "Simplify the ratio 12 : 18", answer: "2 : 3", image: null },
          { value: 200, question: "If y ∝ x and when x = 5, y = 20. Find y when x = 8.", answer: "k = 4 → y = 4 × 8 = 32", image: null },
          { value: 300, question: "If y ∝ 1/x and when x = 4, y = 10. Find y when x = 8.", answer: "k = 40 → y = 40/8 = 5", image: null },
          { value: 400, question: "A recipe for 8 cookies uses 200 g of flour. How much for 12 cookies?", answer: "200 × (12/8) = 300 g", image: null },
          { value: 500, question: "A car travels 120 km in 2 hours. How long to travel the same distance at 180 km/h?", answer: "Time = distance/speed = 120/180 = 2/3 h = 40 minutes", image: null },
        ],
      },
    ],
  },
  {
    year: 10,
    categories: [
      {
        title: "Mensuration",
        clues: [
          { value: 100, question: "", answer: "22", image: "/y10/mensuration100.jpg" },
          { value: 200, question: "", answer: "18", image: "/y10/mensuration200.jpg" },
          { value: 300, question: "", answer: "51", image: "/y10/mensuration300.jpg" },
          { value: 400, question: "", answer: "26.1", image: "/y10/mensuration400.jpg" },
          { value: 500, question: "", answer: "10.67", image: "/y10/mensuration500.jpg" },
        ],
      },
      {
        title: "Trigonometry",
        clues: [
          { value: 100, question: "", answer: "z=10.1", image: "/y10/trigonometry100.jpg" },
          { value: 200, question: "", answer: "94.1", image: "/y10/trigonometry200.jpg" },
          { value: 300, question: "", answer: "46.3", image: "/y10/trigonometry300.jpg" },
          { value: 400, question: "", answer: "8.6", image: "/y10/trigonometry400.jpg" },
          { value: 500, question: "", answer: "7.94", image: "/y10/trigonometry500.jpg" },
        ],
      },
      {
        title: "Algebra",
        clues: [
          { value: 100, question: "Simplify completely: 5(2x - 3) - 3(4x - 5)", answer: "-2x", image: null },
          { value: 200, question: "Solve for x: 4(3x - 5) - 2(x + 7) = 3x + 1", answer: "x = 5", image: null },
          { value: 300, question: "Simplify fully: (3x - 6)/6 + (x + 2)/3", answer: "(5x - 2)/6", image: null },
          { value: 400, question: "Solve for x: (2x - 3)/5 + (x + 4)/3 = 4", answer: "x = 49/11 (≈ 4.45)", image: null },
          { value: 500, question: "The product of two consecutive integers is 30. Form and solve an equation to find the integers.", answer: "Integers are (-6, -5) or (5, 6)", image: null },
        ],
      },
      {
        title: "Geometry",
        clues: [
          { value: 100, question: "A triangle has sides 7 cm, 24 cm, and 25 cm. Verify if it’s a right triangle, then find its area.", answer: "Yes (7²+24²=25²). Area = 84 cm²", image: null },
          { value: 200, question: "A regular polygon has each interior angle 150°. Find the number of sides.", answer: "12", image: null },
          { value: 300, question: "A circle has radius 9 cm. Find the length of an arc with a central angle of 100°, and the area of the corresponding sector (π = 3.14).", answer: "Arc = 15.7 cm; Area = 70.7 cm²", image: null },
          { value: 400, question: "In triangle ABC, AB = 10 cm, AC = 7 cm, and ∠A = 65°. Find the length of BC using the cosine rule.", answer: "BC ≈ 9.48 cm", image: null },
          { value: 500, question: "A circle has a chord AB = 12 cm and radius r = 10 cm. Find the distance from the centre of the circle to the chord.", answer: "8 cm", image: null },
        ],
      },
      {
        title: "Puzzles",
        clues: [
          { value: 100, question: "If you have 30 red socks, 20 white socks, and 10 blue socks, how many will you pick to get at least 1 matching pair without looking?", answer: "4", image: null },
          { value: 200, question: "Using only addition, combine eight 8s to make the number 1,000.", answer: "8 + 8 + 8 + 88 + 888 = 1000", image: null },
          { value: 300, question: "Image puzzle (answer provided)", answer: "179", image: "puzzle300" },
          { value: 400, question: "Image puzzle (answer provided)", answer: "The number on the left multiplied by 5 gives the sum of the other 2", image: "puzzle400" },
          { value: 500, question: "How can you make 720 using exactly six zeros and any mathematical operators? Hint: Use the '!' operator (0! = 1)", answer: "(0!+0!+0!+0!+0!+0!)! = 720", image: null },
        ],
      },
    ],
  },
  {
    year: 11,
    categories: [
      {
        title: "Algebra",
        clues: [
          { value: 100, question: "Simplify: (3x + 5x - 2)", answer: "8x - 2", image: null },
          { value: 200, question: "Expand: (x + 3)(x + 5)", answer: "x^2 + 8x + 15", image: null },
          { value: 300, question: "Factorise: x^2 + 7x + 10", answer: "(x + 5)(x + 2)", image: null },
          { value: 400, question: "Solve for x: 3x - 4 = 11", answer: "x = 5", image: null },
          { value: 500, question: "Solve: 2x^2 - 5x - 3 = 0", answer: "x = 3 or x = -1/2", image: null },
        ],
      },
      {
        title: "Geometry",
        clues: [
          { value: 100, question: "Find the area of a triangle with base 8 cm and height 5 cm.", answer: "1/2 × 8 × 5 = 20 cm²", image: null },
          { value: 200, question: "The circumference of a circle is 31.4 cm. Find its radius (π = 3.14).", answer: "r = 31.4 / (2π) = 5 cm", image: null },
          { value: 300, question: "A regular hexagon has side length 6 cm. Find its perimeter.", answer: "6 × 6 = 36 cm", image: null },
          { value: 400, question: "In a right-angled triangle one side is 9 cm and the hypotenuse is 15 cm. Find the other side.", answer: "√(15^2 - 9^2) = 12 cm", image: null },
          { value: 500, question: "Find the area of a sector with radius 7 cm and angle 120°.", answer: "(120/360) × π × 7^2 = 51.3 cm²", image: null },
        ],
      },
      {
        title: "Trigonometry",
        clues: [
          { value: 100, question: "Find sin(30°)", answer: "0.5", image: null },
          { value: 200, question: "In a right triangle tan(θ) = 3/4. Find θ.", answer: "θ ≈ 36.9°", image: null },
          { value: 300, question: "A ladder 5 m long leans against a wall at 70°. How high up the wall does it reach?", answer: "5 × sin(70°) ≈ 4.7 m", image: null },
          { value: 400, question: "Solve for x: sin(x) = 0.5, 0° ≤ x ≤ 360°.", answer: "x = 30°, 150°", image: null },
          { value: 500, question: "Find the area of a triangle given a = 10, b = 12, C = 45°.", answer: "1/2 × 10 × 12 × sin(45°) ≈ 42.4 cm²", image: null },
        ],
      },
      {
        title: "Statistics & Probability",
        clues: [
          { value: 100, question: "Find the mean of 2, 4, 6, 8, 10.", answer: "(2+4+6+8+10)/5 = 6", image: null },
          { value: 200, question: "A die is rolled. What is the probability of getting an even number?", answer: "3/6 = 1/2", image: null },
          { value: 300, question: "If P(A)=0.3 and P(B)=0.5 and A and B are independent, find P(A and B).", answer: "0.3 × 0.5 = 0.15", image: null },
          { value: 400, question: "Scores: 10, 15, 20, 20, 25. Find the mode and median.", answer: "Mode = 20; Median = 20", image: null },
          { value: 500, question: "A bag has 3 red, 5 blue and 2 green balls. Probability a randomly chosen ball is not blue?", answer: "(3+2)/10 = 1/2", image: null },
        ],
      },
      {
        title: "Graphs & Functions",
        clues: [
          { value: 100, question: "Plot y = 2x + 1. Describe intercept and gradient.", answer: "Gradient = 2; y-intercept = 1", image: null },
          { value: 200, question: "Find the gradient of the line through (2,3) and (6,11).", answer: "m = (11 - 3)/(6 - 2) = 2", image: null },
          { value: 300, question: "Find the equation of the line through (0, -2) with gradient 4.", answer: "y = 4x - 2", image: null },
          { value: 400, question: "Sketch y = x^2 - 4x + 3. Describe roots and vertex.", answer: "Parabola up; roots x = 1, 3; vertex at (2, -1)", image: null },
          { value: 500, question: "Find the vertex of y = x^2 - 6x + 8.", answer: "Vertex at (3, -1)", image: null },
        ],
      },
    ],
  },
];

export function getYear(year: number) {
  return YEARS.find((y) => y.year === year) ?? null;
}
