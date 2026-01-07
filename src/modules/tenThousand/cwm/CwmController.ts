import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwm")
export default class CwmController {
  @operation({
    summary: "Get Cwm",
  })
  @get()
  static getCwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwm",
  })
  @post("{id}")
  static createCwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
