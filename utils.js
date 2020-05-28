
module.exports = {
    age: function(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();

        const month = today.getMonth() - birthDate.getMonth();
            if(month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
                age = age -1
            }

            return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date. getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    graduation: function degree (value) {
            switch(value) {
                case("medio"): return "Ensino Médio Completo";
                case("superior"): return "Ensino Supeior Completo";
                case("mestre"): return "Mestrado";
                case("doutor"): return "Doutorado";
        }
    },
    grade: function scholarity (value) {
        switch(value) {
            case("5º Ensino Fundamental"): return"5º Ensino Fundamental";
            case("6º Ensino Fundamental"): return"6º Ensino Fundamental";
            case("7º Ensino Fundamental"): return"7º Ensino Fundamental";
            case("8º Ensino Fundamental"): return"8º Ensino Fundamental";
            case("1º Ensino Médio"): return "1º Ensino Médio";
            case("2º Ensino Médio"): return "2º Ensino Médio";
            case("3º Ensino Médio"): return "3º Ensino Médio";
        }
    }
}

