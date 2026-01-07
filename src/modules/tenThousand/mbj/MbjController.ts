import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbj")
export default class MbjController {
  @operation({
    summary: "Get Mbj",
  })
  @get()
  static getMbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbj",
  })
  @post("{id}")
  static createMbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
