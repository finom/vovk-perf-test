import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xzs")
export default class XzController {
  @operation({
    summary: "Get Xzs",
  })
  @get()
  static getXzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xz",
  })
  @post("{id}")
  static createXz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
