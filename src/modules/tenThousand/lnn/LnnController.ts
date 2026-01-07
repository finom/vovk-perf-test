import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnn")
export default class LnnController {
  @operation({
    summary: "Get Lnn",
  })
  @get()
  static getLnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnn",
  })
  @post("{id}")
  static createLnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
