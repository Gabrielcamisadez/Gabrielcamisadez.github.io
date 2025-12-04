---
title: commands
layout: doc
---

# Table of Contents

1.  [comandos sequenciais](#org7db9e49)
2.  [substituição de comandos](#orgf8d50b2)



<a id="org7db9e49"></a>

# comandos sequenciais

comandos separados por &ldquo;;&rdquo; são executados sequencialmente. o shell espera que cada comando termina por sua vez, exemplo ->

    ls /tmp ; df -hT ; mount

pode-se também executar comandos em sequência com **&&**, operador AND ->

    ifoncifg && ls /dev

uma outra forma é com **||**, operador OR ->

    ifconfig || ip address show


<a id="orgf8d50b2"></a>

# substituição de comandos

a substituição de comandos é um recurso do shell que permite a saída de um comando substitua o próprio comando ->

uma forma é com **$(which zsh)**

    [13:44][]~ ✮ ls -l $(which zsh)
    -rwxr-xr-x 1 root root 976304 abr  8  2024 /usr/bin/zsh

outra maneira possível é com o use de crases, neste exemplo, mesmo resultado porém pegando o kernel atual em uso do sistema no lugar do nome do arquivo.

    [13:44][]~ ✮ grep -i ext4 /boot/config-6.8.0-38-generic
    CONFIG_EXT4_FS=y
    CONFIG_EXT4_USE_FOR_EXT2=y
    CONFIG_EXT4_FS_POSIX_ACL=y
    CONFIG_EXT4_FS_SECURITY=y
    
    --------------------------------------------------------------
    
    [13:44][]~ ✮ grep -i ext4 /boot/config-`uname -r`
    CONFIG_EXT4_FS=y
    CONFIG_EXT4_USE_FOR_EXT2=y
    CONFIG_EXT4_FS_POSIX_ACL=y
    CONFIG_EXT4_FS_SECURITY=y

