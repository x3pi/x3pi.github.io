---
layout: post
title: Mã hóa
date: 2019-06-01 12:00:00 +0000
permalink: "/bonehshoup/chapter02"
creationdate:
author: Pi
tags:
- Note
- Crypto

---

### Giới thiệu

Chương này phát triển kỹ cơ bản thuật giao tiếp bị mật dù có kẻ nghe lén. Nhưng tự nó không giải quết hết mọi vẫn đề.

Chương này mỗi tin nhắn sử dụng mỗi khóa. Muốn sử dụng một khóa cho nhiều tin nhắn tìm hiểu chương 5.

Tính toàn vẹn tìm hiểu chương 6.

Vấn đề trao đổi khóa an toàn. Chương 21 và 22 giúp trao đổi khóa kể cả khi mạng không an toàn.

### Mật mã Shannon và bảo mật hoàn hảo

#### Định nghĩa mật mã Shannon

Mật mã Shannon là một cặp function $\mathcal{E}=(E, D)$\
$m=D(k, c)$\
$m=D(k, c)$\
$D(k, E(k, m))=m$\
$E : \mathcal{K} \times \mathcal{M} \rightarrow \mathcal{C}$\
$D : \mathcal{K} \times \mathcal{C} \rightarrow \mathcal{M}$

Ví dụ: one-time pad  là một mật mã Shannon $\mathcal{E}=(E, D)$\
$\mathcal{K} :=\mathcal{M} :=\mathcal{C} :=\{0,1\}^{L}$\
$E(k, m) :=k \oplus m$\
$D(k, c) :=k \oplus c$\
Ta có:\
$D(k, E(k, m))=D(k, k \oplus m)=k \oplus(k \oplus m)=(k \oplus k) \oplus m=0^{L} \oplus m=m$

#### Bảo mật hoàn hảo

Mật mã Shannon hoàn hảo khi:

$$
\operatorname{Pr}\left[E\left(\mathbf{k}, m_{0}\right)=c\right]=\operatorname{Pr}\left[E\left(\mathbf{k}, m_{1}\right)=c\right]
$$

one-time pad là một mật mã Shannon hoàn hỏa.

#### Các tin xấu

Cho $\mathcal{E}=(E, D)$ là một mật mã Shannon được định nghĩa trên $(\mathcal{K}, \mathcal{M}, C)$. Nếu $\mathcal{E}$ hoàn hảo thì $|\mathcal{K}| \geq | \mathcal{M}|$

Alice muốn gửi cho Bob một tệp video 1GB, sau đó Alice và Bob phải đồng ý trước về khóa bí mật 1GB. Gần như không thể sử dụng trong thực tế.

### Mật mã tính toán và bảo mật ngữ nghĩa

Đạt được mật mã hoàn hảo là không có ý nghĩa trong thực tế. Ta cần xem xét một mật mã an toàn là bảo vệ khỏi đối thực với khả năng tính toán trên máy tính thực bằng lượng thời gian hợp lý.

#### Định nghĩa của một mật mã tính toán

Bất kỳ mật mã xác định nào là mật mã Shannon; tuy nhiên, mật mã tính toán không cần phải là mật mã Shannon (nếu nó có thuật toán mã hóa xác suất) và mật mã Shannon không cần phải là mật mã tính toán (nếu hoạt động mã hóa hoặc giải mã của nó không có triển khai sinh thái).


#### Định nghĩa bảo mật ngữ nghĩa

Một mật mã $\mathcal{E}$ là an toàn về mặt ngữ nghĩa nếu đối với tất cả các đối thủ sinh thái $\mathcal{A}$, giá trị lợi thế về mặt ngữ nghĩa $\operatorname{SSadv}[\mathcal{A}, \mathcal{E}]$ là không đáng kể.





