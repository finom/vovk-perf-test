import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byws")
export default class BywController {
  @operation({
    summary: "Get Byws",
  })
  @get()
  static getByws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byw",
  })
  @post("{id}")
  static createByw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
