import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nofs")
export default class NofController {
  @operation({
    summary: "Get Nofs",
  })
  @get()
  static getNofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nof",
  })
  @post("{id}")
  static createNof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
