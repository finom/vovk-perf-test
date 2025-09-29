import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emzs")
export default class EmzController {
  @operation({
    summary: "Get Emzs",
  })
  @get()
  static getEmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emz",
  })
  @post("{id}")
  static createEmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
