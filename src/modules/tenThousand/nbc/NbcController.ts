import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbcs")
export default class NbcController {
  @operation({
    summary: "Get Nbcs",
  })
  @get()
  static getNbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbc",
  })
  @post("{id}")
  static createNbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
