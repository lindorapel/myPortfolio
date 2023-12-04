import movieThumbnail from "../assets/web-thumbnail/movies-list-app.png";
import todoThumbnail from "../assets/web-thumbnail/todolist-app.png";
import informatikaUnriThumbnail from "../assets/web-thumbnail/informatika-Unri.png";
import androidUiThumbnail from "../assets/web-thumbnail/UiUx Android.png";
import carLandingPageThumbnail from "../assets/web-thumbnail/CarLandingPage.png";
import NotesAppThumbnail from "../assets/web-thumbnail/NotesApp.png";

const Main = () => {
  return (
    <div className="lg:w-7/12 pt-10 lg:pt-20">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24 lg:mx-5"
        aria-label="About me"
      >
        <div className="lg:hidden py-5 bg-slate-900/75 backdrop-blur lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold tracking-widest uppercase text-slate-200 ">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            {
              "I'm a React.js enthusiast dedicated to crafting mesmerizing digital experiences that blend cutting-edge technology with intuitive design. With React.js as my palette, I orchestrate captivating user interfaces, leveraging its versatility to build seamless and visually stunning applications. My expertise lies in architecting modular components, utilizing Redux and Context API to create scalable solutions, constantly exploring new frontiers within the React ecosystem."
            }
          </p>
          <p className="mb-4">
            {
              "Beyond code, I'm a fusionist, merging design finesse with technical prowess. Collaborating harmoniously with design luminaries, I breathe life into their visions, translating abstract ideas into user-centric realities. Fueled by an insatiable thirst for growth, I immerse myself in the evolving landscape of front-end development, driven to innovate and redefine the paradigms of web experiences."
            }
          </p>
          <p>
            {
              "In this ever-evolving digital symphony, I stand ready to contribute, armed with a blend of React.js mastery, design sensibilities, and an unwavering commitment to continuous advancement, poised to create digital marvels that captivate and inspire."
            }
          </p>
        </div>
      </section>

      <section
        id="project"
        className=" mb-16 scroll-mt-16 md:mb-24 lg:mb-0 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="lg:hidden py-2 bg-slate-900/75 backdrop-blur lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold tracking-widest uppercase text-slate-200 ">
            my Project
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-3 group/list">
            <li className="group/link group hover:bg-slate-800 rounded-md p-5  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <a
                href="https://coymovies.vercel.app/"
                target={`_blank`}
                className="sm:flex gap-5"
              >
                <div className="" style={{ flex: "1" }}>
                  <img
                    src={movieThumbnail}
                    alt=""
                    className="border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 object-contain w-full h-auto"
                  />
                </div>
                <div className="" style={{ flex: "3" }}>
                  <h3 className=" pt-3 sm:pt-0 font-medium text-slate-200 group-hover:text">
                    <p className="text-base inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link">
                      Movie List App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block self-center w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </h3>
                  <p className="text-sm mt-2">
                    A React-based movie listing web application designed for
                    seamless browsing, discovery, and organization of films.
                    This dynamic platform offers users an interactive interface
                    to explore an extensive collection of movies, enabling
                    search functionalities, genre categorization, and
                    personalized watchlists. With its user-friendly design and
                    responsive layout.
                  </p>
                  <div className="text-white pt-3">
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Git
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Javascript
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Tailwind
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        React Js
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Rest Api
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
            <li className="group/link group hover:bg-slate-800 rounded-md p-5  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <a
                href="https://lindorapel-unri.site/"
                target={`_blank`}
                className="sm:flex gap-5"
              >
                <div className="" style={{ flex: "1" }}>
                  <img
                    src={informatikaUnriThumbnail}
                    alt=""
                    className="border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 object-contain w-full h-auto"
                  />
                </div>
                <div className="" style={{ flex: "3" }}>
                  <h3 className=" pt-3 sm:pt-0 font-medium text-slate-200 group-hover:text">
                    <p className="text-base inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link">
                      Revamp of Riau University's Informatics Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block self-center w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </h3>
                  <p className="text-sm mt-2">
                    A comprehensive redesign of the Informatics Study Program
                    Riau University website aimed at enhancing user experience,
                    functionality, and visual appeal. The revamped site
                    incorporates a modern and intuitive interface, streamlining
                    navigation through course information, faculty details, and
                    academic resources. Employing responsive design principles,
                    the website ensures accessibility across various devices
                  </p>
                  <div className="text-white pt-3">
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        HTML
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        CSS
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Javascript
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Git
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Bootstrap
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        UI Design
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        UX
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Adobe Ilustrator
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
            <li className="group/link group hover:bg-slate-800 rounded-md p-5  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <a
                href="https://www.figma.com/proto/JwVYb1PTi2QhB0BjX7u3Qb/Untitled?node-id=11-12&starting-point-node-id=139%3A383"
                target={`_blank`}
                className="sm:flex gap-5"
              >
                <div className="" style={{ flex: "1" }}>
                  <img
                    src={androidUiThumbnail}
                    alt=""
                    className="border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 object-contain w-full h-auto"
                  />
                </div>
                <div className="" style={{ flex: "3" }}>
                  <h3 className=" pt-3 sm:pt-0 font-medium text-slate-200 group-hover:text">
                    <p className="text-base inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link">
                      Designing Prototype Website for Freelance Mobile App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block self-center w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </h3>
                  <p className="text-sm mt-2">
                    A university-based UI/UX design project that delves deep
                    into innovative and creative design concepts to enhance user
                    experience. This task emphasizes user research, functional
                    requirement analysis, and the development of responsive and
                    visually appealing prototypes. With a focus on aligning user
                    needs with design aesthetics, this project creates intuitive
                    solutions and provides a better understanding of interface
                    interactions for users.
                  </p>
                  <div className="text-white pt-3">
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        UI Design
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        UX
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Figma
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
            <li className="group/link group hover:bg-slate-800 rounded-md p-5  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <a
                href="https://todolist-app-react-seven.vercel.app/"
                target={`_blank`}
                className="sm:flex gap-5"
              >
                <div className="" style={{ flex: "1" }}>
                  <img
                    src={todoThumbnail}
                    alt=""
                    className="border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 object-contain w-full h-auto"
                  />
                </div>
                <div className="" style={{ flex: "3" }}>
                  <h3 className=" pt-3 sm:pt-0 font-medium text-slate-200 group-hover:text">
                    <p className="text-base inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link">
                      Todo List App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block self-center w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </h3>
                  <p className="text-sm mt-2">
                    Intuitive web platform to note, manage, and track tasks with
                    easy reminder, categorization, and search features.
                    Responsively designed for daily productivity with a simple
                    interface
                  </p>
                  <div className="text-white pt-3">
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        javascript
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Git
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Bootstrap
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        React Js
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
            <li className="group/link group hover:bg-slate-800 rounded-md p-5  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <a
                href="https://landing-page-car.vercel.app/"
                target={`_blank`}
                className="sm:flex gap-5"
              >
                <div className="" style={{ flex: "1" }}>
                  <img
                    src={carLandingPageThumbnail}
                    alt=""
                    className="border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 object-contain w-full h-auto"
                  />
                </div>
                <div className="" style={{ flex: "3" }}>
                  <h3 className=" pt-3 sm:pt-0 font-medium text-slate-200 group-hover:text">
                    <p className="text-base inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link">
                      Landing Page Assignment
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block self-center w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </h3>
                  <p className="text-sm mt-2">
                    A challenging assignment tasked by Binar Academy involving
                    the creation of a responsive landing page using the
                    Bootstrap framework. By implementing advanced responsive
                    techniques, this landing page provided an appealing and
                    well-accessible visual impression, ensuring a consistent
                    user experience for both desktop and mobile visitors.
                  </p>
                  <div className="text-white pt-3">
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        HTML
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        CSS
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        javascript
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Git
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Bootstrap
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
            <li className="group/link group hover:bg-slate-800 rounded-md p-5  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <a
                href="https://landing-page-car.vercel.app/"
                target={`_blank`}
                className="sm:flex gap-5"
              >
                <div className="" style={{ flex: "1" }}>
                  <img
                    src={NotesAppThumbnail}
                    alt=""
                    className="border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 object-contain w-full h-auto"
                  />
                </div>
                <div className="" style={{ flex: "3" }}>
                  <h3 className=" pt-3 sm:pt-0 font-medium text-slate-200 group-hover:text">
                    <p className="text-base inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link">
                      Notes App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block self-center w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </h3>
                  <p className="text-sm mt-2">
                    A project tasked by Dicoding online course focused on
                    creating a Notes App using React.js. This assignment
                    involved leveraging React.js to develop a dynamic and
                    intuitive application for note-taking purposes. The project
                    emphasized the implementation of React components and state
                    management, ensuring seamless user interactions and
                    efficient data handling.
                  </p>
                  <div className="text-white pt-3">
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        React js
                      </li>

                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        javascript
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Git
                      </li>
                      <li className="text-xs whitespace-nowrap font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 px-3 py-1 ">
                        Vanila CSS
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="cv"
        className="mb-16 scroll-mt-16 md:mb-24 lg:pt-20 lg:pb-56 lg:scroll-mt-24 lg:mx-5"
        aria-label="About me"
      >
        <a
          href="https://drive.google.com/file/d/1DvQwgOA4X42UFD13ek4OB28osYamIdIw/view?usp=sharing"
          target={"_blank"}
          rel="noreferrer"
          className=" justify-center font-medium text-teal-300 rounded-full bg-teal-400/10 hover:text-white hover:bg-teal-400/75 py-4 px-8"
        >
          See My Curriculum Vitae
        </a>
      </section>
    </div>
  );
};

export default Main;
