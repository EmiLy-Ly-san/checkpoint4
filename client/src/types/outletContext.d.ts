import type { Season } from "./Season";

interface OutletContextProps {
  Season: Season;
  setSeason: (data: Season) => void;
}
