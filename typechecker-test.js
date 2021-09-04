const typefaceTag = document.querySelector(`select[name="typeface"]`)

// const outputTag = document.querySelector('textarea.output')
const outputTag = document.querySelector('div.sample-text')
const originalText = outputTag.value

const editsampleTag = document.querySelector('span.edit-sample')

const topcolorTag = document.querySelector('.typechecker')
const textcolorTag = document.querySelector('section.options-top')
const slidercolorTag = document.querySelector(`input[type="range"]`)
const placeholdercolorTag = document.querySelector(`select`)
// const checkboxTag = document.querySelector(`input[type="checkbox"]`)
const svgTag = document.querySelector(`select`)

const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector('span.typesize-output')

// const lineheightTag = document.querySelector(`input[name="lineheight"]`)
// const lineheightOutput = document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
// const fontweightOutput = document.querySelector('span.fontweight-output')

const colorTags = document.querySelectorAll('div.colors div')

// const trackingTag = document.querySelector(`input[name="tracking"]`)
// const trackingOutput = document.querySelector("span.tracking-output")

// const italicTag = document.querySelector(`input[name="italic"]`)

// alignment of output tag
const alignmentTag = document.querySelectorAll('div.alignment div')

// when I type in my sentenceTag, update the outputTag accordingly
//  if there's no value, update the original text
// sentenceTag.addEventListener('keyup', function() {
//   if (this.value) {
//     outputTag.value = this.value
//   } else {
//     outputTag.value = originalText
//   }
// })

//  when i type in my output tag, update the sentence tag accordingly
// outputTag.addEventListener('keyup', function() {
//   sentenceTag.value = this.value
// })

// when I click on edit sample span it changes the span innerHTML to read stop editing
// and it makes the outputTag contenteditable = true
editsampleTag.addEventListener('click', function() {
  editsampleTag.innerHTML = 'Stop editing'
  outputTag.contentEditable = true;
})

// editsampleTag.addEventListener('click', function() {
//   editsampleTag.innerHTML.toggle("Stop editing")
//   outputTag.contentEditable.toggle("true;")
// })

// when i change my typesize slider, update the text next to it AND
//  change the outputTag's font size
typesizeTag.addEventListener('input', function() {
  outputTag.style.fontSize = this.value + 'px'
  typesizeOutput.innerHTML = this.value + 'px'
})

// lineheightTag.addEventListener("input", function () {
//   outputTag.style.lineHeight = this.value
//   lineheightOutput.innerHTML = this.value
// })

// fontweightTag.addEventListener('input', function() {
//   outputTag.style.fontWeight = this.value
//   fontweightOutput.innerHTML = this.value
// })

// trackingTag.addEventListener("input", function () {
//   outputTag.style.letterSpacing = this.value + "px"
//   trackingOutput.innerHTML = this.value + "px"
// })

//  when i change my select for typeface, update the font family
typefaceTag.addEventListener('input', function() {
  outputTag.style.fontFamily = this.value
})

// go through all of my colour tags
// then when i click one of them, change the bg colour of two areas
// the section.options-top and the output box
// and the text colour, and make this tag the selected
colorTags.forEach(tag => {
  tag.addEventListener('click', function() {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    topcolorTag.style.backgroundColor = this.style.backgroundColor
    textcolorTag.style.color = this.style.color
    slidercolorTag.style.color = this.style.color
    placeholdercolorTag.style.color = this.style.color
    //     checkboxTag.style.borderColor = this.style.color
    svgTag.style.backgroundImage.fill = this.style.color

    //     reset the classes
    colorTags.forEach(tag => {
      tag.classList.remove('selected')
    })

    //     only to the clicked one
    this.classList.add('selected')
  })
})

alignmentTag.forEach(tag => {
  tag.addEventListener('click', function() {
    outputTag.style.textAlign = this.style.textAlign
  })
})
