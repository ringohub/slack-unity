var customCss = document.createElement('style');
customCss.type = 'text/css';
customCss.id = 'customCss';
customCss.innerHTML = `
  .channels_list_holder ul li.mention a, .channels_list_holder ul li.unread:not(.muted_channel) a {
      font-weight: 500;
      font-family: 'Hiragino Sans';
      text-decoration: underline !important;
  }
  a.channel_name, a.group_name, a.im_name {
      font-family: 'Hiragino Sans';
      font-weight: 200;
      font-size: 0.8rem;
  }
  li.unread span {
    font-weight: 300 !important;
  }

  .search_form {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid rgba(113,114,116,.5);
  }

  ts-message .message_sender a {
      font-weight: 600 !important;
  }

  ts-jumper input[type=text], ts-jumper input[type=text]:focus {
    font-size: 2rem;
    font-family: 'Hiragino Sans', Slack-Lato,appleLogo,sans-serif;
    font-weight: 200;
    padding: 5px;
    border: none !important;
    border-bottom: 1px solid #2c2d30;
    border-radius: 0;
    box-shadow: none !important;
    color: #2c2d30;
    margin-bottom: 0;
    -webkit-ime-mode: disabled !important;
}

  .msg_inline_img_holder.msg_inline_holder_rounded .msg_inline_img {
    box-shadow: none;
  }
  .message_body {
      font-family: 'SFNS Display', 'Hiragino Sans';
      line-height: 1.5em;
      font-size: 0.9em;
  }

  #primary_file_button.active, #primary_file_button:hover {
    background: transparent;
    color: #56B68B;
    border-color: transparent;
  }

  .msg_inline_img_holder .msg_inline_img {
    box-shadow: none;
  }
  #client_body:not(.onboarding):before {
    /* border-bottom: .0625rem solid #e8e8e8; */
    border-bottom: 0;
  }
  div#msg_input {
    font-size: 0.9em !important;
    border: none !important;
    border-radius: 0 0 0 0 !important;
    border-bottom: 1px solid #E0E0E0 !important;
  }
  div#msg_input:focus,
  div#msg_input:hover {
    border-top: none !important;
    border-color: #439fe0 !important;
  }

  #primary_file_button {
    border: none;
    height: 0 !important;
  }

  input#search_terms {
    border: none;
    border-bottom: solid 1px;
    border-radius: 0;
  }

  .attachment_group {
    max-width: none !important;
  }
  
  button#channel_title {
    font-weight: 100;
  }
`;

var x = document.querySelector('#customCss');
if (x === null || typeof x === 'undefined') {
  document.getElementsByTagName('head').item(0).appendChild(customCss);
}

window.onkeydown = function(event) {
  if((event.ctrlKey && event.keyCode == 220) && ( !event.shiftKey )) {
    if (document.getElementsByClassName('client_channels_list_container')[0].style.display !== 'none'){
      // Hide
      // console.log('Hide');
      document.getElementsByClassName('client_channels_list_container')[0].style.display = 'none';
    } else {
      // console.log('Show');
      document.getElementsByClassName('client_channels_list_container')[0].style.display = '';
    }
  }
}
