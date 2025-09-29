import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nexes")
export default class NexController {
  @operation({
    summary: "Get Nexes",
  })
  @get()
  static getNexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nex",
  })
  @post("{id}")
  static createNex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
