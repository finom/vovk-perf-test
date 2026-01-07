import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlq")
export default class MlqController {
  @operation({
    summary: "Get Mlq",
  })
  @get()
  static getMlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlq",
  })
  @post("{id}")
  static createMlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
