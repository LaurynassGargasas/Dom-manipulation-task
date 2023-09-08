let container = document.querySelector('div')

let container1 = document.createElement('div')
container1.className = `container1`

container.append(container1)


let findUs = document.createElement('h1')
findUs.textContent = 'Find Us'

container1.append(findUs)


let boxContainer = document.createElement('div')
boxContainer.classList = 'boxContainer'

container1.append(boxContainer)


let box = document.createElement('div')
box.classList = 'box'

boxContainer.append(box)


let boxTitle = document.createElement('h2')
boxTitle.textContent = 'Parduotuve 1'

box.append(boxTitle)


let paragraph = document.createElement('p')

box.append(paragraph)


let phoneTxt = document.createElement('span')
phoneTxt.textContent = 'Phone :'

paragraph.append(phoneTxt)


let linkPhone = document.createElement('a')
linkPhone.setAttribute('href', 'tel: +37061550667')
linkPhone.textContent = '+37061550667'

phoneTxt.after(linkPhone)


let paragraph1 = document.createElement('p')

box.append(paragraph1)


let emailTxt = document.createElement('span')
emailTxt.textContent = 'Email :'

paragraph1.append(emailTxt)


let linkEmail = document.createElement('a')
linkEmail.setAttribute('href', '#')
linkEmail.textContent = 'shop1@parduotuve.lt'

emailTxt.after(linkEmail)


let paragraph2 = document.createElement('p')

box.append(paragraph2)


let addressTxt = document.createElement('span')
addressTxt.textContent = 'Address :'

paragraph2.append(addressTxt)


let linkAddress = document.createElement('a')
linkAddress.setAttribute('href', '#')
linkAddress.textContent = 'shop1@parduotuve.lt'

addressTxt.after(linkAddress)








let box2 = document.createElement('div')
box2.classList = 'box'

boxContainer.append(box2)


let boxTitle2 = document.createElement('h2')
boxTitle2.textContent = 'Parduotuve 2'

box2.append(boxTitle2)


let paragraph31 = document.createElement('p')

box2.append(paragraph31)


let phoneTxt2 = document.createElement('span')
phoneTxt2.textContent = 'Phone :'

paragraph31.append(phoneTxt2)


let linkPhone2 = document.createElement('a')
linkPhone2.setAttribute('href', 'tel: +37061550667')
linkPhone2.textContent = '+37061550667'

phoneTxt2.after(linkPhone2)


let paragraph22 = document.createElement('p')

box2.append(paragraph22)


let emailTxt2 = document.createElement('span')
emailTxt2.textContent = 'Email :'

paragraph22.append(emailTxt2)


let linkEmail2 = document.createElement('a')
linkEmail2.setAttribute('href', '#')
linkEmail2.textContent = 'shop1@parduotuve.lt'

emailTxt2.after(linkEmail2)


let paragraph23 = document.createElement('p')

box2.append(paragraph23)


let addressTxt2 = document.createElement('span')
addressTxt2.textContent = 'Address :'

paragraph23.append(addressTxt2)


let linkAddress2 = document.createElement('a')
linkAddress2.setAttribute('href', '#')
linkAddress2.textContent = 'shop1@parduotuve.lt'

addressTxt2.after(linkAddress2)






let box3 = document.createElement('div')
box3.classList = 'box'

boxContainer.append(box3)


let boxTitle3 = document.createElement('h2')
boxTitle3.textContent = 'Parduotuve 3'

box3.append(boxTitle3)


let paragraph41 = document.createElement('p')

box3.append(paragraph41)


let phoneTxt3 = document.createElement('span')
phoneTxt3.textContent = 'Phone :'

paragraph41.append(phoneTxt3)


let linkPhone3 = document.createElement('a')
linkPhone3.setAttribute('href', 'tel: +37061550667')
linkPhone3.textContent = '+37061550667'

phoneTxt3.after(linkPhone3)


let paragraph32 = document.createElement('p')

box3.append(paragraph32)


let emailTxt3 = document.createElement('span')
emailTxt3.textContent = 'Email :'

paragraph32.append(emailTxt3)


let linkEmail3 = document.createElement('a')
linkEmail3.setAttribute('href', '#')
linkEmail3.textContent = 'shop1@parduotuve.lt'

emailTxt3.after(linkEmail3)


let paragraph33 = document.createElement('p')

box3.append(paragraph33)


let addressTxt3 = document.createElement('span')
addressTxt3.textContent = 'Address :'

paragraph33.append(addressTxt3)


let linkAddress3 = document.createElement('a')
linkAddress3.setAttribute('href', '#')
linkAddress3.textContent = 'shop1@parduotuve.lt'

addressTxt3.after(linkAddress3)






let box4 = document.createElement('div')
box4.classList = 'box'

boxContainer.append(box4)


let boxTitle4 = document.createElement('h2')
boxTitle4.textContent = 'Parduotuve 4'

box4.append(boxTitle4)


let paragraph51 = document.createElement('p')

box4.append(paragraph51)


let phoneTxt4 = document.createElement('span')
phoneTxt4.textContent = 'Phone :'

paragraph51.append(phoneTxt4)


let linkPhone4 = document.createElement('a')
linkPhone4.setAttribute('href', 'tel: +37061550667')
linkPhone4.textContent = '+37061550667'

phoneTxt4.after(linkPhone4)


let paragraph42 = document.createElement('p')

box4.append(paragraph42)


let emailTxt4 = document.createElement('span')
emailTxt4.textContent = 'Email :'

paragraph42.append(emailTxt4)


let linkEmail4 = document.createElement('a')
linkEmail4.setAttribute('href', '#')
linkEmail4.textContent = 'shop1@parduotuve.lt'

emailTxt4.after(linkEmail4)


let paragraph43 = document.createElement('p')

box4.append(paragraph43)


let addressTxt4 = document.createElement('span')
addressTxt4.textContent = 'Address :'

paragraph43.append(addressTxt4)


let linkAddress4 = document.createElement('a')
linkAddress4.setAttribute('href', '#')
linkAddress4.textContent = 'shop1@parduotuve.lt'

addressTxt4.after(linkAddress4)






let container2 = document.createElement('div')
container2.classList = 'container2'

container.append(container2)


let map = document.createElement('iframe')
map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.7068983843865!2d25.287813900000003!3d54.67958709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9415960e17c1%3A0xf6eef52abb8289a6!2sRotu%C5%A1%C4%97s%20a.%201%2C%2001128%20Vilnius!5e0!3m2!1slt!2slt!4v1692875749557!5m2!1slt!2slt")
map.setAttribute('width', '100%')
map.setAttribute('height', '100%')
map.setAttribute('style', 'border: 0;')
map.setAttribute('allowfullscreen', '')
map.setAttribute('loading', 'lazy')
map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')


container2.append(map)