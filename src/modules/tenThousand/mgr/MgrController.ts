import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgr")
export default class MgrController {
  @operation({
    summary: "Get Mgr",
  })
  @get()
  static getMgr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgr",
  })
  @post("{id}")
  static createMgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
