import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcf")
export default class DcfController {
  @operation({
    summary: "Get Dcf",
  })
  @get()
  static getDcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcf",
  })
  @post("{id}")
  static createDcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
