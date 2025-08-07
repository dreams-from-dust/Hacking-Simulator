const simulatorContainer = document.getElementById("simulator-container");
        const heading = document.getElementById("heading");

        const randomDelay = () => {
            return new Promise(resolve => {
                const timeout = 1 + 6 * Math.random();
                setTimeout(resolve, timeout * 1000);
            });
        };

        const displayMessage = async (message) => {
            let div = document.createElement("div");
            div.className = "message-box";
            div.innerHTML = message;
            simulatorContainer.appendChild(div);

            const t = setInterval(() => {
                if (div.innerHTML.endsWith("...")) {
                    div.innerHTML = div.innerHTML.slice(0, -3);
                } else {
                    div.innerHTML = div.innerHTML + ".";
                }
            }, 300);

            await randomDelay();
            clearInterval(t);
            div.remove();
        };

        async function main() {
            const messages = [
                "Initializing System Bypass",
                "Decrypting Root-Level Security",
                "Accessing Encrypted Data Streams",
                "Scanning for Vulnerabilities",
                "Establishing Connection to Mainframe",
                "Analyzing User Permissions"
            ];

            for (const message of messages) {
                await displayMessage(message);
            }

            heading.remove();
            
            let finalDiv = document.createElement("div");
            finalDiv.className = "final-message";
            finalDiv.innerHTML = "SYSTEM HACKED";
            simulatorContainer.appendChild(finalDiv);

            // Add a red flash effect to the body
            document.body.style.animation = "flash 0.5s";
        }
        main();