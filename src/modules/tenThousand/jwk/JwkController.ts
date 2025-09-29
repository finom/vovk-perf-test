import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwks")
export default class JwkController {
  @operation({
    summary: "Get Jwks",
  })
  @get()
  static getJwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwk",
  })
  @post("{id}")
  static createJwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
