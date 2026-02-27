const mongoose = require("mongoose");       // mongoose 모듈을 불러온다.
const { Schema } = mongoose;        // mongoose 모듈에서 Schema라는 클래스(개체)를 얻어온다.

const ultrasonicSchema = new Schema({
    // Schema 클래스를 이용하여 데이터베이스 테이블 구조(Schema) 개체 생성
    tmp:{
        type: String,
        required: true      // 필수 입력 항목(Not NULL)
    },
    hum:{
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
        /*
            Node.js에서 MongoDB에 데이터를 삽입할 때 날짜/시간 값이 들어오지
            않으면 Default MongoDB에 있는 날짜/시간 정보가 삽입 되도록 설정
        */
    }
});

module.exports = mongoose.model('ultrasonic', ultrasonicSchema);
/*
    Schema 클래스로 만들어진 개체를 가지고 Collection 생성하며, 외부 파일이나 모듈에서
    Schema 설계파일을 가지고 Collection에 접근할 수 있도록 한다.
*/