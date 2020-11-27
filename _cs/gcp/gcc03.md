---
title: "Thiết kế giải pháp xử lý dữ liệu"
layout: post2
tags:
- GCP
active: "cs"
order: 7
libjs: 
published: true

---
<script>
   
var data1 = 
{"nodeData":{"id":"root","topic":"Thiết kế giải pháp xử lý dữ liệu","root":true,"children":[{"topic":"Thiết kế cơ sở hạ tầng","id":"5b8736fed0358e01","direction":0,"expanded":true,"children":[{"topic":"Chọn cơ sở hạ tầng","id":"5b873cd0423d20dd","expanded":true,"children":[{"topic":"Compute Engine\n","id":"5b87afec322daea0"},{"topic":"Kubernetes Engine","id":"5b87bd8d3a86da55"},{"topic":"App Engine \n","id":"5b87e5d4bf5f1a2f"},{"topic":"Cloud Functions\n","id":"5b8802653540fe01"}]},{"topic":"Cân nhắc","id":"5b88e56fa9da3ce7","expanded":true,"children":[{"topic":"Tính sẵn có","id":"5b88ee1c2a0f400d"},{"topic":"Độ tin cậy","id":"5b88f0dfa04e98c7"},{"topic":"Khả năng mở rộng","id":"5b88f320afe6452b"}]},{"topic":"Hybrid Cloud and Edge Computing","id":"5b88fa352f668161"}]},{"topic":"Thiết kế <br> xử lý phân tán","id":"5b89059a22c655e4","direction":1,"expanded":true,"children":[{"topic":"Distributed Processing: <br>Messaging","id":"5b8909beabe32b2c","expanded":true,"children":[{"topic":"Message Brokers\n","id":"5b891466aa8f1c6a","show":"Môi giới thông điệp là các dịch vụ cung cấp ba <br> loại chức năng: xác thực thông điệp, chuyển <br> đổi thông điệp và định tuyến."},{"topic":"Message Queues","id":"5b893f30aabf59a8","show":"Hàng đợi tin nhắn được sử dụng để kích hoạt giao <br> tiếp không đồng bộ giữa các quá trình. "},{"topic":"Event Processing Models\n","id":"5b895ddaa8c14ed1","show":"Cần có cơ xử lý các sự kiện tin nhắn. Ví dụ: một <br> số tin nhắn có thể bị trì hoãn và không được gửi..."}]},{"topic":"Distributed Processing:<br> Services","id":"5b890e4ea47989ba","expanded":true,"children":[{"topic":"Service-Oriented Architectures\n","id":"5b89db2d00055284","show":"Các dịch vụ là độc lập và không cần biết bất cứ <br> điều gì về các dịch vụ khác ngoại trừ đủ để <br> chuyển tin nhắn."},{"topic":"Microservices","id":"5b89eac19c885468","show":"Microservices được thiết kế để triển khai kết hợp <br> với nhau triển khai một tính năng."},{"topic":"Serverless Functions\n","id":"5b89fcc498f620c8","show":"Với các chức năng không có máy chủ, mã triển khai <br> một chức năng có thể được triển khai trên <br> PaaS, chẳng hạn như Google Cloud Functions, <br> mà không cần phải định cấu hình containers."}]}]},{"topic":"Di chuyển Kho dữ liệu","id":"5b8a8963141b6de0","direction":0,"expanded":true,"children":[{"topic":"Đánh giá hiện trạng<br> của kho dữ liệu","id":"5b8a933b00822618","expanded":true,"children":[{"topic":"Yêu cầu kỹ thuật","id":"5b8aa46b871a8cc2"},{"topic":"Lợi ích kinh doanh","id":"5b8aa7540c4a723e"}]},{"topic":"Thiết kế trạng thái tương lai","id":"5b8a961e003af669"},{"topic":"Di chuyển dữ liệu, <br> kiểm soát truy cập <br>vào đám mây","id":"5b8a9cb10279e705","expanded":true,"children":[{"topic":"Khai thác các cơ hội hiện tại","id":"5b8ad305875b3758","show":"Khai thác các cơ hội hiện tại tập trung vào các <br> \ntrường hợp sử dụng chứng minh giá trị kinh doanh rõ ràng."},{"topic":"Di chuyển dữ liệu đã phân tích trước tiên","id":"5b8ae82d78d481a7","show":"Thường là dữ liệu ưu tiên việc đọc"},{"topic":"Tập trung vào trải nghiệm người dùng","id":"5b8b045a751f56d5"},{"topic":"Ưu tiên các trường hợp sử dụng rủi ro thấp","id":"5b8b07af08f2986a"}]},{"topic":"Kiểm tra kho dữ liệu sau khi di chuyển","id":"5b8a9eee044e1b2c"}]},{"topic":"Giám sát tài nguyên xử lý","id":"5b8cd30aea1c5e48","direction":1,"expanded":true,"children":[{"topic":"Stackdriver Monitoring\n","id":"5b8cd6bedafb844b","show":"Giám sát Stackdriver thu thập các số liệu về hiệu<br> suất của các ứng dụng và tài nguyên cơ sở hạ tầng."},{"topic":"Stackdriver Logging\n","id":"5b8cddc05f91c6be","show":"Stackdriver Logging là một dịch vụ được sử dụng để<br> lưu trữ và tìm kiếm dữ liệu nhật ký về các<br> sự kiện trong cơ sở hạ tầng và ứng dụng."},{"topic":"Stackdriver Trace\n","id":"5b8ce4ad5c532512","show":"Stackdriver Trace là một hệ thống theo dõi phân <br> tán được thiết kế để thu thập dữ liệu về thời<br> gian xử lý các yêu cầu đến Services."}]},{"topic":"Bảo mật và tuân thủ <br> pháp luật","id":"5b8e96785310b427","direction":0,"expanded":true,"children":[{"topic":"Quản lý danh tính và quyền truy cập","id":"5b8e9f3941a204b9"},{"topic":"Bảo mật dữ liệu, <br> bao gồm mã hóa <br>và quản lý khóa","id":"5b8ea5334efb7258"},{"topic":"Data Loss Prevention","id":"5b8f0519b87ac70e"},{"topic":"Tuân thủ pháp luật","id":"5b8f09f131940a2e"}]},{"topic":"Ngoài ra dữ liệu có<br> thể được vận <br>hành theo một số cách","id":"5b92afdd70744333","direction":1,"expanded":true,"children":[{"topic":"Cataloged","id":"5b92d038ff80c01c","show":"GCP Data Catalog"},{"topic":"Preprocessed ","id":"5b92dbe1f5072255","show":"GCP Dataprep"},{"topic":"Visualized","id":"5b92de97e1ba2ad6","show":"GCP  Data Studio"},{"topic":"Explored","id":"5b92e3bbe6a83384","show":"Cloud Datalab"}]}],"expanded":true,"tags":[]},"linkData":{}}
</script>

#### References
- Official Google Cloud Certified Professional Data Engineer Study Guide


