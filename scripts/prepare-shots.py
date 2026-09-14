from PIL import Image, ImageDraw, ImageFont
import glob, os, re

SRC = r"C:\Projek\Porto"
OUT = r"C:\Projek\Porto\rizki-ananda-web-porto\public\showcase"
BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
REG  = r"C:\Windows\Fonts\segoeui.ttf"
SIDEBAR = (47, 53, 57)
BRAND = (99, 102, 241)
MUTED = (107, 114, 128)

def sidebar_width(im):
    px = im.load()
    for x in range(0, 500):
        r, g, b = px[x, 12][:3]
        if abs(r-SIDEBAR[0]) + abs(g-SIDEBAR[1]) + abs(b-SIDEBAR[2]) > 30:
            return x
    return 293

def company_right_edge(im):
    px = im.load()
    w = im.size[0]
    best = None
    for x in range(1200, min(w, 1800)):
        for y in range(62, 86):
            r, g, b = px[x, y][:3]
            if r + g + b < 450:
                best = x
                break
    return best

def censor(path, im):
    d = ImageDraw.Draw(im)
    sw = sidebar_width(im)
    # wipe "AYODA ERP" logo block
    d.rectangle([0, 8, sw - 1, 102], fill=SIDEBAR)
    # new mark: rounded square + white diamond
    d.rounded_rectangle([20, 32, 64, 76], radius=13, fill=BRAND)
    d.polygon([(42, 42), (56, 54), (42, 66), (28, 54)], fill=(255, 255, 255))
    d.text((78, 39), "ERP", font=ImageFont.truetype(BOLD, 29), fill=(255, 255, 255))
    # collapse toggle circle
    d.ellipse([240, 44, 262, 66], outline=(140, 148, 155), width=2)
    d.ellipse([248, 52, 254, 58], fill=(140, 148, 155))
    # top-right company line
    edge = company_right_edge(im)
    if edge:
        d.rectangle([1250, 60, edge + 3, 86], fill=(255, 255, 255))
        f = ImageFont.truetype(REG, 16)
        d.text((edge, 63), "PT Nusantara Group (Finance HO)", font=f, fill=MUTED, anchor="ra")
    return im

def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")

jobs = [("Cashiermedia V1", "cashiermedia-v1", False),
        ("Cashiermedia V2", "cashiermedia-v2", False),
        ("ERP", "erp", True)]

for folder, slug, do_censor in jobs:
    dst = os.path.join(OUT, slug)
    os.makedirs(dst, exist_ok=True)
    for f in sorted(glob.glob(os.path.join(SRC, folder, "*.png"))):
        im = Image.open(f).convert("RGB")
        if do_censor:
            im = censor(f, im)
        base = slugify(os.path.splitext(os.path.basename(f))[0])
        full = im.copy()
        full.thumbnail((1600, 1600), Image.LANCZOS)
        full.save(os.path.join(dst, base + ".webp"), quality=84, method=5)
        th = im.copy()
        th.thumbnail((760, 760), Image.LANCZOS)
        th.save(os.path.join(dst, base + "-thumb.webp"), quality=80, method=5)
        print(slug, base)
