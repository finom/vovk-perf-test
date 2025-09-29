import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpvs")
export default class JpvController {
  @operation({
    summary: "Get Jpvs",
  })
  @get()
  static getJpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpv",
  })
  @post("{id}")
  static createJpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
