import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlp")
export default class MlpController {
  @operation({
    summary: "Get Mlp",
  })
  @get()
  static getMlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlp",
  })
  @post("{id}")
  static createMlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
