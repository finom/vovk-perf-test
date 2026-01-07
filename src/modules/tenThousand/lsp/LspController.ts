import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsp")
export default class LspController {
  @operation({
    summary: "Get Lsp",
  })
  @get()
  static getLsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsp",
  })
  @post("{id}")
  static createLsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
