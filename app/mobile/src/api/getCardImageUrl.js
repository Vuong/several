export function getCardImageUrl(server, token, cardId, revision) {
  let insecure = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|:\d+$|$)){4}$/.test(server);
  let protocol = insecure ? 'http' : 'https';
  return `${protocol}://${server}/contact/cards/${cardId}/profile/image?agent=${token}&revision=${revision}`
}

