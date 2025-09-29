import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyds")
export default class FydController {
  @operation({
    summary: "Get Fyds",
  })
  @get()
  static getFyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyd",
  })
  @post("{id}")
  static createFyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
