import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nops")
export default class NopController {
  @operation({
    summary: "Get Nops",
  })
  @get()
  static getNops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nop",
  })
  @post("{id}")
  static createNop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
