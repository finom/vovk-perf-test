import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgrs")
export default class DgrController {
  @operation({
    summary: "Get Dgrs",
  })
  @get()
  static getDgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgr",
  })
  @post("{id}")
  static createDgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
