import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwus")
export default class JwuController {
  @operation({
    summary: "Get Jwus",
  })
  @get()
  static getJwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwu",
  })
  @post("{id}")
  static createJwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
