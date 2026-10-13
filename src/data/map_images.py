import os
import json
import re

site_root = r"c:\Users\USER\Desktop\html\Grandpa Derek love spell\grandpa-derek-site"
data_path = os.path.join(site_root, "src", "data", "site_content.json")
img_dir = os.path.join(site_root, "public", "images")

available_images = set(os.listdir(img_dir))
print(f"Total available images in public/images: {len(available_images)}")

with open(data_path, "r", encoding="utf-8") as f:
    items = json.load(f)

# Fallback pool of high quality images for spells by category
category_fallbacks = {
    "Love & Relationship Spells": [
        "011117-hot-couple-kisses-lead.jpg",
        "lostloves-1030x438.jpg",
        "LOVELOST-1030x438.jpg",
        "real-love-640x381.jpg",
        "social-value-seduction-1-678x381.jpg",
        "forgiveness-spells-640x381.jpg"
    ],
    "Court & Legal Cases": [
        "court-case.jpg",
        "court-case9b92.jpg"
    ],
    "Marriage & Separation": [
        "breakupcandlespell-1-1-800x438.jpg",
        "maternity-session-dad-poses-678x381.jpg",
        "real-love-640x381.jpg"
    ],
    "Cleansing & Protection": [
        "calabash-1030x438.jpg",
        "Protection-spells9b92.jpg",
        "Protection-spells.jpg"
    ],
    "Wealth & Business": [
        "Money.jpg",
        "Moneya6b2.jpg"
    ],
    "Ancient Magic & Rituals": [
        "calabash-1030x438.jpg",
        "Put-roots-on-someone.jpg",
        "breakupcandlespell-1-1-800x438.jpg"
    ]
}

# Ensure all fallbacks exist or pick existing
verified_fallbacks = {}
for cat, img_list in category_fallbacks.items():
    verified_fallbacks[cat] = [img for img in img_list if img in available_images]
    if not verified_fallbacks[cat]:
        verified_fallbacks[cat] = ["calabash-1030x438.jpg"]

print("Verified category fallbacks:", verified_fallbacks)

# Assign a featured_image to every spell item if missing
idx = 0
for slug, item in items.items():
    # Check if existing featured_media_url matches a local file
    feat = item.get("featured_media_url", "")
    fname = os.path.basename(feat.split("?")[0]) if feat else ""
    if fname in available_images:
        item["featured_image"] = f"/images/{fname}"
    else:
        # Determine category
        text = (slug + " " + item.get("title", "")).lower()
        if any(k in text for k in ["court", "case", "prison", "justice"]):
            pool = verified_fallbacks.get("Court & Legal Cases", ["court-case.jpg"])
        elif any(k in text for k in ["money", "wealth", "lottery"]):
            pool = verified_fallbacks.get("Wealth & Business", ["calabash-1030x438.jpg"])
        elif any(k in text for k in ["protect", "curse", "clean"]):
            pool = verified_fallbacks.get("Cleansing & Protection", ["calabash-1030x438.jpg"])
        elif any(k in text for k in ["divorce", "marriage", "breakup"]):
            pool = verified_fallbacks.get("Marriage & Separation", ["real-love-640x381.jpg"])
        else:
            pool = verified_fallbacks.get("Love & Relationship Spells", ["lostloves-1030x438.jpg"])
        
        selected = pool[idx % len(pool)]
        item["featured_image"] = f"/images/{selected}"
        idx += 1

# Ensure content images point to valid local files
for slug, item in items.items():
    content = item.get("content", "")
    # Clean any broken/invalid img tags or ensure /images/
    def fix_img(match):
        src = match.group(1)
        base = os.path.basename(src.split("?")[0])
        if base in available_images:
            return f'src="/images/{base}"'
        return f'src="{item["featured_image"]}"'
    
    content = re.sub(r'src=["\']([^"\']+)["\']', fix_img, content)
    item["content"] = content

with open(data_path, "w", encoding="utf-8") as f:
    json.dump(items, f, ensure_ascii=False, indent=2)

print("Updated site_content.json with featured_image for all items!")
