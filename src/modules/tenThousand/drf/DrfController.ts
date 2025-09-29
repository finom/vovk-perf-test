import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drfs")
export default class DrfController {
  @operation({
    summary: "Get Drfs",
  })
  @get()
  static getDrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drf",
  })
  @post("{id}")
  static createDrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
