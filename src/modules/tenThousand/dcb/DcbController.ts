import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcbs")
export default class DcbController {
  @operation({
    summary: "Get Dcbs",
  })
  @get()
  static getDcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcb",
  })
  @post("{id}")
  static createDcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
