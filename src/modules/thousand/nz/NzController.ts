import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nzs")
export default class NzController {
  @operation({
    summary: "Get Nzs",
  })
  @get()
  static getNzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nz",
  })
  @post("{id}")
  static createNz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
