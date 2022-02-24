//Add file CSS : 
//https://fonts.googleapis.com/icon?family=Material+Icons //For icons
//https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css //For CSS of toast
//And add file JS : 
//https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js //For js of toast
//
//https://github.com/caroso1222/notyf
//https://www.youtube.com/watch?v=2BKro5RPlzk

const toast = new Notyf({
    duration: 8000,
    position: {
        x: 'left',
        y: 'top',
    },
    types: [
        {
            type: 'info',
            background: '#0080FF',
            duration: 8000,
            dismissible: false,
            icon: {
                className: 'material-icons',
                tagName: 'i',
                color: 'white',
                text: 'info'
            }
        },
        {
            type: 'warning',
            duration: 10000,
            background: 'orange',
            dismissible: true,
            icon: {
                className: 'material-icons',
                tagName: 'i',
                color: 'white',
                text: 'warning'
            }
        },
        {
            type: 'link',
            duration: 10000,
            background: 'green',
            dismissible: true,
            icon: {
                className: 'material-icons',
                tagName: 'i',
                color: 'white',
                text: 'validate'
            }
        },
        {
            type: 'error',
            background: 'indianred',
            duration: 10000,
            dismissible: true
        }
    ]
});

const toastInfo = async (Message) => {
    toast.open({
        type: 'info',
        message: Message
    })
};
const toastValidate = async (Message) => {
    toast.success(Message);
};
const toastError = async (Message) => {
    toast.error(Message);
};
const toastWarning = async (Message) => {
    toast.open({
        type: 'warning',
        message: Message
    })
};
const toastLink = async (Message, Link) => {

    const toastWithLink = new Notyf({
        duration: 10000,
        dismissible: true,
        position: {
            x: 'left',
            y: 'top',
        },
        types: [
            {
                type: 'error',
                background: 'indianred',
                duration: 10000,
                dismissible: true
            }
        ]
    });

    const notification = toastWithLink.success(Message);
    notification.on('click', ({ target, event }) => {
        target: window.open(Link)
        //event: console.log("The mouse event")
        //window.location.href = '/'; //This line reload the page
    });
};
const toastLinkError = async (Message, Link) => {

    const toastWithLink = new Notyf({
        duration: 10000,
        dismissible: true,
        position: {
            x: 'left',
            y: 'top',
        },
        types: [
            {
                type: 'error',
                background: 'indianred',
                duration: 10000,
                dismissible: true
            }
        ]
    });

    const notification = toastWithLink.error(Message);
    notification.on('click', ({ target, event }) => {
        target: window.open(Link)
        //event: console.log("The mouse event")
        //window.location.href = '/'; //This line reload the page
    });
};