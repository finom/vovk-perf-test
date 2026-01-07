import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mom")
export default class MomController {
  @operation({
    summary: "Get Mom",
  })
  @get()
  static getMom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mom",
  })
  @post("{id}")
  static createMom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
