import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esfs")
export default class EsfController {
  @operation({
    summary: "Get Esfs",
  })
  @get()
  static getEsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esf",
  })
  @post("{id}")
  static createEsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
