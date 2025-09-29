import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbps")
export default class NbpController {
  @operation({
    summary: "Get Nbps",
  })
  @get()
  static getNbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbp",
  })
  @post("{id}")
  static createNbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
