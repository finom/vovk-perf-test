import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtl")
export default class DtlController {
  @operation({
    summary: "Get Dtl",
  })
  @get()
  static getDtl = procedure({
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
