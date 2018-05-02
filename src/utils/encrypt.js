import CryptoJS from 'crypto-js';
class encrypt {
    encrypt(data, key) {
        const ciphertext = CryptoJS.AES.encrypt(data, key);
        return ciphertext.toString();
    }
    decrypt(data, key) {
        const bytes = CryptoJS.AES.decrypt(data.toString(), key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    aesEncrypt(data, keyStr, ivStr) {
        const sendData = CryptoJS.enc.Utf8.parse(data);
        const key = CryptoJS.enc.Utf8.parse(keyStr);
        const iv = CryptoJS.enc.Utf8.parse(ivStr);
        const encrypted = CryptoJS.AES.encrypt(sendData, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Iso10126,
        });
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    }
    aesDecrypt(data, keyStr, ivStr) {
        const key = CryptoJS.enc.Utf8.parse(keyStr);
        const iv = CryptoJS.enc.Utf8.parse(ivStr);
        const decrypted = CryptoJS.AES.decrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Iso10126,
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
const instance = new encrypt();
export default instance;
