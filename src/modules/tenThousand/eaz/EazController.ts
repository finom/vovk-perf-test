import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eazs")
export default class EazController {
  @operation({
    summary: "Get Eazs",
  })
  @get()
  static getEazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eaz",
  })
  @post("{id}")
  static createEaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
