import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auls")
export default class AulController {
  @operation({
    summary: "Get Auls",
  })
  @get()
  static getAuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aul",
  })
  @post("{id}")
  static createAul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
