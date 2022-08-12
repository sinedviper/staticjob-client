import { useSelector, useDispatch } from "react-redux";

import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

import { removeFilter, clearFilter, selectFilters } from "./filter-slice";

export const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => {
            return (
              <Badge
                variant="clearable"
                key={filter}
                onClear={() => dispatch(removeFilter(filter))}
              >
                {filter}
              </Badge>
            );
          })}
        </Stack>
        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};
