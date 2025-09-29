import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbns")
export default class NbnController {
  @operation({
    summary: "Get Nbns",
  })
  @get()
  static getNbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbn",
  })
  @post("{id}")
  static createNbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
