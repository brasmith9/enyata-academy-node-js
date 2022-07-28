// getUser(1, (user) => {
//   getGithubInfo(user, (githubInfo) => {
//     getRepos(user, (repos) => {
//       console.log(repos);
//     });
//   });
// });

getUser(1).then((value) => {
  console.log(value);
})
//Callback Hell

function getUser(id) {
  return new Promise((resolve, reject)=> {
    resolve({
      id: 1,
      name: "Isaac",
    });
  });
}
function getGithubInfo(user, callback) {
  setTimeout(() => {
    console.log("Fetching user from Github API...");
    callback({
      name: "Isaac",
    });
  }, 2000);
}
function getRepos(user, callback) {
  setTimeout(() => {
    console.log("Fetching user Repos...");
    callback(["repo 1", "repo 2", "repo 3"]);
  }, 2000);
}

//Find the user's github details

//Callback approach

//Promise approach
// const iPromiseToGiveYouOneCedi = new Promise((resolve, reject) => {
//   resolve(1);
//   //reject(new Error("the money got lost"));
// });

// iPromiseToGiveYouOneCedi.then((value)=>{
//   console.log(value);
// }).catch((error)=> {
//   console.log(error);
// });

//Async Await Approach
