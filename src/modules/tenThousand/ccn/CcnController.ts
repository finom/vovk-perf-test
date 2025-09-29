import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccns")
export default class CcnController {
  @operation({
    summary: "Get Ccns",
  })
  @get()
  static getCcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccn",
  })
  @post("{id}")
  static createCcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
