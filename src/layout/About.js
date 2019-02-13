import React from 'react';

export default function About() {
  return (<section id="about">
    <div class="row">
      <div class="three columns">
        <img class="profile-pic" src="images/profilepic.jpg" alt="" />
      </div>
      <div class="nine columns main-col">
        <h2>About Me</h2>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>

        <div class="row">

          <div class="columns contact-details">

            <h2>Contact Details</h2>
            <p class="address">
              <span>Jonathan Doe</span><br />
              <span>1600 Amphitheatre Parkway<br />
                Mountain View, CA 94043 US
                     </span><br />
              <span>(123)456-7890</span><br />
              <span>anyone@website.com</span>
            </p>

          </div>

          <div class="columns download">
            <p>
              <a href="https://www.linkedin.com/dms/C5604AQFjKsF3llBTtg/profile-profilePdf/0?m=AQJNkN8sYrS9yAAAAWjkvf_bToO5iBIcJCUcrGOBvwVFOzVNNlm-SPAv_Q&e=1550112283&v=beta&t=rlAKAbegbhQxwGuxg8FG-_W57ju9wpA21JxpKdo8QYo" class="button"><i class="fa fa-download"></i>Download Resume</a>
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>);
};