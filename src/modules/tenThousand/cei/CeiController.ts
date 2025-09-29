import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceis")
export default class CeiController {
  @operation({
    summary: "Get Ceis",
  })
  @get()
  static getCeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cei",
  })
  @post("{id}")
  static createCei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
