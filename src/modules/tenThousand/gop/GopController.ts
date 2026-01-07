import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gop")
export default class GopController {
  @operation({
    summary: "Get Gop",
  })
  @get()
  static getGop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gop",
  })
  @post("{id}")
  static createGop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
