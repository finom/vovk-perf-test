import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfu")
export default class MfuController {
  @operation({
    summary: "Get Mfu",
  })
  @get()
  static getMfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfu",
  })
  @post("{id}")
  static createMfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
