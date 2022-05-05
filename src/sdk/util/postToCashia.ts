declare global {
    interface Window {
        ReactNativeWebView: any;
    }
}

let RNWebView = window.ReactNativeWebView;

if(!RNWebView){
    console.error("You must load the site as Cashia Mini Program to access Cashia SDK features!")
}

const postToCashia = (message: string) => {
    RNWebView?.postMessage(message)
}

export default postToCashia
