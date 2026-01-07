import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwd")
export default class BwdController {
  @operation({
    summary: "Get Bwd",
  })
  @get()
  static getBwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwd",
  })
  @post("{id}")
  static createBwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
