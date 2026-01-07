import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsp")
export default class LspController {
  @operation({
    summary: "Get Lsp",
  })
  @get()
  static getLsp = procedure({
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
