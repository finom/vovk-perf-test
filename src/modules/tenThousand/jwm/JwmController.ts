import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwms")
export default class JwmController {
  @operation({
    summary: "Get Jwms",
  })
  @get()
  static getJwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwm",
  })
  @post("{id}")
  static createJwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
