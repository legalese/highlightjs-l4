/* Language: L4
 * Description: L4 language highlighting rules
 * Author: Thomas Gorissen <thomas@legalese.com>
 * Website: https://l4.legalese.com
 * Category: common
 */
export default function(hljs) {
  const KEYWORDS = {
    keyword: [
      'GIVEN', 'GIVETH', 'GIVES', 'DECIDE', 'EXACTLY', 'MEANS', 'DECLARE',
      'IF', 'BRANCH', 'THEN', 'ELSE', 'OTHERWISE',
      'AND', 'OR', 'RAND', 'ROR', 'NOT',
      'IS', 'ONE', 'OF', 'WITH', 'A', 'AN', 'HAS', 'THE',
      'YIELD', 'CONSIDER', 'WHERE', 'LIST', 'ASSUME', 'WHEN',
      'TYPE', 'PARTY',
      'DO', 'DOES', 'MUST', 'MAY', 'SHANT', 'BREACH', 'BECAUSE', 'PROVIDED',
      'WITHIN', 'HENCE', 'LEST',
      'FUNCTION', 'FROM', 'TO',
      'IMPLIES',
      'BY',
      'THAN',
      'AT', 'STARTING', 'FOLLOWED',
      'FOR', 'ALL',
      'AKA', 'IMPORT',
      'FETCH', 'POST', 'ENV', 'CONCAT',
      'AS', 'LET', 'IN', 'BE', 'MEAN', 'UNLESS'
    ],
    literal: ['TRUE', 'FALSE', 'NOTHING', 'FULFILLED', 'TBD'],
    built_in: ['STRING', 'NUMBER', 'BOOLEAN']
  };

  const ANNOTATIONS = {
    className: 'doctag',
    begin: /@(?:nlg|ref|ref-src|ref-map|desc|export)\s/,
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
    begin: /#(?:EVALTRACE|EVAL|CHECK|TRACE|ASSERT)/,
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
    begin: /(?:\+|-|\*|\/|&&|\|\||=>|==|PLUS|MINUS|TIMES|DIVIDED|MODULO)(\s|$)/
  };

  const COMPARATORS = {
    className: 'symbol',
    begin: /(?:>=|<=|>|<|=|GREATER|LESS|EQUALS|NOT|AT LEAST|AT MOST|ABOVE|BELOW)(\s|$)/
  };

  const ELLIPSIS = {
    className: 'punctuation',
    begin: /\.{2,3}/
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
    variants: [
      { begin: '{-', end: '-}' },
      { begin: '/\\*', end: '\\*/' }
    ],
    contains: [
      hljs.PHRASAL_WORDS_MODE
    ]
  }


  const TITLE = {
    className: 'title',
    begin: /§+\s/,
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
      ELLIPSIS,
      PROPERTY,
      ANNOTATIONS,
      DIRECTIVES
    ]
  };
}
