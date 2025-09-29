import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwies")
export default class CwyController {
  @operation({
    summary: "Get Cwies",
  })
  @get()
  static getCwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwy",
  })
  @post("{id}")
  static createCwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
