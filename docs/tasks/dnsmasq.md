---
layout: default
title: Resolving specific domains with dnsmasq
parent: Tasks
nav_order: 2
---

brew update
brew install dnsmasq

Do you want the application `dnsmasq` to accept incoming network connections?
= Allow.

```
Warning: Taking root:admin ownership of some dnsmasq paths:
  /usr/local/Cellar/dnsmasq/2.81/sbin
  /usr/local/Cellar/dnsmasq/2.81/sbin/dnsmasq
  /usr/local/opt/dnsmasq
  /usr/local/opt/dnsmasq/sbin
  /usr/local/var/homebrew/linked/dnsmasq
This will require manual removal of these paths using `sudo rm` on
brew upgrade/reinstall/uninstall.
==> Successfully started `dnsmasq` (label: homebrew.mxcl.dnsmasq)
```

echo "conf-dir=/usr/local/etc/dnsmasq.d/,*.conf" >> /usr/local/etc/dnsmasq.conf
mkdir -p /usr/local/etc/dnsmasq.d

Make changes.
address=/apps-crc.testing/192.168.70.30
address=/api.crc.testing/192.168.70.30

sudo brew services restart dnsmasq

Verify

dig any.apps-crc.testing @127.0.0.1

sudo mkdir /etc/resolver

/etc/resolver/testing
nameserver 127.0.0.1

Based on [USE DNSMASQ INSTEAD OF /ETC/HOSTS](https://www.stevenrombauts.be/2018/01/use-dnsmasq-instead-of-etc-hosts/).
