import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifzs")
export default class IfzController {
  @operation({
    summary: "Get Ifzs",
  })
  @get()
  static getIfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifz",
  })
  @post("{id}")
  static createIfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
