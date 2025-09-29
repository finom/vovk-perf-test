import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsps")
export default class LspController {
  @operation({
    summary: "Get Lsps",
  })
  @get()
  static getLsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsp",
  })
  @post("{id}")
  static createLsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
