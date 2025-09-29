import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guls")
export default class GulController {
  @operation({
    summary: "Get Guls",
  })
  @get()
  static getGuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gul",
  })
  @post("{id}")
  static createGul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
