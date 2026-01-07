import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcm")
export default class DcmController {
  @operation({
    summary: "Get Dcm",
  })
  @get()
  static getDcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcm",
  })
  @post("{id}")
  static createDcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
