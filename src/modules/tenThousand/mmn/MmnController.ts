import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmns")
export default class MmnController {
  @operation({
    summary: "Get Mmns",
  })
  @get()
  static getMmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmn",
  })
  @post("{id}")
  static createMmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
