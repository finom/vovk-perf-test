import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("figs")
export default class FigController {
  @operation({
    summary: "Get Figs",
  })
  @get()
  static getFigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fig",
  })
  @post("{id}")
  static createFig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
