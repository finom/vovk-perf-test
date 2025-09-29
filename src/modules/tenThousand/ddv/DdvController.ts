import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddvs")
export default class DdvController {
  @operation({
    summary: "Get Ddvs",
  })
  @get()
  static getDdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddv",
  })
  @post("{id}")
  static createDdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
