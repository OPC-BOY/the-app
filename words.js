// words.js - الشامل الكامل لجميع قوائم الوحدة الأولى (Unit 1: Lessons 1 & 2)
const unitsData = {
  unit1: {
    title: "Unit 1: Lessons 1 & 2",
    lessonTitle: "Hospital Duty & Emergency Care",
    
    // 1. الكلمات المفتاحية (Key Vocabulary)
    keyVocab: [
      { id: 1, word: "shift", pos: "n/v", translation: "وردية عمل / تحول / يحول", isHard: false },
      { id: 2, word: "buzz", pos: "n/v", translation: "ضجة / إثارة / يضج", isHard: false },
      { id: 3, word: "attention", pos: "n", translation: "انتباه / اهتمام / عناية", isHard: false },
      { id: 4, word: "victim", pos: "n", translation: "ضحية", isHard: false },
      { id: 5, word: "administer", pos: "v", translation: "يعطي علاج / يدير / ينفذ", isHard: true },
      { id: 6, word: "rollercoaster", pos: "n", translation: "تجربة مليئة بالتقلبات", isHard: true },
      { id: 7, word: "collapse", pos: "n/v", translation: "ينهار / يسقط / انهيار", isHard: false },
      { id: 8, word: "grab", pos: "v", translation: "يمسك بسرعة / يختطف", isHard: false },
      { id: 9, word: "chest", pos: "n", translation: "صدر", isHard: false },
      { id: 10, word: "chaos", pos: "n", translation: "فوضى", isHard: false },
      { id: 11, word: "heartbreaking", pos: "adj", translation: "مفجع / محزن", isHard: true },
      { id: 12, word: "consciousness", pos: "n", translation: "وعي / إدراك", isHard: true },
      { id: 13, word: "paramedics", pos: "n", translation: "المسعفون", isHard: false },
      { id: 14, word: "rewarding", pos: "adj", translation: "مرضٍ / مجزٍ", isHard: false },
      { id: 15, word: "kick off", pos: "phr. v", translation: "يبدأ / يفتتح", isHard: false },
      { id: 16, word: "pulse", pos: "n", translation: "نبض", isHard: false },
      { id: 17, word: "medication", pos: "n", translation: "دواء / علاج", isHard: false },
      { id: 18, word: "challenge", pos: "n/v", translation: "تحدٍ / مواجهة / يتحدى", isHard: false },
      { id: 19, word: "colleague", pos: "n", translation: "زميل عمل", isHard: false },
      { id: 20, word: "CPR", pos: "n", translation: "الإنعاش القلبي الرئوي", isHard: true }
    ],

    // 2. الكلمات العامة (Main Vocabulary)
    mainVocab: [
      { id: 101, word: "beep", pos: "n/v", translation: "يزمر / تزمير / يصفر", isHard: false },
      { id: 102, word: "trade", pos: "n/v", translation: "تجارة / تبادل / يتاجر", isHard: false },
      { id: 103, word: "critical", pos: "adj", translation: "حاسم / ناقد / شديد الخطورة", isHard: true },
      { id: 104, word: "mentally", pos: "adv", translation: "عقلياً / ذهندياً", isHard: false },
      { id: 105, word: "progress", pos: "n/v", translation: "تقدم / تحسن / يتقدم", isHard: false },
      { id: 106, word: "healthcare", pos: "n", translation: "الرعاية الصحية", isHard: false },
      { id: 107, word: "patient", pos: "n/adj", translation: "مريض / صبور", isHard: false },
      { id: 108, word: "exhausted", pos: "adj", translation: "منهك / مرهق جداً", isHard: true },
      { id: 109, word: "safety", pos: "n", translation: "الأمان", isHard: false },
      { id: 110, word: "chart", pos: "n/v", translation: "رسم بياني / مخطط / يخطط", isHard: false },
      { id: 111, word: "review", pos: "n/v", translation: "مراجعة / تقييم / يراجع", isHard: false },
      { id: 112, word: "fulfilled", pos: "adj", translation: "محقق / مستوفى", isHard: false },
      { id: 113, word: "reflect", pos: "v", translation: "يتأمل / يعكس", isHard: false },
      { id: 114, word: "typical", pos: "adj", translation: "نموذجي / تقليدي", isHard: false },
      { id: 115, word: "look like", pos: "phr. v", translation: "يبدو مثل / يشبه", isHard: false },
      { id: 116, word: "rush", pos: "n/v", translation: "يسرع / اندفاع / استعجال", isHard: false },
      { id: 117, word: "document", pos: "n/v", translation: "مستند / وثيقة / يوثق", isHard: false },
      { id: 118, word: "preparation", pos: "n", translation: "تحضير / إعداد", isHard: false },
      { id: 119, word: "monitor", pos: "n/v", translation: "يراقب / شاشة / مراقب", isHard: false },
      { id: 120, word: "severe", pos: "adj", translation: "شديد / قاسٍ / حاد", isHard: true },
      { id: 121, word: "dizzy", pos: "adj", translation: "الشعور بفقدان التوازن أو الدوار", isHard: false },
      { id: 122, word: "task", pos: "n", translation: "مهمة / واجب", isHard: false },
      { id: 123, word: "surgery", pos: "n", translation: "جراحة / عملية جراحية", isHard: false },
      { id: 124, word: "witness", pos: "v", translation: "يشهد / شاهد", isHard: false },
      { id: 125, word: "anxiously", pos: "adv", translation: "بقلق / بترقب شديد", isHard: true },
      { id: 126, word: "elderly", pos: "adj", translation: "مسن / كبير في السن", isHard: false },
      { id: 127, word: "duties", pos: "n", translation: "واجبات", isHard: false },
      { id: 128, word: "smoothly", pos: "adv", translation: "بسلاسة / بانسيابية", isHard: false },
      { id: 129, word: "support", pos: "n/v", translation: "دعم / مساندة / يساند", isHard: false },
      { id: 130, word: "contaminated", pos: "adj", translation: "ملوث", isHard: true },
      { id: 131, word: "comfort", pos: "n/v", translation: "راحة / مواساة / يواسي", isHard: false },
      { id: 132, word: "lip", pos: "n", translation: "الشفاه", isHard: false },
      { id: 133, word: "collect", pos: "v", translation: "يجمع", isHard: false },
      { id: 134, word: "ensure", pos: "v", translation: "يضمن / يتأكد من", isHard: false },
      { id: 135, word: "qualities", pos: "n", translation: "صفات / خصائص / سمات", isHard: false },
      { id: 136, word: "neighbour", pos: "n", translation: "جار", isHard: false },
      { id: 137, word: "assist", pos: "v", translation: "يساعد", isHard: false },
      { id: 138, word: "complain", pos: "v", translation: "يشكو / يتذمر", isHard: false },
      { id: 139, word: "lifeguard", pos: "n", translation: "منقذ سباحة", isHard: false },
      { id: 140, word: "emergency", pos: "n", translation: "طوارئ", isHard: false },
      { id: 141, word: "pain", pos: "n/v", translation: "ألم / يؤلم", isHard: false },
      { id: 142, word: "emergency call", pos: "n", translation: "مكالمة طوارئ", isHard: false }
    ],

    // 3. التعريفات (Definitions)
    definitions: [
      {
        word: "shift",
        defEn: "A set period of time that a person works (especially in hospitals, factories, etc.).",
        defAr: "فترة زمنية محددة يعمل فيها الشخص (خاصة في المستشفيات والمصانع)."
      },
      {
        word: "buzz",
        defEn: "A feeling of excitement or energy; or the sound of many people talking or machines working.",
        defAr: "شعور بالإثارة أو الطاقة، أو صوت حديث العديد من الأشخاص أو عمل الآلات."
      },
      {
        word: "administer",
        defEn: "To give medicine or treatment to someone.",
        defAr: "إعطاء الدواء أو العلاج لشخص ما."
      },
      {
        word: "chaos",
        defEn: "A state of complete confusion and disorder.",
        defAr: "حالة من الفوضى والارتباك التام."
      },
      {
        word: "heartbreaking",
        defEn: "Very sad or upsetting.",
        defAr: "محزن أو مفجع للغاية."
      },
      {
        word: "rewarding",
        defEn: "Giving a feeling of satisfaction or pleasure because you helped someone or achieved something good.",
        defAr: "يمنح شعوراً بالرضا أو المتعة لأنك ساعدت أحداً أو حققت شيئاً جيداً."
      }
    ],

    // 4. الترادفات والتضادات (Synonyms & Antonyms)
    wordRelations: [
      {
        word: "buzz",
        synonyms: ["vibration", "drone", "noise"],
        antonyms: ["silence", "quietness"]
      },
      {
        word: "shift",
        synonyms: ["change", "move", "transfer"],
        antonyms: ["remain", "stay", "keep"]
      },
      {
        word: "administer",
        synonyms: ["give medicine", "manage", "run"],
        antonyms: ["neglect", "ignore", "withdraw"]
      },
      {
        word: "chaos",
        synonyms: ["disorder", "confusion"],
        antonyms: ["order", "stability", "system"]
      },
      {
        word: "collapse",
        synonyms: ["fall", "break down", "crumble"],
        antonyms: ["stand", "rise", "endure"]
      }
    ],

    // 5. المتلازمات وحروف الجر (Collocations & Prepositions)
    collocations: [
      { word: "emergency operator", trans: "موظف الطوارئ / مشغل الطوارئ" },
      { word: "buzz with", trans: "يمتلئ بـ / يزخر بـ" },
      { word: "a severe stomach pain", trans: "ألم شديد في المعدة" },
      { word: "move on", trans: "يمضي قدماً / يتجاوز" },
      { word: "trade ..... for", trans: "يبادل ... بـ / يستبدل ... بـ" },
      { word: "check on", trans: "يطمئن على / يراقب" },
      { word: "a never-ending rollercoaster", trans: "تجربة متقلبة لا تنتهي" },
      { word: "rely on", trans: "يعتمد على / يثق بـ" },
      { word: "focus (concentrate) on", trans: "يركز على" },
      { word: "reflect on", trans: "يتأمل في / يفكر ملياً في" },
      { word: "fall down", trans: "يسقط أرضاً" },
      { word: "rush in", trans: "يركض لداخل / يندفع لداخل" },
      { word: "recover from", trans: "يتعافى من" },
      { word: "related to", trans: "مرتبط بـ / متعلق بـ" },
      { word: "regain consciousness", trans: "يستعيد وعيه" },
      { word: "suffer from", trans: "يعاني من" }
    ],

    // 6. التعبيرات والأفعال (Expressions)
    expressions: [
      { exp: "make every effort", defAr: "يبذل أقصى جهد" },
      { exp: "have a sharp pain", defAr: "يشعر بألم حاد / يعاني من ألم شديد" },
      { exp: "make sure", defAr: "يتأكد من" },
      { exp: "pay attention to", defAr: "يولي اهتماماً بـ / ينتبه لـ" },
      { exp: "do first aid", defAr: "يقدم الإسعافات الأولية" },
      { exp: "give a reason why (for)", defAr: "يعطي سبباً لـ" },
      { exp: "(do - perform) a task", defAr: "يؤدي مهمة" },
      { exp: "handle emergencies", defAr: "يتعامل مع الحالات الطارئة" }
    ],

    // 7. التعبيرات الاصطلاحية (Idioms)
    idioms: [
      { idiom: "spring into action", defAr: "ينطلق للعمل بسرعة / يتحرك فوراً" },
      { idiom: "Teamwork makes the dream work", defAr: "التعاون سر النجاح" },
      { idiom: "no pain, no gain", defAr: "لا نجاح بدون تعب" },
      { idiom: "go the extra mile", defAr: "يبذل جهداً إضافياً" },
      { idiom: "sweat blood", defAr: "يبذل جهداً بالغاً" },
      { idiom: "hit the ground running", defAr: "يبدأ العمل بحماس ونشاط" },
      { idiom: "burn the midnight oil", defAr: "يسهر للعمل حتى وقت متأخر" }
    ],

    // 8. المشتقات والفروق اللغوية (Derivatives & Language Notes)
    derivativesNotes: [
      { item: "prepare / preparation / preparatory", detail: "Verb / Noun / Adjective (يعد / إعداد / تحضيري)" },
      { item: "attend / attention / attentive", detail: "Verb / Noun / Adjective (يحضر / انتباه / منتبه)" },
      { item: "collapse / collapse / collapsible", detail: "Verb / Noun / Adjective (ينهار / انهيار / قابل للطي)" },
      { item: "administer / administration / administrative", detail: "Verb / Noun / Adjective (يدير / إدارة / إداري)" },
      { item: "consciousness vs. conscience", detail: "Consciousness = الوعي والإدراك | Conscience = الضمير الأخلاقي" },
      { item: "patient vs. patience", detail: "Patient = مريض أو صبور (Adj/N) | Patience = الصبر (Noun)" },
      { item: "exhausted vs. exhausting", detail: "Exhausted = مُرهَق (شخص) | Exhausting = مُرهِق (شيء أو عمل)" },
      { item: "award / reward / rewarding / a ward", detail: "Award (جائزة رسمية) | Reward (مكافأة) | Rewarding (مجزي) | Ward (عنبر مستشفى)" },
      { item: "surgery / surgeon / surgical", detail: "Surgery (جراحة) | Surgeon (جراح) | Surgical (جراحي)" },
      { item: "do vs. make", detail: "Do: first aid, research, a task | Make: effort, decision, sure" }
    ]
  }
};