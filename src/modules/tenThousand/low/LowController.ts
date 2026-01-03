import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lows")
export default class LowController {
  @operation({
    summary: "Get Lows",
  })
  @get()
  static getLows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Low",
  })
  @post("{id}")
  static createLow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
