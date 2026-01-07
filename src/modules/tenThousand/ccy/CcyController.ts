import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccy")
export default class CcyController {
  @operation({
    summary: "Get Ccy",
  })
  @get()
  static getCcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccy",
  })
  @post("{id}")
  static createCcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
