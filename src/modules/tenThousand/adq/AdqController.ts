import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adqs")
export default class AdqController {
  @operation({
    summary: "Get Adqs",
  })
  @get()
  static getAdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adq",
  })
  @post("{id}")
  static createAdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
