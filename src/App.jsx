import Books from "./components/Books";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

const App = () => {
  return (
    <div className="bg-gray-100  min-h-screen">
      <header className="bg-gray-900 p-4">
        <h1 className="text-gray-200 text-2xl uppercase text-center">
          Book Store
        </h1>
      </header>
      <main className="grid grid-cols-2 grid-rows-2">
        <section className="col-span-2">
          <Books />
        </section>
        <div className="w-screen fixed left-0 bottom-0 flex justify-between items-center  bg-gray-100 p-4 border-t-2 border-gray-300">
          <section className="">
            <AddBook />
          </section>
          <section>
            <AddAuthor />
          </section>
        </div>
      </main>
    </div>
  );
};
export default App;
