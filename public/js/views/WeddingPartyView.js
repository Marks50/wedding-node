var WeddingPartyView = ContentView.extend({

  events: {
    'click .view-bio': 'showBio'
  },

  /*
   * Initialize with the template-id
   */
  initialize: function(options) {
    this.template = options.template;
  },

  showBio: function(e) {
    var person = $(e.currentTarget).data('person');
    var modal = new BaseModalView({template: '#base-modal'});
    modal.show(person, this.people[person]);
  },

  render: function() {
    var content = $(this.template).html();
    $(this.el).html(content);
    return this;
  },

  people: {
    cindy: {
      name: 'Cindy Vuong',
      title: 'Bride',
      content: '<p>' +
          'Cindy first met Anton at a joint birthday party for Melissa Chan and herself in 2003.' +
          'There was an instant and undeniable chemistry between the two, as they were both driven' +
          'by a mutual love of music. They would talk everyday, sharing songs with one another, laughing together' +
          'and quickly became close friends.' +
        '</p><p>' +
          'It took two years, before Cindy finally succumbed to Anton&apos;s devilish charms, and dashing good looks,' +
          'an event, that Anton believes to be the best decision of Cindy&apos;s life. After driving Cindy crazy for 8 years with his antics,' +
          'Anton realized that if he wanted it, he had to put a ring on it. And so, on August 29th, 2013,' +
          'Anton had Cindy picked up in a limousine from work in Downtown Toronto, and sent her on an elaborate scavenger hunt around Mississauga,' +
          'to recreate the fateful night that Anton asked Cindy to be his girlfriend. His big romantic gesture paid off, as Cindy said yes, and as you know, the rest is history.' +
        '</p>'
    },
    karen: {
      name: 'Karen Sandhu',
      title: 'Maid of Honour',
      content: '<p>' +
          'Cindy had begun her 2nd year of business administration at Sheridan college, when a bright-eyed girl,' +
          'dressed in green, sat down beside her in a puff, nearly spilling a bottle of orange juice onto Cindy’s laptop!' +
          'Cindy had never met someone who could fit so many words, so fast, into a sentence, without taking a breath of' +
          'air!' +
        '</p><p>' +
          'From that day, Cindy and Karen were inseparable. Karen has the unique ability to accidentally kick you,' +
          'under a table from absolutely any angle: the cause of many bruises on Cindy’s legs. Cindy considers Karen' +
          'to be the most caring person she knows, an individual who always stand the people she loves no matter' +
          'where they are. Cindy is lucky to have Karen as her maid of honour.' +
        '</p>'
    },
    sandra: {
      name: 'Sandra Wainwright',
      title: 'Bridesmaid',
      content: '<p>' +
          'Whenever you hear an explosion of giggles down the hall, you just knew that Cindy and Sandra were' +
          'together. As kids, Sandra was always the shorter of the two, until adulthood, where Sandra now' +
          'towers over Cindy.' +
        '</p><p>' +
          'Sandra’s always been a force in Cindy’s life, as they grew up, sharing many life experiences together.' +
          'Now that they’re both engaged, they get to enjoy the stress and joy of planning a wedding together!' +
        '</p>'
    },
    julie: {
      name: 'Julie Wainwright',
      title: 'Bridesmaid',
      content: '<p>' +
          'Growing up together, Cindy and Julie had always competed against one another. For the bed' +
          'during their sleep overs, for the honour of being the greatest sailor scout, and most importantly,' +
          'for the love and affection of the Backstreet Boy’s Nick Carter.' +
        '</p><p>' +
          'Now as adults, the two girls have matured in many ways. For instance, Julie no longer stays' +
          'over at Cindy’s house, where she’d have to sleep in Cindy’s closet. It is probably a good thing' +
          'they grew out of boy band singers: this wedding wouldn’t be happening otherwise.' +
        '</p>'
    },
    ann: {
      name: 'Ann Hui',
      title: 'Bridesmaid',
      content: '<p>' +
          'Ann wasn’t able to resist the delicious scents coming out of Cindy’s kitchen, and so together,' +
          'they explored the world of baking. From binge watching episode after episode of “Cake Boss” until' +
          'the early morning, to going out and purchasing KitchenAid Mixers, the two have accomplished' +
          'their goals of helping their significant others gain wait through all the goods they’ve had to eat.' +
        '</p>'
    },
    vanessa: {
      name: 'Vanessa Ramawad',
      title: 'Bridesmaid',
      content: '<p>' +
          'In the 11th grade, when Cindy started school at Rick Hansen, she knew absolutely nobody.' +
          'Lucky for her, Vanessa had the exact same courses as Cindy, and became Cindy’s first friend Rich Hansen.' +
        '</p><p>' +
          'Although they ended up going to different colleges and universities, they’ve always kept' +
          'in close contact through their monthly dinners together, to their excursions across the border' +
          'for the Cheesecake Factory. Whenever Cindy had a problem, Vanessa would always be there for her,' +
          'which is why Vanessa will be up at the altar with Cindy on her special day.' +
        '</p>'
    },
    anton: {
      name: 'Anton Nguyen',
      title: 'Groom',
      content: '<p>' +
          'Anton had known Cindy for two years, before he realized how really, really, really, ridiculously happy, she made him, and thus, Anton decided to pursue Cindy&apos;s affections.' +
          'Having been friends for so long, Anton decided a &apos;slow burn&apos; strategy was best, where Anton would subtly court her, just a little, every day, until Cindy would suddenly realize' +
          'she had feelings for Anton, but not know how it happened.' +
        '</p><p>' +
          'After battling the friendzone for seven long months, Anton decided that enough was enough: he would make Cindy his girlfriend!' +
          'So after a long day, studying at UTM, he took her out for a fancy dinner at Pizza Hut. After graciously paying for the meal, Anton took Cindy home. He was about to make his big move,' +
          'when the unimaginable happened: He chickened out!' +
        '</p><p>' +
          'Driving away, images of a life without Cindy flashed before Anton&apos;s eyes, causing him to shudder at the possibility of such a world. After a boost in confidence (yelling) from Nia Warouw, Anton turned the car around,' +
          'and drove back to Cindy&apos;s home. In order to lure her out, Anton shamefully lied to her, telling her that he had "lost" his debit card on her driveway, and needed' +
          'her help to find it. Cindy came out, with her flashlight, where Anton unveiled the depths of his deceit and revealed his feelings for her. It worked, and so on November 13th, 2005,' +
          'they became lovers.' +
        '</p>'
    },
    tenniel: {
      name: 'Tenniel Chan',
      title: 'Best Man',
      content: '<p>' +
          'Anton had no idea, that in the lecture hall of his "Object-Oriented Systems Analysis and Design Using UML" class, that he would' +
          'meet his future best man. At the University of Toronto, life as a Computer Science student was difficult, fraught with countless all-nighters,' +
          'endless cups of coffee, and immeasurable explcits shouted at a computer screen. Despite all these trials and tribulations,' +
          'at least with Tenniel fighting alongside him in the trenches, Anton knew he&apos;d survive.' +
        '</p><p>' +
          'After the two broke free of the shackles of education, they finally began to experience and understand life with an income.' +
          'The two embarked on many adventures, taking them from the streets of Montreal, all the way to the bright lights of Las Vegas.' +
          'No matter what troubles arose throughout their adventures, Tenniel was always there with Anton, watching his back.' +
          'And so, on this important day, Anton has chosen to trust Tenniel to stand beside him, once again, watching his back.' +
        '</p>'
    },
    trung: {
      name: 'Trung Diep',
      title: 'Groomsmen',
      content: '<p>' +
          'It&apos;s a bird! It&apos;s a plane! No, it&apos;s Trung! Ever the live-long Superman fan, who would of thought he&apos;d be able to' +
          'get along with Anton, a live-long Batman fan? Long ago, when both Trung and Anton were still in the springtime of' +
          'their youth, they met at a computer company called, "TME". Being the only two "young" people there, it was only' +
          'natural that they bonded, doing youthful activities such as, over a shared interest in Dragonball Z and Naruto.' +
        '</p><p>' +
          'Their friendship has endured for many years, and in 2005, Anton had the honor of being one of Trung&apos;s groomsmen.' +
          'As one of Trung&apos;s esteemed groomsmen, Anton made sure Trung&apos;s final days as a bachelor were filled with' +
          'many great adventures, and most importantly, misadventures. With Trung as one of Anton&apos;s groomsmen, Anton is' +
          'certain that many great new adventures, and most importantly, misadventures are to come.' +
        '</p>'
    },
    alphonse: {
      name: 'Alphonse Nguyen',
      title: 'Groomsmen',
      content: '<p>' +
          'Anton first met Alphonse, mere hours after his birth, coincidently conceding with the introduction of stress into' +
          'Alphonse&apos;s life. Growing up, Anton adored his older, (shorter) brother, and decided that annoying him was the best' +
          'way to express these feelings. Strangely enough, Alphonse didn&apos;t seem to share this idealogy.' +
        '</p><p>' +
          'Having gone through countless arguments and bruises, the two somehow managed to' +
          'reach adulthood without completely destroying both their house and each other: A testiment to Anton&apos;s ability to run and hide in fear.' +
          'Despite their storied past, Anton is proud to have grown up with a great companion, and wouldn&apos;t have it any other way.' +
        '</p>'
    },
    ramiro: {
      name: 'Ramiro Chamorro',
      title: 'Groomsmen',
      content: '<p>' +
          'Anton met Ramiro on Anton&apos;s first day at FreshBooks. Ever since that fateful day, they&apos;ve teamed up time and time again on to accomplish many things:' +
          '<ul>' +
            '<li>Defeating the Locust horde</li>' +
            '<li>Bringing home <a href="http://instagram.com/p/UaPa4krRVe/" target="_blank">Gordon</a></li>' +
            '<li>Installing shelves</li>' +
            '<li>Inventing a secret handshake</li>' +
          '</ul>' +
          'Impressive as theses accomplishments are, there is none greater then Ramiro and Anton getting, not one, but TWO engagement rings!' +
          'Having spent months researching the world of diamonds, they realized the diamonds found in many local stores simply wasn&apos;t good enough for their significant others.' +
          'So drive to Detroit they did, twice, to find the perfect diamond. And carried the diamonds across the border they did, twice, in the pursuit of maritial happiness.' +
          'Suffice to say, without Anton, Ramiro wouldn&apos;t be married, and without Ramiro, neither would Anton.' +
        '</p>'
    },
    ted: {
      name: 'Ted Chan',
      title: 'Groomsmen',
      content: '<p>' +
          'In the summer of 2005, Anton decided to try his hand at Dragonboat. It was there that Ted first met Anton. Buoyed by a mutual appreciation' +
          'for comic books, guitars, and video games, the two became fast friends. Unfortunately for Cindy, Ted took Anton on journey into the depths' +
          'of the world of superheroes, resulting in many dollars spent on convention tickets, autographs, comic books, and nerd memorabilia.' +
        '</p><p>' +
          'Throughout their relationship, Ted has helped Anton time and time again, tirelessly dispensing his sage wisdom, advising Anton on everything' +
          'from relationships and careers, to finances. The repeated success of Ted&apos;s advice has convinced Anton, that he needs' +
          'a superhero like Ted, to stand with him at the altar, ready to battle any evil that may come his way. Fortunately for the attendees, Cindy' +
          'has not allowed Anton to dress Ted in spandex.' +
        '</p>'
    },
  }
});
