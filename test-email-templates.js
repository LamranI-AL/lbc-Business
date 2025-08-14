/**
 * Script de test pour vérifier la configuration EmailJS avec vos vrais templates
 * Usage: node test-email-templates.js
 */

const fs = require('fs');
const path = require('path');

console.log('📧 Test de vérification des templates EmailJS...\n');

// Vérifier la présence du fichier .env.local
const envPath = path.join(__dirname, '.env.local');
const hasEnvFile = fs.existsSync(envPath);

console.log(`${hasEnvFile ? '✅' : '❌'} Fichier .env.local présent\n`);

if (hasEnvFile) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  // Tests de configuration
  const configTests = [
    {
      name: 'Service ID configuré',
      check: content => content.includes('NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_cqe64it'),
      description: 'Vérifie que le service EmailJS est correct'
    },
    {
      name: 'Template client configuré',
      check: content => content.includes('NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID=template_xltq8x8'),
      description: 'Vérifie le template de confirmation client'
    },
    {
      name: 'Template admin configuré',
      check: content => content.includes('NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID=template_ln85erd'),
      description: 'Vérifie le template de notification admin'
    },
    {
      name: 'Clé publique configurée',
      check: content => content.includes('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ulbiD1ZFPgCTfKbGW'),
      description: 'Vérifie la clé publique EmailJS'
    },
    {
      name: 'Email admin configuré',
      check: content => content.includes('NEXT_PUBLIC_ADMIN_EMAIL=contact.esthetiqueyannick@gmail.com'),
      description: 'Vérifie l\'email administrateur'
    }
  ];

  let passedTests = 0;
  configTests.forEach((test, index) => {
    const passed = test.check(envContent);
    console.log(`${passed ? '✅' : '❌'} ${test.name}`);
    console.log(`   ${test.description}`);
    if (passed) passedTests++;
    console.log('');
  });

  // Résumé
  console.log('📊 RÉSUMÉ DE CONFIGURATION');
  console.log('='.repeat(40));
  console.log(`Tests réussis: ${passedTests}/${configTests.length}`);
  console.log(`Pourcentage: ${Math.round((passedTests / configTests.length) * 100)}%`);
  
  if (passedTests === configTests.length) {
    console.log('\n🎉 CONFIGURATION EMAILJS PARFAITE !');
  } else {
    console.log('\n⚠️  CONFIGURATION INCOMPLÈTE');
  }
}

// Vérifier que BookingForm.tsx utilise les bons paramètres
const bookingFormPath = path.join(__dirname, 'src/components/Booking/BookingForm.tsx');
if (fs.existsSync(bookingFormPath)) {
  const formContent = fs.readFileSync(bookingFormPath, 'utf8');
  
  console.log('\n📝 VÉRIFICATION DU CODE');
  console.log('='.repeat(40));
  
  const codeTests = [
    {
      name: 'Template admin ID dans le code',
      check: content => content.includes('template_ln85erd'),
      description: 'Le template admin est référencé dans le code'
    },
    {
      name: 'Email admin dans le code',
      check: content => content.includes('contact.esthetiqueyannick@gmail.com'),
      description: 'L\'email admin est configuré dans le code'
    },
    {
      name: 'Paramètres simplifiés',
      check: content => content.includes('client_first_name: bookingData.clientFirstName') && 
                       content.includes('selected_date:') && 
                       content.includes('selected_time:'),
      description: 'Les paramètres correspondent aux templates'
    }
  ];
  
  let codePassedTests = 0;
  codeTests.forEach((test, index) => {
    const passed = test.check(formContent);
    console.log(`${passed ? '✅' : '❌'} ${test.name}`);
    console.log(`   ${test.description}`);
    if (passed) codePassedTests++;
    console.log('');
  });
  
  console.log(`Tests code: ${codePassedTests}/${codeTests.length}`);
}

console.log('\n🔍 TEMPLATES ATTENDUS');
console.log('='.repeat(40));
console.log('📧 Template CLIENT (template_xltq8x8):');
console.log('   Champs: {{client_first_name}}, {{selected_date}}, {{selected_time}}');
console.log('   Message: "Merci pour votre réservation chez laser body centre!"');
console.log('');
console.log('🔔 Template ADMIN (template_ln85erd):');
console.log('   Champs: {{client_first_name}}, {{selected_date}}, {{selected_time}}, {{client_email}}');
console.log('   Message: "LASER BODY CENTER 🔔 Nouvelle réservation"');
console.log('   Destinataire: contact.esthetiqueyannick@gmail.com');

console.log('\n🚀 PROCHAINES ÉTAPES');
console.log('='.repeat(40));
console.log('1. ✅ Configuration terminée');
console.log('2. 🧪 Tester avec: npm run dev');
console.log('3. 📧 Effectuer une réservation test');
console.log('4. ✔️  Vérifier la réception des emails');
console.log('5. 📱 Tester sur différents appareils');

console.log('\n💡 CONSEILS DE DÉPANNAGE');
console.log('='.repeat(40));
console.log('- Vérifiez la console navigateur pour les erreurs');
console.log('- Consultez les logs EmailJS sur emailjs.com');
console.log('- Testez d\'abord avec un email personnel');
console.log('- Vérifiez les spams dans les boîtes mail');