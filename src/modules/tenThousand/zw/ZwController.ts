import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zws")
export default class ZwController {
  @operation({
    summary: "Get Zws",
  })
  @get()
  static getZws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zw",
  })
  @post("{id}")
  static createZw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
