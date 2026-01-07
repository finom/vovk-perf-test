import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mml")
export default class MmlController {
  @operation({
    summary: "Get Mml",
  })
  @get()
  static getMml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mml",
  })
  @post("{id}")
  static createMml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
