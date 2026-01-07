import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkt")
export default class MktController {
  @operation({
    summary: "Get Mkt",
  })
  @get()
  static getMkt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkt",
  })
  @post("{id}")
  static createMkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
