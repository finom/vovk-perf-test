import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wzs")
export default class WzController {
  @operation({
    summary: "Get Wzs",
  })
  @get()
  static getWzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wz",
  })
  @post("{id}")
  static createWz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
