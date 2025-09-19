export default function Item({name, quantity, category}) {
    return (
        <main>
            <div className="bg-lightblue border-round m-2 p-2">
                <h1 className="text-500 font-bold">{name}</h1>
                <p>Buy {quantity} in {category}</p>
            </div>
        </main>
    );
}