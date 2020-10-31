import jokeView from '../components/views/jokeView';
import jokeData from './jokeData';

const viewHelper = (id, joke) => {
  $('#app').html('');
  switch (id) {
    case 'new-joke-button':
      return jokeView.setupView(joke);
    case 'punchline-button':
      return jokeView.punchlineView(joke);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = () => {
  jokeData.getJoke().then((response) => {
    const joke = response;
    $('body').on('click', '#new-joke-button', (e) => {
      viewHelper(e.currentTarget.id, joke);
    });
    $('body').on('click', '#punchline-button', (e) => {
      viewHelper(e.currentTarget.id, joke);
    });
  });
};

export default { viewListener };
