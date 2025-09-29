import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuls")
export default class FulController {
  @operation({
    summary: "Get Fuls",
  })
  @get()
  static getFuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ful",
  })
  @post("{id}")
  static createFul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
