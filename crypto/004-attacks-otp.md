---
title: Trình tạo giả ngẫu nhiên
date: 2019-08-13 12:06:23 +0000
layout: 'post'
permalink: "/crypto/004-attacks-otp.html"
author: 'Pi'
tags: []

---

## Tấn công 1: hai lần là không an toàn !!
<u>Quy tắc:</u>Không bao giờ sử dụng khóa (key) mật mã dòng nhiều lần !! <br />
$$\mathrm{C}_{1} \leftarrow \mathrm{m}_{1} \oplus \mathrm{PRG}(\mathrm{k})$$ <br />
$$\mathrm{C}_{2} \leftarrow \mathrm{m}_{2} \oplus \mathrm{PRG}(\mathrm{k})$$ <br />
Chỉ nghe lén:<br />
$$\mathrm{C}_{1} \oplus \mathrm{C}_{2} \rightarrow \mathrm{m}_{1} \oplus \mathrm{m}_{2}$$ <br />
Đủ để phân tích tiếng Anh và ASCII rằng: <br />
$$\mathrm{m}_{1} \oplus \mathrm{m}_{2} \quad \rightarrow \quad \mathrm{m}_{1}, \mathrm{m}_{2}$$


## Ví dụ thế giới thực

- Project Venona
- MS-PPTP (windows NT):
Sử dụng khóa giống nhau cho cả $$client \rightarrow server$$ và $$server \rightarrow client$$.<br />
<u>Quy tắc:</u> Không bao giờ sử dụng chung khóa cho $$client \rightarrow server$$ và $$server
\rightarrow client$$.

---

<img src="https://raw.githubusercontent.com/x3pi/storage/master/images/crypto/003.PNG"
style=" width: 80%"><br />
Chiều dài IV: 24 bits<br />
Lặp lại sau: $$2^{24} \approx 16 \mathrm{M}$$ frames<br />
Trên một số card wifi: IV resets về 0 sau khi hết chu kỳ
<u>Quy tắc:</u> Tránh các chìa khóa liên quan.

## Một xây dựng tốt hơn

Bắt đầu khởi tạo một khóa k giả ngẫu nhiên rồi mới thực hiện mở rộng khóa cho các frame tiếp theo.

## Tấn công 2: không có tính toàn vẹn
Sửa đổi mã mà không bị phát hiện và đã dự đoán được tác động vào bản rõ<br />
<img src="https://raw.githubusercontent.com/x3pi/storage/master/images/crypto/004.PNG"
style=" width: 80%">