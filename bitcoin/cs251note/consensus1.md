---
title: Khai thác Bitcoin
date: 2019-10-19 12:06:23 +0000
layout: 'post'
permalink: "/bitcoin/cs251note/consensus1.html"
creationdate: ''
author: 'Pi'
tags: []

---

## Tóm tắt: Vấn đề đồng thuận

- "State Machine Replication" trên N servers
- Dòng giao dịch: $t x_{1}, t x_{2}, \ldots$
- Cho $i=1, \ldots, n: L_{i}(t)$ là một danh sách xác nhận $T x$ tại server $i$ tại thời gian $t$
- Mục tiêu: Giao thức thỏa mãn hai thuộc tính:
    - Consistency<br/>
    Cho tất cả server $i, j \in[N]$ và thời gian $t, t^{\prime}:$<br/>
    Dù danh sách $L_{i}(t)$ là tiền tố của $L_{j}(t)$ hoặc ngược lại<br/>
    Nếu $t<t^{\prime}$ sau đó $L_{i}(t)<L_{i}\left(t^{\prime}\right)$
    - Liveness<br/>
    Tồn tại function $T$ sao cho: nếu bất kỳ máy chủ trung thực nhận $tx$ tại time $t$ thì $\forall i$ $L_{i}(t+T(\Delta))$ chứa $t x$
    $\Delta=m$ chậm trễ mạng tối đa.

## Authentication: PKI Model

- Mỗi server $i \in[N]$ xác định bởi public key $PK_{i}$
- Sơ đồ chữ ký số $\{\mathrm{Setup , ~ Sign , ~ Verify \}}$
- Server $i$ nhắn dấu hiệu $m$ như $\operatorname{sig} \leftarrow \operatorname{sign}\left(S K_{i}, m\right)$
- Các máy chủ khác xác minh chữ ký bằng cách chạy Verify $\left(P K_{i}, \operatorname{sig}, m\right)$

## Network Synchrony Models

- Đồng bộ: Có độ trễ tối đa đã biết $\Delta$ sao cho bất kỳ tin nhắn nào được gửi từ máy chủ này đến máy chủ khác đều được gửi trong $\Delta$ time.
    - Giao thức có thể sử dụng $\Delta$ làm tham số
- Đồng bộ một phần: $\Delta$ tồn tại nhưng không xác định
    - Cùng một giao thức phải hoạt động với mọi $\Delta$
- Không đồng bộ: Mạng gặp sự cố tùy ý
    - Vấn đề đồng thuận không thể giải quyết

## Ngưỡng tham nhũng

Byzantine failures: Máy chủ bị hỏng bởi Kẻ thù và hành xử tùy tiện

Theorem [Dwork-Lynch-Stockmeyer 1988]:<br/>
Sự đồng thuận giữa $N$ server trong một mạng đồng bộ một phần là không thể khi $1/3$ hoặc nhiều hơn server bị hỏng.

## Đồng thuận một lần (Thỏa thuận Byzantine)

- Một máy chủ được chỉ định được gọi là người đề xuất
- Người đề xuất phát $tx$ cho mọi máy chủ khác
- Mục tiêu: Mỗi máy chủ xuất ra $t x_{i} \in\{0,1\}^{*} .$ Giao thức đảm bảo:
    - $\forall i, j$ nếu servers $i$ và $j$ trung thực rồi $t x_{i}=t x_{j}$
    - Nếu người đề nghị là trung thực thì $\forall i ~ tx_{i}=t x$

Thách thức: người đề xuất độc hại có thể gửi các giá trị $ty$ khác nhau đến các máy chủ khác nhau

## Giảm BA đến BA nhị phân

Thỏa thuận Byzantine nhị phân<br/>
- Trường hợp đặc biệt khi người đề xuất phát $b \in\{0,1\}$
- Giảm chung từ BA xuống Binary BA, với hai vòng phát sóng thêm (Turpin-coan $1984)$
- Chúng ta sẽ thấy sự giảm này trong bài giảng tiếp theo!

## BA nhị phân cơ bản

Giả sử mô hình đồng bộ<br/>
Máy chủ phát phiếu đã ký $b_{i}$<br/>
Mỗi máy chủ đếm phiếu: nếu $\geq 2 \mathrm{N} / 3$ phiếu được nhìn thấy sau đó xuất $b^ {*}$<br/>
Nếu một máy chủ nhìn thấy $<2 \mathrm{N}/3$ phiếu bầu, hãy nhập TIMEOUT. Điều này bắt đầu một con đường phục hồi phức tạp hơn ... chúng ta sẽ thấy một trong bài giảng tiếp theo.

Không có máy chủ trung thực $i, j$ đầu ra $b_ {i} \neq b_ {j}$
- Áp dụng $\geq 2 \mathrm {N} / 3$ phiếu bầu cho cả $b_ {i}$ và $b_ {j}$
- Đặt $S_ {i} \subseteq [N]$ là tập hợp các máy chủ được bình chọn cho $b_ {i}$
- Đặt $S_ {j} \subseteq [N]$ là tập hợp các máy chủ được bình chọn cho $b_ {j}$
- $| S_ {i} \cap S_ {j} | \geq N / 3,$ do đó các bộ giao nhau trên ít nhất một máy chủ trung thực vì ít hơn $\mathrm{N} / 3$ máy chủ bị hỏng
- Điều này ngụ ý một máy chủ trung thực được bình chọn cho các giá trị riêng biệt, một mâu thuẫn.

## From BA to SMR

- Bầu cử lãnh đạo (e.g. round robin)
    - Đồng hồ đồng bộ $\rightarrow$ thời kỳ thời gian
    - Lãnh đạo mới bầu từng thời kỳ
- Nhà lãnh đạo đóng vai trò là người đề xuất trong giao thức BA
    - Trong thời kỳ $r$ nhà lãnh đạo phát sóng $tx_ {r}$
    - Máy chủ chạy BA trên $tx_{r}$

## Mô hình cấp phép PKI

Đã tham gia cố định: máy chủ $N$ trong mô hình $PKI$<br/>
PKI có trọng số: Danh sách $\left(P K_{i}, w_{i}\right).$  các phiếu bầu được ký bởi $w_{i} .$<br/>
PKi có trọng số động: Trọng số trên các khóa công khai được cập nhật thông qua sự đồng thuận<br/>
Tương đương với "bằng chứng cổ phần", trong đó trọng số là số dư trong tài khoản

## Các mô hình cho phép không PKI

- Nếu không có $\mathrm {PKI}$, mỗi người tham gia có thể giả vờ kiểm soát nhiều máy chủ tùy ý, được gọi là cuộc tấn công Sybil
- Các hình thức gán trọng lượng khác cho những người tham gia được gọi là "Kháng Sybil".
- Proof-of-work: Sức mạnh bỏ phiếu của người tham gia tỷ lệ thuận với năng lượng tiêu thụ (giải câu đố tính toán)
- Proof-of-space: Sức mạnh bỏ phiếu của người tham gia tỷ lệ thuận với không gian lưu trữ dành riêng cho hệ thống

## Proof of work

Hash function $H: X \times Y \rightarrow\{0,1\}^{256}$ (e.g. SHA256)<br/>
Câu đố khó: Số nguyên $D$<br/>
Nhập câu đố: Thử thách $c \in X$<br/>
Giải pháp câu đố: Giá trị $r \in Y$ s. $\mathrm{t} H(c, r)<2^{256} / D$<br/>
Câu hỏi: Nếu $H$ được mô hình hóa dưới dạng hàm ngẫu nhiên sao cho bất kỳ $x, r, z$ xác suất $H(x, r)=z$ là $2^{-256},$ sau đó số lượng dự kiến ​​của các thử nghiệm để tìm một giải pháp là gì $r ?$

<hr>

PuzzleSetup $(\lambda, D) \rightarrow p p$<br/>
PuzzleSolve $(p p, c) \rightarrow r$<br/>
PuzzleVerify $(p p, c, r) \rightarrow 0 / 1$

<hr>

Định nghĩa: $H$ là bằng chứng về công việc an toàn nếu thời gian chạy của $H$ là $T_H$ và với mọi thuật toán $A$ và $\epsilon>\frac{1}{D}$ như vậy mà RunTime $(\mathrm{A})<\epsilon D \mathrm{T}_{\mathrm{H}}$ cho thử thách ngẫu nhiên $x$:

$$
\operatorname{Pr}\left[H(x, A(x))<2^{256} / D\right]<\epsilon
$$

<hr>

Bitcoin đặt $D$ để giải quyết công việc cứ sau 10 phút<br/>
Yêu cầu ước tính tỷ lệ băm của toàn bộ mạng (tổng # băm được tính mỗi giây)<br/>
Bitcoin hashrate hiện tại: $45,867,201,622 \mathrm{GH} / \mathrm{s}$<br/>

$45 * 10^{\wedge} 9 * 10^{\wedge} 9$ hashes/second<br/>
$=45 * 10^{\wedge} 18$ hashes/second<br/>
$=2.7 * 10^{\wedge} 21$ hashes / 10 minutes<br/>
$\mathrm{D} \sim 2^{\wedge}\{74.5\}$

## Đồng thuận cho tham gia quy mô lớn

Mô hình cấp phép cổ điển dự kiến ​​$N$ sẽ là một số lượng nhỏ người tham gia<br/>
Các giao thức BA & SMR cổ điển không mở rộng cho $N$ lớn (giao tiếp quá nhiều)<br/>
Tiếp theo: Cuộc bầu cử ủy ban / lãnh đạo được thiết kế để giảm truyền thông mạng với sự tham gia quy mô lớn<br/>

## Hai mô hình cho cuộc bầu cử lãnh đạo

1. Trong mỗi thời kỳ, ủy ban "ngẫu nhiên" trong tổng số người tham gia (hoặc được tính theo $w_{i}$ trong mô hình PKI có trọng số). Chạy BA cổ điển trong ủy ban.
2. Cuộc đua cho vị trí lãnh đạo tiếp theo, nhà lãnh đạo ngay lập tức đề xuất giao dịch. Xác suất chiến thắng cuộc đua tỷ lệ thuận với sức mạnh Sybil (Đầu tiên để giải câu đố PoW).

## Đồng thuận Nakamoto

- Theo mô hình thứ hai
- Ban đầu được trình bày trong mô hình cấp phép PoW, sau đó được điều chỉnh để phù hợp với các mô hình cấp phép khác [PassShi'17]
- Là "hoàn toàn không được phép" trong cài đặt PoW:
    - Không biết chính xác $\#$ của các nút tham gia
    - Các nút đến và đi, tức là "tham gia muộn"
    - Không xác thực: bất kỳ ai cũng có thể tham gia bằng cách giải quyết PoW

- Rafael Pass and Elaine Shi. The sleepy model of consensus. In Asiacrypt, 2017.

<hr>

- State-machine giao dịch như blockchain
<img src = "https://raw.githubusercontent.com/x3pi/storage/master/images/bitcoin/001.PNG">

<hr>

- Quy tắc ngã ba (độ khó cố định): mở rộng chuỗi dài nhất
<img src = "https://raw.githubusercontent.com/x3pi/storage/master/images/bitcoin/002.PNG"><br/>
Câu hỏi: điều gì xảy ra khi độ khó của câu đố thay đổi theo thời gian? $\Rightarrow$ theo chuỗi "nặng nhất"

<hr>

Protocol:<br/>
Mọi người tham gia đồng thuận (còn gọi là người khai thác) làm việc (nghĩa là giải câu đố PoW) để tìm một khối đầu hợp lệ mở rộng chuỗi hợp lệ nặng nhất trong chế độ xem cục bộ. Phát sóng mở rộng ngay khi phát hiện ra.

Nặng nhất theo trọng lượng $\rightarrow$ tổng của tất cả các câu đố PoW trong chuỗi có trọng số khó khăn.

<hr>

- Khi nào giao dịch được "xác nhận"? Nói sau 6 khối sâu ...
<img src = "https://raw.githubusercontent.com/x3pi/storage/master/images/bitcoin/003.PNG"><br/>
lập luận xác suất rằng sau khi giao dịch đủ sâu sẽ không được đảo ngược, càng lâu càng đa số công việc được thực hiện bởi thợ mỏ trung thực

<hr>

Trực giác nhất quán:<br/>
Công cụ khai thác kiểm soát $49 \%$ sức mạnh có thể lập tức kết thúc chuỗi 1 khối và đánh bại tất cả các công cụ khai thác khác. gần $1/2,$ hoặc 2 khối với đầu dò. gần với $1/4$<br>
<sub>Không vấn đề gì! Nếu công cụ khai thác phát sóng ngã ba, các công cụ khai thác khác chuyển đổi vì đây là chuỗi dài nhất<sub>

Điều gì sẽ xảy ra nếu thợ mỏ rèn chuỗi 6 khối sâu và không phát sóng cho đến khi chuỗi đó dài hơn chuỗi trung thực?<br/>
<sub>Xác suất $1/64$ nó khai thác 6 khối trước khi trung thực<sub>

Xác suất khai thác chuỗi dài nhất tư nhân nhanh hơn phần trung thực của mạng suy thoái theo cấp số nhân







## 














