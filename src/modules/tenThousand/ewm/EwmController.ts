import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewms")
export default class EwmController {
  @operation({
    summary: "Get Ewms",
  })
  @get()
  static getEwms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewm",
  })
  @post("{id}")
  static createEwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
