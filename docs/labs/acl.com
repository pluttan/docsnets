router
-------
no

en
conf t
in f0/0
no sh
ex
in f0/0.10
en do 10
ip ad 192.168.10.1 255.255.255.0
ex
in f0/0.11
en do 11
ip ad 192.168.11.1 255.255.255.0
ex
in f0/0.12
en do 12
ip ad 192.168.12.1 255.255.255.0
ex
in f0/0.13
en do 13
ip ad 192.168.13.1 255.255.255.0
ex
in f0/0.14
en do 14
ip ad 192.168.14.1 255.255.255.0
ex
in f0/0.15
en do 15
ip ad 192.168.15.1 255.255.255.0
ex
in f0/1
no sh
ex
in f0/1.10
en do 10
ip ad 192.169.10.1 255.255.255.0
ex
in f0/1.11
en do 11
ip ad 192.169.11.1 255.255.255.0
ex
in f0/1.12
en do 12
ip ad 192.169.12.1 255.255.255.0
ex
in f0/1.13
en do 13
ip ad 192.169.13.1 255.255.255.0
ex
in f0/1.14
en do 14
ip ad 192.169.14.1 255.255.255.0
ex
in f0/1.15
en do 15
ip ad 192.169.15.1 255.255.255.0
ex
ip ac ex vl010Cantping
deny icmp host 192.168.10.2 any echo
permit ip any any
ex
in f0/0.10
ip ac vl010Cantping in
ex


sw1
-----

en
conf t
in f0/1
sw a v 10
ex
in f0/2
sw a v 11
ex
in f0/3
sw a v 12
ex
in f0/4
sw a v 13
ex
in f0/5
sw a v 14
ex
in f0/6
sw a v 15
ex
in f0/7
sw m t
ex

sw2
-----

en
conf t
in f0/1
sw a v 10
ex
in f0/2
sw a v 11
ex
in f0/3
sw a v 12
ex
in f0/4
sw a v 13
ex
in f0/5
sw a v 14
ex
in f0/6
sw a v 15
ex
in f0/7
sw m t
ex

