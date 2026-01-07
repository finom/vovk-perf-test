import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcw")
export default class DcwController {
  @operation({
    summary: "Get Dcw",
  })
  @get()
  static getDcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcw",
  })
  @post("{id}")
  static createDcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
