import { procedure, prefix, get, post, operation } from "vovk";

@prefix("men")
export default class MenController {
  @operation({
    summary: "Get Men",
  })
  @get()
  static getMen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Men",
  })
  @post("{id}")
  static createMen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
