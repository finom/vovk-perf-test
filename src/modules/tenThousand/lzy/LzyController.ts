import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzy")
export default class LzyController {
  @operation({
    summary: "Get Lzy",
  })
  @get()
  static getLzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzy",
  })
  @post("{id}")
  static createLzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
