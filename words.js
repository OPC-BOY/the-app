const unitsData = {
  unit1: {
    title: "Unit 1: Lessons 3 & 4 - Medical Emergencies & Hospital Care",
    
    // 1. Key Vocabulary
    keyVocab: [
      { word: "director", pos: "n.", translation: "مدير / مخرج", isHard: false },
      { word: "state", pos: "n./v.", translation: "حالة / ولاية / يصرح", isHard: false },
      { word: "respond", pos: "v.", translation: "يستجيب / يرد", isHard: false },
      { word: "panicked", pos: "adj.", translation: "مذعور / في حالة ذعر", isHard: true },
      { word: "stitch", pos: "n./v.", translation: "غرزة خياطة / يخيط", isHard: true },
      { word: "forehead", pos: "n.", translation: "الجبهة", isHard: false },
      { word: "groan", pos: "v./n.", translation: "يئن / يتألم بصوت منخفض", isHard: true },
      { word: "moan", pos: "v./n.", translation: "يئن / ينوح / يتذمر", isHard: false },
      { word: "clutch", pos: "v./n.", translation: "يمسك بشدة / قبضة", isHard: true },
      { word: "swallow", pos: "v.", translation: "يبتلع", isHard: false },
      { word: "scope", pos: "n.", translation: "نطاق / مدى / مجال", isHard: true },
      { word: "urgency", pos: "n.", translation: "إلحاح / حاجة ماسة وسريعة", isHard: true },
      { word: "rise", pos: "v.", translation: "يرتفع / ينهض / يزيد", isHard: false },
      { word: "experience", pos: "n./v.", translation: "خبرة / تجربة / يمر بتجربة", isHard: false },
      { word: "gratitude", pos: "n.", translation: "امتنان / شكر", isHard: true },
      { word: "proudly", pos: "adv.", translation: "بفخر", isHard: false },
      { word: "prescription", pos: "n.", translation: "روشتة / وصفة طبية", isHard: true },
      { word: "symptoms", pos: "n.", translation: "أعراض المرض", isHard: false }
    ],

    // 2. Main Vocabulary
    mainVocab: [
      { word: "relief", pos: "n.", translation: "راحة / ارتياح", isHard: false },
      { word: "healing", pos: "n./adj.", translation: "شفاء / علاجي", isHard: false },
      { word: "bleeding", pos: "n.", translation: "نزيف", isHard: false },
      { word: "flexible", pos: "adj.", translation: "مرن", isHard: false },
      { word: "sacrifice", pos: "n./v.", translation: "تضحية / يضحي", isHard: true },
      { word: "hesitation", pos: "n.", translation: "تردد", isHard: true },
      { word: "staff", pos: "n.", translation: "طاقم عمل / موظفين", isHard: false },
      { word: "remind", pos: "v.", translation: "يذكر", isHard: false },
      { word: "construction", pos: "n.", translation: "بناء / إنشاء", isHard: false },
      { word: "instructions", pos: "n.", translation: "تعليمات", isHard: false },
      { word: "hand", pos: "v.", translation: "يسلم / يعطي باليد", isHard: false },
      { word: "shout", pos: "v.", translation: "يصرخ / يرفع صوته", isHard: false },
      { word: "temperature", pos: "n.", translation: "درجة حرارة", isHard: false },
      { word: "dedication", pos: "n.", translation: "تفانٍ / إخلاص", isHard: true },
      { word: "compassion", pos: "n.", translation: "رحمة / شفقة / عطف", isHard: true },
      { word: "value", pos: "n./v.", translation: "قيمة / يقدر", isHard: false },
      { word: "antiseptic", pos: "n.", translation: "مطهر", isHard: true },
      { word: "medication", pos: "n.", translation: "دواء / علاج دوائي", isHard: false },
      { word: "tears", pos: "n.", translation: "دموع", isHard: false },
      { word: "career", pos: "n.", translation: "مهنة / مشوار وظيفي", isHard: false },
      { word: "examine", pos: "v.", translation: "يفحص / يمعن النظر", isHard: false },
      { word: "analyze", pos: "v.", translation: "يحلل", isHard: true },
      { word: "technician", pos: "n.", translation: "فني / تقني", isHard: true },
      { word: "collarbone", pos: "n.", translation: "عظمة الترقوة", isHard: true },
      { word: "wipe", pos: "v.", translation: "يمسح", isHard: false },
      { word: "sterile", pos: "adj.", translation: "معقم / عقيم", isHard: true },
      { word: "throat", pos: "n.", translation: "حلق / حنجرة", isHard: false },
      { word: "clinic", pos: "n.", translation: "عيادة", isHard: false },
      { word: "injured", pos: "adj.", translation: "مصاب / مجروح", isHard: false },
      { word: "confident", pos: "adj.", translation: "واثق", isHard: false },
      { word: "toddler", pos: "n.", translation: "طفل صغير يبدأ في المشي", isHard: true },
      { word: "crash", pos: "n./v.", translation: "تصادم / حادث", isHard: false },
      { word: "steady", pos: "adj.", translation: "ثابت / مستقر", isHard: false },
      { word: "member", pos: "n.", translation: "عضو", isHard: false },
      { word: "remove", pos: "v.", translation: "يزيل / يرفع / يعزل", isHard: false },
      { word: "serious", pos: "adj.", translation: "خطير / جاد", isHard: false },
      { word: "treatment", pos: "n.", translation: "علاج / معالجة", isHard: false },
      { word: "miserable", pos: "adj.", translation: "بائس / تعيس", isHard: true },
      { word: "cough", pos: "v./n.", translation: "يسعل / يكح / كحة", isHard: false },
      { word: "teenager", pos: "n.", translation: "مراهق", isHard: false },
      { word: "emotionally", pos: "adv.", translation: "عاطفياً", isHard: false },
      { word: "grasp", pos: "v.", translation: "يمسك بقوة / يفهم جيداً", isHard: true },
      { word: "condition", pos: "n.", translation: "حالة / وضع", isHard: false }
    ],

    // 3. Definitions
    definitions: [
      { word: "Stitch", defEn: "A piece of thread passed through fabric or skin with a needle.", defAr: "غرزة خياطة بالجراحة أو القماش." },
      { word: "Forehead", defEn: "The part of the face above the eyebrows and below the hairline.", defAr: "الجبهة (أعلى الوجه فوق الحواجب)." },
      { word: "Groan", defEn: "Making a deep sound of pain or discomfort.", defAr: "صوت أنين عميق يعبر عن الألم." },
      { word: "Moan", defEn: "To make a low sound expressing pain or discomfort.", defAr: "صوت أنين منخفض بسبب الألم." },
      { word: "Clutch", defEn: "To hold something tightly, especially because you are afraid or in pain.", defAr: "الإمساك بشيء بشدة بدافع الخوف أو الألم." },
      { word: "Swallow", defEn: "To make food or drink go from your mouth down to your stomach.", defAr: "ابتلاع الطعام أو الشراب إلى المعدة." },
      { word: "Scope", defEn: "The range or extent of something.", defAr: "نطاق أو مدى شيء معين." },
      { word: "Urgency", defEn: "Need for quick action.", defAr: "الحاجة الماسة والسريعة للتصرف." },
      { word: "Gratitude", defEn: "The feeling of being thankful.", defAr: "شعور الامتنان والشكر." }
    ],

    // 4. Word Relations (Synonyms & Antonyms)
    wordRelations: [
      {
        word: "groan",
        synonyms: ["moan", "whine", "grumble"],
        antonyms: ["cheer", "rejoice"]
      },
      {
        word: "moan",
        synonyms: ["groan", "whimper", "complain"],
        antonyms: ["cheer", "praise"]
      },
      {
        word: "clutch",
        synonyms: ["grip", "grasp", "grab"],
        antonyms: ["release", "free", "drop", "let go"]
      },
      {
        word: "serious",
        synonyms: ["dangerous", "severe"],
        antonyms: ["unserious", "safe", "humorous"]
      },
      {
        word: "scope",
        synonyms: ["range", "extent", "reach", "field"],
        antonyms: ["limitation", "restriction"]
      },
      {
        word: "gratitude",
        synonyms: ["thankfulness", "appreciation"],
        antonyms: ["thanklessness", "ungratefulness"]
      },
      {
        word: "rise",
        synonyms: ["increase", "ascend", "grow"],
        antonyms: ["fall", "decline", "decrease"]
      },
      {
        word: "steady",
        synonyms: ["stable", "constant", "firm"],
        antonyms: ["unsteady", "unstable", "shaky"]
      },
      {
        word: "panicked",
        synonyms: ["terrified", "fearful", "shocked"],
        antonyms: ["calm", "relaxed"]
      },
      {
        word: "respond",
        synonyms: ["reply", "answer", "react"],
        antonyms: ["ignore", "neglect", "overlook"]
      }
    ],

    // 5. Collocations & Prepositions
    collocations: [
      { word: "give instructions", trans: "يعطي تعليمات" },
      { word: "check medical charts", trans: "يفحص السجلات الطبية" },
      { word: "get much worse", trans: "يزداد سوءاً" },
      { word: "have a small cough", trans: "يعاني من سعال بسيط" },
      { word: "make an appointment", trans: "يحجز / يحدد موعداً" },
      { word: "make decisions", trans: "يتخذ قرارات" },
      { word: "have a headache", trans: "يعاني من صداع" },
      { word: "give a prescription for", trans: "يكتب وصفة طبية لـ" },
      { word: "perform (do) operations", trans: "يجري عمليات جراحية" },
      { word: "feel better", trans: "يشعر بتحسن" },
      { word: "be in full", trans: "يكون مكتمل العدد" },
      { word: "a deep cut on", trans: "جرح عميق في" },
      { word: "run into", trans: "يصادف / يصطدم بـ" },
      { word: "cover in", trans: "مغطى بـ" },
      { word: "full of", trans: "ممتلئ بـ" },
      { word: "fill with", trans: "يمتلئ بـ" }
    ],

    // 6. Expressions
    expressions: [
      { exp: "a medical emergency", defAr: "حالة طبية طارئة" },
      { exp: "emergency room (ER)", defAr: "غرفة الطوارئ" },
      { exp: "fly open", defAr: "يفتح بسرعة / ينفتح فجأة" },
      { exp: "come to an end", defAr: "يقترب من نهايته / ينتهي" },
      { exp: "a construction worker", defAr: "عامل بناء" },
      { exp: "weep with relief", defAr: "يبكي من شدة الارتياح" },
      { exp: "take over", defAr: "يتولى / يستلم المسؤولية" },
      { exp: "in fact", defAr: "في الحقيقة / في الواقع" },
      { exp: "be proud of / take pride in", defAr: "يفخر بـ" },
      { exp: "cry out", defAr: "يصرخ / يزأر" }
    ],

    // 7. Idioms
    idioms: [
      { idiom: "rain cats and dogs", defAr: "تمطر بغزارة شديدة" },
      { idiom: "soaked to the skin", defAr: "مبتل تماماً من رأسها حتى أخمص قدميه" },
      { idiom: "jump into action", defAr: "يبدأ العمل بسرعة وبحماس" },
      { idiom: "pale as a ghost", defAr: "شاحب جداً (من الخوف أو المرض)" },
      { idiom: "calm under pressure", defAr: "هادئ ومتمسك تحت الضغط والمواقف الصعبة" },
      { idiom: "calm slowly returned", defAr: "يعود الهدوء تدريجياً" },
      { idiom: "under the weather", defAr: "يشعر بالتوعك أو بمرض خفيف" }
    ],

    // 8. Derivatives & Notes
    derivativesNotes: [
      { item: "Groan vs Moan", detail: "كلاهما أنين بسبب الألم، لكن Groan صوت أنين أعمق وأعلى، وMoan أنين منخفض قد يعبر عن التشكي أيضاً." },
      { item: "Clutch vs Grasp", detail: "Clutch الإمساك بشدة بدافع الخوف أو الألم، أما Grasp فيعني الإمساك بقوة أو فهم الفكرة جيداً." },
      { item: "Rise vs Raise", detail: "Rise (فعل لازم) يرتفع أو يشرق بدون مفعول به، بينما Raise (فعل متعدٍ) يرفع شيئاً أو يجمع تبرعات ويحتاج مفعولاً." },
      { item: "Scope vs Range", detail: "Scope يشير لنطاق ومجال العمل أو الدراسة، أما Range فيشير لمدى التفاوت أو المسافة." },
      { item: "Experience (n./v.)", detail: "تأتي اسم غير معدود بمعنى (خبرة عملية)، واسم معدود بمعنى (تجربة حياتية)، وفعل بمعنى (يمر بتجربة)." }
    ]
  }
};
