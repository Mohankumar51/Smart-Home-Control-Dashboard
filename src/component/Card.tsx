import { PiFanDuotone } from "react-icons/pi";
import Switcher1 from "../reactui/Switcher1";

const Card = () => {
  return (
    <div className="w-3/4 border rounded-2xl p-6 m-4 shadow-md bg-white flex items-center justify-between gap-4">
        <div className="text-3xl text-blue-500">
          <PiFanDuotone />
        </div>
          <h3 className="text-lg font-semibold text-gray-800">Fan 1</h3>
          <p className="text-sm text-gray-500">Hall</p>
          <p className="text-xs text-green-600 font-medium">Working</p>

      <Switcher1 />
    </div>
  );
};

export default Card;
