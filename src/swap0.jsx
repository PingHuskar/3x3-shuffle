function swap0(strig,w) {
    return strig.replace(w,`x`)
                .replace(0,w)
                .replace(`x`,0)
  }

export default swap0
