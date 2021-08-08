---
title: Kubernetes Cheat Sheet
dates: 2021-07-21 00:00:01 +07:00
tags:
- cs, devops
layout: post
active: 
order: 121
libjs: 
published: true
hidden: true
---

### Tạo cụm với số lượng node trong GKE

```sh
gcloud container clusters create kubia --num-nodes <NUMBER-OF-NODES> --machine-type n1-standard-1
```


### Hiển thị thông tin Clusters

```sh
kubectl cluster-info
```

### Liệt kê danh sách Node

```sh
kubectl get nodes
# Nhiều lệnh tương tự với lệnh Pods
```

### Lấy thông tin chi tiết 1 Node

```sh
kubectl describe node <NODE-NAME>
```

### Triển khai ứng dụng

```sh
kubectl create deployment <DEPLOYMENT-NAME> --image=<IMAGE>
```

### Danh sách Pods

```sh
kubectl get pods
# Hoặc thêm thông tin nhiều hơn
kubectl get pods -o wide
# Hoặc xem thông tin labels
kubectl get pod --show-labels
# Nhóm labels thành mỗi cột riêng
kubectl get po -L <LABLE-1>,<LABLE-1>
# Lấy theo key
kubectl get po -l <KEY-LABEL>
# Hoặc không phải key này
kubectl get po -l '!<KEY-LABEL>'
# Lấy theo labels key và giá trị
kubectl get po -l <KEY-LABEL>=<VALUE-LABEL>
# Lấy theo Namespace
kubectl get po --namespace <NAMESPACE>
```

### Lấy thông tin 1 POD

```sh
kubectl describe pod <POD-NAME>
```

### Tạo Load Balancer

```sh
kubectl expose deployment <DEPLOYMENT-NAME> --type=LoadBalancer --name <LOAD-BALANCER-NAME> --port <PORT-NUMBER> --target-port <PORT_NUMBER>
```

### Danh sách Services

```sh
kubectl get services
# Hoặc
kubectl get svc
```

### Thiết lập số bản sao mong muốn

```sh
kubectl scale --replicas=<SCALE-NUMBER> deployment <DEPLOYMENT-NAME>
```

### Lấy danh sách Deploy

```sh
kubectl get deploy
# Hoặc
kubectl get deploy -A
```

### Lấy thông tin Yalm đầu đủ của một Pod

```sh
kubectl get po <POD-NAME> -o yaml
# Hoặc
kubectl get pod <POD-NAME> -o yaml
```
### Tạo một Pod từ file Yalm

```sh
kubectl create -f <FILE-NAME>
# Kèm không gian tên
kubectl create -f <FILE-NAME> -n <CUSTOM-NAMESPACE>
```

### Xem logs của container trong Pod

```sh
kubectl logs <POD-NANME> -c <CONTAINER-NAME>
```


### Chuyển tiếp cổng mạng Localhost tới Pod

```sh
kubectl port-forward <POD-NANME> <PORT-NUMBER-LOCALHOST>:<PORT-NUMBER-POD>
```

### Sửa dổi nhãn của một Pod

```sh
kubectl label po <POD-NAME> <KEY-LABEL-1>=<VALUE-LABEL-1> <KEY-LABEL-2>=<VALUE-LABEL-2>
## Với nhãn hiện có thêm --overwrite
kubectl label po <POD-NAME> <KEY-LABEL-1>=<VALUE-LABEL-1> <KEY-LABEL-2>=<VALUE-LABEL-2> --overwrite
```

### Thêm chú thích vào một Pod

```sh
kubectl annotate pod <POD-NAME> <ANNOTATE-CONTENT>
```

### Xóa Deploy

```sh
kubectl delete deploy <DEPLOYMENT-NAME> -n <SPACENAME>
```

### Xóa Service

```sh
kubectl delete service <SERVICE-NAME>
```

### Xóa Pods

```sh
kubectl delete po <POD-NAME>
# Theo Label
kubectl delete po -l <KEY-LABEL>=<VALUE-LABEL>
# Xóa Pods theo không gian tên
kubectl delete ns <CUSTOM-NAMESPACE>
# Xóa theo không gian tên hiện tại
kubectl delete po --all
# Không chỉ xóa Pods mà xóa gần như tất cả tài nguyên
kubectl delete all --all
```

### ReplicationController


```sh
```

###

```sh
```

###

```sh
```

###

```sh
```

###

```sh
```
