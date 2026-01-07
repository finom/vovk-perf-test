import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxs")
export default class JxsController {
  @operation({
    summary: "Get Jxs",
  })
  @get()
  static getJxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxs",
  })
  @post("{id}")
  static createJxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
