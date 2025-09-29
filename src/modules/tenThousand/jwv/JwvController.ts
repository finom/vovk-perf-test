import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwvs")
export default class JwvController {
  @operation({
    summary: "Get Jwvs",
  })
  @get()
  static getJwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwv",
  })
  @post("{id}")
  static createJwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
