declare namespace FileManage {
  /**
   * FileDetailDTO
   */
  export interface FileDetailDTO {
    fileId?: number; // int64
    fileName?: string;
    objectName?: string;
    options?: number; // int32
    sendUser?: string;
  }
  /**
   * FileDirSearchDTO
   */
  export interface FileDirSearchDTO {
    bizCategory?: number; // int32
    fileDirId?: number; // int64
  }
  /**
   * FileSearchDataDTO
   */
  export interface FileSearchDataDTO {
    bizCategory?: number; // int32
    fileDirId?: number; // int64
    fileDirName?: string;
    fileId?: number; // int64
    fileName?: string;
    sendTime?: string; // date-time
    sendUser?: string;
  }
  /**
   * FileSearchDirNodeDTO
   */
  export interface FileSearchDirNodeDTO {
    fileDirId?: number; // int64
    fileDirName?: string;
  }
  /**
   * FileSearchQryDTO
   */
  export interface FileSearchQryDTO {
    bizCategory?: number; // int32
    current?: number; // int32
    fileDirId?: number; // int64
    fileName?: string;
    pageSize?: number; // int32
  }
  /**
   * Link
   */
  export interface Link {
    href?: string;
    templated?: boolean;
  }
  /**
   * Map«string,Link»
   */
  export interface MapStringLink {
    [name: string]: /* Link */ Link;
  }
  /**
   * ModelAndView
   */
  export interface ModelAndView {
    empty?: boolean;
    model?: {
      [key: string]: any;
    };
    modelMap?: {
      [name: string]: {
        [key: string]: any;
      };
    };
    reference?: boolean;
    status?:
      | "100 CONTINUE"
      | "101 SWITCHING_PROTOCOLS"
      | "102 PROCESSING"
      | "103 CHECKPOINT"
      | "200 OK"
      | "201 CREATED"
      | "202 ACCEPTED"
      | "203 NON_AUTHORITATIVE_INFORMATION"
      | "204 NO_CONTENT"
      | "205 RESET_CONTENT"
      | "206 PARTIAL_CONTENT"
      | "207 MULTI_STATUS"
      | "208 ALREADY_REPORTED"
      | "226 IM_USED"
      | "300 MULTIPLE_CHOICES"
      | "301 MOVED_PERMANENTLY"
      | "302 FOUND"
      | "302 MOVED_TEMPORARILY"
      | "303 SEE_OTHER"
      | "304 NOT_MODIFIED"
      | "305 USE_PROXY"
      | "307 TEMPORARY_REDIRECT"
      | "308 PERMANENT_REDIRECT"
      | "400 BAD_REQUEST"
      | "401 UNAUTHORIZED"
      | "402 PAYMENT_REQUIRED"
      | "403 FORBIDDEN"
      | "404 NOT_FOUND"
      | "405 METHOD_NOT_ALLOWED"
      | "406 NOT_ACCEPTABLE"
      | "407 PROXY_AUTHENTICATION_REQUIRED"
      | "408 REQUEST_TIMEOUT"
      | "409 CONFLICT"
      | "410 GONE"
      | "411 LENGTH_REQUIRED"
      | "412 PRECONDITION_FAILED"
      | "413 PAYLOAD_TOO_LARGE"
      | "413 REQUEST_ENTITY_TOO_LARGE"
      | "414 URI_TOO_LONG"
      | "414 REQUEST_URI_TOO_LONG"
      | "415 UNSUPPORTED_MEDIA_TYPE"
      | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
      | "417 EXPECTATION_FAILED"
      | "418 I_AM_A_TEAPOT"
      | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
      | "420 METHOD_FAILURE"
      | "421 DESTINATION_LOCKED"
      | "422 UNPROCESSABLE_ENTITY"
      | "423 LOCKED"
      | "424 FAILED_DEPENDENCY"
      | "425 TOO_EARLY"
      | "426 UPGRADE_REQUIRED"
      | "428 PRECONDITION_REQUIRED"
      | "429 TOO_MANY_REQUESTS"
      | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
      | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
      | "500 INTERNAL_SERVER_ERROR"
      | "501 NOT_IMPLEMENTED"
      | "502 BAD_GATEWAY"
      | "503 SERVICE_UNAVAILABLE"
      | "504 GATEWAY_TIMEOUT"
      | "505 HTTP_VERSION_NOT_SUPPORTED"
      | "506 VARIANT_ALSO_NEGOTIATES"
      | "507 INSUFFICIENT_STORAGE"
      | "508 LOOP_DETECTED"
      | "509 BANDWIDTH_LIMIT_EXCEEDED"
      | "510 NOT_EXTENDED"
      | "511 NETWORK_AUTHENTICATION_REQUIRED";
    view?: /* View */ View;
    viewName?: string;
  }
  /**
   * PageRespDTO«FileSearchDataDTO»
   */
  export interface PageRespDTOFileSearchDataDTO {
    list?: /* FileSearchDataDTO */ FileSearchDataDTO[];
    pagination?: /* Pagination */ Pagination;
  }
  /**
   * Pagination
   */
  export interface Pagination {
    current?: number; // int32
    pageSize?: number; // int32
    total?: number; // int64
  }
  /**
   * PreviewDurationDTO
   */
  export interface PreviewDurationDTO {
    fileId?: number; // int64
    previewSecond?: number; // int32
  }
  /**
   * ResponseData«FileDetailDTO»
   */
  export interface ResponseDataFileDetailDTO {
    msg?: string;
    msgCode?: string;
    resp?: /* FileDetailDTO */ FileDetailDTO[];
    success?: boolean;
    total?: number; // int32
  }
  /**
   * ResponseData«FileSearchDirNodeDTO»
   */
  export interface ResponseDataFileSearchDirNodeDTO {
    msg?: string;
    msgCode?: string;
    resp?: /* FileSearchDirNodeDTO */ FileSearchDirNodeDTO[];
    success?: boolean;
    total?: number; // int32
  }
  /**
   * ResponseData«PageRespDTO«FileSearchDataDTO»»
   */
  export interface ResponseDataPageRespDTOFileSearchDataDTO {
    msg?: string;
    msgCode?: string;
    resp?: /* PageRespDTO«FileSearchDataDTO» */ PageRespDTOFileSearchDataDTO[];
    success?: boolean;
    total?: number; // int32
  }
  /**
   * ResponseData«Void»
   */
  export interface ResponseDataVoid {
    msg?: string;
    msgCode?: string;
    success?: boolean;
    total?: number; // int32
  }
  /**
   * View
   */
  export interface View {
    contentType?: string;
  }
}
declare namespace FileManage {
  namespace DeregisterInstanceUsingGET {
    namespace Responses {
      export type $200 = string;
    }
  }
  namespace DownloadUsingGET {
    namespace Parameters {
      /**
       * fileId
       */
      export type FileId = number; // int64
    }
    export interface QueryParameters {
      fileId: /* fileId */ Parameters.FileId /* int64 */;
    }
  }
  namespace ErrorUsingDELETE {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace ErrorUsingGET {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace ErrorUsingHEAD {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace ErrorUsingOPTIONS {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace ErrorUsingPATCH {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace ErrorUsingPOST {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace ErrorUsingPUT {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [key: string]: any;
        };
      }
    }
  }
  namespace FileDetailUsingGET {
    namespace Parameters {
      /**
       * fileId
       */
      export type FileId = number; // int64
    }
    export interface PathParameters {
      fileId: /* fileId */ Parameters.FileId /* int64 */;
    }
    namespace Responses {
      export type $200 =
        /* ResponseData«FileDetailDTO» */ FileManage.ResponseDataFileDetailDTO;
    }
  }
  namespace FileSearchUsingPOST {
    export interface BodyParameters {
      fileSearch: Parameters.FileSearch;
    }
    namespace Parameters {
      export type FileSearch =
        /* FileSearchQryDTO */ FileManage.FileSearchQryDTO;
    }
    namespace Responses {
      export type $200 =
        /* ResponseData«PageRespDTO«FileSearchDataDTO»» */ FileManage.ResponseDataPageRespDTOFileSearchDataDTO;
    }
  }
  namespace FullDirSearchUsingPOST {
    export interface BodyParameters {
      fileDirSearch: Parameters.FileDirSearch;
    }
    namespace Parameters {
      export type FileDirSearch =
        /* FileDirSearchDTO */ FileManage.FileDirSearchDTO;
    }
    namespace Responses {
      export type $200 =
        /* ResponseData«FileSearchDirNodeDTO» */ FileManage.ResponseDataFileSearchDirNodeDTO;
    }
  }
  namespace HandleUsingDELETE {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingDELETE1 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET1 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET10 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET11 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET12 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET13 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET14 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET15 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET16 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET17 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET18 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET19 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET2 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET20 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET21 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET22 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET23 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET3 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET4 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET5 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET6 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET7 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET8 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingGET9 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingPOST {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingPOST1 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingPOST2 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace HandleUsingPOST3 {
    export interface BodyParameters {
      body?: Parameters.Body;
    }
    namespace Parameters {
      export interface Body {
        [name: string]: string;
      }
    }
    namespace Responses {
      export interface $200 {}
    }
  }
  namespace LinksUsingGET {
    namespace Responses {
      export interface $200 {
        [name: string]: {
          [name: string]: /* Link */ FileManage.Link;
        };
      }
    }
  }
  namespace PreviewDurationUsingPOST {
    export interface BodyParameters {
      previewDuration: Parameters.PreviewDuration;
    }
    namespace Parameters {
      export type PreviewDuration =
        /* PreviewDurationDTO */ FileManage.PreviewDurationDTO;
    }
    namespace Responses {
      export type $200 = /* ResponseData«Void» */ FileManage.ResponseDataVoid;
    }
  }
  namespace PreviewUsingGET {
    namespace Parameters {
      /**
       * fileId
       */
      export type FileId = number; // int64
    }
    export interface QueryParameters {
      fileId: /* fileId */ Parameters.FileId /* int64 */;
    }
  }
  namespace RegisterInstanceUsingGET {
    namespace Responses {
      export type $200 = string;
    }
  }
}
