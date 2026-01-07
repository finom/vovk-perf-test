import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hev")
export default class HevController {
  @operation({
    summary: "Get Hev",
  })
  @get()
  static getHev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hev",
  })
  @post("{id}")
  static createHev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
