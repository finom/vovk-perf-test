import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("scs")
export default class ScController {
  @operation({
    summary: "Get Scs",
  })
  @get()
  static getScs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sc",
  })
  @post("{id}")
  static createSc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
