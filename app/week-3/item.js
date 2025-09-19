export default function Item({item}) {
    return (
        <main>
            <div className="bg-lightblue border-round m-1">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p>Buy {item.quantity} in {item.category}</p>
            </div>
        </main>
    );
}