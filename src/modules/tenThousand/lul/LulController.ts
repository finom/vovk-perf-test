import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luls")
export default class LulController {
  @operation({
    summary: "Get Luls",
  })
  @get()
  static getLuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lul",
  })
  @post("{id}")
  static createLul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
