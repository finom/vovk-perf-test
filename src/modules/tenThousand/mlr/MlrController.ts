import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlr")
export default class MlrController {
  @operation({
    summary: "Get Mlr",
  })
  @get()
  static getMlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlr",
  })
  @post("{id}")
  static createMlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
