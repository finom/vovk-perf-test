import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuls")
export default class IulController {
  @operation({
    summary: "Get Iuls",
  })
  @get()
  static getIuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iul",
  })
  @post("{id}")
  static createIul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
