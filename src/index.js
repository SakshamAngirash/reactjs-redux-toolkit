import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

//function Greeting() {return <h1>My first component</h1>;}

/*function Greeting() {
  return React.createElement("h2", {}, "Hello World");
}*/
//Suppose we have to create something like

/*function Greeting(){
  return <div>
    <h1>
      Hello world
    </h1>
  </div>
}*/

/*const Greeting = () => {
  return React.createElement("div", {}, React.createElement("h2", {}, "Hello"));
};*/

/*function Greeting() {
  return (
    <div>
      <Person></Person>
      <Message />
    </div>
  );
}

const Person = () => <h2>Saksham Angirash</h2>;
const Message = () => {
  return <p>Hey everyone Saksham this side</p>;
};

//concept of React.Fragment
//should have to self close the tags with no closing tags
// arrow func*/

/*const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="./images/Book1.jpg" alt="The Psychology of Money" />;
};
const Title = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5",
  };
  return <h2 style={inlineHeadingStyles}> The Psychology of Money</h2>;
};
const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5" }}>
      Morgan Housel
    </h4>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
*/

//JSX Javascript

/*
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
//for now we are not gonna use multiple components
const author = "Morgan Housel";
const Book = () => {
  const title = "The Psychology of Money";
  return (
    <article className="book">
      <img src="./images/Book1.jpg" alt="The Psychology of Money" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);

*/

//Props

//parameters and arguments

/*const author = "Morgan Housel";
const title = "The Psychology of Money";
const img = "./images/Book1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book atr={author} title={title} img={img} />
      <Book atr={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.atr}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);

*/

// Making it more dynnamic and use of children prop

/*const firstBook = {
  author: "Morgan Housel",
  title: "The Psychology of Money",
  img: "./images/Book1.jpg",
};
const secondBook = {
  author: "Joseph Murphy ",
  title: "The Power of Your Subconscious Mind ",
  img: "./images/Book2.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book atr={firstBook.author} title={firstBook.title} img={firstBook.img}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          officiis.
        </p>
        <button>Click Me</button>
      </Book>
      <Book
        atr={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, atr, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{atr}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);*/

// setting up a proper list of book that we gonna use in our projects

//lets create an array of books
/*const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "./images/Book1.jpg",
    id: 1,
  },
  {
    author: "Joseph Murphy ",
    title: "The Power of Your Subconscious Mind ",
    img: "./images/Book2.jpg",
    id: 2,
  },
];*/

/*const names = ["saksham", "niharika", "antriksh"];

const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});*/

/*
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book ig={img} title={title} atr={author} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { ig, title, atr } = props;
  return (
    <article className="book">
      <img src={ig} alt={title} />
      <h2>{title}</h2>
      <h4>{atr}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);


*/

//spread operator

/*const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "./images/Book1.jpg",
    id: 1,
  },
  {
    author: "Joseph Murphy ",
    title: "The Power of Your Subconscious Mind ",
    img: "./images/Book2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, atr } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{atr}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);
*/

//Events
/*
const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "./images/Book1.jpg",
    id: 1,
  },
  {
    author: "Joseph Murphy ",
    title: "The Power of Your Subconscious Mind ",
    img: "./images/Book2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleForInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("Handle form Input");
  };
  const handleButtonClick = () => {
    alert("Handle button Click ");
  };
  const handleForSubmission = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <section>
      <form onSubmit={handleForSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleForInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, atr } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{atr}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);
*/

//Collecting Information from submissions

const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "./images/Book1.jpg",
    id: 1,
  },
  {
    author: "Joseph Murphy ",
    title: "The Power of Your Subconscious Mind ",
    img: "./images/Book2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleForInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("Handle form Input");
  };
  const handleButtonClick = () => {
    alert("Handle button Click ");
  };
  const handleForSubmission = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <section>
      <form onSubmit={handleForSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleForInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">SUBMIT</button>
        <div>
          <button onClick={handleButtonClick}>Click me</button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, atr } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{atr}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);
