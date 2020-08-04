import Axios from "axios"

export default Axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
  // headers: {
  //   Authorization:
  //     "Bearer $2a$10$qBkub12FrD0Tln7RiT2aS.NQ.FUqMcoXqtjxw2YK51KhLRlFJKoEi"
  // }
})
