import Cards from "../data/Card.json";

interface Card {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

export default function ProductCards() {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        {Cards.map((card: Card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-60 object-contain rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{card.name}</h2>
            <p className="text-gray-500">{card.brand}</p>
            <p className="text-green-600 font-bold mt-2">${card.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
