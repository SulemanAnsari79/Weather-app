export default function Search({search,setSearch,handleSearch}){
    return (
        <div className=" w-[100%] flex justify-around place-items-center my-[10px]">
            <input 
            type="text"
            className="w-[70%] border rounded-xl px-[2px] py-[8px] outline-none bg-white text-gray-400"
            placeholder="Enter city name"
            // value={search} 
            onChange={(event)=>setSearch(event.target.value)}
            />
            <button className="border-none 
                rounded-xl 
                bg-black 
                text-white text-[17px] 
                outline-none 
                cursor-pointer 
                py-[12px] px-[15px] 
                w-[10%]"
            onClick={handleSearch}>
                Search 
            </button>
        </div>
    )
}
