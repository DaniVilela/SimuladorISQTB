document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const questionText = document.getElementById("question-text");
  const form = document.getElementById("quiz-form");
  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");
  const correctCountEl = document.getElementById("correct-count");
  const incorrectCountEl = document.getElementById("incorrect-count");
  const timerElement = document.getElementById("timer");

  let currentQuestionIndex = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let timer;

  function loadQuestion(index) {
    form.innerHTML = ""; // Limpiar las opciones anteriores
    nextBtn.style.display = "none"; // Asegurar que el botón siguiente está oculto al inicio
    submitBtn.disabled = false;

    const question = quizData[index];
    // Usar innerHTML para permitir saltos de línea
    questionText.innerHTML = question.question;

    // Generar las opciones de respuesta
    question.options.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="checkbox" name="answer" value="${option.value}" />
        ${option.text}
      `;
      form.appendChild(label);
      form.appendChild(document.createElement("br")); // Para un salto de línea entre las opciones
    });
  }

  function validateAnswer() {
    const selectedOptions = Array.from(
      form.querySelectorAll("input[name='answer']:checked")
    ).map((input) => input.value);

    // Bloquear todas las opciones
    const options = document.querySelectorAll("input[name='answer']");
    options.forEach((option) => {
      option.disabled = true; // Deshabilitar siempre las opciones después de presionar "Contestar"
    });

    const question = quizData[currentQuestionIndex];

    if (selectedOptions.length > 0) {
      // Comparar las respuestas seleccionadas con las correctas
      selectedOptions.forEach((selectedOption) => {
        const selectedLabel = document.querySelector(
          `input[value="${selectedOption}"]`
        ).parentElement;

        if (question.correct.includes(selectedOption)) {
          selectedLabel.classList.add("correct");
        } else {
          selectedLabel.classList.add("incorrect");
        }
      });

      // Verificar si todas las respuestas correctas fueron seleccionadas
      const allCorrect = question.correct.every((correctOption) =>
        selectedOptions.includes(correctOption)
      );

      // Si todas las respuestas correctas fueron seleccionadas, sumar como correcto
      if (allCorrect && selectedOptions.length === question.correct.length) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    } else {
      // Si no seleccionó ninguna opción, sumar como incorrecto
      incorrectCount++;
    }

    // Marcar la respuesta correcta
    question.correct.forEach((correctOption) => {
      const correctLabel = document.querySelector(
        `input[value="${correctOption}"]`
      ).parentElement;
      correctLabel.classList.add("correct");
    });

    // Actualizar el contador de respuestas
    correctCountEl.textContent = correctCount;
    incorrectCountEl.textContent = incorrectCount;

    // Mostrar el botón "Siguiente"
    nextBtn.style.display = "inline-block";
    submitBtn.disabled = true;
  }

  function markCorrectAnswers() {
    const question = quizData[currentQuestionIndex];
    question.correct.forEach((correctOption) => {
      const correctInput = form.querySelector(
        `input[value="${correctOption}"]`
      );
      if (correctInput) {
        correctInput.parentElement.classList.add("correct");
      }
    });
  }

  function updateScores() {
    correctCountEl.textContent = correctCount;
    incorrectCountEl.textContent = incorrectCount;
  }

  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      clearInterval(timer);
      alert("¡Has completado el simulador!");
    }
  }

  // Función para el timer
  function startTimer(duration) {
    let timeRemaining = duration; // Tiempo en segundos
    updateTimerDisplay(timeRemaining);

    timer = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(timer);
        alert("¡Se acabó el tiempo!");
        submitBtn.disabled = true;
        nextBtn.disabled = true;
        // Bloquea las opciones restantes
        const options = document.querySelectorAll("input[name='answer']");
        options.forEach((option) => (option.disabled = true));
      }
    }, 1000);
  }

  function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    timerElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  // Inicializar la primera pregunta
  loadQuestion(currentQuestionIndex);
  startTimer(3600);

  // Eventos
  submitBtn.addEventListener("click", validateAnswer);
  nextBtn.addEventListener("click", loadNextQuestion);
});
