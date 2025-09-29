import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhus")
export default class NhuController {
  @operation({
    summary: "Get Nhus",
  })
  @get()
  static getNhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhu",
  })
  @post("{id}")
  static createNhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
