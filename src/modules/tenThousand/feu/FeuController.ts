import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feus")
export default class FeuController {
  @operation({
    summary: "Get Feus",
  })
  @get()
  static getFeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Feu",
  })
  @post("{id}")
  static createFeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
