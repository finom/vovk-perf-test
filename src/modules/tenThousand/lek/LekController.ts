import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leks")
export default class LekController {
  @operation({
    summary: "Get Leks",
  })
  @get()
  static getLeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lek",
  })
  @post("{id}")
  static createLek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
