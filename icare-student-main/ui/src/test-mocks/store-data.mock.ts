export const storeDataMock = {
  initialState: {
    form: { ids: [], entities: {}, loading: false },
    observation: { ids: [], entities: {}, loading: false },
    diagnosis: { ids: [], entities: {}, loading: false },
    visit: { ids: [], entities: {}, loading: false },
    locations: { ids: [], entities: {}, loading: false },
    consultation: {
      encounterUuid: null,
    },
    bill: { ids: [], entities: {}, loading: false },
    pendingBill: { ids: [], entities: {}, loading: false },
    billItem: { ids: [], entities: {}, loading: false },
    payment: { ids: [], entities: {}, loading: false },
    pricingItem: { ids: [], entities: {}, loading: false },
    itemPrice: { ids: [], entities: {}, loading: false },
    paymentType: { ids: [], entities: {}, loading: false },
    currentUser: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
    },
    labOrders: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
    },
    labSamples: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
      sampleIdentifiers: [],
    },
    concept: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
    },
    orderTypes: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
    },
    specimenSourcesAndLabTests: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
    },
    users: {
      ids: [],
      entities: {},
      loaded: false,
      loading: false,
      hasError: false,
      error: null,
    },
    currentPatient: {
      loading: false,
      admitted: false,
      transfered: false,
    },
  },
};
