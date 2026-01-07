import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgm")
export default class MgmController {
  @operation({
    summary: "Get Mgm",
  })
  @get()
  static getMgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgm",
  })
  @post("{id}")
  static createMgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
