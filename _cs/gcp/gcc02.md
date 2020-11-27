---
title: "Thiết kế đường ống dữ liệu"
layout: post2
tags:
- GCP
active: "cs"
order: 6
libjs: 
published: true

---
<script>
   
var data1 = 
{"nodeData":{"id":"root","topic":"Thiết kế đường ống dữ liệu","root":true,"children":[{"topic":"Các giai đoạn của <br>đường ống dữ liệu","id":"5b334502414b4909","direction":0,"expanded":true,"children":[{"topic":"Quá trình nhập","id":"5b3357cd3f4b3021"},{"topic":"Chuyển đổi","id":"5b335a20c132f8de"},{"topic":"Lưu trữ","id":"5b335bbcb9a9846f"},{"topic":"Phân tích","id":"5b335f6abfebe2ae"}]},{"topic":"Các loại đường <br> ống dữ liệu","id":"5b337dccb24bdca8","direction":1,"expanded":true,"children":[{"topic":"Đường ống lưu trữ dữ liệu","id":"5b3387bdbe3011c7","expanded":true,"children":[{"topic":"Extract, Transformation, and Load","id":"5b34161b2568ee9d","show":"Lấy dữ liệu từ một hoặc nhiều nguồn và dữ liệu<br> được chuyển đổi trong đường ống trước khi được lưu<br> trữ trong cơ sở dữ liệu."},{"topic":"Extract, Load, and Transformation","id":"5b341c1c269c78ad","show":"Lấy dữ liệu từ một hoặc nhiều nguồn và dữ liệu<br> được lưu trữ nguyên thủy trước sau đó mới chuyển đổi."},{"topic":"Extraction and Load\n","id":"5b3429b328406617","show":"Không cần chuyển đổi"},{"topic":"Change Data Capture\n","id":"5b3434efae113581","show":"Đường ống kho dữ liệu thường được định hướng theo <br>lô và chạy theo lịch trình thường xuyên.<br>\nKhi dữ liệu cần được xử lý liên tục, cần có một <br> đường ống xử lý luồng."}]},{"topic":"Đường ống xử lý luồng","id":"5b338d763e962d65","show":"Khi xây dựng đường ống dữ liệu để truyền dữ liệu,<br> hãy xem xét một số yếu tố","expanded":true,"children":[{"topic":"Thời gian sự kiện và thời gian xử lý","id":"5b34a2712f2cc78f"},{"topic":"Sliding and Tumbling Windows\n","id":"5b34d2cca3318d63"},{"topic":"Late Arriving and Watermarks","id":"5b3501bb1c10f2a0","show":"Xem xét vệc dữ liệu có thể đến muộn. Nếu vượt thời gian<br> nhất định bỏ quả nó. Nhưng có thể không<br> thực sự bỏ qua nó. Từ Watermarks có lẽ <br> thể hiện ý nghĩa tương tự trường hợp <br> hiển thị hình ảnh mờ thay thế khi mà chưa load được."},{"topic":"Hot Path and Cold Path Ingestion\n","id":"5b359c9b9b547aa8","show":"Luồng dữ liệu có thể phân nhánh đi qua hai đường. <br> Đường nóng phục vụ cho nhu cầu tức thì như <br> hiển thị biều đồ theo thời gian thực. Đường <br> còn lại sẽ là đường lạnh phục vụ cho nhu cầu <br> có thể delay ví dụ như dữ liệu sẽ cho máy học xử lý."}]},{"topic":"Đường ống học máy","id":"5b3390613538d6eb","show":"Cũng giống như các đường ống xử lý khác nhưng có <br> thêm các quá trình xử lý máy học đào tạo, <br> đánh giá mô hình và triển khai."}],"show":"Ba loại phổ biến"},{"topic":"Thành phần đường ống GCP","id":"5b361c61f8cad25f","direction":0,"expanded":true,"children":[{"topic":"Cloud Pub/Sub\n","id":"5b3d80ba7471ae8f","expanded":true,"children":[],"show":"Cloud Pub / Sub là dịch vụ nhắn tin thời gian<br>\n thực hỗ trợ cả mô hình đăng ký push và pull.<br> Đây là một dịch vụ được quản lý và nó <br> không yêu cầu cung cấp máy chủ hoặc cụm.<br>\nCloud Pub / Sub sẽ tự động chia tỷ lệ và tải <br> phân vùng khi cần thiết."},{"topic":"Cloud Dataflow\n","id":"5b3d9c0ad982b2b4","show":"Đường ống Cloud Dataflow được viết bằng API Apache<br> Beam, đây là một mô hình cho quá trình<br> xử lý hàng loạt và luồng kết hợp."},{"topic":"Cloud Dataproc","id":"5b3dcbea56d2a7f1","show":"Cloud Dataproc là một dịch vụ Hadoop và Spark được<br> quản lý, nơi một cụm được cấu hình sẵn có <br> thể được tạo bằng một dòng lệnh hoặc thao tác <br> trên bảng điều khiển."},{"topic":"Cloud Composer","id":"5b3dfc67db1712a8","show":"Cloud Composer là một dịch vụ được quản lý triển <br> khai Apache Airflow, được sử dụng để lập lịch<br. và quản lý quy trình làm việc."}]}],"expanded":true,"tags":[]},"linkData":{}}
</script>

#### References
- Official Google Cloud Certified Professional Data Engineer Study Guide



