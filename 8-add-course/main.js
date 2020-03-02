class Course {
    constructor(title, instructor, image) {
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI {
    addCourseToList(course) {
        const list = document.getElementById('course-list');

        let html = `
            <tr>
                <td><img src="${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" class="uk-button uk-button-small uk-button-danger delete">Delete</a></td>
            </tr>
        `;

        list.innerHTML += html;
    }

    clearControls() {
        const title = document.getElementById('title').value="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
    }

    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className) {
        let alert = `
            <div class="uk-alert uk-alert-${className}" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>${message}</p>
            </div>
        `;

        const grid = document.querySelector('.uk-grid');

        grid.insertAdjacentHTML('beforebegin', alert);

        setTimeout(() => {
            document.querySelector('.uk-alert').remove();
        }, 3000);
    }
}

document.getElementById('new-course').addEventListener('submit', (e) => {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // create course object
    const course = new Course(title, instructor, image);

    // create  UI
    const ui = new UI();

    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please complete the form', 'warning');
    } else {
        // add course to list
        ui.addCourseToList(course);

        // clear controls
        ui.clearControls();

        ui.showAlert('The course has been added', 'success');
    }

    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click', (e) => {
    console.log(e);
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The course has ben deleted', 'danger');
});