export const quizData = [
    {
        topic: "DSA",
        emoji: "💻",
        description: "Core concepts of Data Structures and Algorithms",
        image: "https://media.licdn.com/dms/image/v2/C5112AQFeyx3ZT4vbsg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1536713922857?e=2147483647&v=beta&t=sbXdG-Zkl05czvNaTssYGG2pj4mS53DHaJTQ9QR-I-4",
        questions: [
            {
                question: "Which data structure uses LIFO?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                correct: "Stack"
            },
            {
                question: "Which algorithm is used to find the shortest path?",
                options: ["Merge Sort", "Dijkstra's", "Binary Search", "DFS"],
                correct: "Dijkstra's"
            },
            {
                question: "What’s the time complexity of Binary Search?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: "O(log n)"
            },
            {
                question: "Which data structure is best for BFS?",
                options: ["Stack", "Queue", "Heap", "Tree"],
                correct: "Queue"
            },
            {
                question: "Which sorting algorithm is the fastest on average?",
                options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
                correct: "Quick Sort"
            }
        ]
    },
    {
        topic: "Logic Gates",
        emoji: "🔌",
        description: "Fundamentals of digital logic gates",
        image: "https://i.ytimg.com/vi/_SXQgOl7Yxw/maxresdefault.jpg",
        questions: [
            {
                question: "Which gate gives high output only when all inputs are high?",
                options: ["OR", "AND", "NOT", "XOR"],
                correct: "AND"
            },
            {
                question: "What is the output of a NOT gate when input is 1?",
                options: ["0", "1", "Depends", "Undefined"],
                correct: "0"
            },
            {
                question: "Which gate outputs 1 if inputs are different?",
                options: ["NAND", "OR", "XOR", "AND"],
                correct: "XOR"
            },
            {
                question: "Which gate is called the universal gate?",
                options: ["AND", "OR", "NAND", "XOR"],
                correct: "NAND"
            },
            {
                question: "What is the output of an OR gate with inputs 0 and 1?",
                options: ["0", "1", "2", "Undefined"],
                correct: "1"
            }
        ]
    },
    {
        topic: "Electronics",
        emoji: "📟",
        description: "Explore the basics of electronics",
        image: "https://newtondesk.com/wp-content/uploads/2020/03/digital-electronics-handwritten-study-notes.jpg",
        questions: [
            {
                question: "Which component stores electrical energy?",
                options: ["Resistor", "Capacitor", "Inductor", "Diode"],
                correct: "Capacitor"
            },
            {
                question: "What does LED stand for?",
                options: ["Light Emitting Diode", "Low Energy Device", "Linear Emission Diode", "Logic Enabled Device"],
                correct: "Light Emitting Diode"
            },
            {
                question: "Which device converts AC to DC?",
                options: ["Amplifier", "Oscillator", "Rectifier", "Modulator"],
                correct: "Rectifier"
            },
            {
                question: "Ohm is the unit of?",
                options: ["Current", "Resistance", "Voltage", "Power"],
                correct: "Resistance"
            },
            {
                question: "Which law states V = IR?",
                options: ["Ohm's Law", "Faraday's Law", "Kirchhoff's Law", "Ampere's Law"],
                correct: "Ohm's Law"
            }
        ]
    },
    {
        topic: "Chemistry",
        emoji: "⚗️",
        description: "Test your chemistry concepts",
        image: "https://i.pinimg.com/736x/ae/c1/90/aec190b5c9ada2bc430bfa35de24efd9.jpg",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["O2", "H2O", "CO2", "HO2"],
                correct: "H2O"
            },
            {
                question: "Which gas is used in balloons to make them float?",
                options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
                correct: "Helium"
            },
            {
                question: "What is the pH of a neutral solution?",
                options: ["0", "7", "14", "1"],
                correct: "7"
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon"],
                correct: "Hydrogen"
            },
            {
                question: "Which acid is found in lemon?",
                options: ["Citric acid", "Sulfuric acid", "Hydrochloric acid", "Acetic acid"],
                correct: "Citric acid"
            }
        ]
    },

    {
        topic: "Physics",
        emoji: "🧲",
        description: "Basics of classical mechanics",
        image: "https://media.istockphoto.com/id/893460738/vector/physics-background.jpg?s=612x612&w=0&k=20&c=MufaWFbaI2IF5Tj2qNO8SHxEXmr7Sw2RNQ0rWLkcFck=",
        questions: [
            {
                question: "What is Newton's First Law also known as?",
                options: ["Inertia", "Gravity", "Friction", "Force"],
                correct: "Inertia"
            },
            {
                question: "Which force pulls objects toward Earth?",
                options: ["Magnetism", "Gravity", "Friction", "Electricity"],
                correct: "Gravity"
            },
            {
                question: "What unit is force measured in?",
                options: ["Watt", "Joule", "Newton", "Pascal"],
                correct: "Newton"
            },
            {
                question: "What is the speed of light?",
                options: ["300,000 m/s", "300,000 km/h", "300,000 km/s", "3,000 km/s"],
                correct: "300,000 km/s"
            },
            {
                question: "Which law relates force, mass and acceleration?",
                options: ["Ohm's Law", "Hooke's Law", "Newton’s 2nd Law", "Kepler’s Law"],
                correct: "Newton’s 2nd Law"
            }
        ]
    },

    {
        topic: "Biology",
        emoji: "🧬",
        description: "Explore the science of life",
        image: "https://i.pinimg.com/736x/1e/a0/4f/1ea04f51ae0d1b031baec103be8b2713.jpg",
        questions: [
            {
                question: "What is the basic unit of life?",
                options: ["Organ", "Tissue", "Cell", "Organism"],
                correct: "Cell"
            },
            {
                question: "Which organ pumps blood in the body?",
                options: ["Brain", "Liver", "Heart", "Lungs"],
                correct: "Heart"
            },
            {
                question: "DNA stands for?",
                options: [
                    "Deoxyribonucleic Acid",
                    "Dioxynucleic Acid",
                    "Dicarboxylic Acid",
                    "None of the above"
                ],
                correct: "Deoxyribonucleic Acid"
            },
            {
                question: "Plants make food by?",
                options: ["Respiration", "Transpiration", "Photosynthesis", "Glycolysis"],
                correct: "Photosynthesis"
            },
            {
                question: "Which part of the brain controls balance?",
                options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                correct: "Cerebellum"
            }
        ]
    },

    {
        topic: "Math",
        emoji: "➗",
        description: "Sharpen your numbers game",
        image: "https://i.pinimg.com/736x/41/d3/79/41d37994a0f782e69eba07b2492aaf02.jpg",
        questions: [
            {
                question: "What is 7 x 8?",
                options: ["54", "56", "64", "58"],
                correct: "56"
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "14"],
                correct: "12"
            },
            {
                question: "What is the value of π (pi) approximately?",
                options: ["2.14", "3.14", "3.41", "4.13"],
                correct: "3.14"
            },
            {
                question: "A triangle has how many sides?",
                options: ["2", "3", "4", "5"],
                correct: "3"
            },
            {
                question: "What is 25% of 200?",
                options: ["25", "40", "50", "75"],
                correct: "50"
            }
        ]
    },

    {
        topic: "History",
        emoji: "🏛️",
        description: "Know your past, shape the future",
        image: "https://media.istockphoto.com/id/1092170964/vector/history-doodles-with-lettering.jpg?s=612x612&w=0&k=20&c=J-X75GlaxTBRIAMKQaSahDsf2WgzlhnffbUlYb8N594=",
        questions: [
            {
                question: "Who was the first President of the USA?",
                options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
                correct: "George Washington"
            },
            {
                question: "In which year did World War II end?",
                options: ["1940", "1945", "1939", "1950"],
                correct: "1945"
            },
            {
                question: "Which civilization built the pyramids?",
                options: ["Romans", "Mayans", "Egyptians", "Greeks"],
                correct: "Egyptians"
            },
            {
                question: "The Great Wall of China was built to protect against?",
                options: ["Mongols", "Romans", "Japanese", "Vikings"],
                correct: "Mongols"
            },
            {
                question: "Who discovered America?",
                options: ["Christopher Columbus", "Vasco da Gama", "Magellan", "Marco Polo"],
                correct: "Christopher Columbus"
            }
        ]
    },
    {
        topic: "Space",
        emoji: "🚀",
        description: "Test your space knowledge!",
        image: "https://www.shutterstock.com/image-vector/night-sky-stars-nebula-effect-260nw-2241890401.jpg",
        questions: [
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Venus", "Mars", "Jupiter"],
                correct: "Mars"
            },
            {
                question: "What galaxy do we live in?",
                options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
                correct: "Milky Way"
            },
            {
                question: "Who was the first human in space?",
                options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
                correct: "Yuri Gagarin"
            },
            {
                question: "Which planet has the most moons?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                correct: "Saturn"
            },
            {
                question: "What is the hottest planet in our solar system?",
                options: ["Mercury", "Venus", "Mars", "Jupiter"],
                correct: "Venus"
            }
        ]
    },


]



