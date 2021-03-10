// const getters = {
//     token: state => state.token,
//     counts: state => state.counts,
//     count: state => state.count,
// }
const getters = {
    token: state => state.auth.token,
    counts: state => state.auth.counts,
    count: state => state.auth.count,
}

export default getters;