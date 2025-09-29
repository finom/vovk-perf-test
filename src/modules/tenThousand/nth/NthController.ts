import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nths")
export default class NthController {
  @operation({
    summary: "Get Nths",
  })
  @get()
  static getNths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nth",
  })
  @post("{id}")
  static createNth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
