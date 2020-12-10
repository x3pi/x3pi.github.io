---
title: "Giảm thiểu không giới hạn"
layout: post
tags:
- coop
- math
active: "cs"
order: 9
libjs: 
published: true
hidden: true

---
## Thuật ngữ giả định

<div class = "admonition definition"  >
<p class="admonition-title">Xóa history git</p>
<div class="" markdown="1">

```bash
cd myrepo
rm -rf .git
git init
git add .
git commit -m "Removed history, due to sensitive data"
git remote add origin github.com:yourhandle/yourrepo.git
git push -u --force origin master
```

</div>

