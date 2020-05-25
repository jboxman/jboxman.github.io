---
layout: default
title: Working with Time Machine backups
parent: Tasks
nav_order: 4
---

## Delete TM protected files

```
/System/Library/Extensions/TMSafetyNet.kext/Contents/Helpers/bypass <rm ...>
```

## Compare TM snapshots

```
tmutil compare <snapshot1> <snapshot2> | tee /tmp/backup-compare.txt
```

http://osxdaily.com/2012/01/21/compare-time-machine-backups-tmutil/

## Find large differences between snapshots

```
egrep '\d+M' /tmp/backup-compare.txt
egrep '\d+G' /tmp/backup-compare.txt
```

## Remove local snapshots to free up space (10.14.4)

```
tmutil thinlocalsnapshots / 21474836480 4
```

