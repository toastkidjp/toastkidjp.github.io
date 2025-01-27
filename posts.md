---
layout: page
title: "Posts"
---

# All
  {% for post in site.posts reversed %}
1. [{{ post.title }}]({{ post.url | relative_url }}): {{ post.date | date: "%Y-%m-%d" }}
  {% endfor %}

# Tags
{% for tag in site.tags %}
### {{ tag[0] }}
  {% for post in tag[1] %}
1. [{{ post.title }}]({{ post.url }})
  {% endfor %}
{% endfor %}

