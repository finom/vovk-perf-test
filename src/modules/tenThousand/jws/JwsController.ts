import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jws")
export default class JwsController {
  @operation({
    summary: "Get Jws",
  })
  @get()
  static getJws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jws",
  })
  @post("{id}")
  static createJws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
