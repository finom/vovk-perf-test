import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgws")
export default class MgwController {
  @operation({
    summary: "Get Mgws",
  })
  @get()
  static getMgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgw",
  })
  @post("{id}")
  static createMgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
