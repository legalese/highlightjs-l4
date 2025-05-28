/* Language: L4
 * Description: L4 language highlighting rules
 * Author: Thomas Gorissen <thomas@legalese.com>
 * Website: https://l4.legalese.com
 * Category: common
 */

export default function(hljs) {
  const KEYWORDS = {
    keyword: [
      'GIVEN', 'GIVETH', 'DECIDE', 'MEANS', 'DECLARE', 'IF', 'THEN', 'ELSE', 'OTHERWISE',
      'AND', 'OR', 'RAND', 'ROR', 'IS', 'HAS', 'ONE', 'OF', 'WITH', 'A', 'AN', 'THE',
      'YIELD', 'CONSIDER', 'WHERE', 'LIST', 'ASSUME', 'WHEN', 'TYPE', 'PARTY', 'DO', 'DOES',
      'MUST', 'WITHIN', 'HENCE', 'LEST', 'FUNCTION', 'FROM', 'TO', 'IMPLIES',
      'AT', 'STARTING', 'FOLLOWED', 'BY', 'FOR', 'ALL', 'PROVIDED',
      'AKA', 'IMPORT'
    ],
    literal: ['TRUE', 'FALSE', 'NOTHING', 'FULFILLED', 'TBD'],
    built_in: ['STRING', 'NUMBER', 'BOOLEAN']
  };

  const ANNOTATIONS = {
    className: 'doctag',
    begin: /@(?:nlg|ref|ref-src|ref-map)/,
    end: /$/,
    contains: [
      {
        className: 'link',
        begin: /https?:\/\/[^\s]+/,
        relevance: 0
      }
    ]
  };

  const DIRECTIVES = {
    className: 'formula',
    begin: /#(?:SEVAL|EVAL|CHECK|PROVISION|TRACE)/,
    end: /(?=\s|$)/
  };

  const STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  const QUOTED_IDENTIFIER = {
    className: 'variable',
    begin: /`/,
    end: /`/
  };

  const NUMBER = {
    className: 'number',
    variants: [
      { begin: /\b\d+(\.\d+)?%?/ },
      { begin: /-\d+(\.\d+)?%?/ }
    ]
  };

  const OPERATORS = {
    className: 'bullet',
    begin: /(?:\+|-|\*|\/|PLUS|MINUS|DIVIDED BY|MODULO|TIMES)/
  };

  const COMPARATORS = {
    className: 'symbol',
    begin: /(?:>=|<=|>|<|=|GREATER THAN|LESS THAN|EQUALS|NOT|AT LEAST|AT MOST)/
  };

  const PROPERTY = {
    className: 'attribute',
    begin: /(?:'s)/
  }

  const COMMENTS = {
    className: 'comment',
    begin: '(--|\/\/)',
    end: '$',
    contains: [
      hljs.PHRASAL_WORDS_MODE
    ]
  }

  const BLOCK_COMMENTS = {
    className: 'comment',
    begin: '{-',
    end: '-}',
    contains: [
      hljs.PHRASAL_WORDS_MODE
    ]
  }


  const TITLE = {
    className: 'title',
    begin: /§+ /,
    end: /$/
  };

  return {
    name: 'L4',
    aliases: ['l4'],
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [
      BLOCK_COMMENTS,
      COMMENTS,
      TITLE,
      STRING,
      QUOTED_IDENTIFIER,
      NUMBER,
      OPERATORS,
      COMPARATORS,
      PROPERTY,
      ANNOTATIONS,
      DIRECTIVES
    ]
  };
};
