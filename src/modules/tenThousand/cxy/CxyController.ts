import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxies")
export default class CxyController {
  @operation({
    summary: "Get Cxies",
  })
  @get()
  static getCxies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxy",
  })
  @post("{id}")
  static createCxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
