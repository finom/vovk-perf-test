import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgr")
export default class DgrController {
  @operation({
    summary: "Get Dgr",
  })
  @get()
  static getDgr = procedure({
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
