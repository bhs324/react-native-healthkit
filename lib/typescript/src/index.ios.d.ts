import useMostRecentCategorySample from './hooks/useMostRecentCategorySample';
import useMostRecentQuantitySample from './hooks/useMostRecentQuantitySample';
import useMostRecentWorkout from './hooks/useMostRecentWorkout';
import useSubscribeToChanges from './hooks/useSubscribeToChanges';
import getMostRecentCategorySample from './utils/getMostRecentCategorySample';
import getMostRecentQuantitySample from './utils/getMostRecentQuantitySample';
import queryStatisticsForQuantity from './utils/queryStatisticsForQuantity';
import queryWorkouts from './utils/queryWorkouts';
import saveCategorySample from './utils/saveCategorySample';
import saveCorrelationSample from './utils/saveCorrelationSample';
import saveQuantitySample from './utils/saveQuantitySample';
import saveWorkoutSample from './utils/saveWorkoutSample';
declare const Healthkit: {
    authorizationStatusFor: (type: import("./native-types").HealthkitReadAuthorization) => Promise<import("./native-types").HKAuthorizationStatus>;
    isHealthDataAvailable: () => Promise<boolean>;
    canAccessProtectedData: () => Promise<boolean>;
    disableAllBackgroundDelivery: () => Promise<boolean>;
    disableBackgroundDelivery: (typeIdentifier: import("./native-types").HKSampleTypeIdentifier) => Promise<boolean>;
    enableBackgroundDelivery: (typeIdentifier: import("./native-types").HKSampleTypeIdentifier, updateFrequency: import("./native-types").HKUpdateFrequency) => Promise<boolean>;
    getBiologicalSex: () => Promise<import("./native-types").HKBiologicalSex>;
    getFitzpatrickSkinType: () => Promise<import("./native-types").HKFitzpatrickSkinType>;
    getWheelchairUse: () => Promise<import("./native-types").HKWheelchairUse>;
    getBloodType: () => Promise<import("./native-types").HKBloodType>;
    getWorkoutRoutes: (workoutUUID: string) => Promise<readonly import("./native-types").WorkoutRoute[]>;
    getDateOfBirth: () => Promise<Date>;
    getMostRecentQuantitySample: typeof getMostRecentQuantitySample;
    getMostRecentCategorySample: typeof getMostRecentCategorySample;
    getMostRecentWorkout: import("./utils/getMostRecentWorkout").GetMostRecentWorkoutFn;
    getPreferredUnit: import("./utils/getPreferredUnit").GetPreferredUnitFn;
    getPreferredUnits: import("./utils/getPreferredUnits").GetPreferredUnitsFn;
    getRequestStatusForAuthorization: (read: readonly import("./native-types").HealthkitReadAuthorization[], write?: readonly import("./native-types").HKSampleTypeIdentifier[]) => Promise<import("./native-types").HKAuthorizationRequestStatus>;
    queryCategorySamples: import("./utils/queryCategorySamples").QueryCategorySamplesFn;
    queryCategorySamplesWithAnchor: import("./utils/queryCategorySamplesWithAnchor").QueryCategorySamplesWithAnchorFn;
    queryCorrelationSamples: import("./utils/queryCorrelationSamples").QueryCorrelationSamplesFn;
    queryHeartbeatSeriesSamples: import("./utils/queryHeartbeatSeriesSamples").QueryHeartbeatSeriesSamplesFn;
    queryHeartbeatSeriesSamplesWithAnchor: import("./utils/queryHeartbeatSeriesSamplesWithAnchor").QueryHeartbeatSeriesSamplesFn;
    queryQuantitySamples: import("./utils/queryQuantitySamples").QueryQuantitySamplesFn;
    queryQuantitySamplesWithAnchor: import("./utils/queryQuantitySamplesWithAnchor").QueryQuantitySamplesWithAnchorFn;
    queryStatisticsForQuantity: typeof queryStatisticsForQuantity;
    queryWorkouts: typeof queryWorkouts;
    querySources: import("./utils/querySources").QuerySourcesFn;
    requestAuthorization: (read: readonly import("./native-types").HealthkitReadAuthorization[], write?: readonly import("./native-types").HKSampleTypeIdentifier[]) => Promise<boolean>;
    deleteQuantitySample: import("./utils/deleteQuantitySample").DeleteQuantitySampleFn;
    deleteSamples: import("./utils/deleteSamples").DeleteSamplesFn;
    saveCategorySample: typeof saveCategorySample;
    saveCorrelationSample: typeof saveCorrelationSample;
    saveQuantitySample: typeof saveQuantitySample;
    saveWorkoutSample: typeof saveWorkoutSample;
    subscribeToChanges: (identifier: import("./native-types").HKSampleTypeIdentifier, callback: () => void) => Promise<() => Promise<boolean>>;
    useMostRecentCategorySample: typeof useMostRecentCategorySample;
    useMostRecentQuantitySample: typeof useMostRecentQuantitySample;
    useMostRecentWorkout: typeof useMostRecentWorkout;
    useSubscribeToChanges: typeof useSubscribeToChanges;
    useIsHealthDataAvailable: () => boolean | null;
    useHealthkitAuthorization: (read: readonly import("./native-types").HealthkitReadAuthorization[], write?: readonly import("./native-types").HKSampleTypeIdentifier[] | undefined) => readonly [import("./native-types").HKAuthorizationRequestStatus | null, () => Promise<import("./native-types").HKAuthorizationRequestStatus>];
};
export * from './types';
export default Healthkit;
