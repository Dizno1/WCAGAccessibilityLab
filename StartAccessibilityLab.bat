@echo off
title CPACC Accessibility Lab Launcher

cd /d "%~dp0"

if exist "index.html" (
    start "" "index.html"
) else (
    echo.
    echo ERROR: index.html was not found.
    echo Make sure all files were extracted from the ZIP.
    echo.
    pause
)

exit
