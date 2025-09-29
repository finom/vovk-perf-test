import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duls")
export default class DulController {
  @operation({
    summary: "Get Duls",
  })
  @get()
  static getDuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dul",
  })
  @post("{id}")
  static createDul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
