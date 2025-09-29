import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beis")
export default class BeiController {
  @operation({
    summary: "Get Beis",
  })
  @get()
  static getBeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bei",
  })
  @post("{id}")
  static createBei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
