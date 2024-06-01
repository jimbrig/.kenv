@echo off
set NODE_NO_WARNINGS=1
set KENV=%~dp0..
set KNODE=C:\Users\jimmy\.knode
set KIT=C:\Users\jimmy\.kit
set TARGET_PATH=C:\Users\jimmy\.kenv\scripts\windows-kill-any-running-process-by-name.ts

%KNODE%\bin\node.exe --experimental-loader %KIT%\build\loader.js  %KIT%\run\terminal.js %TARGET_PATH% %*
