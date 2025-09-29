import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipes")
export default class IpeController {
  @operation({
    summary: "Get Ipes",
  })
  @get()
  static getIpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipe",
  })
  @post("{id}")
  static createIpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
