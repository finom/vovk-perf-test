import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixzs")
export default class IxzController {
  @operation({
    summary: "Get Ixzs",
  })
  @get()
  static getIxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixz",
  })
  @post("{id}")
  static createIxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
