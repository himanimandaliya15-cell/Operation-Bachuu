window.onload = function () {

    const missions = [
        { id: "mission1", page: "mission.html", key: "mission1" },
        { id: "mission2", page: "story.html", key: "mission2" },
        { id: "mission3", page: "vault.html", key: "mission3" },
        { id: "mission4", page: "tennis.html", key: "mission4" },
        { id: "mission5", page: "garage.html", key: "mission5" },
        { id: "mission6", page: "studio.html", key: "mission6" },
        { id: "mission7", page: "quiz.html", key: "mission7" },
        { id: "mission8", page: "mission8.html", key: "mission8" },
        { id: "mission9", page: "birthday.html", key: "mission9" }
    ];


    // ==========================================
    // REPAIR MISSION PROGRESS
    // ==========================================

    let highestCompleted = -1;

    missions.forEach((mission, index) => {

        if (localStorage.getItem(mission.key) === "completed") {
            highestCompleted = index;
        }

    });


    // If a later mission is completed,
    // automatically mark all previous missions completed.

    if (highestCompleted >= 0) {

        for (let i = 0; i <= highestCompleted; i++) {

            localStorage.setItem(
                missions[i].key,
                "completed"
            );

        }

    }


    // ==========================================
    // DISPLAY MISSIONS
    // ==========================================

    let completed = 0;

    missions.forEach((mission, index) => {

        const card = document.getElementById(mission.id);

        if (!card) return;


        const isCompleted =
            localStorage.getItem(mission.key) === "completed";


        const previousCompleted =
            index === 0 ||
            localStorage.getItem(
                missions[index - 1].key
            ) === "completed";


        // ======================================
        // COMPLETED
        // ======================================

        if (isCompleted) {

            completed++;

            card.classList.remove("locked");

            card.onclick = function () {

                window.location.href = mission.page;

            };

            card.querySelector(".right").innerHTML =
                '<span class="status">✔</span>';

        }


        // ======================================
        // UNLOCKED BUT NOT COMPLETED
        // ======================================

        else if (previousCompleted) {

            card.classList.remove("locked");

            card.onclick = function () {

                window.location.href = mission.page;

            };

            card.querySelector(".right").innerHTML =
                '<span class="status">NEW</span>';

        }


        // ======================================
        // LOCKED
        // ======================================

        else {

            card.classList.add("locked");

            card.onclick = null;

            card.querySelector(".right").innerHTML =
                "🔒";

        }

    });


    // ==========================================
    // PROGRESS BAR
    // ==========================================

    let percent = (completed / missions.length) * 100;

    document.getElementById("progressFill").style.width =
        percent + "%";

    document.getElementById("progressText").innerHTML =
        "Mission Progress : " +
        Math.round(percent) +
        "%";


    // ==========================================
    // UNLOCK POPUP
    // ==========================================

    const popup =
        document.getElementById("unlockPopup");

    const lastCompleted =
        localStorage.getItem("lastCompletedMission");


    if (
        lastCompleted !== String(completed) &&
        completed < missions.length
    ) {

        popup.classList.add("show");

        setTimeout(function () {

            popup.classList.remove("show"); 

        }, 2500);

        localStorage.setItem(
            "lastCompletedMission",
            String(completed)
        );

    }

};