import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsses")
export default class HssController {
  @operation({
    summary: "Get Hsses",
  })
  @get()
  static getHsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hss",
  })
  @post("{id}")
  static createHss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
