import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwms")
export default class JwmController {
  @operation({
    summary: "Get Jwms",
  })
  @get()
  static getJwms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwm",
  })
  @post("{id}")
  static createJwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
