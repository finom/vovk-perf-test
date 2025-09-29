import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zbs")
export default class ZbController {
  @operation({
    summary: "Get Zbs",
  })
  @get()
  static getZbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zb",
  })
  @post("{id}")
  static createZb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
