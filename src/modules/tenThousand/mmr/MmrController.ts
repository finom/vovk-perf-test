import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmrs")
export default class MmrController {
  @operation({
    summary: "Get Mmrs",
  })
  @get()
  static getMmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmr",
  })
  @post("{id}")
  static createMmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
