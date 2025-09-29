import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwts")
export default class JwtController {
  @operation({
    summary: "Get Jwts",
  })
  @get()
  static getJwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwt",
  })
  @post("{id}")
  static createJwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
