---
layout: page
title: "Posts"
last_modified_at: 2025-02-01 00:00:00 +0900
---
<a href="https://toastkidjp.github.io/feed.xml"><img src="assets/image/ic_rss_feed.svg" style="color: #40000A;">RSS Feed</a>

# All posts
{{ site.posts | size }} Posts

| Title | Last update
|:---|:---  {% for post in site.posts reversed %}
| [{{ post.title }}]({{ post.url | relative_url }}) | {{ post.date | date: "%Y-%m-%d" }}  {% endfor %}

# Tags

<ul class="mui-tabs__bar">
{% for tag in site.tags %}
  <li>
    <a data-mui-toggle="tab" data-mui-controls="tab-{{ tag[0] }}">{{ tag[0] }}</a>
  </li>
{% endfor %}
</ul>

{% for tag in site.tags %}
<div class="mui-tabs__pane" id="tab-{{tag[0]}}">
<h3>{{ tag[0] }}</h3>
{{ tag[1] | size }} Posts
<table>
<tr><th>Title</th><th>Last update</th></tr>
  {% for post in tag[1] %}
<tr><td><a href="{{ post.url }}">{{ post.title }}</a></td><td>{{ post.date | date: "%Y-%m-%d" }}</td></tr>
  {% endfor %}
</table>
</div>
{% endfor %}
