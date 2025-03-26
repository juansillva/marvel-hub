const loadingBar = {
  container: document.querySelector('.container-loading-bar'),
  logo: document.querySelector('.logo-loading-bar'),
  loading: document.querySelector('.loading-bar'),
};

loadingBar.loading.addEventListener("animationend", () => {
    loadingBar.container.classList.add('remove-loading-bar');
    loadingBar.logo.classList.add('remove-loading-bar');
    loadingBar.loading.classList.add('remove-loading-bar');

    document.body.classList.add("page-exit");
    
    setTimeout(()=>{
      window.location.href = '/pages/home.html';
    },500)
    
});