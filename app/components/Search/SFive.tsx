import React from "react";

type Props = {};

const SFive = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="three bg-[#f2f2f2] dark:bg-background p-2 rounded-md">
        <div className="heading">
          <h3>
            L&#39;organisation matérielle du travail
            <span> التنظيم المادي للعمل</span>
          </h3>
        </div>

        <p className="fr">
          Les conventions dont il sera question dans les prochains paragraphes
          visent à ce que la présentation des travaux universitaires soit plus
          ou moins uniforme, mais aussi à faciliter la lecture et la
          compréhension du texte.
        </p>
        <p className="ar">
          تهدف الاتفاقيات التي تمت مناقشتها في الفقرات التالية إلى ضمان أن يكون
          عرض العمل الأكاديمي موحدًا إلى حد ما ، ولكن أيضًا لتسهيل قراءة النص
          وفهمه.
        </p>
        <p className="fr">
          N&#39;oubliez pas que votre ou vos lecteurs sont généralement des
          correcteur-trices-s également.
        </p>
        <p className="ar">
          تذكر أن القارئ (القراء) عادةً ما يكونون مصححين أيضًا.
        </p>
        <p className="fr">
          La correction étant la plupart du temps une démarche à caractère
          humain, elle devient inévitablement en partie subjective.
        </p>
        <p className="ar">
          لكون التصحيح في معظم الأحيان نهجًا بشريًا ، فإنه يصبح حتمًا ذاتيًا
          جزئيًا.
        </p>
        <p className="fr">
          Il faut prendre en considération cet aspect et tout faire pour
          favoriser une lecture intéressante et ainsi bien disposer votre
          correcteur-trice envers votre travail.
        </p>
        <p className="ar">
          عليك أن تأخذ هذا الجانب في الاعتبار وأن تفعل كل شيء لتشجيع القراءة
          الممتعة ، وبالتالي اجعل المصحح الخاص بك مستعدًا جيدًا تجاه عملك.
        </p>
        <p className="fr">
          Gardez bien en tête que le maximum d&#39;information transmise est le
          signe de votre souci pour la rigueur qui doit caractériser tout
          travail universitaire.
        </p>
        <p className="ar">
          ضع في اعتبارك أن الحد الأقصى من المعلومات المنقولة هو علامة على
          اهتمامك بالصرامة التي يجب أن تميز جميع الأعمال الجامعية.
        </p>
        <p className="fr">
          Voici l&#39;ordre dans lequel vous devez présenter les différentes
          parties qui composent généralement un travail :
        </p>
        <p className="ar">
          هذا هو الترتيب الذي يجب أن تقدم به الأجزاء المختلفة التي عادة ما يتكون
          منها العمل:
        </p>
        <p className="fr">
          page titre, table des matières (s&#39;il y a lieu, la liste des
          tableaux et/ou la liste des figures), introduction, développement,
          conclusion, annexes (éventuellement), notes (éventuellement) et
          bibliographie.
        </p>
        <p className="ar">
          صفحة العنوان وجدول المحتويات (إن أمكن ، قائمة الجداول و / أو قائمة
          الأشكال) ، المقدمة ، التطوير ، الاستنتاج ، الملاحق (إن وجدت) ،
          الملاحظات (إن وجدت) والببليوغرافيا.
        </p>

        <div className="heading">
          <h3>
            Page titre
            <span> صفحة عنوان الكتاب </span>
          </h3>
        </div>

        <p className="fr">
          La page titre doit contenir obligatoirement un certain nombre
          d&#39;informations, toutes centrées:
        </p>
        <p className="ar">
          يجب أن تحتوي صفحة العنوان على قدر معين من المعلومات ، وكلها تتم
          توسيطها:
        </p>
        <p className="fr">le nom de l&#39;établissement d&#39;enseignement;</p>
        <p className="ar">اسم المؤسسة التعليمية ؛</p>
        <p className="fr">la faculté ou l&#39;équivalent;</p>
        <p className="ar">هيئة التدريس أو ما يعادلها ؛</p>
        <p className="fr">
          le titre du travail, le nom de l&#39;étudiant-e (l&#39;auteur), le
          numéro de l&#39;étudiant-e;
        </p>
        <p className="ar">عنوان العمل ، اسم الطالب (المؤلف) ، رقم الطالب ؛</p>
        <p className="fr">
          le titre du cours; le nom du ou de la professeur-e;
        </p>
        <p className="ar">عنوان الدورة؛ اسم الأستاذ.</p>
        <p className="fr">
          la date d&#39;échéance de la remise du travail ou la date de remise,
          s&#39;il y a retard.
        </p>
        <p className="ar">
          موعد استحقاق تقديم العمل أو تاريخ التقديم إذا كان هناك تأخير.
        </p>
        <p className="fr">
          L&#39;ordre de présentation peut varier considérablement selon les
          universités et/ou les professeurs.
        </p>
        <p className="ar">
          قد يختلف ترتيب العرض بشكل كبير بين الجامعات و / أو الأساتذة.
        </p>
        <p className="fr">
          À titre d&#39;exemple concret, examinez la page titre du Petit guide,
          mais n&#39;oubliez pas de tenir compte des directives différentes qui
          pourraient vous être données.
        </p>
        <p className="ar">
          كمثال ملموس ، قم بفحص صفحة العنوان للدليل الصغير ، ولكن تذكر أن تأخذ
          في الاعتبار التعليمات المختلفة التي قد يتم إعطاؤها لك.
        </p>

        <div className="heading">
          <h3>
            Table des matières
            <span> محتويات </span>
          </h3>
        </div>

        <p className="fr">
          La table des matières décrit les différentes parties du travail afin
          d&#39;y avoir éventuellement accès simplement et rapidement.
        </p>
        <p className="ar">
          يصف جدول المحتويات أجزاء العمل المختلفة من أجل الوصول السهل والسريع
          إليها.
        </p>
        <p className="fr">
          Les titres de chapitres (parties principales) sont écrits en
          majuscules, les subdivisions ou sous-titres en minuscules.
        </p>
        <p className="ar">
          تتم كتابة عناوين الفصول (الأجزاء الرئيسية) بأحرف كبيرة أو تقسيمات
          فرعية أو ترجمة بأحرف صغيرة.
        </p>
        <p className="fr">
          Ce type de présentation aide à mettre en évidence la structure du
          travail et son contenu.
        </p>
        <p className="ar">
          يساعد هذا النوع من العروض التقديمية في إبراز هيكل العمل ومحتواه.
        </p>

        <div className="heading">
          <h3>
            Introduction
            <span> مقدمة </span>
          </h3>
        </div>

        <p className="fr">
          L&#39;introduction vise à présenter au lecteur, de manière succincte,
          l&#39;objet du travail et la méthodologie qui sera utilisée, et
          éventuellement l&#39;hypothèse de départ.
        </p>
        <p className="ar">
          تهدف المقدمة إلى أن تقدم للقارئ ، بطريقة موجزة ، موضوع العمل والمنهجية
          التي سيتم استخدامها ، وربما فرضية البداية.
        </p>
        <p className="fr">
          En aucun cas vous ne devez résumer. votre travail ni présenter de
          commentaire ou de conclusion.
        </p>
        <p className="ar">
          تحت أي ظرف من الظروف يجب أن تلخص. عملك أو تقديم أي تعليقات أو
          استنتاجات.
        </p>
        <p className="fr">
          De façon habituelle, la rédaction de l&#39;introduction s&#39;effectue
          une fois l&#39;ensemble du travail terminé.
        </p>
        <p className="ar">
          عادة ، تتم كتابة المقدمة بمجرد الانتهاء من جميع الأعمال.
        </p>

        <div className="heading">
          <h3>
            Développement
            <span> تطوير </span>
          </h3>
        </div>

        <p className="fr">
          Le corpus de votre travail en est évidemment la partie majeure.
        </p>
        <p className="ar">من الواضح أن مجموعة عملك هي الجزء الأكبر منه.</p>
        <p className="fr">
          Vous devez le développer de manière cohérente, logique et argumentée
          et le présenter le plus clairement possible.
        </p>
        <p className="ar">
          يجب عليك تطويرها بطريقة متماسكة ومنطقية وجيدة الجدل وتقديمها بأكبر قدر
          ممكن من الوضوح.
        </p>
        <p className="fr">
          Par conséquent, n&#39;hésitez pas à bien délimiter vos idées et les
          présenter distinctement par la constitution d&#39;un nombre de
          chapitres approprié, accompagnés des sous-sections qui s&#39;imposent.
        </p>
        <p className="ar">
          لذلك ، لا تتردد في تحديد أفكارك بوضوح وتقديمها بشكل واضح من خلال إنشاء
          عدد مناسب من الفصول ، مصحوبة بالأقسام الفرعية اللازمة.
        </p>
        <p className="fr">
          N&#39;oubliez pas que votre développement doit aboutir à une certaine
          démonstration et que celle-ci doit être évidente pour le lecteur ou la
          lectrice.
        </p>
        <p className="ar">
          لا تنس أن تطويرك يجب أن يؤدي إلى عرض معين وأن هذا يجب أن يكون واضحًا
          للقارئ.
        </p>

        <div className="heading">
          <h3>
            Conclusion
            <span> الخاتمة </span>
          </h3>
        </div>

        <p className="fr">
          La conclusion est capitale au sens où elle permet de situer la
          synthèse de votre développement dans une perspective plus large et
          ainsi démontrer que vous êtes capable non seulement de traiter
          d&#39;un sujet précis, mais de l&#39;inscrire dans un champ de
          connaissance.
        </p>
        <p className="ar">
          الاستنتاج ضروري بمعنى أنه يسمح لك بوضع توليف تطورك في منظور أوسع
          وبالتالي إثبات أنك لا تستطيع التعامل مع موضوع معين فحسب ، بل على
          إدراجه في مجال المعرفة.
        </p>
        <p className="fr">
          La conclusion est souvent ce qui permet de distinguer un excellent
          travail d&#39;un très bon travail.
        </p>
        <p className="ar">
          غالبًا ما تكون الخاتمة هي ما يميز العمل الرائع عن العمل الجيد جدًا.
        </p>
        <div className="heading">
          <h3>
            Tableaux et figures
            <span> الجداول والأشكال </span>
          </h3>
        </div>

        <p className="fr">
          Vous pouvez incorporer des tableaux et des figures dans le texte
          principal, mais vous devez également être conscient que ce n&#39;est
          pas un moyen acceptable pour utiliser de l&#39;espace parce que vous
          n&#39;arrivez pas à rédiger un texte suffisamment long pour répondre
          aux exigences du cours.
        </p>
        <p className="ar">
          يمكنك دمج الجداول والأشكال في النص الرئيسي ، ولكن يجب أن تدرك أيضًا أن
          هذه ليست طريقة مقبولة لاستخدام المساحة لأنك لا تستطيع كتابة نص طويل
          بما يكفي لتلبية متطلبات الدورة.
        </p>
        <p className="fr">
          Si vous estimez devoir ou pouvoir présenter des données utiles et/ou
          indispensables à l&#39;aide de tableaux ou de figures tout en
          allégeant votre texte, mettez-les en annexes.
        </p>
        <p className="ar">
          إذا كنت تشعر أنه يجب عليك أو يمكنك تقديم بيانات مفيدة و / أو أساسية
          باستخدام جداول أو أشكال أثناء تبسيط النص ، فضعها في الملاحق.
        </p>
        <p className="fr">
          N&#39;oubliez pas de rédiger, si nécessaire, un bas de vignette
          explicatif.
        </p>
        <p className="ar">
          لا تنس أن تكتب ، إذا لزم الأمر ، صورة مصغرة توضيحية.
        </p>
        <p className="fr">
          La plupart du temps, les annexes ne font pas parties des nonnes
          relatives au nombre de pages, mais elles vous permettent de compléter
          et de soutenir votre argumentation.
        </p>
        <p className="ar">
          في معظم الأحيان ، لا تكون الملاحق جزءًا من المعايير المتعلقة بعدد
          الصفحات ، لكنها تسمح لك بإكمال حجتك ودعمها.
        </p>
        <div className="heading">
          <h3>
            Notes
            <span> ملحوظات </span>
          </h3>
        </div>

        <p className="fr">
          Les notes en bas de page servent soit à indiquer une référence ou à
          compléter le texte d&#39;une information ou d&#39;une explication non
          essentielle, mais utile.
        </p>
        <p className="ar">
          تعمل الحواشي السفلية إما للإشارة إلى مرجع أو لتكملة النص بمعلومات أو
          شرح غير أساسي ولكنه مفيد.
        </p>
        <p className="fr">
          Les notes de fin de texte devraient être réservées à des informations
          complémentaires, mais relativement élaborées.
        </p>
        <p className="ar">
          يجب حجز التعليقات الختامية للحصول على معلومات إضافية ولكنها معقدة
          نسبيًا.
        </p>
        <div className="heading">
          <h3>
            Bibliographie
            <span> الفهرس </span>
          </h3>
        </div>

        <p className="fr">
          La bibliographie clôture votre travail et permet au lecteur ou au
          correcteur de jauger, en partie, votre effort.
        </p>
        <p className="ar">
          يختتم الفهرس عملك وتسمح للقارئ أو المصحح بقياس جهدك جزئيًا.
        </p>
        <p className="fr">
          En effet, si votre bibliographie est très classNameique, elle laisse
          sous entendre que vous vous en êtes tenu aux nonnes minimales de
          travail.
        </p>
        <p className="ar">
          في الواقع ، إذا كان الفهرس الخاص بك كلاسيكياً للغاية ، فهذا يشير إلى
          أنك تلتزم بالحد الأدنى من معايير العمل.
        </p>
        <p className="fr">
          Si votre bibliographie est recherchée et diversifiée c&#39;est que
          vous avez probablement répondu à votre curiosité et aiguisé votre
          esprit critique, donc avez sans doute fourni un effort plus grand.
        </p>
        <p className="ar">
          إذا تم البحث عن فهرسك وتنويعه ، فهذا يعني أنك ربما تكون قد استجابت
          لفضولك وشحذت روح النقد لديك ، لذلك ربما تكون قد بذلت جهدًا أكبر.
        </p>
        <p className="fr">
          La bibliographie doit être dressée avec beaucoup de rigueur et
          répondre à des règles de présentation qui, comme vous l&#39;aurez
          constaté, varient souvent d&#39;un auteur à l&#39;autre, d&#39;une
          revue à l&#39;autre, d&#39;une institution à l&#39;autre.
        </p>
        <p className="ar">
          يجب أن يتم تجميع الفهرس بدقة كبيرة وأن يتوافق مع قواعد العرض التي ،
          كما ستلاحظ ، تختلف غالبًا من مؤلف إلى آخر ، ومن مجلة إلى أخرى ، ومن
          مؤسسة إلى أخرى.
        </p>
        <p className="fr">
          Vous trouverez des exemples de présentation dans les chapitres
          intitulés L&#39;indication des références et La bibliographie.
        </p>
        <p className="ar">
          سوف تجد أمثلة على العرض في الفصول المعنونة بيان المراجع والفهرس.
        </p>
        <div className="heading">
          <h3>
            La présentation matérielle du travail
            <span> العرض المادي للعمل</span>
          </h3>
        </div>

        <p className="fr">
          Il va sans dire qu&#39;aujourd&#39;hui tous les travaux universitaires
          doivent être dactylographiés et répondre à des règles élémentaires,
          mais indispensables, qui ressemblent plus ou moins à une liste
          d&#39;épicerie.
        </p>
        <p className="ar">
          وغني عن القول أنه يجب كتابة جميع الأعمال الأكاديمية اليوم واتباع
          القواعد الأساسية ، ولكن الأساسية ، والتي تشبه إلى حد ما قائمة البقالة.
        </p>

        <div className="heading">
          <h3>
            Le papier
            <span> الورق </span>
          </h3>
        </div>

        <p className="fr">
          Tout d&#39;abord vous devez utiliser le recto de feuilles format
          lettre nord-américain (standard) 8 1/2x11 pouces (21, 6 x 28 cm) et
          utiliser des marges d&#39;environ un pouce (2, 5 cm).
        </p>
        <p className="ar">
          أولاً ، يجب عليك استخدام الجانب الأمامي من ورق بحجم 8 1/2 × 11 بوصة
          (21.6 × 28 سم) من أمريكا الشمالية (قياسي) بحجم الحروف واستخدام هوامش
          بحجم بوصة واحدة تقريبًا (2.5 سم).
        </p>

        <div className="heading">
          <h3>
            Les caractères
            <span> الأحرف </span>
          </h3>
        </div>

        <p className="fr">
          Avec les ordinateurs vous avez une multitude de caractères
          disponibles.
        </p>
        <p className="ar">
          مع أجهزة الكمبيوتر لديك العديد من الشخصيات المتاحة.
        </p>
        <p className="fr">
          N&#39;oubliez pas que vous devez faciliter la lecture de votre
          travail, donc veuillez choisir un caractère bien lisible (comme le
          présent texte: Times) et de taille courante : 12 points pour le texte;
          10 points pour les notes en bas de page et 14 points pour la page
          titre et les titres des chapitres.
        </p>
        <p className="ar">
          لا تنس أنه يجب أن تجعل عملك أسهل في القراءة ، لذا يرجى اختيار خط يسهل
          قراءته (مثل هذا النص: الأوقات) والحجم الشائع: 12 نقطة للنص ؛ 10 نقاط
          للهوامش و 14 نقطة لصفحة العنوان وعناوين الفصول.
        </p>
        <p className="fr">
          La manipulation des caractères ne doit pas servir à répondre aux
          exigences du travail, soit en le comprimant, soit en lui donnant une
          expansion inhabituelle.
        </p>
        <p className="ar">
          لا ينبغي استخدام التلاعب في الشخصية لتلبية متطلبات العمل ، إما عن طريق
          ضغطه أو إعطائه توسعة غير عادية.
        </p>
      </div>
    </div>
  );
};

export default SFive;
