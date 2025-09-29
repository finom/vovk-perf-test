import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juls")
export default class JulController {
  @operation({
    summary: "Get Juls",
  })
  @get()
  static getJuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jul",
  })
  @post("{id}")
  static createJul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
