import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsrs")
export default class HsrController {
  @operation({
    summary: "Get Hsrs",
  })
  @get()
  static getHsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsr",
  })
  @post("{id}")
  static createHsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
