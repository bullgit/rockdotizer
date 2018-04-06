function rockdotizer(string, regexp) {
  return string.replace(regexp || /\w/ig, function(match) {
    return match + '\u{0308}';
  });
}
