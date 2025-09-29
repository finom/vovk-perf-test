import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leys")
export default class LeyController {
  @operation({
    summary: "Get Leys",
  })
  @get()
  static getLeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ley",
  })
  @post("{id}")
  static createLey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
