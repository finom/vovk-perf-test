import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euls")
export default class EulController {
  @operation({
    summary: "Get Euls",
  })
  @get()
  static getEuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eul",
  })
  @post("{id}")
  static createEul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
