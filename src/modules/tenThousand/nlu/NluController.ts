import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlus")
export default class NluController {
  @operation({
    summary: "Get Nlus",
  })
  @get()
  static getNlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlu",
  })
  @post("{id}")
  static createNlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
