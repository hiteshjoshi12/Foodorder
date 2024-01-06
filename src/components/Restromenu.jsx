import { useParams } from "react-router-dom";
import Restromenucard from "./Restromenucard";
import useRestorent from "../utils/useRestrorent"

const Restromenu = () => {
  //how to use a dynamic url params
  const param = useParams();
  const { resid } = param;
  const restaurent = useRestorent(resid);
  return (
    <div>
      <Restromenucard {...restaurent} />
    </div>
  );
};
export default Restromenu;
