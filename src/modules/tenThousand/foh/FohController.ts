import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fohs")
export default class FohController {
  @operation({
    summary: "Get Fohs",
  })
  @get()
  static getFohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foh",
  })
  @post("{id}")
  static createFoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
