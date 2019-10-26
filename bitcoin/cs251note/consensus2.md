---
title: Khai thác Bitcoin
date: 2019-10-21 12:06:23 +0000
layout: 'post'
permalink: "/bitcoin/cs251note/consensus2.html"
creationdate: ''
author: 'Pi'
tags: []

---

## Nhớ lại: Đặc điểm đồng thuận

- Security properties: consistency & liveness
- Mô hình mạng
    - synchronous, partially synchronous, asynchronous
- Ngưỡng tham nhũng
    - Ít hơn $1/3$ đồng bộ một phần, có thể đạt được đồng bộ cao hơn
- Mô hình cho phép
    - Fixed PKl, weighted PKI, dynamic PKI, proof-of-work

## Tóm tắt lại: sự đồng thuận của Nakamoto

- Follows the "race for leader slot" paradigm
- Được thiết kế ban đầu cho PoW, sau này được điều chỉnh theo PKI (Pos) có trọng số [Passhi'17]
- Là "hoàn toàn không được phép" trong cài đặt PoW:
    - Không biết chính xác $\#$ của các nút tham gia
    - Các nút đến và đi, "tham gia muộn"
    - Không xác thực: bất kỳ ai cũng có thể tham gia bằng cách giải quyết Pow

<hr>

- State-machine giao dịch như blockchain
<img src = "https://raw.githubusercontent.com/x3pi/storage/master/images/bitcoin/001.PNG">

<hr>

- Quy tắc ngã ba (độ khó cố định): mở rộng chuỗi dài nhất
<img src = "https://raw.githubusercontent.com/x3pi/storage/master/images/bitcoin/002.PNG"><br/>
Câu hỏi: điều gì xảy ra khi độ khó của câu đố thay đổi theo thời gian? $⇒$ theo chuỗi “nặng nhất”

<hr>

Protocol:<br/>
Mọi người tham gia đồng thuận (còn gọi là người khai thác) làm việc (nghĩa là giải câu đố PoW) để tìm một khối đầu hợp lệ mở rộng chuỗi hợp lệ nặng nhất trong chế độ xem cục bộ. Phát sóng mở rộng ngay khi phát hiện ra.

Nặng nhất theo trọng số $→$ tổng của tất cả các câu đố PoW trong chuỗi có trọng số khó khăn.

<hr>

Khi nào giao dịch được “xác nhận”? Nói sau 6 khối sâu …
<img src = "https://raw.githubusercontent.com/x3pi/storage/master/images/bitcoin/003.PNG"><br/>
lập luận xác suất rằng sau khi giao dịch đủ sâu sẽ không được đảo ngược, càng lâu càng đa số công việc được thực hiện bởi thợ mỏ trung thực

<hr>

Trực giác nhất quán: Giả sử đối thủ có $49 \%$ sức mạnh<br/>
- Kẻ thù có thể ngã ba chuỗi bởi 1 khối nhanh hơn so với thợ mỏ trung thực mở rộng chuỗi hiện tại w/ prob. gần với $1 / 2,$ hoặc bởi 2 khối xác suất $1 / 4$.
    - <sub>Không vấn đề gì! Nếu đối thủ phát sóng ngã ba, mọi người đều chuyển đổi, thì đây là chuỗi dài nhất</sub>
- Điều gì sẽ xảy ra nếu thợ mỏ rèn chuỗi 6 khối sâu và không phát sóng cho đến khi chuỗi đó dài hơn chuỗi trung thực?
    - <sub>Xác suất $1/64$ nó khai thác 6 khối trước khi khai thác trung thực 1 khối</sub>
    - <sub>Xác suất <span>$<8 * 2^{-7}$</span> Nó khai thác 7 khối trước khi khai thác trung thực 2 khối</sub>
    - <sub>Đối thủ xác suất bao giờ bắt kịp là gì?</sub>

<hr>

Trực giác nhất quán: (tiếp ...)<br/>
Giả sử đối thủ có phần sức mạnh $p<1/2$. Xác suất đối thủ bắt kịp từ 6 khối phía sau là gì?<br/>
- Mô hình đơn giản hóa: các vòng lặp lại, trong mỗi vòng đối thủ bắt tăng 1 khối với xác suất $p$, và tụt lại phía sau 1 khối với
xác suất $1-p$.
- Đi bộ ngẫu nhiên trên đường số bắt đầu từ $0, + 1$ với xác suất $p$ và $-1$ với xác suất $1-p$. Xác suất đi bộ bao giờ đạt $6$?
- Xác suất $P_{z}$ đi bộ mà bao giờ đạt $+z$ là $\left(\frac{p}{1-p}\right)^{z}$ (e.g. $p=1 / 3,$ thì $\left.P_{6}<0.0062\right)$

<hr>

Điều gì sai nếu đối thủ có sức mạnh $p > 1/2$?
- Ngã ba tư nhân của đối thủ phát triển với tốc độ nhanh hơn chuỗi trung thực
- Đối với bất kỳ $k$, đối thủ bắt đầu $k$ khối phía sau, cuối cùng sẽ bắt kịp chiều dài của chuỗi trung thực

<hr>

Độ trễ mạng & khó khăn trong công việc<br/>
- Điều gì xảy ra nếu các thợ mỏ có thể giải câu đố nhanh hơn họ có thể truyền giải pháp qua mạng?
- Kẻ thù có thể nhận được khối hợp lệ tiếp theo $\Delta$ trước các nút trung thực khác $(\Delta = \text {delay})$
    - $\Rightarrow$ Kẻ thù bắt đầu làm việc trên câu đố tiếp theo với một $\Delta$ thời gian khởi đầu qua các nút trung thực khác
    - $\mathbf{0}(\mathbf{\Delta})$ "free" hash
- Giả sử Δ lớn hơn thời gian cần những kẻ thù để giải quyết các câu đố. Trong trường hợp xấu nhất, các nút trung thực chỉ bắt đầu làm việc trên câu đố tiếp theo mỗi bước thời gian Δ, sau khi họ đã nghe thấy một khối từ các nút trung thực khác, trong khi kẻ thù nghe khối ngay lập tức, giải quyết các khối tiếp theo trong thời gian ít hơn Δ, và bắt đầu làm việc trên tiếp theo vv kẻ thù này hiện đang khai thác khối với một tốc độ nhanh hơn so với các nút trung thực trong mạng.

<hr>

Điều chỉnh độ khó cho $\Delta$<br/>
$\alpha(1-2(\Delta+1) \alpha)>\beta$<br/>
Giả sử nhỏ $\alpha$ cho công thức có ý nghĩa
- $\alpha=$ Xác suất thợ mỏ trung thực thấy khối trong 1 timestep
- $\beta=$ khả năng kẻ thù phát hiện khối trong 1 timestep
- $\Delta=\max \#$ của timesteps để truyền đạt thông điệp trong mạng
- Lưu ý: Thời gian dự kiến ​​khối trung thực $=1 / \alpha$

<hr>

Nếu $\Delta=0,$ về cơ bản nói $\left.\alpha>\beta \text { (i.e. } \frac{\alpha}{\beta}>\frac{1}{1-2 \alpha} \approx \frac{0.51}{0.49} \text { cho } \alpha=0.02\right)$<br/>
Nếu $\Delta \geq \frac{1}{2 \alpha}-1,$ công thức không bao giờ thành sự thật bởi vì $1-2(\Delta+1) \alpha=0$ (i.e. khi $\Delta>\frac{\text { E[honest block time] }}{2}$ )

<hr>

Trực giác:<br/>
Nếu $\Delta$ lớn hơn blocktime $\left(\Delta>\frac{1}{\alpha}\right),$ sau đó các nút trung thực trong mạng chỉ đồng ý với tốc độ của một khối mỗi $\Delta$, trong thời gian khai thác mỏ kẻ thù mà với tốc độ $\beta<\alpha$ cũng có thể mở rộng chuỗi riêng của nó bởi một hoặc nhiều khối, miễn là $\Delta>\frac{1}{\beta} .$

Nếu 'block-time' là $c \Delta=\frac{1}{\alpha}$ (i.e. câu đố trung thực giải quyết tất cả $c\Delta$ steps). Sau đó, trung bình, các nút trung thực lãng phí $\Delta$ bước công việc mỗi $c\Delta$ bước, trong khi đối thủ không bao giờ lãng phí công việc. Vì vậy, "hiệu quả" giảm tỷ lệ trung thực là $\alpha\left(\frac{c}{c+1}\right)=\frac{\alpha}{1+\alpha \Delta} \approx \alpha\left(1-\frac{1}{c}\right)=\alpha(1-\alpha \Delta)$







