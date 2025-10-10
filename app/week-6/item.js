export default function Item({item}) {
    return (
        <main>
            <div className="bg-blend-lighten bg-blue-950 rounded m-1 p-2 ">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p>Buy {item.quantity} in {item.category}</p>
            </div>
        </main>
    );
}