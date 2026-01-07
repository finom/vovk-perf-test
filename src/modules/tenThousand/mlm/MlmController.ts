import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlm")
export default class MlmController {
  @operation({
    summary: "Get Mlm",
  })
  @get()
  static getMlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlm",
  })
  @post("{id}")
  static createMlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
