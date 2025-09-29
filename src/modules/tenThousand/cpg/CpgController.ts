import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpgs")
export default class CpgController {
  @operation({
    summary: "Get Cpgs",
  })
  @get()
  static getCpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpg",
  })
  @post("{id}")
  static createCpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
