import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muks")
export default class MukController {
  @operation({
    summary: "Get Muks",
  })
  @get()
  static getMuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muk",
  })
  @post("{id}")
  static createMuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
