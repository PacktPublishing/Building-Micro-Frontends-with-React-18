import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { usePersistedState } from '@ebuy/custom-hooks';

export function Preferences() {
  const [preferences, setPreferences] = usePersistedState('preferences', {
    out-of-stock : 'true',
    
  });
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts">Include Out of Stock</FormLabel>
      <Switch size="lg" id="email-alerts" />
    </FormControl>
  );
}
export default Preferences;
