import React from "react";

type Props = {};

const SOne = (props: Props) => {
  return (
    <div>
      <div className="one bg-[#f2f2f2] dark:bg-background p-2 rounded-md">
        <div className="heading">
          <h3>
            Les différents types de travaux <br />
            Le résumé de texte: analytique ou critique
            <span> أنواع العمل المختلفة</span>
            <span> ملخص النص: تحليلي أم نقدي </span>
          </h3>
        </div>

        <div className="heading-ch">
          <h3>
            Le résumé de texte analytique
            <span> ملخص النص التحليلي </span>
          </h3>
        </div>

        <p className="fr">
          Le résumé de texte analytique vise à ce que le lecteur puisse
          connaître et comprendre l&#39;idée ou les idées originales de
          l&#39;auteur ainsi que les hypothèses, les raisonnements et les
          arguments principaux qu&#39;il utilise dans sa démonstration.
        </p>
        <p className="ar">
          الغرض من ملخص النص التحليلي هو أن يعرف القارئ ويفهم الفكرة أو الأفكار
          الأصلية للمؤلف بالإضافة إلى الافتراضات الرئيسية والاستدلال والحجج التي
          يستخدمها في عرضه.
        </p>
        <p className="fr">
          Pour ce faire vous devez effectuer au moins deux lectures. Une
          première, plus globale, au cours de laquelle vous prenez connaissance
          de l&#39;ensemble du texte.
        </p>
        <p className="ar">
          للقيام بذلك ، يجب عليك إجراء قراءتين على الأقل. الأولى ، الأكثر شمولاً
          ، والتي من خلالها تتعرف على النص بأكمله.
        </p>
        <p className="fr">
          La deuxième, approfondie, au cours de laquelle vous en faites
          l&#39;analyse. Au cours de cette lecture vous prenez en note les
          éléments importants.
        </p>
        <p className="ar">
          الثانية ، في العمق ، تقوم خلالها بتحليلها. أثناء هذه القراءة ، تدون
          ملاحظة بالعناصر المهمة.
        </p>
        <p className="fr">
          Avant de rédiger votre résumé, vous devez préparer un plan de résumé
          qui ne correspondra pas nécessairement au plan du document original.
        </p>
        <p className="ar">
          قبل كتابة الملخص ، يجب عليك إعداد مخطط تفصيلي لا يتطابق بالضرورة مع
          الخطوط العريضة للوثيقة الأصلية.
        </p>
        <p className="fr">
          En effet, l&#39;auteur aura éventuellement organisé son texte dans une
          perspective très différente de celle de votre travail.
        </p>
        <p className="ar">
          في الواقع ، ربما يكون المؤلف قد نظم نصه في منظور مختلف تمامًا عن منظور
          عملك.
        </p>
        <p className="fr">
          Votre texte doit être clair, direct et sans commentaire, tout en
          évitant d&#39;utiliser des citations, particulièrement s&#39;il
          s&#39;agit d&#39;un résumé court.
        </p>
        <p className="ar">
          يجب أن يكون نصك واضحًا ومباشرًا وبدون تعليق ، مع تجنب استخدام
          الاقتباسات ، خاصةً إذا كان موجزًا قصيرًا.
        </p>
        <p className="fr">
          Un résumé est une manière différente et personnelle de parler du texte
          d&#39;un autre.
        </p>
        <p className="ar">
          الملخص هو طريقة مختلفة وشخصية للتحدث عن نص شخص آخر.
        </p>
        <p className="fr">
          Ainsi, vous ne devez pas reprendre les mots et les phrases de
          l&#39;auteur avec ou sans citation, pas plus que reprendre ses phrases
          en remplaçant les mots clés par des synonymes.
        </p>
        <p className="ar">
          وبالتالي ، لا يجب استخدام كلمات وجمل المؤلف باقتباس أو بدون اقتباس ،
          ولا تأخذ جمله باستبدال الكلمات الرئيسية بالمرادفات.
        </p>
        <div className="heading-ch">
          <h3>
            Le résumé de texte critique
            <span> ملخص النص النقدي </span>
          </h3>
        </div>
        <p className="fr">
          Le résumé de texte critique (également nommé compte rendu de lecture
          ou recension) est un résumé de texte analytique auquel s&#39;ajoute
          des commentaires découlant d&#39;une réflexion personnelle qui porte
          strictement sur le contenu de l&#39;ouvrage, dans ce cas il s&#39;agit
          d&#39;une critique interne;
        </p>
        <p className="ar">
          ملخص النص النقدي (يسمى أيضًا مراجعة الكتاب أو المراجعة) هو ملخص نص
          تحليلي يتم إضافة تعليقات ناتجة عن انعكاس شخصي يؤثر بشكل صارم على محتوى
          العمل ، وفي هذه الحالة يكون بمثابة نقد داخلي ؛
        </p>
        <p className="fr">
          cette réflexion personnelle peut également faire référence à des
          éléments extérieurs au document, dans ce cas, il s&#39;agit d&#39;une
          critique externe.
        </p>
        <p className="ar">
          يمكن أن يشير هذا التفكير الشخصي أيضًا إلى عناصر خارج المستند ، وفي هذه
          الحالة يكون نقدًا خارجيًا.
        </p>
        <p className="fr">
          Dans ce type de travail vous devez porter un jugement de valeur sur
          les idées de l&#39;auteur, sur la façon dont il les expose et sur la
          rigueur et la cohérence des arguments invoqués (il ne s&#39;agit pas
          de dire j&#39;aime ou je n&#39;aime pas ce texte).
        </p>
        <p className="ar">
          في هذا النوع من العمل ، يجب أن تصدر حكمًا قيميًا على أفكار المؤلف ،
          والطريقة التي يقدمها بها ، وعلى صرامة وتماسك الحجج التي يتم الاستشهاد
          بها (الأمر لا يتعلق بالقول إنني أحب أو لا أحب هذا النص).
        </p>
        <p className="fr">
          Une démarche de cet ordre demande une bonne préparation. Tout
          d&#39;abord, vous devez bien maîtriser le contenu de l&#39;ouvrage
          pour ensuite être en mesure de confronter votre point de vue face à
          celui de l&#39;auteur dont vous faites l&#39;étude.
        </p>
        <p className="ar">
          تتطلب خطوة من هذا الطلب إعدادًا جيدًا. بادئ ذي بدء ، يجب أن تكون لديك
          معرفة جيدة بمحتوى الكتاب حتى تتمكن من مقارنة وجهة نظرك مع وجهة نظر
          المؤلف الذي تدرسه.
        </p>
        <p className="fr">
          Finalement, vous devez faire un plan de travail et rédiger un texte
          clair, concis et personnel.
        </p>
        <p className="ar">
          أخيرًا ، يجب عليك وضع خطة عمل وكتابة نص واضح ومختصر وشخصي.
        </p>
        <p className="fr">
          Pour vous aider à élaborer votre critique, vous pouvez formuler des
          questions en regard avec le texte.
        </p>
        <p className="ar">
          لمساعدتك في تطوير رأيك ، يمكنك صياغة أسئلة تتعلق بالنص.
        </p>
        <p className="fr">
          Par exemple, le sujet abordé est-il pertinent, est-il en rapport avec
          les préoccupations actuelles?;
        </p>
        <p className="ar">
          على سبيل المثال ، هل الموضوع ذو صلة ، هل هو وثيق الصلة بالمخاوف
          الحالية ؟؛
        </p>
        <p className="fr">
          l&#39;exposé des faits, des arguments, des solutions est-il clair?
        </p>
        <p className="ar">هل بيان الحقائق والحجج والحلول واضح؟</p>
        <p className="fr">Y a-t-il des contradictions dans le texte?</p>
        <p className="ar">هل هناك تناقضات في النص؟</p>
        <p className="fr">
          vos références par rapport au sujet concordent-elles avec celles de
          l&#39;auteur?
        </p>
        <p className="ar">هل تتفق مراجعك للموضوع مع تلك الخاصة بالمؤلف؟</p>
        <p className="fr">
          les théories prises en compte vous satisfont-elles? Etc.
        </p>
        <p className="ar">هل النظريات التي تؤخذ في الاعتبار ترضيك؟ إلخ.</p>
        <p className="fr">
          Les réponses à ces diverses questions vous faciliterons la tache en
          vous permettant de mieux saisir votre propre point de vue par rapport
          à celui de l&#39;auteur et par conséquent, de porter un jugement
          articulé et argumenté.
        </p>
        <p className="ar">
          ستجعل الإجابات على هذه الأسئلة المتنوعة مهمتك أسهل من خلال السماح لك
          بفهم أفضل لوجهة نظرك فيما يتعلق بوجهة نظر المؤلف ، وبالتالي ، إصدار
          حكم مفصل ومنطقي.
        </p>

        <div className="heading">
          <h3>
            Le travail de recherche
            <span> عمل البحث </span>
          </h3>
        </div>

        <p className="fr">
          Il faut bien admettre que la définition que l&#39;on peut donner à
          «travail de recherche» n&#39;est pas si évidente.
        </p>
        <p className="ar">
          يجب الاعتراف بأن التعريف الذي يمكن إعطاؤه لـ &#39;العمل البحثي&#39;
          ليس واضحًا جدًا.
        </p>
        <p className="fr">
          En effet, le mot recherche peut être interprété de différentes façons
          :
        </p>
        <p className="ar">في الواقع ، يمكن تفسير كلمة البحث بطرق مختلفة :</p>
        <p className="fr">
          pour le Petit Robert (1993), il s&#39;agit d&#39;un ensemble de
          travaux, des activités intellectuelles qui tendent à la découverte de
          connaissances et de lois nouvelles;
        </p>
        <p className="ar">
          بالنسبة لـ Petit Robert (1993) ، فهي مجموعة من الأعمال والأنشطة
          الفكرية التي تميل إلى اكتشاف المعرفة والقوانين الجديدة ؛
        </p>
        <p className="fr">
          c&#39;est Y ensemble des activités, des travaux scientifiques auxquels
          se livrent les chercheurs dans le Petit Larousse (1988).
        </p>
        <p className="ar">
          إنها مجموعة الأنشطة ، من العمل العلمي الذي كرس الباحثون أنفسهم له في
          Petit Larousse (1988).
        </p>
        <p className="fr">
          Il faut donc admettre que les travaux de premier cycle universitaire
          ne répondent pas, généralement, à ces définitions.
        </p>
        <p className="ar">
          لذلك يجب الاعتراف بأن العمل الجامعي بشكل عام لا يفي بهذه التعريفات.
        </p>
        <p className="fr">
          Par conséquent, nous allons adopter une définition moins rigoureuse :
        </p>
        <p className="ar">لذلك ، سوف نعتمد تعريفًا أقل صرامة :</p>
        <p className="fr">
          travail qui traite avec honnêteté exactitude, concision et originalité
          des faits déjà connus, en vue ~3&#39;inculquer de la méthode, de
          l&#39;initiative, de la rigueur et de l&#39;érudition (Vinet, 1964,
          p.13).
        </p>
        <p className="ar">
          العمل الذي يتعامل مع الصدق والدقة والإيجاز والأصالة في الحقائق
          المعروفة ، بهدف غرس الأسلوب والمبادرة والصرامة وسعة الاطلاع (فينيت ،
          1964 ، ص 13).
        </p>
        <p className="fr">
          Pour mener à bien les objectifs pédagogiques que vise le travail de
          recherche, il faut tout d&#39;abord déterminer le genre d&#39;exercice
          qui vous est demandé.
        </p>
        <p className="ar">
          لتحقيق الأهداف التعليمية للعمل البحثي ، يجب عليك أولاً تحديد نوع
          التمرين المطلوب منك.
        </p>
        <p className="fr">
          En effet, on peut distinguer deux grands types de travaux, soit le
          travail à caractère empirique, soit le travail à caractère théorique.
        </p>
        <p className="ar">
          في الواقع ، يمكننا التمييز بين نوعين رئيسيين من العمل ، إما عمل ذو
          طبيعة تجريبية أو عمل ذو طبيعة نظرية.
        </p>
        <p className="fr">
          Évidemment, à titre d&#39;étudiant de premier cycle, toute recherche
          est basée sur des données déjà connues;
        </p>
        <p className="ar">
          من الواضح ، كطالب جامعي ، تستند جميع الأبحاث إلى بيانات معروفة بالفعل
          ؛
        </p>
        <p className="fr">
          ce qui va distinguer les travaux, c&#39;est la façon dont est conçue
          sa réalisation.
        </p>
        <p className="ar">ما يميز العمل هو الطريقة التي يتم بها تحقيقه.</p>
        <p className="fr">
          S&#39;agit-il de recueillir et d&#39;analyser des données observables
          et mesurables ou s&#39;agit-il de donner une explication ou des
          explications pour un certains nombre de phénomènes sociaux (Gingras,
          1993, p. 115).
        </p>
        <p className="ar">
          هل هي مسألة جمع وتحليل البيانات القابلة للملاحظة والقياس أم أنها مسألة
          إعطاء تفسير أو تفسيرات لعدد معين من الظواهر الاجتماعية (Gingras،
          1993،ص 115).
        </p>
        <p className="fr">
          La majorité des travaux que vous devrez effectuer seront de type
          empirique.
        </p>
        <p className="ar">
          سيكون معظم العمل الذي ستحتاج إلى القيام به تجريبيًا بطبيعته.
        </p>
        <p className="fr">
          Vous aurez à exposer une réponse documentée à une question qui vous
          est posée ou que vous devrez vous poser (hypothèse) en rapport avec le
          sujet du travail.
        </p>
        <p className="ar">
          سيتعين عليك تقديم إجابة موثقة على سؤال تطرحه عليك أو أنه سيتعين عليك
          أن تسأل نفسك (فرضية) فيما يتعلق بموضوع العمل.
        </p>

        <div className="heading">
          <h3>
            La dissertation
            <span> المقال</span>
          </h3>
        </div>

        <p className="fr">
          La dissertation n&#39;a plus l&#39;aura qu&#39;elle avait à
          l&#39;époque des collèges classNameiques, elle est même passée à la
          moulinette.
        </p>
        <p className="ar">
          لم يعد المقال تتمتع بالهالة التي كانت تتمتع بها في وقت المدارس
          الكلاسيكية ، بل إنها مرت بمرحلة صعبه.
        </p>
        <p className="fr">
          Par contre, elle demeure de pratique courante dans le système scolaire
          français et donne lieu régulièrement à des commentaires (Gingras
          (1998) et Goulet et Lépine (1987)),
        </p>
        <p className="ar">
          من ناحية أخرى ، تظل ممارسة شائعة في نظام المدارس الفرنسية وتثير
          التعليقات بانتظام (Gingras (1998) و Goulet and Lépine (1987)) ،
        </p>
        <p className="fr">
          c&#39;est pourquoi nous allons en donner une brève définition sans
          pour autant insister sur son usage, mais plutôt sur sa méthode,
          c&#39;est-à-dire le raisonnement (Foumier, 1961 dans Gingras, 1998, p.
          2) et une logique rigoureuse (Goulet et Lépine, 1987).
        </p>
        <p className="ar">
          هذا هو السبب في أننا سنقدم تعريفًا موجزًا دون الإصرار على استخدامه ،
          ولكن بالأحرى على منهجه ، وهذا يعني المنطق (Foumier ، 1961 في Gingras ،
          1998 ، ص 2) ومنطق صارم (Goulet and Lépine). ، 1987).
        </p>
        <p className="fr">
          Ainsi, la dissertation est l&#39;exposé écrit et raisonné d&#39;un
          ensemble de réflexions sur un sujet donné (Goulet et Lépine, 1987, p.
          81) qui repose davantage sur les connaissances acquises et la
          réflexion que sur la recherche de nouvelles informations (Gingras,
          1998, p. 2).
        </p>
        <p className="ar">
          وبالتالي ، فإن المقال هو عرض مكتوب ومعقول لمجموعة من التأملات حول
          موضوع معين (Goulet and Lépine ، 1987 ، ص 81) والذي يعتمد على المعرفة
          المكتسبة والتفكير أكثر من البحث عن معلومات جديدة (Gingras، 1998 ، ص
          2).
        </p>
        <p className="fr">
          Pour bien réussir une dissertation, il faut en premier lieu bien
          comprendre le sujet dont on doit traiter et en ensuite bien saisir
          l&#39;orientation qu&#39;il faut lui donner.
        </p>
        <p className="ar">
          للنجاح في المقال ، يجب عليك أولاً فهم الموضوع المراد معالجته ثم فهم
          الاتجاه الذي يجب إعطاؤه له بوضوح.
        </p>
        <p className="fr">
          Ainsi, l&#39;on peut vous demander de démontrer quelque chose, de
          décrire, d&#39;illustrer, d&#39;analyser un objet, par exemple
          (orientation explicative).
        </p>
        <p className="ar">
          وبالتالي ، قد يُطلب منك إظهار شيء ما ، لوصفه ، لتوضيحه ، لتحليله ، على
          سبيل المثال (توجيه توضيحي).
        </p>
        <p className="fr">
          Ou bien il peut vous être demandé de discuter, de commenter,
          d&#39;apprécier ce même objet (orientation critique).
        </p>
        <p className="ar">
          أو قد يُطلب منك مناقشة هذا الشيء نفسه والتعليق عليه وتقديره (التوجه
          النقدي).
        </p>
        <p className="fr">
          Il vous faut donc être très attentif pour ne pas vous méprendre sur ce
          que vous devez réaliser comme travail.
        </p>
        <p className="ar">
          لذلك يجب أن تكون حريصًا جدًا على عدم إساءة فهم ما عليك القيام به كعمل.
        </p>
        <p className="fr">
          Une fois déterminée l&#39;orientation du travail, il vous faut
          structurer votre développement en conséquence.
        </p>
        <p className="ar">
          بمجرد تحديد محور العمل ، ستحتاج إلى هيكلة تطويرك وفقًا لذلك.
        </p>
        <p className="fr">
          Mais quelle que soit l&#39;orientation, vous devez procéder avec
          méthode.
        </p>
        <p className="ar">ولكن مهما كان الاتجاه ، يجب أن تمضي بشكل منهجي.</p>
        <p className="fr">
          L&#39;introduction doit servir à introduire le sujet et la façon dont
          il sera traité.
        </p>
        <p className="ar">
          يجب أن تعمل المقدمة على تقديم الموضوع وكيف سيتم تغطيته.
        </p>
        <p className="fr">
          Le développement doit nécessairement exposer vos idées de manière à
          prouver ce que vous avancez, donc avec logique et cohérence.
        </p>
        <p className="ar">
          يجب أن يعرض التطوير بالضرورة أفكارك بطريقة تثبت ما تتقدم به ، وبالتالي
          بالمنطق والتماسك.
        </p>
        <p className="fr">
          La meilleure façon d&#39;exposer un point de vue critique bien
          argumenté et bien soutenu est d&#39;appliquer la technique
          thèse/antithèse/synthèse.
        </p>
        <p className="ar">
          أفضل طريقة لتقديم وجهة نظر نقدية مدعومة جيدًا ومدعومة جيدًا هي تطبيق
          تقنية الأطروحة / النقيض / الفرضية.
        </p>
        <p className="fr">
          C&#39;est-à-dire que vous exposez les arguments relatifs à la thèse à
          l&#39;étude, les arguments opposés et finalement votre point de vue
          personnel.
        </p>
        <p className="ar">
          وهذا يعني أنك تقدم الحجج المتعلقة بالأطروحة قيد الدراسة والحجج
          المعارضة وأخيراً وجهة نظرك الشخصية.
        </p>
        <p className="fr">
          Pour résumer, la dissertation doit être analysée comme une question
          que l&#39;on pose dans l&#39;introduction et à laquelle on donne une
          réponse dans la conclusion;
        </p>
        <p className="ar">
          باختصار ، يجب تحليل المقال كسؤال مطروح في المقدمة والإجابة عليها في
          الخاتمة ؛
        </p>
        <p className="fr">
          le développement est alors constitué par l&#39;ensemble de
          l&#39;argumentation permettant de justifier la conclusion (Collectif,
          1990, p. 14).
        </p>
        <p className="ar">
          ثم يتكون التطور من جميع الحجج التي تسمح بتبرير الاستنتاج (Collectif،
          1990، p. 14).
        </p>

        <div className="heading">
          <h3>
            Le choix d&#39;un sujet
            <span> اختيار الموضوع </span>
          </h3>
        </div>

        <p className="fr">
          Fréquemment, le sujet du travail que vous avez à rédiger est déterminé
          par le ou la professeur, mais dans certains cas, il vous est donné le
          libre choix, évidemment dans un contexte préétabli.
        </p>
        <p className="ar">
          في كثير من الأحيان ، يتم تحديد موضوع العمل الذي يتعين عليك كتابته من
          قبل الأستاذ ، ولكن في بعض الحالات ، يتم منحك حرية الاختيار ، من الواضح
          في سياق محدد مسبقًا.
        </p>
        <p className="fr">
          Les travaux qui sont exigés ont pour buts de vous aider à acquérir des
          connaissances et parallèlement de vous permettre de développer une
          méthode de travail intellectuel.
        </p>
        <p className="ar">
          يهدف العمل المطلوب إلى مساعدتك في اكتساب المعرفة وفي نفس الوقت السماح
          لك بتطوير طريقة للعمل الفكري.
        </p>
        <p className="fr">
          Lorsque que vous avez le choix du sujet à partir duquel vous allez
          approfondir vos connaissances, trois voies s&#39;offrent à vous :
          celle de la facilité, de la nonnalité ou de l&#39;effort.
        </p>
        <p className="ar">
          عندما يكون لديك اختيار الموضوع الذي ستعمل من خلاله على تعميق معرفتك ،
          تتوفر لك ثلاثة مسارات: الطريق السهل ، أو الطريق العادي، أو طريق الجهد
          المبذول
        </p>
        <p className="fr">
          La facilité revient à choisir un sujet dont on a déjà traité1, par
          exemple, ou dont on sait que la documentation est plus
          qu&#39;abondante parce qu&#39;il en est constamment et amplement
          question.
        </p>
        <p className="ar">
          الطريقة السهلة هي اختيار موضوع سبق لك التعامل معه 1 ، على سبيل المثال
          ، أو الذي تعرف أنه يحتوي على أكثر من وثائق وفيرة لأنه تتم مناقشته
          باستمرار وبشكل مستفيض.
        </p>
        <p className="fr">
          La normalité consiste à choisir un sujet que l&#39;on estime pouvant
          intéresser le ou la professeur et qui est classNameique et couramment
          sujet à publication.
        </p>
        <p className="ar">
          تتمثل القاعدة في اختيار موضوع يعتبره المرء قد يكون ذا أهمية للأستاذ
          وهو موضوع كلاسيكي وخاضع للنشر بشكل عام.
        </p>
        <p className="fr">
          L&#39;effort est une décision personnelle, qui nécessite la volonté
          d&#39;aller plus loin dans une perspective d&#39;apprentissage la plus
          efficace et profitable possible.
        </p>
        <p className="ar">
          طريق الجهد هو قرار شخصي ، ويتطلب الإرادة للمضي قدمًا في منظور التعلم
          الأكثر فاعلية وربحًا.
        </p>
        <p className="fr">
          L&#39;étudiant-e universitaire ayant une grande latitude peut
          facilement exercer son libre choix; les professeur-es généralement
          respectent sinon constatent cet état de fait sans intention
          d&#39;intervenir.
        </p>
        <p className="ar">
          يمكن لطالب الجامعة الذي يتمتع بمعرفه واسعه أن يمارس اختياره بحرية
          بسهولة ؛ يحترم الأساتذة عمومًا هذا الوضع دون أي نية للتدخل إن لم
          يراعوا ذلك.
        </p>
        <p className="fr">
          Le choix que vous ferez influencera votre résultat immédiat et votre
          perspective d&#39;avenir universitaire.
        </p>
        <p className="ar">
          سيؤثر اختيارك على نتائجك الفورية وآفاقك الأكاديمية المستقبلية.
        </p>
        <p className="fr">
          Pour vous inciter à choisir l&#39;effort voici quelques suggestions :
        </p>
        <p className="ar">لتشجيعك على اختيار الجهد ، إليك بعض الاقتراحات:</p>
        <p className="fr">
          mettez sur papier les sujets pour lesquels vous avez un intérêt
          présent; ensuite inscrivez les sujets pour lesquels vous pourriez
          manifester un intérêt dans un avenir prochain.
        </p>
        <p className="ar">
          ضع على الورق الموضوعات التي تهتم بها حاليًا ؛ ثم أدخل الموضوعات التي
          قد تعرب عن اهتمامك بها في المستقبل القريب.
        </p>
        <p className="fr">
          Face à chacun des sujets, mentionnez brièvement les motifs qui
          justifient votre choix.
        </p>
        <p className="ar">
          أمام كل موضوع ، اذكر بإيجاز الأسباب التي تبرر اختيارك.
        </p>
        <p className="fr">
          Ensuite évaluez, toujours brièvement, les références que vous
          connaissez et leur facilité d&#39;accès ainsi que la documentation qui
          pourrait être nécessaire pour mener à bien le travail.
        </p>
        <p className="ar">
          ثم قم بتقييم ، بشكل موجز دائمًا ، المراجع التي تعرفها وسهولة الوصول
          إليها بالإضافة إلى الوثائق التي قد تكون ضرورية لتنفيذ العمل.
        </p>
        <p className="fr">
          Finalement, estimez l&#39;ampleur de la recherche nécessaire pour
          effectuer votre travail s&#39;il portait sur ce sujet et vérifiez
          s&#39;il s&#39;inscrit dans le temps dont vous disposez.
        </p>
        <p className="ar">
          أخيرًا ، قم بتقدير مقدار البحث المطلوب لإكمال عملك إذا كان يركز على
          هذا الموضوع ومعرفة ما إذا كان يناسب الوقت المتاح لك.
        </p>
        <p className="fr">
          Lorsque vous avez complété cet exercice, cotez de 1 à 10 chacun des
          sujets en fonction des trois aspects afin de déterminer vos
          préférences ainsi que la faisabilité du travail. Maintenant faites
          votre choix.
        </p>
        <p className="ar">
          عند الانتهاء من هذا التمرين ، قم بتقييم كل موضوع من 1 إلى 10 وفقًا
          للجوانب الثلاثة من أجل تحديد تفضيلاتك وكذلك جدوى العمل. الآن حدد
          اختيارك.
        </p>
      </div>
    </div>
  );
};

export default SOne;
