import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdzs")
export default class CdzController {
  @operation({
    summary: "Get Cdzs",
  })
  @get()
  static getCdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdz",
  })
  @post("{id}")
  static createCdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
