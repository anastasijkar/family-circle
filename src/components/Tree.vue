<template>
  <div class="tree">
    <div id="tree-container"></div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import * as d3 from "d3";
import { mapState } from "vuex";

export default {
  name: "Tree",
  data: () => {
    return {
      treeEl: null,
      treeHeight: 500,
      treeWidth: 500,
    };
  },
  computed: {
    ...mapState({
      members: (state) => state.treeData.members,
      memberSquareSize: (state) => state.treeSettings.memberSquareSize,
      memberSquareRadius: (state) => state.treeSettings.memberSquareRadius,
      memberSquareStrokeColor: (state) =>
        state.treeSettings.memberSquareStrokeColor,
      memberSquareDefaultBg: (state) =>
        state.treeSettings.memberSquareDefaultBg,
      memberNameColor: (state) => state.treeSettings.memberNameColor,
      fontSize: (state) => state.treeSettings.fontSize,
    }),
  },
  async mounted() {
    await nextTick();
    this.initContainer();
    this.initSvgDefs();
    try {
      for (const memberId in this.members) {
        this.addMember(
          this.members[memberId].data,
          this.members[memberId].position
        );
      }
    } catch (e) {
      alert(e);
    }
  },
  methods: {
    initContainer() {
      this.treeEl = d3
        .select("#tree-container")
        .append("svg")
        .attr("width", this.treeWidth)
        .attr("height", this.treeHeight);
    },
    initSvgDefs() {
      const defs = this.treeEl.append("defs");
      defs
        .append("clipPath")
        .attr("id", "photo-clip")
        .append("rect")
        .attr("width", this.memberSquareSize)
        .attr("height", this.memberSquareSize)
        .attr("rx", this.memberSquareRadius)
        .attr("ry", this.memberSquareRadius);
    },
    addMember(data, position) {
      // TODO: move to separate Member component

      const { name, surname, photo } = data;

      if (!name) {
        throw new Error("No member name specified");
      }

      const { posX, posY } = position;
      const defaultBgOffset = 25;

      this.treeEl
        // draw shape:
        .append("rect")
        .attr("x", posX)
        .attr("y", posY)
        .attr("width", this.memberSquareSize)
        .attr("height", this.memberSquareSize)
        .attr("rx", this.memberSquareRadius)
        .attr("ry", this.memberSquareRadius)
        .style("stroke", this.memberSquareStrokeColor)
        .style("stroke-width", 2)
        .style("fill", "transparent");

      // add image:
      if (photo) {
        this.treeEl
          .append("image")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", this.memberSquareSize)
          .attr("height", this.memberSquareSize)
          .attr("xlink:href", photo)
          .attr("clip-path", "url(#photo-clip)")
          .attr("transform", `translate(${posX}, ${posY})`);
      } else {
        const imageG = this.treeEl.append("g");
        imageG
          .append("svg:image")
          .attr("xlink:href", this.memberSquareDefaultBg)
          .attr("width", this.memberSquareSize - defaultBgOffset * 2)
          .attr("height", this.memberSquareSize - defaultBgOffset * 2)
          .attr("x", posX + defaultBgOffset)
          .attr("y", posY + defaultBgOffset);
      }

      // add name:
      const nameEl = this.treeEl
        .append("text")
        .text(name)
        .attr("font-family", "Avenir")
        .attr("font-weight", "bold")
        .attr("font-style", "italic")
        .attr("fill", this.memberNameColor)
        .attr("font-size", this.fontSize);
      const { width: nameWidth, height: nameHeight } = nameEl.node().getBBox();
      const namePosX = posX + (this.memberSquareSize - nameWidth) / 2;
      const namePosY = posY + this.memberSquareSize + nameHeight;
      nameEl.attr("x", namePosX).attr("y", namePosY);

      // add surname
      if (surname) {
        const surnameEl = this.treeEl
          .append("text")
          .text(surname)
          .attr("font-family", "Avenir")
          .attr("font-weight", "bold")
          .attr("font-style", "italic")
          .attr("fill", this.memberNameColor)
          .attr("font-size", this.fontSize);
        const { width: surnameWidth, height: surnameHeight } = surnameEl
          .node()
          .getBBox();
        const surnamePosX = posX + (this.memberSquareSize - surnameWidth) / 2;
        const surnamePosY =
          posY + this.memberSquareSize + surnameHeight + nameHeight * 0.8;
        surnameEl.attr("x", surnamePosX).attr("y", surnamePosY);
      }
    },
  },
};
</script>
