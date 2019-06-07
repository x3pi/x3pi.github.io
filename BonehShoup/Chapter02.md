---
layout: post
title: Mã hóa
date: 2019-06-01 12:00:00 +0000
permalink: "/CryptoE/chapter02"
creationdate:
author: Pi
tags:
- Note
- Crypto

---

Mật mã Shannon là một cặp hàm $\mathcal{E}=(E, D)$\
$m=D(k, c)$\
$m=D(k, c)$\
$D(k, E(k, m))=m$\
$E : \mathcal{K} \times \mathcal{M} \rightarrow \mathcal{C}$\
$D : \mathcal{K} \times \mathcal{C} \rightarrow \mathcal{M}$


Mật mã Shannon hoàn hảo khi:

$$
\operatorname{Pr}\left[E\left(\mathbf{k}, m_{0}\right)=c\right]=\operatorname{Pr}\left[E\left(\mathbf{k}, m_{1}\right)=c\right]
$$


Bất kỳ mật mã xác định nào là mật mã Shannon; tuy nhiên, mật mã tính toán không cần phải là mật mã Shannon (nếu nó có thuật toán mã hóa xác suất) và mật mã Shannon không cần phải là mật mã tính toán (nếu hoạt động mã hóa hoặc giải mã của nó không có triển khai sinh thái).

Một mật mã $\mathcal{E}$ là an toàn về mặt ngữ nghĩa nếu đối với tất cả các đối thủ sinh thái $\mathcal{A}$, giá trị lợi thế về mặt ngữ nghĩa $\operatorname{SSadv}[\mathcal{A}, \mathcal{E}]$ là không đáng kể.





