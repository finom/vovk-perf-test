import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwjs")
export default class JwjController {
  @operation({
    summary: "Get Jwjs",
  })
  @get()
  static getJwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwj",
  })
  @post("{id}")
  static createJwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
