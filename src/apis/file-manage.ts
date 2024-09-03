import type { AxiosRequestConfig } from "axios";

import fileManageService from "../services/file-manage";
/**
 * links
 */
export function getActuator(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator",
    method: "get",
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorArchaius(
  bodyParameters: FileManage.HandleUsingGET.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/archaius",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorBeans(
  bodyParameters: FileManage.HandleUsingGET1.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/beans",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorCaches(
  bodyParameters: FileManage.HandleUsingGET3.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/caches",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function deleteActuatorCaches(
  bodyParameters: FileManage.HandleUsingDELETE1.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/caches",
    method: "delete",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorCachesCache(
  bodyParameters: FileManage.HandleUsingGET2.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/caches/{cache}",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function deleteActuatorCachesCache(
  bodyParameters: FileManage.HandleUsingDELETE.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/caches/{cache}",
    method: "delete",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorConditions(
  bodyParameters: FileManage.HandleUsingGET4.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/conditions",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorConfigprops(
  bodyParameters: FileManage.HandleUsingGET5.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/configprops",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorEnv(
  bodyParameters: FileManage.HandleUsingGET7.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/env",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorEnvToMatch(
  bodyParameters: FileManage.HandleUsingGET6.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/env/{toMatch}",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorFeatures(
  bodyParameters: FileManage.HandleUsingGET8.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/features",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorHealth(
  bodyParameters: FileManage.HandleUsingGET10.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/health",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorHealth(
  bodyParameters: FileManage.HandleUsingGET9.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/health/**",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorHeapdump(
  bodyParameters: FileManage.HandleUsingGET11.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/heapdump",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorInfo(
  bodyParameters: FileManage.HandleUsingGET12.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/info",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorLoggers(
  bodyParameters: FileManage.HandleUsingGET14.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/loggers",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorLoggersName(
  bodyParameters: FileManage.HandleUsingGET13.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/loggers/{name}",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function postActuatorLoggersName(
  bodyParameters: FileManage.HandleUsingPOST.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/loggers/{name}",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorMappings(
  bodyParameters: FileManage.HandleUsingGET15.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/mappings",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorMetrics(
  bodyParameters: FileManage.HandleUsingGET17.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/metrics",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorMetricsRequiredMetricName(
  bodyParameters: FileManage.HandleUsingGET16.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/metrics/{requiredMetricName}",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorNacosconfig(
  bodyParameters: FileManage.HandleUsingGET18.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/nacosconfig",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorNacosdiscovery(
  bodyParameters: FileManage.HandleUsingGET19.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/nacosdiscovery",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorPrometheus(
  bodyParameters: FileManage.HandleUsingGET20.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/prometheus",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function postActuatorRefresh(
  bodyParameters: FileManage.HandleUsingPOST1.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/refresh",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorScheduledtasks(
  bodyParameters: FileManage.HandleUsingGET21.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/scheduledtasks",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorServiceRegistry(
  bodyParameters: FileManage.HandleUsingGET22.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/service-registry",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function postActuatorServiceRegistry(
  bodyParameters: FileManage.HandleUsingPOST2.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/service-registry",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function postActuatorShutdown(
  bodyParameters: FileManage.HandleUsingPOST3.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/shutdown",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
/**
 * handle
 */
export function getActuatorThreaddump(
  bodyParameters: FileManage.HandleUsingGET23.BodyParameters["body"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<Record<string, any>>({
    url: "/actuator/threaddump",
    method: "get",
    data: bodyParameters,
    ...config,
  });
}
/**
 * error
 */
export function getError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "get",
    ...config,
  });
}
/**
 * error
 */
export function headError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "head",
    ...config,
  });
}
/**
 * error
 */
export function postError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "post",
    ...config,
  });
}
/**
 * error
 */
export function putError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "put",
    ...config,
  });
}
/**
 * error
 */
export function deleteError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "delete",
    ...config,
  });
}
/**
 * error
 */
export function optionsError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "options",
    ...config,
  });
}
/**
 * error
 */
export function patchError(config?: AxiosRequestConfig) {
  return fileManageService.request<Record<string, any>>({
    url: "/error",
    method: "patch",
    ...config,
  });
}
/**
 * download
 */
export function getFilePortalV1Download(
  queryParameters: FileManage.DownloadUsingGET.QueryParameters,
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<void>({
    url: "/file-portal/v1/download",
    method: "get",
    params: queryParameters,
    ...config,
  });
}
/**
 * fileDetail
 */
export function getFilePortalV1FileDetailByFileId(
  pathParameters: FileManage.FileDetailUsingGET.PathParameters,
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<
    Required<FileManage.ResponseDataFileDetailDTO>["resp"]
  >({
    url: `/file-portal/v1/fileDetail/${pathParameters.fileId}`,
    method: "get",
    ...config,
  });
}
/**
 * fileSearch
 */
export function postFilePortalV1FileSearch(
  bodyParameters: FileManage.FileSearchUsingPOST.BodyParameters["fileSearch"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<
    Required<FileManage.ResponseDataPageRespDTOFileSearchDataDTO>["resp"]
  >({
    url: "/file-portal/v1/fileSearch",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
/**
 * fullDirSearch
 */
export function postFilePortalV1FullDirSearch(
  bodyParameters: FileManage.FullDirSearchUsingPOST.BodyParameters["fileDirSearch"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<
    Required<FileManage.ResponseDataFileSearchDirNodeDTO>["resp"]
  >({
    url: "/file-portal/v1/fullDirSearch",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
/**
 * preview
 */
export function getFilePortalV1Preview(
  queryParameters: FileManage.PreviewUsingGET.QueryParameters,
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<void>({
    url: "/file-portal/v1/preview",
    method: "get",
    params: queryParameters,
    ...config,
  });
}
/**
 * previewDuration
 */
export function postFilePortalV1PreviewDuration(
  bodyParameters: FileManage.PreviewDurationUsingPOST.BodyParameters["previewDuration"],
  config?: AxiosRequestConfig,
) {
  return fileManageService.request<void>({
    url: "/file-portal/v1/previewDuration",
    method: "post",
    data: bodyParameters,
    ...config,
  });
}
