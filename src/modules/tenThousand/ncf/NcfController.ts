import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncfs")
export default class NcfController {
  @operation({
    summary: "Get Ncfs",
  })
  @get()
  static getNcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncf",
  })
  @post("{id}")
  static createNcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
