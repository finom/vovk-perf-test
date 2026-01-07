import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgn")
export default class BgnController {
  @operation({
    summary: "Get Bgn",
  })
  @get()
  static getBgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgn",
  })
  @post("{id}")
  static createBgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
