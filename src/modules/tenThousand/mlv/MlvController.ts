import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlv")
export default class MlvController {
  @operation({
    summary: "Get Mlv",
  })
  @get()
  static getMlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlv",
  })
  @post("{id}")
  static createMlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
