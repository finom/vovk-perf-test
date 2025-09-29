import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekas")
export default class EkaController {
  @operation({
    summary: "Get Ekas",
  })
  @get()
  static getEkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eka",
  })
  @post("{id}")
  static createEka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
