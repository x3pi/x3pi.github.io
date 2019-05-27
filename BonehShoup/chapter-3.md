---
layout: post
title: Stream ciphers
date: 2019-05-23 17:00:00 +0000
permalink: "/bonehshoup/chapter03"
creationdate: 2019-05-23 17:00:00 +0000
author: Pi
tags:
- Note
- Crypto

---
### ***

$G(s)$ Là trình tạo giả ngẫu nhiên bắt đầu với hạt giống $s$ có số bit nhỏ hơn tin nhắn và dùng nó tạo ra một chuỗi dài hơn dùng để mã hóa.  
$E(s, m) :=G(s) \oplus m \quad \text { and } \quad D(s, c) :=G(s) \oplus c$

### ***

$G(s)$ không thể thỏa mãn bí mật hoàn hỏa do khóa $s$ có số bit nhỏ hơn tin nhắn. Nhưng nó có thể an toàn về mặt ngữ nghĩa nếu sự khác biệt $G(s)$ và một chuỗi ngẫy nhiên $r$ là không đáng kể.  
$1 \%$ được xem là đáng kể  
$2^{-100}$ được xem là không đáng kể

### ***


