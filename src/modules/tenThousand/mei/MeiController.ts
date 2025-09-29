import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meis")
export default class MeiController {
  @operation({
    summary: "Get Meis",
  })
  @get()
  static getMeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mei",
  })
  @post("{id}")
  static createMei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
