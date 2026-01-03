import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwms")
export default class KwmController {
  @operation({
    summary: "Get Kwms",
  })
  @get()
  static getKwms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwm",
  })
  @post("{id}")
  static createKwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
