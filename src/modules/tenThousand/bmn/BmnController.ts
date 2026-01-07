import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmn")
export default class BmnController {
  @operation({
    summary: "Get Bmn",
  })
  @get()
  static getBmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmn",
  })
  @post("{id}")
  static createBmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
