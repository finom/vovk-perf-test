import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwm")
export default class FwmController {
  @operation({
    summary: "Get Fwm",
  })
  @get()
  static getFwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwm",
  })
  @post("{id}")
  static createFwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
