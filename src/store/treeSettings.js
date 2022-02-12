import { INDIGO_LIGHT, BLUE_DARKER } from "@/theme/variables.const";
import PersonSvg from "@/assets/person-default.svg";

export const treeSettings = {
  state: () => ({
    fontSize: 16,
    memberSquareSize: 100,
    memberSquareRadius: 15,
    memberSquareStrokeColor: INDIGO_LIGHT,
    memberNameColor: BLUE_DARKER,
    memberSquareDefaultBg: PersonSvg,
  }),
};
