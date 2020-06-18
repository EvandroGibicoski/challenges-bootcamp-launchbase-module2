const db = require('../../config/db');
const { date } = require('../../lib/utils');

module.exports = {
    all(callback) {
        db.query(
            `
                SELECT * 
                FROM  students
                ORDER BY name ASC
            `, function(err, results) {
                if(err) 
                throw `Database Error! ${err}`;

                callback(results.rows);
        }
    );
    },
    create(data, callback) {
        const query = `
                INSERT INTO students (
                    avatar_url,
                    name,
                    birth,
                    email,
                    scholarity,
                    duration_class,
                ) VALUES ($1, $2, $3, $4, $5, $6 )
                RETURNING id
        `

        const value = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.email,
            data.scholarity,
            data.duration_class,
        ]

        db.query(query, values, function(err, results) {
            if(err) 
            throw `Database Error! ${err}`;

            callback (results.rows[0]);   
        }
    ); 
            
    },
    find(id, callback) {
        db.query (
            `
            SELECT *
            FROM students
            WHERE id = ${id}
            `, function(err, results) {
                if(err) 
                throw `Database Error! ${err}`;

                callback(results.rows[0]);
            }
        );
    },
    update(data, callback) {
        const query = 
        `
        UPDATE students
        SET
        avatar_url=($1),
        name=($2),
        birth=($3),
        email=($4),
        scholarity=($5),
        duratio_class=($6),
        WHERE id = $8

        `
        const value = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.email,
            data.scholarity,
            data.duration_class,
            data.id
        ]

        db.query(query, value, 
            function(err, results) {
                if(err)
                throw `Database Error! ${err}`;

                callback();
            }
        );
    },
    delete(id, callback) {
        db.query (
            `
                DELETE FROM students 
                WHERE id = $1
            `, [id], function(err, results) {
                if(err)
                throw `Database Error! ${err}`;
                }
        );

        callback();
    },
    teachersSelectOptions(callback){
        db.query(`SELECT name, id FROM teachers`, function(err, results) {
            if(err) throw `Database Error! ${err}`;

        callback(results.rows);

        });
    },
}; 
