---
layout: post
title: Câu hỏi tuần 5
date: 2019-07-09 12:00:00 +0000
permalink: "/crypto1/quiz05"
creationdate:
author: Pi
tags:
- Note
- Crypto

---

### Câu 1

Consider the toy key exchange protocol using an online trusted 3rd party

(TTP) discussed in Lecture 9.1. Suppose Alice, Bob, and Carol are three

users of this system (among many others) and each have a secret key

with the TTP denoted k_a, k_b, k_ck 
a
​	 ,k 
b
​	 ,k 
c
​	  respectively. They wish to

generate a group session key k_{ABC}k 
ABC
​	  that will be known to Alice,

Bob, and Carol but unknown to an eavesdropper. How

would you modify the protocol in the lecture to accommodate a group key

exchange of this type? (note that all these protocols are insecure against

active attacks)

**Solution**:
Alice contacts the TTP. TP generates random $k_{A B C}$ and sends to Alice. She must also not send the shared key in the clear.  Therefore the TTP should send Alice\
$E\left(k_{a}, k_{A B C}\right), \quad$ ticket $_{1} \leftarrow E\left(k_{b}, k_{A B C}\right), \quad$ ticket $_{2} \leftarrow E\left(k_{c}, k_{A B C}\right)$\
Alice sends ticket $_{1}$ to Bob and ticket $_{2}$ to Carol.

### Câu 2