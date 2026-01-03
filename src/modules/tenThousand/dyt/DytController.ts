import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyts")
export default class DytController {
  @operation({
    summary: "Get Dyts",
  })
  @get()
  static getDyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyt",
  })
  @post("{id}")
  static createDyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
