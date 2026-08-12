document.addEventListener("DOMContentLoaded", () => {
    // Generate Random CAPTCHA
    function drawCaptcha() {
        const canvas = document.getElementById('captcha-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captchaStr = '';
        
        // Background
        ctx.fillStyle = '#f2f2f2';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add faint lines for noise
        for (let i = 0; i < 6; i++) {
            ctx.strokeStyle = '#cccccc';
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }
        
        // Draw characters
        for (let i = 0; i < 6; i++) {
            const char = chars.charAt(Math.floor(Math.random() * chars.length));
            captchaStr += char;
            
            ctx.font = 'bold 26px "Courier New", Courier, monospace';
            ctx.fillStyle = '#990000'; // Dark red
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            ctx.save();
            ctx.translate(25 + i * 32, 22);
            const angle = (Math.random() - 0.5) * 0.4;
            ctx.rotate(angle);
            ctx.fillText(char, 0, 0);
            ctx.restore();
        }
        
        window.currentCaptcha = captchaStr;
    }

    drawCaptcha();
    
    const refreshBtn = document.getElementById("refresh-captcha");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", drawCaptcha);
    }

    // Login form handling
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            const errorMsg = document.getElementById("error-msg");

            if (!login(user, pass)) {
                errorMsg.style.display = "block";
            }
        });

        // Toggle password visibility
        const togglePwd = document.getElementById("toggle-pwd");
        const passwordInput = document.getElementById("password");
        if (togglePwd && passwordInput) {
            togglePwd.addEventListener("click", () => {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                }
            });
        }
    }
});
