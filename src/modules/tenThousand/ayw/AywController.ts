import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayws")
export default class AywController {
  @operation({
    summary: "Get Ayws",
  })
  @get()
  static getAyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayw",
  })
  @post("{id}")
  static createAyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
