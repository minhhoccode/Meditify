import "./setting.scss";
export default function setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="container">
          <div className="profile-header">
            <div className="profile-img">
              <img
                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/279893737_1133317790857101_3263187200603410640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=GvpI3uWUSDkAX_1BXOv&_nc_ht=scontent.fhan5-9.fna&oh=00_AT9xaBspykRR2JRzf2kDTiBH9RHDquXWrgGM0oNcFDnEzw&oe=62C576CF"
                width="200"
                alt="Profile Image"
              />
            </div>
            <div className="profile-nav-info">
              <h3 className="user-name">Hoa Phanh</h3>
              <div className="address">
                <p id="state" className="state">
                  Hanoi, VietNam
                </p>
              </div>
            </div>
          </div>

          <div className="main-bd">
            <div className="left-side">
              <div className="profile-side">
                {/* <p className="mobile-no">
                  <i className="fa fa-phone"></i> +23470xxxxx700
                </p>
                <p className="user-mail">
                  <i className="fa fa-envelope"></i> Brightisaac80@gmail.com
                </p> */}
                <div className="user-bio">
                  <h3>Bio</h3>
                  <p className="bio">Em cho anh thay doa moi no co nhau nay?</p>
                </div>
                <div className="profile-btn">
                  <button className="bluebtn" id="editBtn">
                    <i className="fa fa-comment"></i> <span>Edit profile</span>
                  </button>
                  <button className="bluebtn" id="Create-post">
                    <i className="fa fa-plus"></i> <span>Create</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="nav">
                <ul>
                  <li className="user-post active">Posts</li>
                  <li className="user-setting"> Settings</li>
                </ul>
              </div>

              <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Your Account</span>
                <span className="settingsTitleDelete">Delete Account</span>
              </div>
              <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                  <img
                    src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/279893737_1133317790857101_3263187200603410640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=GvpI3uWUSDkAX_1BXOv&_nc_ht=scontent.fhan5-9.fna&oh=00_AT9xaBspykRR2JRzf2kDTiBH9RHDquXWrgGM0oNcFDnEzw&oe=62C576CF"
                    width="200"
                    alt="Profile Image"
                  />
                  <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                  />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak" name="name" />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="safak@gmail.com"
                  name="email"
                />
                <label>Password</label>
                <input type="password" placeholder="Password" name="password" />
                <button className="settingsSubmitButton" type="submit">
                  Update
                </button>
              </form>

              {/* <div className="profile-body">
                <div className="profile-posts tab">
                  <h1>Your Post</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa quia sunt itaque ut libero cupiditate ullam qui velit
                    laborum placeat doloribus, non tempore nisi ratione error
                    rem minima ducimus. Accusamus adipisci quasi at itaque
                    repellat sed magni eius magnam repellendus. Quidem inventore
                    repudiandae sunt odit. Aliquid facilis fugiat earum ex
                    officia eveniet, nisi, similique ad ullam repudiandae
                    molestias aspernatur qui autem, nam? Cupiditate ut quasi
                    iste, eos perspiciatis maiores molestiae.
                  </p>
                </div>
                <div className="profile-settings tab">
                  <div className="account-setting">
                    <h1>Acount Setting</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit omnis eaque, expedita nostrum, facere libero
                      provident laudantium. Quis, hic doloribus! Laboriosam nemo
                      tempora praesentium. Culpa quo velit omnis, debitis
                      maxime, sequi animi dolores commodi odio placeat, magnam,
                      cupiditate facilis impedit veniam? Soluta aliquam
                      excepturi illum natus adipisci ipsum quo, voluptatem,
                      nemo, commodi, molestiae doloribus magni et. Cum, saepe
                      enim quam voluptatum vel debitis nihil, recusandae, omnis
                      officiis tenetur, ullam rerum.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
