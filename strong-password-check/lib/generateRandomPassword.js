function generateRandomPassword(config = {}) {
    const {
        lowercase = true,
        uppercase = true,
        digits = true,
        specialChars = true,
        minLength = 8,
    } = config;

    let charset = "";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (digits) charset += "0123456789";
    if (specialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") {
        throw new Error("Invalid configuration. At least one character set must be enabled.");
        
    }

    let password = "";
    for (let i = 0; i < minLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

module.exports = generateRandomPassword;
