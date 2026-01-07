import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnn")
export default class FnnController {
  @operation({
    summary: "Get Fnn",
  })
  @get()
  static getFnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnn",
  })
  @post("{id}")
  static createFnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
