import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("culs")
export default class CulController {
  @operation({
    summary: "Get Culs",
  })
  @get()
  static getCuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cul",
  })
  @post("{id}")
  static createCul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
