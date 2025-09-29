import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyws")
export default class JywController {
  @operation({
    summary: "Get Jyws",
  })
  @get()
  static getJyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyw",
  })
  @post("{id}")
  static createJyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
