import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwm")
export default class BwmController {
  @operation({
    summary: "Get Bwm",
  })
  @get()
  static getBwm = procedure({
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
