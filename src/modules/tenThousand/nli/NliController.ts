import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlis")
export default class NliController {
  @operation({
    summary: "Get Nlis",
  })
  @get()
  static getNlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nli",
  })
  @post("{id}")
  static createNli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
