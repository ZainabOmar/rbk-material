import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  articles = [
    {
      title: 'What we aim for',
      // tslint:disable-next-line:max-line-length
      text: ' The main course of the Program is structured around the world famous Hack Reactor curriculum. However, at RBK, we will also work on your communication, teamwork, leadership, critical thinking and creativity skills. Just as importantly, we will enhance your stress levels by pushing you to your maximum limit.'
    },
    {
      title: 'A Sample of the Principles You’ll Learn',
      // tslint:disable-next-line:max-line-length
      text: 'Data structures, Algorithms, jQuery, HTML/CSS, Ajax, Backbone, APIs, React, NodeJS, Databases, Deployment, MEAN stack development, Angular and more. Much more.'
    },
    {
      title: 'The Schedule',
      // tslint:disable-next-line:max-line-length
      text: 'You will start the first month doing 8 hours a day (6 days a week) at RBK’s campus as a final test before you embark on your software development special forces course. This will last three months where you will use your blood, sweat and tears to make it, and help others to cross the finish line with you.'
    },
    {
      title: ' CLASS DESCRIPTION',
      // tslint:disable-next-line:max-line-length
      text: 'In your class, or what we call Cohort (a group, or a gang of friends), you’ll find men and women from Jordan, Iraq, Syria,Romania, Lebanon, Palestine, …, etc. You’ll also find Christians, Muslims, Hindus, non-believers, and manyothers. But they all want to code! Some are cool, some are serious, some are funny and some are geeks. Butby the time you’re done, they will all be a part of your life forever. A new family … A family you will alwaysbe able to count on. This is not a traditional classroom, and you will not be learning the way you have beennormally leaning. It’s hard yes. But it’s fun. And it’s cool.'
    },
    {
      title: 'A TYPICAL DAY @ RBK CAMPUS',
      // tslint:disable-next-line:max-line-length
      text: 'Expect to kick off with the class coordinator who’ll ask about your previous day. They’ll encourage you to getenough sleep so you can be productive. They’ll also give you a toy problem (small challenge based on whatyou’ve learned so far). You’ll get a break that most students use to brainstorm solutions with each other.Everyone has a different approach to solving something! Then you’ll get a little lecture from the tech teamthat’s usually more of an introduction to the day’s material or an explanation of a main concept that youmight be applying. You’ll hear the lecturer say “Guys ! Back to hacking!”. You’ll hack in pairs and everytwo days you’ll get a different teammate. You’ll keep hacking until it’s lunch time ! You’ll also be encouragedto take regular breaks, maybe a quick walk just to unplug. After lunch you’ll take part in a 5-minute publiclightning talk where you can talk about any topic that interests you. On many occasions, this will be followedby a talk from one of the hiring partners telling you about their company.   You’ll continue hacking untilit’s unplugging hour. This is your de-stress hour. Sometimes we do yoga, sometimes we meditate, or go fora group walk … And sometimes we paint, sing or even dance. Anything to keep us away from screens ! You’llcontinue hacking until the end of the day with a dinner break. Finally, you’ll say goodbye and dream of yourbed.'
    },
    {
      title: 'INSTRUCTIONAL TEAM',
      // tslint:disable-next-line:max-line-length
      text: 'Our instructors, or facilitators as we like to call them, are exceptionally well armed to convey the curriculum and impart their overall knowledge. Most of them are RBK graduates who have been retained for their remarkable shine, their proven dedication and observed passion to enhance the communities in which they exist, the classroom being one. Having shed their own blood, sweat and tears, they are truly qualified to understand what each student is going through especially from a non-technical point of view. The stress, the emotional roller-coaster and the constant pressure is no stranger. They have been there. And they know how to guide you through it. Throughout your journey, you will be supported by our Tech Mentor who will give you hints as to where the right doors are. If you’re feeling down, want to give up and break something, then talk to our class counsellor. Don’t be shy, they also take care of our staff !'
    },
    {
      title: 'VISITING TECH MENTORS',
      // tslint:disable-next-line:max-line-length
      text: 'Don’t be surprised if you see a western guy or girl @ RBK. We have an exchange program whereby highly experienced developers come from all over the world to share their experience and help you get in-depth understanding of what you’re learning and how to apply it. They take time off from their work and fly to Jordan just to be with you, share your culture and learn how to pronounce your name !'
    },
    {
      title: 'HOUSING, TRANSPORTATION AND MEALS',
      // tslint:disable-next-line:max-line-length
      text: 'RBK provides 3 meals a day, local transportation (Greater Amman area) and housing for those living more than 1 hour away. Housing is limited and only available to those living outside Amman. It is available on a first come, first served basis. RBK does not provide stipends to students.'
    },
    {
      title: 'HAVING FUN (SOCIAL NIGHTS & EVENTS)',
      // tslint:disable-next-line:max-line-length
      text: 'Every end of week ends with a bang ! Water-balloon fights, relaxing in a candle-lit garden, BBQ, music, or bring your own instrument, bowling, AR games, movies, …, etc., is how we wrap up a hard week’s work.'
    },
    {
      title: 'TUITION',
      // tslint:disable-next-line:max-line-length
      text: 'The cost of the program is 5,700 JoD and is payable upon final approval for admission to the program. Although we offer scholarships as they become available, we also have understandings with financial institutions that are willing to grant you a loan which you can pay back comfortably when you start your first job. If we recommend you, your loan is guaranteed.'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
