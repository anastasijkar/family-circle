// idea: store posX in member object, determine members posY by generation number

import { RELATION_TYPES } from "@/utils/constants";

export const treeData = {
  state: () => ({
    members: {
      "001": {
        // generate id automatically in the future
        // idea: name+surname+hash
        data: {
          name: "Vuexman",
          surname: "van der Framework",
          photo: null,
          generation: 0,
          partners: [
            {
              partnerId: "002",
              relationType: RELATION_TYPES.MARRIED,
            },
          ],
          //parents: [ parentId, parentSecondId ]
        },
        position: {
          posX: 30,
          posY: 30,
        },
      },
      "002": {
        data: {
          name: "Johnny",
          surname: "Catswill",
          photo:
            "https://randompicturegenerator.com/img/cat-generator/g4f364fb4696529bfd0c2b20494971084d004b866a19c48e0d3fb8559ca6b781f487ad1b39e84283b7ec7e2e332104af8_640.jpg",
          generation: 0,
          partners: [
            {
              partnerId: "001",
              relationType: RELATION_TYPES.MARRIED,
            },
          ],
        },
        position: {
          posX: 190,
          posY: 30,
        },
      },
    },
    generations: [],
  }),
};
