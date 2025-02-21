---
layout: page
title: "Posts"
last_modified_at: 2025-02-01 00:00:00 +0900
---
<a href="https://toastkidjp.github.io/feed.xml"><img src="assets/image/ic_rss_feed.svg" style="color: #40000A;">RSS Feed</a>

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


<ul class="mui-tabs__bar">
{% for tag in site.tags %}
  {% if forloop.first %}
    <li class="mui--is-active">
  {% else %}
    <li>
  {% endif %}
<a data-mui-toggle="tab" data-mui-controls="{{ tag[0] }}">{{ tag[0] }}</a></li>
{% endfor %}
</ul>

{% for tag in site.tags %}
<div class="mui-tabs__pane" id="{{tag[0]}}">
<h3>{{ tag[0] }}</h3>
  {% for post in tag[1] %}
1. [{{ post.title }}]({{ post.url }})
  {% endfor %}
</div>
{% endfor %}
