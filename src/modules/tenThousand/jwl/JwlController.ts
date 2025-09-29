import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwls")
export default class JwlController {
  @operation({
    summary: "Get Jwls",
  })
  @get()
  static getJwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwl",
  })
  @post("{id}")
  static createJwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
