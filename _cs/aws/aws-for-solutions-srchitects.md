---
title: AWS cho các giải pháp kiến ​​trúc
dates: 2021-07-21 00:00:01 +07:00
tags:
- life
layout: post
active: 
order: 120
libjs: 
published: true
hidden: true
---

## Lưu trữ trong AWS

### - Elastic Block Storage (EBS)

Nếu dữ liệu cần được lưu trữ vĩnh viễn, các tùy chọn Amazon EBS sau đây có sẵn.

- Thiết bị trạng thái rắn có mục đích chung (SSD)
    - Tạo môi trường dev và stg phát triển ứng dụng
- Provisioned IOPS SSD
    - Ứng dụng kinh doanh, cơ sở dữ liệu sản xuất
- Throughput Optimized HDD
    - Big data, Log processing, Streaming applications, Data warehouse
- Cold HDD
    - Lượng lỡn dữ liệu không cần truy cập thường xuyên

### - Elastic File System (EFS)

Tương tự Elastic Block Storage (EBS) sự khác biệt chính là một số phiên bản EC2 có thể được gắn vào ổ đĩa EFS cùng một lúc.

### - Simple Storage Service (S3)

| Đặc trưng  |S3 Standard |  S3 Intelligent-Tiering |   S3 Standard-IA | S3 One Zone-IA  | S3 Glacier  |  S3 Glacier Deep Archive |
|---|---|---|---|---|---|---|
| Độ bền  | 11 9s  | 11 9s  | 11 9s  | 11 9s  | 11 9s  | 11 9s  |
| Tính khả dụng  | 99.9  | 99.9  | 99.9  | 99.5  | 99.9  | 99.9  |
| Vùng khả dụng  | >=3  | >=3  | >=3  | 1  | >=3  | >=3  |
| Phí dung lượng tối thiểu cho mỗi đối tượng  | N/A  | N/A  | 128kb  | 128kb  | 40kb  | 40kb  |
| Độ trễ truy cập  | milliseconds  | milliseconds  | milliseconds  | milliseconds  | 1 min - 12 hours  | hours  |
| Data retrieval fee  | none  |  trên mỗi GB dữ liệu được truy xuất | trên mỗi GB dữ liệu được truy xuất  | trên mỗi GB dữ liệu được truy xuất  | trên mỗi GB dữ liệu được truy xuất  | trên mỗi GB dữ liệu được truy xuất  |

<br/>

Amazon S3 rất tốt và thường được sử dụng để làm như sau:
 - Lưu trữ các trang web tĩnh và trang web 
 - Lưu trữ hình ảnh và video trên web 
 - Lưu trữ lượng dữ liệu quy mô Petabyte để thực hiện phân tích dữ liệu trên đó 
 - Hỗ trợ các ứng dụng di động

Amazon EBS rất phù hợp với những điều sau đây:

 - Hỗ trợ liên tục kinh doanh 
 - Lưu trữ các ứng dụng dữ liệu lớn yêu cầu kiểm soát môi trường cao bằng cách sử dụng Hadoop, Spark và các frameworks tương tự 
 - Cho phép kiểm tra phần mềm 
 - Triển khai cơ sở dữ liệu cần được quản lý bởi người dùng và không phải AWS

Muốn hiệu suất tốt hơn milliseconds 1 chữ số có thể sử dụng Amazon Cloudfront, Amazon Elemental Mediastore hoặc Amazon ElastiCache.


## Sức mạnh tính toán



