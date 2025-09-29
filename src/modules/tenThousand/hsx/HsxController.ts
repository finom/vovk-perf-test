import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsxes")
export default class HsxController {
  @operation({
    summary: "Get Hsxes",
  })
  @get()
  static getHsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsx",
  })
  @post("{id}")
  static createHsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
