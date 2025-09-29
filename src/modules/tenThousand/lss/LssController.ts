import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsses")
export default class LssController {
  @operation({
    summary: "Get Lsses",
  })
  @get()
  static getLsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lss",
  })
  @post("{id}")
  static createLss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
