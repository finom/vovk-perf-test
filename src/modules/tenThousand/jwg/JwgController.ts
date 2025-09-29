import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwgs")
export default class JwgController {
  @operation({
    summary: "Get Jwgs",
  })
  @get()
  static getJwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwg",
  })
  @post("{id}")
  static createJwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
