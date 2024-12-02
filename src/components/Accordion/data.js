const data = [
    {
        id: "1",
        question: "What are the major features of React?",
        answer: "Uses reusable/composable UI components to develop the view."
    },
    {
        id: "2",
        question: "What is the difference between Element and Component?",
        answer: "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated."
    },
    {
        id: "3",
        question: "What is the difference between state and props?",
        answer: "In React, both state and props are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics."
    },
    {
        id: "4",
        question: "What is 'key' prop and what is the benefit of using it in arrays of elements?",
        answer: "A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed."
    }
];

export default data;