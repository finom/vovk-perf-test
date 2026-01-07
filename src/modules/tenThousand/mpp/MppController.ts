import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpp")
export default class MppController {
  @operation({
    summary: "Get Mpp",
  })
  @get()
  static getMpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpp",
  })
  @post("{id}")
  static createMpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
