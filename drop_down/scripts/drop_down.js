var dropDown = (function() {
  var _dropDown = {
    tpl: "<li><a href='{#href#}'>{#text#}</a></li>",
    formateHTML: function(str, data) {
      return str.replace(/\{#(\w+)#\}/g, function(match, prop) {
        return data[prop] !== undefined ? data[prop] : "";
      })
    },
    init: function(data) { // data should be an array
      var len = data.length,
          html = "",
          list = null;
      for (var i = 1; i < len; i++) {
        html += this.formateHTML(this.tpl, data[i]);
      }
      list = document.createElement("ul");
      list.innerHTML = this.formateHTML(this.tpl, data[0]).replace("</li>", "") +
                       "<ul>" + html + "</ul>" + "</li>";
      list.className = "yuchen-drop-down"
      return list;
    },
    create: function(parent, data) {
      var list = this.init(data);
      parent && parent.appendChild(list);
    }
  }
  for (var key in _dropDown) {
    Object.defineProperty(_dropDown, key, {
      writable: false
    });
  }

  return _dropDown;
})()
