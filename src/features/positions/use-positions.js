import { useSelector } from "react-redux";

import { selectFilters } from "../filters/filter-slice";
import { selectVisiblePositions } from "./position-slice";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  return positions;
};
