import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtk")
export default class MtkController {
  @operation({
    summary: "Get Mtk",
  })
  @get()
  static getMtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtk",
  })
  @post("{id}")
  static createMtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
