import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwas")
export default class BwaController {
  @operation({
    summary: "Get Bwas",
  })
  @get()
  static getBwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwa",
  })
  @post("{id}")
  static createBwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
