import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxrs")
export default class HxrController {
  @operation({
    summary: "Get Hxrs",
  })
  @get()
  static getHxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxr",
  })
  @post("{id}")
  static createHxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
