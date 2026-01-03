import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtls")
export default class DtlController {
  @operation({
    summary: "Get Dtls",
  })
  @get()
  static getDtls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtl",
  })
  @post("{id}")
  static createDtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
