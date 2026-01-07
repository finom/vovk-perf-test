import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnn")
export default class BnnController {
  @operation({
    summary: "Get Bnn",
  })
  @get()
  static getBnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnn",
  })
  @post("{id}")
  static createBnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
