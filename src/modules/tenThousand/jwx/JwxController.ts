import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwxes")
export default class JwxController {
  @operation({
    summary: "Get Jwxes",
  })
  @get()
  static getJwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwx",
  })
  @post("{id}")
  static createJwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
