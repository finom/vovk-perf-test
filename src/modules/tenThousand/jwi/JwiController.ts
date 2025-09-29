import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwis")
export default class JwiController {
  @operation({
    summary: "Get Jwis",
  })
  @get()
  static getJwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwi",
  })
  @post("{id}")
  static createJwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
