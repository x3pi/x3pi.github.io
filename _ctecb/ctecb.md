---
title: Có thể em chưa biết
layout: default
permalink:  "/ctecb"
active: "ctecb"
---

<div class="view_year">
{% assign sorted_pages = site.ctecb  | sort:"order" | reverse %}
{% for cs in sorted_pages %}

{% assign beatles = cs.url | split: "/" %}

{% for member in beatles %}
{% if forloop.index0 == 2 %}



<div class="materials-item">
    <div class="tt">
      <a href="{{ cs.url }}">{{ cs.title }}</a>
    </div>
    <div class="kw">

      {% for tag in cs.tags  %}

      <a>{{tag}}</a>

      {% endfor %}

    </div>
</div>

{% endif %}
{% endfor %}
{% endfor %}
</div>
