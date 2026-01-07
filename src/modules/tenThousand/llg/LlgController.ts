import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llg")
export default class LlgController {
  @operation({
    summary: "Get Llg",
  })
  @get()
  static getLlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llg",
  })
  @post("{id}")
  static createLlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
