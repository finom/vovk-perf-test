import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mofs")
export default class MofController {
  @operation({
    summary: "Get Mofs",
  })
  @get()
  static getMofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mof",
  })
  @post("{id}")
  static createMof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
