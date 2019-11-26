<template>
  <div class="editor-wrapper">
    <codemirror :value="code" :options="editorOption" ref="myEditor" @change="changeCode"></codemirror>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror-lite";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/vue/vue");
require("codemirror/addon/hint/show-hint.js");
require("codemirror/addon/hint/show-hint.css");
require("codemirror/addon/hint/javascript-hint.js");

export default {
  data() {
    return {
      code: "",
      editorOption: {
        mode: "javascript",
        extraKeys: { "Ctrl-Space": "autocomplete" }
      }
    };
  },
  components: {
    codemirror
  },
  computed: {
    editor() {
      return this.$refs.myEditor.editor;
    }
  },
  methods: {
    changeCode(value) {
      this.code = value;
    }
  },
  mounted() {
    this.editor.focus();
  }
};
</script>

<style scoped lang="scss">
.editor-wrapper {
  width: 50%;
  height: 100%;
  border: 1px solid blue;
}
</style>
