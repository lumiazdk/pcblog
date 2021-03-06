<template>
  <div>
    <div v-html="compiledMarkdown" class="markdown-body"></div>
  </div>
</template>
<script>
import marked from "marked";

export default {
  props: ["content"],
  data() {
    return {};
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content, { sanitize: true });
    }
  }
};
</script>
<style>
.markdown-body body {
  margin: 0 auto;
  font-family: "Microsoft YaHei", arial, sans-serif;
  color: #444444;
  line-height: 1;
  padding: 30px;
}
@media screen and (min-width: 768px) {
  .markdown-body body {
    width: 748px;
    margin: 10px auto;
  }
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4 {
  color: #111111;
  font-weight: 400;
  margin-top: 1em;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5 {
  font-family: Georgia, Palatino, serif;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body p,
.markdown-body dl {
  margin-bottom: 16px;
  padding: 0;
}
.markdown-body h1 {
  font-size: 48px;
  line-height: 54px;
}
.markdown-body h2 {
  font-size: 36px;
  line-height: 42px;
}
.markdown-body h1,
.markdown-body h2 {
  border-bottom: 1px solid #efeaea;
  padding-bottom: 10px;
}
.markdown-body h3 {
  font-size: 24px;
  line-height: 30px;
}
.markdown-body h4 {
  font-size: 21px;
  line-height: 26px;
}
.markdown-body h5 {
  font-size: 18px;
  list-style: 23px;
}
.markdown-body a {
  color: #0099ff;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
.markdown-body a:hover {
  text-decoration: none;
  color: #ff6600;
}
.markdown-body ul,
.markdown-body ol {
  padding: 0;
  padding-left: 24px;
  margin: 0;
}
.markdown-body li {
  line-height: 24px;
}
.markdown-body p,
.markdown-body ul,
.markdown-body ol {
  font-size: 16px;
  line-height: 24px;
}
.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}
.markdown-body code,
.markdown-body pre {
  border-radius: 3px;
  background-color: #f7f7f7;
  color: inherit;
}
.markdown-body code {
  font-family: Consolas, Monaco, Andale Mono, monospace;
  margin: 0 2px;
}
.markdown-body pre {
  line-height: 1.7em;
  overflow: auto;
  padding: 6px 10px;
  border-left: 5px solid #6ce26c;
}
.markdown-body pre > code {
  border: 0;
  display: inline;
  max-width: initial;
  padding: 0;
  margin: 0;
  overflow: initial;
  line-height: inherit;
  font-size: 0.85em;
  white-space: pre;
  background: 0 0;
}
.markdown-body code {
  color: #666555;
}
.markdown-body aside {
  display: block;
  float: right;
  width: 390px;
}
.markdown-body blockquote {
  border-left: 0.5em solid #eee;
  padding: 0 0 0 2em;
  margin-left: 0;
}
.markdown-body blockquote cite {
  font-size: 14px;
  line-height: 20px;
  color: #bfbfbf;
}
.markdown-body blockquote cite:before {
  content: "\2014 \00A0";
}
.markdown-body blockquote p {
  color: #666;
}
.markdown-body hr {
  text-align: left;
  color: #999;
  height: 2px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
}
.markdown-body dl {
  padding: 0;
}
.markdown-body dl dt {
  padding: 10px 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: bold;
}
.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}
.markdown-body dd {
  margin-left: 0;
}
.markdown-body button,
.markdown-body input,
.markdown-body select,
.markdown-body textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}
.markdown-body button,
.markdown-body input {
  line-height: normal;
  *overflow: visible;
}
.markdown-body button::-moz-focus-inner,
.markdown-body input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.markdown-body button,
.markdown-body input[type="button"],
.markdown-body input[type="reset"],
.markdown-body input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}
.markdown-body input[type="checkbox"],
.markdown-body input[type="radio"] {
  cursor: pointer;
}
.markdown-body input:not([type="image"]),
.markdown-body textarea {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.markdown-body input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.markdown-body input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.markdown-body label,
.markdown-body input,
.markdown-body select,
.markdown-body textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: normal;
  line-height: normal;
  margin-bottom: 18px;
}
.markdown-body input[type="checkbox"],
.markdown-body input[type="radio"] {
  cursor: pointer;
  margin-bottom: 0;
}
.markdown-body input[type="text"],
.markdown-body input[type="password"],
.markdown-body textarea,
.markdown-body select {
  display: inline-block;
  width: 210px;
  padding: 4px;
  font-size: 13px;
  font-weight: normal;
  line-height: 18px;
  height: 18px;
  color: #808080;
  border: 1px solid #ccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.markdown-body select,
.markdown-body input[type="file"] {
  height: 27px;
  line-height: 27px;
}
.markdown-body textarea {
  height: auto;
}
.markdown-body :-moz-placeholder {
  color: #bfbfbf;
}
.markdown-body ::-webkit-input-placeholder {
  color: #bfbfbf;
}
.markdown-body input[type="text"],
.markdown-body input[type="password"],
.markdown-body select,
.markdown-body textarea {
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
  transition: border linear 0.2s, box-shadow linear 0.2s;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
.markdown-body input[type="text"]:focus,
.markdown-body input[type="password"]:focus,
.markdown-body textarea:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
  -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}
.markdown-body button {
  display: inline-block;
  padding: 4px 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 18px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #0064cd;
  background-repeat: repeat-x;
  background-image: -khtml-gradient(
    linear,
    left top,
    left bottom,
    from(#049cdb),
    to(#0064cd)
  );
  background-image: -moz-linear-gradient(to top, #049cdb, #0064cd);
  background-image: -ms-linear-gradient(to top, #049cdb, #0064cd);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #049cdb),
    color-stop(100%, #0064cd)
  );
  background-image: -webkit-linear-gradient(to top, #049cdb, #0064cd);
  background-image: -o-linear-gradient(to top, #049cdb, #0064cd);
  background-image: linear-gradient(to top, #049cdb, #0064cd);
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid #004b9a;
  border-bottom-color: #003f81;
  -webkit-transition: 0.1s linear all;
  -moz-transition: 0.1s linear all;
  transition: 0.1s linear all;
  border-color: #0064cd #0064cd #003f81;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
}
.markdown-body button:hover {
  color: #fff;
  background-position: 0 -15px;
  text-decoration: none;
}
.markdown-body button:active {
  -webkit-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.markdown-body button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.markdown-body table {
  *border-collapse: collapse;
  /* IE7 and lower */

  border-spacing: 0;
  width: 100%;
}
.markdown-body table {
  border: solid #ccc 1px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  /*-webkit-box-shadow: 0 1px 1px #ccc;
    -moz-box-shadow: 0 1px 1px #ccc;
    box-shadow: 0 1px 1px #ccc;   */
}
.markdown-body table tr:hover {
  background: #fbf8e9;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
.markdown-body table td,
.markdown-body .table th {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
.markdown-body table th {
  background-color: #dce9f9;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ebf3fc),
    to(#dce9f9)
  );
  background-image: -webkit-linear-gradient(to top, #ebf3fc, #dce9f9);
  background-image: -moz-linear-gradient(to top, #ebf3fc, #dce9f9);
  background-image: -ms-linear-gradient(to top, #ebf3fc, #dce9f9);
  background-image: -o-linear-gradient(to top, #ebf3fc, #dce9f9);
  background-image: linear-gradient(to top, #ebf3fc, #dce9f9);
  /*-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/

  border-top: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  padding: 5px;
}
.markdown-body table td:first-child,
.markdown-body table th:first-child {
  border-left: none;
}
.markdown-body table th:first-child {
  -moz-border-radius: 6px 0 0 0;
  -webkit-border-radius: 6px 0 0 0;
  border-radius: 6px 0 0 0;
}
.markdown-body table th:last-child {
  -moz-border-radius: 0 6px 0 0;
  -webkit-border-radius: 0 6px 0 0;
  border-radius: 0 6px 0 0;
}
.markdown-body table th:only-child {
  -moz-border-radius: 6px 6px 0 0;
  -webkit-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}
.markdown-body table tr:last-child td:first-child {
  -moz-border-radius: 0 0 0 6px;
  -webkit-border-radius: 0 0 0 6px;
  border-radius: 0 0 0 6px;
}
.markdown-body table tr:last-child td:last-child {
  -moz-border-radius: 0 0 6px 0;
  -webkit-border-radius: 0 0 6px 0;
  border-radius: 0 0 6px 0;
}
</style>

