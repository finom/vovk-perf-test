import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwqs")
export default class JwqController {
  @operation({
    summary: "Get Jwqs",
  })
  @get()
  static getJwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwq",
  })
  @post("{id}")
  static createJwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
