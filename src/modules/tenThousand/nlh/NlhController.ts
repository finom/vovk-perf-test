import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlhs")
export default class NlhController {
  @operation({
    summary: "Get Nlhs",
  })
  @get()
  static getNlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlh",
  })
  @post("{id}")
  static createNlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
