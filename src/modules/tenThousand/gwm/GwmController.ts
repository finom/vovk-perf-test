import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwm")
export default class GwmController {
  @operation({
    summary: "Get Gwm",
  })
  @get()
  static getGwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwm",
  })
  @post("{id}")
  static createGwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
