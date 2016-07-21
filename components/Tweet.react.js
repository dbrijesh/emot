/** @jsx React.DOM */

var React = require('react');
var retext = require('retext');
var inspect = require('unist-util-inspect');
var sentiment = require('retext-sentiment');

module.exports = Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    return (
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
        <img src={tweet.avatar} className="avatar"/>
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a> 
            <span className="screen-name">@{tweet.screenname}</span> 
          </cite>
          <span className="content" >{tweet.body}</span>
                                           <span className="content" >{tweet.senti}</span>
        </blockquote>
      </li>
    )
  }
});

