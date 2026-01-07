import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgd")
export default class MgdController {
  @operation({
    summary: "Get Mgd",
  })
  @get()
  static getMgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgd",
  })
  @post("{id}")
  static createMgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
