import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhvs")
export default class MhvController {
  @operation({
    summary: "Get Mhvs",
  })
  @get()
  static getMhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhv",
  })
  @post("{id}")
  static createMhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
