import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afzs")
export default class AfzController {
  @operation({
    summary: "Get Afzs",
  })
  @get()
  static getAfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afz",
  })
  @post("{id}")
  static createAfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
