# -*- coding: utf-8 -*-
"""
Versiona los assets con un hash de su contenido para romper la caché del CDN.

Hostinger sirve CSS/JS con Cache-Control: max-age=604800 (7 días). Sin esto, un
visitante que ya estuvo en el sitio sigue viendo el JS viejo durante una semana —
y como el JS reescribe todos los textos vía el diccionario I18N, los cambios de
copy no aparecen aunque el HTML esté actualizado.

Correr SIEMPRE antes de commitear:  python build.py
"""
import hashlib
import io
import os
import re
import sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))

ASSETS = [
    ("assets/css/styles.css", r'href="assets/css/styles\.css(?:\?v=[a-f0-9]+)?"', 'href="assets/css/styles.css?v={h}"'),
    ("assets/js/main.js",     r'src="assets/js/main\.js(?:\?v=[a-f0-9]+)?"',     'src="assets/js/main.js?v={h}"'),
]

html = io.open("index.html", encoding="utf-8").read()
original = html
cambios = []

for path, pattern, template in ASSETS:
    h = hashlib.md5(open(path, "rb").read()).hexdigest()[:8]
    nuevo = template.format(h=h)
    html, n = re.subn(pattern, nuevo, html)
    if n == 0:
        sys.exit("ERROR: no encontre la referencia a {} en index.html".format(path))
    cambios.append((path, h, n))

if html != original:
    io.open("index.html", "w", encoding="utf-8").write(html)

for path, h, n in cambios:
    print("  {:<24} v={}  ({} ref)".format(path, h, n))
print("index.html {}".format("actualizado" if html != original else "sin cambios (hashes ya vigentes)"))
