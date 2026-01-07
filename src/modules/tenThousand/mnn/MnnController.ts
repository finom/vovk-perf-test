import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnn")
export default class MnnController {
  @operation({
    summary: "Get Mnn",
  })
  @get()
  static getMnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnn",
  })
  @post("{id}")
  static createMnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
