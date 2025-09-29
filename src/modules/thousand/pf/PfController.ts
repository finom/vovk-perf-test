import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pfs")
export default class PfController {
  @operation({
    summary: "Get Pfs",
  })
  @get()
  static getPfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pf",
  })
  @post("{id}")
  static createPf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
