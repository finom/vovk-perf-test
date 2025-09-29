import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwzs")
export default class JwzController {
  @operation({
    summary: "Get Jwzs",
  })
  @get()
  static getJwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwz",
  })
  @post("{id}")
  static createJwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
