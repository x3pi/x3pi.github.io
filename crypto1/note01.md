---
layout: post
title: Giới thiệu
date: 2019-06-01 12:00:00 +0000
permalink: "/crypto1/note01"
creationdate:
author: Pi
tags:
- Note
- Crypto

---

### Tổng quan khóa học

Mật mã có ở khắp mọi nơi: HTTPS, WPA2, GSM, Bluetooth, TrueCrypt, EFS, AACS, Xác thực người dùng, ...

Giao tiếp an toàn là không nghe lén không giả mạo

Lớp cổng bảo mật / TLS hai phần chính:
1. Giao thức bắt tay: Thiết lập khóa bí mật chung bằng mật mã khóa công khai
2. Lớp bản ghi: Truyền dữ liệu bằng khóa bí mật chung đảm bảo tính bảo mật và toàn vẹn

Khối xây dựng hệ thống mã hóa:\
$E, D$ chức năng mã hóa và giải mã\
$k$ khóa bí mật\
$\mathrm{m}, \mathrm{c} :$ văn bản thô, bản mã\
$\mathrm{E}(\mathrm{k}, \mathrm{m})=\mathrm{c}$\
$\mathrm{D}(\mathrm{k}, \mathrm{c})=\mathrm{m}$

Khóa sử dụng một lần: khóa chỉ được sử dụng để mã hóa một tin nhắn. Email được mã hóa và khóa mới được tạo cho mỗi email.

Khóa sử dụng nhiều lần: Khóa được sử dụng để mã hóa nhiều tin nhắn. Tập tin được mã hóa cùng một khóa được sử dụng để mã hóa nhiều tập tin.

Mật mã là: Một công cụ to lớn. Cơ sở cho nhiều cơ chế bảo mật.

Mật mã không phải là: Giải pháp cho tất cả các vấn đề bảo mật. Đáng tin cậy trừ khi được triển khai và sử dụng đúng cách. Một vài thứ bạn nên cố gắng tự phát minh nên nhớ nhiều ví dụ về các thiết kế đặc biệt bị hỏng.

### Mật mã học là gì?

Mật mã giúp giao tiếp bảo mật và toàn vẹn và nhiều hơn thế nữa: chữ ký số, truyền thông nặc danh, tiền kỹ thuật số ẩn danh, giao thức bầu cử đấu giá ẩn danh, đảm bảo tính toán cho nhiều bên. Ma thuật mật mã bạn giử truy vẫn tìm kiếm và máy chủ trả về kết quả cho bạn và không biết bạn tìm kiếm cái gì.

Một khoa học nghiêm ngặt. Ba bước trong mật mã:
1. Xác định chính xác mô hình mối đe dọa
2. Đề xuất xây dựng
3. Chứng minh rằng phá vỡ xây dựng trong chế độ đe dọa sẽ giải quyết một vấn đề khó khăn tiềm ẩn

### Lịch sử

### Xác suất rời rạc

$\mathrm{U} :$ tập hợp hữu hạn (e.g. $\mathrm{U}=\{0,1\}^{n} )$\
Def: Phân phối xác suất $\mathrm{P}$ trên $\mathrm{U}$ là một chức năng $\mathrm{P} : \mathrm{U} \rightarrow[0,1]$ như vậy $\sum_{x \in U} P(x)=1$

Cho một tập hợp $\mathrm{A} \subseteq \mathrm{U} : \quad \operatorname{Pr}[\mathrm{A}]=\sum_{\mathrm{x} \in \mathrm{A}} \mathrm{P}(\mathrm{x}) \in[0,1]$ tập hợp $\mathrm{A}$ được gọi là một event

Cho events $A_{1}$ và $A_{2}$:

$$
\operatorname{Pr}\left[\mathrm{A}_{1} \cup \mathrm{A}_{2}\right] \leq \operatorname{Pr}\left[\mathrm{A}_{1}\right]+\operatorname{Pr}\left[\mathrm{A}_{2}\right]
$$

$$
A_{1} \cap A_{2}=\varnothing \Rightarrow \operatorname{Pr}\left[A, V A_{2}\right]=\operatorname{Pr}\left[A_{1}\right]+\operatorname{Pr} \left[A_{2}\right]
$$

Def: Biến ngẫu nhiên $\mathrm{X}$ là một function $\quad \mathrm{X} : \mathrm{U} \rightarrow \mathrm{V}$\
$\mathrm{X}$ nhận các giá trị trong $\mathrm{V}$ và xác định phân phối trên $\mathrm{V}$

Biến ngẫu nhiên phân phối đồng đều cho tất cả  $\mathrm{a} \in \mathrm{U} : \quad \operatorname{Pr}[\mathrm{r}=\mathrm{a}]=1 /|\mathrm{U}|$

Thuật toán ngẫu nhiên đầu ra là một biến ngẫu nhiên:
$\mathrm{y} \overset{1}{\leftarrow} \mathrm{A}(\mathrm{m})$

Def: sự kiện A và B là độc lập nếu\
$\operatorname{Pr}[\mathrm{A} \text { and } \mathrm{B}]=\operatorname{Pr}[\mathrm{A}] \cdot \operatorname{Pr}[\mathrm{B}]$\
các biến ngẫu nhiên $\mathrm{X}, \mathrm{Y}$ lấy các giá trị trong $\mathrm{V}$ là độc lập nếu\
$\forall a, b \in V : \quad \operatorname{Pr}[X=a \text { and } Y=b]=\operatorname{Pr}(X=a] \cdot \operatorname{Pr}[Y=b]$

Thm: $\mathrm{Y}$ là biến ngẫu nhiên trên $\{0,1\}^{n}$, $\mathrm{X}$ là một độc lập biến ngẫu nhiên phân phối đồng đều. Thì $\quad \mathrm{Z} :=\mathrm{Y} \oplus \mathrm{X}$ là  biến ngẫu nhiên phân phối đồng đều trên $\{0,1\}^{\mathrm{n}}$

Nghịch lý sinh nhật:\
Cho $r_{1}, \ldots, r_{n} \in \mathrm{U}$ là biến ngẫu nhiên phân phối đồng đều độc lập.\
Thm: khi $n=1.2 \times|\mathrm{U}|^{1 / 2}$ thì $\operatorname{Pr}\left[\exists \mathrm{i} \neq \mathrm{j} : \quad \mathrm{r}_{\mathrm{i}}=\mathrm{r}_{\mathrm{j}}\right] \geq 1 / 2$


