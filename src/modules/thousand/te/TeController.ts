import { procedure, prefix, get, post, operation } from "vovk";

@prefix("te")
export default class TeController {
  @operation({
    summary: "Get Te",
  })
  @get()
  static getTe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Te",
  })
  @post("{id}")
  static createTe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
