import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acns")
export default class AcnController {
  @operation({
    summary: "Get Acns",
  })
  @get()
  static getAcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acn",
  })
  @post("{id}")
  static createAcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
