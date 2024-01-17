export default function InputSearch({ onSubmit, searchValue, onChange }) {
  return (
    <form onSubmit={onSubmit} className="flex items-center m-0 p-0 mt-[1.2rem]">
      <input
        onChange={onChange}
        value={searchValue}
        className="w-[35vw] min-w-80 h-10 m-0 pl-8 rounded-[2rem] border-0 text-[1.1rem] focus:border-[#9edcf2] focus:outline-none focus:shadow-stock"
        type="search"
        id="input-search"
        placeholder="Enter Github username..."
      />
    </form>
  );
}
