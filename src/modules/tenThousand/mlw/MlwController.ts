import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlw")
export default class MlwController {
  @operation({
    summary: "Get Mlw",
  })
  @get()
  static getMlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlw",
  })
  @post("{id}")
  static createMlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
