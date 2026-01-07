import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mat")
export default class MatController {
  @operation({
    summary: "Get Mat",
  })
  @get()
  static getMat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mat",
  })
  @post("{id}")
  static createMat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
