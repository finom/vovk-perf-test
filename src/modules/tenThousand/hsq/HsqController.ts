import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsqs")
export default class HsqController {
  @operation({
    summary: "Get Hsqs",
  })
  @get()
  static getHsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsq",
  })
  @post("{id}")
  static createHsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
