import {Input} from "@/components/ui/input";
import {TbSearch} from "react-icons/tb";

const SearchBar = () => {
  return (
    <div className={"relative w-full rounded-md"}>
      <Input className={"w-full pl-10"} placeholder={"Search integations"}/>
      <TbSearch className={"icon-xs absolute left-3 top-1/2 -translate-y-1/2"} />
    </div>
  );
};

export default SearchBar;