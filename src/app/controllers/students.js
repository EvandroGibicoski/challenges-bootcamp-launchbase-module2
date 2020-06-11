const { age, date, grade } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render("students/index");
    },
    create(req, res) {
        return res.render("students/create");
    },
    show(req, res) {
        const { id } = req.params;

        const foundStudent = data.students.find(function (student) {
            return student.id == id;
        })
        if (!foundStudent)
            return res.send("Student not found");

        const student = {
            ...foundStudent,
            birth: date(foundStudent.birth).birthDay,
            scholarity: grade(foundStudent.scholarity)
        }

        return res.render("students/show", { student });
    },
    post(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!");
            };
        };

        birth = Date.parse(req.body.birth)
        let id = 1;
        const lastStudent = data.students[data.students.length - 1];
        if (lastStudent) {
            id = lastStudent.id + 1;
        };

        data.students.push({
            id,
            ...req.body,
            birth,
        });

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
            if (err) return res.send("Write file error");
            return res.redirect("/students");
        });
    },
    edit(req, res) {
        const { id } = req.params;

        const foundStudent = data.students.find(function (student) {
            return student.id == id;
        });
        if (!foundStudent)
            return res.send("Student not found");

        const student = {
            ...foundStudent,
            birth: date(foundStudent.birth).br,

        };
        return res.render("students/edit", { student });
    },
    put(req, res) {
        const { id } = req.body;
        let index = 0;

        const foundStudent = data.students.find(function (student, foundIndex) {
            if (id == student.id) {
                index = foundIndex;
                return true
            };

        });

        if (!foundStudent)
            return res.send("Student not found!");

        const student = {
            ...foundStudent,
            ...req.body,
            birth: Date.parse(req.body.birth),
            id: Number(req.body.id),
        };

        data.students[index] = student;

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
            if (err) return res.send("Write file error!");

            return res.redirect(`/students/${id}`);
        });
    },
    delete(req, res) {
        const { id } = req.body;

        const filteredstudents = data.students.filter(function (teacher) {
            return teacher.id != id
        });

        data.students = filteredstudents

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
            if (err)
                return res.send("Write file error!");
            return res.redirect("/students");
        });
    }

};
