---
title: Định nghĩa bảo mật PRG
date: 2019-09-02 00:00:00 +0000
layout: 'post'
permalink: "/crypto/006-prgsd.html"
author: 'Pi'
tags: []

---

Cho $\mathrm{G} : \mathrm{k} \rightarrow\{0,1\}^{\mathrm{n}}$ là một PRG<br />
<u>Mục tiêu</u>: định nghĩa nó là gì<br/>
$[k\overset{R}{\leftarrow}K \text{ output }G(k)]$
"không thể phân biệt" được với<br/>
$[r\overset{R}{\leftarrow} {\{0,1\}}^{n} \text{ output }r]$

## Kiểm tra thống kê

Kiểm tra thống kê trên ${\{0,1\}}^{n}$<br/>
Là một thuật toán $A$ output "0" (not random) hoặc "1" (random) <br/>
Ví dụ: <br/>
1. $A(x)=1 \quad$ iff $\quad|\# \theta(x)-\# 1(x)| \leqslant 10 \cdot \sqrt{n}$
2. $A(x)=1$ iff $\left(\#00 (x)-\frac{n}{4}\right) \leq 10 \cdot \sqrt{n}$
3. $A(x)=1$ iff $max-run-of-0(x)<10 \cdot \log _{2}(n)$

## Lợi thế

Cho $\mathrm{G} : \mathrm{k} \rightarrow\{0,1\}^{\mathrm{n}}$ là một PRG và $A$ kiểm tra thống kê trên ${\{0,1\}}^{n}$<br/>
Định nghĩa:<br/>
$Adv_{PRG}[A, G]=\left|\operatorname{Pr}_{k\overset{R}{\leftarrow}K}[A(G(k)) = 1]-P_{r\overset{R}{\leftarrow} {\{0,1\}}^{n}} \quad[A(r)=1]\right| \in[0,1]$ <br/>

Giả sửa: $\mathrm{G} : \mathrm{k} \rightarrow\{0,1\}^{\mathrm{n}}$ thỏa mãn $\operatorname{msb}(G(k))=1$ cho $2/3$ số key trong K. <br/>
Định nghĩa kiểm tra thống kê $A(x)$ như:

$$
\text { if }[\operatorname{msb}(x)=1] \text { output }^{u} 1^{\prime \prime} \text { else output }^{\prime \prime} 0^{\prime \prime}
$$

Sau đó:<br/>
$\operatorname{Adv}_{\mathrm{PRG}}[\mathrm{A}, \mathrm{G}]=|\operatorname{Pr}[\mathrm{A}(\mathrm{G}(\mathrm{k}))=1]-\operatorname{Pr}[\mathrm{A}(\mathrm{r})=1]|= 2/3 - 1/3 = 1/6$

##  PRG an toàn: định nghĩa mật mã

Định nghĩa: chúng ta nói $\mathrm{G} : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ là một PRG an toàn nếu:<br/>
Nếu mọi kiểm tra thống kê "hiệu quả" A mà:<br/>
$\mathrm{Adv}_{\mathrm{PRG}}[\mathrm{A}, \mathrm{G}]$ là "không đáng kể"
