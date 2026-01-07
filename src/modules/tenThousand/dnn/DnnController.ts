import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnn")
export default class DnnController {
  @operation({
    summary: "Get Dnn",
  })
  @get()
  static getDnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnn",
  })
  @post("{id}")
  static createDnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
