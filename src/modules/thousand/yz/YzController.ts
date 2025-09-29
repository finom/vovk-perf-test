import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yzs")
export default class YzController {
  @operation({
    summary: "Get Yzs",
  })
  @get()
  static getYzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yz",
  })
  @post("{id}")
  static createYz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
