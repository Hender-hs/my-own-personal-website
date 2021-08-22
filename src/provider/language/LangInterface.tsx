
export interface LanguageSections {
  'header': {
    'title': string,
    'emphasisWord': string,
    'subTitle': string,
    'links': {
      'aboutMe': string,
      'home': string,
      'services': string,
      'projects': string,
      'contact': string,
      'navTitle': string,
      'languages': {
        'language': string,
        'pt': string,
        'es': string,
        'en': string
      }
    }
  }
  'firstArticle': {
    'title': string,
    'firstParagraph': string,
    'SecondParagraph': string,
    'thirdParagraph': string,
    'fouthParagraph': string,
    'contact': {
      'name': string,
      'email': string,
      'location': string,
      'phone': string,
      'nameTxt': string,
      'emailTxt': string,
      'locationTxt': string,
      'phoneTxt': string,
    },
    'buttonCV': string,
  },
  'secondArticle': {
    'title': string,
    'subtitle1': string,
    'subtitle2': string,
    'subtitle3': string,
    'subtitle4': string,
    'subtitle5': string,
    'subtitle6': string,
    'description1': string,
    'description2': string,
    'description3': string,
    'description4': string,
    'description5': string,
    'description6': string
  },
  'thirdArticle': {
    'title': string,
    'moreInfoProjects': string,
  },
  'footer': {
    'title': string,
    'name': string,
    'email':string,
    'message': string,
    'buttonSend': string
  },
  'popUpSendingMsg': {
    'sending': string,
    'sent': string,
    'error': string,
    'finalizeBox': string,
  }
}