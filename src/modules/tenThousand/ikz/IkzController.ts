import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikzs")
export default class IkzController {
  @operation({
    summary: "Get Ikzs",
  })
  @get()
  static getIkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikz",
  })
  @post("{id}")
  static createIkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
