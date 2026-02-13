---
layout: default
title: Contact
permalink: /contact/
---
<section class="container contact-page">
  <h1>Neem contact op</h1>
  <p>Gebruik dit formulier voor bestellingen of om samen te werken met Eindeloos Licht.</p>

  <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <input type="hidden" name="product" id="product-field" />
    <label>
      Naam
      <input type="text" name="name" required />
    </label>

    <label>
      E-mail
      <input type="email" name="email" required />
    </label>

    <label>
      Onderwerp
      <select name="subject" required>
        <option value="Bestelling">Bestelling</option>
        <option value="Samenwerking">Samenwerking</option>
        <option value="Algemene vraag">Algemene vraag</option>
      </select>
    </label>

    <label>
      Bericht
      <textarea name="message" rows="6" required></textarea>
    </label>

    <button type="submit">Versturen</button>
  </form>
  <p class="small-note">Vervang in productie <code>your-form-id</code> door jullie echte Formspree formulier-id.</p>
</section>


<script>
  const params = new URLSearchParams(window.location.search);
  const selectedProduct = params.get('product');
  const productField = document.getElementById('product-field');

  if (selectedProduct && productField) {
    productField.value = selectedProduct;
  }
</script>
