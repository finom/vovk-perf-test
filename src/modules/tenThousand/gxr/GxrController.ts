import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxrs")
export default class GxrController {
  @operation({
    summary: "Get Gxrs",
  })
  @get()
  static getGxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxr",
  })
  @post("{id}")
  static createGxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
