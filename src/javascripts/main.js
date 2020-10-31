import '../styles/main.scss';
import viewHelper from './helpers/viewHelper';

const init = () => {
  $('#app').html(`
  <h1>Jokes!</h1>
    <div>
      <button type="button" class="btn btn-primary" id="new-joke-button">Get A New Joke</button>
    </div>`);
  viewHelper.viewListener();
};

init();
