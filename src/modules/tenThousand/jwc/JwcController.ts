import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwcs")
export default class JwcController {
  @operation({
    summary: "Get Jwcs",
  })
  @get()
  static getJwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwc",
  })
  @post("{id}")
  static createJwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
