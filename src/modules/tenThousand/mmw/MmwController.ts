import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmws")
export default class MmwController {
  @operation({
    summary: "Get Mmws",
  })
  @get()
  static getMmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmw",
  })
  @post("{id}")
  static createMmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
