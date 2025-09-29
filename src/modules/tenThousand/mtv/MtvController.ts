import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtvs")
export default class MtvController {
  @operation({
    summary: "Get Mtvs",
  })
  @get()
  static getMtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtv",
  })
  @post("{id}")
  static createMtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
