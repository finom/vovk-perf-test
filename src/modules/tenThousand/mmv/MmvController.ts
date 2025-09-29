import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmvs")
export default class MmvController {
  @operation({
    summary: "Get Mmvs",
  })
  @get()
  static getMmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmv",
  })
  @post("{id}")
  static createMmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
