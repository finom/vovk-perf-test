import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixbs")
export default class IxbController {
  @operation({
    summary: "Get Ixbs",
  })
  @get()
  static getIxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixb",
  })
  @post("{id}")
  static createIxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
