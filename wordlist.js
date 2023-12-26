var listOfWords = [
    "השלמה",
    "טמטום",
    "הקרבה",
    "טיעון",
    "שקדיה",
    "ריגול",
    "תרופה",
    "צוללת",
    "שבתאי",
    "רוסיה",
    "קבינט",
    "דילוג",
    "רביעי",
    "מושלג",
    "מקטרת",
    "שופטת",
    "יששכר",
    "כספית",
    "הוזלה",
    "משטרה",
    "תגבור",
    "משלחת",
    "מדליה",
    "עברית",
    "צפרדע",
    "משוגע",
    "גרעין",
    "משפחה",
    "הומיה",
    "שולחן",
    "שגריר",
    "שכונה",
    "ארמון",
    "גלבוע",
    "רעידה",
    "פלאפל",
    "שמיים",
    "משלוח",
    "חשבון",
    "לגמרי",
    "תחקיר",
    "שלמות",
    "בריון",
    "מרתון",
    "תשלום",
    "מתווך",
    "אקלים",
    "פנסיה",
    "מנהיג",
    "תמונה",
    "ארגמן",
    "מצפון",
    "תריסר",
    "פולין",
    "אחריה",
    "מקלחת",
    "מלקוש",
    "יהלום",
    "לוטרה",
    "תעדוף",
    "בנזין",
    "תענית",
    "אוויר",
    "רפאים",
    "שיירה",
    "מספיק",
    "מצרים",
    "אלמלא",
    "לחיים",
    "תגובה",
    "קריצה",
    "מתופף",
    "כמהין",
    "סטירה",
    "חמסין",
    "דרקון",
    "קונדס",
    "פטרול",
    "טיוטה",
    "עיירה",
    "ארומה",
    "רמדאן",
    "פיתות",
    "חללית",
    "סייען",
    "תכסיס",
    "ריבית",
    "הריון",
    "תרמית",
    "ספגטי",
    "קורבן",
    "כוסית",
    "חרוסת",
    "מהומה",
    "חלקית",
    "מיותר",
    "שלושה",
    "רפואה",
    "סביבה",
    "גלוטן",
    "תנועה",
    "סלמון",
    "שעטנז",
    "תקומה",
    "בגרות",
    "מעטפה",
    "מתנקש",
    "זיקוק",
    "איגרת",
    "משואה",
    "ישראל",
    "פוזמק",
    "עצמאי",
    "אצילי",
    "עליון",
    "הצבעה",
    "בניין",
    "פואטי",
    "פפאיה",
    "חליפה",
    "הכחשה",
    "זיווג",
    "פילגש",
    "שביתה",
    "מדורה",
    "משולש",
    "נסחפה",
    "קופים",
    "תעלול",
    "תחזית",
    "מהפכה",
    "שקיות",
    "הדלפה",
    "יחידה",
    "אפליה",
    "מתסיס",
    "ספורט",
    "פרסום",
    "פרנסה",
    "שבלול",
    "גבינה",
    "ראשית",
    "גפרור",
    "חירום",
    "דחייה",
    "חמישי",
    "גאווה",
    "מסיבה",
    "מדרגה",
    "אכילה",
    "שתיים",
    "יציאה",
    "תלמיד",
    "פרקדן",
    "תצפית",
    "אמנות",
    "שחייה",
    "ממשלה",
    "ספרות",
    "דוגמן",
    "לערוף",
    "פסיקה",
    "אשכול",
    "גרגיר",
    "תאריך",
    "רכישה",
    "ראיות",
    "נבחרת",
    "מרושע",
    "יומרה",
    "מטריד",
    "קובני",
    "תרבות",
    "אנגלי",
    "בריכה",
    "משותף",
    "תאגיד",
    "נחיתה",
    "בקבוק",
    "נוגעת",
    "קפאין",
    "ברדלס",
    "לוהטת",
    "שרטוט",
    "קדושה",
    "תסמין",
    "אחראי",
    "הפנוט",
    "ונציה",
    "עלייה",
    "מקסים",
    "קטינה",
    "מצליח",
    "תקריב",
    "כינרת",
    "לבנון",
    "גאולה",
    "פלילי",
    "גלידה",
    "חקיקה",
    "רצועה",
    "חורבן",
    "שדרות",
    "מעורב",
    "עבודה",
    "עכביש",
    "בצורת",
    "וודקה",
    "פזמון",
    "ממלכה",
    "מחסור",
    "קנצלר",
    "שניצל",
    "ירוקה",
    "חומוס",
    "בדיחה",
    "מפלגה",
    "תאורה",
    "מתמחה",
    "רמזור",
    "תדרוך",
    "שרשרת",
    "ארוחה",
    "מועצה",
    "יסודי",
    "פנתרה",
    "תקופה",
    "דליפה",
    "מינכן",
    "כלנית",
    "געגוע",
    "חבצלת",
    "מלוכה",
    "תרגום",
    "משמרת",
    "חולון",
    "חביתה",
    "פסיפס",
    "בולען",
    "שעווה",
    "ביצית",
    "פתרון",
    "הצהרה",
    "בריחה",
    "איראן",
    "כרישה",
    "פשיזם",
    "מטאור",
    "טרופי",
    "דווקא",
    "סיפוח",
    "מכוער",
    "חנינה",
    "אזהרה",
    "נעילה",
    "מרפסת",
    "הערות",
    "שושנה",
    "אתרוג",
    "כולרה",
    "הפלגה",
    "גבולי",
    "גלריה",
    "עיראק",
    "ארבעה",
    "מחזור",
    "מפקדת",
    "מלזיה",
    "זומבי",
    "סקיצה",
    "אקדמי",
    "הקלטה",
    "חלוקה",
    "מעבדה",
    "תקווה",
    "יצירה",
    "חסימה",
    "ערבות",
    "מצנפת",
    "פרגוד",
    "תוצאה",
    "מפחיד",
    "משיחי",
    "אתונה",
    "כלבים",
    "חשוכה",
    "מנסרה",
    "תהילה",
    "נזהרת",
    "אנחנו",
    "נסיגה",
    "כרכום",
    "גישור",
    "טקסים",
    "מצחיק",
    "ברזיל",
    "פספוס",
    "קזינו",
    "חברון",
    "ועידה",
    "סחורה",
    "תחרות",
    "צדדים",
    "חצייה",
    "הרגעה",
    "נסיעה",
    "ספרדי",
    "עניבה",
    "סטייק",
    "מרקדת",
    "מגבלה",
    "כוורת",
    "הפוכה",
    "ארקטי",
    "פרעוש",
    "קלקול",
    "תופים",
    "כלשהו",
    "בבואה",
    "גריפה",
    "נוקשה",
    "גלימה",
    "קופסה",
    "מזנון",
    "מופרך",
    "נוצרי",
    "סגנון",
    "טואלט",
    "ביצים",
    "טרחני",
    "מגזין",
    "סירנה",
    "צונמי",
    "תמליץ",
    "חמורה",
    "אגרוף",
    "מחבוא",
    "מדריד",
    "אופנה",
    "מנורה",
    "גיטרה",
    "ספריה",
    "מגניב",
    "בעיטה",
    "מעגלי",
    "טבריה",
    "מישוש",
    "סוודר",
    "קוקוס",
    "שנונה",
    "מלאכה",
    "טכנאי",
    "בכורה",
    "גרדום",
    "דציבל",
    "חליטה",
    "כחולה",
    "מזייף",
    "טרמיט",
    "מחזמר",
    "יקיצה",
    "שבריר",
    "דבורה",
    "מנומס",
    "שבתון",
    "צעקתי",
    "ערוגה",
    "כשרות",
    "מטמון",
    "לפניך",
    "בננות",
    "אוזון",
    "מזכרת",
    "פשוטה",
    "דובון",
    "לולאה",
    "עקצוץ",
    "גנטית",
    "נערצת",
    "תודעה",
    "מרובע",
    "חותמת",
    "עוצמה",
    "רענון",
    "ממותה",
    "דקלום",
    "פרוזה",
    "נרקיס",
    "שריון",
    "דיוקן",
    "ממוצע",
    "בורסה",
    "אנזים",
    "פרמטר",
    "לקוני",
    "ילקוט",
    "מאוחר",
    "פסולת",
    "טוקיו",
    "משאלה",
    "הפיכה",
    "ברבור",
    "כורסה",
    "טוראי",
    "נקודה",
    "ותיקן",
    "תמנון",
    "רעיון",
    "תקציב",
    "מחצלת",
    "תאונה",
    "מסטיק",
    "פרצוף",
    "מרווה",
    "תולעת",
    "חלילה",
    "אפשרי",
    "בריסל",
    "מתכון",
    "אפרוח",
    "משאית",
    "חלקיק",
    "גבעול",
    "מצולה",
    "נואשת",
    "אפילו",
    "צהרים",
    "קניבל",
    "מדחום",
    "כרכרה",
    "שלהבת",
    "חולדה",
    "נתניה",
    "מומחה",
    "למרות",
    "סרעפת",
    "פיקוס",
    "חצאית",
    "דואלי",
    "מיונז",
    "הגיון",
    "זאטוט",
    "תחתית",
    "לבנדר",
    "אצולה",
    "גרידא",
    "מוערך",
    "תסריט",
    "ציריך",
    "גרורה",
    "משושה",
    "אסבסט",
    "בלגיה",
    "מוסמך",
    "לאומי",
    "מלחיה",
    "פולחן",
    "מוזלי",
    "הופעה",
    "שיקגו",
    "מומלץ",
    "חתולה",
    "שרלטן",
    "תרמיל",
    "נקניק",
    "צידון",
    "זרזיף",
    "אביון",
    "שניים",
    "מאפיה",
    "צוואר",
    "סמסטר",
    "מכשול",
    "אלפקה",
    "מסלול",
    "סנפיר",
    "אקוטי",
    "מטורף",
    "אפרסק",
    "פרזיט",
    "אלמנט",
    "מקלון",
    "מתומן",
    "גופני",
    "מקלדת",
    "סטיקר",
    "מתחזה",
    "סמינר",
    "טייסת",
    "חונטה",
    "צמחיה",
    "תכולה",
    "ספלון",
    "פסנתר",
    "אבטיח",
    "מגבעת",
    "עגלון",
    "אורחן",
    "מרווח",
    "שתלטן",
    "נהריה",
    "פברוק",
    "רוכסן",
    "חלבון",
    "זמביה",
    "כוסמת",
    "סוררת",
    "עלמין",
    "טוסטר",
    "חיילת",
    "הצילו",
    "כלומר",
    "ליברל",
    "מותחן",
    "גופיה",
    "מהימן",
    "חופשה",
    "הביתה",
    "בדולח",
    "יגואר",
    "סאונה",
    "אגרטל",
    "חלמון",
    "אופיר",
    "עמילן",
    "מדוזה",
    "כפתור",
    "מינרל",
    "כרטיס",
    "פצירה",
    "גלולה",
    "קליפה",
    "מוגזם",
    "דורבן",
    "תרומה",
    "חוצפן",
    "דיאטה",
    "קרפדה",
    "שושלת",
    "מושלם",
    "מעלית",
    "פרמזן",
    "מהנדס",
    "שלשום",
    "תתפטר",
    "נכשלת",
    "אנושי",
    "הזיות",
    "עוגיה",
    "טלפון",
    "מרגמה",
    "אבטלה",
    "חדשות",
    "חומצה",
    "מנהרה",
    "ערכים",
    "מתאים",
    "מתקנן",
    "תבנית",
    "שמיות",
    "עריכה",
    "תפריט",
    "העברה",
    "לסרגל",
    "הסתרה",
    "רשימת",
    "אקראי",
    "אודות",
    "למצוא",
    "המקום",
    "שאינם",
    "ליצור",
    "לצורך",
    "חיפוש",
    "לעשות",
    "כניסה",
    "משתמש",
    "יצירת",
    "שנעשו",
    "ניבים",
    "העברי",
    "הגיית",
    "שינוי",
    "בעולם",
    "ראוגם",
    "נוספת",
    "עתיקה",
    "ערבית",
    "ארמית",
    "טטרית",
    "סינית",
    "רוסית",
    "אורדו",
    "יידיש",
    "עריכת",
    "התוכן",
    "קריאה",
    "המקור",
    "רשימה",
    "בדפים",
    "קישור",
    "אחרים",
    "פירוש",
    "מדינת",
    "המונח",
    "מיעוט",
    "ברחבי",
    "העולם",
    "הנתון",
    "ללשון",
    "שמשמש",
    "משפחת",
    "השפות",
    "הלאום",
    "המילה",
    "הקדום",
    "דוברי",
    "מורחב",
    "אברהם",
    "בלשון",
    "יהודה",
    "במקרא",
    "מכונה",
    "ייתכן",
    "סיווג",
    "ממלכת",
    "באזור",
    "מדובר",
    "ביותר",
    "לפנהס",
    "הקודש",
    "לציון",
    "המקרא",
    "החדשה",
    "תושבי",
    "תקופת",
    "תחיית",
    "הלשון",
    "דיברו",
    "הייתה",
    "ימינו",
    "נכתבו",
    "ואילו",
    "המשנה",
    "נכתבה",
    "ההמאה",
    "דיבור",
    "הטקסט",
    "שימשה",
    "עדיין",
    "לאורך",
    "בעיקר",
    "כתיבת",
    "יהדות",
    "ארצות",
    "כיוון",
    "בשפות",
    "אחרות",
    "תיבון",
    "מדעית",
    "נאלצו",
    "מילים",
    "שונות",
    "לשפות",
    "תנועת",
    "אחדים",
    "יחסית",
    "המנדט",
    "רשמית",
    "שנייה",
    "מיוחד",
    "שימוש",
    "בפועל",
    "תחביר",
    "תחילת",
    "יהודי",
    "הגייה",
    "הבולט",
    "קיימת",
    "במידה",
    "משמשת",
    "שאינן",
    "השפעת",
    "ניכרת",
    "המשמש",
    "ניקוד",
    "במקום",
    "המזרח",
    "מופיע",
    "הצורה",
    "לזהות",
    "מקובל",
    "פיסוק",
    "לקרוא",
    "באופן",
    "מחדשי",
    "לימוד",
    "מכתשי",
    "עיצור",
    "מחוכך",
    "ענבלי",
    "מקורב",
    "הוגים",
    "פרוטו",
    "דוגמה",
    "בשיטת",
    "פונמה",
    "ימנית",
    "פונמי",
    "ייצגה",
    "בהמשך",
    "זוגות",
    "לעומת",
    "השורש",
    "המשקל",
    "מאוצר",
    "הכתיב",
    "נקראת",
    "הסכמה",
    "נטייה",
    "הרכבת",
    "יוצרת",
    "משורש",
    "הברית",
    "עיינו",
    "הוצאת",
    "מלכים",
    "הימים",
    "נחמיה",
    "תלמוד",
    "מגילה",
    "גיטין",
    "כיילה",
    "אנעים",
    "אדולף",
    "היטלר",
    "תווית",
    "מלחמה",
    "בפוטש",
    "במרתף",
    "ביקור",
    "הראשי",
    "הבאים",
    "לעבור",
    "למעלה",
    "מלחמת",
    "הפוטש",
    "הבירה",
    "עליית",
    "מינוי",
    "הרייך",
    "השנים",
    "האחדה",
    "מיתוס",
    "השואה",
    "פריצת",
    "רדיפת",
    "הסופי",
    "ומותו",
    "עילית",
    "מפלגת",
    "בראון",
    "ביוני",
    "אנטון",
    "פרסים",
    "הברזל",
    "נקודת",
    "מוענק",
    "בשנים",
    "משישה",
    "השמדת",
    "בספרו",
    "התקדם",
    "שמונה",
    "ליושב",
    "הנהיג",
    "צבאית",
    "ממשלת",
    "קאמפף",
    "עקרון",
    "המשבר",
    "ולאחר",
    "לקראת",
    "כוללת",
    "ברייך",
    "מאוחד",
    "חלוקת",
    "במהלך",
    "עםרצח",
    "בהתאם",
    "הזירה",
    "בעלות",
    "לגבור",
    "והורה",
    "האשים",
    "ברלין",
    "אלויס",
    "גאורג",
    "הידלר",
    "יוהאן",
    "הצליח",
    "ילדים",
    "אנגלה",
    "העדיף",
    "ללמוד",
    "באותה",
    "הצעיר",
    "היחיד",
    "למוקד",
    "החליט",
    "ניתוח",
    "כריתת",
    "המשיך",
    "בתחום",
    "ונמנע",
    "באותם",
    "לבלוך",
    "החיים",
    "לעצמו",
    "כשהוא",
    "הגדול",
    "החלטה",
    "ממקום",
    "למקום",
    "לאזול",
    "בסופו",
    "ויותר",
    "שחזרו",
    "בשיחה",
    "שורשי",
    "מעולם",
    "בבירת",
    "לראות",
    "שונים",
    "עומדת",
    "תפיסת",
    "לתמוך",
    "למעשה",
    "עליהם",
    "גדולה",
    "שעשתה",
    "לואגר",
    "באותו",
    "בראשי",
    "בדמות",
    "גרמני",
    "בעיני",
    "עבורי",
    "להיות",
    "ניכרה",
    "שאותה",
    "במיין",
    "הגזעי",
    "נראתה",
    "איתרו",
    "הסוהר",
    "המכתב",
    "הרשים",
    "כששאל",
    "לפרוץ",
    "לברית",
    "קיומי",
    "והפכו",
    "העברת",
    "אזורי",
    "חבריו",
    "כוחות",
    "נהרגו",
    "חיילי",
    "לחזית",
    "המאמץ",
    "בחזית",
    "ונשלח",
    "שאינו",
    "מפקדו",
    "גוטמן",
    "עובדה",
    "שלאחר",
    "ששימש",
    "מתקפת",
    "השנאה",
    "להפוך",
    "ביולי",
    "כשישה",
    "הגנרל",
    "הפסקת",
    "לחתום",
    "האומה",
    "פושעי",
    "ורסאי",
    "הקודם",
    "גמליך",
    "המטרה",
    "קבוצה",
    "אנשים",
    "המושג",
    "התקבל",
    "ארגון",
    "הוסיף",
    "לעבוד",
    "חברים",
    "לנאום",
    "התחיל",
    "הצבאי",
    "מעמדו",
    "שלישי",
    "נאומו",
    "הנואם",
    "בנאום",
    "לבנות",
    "מדינה",
    "הישגי",
    "כנואם",
    "ארנסט",
    "גרינג",
    "אלפרד",
    "ממוצא",
    "האישי",
    "הבינו",
    "שנערך",
    "בעצמו",
    "מכובד",
    "המשטר",
    "גוסטב",
    "אמורה",
    "זייסר",
    "לוסוב",
    "כעבור",
    "בגידה",
    "שניתן",
    "שחרור",
    "מוקדם",
    "ההצגה",
    "ארתור",
    "אויבו",
    "הנצחי",
    "המאבק",
    "תיאור",
    "בשנות",
    "מאסרו",
    "במהרה",
    "הגאון",
    "החרות",
    "כלכלי",
    "לגרוף",
    "הפסיד",
    "הנשיא",
    "כלכלה",
    "דנמרק",
    "הולנד",
    "הכנסה",
    "הונהג",
    "שירות",
    "ואילך",
    "במידת",
    "מכונת",
    "חומרי",
    "מבחוץ",
    "שאפשר",
    "המזון",
    "לוותר",
    "שישבו",
    "גוסטף",
    "הנאצי",
    "הנוער",
    "במאבק",
    "למשטר",
    "לפעול",
    "הרושם",
    "לדעתו",
    "לעולם",
    "פעילי",
    "רצונו",
    "לנקוט",
    "הצורך",
    "אלברט",
    "מרטין",
    "בורמן",
    "מפקדי",
    "קייטל",
    "חודשה",
    "ועידת",
    "ההסכם",
    "וצרפת",
    "הכרזת",
    "לרייך",
    "פלישת",
    "ניתנה",
    "בעלפה",
    "פקודה",
    "לפועל",
    "לשעבר",
    "בעיית",
    "למאבק",
    "שאותו",
    "העמים",
    "הימלר",
    "דברים",
    "בנוסף",
    "הורטי",
    "אישית",
    "נאצית",
    "לעצור",
    "נאצים",
    "קבוצת",
    "טרסקו",
    "הוצאה",
    "האדום",
    "במזרח",
    "בלעדי",
    "בשעות",
    "ואווה",
    "גופתו",
    "בניטו",
    "בשלהי",
    "הביון",
    "פורסם",
    "לחייו",
    "ראובל",
    "יחסים",
    "מערכת",
    "הנשים",
    "נטיות",
    "תרגמה",
    "מילוא",
    "שיחות",
    "סגולה",
    "אויבי",
    "עתליה",
    "זילבר",
    "ספרית",
    "אפקים",
    "מחלקה",
    "ריכרד",
    "הלמוט",
    "המשרד",
    "גזעית",
    "הטלאי",
    "הצהוב",
    "תקיעת",
    "הסכין",
    "להגנת",
    "להפצת",
    "המכון",
    "פטירה",
    "כתובת",
    "מהותי",
    "פירוט",
    "וכמעט",
    "לוודא",
    "בצורה",
    "השיחה",
    "הודעה",
    "אליהם",
    "וכדאי",
    "בואנא",
    "להסיר",
    "לציין",
    "איליץ",
    "אנגלס",
    "אמצעי",
    "החברה",
    "שנקרא",
    "במשטר",
    "שיתוף",
    "פעולה",
    "חופשי",
    "השליט",
    "צרכיו",
    "מרכזי",
    "יוסיף",
    "ציבור",
    "סטלין",
    "מהפכת",
    "תפיסה",
    "נפילת",
    "הכנסת",
    "השנות",
    "לשלום",
    "הערבי",
    "קריסת",
    "שלטון",
    "מילון",
    "בריחת",
    "למפרץ",
    "ההגנה",
    "אייבל",
    "תקרית",
    "איחוד",
    "הדדית",
    "הסכמי",
    "פוינט",
    "המעבר",
    "הרשות",
    "החליף",
    "סיומת",
    "ניווט",
    "ומידת",
    "ערכיה",
    "סמלים",
    "שבדרך",
    "שנותה",
    "העשור",
    "חינוך",
    "השכלה",
    "גבוהה",
    "פריון",
    "וממשל",
    "הממשל",
    "לחימה",
    "וחשמל",
    "כווית",
    "סוריה",
    "המנון",
    "הרצוג",
    "מעמדה",
    "ומידע",
    "מיקום",
    "המשפט",
    "יבשתי",
    "באייר",
    "גילאי",
    "ומעלה",
    "מקומי",
    "לשואה",
    "לחללי",
    "הוקמה",
    "הגולן",
    "רצועת",
    "נתוני",
    "הלשכה",
    "ערביי",
    "במערב",
    "סוףים",
    "בדרום",
    "בצפון",
    "נמצאת",
    "להקמת",
    "הצהרת",
    "בלפור",
    "הביאו",
    "הקמתה",
    "שביתת",
    "השלום",
    "אוסלו",
    "תהליך",
    "נחתמו",
    "כבירת",
    "דןגוש",
    "ובפרט",
    "המרכז",
    "כלכלת",
    "היסוד",
    "בשיטה",
    "בחירה",
    "דורגה",
    "תוחלת",
    "מגילת",
    "פעמים",
    "המלאך",
    "טיטוס",
    "המקדש",
    "מנורת",
    "הקנים",
    "אזרחי",
    "הוחלט",
    "הצעות",
    "עבריה",
    "בענפי",
    "זכריה",
    "ליצחק",
    "בכסלו",
    "שמקום",
    "בניסן",
    "החגים",
    "בסמוך",
    "שקבעה",
    "מכירה",
    "במעמד",
    "לשמור",
    "שלושת",
    "נמכרו",
    "כוכבא",
    "דתיות",
    "קטנות",
    "ידועה",
    "ודתות",
    "הוקמו",
    "מטרתה",
    "להקים",
    "ויצמן",
    "מעשית",
    "תקנות",
    "הוביל",
    "להגיע",
    "ההכרה",
    "מועצת",
    "החלטת",
    "הירדן",
    "הכריז",
    "הירוק",
    "הרשמי",
    "כגבול",
    "הוכפל",
    "המוסד",
    "בנושא",
    "גירוש",
    "צבאות",
    "הסגול",
    "שטחים",
    "ההתשה",
    "הטרור",
    "מטרות",
    "במטרה",
    "לפחות",
    "נחשבת",
    "המספר",
    "הגבוה",
    "לכנסת",
    "מימין",
    "לשמאל",
    "אנואר",
    "סאדאת",
    "המערך",
    "דרכים",
    "בשלבי",
    "בנייה",
    "להשיג",
    "מטוסי",
    "ופתחה",
    "הגליל",
    "כיבוש",
    "ומרכז",
    "והקים",
    "הימין",
    "השמאל",
    "שמעון",
    "אחדות",
    "פיגוע",
    "המפרץ",
    "חתימת",
    "לבקשת",
    "בכנסת",
    "ערבים",
    "ירידה",
    "בהיקף",
    "בטרור",
    "מנהרת",
    "הכותל",
    "אירעו",
    "אריאל",
    "חטיפת",
    "ואזרח",
    "ביחסי",
    "נערכו",
    "קדימה",
    "האוצר",
    "לצמוח",
    "חברות",
    "בגבול",
    "פיתוח",
    "טילים",
    "דונלד",
    "טראמפ",
    "אלטיף",
    "עופרת",
    "למספר",
    "יצוקה",
    "רקטות",
    "ועדות",
    "הנושא",
    "המחאה",
    "מחירי",
    "הדיור",
    "הסלמה",
    "עשרות",
    "השיבה",
    "וארבע",
    "חיסון",
    "הוכרז",
    "האסון",
    "יוחאי",
    "כהונת",
    "גופות",
    "משטרת",
    "הגבול",
    "שזכתה",
    "חרבות",
    "מישור",
    "משמאל",
    "לדרום",
    "בגליל",
    "הכרמל",
    "ומפרץ",
    "כורכר",
    "שנטעה",
    "ולוטם",
    "הצומח",
    "השפלה",
    "חולות",
    "ומדבר",
    "גבישי",
    "שמורת",
    "דישון",
    "מקראי",
    "בחיבר",
    "לערבה",
    "גובלת",
    "החורף",
    "הצפון",
    "המערב",
    "הדרום",
    "מדברי",
    "עונות",
    "גיוון",
    "משתרע",
    "ברובו",
    "רכסים",
    "במרכז",
    "אורכה",
    "גידול",
    "משאבי",
    "נחלים",
    "בערים",
    "מקווי",
    "החולה",
    "ייבוש",
    "אגמון",
    "עשירה",
    "מרבית",
    "האזור",
    "במספר",
    "מיניה",
    "ארוכה",
    "ומספר",
    "הודות",
    "מצויה",
    "חמציץ",
    "ההרים",
    "שעירה",
    "אגסני",
    "חרצית",
    "עטורה",
    "אירוס",
    "לצידם",
    "מינים",
    "המדבר",
    "השדות",
    "דוגמת",
    "למנות",
    "האפור",
    "ומבין",
    "פירות",
    "הכחדה",
    "יםצבי",
    "ימיים",
    "הכללי",
    "איננו",
    "במפרץ",
    "נכחדו",
    "מרבדי",
    "לשדות",
    "באביב",
    "כחליל",
    "השברק",
    "הפרפר",
    "אנדמי",
    "שנחשב",
    "לנכחד",
    "נולדה",
    "ילידי",
    "לנשים",
    "העדתי",
    "ובעלי",
    "מיושב",
    "הבלתי",
    "ראשון",
    "מתבטא",
    "עולים",
    "תיקון",
    "מברית",
    "הפרדת",
    "דתיים",
    "שיעור",
    "הפנים",
    "איננה",
    "כיתות",
    "חטיבת",
    "החרדי",
    "נמוכה",
    "בהקמת",
    "ועומד",
    "לידות",
    "הכולל",
    "עלידי",
    "השיטה",
    "לכונן",
    "להיום",
    "אוחנה",
    "נשיאת",
    "ואולם",
    "לנשיא",
    "תפקיד",
    "בהליך",
    "כינון",
    "סיעות",
    "מחברי",
    "חשאית",
    "שעברה",
    "דורגו",
    "וככזו",
    "בחברה",
    "בידיה",
    "מליאת",
    "יכולה",
    "בחירת",
    "רשאית",
    "מוחלט",
    "נציגי",
    "מקבלת",
    "שמירת",
    "מנהלת",
    "רווחה",
    "להביא",
    "למשפט",
    "השרים",
    "מנוהל",
    "מסוים",
    "לדיון",
    "מחוזי",
    "מיוצג",
    "הדתית",
    "בגישה",
    "מטעמי",
    "להסדר",
    "התורה",
    "אגודת",
    "גדולי",
    "נרחבת",
    "ניהול",
    "ודוגל",
    "חברתי",
    "והקמת",
    "תמיכה",
    "הזרוע",
    "נשענה",
    "בתוכו",
    "משנות",
    "לירדן",
    "וסיוע",
    "מהווה",
    "הסיוע",
    "בזכות",
    "למנוע",
    "טובים",
    "טובות",
    "הכירו",
    "לוחמה",
    "ערובה",
    "סיכול",
    "שייטת",
    "יכולת",
    "ונחשב",
    "יחידת",
    "ממספר",
    "תפעול",
    "לוחמת",
    "המידע",
    "מיוצר",
    "חומים",
    "מרכבה",
    "בעשור",
    "המחקר",
    "הקרקע",
    "אלביט",
    "ברובם",
    "תוצרת",
    "מעצמה",
    "דחפור",
    "קרבית",
    "מסדרת",
    "פופאי",
    "בולטת",
    "תשתית",
    "מפעלי",
    "מהתמג",
    "לבייב",
    "כללית",
    "מאגרי",
    "בסכום",
    "תעופה",
    "קטנים",
    "החשמל",
    "הארצי",
    "מוכרת",
    "משרפת",
    "תפוקת",
    "מגוטש",
    "לטובת",
    "בזירה",
    "עכשיו",
    "תחנות",
    "לינוי",
    "שחקני",
    "זכיות",
    "משחקי",
    "הפועל",
    "בעונת",
    "בגביע",
    "בשיאה",
    "בשיאו",
    "הנכים",
    "מפותח",
    "זוכים",
    "טיפול",
    "חולים",
    "קופות",
    "תמותת",
    "הערהא",
    "פערים",
    "דירוג",
    "המוכר",
    "תמונת",
    "האהוב",
    "לידתה",
    "האדמה",
    "למחקר",
    "מניות",
    "אלאור",
    "ספירת",
    "תנאים",
    "ולסוף",
    "גתתצה",
    "בגלות",
    "מפתיע",
    "חושפת",
    "נצפים",
    "והיכן",
    "הנצפה",
    "משעלי",
    "המגזר",
    "במגזר",
    "ברנזה",
    "מדיני",
    "הורות",
    "ולידה",
    "אירוע",
    "ספרים",
    "סרטים",
    "ורדיו",
    "ידעתם",
    "האוכל",
    "פרווה",
    "ונדלן",
    "בונים",
    "לטייל",
    "סלולר",
    "ומנהג",
    "לועזי",
    "חרדים",
    "צילום",
    "צפיות",
    "מוביל",
    "פרישר",
    "בחודש",
    "בכתבה",
    "הגיעו",
    "לבקעת",
    "ערוצי",
    "בשילה",
    "חומות",
    "הוארו",
    "לזכרו",
    "זיתים",
    "עבודי",
    "ליאור",
    "מצטער",
    "אלסטר",
    "טאלנט",
    "תזכור",
    "ששכחת",
    "ששוני",
    "יונתן",
    "רוטמן",
    "תביעה",
    "מהסבל",
    "עלינו",
    "צריכה",
    "לחטוף",
    "הגדרה",
    "כנראה",
    "למונח",
    "תוגדר",
    "הכרחי",
    "נדרשת",
    "מאידך",
    "שנשלט",
    "וימין",
    "רואות",
    "מדרום",
    "רוחבה",
    "נתונה",
    "נותרה",
    "ומעבר",
    "ברפיח",
    "שיגור",
    "השלמת",
    "מחמוד",
    "מוצרי",
    "רפואי",
    "המבצע",
    "ונגרם",
    "במבצע",
    "התרחב",
    "שכללה",
    "מתמשך",
    "עזהדף",
    "אלבלח",
    "מרלין",
    "מתוכם",
    "הטבעי",
    "ביצוע",
    "מניעה",
    "שהוטל",
    "נהרסו",
    "פינוי",
    "ערפאת",
    "ריבוי",
    "מעטים",
    "מחסום",
    "נסיגת",
    "ייצוא",
    "אלפים",
    "שנוצר",
    "השוכן",
    "החמאס",
    "הבהרה",
    "מסילת",
    "מרפיח",
    "שנפתח",
    "אשדוד",
    "ברוחב",
    "המצרי",
    "התפצל",
    "משלטי",
    "מצרית",
    "מרדכי",
    "בצמוד",
    "העשרה",
    "נכבשה",
    "מחנות",
    "למבצע",
    "גבליה",
    "הביאה",
    "ישיבת",
    "נותרו",
    "שליטה",
    "מנשקם",
    "גדודי",
    "הריגת",
    "נפצעו",
    "למעבר",
    "עוינת",
    "פגיעה",
    "לרכוש",
    "לאזור",
    "מספקת",
    "לפגוע",
    "במפגש",
    "תבערה",
    "ממוקד",
    "שוגרו",
    "קתדרה",
    "יחיאל",
    "פיקוד",
    "חגורה",
    "הברחה",
    "ברשות",
    "השתים",
    "השלוש",
    "הארבע",
    "מקבלי",
    "סיירת",
    "בעמוד",
    "לעזור",
    "אותנו",
    "התחום",
    "שישית",
    "חשדות",
    "ופרשת",
    "להגשת",
    "אישום",
    "העמדה",
    "ספריו",
    "כתבות",
    "בתשרי",
    "סלואן",
    "ביתנו",
    "קייטס",
    "ינואר",
    "סילבן",
    "יעלון",
    "ראובן",
    "שחורה",
    "נפתלי",
    "בןדהן",
    "אילון",
    "אלקין",
    "כחלון",
    "שטרית",
    "הנגבי",
    "צלטנר",
    "השמעה",
    "שנולד",
    "הצטרף",
    "ושלוש",
    "דצמבר",
    "שכיהן",
    "שהוגש",
    "והפרת",
    "חקירה",
    "מירון",
    "תחילה",
    "דודיו",
    "השתתף",
    "קציני",
    "שעליו",
    "עסקים",
    "ניתאי",
    "הבהיר",
    "שאינה",
    "הועבר",
    "וואלה",
    "שנהרג",
    "אנטבה",
    "מכתבי",
    "מקומו",
    "אהרון",
    "קולות",
    "כשרים",
    "הקלטת",
    "וידאו",
    "התנצל",
    "בכיכר",
    "והסכם",
    "רעננה",
    "בהפרש",
    "הלילה",
    "לפנות",
    "יריבו",
    "עימות",
    "הופיע",
    "אלעזר",
    "מזכיר",
    "לדאוג",
    "קודמו",
    "פתיחת",
    "לטענת",
    "הפסגה",
    "בהסכם",
    "לקיים",
    "בחאלד",
    "לדרוש",
    "הסכים",
    "מלווה",
    "ביצעה",
    "יקבלו",
    "לאודר",
    "מטעמו",
    "שהציג",
    "ייקבע",
    "נרצחו",
    "לוחמי",
    "הודיע",
    "האלוף",
    "אלקנה",
    "שפירא",
    "הפחתת",
    "ביטול",
    "חלקים",
    "כלפיו",
    "מאנשי",
    "מתקפה",
    "עליהן",
    "גורמי",
    "מועמד",
    "לימים",
    "יציבה",
    "הפרדה",
    "הנהגת",
    "פוטין",
    "לבסוף",
    "פקודת",
    "הקלות",
    "באמצע",
    "השולי",
    "המרבי",
    "הועלה",
    "העניק",
    "ביטוח",
    "לרבות",
    "קרנות",
    "לקבלת",
    "לעודד",
    "למכור",
    "גופים",
    "האחים",
    "בחברת",
    "תמורת",
    "נכשלה",
    "הפרטי",
    "סיימה",
    "אמיתי",
    "פרסמה",
    "העוני",
    "שלפיו",
    "לנדאו",
    "להדיח",
    "ההצעה",
    "נדחתה",
    "הצהיר",
    "נבחרה",
    "שפגעה",
    "לעמוד",
    "הדגיש",
    "אישרה",
    "פרטית",
    "שעסקה",
    "השקעה",
    "הקדמת",
    "הבאות",
    "התפטר",
    "ליבני",
    "הביעו",
    "להטיל",
    "אובמה",
    "כנשיא",
    "הנאום",
    "הגיעה",
    "הקפאת",
    "לסגור",
    "מיידי",
    "הקפאה",
    "דרישה",
    "עמוקה",
    "וירדן",
    "העצרת",
    "ביקשה",
    "שהחלה",
    "אושרה",
    "תקיפת",
    "מתקני",
    "שיהאב",
    "יוחסו",
    "געברי",
    "שנועד",
    "מיסים",
    "ששיאן",
    "העלאת",
    "צעדים",
    "בנוגע",
    "חשיפת",
    "הועלו",
    "כבדים",
    "בחינת",
    "במחאה",
    "פגישה",
    "מורגן",
    "להסכם",
    "במשרד",
    "ליצמן",
    "עתירה",
    "מלאכת",
    "סיכמו",
    "ובסוף",
    "אפריל",
    "נחשפו",
    "ביצעו",
    "קהילת",
    "יוחנן",
    "חריפה",
    "ולבני",
    "סיפור",
    "שפרסם",
    "סרטון",
    "בסכנה",
    "לקלפי",
    "שכללו",
    "דריסה",
    "בוצעו",
    "שלפיה",
    "עוררו",
    "לחמאס",
    "המפקד",
    "הסביר",
    "שרוצה",
    "מימון",
    "מהסכם",
    "מתווה",
    "בימין",
    "פילבר",
    "למנכל",
    "ניגוד",
    "לממלא",
    "למהלך",
    "התנגד",
    "הוקפא",
    "חריגה",
    "אישור",
    "לפרוש",
    "לפטור",
    "הטבות",
    "נרשמו",
    "כולנו",
    "גדעון",
    "הושבע",
    "מיועד",
    "מחאות",
    "רכישת",
    "מגעים",
    "מוחמד",
    "חקירת",
    "להפיל",
    "להשגת",
    "בטענה",
    "חוקים",
    "רוצים",
    "חשובה",
    "מהלכי",
    "היועץ",
    "חקיקת",
    "פגישת",
    "מידית",
    "בוטלו",
    "בכירי",
    "תצביע",
    "יידחה",
    "הדיון",
    "קארין",
    "אלהרר",
    "ביידן",
    "סלמאן",
    "טענות",
    "להגיש",
    "שביצע",
    "הליכי",
    "אביחי",
    "עמדתה",
    "אמסלם",
    "נמצאה",
    "לקיחת",
    "ומרמה",
    "הכחיש",
    "חסרות",
    "החפות",
    "אכיפת",
    "בפרשה",
    "באשמת",
    "במרמה",
    "שקיבל",
    "בכפוף",
    "הגישו",
    "תביעת",
    "וחייב",
    "שהגיש",
    "כוונה",
    "השופט",
    "והחלל",
    "ליאון",
    "אלישע",
    "שמואל",
    "הולכה",
    "הושתל",
    "ופעיל",
    "טייטל",
    "שמרון",
    "מולכו",
    "דניאל",
    "קורות",
    "מעריב",
    "רונית",
    "אדוני",
    "עקיבא",
    "זמורה",
    "מועלם",
    "לביבי",
    "אפרתי",
    "איתמר",
    "ועידו",
    "אלמוג",
    "חשיפה",
    "אישים",
    "בצומת",
    "תרכוש",
    "טלקום",
    "המטבע",
    "אטילה",
    "אביעד",
    "אמנון",
    "זרחיה",
    "אביטל",
    "פילוט",
    "יסעור",
    "נחשפה",
    "ויסמן",
    "למשרד",
    "התקשר",
    "במקור",
    "סלסקי",
    "יסייע",
    "לסיום",
    "וטובה",
    "ואמיר",
    "איציק",
    "התשעח",
    "אדמקר",
    "איכות",
    "ויניר",
    "אביטן",
    "שלומי",
    "בעקבה",
    "לימור",
    "המפכל",
    "סניור",
    "קוזין",
    "חכמון",
    "פלייר",
    "איילת",
    "השרפה",
    "בכרמל",
    "תיקשר",
    "עמיחי",
    "אליהו",
    "המקשר",
    "ביטון",
    "טרופר",
    "מיכאל",
    "אורית",
    "עידית",
    "סילמן",
    "בצלאל",
    "שיקלי",
    "גולדה",
    "יהושע",
    "מודעי",
    "בייגה",
    "שמשון",
    "גיורא",
    "בנטוב",
    "אטיאס",
    "אלוני",
    "שםטוב",
    "סויסה",
    "שמולי",
    "הדואר",
    "יעקבי",
    "דינור",
    "שגשוג",
    "מפלצת",
    "חיקוי",
    "ידלין",
    "שמחון"
  ]
