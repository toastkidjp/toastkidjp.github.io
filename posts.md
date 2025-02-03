---
layout: page
title: "Posts"
date: 2025-02-01 00:00:00 +0900
---
<a href="https://toastkidjp.github.io/feed.xml"><img src="assets/image/ic_rss_feed.svg" style="color: #40000A;"></a>

# {{ site.posts | size }} Posts

| Title | Last update
|:---|:---  {% for post in site.posts reversed %}
| [{{ post.title }}]({{ post.url | relative_url }}) | {{ post.date | date: "%Y-%m-%d" }}  {% endfor %}

# Tags
{% for tag in site.tags %}
### {{ tag[0] }}
  {% for post in tag[1] %}
1. [{{ post.title }}]({{ post.url }})
  {% endfor %}
{% endfor %}

