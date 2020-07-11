---
layout: default
title: Performing uncommon tasks on OS X / GNU/Linux
parent: Tasks
nav_order: 99
---

# Performing uncommon tasks on OS X / GNU/Linux

The following uncommon tasks might be performed to resolve strange or unwanted behavior, or are necessary too infrequently to remember.

Mostly unnecessary for OS X 10.15.3.

## What are Extended Attributes (EA) on a file or directory?

https://stackoverflow.com/questions/4833052/how-do-i-remove-the-extended-attributes-on-a-file-in-mac-os-x

```
xattr <file>
```

## What ACLs are on a file or directory?

https://superuser.com/questions/125133/os-x-not-allowing-me-to-rename-a-folder

```
ls -le <file>
chmod -RN <dir>
```

## Disconnect USB drive outside of UI

```
sudo diskutil eject /dev/disk3
```

## Missing Finder shortcuts

```
ps -ef | grep sharedfilelistd
sudo kill -9 <pid>
option-right-click Finder and select Relaunch
```

## High CPU load

CPU load:
```
launchctl stop com.apple.pluginkit.pkd && launchctl start com.apple.pluginkit.pkd
```

## Cannot umount volume

```
sudo lsof | grep /Volumes/ADATA
sudo killall mds
mdutil -i off /Volumes/VolumeName
```

## NTP timekeeping

```
sudo ntpdate -u time.apple.com
```

## Spotlight enable/disable

Completely disable and reenable:

```
sudo mdutil -i off /
sudo mdutil -E /
sudo mdutil -i on /
```

Status:

```
sudo mdutil -sv /
```

## dyld library load error

```
dyld: Library not loaded: /usr/local/opt/jpeg/lib/libjpeg.9.dylib
  Referenced from: /usr/local/bin/exiftran
  Reason: image not found
fish: 'exiftran' terminated by signal SIGTRAP (Trace or breakpoint trap)
```

Try:

```
* brew reinstall --build-from-source <package>
```

## Firewall (PF)

If the firewall is enabled, it is not possible to allow/deny
by IP range. The links below describe how to setup rules
using PF:

* https://pleiades.ucsc.edu/hyades/PF_on_Mac_OS_X
* https://www.wavether.com/2016/11/pf-firewall-macos-jetbrains

## WiFi bizarre, intermittent latency issues

Disable WiFi.
open /Library/Preferences/SystemConfiguration/
Delete these files, then restart:

com.apple.airport.preferences.plist
com.apple.network.eapolclient.configuration.plist
com.apple.wifi.message-tracer.plist
NetworkInterfaces.plist
preferences.plist

Confirm with

sudo ping -i 0.1 192.168.70.1

## Safely unmount a USB drive (Fedora)

```
udisksctl power-off -b /dev/sdb
```

## Ensure WiFi works with new akmods approach (Fedora 25+)

```
sudo dnf install -y https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-25.noarch.rpm https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-25.noarch.rpm
sudo dnf install -y broadcom-wl kernel-devel
sudo akmods --force --kernel `uname -r` --akmod wl
sudo modprobe -a wl
```
