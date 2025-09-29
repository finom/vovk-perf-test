import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwps")
export default class JwpController {
  @operation({
    summary: "Get Jwps",
  })
  @get()
  static getJwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwp",
  })
  @post("{id}")
  static createJwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
