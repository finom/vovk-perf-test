import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zxes")
export default class ZxController {
  @operation({
    summary: "Get Zxes",
  })
  @get()
  static getZxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zx",
  })
  @post("{id}")
  static createZx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
