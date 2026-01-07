import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgw")
export default class MgwController {
  @operation({
    summary: "Get Mgw",
  })
  @get()
  static getMgw = procedure({
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
