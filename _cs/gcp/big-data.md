---
title: "3 Bước thiết kế: Big Data System"
layout: post
tags:
- gcp
- solution architect 
active: "cs"
order: 11
libjs: 
published: false

---

## Business case

Một tình huống kinh doanh cho biết lý do để bắt đầu một dự án hoặc nhiệm vụ.

Một công ty Internet cung dịch vụ online:

- Cung cấp dịch vụ nội dung cho hàng triệu người dùng
- Công ty còn thu thập và phân tích nhật ký dữ liệu khổng lồ được tạo từ cơ sở hạ tầng của mình (log
management)

Do tốc độ phát triển cơ sở hạ tầng rất nhanh nên:

- Hệ thống nội bộ hiện có không còn có thể xử lý khối lượng và tốc độ dữ liệu nhật ký cần thiết
- Hơn nữa, muốn có một hệ thống mới phục vụ cho bên khác như quản lý sản phẩm và nhà khoa học dữ liệu, những người cần các loại dữ liệu khác nhau để phân tích không chỉ dữ liệu nhật ký.



## System Requirements

<img style = "display: block;  max-width: 100%; margin: auto;"  src="/assets/pictures/user-case.png" alt="User Case">

<p style="text-align: center;">User Case</p>

### Use case model:

| Use Case      | Sự mô tả |
| ----------- | ----------- |
| UC-1: Monitor online services      | Nhân viên trực có thể theo dõi online trạng thái của cơ sở hạ tầng dịch vụ |
| UC-2: Khắc phục sự cố dịch vụ online  | Các kỹ sư vận hành và nhà phát triển có thể khắc phục sự cố và phân tích nguyên nhân gốc rễ trên các nhật ký được thu thập|
| UC-3: Cung cấp báo cáo quản lý  | Người dùng doanh nghiệp, chẳng hạn như người quản lý sản phẩm và CNTT, có thể xem thông tin lịch sử thông qua các báo cáo được xác định trước|
| UC-4: Hỗ trợ phân tích dữ liệu  | Các nhà khoa học và phân tích dữ liệu có thể thực hiện phân tích dữ liệu đặc biệt thông qua các truy vấn |
| UC-5: Phát hiện bất thường  | Nhóm vận hành phải được thông báo 24/7 về bất kỳ hành vi bất thường nào của hệ thống|
| UC-6: Cung cấp báo cáo bảo mật | Các nhà phân tích bảo mật cần được cung cấp khả năng điều tra các vấn đề về bảo mật và tuân thủ tiềm ẩn bằng cách khám phá các mục nhập nhật ký kiểm tra bao gồm địa chỉ đích và nguồn, dấu thời gian và thông tin đăng nhập của người dùng|



### Quality Attribute Scenarios:

| ID       | Thuộc tính chất lượng | Tình huống | Use Case |
| ----------- | ----------- | ----------- | ----------- |
|QA-1   |Performance|Hệ thống sẽ thu thập tới 15.000 sự kiện / giây từ khoảng 300 máy chủ web|UC-1, 2, 5|
|QA-2   |Performance|Hệ thống sẽ tự động làm mới bảng điều khiển giám sát thời gian thực cho nhân viên hoạt động trực ban với độ trễ <1 phút|UC-1|
|QA-3   |Performance|Hệ thống sẽ cung cấp các truy vấn tìm kiếm theo thời gian thực để khắc phục sự cố khẩn cấp với thời gian thực hiện truy vấn <10 giây, trong 2 tuần cuối cùng của dữ liệu|UC-2|
|QA-4   |Performance|Hệ thống sẽ cung cấp các báo cáo tĩnh cho người dùng doanh nghiệp có độ trễ <15 phút, tải báo cáo <5 giây|UC-3, 6|
|QA-5   |Performance|Hệ thống sẽ cung cấp các truy vấn đối với dữ liệu lịch sử thô và tổng hợp, với thời gian thực hiện truy vấn <2 phút. Kết quả sẽ có sẵn cho truy vấn sau <1 giờ|UC-4|
|QA-6   |Scalability|Hệ thống sẽ lưu trữ dữ liệu thô có sẵn trong 2 tuần gần nhất để xử lý sự cố khẩn cấp (thông qua tìm kiếm toàn văn thông qua nhật ký)|UC-2|
|QA-7   |Scalability|Hệ thống sẽ lưu trữ dữ liệu thô trong 60 ngày qua (khoảng 1 TB dữ liệu thô mỗi ngày, tổng cộng khoảng 60 TB)|UC-4|
|QA-8   |Scalability|Hệ thống sẽ lưu trữ dữ liệu tổng hợp theo phút trong 1 năm (khoảng 40 TB) và dữ liệu tổng hợp theo giờ trong 10 năm (khoảng 50 TB)|UC-4|
|QA-9   |Scalability|Hệ thống sẽ lưu trữ dữ liệu thô trong 60 ngày qua (khoảng 1 TB dữ liệu thô mỗi ngày, tổng cộng khoảng 60 TB)|UC-3, 4, 6|
|QA-10  |Extensibility|Hệ thống sẽ hỗ trợ thêm các nguồn dữ liệu mới chỉ bằng cách cập nhật cấu hình mà không làm gián đoạn việc thu thập dữ liệu đang diễn ra|UC-1, 2, 5|
|QA-11  |Scalability|Hệ thống sẽ lưu trữ dữ liệu thô trong 60 ngày qua (khoảng 1 TB dữ liệu thô mỗi ngày, tổng cộng khoảng 60 TB)|All use cases|
|QA-12  |Deployability|Quy trình triển khai hệ thống phải hoàn toàn tự động và hỗ trợ một số môi trường: development, test, và production|All use cases|


### Constraints

Các ràng buộc liên quan đến hệ thống được trình bày trong bảng sau.

| ID       | Constraint |
| ----------- | ----------- |
|CON-1|Hệ thống nên được sử dụng từ các công nghệ mã nguồn mở (vì lý do chi phí). Nếu công nghệ độc quền mà giá trị/chi phí lớn thì có thể sử dụng công nghệ độc quền|
|CON-2|Hệ thống sẽ sử dụng công cụ BI của công ty với giao diện SQL cho các báo cáo tĩnh (ví dụ: MicroStrategy, QlikView, Tableau)|
|CON-3|Hệ thống sẽ hỗ trợ hai môi trường triển khai cụ thể: đám mây riêng (với VMware vSphere Hypervisor) và đám mây công cộng (Amazon Web Services). Nên giữ cho nhà cung cấp triển khai càng bất khả tri càng tốt|

### Architectural Concerns

|ID | Concern|
| ----------- | ----------- |
|CRN-1|Thiết lập một cấu trúc tổng thể ban đầu vì đây là một greenfield system|
|CRN-2|Tận dụng kiến ​​thức của nhóm về hệ sinh thái Dữ liệu lớn Apache|


## The Design Process

### ADD Step 1: Review Inputs

|Category | Details|
| ----------- | ----------- |
|Mục đích thiết kế| Một thiết kế kiến ​​trúc là cần thiết để đưa ra các quyết định có ý thức và tránh làm lại không cần thiết|
|Yêu cầu chức năng chính|UC-1 , UC-2 , UC-3 , UC-4|
|Các tình huống thuộc tính chất lượng|Xem bảng ở dưới|
|Constraints|Xem lại phần ở trên|
|Architectural concerns|Xem lại phần ở trên|


### Các tình huống thuộc tính chất lượng tầm quan trọng và khó khăn:

|Scenario ID | Tầm quan trọng đối với khách hàng| Khó khăn khi thực hiện Theo KTS|
| ----------- | ----------- | ----------- |
|QA-1 |High |High|
|QA-2 |High |Medium|
|QA-3 |Medium |Medium|
|QA-4 |High |High|
|QA-5 |Medium |High|
|QA-6 |Medium |Medium|
|QA-7 |Medium |Medium|
|QA-8 |High |Medium|
|QA-9 |High |Medium|
|QA-10 |High |Medium|
|QA-11 |Medium |High|