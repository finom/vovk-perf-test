import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsp")
export default class LspController {
  @operation({
    summary: "Get Lsp",
  })
  @get()
  static getLsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsp",
  })
  @post("{id}")
  static createLsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
