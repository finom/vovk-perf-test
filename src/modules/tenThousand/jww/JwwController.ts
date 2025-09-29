import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwws")
export default class JwwController {
  @operation({
    summary: "Get Jwws",
  })
  @get()
  static getJwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jww",
  })
  @post("{id}")
  static createJww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
