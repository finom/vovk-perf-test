import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liy")
export default class LiyController {
  @operation({
    summary: "Get Liy",
  })
  @get()
  static getLiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liy",
  })
  @post("{id}")
  static createLiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
