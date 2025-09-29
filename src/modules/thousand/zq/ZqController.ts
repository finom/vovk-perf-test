import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zqs")
export default class ZqController {
  @operation({
    summary: "Get Zqs",
  })
  @get()
  static getZqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zq",
  })
  @post("{id}")
  static createZq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
