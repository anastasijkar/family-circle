export const treeData = {
  state: () => ({
    members: {
      "001": {
        // generate id automatically in the future
        // idea: name+surname+hash
        data: {
          name: "Vuexman",
          surname: "van der Framework",
          /*
          photo: "http://.....",
          generation: 0,
          partners: [
            {
              partnerId,
              relationType
            }, {
              secondPartnerId,
              secondRelationType
            }
          ],
          parents: [ parentId, parentSecondId ]
          */
        },
        position: {
          posX: 30,
          posY: 30,
        },
      },
    },
    generations: [],
  }),
};
