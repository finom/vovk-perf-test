import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbqs")
export default class NbqController {
  @operation({
    summary: "Get Nbqs",
  })
  @get()
  static getNbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbq",
  })
  @post("{id}")
  static createNbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
