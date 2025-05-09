export default function Post() {
    return(
        <div>
            <div className="flex items-center ml-2">
                <p className="text-3xl font-bold">Post page:</p>
                <button className="bg-blue-400 rounded-2xl p-3 m-4 text-2xl">
                    Create users
                </button>
            </div>
            <div className="text-3xl">
                <label>Ner:</label>
                <input type="text"
                className="border rounded-lg bg-white ml-2 p-3"
                placeholder="ner oruulna uu"
                ></input>
            </div>
            <div className="text-3xl">
                <label>Ovog:</label>
                <input type="text"
                className="border rounded-lg bg-white ml-2 p-3"
                placeholder="Ovog oruulna uu"
                ></input>
                <div></div>
            </div>
        </div>
    )
}