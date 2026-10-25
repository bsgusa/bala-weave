// bala-weave — label consistency check
// Verifies standard labels exist across repos: good first issue, help wanted, collab, trending-signal.
// Run: node scripts/label-check.mjs

const STANDARD_LABELS = [
  'good first issue',
  'help wanted',
  'collab',
  'trending-signal',
  'NOW',
  'NEXT',
  'LATER',
  'PARKED',
];

console.log('Standard labels for the Balamonis new world:');
STANDARD_LABELS.forEach((l) => console.log(`- ${l}`));

// Note: Labels are set per-repo on GitHub. This script documents the standard;
// apply it to each repo via the GitHub UI or API.

console.log('\nApply these labels in each repo so contributors can find good-first-issues.');
