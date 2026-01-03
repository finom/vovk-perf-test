import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwms")
export default class BwmController {
  @operation({
    summary: "Get Bwms",
  })
  @get()
  static getBwms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwm",
  })
  @post("{id}")
  static createBwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
