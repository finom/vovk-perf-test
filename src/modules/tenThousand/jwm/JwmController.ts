import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwm")
export default class JwmController {
  @operation({
    summary: "Get Jwm",
  })
  @get()
  static getJwm = procedure({
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
