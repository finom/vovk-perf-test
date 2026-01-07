import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wd")
export default class WdController {
  @operation({
    summary: "Get Wd",
  })
  @get()
  static getWd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wd",
  })
  @post("{id}")
  static createWd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
