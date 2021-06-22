import Books from "./components/Books";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <div>
      <header>
        <h1>Reading Books</h1>
      </header>
      <main>
        <section>
          <Books />
        </section>
        <section>
          <AddBook />
        </section>
      </main>
    </div>
  );
};
export default App;
