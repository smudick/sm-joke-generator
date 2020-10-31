const setupView = (joke) => {
  $('#app').html(`
      <div class="joke-setup">
        ${joke.setup}
      </div>
      <div>
        <button type="button" class="btn btn-primary" id="punchline-button">Reveal Punchline</button>
      </div>
    `);
};

const punchlineView = (joke) => {
  $('#app').html(`
      <div class="joke-punchline">
        ${joke.punchline}
      </div>
      <div>
        <button type="button" class="btn btn-primary" id="new-joke-button">Get a new joke!</button>
      </div>
    `);
};

export default { setupView, punchlineView };
