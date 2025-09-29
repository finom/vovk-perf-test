import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mias")
export default class MiaController {
  @operation({
    summary: "Get Mias",
  })
  @get()
  static getMias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mia",
  })
  @post("{id}")
  static createMia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
