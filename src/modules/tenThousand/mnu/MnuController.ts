import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnus")
export default class MnuController {
  @operation({
    summary: "Get Mnus",
  })
  @get()
  static getMnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnu",
  })
  @post("{id}")
  static createMnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
