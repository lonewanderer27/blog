
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blog/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/blog/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Reply to Should Old Friends and Days of Long Ago Should Be Forgotten?                              :               First of all, young Jay, your grammar sucks and it’s ironic considering that you answered this question during the time that you were taking your. . . :                                                                                                                                                                       Jay                                20 Jun 2022                                                                                                                                                                                                                                                                                                                  Making Camp Buddy Toolbox using PySimpleGUI                              :               I once wanted to create a Discord chatbot that speaks exactly like Keitaro, however, none have written a dialog extractor specifically for Camp Buddy, so. . . :                                                                                                                                                                       Jay                                09 Jun 2022                                                                                                                                                                                                          All Stories:                                                                                                     Reply to Should Old Friends and Days of Long Ago Should Be Forgotten?              :       First of all, young Jay, your grammar sucks and it’s ironic considering that you answered this question during the time that you were taking your Journalism class in Bangkal High. . . :                                                                               Jay                20 Jun 2022                                                                                                                                    Making Camp Buddy Toolbox using PySimpleGUI              :       I once wanted to create a Discord chatbot that speaks exactly like Keitaro, however, none have written a dialog extractor specifically for Camp Buddy, so I wrote Camp Buddy Dialog. . . :                                                                               Jay                09 Jun 2022                                                                                                                                    My Coming Out Story              :       It has been 3-4 years since I discovered I was gay, it was a really hard time for me, but I think I’m ready to tell my story::                                                                               Jay                29 Apr 2022                                                                                                                                    I'm Gay. Nerd.               :       I've recently watched Netflix's Heartstopper and I just related so much to Charlie. There's never been an instance that a character in a movie or series, that made me feel. . . :                                                                               Jay                27 Apr 2022                                                                                                                                    Introducing The Coffee Lounge™              :       10 Years from now, The Coffee Lounge™ is going to be one of the last businesses that I'll establish before going abroad to finally be free from the society that. . . :                                                                               Jay                22 Apr 2022                                                                                                                                    I am a Tech-Nerd              :       You can create something meaningful that could change the humanity forever, right from your very own keyboard and monitor:                                                                               Jay                22 May 2020                                               &laquo; Prev       1        2        3      Next &raquo; "
    }, {
    "id": 3,
    "url": "http://localhost:4000/blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/blog/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "http://localhost:4000/blog/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/blog/reply-to-should-old-friends-and-days-of-long-ago-should-be-forgotten/",
    "title": "Reply to Should Old Friends and Days of Long Ago Should Be Forgotten?",
    "body": "2022/06/20 - First of all, young Jay, your grammar sucks and it’s ironic considering that you answered this question during the time that you were taking your Journalism class in Bangkal High School under Prof. Neri Anyway for it’s a no for me. These old friends, together with our old memories with them, they are the reason why and where we are right now. So! Story time, I’ve had an old friend whom helped me pass during my Grade School days. But eventually, there was time that we’ve had to be separated because my family had to move to another city. We haven’t forgotten each other, in fact we often see each other’s posts in Facebook because we’re friends, but, we do not really interact with each other, we just know what happens. Here’s the “exciting” part. Campaign period for Philippines 2022 National Elections have officially started, surprise surprise, most of them are Kakampink. How did I know you ask? Well Facebook, for some reason, decided that I should see my old friends post again because they are kakampinks. If my memory serves me right, I started to see their post when Pasiglaban (Election Campaign of VP Leni Robredo in Emerald Ave. , Pasig City to be President) campaign took place. And since then, I’ve been interacting with them through comments on their shared post. I could’ve shared posts too but oh well, I have soooo many BBM supporter relatives so I just didn’t. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/blog/making-camp-buddy-toolbox-using-pysimplegui/",
    "title": "Making Camp Buddy Toolbox using PySimpleGUI",
    "body": "2022/06/09 - I once wanted to create a Discord chatbot that speaks exactly like Keitaro, however, none have written a dialog extractor specifically for Camp Buddy, so I wrote Camp Buddy Dialog Extractor However, that program is a command line application, meaning a user would have to know how to use a terminal which is not very user friendly… What if someone who’s inexperienced in coding just wants to have fun with their friends, talking to Keitaro or Hiro in their Discord server, like I once wanted… So I thought to myself. . why not make an app that can extract scripts from Camp Buddy? (and more that I can think of in the future) Sooooooo above me is a screenshot of the tool that I’m currently making for a Visual Novel game. It mainly targets those who want to make a python chat bot that speaks exactly like the characters from the Visual Novel. Extracting Assets Tab: The GUI doesn’t become unresponsive thanks to perform_long_operation. And the write_event_value made it easy to pass the current file that is being extracted, as well as the current progress of the extraction from a separate python program Though I kinda wish this also works in the QT port as I prefer the look of that instead of Tkinter. But this will do for now! Extracting Scripts Tab: The layout tools worked very well in keeping the check boxes organized About Window: I really like the About window of GNOME / GTK apps so I made mine look similar to it The Github Repo link is here for anyone who wants to look at the code, warning it’s spaghetti code:https://github. com/lonewanderer27/Camp-Buddy-Toolbox And I am legally required to disclose the code anyway since I used and modified (a bit) the code of the extractor program (which is GPL-3 licensed) "
    }, {
    "id": 8,
    "url": "http://localhost:4000/blog/my-coming-out-story/",
    "title": "My Coming Out Story",
    "body": "2022/04/29 - It has been 3-4 years since I discovered I was gay, it was a really hard time for me, but I think I’m ready to tell my story: I still remember before starting Grade 10, I prayed to God, hoping that no one would bully me anymore and that I’ll have more friends this time around. (I was bullied for a lot of reasons back in Grade 6 to 9, and added the factor that I didn’t had a lot of friends because I was super shy and don’t know how to talk. It was terrible basically) My wish came true and I was super grateful, then with this new friend group I met a guy. He’s a really funny one, he would always make us laugh but specially me, his jokes, because of that I think out of all people we’ve been the most closest. I would describe him as my best friend at the time to be honest. Then one day he told me he’s got crush on a girl, someone that is out of our circle but pretty close to us. He was rejected and I don’t blame the girl because she’s pretty much the aral muna type of person. This is when my best friend started to be sad, really really sad, not just because of the rejection but also some family issues that affected him. I stayed beside him, but most specially when he told me that he could possibly have a mental disorder that greatly affected his mood. I remember searching up articles on how to help someone with this. I was there when he needed someone to talk to, be it in chat, the class or even outside the class. Still remember that special moment when we sat on the side of a bridge, him telling his problems about his mom and just really really sad stuff. I was there through most of it, specially when he tried hurting himself, talking about suicide because he can’t bear it anymore. I begged him not to do it during the several times that he wanted to. Then one day one girl came to our lives, she’s not in our inner circle as well but she’s close to some of us. Soon, she and my best friend started to hangout more often. His mood definitely improved since they started to hangout and I don’t know why. I also felt at the time that I was being jealous at how they’re close. That feeling that you’re not needed anymore and that you should probably just let them be because that is the best for them, most specially for him. But I couldn’t keep those feelings and I think I admitted that I like him, or I was gay. It didn’t ended so well and we weren’t that close anymore after that. I don’t blame him, it must have been stressful for him already because of his problems, and me admitting must have caused him more. I think the most traumatic part of it is that I blamed myself why our friend group broke, even till this day. It was never been the same since. That I ended up loosing the friends I longed for, just because of my realization of my feelings for a guy. But what I didn’t blamed myself for is that I was there for someone when they really needed it. At that time my painful memories of being bullied was still there and feeling alone. And I don’t want that to happen to anyone else, most specially to the person that I like. I think that is my definition of love at the time, let go the person you love the most if it means that they would be better, without you. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/blog/im-gay-nerd/",
    "title": "I'm Gay. Nerd.",
    "body": "2022/04/27 - I’m Gay. Nerd. I’ve recently watched Netflix’s Heartstopper and I just related so much to Charlie. There’s never been an instance that a character in a movie or series, that made me feel so seen as a person. Charlie is someone is who is very introverted, and good at math (while I am skilled at programming and I also like computers), minus the part that he is good at music because for the life of me I can’t even read music notes. Coming out today was probably late since I’ve already known myself as gay years years ago, but I’m just the type of gay guy who is very discreet, and I just thought that nothing is gonna change even if I come out. But I just really wanna get this out of my chest. There is still part of me that wants to be seen as the real me. I tried to keep it to my immediate family and select relatives only and a very few close friends but I feel like in this time I shouldn’t be scared anything anymore. This is me and if somebody can’t accept me so be it. So here ya go ya’ll, I’m part of the rainbow 🙂 🏳️‍🌈 ❤️ "
    }, {
    "id": 10,
    "url": "http://localhost:4000/blog/the-coffee-lounge/",
    "title": "Introducing The Coffee Lounge™",
    "body": "2022/04/22 - I introduce The Coffee Lounge™ A five-star coffee shop, located in the heart of Metro Manila. Serving exceptional coffee, partnered with our famous bread products, your experience in The Coffee Lounge will be nothing short of extravagant and relaxing. It doesn’t exist in real world as of now, yet it represents a milestone in my grand scheme plan of things. 10 Years from now, The Coffee Lounge™ is going to be one of the last businesses that I’ll establish before going abroad to finally be free from the society that I am currently in, and live my life the way I wanted it to be. All the hardships that I’m going through right now, countless of sleepless nights, struggles in school, lots of existential crisis, it’ll all be worth it in the end. Thank you so much sa naging graphic designer ng website at UI / UX Engineer ng The Coffee Lounge™ website Tin-Tin Rodriguez. Your works are just amazing, hire niyo na po siya please XD Visit our website at: https://the-coffee-lounge. pages. dev/ "
    }, {
    "id": 11,
    "url": "http://localhost:4000/blog/i-am-a-tech-nerd/",
    "title": "I am a Tech-Nerd",
    "body": "2020/05/22 - I am a tech-nerd. Collecting a bunch of electronics, opening their insides to see how they work and experimenting with them has been my hobby since I was 11 years old. Now, it’s so much more, I dream the likes of Elon Musk, Bill Gates who own multi-national companies that continues to push the capabilities of our technology, innovating in every where possible. I also strive to change how the society perceives Programming and Tech related Jobs, you are not just sitting in a chair all day waiting for something to happen. “You can create something meaningful that could change the humanity forever, right from your very own keyboard and monitor. ” ~ Jay2020 #PERDEVCAREERS#STEMCOMPROG#FUTUREIT "
    }, {
    "id": 12,
    "url": "http://localhost:4000/blog/powerful-things-markdown-editor/",
    "title": "Powerful things you can do with the Markdown editor",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}HTML: 12345&lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: 12345678. highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: 123456789// alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: 1print( Hello World )Ruby: 123require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: 1printf( Hello World ); Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 13,
    "url": "http://localhost:4000/blog/first-mass-produced/",
    "title": "The first mass-produced book to deviate from a rectilinear format",
    "body": "2018/06/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 14,
    "url": "http://localhost:4000/blog/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/blog/press-and-education/",
    "title": "Press and education",
    "body": "2018/01/12 - Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/blog/options-for-creating-new-site-with-jekyll/",
    "title": "Options for creating a new site with Jekyll",
    "body": "2018/01/12 - jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are some additional details:  To install the Jekyll site into the directory you’re currently in, run jekyll new . If the existing directory isn’t empty, you can pass the –force option with jekyll new . –force.  jekyll new automatically initiates bundle install to install the dependencies required. (If you don’t want Bundler to install the gems, use jekyll new myblog --skip-bundle. ) By default, the Jekyll site installed by jekyll new uses a gem-based theme called Minima. With gem-based themes, some of the directories and files are stored in the theme-gem, hidden from your immediate view.  We recommend setting up Jekyll with a gem-based theme but if you want to start with a blank slate, use jekyll new myblog --blank To learn about other parameters you can include with jekyll new, type jekyll new --help. "
    }, {
    "id": 17,
    "url": "http://localhost:4000/blog/is-intelligence-enough/",
    "title": "External Featured Image",
    "body": "2018/01/12 - Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 18,
    "url": "http://localhost:4000/blog/quick-start-guide/",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 19,
    "url": "http://localhost:4000/blog/customer-service/",
    "title": "Inception Movie",
    "body": "2018/01/11 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Mediumish! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: 12345678910---layout: posttitle:  Inception Movie author: johncategories: [ Jekyll, tutorial ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }, {
    "id": 20,
    "url": "http://localhost:4000/blog/should-old-friends-be-forgotten/",
    "title": "Should Old Friends and Days of Long Ago Should Be Forgotten?",
    "body": "2017/06/20 - I think it’s a no. Because these old friends, old memories, they are the reason why and where you are right now. For example, you have an old friend, he/she helped you pass the elementary days, now the time came that you two have to separate of school in High School because of various reasons. You should not forget him/her and what did he/she do to you. "
    }, {
    "id": 21,
    "url": "http://localhost:4000/blog/top-10-greatest-people-i-know/",
    "title": "Top 9 Greatest People I Know",
    "body": "2017/06/15 - 1. Andy Rubin: He because he is the main founder of Android. Which Google bought $50 Million dollars. I’ve added him because without him, Android couldn’t have been existed, there will be no modders and developers like me creating Android forks. 2. Bill Gates: Bill Gates co – founded with Paul Allen. They founded Microsoft which made Windows. FYI, Windows is the most dominant in computer operating system for PC followed by Apple Mac OS then Linux. At first Windows was just color based but now, it was the best Windows 10 ever, combined the Live Tile (Windows 8) and the revival of Start Menu style. (Windows 7) 3. Chainfire: I think that is not his real name. Consider him as the founder of modding in Android. Back in Android as early as Cupcake 1. 5. He is able to crack Android code, and able to install root access. Since then many modders followed what Chainfire started. Still, this time, he is working on FlashFire(On device flashing app) and in root fix in Google Pixel. Lately he developed systemless root for Android 6. 0 following Touchwiz 5. 1. 1. Then Nougat. 4. Rocky Gathercole: He was just a simple girlish boy. Back then he didn’t actually think to be a designer but later on in his life, a filipino designer meet up with him and he suggested to Rocky to became as a designer. His life wasn’t a glorious in the start but slowly he became famous and started to design some hollywood artists their gown or suite. Perfect example of “Some People Achieve Greatness”. 5. Steve Jobs: Believe it or not, i do not actually idolize Apple at first. But now im amazed what Apple has done in making iOS buttery smooth. It’s Steve Jobs who is the father of where is Apple right now. But sadly he is dead already. 6. Hershey Hilado: Her life wasn’t very easy. She is not born with golden spoon on her mouth. Her parents were not easy on her, here parents forcefully married her to a Korean man in exchange for money. But managed to escape to Manila and eventually found by his father relatives, there via laptop of her aunt, she met an Australian man, and the man fetched Hershey from Philippines. She thought that her life is going to perfect this time but not. And eventually broke up with his fiance and she build her own business but it got roughs so she switched to an online store. There, she eventually she got famous after a celebrity noticed her clothes she sells. 7. John Wu: The creator of the most popular Magisk. The universal systemless interface. I can’t find his picture though. Magisk is a tool in Android devices that is used to root a device systemlessly, it doesn’t modify any system files thus bypassing SafetyNet which is developed by Google. Thanks to several contributors to android. John Wu came up with this tool. Lives in Taiwan. He is very friendly, (But almost developers and modders from XDA do) actually he provided a help (full documentation) to those who want to work this mod with their device. 8. Pent: Who created the most powerful automation app on android. Still, this day, I can’t get his pic. Tasker is in which you can create profiles that can automate several things like moving files at a certain time or answer a phone call when you are in home. But it’s pretty complicated specially for begginers as mostly it depends on global variables. He is friendly just like John Wu, and even for begginers, he advises them what to do and how to do it in Tasker. 9. Jamie: He created MacroDroid, an automation app but much easier to understand for begginers. MacroDroid provides a simple user interface, you got set: trigger, an action and an optional constraint, compare to complicated UI of Tasker Just like the first two, he is also friendly. He responds to those who post andasking for help in our forum for that app. He also takes feature request. And guess what, he is an Indi Developer which means,he is the only one who’s working on MacroDroid. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});