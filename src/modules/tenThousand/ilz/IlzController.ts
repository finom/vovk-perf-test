import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilzs")
export default class IlzController {
  @operation({
    summary: "Get Ilzs",
  })
  @get()
  static getIlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilz",
  })
  @post("{id}")
  static createIlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
