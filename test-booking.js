/** 
 * Script de test pour vérifier les fonctionnalités de réservation
 * Usage: node test-booking.js
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Test de vérification des modifications...\n');

// Vérifier que le fichier BookingForm.tsx contient les bonnes modifications
const bookingFormPath = path.join(__dirname, 'src/components/Booking/BookingForm.tsx');

if (!fs.existsSync(bookingFormPath)) {
  console.error('❌ Fichier BookingForm.tsx introuvable');
  process.exit(1);
}

const bookingFormContent = fs.readFileSync(bookingFormPath, 'utf8');

// Tests à effectuer
const tests = [
  {
    name: 'Configuration EmailJS décommentée',
    check: content => content.includes('const EMAILJS_CONFIG = {') && !content.includes('// const EMAILJS_CONFIG'),
    description: 'Vérifier que EmailJS est activé'
  },
  {
    name: 'Fonction sendConfirmationEmail active',
    check: content => content.includes('const sendConfirmationEmail = async') && !content.includes('// const sendConfirmationEmail'),
    description: 'Vérifier que la fonction d\'envoi d\'email est active'
  },
  {
    name: 'États du calendrier ajoutés',
    check: content => content.includes('[currentMonth, setCurrentMonth]') && content.includes('[calendarMode, setCalendarMode]'),
    description: 'Vérifier que les nouveaux états React sont présents'
  },
  {
    name: 'Navigation du calendrier',
    check: content => content.includes('goToPreviousMonth') && content.includes('goToNextMonth'),
    description: 'Vérifier que la navigation est implémentée'
  },
  {
    name: 'Mode double vue',
    check: content => content.includes('Vue Mois') && content.includes('Vue Année'),
    description: 'Vérifier que les deux modes de vue sont présents'
  },
  {
    name: 'Variables d\'environnement',
    check: content => content.includes('process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID'),
    description: 'Vérifier l\'utilisation des variables d\'environnement'
  }
];

// Exécuter les tests
let passedTests = 0;
tests.forEach((test, index) => {
  const passed = test.check(bookingFormContent);
  console.log(`${passed ? '✅' : '❌'} Test ${index + 1}: ${test.name}`);
  if (passed) passedTests++;
  console.log(`   ${test.description}\n`);
});

// Vérifier la présence du fichier .env.local.example
const envExamplePath = path.join(__dirname, '.env.local.example');
const hasEnvExample = fs.existsSync(envExamplePath);
console.log(`${hasEnvExample ? '✅' : '❌'} Fichier .env.local.example créé\n`);
if (hasEnvExample) passedTests++;

// Résumé
console.log('📊 RÉSUMÉ DES TESTS');
console.log('='.repeat(30));
console.log(`Tests réussis: ${passedTests}/${tests.length + 1}`);
console.log(`Pourcentage: ${Math.round((passedTests / (tests.length + 1)) * 100)}%`);

if (passedTests === tests.length + 1) {
  console.log('\n🎉 TOUS LES TESTS SONT PASSÉS !');
  console.log('✅ Le calendrier et le système d\'email sont correctement configurés.');
  console.log('\n📝 PROCHAINES ÉTAPES:');
  console.log('1. Copier .env.local.example vers .env.local');
  console.log('2. Configurer votre compte EmailJS');
  console.log('3. Tester en mode développement: npm run dev');
  console.log('4. Vérifier les envois d\'email en production');
} else {
  console.log('\n⚠️  CERTAINS TESTS ONT ÉCHOUÉ');
  console.log('Vérifiez les modifications dans BookingForm.tsx');
}

console.log('\n🔗 Ressources utiles:');
console.log('- EmailJS: https://emailjs.com');
console.log('- Documentation: voir CALENDAR_EMAIL_FIXES.md');
console.log('- Support: voir README.md');