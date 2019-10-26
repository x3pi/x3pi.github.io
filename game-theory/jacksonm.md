---
title: Một giới thiệu ngắn về Lý thuyết trò chơi<br/><sub>(Matthew O. Jackson, Stanford University)</sub>
date: 2019-10-17 00:00:00 +0000
layout: 'post'
permalink: "/game-theory/jacksonm.html"
author: 'Pi'
tags: []

---

Tôi cung cấp một giới thiệu (rất) ngắn gọn lý thuyết trò chơi. Tôi đã phát triển những ghi chú để cung cấp truy cập nhanh vào một số vấn đề cơ bản của lý thuyết trò chơi; chủ yếu là một trợ giúp cho sinh viên trong các khóa học mà tôi cho rằng quen thuộc với lý thuyết trò chơi nhưng không yêu cầu nó như một điều kiện tiên quyết. Tất nhiên, các tài liệu được thảo luận ở đây chỉ là phần nổi của tảng băng trôi, và có nhiều nguồn cung cấp các phương pháp điều trị đầy đủ hơn nhiều về chủ đề này $^{1}$. Ở đây, tôi chỉ đề cập đến một vài khái niệm cơ bản nhất và cung cấp thảo luận vừa đủ để đưa ra ý tưởng mà không thảo luận về nhiều vấn đề liên quan đến các khái niệm và phương pháp tiếp cận. Bảo hiểm đầy đủ hơn có sẵn thông qua một khóa học trực tuyến miễn phí có thể được tìm thấy qua trang web của tôi: [https://web.stanford.edu/~jacksonm/](https://web.stanford.edu/~jacksonm/)

Các yếu tố cơ bản của việc thực hiện phân tích lý thuyết trò chơi bất hợp tác$^2$ là đóng khung tình huống theo các hành động có sẵn cho người chơi và tiền chi trả của họ như là một chức năng của hành động, và sử dụng các khái niệm cân bằng khác nhau để đưa ra dự đoán mô tả hoặc giả định. Trong việc đóng khung phân tích, một số câu hỏi trở nên quan trọng. Đầu tiên, ai là người chơi? Họ có thể là người, công ty, tổ chức, chính phủ, dân tộc, v.v. Thứ hai, những hành động có sẵn cho họ? Tất cả các hành động mà người chơi có thể thực hiện có thể ảnh hưởng đến bất kỳ khoản tiền thưởng nào của người chơi nên được liệt kê. Thứ ba, thời gian của các tương tác là gì? Là hành động được thực hiện đồng thời hoặc tuần tự? Là tương tác lặp đi lặp lại? Thứ tự chơi cũng rất quan trọng. Di chuyển sau khi người chơi khác có thể cung cấp cho người chơi tôi một lợi thế để biết những gì người chơi khác đã làm; nó cũng có thể khiến người chơi $i$ gặp bất lợi về thời gian bị mất hoặc khả năng thực hiện một số hành động. Những người chơi khác có thông tin gì khi họ hành động? Thứ tư, các khoản chi trả cho những người chơi khác nhau là kết quả của sự tương tác là gì? Việc xác nhận các khoản chi trả liên quan đến việc ước tính chi phí và lợi ích của từng nhóm lựa chọn tiềm năng của tất cả người chơi. Trong nhiều tình huống, có thể dễ dàng ước tính số tiền chi trả cho một số người chơi (chẳng hạn như chính bạn) so với những người khác và có thể không rõ liệu những người chơi khác cũng đang suy nghĩ chiến lược hay không. Việc xem xét này cho thấy rằng cần chú ý cẩn thận đến một phân tích độ nhạy.

Khi chúng tôi đã đóng khung tình huống, chúng tôi có thể nhìn từ các quan điểm khác nhau của người chơi để phân tích hành động nào là tối ưu cho họ. Có nhiều tiêu chí khác nhau chúng ta có thể sử dụng.

<hr>

<sub>$^1$Đối với phương pháp nghiên cứu cấp độ sau đại học, xem Roger Myerson’s (1991) Game Theory: Analysis of Conflict, Cambridge, Mass.: Harvard University Press; Ken Binmore’s (1992) Fun and Games, Lexington, Mass.: D.C. Heath; Drew Fudenberg and Jean Tirole’s (1993) Game Theory, Cambridge, Mass.: MIT Press; and Martin Osborne and Ariel Rubinstein’s (1994) A Course in Game Theory, Cambridge, Mass.: MIT Press. Ngoài ra còn có các văn bản viết tắt cung cấp một tour du lịch nhanh chóng của lý thuyết trò chơi, chẳng hạn như Kevin Leyton-Brown and Yoav Shoham’s (2008) Essentials of Game Theory, Morgan and Claypool Publishers. For broader readings and undergraduate level texts, see R. Duncan Luce and Howard Raiffa (1959) Games and Decisions: Introduction and Critical Survey; Robert Gibbons (1992) Game Theory for Applied Economists; Colin F. Camerer (2003) Behavioral Game Theory: Experiments in Strategic Interaction; Martin J. Osborne (2003) An Introduction to Game Theory; Joel Watson (2007) Strategy: An Introduction to Game Theory; Avinash K. Dixit and Barry J. Nalebuff (2010) The Art of Strategy: A Game Theorist’s Guide to Success in Business and Life; Joseph E. Harrington, Jr. (2010) Games, Strategies, and Decision Making, Worth Publishing.</sub>

<sub>$^2$“Lý thuyết trò chơi không hợp tác” đề cập đến mô hình, trong đó mỗi người chơi được giả định để hành xử ích kỷ và hành vi của họ được mô hình hóa trực tiếp. “Lý thuyết trò chơi hợp tác,” mà tôi không bao gồm ở đây, thường dùng để phân tích trừu tượng và tiên đề hơn về món hời hoặc hành vi mà người chơi có thể đạt được mà không cần mô hình hóa một cách rõ ràng các quy trình. Cái tên “hợp tác xã” xuất phát một phần từ thực tế là các phân tích thường (nhưng không phải luôn luôn) kết hợp cân nhắc liên minh, với phân tích quan trọng ban đầu trong John von Neumann và Oskar Morgenstern 1944 cuốn sách căn bản “Theory of Games and Economic Behavior.”</sub>

## Trò chơi trong Normal Form

Chúng ta hãy bắt đầu với một đại diện tiêu chuẩn của một trò chơi, mà được biết đến như một trò chơi hình thức bình thường, hoặc một trò chơi theo hình thức chiến lược:

- Tập hợp các người chơi là $N=\{1, \ldots, n\}$.
- NGười chơi $i$ có một tập hợp các hành động, $a_i$, có sẵn. Các mẫu này thường được gọi là chiến lược như tinh khiết. Bộ này có thể là hữu hạn hoặc vô hạn.
- Đặt $a=a_{1} \times \cdots \times a_{n}$ là tập hợp của tất cả các hồ sơ của các chiến lược hoặc hành động thuần túy, với một yếu tố chung biểu thị bởi $a=\left(a_{1}, \dots, a_{n}\right)$
- Người chơi $i$ thưởng phạt như một hàm của vector của hành động được mô tả bằng một hàm $u_{i}: A \rightarrow \mathbb{R}$, ở đâu $u_{i}(a)$ thưởng phạt nếu $a$ là hồ sơ cá nhân của các hành động được lựa chọn trong xã hội.

Trò chơi hình thức bình thường thường được thể hiện bằng một bảng. Có lẽ các trò chơi nổi tiếng nhất đó là tiến thoái lưỡng nan của tù nhân, trong đó được thể hiện trong Bảng 1. Trong trò chơi này có hai người chơi, mỗi người có hai chiến lược thuần túy, nơi $a_{i}=\{C, D\}$ và $C$ viết tắt của “hợp tác - cooperate” và D là viết tắt của “khiếm khuyết - defect”. Entry đầu tiên chỉ ra mối lợi về cho người chơi hàng (hoặc người chơi 1) như một hàm của cặp hành động, trong khi mục thứ hai là phần thưởng cho người chơi cột (hoặc máy nghe nhạc 2).

Bảng 1: Tù nhân A Dilemma game

<img src="https://raw.githubusercontent.com/x3pi/storage/master/images/jacksonm/01.PNG">

Câu chuyện thông thường đằng sau số tiền chi trả trong tình trạng khó xử của tù nhân là như sau. Hai người chơi đã phạm tội và hiện đang ở trong các phòng riêng biệt trong một đồn cảnh sát. Công tố viên đã đến từng người trong số họ và nói với họ từng câu: Kiếm Nếu bạn thú nhận và đồng ý làm chứng với người chơi khác, và người chơi khác không thú nhận, thì tôi sẽ cho bạn đi. Nếu cả hai bạn thú nhận, sau đó tôi sẽ gửi cả hai bạn vào tù trong 2 năm. Nếu bạn không thú nhận và người chơi khác làm vậy, thì bạn sẽ bị kết án và tôi sẽ xin mức án tù tối đa là 3 năm. Nếu không ai thú nhận, thì tôi sẽ buộc tội bạn với một tội nhẹ hơn mà chúng tôi có đủ bằng chứng để kết tội bạn và mỗi người sẽ vào tù trong 1 năm. Vì vậy, số tiền trong ma trận thể hiện thời gian bị mất trong nhiều năm tù. Thuật ngữ hợp tác đề cập đến việc hợp tác với người chơi khác. Thuật ngữ khiếm khuyết đề cập đến việc thú nhận và đồng ý làm chứng, và do đó phá vỡ thỏa thuận (ngầm) với người chơi khác.

Lưu ý rằng chúng tôi cũng có thể nhân lên từng thưởng phạt bởi một vô hướng và thêm một hằng số, mà là một đại diện tương đương (miễn là tất cả các thưởng phạt một cầu thủ cho trước được rescaled trong cùng một cách). Ví dụ, trong bảng 2 tôi đã tăng gấp đôi mỗi mục và thêm 6. Sự biến đổi này rời khỏi khía cạnh chiến lược của trò chơi không thay đổi.

Bảng 2: Một rescaling Dilemma của tù nhân

<img src="https://raw.githubusercontent.com/x3pi/storage/master/images/jacksonm/02.PNG">

Có rất nhiều trò chơi mà có thể có mô tả khác nhau thúc đẩy họ nhưng có một hình thức bình thường tương tự về các khía cạnh chiến lược của trò chơi. Một ví dụ khác của trò chơi tương tự như tiến thoái lưỡng nan của tù nhân là những gì được biết đến như một duopoly Cournot. Câu chuyện là như sau. Hai công ty sản xuất hàng hóa giống hệt nhau. Họ từng có hai cấp độ sản xuất, cao hay thấp. Nếu họ sản xuất tại sản xuất cao, họ sẽ có rất nhiều hàng hóa để bán, trong khi sản xuất thấp họ chỉ còn lại ít để bán. Nếu họ hợp tác, sau đó họ đồng ý với nhau sản tại sản xuất thấp. Trong trường hợp này, sản phẩm là rất hiếm và lấy một mức giá rất cao trên thị trường, và họ từng tạo ra lợi nhuận của 4. Nếu họ từng sản xuất tại sản xuất cao (hoặc khiếm khuyết), sau đó họ sẽ làm suy giảm giá, và mặc dù họ bán được nhiều hàng hoá, giá giảm đủ để làm giảm lợi nhuận tổng thể của họ để 2 mỗi. Nếu một trong các khuyết tật và các hợp tác khác, sau đó giá cả là trong một phạm vi giữa. Các công ty với sản xuất cao hơn bán nhiều hàng hoá và kiếm được lợi nhuận cao hơn 6, trong khi công ty với sản xuất thấp hơn chỉ bao gồm chi phí của mình và kiếm được lợi nhuận từ 0.

### Chiến lược Dominant

Cho một trò chơi trong hình thức bình thường, sau đó chúng tôi có thể đưa ra dự đoán về những hành động này sẽ được lựa chọn. Dự đoán này đặc biệt dễ dàng khi có những “chiến lược chi phối.” Một chiến lược chi phối cho một cầu thủ là một trong đó sản xuất phần thưởng cao nhất của chiến lược nào có sẵn cho tất cả các hành động có thể bởi các cầu thủ khác. 

