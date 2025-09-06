function detect() {
    const url = document.getElementById("urlInput").value.toLowerCase();
    let result = "Safe";

    // Simple rule-based detection for demo purposes
    const suspiciousKeywords = ["login", "verify", "bank", "secure", "update", "free", "account", "paypal"];
    const domain = new URL(url.startsWith('http') ? url : 'http://' + url).hostname;

    let suspicious = suspiciousKeywords.some(keyword => url.includes(keyword));
    if (domain.split('.').length > 3 || suspicious) {
        result = "Phishing Suspected!";
    }

    document.getElementById("result").textContent = "Result: " + result;
}
