import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhns")
export default class MhnController {
  @operation({
    summary: "Get Mhns",
  })
  @get()
  static getMhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhn",
  })
  @post("{id}")
  static createMhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
