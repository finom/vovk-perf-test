import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muys")
export default class MuyController {
  @operation({
    summary: "Get Muys",
  })
  @get()
  static getMuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muy",
  })
  @post("{id}")
  static createMuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
