import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgj")
export default class BgjController {
  @operation({
    summary: "Get Bgj",
  })
  @get()
  static getBgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgj",
  })
  @post("{id}")
  static createBgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
