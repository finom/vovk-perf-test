import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erns")
export default class ErnController {
  @operation({
    summary: "Get Erns",
  })
  @get()
  static getErns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ern",
  })
  @post("{id}")
  static createErn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
