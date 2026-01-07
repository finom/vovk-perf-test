import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bll")
export default class BllController {
  @operation({
    summary: "Get Bll",
  })
  @get()
  static getBll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bll",
  })
  @post("{id}")
  static createBll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
