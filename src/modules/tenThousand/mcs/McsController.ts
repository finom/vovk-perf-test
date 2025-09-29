import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcs")
export default class McsController {
  @operation({
    summary: "Get Mcs",
  })
  @get()
  static getMcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcs",
  })
  @post("{id}")
  static createMcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
