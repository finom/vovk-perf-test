import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mns")
export default class MnController {
  @operation({
    summary: "Get Mns",
  })
  @get()
  static getMns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mn",
  })
  @post("{id}")
  static createMn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
