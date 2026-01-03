import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsps")
export default class LspController {
  @operation({
    summary: "Get Lsps",
  })
  @get()
  static getLsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsp",
  })
  @post("{id}")
  static createLsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
