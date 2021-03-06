---
layout: default
title: Advanced DNS configuration for OS X
parent: Tasks
nav_order: 1
---

## Where to find DNS configuration on OS X

To lists manual hosts:

```
cat /etc/hosts
```

To list all the resolvers:

```
scutil --dns
```

On OS X, `/etc/resolv.conf` (a symlink to `../var/run/resolv.conf`) is not typically used:

```
cat /etc/resolv.conf
#
# macOS Notice
#
# This file is not consulted for DNS hostname resolution, address
# resolution, or the DNS query routing mechanism used by most
# processes on this system.
#
# To view the DNS configuration used by this system, use:
#   scutil --dns
#
# SEE ALSO
#   dns-sd(1), scutil(8)
#
# This file is automatically generated.
#
```

On OS X, the DNS resolver may be overwritten for particular LTDs by creating files in `/etc/resolver`:

```
cat /etc/resolver/testing
port 53
nameserver 192.168.64.5
search_order 1
```

## DNS resolution order

Based on [this](https://stackoverflow.com/questions/50914268/os-x-etc-resolver-dev-isnt-working-why-not), apps and `ping` use the system resolver. `dig`, `nslookup`, and `host` do not.

## How to query a specific DNS server

Useful for confirming DNS is configured correctly.

```
dig <host> +noall +answer <dns_server>
```
