---
layout: post
title: Mật mã dòng
date: 2019-06-01 12:00:00 +0000
permalink: "/crypto1/note02"
creationdate:
author: Pi
tags:
- Note
- Crypto

---

### The One Time Pad

#### Mật mã đối xứng: định nghĩa

Def: một mật mã được xác định qua $(K, M, C)$ là một cặp thuật toán $(E, D)$ ở đâu:\
$E : K \times M \rightarrow C$\
$D : K \times C \rightarrow M$\
Như vậy $\forall m \in M$, $k \in K$: $D(k, E(k, m))=m$

#### Ví dụ The One Time Pad

$M=C=\{0,1\}^{n}$, $K=\{0,1\}^{n}$\
Độ dài key bằng độ dài tin nhắn\
$c=E(k, m)=k \oplus m$\
$D(k, c)=k \oplus c$

#### Mật mã an toàn là gì?

Khả năng của kẻ tấn công: chỉ tấn công CT(ciphertext)\
Yêu cầu bảo mật có thể:\
Cố gắng 1: Kẻ tấn công không thể lấy lại chìa khóa bí mật\
Cố gắng 2: Kẻ tấn công không thể phục hồi tất cả các bản rõ\
Ý tưởng của Shannon: CT sẽ tiết lộ không có thông tin nào về giới tính về PT.

#### Bảo mật lý thuyết thông tin (Shannon 1949)


Def: Một mật mã $(E, D)$ trên $(\mathcal{K}, \mathcal{M}, \mathcal{C})$ có bí mật hoàn hảo nếu\
$\forall m_{0}, m_{1} \in \mathcal{M}$, $(length(m_{0})=length(m_{1})$ và $\forall c \in C$\
$\operatorname{Pr}\left[E\left(k, m_{0}\right)=c\right]=\operatorname{Pr}[E(k, m_{1})=c]$\
Với $k$ đồng đều trong $\mathcal{K}$, $(\mathrm{k} \overset{r}{\leftarrow} \mathcal{K})$
1. Cho biết ct không thể phân biệt được pt là $m_{1}$ hay là $m_{2}$
2. Mạnh hơn là kẻ tấn công không thể biết được điều gì về pt từ ct.
3. Không thể tấn công dựa vào mỗi ct. (Nhưng tấn công khác thì có thể)

Bổ đề: OTP (One Time Pad) có bí mật hoàn hảo

Tin xấu OTP hoàn hảo chỉ khi $|\mathcal{K}| \geq|\mathcal{M}|$ khó sử dụng trong thực tế.

---

### Máy phát điện giả ngẫu nhiên

#### Stream Ciphers: làm cho OTP trở nên thiết thực

PRG là một chức năng $G :\{0,1\}^{s} \rightarrow\{0,1\}^{n}$\
$\{0,1\}^s$ là không gian hạt giống

$c=E(k, n)=m \oplus G(k)$\
$D(k, c)=c \oplus ( k)$

Một mật mã dòng có thể có bí mật hoàn hảo?\
Không, vì khóa ngắn hơn tin nhắn\
Cần một định nghĩa khác về bảo mật\
Bảo mật sẽ phụ thuộc vào PRG

#### PRG phải không thể đoán trước

Giả sử PRG có thể dự đoán được:\
$\exists i: G\left.(x)\right|_{1 \ldots, i} \overset{alg}{\rightarrow} G\left.(x)\right|_{i+1 \ldots, n}$

Chúng ta nói : $\mathrm{G} : \mathrm{K} \longrightarrow\{0,1\}^{\mathrm{n}}$ có thể dự đoán được nếu:\
Tồn tại một thuật toán hiệu quả $A$ và $\exists a \leq i \leq n-1$ như vậy mà\
$\underset{k \leftarrow K}{Pr} [A\left.(G(k))\right|_{1, \ldots, i}=a\left.(k)\right|_{i+1}] >\frac{1}{2}+\epsilon$\
Đối với đáng kể: $\epsilon$ ví dụ: $\epsilon=1 / 2^{30}$

#### PRG yếu


glibc random $( ) :$\
$r[i] \leftarrow(r[i-3]+r[i-31]) \% 2^{32}$\
output $r[i]>>1$

không bao giờ sử dụng glibc random cho mật mã

#### Đáng kể và không đáng kể

Trong thực tế: $\varepsilon$ là vô hướng và:\
$\varepsilon$ đáng kể: $\varepsilon \geq 1 / 2^{30}$ (có khả năng xảy ra trên 1GB dữ liệu)\
$\varepsilon$ không đáng kể: $\varepsilon \leq 1 / 2^{80}$ giành chiến thắng trong "life of key".

Trong lý thuyết: $\varepsilon$ là một function $\varepsilon : \mathbf{Z}^{20} \rightarrow \mathbf{R}^{ \geq 0}$ và:\
$\varepsilon$ đáng kể: $\exists \mathrm{d} : \boldsymbol{\varepsilon}(\lambda) \geq 1 / \lambda^{\mathrm{d}}$ $(\mathcal{E} \geq 1 / \mathrm{poly}, \text { for many } \lambda)$\
$\varepsilon$ không đáng kể: $\forall \mathrm{d}, \lambda \geq \lambda_{\mathrm{d}} : \quad \varepsilon(\lambda) \leq 1 / \lambda^{\mathrm{d}}$ $(\varepsilon \leq 1 / \text { poly, for large } \lambda)$

#### PRGs: quan điểm lý thuyết nghiêm ngặt

Các PRG được tham số hóa bởi các tham số bảo mật $\lambda$\
PRG trở thành một mạng an toàn hơn nữa khi $\lambda$ tăng\
Chiều dài hạt và chiều dài đầu ra tăng với $\lambda$\
Cho mọi $\lambda=1,2,3, \dots$ có một PRG khác nhau:\
$\mathbf{G}_{\lambda} : \mathbf{K}_{\lambda} \rightarrow\{0,1\}^{n(\lambda)}$
(trong các bài giảng chúng ta sẽ luôn bỏ qua $\lambda$\)

### Tấn công vào OTP và mật mã dòng

#### Tấn công 1: 2 OTP là không an toàn!!

Không bao giờ sử dụng khóa mật mã luồng nhiều lần !!\
$\mathrm{C}_{1} \leftarrow \mathrm{m}_{1} \oplus \mathrm{PRG}(\mathrm{k})$\
$\mathrm{C}_{2} \leftarrow \mathrm{m}_{2} \oplus \mathrm{PRG}(\mathrm{k})$

Nghe trộm:\
$\mathrm{C}_{1} \oplus \mathrm{C}_{2} \rightarrow m_{1} \oplus m_{2}$

Đủ dư thừa trong mã hóa tiếng Anh và ASCII rằng:\
$\mathrm{m}_{1} \oplus \mathrm{m}_{2} \rightarrow \mathrm{m}_{1}, \mathrm{m}_{2}$

#### Ví dụ thế giới thực

Dự án Venona

MS-PPTP (windows NT):\
Cần các khóa khác nhau cho Client ⟶ Server và Server ⟶ Client

802.11b WEP:\
Độ dài IV: 24 bit
1. Lặp lại IV sau khung hình $2^{24}$ 16M
2. Trên một số cards 802.11: IV đặt lại về 0 sau chu kỳ nguồn

#### Tránh key liên quan

802.11b WEP:\
key for frame $\# 1 : \quad(1 \| k)$\
key for frame $\# 2 : \quad(2 \| \mathrm{k})$
Với RC4 PRG:\
FMS2001: có thể phục hồi key sau $10^6$ frame\
Gần đây: có thể phục hồi key sau $40000$ frame

#### Một xây dựng tốt hơn

Bây giờ mỗi khung có một khóa giả ngẫu nhiên.\
giải pháp tốt hơn: sử dụng phương thức mã hóa mạnh hơn (như trong WPA2)

#### Một ví dụ khác: mã hóa đĩa

Sử dụng stream cipher khi file thay đổi thì dễ phát hiện ngay vị trí thay đổi.

#### Tóm tắt

Không bao giờ sử dụng khóa mật mã luồng nhiều lần !!\
Network traffic: đàm phán khóa mới cho mỗi phiên (ví dụ: TLS)\
Mã hóa ổ đĩa: thường không sử dụng mật mã luồng

#### Tấn công 2: không toàn vẹn (OTP có thể uốn được)

Sửa đổi bản mã không bị phát hiện và có tác động dự đoán đối với bản rõ

### Mật mã dòng thế giới thực

#### Ví dụ cũ (phần mềm): RC4 (1987)

Được sử dụng trong HTTPS và WEP\
Những điểm yếu:
1. Xu hướng trong đầu ra ban đầu: $\operatorname{Pr}\left[2^{\text { nd }} \text { byte }=0\right]=2 / 256$
2. Xác suất của (0,0) là: $1 / 256^{2}+1 / 256^{3}$
3. Tìm hiểu thêm các cuộc tấn công quan trọng lên RC4

#### Ví dụ cũ (phần cứng): CSS (bị hỏng nặng)

Thanh ghi dịch chuyển phản hồi tuyến tính (LFSR):\
Mã hóa DVD (CSS): 2 LFSR\
Mã hóa GSM (A5 / 1,2): 3 LFSR\
Bluetooth (E0): 4 LFSRs\
tất cả bị hỏng\
CSS: seed = 5 byte = 40 bit\
Dễ phá vỡ trong thời gian $\approx 2^{17}$

#### Mật mã dòng hiện đại: eStream

$\mathrm{PRG} : \quad\{0,1\}^{\mathrm{s}} \times \mathrm{R} \longrightarrow\{0,1\}^{\mathrm{n}}$

R là nonce: một giá trị không lặp lại cho một khóa đã cho.

$\mathrm{E}(\mathrm{k}, \mathrm{m} ; \mathrm{r})=\mathrm{m} \bigoplus \mathrm{PRG}(\mathrm{k} ; \mathrm{r})$

Cặp $(k, r)$ không bao giờ được sử dụng nhiều hơn một lần.

#### eStream: Salsa 20 (SW+HW)(phần mềm và phần cứng)

Salsa20: $\{0,1\}^{128 \text{ hoặc } 256} \times\{0,1\}^{64} \rightarrow\{0,1\}^{n}$\
Salsa20 $(k;r)$ $:=\mathrm{H}(\mathrm{k},(\mathrm{r}, 0)) \| \mathrm{H}(\mathrm{k},(\mathrm{r}, 1))$\
h: hàm khả nghịch. được thiết kế để nhanh trên x86 (SSE2)

#### Salsa20 có an toàn (không thể đoán trước) không?

Không biết: không có PRG an toàn có thể chứng minh được\
Trong thực tế: không có cuộc tấn công nào được biết đến tốt hơn tìm kiếm toàn diện

#### Tạo tính ngẫu nhiên (ví dụ: keys, IV)

Các trình tạo ngẫu nhiên giả trong thực tế: (ví dụ: /dev/random)\
- Liên tục thêm entropy vào trạng thái nội bộ
- Nguồn Entropy:
    1. Phần cứng RNG: Intel RdRand inst. 3Gb / giây.
    2. Thời gian: ngắt phần cứng (bàn phím, chuột)

### Định nghĩa bảo mật PRG

Đặt $\mathrm{G} : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ là một PRG.

Mục tiêu:\
$[k\overset{r}{\leftarrow} K, \text{ output } G(k)]$\
Không thể phân biệt với\
$[k\overset{r}{\leftarrow} \{0,1\}^n, \text{ output } r]$

#### Kiểm tra thống kê

Kiểm tra thống kê trên $\{0,1\}^{n}$: là một thuật toán $A$ sao cho $A(x)$ output 0 nếu không random, output 1 nếu random.

Ví dụ:
1. $A(x)=1$ khi và chỉ khi $\quad|\#0(x)-\#1(x)| \leq 10 \cdot \sqrt{n}$
2. $A(x)=1$ khi và chỉ khi $\quad\left|\#00(x)-\frac{n}{4}\right| \leq 10 \cdot \sqrt{n}$
3.  $A(x)=1$ khi và chỉ khi $\text{max-run-of-0}(x)< 10 \cdot \log _{2}(n)$

#### Advantage - Lợi thế

Cho $\mathrm{G} : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ là một $\mathrm{PRG} \quad$ và $\quad \mathrm{A}$ một kiểm tra thống kê $\{0,1\}^{\mathrm{n}}$

Định nghĩa:\
$A d v_{PRG}[A, G] = [Pr_{k\overset{r}{\leftarrow}K}[A(G(k))=1]-Pr_{k\overset{r}{\leftarrow}\{0,1\}^n}[A(r)=1]] \in [0,1]$

Giả sử $G : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ thỏa mãn $\operatorname{msb}(\mathrm{G}(\mathrm{k}))=1 \quad$ cho $2/3$ các key có trong $\mathrm{K}$\
Định nghĩa test thống kê $A(x)$ như:\
nếu $[\mathrm{msb}(\mathrm{x})=1]$ output $^{\prime \prime} 1^{\prime \prime}$ else output $^{\prime \prime} 0^{\prime \prime}$\
Sau đó
$\operatorname{Adv}_{\mathrm{PRG}}[\mathrm{A}, \mathrm{G}]=| \operatorname{Pr}[\mathrm{A}(\mathrm{G}(\mathrm{k}))=1]-\operatorname{Pr}[\mathrm{A}(\mathrm{r})=1] = |2/3-1/2|=1/6$

#### PRGS an toàn: định nghĩa crypto

Def: Chúng tôi nói rằng $\mathrm{G} : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ là một PRG an toàn nếu khi và chỉ khi mọi thử nghiệm thống kê A lợi thế: $Adv_{PRG}[A, G]$ là không đáng kể.

#### Thực tế dễ dàng: một PRG an toàn là không thể đoán trước

Chúng tôi cho thấy: PRG có thể dự đoán được ⇒ PRG không an toàn
Giả sử A là một thuật toán hiệu quả như vậy mà:\
$Pr_{k\overset{r}{\leftarrow}K}[A(G(k))|_{1,...,i}=G(k)|_{i+1}]>\frac{1}{2}+\varepsilon$\
$\varepsilon$ là đáng kể (ví dụ $\varepsilon=1 / 1000 )$

#### Thm (Yao'82): PRG không thể đoán trước được an toàn

Cho $\mathrm{G} : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ là một $\mathrm{PRG}$

"thm": Nếu $\forall i \in\{0, \dots, n-1\}$ PRG G không thể đoán trước được vị trí $i$ thì G là một PRG an toàn.

Nếu các dự đoán bit tiếp theo không thể phân biệt G với ngẫu nhiên thì không có kiểm tra thống kê nào có thể !!

#### Tổng quát hơn

Cho $P_{1}$ và $P_{2}$ là hai phân phối trên $\{0,1\}^{n}$\
Def: Chúng ta nói $P_{1}$ và $P_{2}$ là không thể phân biệt ký hiệu $p_{1} \approx p_{2}$ nếu khi và chỉ khi mọi kiểm tra thống kê A:

$|Pr_{X\overset{}{\leftarrow}P_1}[A(x) =1]-Pr_{X\overset{}{\leftarrow}P_2}[A(x) =1]]< \text{không đáng kể}$

Example: a PRG is secure if $\left\{\mathrm{k} \leftarrow^{\mathrm{R}} \mathrm{K} : \mathrm{G}(\mathrm{k})\right\} \approx_{\mathrm{p}}$ uniform $\left(\{0,1\}^{\mathrm{n}}\right)$

### An ninh ngữ nghĩa

Mục tiêu: bảo mật PRG ⇒ mật mã dòng Stream an toàn

#### Mật mã an toàn là gì?

Khả năng Attacker: có được một bản mã (bây giờ)\
Yêu cầu bảo mật có thể:\
Nỗ lực số 1: kẻ tấn công không thể khôi phục khóa bí mật\
Nỗ lực số 2: kẻ ​​tấn công không thể phục hồi tất cả các bản rõ\
Nhớ lại ý tưởng của Shannon.\
CT nên tiết lộ không “thông tin” về PT

#### Nhớ lại bí mật hoàn hảo của Shannon

Cho $(E, D)$ là một mật mã trên $(K, M, C)$\
$(E, D)$ có bí mật hoàn hảo nếu $\quad \forall m_{0}, m_{1} \in M \quad\left|m_{0}\right|=\left|m_{1}\right| )$\
$\left\{E\left(k, m_{0}\right)\right\}=\left\{E\left(k, m_{1}\right)\right\} \quad$ where $k \leftarrow K$

#### Bảo mật ngữ nghĩa (one-time key)

### Mật mã dòng được bảo mật về mặt ngữ nghĩa

Mục tiêu: PRG an toàn, mật mã dòng an toàn về mặt ngữ nghĩa

#### Mật mã dòng được bảo mật về mặt ngữ nghĩa

Thm: $\mathrm{G} : \mathrm{K} \rightarrow\{0,1\}^{\mathrm{n}}$ là một PRG an toàn mật mã dòng $E$ xuất phát từ $G$ là an toàn về mặt ngữ nghĩa.
Mọ đối thủ an toàn về mặt ngữ nghĩa $A$ tồn tại một đối thủ PRG an toàn về mặt ngữ nghĩa sao cho:

$$
\operatorname{Adv}_{S S}[A, E] \leq 2 \cdot \operatorname{Adv}_{P R G}[B, G]
$$