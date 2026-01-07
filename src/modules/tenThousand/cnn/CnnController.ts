import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnn")
export default class CnnController {
  @operation({
    summary: "Get Cnn",
  })
  @get()
  static getCnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnn",
  })
  @post("{id}")
  static createCnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
