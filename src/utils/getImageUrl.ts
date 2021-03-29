function getImageUrl(style: string): string {
  switch (style) {
    case 'Pale Lager and Pilsner': {
      return 'pilsner/pilsner_light.png';
      break;
    }

    case 'Belgian-Style Ale': {
      return 'snifter/snifter_light.png';
      break;
    }

    case 'India Pale Ale': {
      return 'pint/pint_deep_gold.png';
      break;
    }

    case 'American IPA': {
      return 'pint/pint_deep_gold.png';
      break;
    }

    case 'New England IPA': {
      return 'pint/pint_straw.png';
      break;
    }

    case 'Pale Ale': {
      return 'pint/pint_straw.png';
      break;
    }

    case 'Wheat Beer': {
      return 'pilsner/pilsner_gold.png';
      break;
    }

    case 'Wild & Sour Ale': {
      return 'snifter/snifter_light.png';
      break;
    }

    case 'Farmhouse Ale': {
      return 'tulip/tulip_pale_gold.png';
      break;
    }

    case 'Belgian Tripel': {
      return 'snifter/snifter_light_medium.png';
      break;
    }

    case 'Sour Ale': {
      return 'snifter/snifter_light_medium.png';
      break;
    }

    case 'Belgian Witbier': {
      return 'pilsner/pilsner_light.png';
      break;
    }

    case 'Brown Ale': {
      return 'pint/pint_amber_brown.png';
      break;
    }

    case 'German Bock': {
      return 'snifter/snifter_medium_dark.png';
      break;
    }

    case 'Dark Lager': {
      return 'pint/pint_deep_brown.png';
      break;
    }

    case 'Czech Pilsner': {
      return 'pilsner/pilsner_gold.png';
      break;
    }

    case 'Porter': {
      return 'snifter/snifter_dark.png';
      break;
    }

    case 'Stout': {
      return 'snifter/snifter_dark.png';
      break;
    }

    case 'Specialty': {
      return 'pint/pint_pale_gold.png';
      break;
    }
    default: {
      return 'pint/pint_pale_gold.png';
      break;
    }
  }
}

export default getImageUrl;