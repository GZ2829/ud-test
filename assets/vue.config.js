const { createApp } = Vue

createApp({

    setup() {
        const title = 'Explore';
        const subtitle = 'More Details';
        const modalIpsum = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? `
        const buttonTitle = "READ MORE";
        const appear = false

        function initModalPopup() {
            let modal = document.getElementsByName("atf_hero_popup")[0];
            let modalTitle = document.getElementsByName('atf_hero_title')[0];

            modal.classList.remove("hidden");

            modal.classList.remove("animate-md-disappear");
            modal.classList.remove("animate-mm-disappear");
            modalTitle.classList.remove("animate-title-return");

            modal.classList.remove("h-0");
            modal.classList.remove("w-0");

            if(window.innerWidth > 639){
                modal.classList.add("animate-md-appear");
            }else{
                modal.classList.add("animate-mm-appear");
            }

            modalTitle.classList.add("animate-title-vanish");

            setTimeout(() => {
                modalTitle.classList.add("opacity-0")
            }, 350)
            setTimeout(() => {

                if(window.innerWidth > 639){
                    modal.classList.add("h-[690px]");
                    modal.classList.add("w-[580px]");
                }else{
                    modal.classList.add("h-[100%]");
                    modal.classList.add("w-[100%]");
                }


                toggleModalText(true);
            }, 500)
        }

        function closeModalPopup() {
            let modal = document.getElementsByName("atf_hero_popup")[0];
            let modalTitle = document.getElementsByName('atf_hero_title')[0];

            modal.classList.remove("animate-m-appear");
            modal.classList.remove("animate-mm-appear");
            modalTitle.classList.remove("animate-title-vanish")

            if(window.innerWidth > 639){
                modal.classList.add("animate-md-disappear");
            }else{
                modal.classList.add("animate-mm-disappear");
            }
            modalTitle.classList.add("animate-title-return");

            setTimeout(() => {
                modalTitle.classList.remove("opacity-0")
            }, 350)
            setTimeout(() => {
                modal.classList.remove("h-[690px]");
                modal.classList.remove("w-[580px]");
                modal.classList.remove("h-[100%]");
                modal.classList.remove("w-[100%]");

                modal.classList.add("h-0");
                modal.classList.add("w-0");

                modal.classList.add("hidden");
                toggleModalText(false);
            }, 500)
        }


        function toggleModalText(open) {
            let close = document.getElementsByName("modal_close")[0];
            let title = document.getElementsByName("modal_title")[0];
            let blurb = document.getElementsByName("modal_blurb")[0];
            let button = document.getElementsByName("modal_button")[0];


            if (open === true) {
                close.classList.remove("opacity-0");
                title.classList.remove("opacity-0");
                blurb.classList.remove("opacity-0");
                button.classList.remove("opacity-0");

                close.classList.add("animate-t-return");
                title.classList.add("animate-t-return");
                blurb.classList.add("animate-t-return");
                button.classList.add("animate-t-return");



            } else {
                close.classList.add("opacity-0");
                title.classList.add("opacity-0");
                blurb.classList.add("opacity-0");
                button.classList.add("opacity-0");

                close.classList.add("animate-t-vanish");
                title.classList.add("animate-t-vanish");
                blurb.classList.add("animate-t-vanish");
                button.classList.add("animate-t-vanish");
            }
        }

        function isSmallScreen(){

            if(window.innerWidth < 640 || window.innerWidth > 640 && window.innerHeight < 1024){
                return true
            }else{
                return false
            }
        }

        return {
            title,
            subtitle,
            modalIpsum,
            buttonTitle,
            appear,
            initModalPopup,
            closeModalPopup,
            toggleModalText,
            isSmallScreen
        }
    },

    mounted() {
        this.initModalPopup();
    },

    template:
        `<section name="atf_hero" 
                  class="
                    w-screen 
                    flex 
                    bg-hero-woods 
                    bg-cover 
                    min-[1150px]:pl-[140px]
                    sm:pl-[20px]
                    sm:pr-[20px]
                    pl-[10px]
                    pr-0
                    sm:pb-[175px]
                    pb-[25px]
                    items-end
                    relative
                    "
                    :class="[isSmallScreen ? 'min-h-[100vh]' : 'min-h-[1024px]']"
                    >
            <div name="atf_hero_textbox" class="sm:pl-[40px] pl-0 sm:mb-[46px] mb-[110px]">
                <h1 name="atf_hero_title" class="min-[1150px]:text-title-d sm:text-title-t text-title-m font-didot text-white">{{ title }}</h1>
                <div class="flex items-center max-[1150px]:mt-[20px]">
                    <img @click="initModalPopup"  class="ml-[7px] cursor-pointer"  src="./assets/Plus.svg" />
                    <p class="text-white text-subtitle font-lato ml-[21px]">{{ subtitle }}</p>
                </div>
            </div>
            
            <div name="atf_hero_popup" class="bg-white absolute max-[640px]:p-modal-mobile p-modal hidden max-[640px]:h-[750px] max-[640px]:w-[355px] z-10">
                    <img @click="closeModalPopup" name="modal_close" class="cursor-pointer float-right opacity-0" src="./assets/Close.svg"/>
                    <h2 name="modal_title" class="text-modal-title font-didot text-primary sm:mt-[42px] mt-[20px] opacity-0">{{ title }}</h2>
                    <p name="modal_blurb" class="text-modal-blurb text-tcolor max-w-[432px] mt-[19px] font-lato opacity-0">{{ modalIpsum }}</p>
                    <button name="modal_button" class="bg-button w-[235px] h-[55px] sm:mt-[44px] mt-[22px] text-white text-button-title opacity-0"><p class="font-lato">{{ buttonTitle }}</p></button>
            </div>

            <div name="atf_hero_social" class="absolute md:right-[25px] md:bottom-[33px] right-0 bottom-[20px] max-[768px]:flex z-0">
                <a href="https://facebook.com" target="_blank">
                    <img class="hover:animate-c-bounce ease-in cursor-pointer min-[769px]:mr-0 mr-[15px]" src="./assets/Facebook.svg"/>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img class="hover:animate-c-bounce ease-in min-[769px]:mt-[18px] mt-0 cursor-pointer" src="./assets/Instagram.svg"/>
                </a>
            </div>

        </section>`,
}).mount('#app')