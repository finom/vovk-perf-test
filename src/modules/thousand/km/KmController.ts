import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kms")
export default class KmController {
  @operation({
    summary: "Get Kms",
  })
  @get()
  static getKms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Km",
  })
  @post("{id}")
  static createKm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
