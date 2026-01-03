import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcxes")
export default class DcxController {
  @operation({
    summary: "Get Dcxes",
  })
  @get()
  static getDcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcx",
  })
  @post("{id}")
  static createDcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
