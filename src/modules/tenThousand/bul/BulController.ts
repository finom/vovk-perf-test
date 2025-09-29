import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buls")
export default class BulController {
  @operation({
    summary: "Get Buls",
  })
  @get()
  static getBuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bul",
  })
  @post("{id}")
  static createBul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
