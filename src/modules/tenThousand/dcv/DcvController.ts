import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcv")
export default class DcvController {
  @operation({
    summary: "Get Dcv",
  })
  @get()
  static getDcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcv",
  })
  @post("{id}")
  static createDcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
