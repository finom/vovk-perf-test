import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpos")
export default class LpoController {
  @operation({
    summary: "Get Lpos",
  })
  @get()
  static getLpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpo",
  })
  @post("{id}")
  static createLpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
