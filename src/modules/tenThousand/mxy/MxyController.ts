import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxy")
export default class MxyController {
  @operation({
    summary: "Get Mxy",
  })
  @get()
  static getMxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxy",
  })
  @post("{id}")
  static createMxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
