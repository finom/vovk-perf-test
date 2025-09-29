import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftis")
export default class FtiController {
  @operation({
    summary: "Get Ftis",
  })
  @get()
  static getFtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fti",
  })
  @post("{id}")
  static createFti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
