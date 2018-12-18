var jsonHTTP = new XMLHttpRequest();
jsonHTTP.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var jsonObject = JSON.parse(this.responseText);
    console.log(jsonObject);

    var visibleLinks = "";
    var moreLinks = "";
    for (var i = 0; i < 2 && i < jsonObject.links.length; i++) {
      visibleLinks = visibleLinks + "<div class=\"ml-2 top-bar\"><span><a class=\"text-white\" href=\"" + jsonObject.links[i].link + "\" target=\"" + jsonObject.links[i].target + "\" title=\"" + jsonObject.links[i].title + "\">" + jsonObject.links[i].name + "</a></span></div>";
      document.getElementById("top-bar-visible").innerHTML = visibleLinks;
    }

    console.log(visibleLinks);

    if (jsonObject.links.length > 2) {
      for (var i = 2; i < jsonObject.links.length; i++) {
        moreLinks = moreLinks + "<div class=\"top-bar p-1\"><span><a class=\"text-white\" href=\"" + jsonObject.links[i].link + "\" target=\"" + jsonObject.links[i].target + "\" title=\"" + jsonObject.links[i].title + "\">" + jsonObject.links[i].name + "</a></span></div>";
      }
      document.getElementById("top-bar-more-content").innerHTML = moreLinks;

      // Set more link visible
      document.getElementById("top-bar-more-link").classList.remove("d-none");
    }

    console.log(moreLinks);
  }
};
jsonHTTP.open("GET", "https://static.chesterlestreetasc.co.uk/global/headers/GlobalSites.json", true);
jsonHTTP.send();
