
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
    graduation: function degree (value) {
            switch(value) {
                case("medio"): return "Ensino Médio Completo";
                case("superior"): return "Ensino Supeior Completo";
                case("mestre"): return "Mestrado";
                case("doutor"): return "Doutorado";
        }
    }
}

