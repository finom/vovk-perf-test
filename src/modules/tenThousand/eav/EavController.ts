import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eavs")
export default class EavController {
  @operation({
    summary: "Get Eavs",
  })
  @get()
  static getEavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eav",
  })
  @post("{id}")
  static createEav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
