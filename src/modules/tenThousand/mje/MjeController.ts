import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjes")
export default class MjeController {
  @operation({
    summary: "Get Mjes",
  })
  @get()
  static getMjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mje",
  })
  @post("{id}")
  static createMje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
