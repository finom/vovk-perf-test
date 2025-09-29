import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imhs")
export default class ImhController {
  @operation({
    summary: "Get Imhs",
  })
  @get()
  static getImhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imh",
  })
  @post("{id}")
  static createImh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
