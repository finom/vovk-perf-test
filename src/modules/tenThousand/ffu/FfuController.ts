import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffu")
export default class FfuController {
  @operation({
    summary: "Get Ffu",
  })
  @get()
  static getFfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffu",
  })
  @post("{id}")
  static createFfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
