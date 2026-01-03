import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwms")
export default class IwmController {
  @operation({
    summary: "Get Iwms",
  })
  @get()
  static getIwms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwm",
  })
  @post("{id}")
  static createIwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
