import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncns")
export default class NcnController {
  @operation({
    summary: "Get Ncns",
  })
  @get()
  static getNcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncn",
  })
  @post("{id}")
  static createNcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
