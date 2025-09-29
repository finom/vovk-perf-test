import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcus")
export default class KcuController {
  @operation({
    summary: "Get Kcus",
  })
  @get()
  static getKcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcu",
  })
  @post("{id}")
  static createKcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
