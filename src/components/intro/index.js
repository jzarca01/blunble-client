import React from "react";

const Intro = () => (
  <div>
    <p>"Blunble" is Korean internet slang for [BL]ock [UNBL]ock</p>
    <p>
      If you block and unblock somebody on Twitter, they stop following you.
    </p>
    <p>
      It's a polite way of getting rid of trolls without permanently blocking
      because blocking usually results in more anger and more trolling.
    </p>

    <div>
      <h2>How does Bunble work ?</h2>
      <ul>
        <li>It fetches your muted accounts list (max 200 users)</li>
        <li>It checks if they follow you</li>
        <li>
          It blocks then unblocks (or blunbles) each account (and then waits 2
          minutes due to rate limiting)
        </li>
      </ul>
      <p>Blunbling auto unfollows them from your account</p>

      <h2>This lets you :</h2>
      <ol>
        <li>Mute trolls on Twitter</li>
        <li>
          And they'll then automatically stop following you when the script runs
        </li>
      </ol>
    </div>
  </div>
);

export default Intro;
