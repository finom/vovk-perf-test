import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhqs")
export default class LhqController {
  @operation({
    summary: "Get Lhqs",
  })
  @get()
  static getLhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhq",
  })
  @post("{id}")
  static createLhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
