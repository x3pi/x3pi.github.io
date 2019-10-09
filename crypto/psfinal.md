---
title: Một chủ đề hợp nhất
date: 2019-10-08 00:00:00 +0000
layout: 'post'
permalink: "/crypto/psfinal.html"
author: 'Pi'
tags: []

---
<b>Câu 1</b>:<br/>
Đặt $(E, D)$ là một hệ thống mã hóa được xác thực được xây dựng bằng cách kết hợp một mật mã đối xứng an toàn CPA và MAC. Hệ thống được kết hợp với mã sửa lỗi để sửa lỗi truyền ngẫu nhiên. Theo thứ tự mã hóa và sửa lỗi nên được áp dụng theo thứ tự nào?

<b>Trả lời</b><br/>
Mã hóa và sau đó áp dụng mã sửa lỗi.
<hr>

<b>Câu 2</b>:<br/>
Đặt $X$ là biến ngẫu nhiên đồng nhất trên tập $\{0,1 \}^n$. Đặt $Y$ là biến ngẫu nhiên tùy ý trên tập $\{0,1 \}^n$. (không phải nhất thiết phải thống nhất) đó là độc lập với $X$. Xác định biến ngẫu nhiên $Z=X \oplus Y$. Xác suất là gì $Z$ bằng $0^n$.

<b>Trả lời</b><br/>
$1 / 2^{n}$
<hr>

<b>Câu 3</b>:<br/>
Giả sử $(E_1, D_1)$ là một mật mã đối xứng sử dụng các khóa 128 bit để mã hóa tin nhắn 1024 bit. Giả sử $(E_2, D_2)$ là một đối xứng mật mã sử dụng khóa 128 bit để mã hóa tin nhắn 128 bit. Các thuật toán mã hóa $E_1$ Và $E_2$ mang tính quyết định và không sử dụng nonces. Khẳng định nào sau đây là đúng?


<b>Trả lời</b><br/>
<hr>

<b>Câu 4</b>:<br/>
Phát biểu nào sau đây liên quan đến CBC và chế độ counter là đúng?

<b>Trả lời</b><br/>
<hr>

<b>Câu 5</b>:<br/>
Đặt $G: X \rightarrow X^{2}$ là một PRG an toàn trong đó $X=\{0,1\}^{256}$.<br/>
Chúng tôi để $G(k)[0]$ chứng biểu thị nửa bên trái của đầu ra và $G(k)[1]$ biểu thị một nửa bên phải.<br/>
Khẳng định nào sau đây là đúng?

<b>Trả lời</b><br/>
$F(k, m)=m \oplus k$ is a secure PRF with key space and message space $X$`
<hr>

<b>Câu 6</b>:<br/>
Đặt $(E, D$ là một hệ thống mã hóa đối xứng không dựa trên thuật toán (tức là thuật toán $E$ lấy đầu vào là một khóa, một tin nhắn và một nonce, và tương tự như thuật toán giải mã có một nonce là một trong những đầu vào của nó). Hệ thống cung cấp bảo mật văn bản gốc được chọn (bảo mật CPA) miễn là nonce không bao giờ lặp lại. Giả sử một khóa mã hóa được sử dụng để mã hóa $2 ^ {32}$  tin nhắn và nonces được tạo độc lập ngẫu nhiên cho mỗi mã hóa, bao lâu thì nonce phải đảm bảo rằng nó không bao giờ lặp lại với xác suất cao?

<b>Trả lời</b><br/>
128 bits
<hr>

<b>Câu 7</b>:<br/>
Tương tự như câu hỏi 6 ngoại trừ việc bây giờ nonce được tạo bằng bộ đếm. Bộ đếm đặt lại về 0 khi một khóa mới được chọn và được tăng thêm 1 sau mỗi lần mã hóa. Số nonce ngắn nhất có thể là gì để đảm bảo rằng nonce không lặp lại khi mã hóa $2 ^ {32}$ tin nhắn sử dụng một phím duy nhất?
<b>Trả lời</b><br/>
$2 ^ {32}$ bits
<hr>

<b>Câu 8</b>:<br/>
Đặt $(S, V)$ là một hệ thống MAC xác định với không gian tin nhắn $M$ và khóa không gian $K$. Thuộc tính nào sau đây được ngụ ý bởi định nghĩa bảo mật MAC chuẩn?

<b>Trả lời</b><br/>
<hr>

<b>Câu 9</b>:<br/>
Đặt $H: M → T$ là hàm băm chống va chạm trong đó $| T |$ nhỏ hơn $| M |$. Tính chất nào sau đây được ngụ ý bởi khả năng chống va chạm?

<b>Trả lời</b><br/>
<hr>

<b>Câu 10</b>:<br/>
Hãy nhớ lại rằng khi mã hóa dữ liệu bạn thường nên sử dụng một hệ thống mã hóa đối xứng cung cấp mã hóa xác thực. Đặt $(E, D)$ là một hệ thống mã hóa đối xứng cung cấp xác thực mã hóa. Phát biểu nào sau đây được ngụ ý bởi mã hóa xác thực?

<b>Trả lời</b><br/>
<hr>

<b>Câu 11</b>:<br/>
Phát biểu nào sau đây là đúng về Diffie-Hellman cơ bản giao thức trao đổi khóa.


<b>Trả lời</b><br/>
<hr>

<b>Câu 12</b>:<br/>
Giả sử $n + 1$ nhóm, gọi là $B, A_1, \ldots, A_n$, muốn thiết lập một khóa nhóm được chia sẻ. Họ muốn một giao thức để cuối cùng tất cả các giao thức đều có một khóa bí mật chung $k$, nhưng một kẻ nghe trộm nhìn thấy toàn bộ cuộc trò chuyện không thể xác định được $k$. Các bên đồng ý về giao thức sau đây chạy trong một nhóm $G$ có prime order $q$ với generator $g$:<br/>
Cho $i=1, \dots, n$ nhóm $A_i$ chọn ngẫu nhiên $a_{i}$ trong $\{1, \ldots, q\}$ và gửi cho nhóm $B$ số lượng $X_{i} \leftarrow g^{a_{i}}$.<br/>
Nhóm $B$ tạo ra một $b$ ngẫu nhiên trong $\{1, \ldots, q\}$ và cho $i = 1, \ldots, n$ trả lời nhóm $A_i$ bằng tin nhắn $Y_{i} \leftarrow X_{i}^{b}$.<br/>
Khóa nhóm cuối cùng phải là $g^b$. Rõ ràng nhóm $B$ có thể tính toán chìa khóa nhóm này. Mỗi bên $A_i$ sẽ như thế nào tính toán khóa nhóm này?

<b>Trả lời</b><br/>
<hr>

<b>Câu 13</b>:<br/>
Hãy nhớ lại rằng hoán vị bẫy bẫy RSA được xác định trong nhóm $\mathbb{Z}_{N}^{*}$ trong đó $N$ là sản phẩm của hai số nguyên tố lớn. Khóa công khai là $(N, e)$ và khóa riêng là $(N, d)$ trong đó $d$ là nghịch đảo của $e$ trong $\mathbb{Z}_{\varphi(N)}^{*}$. Giả sử RSA được xác định modulo nguyên tố $p$ thay vì RSA hợp số $N$. Chỉ ra rằng trong trường hợp đó, bất kỳ ai cũng có thể tính khóa riêng $(N, d)$ từ khóa chung $(N, e)$ bằng máy tính:

<b>Trả lời</b><br/>
<hr>

