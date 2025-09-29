import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amvs")
export default class AmvController {
  @operation({
    summary: "Get Amvs",
  })
  @get()
  static getAmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amv",
  })
  @post("{id}")
  static createAmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
