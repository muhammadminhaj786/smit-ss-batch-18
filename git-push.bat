@echo off
REM ===== Git Global Config =====
git config --global user.name "muhammadminhaj786"
git config --global user.email "eb20103087.minhajwahid@gmail.com"

REM ===== Git Add =====
git add .

REM ===== Take Commit Message Input =====
set /p commitMsg=Enter commit message: 

REM ===== Git Commit =====
git commit -m "%commitMsg%"

REM ===== Git Push =====
git push

pause
