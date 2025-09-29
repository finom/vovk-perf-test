import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieas")
export default class IeaController {
  @operation({
    summary: "Get Ieas",
  })
  @get()
  static getIeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iea",
  })
  @post("{id}")
  static createIea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
