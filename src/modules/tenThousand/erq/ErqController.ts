import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erqs")
export default class ErqController {
  @operation({
    summary: "Get Erqs",
  })
  @get()
  static getErqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erq",
  })
  @post("{id}")
  static createErq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
